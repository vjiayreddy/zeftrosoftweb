import { CtaBand, PageHero, Section, WorkFilter } from "@/components/sections";
import {
  caseStudies,
  home,
  primaryCta,
  secondaryCta,
  workDomains,
  workPage,
} from "@/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Our Work",
  description: workPage.description,
  path: "/work",
});

export default function WorkPage() {
  return (
    <main>
      <PageHero
        eyebrow={workPage.eyebrow}
        title={workPage.title}
        description={workPage.description}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />

      <Section
        tone="surface"
        eyebrow="Case summaries"
        title="Problem type, approach, and outcomes we can share."
        description="Filter by practice domain. Client identities stay anonymized where required."
      >
        <WorkFilter studies={caseStudies} domains={workDomains} />
      </Section>

      <CtaBand
        title={home.cta.title}
        description={home.cta.description}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />
    </main>
  );
}
