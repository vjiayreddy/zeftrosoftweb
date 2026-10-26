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
  /** Large uppercase campaign-style hero (home) */
  campaign?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  campaign = false,
  className,
  ...props
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  useHeroIntro(ref);

  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden bg-grid py-section",
        className,
      )}
      {...props}
    >
      <span aria-hidden className="pixel-corner pixel-corner-tl opacity-80" />
      <span aria-hidden className="pixel-corner pixel-corner-br opacity-80" />

      <div
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-[1584px] flex-col gap-xl px-md md:px-xl",
          image && !campaign && "lg:grid lg:grid-cols-2 lg:items-center lg:gap-xxl",
          campaign && "items-center text-center",
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-lg",
            campaign && "mx-auto max-w-4xl items-center",
          )}
        >
          <p data-motion="eyebrow" className="eyebrow-marker">
            {eyebrow}
          </p>
          <h1
            data-motion="title"
            className={cn(
              "font-display text-ink",
              campaign
                ? "max-w-5xl text-display-md uppercase md:text-display-lg lg:text-display-xl"
                : "max-w-4xl text-display-md md:text-display-lg lg:text-display-xl",
            )}
          >
            {title}
          </h1>
          <p
            data-motion="body"
            className={cn(
              "max-w-2xl text-body-lg text-ink-muted",
              campaign && "mx-auto",
            )}
          >
            {description}
          </p>
          <div
            className={cn(
              "flex flex-wrap gap-sm pt-sm",
              campaign && "justify-center",
            )}
          >
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
                variant="secondary"
                accent={false}
                data-motion="cta"
              >
                {secondaryCta.label}
              </LinkButton>
            ) : null}
          </div>
        </div>

        {image && !campaign ? (
          <div
            data-motion="media"
            className="order-first overflow-hidden rounded-xl border border-hairline bg-canvas shadow-card lg:order-none"
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
