import os

hero_ts = """\"use client\";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  AlertTriangle,
  Receipt,
  Scale
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"gst" | "accounting" | "tds">("gst");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-surface-bg to-surface-bg pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-surface-border">
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#10243A_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-brand-blue text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-teal" />
              <span>Independent Accounting & Compliance Advisory</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-[1.15]">
              Your Business Finances, Tax Compliance & Accounting —{" "}
              <span className="text-brand-blue">Simplified.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From GST registration and return filing to daily accounting, TDS compliance, reconciliations and income tax returns, get professional assistance for your business compliance needs in one place.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#enquire"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-navy hover:bg-navy-light text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg shadow-navy/15"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-navy font-semibold text-sm px-6 py-3.5 rounded-xl border border-surface-border transition-all shadow-xs"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* 3 Core Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-surface-border">
              <div className="flex items-center gap-2.5 text-left bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-surface-border/60">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy leading-tight">Organized Financial Records</h4>
                  <p className="text-[11px] text-text-muted mt-0.5">Structured ledgers & vouchers</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-surface-border/60">
                <div className="w-8 h-8 rounded-lg bg-teal-light text-teal flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy leading-tight">Compliance-Focused Support</h4>
                  <p className="text-[11px] text-text-muted mt-0.5">Strict adherence to Indian tax laws</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-surface-border/60">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy leading-tight">Clear Communication</h4>
                  <p className="text-[11px] text-text-muted mt-0.5">Transparent checklists & timelines</p>
                </div>
              </div>
            </div>

            {/* Honest Trust Statement */}
            <p className="text-xs text-text-muted/90 italic pt-1 text-center lg:text-left">
              “{siteConfig.trustStatement}”
            </p>
          </div>

          {/* Right Column: Live Accounting & GST Dashboard Preview Graphic */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background ambient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/15 to-teal/15 rounded-3xl blur-xl opacity-70"></div>

              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-xl border border-surface-border p-5 sm:p-6 space-y-4">
                
                {/* Header bar with Status Indicator */}
                <div className="flex items-center justify-between pb-3 border-b border-surface-border">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-navy">Compliance Workspace Monitor</span>
                  </div>
                  <span className="text-[11px] font-medium text-text-muted bg-slate-100 px-2 py-0.5 rounded">
                    Pan-India Support
                  </span>
                </div>

                {/* Tab switcher inside preview card */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setActiveTab("gst")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "gst"
                        ? "bg-white text-navy font-bold shadow-xs"
                        : "text-text-muted hover:text-navy"
                    }`}
                  >
                    GST Timeline
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("accounting")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "accounting"
                        ? "bg-white text-navy font-bold shadow-xs"
                        : "text-text-muted hover:text-navy"
                    }`}
                  >
                    Bookkeeping
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("tds")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "tds"
                        ? "bg-white text-navy font-bold shadow-xs"
                        : "text-text-muted hover:text-navy"
                    }`}
                  >
                    TDS & Bank
                  </button>
                </div>

                {/* Interactive Tab 1: GST */}
                {activeTab === "gst" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-navy flex items-center gap-1.5">
                          <Receipt className="w-3.5 h-3.5 text-brand-blue" />
                          GSTR-1 (Outward Supplies)
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          Verified & Filed
                        </span>
                      </div>
                      <p className="text-[11px] text-text-muted">
                        B2B invoices, credit notes & HSN summaries reconciled with sales ledger.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-navy flex items-center gap-1.5">
                          <FileCheck2 className="w-3.5 h-3.5 text-teal" />
                          GSTR-2B vs Purchase Book
                        </span>
                        <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                          98.6% Reconciled
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-teal h-full rounded-full" style={{ width: "98.6%" }}></div>
                      </div>
                      <p className="text-[10px] text-text-muted flex items-center justify-between">
                        <span>ITC Eligible: ₹1,48,250</span>
                        <span className="text-amber-700 font-medium">2 Vendor Follow-ups</span>
                      </p>
                    </div>
                  </div>
                )}

                {/* Interactive Tab 2: Bookkeeping */}
                {activeTab === "accounting" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-navy">Monthly Ledger Maintenance</span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          Updated to Date
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                        <div className="bg-white p-2 rounded-lg border border-slate-100">
                          <span className="text-text-muted block text-[10px]">Sales Vouchers</span>
                          <span className="font-bold text-navy">248 Entries</span>
                        </div>
                        <div className="bg-white p-2 rounded-lg border border-slate-100">
                          <span className="text-text-muted block text-[10px]">Purchase Bills</span>
                          <span className="font-bold text-navy">132 Entries</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-navy">Trial Balance Status</span>
                        <span className="text-emerald-700 text-[11px] font-bold">Balanced</span>
                      </div>
                      <p className="text-[11px] text-text-muted">
                        Debits and credits match with zero unmapped suspense balances.
                      </p>
                    </div>
                  </div>
                )}

                {/* Interactive Tab 3: TDS & Bank */}
                {activeTab === "tds" && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-navy">Challan 281 (Monthly TDS)</span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          Paid by 7th
                        </span>
                      </div>
                      <p className="text-[11px] text-text-muted">
                        Mapped to Sections 194C, 194J & 194I. BSR counterfoils archived.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-navy">Bank Statement (BRS)</span>
                        <span className="text-[11px] font-bold text-navy">Current A/C Matched</span>
                      </div>
                      <p className="text-[11px] text-text-muted">
                        Unpresented cheques and payment gateway settlement fees segregated.
                      </p>
                    </div>
                  </div>
                )}

                {/* Bottom Trust Micro-bar */}
                <div className="pt-2 border-t border-surface-border flex items-center justify-between text-[11px] text-text-muted">
                  <span className="flex items-center gap-1 text-navy font-medium">
                    <Scale className="w-3.5 h-3.5 text-teal" />
                    Indian Tax Law Adherent
                  </span>
                  <span>Zero Data Sharing</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
"""

