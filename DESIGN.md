---
version: alpha
name: Zeftrosoft-agenio
description: |
  A photography-light AI agency marketing system inspired by Agenio: light gray page canvas,
  white section bands, lime (#98FF03) as the single chromatic accent, Space Grotesk display
  lockups with tight negative tracking, Urbanist UI type, soft rounded CTAs with diffused
  shadow, blueprint grid backdrops, and lime pixel-step decorations. Chrome stays near-monochrome;
  lime marks eyebrows, availability bars, and CTA leading badges only.

colors:
  primary: "#98FF03"
  on-primary: "#030712"
  ink: "#030712"
  ink-muted: "#6b7280"
  ink-subtle: "#9ca3af"
  canvas: "#ffffff"
  page: "#f3f4f6"
  surface-1: "#f3f4f6"
  surface-2: "#e5e7eb"
  inverse-canvas: "#030712"
  inverse-surface-1: "#111827"
  inverse-ink: "#ffffff"
  inverse-ink-muted: "#9ca3af"
  hairline: "#e5e7eb"
  hairline-strong: "#030712"
  accent-hover: "#7acc02"
  accent-deep: "#5a9900"
  semantic-success: "#16a34a"
  semantic-warning: "#f59e0b"
  semantic-error: "#dc2626"
  semantic-info: "#030712"

typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 96px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.04em
    textTransform: uppercase
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -0.03em
  display-md:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: -0.02em
  headline:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.02em
  card-title:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.01em
  subhead:
    fontFamily: Urbanist
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: Urbanist
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body:
    fontFamily: Urbanist
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: Urbanist
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-emphasis:
    fontFamily: Urbanist
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  caption:
    fontFamily: Urbanist
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.02em
  button:
    fontFamily: Urbanist
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  eyebrow:
    fontFamily: Urbanist
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.08em
    textTransform: uppercase

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  button-primary-pressed:
    backgroundColor: "{colors.inverse-surface-1}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  button-danger:
    backgroundColor: "{colors.semantic-error}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card-elevated:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  hero-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xl}"
    padding: 48px
  cta-banner:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: 48px
  text-input:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 0
  text-input-focused:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 0
  text-input-error:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 12px 0
  customer-logo-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 24px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    height: 64px
  utility-bar:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    height: 36px
  footer:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 64px 32px
---

## Overview

Zeftrosoft’s marketing chrome follows an Agenio-inspired agency system: `{colors.page}` light gray page ground, white `{colors.canvas}` section bands, charcoal `{colors.ink}`, and a single lime accent `{colors.primary}` (`#98FF03`). Display type is **Space Grotesk** (500, tight tracking, often uppercase). UI and body use **Urbanist**. CTAs are black rounded pills (`{rounded.md}`) with a soft diffused shadow and an optional lime leading square. Depth comes from soft shadows on CTAs/cards and a blueprint CSS grid — not Carbon flat squares.

**Key Characteristics:**
- Lime accent reserved for eyebrows (square marker), availability bar, CTA badges, and decorative pixel corners
- Primary CTA is black (`{colors.ink}`) with white label — not lime fill (lime fails body contrast)
- Section eyebrows: uppercase + lime 8px square
- Soft CTA shadow: `0 12px 32px rgba(3,7,18,0.18)`
- Blueprint grid utility on heroes and pricing-like panels
- Dark inverse bands for closing CTA / contact / footer

## Colors

### Brand & Accent
- **Lime** (`{colors.primary}`): Accent only — never long body text on lime
- **On Primary** (`{colors.on-primary}`): Near-black for icons inside lime badges
- **Accent Hover / Deep**: Darker lime for interactive states on lime surfaces

### Surface
- **Page** (`{colors.page}`): Default body background (`#f3f4f6`)
- **Canvas** (`{colors.canvas}`): White section panels
- **Surface 1 / 2**: Soft gray bands and dividers
- **Inverse**: Near-black footer and contact bands

### Text
- **Ink** / **Ink Muted** / **Ink Subtle** for hierarchy on light surfaces
- **Inverse Ink** variants on dark bands

## Typography

- Display: Space Grotesk 500, negative letter-spacing; hero often uppercase
- UI/body: Urbanist 400–600
- Eyebrow: Urbanist 12px uppercase tracked (`0.08em`) with lime square

## Layout

- 4px base spacing; `{spacing.section}` 96px vertical rhythm
- Max content width ~1440–1584px with `px-md` / `lg:px-xl` gutters
- Hairline column grids for service strips; rounded cards elsewhere

## Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat | Body, nav |
| 1 | 1px hairline | Logo cells, service columns |
| 2 | Soft shadow | Primary CTAs, featured cards |
| 3 | Focus ring | 2px `{colors.ink}` outline |

## Components

- **button-primary**: Black fill, white text, `{rounded.md}`, soft shadow; optional lime square + arrow
- **button-secondary**: White fill, ink text, 1px hairline border, soft shadow
- **feature-card**: White, `{rounded.lg}`, hairline or soft shadow
- **cta-banner**: Inverse canvas full-bleed with lime geometric accents
- **text-input**: Underline-only on dark/light forms (`/LABEL` slash captions)
- **utility-bar**: Black bar, lime availability copy
- **footer**: Inverse canvas

## Do's and Don'ts

### Do
- Keep lime scarce — eyebrows, badges, decorations
- Use black primary CTAs for contrast
- Pair Space Grotesk display with Urbanist body
- Honor `prefers-reduced-motion` on marquees and GSAP

### Don't
- Put long paragraphs on lime backgrounds
- Reintroduce IBM Blue or square-only Carbon chrome
- Add a second brand accent color
- Invent pricing/team/blog content without product ownership

## Responsive

- Display-xl: ~96px → 64px tablet → 40px mobile
- Nav: hamburger below `lg`
- Service 4-col → 2 → 1; process sticky left collapses to stacked
