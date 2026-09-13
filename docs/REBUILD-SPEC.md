# Hustlgram Rebuild — Build Spec

Work through phases in order. Stop at the end of each phase and report before
starting the next. `CLAUDE.md` rules apply to everything here.

Task IDs match the roadmap. Reference them in commits: `fix(seo): P0-01 …`

---

## Phase 0 — Stop the bleeding

No dependencies. Do all of this first, in one branch, one PR.

### P0-01 — Fix metadataBase

`metadataBase` currently resolves to a Vercel preview URL. It poisons OG tags,
schema, and the sitemap — 8 references on the homepage alone.

- Set `metadataBase: new URL('https://www.hustlgram.com')` in the root layout
- Add `NEXT_PUBLIC_SITE_URL=https://www.hustlgram.com` and read from it
- Grep the repo for `vercel.app` and remove every occurrence

**Verify:** `curl -s https://www.hustlgram.com | grep -c vercel` returns 0.

### P0-02 — Sitemap and robots

The live sitemap contains one entry and it points at the preview domain.
`robots.txt` points at the preview domain's sitemap.

- Replace with `app/sitemap.ts` generating entries from the real route list
- Replace with `app/robots.ts` referencing the production sitemap
- Include only routes that exist right now

### P0-03 — Canonical tags

There is no canonical tag anywhere on the site. Add one per route via the
Metadata API `alternates.canonical`, absolute, production domain.

### P0-04 — Kill the duplicate site

`agency-site-azure-five.vercel.app` returns 200 and is fully indexable. It's a
duplicate of the whole site competing with the real domain.

- Add a middleware or `next.config` redirect: any host that isn't
  `www.hustlgram.com` gets a 301 to the same path on the production host
- Confirm the preview host now redirects rather than serving

### P0-05 — Duplicated H1 word

The hero H1 renders as `businessesbusinesses` in the DOM. The rotating-text
component is leaking a duplicate node into the static markup.

- Fix so exactly one instance of the word exists in the server-rendered HTML
- The animated variant must not add extra text nodes to the accessibility tree

**Verify:** view-source and confirm a single occurrence.

### P0-06 — Placeholder links

Footer social links point at `linkedin.com`, `instagram.com`, `x.com` homepages.
Same URLs appear in the `Organization` schema `sameAs` array.

- Remove them from both places
- Only re-add when a real profile URL is supplied

### P0-07 — Image pipeline

Every image is PNG or JPG requested at `w=3840&q=75`, including the hero portrait.

- Convert source assets to AVIF with WebP fallback
- Add an explicit `sizes` prop to every `next/image` matching real rendered width
- Set `priority` on the hero image only
- Configure `formats: ['image/avif','image/webp']` in `next.config`

### P0-08 — Own-domain assets

Generate the OG image on the production domain, add a real favicon set and
`apple-touch-icon`.

**Phase 0 done when:** Lighthouse mobile SEO is 100, no `vercel.app` string
appears in production HTML, preview host 301s, sitemap lists real URLs.

---

## Phase 1 — Content assets (blocked on Fehd)

No code. Do not start Phase 2 until the tokens in `CLAUDE.md` are filled and
these files exist in `/content`:

- `promise.md`, `methodology.md`, `founder-story.md`, `pricing.md`
- `case-studies/elix.md`, `jmb-brick-co.md`, `mav-detail.md`, `[recorder-app].md`
  — each: problem, what we found, what we built, result
- `testimonials.json`

If asked to start Phase 2 while these are missing, say what's missing instead.

---

## Phase 2 — Core rebuild

The relaunch. Everything below ships together.

### P2-01 — Routes replace anchors

Convert the single-page anchor nav to real routes. Header nav becomes:
Services · Work · About · Pricing · Contact. Keep the existing visual language.

### P2-02 — Homepage

Sections in order:
1. Hero — `{{PROMISE_LINE}}`, primary CTA "Book a call", secondary "See our work"
2. The problem, stated in the customer's words, not the service list
3. Two market doors — one card to `/online-sellers`, one to `/local-businesses`
4. `{{METHODOLOGY_NAME}}` — four stages, one line each, link to `/process`
5. Selected work — three case study cards, real results visible on the card
6. Proof — testimonials with name, business, photo
7. FAQ — five questions with `FAQPage` schema
8. Close — book a call

### P2-03 — `/services`

Six categories on one page, each with a one-paragraph description and a link to
its future detail page. Six categories: website development, conversion
optimization, email and SMS marketing, SEO, automation, custom software. No
platform names anywhere on this page.

### P2-04 to P2-08 — Work

- `/work` index: four cards, filterable by market
- `/work/elix` — AI product design and build
- `/work/jmb-brick-co` — full stack for an online seller
- `/work/mav-detail` — local business, interest into booked jobs
- `/work/{{RECORDER_APP_NAME}}` — own product, label it as in development

Case study template: hero image, the situation, what we found, what we built
(with screenshots), the result (real numbers only), a client quote, next-project
CTA. Same template, unique content, no shared boilerplate paragraphs.

### P2-09 — `/about`

Founder story from `/content/founder-story.md`, real photo, name visible.
`{{VOICE}}` applied consistently. Include why the work is done this way, not a
credentials list.

### P2-10 — Footer

Real links only, Montreal line, email, sitemap link, privacy and terms.

### P2-11 / P2-12 — Metadata and schema

Per-route metadata and canonical. `Organization` schema in root layout with
correct production URLs. `FAQPage` on the homepage.

**Phase 2 done when:** every route meets the definition of done in `CLAUDE.md`,
sitemap regenerated, no unlisted tokens remain.

---

## Phase 3 — Market pages

- `/online-sellers` — storefront, listings, repeat buyers, manual inventory work.
  Speak to resellers and product sellers generally, never one vertical.
- `/local-businesses` — getting found locally, trust, phone tag, no follow-up.
- `/process` — how an engagement runs, week by week
- `/pricing` — three tiers, starting-at anchor, what's excluded
- `/contact` — add budget range and timeline fields, keep the form short

Each market page needs its own FAQ, its own proof, its own screenshots.

---

## Phase 4 — Service pages, one per week

`/services/website-development`, `/conversion-optimization`,
`/email-sms-marketing`, `/seo`, `/automation`, `/custom-software`

**Do not batch-generate these.** Six near-identical pages built from one template
with swapped nouns is a doorway pattern and will be demoted. One page per PR,
each with unique proof, screenshots, and FAQ.

---

## Phase 5 — Montreal and French

`/montreal` with `LocalBusiness` schema and service area. French routes for home,
services, and both market pages. `hreflang` pairs, language switcher, matching
NAP everywhere.

---

## Phase 6 — Engine

`/audit` lead capture with a real output. `/insights` content routes. Internal
linking pass between markets, services, and case studies. Monthly Search Console
review; merge or prune routes earning nothing.
