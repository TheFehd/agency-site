import { siteConfig } from "@/content/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    // Omitted entirely rather than emitted empty when no real profile exists.
    ...(siteConfig.socials.length > 0
      ? { sameAs: siteConfig.socials.map((s) => s.href) }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
