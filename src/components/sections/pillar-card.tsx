import { FeatureCard } from "@/components/ui";
import type { Pillar } from "@/content";
import Link from "next/link";

export type PillarCardProps = {
  pillar: Pillar;
};

export function PillarCard({ pillar }: PillarCardProps) {
  return (
    <FeatureCard className="flex h-full flex-col gap-md">
      <div className="flex items-baseline justify-between gap-sm">
        <span className="text-caption text-ink-subtle">{pillar.number}</span>
        <span className="text-eyebrow text-primary">{pillar.label}</span>
      </div>
      <h3 className="text-card-title text-ink">
        <Link
          href={pillar.href}
          className="text-ink no-underline hover:text-primary"
        >
          {pillar.title}
        </Link>
      </h3>
      <p className="flex-1 text-body-sm text-ink-muted">{pillar.summary}</p>
      <ul className="flex flex-col gap-xs border-t border-hairline pt-md">
        {pillar.offerings.slice(0, 4).map((offering) => (
          <li key={offering} className="text-body-sm text-ink">
            {offering}
          </li>
        ))}
      </ul>
      <Link
        href={pillar.href}
        className="mt-auto text-body-emphasis text-primary no-underline hover:underline"
      >
        Explore {pillar.label.toLowerCase()}
      </Link>
    </FeatureCard>
  );
}
