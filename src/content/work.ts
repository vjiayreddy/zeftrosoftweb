import type { CaseStudy } from "./types";

export const workPage = {
  eyebrow: "Our work",
  title: "Engineering case studies & deployed systems.",
  description:
    "Explore technical implementations across computer vision, software platforms, licensing, and connected systems. Client identities are anonymized where required while preserving problem type, approach, and outcomes.",
} as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "document-processing-ocr",
    domain: "AI & Data",
    title: "Document processing with OCR",
    summary:
      "Automating structured data extraction from irregular scanned records.",
    challenge:
      "Operators spent hours manually keying data from inconsistent scanned forms and multi-page packets.",
    approach:
      "Built a document pipeline with OCR, validation rules, and a review interface for exceptions before downstream systems receive clean structured data.",
    stack: ["Python", "Tesseract/OCR", "FastAPI", "Redis"],
    outcome:
      "Reduced manual entry effort and improved consistency of structured records handed to business systems.",
    framing: "representative",
  },
  {
    slug: "government-workflow-portal",
    domain: "Software Engineering",
    title: "Government workflow portal",
    summary:
      "Multi-department application routing with strict role permissions.",
    challenge:
      "Paper and email-based routing across departments created delays, unclear ownership, and weak audit trails.",
    approach:
      "Delivered a role-aware web portal with workflow routing, permissions, and operational dashboards suitable for governed environments.",
    stack: ["Go", "PostgreSQL", "React", "Docker"],
    outcome:
      "Clearer handoffs between departments and a durable record of application status and decisions.",
    framing: "representative",
  },
  {
    slug: "device-camera-integration",
    domain: "Connected Systems",
    title: "Device and camera integration",
    summary:
      "Edge camera trigger and low-latency defect notification over a local network.",
    challenge:
      "Inspection events needed to reach operators quickly without depending on an unreliable external network path.",
    approach:
      "Integrated cameras and edge software so triggers and notifications stay on the local network with clear operator feedback.",
    stack: ["C++", "Embedded Linux", "MQTT", "RTSP"],
    outcome:
      "Faster local defect alerts and a more reliable shop-floor feedback loop.",
    framing: "representative",
  },
  {
    slug: "visual-inspection-line",
    domain: "AI & Computer Vision",
    title: "Assembly-line visual inspection",
    summary:
      "Edge vision support for defect detection on high-speed manufacturing lines.",
    challenge:
      "Manual inspection could not keep pace with line speed, and false stops were costly.",
    approach:
      "Deployed camera-based classification at the edge with operator review tooling and local actuation hooks where needed.",
    stack: ["Python", "OpenCV", "TensorRT", "MQTT"],
    outcome:
      "More consistent inspection coverage with operator-visible results on the floor.",
    framing: "representative",
  },
  {
    slug: "cold-chain-telemetry",
    domain: "Hardware & IoT",
    title: "Cold-chain telemetry network",
    summary:
      "Low-power tracking of temperature integrity across logistics consignments.",
    challenge:
      "Shipments lost visibility when devices drained batteries or lost connectivity for long stretches.",
    approach:
      "Designed firmware and cloud ingestion with store-and-forward buffering, alerts, and an operations console for exceptions.",
    stack: ["Embedded C", "FreeRTOS", "AWS IoT", "TimescaleDB", "React"],
    outcome:
      "Better visibility into thermal exceptions and longer usable device life in transit.",
    framing: "representative",
  },
  {
    slug: "license-entitlement-gateway",
    domain: "License Security",
    title: "Enterprise license entitlement gateway",
    summary:
      "Offline-capable licensing for products deployed in restricted customer environments.",
    challenge:
      "Software running on customer infrastructure needed strong entitlement controls without constant phone-home access.",
    approach:
      "Implemented signed offline licenses, node binding, and feature gating with SDKs for product teams.",
    stack: ["Rust", "Go", "PostgreSQL", "gRPC"],
    outcome:
      "Stronger control over feature access while supporting air-gapped and on-prem customer deployments.",
    framing: "representative",
  },
];

export const workDomains = [
  "All",
  ...Array.from(new Set(caseStudies.map((item) => item.domain))),
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
