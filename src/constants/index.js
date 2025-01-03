export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Mattquest - Games Database (In Progress)',
    desc: 'Mattquest is a user-friendly database for games, aggregating data from multiple sources into one platform. Users can search for popular games, leave reviews, and register to personalize their experience.',
    subdesc:
      '',
    href: 'https://github.com/Mattzh0/mattquest',
    texture: './textures/project/project1.mp4',
    logo: './assets/cube.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: './assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: './assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: './assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: './assets/javascript.png',
      },
      {
        id: 4,
        name: 'PostgreSQL',
        path: './assets/postgresql.png',
      },
      {
        id: 5,
        name: 'NodeJS',
        path: './assets/nodejs.png',
      },
    ],
  },
  {
    title: '"Phreddit" - A Platform Inspired by Reddit',
    desc: 'Phreddit is a full-stack MERN social media app inspired by Reddit, allowing users to create posts and communities, as well as interact through likes and replies.',
    subdesc: '',
    href: '',
    texture: './textures/project/project2.mp4',
    logo: './assets/cube.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: './assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: './assets/react.svg',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: './assets/javascript.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: './assets/mongodb.svg',
      },
      {
        id: 4,
        name: 'NodeJS',
        path: './assets/nodejs.png',
      },
      {
        id: 5,
        name: 'Jest',
        path: './assets/jest.png',
      },
    ],
  },
  {
    title: 'U-NET Clothing Segmentation',
    desc: 'A U-Net model trained from scratch, along with a fine-tuned DeepLabV3+ model to segment outfits from images. Achieved about an 80% accuracy rate.',
    subdesc:
      '',
    href: 'https://github.com/Mattzh0/clothing_segmentation',
    texture: './textures/project/project3.mp4',
    logo: './assets/cube.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: 'assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: 'assets/python.png',
      },
      {
        id: 2,
        name: 'PyTorch',
        path: 'assets/pytorch.png',
      },
      {
        id: 3,
        name: 'NumPy',
        path: 'assets/numpy.svg',
      },
      {
        id: 4,
        name: 'Pandas',
        path: 'assets/pandas.png',
      },
    ],
  },
  {
    title: 'Seawolf Search',
    desc: 'Seawolf Search is a platform that helps users reunite with lost items on campus. It won Best AI/ML Hack at SBU HopperHacks 2024, ranking 1st place out of 380+ teams.',
    subdesc:
      '',
    href: 'https://devpost.com/software/seawolf-searcher',
    texture: './textures/project/project4.mp4',
    logo: './assets/cube.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: 'assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: 'assets/python.png',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: 'assets/javascript.png',
      },
      {
        id: 3,
        name: 'Flask',
        path: 'assets/flask.svg',
      },
    ],
  },
  {
    title: 'Reinforcement Learning Tic-Tac-Toe',
    desc: 'A Tic-Tac-Toe agent using both Q-Table and Deep Q Network techniques, achieving a 94% win rate and 6% draw rate against random move agents.',
    subdesc:
      '',
    href: 'https://github.com/Shameed4/ReinforcementLearning',
    texture: './textures/project/project5.mp4',
    logo: './assets/cube.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: './assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: './assets/python.png',
      },
      {
        id: 2,
        name: 'TensorFlow',
        path: './assets/tensorflow.png',
      },
      {
        id: 3,
        name: 'NumPy',
        path: './assets/numpy.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Artificial Intelligence Community @SBU',
    pos: 'Event Coordinator | Former Secretary',
    duration: '2022 to 2025 (Present)',
    title: 'Maintained organization in a student organization that has so far delivered 30+ immersive workshops and events, showcasing Deep Learning applications. Facilitated SBU Weeks of Welcome (WoW) events to aid incoming freshmen with integrating into campus life. Started and expanded a student Discord community for the organization, which currently has over 650 members.',
    icon: './assets/aic.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Stony Brook Computing Society',
    pos: 'Mentor',
    duration: '2024 to 2025 (Present)',
    title: 'Guided freshman and sophomore students in mastering computer science and mathematics concepts for their classes, including data structures, algorithms, calculus, and statistics.',
    icon: '/assets/sbcs.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Stony Brook University',
    pos: 'Wordpress Developer',
    duration: '2023',
    title: 'Worked alongside a Stony Brook Genetics PhD student in developing the back-end for a WordPress website tailored for assessing the symptoms of sleep apnea patients.',
    icon: './assets/sbu.svg',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Northwell Health',
    pos: 'Volunteer Hospital Associate',
    duration: '2019 to 2022',
    title: 'Worked with a team of healthcare staff, including physicians and nurses, to oversee patient care and handle various critical tasks before and during the pandemic, such as timely delivery of meals and essential supplies. Managed the linen inventory for the designated hospital floor.',
    icon: './assets/northwellhealth.png',
    animation: 'clapping',
  },
];