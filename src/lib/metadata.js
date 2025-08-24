// Site metadata configuration
export const siteConfig = {
  name: "dunetech",
  title:
    "Build High-Performance Websites with Our Web Development Agency | dunetech",
  description:
    "Professional web development agency specializing in React, Next.js, and modern web technologies. We build high-performance websites, custom web applications, and provide SEO optimization services.",
  url: "https://dunetech.net", // Replace with your actual domain
  ogImage: "https://dunetech.net/logo.png",
  creator: "dunetech Team",
  keywords: [
    "web development agency",
    "React development",
    "Next.js development",
    "custom web applications",
    "SEO optimization",
    "UI/UX design",
    "e-commerce development",
    "responsive web design",
    "full-stack development",
    "modern web technologies",
  ],
  author: {
    name: "dunetech",
    url: "https://dunetech.net",
  },
};

// Generate JSON-LD structured data
export function generateStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "dunetech",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "hello@dunetech.com",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [
      "https://twitter.com/dunetech",
      "https://linkedin.com/company/dunetech",
      "https://github.com/dunetech",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "dunetech",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Web Development",
            description:
              "Full-stack web application development using React and Next.js",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
            description:
              "Technical SEO and performance optimization for better search rankings",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description: "Modern, responsive design focused on user experience",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What technologies do you use for web development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in React, Next.js, TypeScript, Tailwind CSS, and modern web technologies to build high-performance websites.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project timelines vary based on complexity, but typically range from 2-8 weeks for most websites and web applications.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide SEO optimization services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide comprehensive SEO optimization including technical SEO, performance optimization, and content strategy.",
        },
      },
    ],
  };

  return {
    organizationSchema,
    websiteSchema,
    servicesSchema,
    faqSchema,
  };
}
