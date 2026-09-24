const progressFill = document.querySelector('.progress-fill');
const slidesContainer = document.getElementById('slidesContainer');
const backButton = document.getElementById('backButton');
const continueButton = document.getElementById('continueButton');
const clipCurrent = document.getElementById('clipCurrent');
const clipTotal = document.getElementById('clipTotal');
const appWindow = document.querySelector('.browser-window');
const appTopbar = document.querySelector('.browser-topbar');
const maximizeWindow = document.getElementById('maximizeWindow');
const closeWindow = document.getElementById('closeWindow');
const taskbarApp = document.querySelector('.taskbar-app');
const desktopAppIcon = document.querySelector('.desktop-icon');
const longQuizIcon = document.getElementById('longQuizIcon');

const slidesData = [
  {
    unit: 'PATH FIT 1',
    title: 'PHYSICAL ACTIVITY TOWARDS HEALTH AND FITNESS',
    text: 'Movement Competency Training.',
    bullets: [
      'Physical Education as a subject has historically been neglected and faced setbacks due to misunderstandings among teachers and administrators.',
      'Teachers and administrators may not have had sufficient exposure to its principles.',
      'It is imperative to redefine and clarify the scope of this subject area.',
      'PATH-FIT 1 students will gain a deeper understanding of Physical Education and its curriculum coverage.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'GENERAL OBJECTIVES',
    text: 'At the end of the unit, the students are expected to:',
    bullets: [
      'Improve understanding of the principles and importance of Physical Education.',
      'Redefine and clarify the scope of Physical Education within the educational framework.',
      'Foster holistic development: physical fitness, mental resilience, emotional stability, and social skills.',
      'Participate actively to understand the significance of physical exercise for optimal health across all age groups.',
      'Equip themselves with life skills: teamwork, discipline, and problem-solving.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'PHYSICAL EDUCATION: HISTORICAL VIEW',
    text: 'Historically viewed as the education of the physical body.',
    bullets: [
      'Physical Education in Philippine schools has experienced many vicissitudes and changes over time.',
      'Historically viewed as the education of the physical body.',
      'A muscular physique was the hallmark of a physically educated individual.',
      'Activities were termed “drill,” “physical training,” and “calisthenics.”',
      'Focus: muscle strengthening.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'MODERN PERSPECTIVE: EDUCATION THROUGH MOVEMENT',
    text: 'Modern PE emphasizes education through physical activities.',
    bullets: [
      '“Education through movement” shifts from mere physical fitness to holistic development.',
      'It provides sensory data and broadens the perspective horizon.',
      'It stimulates the function and structure of all bodily organs.',
      'It enables individuals to learn about themselves in relation to their environment.',
      'Modern PE develops social skills, teamwork, leadership, and emotional well-being.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'MODERN PERSPECTIVE: EDUCATION THROUGH MOVEMENT (CONT.)',
    text: 'Utilizes a culturally rich array of activities and movement experiences.',
    bullets: [
      'Utilizes a culturally rich array of activities: games, dance, gymnastics, athletic sports, and outdoor pursuits.',
      'These are mediums for achieving desirable educational outcomes.',
      'Concept: “learn to move, move to learn.”',
      'Modern PE develops competencies beyond fitness: social skills, teamwork, leadership, emotional well-being.',
      'Prepares students for a physically active lifestyle and life skills for personal and social development.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'DEFINITION OF PHYSICAL EDUCATION',
    text: 'A vital component of the educational program.',
    bullets: [
      'Aims at the optimal development of individuals: physically, socially, emotionally, and mentally.',
      'Focuses on teaching and learning of skills and attitudes through play activities.',
      'Aptly described as education through physical exertion.',
      'Promotes physical fitness, motor skill development, teamwork, and overall well-being.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'LEGAL BASES OF PE IN THE PHILIPPINES',
    text: 'Physical exercise became part of public school subjects and later gained formal curricular status.',
    bullets: [
      '1901 — Physical exercise became part of public school subjects, with regular athletic programs.',
      '1920 — PE subject became mandatory in all public schools.',
      '1937 — PE became a formal subject in secondary school curricula.',
      '1969 — School of Physical Education and Sports Development Act emphasized health education, nutrition, fitness, athletics, and intramurals.',
      '1982 — MAPE was introduced.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'INTERNATIONAL AND CONSTITUTIONAL BASES',
    text: 'Physical education and sport are essential for the full development of the human personality.',
    bullets: [
      'Article 1, International Charter of Physical Education and Sports, UNESCO, Paris (1975).',
      'Recommendation 1, Inter-disciplinary Regional Meeting of Experts in PE and Sports, UNESCO, Brisbane (1982).',
      'Article XIV, Sections 19 (1) and (19)(2), 1987 Philippine Constitution.',
      'The State shall promote physical education and encourage sports programs, league competitions, and amateur sports.',
      'All educational institutions shall undertake regular sports activities in cooperation with athletic clubs and other sectors.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'FUNCTIONS OF PHYSICAL EDUCATION',
    text: 'Biological, integrative, and social functions.',
    bullets: [
      'Biological Function — enhances growth and development; promotes healthy body movement patterns; supports physical health; develops motor skills, coordination, and fitness.',
      'Integrative Function — integrates personality traits; fosters self-discipline, resilience, teamwork, critical thinking, and holistic personal development.',
      'Social Function — transmits essential values and standards; promotes cooperation, respect, inclusivity, leadership, and community belonging.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'PE: A CRITICAL ASPECT OF EDUCATION',
    text: 'Education that utilizes movement as a core medium of learning.',
    bullets: [
      'Defined as education that utilizes movement.',
      'Core purpose: enhance and complement individuals through carefully selected and professionally guided physical activities.',
      'Promotes physical fitness, motor skill development, teamwork, and overall well-being.',
      'Fosters lifelong habits of health and fitness and nurtures social skills, discipline, and resilience.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'FITNESS: A MAJOR GOAL OF PHYSICAL EDUCATION',
    text: 'Fitness encompasses physical, social, emotional, and mental well-being.',
    bullets: [
      'Fitness = the ability to lead a healthy, fulfilling, and purposeful life.',
      'The “good life” is the ultimate goal of education.',
      'It entails meeting basic needs: physical well-being, love, security, and self-respect.',
      'It involves harmonious relationships and commitment to serving humanity with integrity and ethical standards.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'OBJECTIVES OF PHYSICAL EDUCATION (I)',
    text: 'Physical, social, emotional, and mental development.',
    bullets: [
      'A. Physical Development: maintenance of good health and enhancement of physical fitness.',
      'Builds and sustains physical skills while improving growth and development.',
      'Improves cardiovascular health, muscular strength, flexibility, and endurance.',
      'B. Social Development: develops social skills for effective interaction and cooperation.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'OBJECTIVES OF PHYSICAL EDUCATION (II)',
    text: 'Emotional and mental growth through movement.',
    bullets: [
      'C. Emotional Development: self-expression, self-confidence, self-control, and resilience.',
      'Overcoming challenges builds courage, determination, and perseverance.',
      'D. Mental Development: enhances cognitive processes and decision-making.',
      'Learning game rules and strategies stimulates critical thinking and practical application.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'OBJECTIVES OF PHYSICAL EDUCATION (III)',
    text: 'Knowledge, fitness, social growth, motor skills, aesthetics, nationalism, and environmental awareness.',
    bullets: [
      'Knowledge — critical thinking on rules, regulations, and strategies.',
      'Physical Fitness — handle physical tasks without excessive fatigue.',
      'Social — understand oneself better and build good relationships.',
      'Motor Skills — basic skills needed in sports and games.',
      'Aesthetic, Nationalism, and Conservation complete a fuller educational purpose.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'NEW DIRECTIONS FOR PHYSICAL EDUCATION',
    text: 'CHED Memorandum Orders No. 39 and No. 40 mark development in the tertiary PE curriculum.',
    bullets: [
      'CMO 39 — policies, standards, and guidelines for the Bachelor of Physical Education.',
      'CMO 40 — guidelines for teaching PE in the general education curriculum.',
      'Emphasizes physical literacy, wellness, and lifelong fitness.',
      'Goal: holistic and dynamic PE framework; diverse careers; healthier society.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'PHYSICAL EDUCATION CURRICULUM MAP',
    text: 'PATHFit sequence and curricular structure.',
    bullets: [
      'PE 1 — PATHFit 1: Movement Competency-Based Training (MCT), 2 units.',
      'PE 2 — PATHFit 2: Exercise-Based Fitness Activities, 2 units.',
      'PE 3 — PATHFit 3: Dance, Sports, Martial Arts, Group Exercise, Outdoor and Adventure Activities, 2 units.',
      'PE 4 — PATHFit 4: Choice of Dance, Sports, Martial Arts, Group Exercise, Outdoor and Adventure Activities, 2 units.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'CONTEXT OF PHYSICAL EDUCATION',
    text: 'Physical inactivity is a major public health problem.',
    bullets: [
      '2010: WHO report — physical inactivity = 4th leading risk factor for global mortality.',
      'Sedentary lifestyles are linked to serious health consequences.',
      'Physical inactivity contributes to cardiovascular disease, diabetes, and certain cancers.',
      'Urbanization, technology, and transportation changes reduce daily movement.'
    ]
  },
  {
    unit: 'WHO',
    title: 'EXERCISE RECOMMENDATIONS',
    text: 'Healthy movement standards by age group.',
    bullets: [
      'Children (5–17 years): at least 60 minutes of moderate-to-vigorous activity daily.',
      'Adults (18–64 years): at least 150 minutes moderate-intensity or 75 minutes vigorous-intensity per week.',
      'Muscle-strengthening exercises should be done 2 or more days a week.',
      'Older Adults (65+): focus on balance, endurance, strength, and flexibility.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'ROLE OF PE IN IMPLEMENTING RECOMMENDATIONS',
    text: 'Education and awareness support lifelong active living.',
    bullets: [
      'Education and Awareness — teach the importance, benefits, and risks of inactivity.',
      'Skill Development — build fundamental movement skills and sport-specific competence.',
      'Promotion of Active Lifestyles — use structured activities, games, and sports to meet WHO recommendations.'
    ]
  },
  {
    unit: 'UNIT I',
    title: 'PURPOSES OF PHYSICAL EDUCATION',
    text: 'PE supports health, work habits, leadership, and culture.',
    bullets: [
      'Physical Fitness and Health — achieve optimal fitness and contribute to society’s goals.',
      'Economic Contribution — develop punctuality, cooperation, reliability, precision, and open-mindedness.',
      'Leadership and Morality — cultivate strong values and group participation.',
      'Creativity and Innovation — inspired by faith, country, and care for fellow humans.',
      'Cultural Appreciation and Unity — love and pride for culture and international brotherhood.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'UNDERSTANDING HUMAN MOVEMENT',
    text: 'Movement education and movement competency.',
    bullets: [
      'Movement education = learning how to move efficiently and effectively.',
      'Involves understanding basic movement patterns and overall physical ability.',
      'Competency enhances coordination and adaptability in movement tasks.',
      'Bones, muscles, and joints work together to create motion.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'GENERAL OBJECTIVES',
    text: 'After studying this unit, students will be able to explore movement education and movement competency.',
    bullets: [
      'Explore how movement education evolved from the early 20th century.',
      'Investigate key frameworks: Rudolf Laban’s Movement Analysis and the Skill Theme Approach.',
      'Foster proficiency in fundamental movement skills (running, jumping, throwing) and motor learning.',
      'Emphasize movement education as a tool for holistic development.',
      'Illustrate how movement competency contributes to lifelong physical activity.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'INTRODUCTION TO MOVEMENT EDUCATION',
    text: 'Introduced in the early 20th century by Rudolf Laban.',
    bullets: [
      'Originally: qualitative aspects of human movement.',
      'Evolved into multidisciplinary approaches: kinesiology, biomechanics, motor learning, psychology, sociology, and education.',
      'Primary goal: develop fundamental motor skills, improve coordination, enhance balance, and foster body awareness.',
      'Enhances physical abilities and supports cognitive and emotional aspects.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'MOVEMENT COMPETENCY',
    text: 'Foundational to proficiency in movement and physical literacy.',
    bullets: [
      'Essential for mastering fundamental movement skills.',
      'Applying movement concepts and strategies develops control, precision, and efficiency.',
      'Foundational elements lead to physical literacy and lifelong engagement.',
      'Requires understanding mechanics, timing, and responsiveness in human movement.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'THE SCIENCE OF HUMAN MOVEMENT',
    text: 'Smooth, effective movement depends on the relationship among specialized body systems.',
    bullets: [
      'Skeletal system — sturdy framework, anchoring muscles.',
      'Muscular system — generates force for movement and activity.',
      'Systems enable mobility, balance, coordination, and accuracy in daily tasks.',
      'A holistic approach is essential for sustaining optimal movement throughout life.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'SKELETAL SYSTEM',
    text: 'The body’s structural framework.',
    bullets: [
      'Could you imagine a body without bones? No shape, unable to stand tall, vital organs exposed and vulnerable.',
      'Bone is hard, dense connective tissue that forms most of the adult skeleton.',
      'The skeletal system is composed of bones and cartilage.',
      'It supports posture, protects organs, and enables movement.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'FUNCTIONS OF THE SKELETAL SYSTEM',
    text: 'Protection, support, movement, and blood production.',
    bullets: [
      'Protects the skull, vertebral column, and rib cage.',
      'Supports the body and holds vital organs in place.',
      'Provides attachment for muscles and enables movement at joints.',
      'Produces blood cells in bone marrow of ribs, vertebrae, humerus, and femur.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'CLASSIFICATION OF BONES (1 OF 3)',
    text: 'Adult skeleton has 206 bones divided by shape.',
    bullets: [
      'Long Bones — cylindrical; longer than wide; act as levers.',
      'Short Bones — cube-like; equal in length, width, and thickness.',
      'These provide support, stability, and fine movement.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'CLASSIFICATION OF BONES (2 OF 3)',
    text: 'Flat and irregular bones provide protection and attachment.',
    bullets: [
      'Flat Bones — typically thin and often curved; protect organs and provide muscle attachment points.',
      'Irregular Bones — no easily characterized shape; complex shapes such as vertebrae and facial bones.',
      'They support the body and protect tissues from compressive force.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'CLASSIFICATION OF BONES (3 OF 3)',
    text: 'Sesamoid bones protect tendons and improve joint performance.',
    bullets: [
      'Sesamoid Bones — small, round, and embedded in tendons.',
      'They protect tendons from pressure and stress.',
      'Patellae are the only sesamoid bones found in every person.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'TABLE 1: BONE CLASSIFICATION',
    text: 'Bone shape and function are closely linked.',
    bullets: [
      'Long bones provide leverage.',
      'Short bones provide stability and support.',
      'Flat bones protect organs and create attachment surfaces for muscles.',
      'Irregular bones protect internal organs and support structure.',
      'Sesamoid bones protect tendons from compressive forces.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'MAIN PARTS OF THE SKELETON: APPENDICULAR SKELETON',
    text: 'Arms, shoulder girdle, hips, and legs.',
    bullets: [
      'Shoulder girdle — two clavicles and two scapulas, allowing flexibility but limiting force.',
      'Arms: humerus, radius, ulna, carpals, metacarpals, and phalanges.',
      'Hip girdle supports lower abdomen and transfers weight to the legs.',
      'Legs include femur, tibia, fibula, and tarsals.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'MAIN PARTS OF THE SKELETON: AXIAL SKELETON',
    text: 'Skull, sternum, and rib cage protect the body’s vital organs.',
    bullets: [
      'Skull contains 28 bones, including facial bones and ear bones.',
      'Sternum is a large flat bone forming the front of the rib cage.',
      'Ribs protect the lungs and heart.',
      'Rib cage includes 12 pairs: 7 true ribs, 3 false ribs, and 2 floating ribs.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'HOW DO WE MOVE? (JOINTS)',
    text: 'Joints connect bones and allow motion.',
    bullets: [
      'Joint (articulation) is where adjacent bones or cartilage come together.',
      'Structural classification depends on how bones are anchored.',
      'Functional classification depends on degree of movement: immobile, slightly mobile, or freely moveable.',
      'Freely moveable joints are essential in movement performance.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'THREE TYPES OF JOINTS',
    text: 'Immovable, slightly movable, and freely movable joints serve different needs.',
    bullets: [
      'Immovable joints protect organs and provide stability.',
      'Slightly movable joints allow a few degrees of motion while maintaining support.',
      'Freely movable joints are found in upper and lower extremities and support most athletic movements.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'JOINTS AND SPORTS',
    text: 'Healthy joints are critical for sport performance.',
    bullets: [
      'Skilled sporting movements require joints to work smoothly together.',
      'Joints must have a full range of movement and strong supporting muscles and ligaments.',
      'Warm-up before activity and cool-down after activity reduce injury risk.',
      'Common injuries include sprained ankles, torn ligaments, and dislocated shoulders.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'PLANES OF THE BODY',
    text: 'Movement is described through body planes.',
    bullets: [
      'Mid-sagittal plane divides the body into right and left parts.',
      'Coronal (frontal) plane divides the body into anterior and posterior portions.',
      'Transverse (horizontal) plane divides the body into upper and lower sections.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'KINDS OF JOINT MOVEMENTS (1 OF 2)',
    text: 'Movement terms describe how limbs and body parts move.',
    bullets: [
      'Flexion decreases the angle at a joint; extension increases the angle.',
      'Lateral flexion bends the body sideways.',
      'Dorsiflexion and plantar flexion move the foot and ankle.',
      'Abduction moves away from the midline; adduction moves toward it.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'KINDS OF JOINT MOVEMENTS (2 OF 2)',
    text: 'Rotation, pronation, supination, and more.',
    bullets: [
      'Rotation occurs around a longitudinal axis.',
      'Pronation and supination move the hand and forearm downward and upward.',
      'Inversion and eversion rotate the foot inward and outward.',
      'Circumduction, elevation, depression, protraction, and retraction describe circular and shoulder girdle motions.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'SKELETAL SYSTEM AND SPORTS',
    text: 'The skeleton supports athletic performance and structural stability.',
    bullets: [
      'Bones protect organs and provide leverage for movement.',
      'The skeleton gives structure, rigidity, and strength to the body.',
      'Joints allow movement and flexibility between bones.',
      'Ligaments, cartilage, and tendons work with bones to improve sport performance.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'MUSCULAR SYSTEM',
    text: 'Movement depends on muscle contraction and relaxation.',
    bullets: [
      'All movement is caused by muscular shortening and lengthening.',
      'Muscles enable motion, maintain posture, protect organs, circulate blood, and generate heat.',
      'The body has more than 600 skeletal muscles.',
      'Muscle contraction is essential in every movement task.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'TYPES OF MUSCLE TISSUE',
    text: 'Skeletal, smooth, and cardiac muscles each serve a distinct purpose.',
    bullets: [
      'Skeletal muscles are voluntary and under conscious control.',
      'Smooth muscles are involuntary and found in internal organs.',
      'Cardiac muscle is found only in the heart and works continuously without tiring.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'MAIN PARTS OF OUR MUSCLES (1 OF 2)',
    text: 'Major muscle groups and their movements.',
    bullets: [
      'Deltoid moves the arm in all directions at the shoulder.',
      'Triceps extends the forearm and arm at the elbow and shoulder.',
      'Hamstrings extend the hip joint and flex the knee joint.',
      'Trapezius controls the shoulder girdle; latissimus dorsi adducts and extends the arm.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'MAIN PARTS OF OUR MUSCLES (2 OF 2)',
    text: 'Lower body and upper body power sources.',
    bullets: [
      'Gluteals abduct and extend the hip joint.',
      'Biceps flex the forearm at the elbow.',
      'Abdominals rotate and raise the trunk and help breathing.',
      'Pectorals adduct the arm and shoulder; quadriceps flex the hip and extend the knee.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'HOW DO OUR MUSCLES WORK?',
    text: 'Three main types of muscular contraction.',
    bullets: [
      'Isometric — tension with no change in muscle length.',
      'Concentric — muscle shortens as tension develops.',
      'Eccentric — muscle develops tension while lengthening.',
      'Most real contractions involve neither constant tension nor constant speed.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'WHAT HAPPENS TO OUR MUSCLES AS WE EXERCISE?',
    text: 'Exercise changes blood flow, oxygen use, and fatigue responses.',
    bullets: [
      'Blood flow to working muscles increases.',
      'Muscles use more oxygen and contract more often and more quickly.',
      'Waste products such as carbon dioxide and lactic acid build up.',
      'Overuse leads to soreness, fatigue, cramping, and muscle strain.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'ROLES OF MUSCLES',
    text: 'Muscles work in coordinated roles depending on movement.',
    bullets: [
      'Agonist (Mover) — produces the intended movement.',
      'Antagonist — relaxes or opposes the agonist to allow movement.',
      'Stabilizer (Fixator) — keeps a body part firm while another segment moves.',
      'Neutralizer — cancels unwanted movement caused by another muscle.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'AGONIST AND ANTAGONIST SKELETAL MUSCLE PAIRS',
    text: 'Opposing muscles work together for efficient movement.',
    bullets: [
      'Biceps brachii vs. triceps brachii — elbow flexion and extension.',
      'Hamstrings vs. quadriceps femoris — leg flexion and extension.',
      'Flexors vs. extensors of the digit and hand — controlled wrist and finger motion.'
    ]
  },
  {
    unit: 'UNIT II',
    title: 'STABILIZER AND NEUTRALIZER',
    text: 'Muscles also organize and contain movement.',
    bullets: [
      'A stabilizer keeps the body part fixed while movement occurs elsewhere.',
      'A neutralizer reduces unwanted motions from another muscle.',
      'For example, pectoralis major and latissimus dorsi can neutralize each other to produce pure adduction.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'PHYSICAL FITNESS',
    text: 'Unit III: physical fitness and its concepts.',
    bullets: [
      'Physical fitness is one aspect of overall fitness and includes mental, emotional, and social well-being.',
      'It depends on quality medical care, nutrition, rest, and physical activity.',
      'No single element alone can meet the demands of comprehensive fitness.',
      'Physical fitness is dynamic and diminishes when exercise stops.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'GENERAL OBJECTIVES',
    text: 'Students are expected to understand physical fitness and its practical application.',
    bullets: [
      'Differentiate health-related and performance-related components.',
      'Explain endurance, strength, flexibility, and agility.',
      'Discuss benefits such as improved posture, reduced injury risk, and mental resilience.',
      'Apply principles such as specificity, progressive overload, and recovery.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'THE MEANING OF PHYSICAL FITNESS',
    text: 'The ability to perform tasks efficiently without undue fatigue.',
    bullets: [
      'Physical Fitness = ability to perform one’s daily tasks efficiently without undue fatigue.',
      'Physically fit people still have reserve energy for leisure and emergencies.',
      'A state of overall well-being achieved through regular activity, proper nutrition, and rest.',
      'Promotes longevity, quality of life, and proactive health habits.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'THREE ASPECTS OF PHYSICAL FITNESS',
    text: 'Daily work, leisure, and emergencies.',
    bullets: [
      'Perform daily tasks efficiently without excessive fatigue.',
      'Enjoy leisure time in recreational activities with immediate satisfaction.',
      'Meet emergency demands such as errands, household problems, and social obligations.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'CONCEPTS OF PHYSICAL FITNESS',
    text: 'The main qualities of fitness performance.',
    bullets: [
      'Organic Vigor — soundness of heart and lungs.',
      'Endurance — ability to sustain long-continued contractions.',
      'Strength — ability to sustain force without yielding or breaking.',
      'Power, Flexibility, Agility, Balance, and Speed round out the fitness profile.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'COMPONENTS OF PHYSICAL FITNESS',
    text: 'Two categories: health-related and performance-related fitness.',
    bullets: [
      'Health-Related Components — flexibility, cardiovascular endurance, muscular strength, muscular endurance, and body composition.',
      'Performance-Related Components — agility, balance, coordination, power, and speed.',
      'These components support the quality of movement and daily performance.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'I. HEALTH-RELATED FITNESS: A. MUSCULAR STRENGTH',
    text: 'Maximum effort in brief duration.',
    bullets: [
      'Ability of the muscle to exert maximum effort in brief duration.',
      'Developed through isotonic, isometric, and isokinetic contractions.',
      'Example: push-ups, sit-ups, pull-ups, and resistance training.',
      'Isometric contractions are sustained against immovable resistance.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'BENEFITS OF STRENGTH TRAINING + B. MUSCULAR ENDURANCE',
    text: 'Strength and endurance support repeated effort and long-term performance.',
    bullets: [
      'Strength training can increase muscle strength by 10–25% within 6–8 weeks.',
      'It can also increase muscle size and hypertrophy.',
      'Muscular Endurance is the ability to endure sub-maximal effort for a prolonged period.',
      'Developed through repeated effort and longer-duration exercise.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'C. CARDIOVASCULAR ENDURANCE',
    text: 'The heart, blood vessels, and lungs adapt to sustained effort.',
    bullets: [
      'Ability of the heart, blood vessels, and lungs to adapt to physical exertion for prolonged duration.',
      'Heart rate increases to target heart rate and is sustained for 20–60 minutes.',
      'Important variables: intensity, duration, frequency, and mode of exercise.',
      'High endurance improves overall energy and helps prevent coronary heart disease.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'PHYSIOLOGICAL BENEFITS OF CARDIOVASCULAR TRAINING',
    text: 'Training improves recovery, oxygen delivery, and heart efficiency.',
    bullets: [
      'Decreased resting heart rate and recovery time after exercise.',
      'Increased blood volume and red blood cells to transport oxygen.',
      'Stronger heart muscle improves stroke volume and rest periods between beats.',
      'Increased aerobic capacity and reduced risk of coronary heart disease.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'ACTIVITIES THAT DEVELOP CARDIOVASCULAR ENDURANCE',
    text: 'Sustained aerobic activities are key.',
    bullets: [
      'Prolonged brisk walking, jogging, and cycling.',
      'Skipping rope, basketball, swimming, rowing, aerobic dancing, and hiking.',
      'Continuous and rhythmic movement is most effective for cardiovascular training.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'D. FLEXIBILITY',
    text: 'The ability of muscles and joints to move through a full range of motion.',
    bullets: [
      'Flexibility reduces injury risk and enhances performance.',
      'Stretching lengthens soft tissues and improves movement quality.',
      'It is influenced by joint structure, surrounding tissues, and tissue extensibility.',
      'Basic movements include flexion, extension, abduction, and adduction.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'FITNESS BENEFITS OF FLEXIBILITY EXERCISES',
    text: 'Greater motion, lower stiffness, and reduced injury risk.',
    bullets: [
      'Increased range of motion and better muscle elasticity.',
      'Reduced stiffness, improved relaxation, and improved blood circulation.',
      'Lower incidence of injury during sport events and exercise.',
      'Aids overall movement quality and reduced cardiovascular strain.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'E. BODY COMPOSITION',
    text: 'Lean body mass in relation to fat body mass.',
    bullets: [
      'Measures the proportion of lean body mass to fat body mass.',
      'Body composition reflects relative fatness or leanness.',
      'Fitness is important for everyone, whether slim or overweight.',
      'Genetic predisposition can influence body composition and weight.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'SOMATOTYPES',
    text: 'Body shape classification developed by Sheldon.',
    bullets: [
      'Ectomorphic — lean and small build; slender limbs; low muscle mass.',
      'Mesomorphic — relative predominance of muscles and heavier bones.',
      'Endomorphic — relative predominance of soft roundness and higher fat percentage.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'SOMATOTYPES AND PERFORMANCE',
    text: 'Body type affects training outcomes and sport suitability.',
    bullets: [
      'Somatotype helps explain weight gain or reduction expectations.',
      'It is highly correlated with performance in some sports.',
      'Example: shot put athletes differ physically from marathon athletes.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'II. PERFORMANCE-RELATED FITNESS',
    text: 'Movement skill and physical coordination.',
    bullets: [
      'Refers to the quality of one’s movement skill.',
      'General components include balance, coordination, power, speed, and agility.',
      'Balance can be static or dynamic depending on whether the body is still or in motion.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'PRINCIPLES OF TRAINING',
    text: 'Regular, progressive, and individualized training leads to effective results.',
    bullets: [
      'Principle of Recovery — muscles require time to repair and grow stronger.',
      'Principle of Reversibility — when exercise stops, gains diminish.',
      'Principle of Individual Variation — people respond differently based on age, health, and fitness level.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'BENEFITS OF PHYSICAL FITNESS (1 OF 2)',
    text: 'Physical fitness improves function, posture, and aging outcomes.',
    bullets: [
      'Vitality — fit muscles use less energy and operate with more efficiency.',
      'Posture — helps maintain general alignment and reduce strain.',
      'Relieves low back pain and retards the aging process.',
      'Improves ability to meet emergencies with more effective physical response.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'BENEFITS OF PHYSICAL FITNESS (2 OF 2)',
    text: 'Fitness strengthens neuromuscular skill and personality.',
    bullets: [
      'Neuromuscular Skill — smooth and efficient coordination of the muscular system.',
      'Relaxation — physical outlet for emotional and muscular tension.',
      'Improvement of Personality and Social Skills — games and sports develop social competence.',
      'Mental Fitness and General Growth — improved mental processes and stronger resistance to illness.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'THE PARAMETERS OF PHYSICAL FITNESS',
    text: 'Four measurable parameters define the hard core of fitness.',
    bullets: [
      'Muscular Endurance',
      'Muscular Strength',
      'Cardio-respiratory Endurance',
      'Joint Flexibility'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'QUOTE',
    text: '“Physical Fitness is not only one of the most important keys to a healthy body; it is the basis of dynamic, creative, and intellectual activity.”',
    bullets: [
      '— John Fitzgerald Kennedy',
      'Healthy bodies support stronger thinking and skill performance.',
      'The body must be healthy for intelligence and creativity to function at peak capacity.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'WAYS TO PREVENT INJURY DURING PHYSICAL EXERCISES (1 OF 2)',
    text: 'Training safely reduces injury and supports long-term activity.',
    bullets: [
      'Warm-up properly to increase blood flow and improve flexibility.',
      'Progress gradually to avoid sudden jumps in intensity, duration, or frequency.',
      'Use proper technique and learn correct form under qualified instruction.',
      'Wear appropriate gear and stay hydrated and nourished.'
    ]
  },
  {
    unit: 'UNIT III',
    title: 'WAYS TO PREVENT INJURY DURING PHYSICAL EXERCISES (2 OF 2)',
    text: 'Listen to your body and recover effectively.',
    bullets: [
      'Listen to your body and stop if pain, fatigue, or discomfort continues.',
      'Include rest days and avoid overtraining.',
      'Cross-train to reduce overuse issues and balance muscle development.',
      'Cool down properly and seek professional guidance when needed.'
    ]
  },
  {
    unit: 'CLOSING',
    title: 'FINAL TAKEAWAY',
    text: 'Healthy bodies support strong minds and active futures.',
    bullets: [
      'Physical Education supports health, growth, discipline, and social relationships.',
      'Movement, fitness, and training are foundations for a productive and meaningful life.',
      'Healthy habits improve confidence, reduce risk, and build lifelong wellness.',
      'A healthy body supports intelligent, resilient, and creative living.'
    ]
  }
];

function paginateSlides(sourceSlides) {
  const maxBulletCharacters = 420;
  const paginatedSlides = [];

  sourceSlides.forEach((slideData) => {
    let bulletPage = [];
    let bulletCharacters = 0;
    let pageNumber = 0;

    slideData.bullets.forEach((bullet) => {
      const nextLength = bulletCharacters + bullet.length;

      if (bulletPage.length > 0 && nextLength > maxBulletCharacters) {
        paginatedSlides.push({
          ...slideData,
          title: pageNumber === 0 ? slideData.title : `${slideData.title} (CONT.)`,
          bullets: bulletPage
        });
        bulletPage = [];
        bulletCharacters = 0;
        pageNumber += 1;
      }

      bulletPage.push(bullet);
      bulletCharacters += bullet.length;
    });

    if (bulletPage.length > 0) {
      paginatedSlides.push({
        ...slideData,
        title: pageNumber === 0 ? slideData.title : `${slideData.title} (CONT.)`,
        bullets: bulletPage
      });
    }
  });

  return paginatedSlides;
}

function createCheckpointSlides(lessonPages) {
  const checkpointSlides = [];
  const unitNames = [...new Set(lessonPages.map((slide) => slide.unit))]
    .filter((unit) => /^UNIT\s+[IVX]+$/.test(unit));

  unitNames.forEach((unit) => {
    if (unit === 'CLOSING') return;

    const unitPages = lessonPages.filter((slide) => slide.unit === unit);
    const questionCount = Math.max(1, Math.ceil(unitPages.length / 2));
    const bulletPool = unitPages.flatMap((slide) => slide.bullets);

    for (let questionIndex = 0; questionIndex < questionCount; questionIndex += 1) {
      const lessonPage = unitPages[Math.min(questionIndex * 2, unitPages.length - 1)];
      const correctAnswer = lessonPage.bullets[questionIndex % lessonPage.bullets.length];
      const distractors = bulletPool.filter((bullet) => bullet !== correctAnswer).slice(0, 2);
      const options = [correctAnswer, ...distractors];

      for (let optionIndex = options.length - 1; optionIndex > 0; optionIndex -= 1) {
        const randomIndex = Math.floor(Math.random() * (optionIndex + 1));
        [options[optionIndex], options[randomIndex]] = [options[randomIndex], options[optionIndex]];
      }

      checkpointSlides.push({
        type: 'quiz',
        unit,
        title: `${unit} CHECKPOINT`,
        text: `Question ${questionIndex + 1} of ${questionCount}`,
        question: `Which statement was covered in ${lessonPage.title}?`,
        options,
        correctIndex: options.indexOf(correctAnswer)
      });
    }
  });

  return checkpointSlides;
}

const lessonSlides = paginateSlides(slidesData);
const slideSequence = [];
const lessonUnits = [...new Set(lessonSlides.map((slide) => slide.unit))];

lessonUnits.forEach((unit) => {
  const unitSlides = lessonSlides.filter((slide) => slide.unit === unit);
  slideSequence.push(...unitSlides);
  slideSequence.push(...createCheckpointSlides(unitSlides));
});

let activeSlide = 0;
let isTransitioning = false;
let isLongQuizMode = false;
let slides = [];
let quizSlideIndexes = [];

function buildSlides() {
  slidesContainer.innerHTML = '';

  slideSequence.forEach((slideData, index) => {
    const section = document.createElement('section');
    const bulletLength = slideData.bullets ? slideData.bullets.join(' ').length : 0;
    const density = bulletLength > 700 ? ' is-very-dense' : bulletLength > 480 ? ' is-dense' : '';
    const quizClass = slideData.type === 'quiz' ? ' quiz-slide' : '';
    section.className = `slide${index === 0 ? ' is-active' : ''}${density}${quizClass}`;
    section.dataset.slide = String(index);
    section.dataset.answered = slideData.type === 'quiz' ? 'false' : 'true';
    if (slideData.type === 'quiz') section.dataset.correctIndex = String(slideData.correctIndex);
    section.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');

    const accentColors = ['#f5d5b9', '#c9efff', '#dff7d7', '#f9e7f7', '#dffcf6', '#fff3d8', '#ffe4ef', '#e5f2ff', '#f9ead6'];
    const accent = accentColors[index % accentColors.length];
    const imageOptions = [
      'assets/fitness-1.svg',
      'assets/fitness-2.svg',
      'assets/fitness-3.svg',
      'assets/fitness-4.svg',
      'assets/fitness-5.svg'
    ];
    const imageSrc = slideData.image || imageOptions[index % imageOptions.length];
    const secondaryImageSrc = imageOptions[(index + 1) % imageOptions.length];

    if (slideData.type === 'quiz') {
      section.innerHTML = `
        <div class="headline-panel">
          <div class="headline-copy">
            <div class="unit-tag">${slideData.unit}</div>
            <h1>${slideData.title}</h1>
            <p>${slideData.text}</p>
          </div>
        </div>

        <div class="quiz-panel">
          <div class="quiz-copy">
            <h2>Checkpoint Quiz</h2>
            <p class="quiz-question">${slideData.question}</p>
            <div class="quiz-options">
              ${slideData.options.map((option, optionIndex) => `
                <button class="quiz-option" data-option="${optionIndex}">${option}</button>
              `).join('')}
            </div>
            <p class="quiz-feedback" aria-live="polite"></p>
          </div>
        </div>
      `;
      slidesContainer.appendChild(section);
      return;
    }

    section.innerHTML = `
      <div class="headline-panel">
        <div class="headline-copy">
          <div class="unit-tag">${slideData.unit}</div>
          <h1>${slideData.title}</h1>
          <p>${slideData.text}</p>
        </div>
      </div>

      <div class="content-panel">
        <div class="left-copy">
          <h2>Slide ${index + 1}</h2>
          <ul>
            ${slideData.bullets.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div class="right-art">
          <div class="photo-card">
            <img class="slide-image" src="${imageSrc}" alt="${slideData.title}" />
            <img class="slide-image" src="${secondaryImageSrc}" alt="" aria-hidden="true" />
          </div>
        </div>
      </div>
    `;

    slidesContainer.appendChild(section);
  });

  slides = Array.from(document.querySelectorAll('.slide'));
  quizSlideIndexes = slides
    .map((slide, index) => slide.classList.contains('quiz-slide') ? index : -1)
    .filter((index) => index >= 0);
}

function updateLessonChrome() {
  const quizPosition = quizSlideIndexes.indexOf(activeSlide);
  const displayPosition = isLongQuizMode && quizPosition >= 0 ? quizPosition + 1 : activeSlide + 1;
  const displayTotal = isLongQuizMode ? quizSlideIndexes.length : slides.length;
  const progress = (displayPosition / displayTotal) * 100;
  progressFill.style.width = `${progress}%`;
  backButton.disabled = isLongQuizMode
    ? quizPosition <= 0
    : activeSlide === 0;
  continueButton.textContent = isLongQuizMode && quizPosition === quizSlideIndexes.length - 1
    ? 'FINISH ✓'
    : activeSlide === slides.length - 1 ? 'FINISH ✓' : 'CONTINUE ▶';
  const activeQuiz = slides[activeSlide]?.classList.contains('quiz-slide');
  continueButton.disabled = activeQuiz && slides[activeSlide].dataset.answered !== 'true';
  clipCurrent.textContent = String(displayPosition);
  clipTotal.textContent = String(displayTotal);
}

function showSlide(nextSlide, direction) {
  let targetSlide = nextSlide;

  if (isLongQuizMode) {
    const quizPosition = quizSlideIndexes.indexOf(activeSlide);
    const targetPosition = quizPosition + (direction === 'forward' ? 1 : -1);
    targetSlide = quizSlideIndexes[targetPosition];
  }

  if (isTransitioning || typeof targetSlide !== 'number' || targetSlide < 0 || targetSlide >= slides.length || targetSlide === activeSlide) return;

  isTransitioning = true;
  slides[activeSlide].classList.remove('is-active');
  slides[activeSlide].setAttribute('aria-hidden', 'true');

  const incoming = slides[targetSlide];
  incoming.classList.remove('is-forward', 'is-back');
  void incoming.offsetWidth;
  incoming.classList.add('is-active', direction === 'forward' ? 'is-forward' : 'is-back');
  incoming.setAttribute('aria-hidden', 'false');
  activeSlide = targetSlide;
  updateLessonChrome();

  window.setTimeout(() => {
    incoming.classList.remove('is-forward', 'is-back');
    isTransitioning = false;
  }, 380);
}

buildSlides();

function openLongQuiz() {
  const firstQuizSlide = quizSlideIndexes[0];
  if (typeof firstQuizSlide !== 'number') return;

  restoreWindow();
  appWindow.classList.remove('is-fullscreen');
  isLongQuizMode = true;
  slides[activeSlide].classList.remove('is-active');
  slides[activeSlide].setAttribute('aria-hidden', 'true');
  slides[firstQuizSlide].classList.add('is-active');
  slides[firstQuizSlide].setAttribute('aria-hidden', 'false');
  activeSlide = firstQuizSlide;
  updateLessonChrome();
}

function openLessonApp() {
  restoreWindow();
  isLongQuizMode = false;

  if (activeSlide !== 0) {
    slides[activeSlide].classList.remove('is-active');
    slides[activeSlide].setAttribute('aria-hidden', 'true');
    slides[0].classList.add('is-active');
    slides[0].setAttribute('aria-hidden', 'false');
    activeSlide = 0;
  }

  updateLessonChrome();
}

slidesContainer.addEventListener('click', (event) => {
  const option = event.target.closest('.quiz-option');
  if (!option) return;

  const quizSlide = option.closest('.quiz-slide');
  if (!quizSlide || quizSlide.dataset.answered === 'true') return;

  const options = Array.from(quizSlide.querySelectorAll('.quiz-option'));
  const selectedIndex = Number(option.dataset.option);
  const isCorrect = selectedIndex === Number(quizSlide.dataset.correctIndex);
  option.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
  quizSlide.querySelector('.quiz-feedback').textContent = isCorrect
    ? 'Correct. You may continue.'
    : 'Try again.';

  if (isCorrect) {
    quizSlide.dataset.answered = 'true';
    options.forEach((quizOption) => {
      quizOption.disabled = true;
    });
    updateLessonChrome();
  }
});

backButton.addEventListener('click', () => showSlide(activeSlide - 1, 'back'));
continueButton.addEventListener('click', () => showSlide(activeSlide + 1, 'forward'));

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') showSlide(activeSlide + 1, 'forward');
  if (event.key === 'ArrowLeft') showSlide(activeSlide - 1, 'back');
});

updateLessonChrome();

function restoreWindow() {
  appWindow.classList.remove('is-minimized', 'is-closed', 'is-fullscreen');
  maximizeWindow.setAttribute('aria-label', 'Fullscreen window');
  taskbarApp.classList.add('is-active');
}

maximizeWindow.addEventListener('click', () => {
  appWindow.classList.remove('is-minimized', 'is-closed');
  taskbarApp.classList.add('is-active');
  const enteringFullscreen = !appWindow.classList.contains('is-fullscreen');
  ['position', 'left', 'top', 'width', 'height', 'margin'].forEach((property) => {
    appWindow.style.removeProperty(property);
  });
  appWindow.classList.toggle('is-fullscreen', enteringFullscreen);
  maximizeWindow.setAttribute(
    'aria-label',
    enteringFullscreen ? 'Restore window' : 'Fullscreen window'
  );
});

closeWindow.addEventListener('click', () => {
  appWindow.classList.remove('is-fullscreen', 'is-minimized');
  appWindow.classList.add('is-closed');
  maximizeWindow.setAttribute('aria-label', 'Fullscreen window');
  taskbarApp.classList.remove('is-active');
});

taskbarApp.addEventListener('click', restoreWindow);
desktopAppIcon.addEventListener('click', openLessonApp);
longQuizIcon.addEventListener('click', openLongQuiz);

let dragState = null;

appTopbar.addEventListener('pointerdown', (event) => {
  if (event.target.closest('button, .address-bar') || appWindow.classList.contains('is-fullscreen')) return;

  const bounds = appWindow.getBoundingClientRect();
  appWindow.style.position = 'fixed';
  appWindow.style.left = `${bounds.left}px`;
  appWindow.style.top = `${bounds.top}px`;
  appWindow.style.width = `${bounds.width}px`;
  appWindow.style.height = `${bounds.height}px`;
  appWindow.style.margin = '0';
  appWindow.setPointerCapture(event.pointerId);
  appWindow.classList.add('is-dragging');

  dragState = {
    startX: event.clientX,
    startY: event.clientY,
    left: bounds.left,
    top: bounds.top
  };
});

appWindow.addEventListener('pointermove', (event) => {
  if (!dragState) return;

  const nextLeft = dragState.left + event.clientX - dragState.startX;
  const nextTop = dragState.top + event.clientY - dragState.startY;
  appWindow.style.left = `${Math.max(0, nextLeft)}px`;
  appWindow.style.top = `${Math.max(0, nextTop)}px`;
});

appWindow.addEventListener('pointerup', (event) => {
  if (!dragState) return;
  appWindow.releasePointerCapture(event.pointerId);
  appWindow.classList.remove('is-dragging');
  dragState = null;
});
