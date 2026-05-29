import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import "./book-button.css";

type BookButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "sm" | "lg";
};

export function BookButton({
  href,
  children,
  className,
  size = "lg",
}: BookButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "book-btn inline-flex shrink-0 items-center justify-center font-semibold tracking-tight",
        size === "lg" && "h-11 min-w-[9.5rem] px-6 text-sm",
        size === "sm" && "h-9 px-4 text-[0.8rem]",
        className,
      )}
    >
      <span className="relative z-[1]">{children}</span>
    </Link>
  );
}
