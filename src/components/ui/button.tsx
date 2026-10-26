import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

const variants = {
  primary:
    "bg-primary text-on-primary hover:bg-blue-hover active:bg-blue-80",
  secondary:
    "bg-ink text-inverse-ink hover:bg-inverse-surface-1 active:bg-inverse-canvas",
  tertiary:
    "bg-canvas text-primary border border-primary hover:bg-surface-1 active:bg-surface-2",
  ghost:
    "bg-transparent text-primary hover:bg-surface-1 active:bg-surface-2",
  danger:
    "bg-semantic-error text-on-primary hover:opacity-90 active:opacity-80",
} as const;

export type ButtonVariant = keyof typeof variants;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-12 items-center justify-center px-md py-sm",
        "text-button rounded-none transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
