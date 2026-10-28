
/* ===== Links ===== */
const LINKS = {
  linkedin: "https://www.linkedin.com/in/manjeeth-s-padhmashali-137042386/",
  github: "https://github.com/manjeeth-tech2277",
  resume: ""   // add a resume link here, e.g. a Google Drive PDF
};
const EMAIL = "manjeethpadhmashali@gmail.com";

const LAYERS = [
  {id:"sensor",   name:"Sense",    sub:"Sensors, chips, fluidics"},
  {id:"firmware", name:"Firmware", sub:"ESP32, C/C++ on device"},
  {id:"cloud",    name:"Data",     sub:"Firebase, pipelines, datasets"},
  {id:"model",    name:"Model",    sub:"PyTorch, GNNs, algorithms"},
  {id:"interface",name:"Interface",sub:"Web apps & dashboards"}
];
const CATS = [
  {id:"all",label:"All work"},{id:"web",label:"Web"},{id:"ai",label:"AI / ML"},
  {id:"embedded",label:"Embedded & IoT"},{id:"space",label:"Space"},{id:"systems",label:"Systems & DSA"}
];

const PROJECTS = [
  {id:"groundwater",title:"AI Groundwater Digital Twin",kind:"Experiential learning",status:"In progress",
   tag:"Forecasts groundwater levels and simulates what-if interventions across a watershed.",
   cats:["ai"],layers:["cloud","model","interface"],skills:["Python","PyTorch","GNN","SHAP","GIS"],
   metric:"7",metricLabel:"public datasets fused",
   problem:"Groundwater data in India is sparse and spread across agencies, so planners can't easily ask what happens if they add recharge in one place or cut extraction in another.",
   built:["A spatio-temporal graph neural network that treats monitoring wells as connected nodes","Merges CGWB levels, NASA GPM rainfall, SoilGrids, Copernicus DEM, Bhuvan land use, Sentinel-2 imagery and India-WRIS","A scenario engine for extraction changes and artificial recharge, with uncertainty bands and SHAP explanations","A layer that turns groundwater stress into crop-yield and income estimates using FAO formulas"],
   outcome:"Technical spec and model design complete; implementation underway."},
  {id:"imex",title:"IMEx CubeSat Payload",kind:"Student space mission",status:"PDR stage",
   tag:"A biological experiment designed to run inside a CubeSat.",
   cats:["space","embedded"],layers:["sensor","firmware"],skills:["Systems engineering","Failure analysis","Technical writing"],
   metric:"12",metricLabel:"sample wells on one chip",
   problem:"Running biology in orbit means sensing living samples with almost no power, mass or second chances.",
   built:["A 12-well fluidic chip combining impedance spectroscopy (EIS), optical density and fluorescence sensing","EPS/TTC failure analysis for the power and telemetry subsystems","The consolidated subsystem document for the Preliminary Design Review"],
   outcome:"Preparing subsystem review and PDR with a team of 11+."},
  {id:"drain",title:"Drain Health Monitor",kind:"IDEA Lab",status:"Shipped",
   tag:"An ESP32 sensor node streaming live drain conditions to a web dashboard.",
   cats:["embedded","web"],layers:["sensor","firmware","cloud","interface"],skills:["ESP32","C++","Firebase","Streamlit","Python"],
   metric:"4/5",metricLabel:"layers of the stack in one build",
   problem:"Blocked drains usually get noticed after they overflow. Live readings could flag trouble early.",
   built:["Wired multiple sensors to an ESP32 and pushed readings to Firebase Realtime Database","A Streamlit dashboard showing the live data","Found why the board wouldn't connect: ESP32 only supports 2.4 GHz Wi-Fi","Fixed Firebase token and TLS errors between device and cloud"],
   outcome:"Working end-to-end prototype and a full IDEA Lab report."},
  {id:"news",title:"Fake News Detector in C",kind:"Course project",status:"Shipped",
   tag:"A Naive Bayes classifier and browser GUI written from scratch in pure C99.",
   cats:["ai","systems","web"],layers:["model","interface"],skills:["C","Naive Bayes","HTTP","Sockets"],
   metric:"2,000",metricLabel:"news articles in training set",
   problem:"Most machine learning hides behind libraries. I wanted a classifier where every line was mine.",
   built:["Multinomial Naive Bayes in pure C99 with no external libraries","Trained on a 2,000-article Indian news dataset I helped generate","A small HTTP server over raw TCP sockets to serve a browser GUI","Fixed a TCP fragmentation bug that split large requests"],
   outcome:"Runs end to end in the browser, with reports and technical deep-dives."},
  {id:"galaxy",title:"Galaxy Morphology CNN",kind:"Personal project",status:"Shipped",
   tag:"A from-scratch PyTorch CNN that sorts galaxies into five shapes.",
   cats:["ai","web"],layers:["model","interface"],skills:["Python","PyTorch","CNN","Flask"],
   metric:"90.4%",metricLabel:"validation accuracy",
   problem:"Galaxy Zoo volunteers labelled thousands of galaxy images. Could a small CNN learn to make the same calls?",
   built:["Turned volunteer vote fractions into 5 classes with a 0.6 threshold","Designed and trained the CNN from scratch on an Apple M4 using PyTorch MPS","A Flask web app with drag-and-drop upload to classify new images"],
   outcome:"Best checkpoint at epoch 12 with 90.4% validation accuracy."},
  {id:"road",title:"Road Network Resilience Analyzer",kind:"DSA experiential learning",status:"In progress",
   tag:"Reroutes around roads damaged in a disaster.",
   cats:["systems"],layers:["model"],skills:["Graphs","Data structures","Algorithms"],
   metric:"Graph",metricLabel:"core, my part of a 3-part build",
   problem:"After a flood or earthquake, responders need to know which routes still connect hospitals, shelters and depots.",
   built:["The graph representation of the road network: nodes, weighted edges and damage states","Designed so the resilience engine can drop roads and recompute routes fast","Built alongside teammates handling the UI and rerouting engine"],
   outcome:"Team project in active development."},
  {id:"spendshare",title:"SpendShare",kind:"Personal project",status:"In progress",
   tag:"A family expense tracker built around UPI payments.",
   cats:["web"],layers:["cloud","interface"],skills:["Mobile","Database","UPI"],
   metric:"3",metricLabel:"UPI apps tracked",
   problem:"A family's UPI spending is scattered across several phones and payment apps.",
   built:["Captures debits from PhonePe, Google Pay and BHIM for several family members","Stores only debits to keep the data focused","Sends a weekly spending summary","Planned for both iOS and Android"],
   outcome:"Architecture set; cross-platform app in progress."},
  {id:"insighted",title:"InsightEd",kind:"Design Thinking Lab",status:"Research",
   tag:"AI review intelligence that helps students buy the right tech.",
   cats:["ai","web"],layers:["model","interface"],skills:["Design thinking","User research","NLP"],
   metric:"SDG 4",metricLabel:"Quality Education",
   problem:"Students lose money on laptops, gadgets and courses that don't fit their budget or how they'll use them.",
   built:["User research through surveys in the Empathize phase","An AI system that summarises reviews against a student's budget and needs","Framed around UN Sustainable Development Goal 4"],
   outcome:"Research underway. The team also calls it EduTech Lens."},
  {id:"labchip",title:"Passive Lab-on-Chip",kind:"Research competition",status:"Design",
   tag:"A microfluidic payload that moves fluid without pumps.",
   cats:["space","embedded"],layers:["sensor"],skills:["CAD","Microfluidics"],
   metric:"0",metricLabel:"pumps or power needed for flow",
   problem:"Pumps add power draw, mass and failure points to a small payload.",
   built:["A passive microfluidic chip where channel geometry drives the flow","Modelled in CAD within the competition's size and mass limits"],
   outcome:"Design work for a student research competition."}
];

