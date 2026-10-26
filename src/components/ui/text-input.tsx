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
        "w-full rounded-none border-0 border-b border-hairline bg-surface-1",
        "px-md py-[11px] text-body text-ink",
        "placeholder:text-ink-subtle",
        "outline-none transition-[border-color,box-shadow]",
        "focus:border-b-2 focus:border-primary focus:pb-[10px]",
        error && "border-b-2 border-semantic-error pb-[10px]",
        className,
      )}
      {...props}
    />
  );
}
