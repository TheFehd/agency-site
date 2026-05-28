"use client";

import Link from "next/link";

import { HeaderLogo } from "@/components/brand/header-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
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

type MobileNavProps = {
  active: string;
};

export function MobileNav({ active }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu />
          <span className="sr-only">Open menu</span>
        </Button>
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
                  "rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                  active === id && "bg-muted text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-8 flex items-center justify-between gap-3">
          <ThemeToggle />
          <Link
            href="#book"
            className={cn(buttonVariants(), "h-10 rounded-full px-5")}
          >
            {siteConfig.cta.primary}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
