# Launch blockers

Things that are live, or shipped, but not finished. Each entry says what is wrong
and what "done" looks like. Clear an item by fixing it and deleting the entry.

Nothing here blocks a deploy on its own — these block calling the site finished.

---

## Performance floor waived for PR #1

Performance floor waived for PR #1. Cause: Cal.com embed, 1,771 KB / 83
requests, 81% of page weight. Being removed from above-the-fold in Phase 2
(P2-02). Re-measure after Phase 2, no exception thereafter.

Measured on the merged branch, mobile, production build:

| Category | Score | Floor | |
|---|---|---|---|
| Performance | 89 | 90 | waived |
| Accessibility | 97 | 95 | pass |
| SEO | 100 | 100 | pass |

LCP 3.0s against a 2.5s requirement — also waived, same cause.

What was already done, and did not clear it: the render-blocking Google Fonts
`@import` was removed from `shine-text.css` and Poppins self-hosted via
next/font. That took FCP from 1.8s to 1.2s and third-party font requests to
zero, but left LCP unchanged.

The Cal.com embed was deliberately **not** touched. Lazy-loading it behind a
click would likely clear both thresholds, but that changes the booking flow and
belongs with the Phase 2 homepage rework, not a Phase 0 SEO pass.

---

## Placeholder legal copy

`/privacy` and `/terms` render placeholder text that literally says "Replace with
your legal copy before launch."

Both routes are currently:

- excluded from `src/lib/routes.ts`, so they do not appear in the sitemap
- marked `noindex: true` via `pageMetadata()`, with `follow` left on

**Done when:** real privacy and terms copy exists, `noindex: true` is removed from
both pages, and both paths are added back to `indexableRoutes`.

---

## Social profiles

`siteConfig.socials` is empty. The footer renders no social row and the
`Organization` schema omits `sameAs` entirely.

Placeholder links to platform homepages were removed deliberately — see
`CLAUDE.md`, "Never invent". Do not re-add a link until the real profile exists.

**Done when:** real profile URLs are added to `siteConfig.socials`.

---

## Lead report slugs are guessable

`/lead-reports/horse-luxury-group` is named after the client. Anyone who knows a
company was pitched can construct the URL. The pages are `noindex, nofollow,
noarchive` at the segment level and carry an `X-Robots-Tag` header, and there is
no index page or dynamic route, so the set cannot be enumerated — but individual
URLs can be guessed.

The existing slug stays as-is: the link is already with the prospect.

**Every new report must append a random 8-character suffix to the slug**, e.g.
`/lead-reports/acme-holdings-k3f9q2xr`. Generate one with:

```
node -e "console.log(require('crypto').randomBytes(4).toString('hex'))"
```

**Done when:** reports move behind real access control, if they ever need to be
genuinely private rather than merely unlisted.

---

## Vendor names in the lead report

`src/content/lead-reports/horse-luxury-group.ts` names WordPress and Divi.

This is deliberate and is **not** a `CLAUDE.md` vocabulary violation: the rule
bans naming platforms in *our* service copy, and these lines describe the
*prospect's own* stack as audit evidence. Removing them would weaken the finding.

Revisit only if report copy is ever reused as marketing material.
