export type RouteKey =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "education"
  | "contact";

export type PageTheme = {
  key: RouteKey;
  label: string;
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  gradient: string;
  panel: string;
  accent: string;
  ambient: string[];
};

export const pageThemes: Record<RouteKey, PageTheme> = {
  home: {
    key: "home",
    label: "Home",
    href: "/",
    eyebrow: "Innovation",
    title: "Innovation systems portfolio shaped by embedded logic and product thinking.",
    description:
      "A code-driven interface focused on IoT systems, VLSI precision, embedded workflows, FPGA implementation, and engineering execution.",
    gradient: "from-[#071018] via-[#0b1418] to-[#16130f]",
    panel: "bg-[rgba(8,14,18,0.82)]",
    accent: "#73d3ff",
    ambient: ["Signal flow", "System blocks", "Innovation stack"],
  },
  about: {
    key: "about",
    label: "About",
    href: "/about",
    eyebrow: "Profile Logic",
    title: "Background translated into engineering temperament and working style.",
    description:
      "This section frames identity through systems thinking, learning habits, multilingual communication, and technical discipline.",
    gradient: "from-[#071018] via-[#111716] to-[#0b1316]",
    panel: "bg-[rgba(8,14,18,0.82)]",
    accent: "#8df0dd",
    ambient: ["Profile logic", "Working style", "Communication range"],
  },
  experience: {
    key: "experience",
    label: "Experience",
    href: "/experience",
    eyebrow: "Execution",
    title: "Experience organized as a progression through execution-heavy roles.",
    description:
      "Current role, internships, and leadership experience are aligned around technical delivery, mentoring, and systems responsibility.",
    gradient: "from-[#081018] via-[#121516] to-[#15110c]",
    panel: "bg-[rgba(8,14,18,0.84)]",
    accent: "#efbb54",
    ambient: ["Current role", "Execution timeline", "Measured outcomes"],
  },
  projects: {
    key: "projects",
    label: "Projects",
    href: "/projects",
    eyebrow: "Systems",
    title: "Projects centered on IoT, VLSI, FPGA, and embedded integration.",
    description:
      "This route behaves like a technical operations surface with structured project modules, signal-driven accents, and measurable outcomes.",
    gradient: "from-[#07111a] via-[#0c1a21] to-[#16140d]",
    panel: "bg-[rgba(7,15,20,0.86)]",
    accent: "#73d3ff",
    ambient: ["Case studies", "Telemetry visuals", "Technical highlights"],
  },
  education: {
    key: "education",
    label: "Education",
    href: "/education",
    eyebrow: "Learning Architecture",
    title: "Education and training framed as the foundation for technical depth.",
    description:
      "Academic grounding, certifications, and workshops are presented as the learning architecture behind current engineering work.",
    gradient: "from-[#081018] via-[#111514] to-[#16120e]",
    panel: "bg-[rgba(8,14,18,0.82)]",
    accent: "#f5d47f",
    ambient: ["Degree", "Certifications", "Technical training"],
  },
  contact: {
    key: "contact",
    label: "Contact",
    href: "/contact",
    eyebrow: "Collaboration",
    title: "A direct contact page aligned with technical collaboration and roles.",
    description:
      "The closing route stays direct and technical, built for collaboration around embedded systems, IoT, VLSI, and hardware-software integration.",
    gradient: "from-[#081018] via-[#0d1518] to-[#14130f]",
    panel: "bg-[rgba(8,14,18,0.84)]",
    accent: "#a6f0dd",
    ambient: ["Availability", "Direct links", "Collaboration"],
  },
};

export const pageOrder = [
  pageThemes.home,
  pageThemes.about,
  pageThemes.experience,
  pageThemes.projects,
  pageThemes.education,
  pageThemes.contact,
];
