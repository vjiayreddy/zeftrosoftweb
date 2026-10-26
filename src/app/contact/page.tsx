import { ContactForm } from "@/components/contact/contact-form";
import { PageHero, Section } from "@/components/sections";
import { FeatureCard } from "@/components/ui";
import { contactPage, primaryCta, secondaryCta } from "@/content";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: contactPage.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        description={contactPage.description}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />

      <Section
        tone="canvas"
        eyebrow="Project enquiry"
        title="Share a short brief and we will follow up."
        description="Name, email, and a few sentences about the problem are enough to start."
      >
        <div className="grid grid-cols-1 gap-xl lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
          <ContactForm />
          <FeatureCard className="h-fit self-start">
            <p className="text-body-emphasis text-ink">Direct email</p>
            <p className="mt-sm text-body-sm text-ink-muted">
              Prefer to write yourself?
            </p>
            <a
              href={`mailto:${contactPage.email}`}
              className="mt-md inline-block text-body-emphasis text-primary no-underline hover:underline"
            >
              {contactPage.email}
            </a>
            <p className="mt-md text-caption text-ink-subtle">
              {contactPage.responseNote}
            </p>
          </FeatureCard>
        </div>
      </Section>
    </main>
  );
}
