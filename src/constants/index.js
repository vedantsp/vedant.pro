

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
    name: 'Work',
    href: '#work',
  },
  {
    id: "resume",
    name: "Resume",
    href: "https://vedantresume.vercel.app", 
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
  
];

export const clientReviews = [
  {
    id: 1,
    name: 'Arpit ',
    position: 'Team Lead @AjnaLens-RAIT',
    img: 'assets/review1.png',
    review:
      'Working with Vedant was a fantastic experience. At AjnaLens, they thrived as a Full-Stack Intern, excelling in React, TypeScript, Node.js, PostgreSQL, and Firebase. Their solutions streamlined our XR wearable platform. Highly recommend them.',
  },
  {
    id: 2,
    name: 'Dr. Puja Padiya',
    position: 'Professor at RAIT, Mumbai University',
    img: 'assets/review2.png',
    review:
      'Working with Vedant was a rewarding experience. I mentored him during his Bachelor in Computer Engineering, and his exceptional skills shone through in projects like the Faculty Audit System and Student Empowerment Portal. His expertise in full-stack development and cloud computing is impressive. Highly recommend him for any Software Development Engineer role.',
  },
  // {
  //   id: 3,
  //   name: 'John Dohsas',
  //   position: 'Project Manager at UrbanTech ',
  //   img: 'assets/review3.png',
  //   review:
  //     'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  // },
  // {
  //   id: 4,
  //   name: 'Ether Smith',
  //   position: 'CEO of BrightStar Enterprises',
  //   img: 'assets/review4.png',
  //   review:
  //     'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  // },
];

export const myProjects = [
  {
    title: 'NexusCare - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://github.com/vedantsp/NexusCare',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'LinkUp - Real-Time Chat Application',
    desc: 'LinkUp is a revolutionary real‑time chat application that transforms the way users connect and collaborate online. With Socket.io‑driven messaging, JWT‑based authentication, online presence indicators, and error handling, it delivers fast, secure, and reliable conversations.',
    subdesc:
      'Built as an application with MongoDB, Express.js, React, Node.js, Tailwind CSS, and Zustand, LinkUp is designed for high performance and high scalability.',
    href: 'https://github.com/vedantsp/LinkUp',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Intrusion Detection System',
    desc: 'Intrusion Detection System (IDS) is a cutting‑edge network security solution leveraging convolutional neural networks (CNNs), Recurrent Neural Network (RNN) and Long Short-Term Memory(LSTM) hybrid models to detect cyber‑attacks in real time. It analyzes network traffic patterns, identifies anomalies, and notifies administrators with high accuracy and minimal false alarms.',
    subdesc:
      'Built with Python, TensorFlow, and the CIC‑IDS‑2017 dataset, the system employs robust data pre‑processing, CNN‑LSTM hybrid architectures, and hyperparameter optimization to achieve scalable, efficient intrusion detection. Pusblished IEEE Reseach Paper (Link below)',
    href: 'https://ieeexplore.ieee.org/document/10245227',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Vertex - Online Banking Platform',
    desc: 'Vertex is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://github.com/vedantsp/Vertex',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'GeoAcess - Disability Navigator Application',
    desc: 'GeoAccess is a crowdsourced Android application that offers a centralized platform for discovering, reviewing, and validating disability‑friendly locations. It empowers users to find accessible venues—complete with photos, detailed descriptions, real‑time navigation, voice commands, and offline access—so they can plan journeys with confidence.',
    subdesc:
      'Built with Java, XML, Android Studio, Firebase Firestore, SQLite, Google Maps & Places APIs, Speech‑to‑Text, and Text‑to‑Speech, GeoAccess ensures a seamless, inclusive navigation experience tailored to users with diverse accessibility needs.',
    href: 'https://github.com/vedantsp/Disability-Navigator',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
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
    name: 'Johnson and Johnson',
    pos: 'Software Engineer Intern',
    duration: 'Sep 2023 - Apr 2025',
    bullets: [
      'Orchestrated comprehensive patient billing, medical records, and data management solutions using React, Node.js, Express, RESTful APIs, and AWS',
      'Archived 5TB+ data in AWS S3 and leveraged Amazon Redshift to create Power BI dashboards',
      'Conducted tests to identify bottlenecks and optimized a legacy website, implemented location-based suggestions on an interactive map',
      'Strengthened enterprise-grade security for a 2,000+ user clinical platform by integrating OAuth 2.0 and JWT-based authentication with Okta, ensured HIPAA compliance',
    ],
    icon: '/assets/jj.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Intex Technologies',
    pos: 'Software Engineer I',
    duration: 'Jan 2021 - July 2023',
    bullets: [
      'Delivered 8 full-stack applications (screen-readers, high-contrast themes) and 5+ configurable services',
      'Built AI-driven maintenance tools with ReactJS, Redux, TensorFlow, and Node.js; collaborated in an Agile cross-functional teams',
      'Constructed an event-driven telemetry microservice for the RBI (Remote Browsing Isolation) product, consuming events via RabbitMQ',
      'Set up CI/CD pipelines deploying Jenkins for orchestration, Docker for containerized builds, and Selenium for automated testing, supporting 6 major releases',
    ],
    icon: '/assets/intex.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'RAIT - AjnaLens',
    pos: 'Software Engineer Intern',
    duration: 'Jan 2020 - Dec 2020',
    bullets: [
      'Contributed to feature development in a cross-functional team using TypeScript and React UI guidelines; followed agile practices and accessibility standards (WCAG 2.0)',
      'Refined database schemas, collaborated with senior developers on unit tests for the microservices architecture, and integrated Memcached caching to enhance overall system scalability',
      'Designed scalable micro-services leveraging Kafka for seamless communication',
    ],
    icon: '/assets/rait.png',
    animation: 'salute',
  },
];
