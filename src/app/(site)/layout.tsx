import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div id="site-shell" className="site-shell flex min-h-full flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
      <JsonLd />
    </>
  );
}
