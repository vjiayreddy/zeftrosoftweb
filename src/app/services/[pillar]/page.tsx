import { CtaBand, PageHero, PillarCard, Section } from "@/components/sections";
import { FeatureCard } from "@/components/ui";
import {
  getPillar,
  home,
  pillars,
  primaryCta,
  secondaryCta,
  type PillarId,
} from "@/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const pillarIds = pillars.map((pillar) => pillar.id);

function isPillarId(value: string): value is PillarId {
  return pillarIds.includes(value as PillarId);
}

export function generateStaticParams() {
  return pillars.map((pillar) => ({ pillar: pillar.id }));
}

type Props = {
  params: Promise<{ pillar: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pillar: pillarId } = await params;
  if (!isPillarId(pillarId)) {
    return pageMetadata({
      title: "Services",
      description: "Zeftrosoft engineering services.",
      path: "/services",
    });
  }

  const pillar = getPillar(pillarId);
  if (!pillar) {
    return pageMetadata({
      title: "Services",
      description: "Zeftrosoft engineering services.",
      path: "/services",
    });
  }

  return pageMetadata({
    title: pillar.title,
    description: pillar.summary,
    path: `/services/${pillar.id}`,
  });
}

export default async function PillarDetailPage({ params }: Props) {
  const { pillar: pillarId } = await params;
  if (!isPillarId(pillarId)) {
    notFound();
  }

  const pillar = getPillar(pillarId);
  if (!pillar) {
    notFound();
  }

  const relatedPillars = pillars.filter((item) => item.id !== pillar.id);

  return (
    <main>
      <PageHero
        eyebrow={pillar.eyebrow}
        title={pillar.title}
        description={pillar.intro}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />

      <Section
        tone="surface"
        eyebrow={`${pillar.number} · ${pillar.label}`}
        title="What we offer"
        description={pillar.summary}
      >
        <ul className="grid grid-cols-1 gap-sm sm:grid-cols-2 lg:grid-cols-3">
          {pillar.offerings.map((offering) => (
            <li key={offering}>
              <FeatureCard elevated className="h-full text-body-emphasis text-ink">
                {offering}
              </FeatureCard>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tone="canvas"
        eyebrow="Focus areas"
        title="Where this practice creates the most value."
      >
        <div className="grid grid-cols-1 gap-md md:grid-cols-3">
          {pillar.focusAreas.map((area) => (
            <FeatureCard key={area.title} className="flex flex-col gap-sm">
              <h3 className="text-subhead text-ink">{area.title}</h3>
              <p className="text-body-sm text-ink-muted">{area.description}</p>
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section
        tone="surface"
        eyebrow="Related practices"
        title="Explore the other disciplines."
        description="Most engagements touch more than one pillar. Start with the practice that matches your immediate need."
      >
        <div className="grid grid-cols-1 gap-md md:grid-cols-2">
          {relatedPillars.map((item) => (
            <PillarCard key={item.id} pillar={item} />
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
