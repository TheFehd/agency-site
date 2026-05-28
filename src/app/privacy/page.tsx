import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back home
      </Link>
      <h1 className="font-heading mt-8 text-3xl font-medium">Privacy Policy</h1>
      <p className="mt-4 text-muted-foreground">
        Placeholder privacy policy for {siteConfig.name}. Replace with your legal copy before
        launch.
      </p>
    </main>
  );
}
