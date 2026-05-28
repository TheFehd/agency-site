"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { BlurTextReveal } from "@/components/motion/blur-text-reveal";
import { FlippingWords } from "@/components/motion/flipping-words";
import { ProfileAboutDialog } from "@/components/profile/profile-about-dialog";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border text-center"
    >
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8 lg:pt-36">
        <motion.div
          className="mx-auto mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProfileAboutDialog />
        </motion.div>

        <h1 className="font-heading mx-auto max-w-4xl text-3xl font-medium leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          <span>{siteConfig.hero.titlePrefix}</span>{" "}
          <FlippingWords
            words={siteConfig.hero.titleWords}
            className="text-foreground"
          />
        </h1>

        <BlurTextReveal
          as="p"
          text={siteConfig.hero.description}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg"
          delay={0.2}
          by="word"
        />

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="#book"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 min-w-[9.5rem] rounded-full px-6",
            )}
          >
            {siteConfig.cta.primary}
          </Link>
          <Link
            href="#projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 min-w-[9.5rem] rounded-full px-6",
            )}
          >
            {siteConfig.cta.secondary}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
