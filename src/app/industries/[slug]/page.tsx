import {
  CtaBand,
  IndustryCard,
  PageHero,
  Section,
} from "@/components/sections";
import { FeatureCard } from "@/components/ui";
import {
  getIndustry,
  home,
  industries,
  primaryCta,
  secondaryCta,
} from "@/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    return pageMetadata({
      title: "Industries",
      description: "Industries Zeftrosoft supports.",
      path: "/industries",
    });
  }

  return pageMetadata({
    title: industry.title,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  const related = industries
    .filter((item) => item.slug !== industry.slug)
    .slice(0, 4);

  return (
    <main>
      <PageHero
        eyebrow={industry.highlight}
        title={industry.title}
        description={industry.summary}
        primaryCta={primaryCta}
        secondaryCta={{ label: "All industries", href: "/industries" }}
      />

      <Section
        tone="surface"
        eyebrow="Problem context"
        title="What teams in this domain typically need to solve."
        description={industry.summary}
      >
        <FeatureCard elevated className="max-w-3xl">
          <p className="text-body-lg text-ink">
            We adapt software, AI, and connected-systems delivery to the
            operating constraints of {industry.title.toLowerCase()} — including
            compliance posture, uptime expectations, and how field or clinical
            teams actually work day to day.
          </p>
        </FeatureCard>
      </Section>

      <Section
        tone="canvas"
        eyebrow="Typical capabilities"
        title="What we commonly deliver in this vertical."
      >
        <ul className="grid grid-cols-1 gap-sm sm:grid-cols-2">
          {industry.capabilities.map((capability) => (
            <li key={capability}>
              <FeatureCard className="h-full text-body-emphasis text-ink">
                {capability}
              </FeatureCard>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tone="surface"
        eyebrow="Other industries"
        title="Explore related operating environments."
      >
        <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <IndustryCard key={item.slug} industry={item} />
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