const SKILLS = [
  {group:"Languages",items:["C","C++","Python","JavaScript"]},
  {group:"AI & data",items:["PyTorch","CNN","GNN","Naive Bayes","SHAP","NLP","GIS"]},
  {group:"Hardware",items:["ESP32","Microfluidics","CAD","Failure analysis","Systems engineering"]},
  {group:"Practice",items:["Graphs","Data structures","Algorithms","Design thinking","User research","Technical writing"]}
];
const WEB = {items:["HTML","CSS","JavaScript","Flask","Streamlit","Firebase","HTTP","Sockets"],
  levels:[["HTML & CSS",78,"this site"],["Python web",72,"Flask, Streamlit"],["Firebase",65,"realtime data"],["JavaScript",50,"learning now"]]};
const SELF = ["HTML","CSS","JavaScript"];
const MARQUEE = ["ESP32","PyTorch","Firebase","sensor to screen","Flask","Streamlit","C99","graph neural nets","HTML & CSS","CubeSat payloads","Python","digital twins"];

const FACTS = [
  "I learned the hard way that an ESP32 only speaks 2.4 GHz Wi-Fi. My 5 GHz phone hotspot was the bug.",
  "My galaxy classifier trained on a MacBook Air. No GPU cluster, just patience and Apple's MPS backend.",
  "I wrote an HTTP server in C just to give my C classifier a web page. Then I fixed the TCP bug it came with.",
  "I'm one of 11+ people designing a biology experiment small enough to fit in a CubeSat.",
  "My groundwater project pulls from seven datasets, including NASA rainfall and Sentinel-2 imagery.",
  "This page is hand-written HTML, CSS and JavaScript. Press / to see the command menu I built into it."
];

