"use client";

import { personalInfo, education, socialLinks } from "@/lib/data";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    description: personalInfo.bio,
    email: personalInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: personalInfo.location,
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: education.university,
    },
    sameAs: socialLinks.map(link => link.url),
    url: "https://nawazishkhan.in",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

