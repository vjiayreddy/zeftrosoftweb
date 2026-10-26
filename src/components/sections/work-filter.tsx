"use client";

import { useStaggerIn } from "@/lib/motion";
import { cn } from "@/lib/cn";
import type { CaseStudy } from "@/content";
import { useMemo, useRef, useState } from "react";
import { CaseStudyCard } from "./case-study-card";

export type WorkFilterProps = {
  studies: CaseStudy[];
  domains: readonly string[];
};

export function WorkFilter({ studies, domains }: WorkFilterProps) {
  const [activeDomain, setActiveDomain] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (activeDomain === "All") {
      return studies;
    }
    return studies.filter((study) => study.domain === activeDomain);
  }, [activeDomain, studies]);

  useStaggerIn(gridRef, [activeDomain, filtered.length]);

  return (
    <div className="flex flex-col gap-xl">
      <div
        role="tablist"
        aria-label="Filter case studies by domain"
        className="flex flex-wrap gap-sm"
      >
        {domains.map((domain) => {
          const isActive = domain === activeDomain;
          return (
            <button
              key={domain}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveDomain(domain)}
              className={cn(
                "min-h-10 rounded-md border px-md py-sm text-body-emphasis transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
                isActive
                  ? "border-ink bg-ink text-inverse-ink shadow-cta"
                  : "border-hairline bg-canvas text-ink hover:border-ink",
              )}
            >
              {domain}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((study) => (
            <CaseStudyCard key={`${activeDomain}-${study.slug}`} study={study} />
          ))}
        </div>
      ) : (
        <p className="text-body-lg text-ink-muted">
          No case summaries in this domain yet.
        </p>
      )}
    </div>
  );
}
