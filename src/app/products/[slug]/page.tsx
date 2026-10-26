import {
  CtaBand,
  PageHero,
  ProductCard,
  Section,
} from "@/components/sections";
import { FeatureCard } from "@/components/ui";
import {
  getProduct,
  home,
  primaryCta,
  products,
  secondaryCta,
} from "@/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return pageMetadata({
      title: "Products",
      description: "Zeftrosoft product platforms.",
      path: "/products",
    });
  }

  return pageMetadata({
    title: product.title,
    description: product.summary,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.slug !== product.slug);

  return (
    <main>
      <PageHero
        eyebrow={product.category}
        title={product.title}
        description={product.summary}
        primaryCta={primaryCta}
        secondaryCta={{ label: "All products", href: "/products" }}
        image={product.image}
      />

      <Section
        tone="surface"
        eyebrow="Capabilities"
        title="What this platform is built to do."
      >
        <ul className="grid grid-cols-1 gap-sm sm:grid-cols-2">
          {product.capabilities.map((capability) => (
            <li key={capability}>
              <FeatureCard elevated className="h-full text-body-emphasis text-ink">
                {capability}
              </FeatureCard>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tone="canvas"
        eyebrow="Deployment"
        title="Where and how teams typically run it."
        description="Choose the topology that matches your network, compliance, and ops model."
      >
        <ul className="flex flex-wrap gap-sm">
          {product.deployment.map((mode) => (
            <li key={mode}>
              <FeatureCard className="text-body-emphasis text-ink">
                {mode}
              </FeatureCard>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tone="surface"
        eyebrow="More products"
        title="Other platforms in the catalog."
      >
        <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
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
