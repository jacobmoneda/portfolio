const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

// Exercise the production script with a minimal DOM and a deterministic clock.
function setup({ desktop = true, reduced = false, auto = true, hovered = false } = {}) {
  const target = () => {
    const listeners = new Map();
    const attributes = new Map();
    const classes = new Set();
    return {
      dataset: {},
      addEventListener(name, fn) {
        if (!listeners.has(name)) listeners.set(name, []);
        listeners.get(name).push(fn);
      },
      fire(name, event = {}) { for (const fn of listeners.get(name) || []) fn(event); },
      setAttribute(name, value) { attributes.set(name, value); },
      getAttribute(name) { return attributes.get(name); },
      hasAttribute(name) { return attributes.has(name); },
      removeAttribute(name) { attributes.delete(name); },
      classList: {
        add(...names) { names.forEach(name => classes.add(name)); },
        remove(...names) { names.forEach(name => classes.delete(name)); },
        toggle(name, on) { if (on) classes.add(name); else classes.delete(name); },
      },
      querySelector() { return null; }, querySelectorAll() { return []; },
      contains() { return false; }, dispatchEvent() {}, closest() { return null; },
    };
  };
  const carousel = target();
  const slides = [target(), target()];
  slides.forEach((slide, i) => { slide.dataset.slideName = `Slide ${i + 1}`; });
  const controls = target(), position = target(), previous = target(), next = target(), rotation = target();
  rotation.contains = element => element === rotation;
  if (auto) carousel.setAttribute('data-auto-rotate', '');
  carousel.matches = () => hovered;
  carousel.getBoundingClientRect = () => ({ top: 100, bottom: 500 });
  carousel.contains = element => [carousel, previous, next, rotation, ...slides].includes(element);
  carousel.querySelectorAll = selector => selector === '[data-slide]' ? slides : [];
  carousel.querySelector = selector => ({
    '[data-carousel-controls]': controls, '[data-position]': position,
    '[data-previous]': previous, '[data-next]': next,
    '[data-rotation]': rotation,
  })[selector] || null;
  const mediaDesktop = Object.assign(target(), { matches: desktop });
  const mediaReduced = Object.assign(target(), { matches: reduced });
  const document = Object.assign(target(), { documentElement: { dataset: {} }, hidden: false, activeElement: null });
  document.querySelectorAll = selector => selector === '[data-carousel]' ? [carousel] : [];
  let onIntersection;
  const window = Object.assign(target(), {
    innerHeight: 900,
    IntersectionObserver: true,
    matchMedia: query => query.includes('prefers-reduced-motion') ? mediaReduced : mediaDesktop,
  });
  let now = 0, sequence = 0;
  const timers = new Map();
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../src/script.js'), 'utf8'), {
    document, window, Event: class {},
    IntersectionObserver: class { constructor(callback) { onIntersection = callback; } observe() {} },
    getComputedStyle: () => ({ direction: 'ltr' }),
    queueMicrotask: fn => fn(),
    setTimeout(fn, delay) { timers.set(++sequence, { fn, at: now + delay }); return sequence; },
    clearTimeout(id) { timers.delete(id); },
  });
  return {
    carousel, document, window, position, previous, next, rotation, mediaDesktop, mediaReduced,
    current: () => slides.findIndex(slide => !slide.hidden),
    pending: () => timers.size,
    intersect: visible => onIntersection([{ isIntersecting: visible }]),
    tick(ms) {
      const end = now + ms;
      for (;;) {
        const due = [...timers].filter(([, timer]) => timer.at <= end).sort((a, b) => a[1].at - b[1].at)[0];
        if (!due) break;
        const [id, timer] = due;
        now = timer.at; timers.delete(id); timer.fn();
      }
      now = end;
    },
  };
}

test('desktop rotates at 10 seconds and wraps, without live announcements', () => {
  const s = setup();
  s.tick(9999); assert.equal(s.current(), 0);
  s.tick(1); assert.equal(s.current(), 1);
  s.tick(10000); assert.equal(s.current(), 0);
  assert.equal(s.position.getAttribute('aria-live'), 'off');
  assert.equal(s.pending(), 1);
});

test('mobile, reduced motion and galleries without opt-in stay manual', () => {
  for (const options of [{ desktop: false }, { reduced: true }, { auto: false }]) {
    const s = setup(options);
    s.tick(60000); assert.equal(s.current(), 0); assert.equal(s.pending(), 0);
    s.next.fire('click', { detail: 0 }); assert.equal(s.current(), 1);
  }
});

test('hover pauses and leaving grants a fresh ten seconds', () => {
  const s = setup();
  s.tick(9000); s.carousel.fire('pointerenter', { pointerType: 'mouse' });
  s.tick(20000); assert.equal(s.current(), 0);
  s.carousel.fire('pointerleave');
  s.tick(9999); assert.equal(s.current(), 0);
  s.tick(1); assert.equal(s.current(), 1);
  const alreadyHovered = setup({ hovered: true });
  alreadyHovered.tick(20000); assert.equal(alreadyHovered.current(), 0);
});

