export const siteConfig = {
  name: "Sayma Saymon Hia",
  initials: "SSH",
  domain: "sayma.dev",
  email: "saymahia@gmail.com",
  linkedin: "https://www.linkedin.com/in/sayma-hia-746979117",
  location: "Dhaka, Bangladesh",
  role: "Senior Software Engineer",
  tagline: "Building AI-powered products.",
  availability: "Open to senior engineering roles, AI product opportunities, and global collaborations",
};

export const stats = [
  { value: "7+", label: "Years of experience" },
  { value: "6", label: "Products shipped" },
  { value: "4", label: "Engineers led" },
  { value: "PTE 77", label: "English proficiency" },
];

export const bio = {
  short:
    "Senior Software Engineer with 7+ years building full-stack products, AI-integrated systems, and national-scale government platforms. My career spans startup studios, a government ministry, and international remote work with US clients.",
  full: `I'm a Senior Software Engineer with 7+ years of experience building full-stack products, AI-integrated systems, and national-scale government platforms. My career spans startup studios, a government ministry, and international remote work with US clients — giving me rare depth across both the commercial and public-sector sides of software engineering.

I co-founded a software studio, led enterprise engineering teams, and shipped production AI features using large language models and agent frameworks. I also spent four years at the Ministry of Women & Children Affairs, Bangladesh, where I built the national helpline system and a government resource portal used nationwide.

Outside of commercial work, I volunteered to build an e-training platform for UN Women's SET for Women initiative — a free platform delivering vocational training to women across all of Bangladesh.`,
};

export const currentRole = {
  title: "Senior Software Engineer",
  company: "Studio Dev Hub · Tulvo.ai",
};

export const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Ahsanullah University of Science and Technology (AUST)",
    detail: "CGPA 3.65",
    year: "Graduated 2017",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Holy Cross College, Dhaka",
    year: "",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Banani Bidyaniketan School & College",
    year: "",
  },
];

export const languages = [
  { name: "English", level: "PTE 77 (Professional)" },
  { name: "Bengali", level: "Native" },
];

