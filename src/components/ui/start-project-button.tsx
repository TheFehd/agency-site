import Link from "next/link";

import { cn } from "@/lib/utils";

import "./start-project-button.css";

type StartProjectButtonProps = {
  href?: string;
  className?: string;
  children?: string;
};

export function StartProjectButton({
  href = "#book",
  className,
  children = "Start your project",
}: StartProjectButtonProps) {
  return (
    <Link href={href} className={cn("start-project-btn", className)}>
      <span>{children}</span>
      <svg width="15" height="10" viewBox="0 0 13 10" aria-hidden>
        <path d="M1,4 L10,4" />
        <polyline points="8 1 12 4 8 7" />
      </svg>
    </Link>
  );
}
