import { pillarIcon } from "@/lib/media";
import type { Pillar } from "./types";

export const servicesPage = {
  eyebrow: "Services",
  title: "Integrated engineering across software, intelligence, and connected hardware.",
  description:
    "Zeftrosoft engineers technology across three foundational disciplines. By combining software development, artificial intelligence, and physical device integration under one roof, we reduce vendor fragmentation and build systems that work cohesively.",
} as const;

export const pillars: Pillar[] = [
  {
    id: "software",
    number: "01",
    label: "Build",
    title: "Software & Product Engineering",
    summary:
      "Web apps, mobile apps and custom software built for your needs — resilient digital foundations designed for real operational load.",
    href: "/services/software",
    image: pillarIcon("software", "Software and product engineering icon"),
    offerings: [
      "Web Applications",
      "Mobile Applications",
      "Custom Software",
      "APIs and Backend",
      "Digital Product Engineering",
      "Legacy System Modernization",
    ],
  },
  {
    id: "ai-data",
    number: "02",
    label: "Intelligence",
    title: "AI, Data & Automation",
    summary:
      "Systems that read data, find patterns and automate work — from edge computer vision to structured document pipelines.",
    href: "/services/ai-data",
    image: pillarIcon("ai-data", "AI, data and automation icon"),
    offerings: [
      "AI and Machine Learning",
      "Computer Vision",
      "OCR & Document Processing",
      "Data Analytics",
      "Workflow Automation",
      "Enterprise Data Platforms",
    ],
  },
  {
    id: "connected",
    number: "03",
    label: "Connect",
    title: "Hardware & Connected Systems",
    summary:
      "Software that works with devices, sensors and cameras — bridging industrial equipment to reliable software and data systems.",
    href: "/services/connected",
    image: pillarIcon("connected", "Hardware and connected systems icon"),
    offerings: [
      "IoT & Industrial Systems",
      "Embedded Systems",
      "Device Integration",
      "Networking & Gateways",
      "Edge Computing Setup",
      "Firmware & OTA Support",
    ],
  },
];

export const pillarDetails: Record<
  Pillar["id"],
  {
    eyebrow: string;
    intro: string;
    focusAreas: { title: string; description: string }[];
  }
> = {
  software: {
    eyebrow: "Foundational discipline 01",
    intro:
      "From custom software and digital products to cloud-native services and client portals, we help organisations turn complex requirements into practical technology solutions.",
    focusAreas: [
      {
        title: "Enterprise web & mobile",
        description:
          "Responsive portals, operator consoles, and native mobile experiences built for clarity and long-term maintenance.",
      },
      {
        title: "APIs & microservices",
        description:
          "Backend services, integrations, and API gateways designed for reliability, observability, and clear ownership boundaries.",
      },
      {
        title: "Legacy modernization",
        description:
          "Incremental modernization of monoliths and aging systems without forcing a risky big-bang rewrite.",
      },
    ],
  },
  "ai-data": {
    eyebrow: "Foundational discipline 02",
    intro:
      "We operationalize machine learning, computer vision, and data pipelines into workflows that teams can trust in production — including privacy-conscious and on-prem options when required.",
    focusAreas: [
      {
        title: "Computer vision",
        description:
          "Inspection, classification, and visual workflows for manufacturing, healthcare, and field operations.",
      },
      {
        title: "Document intelligence",
        description:
          "OCR and structured extraction from complex documents with human-in-the-loop review where accuracy matters.",
      },
      {
        title: "Data platforms",
        description:
          "Analytics pipelines, warehouses, and operational dashboards that turn raw signals into decisions.",
      },
    ],
  },
  connected: {
    eyebrow: "Foundational discipline 03",
    intro:
      "Physical meets digital. We bridge industrial devices, sensors, and cameras to software platforms that stay reliable when networks drop and environments are harsh.",
    focusAreas: [
      {
        title: "Industrial IoT",
        description:
          "Sensor telemetry, protocol bridges, and shop-floor integrations using MQTT, Modbus, OPC-UA, and related standards.",
      },
      {
        title: "Embedded & edge",
        description:
          "Firmware, edge gateways, and local compute that keep critical loops running close to the equipment.",
      },
      {
        title: "Device integration",
        description:
          "Cameras, controllers, and third-party hardware wired into coherent product and operations experiences.",
      },
    ],
  },
};

export function getPillar(id: Pillar["id"]) {
  const pillar = pillars.find((item) => item.id === id);
  if (!pillar) return undefined;
  return { ...pillar, ...pillarDetails[id] };
}
