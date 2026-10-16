"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import {
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  Calculator,
  MessageCircle
} from "lucide-react";

export const PricingEstimator: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState("proprietorship");
  const [selectedNeed, setSelectedNeed] = useState("monthly");

  const packages = [
    {
      title: "One-Time Registrations",
      subtitle: "GST & MSME Udyam Registration",
      pricingType: "Transparent Fixed Assistance Fee",
      description: "Ideal for new businesses, partnership firms, and companies requiring formal tax identification and portal setup.",
      inclusions: [
        "Entity document verification checklist",
        "Form preparation & portal submission",
        "Aadhaar authentication coordination",
        "Department query reply assistance",
        "Registration certificate download"
      ],
      exclusions: [
        "Subsequent periodic return filings (billed on retainer)",
        "Physical site visit facilitation"
      ],
      ctaText: "Enquire About Registration"
    },
    {
      title: "Monthly Accounting & GST",
      subtitle: "Bookkeeping & Periodic Returns",
      pricingType: "Structured Monthly Retainer",
      description: "Complete hands-off compliance. Sales/purchase entry, bank reconciliation, GSTR-1, and GSTR-3B filings.",
      inclusions: [
        "Regular sales and purchase invoice recording",
        "GSTR-1 outward supply return filing",
        "GSTR-2B purchase credit reconciliation",
        "GSTR-3B summary return & cash challan calculation",
        "Monthly bank reconciliation statement"
      ],
      exclusions: [
        "Annual GSTR-9 / 9C reconciliation statement",
        "Statutory audit signatures"
      ],
      ctaText: "Discuss Monthly Scope"
    },
    {
      title: "Year-End Financials & ITR",
      subtitle: "Balance Sheet & Income Tax Return",
      pricingType: "Per-Return / Annual Compilation",
      description: "Structured year-end compilation of Trial Balance, Profit & Loss statement, Balance Sheet, and accurate ITR filing.",
      inclusions: [
        "Trial balance hygiene check & suspense adjustment",
        "Depreciation schedule calculation",
        "Drafting of Balance Sheet & P&L",
        "Form 26AS & AIS reconciliation",
        "ITR submission & e-verification"
      ],
      exclusions: [
        "Independent CA Tax Audit certification (if turnover mandates Section 44AB)",
        "Income tax scrutiny assessment appearances"
      ],
      ctaText: "Discuss Year-End Reporting"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
            Honest & Transparent
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3 mb-4">
            Transparent Pricing Approach
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            We do not believe in fake discounts or fabricated price wars. Our pricing is determined by your transaction volume, entity constitution, and verified service scope.
          </p>
        </div>

        {/* 3 Core Scope Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 flex flex-col justify-between card-hover shadow-xs ${
                idx === 1
                  ? "bg-slate-50/70 border-brand-blue/40 ring-1 ring-brand-blue/20"
                  : "bg-white border-surface-border"
              }`}
            >
              <div>
                {idx === 1 && (
                  <span className="inline-block text-[10px] font-bold text-brand-blue bg-blue-100/70 px-2 py-0.5 rounded mb-3">
                    Most Popular Retainer
                  </span>
                )}
                <h3 className="text-lg font-bold text-navy">
                  {pkg.title}
                </h3>
                <p className="text-xs text-text-muted font-medium mt-0.5 mb-2">
                  {pkg.subtitle}
                </p>

                <div className="my-3 py-2 border-y border-surface-border">
                  <span className="text-xs font-bold text-navy block">
                    {pkg.pricingType}
                  </span>
                  <span className="text-[11px] text-text-muted">
                    Based on verified business requirements
                  </span>
                </div>

                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {pkg.description}
                </p>

                {/* Inclusions */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[11px] font-bold text-navy block">
                    What is Included:
                  </span>
                  {pkg.inclusions.map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                {/* Exclusions */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-6">
                  <span className="text-[11px] font-bold text-text-muted block">
                    What is Excluded:
                  </span>
                  {pkg.exclusions.map((exc, eIdx) => (
                    <div key={eIdx} className="flex items-start gap-2 text-[11px] text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
                      <span>{exc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-surface-border">
                <a
                  href="#enquire"
                  className="w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white text-xs font-semibold py-3 rounded-xl transition-colors shadow-sm"
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Transparency Note */}
        <div className="bg-slate-50 rounded-2xl border border-surface-border p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center shrink-0">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div className="text-xs text-text-muted leading-relaxed">
            <strong className="text-navy block mb-0.5">Clear Terms Before Invoicing</strong>
            We issue a detailed service scope document detailing timeline estimates, exclusions, and deliverables before you pay any consultancy fees. We never collect payment for government taxes into private accounts.
          </div>
        </div>

      </div>
    </section>
  );
};
