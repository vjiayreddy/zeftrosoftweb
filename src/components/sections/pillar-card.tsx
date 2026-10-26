import { MediaImage } from "@/components/ui";
import type { Pillar } from "@/content";
import Link from "next/link";

export type PillarCardProps = {
  pillar: Pillar;
};

export function PillarCard({ pillar }: PillarCardProps) {
  return (
    <article
      data-motion="item"
      className="relative flex h-full min-h-[320px] flex-col gap-md border-b border-hairline bg-canvas p-lg last:border-b-0 md:border-b-0"
    >
      <div className="inline-flex w-fit items-center gap-xs rounded-sm bg-ink px-sm py-xs text-caption uppercase tracking-wide text-inverse-ink">
        <span aria-hidden className="h-2 w-2 bg-primary" />
        {pillar.label}
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 text-center font-display text-[120px] leading-none text-surface-2 select-none"
      >
        {pillar.number}
      </span>

      <div className="relative z-10 mt-auto flex flex-col gap-md">
        {pillar.image ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-hairline bg-surface-1 p-xs">
            <MediaImage
              image={pillar.image}
              className="h-5 w-5 object-contain"
              sizes="40px"
            />
          </div>
        ) : null}
        <h3 className="font-display text-card-title text-ink">
          <Link
            href={pillar.href}
            className="text-ink no-underline hover:underline"
          >
            {pillar.title}
          </Link>
        </h3>
        <p className="text-body-sm text-ink-muted">{pillar.summary}</p>
        <ul className="flex list-none flex-col gap-xs p-0">
          {pillar.offerings.slice(0, 4).map((offering) => (
            <li key={offering} className="text-body-sm text-ink">
              {offering}
            </li>
          ))}
        </ul>
        <Link
          href={pillar.href}
          className="text-body-emphasis text-ink no-underline hover:underline"
        >
          Explore {pillar.label.toLowerCase()}
        </Link>
      </div>
    </article>
  );
}
