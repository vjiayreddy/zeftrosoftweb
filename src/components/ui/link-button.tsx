import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import {
  buttonAccentBadgeClassName,
  buttonBaseClassName,
  buttonVariants,
  type ButtonVariant,
} from "./button-styles";

export type LinkButtonProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  accent?: boolean;
  children?: ReactNode;
};

function AccentBadge() {
  return (
    <span aria-hidden className={buttonAccentBadgeClassName}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M1.5 5h7M5.5 2l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    </span>
  );
}

export function LinkButton({
  className,
  variant = "primary",
  accent,
  children,
  ...props
}: LinkButtonProps) {
  const showAccent = accent ?? variant === "primary";

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
    >
      {showAccent ? <AccentBadge /> : null}
      {children}
    </Link>
  );
}
