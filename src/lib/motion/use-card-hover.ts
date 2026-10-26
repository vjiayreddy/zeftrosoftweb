"use client";

import type { RefObject } from "react";
import { motionDefaults } from "./defaults";
import { gsap, useGSAP } from "./register";

export function useCardHover(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    (context, contextSafe) => {
      const root = scope.current;
      if (!root || !contextSafe) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          canHover:
            "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        },
        () => {
          const onEnter = contextSafe(() => {
            gsap.to(root, {
              y: motionDefaults.hoverY,
              duration: motionDefaults.hoverDuration,
              ease: motionDefaults.ease,
              overwrite: "auto",
            });
          });

          const onLeave = contextSafe(() => {
            gsap.to(root, {
              y: 0,
              duration: motionDefaults.hoverDuration,
              ease: motionDefaults.ease,
              overwrite: "auto",
            });
          });

          root.addEventListener("pointerenter", onEnter);
          root.addEventListener("pointerleave", onLeave);
          root.addEventListener("focusin", onEnter);
          root.addEventListener("focusout", onLeave);

          return () => {
            root.removeEventListener("pointerenter", onEnter);
            root.removeEventListener("pointerleave", onLeave);
            root.removeEventListener("focusin", onEnter);
            root.removeEventListener("focusout", onLeave);
            gsap.set(root, { clearProps: "transform" });
          };
        },
      );

      return () => mm.revert();
    },
    { scope },
  );
}
