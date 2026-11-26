/* ===== CONTENT: edit everything here ===== */
const S={
research:{n:'Research',d:'Research projects, papers, and talks.',x:.2,y:.32},
community:{n:'Community',d:'Groups I run and volunteer work.',x:.78,y:.28},
projects:{n:'Projects',d:'Things I’ve built and started.',x:.3,y:.76},
writing:{n:'Writing',d:'Books, poetry, and journals.',x:.7,y:.74},
questions:{n:'Questions',d:'Open questions and ideas I haven’t tried yet.',x:.5,y:.5}};
const P=[
{id:'rbc',s:'research',t:'Plasma and red blood cells',d:'How cold atmospheric plasma changes the shape of red blood cells in different salt solutions. First-author research with mentors at the Intelliscience Institute.',tags:['plasma','biology','image analysis'],rel:['vision','retina','igem'],
 meta:['First author and group leader','Intelliscience Institute','SCCUR 2025 · NCUR 2026 · SCCUR 2026','IEEE IECBES 2026, Malaysia'],
 tl:[['2025','SCCUR talk: plasma-induced changes in red blood cell shape under varying saline conditions'],['Jan 2026','Reviewed the first round of blood-drop salinity images'],['2026','NCUR presentation'],['Jul 2026','Final round of plasma exposure experiments (July 22)'],['Oct 2026','Final version of the paper for IEEE IECBES in Malaysia, where it was accepted'],['2026','SCCUR talk: salinity-dependent effects of plasma on cell shape and clot formation']],
 sec:{
 'Research question':'How does cold atmospheric plasma (CAP) change the shape of red blood cells, and does the salt concentration of the surrounding solution change that effect?',
 'Background':'CAP is an ionized gas that works near room temperature and produces reactive oxygen and nitrogen species. It is being studied for uses such as wound healing. A red blood cell’s shape depends on how salty its surroundings are: in very salty solutions cells shrink and turn spiky. Theoretical work by Shneider and Pekker (2018), co-authored by one of our mentors, suggests plasma acting on saline can shift the osmotic pressure across cell membranes, much like changing the salt level. We wanted to see whether blood data support that.',
 'Hypothesis':'Plasma exposure changes the osmotic environment around the cells, so plasma-treated blood should look more like blood sitting in saltier solution.',
 'Method':'We mixed whole blood with sodium chloride solutions from 0% to 5% (plus a plain blood sample) and exposed each to a helium dielectric barrier discharge plasma jet for 0, 15, or 30 seconds from 5 cm away. Untreated samples were the control. We photographed about five fields per condition under a light microscope and sorted the cells as hypotonic, isotonic, or hypertonic. A MATLAB program also outlines each cell and labels its edge as near-circular or jagged, so every condition is measured the same way.',
 'Variables and controls':'What we changed: salt concentration (0, 0.5, 0.9, 1.5, and 5%, plus plain blood) and plasma time (0, 15, 30 seconds). What we kept the same: helium flow (about 17 liters per minute), distance from the jet, and microscope settings. Control: samples with no plasma.',
 'Observations':'Without plasma, the share of cells that looked hypertonic climbed steeply as the salt concentration went up. With plasma, the largest change appeared at 0.9% salt, the concentration closest to normal body fluid. At 30 seconds cells began to clump, and longer exposures caused clotting, so 30 seconds became the upper limit. I am holding the exact percentages until the IEEE paper is published.',
 'Results and discussion':'Both salt concentration and plasma exposure changed cell shape, and the effect of plasma depended on the salt level. That fits the idea that plasma shifts the osmotic environment around the cells. It does not prove the mechanism, because we did not measure reactive species directly. That part is still a hypothesis.',
 'Limitations':'We ran a limited number of repeats. Clumped cells at 30 seconds probably caused some misclassification. Clotting was judged by eye, not measured. We did not test whether membranes stayed intact, and the image-analysis program has not yet been checked against hand-labeled images.',
 'What comes next':'More repeats so the results can be tested statistically, a finer range of salt concentrations around 0.9%, more exposure times between 0 and 30 seconds, direct measurement of hydrogen peroxide, nitrite, and nitrate, quantitative measures of clotting and membrane damage, and a check of the image-analysis program against manual labels.',
 'My role':'I led our three-student research group and am first author on the paper and talks. Dr. Sohail Zaidi (San Jose State University and the Intelliscience Institute) provided the plasma equipment and image-analysis code, and Dr. Mikhail Shneider (Princeton University) gave feedback throughout. I worked on the image classification and analysis and the write-up.'}},
{id:'swarm',s:'research',t:'Swarm robotics',d:'Using a mobile app to coordinate a group of small robots. Presented at IEEE, SCCUR, and NCUR.',tags:['robotics','swarms','coding'],rel:['vision','ai4m','rbc'],
 meta:['First author and group leader','Intelliscience Institute','IEEE 2023, 2025 · SCCUR 2024, 2025 · NCUR 2025'],
 tl:[['Mar 2023','IEEE poster and abstract'],['2024','SCCUR presentation: Arduino swarm analysis'],['2025','NCUR poster'],['2025','IEEE presentation and paper on a mobile app for swarm control'],['2025','SCCUR presentation']],
 sec:{
 'Research question':'Can a software interface that programs and coordinates each robot make a swarm move together more accurately?',
 'Background':'A swarm is a group of simple robots that work together without a central controller. Swarms could help with jobs from medicine to space exploration, but their behavior is hard to design, because you can only program individual robots and hope the group behavior comes out right.',
 'Method':'Phase one used nine LEGO EV3 robots with infrared sensors that moved by sensing the robots around them. Phase two used Lafvin Arduino robots with line tracking and obstacle avoidance, controlled by Python programs. Later work added a mobile app that sends commands to the robots wirelessly, and a technique called dead reckoning, which estimates a robot’s position from its speed, direction, and travel time.',
 'Observations':'Six robots were working with the app. When we timed the delay between pressing a command and the robot starting to move, it stayed between 0.17 and 0.21 seconds across six different commands.',
 'Limitations':'Dead reckoning drifts, because small errors in speed and turning add up. The current motors probably lack speed encoders, so position can only be estimated.',
 'What comes next':'I have drafted a parts list for a second swarm with mecanum wheels (which can move sideways), motors with encoders, and ESP32 boards. It is planned, not built.',
 'My role':'I lead the student research group, am first author on the abstract, poster, and paper, and built the Python mobile apps that coordinate six Lafvin robots. Our mentor is Venkat Prasanna Kumar of the Mechanical Engineering department at San Jose State University.'}},
{id:'igem',s:'research',t:'iGEM synthetic biology',d:'A synthetic biology competition with the KhanLab-BayArea team. Gold medals in 2025 and 2026, and team lead for 2027.',tags:['synthetic biology','biology','wiki'],rel:['rbc','synapse','bbay'],
 meta:['Gold medal 2025','Best Value Project 2025','Quorum’s Choice 2025','Gold medal 2026','Team lead 2027'],
 tl:[['2025','Gold medal, Best Value Project (GOGEC Best Value Award), Quorum’s Choice, and a Village Award nomination with Rock the Plastics'],['2026','Gold medal with The Cluck is Ticking. Human practices and wiki coding'],['Jan 2027','Planned: middle school workshops at BioCurious in Santa Clara'],['2027','Team lead']],
 link:['Team site','https://sites.google.com/khanlabschool.org/igem/home'],
 sec:{
 'Overview':'iGEM is an international synthetic biology competition. Our team, KhanLab-BayArea, is based at Khan Lab School and also takes students from other schools. Each year the team picks a problem, designs a solution with engineered biology, and presents it at the competition.',
 '2025: Rock the Plastics':'The project used curli fibers made by bacteria to trap microplastics, then grew a mineral material around them so the plastic stays contained. At the Global Open Genetic Engineering Competition (GOGEC) the team earned a gold medal, the Best Value Project award, Quorum’s Choice, and a Village Award nomination.',
 '2026: The Cluck is Ticking':'A biosensor that turns blue when it detects chemicals released by spoiling meat, aimed at reducing food waste. The team earned a gold medal. I worked on human practices and wrote the code for the team wiki, which meant learning CSS, HTML, and Bootstrap.',
 '2027: team lead':'As team lead I handle expert outreach, the wiki, administration, and recruiting. We are also planning a middle school workshop series at BioCurious in Santa Clara, starting in January 2027.'}},
{id:'sra',s:'research',t:'AI and racial bias',d:'My Summer Research Academies project: a literature review on whether AI face recognition shows the same kind of racial bias as the human brain.',tags:['AI','neuroscience','bias'],rel:['retina','rulers','vision','synapse'],
 meta:['Summer Research Academies','Rethinking AI track','1 of 30 chosen from about 600 applicants'],tl:[],
 sec:{
 'Program':'This is my Summer Research Academies (SRA) project, done in the Rethinking AI track. I was one of 30 students chosen from about 600 applicants.',
 'Research question':'To what extent do the computational mechanisms behind AI facial recognition mirror the cognitive and neurological processes that produce racial bias in human facial recognition?',
 'Background':'AI face recognition is used in healthcare, surveillance, border security, and hiring, and it often works less accurately for some racial groups. The open question is whether these systems only learn biased data or also process faces in ways that resemble human bias.',
 'Method':'A ten-page literature review drawing on more than sixty sources across computer vision, cognitive neuroscience, and related fields.',
 'My role':'I conducted this research during the Summer Research Academies program, where I was one of 30 students selected from about 600 applicants.'}},
{id:'retina',s:'research',t:'Retina modeling',d:'Studying what a neural network learns when it compresses images, and how that compares with the way the retina encodes vision.',tags:['neuroscience','AI','image analysis'],rel:['sra','vision','synapse','rbc'],
 meta:['In progress'],tl:[['Oct 2026','Worked through the autoencoder notebook and wrote up how each step works']],
 sec:{
 'Overview':'The project uses an autoencoder, a neural network that learns to compress and rebuild 32×32 pixel image patches. After training, the filters the network learned can be examined and compared with how the retina is thought to encode images.',
 'Where it stands':'I am working through the existing notebook step by step, from image patches entering the model through training, validation, and interpreting the filters, and writing down what each stage does and what the results can and cannot say about retinal coding.',
 'Limits':'A model that resembles the retina is not evidence that the retina works the same way, so the questions this notebook can test are narrow.',
 'My role':'Student researcher. At this stage I am learning and documenting the model before running experiments of my own.'}},
{id:'vision',s:'research',t:'Computer vision with ASDRP',d:'A new machine learning project on computer vision.',tags:['AI','image analysis','coding'],rel:['retina','rbc','swarm','sra'],
 meta:['Just starting','ASDRP'],tl:[],
 sec:{
 'Overview':'I am starting a computer vision project with ASDRP and leading the student team. The goal is something concrete enough to present at a conference.',
 'Why':'It builds on the image analysis I have done on blood cells and extends it to machine learning methods.'}},
{id:'rubberduck',s:'research',t:'RubberDuck AI internship',d:'User-testing, and research on how children perceive things and how fast they learn when they are taught, with the aim of designing experiments that could become a paper.',tags:['learning science','AI','education'],rel:['forrest','synapse','retina'],
 meta:['Intern','RubberDuck AI','In progress'],
 tl:[['2026','User-testing, and background reading on how children perceive things and learn at different paces']],
 sec:{
 'Overview':'I am interning with RubberDuck AI. The work combines user-testing with reading about the science of how children perceive things and how fast they learn when they are being taught.',
 'What comes next':'Designing experiments on how children learn at different paces. If they go well, they could become a paper.',
 'My role':'Intern.'}},
{id:'forrest',s:'community',t:'ForREST',d:'A student-led workshop group that teaches how stress, memory, and studying work. It is my Girl Scouts Gold Award project.',tags:['learning science','stress','community'],rel:['synapse','service','bbay','rubberduck'],
 meta:['Founder','Gold Award project','In development'],tl:[],
 sec:{
 'The problem':'Many students go through high school under heavy academic pressure without ever learning how stress, memory, cognitive load, and studying actually work. ForREST focuses on the move from 8th to 9th grade and on the high-pressure school culture of the Bay Area.',
 'The approach':'Student-led workshops built on research rather than productivity trends: about 10 to 15 minutes of explanation, followed by 20 to 30 minutes of activities. Students from 8th grade up can join, and high schoolers lead.',
 'How it is organized':'Small teams handle social media, content, events, and retention, and the group coordinates on Discord. Right now they are building the content, an outreach list, and the website.',
 'My role':'I started ForREST and run it as my Gold Award project, working with a team of student leads.'}},
{id:'synapse',s:'community',t:'Synapse Sisters',d:'A student-led neuroscience club for girls.',tags:['neuroscience','community','learning science'],rel:['forrest','retina','sra','igem','rubberduck'],
 meta:['Founder','Weekly meetings'],tl:[['Sep 2026','First guest speaker']],
 link:['Club website','https://synapse-sisters.lovable.app/'],
 sec:{
 'What it is':'A student-led neuroscience club for girls exploring the brain, psychology, and STEM through weekly discussions, guest speakers, and collaborative projects.',
 'What we do':'Each week we pick a topic, such as neuroplasticity, perception and illusions, or memory and learning, and discuss it. Members also work on projects in science communication.',
 'Speakers':'Our first guest was a spinal injury consultant with a neurosurgical background, who spoke in September 2026 about her path into medicine.',
 'My role':'Founder.'}},
{id:'service',s:'community',t:'Service',d:'Scam awareness for seniors, environmental service, and years of volunteering.',tags:['service','community','AI & society'],rel:['silver','forrest','bbay'],
 meta:['Girl Scouts Silver Award','VTSeva Gold award','98.43 service hours'],tl:[],
 sec:{
 'VTSeva':'I am one of ten youth leads for about 100 volunteers, and the Environmental Service Lead. I earned the VTSeva Gold award for more than 100 hours, which included trash cleanups, tree planting, helping RAFT distribute affordable school supplies to teachers, writing pen pal letters to seniors, and running fundraisers where I applied mehendi to support people with disabilities in India.',
 'Girl Scouts Silver Award':'I taught seniors how to spot and respond to digital scams. The full project has its own page.',
 'Service Unit Volunteer Award':'Recognized for 98.43 volunteer hours with Girl Scouts.',
 'Lead the Way':'I am on the recreation committee that plans activities for a conference of more than 100 girls from across the US.'}},
{id:'silver',s:'community',t:'Silver Award: scam awareness for seniors',d:'A Girl Scouts Silver Award project that taught older adults how to recognize and respond to digital scams.',tags:['service','AI & society','education'],rel:['service','forrest','sra'],
 meta:['Girl Scouts Silver Award','5 senior homes visited','About 50 logged hours','2024–2025'],
 tl:[['Nov 2024','Chose the topic, wrote the project plan, and started an hours log'],['Dec 2024 to Jan 2025','Research, presentation outline, and ideas for games and handouts'],['Feb to Apr 2025','Slides, extra research, timing for each section, and the final presentation'],['May 2025','Run-through with my family and a script for the audience activity'],['2025','Presented at senior homes and collected audience feedback'],['Ongoing','One senior home presents the material every three months']],
 sec:{
 'The problem':'Online scams are growing, and older adults are a common target. Scammers reach people by email, phone, and social media, and the crimes are hard to trace.',
 'The plan':'I wanted to teach seniors in person. My plan was a presentation of about an hour, a visit to at least two nearby retirement homes, and a conversation with each home’s management about continuing the talk after I left. Before settling on this, I had considered a youth business fair, a girls’ coding club, and a STEM entrepreneurship camp.',
 'What I made':'A 30-slide presentation called Digital Scamming Awareness. It covers what a scam is, the most common online scams aimed at seniors and how to avoid them, and what to do if you are scammed. It ends with an activity where the audience decides which of two options is the scam. I also made games and reflection questions built around short videos, handouts, a poster, a feedback form for the audience, and a website.',
 'Results':'I visited five senior homes and put up posters in two. One home agreed to present the material itself every three months, so the talk continues without me.',
 'My role':'I planned, researched, designed, and presented the whole project and logged just over 50 hours of work on it.'}},
{id:'ai4m',s:'projects',t:'AI4Makers',d:'A student-led AI development club at Khan Lab School that I co-founded. Students in grades 6 to 12 build their own apps, websites, and games.',tags:['AI','coding','entrepreneurship','community'],rel:['swarm','bbay','vision'],
 meta:['Co-founder','25 active builders','19 projects started','KSN AI Fellowship'],
 tl:[['Fall 2026','Weekly meetings begin, with Replit accounts and credits for students'],['Nov 2026','Selected for the KSN AI Fellowship'],['Dec 2026','Planned: Prototype Fair'],['Mar 2027','Planned: Demo Day'],['Jun 2027','Planned: Buildathon with other schools']],
 link:['Website','https://ai4makers.org/'],
 sec:{
 'What it is':'Students learn to turn their own ideas into working apps, websites, and games, with no coding experience required. Each session starts with a short introduction to a tool, then time to build. We teach a loop of specifying, building, inspecting the code, testing, improving, and shipping.',
 'Where it stands':'In its first two months of weekly meetings the club reached more than 30 students, 25 of them active builders, and 19 projects were started. The curriculum has nine Studios; the first is published and the rest are in development.',
 'Recognition':'AI4Makers was selected for the KSN AI Fellowship in November 2026 to build an open starter kit so other schools can start chapters. Replit provided accounts and project credits, and we presented at the Khan Lab School AI in Education Summit.',
 'My role':'Co-founder, with Anandita Mukherjee.'}},
{id:'bbay',s:'projects',t:'Business and startups',d:'A school-year program at Berkeley Haas on business basics and building a startup pitch, plus a year running the school Student Store.',tags:['entrepreneurship','community'],rel:['ai4m','forrest','service'],
 meta:['Berkeley Haas BBAY','Student Store CEO'],tl:[],
 sec:{
 'Berkeley Haas BBAY':'In this school-year program students learn business fundamentals and work in teams on a startup pitch. It ends with a certificate and a personalized recommendation letter. My team is working on its concept, feature list, competitor research, and revenue streams.',
 'Student Store':'I was CEO of the school Student Store for a year and now mentor the people running it.'}},
{id:'rulers',s:'writing',t:'The Ruler’s Game',d:'A dystopian story about a world ruled by AI.',tags:['fiction','AI & society'],rel:['sra','ceto','journal'],meta:['Self-published on Amazon'],tl:[],
 link:['Amazon','https://www.amazon.com/Rulers-Game-Shreeya-Kurapati-ebook/dp/B0DVPB66WC'],
 sec:{'About':'A dystopian story set in a world where AI rules. I wrote it and published it myself as an ebook.'}},
{id:'ceto',s:'writing',t:'The CETO Conspiracy',d:'An anthology of stories written and published by my class.',tags:['fiction'],rel:['rulers','journal'],meta:['Class anthology','Self-published on Amazon'],tl:[],
 link:['Amazon','https://www.amazon.com/dp/B0G9H11CHS'],
 sec:{'About':'A collection of stories my class wrote and published together.'}},
{id:'lastguest',s:'writing',t:'The Last Guest',d:'A four-book Homeric poem in iambic pentameter, written with Shanti, about the Phaeacians after Odysseus leaves.',tags:['poetry','fiction','Homer'],rel:['journal','rulers','ceto'],meta:['Written with Shanti','Four books','Iambic pentameter'],tl:[],
 link:['Read the poem','#/blog/last-guest'],
 sec:{
 'About':'Our Homeric fan fiction retells what happens on the island of Scheria after Odysseus leaves. Poseidon turns one Phaeacian ship to stone, and the council has to decide whether to defend their hospitality or obey the god. The poem is told from the Phaeacians’ side, a place the Odyssey leaves mostly unexplored.',
 'Techniques':'We borrowed Homer’s devices: starting in the middle of the action, epithets such as rosy-fingered Dawn and earth-shaker, extended similes, stories within stories, and gods who shape what mortals do.',
 'Themes':'Xenia (hospitality as a moral test), fate against free will, and gender inequality through Arete and Nausicaa.'}},
{id:'journal',s:'writing',t:'Khranicle and the KLS literary journal',d:'Managing Editor of the Khranicle and co-founder of the KLS literary journal.',tags:['editing','fiction'],rel:['ceto','rulers','lastguest'],meta:['Managing Editor','Co-founder','First edition: December 2026'],tl:[],
 sec:{'Khranicle':'I am the Managing Editor.','KLS literary journal':'I co-founded it, and the first edition comes out in December.'}}
];
const Q=[
'From my Summer Research Academies review: to what extent do the computational mechanisms behind AI face recognition mirror the processes behind racial bias in human face recognition?',
'How do reactive species made by plasma change cell membranes, and can they be measured directly?',
'Does the clotting seen after longer plasma exposure help wound healing, or does it show cell damage?',
'How can swarm behavior be designed without trial and error?',
'Could AI predict how a swarm of robots will move?',
'How can image analysis pick up subtle changes in neurological conditions such as Parkinson’s disease?',
'What do students need to understand about stress, memory, and cognitive load to study well?',
'How does a child’s pace of learning change which way of teaching works best?'];
const IDEAS=[
'A second-generation robot swarm with mecanum wheels, motors with encoders, and ESP32 boards. I have drafted the parts list but have not built it.',
'Using AI to predict robot movement in a swarm, an idea from my team’s planning document.',
'Applying image analysis to neurological conditions, building on my work with blood cells.',
'Workshops for parents and physical learning products for ForREST, which came up at a leadership meeting.'];
const N=[
['Jul 2026 · Plasma','At 30 seconds of plasma exposure the blood cells started to clump, and longer exposures clotted, so 30 seconds became the limit for the experiment.','How long can the plasma run?'],
['Nov 2025 · Swarm','Across six commands, the delay between pressing a button in the control app and the robot starting to move stayed between 0.17 and 0.21 seconds.','How fast does a robot respond?'],
['Jun 2026 · Reading','The gap I keep running into in swarm robotics papers: group behavior is still mostly designed by trial and error.','What do swarm papers still miss?'],
['Nov 2026 · RubberDuck AI','I am looking into the science of how children perceive things and how fast they learn when they are taught, alongside user-testing, so we can design experiments that could become a paper.','How does pace change learning?']];
const DOCS={lastguest:[{label:'Original Google Doc',url:'https://docs.google.com/document/d/1Ku-SwElXjjJX8Tcal39rnz5MaosbWP-j4b21z86lXT0/edit?tab=t.nho70cwvow11'}]};
const CONTACT={email:'shreeyakurapati@gmail.com'};
/* Lab notebook logs (#/notes). p = project id. Add h, e, f (hypothesis, experiment, finding); empty ones are hidden. */
const LAB=[
 {
  "p": "rbc",
  "date": "Jul 2026",
  "status": "Paper accepted at IEEE IECBES 2026",
  "fig": "rbc",
  "q": "Does the clotting seen after longer plasma exposure help wound healing, or does it show cell damage?",
  "h": "Plasma exposure changes the osmotic environment around the cells, so plasma-treated blood should look more like blood sitting in saltier solution.",
  "e": "Mixed whole blood with sodium chloride solutions from 0% to 5%, exposed each sample to a helium plasma jet for 0, 15, or 30 seconds, and photographed about five fields per condition.",
  "f": "At 30 seconds the cells began to clump, and longer exposures clotted, so 30 seconds became the upper limit. Exact percentages are held until the IEEE paper is published.",
  "cap": "Fig. 1. The experiment, start to finish. Margins mark what I noticed."
 },
 {
  "p": "swarm",
  "date": "Nov 2025",
  "status": "Second-generation swarm planned, not built",
  "fig": "swarm",
  "q": "How can swarm behavior be designed without trial and error?",
  "h": "A software interface that programs and coordinates each robot can make a swarm move together more accurately.",
  "e": "Built Python mobile apps that send commands wirelessly to six Lafvin Arduino robots, then timed the delay between pressing a command and the robot starting to move.",
  "f": "Across six commands, the delay stayed between 0.17 and 0.21 seconds.",
  "cap": "Fig. 2. How a command travels from the app to the robots."
 },
 {
  "p": "rubberduck",
  "date": "Nov 2026",
  "status": "In progress",
  "fig": "rubberduck",
  "q": "How does a child’s pace of learning change which way of teaching works best?",
  "e": "User-testing, plus reading the science on how children perceive things and how fast they learn when they are taught.",
  "f": "Experiments are next. If they go well, they could become a paper.",
  "cap": "Fig. 3. Where the internship is headed."
 }
];
/* Blog posts (#/blog). poem = books of stanzas; a blank line between stanzas is automatic, line breaks are \n. */
const BLOG=[
 {
  "id": "last-guest",
  "kind": "Poetry",
  "t": "The Last Guest",
  "d": "A four-book Homeric poem in iambic pentameter, told from the side of the Phaeacians after Odysseus leaves.",
  "meta": [
   "Written with Shanti",
   "Homeric fan fiction",
   "Iambic pentameter"
  ],
  "tags": [
   "poetry",
   "Homer",
   "fan fiction"
  ],
  "links": [
   [
    "Original Google Doc",
    "https://docs.google.com/document/d/1Ku-SwElXjjJX8Tcal39rnz5MaosbWP-j4b21z86lXT0/edit?tab=t.nho70cwvow11"
   ]
  ],
  "intro": "This series of four books invites the reader to see from a perspective and place that is inadequately explored in <em>The Odyssey</em>. The Phaeacians largely differ from the rest of Homeric society; they are described as magical and are largely dependent on Poseidon. In our Homeric fan fiction, “The Last Guest,” we wrote in iambic pentameter, which is what Emily Wilson’s translation of <em>The Odyssey</em> is also written in. Though the original Homer books were written in dactylic hexameter, it is hard to implement the rhythm in English.",
  "notes": "<p>We made annotations throughout the books. Here is a summary of all of them, and a more cohesive analysis of the elements we used and how.</p><h3>Storytelling techniques</h3><ul><li><em>In medias res</em> (beginning in the middle of the action). Our story begins when Scheria has already fallen and been punished by Poseidon. The conversation within the council shows the reader how serious the predicament is and keeps them waiting for a way to resolve it.</li><li>Framing and embedded narratives (stories within stories). Both when Alcinous begs Poseidon to let Scheria go and when the stranger preaches about <em>xenia</em> to the Phaeacians, embedded narratives reference past stories and weave in background.</li><li>Direct speech and long speeches that reveal character or values. Poseidon’s long speeches in Book 2 show his perspective on the events regarding Odysseus, and words such as ‘injustice’ frame them negatively. You can gauge his feelings from what he gets angrier at and from how he describes Odysseus as a murderer and a ‘wily’ man.</li><li>Divine intervention frames the story by shaping mortal events. This entire story is about divine intervention: Poseidon punishes the Phaeacians for showing <em>xenia</em> to Odysseus, which is a huge negative for Scheria. Alcinous and the other Phaeacians interact a lot with the gods, so those interactions can decide the fate of Scheria forever.</li></ul><h3>Language and style</h3><ul><li>Formulaic phrases and epithets. Repetition, especially in formulaic phrases and in epithets that describe characters, appears throughout. “Rosy-fingered Dawn” is used many times in <em>The Odyssey</em>, so we brought it in for repetition. We also use epithets such as “bright-eyed” for Athena and “earth-shaker” for Poseidon to highlight certain aspects of their characters.</li><li>Epic or extended similes comparing human action to nature or myth.<ul><li>The comparison of the stranger to a bird is an epic simile: it compares the stranger swimming for his life to a bird that cannot fly no matter how hard it tries.</li><li>In the first book, the ship anchored to the shore, turned to stone, is compared to a noble specimen with clipped wings.</li></ul></li><li>Symbols. The eagle and lightning represent Zeus’s presence, olive trees and silk reference Athena, and tides and horses represent Poseidon. Comparing Phaeacian ships to birds symbolizes a revoked sense of freedom, as in ‘a noble specimen with clipped wings.’ At the end of Book 4, the stone ship is symbolic of the spirit of the Phaeacians.</li><li>Diction. We use language that signifies entrapment. Birds, like ‘a noble specimen with clipped wings,’ and other references to eagles and owls let you compare Scheria to a bird in a cage trying to fly. When the man is drowning, he is prevented from escaping, much like a bird unable to fly cannot be liberated. Switching between calling the man arriving on the island ‘the man’ and ‘the stranger’ is intentional and shows how the Phaeacians are treating him.</li></ul><h3>Themes and motifs</h3><ul><li>Gender inequality (focusing on Arete and Nausicaa).<ul><li>Arete is the queen of Scheria, a figure of respect and a descendant of Poseidon. In the council scene the court respects her and considers her opinions when making decisions. When Alcinous begs Poseidon for mercy, he uses her connection to the god as an argument, which shows how stable her position is in Phaeacian society.</li><li>Nausicaa is described as beautiful, both in the <em>Odyssey</em> and in this series, with the epithet “white-armed.” Alcinous’s embedded narrative shows her to have good <em>xenia</em>, which is rare for a young girl, since <em>xenia</em> is often associated with intelligence and wealth. In ancient Greece, this would have been a revolutionary idea.</li></ul></li><li><em>Xenia</em> (hospitality as a moral test). <em>Xenia</em> is a key term in the <em>Odyssey</em> and the reason for this entire story. Poseidon did not like Scheria’s hospitality to Odysseus, which is why Scheria is in need at the start of Book 1. The stranger also tells the story of Eumaeus to show an example of good <em>xenia</em> and how it relates to status and wealth.</li><li>Fate vs. free will; mortal vs. divine agency. Once Poseidon is angry with them, the Phaeacians cannot survive. This dependence on a god’s mood and behavior limits the free will of the people of Scheria, since they have to cooperate for the sake of their lives.</li></ul>",
  "poem": [
   {
    "h": "Book 1",
    "p": [
     "A faithless ocean surrounds Scheria.\nIn its tides once stood a singular ship,\nits hull rooted to the seafloor, akin\nto a noble specimen with clipped wings.\nThe Phaeacians stared with their eyes transfixed,\nfor such a sight was deemed impossible.\nThey stood as still as the golden palace,\nwhere, inside, conflict had begun to brew.",
     "There, Alcinous and godlike Arete\nsat high upon two polished golden stones,\nabove the stirring Phaeacian chieftains.\n“This is the craftsmanship of the great gods,\nthey are trying to warn us of something!”\nThe nobles whispered to one another,\ntheir voices sounded frantic and restless.",
     "Then, the great king Alcinous commanded:\n“Council, nobles, leaders of Scheria!\nMy father Nausithous had once foretold,\na time when our hospitable nature\nwould anger Poseidon, the earth-shaker.\nIt is said that he would destroy our ships,\nand bury our island with a mountain.\nIt seems that now, that time has finally come,\nfor one of our very own swift-winged ships\nstands stiff, turned to stone.\nWe gave our aid to a stranger in need\nand angered the great sea-god Poseidon,\nhis hand more fearsome than ever before.\nAlthough our hearts were pure in assisting\nOdysseus, I am led to question\nthe righteousness of our decision.\nAnswer me, should Scheria repent and\nobey Poseidon, the revered sea-god?\nOr do we instead stand by our own choice,\ndefending our decision to assist\na stranger in need, no matter the cost?”",
     "The first to respond was Euryalus,\nson of Naubolus: “My king Alcinous,\nWe are famed for our hospitality\ntowards many lost, seafaring travelers.\nOur actions towards Odysseus were no\ndifferent. We have not committed a crime\nby assisting someone in need. Yet\nstill we are tested with such a challenge –\none of our ships is in ruin, turned to stone.\nWe should try to defend our righteous choice!\nAt sea, our defenses are strong enough\nto withstand the wrath of the great sea-god.”\nHis bold words sent waves of shock across the hall.\nMurmurs arose, rippling throughout the room.",
     "Then Arete, her mind sharp and voice strong,\nrose from her golden throne like a goddess.\nThe air turned still as stone, all eyes followed.\nShe began, choosing her words with care:",
     "“Yes, you speak the truth.\nOur decision to be hospitable towards\nOdysseus was assumed with good intent.\nBut we cannot forget our history.\nThe great Poseidon has long provided\nour own ships and protection. He is our\npatron god, and we are his descendants.\nWe were warned of dire consequences,\nallowing strangers within our own gates.\nIf we choose to disobey Poseidon,\nhe who controls the sea and shakes the earth,\nwe will not only be reduced in ruin\nand wreckage, but a tarnished reputation\nwill fall upon our names and legacy.\nOur hubris will soon become our downfall.”\nA minute of contemplation ensued.\nThe hall stood still with silence, the council\nof men considered her impactful words.",
     "The virtuous Alcinous responded,\n“Arete, you speak a terrible truth.\nIndeed, we will follow the earth-shaker’s\ncommands, heeding his warning. I shall speak\nto the people, we will sacrifice twelve\nbulls to appease the dark-haired Poseidon.\nFrom now on, no foreign ships will enter\nnor leave the great island of Scheria.”",
     "So spoke the Phaeacian king, all was settled."
    ]
   },
   {
    "h": "Book 2",
    "p": [
     "As early-born Dawn rose across the sea\nAlcinous looked to the sea, the waves crashed\nagainst the rocky shores, adorned with wrecks\nmade by the poor fools trying to escape",
     "Thus he spoke, watching bulls being prepared,\nTo be sacrificed to great Poseidon\n“O dark-haired Poseidon, son of Cronus,\nOur island is suffering, the ship fixed\nas it is chained to the floor of our shores.\nOdysseus has gone, please have mercy\nWe are your people, your own descendents.\nIntelligent Nausithous, the founder\nOf our magical civilization,\nGave us your blessings, led us away from\nthe dreaded Cyclopses out to get us.\nPlease listen, O Great God, ruler of seas\nYour grand, bronze statue shines in our temple.\nPlease forgive us for your sins, we need you\nFor our ships, for our trade, for our living.”\nAnd thus the king looked to the sky, praying,\nHoping that the god might release his spell.",
     "Stubborn Poseidon, his anger growing,\nwas unperturbed. He responded gravely\nto the king, the waves crashing around him.\n“You have aided a demon, a wily man,\nthe man who has blinded my dearest son.\nCrafty Odysseus who tricks his men.\nHe sacrifices others, and you, the king,\nhelped him, despite knowing the prophecy.”\nThe king was distraught, he pleaded further,\nOffering flowers and boats to the sea\nAnd twelve fine bulls, with great build and meat.\n“That man, the ever-cunning Odysseus\nHe lulled our hearts with stories of Cyclopses\nShowing his strength, evoking our pity,\nThat man weeped hearing the stories of Troy.\nI was fooled, O earth-shaker, forgive me,\nMy blindness was devised by Zeus himself.”",
     "Thus, earth-shaker Poseidon’s anger grew\nHe questioned, horses stampeding around:\n“Zeus claimed your thoughts, you say, then answer me:\nWhy did your daughter, white-armed Nausicaa\nAn unmarried woman, stand unflinching\nBefore that horrid man, him standing\nBare before her with nothing but a leaf.\nShe gave him clothes and useful instructions\nShe told him of Phaeacian magic.\nYour wife, descendent of my blood, was fooled,\nShe pitied a man who so clearly feigned\nA man who stretched his stories of murder\nOf his injustice to Polyphemus.\nAs you heard calmly, I will not forgive\nSuch an unsympathetic man as you.”\nHis words sent ripples far through the ocean,\nGreat waves crashed on the shores of Scheria.",
     "Alcinous was desperate, pleading with tears.\nHe sank to his knees, he begged one last time\nto preserve his daughter and his kingdom.",
     "“Please have mercy, O Sea Ruler, she is young\nwe taught her <em>xenia</em> and she followed.\nWe have heard the prophecy warning us\nthat our aid would land us in deep trouble\nyet we kept on welcoming the strangers.\nOur council has decided to continue\nto worship you, to strengthen our bond.\nHave mercy on us, we have revered you\nFor three long generations, while on Scheria,\nIt is deceptive, bright-eyed Athena,\nwho made Nausicaa commit such a crime.\nO Daughter of Zeus, Pallas Athena,\ntell the truth, tell us of Odysseus\nto release the anger this man has on me!”\nAlcinous rose, looking up to the skies.\nHe took out of his pocket, a garment\nwoven by his wife, made of finest silk.\nHe gave this tribute and waited for her.",
     "And a small olive tree grew before them\nwhere he once kneeled, its leaves spreading around.\nPosiedon, son of Cronus, watched it grow,\nhis anger growing greatly as well.\nAthena descended, her owl eyes bright,\nprepared for battle, the epitome\nof ever-lasting beauty and glory.\nShe spoke, accepting the Arete’s silk,\nShe turned to earth-shaker Poseidon,\nTo the endless water from the great tide\n“Uncle, great sea-god, Scheria worships you.\nThey were following the orders of Zeus.\nWhy do you torture Odysseus so?\nHe has just returned home to Ithaca,\nTo his wife, his son, and to his kingdom.\nWe once collaborated after Troy\nTo wreck the ships of the Greeks filled with goods.\nAfter the unjust rape of Cassandra\nBefore my statue, in my own temple\nBut the time is up, we must not bother\nThe clever man or those who aided him\nOdysseus did not rape Cassandra,\nthough he may be a man of many turns.\nThe Phaeacians did not wrong you\nAnd Odysseus will journey again,\nAs Teiresias told, to make amends\nTo sacrifice to you and all the gods.”",
     "And so she looked to stubborn Poseidon\nThe ruler of the seas and earth-shaker.",
     "He stood unyielding, his anger boiling\n“Alcinous was warned by a prophecy\nYet he continued, helping every man,\nNo matter if good or bad, who drifts here\nI stand by my word until given sea\nAnd sacrifices made by Odysseus\nNo boat or ship shall exit this island\nUntil Odysseus’s pledge to the gods\nEven now, one is anchored to your shores.\nScheria’s suffering for lack of trade\nIs not attributed to my actions\nBut to Zeus, controller of many minds,\nAnd to the Phaeacian royal family.\nFor their actions were wrong in this matter\nHowever, after the cunning man’s pledge,\nyou will once again prosper on the sea.\nThis is the extent of my great mercy.”\nAnd he left, diving into the ocean\nLeaving all the boats still stoned and useless",
     "Athena left Alcinous a fine strand\nOf the best silk that can be found through trade\nA great never-ending strand for his wife\n“There will be a long battle between gods.\nDemodocus will soon sing in your halls.\nHeed his warnings with the utmost of care.”\nAnd with this, she departed from the land\nMorphing into an owl, looking down\nAt the olive tree, its branches spread out\nOverlooking the chaos that followed\nAnd pitiful victim receiving news\nA guard had run up to wise Alcinous\nStuttering, explaining the strange event\nA bald eagle had chipped away at the stone ship\nShaping it to resemble a large bed\nImmovable, as if made from a tree\nThe waters surrounding had turned murky\nThe people were fighting, praying to god,\nPoseidon, who heard their prayers and wails\nBut waited for Odysseus to pray\nAnd sacrifice to him before breaking\nthe punishment to the Phaeacians.",
     "Alcinous rushed away to witness this,\nThe great spectacle of the century\nAnd then to his special place, his garden\nWhere Odysseus had once sat in wait\nTo see the Pallas Athena’s statue\nAnd to worship Poseidon for mercy\nAnd after he exited, a stranger\nDraped in seaweed, gasping in deep breaths\nSwept onto the shores, waves crashing about\nEverywhere but his body, caked with sand\nEagles circling around his handsome face\nEver-suffering, sleep was poured on him\nUntil rosy-fingered Dawn rose again."
    ]
   },
   {
    "h": "Book 3",
    "p": [
     "As Dawn rose with its rosy-fingers spread,\nNobles were screaming at one another\nDiscussing the cause behind the water,\nThe lifeless sea creatures floating about\nThe great immovable ship, standing there\nbetween the rocky shores and the blue waves\nBulls were being slaughtered in the village\nThe dark blood running down into the streets\nAll sacrificed to mighty Posiedon",
     "Then the man walked in, his being turning\nthe heads of all the persons in that room\nA bald eagle perched on his right shoulder.\nThe stranger’s body was clean, with freckles\nOf salt, catching the light like small Zeusites\nSome burly guards following behind him\nTheir hands twitching, their faces hesitant\nGreat Alcinous stepped forward, his face grim,\nHe demanded, glancing at everyone\n“Who are you, stranger? Why have you come here?\nWe are isolated from outsiders,\nIt is no easy feat to come find us.\nSurely Zeus would understand our problem”\nThe court nobles added, their eyes watching,\nMurmurs arose and glances were exchanged\nSoon, the guards pushed the stranger to the floor.",
     "He looked to Demodocus, the blind bard,\n“Sing, famed poet, sing the city of Athens\nAnd the story about its patronage!\nSing of the contest between Athena\nAnd Posiedon to decide patronage”",
     "And so Demodocus was inspired\nby the gods at Mount Olympus above.\nHe stepped forward, having found a great tale.\nHe started with how witty Athena\nand Poseidon saw Athens’s potential.\nThey held a contest at Acropolis.\nBoth gods sank their weapons into the ground.\nFrom Poseidon’s trident came a fine horse.\nFrom Athena’s spear grew an olive tree.\nKing Cecrops chose Athena because her\ngifts would be useful to the city.\nThe city was named Athens to honor\nthe owl-eyed goddess. So the poet sang.",
     "The man rose, shaking off the soldiers,\n“History will repeat, great Alcinous.\nListen to the story of Eumaes,\nthe lost prince and one who kept his honor.\nOdysseus has returned to his wife,\nwhite-armed Penelope and his own son.\nHe did not return a king, but disguised\nas a beggar, having to fight for food.\nHe visited Eumaes, the swineherd\nwho welcomed him as if he was a prince,\nsleeping outside, listening to the tales\ntold by Odysseus of his journey.\nEumaes gave the best of what he had”",
     "The Phaeacians listened to the stranger\nbut Euryalus spoke up, his eyes raging,\n“Great Alcinous, you are a mighty king.\nSurely you understand the intention\nbehind the story by this wicked man.\nPunish him for angering Poseidon.\nKeeping him here will bring more punishment.\nLet us send him into the deep ocean\nand use him as a sacrifice to god.”\nAnd so he gestured, before anyone\ncould argue, grabbing the stranger’s arms and legs.\nMany noblemen joined him, marching to\nthe ocean to drown the cunning stranger.",
     "And there everyone watched as they put him\nonto a boat made out of broken wood\nIt was crafted before the statue of\nPoseidon himself, to get his blessing.\nYet one could tell the boat would not last\nEuryalus spoke, excited to see it,\n“Let us send you back to your home, stranger.\nMay you have a hearty life with Hades.”\nHe pushed the boat into the blue ocean\nIt only travelled for some short distance\nBefore it slowly sank, leaving nothing\nabove the land, exposed to air.",
     "So helpless was the stranger, latching on\nto the broken boards, gulping down water\nand waving his arms like a bird,\nhe was so unsuccessful that he seemed\nlike a bird with clipped wings,\nunable to fly no matter how hard he tried."
    ]
   },
   {
    "h": "Book 4",
    "p": [
     "Then, the servants brought bulls to sacrifice\nas a final rite to the earth-shaker.\nAs the tide calmed, lightning crashed from above.\nZeus, Xenios, was enraged by this scorn,\nsuch a blatant disrespect. He gathered\nhis thunderbolts, and left on his golden\nchariot for the Phaeacian island,\nwhere the sea-god Poseidon stood in pride.",
     "Zeus arrived at the site of the stone ship,\non the seafloor. His voice boomed in anger:",
     "“Brother! How dare you invoke disrespect\nin the minds of those who accept strangers?\nTheir foul acts forsake hospitality.”\nThunder sounded, clouds gathered above sea.",
     "Poseidon listened calmly through the\nwater, his response quiet and careful:\n“Brother, answer me this, how does one\njustify hospitality towards those\nwith bad intentions? Not all are worthy,\nand it should not be given plentifully.\nOdysseus has wronged me, he has torn\nthe hearts of many. The Phaeacians knew\nof his wrongdoings, yet still they helped him.”",
     "The sea then rose in retaliation,\nit crashed from below.\nThen, the bright-eyed Athena swooped down from\nthe trees, she turned back to her godly form.\nIn between the tides and the sky, she first\naddressed her father Zeus, Lord of Thunder.\n“Father, your justice remains unquestioned,\nyou defend the virtues by which you stand.\nEven so, these waters are the domain\nof Poseidon – he controls the sea and\nthe land it engulfs.\nUsing their magical ships, the people\nof Scheria have already defied\nthe limits of their patron Poseidon.\nHe has warned of the consequences of\nhelping strangers in the past, warnings\nthat went on to be ignored entirely.\nThe ruin of one ship helped stop all others\nfrom destroying the order, the sacred balance\nbetween man and god.\nI suggest you allow the Phaeacians\nto retain their honor, and retire\ntheir ships for the use of helping strangers.\nStill, justice rests in your hands alone. You,\nthe father of gods and of men, only\nyou know best how to maintain harmony.”",
     "The air was struck with Zeus’s silence, as\nhe carefully weighed Athena’s sound words.",
     "“My dear child, your words are wise and measured.\nIndeed, is important to maintain\nthe order between the mortals and gods.\nYet this act pushes the bounds of justice.\nEven the sea must answer to the sky.\nThe punishment of the Phaeacians must\nnot escalate further, no more harm can\nbe done to the island of Scheria.\nThis matter is settled, let each god hold\nto their own realm, let them trouble no more.”",
     "Thus, clouds cleared and sunlight shone on the sea.\nZeus rode his golden chariot up to his\neternal abode in Mount Olympus,\nand Posiedon, trident in hand, rode back\nto the ocean depths, his work was settled.",
     "The stone ship itself laid on the seafloor,\nits sails wrapped around the mast, pulled by ropes,\nit could not be seen from the land above.",
     "Yet sometimes, when the tides pull away and\nthe sky is without any clouds, when bright\nsunlight shines on the seas of Scheria,\nthe ship’s strong ram can be seen from afar."
    ]
   }
  ]
 }
];
