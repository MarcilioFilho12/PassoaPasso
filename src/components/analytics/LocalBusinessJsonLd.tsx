import { siteConfig, siteUrl } from "@/constants/site";
import { siteContent } from "@/data/site-content";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: `${siteConfig.name} Recreação Infantil`,
    description: siteContent.meta.description,
    url: siteUrl,
    telephone: siteConfig.contact.phoneHref.replace("tel:", ""),
    image: `${siteUrl}${siteConfig.brand.logoSquare}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.street,
      addressLocality: siteConfig.location.city,
      addressRegion: "SC",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.lat,
      longitude: siteConfig.location.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:00",
      closes: "18:00",
    },
    sameAs: [siteConfig.urls.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
