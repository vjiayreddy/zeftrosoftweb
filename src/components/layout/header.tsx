"use client";

import { LinkButton } from "@/components/ui";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { primaryCta, primaryNav, site } from "@/content";
import { brand } from "@/lib/media";
import Image from "next/image";
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
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const hasOpenedRef = useRef(false);

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
        "a[href], button:not([disabled])",
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

  useGSAP(() => {
    const header = headerRef.current;
    if (!header) return;

    const trigger = ScrollTrigger.create({
      start: 8,
      onUpdate: (self) => {
        header.classList.toggle("is-scrolled", self.scroll() > 8);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  useGSAP(
    () => {
      const panel = panelRef.current;
      const line1 = line1Ref.current;
      const line2 = line2Ref.current;
      const line3 = line3Ref.current;
      if (!panel || !line1 || !line2 || !line3) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const duration = reduce ? 0 : 0.25;
      const links = panel.querySelectorAll("nav > a, nav > [data-motion='cta']");

      if (open) {
        hasOpenedRef.current = true;
        gsap.set(panel, { display: "block" });
        gsap
          .timeline({ defaults: { ease: "power2.out", duration } })
          .to(line1, { y: 6, rotation: 45 }, 0)
          .to(line2, { autoAlpha: 0, duration: reduce ? 0 : 0.15 }, 0)
          .to(line3, { y: -6, rotation: -45 }, 0)
          .fromTo(
            panel,
            { autoAlpha: 0, y: -8 },
            { autoAlpha: 1, y: 0, duration: reduce ? 0 : 0.3 },
            0,
          );

        if (!reduce) {
          gsap.fromTo(
            links,
            { autoAlpha: 0, y: 8 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
              stagger: 0.04,
              delay: 0.05,
              clearProps: "transform",
            },
          );
        }
        return;
      }

      if (!hasOpenedRef.current) {
        gsap.set(panel, { display: "none", autoAlpha: 0 });
        return;
      }

      gsap
        .timeline({
          defaults: { ease: "power2.inOut", duration },
          onComplete: () => {
            gsap.set(panel, { display: "none" });
          },
        })
        .to(line1, { y: 0, rotation: 0 }, 0)
        .to(line2, { autoAlpha: 1, duration: reduce ? 0 : 0.15 }, 0)
        .to(line3, { y: 0, rotation: 0 }, 0)
        .to(panel, { autoAlpha: 0, y: -8, duration: reduce ? 0 : 0.2 }, 0);
    },
    { dependencies: [open] },
  );

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 border-b border-hairline bg-canvas transition-[box-shadow] duration-200",
        "[&.is-scrolled]:shadow-[inset_0_-1px_0_0_#e5e5e5]",
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-md focus:top-md focus:z-[60] focus:bg-primary focus:px-md focus:py-sm focus:text-button focus:text-on-primary focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-16 w-full max-w-[1584px] items-center justify-between gap-md px-md lg:px-xl">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center no-underline hover:opacity-90"
          aria-label={site.name}
        >
          <Image
            src={brand.wordmark}
            alt=""
            width={150}
            height={32}
            className="h-8 w-auto"
            priority
          />
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
              ref={line1Ref}
              className="block h-0.5 w-5 origin-center bg-ink"
            />
            <span ref={line2Ref} className="block h-0.5 w-5 bg-ink" />
            <span
              ref={line3Ref}
              className="block h-0.5 w-5 origin-center bg-ink"
            />
          </span>
        </button>
      </div>

      <div
        ref={panelRef}
        id={menuId}
        aria-hidden={!open}
        className="border-t border-hairline bg-canvas lg:hidden"
        style={{ display: "none" }}
      >
        <nav
          aria-label="Mobile primary"
          className="mx-auto flex w-full max-w-[1584px] flex-col gap-xs px-md py-md"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? undefined : -1}
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
          <LinkButton
            href={primaryCta.href}
            variant="primary"
            data-motion="cta"
            tabIndex={open ? undefined : -1}
            className="mt-sm"
          >
            {primaryCta.label}
          </LinkButton>
        </nav>
      </div>
    </header>
  );
}
