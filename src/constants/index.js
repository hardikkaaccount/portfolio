import {
  ai,
  creator,
  ml,
  web,
  newshub,
  ebook,
  faceattend,
  gunu,
  unify,
  devhub,
  css,
  figma,
  git,
  html,
  ieee1,
  ieee2,
  ieee3,
  ieee4,
  iellipse1,
  iellipse2,
  iellipse3,
  iellipse4,
  inprogress,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  ocv,
  npy,
  code1,
  python,
  sql,
  next,
  C,
  cpp,
  tf,
  skl,
  aws,
  aws2,
  codeDebug,
  codeWall,
  crackdown,
  iitdelhi,
  rev,
  webkirti,
  kcet,
  // ⭐ New ones added
  pandas,
  matplotlib,
  seaborn,
  firebase,
  langchain,
  rag,
  huggingface,
  knime,
  jenkins,
  docker,
  postman,
  canva,
  ubuntu,
  flask,
  express,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ML Enthusiast.",
    icon: ml,
  },
  {
    title: "Full Stack Developer.",
    icon: web,
  },
  {
    title: "AI Enthusiast.",
    icon: ai,
  },
  {
    title: "Problem Solver.",
    icon: creator,
  },
];

const technologies = [
  // Programming Languages
  {
    name: "C Programing",
    icon: C,
  },
  {
    name: "c++",
    icon: cpp,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "sql",
    icon: sql,
  },

  // Frontend Development
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "next",
    icon: next,
  },

  // Backend Development
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Flask",
    icon: flask,
  },

  // Databases & Cloud
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "AWS",
    icon: aws2,
  },

  // Machine Learning & AI
  {
    name: "numpy",
    icon: npy,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "Seaborn",
    icon: seaborn,
  },
  {
    name: "scikit-learn",
    icon: skl,
  },
  {
    name: "Tenserflow",
    icon: tf,
  },
  {
    name: "open cv",
    icon: ocv,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "RAG",
    icon: rag,
  },
  {
    name: "HuggingFace",
    icon: huggingface,
  },
  {
    name: "KNIME",
    icon: knime,
  },

  // DevOps & Tools
  {
    name: "git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },

  // Design & Productivity
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Canva",
    icon: canva,
  },
];

const freelanceWorks = [
  {
    title: "IEEE PESCE Student Branch Website",
    description:
      "Developed the official IEEE PESCE website for the student branch of IEEE PES College of Engineering, Mandya. As the Director of Technical Activities, I contributed both technically and organizationally.",
    images: [ieee1, ieee2, ieee3, ieee4],
    status: "Completed",
    learnings: [
      "Enhanced skills in React and Tailwind CSS",
      "Improved website design and UI/UX understanding",
      "Gained experience in project coordination and team collaboration",
    ],
    link: { type: "normal", url: "https://ieeepesce.com/" },
  },
  {
    title: "Manmed Dynamics Website",
    description:
      "Official company website under development for Manmed Dynamics, showcasing services and company vision. Currently ongoing with more details to be disclosed after launch.",
    images: [inprogress],
    status: "Ongoing",
    learnings: [
      "Learning to structure large-scale web projects",
      "Improving responsive design implementation",
      "Gaining experience in client communication and iterative development",
    ],
    link: { type: "ongoing" },
  },
  {
    title: "Form AI Generator and Editor (PDF Editor)",
    client: "iEllipse Technologies",
    description:
      "A web application enabling AI-powered form generation, in-browser editing, and export to PDF. Delivered as part of a client collaboration under NDA.",
    images: [iellipse1, iellipse2, iellipse3, iellipse4],
    status: "Completed",
    learnings: [
      "Implemented AI integration with front-end technologies",
      "Gained experience with WYSIWYG editors and PDF export tools",
      "Learnt best practices for building client-focused applications",
    ],
    link: { type: "not-disclosable" },
  },
];

