"use client";

import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type SparklineVariant = "down" | "up" | "volatile" | "flat";

const PATHS: Record<SparklineVariant, { line: string; area: string; dotY: number }> = {
  down: {
    line: "M0,65 C50,20 80,80 150,70 S250,50 300,85",
    area: "M0,100 L0,65 C50,20 80,80 150,70 S250,50 300,85 L300,100 Z",
    dotY: 81,
  },
  up: {
    line: "M0,85 C50,90 80,30 150,40 S250,20 300,35",
    area: "M0,100 L0,85 C50,90 80,30 150,40 S250,20 300,35 L300,100 Z",
    dotY: 31,
  },
  volatile: {
    line: "M0,55 C40,75 70,25 120,60 S200,80 250,40 300,70",
    area: "M0,100 L0,55 C40,75 70,25 120,60 S200,80 250,40 300,70 L300,100 Z",
    dotY: 66,
  },
  flat: {
    line: "M0,60 C80,58 160,62 300,60",
    area: "M0,100 L0,60 C80,58 160,62 300,60 L300,100 Z",
    dotY: 56,
  },
};

type ReportSparklineProps = {
  variant?: SparklineVariant;
  accent?: "bad" | "good" | "warn" | "neutral";
  className?: string;
};

export function ReportSparkline({
  variant = "down",
  accent = "bad",
  className,
}: ReportSparklineProps) {
  const uid = useId().replace(/:/g, "");
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const paths = PATHS[variant];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setActive(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("report-sparkline", className)}>
      <svg className="h-full w-full" viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id={`spark-fill-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" className="report-sparkline__stop-top" data-accent={accent} />
            <stop offset="100%" className="report-sparkline__stop-bottom" data-accent={accent} />
          </linearGradient>
        </defs>
        <path
          d={paths.area}
          fill={`url(#spark-fill-${uid})`}
          className={cn("report-sparkline__area", active && "report-sparkline__area--in")}
        />
        <path
          d={paths.line}
          fill="none"
          className={cn(
            "report-sparkline__line",
            `report-sparkline__line--${accent}`,
            active && "report-sparkline__line--in",
          )}
          strokeWidth={2}
        />
      </svg>
      <div
        className={cn("report-sparkline__dot-wrap", active && "report-sparkline__dot-wrap--in")}
        style={{ top: `${paths.dotY}px` }}
      >
        <div className={cn("report-sparkline__dot", `report-sparkline__dot--${accent}`)} />
        <div className={cn("report-sparkline__pulse", `report-sparkline__pulse--${accent}`)} />
      </div>
    </div>
  );
}
