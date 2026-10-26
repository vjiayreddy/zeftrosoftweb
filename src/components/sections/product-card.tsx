import { FeatureCard, MediaImage } from "@/components/ui";
import type { Product } from "@/content";
import Link from "next/link";

export type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <FeatureCard className="flex h-full flex-col overflow-hidden p-0">
      {product.image ? (
        <Link
          href={product.href}
          className="block border-b border-hairline bg-surface-1"
          tabIndex={-1}
          aria-hidden
        >
          <MediaImage
            image={product.image}
            className="aspect-[16/9] w-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Link>
      ) : null}
      <div className="flex flex-1 flex-col gap-md p-xl">
        <p className="text-caption text-ink-subtle">{product.category}</p>
        <h3 className="font-display text-card-title text-ink">
          <Link
            href={product.href}
            className="text-ink no-underline hover:underline"
          >
            {product.title}
          </Link>
        </h3>
        <p className="flex-1 text-body-sm text-ink-muted">{product.summary}</p>
        <div className="flex flex-wrap gap-xs">
          {product.deployment.map((mode) => (
            <span
              key={mode}
              className="rounded-full border border-hairline bg-surface-1 px-sm py-xxs text-caption text-ink-muted"
            >
              {mode}
            </span>
          ))}
        </div>
        <Link
          href={product.href}
          className="text-body-emphasis text-ink no-underline hover:underline"
        >
          View product
        </Link>
      </div>
    </FeatureCard>
  );
}
