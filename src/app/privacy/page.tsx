import { PageHero, Section } from "@/components/sections";
import { privacyPage } from "@/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: privacyPage.title,
  description: privacyPage.sections[0].body,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title={privacyPage.title}
        description={`Last updated ${privacyPage.updated}. How we collect, use, and protect information on this website.`}
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "Terms of Use", href: "/terms" }}
      />

      <Section tone="surface">
        <div className="mx-auto flex max-w-3xl flex-col gap-xl">
          {privacyPage.sections.map((section) => (
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
