"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import {
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Building2,
  Clock,
  MapPin,
  FileCheck2,
  Phone,
  User,
  Send
} from "lucide-react";

export const QuickServiceFinder: React.FC = () => {
  const [need, setNeed] = useState("gst");
  const [businessType, setBusinessType] = useState("proprietorship");
  const [city, setCity] = useState("noida");
  const [frequency, setFrequency] = useState("monthly");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  const cityLabels: Record<string, string> = {
    noida: "Noida & Greater Noida (UP)",
    delhi: "Delhi NCR (Delhi, Gurugram, Faridabad)",
    mumbai: "Mumbai & Maharashtra",
    bengaluru: "Bengaluru & Karnataka",
    jaipur: "Jaipur & Rajasthan",
    lucknow: "Lucknow & Uttar Pradesh",
    ahmedabad: "Ahmedabad & Gujarat",
    other: "Other City / All India Digital Service"
  };

  const businessTypeLabels: Record<string, string> = {
    proprietorship: "Sole Proprietorship",
    partnership: "Partnership / LLP",
    company: "Pvt Ltd Company",
    freelancer: "Freelancer / Consultant",
    retail: "Retail / Wholesale Trader"
  };

  const frequencyLabels: Record<string, string> = {
    onetime: "One-Time Filing",
    monthly: "Monthly Retainer",
    quarterly: "Quarterly Compliance",
    annual: "Annual Filing"
  };

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
        service: "Income Tax Return Filing (ITR-3 / 4 / 5 / 6)",
        slug: "income-tax-return",
        indicativePrice: "Starting at ₹1,499",
        billing: "Annual Return Assistance",
        turnaround: "Computation shared in 48 hours",
        description: "Tax computation, 26AS / AIS reconciliation, depreciation schedules, and electronic acknowledgment receipt."
      };
    } else {
      return {
        service: "Full Monthly Compliance Retainer (GST + Accounting)",
        slug: "daily-accounting",
        indicativePrice: "Starting at ₹2,199 / month",
        billing: "Integrated Monthly Retainer",
        turnaround: "Ongoing monthly management",
        description: "Complete peace of mind: invoice bookkeeping, GSTR-1, GSTR-3B, monthly BRS, and quarterly compliance reviews."
      };
    }
  };

  const rec = getRecommendation();

  // WhatsApp Send Action
  const handleWhatsAppQuote = () => {
    const selectedCity = cityLabels[city] || city;
    const selectedBT = businessTypeLabels[businessType] || businessType;
    const selectedFreq = frequencyLabels[frequency] || frequency;

    const lines = [
      "Hello Taxoras! I would like to get a quote for my business:",
      `• Service: ${rec.service}`,
      `• Estimated Price: ${rec.indicativePrice}`,
      `• City / Location: ${selectedCity}`,
      `• Business Type: ${selectedBT}`,
      `• Assistance Frequency: ${selectedFreq}`
    ];

    if (clientName.trim()) {
      lines.push(`• Client Name: ${clientName.trim()}`);
    }
    if (clientPhone.trim()) {
      lines.push(`• Phone Number: ${clientPhone.trim()}`);
    }

    lines.push("Please share the documentation checklist, scope, and onboarding steps.");

    const message = lines.join("\n");
    const waUrl = `https://wa.me/918103819494?text=${encodeURIComponent(message)}`;

    // Optional silent lead capture
    try {
      fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: clientName || "WhatsApp Visitor",
          mobile: clientPhone || "9999999999",
          serviceRequired: rec.service,
          city: selectedCity,
          businessType: selectedBT,
          additionalDetails: `Frequency: ${selectedFreq} | Price: ${rec.indicativePrice}`,
          preferredContact: "WhatsApp",
          sourceContext: "quick_service_finder"
        })
      }).catch(() => {});
    } catch (_) {}

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-12 sm:py-20 bg-surface-bg border-b border-surface-border scroll-mt-24" id="service-finder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5 text-brand-blue" />
            <span>Interactive Service & Pricing Calculator</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3 mb-2.5">
            Find the Exact Compliance Package for Your Business
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Select your requirements, business location (Noida, Delhi NCR, Pan-India), and frequency below. Get instant transparent pricing and connect directly with our compliance desk on WhatsApp.
          </p>
        </div>

        {/* Finder Interactive Card */}
        <div className="bg-[#17110D] rounded-2xl sm:rounded-3xl border border-surface-border p-4 sm:p-8 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Selection Questions */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Question 1: Immediate Need */}
              <div>
                <label className="block text-xs font-bold text-navy mb-2">
                  1. What does your business need right now?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: "gst", label: "GST Filing & Reg" },
                    { id: "accounting", label: "Daily Accounting" },
                    { id: "tds", label: "TDS Return (24Q/26Q)" },
                    { id: "itr", label: "Income Tax (ITR)" },
                    { id: "all", label: "All-in-One Retainer" }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setNeed(opt.id)}
                      className={`text-xs font-semibold p-2.5 rounded-xl border text-left transition-all ${
                        need === opt.id
                          ? "border-brand-blue bg-amber-950/50 text-amber-400 font-bold shadow-xs"
                          : "border-surface-border bg-[#1C1511] text-text-muted hover:border-[#4A382C] hover:text-[#FAF4EF]"
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
                          ? "border-brand-blue bg-amber-950/50 text-amber-400 font-bold shadow-xs"
                          : "border-surface-border bg-[#1C1511] text-text-muted hover:border-[#4A382C] hover:text-[#FAF4EF]"
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
                  className="w-full text-xs text-[#FAF4EF] bg-[#1C1511] border border-surface-border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 font-medium"
                >
                  <option value="noida">Noida & Greater Noida (Uttar Pradesh)</option>
                  <option value="delhi">Delhi NCR (Delhi, Gurugram, Faridabad)</option>
                  <option value="mumbai">Mumbai & Maharashtra</option>
                  <option value="bengaluru">Bengaluru & Karnataka</option>
                  <option value="jaipur">Jaipur & Rajasthan</option>
                  <option value="lucknow">Lucknow & Uttar Pradesh</option>
                  <option value="ahmedabad">Ahmedabad & Gujarat</option>
                  <option value="other">Other City / All-India Digital Service</option>
                </select>
              </div>

              {/* Question 4: Frequency */}
              <div>
                <label className="block text-xs font-bold text-navy mb-2">
                  4. How frequently do you need assistance?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "monthly", label: "Monthly" },
                    { id: "onetime", label: "One-Time" },
                    { id: "quarterly", label: "Quarterly" },
                    { id: "annual", label: "Annual" }
                  ].map((fq) => (
                    <button
                      key={fq.id}
                      type="button"
                      onClick={() => setFrequency(fq.id)}
                      className={`text-xs font-semibold p-2.5 rounded-xl border text-center transition-all ${
                        frequency === fq.id
                          ? "border-brand-blue bg-amber-950/50 text-amber-400 font-bold shadow-xs"
                          : "border-surface-border bg-[#1C1511] text-text-muted hover:border-[#4A382C] hover:text-[#FAF4EF]"
                      }`}
                    >
                      {fq.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Quick Customer Details */}
              <div className="pt-2 border-t border-slate-200/80">
                <label className="block text-xs font-bold text-navy mb-2">
                  5. Quick Contact Info (Optional – prefilled in WhatsApp)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name / Business Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full text-xs text-[#FAF4EF] bg-[#1C1511] border border-surface-border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 placeholder:text-stone-500"
                  />
                  <input
                    type="tel"
                    placeholder="10-Digit Mobile Number"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    maxLength={10}
                    className="w-full text-xs text-[#FAF4EF] bg-[#1C1511] border border-surface-border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 placeholder:text-stone-500"
                  />
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Dynamic Result Card */}
            <div className="lg:col-span-5 bg-[#201813] rounded-2xl border-2 border-brand-blue/40 p-5 sm:p-6 shadow-xl flex flex-col justify-between space-y-4 relative">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-surface-border mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                    Recommended Package
                  </span>
                  <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                    {cityLabels[city]?.split(" ")[0] || "Live"}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-navy mb-1 leading-snug">
                  {rec.service}
                </h3>

                <div className="my-3 p-3.5 rounded-xl bg-[#16110D] border border-surface-border flex items-center justify-between">
                  <div>
                    <span className="text-lg sm:xl font-extrabold text-brand-blue block leading-none">
                      {rec.indicativePrice}
                    </span>
                    <span className="text-[10px] text-text-muted mt-1 block">
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

                <p className="text-xs text-text-muted leading-relaxed mb-3">
                  {rec.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                    <span>Includes written scope & document checklist</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0" />
                    <span>Dedicated coordinator via WhatsApp & Phone</span>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-4 border-t border-surface-border space-y-2.5">
                {/* 1. Primary WhatsApp Action */}
                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Send to WhatsApp for Instant Quote</span>
                </button>

                {/* 2. Direct Call Helpline */}
                <a
                  href={siteConfig.links.phoneUrl}
                  className="w-full flex items-center justify-center gap-2 bg-[#16110D] hover:bg-[#1E1712] text-[#FAF4EF] text-xs font-semibold py-2.5 px-4 rounded-xl border border-surface-border transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Call Helpline: {siteConfig.contact.phoneFormatted}</span>
                </a>

                {/* 3. Link to detailed service page */}
                <div className="text-center pt-1">
                  <Link
                    href={`/services/${rec.slug}`}
                    className="text-[11px] font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                  >
                    <span>View detailed requirements for {rec.service}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
