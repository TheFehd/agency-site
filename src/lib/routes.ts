import type { MetadataRoute } from "next";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

export type IndexableRoute = {
  /** Path relative to the site root, always leading-slash. */
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

/**
 * Every route that should appear in the sitemap.
 *
 * Public, indexable routes only. Prospect-specific routes under /lead-reports are
 * deliberately absent — they are noindex at the segment level and must not be
 * advertised here.
 *
 * Add a route to this list the moment it ships, not later.
 */
export const indexableRoutes: IndexableRoute[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  // /privacy and /terms are withheld until they carry real legal copy — see
  // docs/LAUNCH-BLOCKERS.md. Placeholder text in the index is worse than absent.
];
