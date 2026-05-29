import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TextHighlightProps = {
  children: ReactNode;
  className?: string;
};

export function TextHighlight({ children, className }: TextHighlightProps) {
  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      <span
        className="pointer-events-none absolute -inset-x-[0.12em] bottom-[0.06em] top-[22%] -z-0 rounded-[3px] bg-[#86efac]/85 shadow-[inset_0_-1px_0_rgba(0,0,0,0.06)] dark:bg-[#4ade80]/45 dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.1)]"
        style={{ transform: "rotate(-1.2deg) skewX(-3deg)" }}
        aria-hidden
      />
      <span className="relative z-[1]">{children}</span>
    </span>
  );
}
