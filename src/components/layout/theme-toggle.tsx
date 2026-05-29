"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <span
        className={cn("inline-flex size-9 shrink-0 rounded-full", className)}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className={cn(
        "relative inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border",
        "bg-background text-foreground transition-[background-color,color,border-color,transform] duration-200 ease-out",
        "hover:bg-muted active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      <Sun
        className={cn(
          "size-[1.05rem] transition-all duration-300 ease-out",
          isDark
            ? "pointer-events-none scale-0 rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100",
        )}
        aria-hidden
      />
      <Moon
        className={cn(
          "absolute size-[1.05rem] transition-all duration-300 ease-out",
          isDark
            ? "scale-100 rotate-0 opacity-100"
            : "pointer-events-none scale-0 -rotate-90 opacity-0",
        )}
        aria-hidden
      />
    </button>
  );
}
