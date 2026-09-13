# Hustlgram — Project Rules

Read this before every task. These rules apply to every file in this repo.

## What this project is

hustlgram.com — the public site for a Montreal growth partner working with online
sellers and local businesses. Not a web design agency. The site sells one thing:
a partner who handles the whole revenue side of the internet — the site, the
systems behind it, and the marketing that drives it.

Stack: Next.js (App Router), TypeScript, Tailwind, shadcn/ui, Motion, Lucide,
Embla. Deployed on Vercel.

## Vocabulary rules — non-negotiable

**Never name a platform, vendor, or tool in user-facing copy.** Platform choice
is an implementation decision made inside a project and belongs in a proposal,
never on a page.

| Write this | Never write this |
| --- | --- |
| Website development | Shopify development, WordPress development |
| Email and SMS marketing | any email platform's product name |
| Automation and AI systems | any automation vendor's name |
| Online sellers / resellers | any single vertical (LEGO, sneakers, etc.) |
| Local businesses | any single trade (detailing, dental, etc.) |
| Custom software and tools | any framework name |

Framework and platform names are fine in code, commits, and internal docs. They
are banned in page copy, metadata, headings, and schema.

Markets are named broadly on purpose. Narrow examples belong inside case studies
as evidence, never in a headline or a page title.

## Never invent

Stop and ask rather than filling any of these in:

- Client metrics, percentages, revenue figures, or results
- Testimonials, client quotes, or names
- Social profile URLs — if a real profile doesn't exist, omit the link entirely
  and omit it from `sameAs` in schema
- Awards, team size, years in business, client counts
- Anything marked `TBD` in the Decisions block below

A placeholder that looks like real proof is worse than a gap. If a value is
missing, leave a `{{TOKEN}}` and list it in the PR description.

## Decisions (owner: Fehd)

Do not proceed on any task that depends on an unresolved item. Ask instead.

- `{{PROMISE_LINE}}` — TBD. Working draft: "We don't just build your website.
  We build the thing that makes you money."
- `{{METHODOLOGY_NAME}}` — TBD. The named four-stage process.
- `{{VOICE}}` — TBD. Either first person singular or first person plural, applied
  everywhere with no mixing.
- `{{RECORDER_APP_NAME}}` — TBD.
- `{{PRICING_TIERS}}` and `{{STARTING_AT}}` — TBD.

## Build standards

**Routes, not anchors.** Every section that could rank is its own route. No
single-page anchor navigation.

**Every page carries its own:** unique `title`, unique `description`, canonical,
OG image, exactly one `h1`, and at least two questions in a FAQ block with
`FAQPage` JSON-LD.

**Metadata.** `metadataBase` is `https://www.hustlgram.com`. Never a preview URL.
Use the App Router Metadata API, one `generateMetadata` or `metadata` export per
route. No hardcoded absolute URLs outside config.

**Schema.** `Organization` in the root layout, `LocalBusiness` on the Montreal
page, `FAQPage` per page with an FAQ, `CreativeWork` or `Article` on case studies.
Every URL inside schema resolves to the production domain.

**Images.** AVIF or WebP only. Every `next/image` has an explicit `sizes` prop
matching its real rendered width. No image is requested at 3840px unless it
actually renders at that width.

**Performance floor, enforced before merge.** Mobile Lighthouse: performance 90+,
accessibility 95+, SEO 100. LCP under 2.5s on simulated 4G. Any PR that drops a
score below floor does not merge.

**Motion.** Respect `prefers-reduced-motion` everywhere. Sticky-scroll pinning is
disabled below the `md` breakpoint. One orchestrated moment per page, not a
fade-and-slide on every section.

**Accessibility.** Visible keyboard focus, semantic landmarks, alt text that
describes the work rather than repeating the project name.

**Proof density.** No page ships with claims only. Each page needs at least one
of: a real number, a real client quote, or a screenshot of real work. If none
exists yet, the page waits.

**CTA hierarchy.** Primary is "Book a call", identical wording everywhere.
Secondary is the growth audit once it exists. Nothing else competes.

## Definition of done, per page

1. Route renders and is linked from navigation and sitemap
2. Metadata, canonical, OG image present and unique
3. Schema validates
4. Lighthouse mobile meets the floor
5. Renders correctly at 375px, 768px, 1440px
6. No `{{TOKEN}}` left unlisted in the PR description
7. No platform or vendor name in any user-facing string

## Working style

- One phase at a time. Do not start the next phase without confirmation.
- Small commits, one concern each, conventional commit messages.
- When a task is ambiguous, ask before building. Rework costs more than a question.

## Framework docs

@AGENTS.md

This repo runs Next.js 16. Several conventions differ from older versions —
`middleware.ts` is deprecated in favour of `proxy.ts`, among others. Version-accurate
docs ship in `node_modules/next/dist/docs/`. Read the relevant guide there before
writing code against an App Router API.
