import type { NextConfig } from "next";

import { SITE_URL } from "./src/content/site";

const PRODUCTION_HOST = new URL(SITE_URL).host;

/**
 * True only on the real production deployment. Preview deploys and local dev must
 * not host-redirect, or you lose the ability to open them at all.
 */
const isProductionDeployment = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  // A stray lockfile in the home directory makes Next infer the wrong workspace
  // root, which mis-scopes file tracing. Pin it to this project.
  turbopack: { root: import.meta.dirname },

  images: {
    /**
     * WebP only, deliberately.
     *
     * TODO: restore "image/avif" once the libheif fix propagates upstream.
     *
     * AVIF optimization is disabled in Next >=16.3.3 / >=15.5.24 because
     * decoding AVIF reached an RCE in libheif via sharp
     * (GHSA-2xp9-vwfh-vxw4, upstream GHSA-g89c-p67h-r497). Listing AVIF here
     * would be inert today, and no AVIF is kept in the repo either, so no
     * source file reaches that decoder.
     */
    formats: ["image/webp"],
  },

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
