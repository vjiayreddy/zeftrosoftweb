import { PageHero, Section } from "@/components/sections";
import { termsPage } from "@/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: termsPage.title,
  description: termsPage.sections[0].body,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title={termsPage.title}
        description={`Last updated ${termsPage.updated}. Terms that apply when you use the Zeftrosoft website.`}
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "Privacy Policy", href: "/privacy" }}
      />

      <Section tone="surface">
        <div className="mx-auto flex max-w-3xl flex-col gap-xl">
          {termsPage.sections.map((section) => (
            <article key={section.heading} className="flex flex-col gap-sm">
              <h2 className="text-headline text-ink">{section.heading}</h2>
              <p className="text-body-lg text-ink-muted">{section.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
