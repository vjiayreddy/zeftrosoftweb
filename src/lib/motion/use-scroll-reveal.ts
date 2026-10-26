"use client";

import type { RefObject } from "react";
import { motionDefaults } from "./defaults";
import { gsap, useGSAP } from "./register";

type UseScrollRevealOptions = {
  itemSelector?: string;
  headerSelector?: string;
  dependencies?: unknown[];
};

export function useScrollReveal(
  scope: RefObject<HTMLElement | null>,
  options: UseScrollRevealOptions = {},
) {
  const {
    itemSelector = '[data-motion="item"]',
    headerSelector = '[data-motion="header"]',
    dependencies = [],
  } = options;

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
          const header = root.querySelector(headerSelector);
          const items = root.querySelectorAll(itemSelector);

          if (reduce) {
            gsap.set([header, items], { clearProps: "all" });
            return;
          }

          if (header) {
            gsap.from(header, {
              autoAlpha: 0,
              y: motionDefaults.y,
              duration: motionDefaults.duration,
              scrollTrigger: {
                trigger: root,
                start: motionDefaults.scrollStart,
                once: true,
              },
            });
          }

          if (items.length > 0) {
            gsap.from(items, {
              autoAlpha: 0,
              y: motionDefaults.y,
              duration: motionDefaults.duration,
              stagger: motionDefaults.stagger,
              scrollTrigger: {
                trigger: items[0],
                start: motionDefaults.scrollStart,
                once: true,
              },
            });
          }
        },
      );

      return () => mm.revert();
    },
    { scope, dependencies },
  );
}
