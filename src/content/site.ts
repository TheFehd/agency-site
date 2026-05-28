export const siteConfig = {
  name: "Hustlgram",
  tagline: "Performance-driven websites & growth",
  hero: {
    titlePrefix: "Busy building premium websites for",
    titleWords: ["businesses", "brands", "startups", "founders"] as const,
    description:
      "From strategy and UI/UX design to development and launch, we deliver websites that combine premium visuals with real business results.",
  },
  profile: {
    name: "Your Name",
    role: "Founder · Design & Development",
    bio: "We help businesses launch premium websites that look sharp and convert. This card is a placeholder — we'll refine the story and layout together.",
  },
  description:
    "From strategy and UI/UX design to development and launch, we deliver websites that combine premium visuals with real business results.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hustlgram.com",
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
