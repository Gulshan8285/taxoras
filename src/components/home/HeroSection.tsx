"use client";

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
  Scale,
  MapPin,
  Lock
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"gst" | "accounting" | "tds">("gst");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#18120E] via-[#140F0B] to-[#120D0A] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-surface-border">
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Positioning Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-brand-blue text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-teal" />
              <span>{siteConfig.positioning}</span>
            </div>

            {/* Main Master Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-[1.15]">
              India&apos;s Affordable Partner for Accounting, GST & Tax Compliance.
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From GST registration and return filing to daily bookkeeping, TDS compliance, reconciliations, financial statements and income tax returns, get the support your business needs through a clear, convenient online process.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#service-finder"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg shadow-amber-950/40"
              >
                <span>Explore Services & Get Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#enquire"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#221A15] hover:bg-[#2C211B] text-[#FAF4EF] font-semibold text-sm px-6 py-3.5 rounded-xl border border-surface-border transition-all shadow-xs"
              >
                <span>Quick WhatsApp Enquiry</span>
              </a>
            </div>

            {/* 4 Supporting Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 border-t border-surface-border text-left">
              <div className="bg-white/80 p-2.5 rounded-xl border border-surface-border/70 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-brand-blue mb-1" />
                <h4 className="text-[11px] font-bold text-navy leading-tight">Clear Service Scope</h4>
                <p className="text-[10px] text-text-muted mt-0.5">Defined limits & tasks</p>
              </div>

              <div className="bg-white/80 p-2.5 rounded-xl border border-surface-border/70 shadow-xs">
                <Scale className="w-4 h-4 text-teal mb-1" />
                <h4 className="text-[11px] font-bold text-navy leading-tight">Transparent Pricing</h4>
                <p className="text-[10px] text-text-muted mt-0.5">Zero surprise add-ons</p>
              </div>

              <div className="bg-white/80 p-2.5 rounded-xl border border-surface-border/70 shadow-xs">
                <MapPin className="w-4 h-4 text-brand-blue mb-1" />
                <h4 className="text-[11px] font-bold text-navy leading-tight">Pan-India Online</h4>
                <p className="text-[10px] text-text-muted mt-0.5">Serving all states</p>
              </div>

              <div className="bg-white/80 p-2.5 rounded-xl border border-surface-border/70 shadow-xs">
                <Lock className="w-4 h-4 text-emerald-600 mb-1" />
                <h4 className="text-[11px] font-bold text-navy leading-tight">Secure Records</h4>
                <p className="text-[10px] text-text-muted mt-0.5">Status & acknowledgements</p>
              </div>
            </div>

            {/* Honest Trust Statement */}
            <p className="text-xs text-text-muted/90 italic pt-1 text-center lg:text-left">
              “{siteConfig.trustStatement}”
            </p>
          </div>

          {/* Right Column: Live Interactive Accounting Dashboard Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/15 to-teal/15 rounded-3xl blur-xl opacity-70"></div>

              <div className="relative bg-white rounded-2xl shadow-xl border border-surface-border p-5 sm:p-6 space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-surface-border">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-navy">Compliance Workspace Monitor</span>
                  </div>
                  <span className="text-[11px] font-medium text-text-muted bg-slate-100 px-2 py-0.5 rounded">
                    Pan-India Live
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setActiveTab("gst")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "gst"
                        ? "bg-[#291F18] text-[#FAF4EF] font-bold shadow-xs border border-[#3E2E23]"
                        : "text-text-muted hover:text-[#FAF4EF]"
                    }`}
                  >
                    GST Timeline
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("accounting")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "accounting"
                        ? "bg-[#291F18] text-[#FAF4EF] font-bold shadow-xs border border-[#3E2E23]"
                        : "text-text-muted hover:text-[#FAF4EF]"
                    }`}
                  >
                    Bookkeeping
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("tds")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === "tds"
                        ? "bg-[#291F18] text-[#FAF4EF] font-bold shadow-xs border border-[#3E2E23]"
                        : "text-text-muted hover:text-[#FAF4EF]"
                    }`}
                  >
                    TDS & Bank
                  </button>
                </div>

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
