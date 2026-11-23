/* Homepage network. Neurons grow in; connections you move through get stronger and fade when unused (neuroplasticity). */
const Net={mount(cv,tip,S,go,hud){
const keys=Object.keys(S),ctx=cv.getContext('2d'),R=Math.random,still=matchMedia('(prefers-reduced-motion:reduce)').matches;
let w,h,mob,N=[],E=[],P=[],D=[],ptr=null,sel=null,raf=0,T=still?20:0,act=keys.map(()=>0),made=0,fr=0,px=0,py=0,seen={};
try{seen=JSON.parse(localStorage.getItem('seen')||'{}')}catch(e){}
const vis=k=>seen[k]||0;
const rec=k=>{seen[k]=vis(k)+1;try{localStorage.setItem('seen',JSON.stringify(seen))}catch(e){}};
const add=(x,y,c,hub,b)=>{N.push({x0:x,y0:y,x,y,c,hub,b,f:0,ph:R()*6.28,sp:.4+R()*.7,ax:hub?0:3+R()*5,ay:hub?0:3+R()*5});return N.length-1};
const link=(a,b,kind,base,t0)=>E.push({a,b,kind,base,w:base,t0});
const nearest=(n,k)=>N.map((m,i)=>[i,Math.hypot(m.x0-N[n].x0,m.y0-N[n].y0)]).filter(x=>x[0]!==n).sort((a,b)=>a[1]-b[1]).slice(0,k).map(x=>x[0]);
function build(){const r=cv.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);w=r.width;h=r.height;cv.width=w*d;cv.height=h*d;ctx.setTransform(d,0,0,d,0,0);mob=w<600;
 N=[];E=[];P=[];D=[];made=0;const sc=mob?.62:Math.min(1.1,w/1100)+.2,cxm=w/2,cym=(.26+.31)*h,hubs=[];
 keys.forEach((k,c)=>{const cx=S[k].x*w,cy=(.26+S[k].y*.62)*h,b0=Math.hypot(cx-cxm,cy-cym)/w*2.2,hb=add(cx,cy,c,1,b0),count=mob?9:13;hubs.push(hb);
  for(let i=0;i<count;i++){const an=i/count*6.283+c*.7+R()*.3,rr=(34+R()*58)*sc,n=add(cx+Math.cos(an)*rr,cy+Math.sin(an)*rr,c,0,b0+.5+R()*1.2);
   link(hb,n,0,.16+Math.min(.5,vis(k)*.1),N[n].b-.3);if(i)link(n,n-1,0,.1,N[n].b)}});
 [[0,4],[1,4],[2,4],[3,4],[0,1],[2,3]].forEach(([a,b])=>link(hubs[a],hubs[b],1,.3+Math.min(.45,.1*(vis(keys[a])+vis(keys[b]))),Math.max(N[hubs[a]].b,N[hubs[b]].b)));
 for(let i=0;i<(mob?22:42);i++){const n=add(R()*w,h*(.1+R()*.88),-1,0,R()*3.5);nearest(n,2).forEach(m=>link(n,m,2,.06,N[n].b))}
 for(let i=0;i<48;i++)D.push({x:R()*w,y:R()*h,z:.2+R()*.8,s:R()*6.28})}
const pulse=(e,d)=>{if(P.length<70)P.push({e,p:0,d,s:.012+R()*.012})};
const touching=c=>E.filter(e=>e.kind<2&&(N[e.a].c===c||N[e.b].c===c));
function step(){if(!still)T+=.016;fr++;const rad=mob?90:120;
 if(ptr){px=ptr.x/w-.5;py=ptr.y/h-.5}
 N.forEach(n=>{if(n.hub){n.x=n.x0;n.y=n.y0}else{n.x=n.x0+Math.sin(T*n.sp+n.ph)*n.ax;n.y=n.y0+Math.cos(T*n.sp*.8+n.ph)*n.ay}
  n.f*=.93;if(ptr){const d=Math.hypot(ptr.x-n.x,ptr.y-n.y);if(d<rad){n.f=Math.max(n.f,1-d/rad);if(!n.hub){n.x+=(ptr.x-n.x)*.06*n.f;n.y+=(ptr.y-n.y)*.06*n.f}}}});
 E.forEach(e=>{const a=N[e.a],b=N[e.b];if(a.f>.15&&b.f>.15)e.w=Math.min(1,e.w+.045*(a.f+b.f));else e.w+=(e.base-e.w)*.0016});
 if(!still&&T>2){const c=sel!==null?sel:(R()*keys.length|0);if(R()<(sel!==null?.4:.06)){const l=touching(c),e=l[R()*l.length|0];if(e)pulse(e,(N[e.a].hub||e.kind)?1:(R()<.5?1:-1))}
  if(ptr&&R()<.3){const l=E.filter(e=>N[e.a].f>.3||N[e.b].f>.3),e=l[R()*l.length|0];if(e)pulse(e,N[e.a].f>=N[e.b].f?1:-1)}}
 P.forEach(q=>{q.p+=q.s;if(q.p>=1){q.dead=1;const e=q.e,end=q.d>0?e.b:e.a,c=N[end].c;e.w=Math.min(1,e.w+.07);if(c>=0){act[c]=Math.min(1,act[c]+.5);
  if(e.kind===1&&R()<.6){const l=touching(c).filter(x=>x.kind===1&&x!==e),n=l[R()*l.length|0];if(n)pulse(n,N[n.a].c===c?1:-1)}}}});
 P=P.filter(q=>!q.dead);act=act.map(a=>a*.96);
 if(hud&&fr%15===1)hud.textContent=`${N.length} neurons · ${E.filter(e=>e.w>.4).length} strong connections · visited ${keys.filter(k=>vis(k)).length} of ${keys.length}`}
const cl=(v,a,b)=>Math.max(a,Math.min(b,v));
function draw(){ctx.clearRect(0,0,w,h);
 D.forEach(p=>{if(!still){p.x+=Math.sin(T*.3+p.s)*.15*p.z;p.y-=.06*p.z;if(p.y<0)p.y=h}const x=(p.x-px*40*p.z+w)%w,y=p.y-py*30*p.z;ctx.fillStyle=p.s>5?`rgba(183,164,119,${.35*p.z})`:`rgba(35,59,50,${.16*p.z})`;ctx.beginPath();ctx.arc(x,y,1+p.z*1.3,0,6.283);ctx.fill()});
 E.forEach(e=>{const g=cl((T-e.t0)/.9,0,1);if(g<=0)return;const a=N[e.a],b=N[e.b],t=e.w;
  ctx.strokeStyle=`rgba(${35+148*t|0},${59+105*t|0},${50+69*t|0},${.1+.75*t})`;ctx.lineWidth=.5+t*2.8;ctx.beginPath();ctx.moveTo(a.x,a.y);
  if(g<1)ctx.lineTo(a.x+(b.x-a.x)*g,a.y+(b.y-a.y)*g);else ctx.quadraticCurveTo((a.x+b.x)/2+(a.y-b.y)*.12,(a.y+b.y)/2+(b.x-a.x)*.12,b.x,b.y);ctx.stroke()});
 N.forEach(n=>{const s0=cl((T-n.b)/.7,0,1),s=s0*(2-s0),on=sel===n.c&&n.hub;if(s<=0)return;ctx.beginPath();ctx.arc(n.x,n.y,(n.hub?7:2.4)*s+n.f*3,0,6.283);
  ctx.fillStyle=n.hub?(on||n.f>.4?'#B7A477':'#233B32'):(n.f>.3?'#B7A477':n.c<0?'#B8C5B5':'#879B88');ctx.fill();
  if(n.hub){ctx.lineWidth=1;ctx.strokeStyle=`rgba(183,164,119,${.5+act[n.c]*.5})`;ctx.beginPath();ctx.arc(n.x,n.y,(15+(still?0:Math.sin(T*2+n.c)*2)+act[n.c]*6)*s,0,6.283);ctx.stroke()}});
 ctx.font=`${mob?11:13}px "JetBrains Mono",monospace`;ctx.textAlign='center';ctx.lineJoin='round';
 N.forEach(n=>{if(!n.hub||T<n.b+.5)return;const t=S[keys[n.c]].n.toUpperCase(),y=n.y+34;ctx.lineWidth=4;ctx.strokeStyle='rgba(243,241,232,.9)';ctx.strokeText(t,n.x,y);ctx.fillStyle=vis(keys[n.c])?'#6e5f35':'#233B32';ctx.fillText(t,n.x,y);
  if(sel===n.c){ctx.fillStyle='#B7A477';ctx.fillRect(n.x-ctx.measureText(t).width/2,y+5,ctx.measureText(t).width,2)}});
 ctx.fillStyle='#B7A477';P.forEach(q=>{const e=q.e,a=N[q.d>0?e.a:e.b],b=N[q.d>0?e.b:e.a];ctx.beginPath();ctx.arc(a.x+(b.x-a.x)*q.p,a.y+(b.y-a.y)*q.p,2.3,0,6.283);ctx.fill()})}
const redraw=()=>{if(still){step();draw()}};
const pos=e=>{const r=cv.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}};
const hit=p=>{let b=null,bd=mob?56:62;N.forEach(n=>{if(n.hub){const d=Math.hypot(n.x-p.x,n.y-p.y);if(d<bd){bd=d;b=n.c}}});return b};
const show=c=>{sel=c;if(c===null){tip.hidden=true;redraw();return}act[c]=1;const k=keys[c];tip.hidden=false;tip.innerHTML=`<b>${S[k].n}</b>${S[k].d} <a href="#/s/${k}">Enter →</a>`;redraw()};
const grow=p=>{if(made>=24)return;made++;const n=add(p.x,p.y,-1,0,T);nearest(n,3).forEach(m=>{if(Math.hypot(N[m].x-p.x,N[m].y-p.y)<260)link(n,m,2,.4,T)});redraw()};
tip.onclick=e=>{const a=e.target.closest('a');if(a)rec(a.getAttribute('href').split('/')[2])};
cv.onpointermove=e=>{ptr=pos(e);if(e.pointerType==='mouse'){const c=hit(ptr);if(c!==sel)show(c)}redraw()};
cv.onpointerdown=e=>{ptr=pos(e);redraw()};
cv.onpointerup=e=>{if(e.pointerType!=='mouse')setTimeout(()=>{ptr=null;redraw()},700)};
cv.onpointerleave=()=>{ptr=null;redraw()};
cv.onclick=e=>{const p=pos(e),c=hit(p);if(c===null){show(null);grow(p);return}if(c===sel){rec(keys[c]);go(keys[c])}else show(c)};
const rs=()=>{build();redraw()};addEventListener('resize',rs);build();
if(still)redraw();else(function loop(){step();draw();raf=requestAnimationFrame(loop)})();
return()=>{cancelAnimationFrame(raf);removeEventListener('resize',rs)}}};
