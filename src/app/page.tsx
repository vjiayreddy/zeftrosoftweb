import {
  AdvantageGrid,
  CaseStudyCard,
  ClientLogoMarquee,
  CtaBand,
  IndustryCard,
  PageHero,
  PillarCard,
  ProcessSteps,
  ProductCard,
  Section,
} from "@/components/sections";
import { LinkButton } from "@/components/ui";
import {
  advantageItems,
  caseStudies,
  clients,
  home,
  industries,
  pillars,
  processSteps,
  products,
  secondaryCta,
  site,
} from "@/content";
import { homeHeroImage } from "@/lib/media";
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
        eyebrow={home.hero.eyebrow}
        title={home.hero.title}
        description={home.hero.description}
        primaryCta={home.hero.primaryCta}
        secondaryCta={home.hero.secondaryCta}
        image={homeHeroImage}
      />

      <ClientLogoMarquee
        clients={clients}
        eyebrow="Organisations we work with"
      />

      <Section
        tone="surface"
        eyebrow={home.practices.eyebrow}
        title={home.practices.title}
        description={home.practices.description}
        action={
          <LinkButton href="/services" variant="tertiary">
            View all services
          </LinkButton>
        }
      >
        <div className="grid grid-cols-1 gap-md md:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </Section>

      <Section
        tone="canvas"
        eyebrow={home.process.eyebrow}
        title={home.process.title}
        description={home.process.description}
      >
        <ProcessSteps steps={processSteps} />
      </Section>

      <Section
        tone="surface"
        eyebrow={home.industries.eyebrow}
        title={home.industries.title}
        description={home.industries.description}
        action={
          <LinkButton href={home.industries.href} variant="tertiary">
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
          <LinkButton href={home.products.href} variant="tertiary">
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
        tone="surface"
        eyebrow={home.work.eyebrow}
        title={home.work.title}
        description={home.work.description}
        action={
          <LinkButton href={home.work.href} variant="tertiary">
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

      <Section
        tone="canvas"
        eyebrow={home.advantage.eyebrow}
        title={home.advantage.title}
      >
        <AdvantageGrid items={advantageItems} />
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
