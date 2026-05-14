# Service Detail Pages Specification

## Objective
Create a dedicated detail page for each service at:
- /services/unibi
- /services/uniqi
- /services/unifi
- /services/webbuilder
- /services/tion
- /services/viai
- /services/osee

Primary goals:
- increase clarity of each product and consulting offer
- improve conversion quality (qualified leads)
- support richer SEO content than card-only summaries

## Page Information Architecture
Each service page should follow this order:
1. Hero
- service title
- one-line value proposition
- primary CTA: Request demo
- secondary CTA: Talk to solution architect
- hero image (service mock)

2. Problem We Solve
- 3 to 5 pain points written in customer language

3. What The Service Includes
- feature grid (6 to 9 capabilities)
- each capability includes short practical outcome

4. Solution Flow
- 4-step timeline: Discover, Design, Build, Scale

5. Industry Fit
- list of industries with use examples

6. Tech Stack and Integrations
- cloud platforms
- APIs
- data and AI options

7. Trust and Proof
- metrics section (speed, efficiency, uptime, adoption)
- testimonial quote block

8. Engagement Models
- fixed scope
- dedicated squad
- advisory + implementation

9. FAQ
- 5 to 8 real buying questions

10. Final CTA
- contact, meeting booking, or proposal request

## Shared UX Requirements
- Sticky in-page section nav on desktop
- Reading width should stay comfortable (60 to 75ch for long paragraphs)
- Mobile-first spacing and typography
- High contrast for CTA buttons and section headings
- Scroll reveal animation only for key blocks (avoid excessive motion)

## SEO Requirements Per Service
- unique title tag and meta description
- one H1 only
- FAQ schema-ready content block
- descriptive alt text for hero/service visuals
- internal links to related services and contact page

## Content Tone
- practical and specific
- business value first, technical depth second
- avoid vague marketing language

## URL and Slug Rules
- lowercase only
- no spaces
- stable slugs, never auto-generated from mutable titles

## Analytics Events
Track these events:
- service_detail_view (service_slug)
- service_cta_primary_click (service_slug)
- service_cta_secondary_click (service_slug)
- service_faq_expand (service_slug, question_id)
- service_contact_submit (service_slug)
