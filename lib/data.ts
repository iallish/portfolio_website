// ============================================================
// Portfolio Data
// ============================================================

// ---------- Types ----------

export interface MetricItem {
  value: string;
  label: string;
  description: string;
  iconName: string;
  color: string;
}

export interface Experience {
  role: string;
  organization: string;
  websiteUrl: string;
  location: string;
  period: string;
  badgeColor: string;
  iconName: string;
  description: string;
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  websiteUrl: string;
  location: string;
  period: string;
  status: string;
  statusColor: string;
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  experienceUrl?: string;
  codeNote?: string;
  featured: boolean;
  highlight: string;
  category: string;
}

export interface SkillBar {
  label: string;
  level: string;
  value: number;
  color: string;
}

// ---------- Contact ----------

export const EMAIL = "contact@ianallish.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ian-allish";
export const GITHUB_URL = "https://github.com/iallish";

// ---------- Metrics ----------

export const metricsData: MetricItem[] = [
  {
    value: "60%",
    label: "Turnaround Reduction",
    description: "Optimized diagnostic workflows from 4.0 to 1.6 days",
    iconName: "clock",
    color: "teal",
  },
  {
    value: "3,000+",
    label: "Annual Client Solutions",
    description: "Interpreted hardware & software diagnostic telemetry",
    iconName: "users",
    color: "indigo",
  },
  {
    value: "MSBA + AI",
    label: "Univ. of Tennessee (Haslam)",
    description: "Master of Science in Business Analytics & AI ('27)",
    iconName: "chart",
    color: "tennesseeOrange",
  },
  {
    value: "B.S. Aero",
    label: "Univ. of Tennessee (Tickle)",
    description: "Bachelor of Science in Aerospace Engineering ('21)",
    iconName: "rocket",
    color: "tennesseeOrange",
  },
];

// ---------- Experiences ----------

export const experiences: Experience[] = [
  {
    role: "Graduate Teaching Assistant (STAT 201)",
    organization: "University of Tennessee — Haslam College of Business",
    websiteUrl: "https://haslam.utk.edu/business-analytics-statistics/",
    location: "Knoxville, TN",
    period: "AUG 2026 - Present",
    badgeColor: "tennesseeOrange",
    iconName: "school",
    description:
      "Serving as a Graduate Teaching Assistant for STAT 207 (Honors Introduction to Statistics / Business Analytics) within the Department of Business Analytics and Statistics. Facilitating statistical instruction, mentoring undergraduate students in quantitative problem-solving, and reinforcing core business analytics principles.",
    tags: [
      "STAT 207",
      "Statistical Analysis",
      "Business Analytics",
      "Instruction",
      "Quantitative Modeling",
    ],
  },
  {
    role: "Advanced Repair Agent",
    organization: "Best Buy",
    websiteUrl: "https://connect.bestbuy.com/",
    location: "Knoxville, TN",
    period: "Aug 2021 – June 2026",
    badgeColor: "indigo",
    iconName: "briefcase",
    description:
      "Interpreted diagnostic logs, system performance metrics, and hardware telemetry for 3,000+ clients annually. Performed root-cause analysis on hardware and software failures while maintaining compliance with strict data privacy standards. Reduced average repair ticket turnaround time by 60% (from 4.0 to 1.6 days) by identifying bottlenecks and optimizing diagnostic workflows.",
    tags: [
      "Diagnostic Telemetry",
      "Root-Cause Analysis",
      "Workflow Optimization",
      "Systems Diagnostics",
    ],
  },
  {
    role: "Volunteer TechSmart Instructor",
    organization: "Knoxville-Knox County CAC",
    websiteUrl:
      "https://www.knoxseniors.org/our-services/tech-smart-knox-seniors/",
    location: "Knoxville, TN",
    period: "Aug 2024 – Dec 2025",
    badgeColor: "teal",
    iconName: "users",
    description:
      "Delivered digital literacy and digital security instruction to over 60 adult learners. Taught practical concepts including secure personal data management, multi-factor account authentication, and fraud prevention practices.",
    tags: [
      "Technical Instruction",
      "Data Privacy",
      "Digital Literacy",
      "Community",
    ],
  },
  {
    role: "NanoHELP Research Intern",
    organization: "University of Tennessee Space Institute",
    websiteUrl: "https://nanohelp.utk.edu/",
    location: "Tullahoma, TN",
    period: "June 2018 – Aug 2018",
    badgeColor: "tennesseeOrange",
    iconName: "atom",
    description:
      "Collaborated with a multidisciplinary research team evaluating additive manufacturing constraints using experimental test data. Conducted comparative analysis of flow plate geometries (evaluating pressure drop, current density, and mass transport efficiency) and validated experimental datasets across prototype iterations.",
    tags: [
      "Additive Manufacturing",
      "Fluid Mechanics",
      "Data Analysis",
      "MATLAB",
    ],
  },
];

// ---------- Education ----------

