"use client";

import Link from "next/link";

import { HeaderLogo } from "@/components/brand/header-logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const active = useActiveSection();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <div
        className={cn(
          "mx-auto flex h-[3.25rem] max-w-5xl items-center justify-between gap-3 rounded-full border border-border px-3 sm:h-14 sm:gap-4 sm:px-5",
          "bg-muted/95 shadow-sm backdrop-blur-xl dark:bg-background dark:shadow-none",
        )}
      >
        <Link href="#hero" className="shrink-0">
          <HeaderLogo />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "shrink-0 rounded-lg px-2.5 py-1.5 text-sm font-semibold transition-colors sm:px-3",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="#book"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden h-9 rounded-full px-4 sm:inline-flex",
            )}
          >
            {siteConfig.cta.primary}
          </Link>
          <MobileNav active={active} />
        </div>
      </div>
    </header>
  );
}