test('keyboard focus stops rotation until an explicit restart', () => {
  const s = setup();
  s.document.activeElement = s.next; s.carousel.fire('focusin');
  s.tick(30000); assert.equal(s.current(), 0);
  s.document.activeElement = s.previous; s.carousel.fire('focusout');
  s.tick(30000); assert.equal(s.current(), 0);
  s.carousel.fire('pointerenter', { pointerType: 'mouse' });
  s.document.activeElement = null; s.carousel.fire('focusout');
  s.tick(30000); assert.equal(s.current(), 0);
  s.carousel.fire('pointerleave'); s.tick(30000); assert.equal(s.current(), 0);
  assert.equal(s.rotation.textContent, 'Start slideshow');
  s.rotation.fire('click', { detail: 0 });
  s.tick(9999); assert.equal(s.current(), 0);
  s.tick(1); assert.equal(s.current(), 1);
});

test('explicit pause stays stopped, and restart starts one fresh interval', () => {
  const s = setup();
  s.tick(9000);
  s.rotation.fire('pointerdown');
  s.document.activeElement = s.rotation; s.carousel.fire('focusin');
  s.rotation.fire('click', { detail: 1 });
  s.tick(30000); assert.equal(s.current(), 0); assert.equal(s.pending(), 0);
  s.rotation.fire('pointerdown'); s.rotation.fire('click', { detail: 1 });
  assert.equal(s.rotation.textContent, 'Pause slideshow');
  assert.equal(s.pending(), 1);
  s.tick(9999); assert.equal(s.current(), 0);
  s.tick(1); assert.equal(s.current(), 1);
});

test('keyboard restart works from the rotation control without moving focus', () => {
  const s = setup();
  s.document.activeElement = s.rotation; s.carousel.fire('focusin');
  s.carousel.fire('keydown', { key: 'Enter', target: s.rotation });
  s.rotation.fire('click', { detail: 0 });
  s.tick(10000); assert.equal(s.current(), 1);
  s.document.activeElement = s.next; s.carousel.fire('focusin');
  s.tick(30000); assert.equal(s.current(), 1); assert.equal(s.pending(), 0);
});

test('pagehide cancels timing and later events cannot restart an inactive page', () => {
  const s = setup();
  s.tick(9000); s.window.fire('pagehide');
  s.carousel.fire('focusout'); s.mediaDesktop.fire('change'); s.intersect(true);
  s.tick(30000); assert.equal(s.current(), 0); assert.equal(s.pending(), 0);
  s.window.fire('pageshow'); s.window.fire('pageshow');
  assert.equal(s.pending(), 1);
  s.tick(9999); assert.equal(s.current(), 0);
  s.tick(1); assert.equal(s.current(), 1);
});

test('rotation controls are absent from manual-only modes', () => {
  for (const options of [{ desktop: false }, { reduced: true }]) {
    const s = setup(options); assert.equal(s.rotation.hidden, true);
  }
});

test('arrow clicks preserve the chosen slide after hover, focus and resize changes', () => {
  const s = setup();
  s.carousel.fire('click'); s.next.fire('click', { detail: 0 });
  s.carousel.fire('pointerleave'); s.carousel.fire('focusout');
  s.mediaDesktop.matches = false; s.mediaDesktop.fire('change');
  s.mediaDesktop.matches = true; s.mediaDesktop.fire('change');
  s.tick(60000); assert.equal(s.current(), 1); assert.equal(s.pending(), 0);
  assert.equal(s.position.getAttribute('aria-live'), 'polite');
});

test('slide clicks, pointer interaction and keyboard navigation permanently stop rotation', () => {
  for (const event of ['click', 'pointerdown', 'keydown']) {
    const s = setup();
    s.carousel.fire(event, { key: 'ArrowRight', target: s.next, preventDefault() {} });
    const chosen = s.current();
    s.carousel.fire('pointerleave'); s.carousel.fire('focusout');
    s.tick(60000); assert.equal(s.current(), chosen); assert.equal(s.pending(), 0);
  }
});

test('hidden tabs and offscreen galleries pause without catching up on return', () => {
  const s = setup();
  s.tick(9000); s.document.hidden = true; s.document.fire('visibilitychange');
  s.tick(30000); assert.equal(s.current(), 0);
  s.document.hidden = false; s.document.fire('visibilitychange');
  s.tick(9999); assert.equal(s.current(), 0);
  s.tick(1); assert.equal(s.current(), 1);
  s.intersect(false); s.tick(30000); assert.equal(s.current(), 1);
  s.intersect(true); s.tick(10000); assert.equal(s.current(), 0);
});

test('desktop and reduced-motion changes cancel and restart a single timer', () => {
  const s = setup();
  s.mediaDesktop.matches = false; s.mediaDesktop.fire('change');
  s.tick(30000); assert.equal(s.current(), 0);
  s.mediaDesktop.matches = true; s.mediaDesktop.fire('change');
  s.tick(10000); assert.equal(s.current(), 1);
  s.mediaReduced.matches = true; s.mediaReduced.fire('change');
  s.tick(30000); assert.equal(s.current(), 1);
  s.mediaReduced.matches = false; s.mediaReduced.fire('change');
  s.mediaReduced.fire('change'); assert.equal(s.pending(), 1);
  s.tick(10000); assert.equal(s.current(), 0);
});

test('only the homepage gallery opts in', () => {
  const src = path.join(__dirname, '../src');
  assert.equal((fs.readFileSync(path.join(src, 'index.html'), 'utf8').match(/data-auto-rotate/g) || []).length, 1);
  for (const file of fs.readdirSync(path.join(src, 'projects')).filter(name => name.endsWith('.html'))) {
    assert.ok(!fs.readFileSync(path.join(src, 'projects', file), 'utf8').includes('data-auto-rotate'));
  }
});
