"use client";

import { MediaImage } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { ClientLogo } from "@/content";
import { useEffect, useRef, useState } from "react";

export type ClientLogoMarqueeProps = {
  clients: ClientLogo[];
  eyebrow?: string;
  className?: string;
};

export function ClientLogoMarquee({
  clients,
  eyebrow = "// We've trusted by",
  className,
}: ClientLogoMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (clients.length === 0) return null;

  const loop = reduceMotion ? clients : [...clients, ...clients];

  return (
    <section
      className={cn("w-full border-y border-hairline bg-canvas py-xl", className)}
      aria-label="Client logos"
    >
      <div className="mx-auto flex w-full max-w-[1584px] flex-col gap-md px-md md:px-xl">
        <p className="text-caption text-ink-subtle">{eyebrow}</p>
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className={cn(
              "flex gap-md",
              reduceMotion
                ? "flex-wrap"
                : "w-max animate-[client-marquee_36s_linear_infinite] hover:[animation-play-state:paused]",
            )}
          >
            {loop.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex h-16 w-[180px] shrink-0 items-center justify-center border border-hairline bg-canvas px-md"
                aria-hidden={index >= clients.length ? true : undefined}
              >
                <MediaImage
                  image={client.logo}
                  className="h-8 w-auto max-w-full object-contain"
                  sizes="180px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
