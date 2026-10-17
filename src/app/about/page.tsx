import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Workflow,
  Scale,
  Users,
  Building,
  ArrowRight,
  FileCheck2,
  Clock
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Professional Accounting & Compliance Advisory",
  description: "Learn about Taxoras Advisory. Our mission, service philosophy, document security standards, and honest approach to business accounting and tax compliance.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Hero Section */}
        <section className="bg-white border-b border-surface-border py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
              About Taxoras
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">
              Practical Accounting & Compliance Advisory for Indian Businesses
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
              We help sole proprietorships, partnerships, startups, and growing enterprises maintain organized financial records and meet Indian statutory compliance deadlines with confidence.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
          
          {/* Mission & Philosophy */}
          <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-navy flex items-center gap-2">
              <Workflow className="w-5 h-5 text-brand-blue" />
              <span>Our Service Philosophy</span>
            </h2>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              In India, small business owners often struggle with the fragmented nature of accounting and taxation. They have to deal with separate software for invoicing, disconnected tax filers for GST, and last-minute scrambles for year-end income tax returns.
            </p>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              At Taxoras, our philosophy is simple: <strong>Organized financial data throughout the year prevents compliance emergencies at the end of the year.</strong> We establish straightforward digital workflows that turn stressful filing deadlines into routine 15-minute approvals.
            </p>
          </section>

          {/* Core Values */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-navy mb-1.5">Honest & Real Scope</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                We never promise zero tax or guaranteed immunity from scrutiny. We deliver lawful, rigorous, and document-backed compliance support.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-teal-light text-teal flex items-center justify-center mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-navy mb-1.5">Document Security</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Your invoices, bank statements, and party ledgers are protected by strict non-disclosure practices and secure encrypted storage.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-navy mb-1.5">Proactive Reminders</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                We track upcoming statutory cutoffs (7th for TDS, 11th for GSTR-1, 20th for 3B) and remind you in advance so you avoid late fees.
              </p>
            </div>
          </section>

          {/* Working Approach */}
          <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-navy flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal" />
              <span>How We Work With You</span>
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-text-muted leading-relaxed">
              <p>
                <strong>1. Digital Intake:</strong> You upload your invoices and bank statements to our secure shared drive or email portal.
              </p>
              <p>
                <strong>2. Systematic Reconciliation:</strong> We cross-check every bill against bank debits and government portal data (like GSTR-2B or 26AS).
              </p>
              <p>
                <strong>3. Client Sign-Off:</strong> Before any return is submitted, we share draft tax computations and challan summaries for your formal verification.
              </p>
              <p>
                <strong>4. Portal Archiving:</strong> After submission on official portals, we archive all filing proofs, Form 27A, and ITR-V acknowledgements in your client folder.
              </p>
            </div>
          </section>

          {/* Professional Credentials & Regulatory Disclaimers */}
          <section className="bg-slate-50 rounded-2xl border border-surface-border p-6 sm:p-8 space-y-3 text-xs text-text-muted leading-relaxed">
            <h3 className="text-sm font-bold text-navy flex items-center gap-2">
              <Scale className="w-4 h-4 text-brand-blue" />
              <span>Professional Standing & Regulatory Disclaimers</span>
            </h3>
            <p>
              Taxoras Advisory & Compliance is a professional business accounting, documentation, and compliance consultancy firm. We do not represent ourselves as an authorized Chartered Accountancy (CA) partnership firm, nor do we claim government affiliation.
            </p>
            <p>
              Where client assignments involve statutory certifications, tax audit reports under Section 44AB of the Income Tax Act, or company audits under the Companies Act 2013, such statutory assignments are coordinated through independent qualified practicing Chartered Accountants in strict accordance with ICAI regulations.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-[#1C1510] border border-[#3E2C20] text-[#FAF4EF] rounded-2xl p-8 text-center space-y-4 shadow-xl">
            <h3 className="text-xl font-bold">Ready to Simplify Your Business Compliance?</h3>
            <p className="text-xs sm:text-sm text-[#BCAE9F] max-w-lg mx-auto">
              Contact our team today to discuss your business volume, receive a requirement checklist, and get a transparent service estimate.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/#enquire"
                className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-5 py-3 rounded-xl border border-white/20 transition-colors"
              >
                <span>View Contact Details</span>
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
