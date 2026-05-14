# Style Refactor Guide

## Goal
Refactor monolithic `src/index.css` into page/component-scoped styles while preserving a shared visual system.

## New CSS Architecture

### Global entry
- `src/index.css`
  - only imports legacy utility styles and base system tokens.

### Shared foundation
- `src/styles/base.css`
  - fonts
  - color tokens and root variables
  - typography defaults
  - section rhythm and container alignment
  - shared eyebrow utility and responsive spacing

### Component styles
- `src/components/layout/NavBar.css`
- `src/components/layout/Footer.css`
- `src/components/business/OurServices.css`
- `src/components/business/TestimonialsSection.css`
- `src/components/business/AboutUs.css`
- `src/components/business/OurClients.css`
- `src/components/business/TimelineVision.css`
- `src/components/landing/AiAppsSection.css`

### Page styles
- `src/pages/ServicesPage.css`
- `src/pages/AboutUsPage.css`
- `src/pages/ServiceDetailPage.css`

## Import Wiring
Each page/component now imports its own stylesheet directly in its `.tsx` file.

## Service UI Improvements

### Service Card (`OurServices.css`)
- stronger title contrast and weight
- futuristic accent underline under title
- cleaner description readability
- compact gradient CTA pill (`Explore`)
- more premium card surface and hover edge

### Service Detail (`ServiceDetailPage.css`)
- stronger subtitle contrast and readability
- hero glow accent for futuristic edge
- cleaner title balance
- stronger section-title hierarchy inside feature/detail blocks

## Why This Is Better
- Locality: styles are maintained where components live.
- Safety: less chance of unrelated regressions from global edits.
- Consistency: shared token/rhythm in `base.css`, visual expression in component/page files.
- Scalability: easy to evolve one section without growing global CSS debt.

## Maintenance Rules
1. Put global tokens/typography/spacing in `base.css`.
2. Put feature-specific rules in component/page CSS files only.
3. Avoid adding new non-token visual rules back into `index.css`.
4. Keep class names feature-scoped (`service-*`, `modern-about-*`, `ai-app-*`).
