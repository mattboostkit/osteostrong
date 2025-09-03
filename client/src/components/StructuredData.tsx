export const LocalBusinessSchema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://www.osteostrongtw.co.uk/#business",
    "name": "OsteoStrong Tunbridge Wells",
    "image": "https://www.osteostrongtw.co.uk/og-image.jpg",
    "logo": "https://www.osteostrongtw.co.uk/logo-for-schema.png",
    "url": "https://www.osteostrongtw.co.uk",
    "telephone": "+441892251360",
    "email": "info@osteostrongtw.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "26 High Street",
      "addressLocality": "Tunbridge Wells",
      "addressRegion": "Kent",
      "postalCode": "TN1 1UX",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.1324,
      "longitude": 0.2631
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday"],
        "opens": "09:00",
        "closes": "15:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "12:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:00",
        "closes": "15:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "££",
    "description": "OsteoStrong Tunbridge Wells offers a revolutionary non-pharmaceutical approach to building stronger bones, improving muscle strength and balance in just 15 minutes per week.",
    "sameAs": [
      "https://www.facebook.com/OsteoStrongTunbridgeWells",
      "https://www.instagram.com/osteostrongtunbridgewells",
      "https://www.linkedin.com/company/osteostrong-tunbridge-wells",
      "https://www.youtube.com/@OsteoStrongTunbridgeWells",
      "https://www.tiktok.com/@osteostrongtunbridgewells"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "OsteoStrong Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "OsteoStrong Session",
            "description": "15-minute weekly session using specialized equipment to improve bone density and strength"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PEMF Therapy",
            "description": "Pulsed Electromagnetic Field therapy for pain relief and healing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "NormaTec Compression Boots",
            "description": "Advanced compression therapy for muscle recovery and circulation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Red Light Therapy",
            "description": "Photobiomodulation therapy for skin health and healing"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export const OrganizationSchema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.osteostrongtw.co.uk/#organization",
    "name": "OsteoStrong Tunbridge Wells",
    "url": "https://www.osteostrongtw.co.uk",
    "logo": "https://www.osteostrongtw.co.uk/logo-for-schema.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+441892251360",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/OsteoStrongTunbridgeWells",
      "https://www.instagram.com/osteostrongtunbridgewells",
      "https://www.linkedin.com/company/osteostrong-tunbridge-wells",
      "https://www.youtube.com/@OsteoStrongTunbridgeWells",
      "https://www.tiktok.com/@osteostrongtunbridgewells"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export const FAQSchema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is OsteoStrong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OsteoStrong is a unique place where you can go to improve bone density, muscular strength, balance, and overall health. It is not a gym, diet, supplement, pharmaceutical, or a medical treatment. OsteoStrong is a unique place where you can go to improve your overall health by focusing on the one thing we all have in common: a skeletal system."
        }
      },
      {
        "@type": "Question",
        "name": "How often do I need to come to OsteoStrong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend one 15-minute session per week. The bone remodeling process takes about 5-7 days, so coming more frequently won't accelerate your results."
        }
      },
      {
        "@type": "Question",
        "name": "Is OsteoStrong safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, OsteoStrong is safe for people of all ages and fitness levels. Our trained coaches guide you through each session, ensuring proper form and safety throughout."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};