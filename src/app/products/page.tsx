import { CtaBand, PageHero, ProductCard, Section } from "@/components/sections";
import {
  home,
  primaryCta,
  products,
  productsPage,
  secondaryCta,
} from "@/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description: productsPage.description,
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow={productsPage.eyebrow}
        title={productsPage.title}
        description={productsPage.description}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />

      <Section
        tone="surface"
        eyebrow="Platform catalog"
        title="Enterprise platforms and developer tooling we build and maintain."
        description="Each product is designed for real deployment models — cloud, hybrid, edge, and air-gapped — with capabilities you can evaluate without invented benchmarks."
      >
        <div className="grid grid-cols-1 gap-md md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
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
