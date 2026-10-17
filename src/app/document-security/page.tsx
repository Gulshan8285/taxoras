import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { Lock, ShieldCheck, CheckCircle2, Server } from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/document-security`,
  },
  title: "Document Security & Confidentiality Protocol | Taxoras",
  description: "Learn how Taxoras protects client financial records, bank statements, and accounting databases.",
};

export default function DocumentSecurityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        <section className="bg-white border-b border-surface-border py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              Information Security
            </span>
            <h1 className="text-3xl font-extrabold text-navy tracking-tight mt-3 mb-2">
              Document Security & Confidentiality Protocol
            </h1>
            <p className="text-xs sm:text-sm text-text-muted">
              Safeguarding Commercial Business Data Across All 28 States & 8 UTs
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            
            <p>
              Business accounting records contain proprietary vendor pricing, customer registries, margin figures, and banking statements. At {siteConfig.businessName}, we treat information security as a non-negotiable operational standard.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="font-bold text-navy">Encrypted Cloud Storage</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Client documents are archived in AES-256 bit encrypted cloud repositories with strict access rights limited solely to the assigned compliance team.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-light text-teal flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="font-bold text-navy">Zero Public Credentials Collection</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  We never collect, store, or log client net-banking passwords, debit card PINs, or confidential banking OTPs through our public website.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="font-bold text-navy">Strict Staff Non-Disclosure</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  All accounting analysts and filing coordinators are bound by legally enforceable employee confidentiality and non-disclosure agreements.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="font-bold text-navy">No Third-Party Data Monetization</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  We never sell, rent, or distribute client contact or financial data to telemarketers, loan aggregators, or third-party marketing brokers.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-text-muted leading-relaxed">
              <strong className="text-navy block mb-1">Right to Data Purge:</strong>
              Clients who discontinue engagements may submit a written request to permanently purge draft workpapers and statement copies from our digital storage systems.
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
