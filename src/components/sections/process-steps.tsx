"use client";

import { LinkButton } from "@/components/ui";
import { useProcessReveal } from "@/lib/motion";
import type { CtaLink, ProcessStep } from "@/content";
import { useRef } from "react";

export type ProcessStepsProps = {
  steps: ProcessStep[];
  /** Sticky intro copy (Agenio process layout) */
  intro?: {
    eyebrow: string;
    title: string;
    description: string;
    cta?: CtaLink;
  };
};

export function ProcessSteps({ steps, intro }: ProcessStepsProps) {
  const ref = useRef<HTMLDivElement>(null);
  useProcessReveal(ref);

  if (!intro) {
    return (
      <div ref={ref}>
        <ol className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <ProcessStepCard key={step.number} step={step} />
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-xxl lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-xl"
    >
      <div className="flex flex-col gap-lg lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow-marker">{intro.eyebrow}</p>
        <h2 className="font-display text-headline text-ink md:text-display-md">
          {intro.title}
        </h2>
        <p className="max-w-md text-body-lg text-ink-muted">
          {intro.description}
        </p>
        {intro.cta ? (
          <div>
            <LinkButton href={intro.cta.href} variant="primary">
              {intro.cta.label}
            </LinkButton>
          </div>
        ) : null}
      </div>

      <ol className="flex list-none flex-col gap-lg p-0">
        {steps.map((step) => (
          <ProcessStepCard key={step.number} step={step} />
        ))}
      </ol>
    </div>
  );
}

function ProcessStepCard({ step }: { step: ProcessStep }) {
  return (
    <li
      data-motion="process-item"
      className="relative flex flex-col gap-sm overflow-hidden rounded-xl border border-hairline bg-canvas p-lg shadow-card"
    >
      <span
        data-motion="step-accent"
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left bg-primary"
      />
      <span
        data-motion="step-number"
        className="font-display text-caption text-ink-subtle"
      >
        //{step.number}
      </span>
      <h3 className="font-display text-subhead text-ink">{step.title}</h3>
      <p className="text-body-sm text-ink-muted">{step.description}</p>
    </li>
  );
}
