import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";
import {
  buttonBaseClassName,
  buttonVariants,
  type ButtonVariant,
} from "./button-styles";

export type { ButtonVariant };

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
        buttonBaseClassName,
        buttonVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
