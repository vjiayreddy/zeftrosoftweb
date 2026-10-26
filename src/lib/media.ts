export type MediaImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const brand = {
  logo: "/brand/logo.svg",
  wordmark: "/brand/logo-wordmark.svg",
  wordmarkOnDark: "/brand/logo-on-dark.svg",
} as const;

/** Served by `src/app/opengraph-image.tsx` (Next.js Metadata file convention). */
export const ogDefault = {
  src: "/opengraph-image",
  alt: "Zeftrosoft — Engineering technology for real business problems.",
  width: 1200,
  height: 630,
} as const;

export function mediaImage(
  src: string,
  alt: string,
  width: number,
  height: number,
): MediaImage {
  return { src, alt, width, height };
}

export function workCover(slug: string, alt: string): MediaImage {
  return mediaImage(`/media/work/${slug}.svg`, alt, 960, 540);
}

export function productCover(slug: string, alt: string): MediaImage {
  return mediaImage(`/media/products/${slug}.svg`, alt, 960, 540);
}

export function industryCover(slug: string, alt: string): MediaImage {
  return mediaImage(`/media/industries/${slug}.svg`, alt, 640, 400);
}

export function pillarIcon(id: string, alt: string): MediaImage {
  return mediaImage(`/media/pillars/${id}.svg`, alt, 48, 48);
}

export const homeHeroImage: MediaImage = mediaImage(
  "/media/hero/home.svg",
  "Abstract illustration of connected enterprise software panels and systems.",
  960,
  720,
);
