import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import Script from "next/script";

import { IntroSplash } from "@/components/brand/intro-splash";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
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
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
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
      className={`${dmSans.variable} ${instrumentSerif.variable} h-full scroll-smooth`}
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
          <div id="site-shell" className="site-shell flex min-h-full flex-col">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}
