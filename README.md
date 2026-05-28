# Agency one-page site

Premium one-page marketing site for a digital agency—built with Next.js, Tailwind v4, shadcn/ui, [Motion](https://motion.dev), Embla Carousel, Lucide icons, and an inline [Cal.com](https://cal.com) booking embed.

## Quick start

```bash
cp .env.example .env.local
# Edit NEXT_PUBLIC_CALCOM_LINK with your Cal.com event path
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL for SEO/sitemap |
| `NEXT_PUBLIC_CALCOM_LINK` | For booking | e.g. `your-username/30min` |
| `NEXT_PUBLIC_CALCOM_THEME` | Optional | `dark` or `light` |
| `RESEND_API_KEY` | Optional | Enables contact form email delivery |
| `CONTACT_TO_EMAIL` | With Resend | Inbox for form submissions |
| `CONTACT_FROM_EMAIL` | With Resend | Verified sender in Resend |

Without `RESEND_API_KEY`, the contact API returns success with a `mailto` fallback hint.

## Customize content

Edit files in `src/content/`:

- `site.ts` — name, tagline, nav, socials
- `services.ts` — service cards
- `projects.ts` — portfolio items (add images under `public/projects/`)
- `faq.ts` — accordion Q&A

Design tokens live in `src/app/globals.css` (CSS variables).

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Add environment variables from `.env.example`.
4. Deploy.

## Project structure

```
src/
├── app/              # Routes, API, metadata
├── components/       # UI, sections, layout
├── content/          # Editable copy & data
└── lib/              # Cal.com, motion helpers
```

## Stack notes

| Library | Install | Import |
|---------|---------|--------|
| Motion | `npm install motion` | `import { motion } from "motion/react"` |
| Tailwind | Already configured (v4 + `@tailwindcss/postcss`) | `src/app/globals.css` |
| shadcn/ui | `npx shadcn@latest add <component>` | `@/components/ui/*` |
| Lucide | `npm install lucide-react` | `import { Icon } from "lucide-react"` |
| Embla | `npm install embla-carousel-react` | Used in `projects-carousel.tsx` |

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production build locally
- `npm run lint` — ESLint
