import { cn } from "@/lib/cn";
import type { InputHTMLAttributes } from "react";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

export function TextInput({
  className,
  error = false,
  ...props
}: TextInputProps) {
  return (
    <input
      className={cn(
        "min-h-12 w-full min-w-0 rounded-none border-0 border-b border-hairline bg-transparent",
        "px-0 py-sm text-body text-ink",
        "placeholder:text-ink-subtle",
        "outline-none transition-[border-color]",
        "focus:border-b-2 focus:border-ink focus:pb-[10px]",
        error && "border-b-2 border-semantic-error pb-[10px]",
        className,
      )}
      {...props}
    />
  );
}
