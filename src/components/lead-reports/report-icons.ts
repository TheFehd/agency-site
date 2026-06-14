import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Building2,
  CalendarCheck,
  Gauge,
  LayoutTemplate,
  Menu,
  MousePointerClick,
  Rocket,
  ShieldCheck,
  Smartphone,
  Star,
  User,
  Zap,
} from "lucide-react";

export const reportIcons = {
  booking: CalendarCheck,
  speed: Smartphone,
  proof: Star,
  template: LayoutTemplate,
  cta: MousePointerClick,
  menu: Menu,
  subject: Building2,
  reputation: Star,
  leaks: AlertTriangle,
  prepared: User,
  performance: Gauge,
  build: Rocket,
  seo: ShieldCheck,
  growth: Zap,
} as const satisfies Record<string, LucideIcon>;

export type ReportIconName = keyof typeof reportIcons;
