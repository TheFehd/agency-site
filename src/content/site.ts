/**
 * Single source of truth for the production origin.
 *
 * Deliberately hardcoded, not read from an environment variable: a misconfigured
 * NEXT_PUBLIC_SITE_URL silently poisoned metadataBase, every canonical, the sitemap,
 * robots.txt and the Organization schema with a Vercel preview URL. Config belongs
 * in config.
 *
 * www is canonical — the apex 301s here.
 */
export const SITE_URL = "https://www.hustlgram.com";

export const siteConfig = {
  name: "Hustlgram",
  tagline: "Performance-driven websites & growth",
  hero: {
    titleLead: "Busy building premium",
    titleHighlight: "websites",
    titleTail: "for",
    titleWords: ["businesses", "brands", "startups", "founders"] as const,
    description:
      "From strategy and UI/UX design to development and launch, we deliver websites that combine premium visuals with real business results.",
  },
  profile: {
    name: "Fehd",
    role: "Founder · Design & Development",
    bio: "I build premium websites that look sharp and convert — from strategy and design through launch.",
  },
  description:
    "From strategy and UI/UX design to development and launch, we deliver websites that combine premium visuals with real business results.",
  url: SITE_URL,
  email: "hello@hustlgram.com",
  nav: [
    { label: "Book", href: "#book" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  cta: {
    primary: "Book a call",
    primaryHover: "Let's talk",
    secondary: "See our projects",
    secondaryHover: "View work",
  },
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "X", href: "https://x.com" },
  ],
  footer: {
    privacy: "/privacy",
    terms: "/terms",
  },
} as const;

export type SiteConfig = typeof siteConfig;