const experiences = [
  {
    title: "Data Science Intern",
    company_name: "OPQ Tech Private Limited",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "November 2024 – May 2025",
    points: [
      "Created data visualizations and dashboards using PowerBI for better insights.",
      "Worked with AWS Q Business to develop and manage cloud-based solutions.",
      "Implemented generative AI models for natural language processing and image generation.",
      "Integrated AI solutions into existing platforms and applications."
    ],
  },
  {
    title: "Cybersecurity & AWS Intern",
    company_name: "Employability.life",
    icon: code1,
    iconBg: "#1E293B",
    date: "November 2024 – May 2025",
    points: [
      "Configured IAM, VPC, and S3 to improve cloud security practices.",
      "Enabled AWS services like GuardDuty, Macie, and Security Hub for monitoring and compliance.",
      "Used CloudTrail for logging and auditing activities.",
      "Gained hands-on experience in AWS security and compliance tools."
    ],
  },
  {
    title: "AI-Powered Document Automation Project",
    company_name: "Self-Developed",
    icon: code1,
    iconBg: "#0F766E",
    date: "August 2024 – October 2024",
    points: [
      "Built an AI-powered document editor with features like prompt-based writing and auto form filling.",
      "Added support for signature removal and document export.",
      "Used Flask, Mistral AI, CKEditor, and pdf2htmlEX to implement editing features.",
      "Explored document automation and AI integration with MERN stack tools."
    ],
  },
  {
    title: "Python Programming Intern",
    company_name: "CodeWay",
    icon: code1,
    iconBg: "#383E56",
    date: "January 2024 – February 2024",
    points: [
      "Worked on Python projects and shared them through GitHub.",
      "Completed assigned tasks within deadlines following given guidelines.",
      "Improved coding and problem-solving skills through practical projects.",
      "Learned project management and teamwork during the internship."
    ],
  }
];



const imageProjects = [
  {
    id: 1,
    image: newshub,
    url: "https://github.com/hardikkaaccount/New-Article-Recomondation-System.git",
    title: "NewsHub",
    description: "An innovative news web app offering personalized and unbiased news content. ",
  },
  {
    id: 2,
    image: ebook,
    url: "https://github.com/hardikkaaccount/Online-Ebook-Library-for-Students.git",
    title: "EBook Library",
    description: "A user-friendly web application providing free access to a wide range of e-books, including textbooks and academic resources.",
  },
  {
    id: 3,
    image: devhub,
    url: "https://visionop19cr.github.io/DevHub_webcult/Home/Atlas/index.html",
    title: "Devhub Club",
    description: "An online community for developers to collaborate, share knowledge, and grow their skills.",
  },
  {
    id: 4,
    image: gunu,
    url: "https://github.com/hardikkaaccount/Gungun-fashion-ecommerce-store.git",
    title: "Gungun Fashion",
    description: "A dynamic e-commerce platform offering a wide range of clothing and accessories.",
  },
  {
    id: 5,
    image: faceattend,
    url: "https://github.com/hardikkaaccount/Attendance-Management-System-using-Face-Recognition.git",
    title: "FaceAttend",
    description: "An attendance management system powered by face recognition technology.",
  },
  {
    id: 6,
    image: unify,
    url: "https://github.com/hardikkaaccount/Dual-Pay.git",
    title: "Dual Pay",
    description: "An all-in-one digital payment solution consolidating various payment services into a single platform",
  },
  {
  id: 7,
  image: kcet, 
  url: "https://github.com/hardikkaaccount/KCET_college_predictor.git",
  title: "KCET College Predictor",
  description: "A web-based dashboard that predicts potential colleges based on KCET rank, guides students through the counselling process, and features an AI-powered chatbot for queries."
  }
];

