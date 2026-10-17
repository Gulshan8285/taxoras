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
    "MSME Udyam registration assistance"
  ],
  openGraph: {
    title: `${siteConfig.businessName} - ${siteConfig.positioning}`,
    description: siteConfig.description,
    type: "website",
    locale: "en_IN",
  }
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": siteConfig.businessName,
    "description": siteConfig.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.location.address,
      "addressLocality": siteConfig.location.city,
      "addressRegion": siteConfig.location.state,
      "postalCode": siteConfig.location.pincode,
      "addressCountry": "IN"
    },
    "telephone": siteConfig.contact.phone,
    "openingHours": "Mo-Sa 09:30-18:30",
    "priceRange": "₹₹",
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Accounting & Tax Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GST Registration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GST Return Filing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TDS Return Filing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Day-to-Day Accounting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bank Reconciliation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Income Tax Return Filing" } }
      ]
    }
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
        <section className="py-16 sm:py-24 bg-surface-bg border-b border-surface-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
                Start the Conversation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight mt-3">
                Request a Callback & Requirement Checklist
              </h2>
              <p className="text-xs sm:text-sm text-text-muted mt-2 max-w-xl mx-auto">
                No automated bot queues. Our accounting and tax compliance desk will review your entity details and reach out with transparent scope guidelines.
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
