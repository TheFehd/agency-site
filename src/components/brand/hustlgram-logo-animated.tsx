import { cn } from "@/lib/utils";

import "./hustlgram-intro.css";

type HustlgramLogoAnimatedProps = {
  size?: "splash" | "compact" | "header" | "footer";
  /** Black on light / white on dark (for site chrome, not black splash) */
  themed?: boolean;
  glow?: boolean;
  className?: string;
};

export function HustlgramLogoAnimated({
  size = "splash",
  themed = false,
  glow = true,
  className,
}: HustlgramLogoAnimatedProps) {
  return (
    <div
      className={cn(
        "hg-intro",
        size === "compact" && "hg-intro--compact",
        size === "header" && "hg-intro--header",
        size === "footer" && "hg-intro--footer",
        themed && "hg-intro--themed",
        !glow && "hg-intro--no-glow",
        className,
      )}
      aria-label="Hustlgram"
      role="img"
    >
      <div className="hg-intro__lockup">
        <img
          className="hg-intro__mark"
          src="/brand/hustlgram-mark.png"
          alt=""
          width={214}
          height={343}
          decoding="async"
        />
        <img
          className="hg-intro__text"
          src="/brand/hustlgram-wordmark.png"
          alt="Hustlgram"
          width={985}
          height={86}
          decoding="async"
        />
      </div>
    </div>
  );
}
