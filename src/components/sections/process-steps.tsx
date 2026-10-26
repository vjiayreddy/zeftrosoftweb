"use client";

import { useProcessReveal } from "@/lib/motion";
import type { ProcessStep } from "@/content";
import { useRef } from "react";

export type ProcessStepsProps = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  const ref = useRef<HTMLOListElement>(null);
  useProcessReveal(ref);

  return (
    <ol
      ref={ref}
      className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3"
    >
      {steps.map((step) => (
        <li
          key={step.number}
          data-motion="process-item"
          className="relative flex flex-col gap-sm border border-hairline bg-canvas p-lg"
        >
          <span
            data-motion="step-accent"
            aria-hidden
            className="absolute inset-x-0 top-0 h-0.5 origin-left bg-primary"
          />
          <span
            data-motion="step-number"
            className="text-caption text-ink-subtle"
          >
            {step.number}
          </span>
          <h3 className="text-subhead text-ink">{step.title}</h3>
          <p className="text-body-sm text-ink-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
