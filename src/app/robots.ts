import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    /**
     * No Disallow for /lead-reports. Those pages are noindex at the segment level,
     * and blocking the crawl here would prevent search engines from ever reading
     * that directive — leaving them indexable via any inbound link.
     */
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
