/* Interaction layer: custom cursor, magnetic controls, hover previews, scroll reveals, parallax, section dots. */
const FX=(()=>{
const q=s=>document.querySelector(s),fine=matchMedia('(hover:hover) and (pointer:fine)').matches,still=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.documentElement.classList.add('js');
const cd=q('#cd'),cr=q('#cr'),lab=cr.firstElementChild,pv=q('#pv'),fa=q('.fogA'),fb=q('.fogB'),dots=q('#dots');
let tx=-100,ty=-100,x=-100,y=-100,px=0,py=0,pt;
/* cursor */
const label=t=>!t?'':t.dataset.cur||(t.matches('canvas')?'Explore':t.matches('summary')?'Toggle':t.matches('.cb,.mn')?'Inspect':t.matches('input')?'Type':t.matches('a.row')?'Open':'');
const mag=e=>{if(still)return;document.querySelectorAll('.mag').forEach(el=>{const r=el.getBoundingClientRect(),dx=e.clientX-r.left-r.width/2,dy=e.clientY-r.top-r.height/2;el.style.transform=Math.hypot(dx,dy)<90?`translate(${dx*.22}px,${dy*.22}px)`:''})};
if(fine){document.body.classList.add('cur');
 addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;cd.style.transform=`translate(${tx}px,${ty}px)`;document.body.style.setProperty('--mx',tx+'px');document.body.style.setProperty('--my',ty+'px');mag(e)},{passive:true});
 (function loop(){x+=(tx-x)*(still?1:.18);y+=(ty-y)*(still?1:.18);cr.style.transform=`translate(${x}px,${y}px)`;requestAnimationFrame(loop)})();
 document.addEventListener('pointerover',e=>{const t=e.target.closest&&e.target.closest('[data-cur],a,button,summary,canvas,input,.cb,.mn');cr.classList.toggle('big',!!t);lab.textContent=label(t)})}
/* hover previews and chart tooltips (tap on touch) */
const show=(t,a,b)=>{pv.textContent=t;pv.style.transform=`translate(${Math.max(8,Math.min(a+16,innerWidth-276))}px,${b+16}px)`;pv.classList.add('on')};
document.addEventListener('pointerover',e=>{const t=e.target.closest&&e.target.closest('[data-pv]');if(t&&e.pointerType==='mouse')show(t.dataset.pv,e.clientX,e.clientY)});
document.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||!pv.classList.contains('on'))return;const t=e.target.closest&&e.target.closest('[data-pv]');t?show(t.dataset.pv,e.clientX,e.clientY):pv.classList.remove('on')});
document.addEventListener('pointerdown',e=>{const t=e.target.closest&&e.target.closest('.cb[data-pv]');if(t&&e.pointerType!=='mouse'){show(t.dataset.pv,e.clientX,e.clientY-70);clearTimeout(pt);pt=setTimeout(()=>pv.classList.remove('on'),2600)}});
document.addEventListener('focusin',e=>{const t=e.target.closest&&e.target.closest('.cb[data-pv]');if(t){const r=t.getBoundingClientRect();show(t.dataset.pv,r.left,r.top-50)}});
document.addEventListener('focusout',()=>pv.classList.remove('on'));
/* parallax fog */
const par=()=>{fa.style.transform=`translate3d(${px*-14}px,${-scrollY*.06+py*-10}px,0)`;fb.style.transform=`translate3d(${px*24}px,${-scrollY*.14+py*18}px,0)`};
if(!still){addEventListener('scroll',par,{passive:true});addEventListener('pointermove',e=>{px=e.clientX/innerWidth-.5;py=e.clientY/innerHeight-.5;par()},{passive:true})}
/* scroll reveals */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
/* section dots */
dots.innerHTML=Object.keys(S).map(k=>`<a href="#/s/${k}" data-cur="${S[k].n}" title="${S[k].n}" aria-label="${S[k].n}"><i></i></a>`).join('');
function after(){const h=location.hash.split('/'),home=!h[1];
 const sec=h[1]==='s'?h[2]:h[1]==='p'?((P.find(p=>p.id===h[2])||{}).s||''):'';
 document.body.dataset.sec=sec;dots.hidden=home;
 [...dots.children].forEach((a,i)=>{const on=Object.keys(S)[i]===sec;a.classList.toggle('on',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});
 document.querySelectorAll('#nav a,.chip').forEach(el=>el.classList.add('mag'));
 document.querySelectorAll('.rv:not(.in),.tl:not(.in)').forEach(el=>still?el.classList.add('in'):io.observe(el))}
return{after}})();
