"use client";

import { LinkButton } from "@/components/ui";
import { useScrollReveal } from "@/lib/motion";
import type { ComparisonSide, CtaLink } from "@/content";
import { useRef } from "react";

export type { ComparisonSide };

export type ComparisonCardsProps = {
  left: ComparisonSide;
  right: ComparisonSide;
  cta?: CtaLink;
};

export function ComparisonCards({ left, right, cta }: ComparisonCardsProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  return (
    <div ref={ref} className="flex flex-col gap-xl">
      <div className="grid grid-cols-1 gap-md md:grid-cols-2">
        <ComparisonCard side={left} />
        <ComparisonCard side={right} />
      </div>
      {cta ? (
        <div className="flex justify-center">
          <LinkButton href={cta.href} variant="primary">
            {cta.label}
          </LinkButton>
        </div>
      ) : null}
    </div>
  );
}

function ComparisonCard({ side }: { side: ComparisonSide }) {
  return (
    <article
      data-motion="item"
      className={
        side.emphasized
          ? "flex flex-col overflow-hidden rounded-xl border border-hairline bg-surface-1 shadow-card"
          : "flex flex-col overflow-hidden rounded-xl border border-hairline bg-canvas"
      }
    >
      <div className="border-b border-hairline bg-grid px-lg py-xl">
        <h3 className="font-display text-card-title text-ink">{side.title}</h3>
      </div>
      <ul className="m-0 flex list-none flex-col gap-md p-lg">
        {side.items.map((item) => (
          <li
            key={item}
            className={
              side.emphasized
                ? "flex items-start gap-sm text-body-sm text-ink"
                : "flex items-start gap-sm text-body-sm text-ink-muted"
            }
          >
            <span
              aria-hidden
              className={
                side.emphasized
                  ? "mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ink text-[10px] text-inverse-ink"
                  : "mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-surface-2 text-[10px] text-ink-muted"
              }
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
