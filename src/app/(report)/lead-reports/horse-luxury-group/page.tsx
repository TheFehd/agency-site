import type { Metadata } from "next";

import { LeadReportView } from "@/components/lead-reports/lead-report-view";
import { horseLuxuryGroupReport } from "@/content/lead-reports/horse-luxury-group";

// robots is declared once for the whole segment in ../../layout.tsx
export const metadata: Metadata = {
  title: horseLuxuryGroupReport.title,
};

export default function HorseLuxuryGroupReportPage() {
  return <LeadReportView report={horseLuxuryGroupReport} />;
}
