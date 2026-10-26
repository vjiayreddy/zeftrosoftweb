"use client";

import { useScrollReveal } from "@/lib/motion";
import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";
import { useRef } from "react";

export type SectionTone = "canvas" | "surface" | "page";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: SectionTone;
  eyebrow?: string;
  title?: string;
  description?: string;
  action?: ReactNode;
  children?: ReactNode;
  align?: "start" | "center";
};

const toneClassName: Record<SectionTone, string> = {
  canvas: "bg-canvas",
  surface: "bg-surface-1",
  page: "bg-page",
};

export function Section({
  tone = "canvas",
  eyebrow,
  title,
  description,
  action,
  children,
  align = "start",
  className,
  ...props
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);
  const hasHeader = Boolean(eyebrow || title || description || action);

  return (
    <section
      ref={ref}
      className={cn("w-full py-section", toneClassName[tone], className)}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-[1584px] flex-col gap-xl px-md md:px-xl">
        {hasHeader ? (
          <div
            data-motion="header"
            className={cn(
              "flex flex-col gap-lg",
              align === "center"
                ? "items-center text-center"
                : "md:flex-row md:items-end md:justify-between",
            )}
          >
            <div
              className={cn(
                "flex max-w-3xl flex-col gap-sm",
                align === "center" && "items-center",
              )}
            >
              {eyebrow ? <p className="eyebrow-marker">{eyebrow}</p> : null}
              {title ? (
                <h2 className="font-display text-headline text-ink md:text-display-md">
                  {title}
                </h2>
              ) : null}
              {description ? (
                <p className="max-w-2xl text-body-lg text-ink-muted">
                  {description}
                </p>
              ) : null}
            </div>
            {action ? <div className="shrink-0">{action}</div> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
