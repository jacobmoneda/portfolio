/* Progressive enhancement: content and navigation remain available without JS. */
(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const settleGalleries = new Set();
  // Keyboard/assistive activation stays immediate, including native anchor scrolling.
  const useKeyboard = () => {
    root.dataset.input = "keyboard";
    settleGalleries.forEach((settle) => settle());
  };
  window.addEventListener("keydown", useKeyboard, { capture: true });
  window.addEventListener("pointerdown", () => { root.dataset.input = "pointer"; }, { capture: true, passive: true });
  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) settleGalleries.forEach((settle) => settle());
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) settleGalleries.forEach((settle) => settle());
  });
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = year;
  });
  const header = document.querySelector(".site-header");
  if (header) {
    const themeStorageKey = "portfolio-theme";
    let theme = "dark";
    try {
      if (localStorage.getItem(themeStorageKey) === "light") theme = "light";
    } catch {}
    document.documentElement.dataset.theme = theme;

    const nav = header.querySelector("nav");
    const actions = document.createElement("div");
    actions.className = "header-actions";
    const themeToggle = document.createElement("button");
    themeToggle.type = "button";
    themeToggle.className = "theme-toggle";
    themeToggle.setAttribute("aria-label", "Toggle light and dark theme");
    const themeIcon = document.createElement("span");
    themeIcon.setAttribute("aria-hidden", "true");
    themeToggle.append(themeIcon);
    if (nav) {
      nav.after(actions);
      actions.append(nav, themeToggle);
    }

    const applyTheme = (nextTheme, persist = false) => {
      theme = nextTheme;
      document.documentElement.dataset.theme = theme;
      themeToggle.setAttribute("aria-pressed", String(theme === "light"));
      themeToggle.title = `Switch to ${theme === "light" ? "dark" : "light"} mode`;
      themeIcon.textContent = theme === "light" ? "☾" : "☼";
      if (persist) {
        try {
          localStorage.setItem(themeStorageKey, theme);
        } catch {}
      }
    };
    applyTheme(theme);
    themeToggle.addEventListener("click", () => {
      applyTheme(theme === "light" ? "dark" : "light", true);
    });

    const updateHeader = () =>
      header.classList.toggle("is-compact", window.scrollY > 120);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }
  // Load the external player only after an explicit request to play.
  document.querySelectorAll("[data-video]").forEach((figure) => {
    const stage = figure.querySelector(".video-stage");
    const status = figure.querySelector("[data-video-status]");
    const controls = [];
    const poster = stage.querySelector("img")?.cloneNode(true);
    figure.addEventListener("media:leave", () => {
      if (poster && stage.querySelector("iframe")) stage.replaceChildren(poster.cloneNode(true));
      controls.forEach((control) => {
        if (control.hasAttribute("aria-pressed")) control.setAttribute("aria-pressed", "false");
      });
      status.textContent = "";
    });
    figure.querySelectorAll("[data-video-start]").forEach((link) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = link.className;
      button.innerHTML = link.innerHTML;
      button.setAttribute("aria-controls", stage.id);
      button.setAttribute(
        "aria-label",
        `${link.classList.contains("video-play") ? "Watch demonstration" : link.dataset.videoLabel} — play from ${Number(link.dataset.videoStart)} seconds`,
      );
      const isChapter = Boolean(link.closest(".video-chapters"));
      if (isChapter) button.setAttribute("aria-pressed", "false");
      controls.push(button);
      link.replaceWith(button);
      button.addEventListener("click", () => {
        const player = document.createElement("iframe");
        player.src = `https://www.youtube-nocookie.com/embed/${figure.dataset.video}?start=${link.dataset.videoStart}&autoplay=1&playsinline=1`;
        player.title = "Unitree Go2 demonstration — YouTube video player";
        player.allow =
          "autoplay; encrypted-media; picture-in-picture; fullscreen";
        player.allowFullscreen = true;
        player.referrerPolicy = "strict-origin-when-cross-origin";
        player.tabIndex = 0;
        stage.replaceChildren(player);
        controls.forEach((control) => {
          if (control.hasAttribute("aria-pressed"))
            control.setAttribute("aria-pressed", String(control === button));
        });
        status.textContent = `Requested: ${link.dataset.videoLabel}. If playback is unavailable, use the Watch on YouTube link.`;
        if (!isChapter) player.focus();
      });
    });
  });
  // One manual carousel per gallery. Without JS, every figure stays in the page.
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const slides = [...carousel.querySelectorAll("[data-slide]")];
    const controls = carousel.querySelector("[data-carousel-controls]");
    const position = carousel.querySelector("[data-position]");
    if (slides.length < 2 || !controls || !position) return;
    let current = 0;
    carousel.classList.add("is-ready");
    carousel.setAttribute("aria-roledescription", "carousel");
    carousel.tabIndex = 0;
    slides.forEach((slide, index) => {
      slide.setAttribute("role", "group");
      slide.setAttribute("aria-roledescription", "slide");
      slide.setAttribute("aria-label", `${index + 1} of ${slides.length}: ${slide.dataset.slideName}`);
      slide.hidden = index !== current;
      slide.classList.toggle("is-current", index === current);
      slide.inert = index !== current;
      if (index !== current) slide.setAttribute("aria-hidden", "true");
      // Small gallery images load ahead of a manual change, avoiding an empty slide.
      slide.querySelectorAll("img").forEach((image) => {
        image.loading = "eager";
        image.draggable = false;
      });
    });
    position.setAttribute("aria-label", `1 of ${slides.length}: ${slides[0].dataset.slideName}`);
    controls.hidden = false;
    const settle = () => {
      carousel.classList.remove("is-animated");
      slides.forEach((slide, index) => {
        slide.hidden = index !== current;
        slide.classList.remove("is-leaving");
      });
    };
    settleGalleries.add(settle);
    // Hide outgoing content only after its media has faded. It is inert immediately.
    carousel.addEventListener("transitionend", (event) => {
      if (event.propertyName !== "opacity") return;
      const slide = event.target.closest("[data-slide]");
      if (slide && slide !== slides[current]) {
        slide.hidden = true;
        slide.classList.remove("is-leaving");
      }
    });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) settle();
      }).observe(carousel);
    }
    const show = (next, animate = false) => {
      next = (next + slides.length) % slides.length;
      if (next === current) return;
      const previous = slides[current];
      const incoming = slides[next];
      const frame = incoming.querySelector(".carousel-frame, .video-stage");
      const bounds = carousel.getBoundingClientRect();
      const imagesReady = [...incoming.querySelectorAll("img")].every((image) => image.complete && image.naturalWidth > 0);
      animate = animate && !reducedMotion.matches && !document.hidden && imagesReady
        && bounds.bottom > 0 && bounds.top < window.innerHeight && Boolean(frame);
      if (!animate) settle();
      else {
        carousel.classList.add("is-animated");
        // Reversing mid-fade reuses the live element and its current CSS opacity.
        incoming.hidden = false;
        incoming.classList.add("is-leaving");
        getComputedStyle(frame).opacity;
      }
      if (previous.contains(document.activeElement)) carousel.focus({ preventScroll: true });
      previous.dispatchEvent(new Event("media:leave"));
      previous.querySelectorAll("video").forEach((video) => { video.pause(); });
      previous.classList.remove("is-current");
      previous.classList.toggle("is-leaving", animate);
      previous.hidden = !animate;
      previous.inert = true;
      previous.setAttribute("aria-hidden", "true");
      current = next;
      incoming.hidden = false;
      incoming.inert = false;
      incoming.removeAttribute("aria-hidden");
      incoming.classList.remove("is-leaving");
      incoming.classList.add("is-current");
      position.textContent = `${current + 1} / ${slides.length}`;
      position.setAttribute("aria-label", `${current + 1} of ${slides.length}: ${slides[current].dataset.slideName}`);
    };
    carousel.querySelector("[data-previous]").addEventListener("click", (event) => show(current - 1, event.detail > 0));
    carousel.querySelector("[data-next]").addEventListener("click", (event) => show(current + 1, event.detail > 0));
    carousel.addEventListener("keydown", (event) => {
      if (event.target.closest("video, iframe, input, textarea, select, [contenteditable]")) return;
      const rtl = getComputedStyle(carousel).direction === "rtl";
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        show(current + ((event.key === "ArrowRight") !== rtl ? 1 : -1));
      } else if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        show(event.key === "Home" ? 0 : slides.length - 1);
      }
    });
    let pointerStart;
    carousel.addEventListener("pointerdown", (event) => {
      if (pointerStart || !event.isPrimary || event.button !== 0 || !event.target.closest(".carousel-frame") || event.target.closest("a, button, video, iframe")) return;
      pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
      carousel.setPointerCapture(event.pointerId);
    });
    carousel.addEventListener("pointercancel", () => { pointerStart = undefined; });
    carousel.addEventListener("lostpointercapture", () => { pointerStart = undefined; });
    carousel.addEventListener("pointerup", (event) => {
      if (!pointerStart || event.pointerId !== pointerStart.id) return;
      const dx = event.clientX - pointerStart.x;
      const dy = event.clientY - pointerStart.y;
      pointerStart = undefined;
      if (carousel.hasPointerCapture(event.pointerId)) carousel.releasePointerCapture(event.pointerId);
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        const rtl = getComputedStyle(carousel).direction === "rtl";
        show(current + ((dx < 0) !== rtl ? 1 : -1), true);
      }
    });
  });
  const links = [...document.querySelectorAll("[data-nav]")];
  const sections = links
    .map((link) => document.getElementById(link.dataset.nav))
    .filter(Boolean);
  if (!sections.length) return;
  const markCurrent = (id) => {
    links.forEach((link) => {
      if (link.dataset.nav === id)
        link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  let anchorSection;
  // Pick one section from document order; observer callback order can leave a stale tab.
  const syncScroll = () => {
    // Short bottom sections cannot reach the reading line. Honour a chosen anchor
    // until the visitor resumes scrolling, rather than immediately highlighting Contact.
    if (anchorSection) return markCurrent(anchorSection);
    const readingLine = (header?.getBoundingClientRect().height || 0) + window.innerHeight * 0.2;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= readingLine) current = section;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1];
    }
    markCurrent(current.id);
  };
  let scrollFrame;
  const scheduleScrollSync = () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = undefined;
      syncScroll();
    });
  };
  window.addEventListener("scroll", scheduleScrollSync, { passive: true });
  const resumeScrollTracking = () => { anchorSection = undefined; scheduleScrollSync(); };
  window.addEventListener("resize", resumeScrollTracking);
  window.addEventListener("wheel", resumeScrollTracking, { passive: true });
  window.addEventListener("touchstart", resumeScrollTracking, { passive: true });
  window.addEventListener("keydown", (event) => {
    if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)
      && !event.target.closest("[data-carousel], button, input, textarea, select")) resumeScrollTracking();
  });
  links.forEach((link) => link.addEventListener("click", () => {
    anchorSection = link.dataset.nav;
    markCurrent(anchorSection);
  }));
  const syncHash = () => {
    const target = document.getElementById(location.hash.slice(1));
    const section = target?.closest("#projects, #about, #contact");
    anchorSection = section?.id || (location.hash === "#intro" ? "projects" : undefined);
    if (anchorSection) markCurrent(anchorSection);
    else syncScroll();
  };
  window.addEventListener("hashchange", syncHash);
  window.addEventListener("pageshow", scheduleScrollSync);
  syncHash();
})();
