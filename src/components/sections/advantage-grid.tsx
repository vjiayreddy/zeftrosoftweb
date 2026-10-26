import { FeatureCard } from "@/components/ui";
import type { AdvantageItem } from "@/content";

export type AdvantageGridProps = {
  items: AdvantageItem[];
};

export function AdvantageGrid({ items }: AdvantageGridProps) {
  return (
    <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <FeatureCard key={item.title} className="flex flex-col gap-sm">
          <h3 className="text-subhead text-ink">{item.title}</h3>
          <p className="text-body-sm text-ink-muted">{item.description}</p>
        </FeatureCard>
      ))}
    </div>
  );
}
