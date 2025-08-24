import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
// import FAQSection from "@/components/FAQSection";
import { siteConfig } from "@/lib/metadata";

// Generate metadata for the homepage
export async function generateMetadata() {
  return {
    title:
      "Build High-Performance Websites with Our Web Development Agency | dunetech",
    description:
      "Professional web development agency specializing in React, Next.js, and modern web technologies. We build high-performance websites, custom web applications, and provide SEO optimization services.",
    keywords: siteConfig.keywords,
    openGraph: {
      title: "Build High-Performance Websites with Our Web Development Agency",
      description:
        "Professional web development agency specializing in React, Next.js, and modern web technologies. We build high-performance websites, custom web applications, and provide SEO optimization services.",
      url: siteConfig.url,
      images: [
        {
          url: `${siteConfig.url}/hero-image.jpg`,
          width: 1200,
          height: 630,
          alt: "dunetech Web Development Agency - Building Modern Websites",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Build High-Performance Websites with Our Web Development Agency",
      description:
        "Professional web development agency specializing in React, Next.js, and modern web technologies.",
      images: [`${siteConfig.url}/hero-image.jpg`],
    },
    alternates: {
      canonical: siteConfig.url,
    },
  };
}

export default function Home() {
  return (
    <>
      <Banner />
      <ScrollAnimationWrapper animation="fadeUp" delay={0}>
        <Services />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper animation="fadeUp" delay={200}>
        <Portfolio />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper animation="fadeUp" delay={100}>
        <Team />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper animation="fadeUp" delay={0}>
        <Footer />
      </ScrollAnimationWrapper>
    </>
  );
}
