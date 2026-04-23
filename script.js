function navTo(id,btn){document.getElementById(id).scrollIntoView({behavior:'smooth'});document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');}
function toggleTheme(el){el.classList.toggle('expanded');}
function toggleScript(btn){
  const box=btn.nextElementSibling;
  box.classList.toggle('visible');
  if(box.classList.contains('visible')){
    btn.innerHTML='<svg width="12" height="12"><use href="#ico-eye-off" style="color:#7f8fa6"/></svg>Hide Reply';
  }else{
    btn.innerHTML='<svg width="12" height="12"><use href="#ico-play" style="color:#7f8fa6"/></svg>Show Draft Reply';
  }
}
function filterCards(type,btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.opp-card').forEach(card=>{card.classList.toggle('hidden',type!=='all'&&card.dataset.type!==type);});
}
function acknowledge(id,btn){
  document.getElementById(id).classList.add('acknowledged');
  btn.innerHTML='<svg width="14" height="14" style="vertical-align:middle;margin-right:4px"><use href="#ico-check" style="color:#fff"/></svg>Done';
  btn.disabled=true;
}
function highlightDonut(idx){
  const segs=document.querySelectorAll('.donut-seg');
  segs.forEach((s,i)=>s.style.opacity=i===idx?'1':'0.2');
  setTimeout(()=>segs.forEach(s=>s.style.opacity='1'),2000);
}
const ro=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
const bo=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.bar-inner').forEach(b=>{const w=b.dataset.width;b.style.width='0%';setTimeout(()=>b.style.width=w,150);});bo.unobserve(e.target);}});},{threshold:0.2});
document.querySelectorAll('.theme-list').forEach(el=>bo.observe(el));
const secs=['themes','sentiment','opportunities','danger','strategy'];
window.addEventListener('scroll',()=>{let cur='';secs.forEach(id=>{const el=document.getElementById(id);if(el&&window.scrollY>=el.offsetTop-120)cur=id;});document.querySelectorAll('.nav-btn').forEach((btn,i)=>{btn.classList.toggle('active',secs[i]===cur);});});