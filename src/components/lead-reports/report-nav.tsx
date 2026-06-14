"use client";

import Link from "next/link";

import { HustlgramLogoAnimated } from "@/components/brand/hustlgram-logo-animated";
import { useHeaderLogoReady } from "@/hooks/use-header-logo-ready";
import { cn } from "@/lib/utils";

type ReportNavProps = {
  tag: string;
};

export function ReportNav({ tag }: ReportNavProps) {
  const logoReady = useHeaderLogoReady();

  return (
    <nav className="lead-report-nav max-md:lead-report-nav--mobile">
      <div className="mx-auto flex h-14 max-w-full items-center justify-between px-4 md:h-[60px] md:max-w-[1080px] md:px-7">
        <Link href="/" className="relative z-10 shrink-0">
          <div
            className="flex h-5 min-w-[5rem] items-center md:min-w-[5.5rem]"
            aria-hidden={!logoReady}
          >
            {logoReady ? (
              <HustlgramLogoAnimated
                key="report-nav-logo"
                size="header"
                themed
                glow={false}
              />
            ) : null}
          </div>
        </Link>
        <span className="rounded-full border border-border/70 bg-background/60 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md md:hidden">
          Audit
        </span>
        <span className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground md:inline">
          {tag}
        </span>
      </div>
    </nav>
  );
}
