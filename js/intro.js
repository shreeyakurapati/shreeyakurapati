/* Nerve-signal intro: a signal runs down an axon, vesicles release across the synapse, and the name appears as it reaches the next neuron.
   Plays once per browser session, waits for the page to load, and click or any key skips it. */
(function(){
  var seen=false;try{seen=sessionStorage.getItem("introSeen")}catch(e){}
  if(seen)return;
  var calm=matchMedia("(prefers-reduced-motion:reduce)").matches,NAME="Shreeya Kurapati";
  var css="#nl{position:fixed;inset:0;z-index:200;background:#F3F1E8;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;transition:opacity .7s;cursor:pointer}"+
  "#nl.out{opacity:0;pointer-events:none}#nl svg{width:min(94vw,840px);height:auto;overflow:visible}"+
  "#nl .nm{font:600 clamp(1.9rem,7vw,3.4rem)/1.1 var(--serif,Georgia,serif);color:#233B32;height:1.2em;white-space:nowrap}"+
  "#nl .sk{position:absolute;bottom:1.2rem;font:12px var(--mono,monospace);letter-spacing:.06em;text-transform:uppercase;color:#4a6355}";
  var svg='<svg viewBox="0 0 800 230" aria-hidden="true">'+
  '<g stroke="#879B88" stroke-width="2" fill="none" stroke-linecap="round" opacity=".75">'+
  '<path d="M92 120 L60 95 L40 80 M92 125 L50 125 M92 138 L58 165 L38 180 M100 148 L84 178"/>'+
  '<path d="M712 120 L750 95 M716 130 L760 130 M712 140 L748 168"/></g>'+
  '<line x1="132" y1="130" x2="468" y2="130" stroke="#879B88" stroke-width="3"/>'+
  '<line x1="562" y1="130" x2="664" y2="130" stroke="#879B88" stroke-width="3"/>'+
  '<circle id="na" cx="110" cy="130" r="22" fill="#DADBD2" stroke="#233B32" stroke-width="2"/>'+
  '<g id="my" stroke="#879B88" stroke-width="2"><rect x="165" y="120" width="60" height="20" rx="10"/><rect x="240" y="120" width="60" height="20" rx="10"/><rect x="315" y="120" width="60" height="20" rx="10"/><rect x="390" y="120" width="60" height="20" rx="10"/></g>'+
  '<ellipse cx="490" cy="130" rx="24" ry="22" fill="#DADBD2" stroke="#233B32" stroke-width="2"/>'+
  '<g id="ve" fill="#B7A477"></g>'+
  '<path d="M560 100 Q548 130 560 160" stroke="#879B88" stroke-width="3" fill="none"/>'+
  '<g id="re" fill="#879B88"><circle cx="557" cy="112" r="4"/><circle cx="553" cy="130" r="4"/><circle cx="557" cy="148" r="4"/></g>'+
  '<circle id="nb" cx="690" cy="130" r="28" fill="#DADBD2" stroke="#233B32" stroke-width="2"/>'+
  '<circle id="sg" r="14" fill="#B7A477" opacity="0"/><circle id="sc" r="6" fill="#233B32" opacity="0"/></svg>';
  var el=document.createElement("div");el.id="nl";el.setAttribute("role","status");el.setAttribute("aria-label","Loading "+NAME);
  el.innerHTML="<style>"+css+"</style>"+svg+'<div class="nm"></div><div class="sk">Click to skip</div>';
  function mount(){document.body.appendChild(el);start()}
  if(document.body)mount();else document.addEventListener("DOMContentLoaded",mount);
  function start(){
    document.documentElement.style.overflow="hidden";
    var q=function(s){return el.querySelector(s)},nm=q(".nm"),sg=q("#sg"),sc=q("#sc"),nb=q("#nb");
    var my=[].slice.call(q("#my").children),re=[].slice.call(q("#re").children),ve=q("#ve"),ns="http://www.w3.org/2000/svg",vs=[];
    for(var i=0;i<6;i++){var c=document.createElementNS(ns,"circle"),x=478+(i%3)*10,y=118+Math.floor(i/3)*24;
      c.setAttribute("r",4);c.setAttribute("cx",x);c.setAttribute("cy",y);ve.appendChild(c);vs.push({c:c,x:x,y:y,tx:534+(i%3)*7,ty:108+i*9})}
    var letters=NAME.split("").map(function(ch){var s=document.createElement("span");s.textContent=ch===" "?"\u00a0":ch;s.setAttribute("aria-hidden","true");nm.appendChild(s);return s});
    var G=[183,164,119],F=[218,219,210];
    function mix(k){k=Math.max(0,Math.min(1,k));return"rgb("+[0,1,2].map(function(j){return Math.round(F[j]+(G[j]-F[j])*k)})+")"}
    var cl=function(v){return Math.max(0,Math.min(1,v))},ease=function(u){return u*u*(3-2*u)};
    function frame(t){
      var p1=cl((t-300)/1300),p3=cl((t-2650)/750),x=0,vis=0;
      if(p1>0&&p1<1){x=132+p1*336;vis=1}
      if(p3>0&&p3<1){x=562+p3*102;vis=1}
      sg.setAttribute("cx",x);sg.setAttribute("cy",130);sc.setAttribute("cx",x);sc.setAttribute("cy",130);
      sg.setAttribute("opacity",vis*.3);sc.setAttribute("opacity",vis);
      my.forEach(function(r,i){var cx=195+i*75;r.setAttribute("fill",mix(p1>0&&p1<1?1-Math.abs(x-cx)/80:0))});
      q("#na").setAttribute("fill",mix(1-cl((t-300)/600)));
      vs.forEach(function(v,i){var u=cl((t-1600-i*90)/700),e=ease(u);
        v.c.setAttribute("cx",v.x+(v.tx-v.x)*e);v.c.setAttribute("cy",v.y+(v.ty-v.y)*e);
        v.c.setAttribute("opacity",u>.8?1-(u-.8)/.2:1)});
      re.forEach(function(r,i){r.setAttribute("fill",t>2300+i*120?"#B7A477":"#879B88")});
      nb.setAttribute("fill",mix((t-3400)/400));
      letters.forEach(function(s,j){s.style.opacity=cl((t-3450-j*55)/180)});
    }
    var done=false;
    function finish(){if(done)return;done=true;try{sessionStorage.setItem("introSeen","1")}catch(e){}
      el.classList.add("out");document.documentElement.style.overflow="";setTimeout(function(){el.remove()},800)}
    el.addEventListener("click",finish);addEventListener("keydown",finish,{once:true});
    var loaded=document.readyState==="complete"?Promise.resolve():new Promise(function(r){addEventListener("load",r)});
    var anim;
    if(calm){frame(9999);anim=new Promise(function(r){setTimeout(r,900)})}
    else anim=new Promise(function(r){var t0=performance.now();(function loop(n){var t=n-t0;frame(t);if(t<5000&&!done)requestAnimationFrame(loop);else r()})(t0)});
    Promise.all([anim,loaded]).then(finish);
  }
})();
