export const buttonVariants = {
  primary:
    "bg-ink text-inverse-ink shadow-cta hover:bg-inverse-surface-1 active:bg-inverse-canvas",
  secondary:
    "bg-canvas text-ink border border-hairline shadow-cta hover:bg-surface-1 active:bg-surface-2",
  tertiary:
    "bg-canvas text-ink border border-ink hover:bg-surface-1 active:bg-surface-2",
  ghost:
    "bg-transparent text-ink hover:bg-surface-1 active:bg-surface-2",
  danger:
    "bg-semantic-error text-inverse-ink shadow-cta hover:opacity-90 active:opacity-80",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

export const buttonBaseClassName =
  "inline-flex min-h-12 items-center justify-center gap-sm rounded-md px-lg py-sm text-button transition-[background-color,box-shadow,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]";

/** Lime square leading badge for Agenio-style primary CTAs */
export const buttonAccentBadgeClassName =
  "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-xs bg-primary text-on-primary";
