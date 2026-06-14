import { cn } from "@/lib/utils";

type ReportGlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accent?: "neutral" | "bad" | "good";
};

export function ReportGlassCard({
  children,
  className,
  hover = true,
  accent = "neutral",
}: ReportGlassCardProps) {
  return (
    <div
      className={cn(
        "lead-report-glass",
        hover && "lead-report-glass--hover",
        accent === "bad" && "lead-report-glass--bad",
        accent === "good" && "lead-report-glass--good",
        className,
      )}
    >
      <div className="lead-report-glass__shine" aria-hidden />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
