"use client";

import type { RefObject } from "react";
import { motionDefaults } from "./defaults";
import { gsap, useGSAP } from "./register";

export function useProcessReveal(
  scope: RefObject<HTMLElement | null>,
) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduce } = context.conditions!;
          const steps = gsap.utils.toArray<HTMLElement>(
            root.querySelectorAll('[data-motion="process-item"]'),
          );

          if (reduce || steps.length === 0) {
            gsap.set(steps, { clearProps: "all" });
            return;
          }

          const accents = steps
            .map((step) =>
              step.querySelector<HTMLElement>('[data-motion="step-accent"]'),
            )
            .filter(Boolean) as HTMLElement[];

          const tl = gsap.timeline({
            defaults: { ease: motionDefaults.ease },
            scrollTrigger: {
              trigger: root,
              start: motionDefaults.scrollStart,
              once: true,
            },
          });

          tl.from(steps, {
            autoAlpha: 0,
            y: 28,
            duration: 0.55,
            stagger: 0.12,
          });

          if (accents.length > 0) {
            tl.from(
              accents,
              {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.4,
                stagger: 0.12,
              },
              "-=0.35",
            );
          }
        },
      );

      return () => mm.revert();
    },
    { scope },
  );
}
