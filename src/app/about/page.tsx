import {
  AdvantageGrid,
  CtaBand,
  PageHero,
  ProcessSteps,
  Section,
  StatsRow,
} from "@/components/sections";
import { FeatureCard } from "@/components/ui";
import {
  aboutCta,
  aboutPage,
  advantageItems,
  home,
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
        tone="canvas"
        eyebrow="Who we are"
        title="A technology partner for systems that have to work in the real world."
      >
        <FeatureCard elevated className="max-w-3xl shadow-card">
          <p className="text-body-lg text-ink">
            Zeftrosoft brings software engineering, AI, data, and connected
            technology together so product, intelligence, and devices stay
            aligned. We help businesses build new systems, modernize what they
            already run, and scale engineering capacity without fragmenting
            ownership across disconnected vendors.
          </p>
        </FeatureCard>
        <StatsRow
          className="mt-xxl"
          note={home.stats.note}
          items={[...home.stats.items]}
        />
      </Section>

      <Section
        tone="page"
        eyebrow="Our advantage"
        title="Practical engineering. Connected skills."
        description="Four habits that shape how we staff projects and make technology choices."
      >
        <AdvantageGrid items={advantageItems} />
      </Section>

      <section className="w-full bg-canvas py-section">
        <div className="mx-auto w-full max-w-[1584px] px-md md:px-xl">
          <ProcessSteps
            steps={processSteps}
            intro={{
              eyebrow: "Process",
              title: "From requirement to working technology",
              description:
                "Structured engineering from day zero — clear phases, auditable milestones, and practical delivery.",
              cta: primaryCta,
            }}
          />
        </div>
      </section>

      <CtaBand
        title={aboutCta.title}
        description={aboutCta.description}
        primaryCta={aboutCta.primaryCta}
        secondaryCta={secondaryCta}
      />
    </main>
  );
}
