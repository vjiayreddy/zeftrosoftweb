import { FeatureCard, MediaImage } from "@/components/ui";
import type { Industry } from "@/content";
import Link from "next/link";

export type IndustryCardProps = {
  industry: Industry;
};

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <FeatureCard elevated className="flex h-full flex-col overflow-hidden p-0">
      {industry.image ? (
        <Link
          href={`/industries/${industry.slug}`}
          className="block border-b border-hairline bg-surface-1"
          tabIndex={-1}
          aria-hidden
        >
          <MediaImage
            image={industry.image}
            className="aspect-[16/10] w-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </Link>
      ) : null}
      <div className="flex flex-1 flex-col gap-sm p-lg">
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
      </div>
    </FeatureCard>
  );
}
