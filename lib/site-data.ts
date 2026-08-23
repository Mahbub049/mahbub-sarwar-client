export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  result: string;
  level: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  status: "Current" | "Completed";
  duration: string;
  summary: string;
  highlights: string[];
};

export type TeachingItem = {
  course: string;
  semester: string;
  type: string;
  students: number;
};

export type ProjectItem = {
  title: string;
  slug: string;
  image: string;
  description: string;
  tech: string[];
  category: "Academic" | "Finance" | "Professional" | "Portfolio";
  live?: string;
  client?: string;
  server?: string;
  featured?: boolean;
};

export const site = {
  name: "Muhammad Mahbub Sarwar Shafi",
  shortName: "Mahbub Sarwar",
  role: "Lecturer · Researcher · Software Engineer",
  headline:
    "Advancing computing education, software engineering, and trustworthy AI through practical, research-driven work.",
  location: "Dhaka, Bangladesh",
  email: "mahbubsarwar5@gmail.com",
  phone: "+8801341883668",
  cv: "/Mahbub-CV.pdf",
  linkedin: "https://www.linkedin.com/in/mahbubsarwar49",
  github: "https://github.com/Mahbub049",
};

export const education: EducationItem[] = [
  {
    degree: "M.Sc in Information and Communication Engineering",
    institution: "Bangladesh University of Professionals",
    period: "2024 — Present",
    result: "Current CGPA: 3.79",
    level: "Postgraduate",
  },
  {
    degree: "B.Sc in Information and Communication Engineering",
    institution: "Bangladesh University of Professionals",
    period: "2020 — 2024",
    result: "CGPA: 3.89",
    level: "Undergraduate",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Adamjee Cantonment College",
    period: "2017 — 2019",
    result: "GPA: 4.83",
    level: "College",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Shaheed Ramiz Uddin Cantonment School",
    period: "2015 — 2017",
    result: "GPA: 5.00",
    level: "School",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Lecturer",
    organization: "Dept. of CSE, BUBT",
    period: "Jul 2025 — Present",
    status: "Current",
    duration: "1+ Years",
    summary:
      "Teaching undergraduate computing courses while contributing to academic planning, student guidance, research, and curriculum development.",
    highlights: [
      "Deliver lectures, tutorials, and laboratory sessions for undergraduate courses.",
      "Prepare course materials aligned with curriculum and learning outcomes.",
      "Participate in research and departmental academic initiatives.",
      "Continuously refine course delivery using student feedback and industry context.",
    ],
  },
  {
    role: "Teaching Assistant",
    organization: "Dept. of ICT, FST, BUP",
    period: "Aug 2024 — Jun 2025",
    status: "Completed",
    duration: "11 Months",
    summary:
      "Supported teaching, assessment, examination operations, and student mentoring across departmental courses.",
    highlights: [
      "Assisted instructors with lectures and class materials.",
      "Supported assessment, paper scrutiny, result entry, and question preparation.",
      "Mentored students and clarified course-related problems.",
      "Assisted examination and academic-integrity activities.",
    ],
  },
  {
    role: "Full Stack Web Developer · Intern",
    organization: "Genuity Systems Ltd, Dhaka",
    period: "Nov 2022 — Dec 2022",
    status: "Completed",
    duration: "2 Months",
    summary:
      "Worked in a software development environment and contributed to an e-commerce platform using a structured MVC workflow.",
    highlights: [
      "Built features using Laravel, PHP, HTML5, and CSS3.",
      "Applied MVC architecture and software-engineering practices.",
      "Designed and documented data relationships using ER diagrams.",
      "Collaborated through version control, testing, and team review.",
    ],
  },
];

