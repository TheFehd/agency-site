import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DM_Sans, Instrument_Serif, Poppins } from "next/font/google";
import Script from "next/script";

import { IntroSplash } from "@/components/brand/intro-splash";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/content/site";
import { INTRO_BOOT_SCRIPT } from "@/lib/intro";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

/**
 * Used by one decorative paragraph in the final CTA, at the very bottom of the page.
 *
 * It used to arrive via `@import url(fonts.googleapis.com/...)` inside
 * shine-text.css, which put a render-blocking third-party request in the critical
 * path — Lighthouse measured 848ms of blocking for this one paragraph.
 *
 * preload is off deliberately: the text sits below the fold, so preloading it would
 * compete for bandwidth with the LCP element for no benefit.
 */
const poppins = Poppins({
  variable: "--font-shine",
  subsets: ["latin"],
  weight: "600",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    // No url here: each route sets its own og:url via pageMetadata() so it always
    // matches that page's canonical.
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${poppins.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <Script id="intro-boot" strategy="beforeInteractive">
          {INTRO_BOOT_SCRIPT}
        </Script>
      </head>
      <body className="min-h-full font-sans antialiased">
        <ThemeProvider>
          <IntroSplash />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
