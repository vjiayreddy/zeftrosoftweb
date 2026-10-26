import { mediaImage } from "@/lib/media";
import type { ClientLogo } from "./types";

/** Illustrative placeholder logos until real client marks are supplied. */
export const clients: ClientLogo[] = [
  {
    id: "northline",
    name: "Northline",
    logo: mediaImage(
      "/media/clients/northline.svg",
      "Northline logo",
      180,
      48,
    ),
  },
  {
    id: "apex-systems",
    name: "Apex Systems",
    logo: mediaImage(
      "/media/clients/apex-systems.svg",
      "Apex Systems logo",
      180,
      48,
    ),
  },
  {
    id: "harbor-labs",
    name: "Harbor Labs",
    logo: mediaImage(
      "/media/clients/harbor-labs.svg",
      "Harbor Labs logo",
      180,
      48,
    ),
  },
  {
    id: "kinetic-ops",
    name: "Kinetic Ops",
    logo: mediaImage(
      "/media/clients/kinetic-ops.svg",
      "Kinetic Ops logo",
      180,
      48,
    ),
  },
  {
    id: "vertex-field",
    name: "Vertex Field",
    logo: mediaImage(
      "/media/clients/vertex-field.svg",
      "Vertex Field logo",
      180,
      48,
    ),
  },
  {
    id: "lumen-grid",
    name: "Lumen Grid",
    logo: mediaImage(
      "/media/clients/lumen-grid.svg",
      "Lumen Grid logo",
      180,
      48,
    ),
  },
];
