/**
 * STRUCTURED DATA (JSON-LD)
 *
 * Schema.org markup for search engines.
 * Includes ProfessionalService, Person, and WebSite schemas.
 */

const BASE_URL = "https://echocyber.io";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#organization`,
      name: "Echo Cyber Solutions",
      url: BASE_URL,
      description:
        "Fractional CTO & CISO services helping growing businesses navigate technology complexity",
      areaServed: [
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "Country",
          name: "Canada",
        },
      ],
      founder: {
        "@type": "Person",
        "@id": `${BASE_URL}/#founder`,
        name: "Michael Faas",
        jobTitle: "Fractional CTO & CISO",
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional Certification",
          name: "CISSP",
          description: "Certified Information Systems Security Professional",
        },
        sameAs: ["https://www.linkedin.com/in/mfaas/"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Engagement Options",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tune",
              description:
                "Strategy Session - A focused engagement to assess your technology landscape and identify opportunities",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Signal",
              description:
                "Fractional Engagement - Ongoing part-time technology leadership integrated with your team",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Echo",
              description:
                "Advisory - Continuous guidance and strategic counsel for established clients",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Echo Cyber Solutions",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
