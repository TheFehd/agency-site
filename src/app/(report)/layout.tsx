import type { Metadata } from "next";

import { ReportShell } from "@/components/lead-reports/report-shell";

/**
 * Lead reports are prospect-specific and must never surface in search.
 *
 * Declared at the segment level so every future report inherits it — a page that
 * forgets its own robots block is still covered. Deliberately NOT paired with a
 * Disallow in robots.txt: blocking the crawl would stop Google from ever reading
 * this noindex, and the URLs could still be indexed from an inbound link.
 * noarchive additionally suppresses cached copies.
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    googleBot: { index: false, follow: false, noarchive: true },
  },
};

export default function ReportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReportShell>{children}</ReportShell>;
}
