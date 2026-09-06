/**
 * ALL EDITABLE CONTENT LIVES HERE.
 * Update text, links and entries below — no component changes needed.
 */

export const SHOW_GUESTBOOK = false;
export const SHOW_PROJECTS = false;
export const SHOW_CASE_STUDIES = false;

export const profile = {
  name: "R Roni Albert Jaron",
  initials: "R",
  role: "Associate Software Engineer",
  roleSince: "2026 — Present",
  headline: "Bridging business processes & generative AI, one SAP implementation at a time.",
  subline:
    "SAP Associate Consultant at EY GDS — focused on enterprise processes, SAP technologies and applied GenAI.",
  statusPill: "Currently: Associate Software Engineer @ EY GDS",
  photo: "/profile.jpg", // drop your photo in the /public folder with this name
  aboutMe:
    "I'm a Computer Science graduate starting my journey in SAP consulting. I'm curious about how businesses actually operate, how enterprise systems support them, and where technology can make a real impact. Still learning, still exploring, and excited for what's ahead.",
  email: "roni7tubebusiness@gmail.com",
  resumeUrl: "/resume.pdf",
  links: {
    linkedin: "https://linkedin.com/in/roniaj",
    github: "https://github.com/roni-2004",
    codolio: "https://codolio.com/profile/roni.aj",
  },
};


export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Skills", href: "#skills" },
  { label: "Timeline", href: "#timeline" },
  ...(SHOW_PROJECTS ? [{ label: "Projects", href: "#projects" }] : []),
  ...(SHOW_CASE_STUDIES ? [{ label: "Case Studies", href: "#case-studies" }] : []),
  { label: "Certifications", href: "#certifications" },
  { label: "Perspectives", href: "#perspectives" },
  { label: "Contact", href: "#contact" },
];

export const toolkit = [
  {
    icon: "Route",
    name: "SAP Activate Methodology",
    description: "Phase-driven delivery from Discover to Run, with fit-to-standard at the core.",
  },
  {
    icon: "Lightbulb",
    name: "Design Thinking",
    description: "Framing process pain from the user's seat before proposing a system change.",
  },
  {
    icon: "Repeat",
    name: "Agile Ceremonies",
    description: "Scrum and Kanban rhythms to keep configuration work visible and shippable.",
  },
  {
    icon: "Map",
    name: "Business Process Mapping",
    description: "Understanding how work moves across modules before translating it into system requirements.",
    placeholder: false,
  },
];

  export const skillCategories = [
  {
    title: "SAP",
    tools: [
      { name: "SAP S/4HANA", icon: "SAP" },
      // { name: "SAP BTP", icon: "SAP" },
      // { name: "ABAP", icon: "SAP" },
      // { name: "SAP MM / SD", icon: "SAP" },
    ],
    practices: [
      { name: "Business Process Learning", icon: "Route" },
      { name: "Problem Solving", icon: "Workflow" },
      { name: "Requirement Gathering", icon: "ClipboardList" },
      { name: "Enterprise Systems", icon: "Building2" },
    ],
  },
  {
    title: "Agile & Process",
    tools: [{ name: "Jira", icon: "Jira" }],
    practices: [
      { name: "Scrum", icon: "Repeat" },
      { name: "Kanban", icon: "Columns3" },
      { name: "Documentation", icon: "FileText" },
      { name: "Collaboration", icon: "Users" },
      { name: "Version Control", icon: "GitFork" },
      { name: "Continuous Learning", icon: "GraduationCap" },
    ],
  },
  {
    title: "GenAI & AI Tools",
    tools: [{ name: "Oracle GenAI", icon: "Oracle" }],
    practices: [
      { name: "Prompt Engineering", icon: "Sparkles" },
      { name: "LLM Workflows", icon: "Bot" },
      { name: "AI Productivity Tools", icon: "Zap" },
      { name: "AI-Assisted Research", icon: "Search" },
    ],
  },
  {
    title: "Programming Fundamentals",
    tools: [
      { name: "JavaScript", icon: "JavaScript" },
      { name: "Python", icon: "Python" },
      { name: "Java", icon: "Java" },
      { name: "C", icon: "C" },
      { name: "Node.js", icon: "Node.js" },
      { name: "Express.js", icon: "Express.js" },
      { name: "React.js", icon: "React.js" },
      { name: "HTML", icon: "HTML" },
      { name: "CSS", icon: "CSS" },
      { name: "MongoDB", icon: "MongoDB" },
      { name: "Tailwind", icon: "Tailwind" },
      { name: "Git", icon: "Git" },
      { name: "VSCode", icon: "Code2" },
      { name: "Postman", icon: "Postman" },
      { name: "NPM", icon: "NPM" },
    ],
    practices: [{ name: "REST APIs", icon: "Network" }],
  },
];


