"use client";

import { useEffect } from "react";

import { resetIntroAfterNavigation } from "@/lib/intro";

type ReportShellProps = {
  children: React.ReactNode;
};

/** Keeps the report visible when returning from hustlgram.com via browser back. */
export function ReportShell({ children }: ReportShellProps) {
  useEffect(() => {
    resetIntroAfterNavigation();

    const onPageShow = () => {
      resetIntroAfterNavigation();
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return <div className="lead-report-shell min-h-full">{children}</div>;
}
