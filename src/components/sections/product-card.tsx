import { FeatureCard } from "@/components/ui";
import type { Product } from "@/content";
import Link from "next/link";

export type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <FeatureCard className="flex h-full flex-col gap-md p-xl">
      <p className="text-caption text-ink-subtle">{product.category}</p>
      <h3 className="text-card-title text-ink">
        <Link
          href={product.href}
          className="text-ink no-underline hover:text-primary"
        >
          {product.title}
        </Link>
      </h3>
      <p className="flex-1 text-body-sm text-ink-muted">{product.summary}</p>
      <div className="flex flex-wrap gap-xs">
        {product.deployment.map((mode) => (
          <span
            key={mode}
            className="border border-hairline bg-surface-1 px-sm py-xxs text-caption text-ink-muted"
          >
            {mode}
          </span>
        ))}
      </div>
      <Link
        href={product.href}
        className="text-body-emphasis text-primary no-underline hover:underline"
      >
        View product
      </Link>
    </FeatureCard>
  );
}