export const teaching: TeachingItem[] = [
  {
    course: "Web Database Programming",
    semester: "Summer 2026",
    type: "Theory + Lab",
    students: 35,
  },
  {
    course: "Communication Engineering",
    semester: "Summer 2026",
    type: "Theory",
    students: 80,
  },
  {
    course: "Computer and Its Application in Business",
    semester: "Fall 2025 & Summer 2026",
    type: "Theory + Lab",
    students: 200,
  },
  {
    course: "System Analysis and Design",
    semester: "Summer 2026",
    type: "Theory + Lab",
    students: 40,
  },
  {
    course: "Database Systems",
    semester: "Spring 2026",
    type: "Theory + Lab",
    students: 32,
  },
  {
    course: "E-Commerce and Web Management",
    semester: "Spring 2026",
    type: "Theory + Lab",
    students: 47,
  },
];

export const activities = [
  {
    organization: "IEEE Computer Society BUP Student Branch Chapter",
    meta: "Leadership · 2022–2024",
    roles: [
      {
        title: "Chairperson",
        period: "Mar 2023 — May 2024",
        points: [
          'Launched "IEEE Branch Fest 2023", a two-day flagship event with seven segments.',
          "Organized a major web-development webinar featuring Jhankar Mahbub.",
        ],
      },
      {
        title: "Event Management Coordinator",
        period: "Jun 2022 — Mar 2023",
        points: [
          "Planned and coordinated inauguration events for IEEE CS BUP SBC.",
          'Managed the "Research Reveals Program" with IEEE SB, WIE, and CS.',
        ],
      },
    ],
  },
  {
    organization: "BUP Robotics Club",
    meta: "Committee · 2022–2023",
    roles: [
      {
        title: "Assistant Joint Secretary",
        period: "Mar 2022 — Jan 2023",
        points: [
          "Supported technical workshops and promotional design for BUP Day.",
          "Assisted event teams with planning and presentation design.",
        ],
      },
    ],
  },
  {
    organization: "BUP InfoTech Club",
    meta: "Event · 2022",
    roles: [
      {
        title: "Gaming Event Host",
        period: "2022",
        points: ["Hosted the Intra-BUP MIST Gaming Contest."],
      },
    ],
  },
  {
    organization: "Volunteering",
    meta: "Conference & national events",
    roles: [
      {
        title: "Volunteer",
        period: "2023",
        points: ["2nd International ICT Conference on Sustainability."],
      },
      {
        title: "Volunteer",
        period: "2022",
        points: ["National-level academic and technology events at BUP."],
      },
    ],
  },
];

export const skills = {
  engineering: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
  ],
  languages: ["Python", "C/C++", "Java", "PHP", "HTML5", "CSS3"],
  tools: ["Git", "GitHub", "Firebase", "Vercel", "Canva", "Google Drive"],
  focus: ["Full-stack systems", "Academic software", "Machine learning", "NLP", "Explainable AI"],
};