/* ===== helpers ===== */
const $ = s => document.querySelector(s);
const el = (t, a = {}, h = "") => { const e = document.createElement(t); for (const k in a) e.setAttribute(k, a[k]); if (h) e.innerHTML = h; return e; };
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
let toastT;
function toast(msg){ const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2800); }
async function copy(text, okMsg){
  try { await navigator.clipboard.writeText(text); toast(okMsg); }
  catch(e){ toast("Couldn't copy automatically. Select the text and copy it."); }
}
const isLive = s => s === "Shipped";
const cssVar = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

/* ===== scroll: nav, progress ===== */
function onScroll(){
  $("#nav").classList.toggle("scrolled", scrollY > 8);
  const h = document.documentElement.scrollHeight - innerHeight;
  $("#progress").style.transform = `scaleX(${h > 0 ? Math.min(1, scrollY / h) : 0})`;
}
addEventListener("scroll", onScroll, {passive:true}); onScroll();
const navLinks = [...document.querySelectorAll(".links a")];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
}), {rootMargin:"-45% 0px -50% 0px"});
["about","work","skills","journey","contact"].forEach(id => io.observe(document.getElementById(id)));

/* clock */
function tick(){
  const parts = new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit",hour12:true,timeZone:"Asia/Kolkata"}).formatToParts(new Date());
  const get = k => (parts.find(p => p.type === k) || {}).value || "";
  $("#clock").innerHTML = `${get("hour")}:${get("minute")}<small>${get("dayPeriod").toUpperCase()}</small>`;
}
tick(); setInterval(tick, 15000);

