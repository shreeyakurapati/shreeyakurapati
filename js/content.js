/* ===== CONTENT: edit everything here ===== */
const S={
research:{n:'Research',d:'Research projects, papers, and talks.',x:.2,y:.32},
community:{n:'Community',d:'Groups I run and volunteer work.',x:.78,y:.28},
projects:{n:'Projects',d:'Things I’ve built and started.',x:.3,y:.76},
writing:{n:'Writing',d:'Books and journals.',x:.7,y:.74},
questions:{n:'Questions',d:'Open questions and ideas I haven’t tried yet.',x:.5,y:.5}};
const P=[
{id:'rbc',s:'research',t:'Plasma and red blood cells',d:'How cold atmospheric plasma changes the shape of red blood cells in different salt solutions. First-author research with mentors at the Intelliscience Institute.',tags:['plasma','biology','image analysis'],rel:['vision','retina','igem'],
 meta:['First author','Intelliscience Institute','SCCUR 2025 · NCUR 2026 · SCCUR 2026','IEEE IECBES 2026, Malaysia'],
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
 'My role':'First author on the paper and talks, written with two other student researchers. Dr. Sohail Zaidi (San Jose State University and the Intelliscience Institute) provided the plasma equipment and image-analysis code, and Dr. Mikhail Shneider (Princeton University) gave feedback throughout. I worked on the image classification and analysis and the write-up.'}},
{id:'swarm',s:'research',t:'Swarm robotics',d:'Using a mobile app to coordinate a group of small robots. Presented at IEEE, SCCUR, and NCUR.',tags:['robotics','swarms','coding'],rel:['vision','ai4m','rbc'],
 meta:['First author','Intelliscience Institute','IEEE 2023, 2025 · SCCUR 2024, 2025 · NCUR 2025'],
 tl:[['Mar 2023','IEEE poster and abstract'],['2024','SCCUR presentation: Arduino swarm analysis'],['2025','NCUR poster'],['2025','IEEE presentation and paper on a mobile app for swarm control'],['2025','SCCUR presentation']],
 sec:{
 'Research question':'Can a software interface that programs and coordinates each robot make a swarm move together more accurately?',
 'Background':'A swarm is a group of simple robots that work together without a central controller. Swarms could help with jobs from medicine to space exploration, but their behavior is hard to design, because you can only program individual robots and hope the group behavior comes out right.',
 'Method':'Phase one used nine LEGO EV3 robots with infrared sensors that moved by sensing the robots around them. Phase two used Lafvin Arduino robots with line tracking and obstacle avoidance, controlled by Python programs. Later work added a mobile app that sends commands to the robots wirelessly, and a technique called dead reckoning, which estimates a robot’s position from its speed, direction, and travel time.',
 'Observations':'Six robots were working with the app. When we timed the delay between pressing a command and the robot starting to move, it stayed between 0.17 and 0.21 seconds across six different commands.',
 'Limitations':'Dead reckoning drifts, because small errors in speed and turning add up. The current motors probably lack speed encoders, so position can only be estimated.',
 'What comes next':'I have drafted a parts list for a second swarm with mecanum wheels (which can move sideways), motors with encoders, and ESP32 boards. It is planned, not built.',
 'My role':'First author. I lead a student research group and built the Python mobile apps that coordinate six Lafvin robots. Our mentor is Venkat Prasanna Kumar of the Mechanical Engineering department at San Jose State University.'}},
{id:'igem',s:'research',t:'iGEM synthetic biology',d:'A synthetic biology competition with the KhanLab-BayArea team. Gold medals in 2025 and 2026, and team lead for 2027.',tags:['synthetic biology','biology','wiki'],rel:['rbc','synapse','bbay'],
 meta:['Gold medal 2025','Gold medal 2026','Team lead 2027'],
 tl:[['2025','Gold medal and a Village Award nomination with Rock the Plastics'],['2026','Gold medal with The Cluck is Ticking. Human practices and wiki coding'],['Jan 2027','Planned: middle school workshops at BioCurious in Santa Clara'],['2027','Team lead']],
 link:['Team site','https://sites.google.com/khanlabschool.org/igem/home'],
 sec:{
 'Overview':'iGEM is an international synthetic biology competition. Our team, KhanLab-BayArea, is based at Khan Lab School and also takes students from other schools. Each year the team picks a problem, designs a solution with engineered biology, and presents it at the competition.',
 '2025: Rock the Plastics':'The project used curli fibers made by bacteria to trap microplastics, then grew a mineral material around them so the plastic stays contained. The team earned a gold medal and a Village Award nomination.',
 '2026: The Cluck is Ticking':'A biosensor that turns blue when it detects chemicals released by spoiling meat, aimed at reducing food waste. The team earned a gold medal. I worked on human practices and wrote the code for the team wiki, which meant learning CSS, HTML, and Bootstrap.',
 '2027: team lead':'As team lead I handle expert outreach, the wiki, administration, and recruiting. We are also planning a middle school workshop series at BioCurious in Santa Clara, starting in January 2027.'}},
{id:'sra',s:'research',t:'AI and racial bias',d:'A literature review on whether AI face recognition shows the same kind of racial bias as the human brain.',tags:['AI','neuroscience','bias'],rel:['retina','rulers','vision','synapse'],
 meta:['Summer Research Academies','Rethinking AI track','1 of 30 chosen from about 600 applicants'],tl:[],
 sec:{
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
{id:'forrest',s:'community',t:'ForREST',d:'A student-led workshop group that teaches how stress, memory, and studying work. It is my Girl Scouts Gold Award project.',tags:['learning science','stress','community'],rel:['synapse','service','bbay'],
 meta:['Founder','Gold Award project','In development'],tl:[],
 sec:{
 'The problem':'Many students go through high school under heavy academic pressure without ever learning how stress, memory, cognitive load, and studying actually work. ForREST focuses on the move from 8th to 9th grade and on the high-pressure school culture of the Bay Area.',
 'The approach':'Student-led workshops built on research rather than productivity trends: about 10 to 15 minutes of explanation, followed by 20 to 30 minutes of activities. Students from 8th grade up can join, and high schoolers lead.',
 'How it is organized':'Small teams handle social media, content, events, and retention, and the group coordinates on Discord. Right now they are building the content, an outreach list, and the website.',
 'My role':'I started ForREST and run it as my Gold Award project, working with a team of student leads.'}},
{id:'synapse',s:'community',t:'Synapse Sisters',d:'A student-led neuroscience club for girls.',tags:['neuroscience','community','learning science'],rel:['forrest','retina','sra','igem'],
 meta:['Co-founder','Weekly meetings'],tl:[['Sep 2026','First guest speaker']],
 link:['Club website','https://synapse-sisters.lovable.app/'],
 sec:{
 'What it is':'A student-led neuroscience club for girls exploring the brain, psychology, and STEM through weekly discussions, guest speakers, and collaborative projects.',
 'What we do':'Each week we pick a topic, such as neuroplasticity, perception and illusions, or memory and learning, and discuss it. Members also work on projects in science communication.',
 'Speakers':'Our first guest was a spinal injury consultant with a neurosurgical background, who spoke in September 2026 about her path into medicine.',
 'My role':'Co-founder.'}},
{id:'service',s:'community',t:'Service',d:'Scam awareness for seniors, environmental service, and years of volunteering.',tags:['service','community','AI & society'],rel:['forrest','bbay'],
 meta:['Girl Scouts Silver Award','VTSeva Gold award','98.43 service hours'],tl:[],
 sec:{
 'VTSeva':'I am one of ten youth leads for about 100 volunteers, and the Environmental Service Lead. I earned the VTSeva Gold award for more than 100 hours, which included trash cleanups, tree planting, helping RAFT distribute affordable school supplies to teachers, writing pen pal letters to seniors, and running fundraisers where I applied mehendi to support people with disabilities in India.',
 'Girl Scouts Silver Award':'For my Silver Award I taught seniors about scams that use computers and AI. I visited five senior homes and put up posters in two, and one home agreed to present the material on my behalf every three months.',
 'Service Unit Volunteer Award':'Recognized for 98.43 volunteer hours with Girl Scouts.',
 'Lead the Way':'I am on the recreation committee that plans activities for a conference of more than 100 girls from across the US.'}},
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
{id:'journal',s:'writing',t:'Khranicle and the KLS literary journal',d:'Managing Editor of the Khranicle and co-founder of the KLS literary journal.',tags:['editing','fiction'],rel:['ceto','rulers'],meta:['Managing Editor','Co-founder','First edition: December 2026'],tl:[],
 sec:{'Khranicle':'I am the Managing Editor.','KLS literary journal':'I co-founded it, and the first edition comes out in December.'}}
];
const Q=[
'To what extent do the computational mechanisms behind AI face recognition mirror the processes behind racial bias in human face recognition?',
'How do reactive species made by plasma change cell membranes, and can they be measured directly?',
'Does the clotting seen after longer plasma exposure help wound healing, or does it show cell damage?',
'How can swarm behavior be designed without trial and error?',
'Could AI predict how a swarm of robots will move?',
'How can image analysis pick up subtle changes in neurological conditions such as Parkinson’s disease?',
'What do students need to understand about stress, memory, and cognitive load to study well?'];
const IDEAS=[
'A second-generation robot swarm with mecanum wheels, motors with encoders, and ESP32 boards. I have drafted the parts list but have not built it.',
'Using AI to predict robot movement in a swarm, an idea from my team’s planning document.',
'Applying image analysis to neurological conditions, building on my work with blood cells.',
'Workshops for parents and physical learning products for ForREST, which came up at a leadership meeting.'];
const N=[
['Jul 2026 · Plasma','At 30 seconds of plasma exposure the blood cells started to clump, and longer exposures clotted, so 30 seconds became the limit for the experiment.'],
['Nov 2025 · Swarm','Across six commands, the delay between pressing a button in the control app and the robot starting to move stayed between 0.17 and 0.21 seconds.'],
['Jun 2026 · Reading','The gap I keep running into in swarm robotics papers: group behavior is still mostly designed by trial and error.']];
const DOCS={};
const CONTACT={email:'shreeyakurapati@gmail.com'};
