export const person = {
  name: "Bharathwaj Nedoumaran",
  initials: "BN",
  title: "CS Graduate Student · Full-Stack Developer · ML Engineer",
  email: "bharathwaj.nedou@gmail.com",
  phone: "+1 260-410-8783",
  linkedin: "https://linkedin.com/in/bharathwaj-nedoumaran",
  github: "https://github.com/Bharath-Maran",
  traits: ["Problem Solving", "Critical Thinking", "Teamwork", "Leadership", "Quick Learner", "Keen Observer"],
};

export const stats = [
  { value: "2+",  label: "Years Experience" },
  { value: "40%", label: "Delivery Acceleration" },
  { value: "5K+", label: "Employees Impacted" },
  { value: "30+", label: "Projects Unified" },
];

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const skillCategories = [
  {
    label: "Languages",
    items: [
      { name: "Java",       icon: `${DI}/java/java-original.svg` },
      { name: "Python",     icon: `${DI}/python/python-original.svg` },
      { name: "GoLang",     icon: `${DI}/go/go-original-wordmark.svg` },
      { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg` },
      { name: "HTML",       icon: `${DI}/html5/html5-original.svg` },
      { name: "CSS",        icon: `${DI}/css3/css3-original.svg` },
      { name: "SQL",        icon: `${DI}/mysql/mysql-original.svg` },
      { name: "PL/SQL",     icon: `${DI}/oracle/oracle-original.svg` },
    ],
  },
  {
    label: "Web & Frameworks",
    items: [
      { name: "Spring",   icon: `${DI}/spring/spring-original.svg` },
      { name: "React.js", icon: `${DI}/react/react-original.svg` },
      { name: "Node.js",  icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Flask",    icon: `${DI}/flask/flask-original.svg`,  dark: true },
      { name: "Django",   icon: `${DI}/django/django-plain.svg`,   dark: true },
      { name: "FastAPI",  icon: `${DI}/fastapi/fastapi-original.svg` },
      { name: "BeeGo",    icon: `${DI}/go/go-original-wordmark.svg` },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "MySQL",      icon: `${DI}/mysql/mysql-original.svg` },
      { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg` },
      { name: "MongoDB",    icon: `${DI}/mongodb/mongodb-original.svg` },
      { name: "Redis",      icon: `${DI}/redis/redis-original.svg` },
      { name: "Oracle DB",  icon: `${DI}/oracle/oracle-original.svg` },
      { name: "IBM DB2",    icon: `${DI}/ibmdb2/ibmdb2-original.svg` },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS",        icon: `${DI}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, dark: true },
      { name: "Docker",     icon: `${DI}/docker/docker-original.svg` },
      { name: "Kubernetes", icon: `${DI}/kubernetes/kubernetes-plain.svg` },
      { name: "Jenkins",    icon: `${DI}/jenkins/jenkins-original.svg` },
      { name: "Ansible",    icon: `${DI}/ansible/ansible-original.svg` },
      { name: "OCI",        icon: `${DI}/oracle/oracle-original.svg` },
    ],
  },
  {
    label: "Testing & Security",
    items: [
      { name: "Playwright", icon: `${DI}/playwright/playwright-original.svg` },
      { name: "OAuth 2.0",  icon: `` },
      { name: "SAML / SSO", icon: `` },
      { name: "JWT",        icon: `` },
    ],
  },
  {
    label: "AI & ML",
    items: [
      { name: "TensorFlow",   icon: `${DI}/tensorflow/tensorflow-original.svg` },
      { name: "PyTorch",      icon: `${DI}/pytorch/pytorch-original.svg` },
      { name: "Scikit-learn", icon: `${DI}/scikitlearn/scikitlearn-original.svg` },
      { name: "OpenCV",       icon: `${DI}/opencv/opencv-original.svg` },
      { name: "Pandas",       icon: `${DI}/pandas/pandas-original.svg` },
      { name: "NumPy",        icon: `${DI}/numpy/numpy-original.svg` },
      { name: "Matplotlib",   icon: `${DI}/matplotlib/matplotlib-original.svg` },
    ],
  },
  {
    label: "Developer Tools",
    items: [
      { name: "Git",       icon: `${DI}/git/git-original.svg` },
      { name: "GitHub",    icon: `${DI}/github/github-original.svg`,    dark: true },
      { name: "Bitbucket", icon: `${DI}/bitbucket/bitbucket-original.svg` },
      { name: "Jira",      icon: `${DI}/jira/jira-original.svg` },
      { name: "VS Code",   icon: `${DI}/vscode/vscode-original.svg` },
      { name: "Postman",   icon: `${DI}/postman/postman-original.svg` },
      { name: "Figma",     icon: `${DI}/figma/figma-original.svg` },
      { name: "PyCharm",   icon: `${DI}/pycharm/pycharm-original.svg` },
    ],
  },
  {
    label: "Operating Systems",
    items: [
      { name: "Linux",   icon: `${DI}/linux/linux-original.svg` },
      { name: "Windows", icon: `${DI}/windows11/windows11-original.svg` },
      { name: "Solaris", icon: `` },
      { name: "AIX",     icon: `` },
      { name: "IBM i",   icon: `` },
      { name: "HP-UX",   icon: `` },
    ],
  },
  {
    label: "Concepts",
    items: [
      { name: "OOP",                 icon: `` },
      { name: "REST API",            icon: `` },
      { name: "Data Structures",     icon: `` },
      { name: "MVC",                 icon: `` },
      { name: "Agile / Kanban",      icon: `` },
      { name: "Unit Testing",        icon: `` },
      { name: "Distributed Systems", icon: `` },
      { name: "CI/CD",               icon: `` },
    ],
  },
];

