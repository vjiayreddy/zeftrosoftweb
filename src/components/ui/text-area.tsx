import { cn } from "@/lib/cn";
import type { TextareaHTMLAttributes } from "react";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

export function TextArea({
  className,
  error = false,
  rows = 5,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      rows={rows}
      className={cn(
        "min-h-32 w-full min-w-0 resize-y rounded-none border-0 border-b border-hairline bg-transparent",
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
