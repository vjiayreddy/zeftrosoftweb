"use client";

import { LinkButton } from "@/components/ui";
import { motionDefaults, gsap, useGSAP } from "@/lib/motion";
import { cn } from "@/lib/cn";
import type { CtaLink } from "@/content";
import type { HTMLAttributes } from "react";
import { useRef } from "react";

export type CtaBandProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
};

export function CtaBand({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
  ...props
}: CtaBandProps) {
  const ref = useRef<HTMLElement>(null);

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
          const copy = root.querySelector('[data-motion="header"]');
          const ctas = root.querySelectorAll('[data-motion="cta"]');

          if (reduce) {
            gsap.set([copy, ctas], { clearProps: "all" });
            return;
          }

          gsap
            .timeline({
              defaults: { ease: motionDefaults.ease },
              scrollTrigger: {
                trigger: root,
                start: motionDefaults.scrollStart,
                once: true,
              },
            })
            .from(copy, {
              autoAlpha: 0,
              y: 24,
              duration: 0.55,
            })
            .from(
              ctas,
              {
                autoAlpha: 0,
                y: 12,
                duration: 0.4,
                stagger: 0.08,
              },
              "-=0.25",
            );
        },
      );

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className={cn("w-full bg-primary py-section text-on-primary", className)}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-[1584px] flex-col gap-lg px-md md:flex-row md:items-end md:justify-between md:px-xl">
        <div
          data-motion="header"
          className="flex max-w-3xl flex-col gap-sm"
        >
          <h2 className="text-headline text-on-primary md:text-display-md">
            {title}
          </h2>
          <p className="max-w-2xl text-body-lg text-on-primary/90">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-sm">
          <LinkButton
            href={primaryCta.href}
            variant="secondary"
            data-motion="cta"
            className="bg-on-primary text-ink hover:bg-canvas"
          >
            {primaryCta.label}
          </LinkButton>
          {secondaryCta ? (
            <LinkButton
              href={secondaryCta.href}
              variant="ghost"
              data-motion="cta"
              className="border border-on-primary text-on-primary hover:bg-blue-60 hover:text-on-primary"
            >
              {secondaryCta.label}
            </LinkButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
