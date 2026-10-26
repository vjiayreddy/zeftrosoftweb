"use client";

import { useCardHover } from "@/lib/motion";
import { cn } from "@/lib/cn";
import type { ElementType, HTMLAttributes, Ref } from "react";
import { useRef } from "react";

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
  const ref = useRef<HTMLElement>(null);
  useCardHover(ref);
  const Root = Comp as ElementType;

  return (
    <Root
      ref={ref as Ref<HTMLElement>}
      data-motion="item"
      className={cn(
        "rounded-none border border-hairline p-lg text-body text-ink will-change-transform",
        elevated ? "bg-surface-1" : "bg-canvas",
        className,
      )}
      {...props}
    />
  );
}
