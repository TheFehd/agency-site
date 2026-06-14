"use client";

import { AnimatedCounter } from "@/components/lead-reports/animated-counter";
import { ReportHighlight } from "@/components/lead-reports/report-highlight";
import { reportIcons, type ReportIconName } from "@/components/lead-reports/report-icons";
import type { LeadReport } from "@/content/lead-reports/horse-luxury-group";
import { cn } from "@/lib/utils";

const metaIconMap: Record<string, ReportIconName> = {
  Subject: "subject",
  Reputation: "reputation",
  "Critical leaks": "leaks",
  "Prepared for": "prepared",
};

type ReportMobileHeroProps = {
  report: LeadReport;
};

export function ReportMobileHero({ report }: ReportMobileHeroProps) {
  return (
    <header className="lead-report-mobile-hero relative px-4 pb-8 pt-20">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="lead-report-eyebrow-dot" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {report.hero.eyebrow}
        </span>
      </div>

      <h1 className="mb-2 text-[1.65rem] font-semibold leading-tight tracking-tight">
        {report.hero.title}
      </h1>
      <p className="mb-1 text-sm font-semibold tracking-tight">
        {report.hero.client}
      </p>
      <p className="mb-5 text-xs text-muted-foreground">{report.hero.domain}</p>

      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        Where the site{" "}
        <ReportHighlight tone="bad">loses ready buyers</ReportHighlight> and what
        it&apos;s costing monthly.
      </p>

      <div className="lead-report-mobile-meta-grid grid grid-cols-2 gap-2.5">
        {report.hero.meta.map((cell) => {
          const Icon = reportIcons[metaIconMap[cell.key] ?? "subject"];
          const isBad = cell.key === "Critical leaks";
          const isGood = cell.key === "Reputation";
          return (
            <div key={cell.key} className="lead-report-mobile-meta-chip min-w-0">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground/5">
                  <Icon className="size-3.5 text-foreground/80" strokeWidth={1.75} />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  {cell.key}
                </span>
              </div>
              <p
                className={cn(
                  "text-sm font-semibold",
                  isBad && "lead-report-num--bad",
                  isGood && "lead-report-num--good",
                )}
              >
                {isBad ? (
                  <>
                    <AnimatedCounter value="6" /> issues
                  </>
                ) : isGood ? (
                  <>
                    <AnimatedCounter value="4.9" /> ★
                  </>
                ) : (
                  cell.value
                )}
              </p>
            </div>
          );
        })}
      </div>
    </header>
  );
}
