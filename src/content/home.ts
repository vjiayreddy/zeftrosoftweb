import { primaryCta, secondaryCta, site } from "./site";
import type { ComparisonSide, StatItem } from "./types";

export const home = {
  hero: {
    eyebrow: "Software · AI · Connected systems",
    title: "Engineering technology for real business problems",
    description:
      "Zeftrosoft builds software, AI systems and connected devices for businesses and organisations.",
    primaryCta,
    secondaryCta,
  },
  about: {
    eyebrow: "About us",
    title:
      "At our core, we believe great technology is more than delivery — it's impact",
    description:
      "We bring software engineering, AI, data, and connected technology together so businesses can build, improve, and scale systems that work in the real world.",
  },
  stats: {
    note: "Our results speak for themselves. Each number represents trust we've built.",
    items: [
      {
        value: "3",
        label: "Connected practices — software, AI & data, devices",
      },
      {
        value: "8+",
        label: "Industry domains we engineer for",
      },
      {
        value: "1",
        label: "Team spanning product, software, AI, and hardware",
      },
    ] satisfies StatItem[],
  },
  practices: {
    eyebrow: "Services",
    title: "We build technology solutions",
    description:
      "Our capabilities span the complete technology lifecycle — design, engineering, intelligence, infrastructure, and quality.",
  },
  process: {
    eyebrow: "Process",
    title: "Combine engineering with delivery discipline",
    description:
      "Every step designed to reduce risk and ship working technology.",
  },
  marquee: ["Practical", "Connected"] as [string, string],
  comparison: {
    eyebrow: "The difference",
    title: "Why teams choose Zeftrosoft",
    left: {
      title: "Typical vendors",
      items: [
        "Siloed software or AI-only delivery",
        "Generic tooling with little domain fit",
        "Limited ownership after launch",
        "Opaque milestones and handoffs",
        "Short-term patches over durable systems",
        "Disconnected hardware and software work",
      ],
    } satisfies ComparisonSide,
    right: {
      title: `${site.name}`,
      emphasized: true,
      items: [
        "Connected software, AI, and device expertise",
        "Practical engineering for real constraints",
        "Transparent, collaborative delivery",
        "Auditable milestones from discovery to launch",
        "Systems built for long-term maintenance",
        "One team accountable for outcomes",
      ],
    } satisfies ComparisonSide,
  },
  industries: {
    eyebrow: "Domains",
    title: "Technology for different working environments",
    description:
      "We adapt engineering practices to the regulatory, throughput, and reliability needs of each industry.",
    href: "/industries",
  },
  products: {
    eyebrow: "Products",
    title: "Technology we build. Products we evolve.",
    description:
      "In addition to engineering solutions for clients, Zeftrosoft develops its own enterprise technology products and foundational platforms.",
    href: "/products",
  },
  work: {
    eyebrow: "Work",
    title: "Real engineering. Practical solutions.",
    description:
      "Many of our projects are for clients who ask us to keep details private. We share what we can: the problem type, the technology and the approach.",
    href: "/work",
  },
  advantage: {
    eyebrow: "Why choose us",
    title: "Help businesses scale with technology",
  },
  faq: {
    eyebrow: "FAQs",
    title: "Before you get started",
  },
  cta: {
    title: "Let's build what you need",
    description:
      "Tell us about your idea or your existing system. We will reply with the next steps.",
    primaryCta,
  },
} as const;
