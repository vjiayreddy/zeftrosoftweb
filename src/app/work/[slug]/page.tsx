import {
  CaseStudyCard,
  CtaBand,
  PageHero,
  Section,
} from "@/components/sections";
import { FeatureCard } from "@/components/ui";
import {
  caseStudies,
  getCaseStudy,
  home,
  primaryCta,
  secondaryCta,
} from "@/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return pageMetadata({
      title: "Our Work",
      description: "Engineering case studies from Zeftrosoft.",
      path: "/work",
    });
  }

  return pageMetadata({
    title: study.title,
    description: study.summary,
    path: `/work/${study.slug}`,
  });
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const related = caseStudies
    .filter(
      (item) => item.slug !== study.slug && item.domain === study.domain,
    )
    .slice(0, 3);

  const fallbackRelated =
    related.length > 0
      ? related
      : caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3);

  return (
    <main>
      <PageHero
        eyebrow={study.domain}
        title={study.title}
        description={study.summary}
        primaryCta={primaryCta}
        secondaryCta={{ label: "All work", href: "/work" }}
      />

      {study.framing === "representative" ? (
        <Section tone="surface">
          <FeatureCard className="max-w-3xl">
            <p className="text-body-sm text-ink-muted">
              Representative engagement — client identity anonymized. Details
              describe the problem type, technical approach, and typical
              outcomes rather than a named customer reference.
            </p>
          </FeatureCard>
        </Section>
      ) : null}

      <Section
        tone={study.framing === "representative" ? "canvas" : "surface"}
        eyebrow="Challenge"
        title="What needed to change."
      >
        <FeatureCard elevated className="max-w-3xl">
          <p className="text-body-lg text-ink">{study.challenge}</p>
        </FeatureCard>
      </Section>

      <Section
        tone={study.framing === "representative" ? "surface" : "canvas"}
        eyebrow="Approach"
        title="How we engineered the solution."
      >
        <FeatureCard elevated className="max-w-3xl">
          <p className="text-body-lg text-ink">{study.approach}</p>
        </FeatureCard>
      </Section>

      <Section
        tone={study.framing === "representative" ? "canvas" : "surface"}
        eyebrow="Stack"
        title="Technologies used on the engagement."
      >
        <ul className="flex flex-wrap gap-sm">
          {study.stack.map((item) => (
            <li key={item}>
              <FeatureCard className="text-body-emphasis text-ink">
                {item}
              </FeatureCard>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tone={study.framing === "representative" ? "surface" : "canvas"}
        eyebrow="Outcome"
        title="What improved for the operators and systems."
      >
        <FeatureCard elevated className="max-w-3xl">
          <p className="text-body-lg text-ink">{study.outcome}</p>
        </FeatureCard>
      </Section>

      <Section
        tone={study.framing === "representative" ? "canvas" : "surface"}
        eyebrow="More work"
        title="Related case summaries."
      >
        <div className="grid grid-cols-1 gap-md md:grid-cols-3">
          {fallbackRelated.map((item) => (
            <CaseStudyCard key={item.slug} study={item} />
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
