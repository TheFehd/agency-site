import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/terms",
  title: "Terms & Conditions",
  description: `The terms that apply to using the ${siteConfig.name} website and engaging our services.`,
  // Placeholder copy — see docs/LAUNCH-BLOCKERS.md.
  noindex: true,
});

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back home
      </Link>
      <h1 className="font-heading mt-8 text-3xl font-medium">Terms & Conditions</h1>
      <p className="mt-4 text-muted-foreground">
        Placeholder terms for {siteConfig.name}. Replace with your legal copy before launch.
      </p>
    </main>
  );
}
