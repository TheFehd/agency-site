"use client";

import { HustlgramLogoAnimated } from "@/components/brand/hustlgram-logo-animated";
import { useHeaderLogoReady } from "@/hooks/use-header-logo-ready";
import { cn } from "@/lib/utils";

type HeaderLogoProps = {
  className?: string;
};

export function HeaderLogo({ className }: HeaderLogoProps) {
  const ready = useHeaderLogoReady();

  return (
    <div
      className={cn("flex h-5 min-w-[5.5rem] items-center", className)}
      aria-hidden={!ready}
    >
      {ready ? (
        <HustlgramLogoAnimated
          key="header-logo-play"
          size="header"
          themed
          glow={false}
        />
      ) : null}
    </div>
  );
}
