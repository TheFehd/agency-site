"use client";

import { useEffect, useRef, useState } from "react";

import { HustlgramLogoAnimated } from "@/components/brand/hustlgram-logo-animated";
import { cn } from "@/lib/utils";

export function FooterLogo({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("flex min-h-[2rem] items-center", className)}
      aria-label="Hustlgram"
    >
      {play ? (
        <HustlgramLogoAnimated
          key="footer-logo-play"
          size="footer"
          themed
          glow={false}
        />
      ) : (
        <span className="inline-block h-5 w-[5.5rem]" aria-hidden />
      )}
    </div>
  );
}