export const education: Education[] = [
  {
    degree:
      "Master of Science in Business Analytics and Artificial Intelligence",
    institution: "University of Tennessee — Haslam College of Business",
    websiteUrl: "https://haslam.utk.edu/",
    location: "Knoxville, TN",
    period: "Expected May 2027",
    status: "In Progress",
    statusColor: "tennesseeOrange",
    description:
      "Rigorous graduate curriculum focused on machine learning, predictive modeling, data pipelines, business intelligence, and quantitative decision systems.",
    tags: [
      "Business Analytics",
      "Artificial Intelligence",
      "Python",
      "SQL",
      "Predictive Modeling",
    ],
  },
  {
    degree: "Bachelor of Science in Aerospace Engineering",
    institution: "University of Tennessee — Tickle College of Engineering",
    websiteUrl: "https://tickle.utk.edu/",
    location: "Knoxville, TN",
    period: "Graduated Dec 2021",
    status: "Completed",
    statusColor: "tennesseeOrange",
    description:
      "Comprehensive engineering foundation in aerodynamics, thermodynamics, numerical simulation methods, SOLIDWORKS CAD modeling, and computational problem solving.",
    tags: [
      "Aerospace Engineering",
      "SOLIDWORKS",
      "MATLAB",
      "Fluid Dynamics",
      "Numerical Methods",
    ],
  },
];

// ---------- Projects ----------

export const projectsData: Project[] = [
  {
    title: "Trevan Seay Portfolio (trevanseay.com)",
    description:
      "Custom portfolio and interactive architecture gallery designed and engineered for an architecture professional. Built with Next.js, TypeScript, and Mantine UI featuring dynamic carousels, responsive grid layouts, and optimized media delivery.",
    tags: ["Next.js", "TypeScript", "Mantine UI", "React", "Cloudinary"],
    liveUrl: "https://trevanseay.com",
    codeNote: "Code available upon request",
    featured: true,
    highlight: "Production Client Website",
    category: "Client / Production",
  },
  {
    title: "Personal Developer & Analytics Portfolio",
    description:
      "High-performance portfolio built with Next.js App Router, Mantine UI v9, and Tailwind CSS. Features seamless dark/light theme switching, custom tokens, and accessible responsive layouts.",
    tags: ["Next.js", "TypeScript", "Mantine UI", "CSS Modules", "React"],
    githubUrl: "https://github.com/iallish/portfolio_website",
    liveUrl: "https://ianallish.com",
    featured: true,
    highlight: "Custom Component Architecture",
    category: "Frontend",
  },
  {
    title: "In-Person Diagnostic & Workflow Optimization",
    description:
      "Evaluated hands-on repair bench operations and in-person diagnostic slowdowns. Identified operational bottlenecks and implemented physical and procedural workflow improvements, reducing total turnaround time by 60% (from 4.0 to 1.6 days) across 3,000+ devices annually.",
    tags: [
      "Workflow Optimization",
      "Bottleneck Elimination",
      "Root-Cause Analysis",
      "Operations Management",
    ],
    experienceUrl: "#experience",
    featured: false,
    highlight: "60% Turnaround Gain",
    category: "Operations / Systems",
  },
];

// ---------- Credentials & Affiliations ----------

export const certifications: string[] = [
  "STAT 207 Graduate Teaching Assistant",
  "Haslam MSBA & AI ('27)",
  "Tickle Aerospace Engineering B.S. ('21)",
  "Tickle College Engineering Mentor (2019–2020)",
  "AIAA Member (2017–2023)",
];

// ---------- Skills ----------

export const analyticsSkills: string[] = [
  "Python (Pandas / Pyomo)",
  "R / R Shiny",
  "SQL",
  "Tableau / Power BI",
  "PyTorch",
  "Predictive Modeling",
  "Statistical Inference",
  "Data Visualization",
  "Advanced Excel",
  "MATLAB",
];

export const analyticsSkillBars: SkillBar[] = [
  {
    label: "Statistical Methods & Machine Learning",
    level: "Advanced",
    value: 95,
    color: "tennesseeOrange",
  },
  {
    label: "Data Engineering & Pipeline Design",
    level: "Proficient",
    value: 88,
    color: "tennesseeOrange",
  },
  {
    label: "Deep Learning (PyTorch) & Neural Networks",
    level: "Developing",
    value: 75,
    color: "tennesseeOrange",
  },
  {
    label: "Decision Optimization (Pyomo / LP)",
    level: "Developing",
    value: 70,
    color: "tennesseeOrange",
  },
];

export const webSkills: string[] = [
  "TypeScript",
  "JavaScript",
  "Next.js (App Router)",
  "React 19",
  "Mantine UI v9",
  "CSS Modules",
  "HTML5 / CSS3",
  "REST APIs",
  "Cloudinary Media",
  "C++",
];

export const aerospaceSkills: string[] = [
  "Aerospace Engineering B.S.",
  "SOLIDWORKS CAD",
  "Computational Simulation",
  "Experimental Dataset Validation",
  "Workflow Optimization",
  "Additive Manufacturing Analysis",
  "Fluid Mechanics & Thermodynamics",
  "AIAA Member (2017-2023)",
];

