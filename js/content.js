
/* ===== CONTENT: edit everything here. Each item in P is a page; "ph" text is a placeholder to replace. ===== */
const S={
lab:{n:'The Laboratory',d:'Research, experiments, and scientific inquiry.',x:.2,y:.32},
human:{n:'The Human Experience',d:'Learning, wellbeing, and the people behind the questions.',x:.78,y:.28},
shop:{n:'The Workshop',d:'Things I build, from clubs to code.',x:.3,y:.76},
lib:{n:'The Library',d:'Writing, essays, and stories.',x:.7,y:.74},
obs:{n:'The Observatory',d:'Questions I am still chasing.',x:.5,y:.5}};
const PH='Add this in your own words.';
const P=[
{id:'rbc',s:'lab',t:'Plasma and red blood cells',d:'First-author research on how plasma affects red blood cells.',tags:['plasma','blood','biology'],rel:['swarm','igem','retina'],
 meta:['First author','SCCUR 2025 · NCUR 2026 · SCCUR 2026','IEEE IECBES 2026, Malaysia'],
 tl:[['2025','SCCUR presentation'],['2026','NCUR presentation'],['2026','SCCUR presentation'],['2026','Paper accepted at IEEE IECBES (Malaysia)']],
 sec:{'Research question':'How does plasma affect red blood cell morphology under varying saline conditions?','Background and motivation':0,'Hypothesis':0,'Methodology':0,'Variables and controls':0,'Observations and data':0,'Results and discussion':0,'Limitations':0,'Reflections and future directions':0}},
{id:'swarm',s:'lab',t:'Swarm robotics',d:'First-author robotics research presented across five venues.',tags:['robotics','swarm','engineering'],rel:['rbc','ai4m','vision'],
 meta:['First author','IEEE · SCCUR · NCUR'],
 tl:[['Mar 2023','IEEE poster and abstract'],['2024','SCCUR presentation'],['2025','NCUR poster'],['2025','IEEE presentation and paper'],['2025','SCCUR presentation']],
 sec:{'Research question':'How can a group of robots move together more accurately?','Background and motivation':0,'Hypothesis':0,'Methodology':'Python-based mobile apps coordinate 6 Lafvin robots to improve the accuracy of collective swarm movement.','Variables and controls':0,'Observations and data':0,'Results and discussion':0,'Limitations':0,'Reflections and future directions':0}},
{id:'igem',s:'lab',t:'iGEM synthetic biology',d:'Gold medals in 2025 and 2026, and team lead for 2027.',tags:['igem','synthetic biology','wiki'],rel:['rbc','retina','ai4m'],
 meta:['Gold 2025','Gold 2026','Team lead 2027'],
 tl:[['2025','Gold medal. Best Village High School Project nominee (Rock the Plastics)'],['2026','Gold medal. Human practices and wiki coding (learned CSS, HTML, Bootstrap)'],['2027','Team lead: expert outreach, wiki, administration, recruiting']],
 link:['Team site','https://sites.google.com/khanlabschool.org/igem/home'],
 sec:{'Research question':0,'Background and motivation':0,'Methodology':0,'Observations and data':0,'Results and discussion':0,'Limitations':0,'Reflections and future directions':0}},
{id:'retina',s:'lab',t:'Retina modeling',d:'Using mathematical models to make predictions about the retina.',tags:['retina','math','modeling'],rel:['rbc','vision'],meta:['In progress'],tl:[],sec:{'Research question':0,'Methodology':0,'Reflections and future directions':0}},
{id:'forrest',s:'human',t:'ForREST',d:'A student-led club that teaches how stress, memory, and studying work. My Girl Scouts Gold Award project.',tags:['metacognition','stress','learning','gold award'],rel:['synapse','service','ai4m'],
 meta:['Founder','Gold Award project','In development'],
 tl:[],
 sec:{'The problem':'High school students face academic pressure and chronic stress, often without learning how stress, memory, cognitive load, and studying work. The focus is the 8th to 9th grade transition.','Why it matters':0,'The approach':'Student-led workshops grounded in credible research: a 10 to 15 minute lecture followed by 20 to 30 minutes of activities. Committees cover social media, content, events, and retention.','My role':0,'What was created':0,'Outcomes':0,'Lessons and future directions':0}},
{id:'synapse',s:'human',t:'Synapse Sisters',d:'A community I founded for girls curious about the brain.',tags:['neuroscience','community'],rel:['forrest','ai4m'],
 meta:['Founder'],tl:[['Event','First speaker: a neuropsychiatrist from the UK']],
 sec:{'The problem':0,'The approach':0,'My role':'Founder.','Outcomes':'One speaker so far. More than six weeks into the process.','Lessons and future directions':0}},
{id:'service',s:'human',t:'Service and community',d:'Scam awareness for seniors, environmental service, and years of volunteering.',tags:['service','seniors','environment'],rel:['forrest','synapse'],
 meta:['Girl Scouts Silver Award','VTSeva Gold Award','98.43 service hours'],
 tl:[['VTSeva','Youth Lead (1 of 10 for 100 people), then Environmental Service Lead. 100+ hours including trash cleanups, tree planting, RAFT school supplies for teachers, pen pal letters, and mehendi fundraisers for people with disabilities in India'],['Silver Award','Spread CS and AI scam awareness to seniors. Visited 5 senior homes, put posters in 2, and one home presents on my behalf every 3 months'],['Now','Lead the Way recreation committee for a conference of 100+ girls']],
 sec:{'The problem':0,'My role':0,'Lessons and future directions':0}},
{id:'ai4m',s:'shop',t:'AI4Makers',d:'A student club I founded for building with AI.',tags:['ai','club','replit','entrepreneurship'],rel:['synapse','swarm','vision'],
 meta:['Founder','25+ students','Replit + $1,000 KSN fellowship'],tl:[['Speakers','2 hosted so far']],link:['Website','https://ai4makers.org/'],
 sec:{'Overview':0,'Problem statement':0,'Design process':0,'Technology used':0,'My contribution':'Founder.','What I learned':0}},
{id:'vision',s:'shop',t:'Computer vision with ASDRP',d:'A new AI/ML computer vision project, aiming for a tangible result to present at a conference.',tags:['computer vision','machine learning','asdrp'],rel:['swarm','retina','ai4m'],meta:['Just starting'],tl:[],
 sec:{'Overview':0,'Technology used':0,'My contribution':0}},
{id:'bbay',s:'shop',t:'Business and startups',d:'Student Store CEO for a year, now mentoring. Building a startup pitch at Berkeley Haas BBAY.',tags:['business','startup','student store'],rel:['ai4m','forrest'],meta:['Berkeley Haas BBAY','Certificate + recommendation letter'],tl:[],
 sec:{'Overview':0,'My contribution':0,'What I learned':0}},
{id:'rulers',s:'lib',t:'The Ruler’s Game',d:'A dystopian novel about a world ruled by AI.',tags:['fiction','ai','dystopia'],rel:['ceto'],meta:['Self-published'],tl:[],link:['Amazon','https://www.amazon.com/Rulers-Game-Shreeya-Kurapati-ebook/dp/B0DVPB66WC'],sec:{'About the book':0,'Why I wrote it':0}},
{id:'ceto',s:'lib',t:'The CETO Conspiracy',d:'An anthology my class wrote and published together.',tags:['fiction','anthology'],rel:['rulers'],meta:['Self-published'],tl:[],link:['Amazon','https://www.amazon.com/dp/B0G9H11CHS'],sec:{'About the book':0,'My part':0}},
{id:'journal',s:'lib',t:'Khranicle and the KLS literary journal',d:'Managing Editor of the Khranicle. Co-founder of the KLS literary journal.',tags:['editing','journal','writing'],rel:['rulers','ceto'],meta:['Managing Editor','First edition: December'],tl:[],sec:{'What I do':0,'What I learned':0}},
{id:'essay',s:'lib',t:'Essay: your title here',d:'Placeholder for a first essay linking neuroscience, philosophy, and technology.',tags:['essay'],rel:['rulers'],meta:['Draft'],tl:[],sec:{'Essay':0}}
];
const Q=['How does the brain handle stress, and can people learn to work with it?','How might AI inherit or reduce bias, including neurological bias?','What can swarms teach us about cognition?','How do mathematical models help us predict biology?','What would a good metacognition curriculum look like?','What is a mind, and could a machine have one?'];
const N=[['Placeholder','Add a recent observation here.'],['Placeholder','Add something you read or noticed.'],['Placeholder','Add a question that surprised you.']];

/* Documents: only entries with a url are shown. Paste a public (anyone-with-link) URL to publish one. */
const DOCS={resume:{url:''},igem:[{label:'2025 team wiki',url:'https://2025.igem.wiki/khanlab-bayarea/'}],forrest:[{label:'ForREST overview',url:''}]};
const CONTACT={email:''};
