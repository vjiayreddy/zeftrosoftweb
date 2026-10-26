import { contact, primaryCta } from "./site";

export const contactPage = {
  eyebrow: "Contact",
  title: "Discuss a project with our team.",
  description:
    "Tell us about the system you need to build, modernize, or scale. We review requirements and propose a clear next step.",
  responseNote: contact.responseNote,
  email: contact.email,
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "you@company.com" },
    company: { label: "Company", placeholder: "Organization name" },
    message: {
      label: "Message",
      placeholder: "What are you looking to build or improve?",
    },
  },
  submitLabel: "Send message",
  mailtoSubject: "Project enquiry from zeftrosoft.com",
  // TODO: Replace mailto submit with Formspree (or similar) endpoint when available.
  submitMode: "mailto" as const,
  cta: primaryCta,
} as const;
