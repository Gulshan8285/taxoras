import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { allLocations, getLocationById, allServiceLocations } from "@/data/locationsData";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { EnquiryForm } from "@/components/common/EnquiryForm";
import {
  MapPin,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Building2,
  ArrowRight,
  HelpCircle,
  Phone
} from "lucide-react";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return allLocations.map((loc) => ({
    city: loc.id,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocationById(city);

  if (!loc) {
    return { title: "Location Not Found" };
  }

  return {
    title: `Accounting, GST & Tax Compliance Services in ${loc.city}, ${loc.state}`,
    description: `Professional, affordable bookkeeping, GST return filing, TDS compliance, and financial reporting for businesses in ${loc.city}, ${loc.state}.`,
    openGraph: {
      title: `${loc.city} Accounting & Tax Compliance | ${siteConfig.businessName}`,
      description: loc.description,
      type: "website",
    }
  };
}

export default async function CityDetailPage({ params }: CityPageProps) {
  const { city } = await params;
  const loc = getLocationById(city);

  if (!loc) {
    notFound();
  }

  const cityServicePages = allServiceLocations.filter((sl) => sl.citySlug === loc.id);

  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Breadcrumb Header */}
        <div className="bg-white border-b border-surface-border py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-xs text-text-muted">
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/locations" className="hover:text-navy transition-colors">
                Locations
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="font-semibold text-navy">
                {loc.city}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Header */}
        <section className="bg-white border-b border-surface-border py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
                  {loc.tier} Business Market
                </span>
                <span className="text-xs font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                  {loc.state}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
                Accounting & Tax Compliance Services in {loc.city}
              </h1>

              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
                {loc.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#city-enquiry"
                  className="bg-navy hover:bg-navy-light text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all shadow-sm"
                >
                  <span>Discuss {loc.city} Requirements</span>
                </a>
                <a
                  href={siteConfig.links.whatsappUrl("Accounting & Tax Compliance", loc.city)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-colors shadow-sm"
                >
                  <span>WhatsApp Contextual Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 8 Columns */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Delivery Model & Commercial Context */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-4">
                <h2 className="text-lg font-bold text-navy flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-brand-blue" />
                  <span>Commercial Ecosystem in {loc.city}</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {loc.commercialEcosystem}
                </p>
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-brand-blue">
                  <strong>Service Delivery Model: </strong>
                  {loc.serviceDelivery}. Clients in {loc.city} interact directly with our senior compliance team via digital intake, secure folders, and dedicated WhatsApp communication.
                </div>
              </section>

              {/* Popular Services in City */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
                <h2 className="text-lg font-bold text-navy mb-4">
                  High-Demand Compliance Solutions in {loc.city}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {loc.popularServices.map((svc, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-start gap-2.5 text-xs text-navy font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Service Pages for this City */}
              {cityServicePages.length > 0 && (
                <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
                  <h2 className="text-lg font-bold text-navy mb-4">
                    Specific {loc.city} Service Landings
                  </h2>
                  <div className="space-y-3">
                    {cityServicePages.map((sl, idx) => (
                      <Link
                        key={idx}
                        href={`/locations/${sl.citySlug}/${sl.serviceSlug}`}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-blue hover:bg-blue-50/40 transition-all text-xs font-semibold text-navy group"
                      >
                        <div>
                          <span>{sl.title}</span>
                          <span className="block text-[11px] text-text-muted font-normal mt-0.5">{sl.description}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-brand-blue group-hover:translate-x-1 transition-transform shrink-0" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Local FAQs */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
                <h2 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-blue" />
                  <span>Frequently Asked Questions for {loc.city} Businesses</span>
                </h2>
                <div className="space-y-3">
                  {loc.localFaqs.map((faq, fIdx) => (
                    <div key={fIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                      <h4 className="font-bold text-navy">{faq.question}</h4>
                      <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Official State Tax Portal Reference */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-text-muted">
                <span>Official {loc.state} Tax Administration Portal:</span>
                <a
                  href={loc.statePortalReference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                >
                  <span>{loc.statePortalReference.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Enquiry Form */}
              <div id="city-enquiry">
                <EnquiryForm
                  title={`Request a Quote for Your ${loc.city} Business`}
                  subtitle={`Share your entity constitution and volume. We will furnish an itemized service scope and transparent quote.`}
                />
              </div>

            </div>

            {/* Right 4 Columns */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-xs sticky top-24 space-y-5">
                <h3 className="text-base font-bold text-navy pb-3 border-b border-surface-border">
                  {loc.city} Regional Desk
                </h3>
                <div className="space-y-3 text-xs text-text-muted">
                  <p>
                    Serving businesses across <strong>{loc.city}</strong> and all districts of <strong>{loc.state}</strong> through secure digital coordination.
                  </p>
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="font-semibold text-navy block text-xs">Helpline Contact:</span>
                    <a href={siteConfig.links.phoneUrl} className="text-brand-blue font-bold flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{siteConfig.contact.phoneFormatted}</span>
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-surface-border">
                  <Link
                    href="/locations"
                    className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                  >
                    <span>View All India Locations</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp location={loc.city} />
    </div>
  );
}
