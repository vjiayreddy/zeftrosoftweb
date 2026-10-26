"use client";

import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";

export type TextMarqueeProps = {
  lines: [string, string];
  className?: string;
};

export function TextMarquee({ lines, className }: TextMarqueeProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section
      className={cn(
        "overflow-hidden border-y border-hairline bg-canvas py-xl",
        className,
      )}
      aria-hidden
    >
      {lines.map((line, index) => {
        const repeated = Array.from({ length: 8 }, () => line).join(" · ");
        const content = reduceMotion ? line : `${repeated} · ${repeated}`;
        return (
          <div key={line} className="overflow-hidden py-xs">
            <p
              className={cn(
                "font-display whitespace-nowrap text-display-md uppercase text-ink md:text-display-lg",
                !reduceMotion &&
                  (index % 2 === 0
                    ? "animate-marquee"
                    : "animate-marquee-reverse"),
                reduceMotion && "px-md text-center",
              )}
            >
              {content}
            </p>
          </div>
        );
      })}
    </section>
  );
}
