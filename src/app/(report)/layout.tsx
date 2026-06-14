import { ReportShell } from "@/components/lead-reports/report-shell";

export default function ReportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReportShell>{children}</ReportShell>;
}
