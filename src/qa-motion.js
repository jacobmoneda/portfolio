(() => {
  const gallery = document.querySelector('[data-carousel]');
  const next = gallery.querySelector('[data-next]');
  const previous = gallery.querySelector('[data-previous]');
  const slides = [...gallery.querySelectorAll('[data-slide]')];
  const result = document.querySelector('#qa-result');
  const snapshot = () => ({
    position: gallery.querySelector('[data-position]').textContent,
    height: gallery.getBoundingClientRect().height,
    activeAnimations: gallery.getAnimations({subtree:true}).filter(a=>a.playState==='running').length,
    slides: slides.map(s=>({hidden:s.hidden,inert:s.inert,ariaHidden:s.getAttribute('aria-hidden'),opacity:Number(getComputedStyle(s.querySelector('.carousel-frame')).opacity),leaving:s.classList.contains('is-leaving')}))
  });
  const pointerClick = button => {
    button.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true,pointerId:1,isPrimary:true,button:0}));
    button.dispatchEvent(new MouseEvent('click',{bubbles:true,detail:1}));
  };
  const run = keyboard => {
    gallery.dispatchEvent(new KeyboardEvent('keydown',{key:'Home',bubbles:true}));
    const samples=[{at:'start',...snapshot()}];
    result.textContent='running';
    pointerClick(next);
    setTimeout(()=>samples.push({at:'before reversal',...snapshot()}),50);
    setTimeout(()=>{
      if(keyboard) gallery.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowLeft',bubbles:true}));
      else pointerClick(previous);
      samples.push({at:'after reversal',...snapshot()});
    },60);
    if(!keyboard) setTimeout(()=>pointerClick(next),110);
    setTimeout(()=>samples.push({at:'during transition',...snapshot()}),140);
    setTimeout(()=>{samples.push({at:'settled',...snapshot()});result.textContent=JSON.stringify(samples);},450);
  };
  const offscreen = document.createElement('button');
  offscreen.textContent='Run offscreen interruption';
  document.querySelector('aside').append(offscreen);
  offscreen.addEventListener('click',()=>{
    gallery.dispatchEvent(new KeyboardEvent('keydown',{key:'Home',bubbles:true}));
    pointerClick(next);
    const samples=[{at:'started',...snapshot()}];
    setTimeout(()=>{
      samples.push({at:'before scroll',...snapshot()});
      document.documentElement.style.scrollBehavior='auto';
      window.scrollTo(0,document.documentElement.scrollHeight);
    },50);
    setTimeout(()=>{samples.push({at:'offscreen',...snapshot()});result.textContent=JSON.stringify(samples);},100);
  });
  document.querySelector('#qa-rapid').addEventListener('click',()=>run(false));
  document.querySelector('#qa-keyboard').addEventListener('click',()=>run(true));
})();