export const attributes = [
  {
    title: "Industry depth",
    description: "Experience across startups, government, and international clients gives unusual breadth for a senior engineer.",
  },
  {
    title: "AI expertise",
    description: "Shipped production AI features with LLMs and agent frameworks — not just prototypes.",
  },
  {
    title: "Leadership",
    description: "Built and led a 4-person enterprise team; hired developers and SQA engineers from scratch.",
  },
  {
    title: "Social impact",
    description: "Built platforms used nationwide in Bangladesh, including a UN Women initiative.",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["NestJS", "Node.js", "REST APIs", "PHP"],
  },
  {
    category: "AI & LLMs",
    items: ["OpenAI API", "LLM integration", "AI agent frameworks", "Prompt engineering"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Testing",
    items: ["Jest", "Cypress", "SQA processes", "Scrum Master"],
  },
  {
    category: "Leadership",
    items: ["Team building", "Technical hiring", "Client scoping", "Sprint facilitation"],
  },
];

export const whyHireMe = `From the National Helpline Centre at Bangladesh's Ministry of Women & Children Affairs to production AI agents at Tulvo.ai — my work spans the full spectrum of software engineering. I built for UN Women's SET for Women initiative, led enterprise teams with US clients, and shipped AI features in production. I bring technical depth, cross-sector experience, and the ability to lead teams and scope projects independently.`;

export type ExperienceItem = {
  title: string;
  company: string;
  companyUrl?: string;
  dateRange: string;
  location: string;
  focusArea?: string;
  bullets: string[];
  isCurrent?: boolean;
  isBreak?: boolean;
  accentColor: "teal" | "blue" | "gray";
};

export const experience: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Studio Dev Hub",
    companyUrl: "https://www.tulvo.ai",
    dateRange: "June 2026 – Present",
    location: "Dhaka, Bangladesh",
    focusArea: "AI product engineering, enterprise team leadership",
    bullets: [
      "Managing 4-person Enterprise Developer Team",
      "Leading feature development for Tulvo.ai — AI workspace covering docs, whiteboards, dashboards, AI reporting, automations, and integrations",
      "LLM integration and AI agent framework implementation",
      "Reporting to Rubel Hasan, Co-Founder & MD",
    ],
    isCurrent: true,
    accentColor: "teal",
  },
  {
    title: "Career Break — Maternity Leave",
    company: "",
    dateRange: "January 2026 – May 2026",
    location: "",
    bullets: [],
    isBreak: true,
    accentColor: "gray",
  },
  {
    title: "Senior Software Engineer / Full Stack Developer",
    company: "Studio Burning Bush",
    dateRange: "March 2023 – December 2025",
    location: "Dhaka, Bangladesh (Remote with US clients)",
    focusArea: "Full-stack delivery, enterprise team, client scoping, technical hiring",
    bullets: [
      "Hired ~5 developers and 2 SQA engineers; built and led Enterprise Team of 4",
      "Led technical scoping with US and international clients",
      "Full-stack development: React, TypeScript, NextJS, NestJS",
      "Key projects: Vendidit (vendidit.com), TextaLyz (AI call analysis)",
      "CEO recognition: $500 award for Gold Standard live-stream auction feature",
    ],
    accentColor: "blue",
  },
  {
    title: "Software Engineer",
    company: "Skribe.ai",
    companyUrl: "https://skribe.ai",
    dateRange: "April 2022 – August 2022",
    location: "Remote · US clients",
    focusArea: "React.js / TypeScript frontend for Zoom-partnered legal-tech platform",
    bullets: [
      "Built React.js / TypeScript frontend for Zoom-partnered legal-tech platform",
      "Served as Scrum Master — stand-ups, sprint planning, retrospectives",
      "Worked directly with US clients · USD 1,500/month",
    ],
    accentColor: "blue",
  },
  {
    title: "Software Developer",
    company: "Studio Dev Hub",
    dateRange: "September 2022 – February 2023",
    location: "Dhaka, Bangladesh",
    focusArea: "Early-stage product planning and system architecture",
    bullets: [
      "Early-stage product planning, system architecture, and development strategy",
    ],
    accentColor: "gray",
  },
  {
    title: "Assistant Programmer",
    company: "Ministry of Women & Children Affairs, Bangladesh",
    dateRange: "September 2018 – January 2022",
    location: "Dhaka, Bangladesh · On-site",
    focusArea: "Government digital systems, national helpline, resource portal",
    bullets: [
      "Built National Resource Portal on Violence Against Women and Children (PHP, MySQL, HTML/CSS)",
      "Managed technical operations for National Helpline Centre (109)",
      "Collaborated with government stakeholders across ministries",
    ],
    accentColor: "gray",
  },
  {
    title: "ReactJS Developer",
    company: "Netizen IT Limited",
    dateRange: "February 2018 – September 2018",
    location: "Dhaka, Bangladesh",
    focusArea: "School management system frontend",
    bullets: ["Built React components for Eduman 5.0 school management system"],
    accentColor: "gray",
  },
  {
    title: "Programmer Analyst & Shareholder",
    company: "Dcastalia Limited",
    companyUrl: "https://dcastalia.com",
    dateRange: "August 2017 – January 2018",
    location: "Dhaka, Bangladesh",
    focusArea: "Technical documentation and software requirements",
    bullets: [
      "Technical documentation and software requirements specification",
      "Became a company shareholder in 2018",
    ],
    accentColor: "gray",
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  noLiveNote?: string;
  accentColor: "teal" | "blue" | "amber" | "purple" | "green" | "navy";
  role?: string;
};

