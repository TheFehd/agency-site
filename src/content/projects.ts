export type Project = {
  id: string;
  title: string;
  year: number;
  tags: string[];
  description: string;
  image: string;
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "atlas",
    title: "Atlas Health",
    year: 2026,
    tags: ["Healthcare", "Web app"],
    description:
      "Patient-first platform with calm typography, trust signals, and a booking flow tuned for conversion.",
    image: "/projects/atlas.svg",
    href: "#",
    featured: true,
  },
  {
    id: "northline",
    title: "Northline Capital",
    year: 2025,
    tags: ["Finance", "Marketing site"],
    description:
      "Editorial layout and restrained motion for a boutique firm positioning for institutional clients.",
    image: "/projects/northline.svg",
    href: "#",
    featured: true,
  },
  {
    id: "verde",
    title: "Verde Commerce",
    year: 2025,
    tags: ["Ecommerce", "Brand"],
    description:
      "Product storytelling and performance-focused storefront experience for a DTC launch.",
    image: "/projects/verde.svg",
    href: "#",
  },
  {
    id: "lumen",
    title: "Lumen AI",
    year: 2025,
    tags: ["SaaS", "Product"],
    description:
      "Dark-mode product marketing site with clear pricing narrative and demo-led hero.",
    image: "/projects/lumen.svg",
    href: "#",
  },
];
