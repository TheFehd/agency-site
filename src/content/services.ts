import type { LucideIcon } from "lucide-react";
import { Code2, Layers, Palette, Rocket } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "strategy",
    title: "Strategy & positioning",
    description:
      "Clarify your offer, audience, and story before pixels—so every section on the site has a job to do.",
    icon: Layers,
  },
  {
    id: "design",
    title: "UI/UX design",
    description:
      "Premium visuals, thoughtful flows, and conversion-minded layouts that feel bespoke—not template.",
    icon: Palette,
  },
  {
    id: "development",
    title: "Development",
    description:
      "Fast, accessible builds on modern stacks—Next.js, animations that respect motion preferences, SEO-ready.",
    icon: Code2,
  },
  {
    id: "launch",
    title: "Launch & support",
    description:
      "Polished handoff, analytics setup, and post-launch tweaks so momentum doesn’t stop at go-live.",
    icon: Rocket,
  },
];