with open("src/components/home/HeroSection.tsx", "w") as f:
    f.write(hero_ts)

services_grid_ts = """\"use client\";

import React, { useState } from "react";
import Link from "next/link";
import { allServices } from "@/data/servicesData";
import { ServiceIcon } from "@/components/common/ServiceIcon";
import { siteConfig } from "@/config/siteConfig";
import {
  ArrowRight,
  CheckCircle2,
  Filter,
  MessageCircle,
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
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                filterCategory === cat.id
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white text-text-muted hover:text-navy border border-surface-border hover:bg-slate-50"
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
                  <span className="text-[11px] font-semibold text-text-muted bg-slate-100 px-2.5 py-1 rounded-md">
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
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Enquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-surface-border p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
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
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shrink-0"
          >
            <span>Request Bundled Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
"""

with open("src/components/home/ServicesGrid.tsx", "w") as f:
    f.write(services_grid_ts)

who_we_help_ts = """\"use client\";

import React from "react";
import Link from "next/link";
import { allAudiences } from "@/data/audienceData";
import { ServiceIcon } from "@/components/common/ServiceIcon";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export const WhoWeHelpSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border" id="who-we-help">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Tailored Assistance
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3 mb-4">
            Who We Help
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Different business structures carry unique compliance obligations. We help Indian enterprises across sectors maintain organized books and timely statutory filings.
          </p>
        </div>

        {/* Audiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allAudiences.map((audience) => (
            <div
              key={audience.id}
              className="bg-surface-bg rounded-2xl border border-surface-border p-5 flex flex-col justify-between card-hover shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-surface-border text-navy flex items-center justify-center">
                    <ServiceIcon name={audience.icon} className="w-5 h-5 text-brand-blue" />
                  </div>
                  <span className="text-[10px] font-semibold text-teal bg-teal-light px-2 py-0.5 rounded">
                    {audience.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy mb-2">
                  {audience.title}
                </h3>

                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {audience.description}
                </p>

                {/* Relevant Services */}
                <div className="space-y-1.5 pt-3 border-t border-slate-200/80 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block">
                    Relevant Services:
                  </span>
                  {audience.relevantServices.map((svc, sIdx) => (
                    <div key={sIdx} className="text-xs text-navy font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-teal shrink-0" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <Link
                  href="/who-we-help"
                  className="text-xs font-semibold text-brand-blue hover:text-brand-blue-hover flex items-center justify-between group"
                >
                  <span>View Full Guidance</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer for audiences */}
        <div className="mt-8 text-center text-xs text-text-muted">
          Not every business requires every service. Scope depends on your turnover, entity constitution, and tax regime.
        </div>

      </div>
    </section>
  );
};
"""

with open("src/components/home/WhoWeHelpSection.tsx", "w") as f:
    f.write(who_we_help_ts)

how_it_works_ts = """\"use client\";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  MessageSquare,
  FileSpreadsheet,
  FileCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: <MessageSquare className="w-5 h-5 text-brand-blue" />,
      title: "Tell Us About Your Business",
      description: "Share your business type, location, monthly transaction volume, and the specific compliance or bookkeeping services required."
    },
    {
      step: "02",
      icon: <FileSpreadsheet className="w-5 h-5 text-teal" />,
      title: "Receive a Requirement Checklist",
      description: "We explain the exact documents, bank statements, and information scope needed for the selected service before anything is started."
    },
    {
      step: "03",
      icon: <FileCheck className="w-5 h-5 text-brand-blue" />,
      title: "Review Scope and Pricing",
      description: "We provide a transparent quote, timeline estimate, exclusions, and agreed deliverables before work begins. Zero hidden charges."
    },
    {
      step: "04",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      title: "Service Delivery & Updates",
      description: "We keep you informed about progress, verify draft filings with you, submit on official portals, and share acknowledgement receipts."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface-bg border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
            Clear & Predictable Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3 mb-4">
            How It Works
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Our organized four-step process guarantees transparency, clear document guidelines, and consistent communication throughout your engagement.
          </p>
        </div>

        {/* 4-Step Timeline (Horizontal on desktop, vertical on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl border border-surface-border p-6 relative card-hover shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-200">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Micro indicator */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-[11px] font-medium text-text-muted">
                <span>Phase {index + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
"""

