"use client";

import type { RefObject } from "react";
import { useRef } from "react";
import { motionDefaults } from "./defaults";
import { gsap, useGSAP } from "./register";

/** Stagger-in for filter/list updates. Skips the first mount so ScrollReveal can own the initial entrance. */
export function useStaggerIn(
  scope: RefObject<HTMLElement | null>,
  dependencies: unknown[] = [],
) {
  const isFirstPass = useRef(true);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      if (isFirstPass.current) {
        isFirstPass.current = false;
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduce } = context.conditions!;
          const items = root.querySelectorAll('[data-motion="item"]');

          if (reduce || items.length === 0) {
            gsap.set(items, { clearProps: "all" });
            return;
          }

          gsap.from(items, {
            autoAlpha: 0,
            y: 20,
            duration: 0.45,
            stagger: 0.08,
            ease: motionDefaults.ease,
            clearProps: "transform",
          });
        },
      );

      return () => mm.revert();
    },
    { scope, dependencies, revertOnUpdate: true },
  );
}
