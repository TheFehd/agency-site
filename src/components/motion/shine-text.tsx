import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import "./shine-text.css";

type ShineTextProps = {
  children: ReactNode;
  className?: string;
  as?: "p" | "span";
};

export function ShineText({ children, className, as: Tag = "p" }: ShineTextProps) {
  return <Tag className={cn("shine-text", className)}>{children}</Tag>;
}
