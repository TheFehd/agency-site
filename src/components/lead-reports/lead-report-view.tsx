"use client";

import { AnimatedCounter } from "@/components/lead-reports/animated-counter";
import { CompetitorTable } from "@/components/lead-reports/competitor-table";
import { ReportFinalCta } from "@/components/lead-reports/report-final-cta";
import { ReportGlassCard } from "@/components/lead-reports/report-glass-card";
import { ReportHighlight } from "@/components/lead-reports/report-highlight";
import { ReportIconCard } from "@/components/lead-reports/report-icon-card";
import { reportIcons, type ReportIconName } from "@/components/lead-reports/report-icons";
import { ReportMobileHero } from "@/components/lead-reports/report-mobile-hero";
import { ReportNav } from "@/components/lead-reports/report-nav";
import { ReportSectionHeading } from "@/components/lead-reports/report-section-heading";
import {
  ReportSectionReveal,
  ReportStagger,
  ReportStaggerItem,
} from "@/components/lead-reports/report-section-reveal";
import { ReportStickyCta } from "@/components/lead-reports/report-sticky-cta";
import type { LeadReport } from "@/content/lead-reports/horse-luxury-group";
import { cn } from "@/lib/utils";

import "./lead-report.css";

const metaIconMap: Record<string, ReportIconName> = {
  Subject: "subject",
  Reputation: "reputation",
  "Critical leaks": "leaks",
  "Prepared for": "prepared",
};

type LeadReportViewProps = {
  report: LeadReport;
};

function metricToneClass(tone: "bad" | "warn" | "good") {
  return tone === "bad"
    ? "lead-report-num--bad"
    : tone === "good"
      ? "lead-report-num--good"
      : "lead-report-num--warn";
}

