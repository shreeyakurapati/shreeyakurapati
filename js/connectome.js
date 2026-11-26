/* Connectome (#/connectome): the whole site as a brain-shaped network. Nodes come from content.js (P, S).
   Big dots = major projects, small dots = other experiences, rings = ideas and skills. Lines join related things. */
const Conn={cache:null,mount(stage){
const esc=x=>String(x).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const still=matchMedia('(prefers-reduced-motion:reduce)').matches,W0=1000,H0=700;
const SEC={research:'#233B32',community:'#B7A477',projects:'#879B88',writing:'#B8C5B5'};
const MAJOR=new Set(['rbc','swarm','igem','sra','retina','forrest','synapse','service','silver','ai4m','rubberduck','lastguest']);
const SKILL=new Set(['coding','image analysis','wiki','editing','entrepreneurship']);
const brain=new Path2D('M170 390 C110 330 120 210 220 150 C300 95 400 85 480 105 C560 70 700 70 790 140 C890 200 925 320 880 400 C850 460 790 475 750 470 C735 545 680 600 615 575 C590 530 555 510 515 525 C470 585 395 605 335 565 C300 530 300 490 262 478 C205 475 180 440 170 390 Z');
const sulci=['M300 200 C360 170 420 200 470 175','M520 150 C580 190 650 150 720 190','M250 320 C330 290 400 340 470 310 C540 280 610 330 700 300','M400 420 C470 390 540 430 620 400 C690 380 740 410 800 390','M560 230 C600 260 580 300 620 330'].map(p=>new Path2D(p));
const lc=document.createElement('canvas').getContext('2d'),inside=(x,y)=>lc.isPointInPath(brain,x,y);
const rng=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};

function build(){
 const nodes=[],by={},E=[],seen=new Set(),R=rng(11);
 P.forEach(p=>{const n={id:'p:'+p.id,type:'p',p,name:p.t,major:MAJOR.has(p.id),col:SEC[p.s],nb:[]};n.r=n.major?13:8;nodes.push(n);by[n.id]=n});
 [...new Set(P.flatMap(p=>p.tags))].forEach(t=>{const n={id:'t:'+t,type:'t',name:t,kind:SKILL.has(t)?'Skill':'Idea',nb:[],r:4.5};nodes.push(n);by[n.id]=n});
 const link=(a,b,k)=>{if(!a||!b||a===b)return;const key=[a.id,b.id].sort().join('|');if(seen.has(key))return;seen.add(key);E.push({a,b,k,s:E.length%2?.14:-.14});a.nb.push(b);b.nb.push(a)};
 P.forEach(p=>p.rel.forEach(r=>link(by['p:'+p.id],by['p:'+r],'rel')));
 P.forEach(p=>p.tags.forEach(t=>link(by['p:'+p.id],by['t:'+t],'tag')));
 const order=[...nodes].sort((a,b)=>(b.major-a.major)||((b.type==='p')-(a.type==='p')));
 order.forEach(n=>{for(let tr=0;tr<500&&n.x===undefined;tr++){const x=130+R()*790,y=80+R()*520;if(!inside(x,y))continue;
   const md=n.major?92:n.type==='p'?70:46-tr/25;if(nodes.every(m=>m===n||m.x===undefined||Math.hypot(m.x-x,m.y-y)>md)){n.x=x;n.y=y}}
  while(n.x===undefined){const x=130+R()*790,y=80+R()*520;if(inside(x,y)){n.x=x;n.y=y}}});
 for(let it=0;it<320;it++)for(const a of nodes){let fx=0,fy=0;
  for(const b of nodes){if(a===b)continue;const dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy)||1,f=2000/(d*d);fx+=dx/d*f;fy+=dy/d*f}
  E.forEach(e=>{if(e.a!==a&&e.b!==a)return;const b=e.a===a?e.b:e.a,dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1,f=(d-(e.k==='rel'?120:70))*.008;fx+=dx/d*f;fy+=dy/d*f});
  const nx=a.x+Math.max(-4,Math.min(4,fx)),ny=a.y+Math.max(-4,Math.min(4,fy));if(inside(nx,ny)){a.x=nx;a.y=ny}}
 return{nodes,E,by}}
const G=Conn.cache||(Conn.cache=build()),{nodes,E}=G;