export const projects: ProjectItem[] = [
  {
    title: "Journal of FST",
    slug: "journal-of-fst",
    image: "/images/projects/project09.png",
    description:
      "An institutional journal platform for issues, articles, editorial boards, author guidance, research announcements, and CMS-based publishing workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "JWT", "Cloudinary"],
    category: "Academic",
    live: "https://jfst.vercel.app/",
    featured: true,
  },
  {
    title: "HomeFinance Finance Management",
    slug: "homefinance",
    image: "/images/projects/project08.png",
    description:
      "A personal and shared finance platform for income, expenses, savings, EMI, groceries, wallet balances, transfers, and synchronized ledger records.",
    tech: ["React", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "JWT"],
    category: "Finance",
    live: "https://homefinancebd.vercel.app/",
    featured: true,
  },
  {
    title: "BUBT Course Management Portal",
    slug: "bubt-course-management",
    image: "/images/projects/project07.png",
    description:
      "An academic workflow system for courses, assessments, marks, attendance, OBE activities, CO-PO mapping, attainment, grade distribution, and course-review reporting.",
    tech: ["React", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "JWT", "Supabase"],
    category: "Academic",
    live: "https://bubt-courses.vercel.app/",
    featured: true,
  },
  {
    title: "Class Routine Management System",
    slug: "class-routine-management",
    image: "/images/projects/project06.png",
    description:
      "A scheduling platform with administration for routines, faculty, and courses plus a responsive public view and conflict-aware academic workflow.",
    tech: ["React", "Tailwind", "MongoDB", "Express", "Node", "JWT"],
    category: "Academic",
    live: "https://ictroutine.vercel.app/",
    client: "https://github.com/Mahbub049/Routine-Management-Client.git",
    server: "https://github.com/Mahbub049/Routine-Management-Server.git",
  },
  {
    title: "Professional Personal Faculty Website",
    slug: "faculty-portfolio",
    image: "/images/projects/project05.png",
    description:
      "A faculty portfolio presenting academic credentials, research, teaching experience, and professional information through a responsive interface.",
    tech: ["React", "Tailwind", "Framer Motion"],
    category: "Portfolio",
    live: "https://nasiruddin.vercel.app/",
  },
  {
    title: "HostelMania — Hostel Management System",
    slug: "hostelmania",
    image: "/images/projects/project01.png",
    description:
      "A web-based hostel meal system for meal selection, order tracking, feedback, secure access, and real-time updates.",
    tech: ["React", "Tailwind", "Firebase", "MongoDB"],
    category: "Professional",
    live: "https://hostelmaniabd.web.app/",
  },
  {
    title: "TrioEats — Food Ordering",
    slug: "trioeats",
    image: "/images/projects/project02.png",
    description:
      "A restaurant experience where customers explore dishes, reserve seats, contact the restaurant, and discover its location.",
    tech: ["React", "Tailwind", "Firebase"],
    category: "Professional",
    live: "https://trioeats-8ebfe.web.app/",
  },
  {
    title: "WanderSea — Tour Booking",
    slug: "wandersea",
    image: "/images/projects/project03.png",
    description:
      "A tourism management platform for publishing and exploring Southeast Asian destinations and tourist spots.",
    tech: ["React", "Tailwind", "Firebase"],
    category: "Professional",
    live: "https://wandersea-d210a.web.app/",
  },
  {
    title: "Radiant Residences",
    slug: "radiant-residences",
    image: "/images/projects/project04.png",
    description:
      "A luxury accommodation experience built around curated properties, premium presentation, and responsive destination browsing.",
    tech: ["React", "Tailwind", "Firebase"],
    category: "Professional",
    live: "https://radiant-residences.web.app/",
    client: "https://github.com/Mahbub049/Radiant-Residences",
  },
];

export const achievements = [
  {
    title: "Dean's Appreciation",
    issuer: "Bangladesh University of Professionals",
    value: "2×",
    year: "2023",
    copy: "Recognition for outstanding academic performance in consecutive semesters.",
    size: "large",
  },
  {
    title: "BUP Scholarship",
    issuer: "Bangladesh University of Professionals",
    value: "4×",
    year: "2021–2023",
    copy: "Scholarship awards based on consistent academic excellence.",
    size: "large",
  },
  {
    title: "IEEE COVID-19 Congress",
    issuer: "IEEE",
    value: "1st Runner-up",
    year: "2020",
    copy: "Second position in an international idea contest organized by IEEE.",
    size: "small",
  },
  {
    title: "MindExperia Idea Contest",
    issuer: "BUP Robotics Club",
    value: "6th Place",
    year: "2020",
    copy: "National ranking in a BUP Robotics Club technology-idea competition.",
    size: "small",
  },
  {
    title: "Independence Day Essay Competition",
    issuer: "Adamjee Cantonment College",
    value: "Champion",
    year: "2019",
    copy: "First place in a national-level writing competition held at ACC.",
    size: "wide",
  },
];

export const publications = [
  {
    title:
      "An Explainable Ensemble Learning Framework for Brain Tumor Classification Using Pretrained Models and XAI Techniques",
    venue: "Journal of FST · Volume 3, Issue 01",
    year: "2025",
    status: "Published",
    area: "Biomedical Imaging · XAI",
  },
  {
    title:
      "Sentiment Classification in Movie Reviews Through a Comparative Analysis of Machine Learning Models",
    venue: "Journal of FST · Volume 3, Issue 01",
    year: "2025",
    status: "Published",
    area: "Natural Language Processing",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" },
];
