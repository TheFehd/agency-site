import { cn } from "@/lib/utils";

type ReportSectionHeadingProps = {
  num: string;
  title: string;
  className?: string;
};

export function ReportSectionHeading({
  num,
  title,
  className,
}: ReportSectionHeadingProps) {
  return (
    <>
      <div
        className={cn(
          "mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 backdrop-blur-sm md:hidden",
          className,
        )}
      >
        <span className="text-[10px] font-semibold tabular-nums text-muted-foreground">
          {num}
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
          {title}
        </span>
      </div>
      <div className={cn("mb-3.5 hidden items-baseline gap-4 md:flex", className)}>
        <span className="text-xs font-medium tabular-nums tracking-[0.08em] text-muted-foreground">
          {num}
        </span>
        <h2 className="text-[clamp(1.625rem,3.6vw,2.5rem)] font-semibold tracking-tight">
          {title}
        </h2>
      </div>
    </>
  );
}
