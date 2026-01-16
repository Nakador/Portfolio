export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  tech?: string[]; // Inferred from description if not explicit, or added manually
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    summary: string;
  };
  experience: Experience[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  education: {
    degree: string;
    school: string;
  }[];
  languages: string[];
  interests: string[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Montassar Daimi",
    title: "Senior Frontend Engineer",
    location: "Barcelona, Spain",
    phone: "+34 676 37 53 43",
    email: "montta27@gmail.com",
    linkedin: "https://www.linkedin.com/in/montassar-daimi",
    summary: "Senior Frontend Engineer with 6+ years of experience specialized in building and scaling complex web applications within the React ecosystem. Proven expertise in executing legacy-to-Micro-frontend migrations, developing and maintaining Design Systems, and implementing robust testing strategies to ensure high-quality, maintainable codebases."
  },
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "EcoVadis",
      location: "Barcelona, Spain",
      period: "2023 – Present",
      achievements: [
        "User Management Ownership: Led the development, maintenance, and feature expansion of the User Management micro-app, ensuring secure and scalable access control.",
        "Micro-Frontend Architecture: Actively contributed to a large-scale architectural shift by developing and integrating independent micro-apps within a new Micro-frontend framework.",
        "Internal Tool Development: Designed and built a dedicated Internal Tool micro-app to visualize the product ecosystem and automate configuration generation, significantly improving developer experience (DX) and reducing manual setup time.",
        "UX Optimization: Collaborated with product owners to enhance the UX of the Organization micro-app, streamlining workflows and improving interface intuitiveness.",
        "Quality Assurance: Enhanced micro-app stability by implementing comprehensive testing suites to reach 80% test coverage.",
        "Mentorship: Mentored and onboarded new junior engineers."
      ],
      tech: ["React", "Jest", "React Testing Library", "Cypress", "RTK Query"]
    },
    {
      role: "Mid-Level Frontend Engineer",
      company: "EcoVadis",
      location: "Tunis, Tunisia",
      period: "2021 – 2023",
      achievements: [
        "Refactoring & Modernization: Spearheaded refactoring initiatives to transform aging codebases into more maintainable, modular systems, significantly improving maintainability and reducing technical debt.",
        "Design System: Co-engineered a centralized Design System using Storybook and Material UI, standardizing UI components across multiple product teams to ensure visual consistency.",
        "Complex State Management: Managed and optimized monetization and billing modules handling complex state."
      ],
      tech: ["React", "Redux Observable", "Material UI", "Storybook"]
    },
    {
      role: "Mid-Level Frontend Engineer",
      company: "Cargo Cloud",
      location: "Tunis, Tunisia",
      period: "2020 – 2021",
      achievements: [
        "Migration Strategy: Migrated legacy application to React 16 and TypeScript.",
        "Design Standards: Established the foundation of a design system, creating brand-aligned components that standardized the interface and accelerated development cycles for the team."
      ],
      tech: ["React", "Ant Design", "Redux Saga", "TypeScript", "Storybook"]
    },
    {
      role: "Frontend Engineer",
      company: "Cargo Cloud",
      location: "Tunis, Tunisia",
      period: "2019 – 2020",
      achievements: [
        "Feature Development: Developed and maintained Maritime Shipments and Air Cargo workflows, tracking accurate data visualization and handling.",
        "Collaboration: Collaborated with Backend, QA, and Product teams to integrate broker logistics and ensure high-quality releases."
      ],
      tech: ["React", "Scss", "Redux Saga", "JavaScript"]
    }
  ],
  skills: [
    {
      category: "Frameworks & Libraries",
      items: ["ReactJS", "NextJS", "Node.js", "Redux (Saga, Observable)", "RTK Query", "Material UI", "Ant Design", "Framer Motion", "Tailwind CSS"]
    },
    {
      category: "Testing",
      items: ["Jest", "Cypress", "React Testing Library"]
    },
    {
      category: "Programming Languages",
      items: ["TypeScript", "JavaScript (ES6+)", "Scss"]
    },
    {
      category: "Tools & Services",
      items: ["Git", "Firebase", "Storybook", "Figma", "Cursor", "Copilot", "Antigravity"]
    }
  ],
  projects: [
    {
      name: "Bitcall",
      description: "Refactored a frontend app of a Self-Managed Telecom Dashboard designed to optimize and scale operations using Next.js, TypeScript, and Material UI.",
      tech: ["Next.js", "TypeScript", "Material UI"]
    },
    {
      name: "SolFennex NFT",
      description: "Created a high-performance NFT landing page featuring fluid animations using Framer Motion, Next.js, TypeScript, and Tailwind CSS.",
      tech: ["Framer Motion", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "Hash0x",
      description: "Recreated high-fidelity Figma designs into functional boards using Tailwind and React.",
      tech: ["Tailwind", "React"]
    }
  ],
  education: [
    {
      degree: "Computer Science Engineering",
      school: "Holberton School"
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      school: "Higher Institute Of Computer Science Ariana"
    }
  ],
  languages: ["English", "French", "Arabic"],
  interests: ["Music", "Camping", "Traveling"]
};
