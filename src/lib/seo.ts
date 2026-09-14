import type { Metadata } from "next";

import { SITE_URL } from "@/content/site";

/**
 * Canonical absolute URL for a route.
 *
 * Normalises the root to have no trailing slash so canonical tags, og:url and the
 * sitemap all emit byte-identical URLs — a canonical that disagrees with the
 * sitemap is a mixed signal.
 */
export const absoluteUrl = (path: string) => {
  const url = new URL(path, SITE_URL);
  const href = url.toString();
  return href.endsWith("/") && url.pathname === "/" ? href.slice(0, -1) : href;
};

type PageMetadataInput = {
  /** Route path, leading slash, e.g. "/privacy". */
  path: string;
  title?: string;
  description?: string;
};

/**
 * Per-route metadata with the canonical and og:url kept in sync.
 *
 * Use this on every route rather than hand-writing `alternates` — og:url silently
 * inheriting the root layout's value is how /privacy and /terms ended up claiming
 * to be the homepage.
 */
export function pageMetadata({
  path,
  title,
  description,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: { canonical: url },
    openGraph: {
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      url,
    },
  };
}
