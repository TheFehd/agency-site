"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Switch } from "@/components/animate-ui/components/base/switch";
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
    return <div className={cn("h-5 w-8 shrink-0", className)} aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Switch
      className={className}
      checked={isDark}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      startIcon={<Sun className="size-[9px]" aria-hidden />}
      endIcon={<Moon className="size-[9px]" aria-hidden />}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    />
  );
}
