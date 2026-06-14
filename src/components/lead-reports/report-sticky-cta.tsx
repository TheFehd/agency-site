"use client";

import { BookButton } from "@/components/ui/book-button";

type ReportStickyCtaProps = {
  label: string;
  href: string;
};

export function ReportStickyCta({ label, href }: ReportStickyCtaProps) {
  return (
    <div className="lead-report-sticky-cta md:hidden">
      <BookButton href={href} className="w-full rounded-full py-3.5 text-sm font-semibold">
        {label} →
      </BookButton>
    </div>
  );
}
