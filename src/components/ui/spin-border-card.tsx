import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import "./spin-border-card.css";

type SpinBorderCardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SpinBorderCard({
  children,
  className,
  innerClassName,
}: SpinBorderCardProps) {
  return (
    <div className={cn("spin-border-card", className)}>
      <div
        className="spin-border-card__spin spin-border-card__spin--blur"
        aria-hidden
      />
      <div
        className="spin-border-card__spin spin-border-card__spin--intense"
        aria-hidden
      />
      <div className={cn("spin-border-card__inner", innerClassName)}>{children}</div>
    </div>
  );
}
