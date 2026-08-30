export type AcademicCourse = {
  code: string;
  title: string;
  session: string;
  credit: number;
  letterGrade: string;
  gradePoint: number;
};

export type AcademicSemester = {
  id: string;
  label: string;
  session: string;
  credits: number;
  sgpa: number;
  courses: AcademicCourse[];
};

export type AcademicRecord = {
  id: string;
  degree: string;
  shortDegree: string;
  university: string;
  faculty: string;
  session: string;
  duration: string;
  medium: string;
  creditsRequired?: number;
  creditsEarned: number;
  cgpa: number;
  maxCgpa: number;
  resultPublished?: string;
  batch?: string;
  sourceLabel?: string;
  examYear: string;
  status: string;
  semesters: AcademicSemester[];
};

export const bscBupRecord: AcademicRecord = {
  id: "bsc-bup",
  degree: "Bachelor of Science in Information and Communication Engineering (BICE)",
  shortDegree: "B.Sc in Information and Communication Engineering",
  university: "Bangladesh University of Professionals",
  faculty: "Faculty of Science and Technology",
  session: "2019–2020",
  duration: "4 Years",
  medium: "English",
  creditsRequired: 160,
  creditsEarned: 160,
  cgpa: 3.89,
  maxCgpa: 4,
  resultPublished: "12 January 2024",
  examYear: "December 2023",
  status: "Degree Awarded",
  semesters: [
    {
      id: "first",
      label: "First Semester",
      session: "Jan – Jun 2020",
      credits: 17,
      sgpa: 3.65,
      courses: [
        { code: "ICE1101", title: "Structured Programming", session: "Jan – Jun 2020", credit: 3, letterGrade: "A", gradePoint: 3.75 },
        { code: "ICE1102", title: "Structured Programming Laboratory", session: "Jan – Jun 2020", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE1103", title: "Electrical Circuits", session: "Jan – Jun 2020", credit: 3, letterGrade: "A", gradePoint: 3.75 },
        { code: "ICE1104", title: "Electrical Circuits Laboratory", session: "Jan – Jun 2020", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE1105", title: "Physics", session: "Jan – Jun 2020", credit: 3, letterGrade: "A-", gradePoint: 3.5 },
        { code: "ICE1107", title: "Mathematics-I (Differential & Integral Calculus)", session: "Jan – Jun 2020", credit: 3, letterGrade: "A-", gradePoint: 3.5 },
        { code: "ICE1109", title: "Functional English and Presentation Skill Development", session: "Jan – Jun 2020", credit: 3, letterGrade: "A-", gradePoint: 3.5 },
      ],
    },
    {
      id: "second",
      label: "Second Semester",
      session: "Jul – Dec 2020",
      credits: 21,
      sgpa: 3.79,
      courses: [
        { code: "ICE1200", title: "Viva Voce", session: "Jul – Dec 2020", credit: 1, letterGrade: "B+", gradePoint: 3.25 },
        { code: "ICE1201", title: "Object Oriented Design and Programming-I", session: "Jul – Dec 2020", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE1202", title: "Object Oriented Design and Programming-I Laboratory", session: "Jul – Dec 2020", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE1203", title: "Electronic Devices and Circuit", session: "Jul – Dec 2020", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE1204", title: "Electronic Devices and Circuit Laboratory", session: "Jul – Dec 2020", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE1205", title: "Statistics & Probability", session: "Jul – Dec 2020", credit: 3, letterGrade: "A-", gradePoint: 3.5 },
        { code: "ICE1207", title: "Mathematics-II (Ordinary and Partial Differential Equations)", session: "Jul – Dec 2020", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE1209", title: "Ethics and ICE Law", session: "Jul – Dec 2020", credit: 3, letterGrade: "B+", gradePoint: 3.25 },
        { code: "ICE1211", title: "Financial and Managerial Accounting", session: "Jul – Dec 2020", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
      ],
    },
    {
      id: "third",
      label: "Third Semester",
      session: "Jan – Jun 2021",
      credits: 21,
      sgpa: 3.8,
      courses: [
        { code: "ICE2101", title: "Object Oriented Design and Programming-II", session: "Jan – Jun 2021", credit: 3, letterGrade: "A-", gradePoint: 3.5 },
        { code: "ICE2102", title: "Object Oriented Design and Programming-II Laboratory", session: "Jan – Jun 2021", credit: 1, letterGrade: "A-", gradePoint: 3.5 },
        { code: "ICE2103", title: "Discrete Mathematics", session: "Jan – Jun 2021", credit: 3, letterGrade: "A-", gradePoint: 3.5 },
        { code: "ICE2105", title: "Mathematics-III (Vector Analysis & Complex Variables)", session: "Jan – Jun 2021", credit: 4, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE2107", title: "Foreign Language (French)", session: "Jan – Jun 2021", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE2109", title: "Economics", session: "Jan – Jun 2021", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE2111", title: "Digital Logic Design", session: "Jan – Jun 2021", credit: 3, letterGrade: "A", gradePoint: 3.75 },
        { code: "ICE2112", title: "Digital Logic Design Laboratory", session: "Jan – Jun 2021", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
      ],
    },
    {
      id: "fourth",
      label: "Fourth Semester",
      session: "Jul – Dec 2021",
      credits: 21.5,
      sgpa: 3.92,
      courses: [
        { code: "ICE2200", title: "Comprehensive Viva Voce", session: "Jul – Dec 2021", credit: 1, letterGrade: "A", gradePoint: 3.75 },
        { code: "ICE2201", title: "Mathematics-IV (Linear Algebra & Fourier Analysis)", session: "Jul – Dec 2021", credit: 4, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE2203", title: "Data Structure", session: "Jul – Dec 2021", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE2204", title: "Data Structure Laboratory", session: "Jul – Dec 2021", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE2205", title: "Database Management Systems", session: "Jul – Dec 2021", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE2206", title: "Database Management Systems Laboratory", session: "Jul – Dec 2021", credit: 1, letterGrade: "A", gradePoint: 3.75 },
        { code: "ICE2207", title: "Communication Theory", session: "Jul – Dec 2021", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE2208", title: "Communication Theory Lab", session: "Jul – Dec 2021", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE2209", title: "Signals and Systems", session: "Jul – Dec 2021", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE2210", title: "Numerical Methods Laboratory", session: "Jul – Dec 2021", credit: 1.5, letterGrade: "B+", gradePoint: 3.25 },
      ],
    },
    {
      id: "fifth",
      label: "Fifth Semester",
      session: "Jan – Jun 2022",
      credits: 19.5,
      sgpa: 3.98,
      courses: [
        { code: "ICE3101", title: "Analysis and Design of Algorithm", session: "Jan – Jun 2022", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3102", title: "Analysis and Design of Algorithm Laboratory", session: "Jan – Jun 2022", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3103", title: "Operating System", session: "Jan – Jun 2022", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3104", title: "Operating System Laboratory", session: "Jan – Jun 2022", credit: 1.5, letterGrade: "A", gradePoint: 3.75 },
        { code: "ICE3105", title: "Digital Communication", session: "Jan – Jun 2022", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3107", title: "Digital Signal Processing", session: "Jan – Jun 2022", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3108", title: "Digital Signal Processing Laboratory", session: "Jan – Jun 2022", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3109", title: "Data Communication & Computer Networks", session: "Jan – Jun 2022", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3110", title: "Data Communication & Computer Networks Laboratory", session: "Jan – Jun 2022", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
      ],
    },
    {
      id: "sixth",
      label: "Sixth Semester",
      session: "Jul – Dec 2022",
      credits: 21,
      sgpa: 3.98,
      courses: [
        { code: "ICE3200", title: "Industrial Attachment", session: "Jul – Dec 2022", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3201", title: "Software & Requirements Engineering", session: "Jul – Dec 2022", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3202", title: "Software & Requirements Engineering Laboratory", session: "Jul – Dec 2022", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3203", title: "Microprocessor and Computer Architecture", session: "Jul – Dec 2022", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3204", title: "Microprocessor and Computer Architecture Laboratory", session: "Jul – Dec 2022", credit: 1.5, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3205", title: "Telecommunication Systems", session: "Jul – Dec 2022", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3206", title: "Telecommunication Systems Laboratory", session: "Jul – Dec 2022", credit: 1.5, letterGrade: "A", gradePoint: 3.75 },
        { code: "ICE3207", title: "Electromagnetic Theory & Antenna", session: "Jul – Dec 2022", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3209", title: "Web Technologies", session: "Jul – Dec 2022", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE3210", title: "Web Technologies Laboratory", session: "Jul – Dec 2022", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
      ],
    },
    {
      id: "seventh",
      label: "Seventh Semester",
      session: "Jan – Jun 2023",
      credits: 18,
      sgpa: 4.0,
      courses: [
        { code: "ICE4101", title: "System Analysis & Design", session: "Jan – Jun 2023", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE4103", title: "Information, Network and Software Security", session: "Jan – Jun 2023", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE4105", title: "Artificial Intelligence", session: "Jan – Jun 2023", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE4106", title: "Artificial Intelligence Laboratory", session: "Jan – Jun 2023", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE4107", title: "Microwave Engineering", session: "Jan – Jun 2023", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE4108", title: "Microwave Engineering Laboratory", session: "Jan – Jun 2023", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE4109", title: "Cellular and Mobile Communication", session: "Jan – Jun 2023", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE4110", title: "Cellular and Mobile Communication Laboratory", session: "Jan – Jun 2023", credit: 1, letterGrade: "A+", gradePoint: 4.0 },
      ],
    },
    {
      id: "eighth",
      label: "Eighth Semester",
      session: "Jul – Dec 2023",
      credits: 21,
      sgpa: 4.0,
      courses: [
        { code: "ICE4000", title: "Project/Thesis", session: "Jul – Dec 2023", credit: 6, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE4205", title: "Software Testing and Maintenance", session: "Jul – Dec 2023", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE4207", title: "Cryptography", session: "Jul – Dec 2023", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE4219", title: "Data Warehousing and Data Mining", session: "Jul – Dec 2023", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE4223", title: "Cloud Computing", session: "Jul – Dec 2023", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "ICE4225", title: "Machine Learning", session: "Jul – Dec 2023", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
      ],
    },
  ],
};

export const mscBupRecord: AcademicRecord = {
  id: "msc-bup",
  degree: "Master of Science in Information and Communication Engineering (MICE)",
  shortDegree: "M.Sc in Information and Communication Engineering",
  university: "Bangladesh University of Professionals",
  faculty: "Faculty of Science and Technology",
  session: "2024–Present",
  batch: "[006] Jan – Jun 2024",
  duration: "Ongoing",
  medium: "English",
  creditsEarned: 18,
  cgpa: 3.79,
  maxCgpa: 4,
  examYear: "2024",
  status: "In Progress",
  sourceLabel: "From current academic record",
  semesters: [
    {
      id: "msc-first",
      label: "First Semester",
      session: "Jan – Jun 2024",
      credits: 12,
      sgpa: 3.94,
      courses: [
        { code: "MICE5101", title: "Intelligent Systems", session: "Jan – Jun 2024", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "MICE5102", title: "Cyber Security", session: "Jan – Jun 2024", credit: 3, letterGrade: "A", gradePoint: 3.75 },
        { code: "MICE5104", title: "Advanced Internet of Things", session: "Jan – Jun 2024", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "MICE5105", title: "Research Methodology", session: "Jan – Jun 2024", credit: 0, letterGrade: "A-", gradePoint: 3.5 },
        { code: "MICE5103", title: "Advanced Digital Signal Processing", session: "Jan – Jun 2024", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
      ],
    },
    {
      id: "msc-second",
      label: "Second Semester",
      session: "Jul – Dec 2024",
      credits: 6,
      sgpa: 3.5,
      courses: [
        { code: "MICE5002", title: "Advanced Machine Learning", session: "Jul – Dec 2024", credit: 3, letterGrade: "A+", gradePoint: 4.0 },
        { code: "MICE5018", title: "Satellite Communication", session: "Jul – Dec 2024", credit: 3, letterGrade: "B", gradePoint: 3.0 },
      ],
    },
  ],
};

export const academicRecords: Record<string, AcademicRecord> = {
  [bscBupRecord.id]: bscBupRecord,
  [mscBupRecord.id]: mscBupRecord,
};
