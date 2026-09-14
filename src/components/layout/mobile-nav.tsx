"use client";

import Link from "next/link";

import { HeaderLogo } from "@/components/brand/header-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { BookButton } from "@/components/ui/book-button";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

import "./nav-link.css";

type MobileNavProps = {
  active: string;
  minimal?: boolean;
};

export function MobileNav({ active, minimal = false }: MobileNavProps) {
  return (
    <Sheet>
      {/*
        SheetTrigger already renders a <button>. Wrapping <Button> inside it
        nested one button in another, which is invalid HTML and threw a
        hydration error on every page load. Style the trigger directly instead.
      */}
      <SheetTrigger
        className={cn(
          "md:hidden",
          minimal
            ? "inline-flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/8"
            : buttonVariants({ variant: "ghost", size: "icon" }),
        )}
      >
        <Menu className={minimal ? "size-5" : undefined} />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs">
        <SheetHeader>
          <SheetTitle className="sr-only">{siteConfig.name}</SheetTitle>
          <HeaderLogo />
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
          {siteConfig.nav.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-foreground/8 hover:text-foreground",
                  active === id && "nav-link--active bg-foreground/10 text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-8 flex items-center justify-between gap-3">
          <ThemeToggle />
          <BookButton href="#book" size="sm" className="rounded-full">
            {siteConfig.cta.primary}
          </BookButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}
