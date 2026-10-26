"use client";

import { LinkButton, MediaImage } from "@/components/ui";
import { useHeroIntro } from "@/lib/motion";
import { cn } from "@/lib/cn";
import type { MediaImage as MediaImageType } from "@/lib/media";
import type { CtaLink } from "@/content";
import type { HTMLAttributes } from "react";
import { useRef } from "react";

export type PageHeroProps = HTMLAttributes<HTMLElement> & {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  image?: MediaImageType;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  className,
  ...props
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  useHeroIntro(ref);

  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden bg-canvas py-section",
        image &&
          "bg-[linear-gradient(135deg,rgba(15,98,254,0.08)_0%,rgba(255,255,255,0)_45%,rgba(0,67,206,0.05)_100%)]",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1584px] flex-col gap-xl px-md md:px-xl",
          image && "lg:grid lg:grid-cols-2 lg:items-center lg:gap-xxl",
        )}
      >
        <div className="flex flex-col gap-lg">
          <p data-motion="eyebrow" className="text-eyebrow text-ink-muted">
            {eyebrow}
          </p>
          <h1
            data-motion="title"
            className="max-w-4xl text-display-md text-ink md:text-display-lg lg:text-display-xl"
          >
            {title}
          </h1>
          <p
            data-motion="body"
            className="max-w-2xl text-body-lg text-ink-muted"
          >
            {description}
          </p>
          <div className="flex flex-wrap gap-sm pt-sm">
            <LinkButton
              href={primaryCta.href}
              variant="primary"
              data-motion="cta"
            >
              {primaryCta.label}
            </LinkButton>
            {secondaryCta ? (
              <LinkButton
                href={secondaryCta.href}
                variant="tertiary"
                data-motion="cta"
              >
                {secondaryCta.label}
              </LinkButton>
            ) : null}
          </div>
        </div>

        {image ? (
          <div
            data-motion="media"
            className="order-first border border-hairline bg-surface-1 lg:order-none"
          >
            <MediaImage
              image={image}
              priority
              className="aspect-[4/3] w-full object-cover lg:aspect-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
