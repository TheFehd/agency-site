import { BookButton } from "@/components/ui/book-button";
import { SpinBorderCard } from "@/components/ui/spin-border-card";

type ReportFinalCtaProps = {
  eyebrow?: string;
  title: string;
  description: string;
  button: string;
  href: string;
};

export function ReportFinalCta({
  eyebrow = "Next step",
  title,
  description,
  button,
  href,
}: ReportFinalCtaProps) {
  return (
    <SpinBorderCard
      innerClassName="flex flex-col items-center gap-3 px-4 py-10 text-center sm:gap-4 sm:px-12 sm:py-20"
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </p>
      <h3 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h3>
      <p className="max-w-lg text-sm text-muted-foreground sm:text-lg">{description}</p>
      <BookButton href={href} className="mt-4 w-full min-w-0 rounded-full px-8 sm:mt-6 sm:w-auto">
        {button}
      </BookButton>
    </SpinBorderCard>
  );
}
