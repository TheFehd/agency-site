export const CAL_NAMESPACE = "30min";

export const DEFAULT_CAL_LINK = "fehd-tassi-sd90rd/30min";

export function getCalLink(): string {
  return process.env.NEXT_PUBLIC_CALCOM_LINK ?? DEFAULT_CAL_LINK;
}

/** Defaults to light so the embed matches the site's white-first theme. */
export function getCalTheme(override?: "light" | "dark"): "light" | "dark" {
  if (override) return override;
  const theme = process.env.NEXT_PUBLIC_CALCOM_THEME;
  if (theme === "dark") return "dark";
  return "light";
}

export function isCalConfigured(): boolean {
  const link = getCalLink();
  return Boolean(link && link.length > 0 && !link.includes("your-username"));
}

export function getCalInlineConfig(theme?: "light" | "dark") {
  return {
    layout: "month_view" as const,
    useSlotsViewOnSmallScreen: "true" as const,
    theme: getCalTheme(theme),
  };
}
