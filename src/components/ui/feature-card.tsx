import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export type FeatureCardProps = HTMLAttributes<HTMLElement> & {
  elevated?: boolean;
  as?: "article" | "div" | "section";
};

export function FeatureCard({
  className,
  elevated = false,
  as: Comp = "article",
  ...props
}: FeatureCardProps) {
  return (
    <Comp
      className={cn(
        "rounded-none border border-hairline p-lg text-body text-ink",
        elevated ? "bg-surface-1" : "bg-canvas",
        className,
      )}
      {...props}
    />
  );
}
