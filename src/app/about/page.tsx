import {
  AdvantageGrid,
  CtaBand,
  PageHero,
  ProcessSteps,
  Section,
} from "@/components/sections";
import { FeatureCard } from "@/components/ui";
import {
  aboutCta,
  aboutPage,
  advantageItems,
  primaryCta,
  processSteps,
  secondaryCta,
} from "@/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: aboutPage.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        description={aboutPage.description}
        primaryCta={primaryCta}
        secondaryCta={{ label: "View our work", href: "/work" }}
      />

      <Section
        tone="surface"
        eyebrow="Who we are"
        title="A technology partner for systems that have to work in the real world."
      >
        <FeatureCard elevated className="max-w-3xl">
          <p className="text-body-lg text-ink">
            Zeftrosoft brings software engineering, AI, data, and connected
            technology together so product, intelligence, and devices stay
            aligned. We help businesses build new systems, modernize what they
            already run, and scale engineering capacity without fragmenting
            ownership across disconnected vendors.
          </p>
        </FeatureCard>
      </Section>

      <Section
        tone="canvas"
        eyebrow="Our advantage"
        title="Practical engineering. Connected skills."
        description="Four habits that shape how we staff projects and make technology choices."
      >
        <AdvantageGrid items={advantageItems} />
      </Section>

      <Section
        tone="surface"
        eyebrow="Process & methodology"
        title="From requirement to working technology."
        description="Structured engineering from day zero — clear phases, auditable milestones, and practical delivery."
      >
        <ProcessSteps steps={processSteps} />
      </Section>

      <CtaBand
        title={aboutCta.title}
        description={aboutCta.description}
        primaryCta={aboutCta.primaryCta}
        secondaryCta={secondaryCta}
      />
    </main>
  );
}
