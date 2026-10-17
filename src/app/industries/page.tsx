import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { allIndustries } from "@/data/industriesData";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { ServiceIcon } from "@/components/common/ServiceIcon";
import {
  Briefcase,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Accounting & Compliance Solutions | Taxoras India",
  description: "Specialized accounting, GST, and tax compliance solutions for E-Commerce, Retail, IT Exporters, Manufacturers, Healthcare, and Freelancers.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Header */}
        <section className="bg-white border-b border-surface-border py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              Sector Specialization
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">
              Accounting & Tax Solutions Built for Your Industry
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
              Different business verticals require distinct tax workflows—from Amazon marketplace TCS reconciliations to MSME 45-day payment tracking. Explore our tailored sector blueprints.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allIndustries.map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 card-hover shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      <ServiceIcon name={ind.icon} className="w-6 h-6 text-brand-blue" />
                    </div>
                    <span className="text-xs font-semibold text-teal bg-teal-light px-3 py-1 rounded-full">
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-2">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  {/* Industry Challenges */}
                  <div className="mb-5 space-y-2">
                    <span className="text-xs font-bold text-navy uppercase tracking-wider block">
                      Common Sector Challenges:
                    </span>
                    {ind.challenges.map((ch, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-text-muted bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tailored Solutions */}
                  <div className="mb-6 space-y-2">
                    <span className="text-xs font-bold text-navy uppercase tracking-wider block">
                      Our Tailored Approach:
                    </span>
                    {ind.solutions.map((sol, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-muted">
                    Custom Scoping Available
                  </span>
                  <Link
                    href="/#enquire"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blue-hover"
                  >
                    <span>Discuss {ind.title} Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div className="bg-[#1C1510] border border-[#3E2C20] text-[#FAF4EF] rounded-2xl p-8 text-center space-y-4 shadow-xl">
            <h3 className="text-xl font-bold">Don&apos;t See Your Specific Industry Listed?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Our accounting and taxation desk supports wholesale trading, import-export, logistics, education, consulting, and manufacturing across India.
            </p>
            <div className="pt-2">
              <Link
                href="/#enquire"
                className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>Request Custom Industry Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
