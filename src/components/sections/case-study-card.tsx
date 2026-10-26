import { FeatureCard } from "@/components/ui";
import type { CaseStudy } from "@/content";
import Link from "next/link";

export type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <FeatureCard elevated className="flex h-full flex-col gap-md">
      <div className="flex flex-wrap items-center gap-sm">
        <p className="text-caption text-ink-subtle">{study.domain}</p>
        {study.framing === "representative" ? (
          <span className="border border-hairline px-sm py-xxs text-caption text-ink-muted">
            Representative engagement
          </span>
        ) : null}
      </div>
      <h3 className="text-card-title text-ink">
        <Link
          href={`/work/${study.slug}`}
          className="text-ink no-underline hover:text-primary"
        >
          {study.title}
        </Link>
      </h3>
      <p className="flex-1 text-body-sm text-ink-muted">{study.summary}</p>
      <Link
        href={`/work/${study.slug}`}
        className="text-body-emphasis text-primary no-underline hover:underline"
      >
        Read case summary
      </Link>
    </FeatureCard>
  );
}
