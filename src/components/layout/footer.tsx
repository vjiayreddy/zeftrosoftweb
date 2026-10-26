import { copyright, footerColumns, site } from "@/content";
import { brand } from "@/lib/media";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-hairline bg-canvas">
      <div className="mx-auto grid w-full max-w-[1584px] gap-xl px-md py-xxl md:grid-cols-4 md:px-xl">
        <div className="flex flex-col gap-sm md:col-span-1">
          <Link href="/" aria-label={site.name} className="inline-flex w-fit">
            <Image
              src={brand.wordmark}
              alt=""
              width={150}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <p className="max-w-sm text-body-sm text-ink-muted">
            {site.description}
          </p>
        </div>

        {footerColumns.map((column) => (
          <nav
            key={column.title}
            aria-label={column.title}
            className="flex flex-col gap-sm"
          >
            <p className="text-body-emphasis text-ink">{column.title}</p>
            <ul className="flex list-none flex-col gap-xs p-0">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-ink-muted no-underline hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex w-full max-w-[1584px] px-md py-md md:px-xl">
          <p className="text-caption text-ink-subtle">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
