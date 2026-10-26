"use client";

import type { RefObject } from "react";
import { motionDefaults } from "./defaults";
import { gsap, useGSAP } from "./register";

export function useHeroIntro(scope: RefObject<HTMLElement | null>) {
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
          const eyebrow = root.querySelector('[data-motion="eyebrow"]');
          const title = root.querySelector('[data-motion="title"]');
          const body = root.querySelector('[data-motion="body"]');
          const ctas = root.querySelectorAll('[data-motion="cta"]');
          const media = root.querySelector('[data-motion="media"]');

          if (reduce) {
            gsap.set([eyebrow, title, body, ctas, media], { clearProps: "all" });
            return;
          }

          const tl = gsap.timeline({
            defaults: { ease: motionDefaults.ease },
          });

          if (eyebrow) {
            tl.from(eyebrow, {
              autoAlpha: 0,
              y: 16,
              duration: 0.45,
            });
          }

          if (title) {
            tl.from(
              title,
              {
                autoAlpha: 0,
                y: motionDefaults.heroY,
                duration: motionDefaults.heroDuration,
                ease: motionDefaults.heroEase,
              },
              "-=0.25",
            );
          }

          if (body) {
            tl.from(
              body,
              {
                autoAlpha: 0,
                y: 20,
                duration: 0.5,
              },
              "-=0.35",
            );
          }

          if (ctas.length > 0) {
            tl.from(
              ctas,
              {
                autoAlpha: 0,
                y: 12,
                duration: 0.4,
                stagger: 0.08,
              },
              "-=0.25",
            );
          }

          if (media) {
            tl.from(
              media,
              {
                autoAlpha: 0,
                x: 24,
                duration: 0.55,
              },
              "-=0.45",
            );
          }
        },
      );

      return () => mm.revert();
    },
    { scope },
  );
}