stage.innerHTML=`<canvas id="cc" role="img" aria-label="Brain-shaped network of my work. Use the list of buttons that follows, or drag, zoom and click."></canvas><ul class="sr" id="clist"></ul>
<div class="cgl"><span class="k"><i style="background:${SEC.research}"></i>Research</span><span class="k"><i style="background:${SEC.community}"></i>Community</span><span class="k"><i style="background:${SEC.projects}"></i>Projects</span><span class="k"><i style="background:${SEC.writing}"></i>Writing</span><span class="k"><i style="background:#F3F1E8;border-width:2px"></i>Idea or skill</span><p>Big dots are major projects. Lines join related things. Scroll or pinch to zoom in for more detail, and click a dot to open it.</p></div>
<div class="cgc"><button class="chip" id="czi" aria-label="Zoom in">+</button><button class="chip" id="czo" aria-label="Zoom out">−</button><button class="chip" id="czr">Reset</button></div>
<aside id="cpanel" hidden tabindex="-1"><button class="chip x" id="cx" aria-label="Close">Close</button><div id="cbody"></div></aside>`;
const cv=stage.querySelector('#cc'),ctx=cv.getContext('2d'),panel=stage.querySelector('#cpanel'),body=stage.querySelector('#cbody');
let W,H,dpr,cam={x:0,y:0,z:1},tgt=null,sel=null,hover=null,raf=0;
const base=()=>Math.min(W/W0,H/H0)*.92,scale=()=>base()*cam.z;
const toW=(sx,sy)=>{const s=scale();return[(sx-W/2-cam.x)/s+500,(sy-H/2-cam.y)/s+350]};
function size(){W=stage.clientWidth;H=stage.clientHeight;dpr=Math.min(devicePixelRatio||1,2);cv.width=W*dpr;cv.height=H*dpr}
const rel=e=>{const r=cv.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]};
function nodeAt(sx,sy){const[wx,wy]=toW(sx,sy),s=scale();let best=null,bd=1e9;
 nodes.forEach(n=>{const d=Math.hypot(n.x-wx,n.y-wy);if(d<Math.max(n.r*1.5,16/s)&&d<bd){best=n;bd=d}});return best}
function draw(now){
 if(tgt){if(still){cam={...tgt};tgt=null}else{cam.x+=(tgt.x-cam.x)*.12;cam.y+=(tgt.y-cam.y)*.12;cam.z+=(tgt.z-cam.z)*.12;if(Math.abs(tgt.x-cam.x)+Math.abs(tgt.y-cam.y)+Math.abs(tgt.z-cam.z)<.5)tgt=null}}
 ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);const s=scale();
 ctx.save();ctx.translate(W/2+cam.x,H/2+cam.y);ctx.scale(s,s);ctx.translate(-500,-350);
 ctx.lineWidth=2/s;ctx.strokeStyle='rgba(35,59,50,.35)';ctx.fillStyle='rgba(135,155,136,.12)';ctx.fill(brain);ctx.stroke(brain);
 ctx.lineWidth=1.5/s;ctx.strokeStyle='rgba(35,59,50,.12)';sulci.forEach(p=>ctx.stroke(p));
 const act=sel||hover;
 E.forEach(e=>{const on=act&&(e.a===act||e.b===act),dx=e.b.x-e.a.x,dy=e.b.y-e.a.y;
  ctx.strokeStyle=on?'rgba(138,119,71,.95)':e.k==='rel'?'rgba(35,59,50,.28)':'rgba(135,155,136,.2)';ctx.lineWidth=(on?2.2:e.k==='rel'?1.2:.8)/s;
  ctx.beginPath();ctx.moveTo(e.a.x,e.a.y);ctx.quadraticCurveTo((e.a.x+e.b.x)/2-dy*e.s,(e.a.y+e.b.y)/2+dx*e.s,e.b.x,e.b.y);ctx.stroke()});
 nodes.forEach(n=>{const hot=n===act||(act&&act.nb.includes(n)),tag=n.type==='t',pulse=n.major&&!still?(Math.sin(now/900+n.x)+1)/2:0;
  ctx.fillStyle=(tag?'rgba(135,155,136,':'rgba(183,164,119,')+(hot?'.4)':'.16)');ctx.beginPath();ctx.arc(n.x,n.y,n.r*(2+pulse*.5),0,6.3);ctx.fill();
  ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,6.3);
  if(tag){ctx.fillStyle='#F3F1E8';ctx.fill();ctx.lineWidth=1.8/s;ctx.strokeStyle='#233B32';ctx.stroke()}
  else{ctx.fillStyle=n.col;ctx.fill();ctx.lineWidth=1.2/s;ctx.strokeStyle='#233B32';ctx.stroke()}
  if(n===sel){ctx.lineWidth=2/s;ctx.strokeStyle='#233B32';ctx.beginPath();ctx.arc(n.x,n.y,n.r+5,0,6.3);ctx.stroke()}
  if(n.major||(n.type==='p'&&cam.z>1.3)||cam.z>1.9||hot){
   const fs=(n.major?14:12)/s;ctx.textAlign='center';ctx.font=`${n.major?600:400} ${fs}px Fraunces,Georgia,serif`;ctx.lineWidth=3/s;ctx.lineJoin='round';ctx.strokeStyle='rgba(243,241,232,.92)';
   let y=n.y+n.r+fs*1.2;ctx.strokeText(n.name,n.x,y);ctx.fillStyle=hot?'#6e5f35':'#233B32';ctx.fillText(n.name,n.x,y);
   if(cam.z>2.6){const f2=fs*.78,sub=n.type==='p'?S[n.p.s].n:n.kind;ctx.font=`${f2}px "JetBrains Mono",monospace`;y+=f2*1.4;ctx.strokeText(sub,n.x,y);ctx.fillStyle='#4a6355';ctx.fillText(sub,n.x,y)}
   if(cam.z>3.4&&n.type==='p'){const f2=fs*.78,t=n.p.d.length>64?n.p.d.slice(0,62)+'…':n.p.d;ctx.font=`${f2}px Inter,system-ui,sans-serif`;y+=f2*1.5;ctx.strokeText(t,n.x,y);ctx.fillStyle='#3d5448';ctx.fillText(t,n.x,y)}}});
 ctx.restore();raf=requestAnimationFrame(draw)}
