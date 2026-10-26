import type { CtaLink, FooterColumn, NavLink } from "./types";

export const site = {
  name: "Zeftrosoft",
  legalName: "Zeftrosoft",
  tagline: "Engineering technology for real business problems.",
  description:
    "Zeftrosoft builds software, AI systems and connected devices for businesses and organisations.",
  url: "https://zeftrosoft.com",
} as const;

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: CtaLink = {
  label: "Start a Project",
  href: "/contact",
};

export const secondaryCta: CtaLink = {
  label: "Explore Services",
  href: "/services",
};

export const availabilityBanner =
  "We are available for new engineering engagements";

export const contact = {
  email: "hello@zeftrosoft.com",
  responseNote: "We typically reply within one business day.",
} as const;

export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Software Engineering", href: "/services/software" },
      { label: "AI & Data", href: "/services/ai-data" },
      { label: "Connected Technology", href: "/services/connected" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export const copyright = `© ${new Date().getFullYear()} ${site.legalName}. All rights reserved.`;
