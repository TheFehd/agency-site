export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "types",
    question: "What type of websites do you build?",
    answer:
      "Marketing sites, product landing pages, portfolios, and lightweight web apps—typically on Next.js. If you need ecommerce or a complex platform, we’ll scope it clearly upfront.",
  },
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer:
      "Most marketing sites run 4–8 weeks depending on scope, content readiness, and revision rounds. We share a timeline after discovery so you know what happens when.",
  },
  {
    id: "brand",
    question: "Can you work with our existing brand identity?",
    answer:
      "Yes. We can extend your guidelines into a digital system—or help refine typography, color, and components if your brand needs a sharper web expression.",
  },
  {
    id: "seo",
    question: "Do you handle SEO and conversions too?",
    answer:
      "We bake in technical SEO, performance, and conversion patterns (clear CTAs, social proof, form UX). Ongoing SEO retainers are available if you want continued optimization.",
  },
  {
    id: "post-launch",
    question: "What happens after launch?",
    answer:
      "You get a clean handoff, documentation, and optional support windows for fixes and small updates. Many clients keep us on for iterative improvements as the business grows.",
  },
];
