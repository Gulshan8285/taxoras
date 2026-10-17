"use client";

import React, { useState } from "react";
import Link from "next/link";
import { allServices } from "@/data/servicesData";
import { ServiceIcon } from "@/components/common/ServiceIcon";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { siteConfig } from "@/config/siteConfig";
import {
  ArrowRight,
  CheckCircle2,
  Filter,
  HelpCircle
} from "lucide-react";

export const ServicesGrid: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All 10 Core Services" },
    { id: "gst", label: "GST Services" },
    { id: "tds", label: "TDS & Taxation" },
    { id: "accounting", label: "Accounting & Reconciliation" },
    { id: "registrations", label: "Business Registrations" },
    { id: "financials", label: "Financial Statements & ITR" }
  ];

  const filteredServices =
    filterCategory === "all"
      ? allServices
      : allServices.filter((s) => s.category === filterCategory);

  return (
    <section className="py-16 sm:py-24 bg-surface-bg border-b border-surface-border" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
            Comprehensive Compliance
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3 mb-4">
            Ten Core Accounting & Taxation Services for Indian Businesses
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Every business requires different levels of compliance support. Explore our core services designed to keep your entity legally compliant and financially organized.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto sm:flex-wrap items-center sm:justify-center gap-2 mb-8 sm:mb-10 pb-2 sm:pb-0 scrollbar-none [scrollbar-width:none] -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                filterCategory === cat.id
                  ? "bg-brand-blue text-white shadow-md font-bold border border-amber-500/40"
                  : "bg-[#1C1510] text-[#BCAE9F] hover:text-[#FAF4EF] border border-surface-border hover:bg-[#251C16]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid (10 Service Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl border border-surface-border p-6 flex flex-col justify-between card-hover relative group shadow-xs"
            >
              <div>
                {/* Card Top: Icon & Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50/80 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <ServiceIcon name={service.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#E5A962] bg-[#251A13] border border-[#3E2C1F] px-2.5 py-1 rounded-md">
                    {service.categoryLabel}
                  </span>
                </div>

                {/* Title & Badge */}
                <h3 className="text-lg font-bold text-navy group-hover:text-brand-blue transition-colors mb-2">
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>

                {service.heroBadge && (
                  <span className="inline-block text-[10px] font-semibold text-teal bg-teal-light px-2 py-0.5 rounded mb-2.5">
                    {service.heroBadge}
                  </span>
                )}

                {/* Short Description */}
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-2 pt-2 border-t border-slate-100 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-text-main">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                      <span className="leading-tight text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold text-brand-blue hover:text-brand-blue-hover inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={siteConfig.links.whatsappUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 px-3 py-1.5 rounded-lg border border-surface-border transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                  <span>Enquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-[#1C1510] rounded-2xl border border-surface-border p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-navy">
              Need assistance across multiple compliance services?
            </h4>
            <p className="text-xs text-text-muted">
              We create customized monthly retainers bundling bookkeeping, GST, and TDS.
            </p>
          </div>
          <a
            href="#enquire"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 shrink-0"
          >
            <span>Request Bundled Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