export function LeadReportView({ report }: LeadReportViewProps) {
  const competitorNote =
    "noteHighlight" in report.competitors
      ? report.competitors.note.split(report.competitors.noteHighlight)
      : null;

  const sectionClass = "lead-report-section relative border-b border-border";

  return (
    <div className="lead-report-page bg-background text-foreground">
      <ReportNav tag={report.tag} />

      <div className="md:hidden">
        <ReportMobileHero report={report} />
      </div>
      <header className="relative hidden border-b border-border px-7 pb-[76px] pt-24 md:block">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-[34px] flex items-center gap-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            <span className="lead-report-eyebrow-dot shrink-0" />
            <span>{report.hero.eyebrow}</span>
            <span className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
            <span className="hidden sm:inline">
              Prepared for {report.hero.meta.find((m) => m.key === "Prepared for")?.value}
            </span>
          </div>

          <h1 className="mb-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-tight tracking-tight">
            {report.hero.title}
          </h1>
          <p className="mb-6 text-lg font-semibold tracking-tight sm:text-xl">
            {report.hero.client}
            <span className="text-muted-foreground"> · {report.hero.domain}</span>
          </p>

          <p className="mb-11 max-w-[600px] text-[clamp(0.9375rem,1.7vw,1.0625rem)] leading-relaxed text-muted-foreground">
            An analysis of where the site{" "}
            <ReportHighlight tone="bad">loses ready-to-pay customers</ReportHighlight>, what
            competitors are doing differently, and the{" "}
            <ReportHighlight tone="warn">estimated monthly revenue impact</ReportHighlight>.
          </p>

          <div className="grid max-w-[900px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {report.hero.meta.map((cell) => {
              const valueClass =
                cell.key === "Critical leaks"
                  ? "lead-report-num--bad"
                  : cell.key === "Reputation"
                    ? "lead-report-num--good"
                    : undefined;
              const accent =
                cell.key === "Critical leaks"
                  ? "bad"
                  : cell.key === "Reputation"
                    ? "good"
                    : "neutral";
              const iconName = metaIconMap[cell.key] ?? "subject";
              const metricValue =
                cell.key === "Critical leaks"
                  ? "6"
                  : cell.key === "Reputation"
                    ? "4.9"
                    : cell.value;
              return (
                <ReportIconCard
                  key={cell.key}
                  compact
                  showChart={false}
                  icon={reportIcons[iconName]}
                  title={cell.key}
                  subtitle="Audit snapshot"
                  accent={accent}
                  metrics={[
                    {
                      label: "Value",
                      value: metricValue,
                      animate: cell.key === "Critical leaks" || cell.key === "Reputation",
                      valueClassName: valueClass,
                      delta:
                        cell.key === "Critical leaks"
                          ? "issues found"
                          : cell.key === "Reputation"
                            ? "★ · 89 reviews"
                            : undefined,
                      deltaTone: cell.key === "Reputation" ? "good" : "bad",
                    },
                  ]}
                />
              );
            })}
          </div>
        </div>
      </header>

      <section className={sectionClass}>
        <ReportSectionReveal className="mx-auto max-w-[1080px]">
          <ReportSectionHeading num="01" title="The headline" />
          <ReportIconCard
            accent="bad"
            icon={reportIcons.leaks}
            title="Bottom line"
            subtitle={report.verdict.tag}
            chartVariant="down"
            showChart
            body={
              <span className="text-[clamp(1.05rem,2.2vw,1.45rem)] font-medium leading-snug tracking-tight text-foreground">
                {report.verdict.text.split(report.verdict.underline).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <u className="underline decoration-[color-mix(in_srgb,var(--report-negative)_65%,transparent)] decoration-2 underline-offset-4">
                        {report.verdict.underline}
                      </u>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  ),
                )}
              </span>
            }
            metrics={[
              {
                label: "Critical leaks",
                value: "6",
                valueClassName: "lead-report-num--bad",
                delta: "Revenue at risk",
                deltaTone: "bad",
              },
              {
                label: "Reputation",
                value: "4.9",
                valueClassName: "lead-report-num--good",
                delta: "Brand is strong",
                deltaTone: "good",
              },
            ]}
          />
        </ReportSectionReveal>
      </section>

      <section className={sectionClass}>
        <ReportSectionReveal className="mx-auto max-w-[1080px]">
          <ReportSectionHeading num="02" title="Where it leaks" />
          <p className="mb-6 max-w-[600px] text-sm text-muted-foreground md:mb-11 md:text-base">
            {report.leaks.length} issues, ordered by how much money each one costs you. Every
            percentage ties to published industry data or a live site audit — not guesses.
          </p>
          <ReportStagger className="grid gap-4 lg:grid-cols-2">
            {report.leaks.map((leak) => {
              const accent = leak.severity === "critical" ? "bad" : "warn";
              return (
                <ReportStaggerItem key={leak.id}>
                <ReportIconCard
                  icon={reportIcons[leak.icon]}
                  title={leak.name}
                  subtitle={leak.id}
                  badge={leak.severity === "critical" ? "Critical" : "High"}
                  badgeTone={accent}
                  accent={accent}
                  chartVariant={leak.chart}
                  showChart
                  metrics={[
                    {
                      label: "Impact",
                      value: leak.cost,
                      valueClassName:
                        leak.severity === "critical"
                          ? "lead-report-num--bad"
                          : "lead-report-num--warn",
                      delta: "Revenue leak",
                      deltaTone: "bad",
                    },
                    {
                      label: "Signal",
                      value: leak.severity === "critical" ? "Critical" : "High",
                      animate: false,
                      valueClassName:
                        leak.severity === "critical"
                          ? "lead-report-num--bad"
                          : "lead-report-num--warn",
                      delta: leak.costLabel,
                      deltaTone: "warn",
                    },
                  ]}
                  body={leak.body}
                  footer={
                    <div className="flex items-start gap-3">
                      <span className="lead-report-fix-label shrink-0 text-[10px] font-medium uppercase tracking-[0.14em]">
                        Fix →
                      </span>
                      <span className="text-[13.5px] leading-relaxed text-muted-foreground">
                        {leak.fix}
                      </span>
                    </div>
                  }
                />
                </ReportStaggerItem>
              );
            })}
          </ReportStagger>
        </ReportSectionReveal>
      </section>

      <section className={sectionClass}>
        <ReportSectionReveal className="mx-auto max-w-[1080px]">
          <ReportSectionHeading num="03" title="The speed problem" />
          <p className="mb-6 max-w-[600px] text-sm text-muted-foreground md:mb-11 md:text-base">
            Speed isn&apos;t a tech detail — it&apos;s a revenue lever. Here&apos;s what the numbers
            say, and where your site sits.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <ReportIconCard
              accent="bad"
              icon={reportIcons.performance}
              title="Your mobile score"
              subtitle="Current performance"
              chartVariant="volatile"
              metrics={[
                {
                  label: "PageSpeed",
                  value: report.speed.currentScore,
                  valueClassName: "lead-report-num--bad",
                  delta: "Needs improvement",
                  deltaTone: "bad",
                },
                {
                  label: "LCP",
                  value: "7.0 s",
                  valueClassName: "lead-report-num--bad",
                  delta: "Target under 2.5s",
                  deltaTone: "warn",
                },
              ]}
              footer={
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  {report.speed.note}
                </p>
              }
            />
            <ReportIconCard
              accent="good"
              icon={reportIcons.growth}
              title="What it should be"
              subtitle="After rebuild"
              chartVariant="up"
              metrics={[
                {
                  label: "PageSpeed",
                  value: report.speed.targetScore,
                  valueClassName: "lead-report-num--good",
                  delta: "Green zone",
                  deltaTone: "good",
                },
                {
                  label: "Mobile load",
                  value: "Sub-2s",
                  animate: false,
                  valueClassName: "lead-report-num--good",
                  delta: "Visitors stay & book",
                  deltaTone: "good",
                },
              ]}
              footer={
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  Fast enough that mobile visitors stay long enough to book.
                </p>
              }
            />
          </div>
          {"categories" in report.speed && report.speed.categories ? (
            <>
              <div className="lead-report-mobile-meta-grid mt-4 grid grid-cols-2 gap-2.5 md:hidden">
                {report.speed.categories.map((cat) => (
                  <div key={cat.label} className="lead-report-mobile-meta-chip min-w-0">
                    <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      {cat.label}
                    </p>
                    <AnimatedCounter
                      value={cat.value}
                      className={cn("text-xl font-semibold", metricToneClass(cat.tone))}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 hidden md:grid md:grid-cols-2 md:gap-3.5 lg:grid-cols-4">
                {report.speed.categories.map((cat) => (
                  <ReportIconCard
                    key={cat.label}
                    compact
                    showChart={false}
                    icon={cat.label === "SEO" ? reportIcons.seo : reportIcons.performance}
                    title={cat.label}
                    subtitle="Lighthouse"
                    accent={cat.tone === "good" ? "good" : cat.tone === "bad" ? "bad" : "warn"}
                    metrics={[
                      {
                        label: "Score",
                        value: cat.value,
                        valueClassName: metricToneClass(cat.tone),
                      },
                    ]}
                  />
                ))}
              </div>
            </>
          ) : null}
          {"vitals" in report.speed && report.speed.vitals ? (
            <>
              <div className="lead-report-mobile-vitals mt-4 md:hidden">
                {report.speed.vitals.map((vital) => (
                  <div key={vital.label} className="lead-report-mobile-vital-row">
                    <span className="text-muted-foreground">{vital.label}</span>
                    <AnimatedCounter
                      value={vital.value}
                      className={cn("font-semibold", metricToneClass(vital.tone))}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 hidden gap-3 md:grid sm:grid-cols-2 lg:grid-cols-3">
                {report.speed.vitals.map((vital) => (
                  <ReportIconCard
                    key={vital.label}
                    compact
                    showChart={false}
                    icon={reportIcons.speed}
                    title={vital.label}
                    subtitle="Core Web Vital"
                    accent={vital.tone === "good" ? "good" : vital.tone === "bad" ? "bad" : "warn"}
                    metrics={[
                      {
                        label: "Measured",
                        value: vital.value,
                        valueClassName: metricToneClass(vital.tone),
                      },
                    ]}
                  />
                ))}
              </div>
            </>
          ) : null}
          <div className="mt-[18px] grid grid-cols-1 gap-3.5 md:grid-cols-3">
            {report.speed.stats.map((stat) => (
              <ReportIconCard
                key={stat.value}
                compact
                accent="bad"
                icon={reportIcons.leaks}
                title="Bounce risk"
                subtitle="Industry data"
                chartVariant="down"
                metrics={[
                  {
                    label: "Impact",
                    value: stat.value,
                    valueClassName: "lead-report-num--bad",
                  },
                ]}
                footer={
                  <p className="text-[12.5px] leading-relaxed text-muted-foreground">{stat.label}</p>
                }
              />
            ))}
          </div>
          <p className="mt-4 text-[10px] tracking-wide text-muted-foreground opacity-70">
            {report.speed.source}
          </p>
        </ReportSectionReveal>
      </section>

      <section className={sectionClass}>
        <ReportSectionReveal className="mx-auto max-w-[1080px]">
          <ReportSectionHeading num="04" title="What the market does" />
          <p className="mb-6 max-w-[600px] text-sm text-muted-foreground md:mb-11 md:text-base">
            Real Dubai luxury rental sites your customers see when they bounce from yours. Every one
            lets the customer book on the spot.
          </p>
          <CompetitorTable rows={report.competitors.rows} />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {competitorNote && competitorNote.length > 1 ? (
              <>
                {competitorNote[0]}
                <ReportHighlight tone="bad">
                  {report.competitors.noteHighlight}
                </ReportHighlight>
                {competitorNote[1]}
              </>
            ) : (
              report.competitors.note
            )}
          </p>
        </ReportSectionReveal>
      </section>

      <section className={sectionClass}>
        <ReportSectionReveal className="mx-auto max-w-[1080px]">
          <ReportSectionHeading num="05" title="What it's costing you" />
          <p className="mb-6 max-w-[600px] text-sm text-muted-foreground md:mb-11 md:text-base">
            Conservative math. Swap in your real numbers and the case makes itself — the dashed
            figures are where your actuals go.
          </p>
          <ReportIconCard
            accent="bad"
            icon={reportIcons.growth}
            title="Monthly revenue leak"
            subtitle="Conservative estimate"
            chartVariant="down"
            metrics={[
              {
                label: "Lost every month",
                value: report.math.total,
                valueClassName: "lead-report-num--bad",
                delta: "Fixable gap",
                deltaTone: "bad",
              },
              {
                label: "Lost bookings",
                value: "24",
                valueClassName: "lead-report-num--bad",
                delta: "At booking gap",
                deltaTone: "warn",
              },
            ]}
            footer={
              <div className="space-y-4">
                {report.math.lines.map((line) => {
                  const editable = "editable" in line && line.editable;
                  return (
                    <div
                      key={line.label}
                      className="flex items-center justify-between border-b border-dashed border-border/60 py-3 text-sm text-muted-foreground last:border-b-0"
                    >
                      <span>{line.label}</span>
                      <span
                        className={cn(
                          "font-medium text-foreground",
                          line.label.includes("bookings") && "lead-report-num--bad",
                          editable && "border-b border-dashed border-border",
                        )}
                      >
                        <AnimatedCounter value={line.value} />
                      </span>
                    </div>
                  );
                })}
                <p className="border-t border-border/60 pt-4 text-[13px] text-muted-foreground">
                  ≈{" "}
                  <ReportHighlight tone="bad">
                    <AnimatedCounter value="864000 AED" className="inline" />
                  </ReportHighlight>{" "}
                  a year walking out the back door — from one fixable leak. The rebuild pays for
                  itself in days, not months.
                </p>
              </div>
            }
          />
        </ReportSectionReveal>
      </section>

      <section className={sectionClass}>
        <ReportSectionReveal className="mx-auto max-w-[1080px]">
          <ReportSectionHeading num="06" title="What I'd build" />
          <p className="mb-6 max-w-[600px] text-sm text-muted-foreground md:mb-11 md:text-base">
            Not a patch. A site engineered to turn your reputation into booked jobs.
          </p>
          <ReportStagger className="mb-11 grid gap-3 sm:grid-cols-2">
            {report.build.map((item, i) => (
              <ReportStaggerItem key={item.title}>
                <ReportIconCard
                  compact
                  accent="good"
                  icon={reportIcons[item.icon]}
                  title={item.title}
                  subtitle={`Deliverable ${String(i + 1).padStart(2, "0")}`}
                  chartVariant="up"
                  showChart
                  body={item.description}
                />
              </ReportStaggerItem>
            ))}
          </ReportStagger>
        </ReportSectionReveal>
      </section>

      <section className={cn(sectionClass, "max-md:border-b-0")}>
        <ReportSectionReveal className="mx-auto max-w-[1080px]">
          <ReportFinalCta
            title={report.cta.title}
            description={report.cta.description}
            button={report.cta.button}
            href={report.cta.href}
          />
        </ReportSectionReveal>
      </section>

      <ReportStickyCta label={report.cta.button} href={report.cta.href} />

      <footer className="px-4 pt-11 pb-24 text-center md:px-7 md:pb-16">
        <div className="mx-auto max-w-[1080px]">
          <p className="mb-2 text-lg font-semibold tracking-tight">
            {report.footer.sig} — <b className="font-semibold">{report.footer.author}</b>
          </p>
          <p className="text-[11px] tracking-[0.08em] text-muted-foreground opacity-70">
            {report.footer.meta}
          </p>
        </div>
      </footer>
    </div>
  );
}
