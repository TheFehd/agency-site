// WebP rather than AVIF: these are static imports, and this version of Turbopack
// cannot encode AVIF through the static-import pipeline (it warns and emits the
// file unprocessed). Everything served by path or next/image is AVIF.
import luxRentLogo from "@/assets/lead-reports/competitors/lux-rent-dubai.webp";
import octaneLogo from "@/assets/lead-reports/competitors/octane-rent.webp";
import superiorLogo from "@/assets/lead-reports/competitors/superior-rental.webp";

export const horseLuxuryGroupReport = {
  slug: "horse-luxury-group",
  title: "Horse Luxury Group — Website Revenue Audit",
  tag: "Website Revenue Audit",
  hero: {
    eyebrow: "Confidential report",
    title: "Website Revenue Audit",
    client: "Horse Luxury Group",
    domain: "horseluxurygroup.com",
    sub: "An analysis of where the site loses ready-to-pay customers, what competitors are doing differently, and the estimated monthly revenue impact.",
    meta: [
      { key: "Subject", value: "Horse Luxury Group" },
      { key: "Reputation", value: "4.9 ★ · 89 reviews" },
      { key: "Critical leaks", value: "6 found" },
      { key: "Prepared for", value: "Sheikh Bader Jr" },
    ],
  },
  verdict: {
    tag: "Bottom line",
    text: "You've built a brand celebrities rent from. But the site has no clear way to act, feels years behind your fleet, and on mobile it's slow and awkward to navigate — so ready buyers bounce before they ever reach WhatsApp.",
    underline: "no clear way to act",
  },
  leaks: [
    {
      id: "LEAK 01",
      icon: "booking" as const,
      name: "No booking system",
      severity: "critical" as const,
      chart: "down" as const,
      cost: "~15%",
      costLabel: "of ready buyers lost at booking",
      body: "A guest ready to rent a Lamborghini at 2am has no way to confirm on the site. The only path is leaving for WhatsApp and waiting on a human. Every serious competitor lets them book and pay instantly — so the high-intent customer books with whoever replies first. The single most expensive gap on the site.",
      fix: "Real-time booking with date/car selection, instant confirmation, online deposit — capture intent the second it peaks.",
    },
    {
      id: "LEAK 02",
      icon: "speed" as const,
      name: "Mobile speed",
      severity: "critical" as const,
      chart: "volatile" as const,
      cost: "53%",
      costLabel: "bounce if mobile load > 3s",
      body: "Most of your traffic comes from Instagram — meaning mobile. Google's data is blunt: over half of mobile visitors abandon a page that takes more than 3 seconds. Your live PageSpeed score is 57/100 on mobile, with a 7.0s largest contentful paint — nearly double what Google considers acceptable. A heavy WordPress/Divi build with large unoptimized images is exactly that profile.",
      fix: "Rebuild on a lightweight stack, next-gen compressed images, sub-2-second mobile load.",
    },
    {
      id: "LEAK 03",
      icon: "proof" as const,
      name: "Wasted social proof",
      severity: "high" as const,
      chart: "down" as const,
      cost: "High",
      costLabel: "trust buried below the fold",
      body: '4.9 stars on 89 reviews, TripAdvisor Travelers\' Choice, and "celebrities rent from us for music videos" — elite-tier trust, hidden in body paragraphs instead of being the first thing a visitor sees. The proof that closes deals is doing none of the closing.',
      fix: "Lead with the proof: reviews, awards and celebrity credibility above the fold where it converts.",
    },
    {
      id: "LEAK 04",
      icon: "template" as const,
      name: "Template feel vs. price point",
      severity: "high" as const,
      chart: "down" as const,
      cost: "Leak",
      costLabel: "credibility undercut at price point",
      body: 'The layout, typography, and Divi template styling read as dated next to Dubai competitors — and a public visitor counter in the footer quietly signals "small operation" to a customer about to spend thousands a day. At this price point the website is part of the product. Right now it looks like it was built years ago.',
      fix: "Bespoke, current design that matches the fleet: remove the counter, modern type and spacing, a premium feel clients already expect from you in person.",
    },
    {
      id: "LEAK 05",
      icon: "cta" as const,
      name: "No call-to-action",
      severity: "critical" as const,
      chart: "down" as const,
      cost: "High",
      costLabel: "intent with nowhere to go",
      body: "There is no clear primary action on the homepage — no Book Now, Rent a Car, Get a Quote, or even a sticky contact button above the fold. Visitors who are ready to move have to hunt for what to do next. Without a CTA, traffic from Instagram and Google bleeds off before it becomes an inquiry.",
      fix: "One obvious primary CTA on every key page — book, quote, or WhatsApp — fixed in the header and repeated at decision points through the flow.",
    },
    {
      id: "LEAK 06",
      icon: "menu" as const,
      name: "Mobile menu & navigation",
      severity: "high" as const,
      chart: "volatile" as const,
      cost: "Friction",
      costLabel: "menu buried on mobile",
      body: "On mobile the navigation is hard to reach — buried behind a small menu control while a large cookie-consent banner dominates the lower screen. Core pages like fleet, pricing, and contact are not one tap away. For Instagram traffic that lands on mobile, this is the first interaction with your brand — and it already feels like work.",
      fix: "Clean mobile nav with fleet and booking upfront, slim cookie UX that doesn't block the menu, and a sticky header CTA so nothing important is more than one tap away.",
    },
  ],
  speed: {
    currentScore: "57",
    currentOffset: 141,
    targetScore: "90+",
    targetOffset: 33,
    note: "Audited via Google PageSpeed Insights · Mobile · horseluxurygroup.com",
    categories: [
      { label: "Performance", value: "57", tone: "bad" as const },
      { label: "Accessibility", value: "79", tone: "warn" as const },
      { label: "Best Practices", value: "77", tone: "warn" as const },
      { label: "SEO", value: "92", tone: "good" as const },
    ],
    vitals: [
      { label: "First Contentful Paint", value: "3.6 s", tone: "bad" as const },
      { label: "Largest Contentful Paint", value: "7.0 s", tone: "bad" as const },
      { label: "Total Blocking Time", value: "380 ms", tone: "warn" as const },
      { label: "Speed Index", value: "5.1 s", tone: "warn" as const },
      { label: "Cumulative Layout Shift", value: "0.036", tone: "good" as const },
    ],
    stats: [
      {
        value: "53%",
        label: "of mobile visitors leave if a page takes over 3 seconds to load",
      },
      {
        value: "20%",
        label: "drop in conversions for every additional second of mobile load",
      },
      {
        value: "32%",
        label: "jump in bounce probability going from 1 to 3 seconds",
      },
    ],
    source:
      "Sources: Google PageSpeed Insights (mobile audit) · Google / SOASTA mobile research · Think with Google industry benchmarks.",
  },
  competitors: {
    rows: [
      {
        name: "Lux Rent Dubai",
        url: "https://luxrentdubai.com",
        tagline: "Luxury and sports car rental in Dubai",
        logo: luxRentLogo.src,
        logoFit: "square" as const,
        booking: "Yes",
        payment: "5 currencies",
      },
      {
        name: "Superior Rental",
        url: "https://superiorrental.ae",
        logo: superiorLogo.src,
        booking: "Real-time",
        payment: "Yes",
      },
      {
        name: "Octane Rent",
        url: "https://octane.rent",
        logo: octaneLogo.src,
        booking: "Checkout",
        payment: "Auto-priced",
      },
      {
        name: "Horse Luxury Group",
        url: "https://horseluxurygroup.com",
        booking: "WhatsApp only",
        payment: "None",
        highlight: true,
        negative: true,
      },
    ],
    note: "Your brand is stronger than most of them. Your booking experience is behind all of them — that's the gap, and the easiest one in this report to win.",
    noteHighlight: "booking experience is behind all of them",
  },
  math: {
    lines: [
      { label: "Site visitors per month", value: "~2,000 (your number)", editable: true },
      { label: "High-intent / ready to book", value: "~8% → 160" },
      { label: "Lost at the booking gap (conservative 15%)", value: "24 bookings" },
      { label: "Average booking value", value: "3,000 AED (your number)", editable: true },
    ],
    total: "~72,000 AED",
    footnote:
      "≈ 864,000 AED a year walking out the back door — from one fixable leak. The rebuild pays for itself in days, not months.",
  },
  build: [
    {
      icon: "booking" as const,
      title: "Instant booking engine",
      description:
        "Pick car, pick dates, confirm and pay — no leaving the site, no waiting.",
    },
    {
      icon: "speed" as const,
      title: "Sub-2-second mobile build",
      description:
        "Lightweight, image-optimized, built for the Instagram traffic that drives your business.",
    },
    {
      icon: "proof" as const,
      title: "Proof-first design",
      description:
        "Reviews, awards and celebrity credibility leading the page, working as your closer.",
    },
    {
      icon: "template" as const,
      title: "A look that matches the fleet",
      description:
        "Bespoke, premium, unmistakably yours — a site as serious as the cars on it.",
    },
    {
      icon: "cta" as const,
      title: "Clear CTAs everywhere",
      description:
        "Book, quote, or contact — one obvious action on every page, sticky on mobile, impossible to miss.",
    },
    {
      icon: "menu" as const,
      title: "Mobile-first navigation",
      description:
        "Fast menu access, unobtrusive cookie UX, and fleet/booking paths that are one tap away.",
    },
  ],
  cta: {
    title: "Book the call. See the rebuild live.",
    description:
      "15 minutes — I'll share the interactive demo, walk through every number in this report, and map exactly what we'd ship.",
    button: "Book 15 min call",
    href: "https://hustlgram.com",
  },
  footer: {
    sig: "Built for brands that deserve better.",
    author: "Fehd, Hustlgram",
    meta: "HUSTLGRAM · WEBSITE REVENUE AUDIT · HORSE LUXURY GROUP",
  },
} as const;

export type LeadReport = typeof horseLuxuryGroupReport;
