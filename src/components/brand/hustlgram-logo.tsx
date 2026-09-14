import { cn } from "@/lib/utils";

type HustlgramLogoProps = {
  className?: string;
  variant?: "lockup" | "mark" | "wordmark";
};

/** White artwork from intro — render black on light, white on dark */
const tone = "brightness-0 dark:brightness-100";

type ArtworkKey = "mark" | "wordmark";

const artwork: Record<ArtworkKey, { src: string; width: number; height: number }> = {
  mark: { src: "/brand/hustlgram-mark.webp", width: 214, height: 343 },
  wordmark: { src: "/brand/hustlgram-wordmark.webp", width: 985, height: 86 },
};

/**
 * Raw <img> rather than next/image: these marks carry a CSS brightness filter for
 * theme inversion and render at a handful of fixed heights, so the optimizer has
 * nothing to contribute. WebP is universally supported, so there is no fallback
 * chain to build.
 */
function BrandArtwork({
  kind,
  alt,
  className,
  decorative,
}: {
  kind: ArtworkKey;
  alt: string;
  className?: string;
  decorative?: boolean;
}) {
  const { src, width, height } = artwork[kind];

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={decorative ? "" : alt}
      aria-hidden={decorative || undefined}
      width={width}
      height={height}
      className={className}
      decoding="async"
    />
  );
}

export function HustlgramLogo({
  className,
  variant = "lockup",
}: HustlgramLogoProps) {
  if (variant === "mark") {
    return (
      <BrandArtwork
        kind="mark"
        alt="Hustlgram"
        className={cn("h-9 w-auto", tone, className)}
      />
    );
  }

  if (variant === "wordmark") {
    return (
      <BrandArtwork
        kind="wordmark"
        alt="Hustlgram"
        className={cn("h-6 w-auto sm:h-7", tone, className)}
      />
    );
  }

  return (
    <span
      className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}
    >
      <BrandArtwork
        kind="mark"
        alt="Hustlgram"
        decorative
        className={cn("h-8 w-auto sm:h-9", tone)}
      />
      <BrandArtwork
        kind="wordmark"
        alt="Hustlgram"
        className={cn("h-5 w-auto sm:h-6 md:h-7", tone)}
      />
    </span>
  );
}
