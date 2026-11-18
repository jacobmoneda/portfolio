const gallery = document.querySelector('[data-carousel]');
const next = gallery.querySelector('[data-next]');
const prev = gallery.querySelector('[data-previous]');
const result = document.querySelector('#qa-result');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const click = button => button.dispatchEvent(new MouseEvent('click', {bubbles:true, detail:1}));
const key = key => gallery.dispatchEvent(new KeyboardEvent('keydown', {bubbles:true, key}));
const state = () => ({position:gallery.querySelector('[data-position]').textContent,
  height:gallery.getBoundingClientRect().height,
  slides:[...gallery.querySelectorAll('[data-slide]')].map(slide=>({hidden:slide.hidden,inert:slide.inert,
    current:slide.classList.contains('is-current'),leaving:slide.classList.contains('is-leaving'),
    opacity:getComputedStyle(slide.querySelector('.carousel-frame')).opacity})),
  animations:gallery.getAnimations({subtree:true}).length});
document.querySelector('#qa-run').addEventListener('click',async()=>{
  result.textContent='running';
  gallery.scrollIntoView({behavior:'instant',block:'center'});
  await sleep(150);
  const records=[];
  const reset=async()=>{key('Home');document.documentElement.dataset.input='pointer';await sleep(40);};
  await reset(); records.push({test:'initial',...state()});
  click(next);click(prev);await sleep(350);records.push({test:'same-frame reversal',...state()});
  await reset(); click(next);await sleep(60);records.push({test:'mid-fade',...state()});
  click(prev);await sleep(50);click(next);await sleep(350);records.push({test:'rapid reversal',...state()});
  await reset();click(next);await sleep(40);key('Home');records.push({test:'keyboard interruption',...state()});
  key('End');records.push({test:'keyboard End',...state()});key('ArrowRight');records.push({test:'keyboard wrap',...state()});
  await reset();click(next);await sleep(40);window.scrollTo({top:document.body.scrollHeight,behavior:'instant'});await sleep(100);records.push({test:'offscreen',...state()});
  gallery.scrollIntoView({behavior:'instant',block:'center'});await sleep(150);
  result.textContent=JSON.stringify(records);
});

document.addEventListener('pointerdown',event=>{
  const button=event.target.closest('button');
  if(!button || button.id==='qa-run') return;
  setTimeout(()=>{document.querySelector('#qa-result').textContent=JSON.stringify({press:button.getAttribute('aria-label'),transform:getComputedStyle(button).transform,duration:getComputedStyle(button).transitionDuration});},80);
});
