import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  buttonAccentBadgeClassName,
  buttonBaseClassName,
  buttonVariants,
  type ButtonVariant,
} from "./button-styles";

export type { ButtonVariant };

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

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  accent?: boolean;
  children?: ReactNode;
};

export function Button({
  className,
  variant = "primary",
  accent,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  const showAccent = accent ?? variant === "primary";

  return (
    <button
      type={type}
      className={cn(buttonBaseClassName, buttonVariants[variant], className)}
      {...props}
    >
      {showAccent ? <AccentBadge /> : null}
      {children}
    </button>
  );
}
