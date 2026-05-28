"use client";

import { useState } from "react";

import { SectionReveal } from "@/components/motion/section-reveal";
import { Button } from "@/components/ui/button";
import { BlurTextReveal } from "@/components/motion/blur-text-reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/ui/section-heading";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/content/site";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Could not send your message.",
      );
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-b border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionReveal>
            <SectionHeading
              eyebrow="Contact"
              title="Ready to move forward?"
              description="Share a bit about your project—we'll reply within one business day. Prefer to talk live? Book a call above."
            />
            <p className="mt-8 text-sm text-muted-foreground">
              <BlurTextReveal
                as="span"
                text="Or email us at"
                by="word"
                delay={0.2}
                className="inline"
              />{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border/80 bg-card/40 p-6 sm:p-8">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your goals, timeline, and budget range."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-11 w-full rounded-full sm:w-auto"
                disabled={state === "loading"}
              >
                {state === "loading" ? "Sending…" : "Send message"}
              </Button>
              {state === "success" ? (
                <p className="text-sm text-primary" role="status">
                  Thanks—we received your message and will be in touch soon.
                </p>
              ) : null}
              {state === "error" ? (
                <p className="text-sm text-destructive" role="alert">
                  {errorMessage}
                </p>
              ) : null}
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
