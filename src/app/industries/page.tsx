import { CtaBand, IndustryCard, PageHero, Section } from "@/components/sections";
import {
  home,
  industries,
  industriesPage,
  primaryCta,
  secondaryCta,
} from "@/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Industries",
  description: industriesPage.description,
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow={industriesPage.eyebrow}
        title={industriesPage.title}
        description={industriesPage.description}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />

      <Section
        tone="surface"
        eyebrow="Domains we support"
        title="Engineering adapted to each operating environment."
        description="Regulatory pressure, throughput, and reliability needs vary by industry. We shape delivery around those constraints — not a one-size template."
      >
        <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
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
