import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ComponentProps } from "react";
import {
  buttonBaseClassName,
  buttonVariants,
  type ButtonVariant,
} from "./button-styles";

export type LinkButtonProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

export function LinkButton({
  className,
  variant = "primary",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(
        buttonBaseClassName,
        buttonVariants[variant],
        "no-underline hover:no-underline",
        variant === "primary" || variant === "secondary" || variant === "danger"
          ? "hover:text-inherit"
          : undefined,
        className,
      )}
      {...props}
    />
  );
}
