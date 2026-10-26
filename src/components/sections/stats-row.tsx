"use client";

import { useScrollReveal } from "@/lib/motion";
import { cn } from "@/lib/cn";
import type { StatItem } from "@/content";
import { useRef } from "react";

export type { StatItem };

export type StatsRowProps = {
  items: StatItem[];
  note?: string;
  className?: string;
};

export function StatsRow({ items, note, className }: StatsRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 gap-xl border-t border-hairline pt-xl md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]",
        className,
      )}
    >
      {note ? (
        <p data-motion="header" className="max-w-xs text-caption uppercase tracking-wide text-ink-muted">
          {note}
        </p>
      ) : (
        <span />
      )}
      <ul className="m-0 flex list-none flex-col gap-lg p-0 sm:gap-xl">
        {items.map((item) => (
          <li
            key={item.label}
            data-motion="item"
            className="flex flex-col gap-xs border-b border-hairline pb-lg last:border-b-0 last:pb-0 sm:flex-row sm:items-end sm:gap-lg"
          >
            <p className="font-display text-display-md text-ink md:text-display-lg">
              {item.value}
            </p>
            <p className="pb-sm text-body-sm text-ink-muted">{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
