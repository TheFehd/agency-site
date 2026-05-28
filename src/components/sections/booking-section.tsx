"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

import { SectionReveal } from "@/components/motion/section-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  CAL_NAMESPACE,
  getCalInlineConfig,
  getCalLink,
  getCalTheme,
  isCalConfigured,
} from "@/lib/cal";

export function BookingSection() {
  const [ready, setReady] = useState(false);
  const calLink = getCalLink();
  const configured = isCalConfigured();

  useEffect(() => {
    void (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: getCalTheme(),
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      setReady(true);
    })();
  }, []);

  return (
    <section id="book" className="scroll-mt-20 border-b border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading
            eyebrow="Book a call"
            title="Let's talk"
            description="Pick a time that works for you. We'll discuss goals, timeline, and whether we're the right fit."
          />
        </SectionReveal>

        <div
          id="my-cal-inline-30min"
          className="relative mt-10 min-h-[680px] w-full overflow-auto rounded-2xl border border-border/80 bg-card/50 p-2 sm:mt-12 sm:p-4"
        >
          {!ready ? (
            <div
              className="absolute inset-4 animate-pulse rounded-xl bg-muted/40"
              aria-hidden
            />
          ) : null}

          {configured ? (
            <Cal
              namespace={CAL_NAMESPACE}
              calLink={calLink}
              style={{ width: "100%", height: "100%", minHeight: "640px", overflow: "scroll" }}
              config={getCalInlineConfig()}
            />
          ) : (
            <div className="flex min-h-[640px] flex-col items-center justify-center gap-4 px-6 text-center">
              <p className="text-lg font-medium">Cal.com not configured yet</p>
              <p className="max-w-md text-sm text-muted-foreground">
                Add your event link to{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                  NEXT_PUBLIC_CALCOM_LINK
                </code>{" "}
                in <code className="rounded bg-muted px-1.5 py-0.5 text-xs">.env.local</code>
                , then restart the dev server.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
