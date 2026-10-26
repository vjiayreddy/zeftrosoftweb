import { industryCover } from "@/lib/media";
import type { Industry } from "./types";

export const industriesPage = {
  eyebrow: "Industries",
  title: "Technology for different operating environments.",
  description:
    "Engineering practices customized to the regulatory, throughput, and reliability constraints of each industry vertical.",
} as const;

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    summary:
      "Diagnostic imaging support, patient records automation, and secure clinic portals.",
    highlight: "Compliance-ready",
    image: industryCover("healthcare", "Cover art for healthcare industry"),
    capabilities: [
      "Secure clinical portals",
      "Imaging and workflow support",
      "Records automation",
      "Privacy-conscious data handling",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary:
      "Camera inspection on assembly lines, machine monitoring, and sensor networks.",
    highlight: "Shop-floor edge",
    image: industryCover("manufacturing", "Cover art for manufacturing industry"),
    capabilities: [
      "Visual inspection systems",
      "Machine monitoring",
      "Industrial telemetry",
      "Operator dashboards",
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    summary:
      "Consignment tracking, warehouse device integration, and dispatch automation.",
    highlight: "Real-time telematics",
    image: industryCover("logistics", "Cover art for logistics industry"),
    capabilities: [
      "Shipment and asset tracking",
      "Warehouse device integration",
      "Dispatch automation",
      "Ops consoles and alerts",
    ],
  },
  {
    slug: "public-sector",
    title: "Public Sector & Government",
    summary:
      "Citizen service portals, digital workflow management, and sovereign data systems.",
    highlight: "Strict governance",
    image: industryCover("public-sector", "Cover art for public sector industry"),
    capabilities: [
      "Citizen service portals",
      "Workflow routing and permissions",
      "On-prem and sovereign deployments",
      "Audit-friendly architecture",
    ],
  },
  {
    slug: "enterprise-it",
    title: "Enterprise IT",
    summary:
      "Custom business tools, legacy system modernization, and secure internal APIs.",
    highlight: "High reliability",
    image: industryCover("enterprise-it", "Cover art for enterprise IT industry"),
    capabilities: [
      "Internal business applications",
      "Legacy modernization",
      "Secure internal APIs",
      "Integration platforms",
    ],
  },
  {
    slug: "digital-platforms",
    title: "Digital Platforms",
    summary:
      "Scalable web applications, consumer mobile apps, and multi-tenant architectures.",
    highlight: "High concurrency",
    image: industryCover("digital-platforms", "Cover art for digital platforms industry"),
    capabilities: [
      "Multi-tenant SaaS platforms",
      "Consumer and B2B mobile apps",
      "Identity and access flows",
      "Scalable API backends",
    ],
  },
  {
    slug: "fintech-legal",
    title: "Professional & Legal Services",
    summary:
      "Document extraction, confidential OCR engines, and structured search for complex records.",
    highlight: "Auditability",
    image: industryCover("fintech-legal", "Cover art for professional and legal services industry"),
    capabilities: [
      "Document intelligence",
      "Structured extraction workflows",
      "Search and review interfaces",
      "Immutable audit trails",
    ],
  },
  {
    slug: "product-design",
    title: "Product & Design",
    summary:
      "Product strategy, UI/UX, and design systems that keep engineering and experience aligned.",
    highlight: "Product thinking",
    image: industryCover("product-design", "Cover art for product and design industry"),
    capabilities: [
      "Product strategy",
      "System UX / UI design",
      "Information architecture",
      "Design systems",
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}
