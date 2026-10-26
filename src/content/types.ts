export type NavLink = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type PillarId = "software" | "ai-data" | "connected";

export type Pillar = {
  id: PillarId;
  number: string;
  label: string;
  title: string;
  summary: string;
  href: string;
  offerings: string[];
};

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  highlight: string;
  capabilities: string[];
};

export type Product = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  capabilities: string[];
  deployment: string[];
  href: string;
};

export type CaseStudy = {
  slug: string;
  domain: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  stack: string[];
  outcome: string;
  framing: "representative" | "verified";
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type AdvantageItem = {
  title: string;
  description: string;
};