export const translations: { term: string; meaning: string }[] = [
  { term: "RICEFW", meaning: "The list of custom things we promised not to build, and built anyway." },
  { term: "IDoc", meaning: "A structured envelope two systems mail to each other instead of talking." },
  { term: "ABAP", meaning: "The language behind the button finance insists must exist." },
  { term: "Fit-to-Standard", meaning: "Politely asking the business to change instead of the software." },
  { term: "Go-Live", meaning: "The day the project stops being a slide deck and starts being reality." },
  { term: "Master Data", meaning: "The single source of truth everyone maintains slightly differently." },
  { term: "Cutover", meaning: "A very expensive weekend with a very detailed checklist." },
  { term: "Joule", meaning: "Asking your ERP a question in English and actually getting an answer." },
];

export const perspectivesPOV = [
  {
    title: "Exploring where AI fits into business and technology.",
    body: "As I begin my journey in enterprise applications, I'm interested in how AI can improve the way businesses work, make decisions, and interact with data.",
  },
  {
    title: "The Future of Enterprise Applications",
    body: "Modern enterprise systems are evolving beyond traditional workflows. I'm excited to learn how cloud platforms, automation, and AI are shaping the next generation of business software.",
  },
  {
    title: "Building Business Understanding",
    body: "Beyond technology, I'm focused on developing a stronger understanding of business operations, stakeholder needs, and the challenges organizations face as they grow.",
  },
];
export const timeline = [
  {
    date: "09/09/2026 — Present",
    title: "Associate Software Engineer (SAP Consulting)",
    company: "EY Global Delivery Services",
    description:
      "Beginning my career in SAP consulting with a focus on enterprise business processes, technology-driven transformation, and continuous learning within large-scale business environments.",
    current: true,
    image: "/ey.jpg", // optional — leave blank or remove if no photo yet
  },
  {
    date: "2022 — 2026",
    title: "B.Tech, Computer Science and Engineering",
    company: "SRM Institute of Science and Technology",
    description:
      "Graduated with First Class with Distinction, with a focus on programming fundamentals, software engineering, databases, and analytical problem-solving.",
    image: "/srmrmp.jpg", // optional
  },
  // {
  //   date: "2025",
  //   title: "Oracle Certifications",
  //   company: "Self-driven",
  //   description: "Placeholder — cloud and database foundations, earned alongside coursework.",
  //   // no image field — this card just won't show a photo
  // },
];



export const projects = [
  { title: "Case study coming soon", note: "SAP process improvement write-up in progress." },
  { title: "In progress", note: "GenAI assistant experiment for requirement summarisation." },
  { title: "Coming soon", note: "Small internal automation, documented end to end." },
];

export const caseStudies = [
  {
    label: "LinkedIn Data Breach 2021 Analysis - EY Bootcamp",
    situation: "Our team was assigned to analyze the LinkedIn data breach and its impact on users and organizations.",
    task: "Evaluate the incident, identify key risks, and present findings and recommendations.",
    action: "Researched the breach, collaborated with team members, analyzed business implications, and prepared the final presentation.",
    result: "Successfully delivered the case study presentation while strengthening analytical, presentation, and teamwork skills.",
  },
  {
    label: "Template — details to be added",
    situation: "",
    task: "",
    action: "",
    result: "",
  },
];

export const certsEarned = [
  { name: "Oracle Cloud Infrastructure Certified AI Foundations Associate", issuer: "Oracle", date: "October 31, 2025", credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=44DA4187269BA1C89188431CF25FFD6F3BE064A03D0477A12D0D4CA80EF6C307" },
  { name: "Oracle Cloud Infrastructure Certified Generative AI Professional", issuer: "Oracle", date: "October 29, 2025", credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3EF1B28A05BD262E82929C67405EBB0660C57D2D490A714009EC67A806D9280C" },
  { name: "ServiceNow IT Leadership Professional Certificate", issuer: "ServiceNow with LinkedIn", date: "December 23, 2025", credentialUrl: "www.linkedin.com/learning/certificates/687f8040c3e96cb595d72cec401f1fdd8530209af983aebf18350eabbb38ff52" },
];

export const certsPlanned = [
  { name: "Coming Soon", issuer: "SAP", date: "Target: 2026" },
  { name: "Coming Soon", issuer: "SAP", date: "Target: 2026" },
  { name: "Coming Soon", issuer: "SAP", date: "Target: 2027" },
];

export const emergingPerspectives = [
  {
    title: "Growth Comes From Curiosity",
    body: "Some of the best learning happens by asking questions, exploring unfamiliar topics, and understanding how different parts of a business connect together.",
  },
  {
    title: "Technology Should Serve the Business",
    body: "The most effective solutions aren't always the most complex ones. Understanding the business problem is often more important than understanding the technology itself.",
  },
  {
    title: 'Learning the "Why" Behind the Process',
    body: "Tools and systems can be learned over time, but understanding why a business operates a certain way creates a stronger foundation for solving problems.",
  },
];

export const quote = {
  text: "Fall seven times, stand up eight.",
  attribution: "- Japanese Proverb, 七転び八起き", // optional — e.g. "— something you tell yourself" or leave blank
};

export const testimonials: { name: string; role: string; quote: string }[] = [];

