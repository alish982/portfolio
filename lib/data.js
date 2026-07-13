export const profile = {
  name: "Alish Acharya",
  role: "Frontend Developer",
  tagline:
    "I build fast, accessible interfaces with a quiet sense of craft — for teams who care how the details feel.",
  location: "Remote · Available worldwide",
  email: "alishacharya1217@gmail.com",
  github: "https://github.com/alish982",
  linkedin: "https://linkedin.com/in/alish982",
  yearsExperience: 3,
};

export const navLinks = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Work", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

export const marqueeWords = [
  "React",
  "TypeScript",
  "Next.js",
  "Design Systems",
  "Accessibility",
  "Performance",
  "Motion",
  "Tailwind CSS",
  "Rest/GraphQL",
  "Testing",
];

export const strengths = [
  {
    title: "Interface Engineering",
    body: "Turning dense product requirements into interfaces that feel obvious in hindsight.",
  },
  {
    title: "Performance Discipline",
    body: "Treating load time and responsiveness as features, not afterthoughts.",
  },
  {
    title: "Design Collaboration",
    body: "Working shoulder-to-shoulder with design, not just implementing hand-offs.",
  },
  {
    title: "Systems Thinking",
    body: "Building component libraries teams actually keep using two years later.",
  },
];

export const skillGroups = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 / CSS3",
    ],
  },
  // {
  //   category: "Backend",
  //   items: ["Node.js", "Express", "REST APIs", "GraphQL", "tRPC"],
  // },
  {
    category: "State Management",
    items: ["Redux Toolkit", "Zustand", "React Query", "Context API"],
  },
  {
    category: "Databases",
    items: ["mySQL", "MongoDB", "SQL"],
  },
  {
    category: "Cloud & Deployment",
    items: ["Vercel", "AWS", "CI/CD"],
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "Playwright", "Cypress"],
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "Storybook", "Webpack / Vite"],
  },
];

export const projectCategories = [
  "All",
  "Web App",
  "E-Commerce",
  "Design System",
  "Marketing Site",
];

export const projects = [
  {
    id: "p1",
    title: "Nitv CRM",
    category: "Web App",
    description:
      "A CRM dashboard rebuilt from a legacy jQuery application into a fast, modern React-based platform for customer and business management.",
    stack: ["Next.js", "JSX", "MySQL", "Tailwind CSS"],
    live: "https://app.nitvtelecom.com",
    github: "https://github.com/nitv",
    images: [
      "/images/crm/crm1.png",
      "/images/crm/crm2.png",
      "/images/crm/crm3.png",
      "/images/crm/crm4.png",
    ],
    accent: "from-[#6b7a5e] to-[#3f4a35]",
  },
  {
    id: "p2",
    title: "Nitv Telecom",
    category: "Web App",
    description:
      "A mobile web dashboard for Nitv Telecom users, providing real-time account management, recharge, and SIM-related services.",
    stack: ["Next.js", "JSX", "MySQL", "Tailwind CSS"],
    live: "https://nitvtelecom.com",
    github: "https://github.com/nitvtelecom",
    images: [
      "/images/nitvtelecom/tel1.png",
      "/images/nitvtelecom/tel2.png",
      "/images/nitvtelecom/tel3.png",
      "/images/nitvtelecom/tel4.png",
      "/images/nitvtelecom/tel5.png",
    ],
    accent: "from-[#6b7a5e] to-[#3f4a35]",
  },
  {
    id: "p3",
    title: "World TVGO",
    category: "Streaming Platform",
    description:
      "A streaming platform offering movies and live TV with a modern Next.js frontend and scalable backend architecture.",
    stack: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS", "AngularJS"],
    live: "https://worldtvgo.com",
    github: "https://github.com/worldtvgo",
    images: [
      "/images/worldtv/wtv1.png",
      "/images/worldtv/wtv2.png",
      "/images/worldtv/wtv3.png",
      "/images/worldtv/wtv4.png",
    ],
    accent: "from-[#6b7a5e] to-[#3f4a35]",
  },
  {
    id: "p4",
    title: "ARRIVAL",
    category: "Web App",
    description: "The official platform international products.",
    stack: ["React.js", "CSS", "Next.js", "zustard", "Tailwindcss"],
    live: "https://arrivals-3ktd.vercel.app/",
    images: [
      "/images/musicnepal/mn1.png",
      "/images/musicnepal/mn2.png",
      "/images/musicnepal/mn3.png",
      "/images/musicnepal/mn4.png",
    ],
    accent: "from-[#6b7a5e] to-[#3f4a35]",
  },
  {
    id: "p5",
    title: "Story World",
    category: "Web App",
    description:
      "A modern storytelling platform built with server-side rendering for fast performance, SEO, and an engaging reading experience.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SSR"],
    live: "https://storyworld.us/",
    github: "https://github.com/storyworld",
    images: [
      "/images/crm/crm1.png",
      "/images/crm/crm2.png",
      "/images/crm/crm3.png",
      "/images/crm/crm4.png",
    ],
    accent: "from-[#6b7a5e] to-[#3f4a35]",
  },
  {
    id: "p5",
    title: "Khel Chautari",
    category: "Web App",
    description:
      "A modern storytelling platform built with server-side rendering for fast performance, SEO, and an engaging reading experience.",
    stack: ["Wordpress"],
    live: "https://khelchautari.com/.us/",
    github: "https://github.com/storyworld",
    images: [
      "/images/kehl/khel2.png",
      "/images/kehl/khel3.png",
      "/images/kehl/khel4.png",
      "/images/kehl/khel5.png",
    ],
    accent: "from-[#6b7a5e] to-[#3f4a35]",
  },
];

