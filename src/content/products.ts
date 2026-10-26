import type { Product } from "./types";

export const productsPage = {
  eyebrow: "Products",
  title: "Purpose-built platforms. Engineered for scalability.",
  description:
    "In parallel with specialized engineering services, Zeftrosoft builds and maintains production-grade software platforms and developer tooling for enterprise, on-prem, and distributed deployments.",
} as const;

export const products: Product[] = [
  {
    slug: "zeftro-telemetry-core",
    category: "Data & infrastructure",
    title: "Zeftro Telemetry Core",
    summary:
      "High-throughput ingestion, filtering, and stream processing for IoT sensor fabrics, industrial telemetry, and multi-region system metrics.",
    capabilities: [
      "High-volume event ingestion",
      "Real-time filtering and stream processing",
      "Edge connector SDKs",
      "Hybrid and on-prem topologies",
    ],
    deployment: ["Cloud-native", "Hybrid Kubernetes", "Air-gapped on-prem"],
    href: "/products/zeftro-telemetry-core",
  },
  {
    slug: "visionedge-pro",
    category: "Computer vision & AI",
    title: "VisionEdge Pro",
    summary:
      "On-device computer vision and defect classification designed for factory lines and inspection workflows that need local, uninterrupted inference.",
    capabilities: [
      "Edge defect classification",
      "Multi-camera stream handling",
      "Local inference with offline-first design",
      "Operator overlay dashboards",
    ],
    deployment: ["On-premises", "OEM appliance", "Industrial edge"],
    href: "/products/visionedge-pro",
  },
  {
    slug: "omnilicense-enterprise",
    category: "Security & licensing",
    title: "OmniLicense Enterprise",
    summary:
      "Cryptographically secure licensing and feature entitlement for on-premise, air-gapped, and hybrid software products.",
    capabilities: [
      "Offline license validation",
      "Hardware-aware node binding",
      "Feature-tier entitlement gating",
      "SDK support across major languages",
    ],
    deployment: ["Air-gapped", "On-prem cluster", "Hybrid appliance"],
    href: "/products/omnilicense-enterprise",
  },
  {
    slug: "zeftro-connect-gateway",
    category: "Embedded & IoT",
    title: "Zeftro Connect Gateway SDK",
    summary:
      "Industrial middleware for bridging PLC and SCADA fieldbus protocols to modern telemetry endpoints such as MQTT, gRPC, and REST.",
    capabilities: [
      "Modbus, CAN, OPC-UA protocol bridges",
      "Secure MQTT and gRPC egress",
      "Local offline buffering",
      "Signed OTA update workflows",
    ],
    deployment: ["Linux gateways", "Embedded targets", "Factory edge"],
    href: "/products/zeftro-connect-gateway",
  },
];

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}
