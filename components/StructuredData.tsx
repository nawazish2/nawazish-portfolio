"use client";

import { DATA } from "@/lib/data";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    jobTitle: "Full Stack Developer",
    description: DATA.description,
    email: DATA.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: DATA.location,
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: DATA.education[0]?.school || "I.K. Gujral Punjab Technical University",
    },
    sameAs: Object.values(DATA.contact.social).map(link => link.url),
    url: DATA.url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

