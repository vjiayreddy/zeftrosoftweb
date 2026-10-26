import type { ProcessStep } from "@/content";

export type ProcessStepsProps = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <li
          key={step.number}
          className="flex flex-col gap-sm border border-hairline bg-canvas p-lg"
        >
          <span className="text-caption text-ink-subtle">{step.number}</span>
          <h3 className="text-subhead text-ink">{step.title}</h3>
          <p className="text-body-sm text-ink-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