export const experience = [
  {
    role: "Mid Frontend Engineer",
    company: "Nitv Nepal",
    duration: "2025 — Present",
    points: [
      "Lead frontend architecture for a B2B analytics platform used by 40,000+ daily users.",
      "Cut initial load time by 52% through code-splitting, image optimization, and edge caching.",
      "Mentored a team of four engineers and introduced a shared component system.",
    ],
  },
  {
    role: "Mid Frontend Engineer",
    company: "ARRIVAL",
    duration: "2023 — Present",
    points: [
      "Lead frontend architecture for a B2C analytics platform for international products",
      "Cut initial load time through code-splitting, image optimization, and edge caching.",
      "Mentored a team of four developers and introduced a shared component system.",
    ],
  },
  {
    role: "Junior Frontend Engineer",
    company: "Nitv Nepal",
    duration: "2021 — 2024",
    points: [
      "Built and maintained the Northwind UI design system, adopted across four product teams.",
      "Partnered directly with design to prototype and ship features in weekly cycles.",
      "Reduced production bugs by 30% by introducing Playwright end-to-end testing.",
    ],
  },
  {
    role: "Intern Web Developer",
    company: "IT Solutions Nepal",
    duration: "2011 — 2022",
    points: [
      "Delivered marketing sites and e-commerce storefronts for independent retail clients.",
      "Learned the fundamentals of performance budgets and accessible markup.",
    ],
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Alex has the rare ability to make an interface feel effortless. Every handoff came back better than we imagined.",
//     name: "Priya Chandran",
//     role: "Design Director, Halcyon Labs",
//   },
//   {
//     quote:
//       "The most reliable engineer I've worked with. Deadlines were never a question, and the code quality made onboarding trivial.",
//     name: "Marcus Webb",
//     role: "Engineering Manager, Northwind Studio",
//   },
//   {
//     quote:
//       "Our site went from a 40 to a 95 performance score after Alex's rebuild. Customers noticed immediately.",
//     name: "Elena Ferrante",
//     role: "Founder, Atelier Shop",
//   },
//   {
//     quote:
//       "Thoughtful, communicative, and genuinely invested in getting the details right — not just shipping fast.",
//     name: "Tomás Rivera",
//     role: "Product Lead, Fieldnote Collective",
//   },
// ];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Production-grade interfaces built with React and Next.js, engineered for speed and maintainability.",
  },
  {
    title: "Full-Stack Development",
    description:
      "End-to-end feature delivery, from database schema to polished UI, for teams who need one owner across the stack.",
  },
  {
    title: "UI Implementation",
    description:
      "Faithful, pixel-considered translation of Figma designs into responsive, accessible components.",
  },
  {
    title: "Performance Optimization",
    description:
      "Audits and rebuilds focused on load time, Core Web Vitals, and perceived responsiveness.",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing support, dependency upkeep, and incremental improvement for existing products.",
  },
];

export const projectTypes = [
  "New website",
  "Web application",
  "Design system",
  "Performance audit",
  "Ongoing support",
  "Other",
];

// export const budgetRanges = [
//   "Under $5,000",
//   "$5,000 – $15,000",
//   "$15,000 – $40,000",
//   "$40,000+",
//   "Not sure yet",
// ];
