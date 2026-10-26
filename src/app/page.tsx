import { LinkButton } from "@/components/ui";
import { home } from "@/content";

export default function Home() {
  const { hero } = home;

  return (
    <main className="mx-auto flex w-full max-w-[1584px] flex-1 flex-col gap-lg px-md py-xxl md:px-xl">
      <p className="text-eyebrow text-ink-muted">{hero.eyebrow}</p>
      <h1 className="max-w-3xl text-display-md text-ink md:text-display-lg">
        {hero.title}
      </h1>
      <p className="max-w-2xl text-body-lg text-ink-muted">{hero.description}</p>
      <div className="flex flex-wrap gap-sm">
        <LinkButton href={hero.primaryCta.href} variant="primary">
          {hero.primaryCta.label}
        </LinkButton>
        <LinkButton href={hero.secondaryCta.href} variant="tertiary">
          {hero.secondaryCta.label}
        </LinkButton>
      </div>
      <p className="mt-xl text-body-sm text-ink-subtle">
        Site foundation loaded — full home sections land in the next pass.
      </p>
    </main>
  );
}
