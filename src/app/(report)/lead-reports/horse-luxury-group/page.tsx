import type { Metadata } from "next";

import { LeadReportView } from "@/components/lead-reports/lead-report-view";
import { horseLuxuryGroupReport } from "@/content/lead-reports/horse-luxury-group";

export const metadata: Metadata = {
  title: horseLuxuryGroupReport.title,
  robots: { index: false, follow: false },
};

export default function HorseLuxuryGroupReportPage() {
  return <LeadReportView report={horseLuxuryGroupReport} />;
}
