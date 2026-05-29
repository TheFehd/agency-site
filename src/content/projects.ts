export type Project = {
  id: string;
  title: string;
  year: number;
  tags: string[];
  description: string;
  image: string;
  /** When set, the card crossfades between these images (e.g. ELIX stream + AI views). */
  images?: string[];
  href?: string;
  featured?: boolean;
  recent?: boolean;
};

export const projects: Project[] = [
  {
    id: "elix",
    title: "ELIX",
    year: 2026,
    tags: ["Web app", "Design"],
    description:
      "AI-powered movie streamer that suggests films based on your mood—from the streaming experience to the Mood Matcher AI feature.",
    image: "/projects/elix-stream.png",
    images: ["/projects/elix-stream.png", "/projects/elix-ai.png"],
    featured: true,
  },
  {
    id: "mav-detail",
    title: "MAV Detail",
    year: 2026,
    tags: ["Marketing site", "Sales"],
    description:
      "Premium car detailing studio in South Florida—marketing site built to turn interest into booked services.",
    image: "/projects/mav-detail.png",
    featured: true,
  },
  {
    id: "jmb-brick-co",
    title: "JMB Brick Co.",
    year: 2026,
    tags: ["Design", "Development"],
    description:
      "LEGO marketplace for buying, selling, and collecting sets—design and development for a collector-focused storefront.",
    image: "/projects/jmb-brick-co.png",
    recent: true,
    featured: true,
  },
];
