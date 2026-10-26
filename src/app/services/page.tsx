import { CtaBand, PageHero, PillarCard, Section } from "@/components/sections";
import {
  home,
  pillars,
  primaryCta,
  secondaryCta,
  servicesPage,
} from "@/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: servicesPage.description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        description={servicesPage.description}
        primaryCta={primaryCta}
        secondaryCta={{ label: "View our work", href: "/work" }}
      />

      <Section
        tone="page"
        align="center"
        eyebrow="Three foundational disciplines"
        title="Software, intelligence, and connected systems — under one roof."
        description="Each practice stands alone when you need depth. Together they reduce handoffs between vendors and keep product, data, and devices aligned."
      >
        <div className="overflow-hidden rounded-xl border border-hairline bg-canvas md:grid md:grid-cols-3 md:divide-x md:divide-hairline">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
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