with open("src/components/home/HowItWorksSection.tsx", "w") as f:
    f.write(how_it_works_ts)

pricing_estimator_ts = """\"use client\";

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
"""

with open("src/components/home/PricingEstimator.tsx", "w") as f:
    f.write(pricing_estimator_ts)

why_choose_us_ts = """\"use client\";

import React from "react";
import {
  FileCheck2,
  Workflow,
  Receipt,
  Clock,
  Layers,
  Lock,
  Compass
} from "lucide-react";

export const WhyChooseUsSection: React.FC = () => {
  const points = [
    {
      icon: <Layers className="w-5 h-5 text-brand-blue" />,
      title: "One Centralized Compliance Partner",
      description: "No need to juggle separate bookkeepers, GST filers, and tax return agents. Manage your entire compliance lifecycle in one place."
    },
    {
      icon: <Workflow className="w-5 h-5 text-teal" />,
      title: "Organized Documentation & Workflows",
      description: "Structured digital intake checklists ensure no invoices, credit notes, or bank charges are misplaced throughout the financial year."
    },
    {
      icon: <Receipt className="w-5 h-5 text-brand-blue" />,
      title: "Clear Scope & Pricing Before Work",
      description: "Every engagement comes with a transparent written scope document detailing turnaround timelines, inclusions, and exclusions upfront."
    },
    {
      icon: <Clock className="w-5 h-5 text-teal" />,
      title: "Dedicated Communication & Cutoff Reminders",
      description: "Proactive reminders well before the 7th, 11th, and 20th of the month so you never incur compounding daily late fees or interest."
    },
    {
      icon: <Compass className="w-5 h-5 text-brand-blue" />,
      title: "Tailored to Your Business Volume",
      description: "From micro proprietorships to high-volume multi-branch distributors, service scope scales flexibly with your transaction density."
    },
    {
      icon: <Lock className="w-5 h-5 text-teal" />,
      title: "Strict Confidentiality & Secure Data Handling",
      description: "Your financial data, bank statements, and customer ledgers are stored securely under strict non-disclosure practices."
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-brand-blue" />,
      title: "Practical Guidance on Applicable Laws",
      description: "Honest explanations of current GST, TDS, and Income Tax provisions without false promises or misleading claims."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface-bg border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Our Service Principles
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3 mb-4">
            Why Businesses Choose TaxVeda
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            We focus on organized financial workflows, timely statutory coordination, and transparent communication.
          </p>
        </div>

        {/* 7 Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border border-surface-border p-6 card-hover shadow-xs ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                {pt.icon}
              </div>
              <h3 className="text-base font-bold text-navy mb-2">
                {pt.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {pt.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
"""

with open("src/components/home/WhyChooseUsSection.tsx", "w") as f:
    f.write(why_choose_us_ts)

home_faq_ts = """\"use client\";

import React, { useState } from "react";
import { mainFaqs } from "@/data/faqsData";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const HomeFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Honest answers to the most common questions regarding our accounting, GST, and tax compliance assistance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {mainFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-surface-border overflow-hidden transition-all bg-surface-bg/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-navy hover:text-brand-blue transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-brand-blue" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-text-muted leading-relaxed border-t border-slate-100 bg-white animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions */}
        <div className="mt-10 text-center text-xs text-text-muted flex flex-col sm:flex-row items-center justify-center gap-3">
          <span>Have a specific question not listed here?</span>
          <a
            href={siteConfig.links.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask us directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
"""

with open("src/components/home/HomeFaqSection.tsx", "w") as f:
    f.write(home_faq_ts)

resources_preview_ts = """\"use client\";

import React from "react";
import Link from "next/link";
import { allResources } from "@/data/resourcesData";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export const ResourcesPreviewSection: React.FC = () => {
  const featured = allResources.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-surface-bg border-b border-surface-border" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Educational Guides
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3">
              Knowledge & Compliance Guides
            </h2>
            <p className="text-sm text-text-muted mt-2 max-w-xl leading-relaxed">
              Verified, educational articles explaining Indian tax regulations, GST procedures, TDS rules, and small business accounting practices.
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-blue hover:text-brand-blue-hover self-start sm:self-auto"
          >
            <span>View All 10 Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((article) => (
            <div
              key={article.slug}
              className="bg-white rounded-2xl border border-surface-border p-6 flex flex-col justify-between card-hover shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] mb-3">
                  <span className="font-semibold text-teal bg-teal-light px-2.5 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="text-text-muted flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy hover:text-brand-blue transition-colors mb-2 leading-snug">
                  <Link href={`/resources/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-xs text-text-muted leading-relaxed line-clamp-3 mb-4">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-text-muted">
                  Reviewed: {article.lastReviewed}
                </span>
                <Link
                  href={`/resources/${article.slug}`}
                  className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
"""

with open("src/components/home/ResourcesPreviewSection.tsx", "w") as f:
    f.write(resources_preview_ts)

print("Created all homepage components: HeroSection, ServicesGrid, WhoWeHelpSection, HowItWorksSection, PricingEstimator, WhyChooseUsSection, HomeFaqSection, and ResourcesPreviewSection!")
