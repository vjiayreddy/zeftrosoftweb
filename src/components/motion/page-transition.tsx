"use client";

import { gsap, useGSAP } from "@/lib/motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useRef } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduce } = context.conditions!;
          if (reduce) return;

          gsap.fromTo(
            root,
            { autoAlpha: 0, y: 12 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
              clearProps: "transform",
            },
          );
        },
      );

      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div ref={ref} className="flex flex-1 flex-col">
      {children}
    </div>
  );
}