/* cursor glow + magnetic buttons */
if (fine && !reduce) {
  const g = $("#cglow"); let gx = innerWidth/2, gy = innerHeight/2, tx = gx, ty = gy, on = false;
  addEventListener("pointermove", e => { tx = e.clientX; ty = e.clientY; if (!on){ on = true; g.style.opacity = 1; loop(); } }, {passive:true});
  document.documentElement.addEventListener("pointerleave", () => { g.style.opacity = 0; });
  function loop(){ gx += (tx - gx) * .12; gy += (ty - gy) * .12; g.style.transform = `translate(${gx}px,${gy}px)`; requestAnimationFrame(loop); }
  document.querySelectorAll(".magnet").forEach(b => {
    b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width/2) * .18}px,${(e.clientY - r.top - r.height/2) * .25}px)`; });
    b.addEventListener("pointerleave", () => { b.style.transform = ""; });
  });
}

/* ===== deep-space starfield: parallax, cursor constellations, shooting stars, warp ===== */
(function sky(){
  const cv = $("#sky"), ctx = cv.getContext("2d");
  const TINTS = ["255,255,255","255,255,255","200,212,255","170,190,255","255,214,160"];
  let W = 0, H = 0, dpr = 1, stars = [], mx = -999, my = -999, raf = 0, shoot = null, nextShoot = 0, warpStart = -1;
  function spawn(s, nearCenter){
    s.z = Math.random() < .6 ? 1 : Math.random() < .7 ? 2 : 3;
    s.x = nearCenter ? W/2 + (Math.random()-.5)*W*.2 : Math.random()*W;
    s.y = nearCenter ? H/2 + (Math.random()-.5)*H*.2 : Math.random()*H;
    s.r = s.z === 3 ? Math.random()*1.2+1 : s.z === 2 ? Math.random()*.8+.6 : Math.random()*.6+.3;
    s.tw = Math.random()*Math.PI*2; s.c = TINTS[Math.floor(Math.random()*TINTS.length)];
    return s;
  }
  function size(){
    dpr = Math.min(2, devicePixelRatio || 1); W = innerWidth; H = innerHeight;
    cv.width = W*dpr; cv.height = H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    const n = Math.min(320, Math.round(W*H/4200));
    stars = Array.from({length:n}, () => spawn({}));
  }
  function frame(t){
    raf = 0; t = t || 0;
    ctx.clearRect(0,0,W,H);
    const sy = scrollY;
    let w = 0;
    if (warpStart >= 0){ const p = (t - warpStart)/1900; if (p >= 1){ warpStart = -1; document.body.classList.remove("warping"); } else w = Math.sin(Math.PI*p); }
    const pos = [];
    for (const s of stars){
      let x = s.x, y = ((s.y - sy*.04*s.z) % H + H) % H;
      if (w > 0){
        const dx = s.x - W/2, dy = s.y - H/2;
        s.x += dx*.06*w*s.z; s.y += dy*.06*w*s.z;
        x = s.x; y = ((s.y - sy*.04*s.z) % H + H) % H;
        if (s.x < -50 || s.x > W+50 || s.y < -50 || s.y > H+50) spawn(s, true);
        ctx.strokeStyle = `rgba(${s.c},${.5+.4*w})`; ctx.lineWidth = s.r;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - dx*.09*w*s.z, y - dy*.09*w*s.z); ctx.stroke();
        continue;
      }
      if (!reduce) s.tw += .015 + s.z*.004;
      const near = Math.hypot(x - mx, y - my) < 150;
      ctx.beginPath(); ctx.arc(x, y, s.r + (near ? .8 : 0), 0, Math.PI*2);
      ctx.fillStyle = `rgba(${s.c},${(.35 + .2*s.z/3) + .35*Math.sin(s.tw)**2})`; ctx.fill();
      if (s.z === 3){
        ctx.fillStyle = `rgba(${s.c},.08)`; ctx.beginPath(); ctx.arc(x, y, s.r*3.2, 0, Math.PI*2); ctx.fill();
        if (near || Math.hypot(x - mx, y - my) < 200) pos.push([x,y]);
      }
    }
    if (w === 0 && mx > -900){
      ctx.lineWidth = 1;
      for (let i = 0; i < pos.length; i++){
        const [ax, ay] = pos[i], da = Math.hypot(ax - mx, ay - my);
        ctx.strokeStyle = `rgba(160,175,255,${(1 - da/200)*.45})`; ctx.beginPath(); ctx.moveTo(ax,ay); ctx.lineTo(mx,my); ctx.stroke();
        for (let j = i+1; j < pos.length; j++){ const [bx, by] = pos[j], d = Math.hypot(ax-bx, ay-by); if (d < 160){ ctx.strokeStyle = `rgba(160,175,255,${(1 - d/160)*.3})`; ctx.beginPath(); ctx.moveTo(ax,ay); ctx.lineTo(bx,by); ctx.stroke(); } }
      }
    }
    if (!reduce && w === 0){
      if (!shoot && t > nextShoot){ const fromLeft = Math.random() < .5; shoot = {x: fromLeft ? Math.random()*W*.5 : W*.5 + Math.random()*W*.5, y: Math.random()*H*.4, vx: (fromLeft ? 1 : -1)*(9 + Math.random()*5), vy: 4 + Math.random()*3, life: 0}; nextShoot = t + 5000 + Math.random()*7000; }
      if (shoot){
        shoot.x += shoot.vx; shoot.y += shoot.vy; shoot.life++;
        const a = Math.max(0, 1 - shoot.life/70), g = ctx.createLinearGradient(shoot.x, shoot.y, shoot.x - shoot.vx*12, shoot.y - shoot.vy*12);
        g.addColorStop(0, `rgba(255,236,200,${a})`); g.addColorStop(1, "rgba(255,236,200,0)");
        ctx.strokeStyle = g; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(shoot.x, shoot.y); ctx.lineTo(shoot.x - shoot.vx*12, shoot.y - shoot.vy*12); ctx.stroke();
        if (a <= 0 || shoot.x < -200 || shoot.x > W+200 || shoot.y > H+200) shoot = null;
      }
    }
    if (!reduce || warpStart >= 0) raf = requestAnimationFrame(frame);
  }
  size(); frame(0);
  let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { cancelAnimationFrame(raf); size(); frame(performance.now()); }, 150); });
  addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; if (reduce && !raf) frame(0); }, {passive:true});
  document.documentElement.addEventListener("pointerleave", () => { mx = my = -999; });
  if (reduce) addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(frame); }, {passive:true});
  window.engageWarp = () => {
    if (reduce){ toast("Warp drive needs motion enabled. Holding position."); return; }
    if (warpStart >= 0) return;
    warpStart = performance.now(); document.body.classList.add("warping");
    toast("Engaging warp drive…");
    if (!raf) raf = requestAnimationFrame(frame);
  };
})();
$("#warpBtn").addEventListener("click", () => engageWarp());

/* ===== hero name: letters swell toward the cursor ===== */
const firstLine = $("#name .line");
(function split(n){
  [...n.childNodes].forEach(c => {
    if (c.nodeType === 3) {
      const frag = document.createDocumentFragment();
      [...c.textContent].forEach(ch => {
        if (ch === " ") { frag.appendChild(document.createTextNode(" ")); return; }
        const s = el("span", {class:"ch"}); s.textContent = ch;
        if (n.classList && n.classList.contains("s-wrap")) s.classList.add("s");
        frag.appendChild(s);
      });
      c.replaceWith(frag);
    } else split(c);
  });
})(firstLine);
const chars = [...firstLine.querySelectorAll(".ch")];
if (!reduce && fine) {
  let raf = 0, px = 0, py = 0;
  const hero = $(".hero");
  hero.addEventListener("pointermove", e => { px = e.clientX; py = e.clientY; if (!raf) raf = requestAnimationFrame(swell); });
  hero.addEventListener("pointerleave", () => chars.forEach(c => { c.style.fontVariationSettings = ""; c.style.transform = ""; }));
  function swell(){
    raf = 0;
    chars.forEach(c => {
      const r = c.getBoundingClientRect();
      const d = Math.hypot(px - (r.left + r.width/2), py - (r.top + r.height/2));
      const k = Math.max(0, 1 - d / 240);
      c.style.fontVariationSettings = `"wght" ${Math.round(420 + 380*k)}, "opsz" 96`;
      c.style.transform = `translateY(${(-8*k).toFixed(1)}px)`;
    });
  }
}

/* rotating role */
const ROLES = ["ESP32 firmware","ML models","web dashboards","CubeSat payloads","classifiers in pure C","digital twins"];
let ri = 0;
if (!reduce) setInterval(() => {
  const r = $("#rotor"); r.classList.add("out");
  setTimeout(() => { ri = (ri + 1) % ROLES.length; r.textContent = ROLES[ri]; r.classList.remove("out"); r.classList.add("in"); setTimeout(() => r.classList.remove("in"), 320); }, 250);
}, 2400);

/* marquee */
const mq = $("#marquee");
[...MARQUEE, ...MARQUEE].forEach(w => { const s = el("span"); s.textContent = w; mq.appendChild(s); });

/* ===== filter state ===== */
let filter = {type:"cat", value:"all", label:""};
function matches(p){
  if (filter.type === "cat") return filter.value === "all" || p.cats.includes(filter.value);
  if (filter.type === "layer") return p.layers.includes(filter.value);
  if (filter.type === "skill") return p.skills.includes(filter.value);
  return true;
}
function applyFilter(f, scroll){
  filter = f; let n = 0;
  document.querySelectorAll(".card").forEach(c => { const p = PROJECTS.find(x => x.id === c.dataset.id); const m = matches(p); c.classList.toggle("dim", !m); if (m) n++; });
  const grid = $("#grid");
  [...grid.children].sort((a,b) => (a.classList.contains("dim") - b.classList.contains("dim")) || (+a.dataset.i - +b.dataset.i)).forEach(c => grid.appendChild(c));
  document.querySelectorAll("#filters .chip").forEach(c => c.setAttribute("aria-pressed", String(f.type === "cat" && c.dataset.v === f.value)));
  document.querySelectorAll(".node").forEach(nd => nd.setAttribute("aria-pressed", String(f.type === "layer" && nd.dataset.v === f.value)));
  const note = $("#note");
  if (f.type === "cat" && f.value === "all") note.innerHTML = `Showing all <b>${PROJECTS.length}</b> projects.`;
  else {
    const what = f.type === "layer" ? `the <b>${f.label}</b> layer` : `<b>${f.label}</b>`;
    note.innerHTML = `<span><b>${n}</b> ${n === 1 ? "project" : "projects"} ${f.type === "cat" ? "in" : "using"} ${what}.</span>`;
    const clr = el("button", {class:"link-btn", type:"button"}, "Show all");
    clr.onclick = () => applyFilter({type:"cat", value:"all"});
    note.appendChild(clr);
  }
  if (scroll) document.getElementById("work").scrollIntoView({behavior: reduce ? "auto" : "smooth"});
}

/* signal path nodes */
const track = $("#track");
LAYERS.forEach((L, i) => {
  const count = PROJECTS.filter(p => p.layers.includes(L.id)).length;
  const b = el("button", {class:"node", type:"button", "data-v":L.id, "aria-pressed":"false"},
    `<span class="step">0${i+1}</span><span class="count">${count}</span><strong>${L.name}</strong><small>${L.sub}</small>`);
  b.onclick = () => (filter.type === "layer" && filter.value === L.id) ? applyFilter({type:"cat", value:"all"}) : applyFilter({type:"layer", value:L.id, label:L.name});
  track.appendChild(b);
});

/* category chips */
const filters = $("#filters");
CATS.forEach(c => {
  const b = el("button", {class:"chip", type:"button", "data-v":c.id, "aria-pressed": String(c.id === "all")}, c.label);
  b.onclick = () => applyFilter({type:"cat", value:c.id, label:c.label});
  filters.appendChild(b);
});

/* cards with spotlight + tilt */
const grid = $("#grid");
PROJECTS.forEach((p, i) => {
  const b = el("button", {class:"card glass spot", type:"button", "data-id":p.id, "data-i":i, "aria-label":`${p.title}: open case study`},
    `<div class="card-top"><span class="kind">${p.kind}</span><span class="pill ${isLive(p.status) ? "live" : "wip"}">${p.status}</span></div>
     <h3>${p.title}</h3><p>${p.tag}</p>
     <div class="metric">${p.metric}</div><div class="metric-l">${p.metricLabel}</div>
     <div class="stack">${p.skills.slice(0,4).map(s => `<span>${s}</span>`).join("")}</div>
     <span class="more">Read case study <i>→</i></span>`);
  b.onclick = () => openProject(p.id);
  if (fine && !reduce){
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      b.style.transform = `perspective(900px) rotateX(${(-y*6).toFixed(2)}deg) rotateY(${(x*8).toFixed(2)}deg) translateY(-4px)`;
    });
    b.addEventListener("pointerleave", () => { b.style.transform = ""; });
  }
  grid.appendChild(b);
});

/* spotlight tracking */
if (fine) document.addEventListener("pointermove", e => {
  document.querySelectorAll(".spot").forEach(s => {
    const r = s.getBoundingClientRect();
    if (e.clientY < r.top - 300 || e.clientY > r.bottom + 300) return;
    s.style.setProperty("--mx", (e.clientX - r.left) + "px"); s.style.setProperty("--my", (e.clientY - r.top) + "px");
  });
}, {passive:true});

/* currently building */
const nowList = $("#nowList");
PROJECTS.filter(p => !isLive(p.status)).slice(0,5).forEach(p => {
  const b = el("button", {type:"button"}); b.textContent = p.title; b.onclick = () => openProject(p.id); nowList.appendChild(b);
});

/* project dialog */
const dlg = $("#proj");
let curIdx = 0;
function openProject(id){
  curIdx = PROJECTS.findIndex(p => p.id === id); const p = PROJECTS[curIdx];
  const prev = PROJECTS[(curIdx - 1 + PROJECTS.length) % PROJECTS.length], next = PROJECTS[(curIdx + 1) % PROJECTS.length];
  $("#dBody").innerHTML = `
    <div class="d-hero">
      <div class="d-head"><div><span class="kind">${p.kind}</span><h3 id="dTitle">${p.title}</h3></div>
        <button class="icon-btn" type="button" data-close aria-label="Close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>
      <p class="d-tag">${p.tag}</p>
      <div class="d-meta"><span class="pill ${isLive(p.status) ? "live" : "wip"}">${p.status}</span><div class="stack">${p.skills.map(s => `<span>${s}</span>`).join("")}</div></div>
    </div>
    <div class="d-body">
      <div class="d-sec"><h4>The problem</h4><p>${p.problem}</p></div>
      <div class="d-sec"><h4>What I built</h4><ul>${p.built.map(x => `<li>${x}</li>`).join("")}</ul></div>
      <div class="outcome"><b>${p.metric}</b><span>${p.outcome}</span></div>
      <div class="d-nav"><button class="link-btn" type="button" data-go="${prev.id}">← ${prev.title}</button><button class="link-btn" type="button" data-go="${next.id}">${next.title} →</button></div>
    </div>`;
  if (!dlg.open) dlg.showModal();
  dlg.scrollTop = 0;
}
dlg.addEventListener("click", e => {
  if (e.target === dlg || e.target.closest("[data-close]")) dlg.close();
  const g = e.target.closest("[data-go]"); if (g) openProject(g.dataset.go);
});
dlg.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    const n = (curIdx + (e.key === "ArrowRight" ? 1 : -1) + PROJECTS.length) % PROJECTS.length;
    openProject(PROJECTS[n].id);
  }
});

/* skills */
const skillCount = s => PROJECTS.filter(p => p.skills.includes(s)).length;
function skillBtn(s){
  const n = skillCount(s), self = SELF.includes(s);
  const b = el("button", {class:"skill", type:"button"}, `${s}<span class="n">${n ? n : self ? "this site" : "·"}</span>`);
  b.onclick = () => {
    if (n) applyFilter({type:"skill", value:s, label:s}, true);
    else if (self) toast(`You're looking at it. This page is hand-written ${s}.`);
  };
  return b;
}
const sg = $("#skillGrid");
const feat = el("div", {class:"glass sk feature"});
const fl = el("div", {}, `<span class="eyebrow">Web development</span><h3>The layer people <span class="serif">actually touch</span></h3><p>Every project above ends in an interface: a Streamlit dashboard on live Firebase data, a Flask app for a neural network, an HTTP server written in C. Right now I'm going deeper on HTML, CSS and JavaScript, and this site is the practice ground.</p>`);
const fwrap = el("div", {class:"sk-list"}); WEB.items.forEach(s => fwrap.appendChild(skillBtn(s))); fl.appendChild(fwrap);
const lv = el("div", {class:"level"}, WEB.levels.map(([k,v,note]) => `<div class="lv-row"><span>${k}</span><div class="bar" role="img" aria-label="${k}: ${v} out of 100"><i style="width:${v}%"></i></div><em>${note}</em></div>`).join(""));
feat.append(fl, lv); sg.appendChild(feat);
SKILLS.forEach(g => {
  const card = el("div", {class:"glass spot sk"}, `<h3>${g.group}</h3>`);
  const l = el("div", {class:"sk-list"}); g.items.forEach(s => l.appendChild(skillBtn(s))); card.appendChild(l); sg.appendChild(card);
});

