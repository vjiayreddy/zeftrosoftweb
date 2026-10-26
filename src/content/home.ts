import { primaryCta, secondaryCta } from "./site";

export const home = {
  hero: {
    eyebrow: "Enterprise & institutional systems",
    title: "Engineering technology for real business problems.",
    description:
      "Zeftrosoft builds software, AI systems and connected devices for businesses and organisations.",
    primaryCta,
    secondaryCta,
  },
  practices: {
    eyebrow: "What we do",
    title: "Technology built around your business.",
    description:
      "Our capabilities span the complete technology lifecycle, bringing design, engineering, intelligence, infrastructure, and quality together.",
  },
  process: {
    eyebrow: "Process & methodology",
    title: "From requirement to working technology.",
    description:
      "Structured engineering from day zero — clear phases, auditable milestones, and practical delivery.",
  },
  industries: {
    eyebrow: "Domains & environments",
    title: "Technology for different working environments.",
    description:
      "We adapt engineering practices to the regulatory, throughput, and reliability needs of each industry.",
    href: "/industries",
  },
  products: {
    eyebrow: "Proprietary platforms",
    title: "Technology we build. Products we evolve.",
    description:
      "In addition to engineering solutions for clients, Zeftrosoft develops its own enterprise technology products and foundational platforms.",
    href: "/products",
  },
  work: {
    eyebrow: "Portfolio & case summaries",
    title: "Real engineering. Practical solutions.",
    description:
      "Many of our projects are for clients who ask us to keep details private. We share what we can: the problem type, the technology and the approach.",
    href: "/work",
  },
  advantage: {
    eyebrow: "Our advantage",
    title: "Practical engineering. Connected skills.",
  },
  cta: {
    title: "Let's talk about what you need to build.",
    description:
      "Tell us about your idea or your existing system. We will reply with the next steps.",
    primaryCta,
  },
} as const;
