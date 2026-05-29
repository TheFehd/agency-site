"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { HeaderLogo } from "@/components/brand/header-logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { BookButton } from "@/components/ui/book-button";
import { siteConfig } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

import "./nav-link.css";

export function SiteHeader() {
  const active = useActiveSection();
  const scrolled = useScrolled();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        className={cn(
          "mx-auto flex w-full max-w-5xl items-center justify-between gap-3",
          scrolled
            ? "h-14 rounded-full border border-border/50 bg-background/55 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-2xl sm:px-5 dark:border-white/10 dark:bg-background/45 dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "h-auto max-w-6xl border-transparent bg-transparent px-0 shadow-none backdrop-blur-none",
        )}
      >
        <Link href="#hero" className="relative z-10 shrink-0">
          <HeaderLogo />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 md:flex"
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
                  "nav-link shrink-0 rounded-lg px-2.5 py-1.5 text-sm font-semibold transition-colors sm:px-3",
                  isActive
                    ? "nav-link--active text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <BookButton
            href="#book"
            size="sm"
            className="hidden rounded-full sm:inline-flex"
          >
            {siteConfig.cta.primary}
          </BookButton>
          <MobileNav active={active} minimal={!scrolled} />
        </div>
      </motion.div>
    </header>
  );
}