/* facts */
let fi = 0;
$("#factBtn").onclick = () => {
  fi = (fi + 1) % FACTS.length; const t = $("#factText");
  t.textContent = FACTS[fi]; t.classList.remove("swap"); void t.offsetWidth; t.classList.add("swap");
  $("#factN").textContent = `${fi+1}/${FACTS.length}`;
};

/* contact links */
[["#lnResume","resume","Resume"],["#lnLinkedin","linkedin","LinkedIn"],["#lnGithub","github","GitHub"]].forEach(([sel,key,label]) => {
  const a = $(sel);
  if (LINKS[key]) a.href = LINKS[key];
  else { a.style.borderStyle = "dashed"; a.removeAttribute("target"); a.addEventListener("click", e => { e.preventDefault(); toast(`${label} coming soon. Email works today.`); }); }
});
$("#copyEmail").onclick = () => copy(EMAIL, "Email copied.");

/* message composer */
const TOPICS = {
  internship:{subject:"Internship opportunity", body:"Hi Manjeeth,\n\nI saw your portfolio and we have an internship that might fit your mix of embedded, ML and web work. Would you be open to a quick call this week?\n\n"},
  collab:{subject:"Project collaboration", body:"Hi Manjeeth,\n\nI'm working on a project that needs someone who can go from hardware to dashboard. Here's the idea:\n\n"},
  research:{subject:"Research collaboration", body:"Hi Manjeeth,\n\nI'm reaching out about a research project you might find interesting. In short:\n\n"},
  hi:{subject:"Hello from your portfolio", body:"Hi Manjeeth,\n\nJust wanted to say I liked your work, especially:\n\n"}
};
let topic = "internship", edited = false;
const msg = $("#cMsg"), nm = $("#cName");
function fillMsg(){ if (!edited) msg.value = TOPICS[topic].body + "Best,\n" + (nm.value.trim() || ""); updateMail(); }
function updateMail(){ $("#mailLink").href = `mailto:${EMAIL}?subject=${encodeURIComponent(TOPICS[topic].subject)}&body=${encodeURIComponent(msg.value)}`; }
document.querySelectorAll(".topic").forEach(b => b.onclick = () => {
  topic = b.dataset.t; edited = false;
  document.querySelectorAll(".topic").forEach(x => x.setAttribute("aria-pressed", String(x === b))); fillMsg();
});
nm.addEventListener("input", fillMsg);
msg.addEventListener("input", () => { edited = true; updateMail(); });
$("#composer").addEventListener("submit", e => {
  e.preventDefault();
  copy(`To: ${EMAIL}\nSubject: ${TOPICS[topic].subject}\n\n${msg.value}`, "Message copied. Paste it into your email.");
});
fillMsg();