export const experience = [
  {
    role: "Application Developer II",
    company: "Oracle",
    period: "Sep 2023 – Jul 2025",
    location: "Bengaluru, India",
    logo: "/logos/oracle.jpeg",
    bullets: [
      "Orchestrated <strong>Cross-Platform Release Validation</strong>: Directed installation, security, and performance testing protocols for Oracle JD Edwards EnterpriseOne applications across <strong>Windows, Linux, and Unix</strong> environments to ensure zero-defect production deployments.",
      "Architected <strong>Full-Stack Release Platform</strong>: Developed a comprehensive Release Engineering Dashboard (<strong>Oracle APEX, JavaScript, SQL</strong>) as the centralized frontend to manage all VMs, servers, test results, and bug databases across <strong>30+ concurrent enterprise projects</strong>.",
      "Engineered <strong>Backend Automation Tooling</strong>: Built and securely deployed supporting <strong>Python Flask REST APIs</strong> via Nginx on Linux VMs to process dashboard-driven commands, automating manual infrastructure maintenance, database schema validations, and cross-platform service restarts.",
      "Accelerated <strong>Continuous Delivery</strong>: Streamlined the CI/CD pipeline by enabling one-click automated test triggers directly from the dashboard UI, reducing manual deployment validation effort by <strong>25%</strong> and accelerating overall delivery lifecycles by <strong>40%</strong>.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Aspire Systems",
    period: "Mar 2023 – Aug 2023",
    location: "Chennai, India",
    logo: "/logos/aspire.png",
    bullets: [
      "Delivered a scalable test-takers module for corporate LMS using <strong>Java Spring</strong> within a 3-month Agile cycle, facilitating training for <strong>5,000+ employees</strong>.",
      "Built two full-stack web applications integrating <strong>Python Flask, Spring Boot, and SQL Server</strong>, managing the complete SDLC from backend logic to frontend UI.",
      "Mastered enterprise software development in <strong>Java and Python</strong>, applying robust OOP principles and Data Structures to create efficient, production-ready code.",
    ],
  },
];

const DI2 = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const projects = [
  {
    title: "Enterprise Telehealth & Inventory Platform",
    org: "Purdue University",
    period: "Jan – May 2026",
    bullets: [
      "Architected <strong>Microservices Backend</strong>: Developed a robust healthcare REST API leveraging <strong>Java 17 and Spring Boot</strong>, supporting secure user authentication, medical inventory management, and telehealth scheduling.",
      "Engineered <strong>High-Performance UI</strong>: Built a responsive, scalable frontend architecture utilizing <strong>React, Node.js, and Vite</strong>, styled with Tailwind CSS to ensure a seamless, high-speed user experience across all devices.",
      "Containerized <strong>System Architecture</strong>: Orchestrated the entire multi-tier application stack (Backend API, Frontend UI, and PostgreSQL database) using <strong>Docker</strong>, guaranteeing consistent environments and accelerating deployment times.",
      "Administered <strong>Distributed Version Control</strong>: Managed isolated microservice repositories within <strong>Bitbucket</strong>, utilizing Git for strict version control and seamless integration between frontend and backend workflows.",
    ],
    tech: [
      { name: "Java",       icon: `${DI2}/java/java-original.svg` },
      { name: "Spring",     icon: `${DI2}/spring/spring-original.svg` },
      { name: "React.js",   icon: `${DI2}/react/react-original.svg` },
      { name: "Node.js",    icon: `${DI2}/nodejs/nodejs-original.svg` },
      { name: "PostgreSQL", icon: `${DI2}/postgresql/postgresql-original.svg` },
      { name: "Docker",     icon: `${DI2}/docker/docker-original.svg` },
    ],
  },
  {
    title: "FolioGram – A Portfolio Builder",
    org: "Purdue University",
    period: "Aug – Dec 2025",
    bullets: [
      "Engineered a comprehensive professional identity platform consolidating <strong>Portfolios, Blogs, and Appointments</strong> using React.js and GoLang, leading a team of four.",
      "Built a scalable, containerized <strong>RESTful API with Docker</strong>, ensuring strict modular separation between portfolio content and real-time scheduling logic.",
      "Guaranteed <strong>100% data integrity</strong> for real-time bookings by optimizing MySQL database schemas to handle concurrent scheduling conflicts.",
    ],
    tech: [
      { name: "React.js", icon: `${DI2}/react/react-original.svg` },
      { name: "GoLang",   icon: `${DI2}/go/go-original-wordmark.svg` },
      { name: "Docker",   icon: `${DI2}/docker/docker-original.svg` },
      { name: "MySQL",    icon: `${DI2}/mysql/mysql-original.svg` },
    ],
  },
  {
    title: "Adversarial Attack Detection on ML",
    org: "Purdue University",
    period: "Aug – Dec 2025",
    bullets: [
      "Engineered a <strong>Hybrid CNN-Autoencoder</strong> defense pipeline using Python and TensorFlow, processing <strong>70,000 images</strong> to detect FGSM attacks on the Fashion MNIST dataset.",
      "Achieved a perfect <strong>1.0 ROC-AUC</strong> and <strong>99.8% F1-score</strong> with a Binary CNN detector designed to distinguish clean from perturbed images.",
      "Boosted accuracy on attacked images from <strong>2.8% → 98.9%</strong> by implementing adversarial training with 120,000 augmented samples.",
    ],
    tech: [
      { name: "Python",       icon: `${DI2}/python/python-original.svg` },
      { name: "TensorFlow",   icon: `${DI2}/tensorflow/tensorflow-original.svg` },
      { name: "PyTorch",      icon: `${DI2}/pytorch/pytorch-original.svg` },
      { name: "NumPy",        icon: `${DI2}/numpy/numpy-original.svg` },
      { name: "Scikit-learn", icon: `${DI2}/scikitlearn/scikitlearn-original.svg` },
    ],
  },
  {
    title: "Precision Farming using ML & Data Analytics",
    org: "St. Joseph's Institute of Technology",
    period: "Dec – Mar 2023",
    bullets: [
      "Collaborated with a peer to collect and analyze extensive datasets of over <strong>5,000+ samples</strong> and trained a machine learning model to predict crops using advanced algorithms.",
      "Achieved an outstanding <strong>99.31% accuracy rate</strong> by rigorously testing and comparing six different supervised learning algorithms, utilizing <strong>XGBoost</strong> for optimal results and improved efficiency.",
    ],
    tech: [
      { name: "Python",       icon: `${DI2}/python/python-original.svg` },
      { name: "Scikit-learn", icon: `${DI2}/scikitlearn/scikitlearn-original.svg` },
      { name: "Pandas",       icon: `${DI2}/pandas/pandas-original.svg` },
      { name: "NumPy",        icon: `${DI2}/numpy/numpy-original.svg` },
      { name: "Matplotlib",   icon: `${DI2}/matplotlib/matplotlib-original.svg` },
    ],
  },
  {
    title: "Exploratory Analysis of Rainfall Data in India",
    org: "St. Joseph's Institute of Technology",
    period: "Jul – Nov 2022",
    bullets: [
      "Led a team of 3 in developing a highly accurate rainfall prediction model for India using <strong>Linear Regression</strong>, achieving <strong>97% accuracy</strong> through advanced hyper-parameter tuning.",
      "Conducted in-depth analysis of a <strong>10-year weather dataset</strong>, utilizing <strong>IBM Watson</strong> and IBM Machine Learning tools to extract insights and enhance model robustness.",
      "Successfully deployed the model in a <strong>Flask environment</strong>, ensuring optimal scalability and performance under the mentorship of an IBM expert.",
    ],
    tech: [
      { name: "Python",     icon: `${DI2}/python/python-original.svg` },
      { name: "Flask",      icon: `${DI2}/flask/flask-original.svg` },
      { name: "Pandas",     icon: `${DI2}/pandas/pandas-original.svg` },
      { name: "Matplotlib", icon: `${DI2}/matplotlib/matplotlib-original.svg` },
      { name: "NumPy",      icon: `${DI2}/numpy/numpy-original.svg` },
    ],
  },
  {
    title: "Motorcyclists Helmet & License Plate Detection",
    org: "St. Joseph's Institute of Technology",
    period: "Jan – Jun 2022",
    bullets: [
      "Co-developed a lightweight, real-time detection system (<strong>14MB model</strong>) achieving <strong>98.89% mAP</strong>, <strong>94.6 F1-score</strong>, and <strong>130 FPS</strong> processing speed for motorcyclist helmet and license plate recognition.",
      "Utilized <strong>YOLOv5 and ResNet-50</strong> architectures with Canny Edge algorithm for frame preservation, enabling accurate face and license plate identification for real-time road safety monitoring.",
    ],
    tech: [
      { name: "Python",  icon: `${DI2}/python/python-original.svg` },
      { name: "PyTorch", icon: `${DI2}/pytorch/pytorch-original.svg` },
      { name: "OpenCV",  icon: `${DI2}/opencv/opencv-original.svg` },
    ],
  },
];

export const education = [
  {
    school: "Purdue University",
    degree: "Master of Science in Computer Science",
    location: "Fort Wayne, Indiana, USA",
    period: "Aug 2025 – May 2027",
    gpa: "4.0",
    status: "In Progress",
    logo: "/logos/purdue.jpeg",
  },
  {
    school: "Anna University",
    degree: "Bachelor of Engineering in Computer Science",
    location: "Tamil Nadu, India",
    period: "Aug 2019 – May 2023",
    gpa: "3.5",
    status: "Graduated",
    logo: "/logos/sjit.jpeg",
  },
];

export const publications = [
  {
    title: "Precision Farming Using Machine Learning and Data Analytics",
    authors: "Aashik Mathew Prosper, Bharathwaj Nedoumaran, Sundarababu Maddu, P. Mithun",
    venue: "International Conference on Sustainable Computing and Data Communication Systems (ICSCDS)",
    publisher: "IEEE",
    year: 2024,
    url: "https://ieeexplore.ieee.org/abstract/document/10465318",
  },
  {
    title: "Real-Time Number Plate and Helmet Detection of Motorcyclists using YOLOv5 and ResNet-50",
    authors: "P. Aashik Mathew, Anoohya Jagarlamudi, N. Bharathwaj, K. Jaspin",
    venue: "International Conference on Sustainable Computing and Data Communication Systems (ICSCDS)",
    publisher: "IEEE",
    year: 2023,
    url: "https://ieeexplore.ieee.org/abstract/document/10105076",
  },
];

export const references = {
  academic: [
    {
      name: "Prof. Dr. J. Dafni Rose",
      title: "Professor and Head",
      dept: "Dept. of Computer Science and Engineering",
      institution: "St. Joseph's Institute of Technology",
      address: "OMR, Chennai – 600119",
      phone: "+91 99401 11231",
      email: "hodcse@stjosephstechnology.ac.in",
    },
    {
      name: "Prof. Mrs. K. Jaspin",
      title: "Assistant Professor",
      dept: "Dept. of Computer Science and Engineering",
      institution: "St. Joseph's Institute of Technology",
      address: "OMR, Chennai – 600119",
      phone: "+91 97910 87450",
      email: "jaspink@stjosephstechnology.ac.in",
    },
    {
      name: "Prof. Mr. P. Mithun",
      title: "Assistant Professor",
      dept: "Dept. of Computer Science and Engineering",
      institution: "St. Joseph's Institute of Technology",
      address: "OMR, Chennai – 600119",
      phone: "+91 80721 67713",
      email: "mithunp@stjosephstechnology.ac.in",
    },
  ],
  professional: [
    {
      name: "Mr. Maran Govindarajan",
      title: "Senior Manager",
      dept: "Oracle",
      institution: "Oracle",
      address: "Bengaluru, India – 560035",
      phone: "+91 98459 81125",
      email: "maran.govindarajan@oracle.com",
    },
    {
      name: "Mr. Subbu Sambandam",
      title: "Associate Director – Talent Nurturing",
      dept: "Aspire Systems",
      institution: "Aspire Systems",
      address: "Chennai, India – 603103",
      phone: "+91 98404 68855",
      email: "subbu.sambandam@aspiresys.com",
    },
  ],
};
