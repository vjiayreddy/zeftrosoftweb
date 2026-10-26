import { Button, FeatureCard, TextInput } from "@/components/ui";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[1584px] flex-1 flex-col gap-section px-xl py-xxl">
      <header className="flex flex-col gap-md">
        <p className="text-eyebrow text-ink-muted">Design system</p>
        <h1 className="max-w-3xl text-display-md text-ink md:text-display-lg">
          Zeftrosoft on Carbon-inspired tokens
        </h1>
        <p className="max-w-2xl text-body-lg text-ink-muted">
          Tokens from DESIGN.md are wired into Tailwind v4. Square geometry,
          IBM Plex Sans at weight 300 for display, and a single IBM Blue accent.
        </p>
      </header>

      <section className="flex flex-col gap-lg">
        <h2 className="text-headline text-ink">Buttons</h2>
        <div className="flex flex-wrap gap-sm">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </section>

      <section className="flex flex-col gap-lg">
        <h2 className="text-headline text-ink">Cards</h2>
        <div className="grid gap-md md:grid-cols-2">
          <FeatureCard>
            <h3 className="mb-xs text-card-title">Feature card</h3>
            <p className="text-body-sm text-ink-muted">
              Canvas surface with a 1px hairline border. Hierarchy comes from
              borders and surface change — never drop shadows.
            </p>
          </FeatureCard>
          <FeatureCard elevated>
            <h3 className="mb-xs text-card-title">Elevated card</h3>
            <p className="text-body-sm text-ink-muted">
              Same structure on surface-1 for alternate bands and recommended
              tiles.
            </p>
          </FeatureCard>
        </div>
      </section>

      <section className="flex max-w-md flex-col gap-lg">
        <h2 className="text-headline text-ink">Text input</h2>
        <TextInput placeholder="Stay connected" aria-label="Email" />
        <TextInput error defaultValue="invalid@" aria-label="Email error" />
      </section>
    </main>
  );
}