/* ===== command palette ===== */
const pal = $("#palette"), pIn = $("#pInput"), pList = $("#pList");
const goTo = id => document.getElementById(id).scrollIntoView({behavior: reduce ? "auto" : "smooth"});
const COMMANDS = [
  ...["About","Work","Skills","Journey","Contact"].map(s => ({label:`Go to ${s}`, group:"Section", run:() => goTo(s.toLowerCase())})),
  ...PROJECTS.map(p => ({label:p.title, group:"Project", run:() => openProject(p.id)})),
  ...LAYERS.map(L => ({label:`Show ${L.name} layer projects`, group:"Filter", run:() => applyFilter({type:"layer", value:L.id, label:L.name}, true)})),
  {label:"Open GitHub", group:"Link", run:() => $("#lnGithub").click()},
  {label:"Open LinkedIn", group:"Link", run:() => $("#lnLinkedin").click()},
  {label:"Copy email address", group:"Action", run:() => copy(EMAIL, "Email copied.")},
  {label:"Draft a message to Manjeeth", group:"Action", run:() => { goTo("contact"); setTimeout(() => msg.focus(), 500); }},
  {label:"Engage warp drive", group:"Action", run:() => window.engageWarp && engageWarp()},
  {label:"Tell me a fun fact", group:"Action", run:() => toast(FACTS[Math.floor(Math.random()*FACTS.length)])},
  {label:"Hire Manjeeth", group:"Action", run:() => celebrate()}
];
let pSel = 0, pItems = [];
function renderPal(){
  const q = pIn.value.trim().toLowerCase();
  pItems = COMMANDS.filter(c => !q || c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q));
  pSel = Math.min(pSel, Math.max(0, pItems.length - 1));
  pList.innerHTML = pItems.length ? "" : `<div class="p-empty">No match for "${q.replace(/[<>&"]/g,"")}". Try "project" or "email".</div>`;
  pItems.forEach((c, i) => {
    const li = el("li", {role:"option", "aria-selected": String(i === pSel), class: i === pSel ? "sel" : ""}, `<span>${c.label}</span><small>${c.group}</small>`);
    li.onmouseenter = () => { pSel = i; markSel(); };
    li.onclick = () => runCmd(i);
    pList.appendChild(li);
  });
}
function markSel(){ [...pList.children].forEach((li, i) => { li.classList.toggle("sel", i === pSel); li.setAttribute("aria-selected", String(i === pSel)); }); const s = pList.children[pSel]; if (s && s.scrollIntoView) s.scrollIntoView({block:"nearest"}); }
function runCmd(i){ const c = pItems[i]; if (!c) return; pal.close(); setTimeout(c.run, 60); }
function openPal(){ if (dlg.open) dlg.close(); pIn.value = ""; pSel = 0; renderPal(); pal.showModal(); pIn.focus(); }
$("#cmdBtn").onclick = openPal;
pIn.addEventListener("input", () => { pSel = 0; renderPal(); });
pIn.addEventListener("keydown", e => {
  if (e.key === "ArrowDown"){ e.preventDefault(); pSel = Math.min(pSel + 1, pItems.length - 1); markSel(); }
  else if (e.key === "ArrowUp"){ e.preventDefault(); pSel = Math.max(pSel - 1, 0); markSel(); }
  else if (e.key === "Enter"){ e.preventDefault(); runCmd(pSel); }
});
pal.addEventListener("click", e => { if (e.target === pal) pal.close(); });

