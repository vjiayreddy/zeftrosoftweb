import { cn } from "@/lib/cn";
import type { MediaImage as MediaImageType } from "@/lib/media";
import Image from "next/image";

export type MediaImageProps = {
  image: MediaImageType;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function MediaImage({
  image,
  className,
  priority = false,
  sizes = "100vw",
}: MediaImageProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto w-full object-cover", className)}
    />
  );
}
