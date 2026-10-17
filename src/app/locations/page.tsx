import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { allLocations, allServiceLocations } from "@/data/locationsData";
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
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "India-Wide Locations & Commercial Hubs | Taxoras",
  description: "Explore our accounting, GST, and tax compliance coverage across Tier 1, Tier 2, and Tier 3 cities in India. Remote digital onboarding with nationwide support.",
};

export default function LocationsIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Header */}
        <section className="bg-white border-b border-surface-border py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Pan-India Coverage
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">
              Accounting & Tax Compliance Services Across India
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
              We serve registered businesses, startups, and traders across all Indian states and Union Territories through an organized online delivery model with zero regional compromise.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          
          {/* Main Locations Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-navy">Major Commercial Hubs</h2>
                <p className="text-xs text-text-muted">Explore regional compliance guidance and official state portal links</p>
              </div>
              <span className="text-xs font-semibold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full">
                Tier 1 & Tier 2 Hubs
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allLocations.map((loc) => (
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

                    <h3 className="text-lg font-bold text-navy mb-1.5">
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

                  <div className="pt-4 border-t border-surface-border flex items-center justify-between">
                    <span className="text-[11px] text-text-muted">
                      {loc.serviceDelivery.split("&")[0]}
                    </span>
                    <Link
                      href={`/locations/${loc.id}`}
                      className="text-xs font-semibold text-brand-blue hover:text-brand-blue-hover inline-flex items-center gap-1"
                    >
                      <span>Explore Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Curated Service-City Landing Pages Section */}
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold text-navy mb-2">
              Featured Service & Regional Pages
            </h2>
            <p className="text-xs text-text-muted mb-6">
              In-depth compliance guides tailored to specific city business ecosystems
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allServiceLocations.map((sl, idx) => (
                <Link
                  key={idx}
                  href={`/locations/${sl.citySlug}/${sl.serviceSlug}`}
                  className="p-4 rounded-xl border border-surface-border hover:border-brand-blue hover:bg-blue-50/30 transition-all group block"
                >
                  <span className="text-[10px] font-bold text-teal uppercase tracking-wider block mb-1">
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
              <strong className="text-navy block mb-0.5">Transparent Operational Model:</strong>
              Unless an in-person physical consultation is explicitly scheduled at our primary office in {siteConfig.location.city}, all pan-India engagements are delivered digitally via secure online document intake, authorized portal filing, and direct phone/WhatsApp coordination.
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
