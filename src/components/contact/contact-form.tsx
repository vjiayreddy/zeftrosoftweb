"use client";

import { Button, TextArea, TextInput } from "@/components/ui";
import { contactPage } from "@/content";
import { useId, useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us a bit about your project.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please add a few more details (at least 20 characters).";
  }

  return errors;
}

function buildMailto(values: FormState) {
  const body = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Company: ${values.company.trim() || "—"}`,
    "",
    values.message.trim(),
  ].join("\n");

  const params = new URLSearchParams({
    subject: contactPage.mailtoSubject,
    body,
  });

  return `mailto:${contactPage.email}?${params.toString()}`;
}

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[key];
        return next;
      });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      const firstInvalid = Object.keys(nextErrors)[0];
      const field = document.getElementById(`${formId}-${firstInvalid}`);
      field?.focus();
      return;
    }

    // TODO: Swap mailto for Formspree (or similar) when an endpoint is configured.
    window.location.href = buildMailto(values);
    setStatus("ready");
  }

  const fields = contactPage.fields;

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl flex-col gap-lg"
      aria-describedby={`${formId}-note`}
    >
      <div className="flex flex-col gap-xs">
        <label
          htmlFor={`${formId}-name`}
          className="text-body-emphasis text-ink"
        >
          {fields.name.label}
        </label>
        <TextInput
          id={`${formId}-name`}
          name="name"
          autoComplete="name"
          required
          value={values.name}
          error={Boolean(errors.name)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          placeholder={fields.name.placeholder}
          onChange={(event) => updateField("name", event.target.value)}
        />
        {errors.name ? (
          <p
            id={`${formId}-name-error`}
            role="alert"
            className="text-caption text-semantic-error"
          >
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-xs">
        <label
          htmlFor={`${formId}-email`}
          className="text-body-emphasis text-ink"
        >
          {fields.email.label}
        </label>
        <TextInput
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          error={Boolean(errors.email)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          placeholder={fields.email.placeholder}
          onChange={(event) => updateField("email", event.target.value)}
        />
        {errors.email ? (
          <p
            id={`${formId}-email-error`}
            role="alert"
            className="text-caption text-semantic-error"
          >
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-xs">
        <label
          htmlFor={`${formId}-company`}
          className="text-body-emphasis text-ink"
        >
          {fields.company.label}
          <span className="ml-xs font-normal text-ink-subtle">(optional)</span>
        </label>
        <TextInput
          id={`${formId}-company`}
          name="company"
          autoComplete="organization"
          value={values.company}
          placeholder={fields.company.placeholder}
          onChange={(event) => updateField("company", event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-xs">
        <label
          htmlFor={`${formId}-message`}
          className="text-body-emphasis text-ink"
        >
          {fields.message.label}
        </label>
        <TextArea
          id={`${formId}-message`}
          name="message"
          required
          value={values.message}
          error={Boolean(errors.message)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? `${formId}-message-error` : undefined
          }
          placeholder={fields.message.placeholder}
          onChange={(event) => updateField("message", event.target.value)}
        />
        {errors.message ? (
          <p
            id={`${formId}-message-error`}
            role="alert"
            className="text-caption text-semantic-error"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <p id={`${formId}-note`} className="text-body-sm text-ink-muted">
        {contactPage.responseNote} Submitting opens your email client to send
        the message to{" "}
        <a href={`mailto:${contactPage.email}`}>{contactPage.email}</a>.
      </p>

      <div className="flex flex-wrap items-center gap-md">
        <Button type="submit" variant="primary">
          {contactPage.submitLabel}
        </Button>
        {status === "ready" ? (
          <p role="status" className="text-body-sm text-ink-muted">
            If your email app did not open, write to {contactPage.email}{" "}
            directly.
          </p>
        ) : null}
      </div>
    </form>
  );
}
