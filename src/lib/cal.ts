export const CAL_NAMESPACE = "30min";

export const DEFAULT_CAL_LINK = "fehd-tassi-sd90rd/30min";

export function getCalLink(): string {
  return process.env.NEXT_PUBLIC_CALCOM_LINK ?? DEFAULT_CAL_LINK;
}

export function getCalTheme(): "light" | "dark" {
  const theme = process.env.NEXT_PUBLIC_CALCOM_THEME;
  return theme === "light" ? "light" : "dark";
}

export function isCalConfigured(): boolean {
  const link = getCalLink();
  return Boolean(link && link.length > 0 && !link.includes("your-username"));
}

export function getCalInlineConfig() {
  return {
    layout: "month_view" as const,
    useSlotsViewOnSmallScreen: "true" as const,
    theme: getCalTheme(),
  };
}
