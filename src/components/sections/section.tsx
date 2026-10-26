import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

export type SectionTone = "canvas" | "surface";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: SectionTone;
  eyebrow?: string;
  title?: string;
  description?: string;
  action?: ReactNode;
  children?: ReactNode;
};

const toneClassName: Record<SectionTone, string> = {
  canvas: "bg-canvas",
  surface: "bg-surface-1",
};

export function Section({
  tone = "canvas",
  eyebrow,
  title,
  description,
  action,
  children,
  className,
  ...props
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || title || description || action);

  return (
    <section
      className={cn("w-full py-section", toneClassName[tone], className)}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-[1584px] flex-col gap-xl px-md md:px-xl">
        {hasHeader ? (
          <div className="flex flex-col gap-lg md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-3xl flex-col gap-sm">
              {eyebrow ? (
                <p className="text-eyebrow text-ink-muted">{eyebrow}</p>
              ) : null}
              {title ? (
                <h2 className="text-headline text-ink md:text-display-md">
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
