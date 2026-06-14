import { cn } from "@/lib/utils";

type ReportHighlightProps = {
  children: React.ReactNode;
  tone?: "bad" | "good" | "warn";
  className?: string;
};

export function ReportHighlight({
  children,
  tone = "bad",
  className,
}: ReportHighlightProps) {
  return (
    <span
      className={cn(
        "lead-report-highlight",
        tone === "bad" && "lead-report-highlight--bad",
        tone === "good" && "lead-report-highlight--good",
        tone === "warn" && "lead-report-highlight--warn",
        className,
      )}
    >
      {children}
    </span>
  );
}
