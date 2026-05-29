"use client";

import { BlurTextReveal } from "@/components/motion/blur-text-reveal";
import { ShineText } from "@/components/motion/shine-text";
import { SectionReveal } from "@/components/motion/section-reveal";
import { BookButton } from "@/components/ui/book-button";
import { SpinBorderCard } from "@/components/ui/spin-border-card";
import { siteConfig } from "@/content/site";

export function FinalCtaSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SpinBorderCard
            innerClassName="flex flex-col items-center gap-3 px-6 py-16 text-center sm:gap-4 sm:px-12 sm:py-20"
          >
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
            <ShineText className="max-w-lg text-base sm:text-lg">
              Book a short discovery call—no pressure, just clarity on fit, scope, and
              timeline.
            </ShineText>
            <BookButton
              href="#book"
              className="mt-4 min-w-0 rounded-full px-8 sm:mt-6"
            >
              {siteConfig.cta.primary}
            </BookButton>
          </SpinBorderCard>
        </SectionReveal>
      </div>
    </section>
  );
}
