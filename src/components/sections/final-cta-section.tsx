"use client";

import Link from "next/link";

import { BlurTextReveal } from "@/components/motion/blur-text-reveal";
import { SectionReveal } from "@/components/motion/section-reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="relative flex flex-col items-center gap-3 overflow-hidden rounded-3xl border border-border bg-background px-6 py-16 text-center sm:gap-4 sm:px-12 sm:py-20">
            <BlurTextReveal
              as="p"
              text="Next step"
              by="block"
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
            />
            <BlurTextReveal
              as="h2"
              text="Let's build something clients remember."
              by="word"
              delay={0.06}
              className="font-heading max-w-2xl text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl"
            />
            <BlurTextReveal
              as="p"
              text="Book a short discovery call—no pressure, just clarity on fit, scope, and timeline."
              by="word"
              delay={0.12}
              className="max-w-lg text-muted-foreground"
            />
            <Link
              href="#book"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-4 inline-flex h-11 rounded-full px-8 sm:mt-6",
              )}
            >
              {siteConfig.cta.primary}
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
