import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickServiceFinder } from "@/components/home/QuickServiceFinder";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { PricingEstimator } from "@/components/home/PricingEstimator";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { EnquiryForm } from "@/components/common/EnquiryForm";
import { ResourcesPreviewSection } from "@/components/home/ResourcesPreviewSection";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { mainFaqs } from "@/data/faqsData";

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | ${siteConfig.positioning}`,
  description: siteConfig.description,
  keywords: [
    "Affordable accounting services India",
    "GST registration India",
    "GST return filing Delhi",
    "TDS return filing 24Q 26Q",
    "Day to day accounting for small businesses",
    "Bank reconciliation BRS",
    "Debtors creditors reconciliation",
    "Balance sheet preparation",
    "Income tax return filing",
    "MSME Udyam registration assistance",
    "best GST services India",
    "GST filing services near me",
  ],
  alternates: {
    canonical: siteConfig.canonicalUrl,
  },
  openGraph: {
    title: `${siteConfig.businessName} - ${siteConfig.positioning}`,
    description: siteConfig.description,
    url: siteConfig.canonicalUrl,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.canonicalUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: siteConfig.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} - Affordable GST & Accounting`,
    description: siteConfig.description,
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.canonicalUrl}/#website`,
        "url": siteConfig.canonicalUrl,
        "name": siteConfig.businessName,
        "description": siteConfig.description,
        "inLanguage": "en-IN"
      },
      {
        "@type": "AccountingService",
        "@id": `${siteConfig.canonicalUrl}/#organization`,
        "name": siteConfig.businessName,
        "url": siteConfig.canonicalUrl,
        "logo": `${siteConfig.canonicalUrl}/icon.svg`,
        "image": `${siteConfig.canonicalUrl}/icon.svg`,
        "description": siteConfig.description,
        "telephone": siteConfig.contact.phone,
        "email": siteConfig.contact.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.location.address,
          "addressLocality": siteConfig.location.city,
          "addressRegion": siteConfig.location.state,
          "postalCode": siteConfig.location.pincode,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.6289",
          "longitude": "77.2219"
        },
        "openingHours": "Mo-Sa 09:30-18:30",
        "priceRange": "₹₹",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.phone,
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Taxoras Accounting & GST Compliance Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GST Registration" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GST Return Filing (GSTR-1 & 3B)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GSTR-2B ITC Reconciliation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Quarterly TDS Return Filing (24Q/26Q)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Day-to-Day Bookkeeping & Accounting" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bank Reconciliation (BRS)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Debtors & Creditors Reconciliation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MSME Udyam Registration" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Balance Sheet & P&L Preparation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Income Tax Return Filing" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.canonicalUrl}/#faq`,
        "mainEntity": mainFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main selection:bg-brand-blue selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* A. Announcement Bar is in Navbar */}
        {/* B. Main Navigation is in Navbar */}

        {/* C. Hero Section */}
        <HeroSection />

        {/* D. Interactive Quick Service Finder */}
        <QuickServiceFinder />

        {/* E. Core Service Grid (All 10 Core Services) */}
        <ServicesGrid />

        {/* F. Affordable Pricing Proposition & Scope */}
        <PricingEstimator />

        {/* G. How It Works (4-Step Timeline) */}
        <HowItWorksSection />

        {/* I. Trust & Process Section */}
        <WhyChooseUsSection />

        {/* Working Customer Enquiry Form Section */}
        <section className="py-12 sm:py-20 bg-surface-bg border-b border-surface-border scroll-mt-24" id="enquire">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
                Direct WhatsApp Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight mt-3">
                Get an Instant Quote & Scope on WhatsApp
              </h2>
              <p className="text-xs sm:text-sm text-text-muted mt-2 max-w-xl mx-auto">
                Share your business details below. A dedicated Taxoras compliance coordinator will review your requirements and reply directly on WhatsApp with itemized pricing.
              </p>
            </div>

            <EnquiryForm />
          </div>
        </section>

        {/* J. Educational Content Preview */}
        <ResourcesPreviewSection />

        {/* K. FAQ Section */}
        <HomeFaqSection />

      </main>

      {/* M. Footer */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
