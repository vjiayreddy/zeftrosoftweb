import { LinkButton } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { CtaLink } from "@/content";
import type { HTMLAttributes } from "react";

export type PageHeroProps = HTMLAttributes<HTMLElement> & {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
  ...props
}: PageHeroProps) {
  return (
    <section
      className={cn("w-full bg-canvas py-section", className)}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-[1584px] flex-col gap-lg px-md md:px-xl">
        <p className="text-eyebrow text-ink-muted">{eyebrow}</p>
        <h1 className="max-w-4xl text-display-md text-ink md:text-display-lg lg:text-display-xl">
          {title}
        </h1>
        <p className="max-w-2xl text-body-lg text-ink-muted">{description}</p>
        <div className="flex flex-wrap gap-sm pt-sm">
          <LinkButton href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </LinkButton>
          {secondaryCta ? (
            <LinkButton href={secondaryCta.href} variant="tertiary">
              {secondaryCta.label}
            </LinkButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
