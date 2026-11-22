/* Neural network: drifting neurons, cursor-reactive synapses, firing pulses. Plain canvas, no dependencies. */
const Net={mount(cv,tip,S,go){
const keys=Object.keys(S),ctx=cv.getContext('2d'),still=matchMedia('(prefers-reduced-motion:reduce)').matches,R=Math.random;
let w,h,N=[],E=[],P=[],ptr=null,sel=null,raf=0,T=0,act=keys.map(()=>0);
function build(){const r=cv.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);w=r.width;h=r.height;cv.width=w*d;cv.height=h*d;ctx.setTransform(d,0,0,d,0,0);N=[];E=[];P=[];const sc=w<500?.7:1;
 keys.forEach((k,c)=>{const cx=S[k].x*w,cy=S[k].y*h;N.push({x0:cx,y0:cy,x:cx,y:cy,c,hub:1,ph:0,sp:0,ax:0,ay:0});const a=N.length-1;
  for(let i=0;i<10;i++){const an=i/10*6.283+c*.7,rr=(30+((i*37+c*11)%34))*sc;N.push({x0:cx+Math.cos(an)*rr,y0:cy+Math.sin(an)*rr,x:0,y:0,c,ph:R()*6.28,sp:.4+R()*.8,ax:3+R()*5,ay:3+R()*5});E.push([a,N.length-1,0]);if(i)E.push([N.length-1,N.length-2,0])}});
 const hb=N.map((n,i)=>n.hub?i:-1).filter(i=>i>=0);[[0,4],[1,4],[2,4],[3,4],[0,1],[2,3]].forEach(([a,b])=>E.push([hb[a],hb[b],1]))}
const touching=(i,c)=>N[E[i][0]].c===c||N[E[i][1]].c===c;
function step(){if(!still)T+=.016;
 N.forEach(n=>{if(n.hub){n.x=n.x0;n.y=n.y0;return}let x=n.x0+Math.sin(T*n.sp+n.ph)*n.ax,y=n.y0+Math.cos(T*n.sp*.8+n.ph)*n.ay;
  if(ptr){const dx=ptr.x-x,dy=ptr.y-y,d=Math.hypot(dx,dy);if(d<120){const f=(1-d/120)*.12;x+=dx*f;y+=dy*f}}n.x=x;n.y=y});
 if(still)return;
 if(R()<(sel!==null?.35:.05)){const c=sel!==null?sel:(R()*keys.length|0),cand=E.map((e,i)=>i).filter(i=>touching(i,c)),i=cand[R()*cand.length|0];
  if(i!==undefined)P.push({e:i,p:0,d:(N[E[i][0]].hub||E[i][2])?1:(R()<.5?1:-1),s:.012+R()*.012})}
 P.forEach(q=>{q.p+=q.s;if(q.p>=1){q.dead=1;const e=E[q.e],end=q.d>0?e[1]:e[0],c=N[end].c;act[c]=Math.min(1,act[c]+.5);
  if(e[2]&&R()<.6){const cand=E.map((x,i)=>i).filter(i=>E[i][2]&&i!==q.e&&touching(i,c)),i=cand[R()*cand.length|0];if(i!==undefined)P.push({e:i,p:0,d:N[E[i][0]].c===c?1:-1,s:.014})}}});
 P=P.filter(q=>!q.dead).slice(-60);act=act.map(a=>a*.96)}
function draw(){ctx.clearRect(0,0,w,h);
 E.forEach(e=>{const a=N[e[0]],b=N[e[1]];let g=Math.max(act[a.c]*.7,act[b.c]*.7,(sel===a.c||sel===b.c)?.55:0);
  if(ptr){const d=Math.hypot(ptr.x-(a.x+b.x)/2,ptr.y-(a.y+b.y)/2);g=Math.max(g,Math.max(0,1-d/110)*.9)}
  ctx.strokeStyle=g>.02?`rgba(183,164,119,${.25+g*.75})`:(e[2]?'rgba(35,59,50,.2)':'rgba(35,59,50,.3)');ctx.lineWidth=e[2]?1.1:.8+g*1.2;
  ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.quadraticCurveTo((a.x+b.x)/2+(a.y-b.y)*.12,(a.y+b.y)/2+(b.x-a.x)*.12,b.x,b.y);ctx.stroke()});
 N.forEach(n=>{const on=sel===n.c,g=act[n.c];ctx.beginPath();ctx.arc(n.x,n.y,n.hub?(on?9:7)+g*3:2.6+g*1.5,0,6.283);
  ctx.fillStyle=n.hub?(on||g>.3?'#B7A477':'#233B32'):(g>.3?'#B7A477':'#879B88');ctx.fill();
  if(n.hub){ctx.lineWidth=1;ctx.strokeStyle=`rgba(183,164,119,${.5+g*.5})`;ctx.beginPath();ctx.arc(n.x,n.y,14+(still?0:Math.sin(T*2+n.c)*2)+g*6,0,6.283);ctx.stroke()}});
 ctx.font=`${w<500?9:11}px "JetBrains Mono",monospace`;ctx.textAlign='center';ctx.lineJoin='round';
 N.forEach(n=>{if(!n.hub)return;const t=S[keys[n.c]].n.replace('The ','').toUpperCase();ctx.lineWidth=4;ctx.strokeStyle='rgba(243,241,232,.9)';ctx.strokeText(t,n.x,n.y+32);ctx.fillStyle='#233B32';ctx.fillText(t,n.x,n.y+32)});
 ctx.fillStyle='#B7A477';P.forEach(q=>{const e=E[q.e],a=N[q.d>0?e[0]:e[1]],b=N[q.d>0?e[1]:e[0]];ctx.beginPath();ctx.arc(a.x+(b.x-a.x)*q.p,a.y+(b.y-a.y)*q.p,2.2,0,6.283);ctx.fill()})}
const redraw=()=>{if(still){step();draw()}};
const pos=e=>{const r=cv.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}};
const hit=p=>{let b=null,bd=w<500?48:58;N.forEach(n=>{if(n.hub){const d=Math.hypot(n.x-p.x,n.y-p.y);if(d<bd){bd=d;b=n.c}}});return b};
const show=c=>{sel=c;if(c===null){tip.hidden=true;redraw();return}act[c]=1;const k=keys[c];tip.hidden=false;tip.innerHTML=`<b>${S[k].n}</b>${S[k].d} <a href="#/s/${k}">Enter →</a>`;redraw()};
cv.onpointermove=e=>{ptr=pos(e);if(e.pointerType==='mouse'){const c=hit(ptr);if(c!==sel)show(c)}redraw()};
cv.onpointerdown=e=>{ptr=pos(e);redraw()};
cv.onpointerup=e=>{if(e.pointerType!=='mouse')setTimeout(()=>{ptr=null;redraw()},700)};
cv.onpointerleave=()=>{ptr=null;redraw()};
cv.onclick=e=>{const c=hit(pos(e));if(c===null)return show(null);if(c===sel)go(keys[c]);else show(c)};
const rs=()=>{build();redraw()};addEventListener('resize',rs);build();
if(still)redraw();else(function loop(){step();draw();raf=requestAnimationFrame(loop)})();
return()=>{cancelAnimationFrame(raf);removeEventListener('resize',rs)}}};
