import { LinkButton } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { CtaLink } from "@/content";
import type { HTMLAttributes } from "react";

export type CtaBandProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
};

export function CtaBand({
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
  ...props
}: CtaBandProps) {
  return (
    <section
      className={cn("w-full bg-primary py-section text-on-primary", className)}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-[1584px] flex-col gap-lg px-md md:flex-row md:items-end md:justify-between md:px-xl">
        <div className="flex max-w-3xl flex-col gap-sm">
          <h2 className="text-headline text-on-primary md:text-display-md">
            {title}
          </h2>
          <p className="max-w-2xl text-body-lg text-on-primary/90">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-sm">
          <LinkButton
            href={primaryCta.href}
            variant="secondary"
            className="bg-on-primary text-ink hover:bg-canvas"
          >
            {primaryCta.label}
          </LinkButton>
          {secondaryCta ? (
            <LinkButton
              href={secondaryCta.href}
              variant="ghost"
              className="border border-on-primary text-on-primary hover:bg-blue-60 hover:text-on-primary"
            >
              {secondaryCta.label}
            </LinkButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
