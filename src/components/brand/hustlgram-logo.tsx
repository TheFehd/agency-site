import { cn } from "@/lib/utils";

type HustlgramLogoProps = {
  className?: string;
  variant?: "lockup" | "mark" | "wordmark";
};

/** White artwork from intro — render black on light, white on dark */
const tone = "brightness-0 dark:brightness-100";

export function HustlgramLogo({
  className,
  variant = "lockup",
}: HustlgramLogoProps) {
  if (variant === "mark") {
    return (
      <img
        src="/brand/hustlgram-mark.png"
        alt="Hustlgram"
        width={214}
        height={343}
        className={cn("h-9 w-auto", tone, className)}
        decoding="async"
      />
    );
  }

  if (variant === "wordmark") {
    return (
      <img
        src="/brand/hustlgram-wordmark.png"
        alt="Hustlgram"
        width={985}
        height={86}
        className={cn("h-6 w-auto sm:h-7", tone, className)}
        decoding="async"
      />
    );
  }

  return (
    <span
      className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}
    >
      <img
        src="/brand/hustlgram-mark.png"
        alt=""
        aria-hidden
        width={214}
        height={343}
        className={cn("h-8 w-auto sm:h-9", tone)}
        decoding="async"
      />
      <img
        src="/brand/hustlgram-wordmark.png"
        alt="Hustlgram"
        width={985}
        height={86}
        className={cn("h-5 w-auto sm:h-6 md:h-7", tone)}
        decoding="async"
      />
    </span>
  );
}