const Achievements = [
  {
    id: 1,
    image: aws,
    url: "https://www.linkedin.com/posts/hardikjain108_%F0%9D%90%93%F0%9D%90%A1%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%A5%F0%9D%90%A5%F0%9D%90%9E%F0%9D%90%9D-%F0%9D%90%AD%F0%9D%90%A8-%F0%9D%90%92%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%AB%F0%9D%90%9E-%F0%9D%90%8C%F0%9D%90%B2-activity-7197487861204463616-D8vm?utm_source=share&utm_medium=member_desktop",
    title: "Participation in AWS Summit 2024",
    description: "Participated in the AWS Summit 2024 held in Bengaluru on 16th May 2024, where attendees gained insights into the latest advancements in cloud technologies, AWS services, and their application in modern industries. The summit provided a platform for networking with cloud professionals and enhancing skills in cloud computing.",
  },
  {
    id: 2,
    image: codeWall,
    url: "https://drive.google.com/file/d/1XaseauU46B5ka4OcikxhqoHRTlV520XP/view?usp=sharing",
    title: "Winners of Code-Walls 🏆",
    description: "Won first place in the 'Code-Walls' competition organized by the ISTE Club at P.E.S. College of Engineering on 7th May 2024. The competition tested participants' problem-solving abilities and coding efficiency, with the team securing the top spot due to their innovative approach and technical skills.",
  },
  {
    id: 3,
    image: codeDebug,
    url: "https://drive.google.com/file/d/1OP8JlNYXuv2FcGySBiOJ0R-QnmgLWrbW/view?usp=sharing",
    title: "Winner of Code Debugging 🏆",
    description: "Secured first place in the 'Code Debugging' competition held during ISTE Karnataka activities at P.E.S. College of Engineering on 7th April 2023. The competition challenged participants to identify and fix bugs in a given code under time pressure, and the team’s quick and efficient debugging skills led them to victory.",
  },
  {
    id: 4,
    image: rev,
    url: "https://www.linkedin.com/posts/hardikjain108_innovation-technology-coding-activity-7217185945337364482-hydx?utm_source=share&utm_medium=member_desktop",
    title: "Runners-up in Reverse Coding 🥈",
    description: "Achieved the runner-up position in the 'Reverse Coding' competition at the Pioneer event organized by the EEE Department at P.E.S. College of Engineering on 15th May 2024. The event required participants to decode and debug an already-written program, and the team’s strong analytical and coding skills earned them a well-deserved second place.",
  },
  {
    id: 5,
    image: webkirti,
    url: "https://drive.google.com/file/d/19lRMrphbviWnN9Tqdl50Cspc1IRseAE_/view?usp=drive_link",
    title: "Winners of Web-Kirti 🏆",
    description: "Emerging victorious in the 'Web-Kirti' competition during the Techno-Sphere event on 3rd June 2024, hosted by the CSE Department of P.E.S. College of Engineering. The event showcased participants' ability to create innovative web development solutions that met real-world challenges, and the team's project stood out for its creativity and functionality.",
  },
  {
    id: 6,
    image: crackdown,
    url: "https://www.linkedin.com/posts/hardikjain108_innovation-technology-coding-activity-7217185945337364482-hydx?utm_source=share&utm_medium=member_desktop",
    title: "Runners-up in Code-Crackdown 🥈",
    description: "Finished as runners-up in the 'Code-Crackdown' event hosted by the ISE Department at P.E.S. College of Engineering on 15th May 2024. The competition focused on quick problem-solving in coding tasks, and the team’s fast-paced approach and precision helped them secure second place in this highly competitive event.",
  },
  {
    id: 7,
    image: iitdelhi, // You can replace this with the actual image for the event
    url: "https://hardik.com/robo-soccer",
    title: "Participation in Robo Soccer Competition 🤖⚽",
    description: "A team of AI & ML students, consisting of 4 teams with 4 members each, participated in the Robo Soccer Competition at TRYST'24, IIT Delhi, on 29th, 30th, and 31st March 2024. The competition brought together talented teams from various institutions, focusing on robotic engineering and AI-based strategies for playing soccer with robots. This participation provided valuable hands-on experience in robotics and AI applications in real-world challenges.",
  }  
];