export const projects: Project[] = [
  {
    name: "Tulvo.ai",
    description:
      "AI-powered all-in-one team workspace combining documents, whiteboards, dashboards, AI reporting, automations, and integrations.",
    stack: ["NextJS", "TypeScript", "NestJS", "OpenAI API", "AI agents"],
    liveUrl: "https://www.tulvo.ai",
    accentColor: "teal",
    role: "Lead engineer, enterprise team features",
  },
  {
    name: "TextaLyz",
    description:
      "AI-powered text analysis tool that analyses support calls and chat conversations to identify SWOT indicators and generate priority-based alerts.",
    stack: ["NextJS", "TypeScript", "NestJS", "OpenAI API"],
    accentColor: "blue",
    noLiveNote: "Internal tool — no public link",
  },
  {
    name: "Vendidit",
    description:
      "Online auction platform with live-stream auction feature, enterprise admin panel, and payment integration. Led enterprise team; received CEO recognition for Gold Standard client delivery.",
    stack: ["ReactJS", "TypeScript", "NestJS", "NextJS"],
    liveUrl: "https://vendidit.com",
    accentColor: "amber",
  },
  {
    name: "Skribe.ai",
    description:
      "Legal-tech platform built in partnership with Zoom for US clients. Frontend architecture, admin panel, web portal.",
    stack: ["Next.js", "React", "TypeScript"],
    liveUrl: "https://skribe.ai",
    accentColor: "purple",
  },
  {
    name: "SET for Women",
    description:
      "National e-training platform delivering free vocational training across 20 trade categories to women throughout Bangladesh. Built for UN Women initiative.",
    stack: ["Web platform", "Streamyard integration"],
    liveUrl: "https://set2020.com.bd",
    accentColor: "green",
  },
  {
    name: "National Resource Portal",
    description:
      "Government of Bangladesh national resource portal on Violence Against Women and Children. Publicly deployed, used by national policymakers.",
    stack: ["PHP", "MySQL", "HTML/CSS"],
    accentColor: "navy",
    noLiveNote: "Government project — no public link",
  },
];

export const blogPosts = [
  {
    slug: "what-7-years-taught-me",
    title: "What 7 years of software engineering actually taught me",
    excerpt:
      "Nobody tells you that half the job is communication, not code. Here's what I wish I'd known in year one.",
    date: "2025-05-15",
    category: "Career",
    readTime: "6 min",
    published: true,
  },
  {
    slug: "building-ai-features-in-production",
    title: "Building AI features in production: what the tutorials don't tell you",
    excerpt:
      "Integrating LLMs into a real product is very different from the OpenAI quickstart. Here's what actually broke.",
    date: "2025-04-28",
    category: "AI & LLMs",
    readTime: "8 min",
    published: true,
  },
  {
    slug: "government-to-ai-startups",
    title: "From government systems to AI startups — why I stayed in software",
    excerpt:
      "I've built systems for the Bangladesh government and US legal-tech startups. The problems are completely different; the satisfaction is the same.",
    date: "2025-04-10",
    category: "Personal",
    readTime: "5 min",
    published: true,
  },
  {
    slug: "leading-first-engineering-team",
    title: "How I led my first engineering team without a playbook",
    excerpt:
      "When you become a team lead, nobody hands you a manual. I built mine through mistakes, feedback, and a lot of sprint retrospectives.",
    date: "2025-03-22",
    category: "Engineering",
    readTime: "7 min",
    published: true,
  },
  {
    slug: "women-in-tech-bangladesh",
    title: "Women in tech in Bangladesh: where we are and where we need to go",
    excerpt:
      "After working with UN Women's SET for Women programme, I have a different perspective on what 'support for women in tech' actually means.",
    date: "2025-03-05",
    category: "Women in Tech",
    readTime: "6 min",
    published: true,
  },
  {
    slug: "react-in-2025",
    title: "React in 2025: what's actually worth learning",
    excerpt:
      "Server components, the App Router, Zustand vs Redux — here's my honest take after using all of them in production.",
    date: "2025-02-18",
    category: "Engineering",
    readTime: "9 min",
    published: true,
  },
];

export const categoryColors: Record<string, string> = {
  Engineering: "bg-teal-100 text-teal-800",
  "AI & LLMs": "bg-blue-100 text-blue-800",
  Career: "bg-amber-100 text-amber-800",
  "Women in Tech": "bg-green-100 text-green-800",
  Personal: "bg-purple-100 text-purple-800",
};

export const categoryColorsDark: Record<string, string> = {
  Engineering: "bg-teal-500/20 text-teal-300",
  "AI & LLMs": "bg-blue-500/20 text-blue-300",
  Career: "bg-amber-500/20 text-amber-300",
  "Women in Tech": "bg-green-500/20 text-green-300",
  Personal: "bg-purple-500/20 text-purple-300",
};
