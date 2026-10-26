import { FeatureCard } from "@/components/ui";
import type { Industry } from "@/content";
import Link from "next/link";

export type IndustryCardProps = {
  industry: Industry;
};

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <FeatureCard elevated className="flex h-full flex-col gap-sm">
      <p className="text-caption text-primary">{industry.highlight}</p>
      <h3 className="text-subhead text-ink">
        <Link
          href={`/industries/${industry.slug}`}
          className="text-ink no-underline hover:text-primary"
        >
          {industry.title}
        </Link>
      </h3>
      <p className="text-body-sm text-ink-muted">{industry.summary}</p>
    </FeatureCard>
  );
}
