"use client";

import { LinkButton } from "@/components/ui";
import { cn } from "@/lib/cn";
import { primaryCta, primaryNav, site } from "@/content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const firstLink = panel?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-md focus:top-md focus:z-[60] focus:bg-primary focus:px-md focus:py-sm focus:text-button focus:text-on-primary focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-16 w-full max-w-[1584px] items-center justify-between gap-md px-md lg:px-xl">
        <Link
          href="/"
          className="shrink-0 text-body-emphasis text-ink no-underline hover:text-ink"
        >
          {site.name}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-md xl:gap-lg lg:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                isActivePath(pathname, item.href) ? "page" : undefined
              }
              className={cn(
                "whitespace-nowrap text-body-sm no-underline transition-colors",
                isActivePath(pathname, item.href)
                  ? "border-b-2 border-ink pb-xxs text-ink"
                  : "text-ink-muted hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </LinkButton>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
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
        ref={panelRef}
        id={menuId}
        hidden={!open}
        className={cn(
          "border-t border-hairline bg-canvas lg:hidden",
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
              aria-current={
                isActivePath(pathname, item.href) ? "page" : undefined
              }
              className={cn(
                "min-h-12 px-sm py-sm text-body no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
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
