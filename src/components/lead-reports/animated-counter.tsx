"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ParsedMetric =
  | { kind: "animate"; end: number; format: (n: number) => string; decimals: number }
  | { kind: "static"; text: string };

function parseMetric(raw: string): ParsedMetric {
  if (raw.includes("?")) return { kind: "static", text: raw };

  if (raw.endsWith("+")) {
    const n = Number.parseInt(raw, 10);
    if (!Number.isNaN(n)) {
      return {
        kind: "animate",
        end: n,
        decimals: 0,
        format: (v) => `${Math.round(v)}+`,
      };
    }
  }

  const pct = raw.match(/^~?(\d+(?:\.\d+)?)%$/);
  if (pct) {
    const end = Number(pct[1]);
    const tilde = raw.startsWith("~");
    const decimals = pct[1].includes(".") ? 1 : 0;
    return {
      kind: "animate",
      end,
      decimals,
      format: (v) =>
        `${tilde ? "~" : ""}${decimals ? v.toFixed(1) : Math.round(v)}%`,
    };
  }

  const money = raw.match(/^~?([\d,]+)\s*(AED|USD)$/);
  if (money) {
    const end = Number.parseInt(money[1].replace(/,/g, ""), 10);
    const tilde = raw.startsWith("~");
    const unit = money[2];
    return {
      kind: "animate",
      end,
      decimals: 0,
      format: (v) => `${tilde ? "~" : ""}${Math.round(v).toLocaleString()} ${unit}`,
    };
  }

  const time = raw.match(/^(\d+(?:\.\d+)?)\s*(s|ms)$/);
  if (time) {
    const end = Number(time[1]);
    const unit = time[2];
    const decimals = time[1].includes(".") ? 1 : 0;
    return {
      kind: "animate",
      end,
      decimals,
      format: (v) => `${decimals ? v.toFixed(1) : Math.round(v)} ${unit}`,
    };
  }

  const plain = raw.match(/^(\d+(?:\.\d+)?)$/);
  if (plain) {
    const end = Number(plain[1]);
    const decimals = plain[1].includes(".") ? 1 : 0;
    return {
      kind: "animate",
      end,
      decimals,
      format: (v) => (decimals ? v.toFixed(1) : String(Math.round(v))),
    };
  }

  return { kind: "static", text: raw };
}

type AnimatedCounterProps = {
  value: string;
  className?: string;
  duration?: number;
};

export function AnimatedCounter({
  value,
  className,
  duration = 1400,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = useMemo(() => parseMetric(value), [value]);
  const [display, setDisplay] = useState(
    parsed.kind === "static" ? parsed.text : parsed.format(0),
  );

  useEffect(() => {
    if (parsed.kind === "static") {
      setDisplay(parsed.text);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(parsed.format(parsed.end));
      return;
    }

    let frame = 0;
    let start = 0;

    const run = (ts: number) => {
      if (!start) start = ts;
      const t = Math.min((ts - start) / duration, 1);
      const eased = 1 - (1 - t) ** 3;
      const current = parsed.end * eased;
      setDisplay(parsed.format(current));
      if (t < 1) frame = requestAnimationFrame(run);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          frame = requestAnimationFrame(run);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    io.observe(el);

    // Mobile Safari can miss intersection — show final value after a beat.
    const fallback = window.setTimeout(() => {
      setDisplay(parsed.format(parsed.end));
    }, 1200);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
    };
  }, [parsed, duration]);

  return (
    <span ref={ref} className={cn("lead-report-counter tabular-nums", className)}>
      {display}
    </span>
  );
}
