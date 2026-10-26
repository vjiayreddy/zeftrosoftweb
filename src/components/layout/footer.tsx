import { copyright, footerColumns, site } from "@/content";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-hairline bg-canvas">
      <div className="mx-auto grid w-full max-w-[1584px] gap-xl px-md py-xxl md:grid-cols-4 md:px-xl">
        <div className="flex flex-col gap-sm md:col-span-1">
          <p className="text-body-emphasis text-ink">{site.name}</p>
          <p className="max-w-sm text-body-sm text-ink-muted">
            {site.description}
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="flex flex-col gap-sm">
            <p className="text-body-emphasis text-ink">{column.title}</p>
            <ul className="flex list-none flex-col gap-xs p-0">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-ink-muted no-underline hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
