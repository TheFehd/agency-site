import type { NextConfig } from "next";

import { SITE_URL } from "./src/content/site";

const PRODUCTION_HOST = new URL(SITE_URL).host;

/**
 * True only on the real production deployment. Preview deploys and local dev must
 * not host-redirect, or you lose the ability to open them at all.
 */
const isProductionDeployment = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  async redirects() {
    // Any host other than the canonical one — the apex, and the auto-assigned
    // *.vercel.app alias that was serving a fully indexable duplicate of the site.
    if (!isProductionDeployment) return [];

    return [
      {
        source: "/:path*",
        missing: [{ type: "host", value: PRODUCTION_HOST }],
        destination: `${SITE_URL}/:path*`,
        // Explicit 301 rather than `permanent: true`, which emits 308. Both are
        // permanent and Google treats them alike, but 301 is what every SEO tool
        // and older crawler expects to see for a host canonicalisation.
        statusCode: 301,
      },
    ];
  },

  async headers() {
    const headers = [
      {
        // Defence in depth alongside the segment-level robots metadata.
        source: "/lead-reports/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
    ];

    // Preview deployments are real, reachable hosts. Keep them out of the index.
    if (process.env.VERCEL_ENV === "preview") {
      headers.push({
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      });
    }

    return headers;
  },
};

export default nextConfig;
