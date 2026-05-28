"use client";

import { BlurTextReveal } from "@/components/motion/blur-text-reveal";
import { SectionReveal } from "@/components/motion/section-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/content/faq";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 border-b border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers to your questions"
            description="Clear, helpful responses—so you know how we work before you book."
          />
        </SectionReveal>

        <Accordion className="mt-12 w-full max-w-3xl">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left">
                <BlurTextReveal
                  as="span"
                  text={item.question}
                  by="word"
                  delay={index * 0.04}
                />
              </AccordionTrigger>
              <AccordionContent>
                <BlurTextReveal
                  as="p"
                  text={item.answer}
                  by="word"
                  delay={0.05}
                  className="text-muted-foreground"
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
