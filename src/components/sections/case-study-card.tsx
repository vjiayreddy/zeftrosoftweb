import { FeatureCard, MediaImage } from "@/components/ui";
import type { CaseStudy } from "@/content";
import Link from "next/link";

export type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <FeatureCard elevated className="flex h-full flex-col overflow-hidden p-0">
      {study.image ? (
        <Link
          href={`/work/${study.slug}`}
          className="block border-b border-hairline bg-surface-1"
          tabIndex={-1}
          aria-hidden
        >
          <MediaImage
            image={study.image}
            className="aspect-[16/9] w-full object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>
      ) : null}
      <div className="flex flex-1 flex-col gap-md p-lg">
        <div className="flex flex-wrap items-center gap-sm">
          <p className="text-caption text-ink-subtle">{study.domain}</p>
          {study.framing === "representative" ? (
            <span className="rounded-full border border-hairline px-sm py-xxs text-caption text-ink-muted">
              Representative engagement
            </span>
          ) : null}
        </div>
        <h3 className="font-display text-card-title text-ink">
          <Link
            href={`/work/${study.slug}`}
            className="text-ink no-underline hover:underline"
          >
            {study.title}
          </Link>
        </h3>
        <p className="flex-1 text-body-sm text-ink-muted">{study.summary}</p>
        <Link
          href={`/work/${study.slug}`}
          className="text-body-emphasis text-ink no-underline hover:underline"
        >
          Read case summary
        </Link>
      </div>
    </FeatureCard>
  );
}
