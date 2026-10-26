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
      className={cn(
        "relative w-full overflow-hidden bg-grid-dark py-section text-inverse-ink",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 hidden h-40 w-40 -translate-y-1/2 bg-primary md:block"
        style={{
          clipPath:
            "polygon(0 20%, 40% 20%, 40% 0, 70% 0, 70% 35%, 100% 35%, 100% 100%, 0 100%)",
        }}
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[1584px] flex-col gap-lg px-md md:flex-row md:items-end md:justify-between md:px-xl">
        <div data-motion="header" className="flex max-w-3xl flex-col gap-sm">
          <h2 className="font-display text-headline uppercase text-inverse-ink md:text-display-md">
            {title}
          </h2>
          <p className="max-w-2xl text-body-lg text-inverse-ink-muted">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-sm">
          <LinkButton
            href={primaryCta.href}
            variant="secondary"
            accent={false}
            data-motion="cta"
            className="border-0 bg-canvas text-ink hover:bg-surface-1"
          >
            {primaryCta.label}
          </LinkButton>
          {secondaryCta ? (
            <LinkButton
              href={secondaryCta.href}
              variant="ghost"
              accent={false}
              data-motion="cta"
              className="border border-inverse-ink/30 text-inverse-ink hover:bg-inverse-surface-1 hover:text-inverse-ink"
            >
              {secondaryCta.label}
            </LinkButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
