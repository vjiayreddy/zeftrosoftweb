"use client";

import { LinkButton } from "@/components/ui";
import { cn } from "@/lib/cn";
import { primaryCta, primaryNav, site } from "@/content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-md focus:top-md focus:z-50 focus:bg-primary focus:px-md focus:py-sm focus:text-on-primary"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-16 w-full max-w-[1584px] items-center justify-between gap-md px-md md:px-xl">
        <Link
          href="/"
          className="text-body-emphasis text-ink no-underline hover:text-ink"
        >
          {site.name}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-lg md:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-body-sm no-underline transition-colors",
                isActivePath(pathname, item.href)
                  ? "text-ink border-b-2 border-ink pb-xxs"
                  : "text-ink-muted hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </LinkButton>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span aria-hidden className="flex flex-col gap-1">
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition-transform",
                open && "translate-y-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition-transform",
                open && "-translate-y-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-hairline bg-canvas md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          aria-label="Mobile primary"
          className="mx-auto flex w-full max-w-[1584px] flex-col gap-xs px-md py-md"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-sm py-sm text-body no-underline",
                isActivePath(pathname, item.href)
                  ? "bg-surface-1 text-ink"
                  : "text-ink-muted hover:bg-surface-1 hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
          <LinkButton href={primaryCta.href} variant="primary" className="mt-sm">
            {primaryCta.label}
          </LinkButton>
        </nav>
      </div>
    </header>
  );
}