let buf = "";
addEventListener("keydown", e => {
  const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
  if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) { e.preventDefault(); pal.open ? pal.close() : openPal(); return; }
  if (typing || e.metaKey || e.ctrlKey || e.key.length !== 1) return;
  if (e.key.toLowerCase() === "w" && !e.shiftKey && !e.altKey) engageWarp();
  buf = (buf + e.key.toLowerCase()).slice(-4);
  if (buf === "hire") { buf = ""; celebrate(); }
});

/* confetti */
const cv = $("#confetti"), cx = cv.getContext("2d");
function celebrate(){
  toast("Excellent decision. My email is one click away in Contact.");
  if (reduce) return;
  cv.width = innerWidth * devicePixelRatio; cv.height = innerHeight * devicePixelRatio;
  cx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
  const cols = [cssVar("--accent"), cssVar("--spark"), cssVar("--ok"), cssVar("--ink")];
  const P = Array.from({length:180}, () => ({x:innerWidth/2, y:innerHeight*0.6, vx:(Math.random()-.5)*17, vy:-Math.random()*17-6, r:Math.random()*6+3, c:cols[Math.floor(Math.random()*cols.length)], a:Math.random()*6, s:Math.random()*.3-.15}));
  let f = 0;
  (function draw(){
    cx.clearRect(0,0,innerWidth,innerHeight);
    P.forEach(p => { p.vy += .42; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.s;
      cx.save(); cx.translate(p.x,p.y); cx.rotate(p.a); cx.fillStyle = p.c; cx.globalAlpha = Math.max(0, 1 - f/160); cx.fillRect(-p.r/2,-p.r/4,p.r,p.r/2); cx.restore(); });
    if (++f < 160) requestAnimationFrame(draw); else cx.clearRect(0,0,innerWidth,innerHeight);
  })();
}

applyFilter({type:"cat", value:"all"});