function zoomAt(sx,sy,z){z=Math.max(.6,Math.min(6,z));tgt=null;const[wx,wy]=toW(sx,sy);cam.z=z;const s=scale();cam.x=sx-W/2-(wx-500)*s;cam.y=sy-H/2-(wy-350)*s}
function focusOn(n){const z=Math.max(cam.z,1.8),b=base()*z,wide=W>700;tgt={x:-(n.x-500)*b-(wide?170:0),y:-(n.y-350)*b-(wide?0:H*.18),z}}
function select(n){sel=n;let h='';
 if(n.type==='p'){const p=n.p;h=`<span class="mono gold">${esc(S[p.s].n)}</span><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p><div class="meta">${p.meta.map(m=>`<span>${esc(m)}</span>`).join('')}</div><p><a class="chip" href="#/p/${p.id}">Open the page →</a></p>`}
 else{const ps=P.filter(p=>p.tags.includes(n.name));h=`<span class="mono gold">${n.kind}</span><h3>${esc(n.name)}</h3><p>Appears in ${ps.length} project${ps.length>1?'s':''}:</p><div class="chips" style="justify-content:flex-start">${ps.map(p=>`<a class="chip" href="#/p/${p.id}">${esc(p.t)}</a>`).join('')}</div>`}
 h+=`<p class="mono gold" style="margin-top:16px">Connected to</p><div class="chips" id="cnb" style="justify-content:flex-start"></div>`;
 body.innerHTML=h;const box=body.querySelector('#cnb');
 n.nb.forEach(m=>{const b=document.createElement('button');b.className='chip';b.textContent=m.name;b.onclick=()=>select(m);box.appendChild(b)});
 panel.hidden=false;focusOn(n)}
const close=()=>{sel=null;panel.hidden=true};
stage.querySelector('#cx').onclick=close;
const key=e=>{if(e.key==='Escape')close()};addEventListener('keydown',key);
stage.querySelector('#czi').onclick=()=>zoomAt(W/2,H/2,cam.z*1.4);
stage.querySelector('#czo').onclick=()=>zoomAt(W/2,H/2,cam.z/1.4);
stage.querySelector('#czr').onclick=()=>{close();tgt={x:0,y:0,z:1}};
const ptrs=new Map();let drag=false,d0=1,z0=1;
cv.addEventListener('pointerdown',e=>{cv.setPointerCapture(e.pointerId);ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY});drag=false;tgt=null;
 if(ptrs.size===2){const[a,b]=[...ptrs.values()];d0=Math.hypot(a.x-b.x,a.y-b.y)||1;z0=cam.z}});
cv.addEventListener('pointermove',e=>{const p=ptrs.get(e.pointerId);
 if(!p){hover=nodeAt(...rel(e));return}
 if(ptrs.size===1){if(Math.hypot(e.clientX-p.sx,e.clientY-p.sy)>5)drag=true;if(drag){cam.x+=e.clientX-p.x;cam.y+=e.clientY-p.y}}
 p.x=e.clientX;p.y=e.clientY;
 if(ptrs.size===2){const[a,b]=[...ptrs.values()],r=cv.getBoundingClientRect();drag=true;zoomAt((a.x+b.x)/2-r.left,(a.y+b.y)/2-r.top,z0*Math.hypot(a.x-b.x,a.y-b.y)/d0)}});
cv.addEventListener('pointerup',e=>{const p=ptrs.get(e.pointerId);ptrs.delete(e.pointerId);
 if(p&&!drag&&ptrs.size===0){const n=nodeAt(...rel(e));if(n)select(n);else if(sel)close()}});
cv.addEventListener('pointercancel',e=>ptrs.delete(e.pointerId));
cv.addEventListener('pointerleave',()=>{hover=null});
cv.addEventListener('wheel',e=>{e.preventDefault();const[x,y]=rel(e);zoomAt(x,y,cam.z*Math.exp(-e.deltaY*.0015))},{passive:false});
const list=stage.querySelector('#clist');
nodes.forEach(n=>{const li=document.createElement('li'),b=document.createElement('button');b.textContent=n.name+', '+(n.type==='p'?S[n.p.s].n:n.kind);b.onclick=()=>select(n);li.appendChild(b);list.appendChild(li)});
addEventListener('resize',size);size();raf=requestAnimationFrame(draw);
return()=>{cancelAnimationFrame(raf);removeEventListener('resize',size);removeEventListener('keydown',key)}}};
