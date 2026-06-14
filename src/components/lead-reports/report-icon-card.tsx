"use client";

import type { LucideIcon } from "lucide-react";

import { AnimatedCounter } from "@/components/lead-reports/animated-counter";
import {
  ReportSparkline,
  type SparklineVariant,
} from "@/components/lead-reports/report-sparkline";
import { cn } from "@/lib/utils";

import "./report-icon-card.css";

type MetricCell = {
  label: string;
  value: string;
  animate?: boolean;
  valueClassName?: string;
  delta?: string;
  deltaTone?: "bad" | "good" | "warn";
};

type ReportIconCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  badge?: string;
  badgeTone?: "bad" | "good" | "warn";
  accent?: "bad" | "good" | "warn" | "neutral";
  metrics?: [MetricCell] | [MetricCell, MetricCell];
  chartVariant?: SparklineVariant;
  showChart?: boolean;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  compact?: boolean;
};

function DeltaText({
  delta,
  tone = "bad",
}: {
  delta: string;
  tone?: "bad" | "good" | "warn";
}) {
  return (
    <p
      className={cn(
        "mt-1 text-xs font-medium",
        tone === "bad" && "lead-report-num--bad",
        tone === "good" && "lead-report-num--good",
        tone === "warn" && "lead-report-num--warn",
      )}
    >
      {delta}
    </p>
  );
}

export function ReportIconCard({
  icon: Icon,
  title,
  subtitle,
  badge,
  badgeTone = "bad",
  accent = "neutral",
  metrics,
  chartVariant = "down",
  showChart = true,
  body,
  footer,
  className,
  compact = false,
}: ReportIconCardProps) {
  return (
    <div
      className={cn(
        "report-icon-card group",
        `report-icon-card--${accent}`,
        compact && "report-icon-card--compact",
        className,
      )}
    >
      <div className="report-icon-card__glow" aria-hidden />
      <div className="report-icon-card__inner">
        <div className="report-icon-card__header">
          <div className="flex items-center gap-3">
            <div className="report-icon-card__icon">
              <Icon className="size-5" strokeWidth={1.5} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-semibold tracking-tight text-foreground sm:text-[1.05rem]">
                {title}
              </p>
              {subtitle ? (
                <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
              ) : null}
            </div>
          </div>
          {badge ? (
            <span
              className={cn(
                "report-icon-card__badge",
                badgeTone === "bad" && "lead-report-badge--critical",
                badgeTone === "warn" && "lead-report-badge--high",
                badgeTone === "good" && "report-icon-card__badge--good",
              )}
            >
              {badge}
            </span>
          ) : null}
        </div>

        {metrics ? (
          <div
            className={cn(
              "report-icon-card__metrics",
              metrics.length === 1 && "report-icon-card__metrics--single",
            )}
          >
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={cn(
                  "report-icon-card__metric",
                  i === 0 && metrics.length === 2 && "pr-6",
                  i === 1 && "pl-6",
                )}
              >
                <p className="text-xs font-medium text-muted-foreground">{metric.label}</p>
                <p
                  className={cn(
                    "text-xl font-semibold tracking-tight text-foreground",
                    metric.valueClassName,
                  )}
                >
                  {metric.animate !== false ? (
                    <AnimatedCounter value={metric.value} />
                  ) : (
                    metric.value
                  )}
                </p>
                {metric.delta ? (
                  <DeltaText
                    delta={metric.delta}
                    tone={metric.deltaTone ?? (accent === "good" ? "good" : "bad")}
                  />
                ) : null}
              </div>
            ))}
          </div>
        ) : null}

        {body ? (
          <p className="report-icon-card__body text-[14px] leading-relaxed text-muted-foreground">
            {body}
          </p>
        ) : null}

        {showChart && !compact ? (
          <div className="max-md:hidden">
            <ReportSparkline variant={chartVariant} accent={accent === "neutral" ? "warn" : accent} />
          </div>
        ) : null}

        {footer ? <div className="report-icon-card__footer">{footer}</div> : null}
      </div>
    </div>
  );
}
