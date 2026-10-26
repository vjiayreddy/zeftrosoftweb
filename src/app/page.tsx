import {
  AdvantageGrid,
  CaseStudyCard,
  ClientLogoMarquee,
  ComparisonCards,
  CtaBand,
  FaqAccordion,
  IndustryCard,
  PageHero,
  PillarCard,
  ProcessSteps,
  ProductCard,
  Section,
  StatsRow,
  TextMarquee,
} from "@/components/sections";
import { LinkButton } from "@/components/ui";
import {
  advantageItems,
  caseStudies,
  clients,
  faqs,
  home,
  industries,
  pillars,
  primaryCta,
  processSteps,
  products,
  secondaryCta,
  site,
} from "@/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...pageMetadata({
    title: site.tagline,
    description: site.description,
    path: "/",
  }),
  title: {
    absolute: `${site.name} · ${site.tagline}`,
  },
};

const featuredWork = caseStudies.slice(0, 3);

export default function Home() {
  return (
    <main>
      <PageHero
        campaign
        eyebrow={home.hero.eyebrow}
        title={home.hero.title}
        description={home.hero.description}
        primaryCta={home.hero.primaryCta}
        secondaryCta={home.hero.secondaryCta}
      />

      <ClientLogoMarquee clients={clients} eyebrow="// We've trusted by" />

      <Section
        tone="canvas"
        eyebrow={home.about.eyebrow}
        title={home.about.title}
        description={home.about.description}
      >
        <StatsRow note={home.stats.note} items={[...home.stats.items]} />
      </Section>

      <Section
        tone="page"
        align="center"
        eyebrow={home.practices.eyebrow}
        title={home.practices.title}
        description={home.practices.description}
        action={
          <LinkButton href="/services" variant="secondary" accent={false}>
            View all services
          </LinkButton>
        }
      >
        <div className="overflow-hidden rounded-xl border border-hairline bg-canvas md:grid md:grid-cols-3 md:divide-x md:divide-hairline">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </Section>

      <Section
        tone="canvas"
        eyebrow={home.work.eyebrow}
        title={home.work.title}
        description={home.work.description}
        action={
          <LinkButton href={home.work.href} variant="secondary" accent={false}>
            See all work
          </LinkButton>
        }
      >
        <div className="grid grid-cols-1 gap-md md:grid-cols-3">
          {featuredWork.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Section>

      <section className="w-full bg-page py-section">
        <div className="mx-auto w-full max-w-[1584px] px-md md:px-xl">
          <ProcessSteps
            steps={processSteps}
            intro={{
              eyebrow: home.process.eyebrow,
              title: home.process.title,
              description: home.process.description,
              cta: primaryCta,
            }}
          />
        </div>
      </section>

      <TextMarquee lines={home.marquee} />

      <Section
        tone="canvas"
        align="center"
        eyebrow={home.comparison.eyebrow}
        title={home.comparison.title}
      >
        <ComparisonCards
          left={home.comparison.left}
          right={home.comparison.right}
          cta={primaryCta}
        />
      </Section>

      <Section
        tone="page"
        eyebrow={home.industries.eyebrow}
        title={home.industries.title}
        description={home.industries.description}
        action={
          <LinkButton
            href={home.industries.href}
            variant="secondary"
            accent={false}
          >
            Browse industries
          </LinkButton>
        }
      >
        <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </Section>

      <Section
        tone="canvas"
        eyebrow={home.products.eyebrow}
        title={home.products.title}
        description={home.products.description}
        action={
          <LinkButton
            href={home.products.href}
            variant="secondary"
            accent={false}
          >
            View products
          </LinkButton>
        }
      >
        <div className="grid grid-cols-1 gap-md md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      <Section
        tone="page"
        eyebrow={home.advantage.eyebrow}
        title={home.advantage.title}
      >
        <AdvantageGrid items={advantageItems} />
      </Section>

      <Section
        tone="canvas"
        eyebrow={home.faq.eyebrow}
        title={home.faq.title}
        align="center"
      >
        <div className="mx-auto w-full max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      <CtaBand
        title={home.cta.title}
        description={home.cta.description}
        primaryCta={home.cta.primaryCta}
        secondaryCta={secondaryCta}
      />
    </main>
  );
}