const projects = [
  {
    name: "KCET College Predictor",
    description:
      "KCET College Predictor & Counselling Assistant is a web-based dashboard designed for students appearing in the Karnataka Common Entrance Test (KCET). It predicts potential colleges and branches based on the user's rank, provides a step-by-step counselling guide, and includes an AI-powered chatbot for answering queries. The app also features interactive dashboards that visualize cutoff ranks and seat matrix data, making the counselling process easier and more transparent.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "GoogleGeminiAI",
        color: "pink-text-gradient",
      },
      {
        name: "Recharts",
        color: "orange-text-gradient",
      },
    ],
    image: kcet, // <-- replace with the actual imported image/logo
    source_code_link: "https://github.com/hardikkaaccount/KCET_college_predictor.git",
    liveUrl: "https://findmykcetcollege.vercel.app",
  },
  {
    name: "Dual Pay",
    description:
      "Dual Pay is an all-in-one digital payment solution that consolidates various payment services into a single platform. Designed for convenience and security, it allows users to make instant, hassle-free transactions across a wide range of payment channels. Whether for bills, online shopping, or transferring money, Dual Pay ensures secure payments with a streamlined interface. The app also tracks transaction histories, offering detailed insights into spending and ensuring efficient money management for users across different devices.",
    tags: [
      {
        name: "MernStack",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: unify,
    source_code_link: "https://github.com/hardikkaaccount/Dual-Pay.git",
    liveUrl: "https://github.com/hardikkaaccount/Dual-Pay.git",
  },
  {
    name: "NewsHub",
    description:
    "NewsHub is an innovative news web app that offers a personalized experience, tailoring content to users' interests while ensuring unbiased news delivery. The platform uses advanced algorithms to recommend articles based on user preferences. With an interactive interface and scrolling summaries of the latest news, users can stay updated effortlessly. The app fosters a well-rounded view of current events, ensuring content is diverse and informative across various topics.",
    tags: [
      {
        name: "MachineLearning",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: newshub,
    source_code_link: "https://github.com/hardikkaaccount/New-Article-Recomondation-System.git",
    liveUrl: "https://github.com/hardikkaaccount/New-Article-Recomondation-System.git",
  },
  {
    name: "FaceAttend",
    description:
      "FaceAttend is a cutting-edge attendance management system powered by face recognition technology. This system automates the attendance process, eliminating manual errors and improving accuracy. With real-time tracking and data recording, FaceAttend enhances efficiency in workplaces or educational institutions. Users can easily integrate the system into their existing infrastructure, ensuring a smooth experience. The app also provides detailed analytics, helping administrators manage attendance effectively while boosting security and user convenience.",
    tags: [
      {
        name: "opencv",
        color: "blue-text-gradient",
      },
      {
        name: "Twiker",
        color: "green-text-gradient",
      },
      {
        name: "MachineLearning",
        color: "pink-text-gradient",
      },
    ],
    image: faceattend,
    source_code_link: "https://github.com/hardikkaaccount/Attendance-Management-System-using-Face-Recognition.git",
    liveUrl: "https://github.com/hardikkaaccount/Attendance-Management-System-using-Face-Recognition.git",
  },
  {
    name: "Gungun Fashion",
    description:
      "Gungun Fashion is a dynamic e-commerce platform for fashion enthusiasts, offering a wide range of clothing and accessories. Designed to provide a seamless shopping experience, the website includes intuitive features like product filtering, secure payment methods, and easy category browsing. Its responsive design ensures a smooth user experience across various devices, allowing customers to shop anytime, anywhere. Gungun Fashion aims to revolutionize the online shopping experience with its sleek interface and user-centric approach.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: gunu,
    source_code_link: "https://github.com/hardikkaaccount/Gungun-fashion-ecommerce-store.git",
    liveUrl: "https://github.com/hardikkaaccount/Gungun-fashion-ecommerce-store.git",
  },
  {
    name: "EBook Library",
    description:
      "Ebook Library is a user-friendly web application offering free access to a wide range of e-books, including textbooks, literature, and academic resources, tailored to students. Built with the MERN stack, it features easy navigation, search filters, and secure user registration. The platform also provides both dark and light mode, ensuring a comfortable reading experience across devices. Users can access books by logging in and browsing through categories like engineering, medicine, and more.",
    tags: [
      {
        name: "MernStack",
        color: "blue-text-gradient",
      },
      {
        name: "FullStackDevelopment",
        color: "green-text-gradient",
      },
      {
        name: "FSD",
        color: "pink-text-gradient",
      },
    ],
    image: ebook,
    source_code_link: "https://github.com/hardikkaaccount/Online-Ebook-Library-for-Students.git",
    liveUrl: "hhttps://github.com/hardikkaaccount/Online-Ebook-Library-for-Students.git",
  },
  {
    name: "Devhub Club",
    description:
      "DevHub Club is an innovative online community designed for developers to collaborate, share knowledge, and grow their skills. The platform offers a variety of resources including coding tutorials, challenges, and forums for discussing development techniques and best practices. Members can connect with like-minded professionals, participate in hackathons, and contribute to open-source projects. DevHub Club fosters a supportive environment where both beginners and experts can learn, network, and advance in their software development careers.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: devhub,
    source_code_link: "https://github.com/hardikkaaccount/Frontend-club-website.git",
    liveUrl: "https://visionop19cr.github.io/DevHub_webcult/Home/Atlas/index.html",
  }
];

export {
  services,
  technologies,
  Achievements,
  experiences,
  projects,
  imageProjects,
  freelanceWorks, // only reference here
};

