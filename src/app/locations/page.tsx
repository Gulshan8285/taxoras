import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { allLocations, allServiceLocations, regionalDirectories } from "@/data/locationsData";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import {
  MapPin,
  Building2,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Phone,
  Globe2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/locations`,
  },
  title: "Pan-India GST & Tax Compliance Locations | 28 States & UTs | Taxoras",
  description: "Explore Taxoras accounting, GST return filing, and tax compliance coverage across all 28 Indian States & 8 Union Territories. Fast digital onboarding and nationwide CA review.",
  keywords: [
    "GST filing Delhi",
    "GST services Mumbai",
    "accounting services Bangalore",
    "GST filing Jaipur",
    "GST compliance India",
    "GST filing Pune",
    "GST return Ahmedabad",
    "GST filing Hyderabad",
    "GST consultant Chennai",
    "GST return filing Kolkata",
  ],
  openGraph: {
    title: "Pan-India Accounting & GST Coverage | Taxoras",
    description: "Digital GST & accounting support across all Indian states and major commercial hubs.",
    url: `${siteConfig.canonicalUrl}/locations`,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.businessName,
    images: [{ url: `${siteConfig.canonicalUrl}/opengraph-image`, width: 1200, height: 630, alt: "Taxoras Pan-India Locations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pan-India GST & Accounting | Taxoras",
    description: "Serving businesses across all states & UTs via digital onboarding.",
    images: [`${siteConfig.canonicalUrl}/opengraph-image`],
  },
};

export default function LocationsIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": `${siteConfig.canonicalUrl}/locations/#organization`,
        name: siteConfig.businessName,
        url: `${siteConfig.canonicalUrl}/locations`,
        areaServed: allLocations.map((loc) => ({
          "@type": "City",
          name: loc.city,
        })),
        description: "Pan-India accounting, GST return filing, TDS compliance, and MSME registration services across all 28 Indian States and Union Territories.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.canonicalUrl}/locations/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.canonicalUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: `${siteConfig.canonicalUrl}/locations`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Header */}
        <section className="bg-white border-b border-surface-border py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-amber-600" />
              Pan-India Coverage — All 28 States & UTs
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">
              Accounting & GST Compliance Across India
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
              We serve registered businesses, manufacturers, e-commerce sellers, and startups across all Indian states and Union Territories through an organized online delivery model with transparent pricing starting at ₹799/month.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
          
          {/* Regional Hubs Sections */}
          {regionalDirectories.map((rd) => (
            <div key={rd.region} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-surface-border gap-2">
                <div>
                  <h2 className="text-xl font-bold text-navy flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    <span>{rd.region} Region Commercial Hubs</span>
                  </h2>
                  <p className="text-xs text-text-muted mt-0.5">{rd.description}</p>
                </div>
                <span className="text-xs font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full self-start sm:self-auto">
                  {rd.locations.length} Commercial Desks
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rd.locations.map((loc) => (
                  <div
                    key={loc.id}
                    className="bg-white rounded-2xl border border-surface-border p-6 card-hover shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2.5 py-0.5 rounded-full">
                          {loc.tier}
                        </span>
                        <span className="text-[11px] font-semibold text-text-muted">
                          {loc.state}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-navy mb-1">
                        <Link href={`/locations/${loc.id}`} className="hover:text-brand-blue transition-colors">
                          {loc.city}
                        </Link>
                      </h3>

                      <span className="text-[11px] font-medium text-teal block mb-3">
                        {loc.badge}
                      </span>

                      <p className="text-xs text-text-muted leading-relaxed mb-4">
                        {loc.description}
                      </p>

                      <div className="space-y-1 mb-4 pt-3 border-t border-slate-100">
                        <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                          Popular Services in {loc.city}:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {loc.popularServices.slice(0, 3).map((svc, sIdx) => (
                            <span key={sIdx} className="text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-100">
                              {svc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-surface-border space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <Link
                          href={`/locations/${loc.id}/gst-return-filing`}
                          className="text-amber-400 hover:text-amber-300 font-semibold"
                        >
                          GST Filing
                        </Link>
                        <span className="text-slate-400">•</span>
                        <Link
                          href={`/locations/${loc.id}/gst-registration`}
                          className="text-amber-400 hover:text-amber-300 font-semibold"
                        >
                          GST Registration
                        </Link>
                        <span className="text-slate-300">•</span>
                        <Link
                          href={`/locations/${loc.id}`}
                          className="text-brand-blue hover:underline font-bold inline-flex items-center gap-0.5"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Featured Service-City Landing Pages Section */}
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold text-navy mb-2">
              Featured Service & Regional Landing Desks
            </h2>
            <p className="text-xs text-text-muted mb-6">
              In-depth compliance desks with state tax department references, local FAQs, and dedicated CA support
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allServiceLocations.slice(0, 18).map((sl, idx) => (
                <Link
                  key={idx}
                  href={`/locations/${sl.citySlug}/${sl.serviceSlug}`}
                  className="p-4 rounded-xl border border-surface-border hover:border-brand-blue hover:bg-blue-50/30 transition-all group block"
                >
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                    {sl.citySlug.toUpperCase()}
                  </span>
                  <h4 className="text-xs font-bold text-navy group-hover:text-brand-blue transition-colors mb-1">
                    {sl.title}
                  </h4>
                  <p className="text-[11px] text-text-muted line-clamp-2">
                    {sl.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Honest Remote Delivery Disclaimer */}
          <div className="bg-slate-50 rounded-2xl border border-surface-border p-6 flex items-start gap-3.5 text-xs text-text-muted leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-teal shrink-0 mt-0.5" />
            <div>
              <strong className="text-navy block mb-0.5">Transparent Pan-India Operational Model:</strong>
              Unless an in-person physical consultation is explicitly scheduled at our primary office in {siteConfig.location.city}, all pan-India engagements are delivered digitally via secure online document intake, authorized portal filing, and direct phone/WhatsApp coordination across all 28 States and 8 Union Territories.
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
