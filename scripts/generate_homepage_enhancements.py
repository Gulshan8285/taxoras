import os

service_finder_ts = """\"use client\";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import {
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Building2,
  Clock,
  Sparkles,
  MapPin,
  FileCheck2
} from "lucide-react";

export const QuickServiceFinder: React.FC = () => {
  const [need, setNeed] = useState("gst");
  const [businessType, setBusinessType] = useState("proprietorship");
  const [city, setCity] = useState("delhi");
  const [frequency, setFrequency] = useState("monthly");

  // Dynamic recommendation logic
  const getRecommendation = () => {
    if (need === "gst") {
      if (frequency === "onetime") {
        return {
          service: "GST Registration Assistance",
          slug: "gst-registration",
          indicativePrice: "Starting at ₹999",
          billing: "One-Time Fixed Assistance Fee",
          turnaround: "3 – 5 working days",
          description: "Full preparation of Form GST REG-01, premise documentation review, and Aadhaar authentication coordination."
        };
      }
      return {
        service: "Monthly GST Return Filing (GSTR-1 & 3B)",
        slug: "gst-return-filing",
        indicativePrice: "Starting at ₹799 / month",
        billing: "Monthly Retainer",
        turnaround: "Filed 3 days before monthly cutoffs",
        description: "Monthly GSTR-1 preparation, GSTR-2B purchase credit matching, and net cash challan calculation."
      };
    } else if (need === "accounting") {
      return {
        service: "Day-to-Day Accounting & Ledgers",
        slug: "daily-accounting",
        indicativePrice: "Starting at ₹1,499 / month",
        billing: "Monthly Retainer",
        turnaround: "Books finalized by 10th of following month",
        description: "Sales/purchase entry, bank ledger balancing, vendor matching, and monthly Trial Balance summaries."
      };
    } else if (need === "tds") {
      return {
        service: "Quarterly TDS Return Filing (24Q / 26Q)",
        slug: "tds-return-filing",
        indicativePrice: "Starting at ₹999 / quarter",
        billing: "Per Quarter",
        turnaround: "FVU validation & 24-hr portal upload",
        description: "Quarterly deductee reconciliation, challan mapping, FVU file validation, and Form 16/16A generation."
      };
    } else if (need === "itr") {
      return {
        service: "Income Tax Return (ITR) Filing",
        slug: "income-tax-return",
        indicativePrice: "Starting at ₹699 / return",
        billing: "Annual Filing Fee",
        turnaround: "24 – 48 hours following AIS reconciliation",
        description: "AIS/TIS cross-check, Old vs New Regime optimization (115BAC), computation statement, and e-verification."
      };
    } else {
      return {
        service: "MSME / Udyam Registration",
        slug: "msme-udyam-registration",
        indicativePrice: "Fixed ₹799",
        billing: "One-Time Fixed Fee (Govt fee ₹0)",
        turnaround: "Same-day application drafting",
        description: "NIC code mapping, investment review, official Udyam portal submission, and 45-day payment statutory safeguards."
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-surface-border" id="service-finder">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight mt-3 mb-2">
            Quick Service & Scope Finder
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Answer 4 simple questions to identify your applicable compliance scope and transparent pricing estimate.
          </p>
        </div>

        {/* Finder Card */}
        <div className="bg-surface-bg rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: 4 Questions */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Question 1: What do you need help with? */}
              <div>
                <label className="block text-xs font-bold text-navy mb-2">
                  1. What do you need primary assistance with?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: "gst", label: "GST Compliance" },
                    { id: "accounting", label: "Daily Accounting" },
                    { id: "tds", label: "TDS Returns" },
                    { id: "itr", label: "Income Tax (ITR)" },
                    { id: "udyam", label: "MSME / Udyam" },
                    { id: "other", label: "Full Retainer" }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setNeed(opt.id)}
                      className={`text-xs font-semibold p-2.5 rounded-xl border text-left transition-all ${
                        need === opt.id
                          ? "border-brand-blue bg-blue-50/80 text-brand-blue font-bold shadow-xs"
                          : "border-surface-border bg-white text-text-muted hover:border-slate-300"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Business Type */}
              <div>
                <label className="block text-xs font-bold text-navy mb-2">
                  2. What type of business do you operate?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: "proprietorship", label: "Proprietorship" },
                    { id: "partnership", label: "Partnership / LLP" },
                    { id: "company", label: "Pvt Ltd Company" },
                    { id: "freelancer", label: "Freelancer / Solo" },
                    { id: "retail", label: "Retail / Trader" }
                  ].map((bt) => (
                    <button
                      key={bt.id}
                      type="button"
                      onClick={() => setBusinessType(bt.id)}
                      className={`text-xs font-semibold p-2.5 rounded-xl border text-left transition-all ${
                        businessType === bt.id
                          ? "border-brand-blue bg-blue-50/80 text-brand-blue font-bold shadow-xs"
                          : "border-surface-border bg-white text-text-muted hover:border-slate-300"
                      }`}
                    >
                      {bt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: City / State */}
              <div>
                <label className="block text-xs font-bold text-navy mb-2">
                  3. Which city / state is your business in?
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full text-xs text-text-main bg-white border border-surface-border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                >
                  <option value="delhi">Delhi NCR (Delhi, Noida, Gurugram)</option>
                  <option value="mumbai">Mumbai & Maharashtra</option>
                  <option value="bengaluru">Bengaluru & Karnataka</option>
                  <option value="jaipur">Jaipur & Rajasthan</option>
                  <option value="lucknow">Lucknow & Uttar Pradesh</option>
                  <option value="ahmedabad">Ahmedabad & Gujarat</option>
                  <option value="other">Other State / All India Digital Service</option>
                </select>
              </div>

              {/* Question 4: Frequency */}
              <div>
                <label className="block text-xs font-bold text-navy mb-2">
                  4. How frequently do you need assistance?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "onetime", label: "One-Time" },
                    { id: "monthly", label: "Monthly" },
                    { id: "quarterly", label: "Quarterly" },
                    { id: "annual", label: "Annual" }
                  ].map((fq) => (
                    <button
                      key={fq.id}
                      type="button"
                      onClick={() => setFrequency(fq.id)}
                      className={`text-xs font-semibold p-2.5 rounded-xl border text-center transition-all ${
                        frequency === fq.id
                          ? "border-brand-blue bg-blue-50/80 text-brand-blue font-bold shadow-xs"
                          : "border-surface-border bg-white text-text-muted hover:border-slate-300"
                      }`}
                    >
                      {fq.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Dynamic Result Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-brand-blue/30 p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-surface-border mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Recommended Scope
                  </span>
                  <span className="text-[10px] font-medium bg-slate-100 text-text-muted px-2 py-0.5 rounded">
                    India-Wide
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy mb-1">
                  {rec.service}
                </h3>

                <div className="my-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-base font-extrabold text-brand-blue block">
                      {rec.indicativePrice}
                    </span>
                    <span className="text-[10px] text-text-muted">
                      {rec.billing}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-navy block flex items-center gap-1 justify-end">
                      <Clock className="w-3 h-3 text-teal" />
                      {rec.turnaround}
                    </span>
                    <span className="text-[10px] text-text-muted">Target Turnaround</span>
                  </div>
                </div>

                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {rec.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                    <span>Includes written scope & document checklist</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                    <span>Dedicated point of contact via WhatsApp & Email</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-border space-y-2">
                <Link
                  href={`/services/${rec.slug}`}
                  className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white text-xs font-semibold py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  <span>View Full Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`#enquire`}
                  className="w-full flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-100/80 text-brand-blue text-xs font-semibold py-2 rounded-xl transition-colors"
                >
                  <span>Request Custom Quote for This Scope</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
"""

with open("src/components/home/QuickServiceFinder.tsx", "w") as f:
    f.write(service_finder_ts)

final_cta_ts = """\"use client\";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-navy text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="text-xs font-bold text-teal bg-teal/20 px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 border border-teal/30">
          <ShieldCheck className="w-3.5 h-3.5" />
          Transparent & Responsive Support
        </span>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
          Tell Us What Your Business Needs.
        </h2>

        <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Share your requirements and receive the next steps, estimated scope, and applicable charges before any work begins.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <a
            href="#enquire"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <span>Get a Transparent Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={siteConfig.links.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp Directly</span>
          </a>
        </div>

        <p className="text-[11px] text-slate-400 pt-2">
          Zero advance obligation to discuss requirements • PAN-India digital compliance desk
        </p>
      </div>
    </section>
  );
};
"""

with open("src/components/home/FinalCtaSection.tsx", "w") as f:
    f.write(final_cta_ts)

print("Created QuickServiceFinder and FinalCtaSection successfully!")
