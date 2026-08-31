export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  result: string;
  level: string;
  academicRecordId?: string;
  logo: string;
  logoCrop?: boolean;
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
    "Building practical, research-driven work across computing education, software engineering, and trustworthy AI.",
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
    academicRecordId: "msc-bup",
    logo: "https://images.seeklogo.com/logo-png/36/1/bangladesh-university-of-professionals-bup-logo-png_seeklogo-366021.png",
  },
  {
    degree: "B.Sc in Information and Communication Engineering",
    institution: "Bangladesh University of Professionals",
    period: "2020 — 2024",
    result: "CGPA: 3.89",
    level: "Undergraduate",
    academicRecordId: "bsc-bup",
    logo: "https://images.seeklogo.com/logo-png/36/1/bangladesh-university-of-professionals-bup-logo-png_seeklogo-366021.png",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Adamjee Cantonment College",
    period: "2017 — 2019",
    result: "GPA: 4.83",
    level: "College",
    logo: "https://images.seeklogo.com/logo-png/46/1/adamjee-cantonment-college-logo-png_seeklogo-465495.png",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Shaheed Ramiz Uddin Cantonment School",
    period: "2015 — 2017",
    result: "GPA: 5.00",
    level: "School",
    logo: "/images/education/shaheed-ramiz-uddin-cantonment-school.png",
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
          "Organized the 2nd International ICT Conference on Sustainability.",
          "Organized a major web-development webinar featuring Jhankar Mahbub.",
        ],
        gallery: [
          {
            src: "/images/activities/ieee-cs-01.webp",
            alt: "IEEE Computer Society BUP Student Branch Chapter executive panel",
          },
          {
            src: "/images/activities/ieee-cs-02.webp",
            alt: "IEEE Computer Society BUP webinar featuring Jhankar Mahbub",
          },
          {
            src: "/images/activities/ieee-cs-03.webp",
            alt: "IEEE Computer Society BUP event group photo",
          },
          {
            src: "/images/activities/ieee-cs-04.webp",
            alt: "IEEE Computer Society BUP Branch Fest chairperson recognition",
          },
          {
            src: "/images/activities/ieee-cs-05.webp",
            alt: "IEEE Computer Society BUP chapter event team",
          },
          {
            src: "/images/activities/ieee-cs-06.webp",
            alt: "IEEE Computer Society BUP technology event booth",
          },
          {
            src: "/images/activities/ieee-cs-07.webp",
            alt: "IEEE BUP Branch Fest 2023 prize-giving ceremony",
          },
          {
            src: "/images/activities/ieee-cs-08.webp",
            alt: "IEEE BUP Branch Fest 2023 organizer award plaque",
          },
          {
            src: "/images/activities/ieee-cs-09.webp",
            alt: "2nd International ICT Conference on Sustainability",
          },
          {
            src: "/images/activities/ieee-cs-10.webp",
            alt: "IEEE BUP Branch Fest 2023 recognition ceremony",
          },
          {
            src: "/images/activities/ieee-cs-11.webp",
            alt: "IEEE BUP Branch Fest 2023 organizer recognition",
          },
        ],
      },
      {
        title: "Event Management Coordinator",
        period: "Jun 2022 — Mar 2023",
        points: [
          "Planned and coordinated inauguration events for IEEE CS BUP SBC.",
          'Managed the "Research Reveals Program" with IEEE SB, WIE, and CS.',
        ],
        gallery: [],
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
        gallery: [
          {
            src: "/images/activities/buprc-role-01.webp",
            alt: "BUP Robotics Club Assistant Joint Secretary committee profile",
          },
        ],
        links: [
          {
            label: "YouTube",
            href: "https://youtu.be/FsvSmMg82u0?si=1S-sydNkh89k8IIk",
            type: "youtube",
            embedUrl: "https://www.youtube.com/embed/FsvSmMg82u0?rel=0",
          },
          {
            label: "Google Photos",
            href: "https://photos.app.goo.gl/QWf6ZMUW3jb2vQni9",
            type: "photos-video",
          },
        ],
      },
    ],
  },
  {
    organization: "BUP InfoTech Club",
    meta: "Event · 2023",
    roles: [
      {
        title: "Gaming Event Host",
        period: "2023",
        points: ["Hosted the Intra-BUP MIST Gaming Contest."],
        gallery: [
          {
            src: "/images/activities/bupitc-event-01.webp",
            alt: "BUP InfoTech Club Valorant gaming tournament event poster",
          },
        ],
        links: [
          {
            label: "Event",
            href: "https://fb.me/e/2pIRwwJPl",
            type: "event",
            poster: {
              src: "/images/activities/bupitc-event-01.webp",
              alt: "BUP InfoTech Club Valorant gaming tournament event poster",
            },
          },
        ],
      },
    ],
  },
  {
    organization: "Volunteering",
    meta: "National event · 2018",
    roles: [
      {
        title: "Volunteer",
        period: "2018",
        points: ["Volunteered at the ACC National Science Festival."],
        gallery: [
          {
            src: "/images/activities/volunteer-acc-01.webp",
            alt: "Volunteer at the Adamjee Cantonment College National Science Festival",
          },
          {
            src: "/images/activities/volunteer-acc-02.webp",
            alt: "Volunteer group at the Adamjee Cantonment College National Science Festival",
          },
        ],
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
  focus: ["Biomedical imaging", "NLP", "AI"],
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
    live: "https://ijfst.bup.edu.bd/",
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
    title: "Vice Chancellor's Award",
    issuer: "Bangladesh University of Professionals",
    value: "1×",
    year: "2021",
    copy: "University-level recognition presented by Bangladesh University of Professionals.",
    size: "large",
    gallery: [
      {
        src: "/images/achievements/vc-award-01.webp",
        alt: "Vice Chancellor's Award plaque",
      },
      {
        src: "/images/achievements/vc-award-02.webp",
        alt: "Portrait holding the Vice Chancellor's Award plaque",
      },
    ],
  },
  {
    title: "Dean's Appreciation",
    issuer: "Bangladesh University of Professionals",
    value: "2×",
    year: "2023",
    copy: "Recognition for outstanding academic performance in consecutive semesters.",
    size: "large",
    gallery: [
      {
        src: "/images/achievements/deans-appreciation-01.webp",
        alt: "Dean's Appreciation award ceremony",
      },
      {
        src: "/images/achievements/deans-appreciation-02.webp",
        alt: "Dean's Appreciation award cheque",
      },
    ],
  },
  {
    title: "BUP Scholarship",
    issuer: "Bangladesh University of Professionals",
    value: "4×",
    year: "2021–2023",
    copy: "Scholarship awards based on consistent academic excellence.",
    size: "large",
    gallery: [],
  },
  {
    title: "IEEE COVID-19 Congress",
    issuer: "IEEE",
    value: "1st Runner-up",
    year: "2020",
    copy: "Second position in an international idea contest organized by IEEE.",
    size: "small",
    gallery: [
      {
        src: "/images/achievements/ieee-covid19-runner-up.webp",
        alt: "International COVID19 Congress first runner-up certificate",
      },
    ],
  },
  {
    title: "IEEE BUP Branch Fest 2023",
    issuer: "IEEE Computer Society BUP Student Branch Chapter",
    value: "Organizer Award",
    year: "2023",
    copy: "Recognition for organizing IEEE BUP Branch Fest 2023 while serving as Chairperson of the IEEE Computer Society BUP Student Branch Chapter.",
    size: "small",
    gallery: [
      {
        src: "/images/achievements/organizer-award-01.webp",
        alt: "Holding the IEEE BUP Branch Fest 2023 organizer award",
      },
      {
        src: "/images/achievements/organizer-award-02.webp",
        alt: "IEEE BUP Branch Fest 2023 organizer award plaque",
      },
    ],
  },
  {
    title: "Independence Day Essay Competition",
    issuer: "Adamjee Cantonment College",
    value: "Champion",
    year: "2019",
    copy: "First place in a national-level writing competition held at ACC.",
    size: "wide",
    gallery: [
      {
        src: "/images/achievements/independence-day-champion.webp",
        alt: "Receiving the Independence Day Essay Competition award",
      },
    ],
  },
  {
    title: "MindExperia Idea Contest",
    issuer: "BUP Robotics Club",
    value: "6th Place",
    year: "2020",
    copy: "National ranking in a BUP Robotics Club technology-idea competition.",
    size: "small",
    gallery: [
      {
        src: "/images/achievements/mindexperia-6th-place.webp",
        alt: "MindExperia sixth place certificate",
      },
    ],
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
    researchGateUrl:
      "https://www.researchgate.net/publication/394815037_n_Explainable_Ensemble_Learning_Framework_for_Brain_Tumour_Using_Pretrained_Models_and_XAI_Techniques",
  },
  {
    title:
      "Sentiment Classification in Movie Reviews Through a Comparative Analysis of Machine Learning Models",
    venue: "Journal of FST · Volume 3, Issue 01",
    year: "2025",
    status: "Published",
    area: "Natural Language Processing",
    researchGateUrl:
      "https://www.researchgate.net/publication/394814401_Comparison_of_Machine_Learning_for_Sentiment_Analysis_in_Movie_Reviews",
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
