"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicePricingDatabase, PricingPackage } from "@/data/pricingData";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { EnquiryForm } from "@/components/common/EnquiryForm";
import {
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Scale,
  Clock,
  AlertCircle,
  FileCheck2
} from "lucide-react";

export default function PricingPage() {
  const [selectedServiceId, setSelectedServiceId] = useState("gst-return-filing");

  const currentConfig =
    servicePricingDatabase.find((sp) => sp.serviceId === selectedServiceId) ||
    servicePricingDatabase[0];

  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Header */}
        <section className="bg-white border-b border-surface-border py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5" />
              Transparent Fee Engine
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-3 mb-3">
              India&apos;s Most Affordable Accounting & Compliance Support
            </h1>
            <div className="inline-flex items-center gap-2 bg-teal-light border border-teal/30 px-3 py-1 rounded-full text-xs font-bold text-teal mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0"></span><span>Guaranteed ₹5 Cheaper Than Any Verified Competitor Quote</span>
            </div>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
              We compete on genuine affordability and clarity. Show us any verified quote from Clear, TaxFetch, Corpbiz, IndiaFilings, or your local accountant — we guarantee our fee is lower by ₹5 or more.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
          
          {/* Service Selector Tabs */}
          <div className="bg-white rounded-2xl border border-surface-border p-4 shadow-xs">
            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2.5">
              Select Service to Compare Tiers:
            </label>
            <div className="flex flex-wrap items-center gap-2">
              {servicePricingDatabase.map((item) => (
                <button
                  key={item.serviceId}
                  onClick={() => setSelectedServiceId(item.serviceId)}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
                    selectedServiceId === item.serviceId
                      ? "bg-brand-blue text-white shadow-xs font-bold border border-amber-500/40"
                      : "bg-[#1C1510] text-[#BCAE9F] hover:text-[#FAF4EF] hover:bg-[#251C16] border border-surface-border"
                  }`}
                >
                  {item.serviceName}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Tier Side-by-Side Comparison Table */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-navy">
                  {currentConfig.serviceName} Package Breakdown
                </h2>
                <p className="text-xs text-text-muted">
                  Choose the package matching your monthly transaction density and business structure
                </p>
              </div>
              <span className="text-xs font-semibold text-teal bg-teal-light px-2.5 py-1 rounded-full">
                All India Pricing
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {currentConfig.packages.map((pkg, pIdx) => (
                <div
                  key={pIdx}
                  className={`bg-white rounded-2xl border p-6 flex flex-col justify-between card-hover shadow-xs relative ${
                    pkg.tier === "Standard"
                      ? "border-brand-blue/50 ring-1 ring-brand-blue/30"
                      : "border-surface-border"
                  }`}
                >
                  <div>
                    {pkg.tier === "Standard" && (
                      <span className="inline-flex items-center gap-2 text-[10px] font-bold text-brand-blue bg-blue-100 px-2 py-0.5 rounded-full mb-3 uppercase tracking-wider">
                        Most Popular Choice
                      </span>
                    )}

                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
                        {pkg.tier} Tier
                      </span>
                      <span className="text-[11px] text-text-muted">{pkg.billingType}</span>
                    </div>

                    <h3 className="text-lg font-bold text-navy mb-3">{pkg.name}</h3>

                    {/* Price Box */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-[#2C211A] mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-navy">
                          ₹{pkg.basePrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[11px] text-text-muted font-medium">
                          {pkg.billingType.includes("Month") ? "/ month" : "base fee"}
                        </span>
                      </div>
                      <div className="text-[10px] text-text-muted mt-1 space-y-0.5">
                        <p>• {pkg.applicableTaxes}</p>
                        <p>• Govt Charges: {pkg.governmentCharges}</p>
                      </div>
                    </div>

                    {/* Limits and Turnaround */}
                    <div className="space-y-1.5 pb-4 mb-4 border-b border-[#2C211A] text-xs">
                      <div className="flex items-start justify-between">
                        <span className="text-text-muted">Volume Limit:</span>
                        <span className="font-semibold text-navy text-right">{pkg.transactionLimits}</span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="text-text-muted">Turnaround:</span>
                        <span className="font-semibold text-teal text-right flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {pkg.turnaroundEstimate}
                        </span>
                      </div>
                    </div>

                    {/* Inclusions */}
                    <div className="space-y-2 mb-4">
                      <span className="text-xs font-bold text-navy block">Included Deliverables:</span>
                      {pkg.inclusions.map((inc, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-2 text-xs text-[#FAF4EF]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>

                    {/* Exclusions */}
                    <div className="space-y-1.5 pt-3 border-t border-[#2C211A] mb-4 text-[11px] text-text-muted">
                      <span className="font-bold text-text-muted block">Exclusions:</span>
                      {pkg.exclusions.map((exc, eIdx) => (
                        <div key={eIdx} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
                          <span>{exc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best Fit Customer & CTA */}
                  <div className="pt-4 border-t border-surface-border space-y-3">
                    <p className="text-[11px] text-text-muted italic">
                      <strong>Best For:</strong> {pkg.bestFitCustomer}
                    </p>

                    <a
                      href="#enquire"
                      className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md active:scale-95"
                    >
                      <span>Request {pkg.tier} Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Policy & Clarity Banner */}
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-navy flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal" />
              <span>How We Maintain True Pricing Transparency</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-text-muted leading-relaxed">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-[#2C211A] space-y-1">
                <strong className="text-navy block">Separation of Tax from Fees</strong>
                Consultancy fees are strictly separated from statutory government taxes. You pay your cash tax directly through official challans.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-[#2C211A] space-y-1">
                <strong className="text-navy block">Written Scope Agreement</strong>
                Every engagement is preceded by an itemized written quote defining voucher limits, exclusions, and deliverables.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-[#2C211A] space-y-1">
                <strong className="text-navy block">Zero Hidden Penalty Costs</strong>
                We remind you well in advance of the 7th, 11th, and 20th so you never incur compounding daily late fees.
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div id="enquire">
            <EnquiryForm
              title="Request a Customized Service Scope & Quotation"
              subtitle="Tell us about your business structure and monthly transaction volume. Our compliance desk will provide an itemized quote within 1 business day."
            />
          </div>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
