import { site } from "@/content";
import { ogDefault } from "@/lib/media";
import type { Metadata } from "next";

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: { src: string; alt?: string; width?: number; height?: number };
}): Metadata {
  const url = path ? new URL(path, site.url).toString() : undefined;
  const ogImage = image ?? ogDefault;
  const absoluteImage = new URL(ogImage.src, site.url).toString();

  return {
    title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [
        {
          url: absoluteImage,
          width: ogImage.width ?? ogDefault.width,
          height: ogImage.height ?? ogDefault.height,
          alt: ogImage.alt ?? ogDefault.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImage],
    },
  };
}
