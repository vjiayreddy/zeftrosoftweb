import type { AdvantageItem, ProcessStep } from "./types";
import { primaryCta } from "./site";

export const aboutPage = {
  eyebrow: "About us",
  title: "Engineering technology for real-world business challenges.",
  description:
    "Zeftrosoft brings software engineering, AI, data, and connected technology together to help businesses build, improve, and scale their technology systems.",
} as const;

export const advantageItems: AdvantageItem[] = [
  {
    title: "Connected expertise",
    description:
      "Product, software, AI, and hardware engineers working together under one roof.",
  },
  {
    title: "Product thinking",
    description:
      "Focus on clean usability, business value, and software that lasts.",
  },
  {
    title: "Practical engineering",
    description:
      "Sensible technology choices chosen for reliability and easy long-term maintenance.",
  },
  {
    title: "Flexible delivery",
    description:
      "Support for greenfield projects, system modernisation, or dedicated engineering support.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "We study the problem, your users, and system constraints.",
  },
  {
    number: "02",
    title: "Define",
    description: "We specify technical scope, architecture, and milestones.",
  },
  {
    number: "03",
    title: "Design",
    description: "We structure interfaces, data models, and system flows.",
  },
  {
    number: "04",
    title: "Build",
    description: "We develop clean software, AI models, and device logic.",
  },
  {
    number: "05",
    title: "Validate",
    description: "We run functional tests, security checks, and load verification.",
  },
  {
    number: "06",
    title: "Deploy & support",
    description: "We roll out to production and provide ongoing technical care.",
  },
];

export const aboutCta = {
  title: "Have a system to build, modernize, or scale?",
  description:
    "Schedule a technical conversation with our team. We review requirements and propose a clear next step.",
  primaryCta,
};
