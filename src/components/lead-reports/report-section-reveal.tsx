import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ReportSectionRevealProps = {
  children: ReactNode;
  className?: string;
};

/** Static wrapper — no scroll motion (keeps mobile content always visible). */
export function ReportSectionReveal({
  children,
  className,
}: ReportSectionRevealProps) {
  return <div className={cn(className)}>{children}</div>;
}

type ReportStaggerProps = {
  children: ReactNode;
  className?: string;
};

export function ReportStagger({ children, className }: ReportStaggerProps) {
  return <div className={cn(className)}>{children}</div>;
}

type ReportStaggerItemProps = {
  children: ReactNode;
  className?: string;
  index?: number;
};

export function ReportStaggerItem({
  children,
  className,
}: ReportStaggerItemProps) {
  return <div className={cn(className)}>{children}</div>;
}
