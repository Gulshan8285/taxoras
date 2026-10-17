import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { AlertCircle, Scale, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/service-limitations`,
  },
  title: "Service Scope & Limitations | Taxoras",
  description: "Detailed breakdown of consultancy service boundaries, client obligations, and regulatory limitations.",
};

export default function ServiceLimitationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        <section className="bg-white border-b border-surface-border py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-extrabold text-navy tracking-tight">
              Service Scope & Operational Limitations
            </h1>
            <p className="text-xs sm:text-sm text-text-muted mt-2">
              Clear Boundaries for Responsible Accounting & Tax Practice
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm font-bold mb-1">Our Core Commitment:</strong>
                We ensure that your invoices, vouchers, and statutory returns are compiled with accuracy, verified against bank records and government statements, and filed on time based on your instructions.
              </div>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">1. Authenticity of Client Records</h2>
              <p>
                Our services are rendered on the basis of commercial records, invoices, bank statements, and explanations furnished by the client. We do not perform forensic investigations into the authenticity of vendor invoices or physical inventory counts unless a separate investigative scope is mutually agreed.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">2. Regulatory Scrutiny & Assessment Hearings</h2>
              <p>
                Standard return filing packages include routine data compilation, submission, and initial acknowledgment archiving. If a tax authority issues a substantive scrutiny notice, summons, or audit assessment under Section 143(3) of the Income Tax Act or Section 61 of the CGST Act, such proceedings require specialized legal representation and are scoped separately.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">3. Independent Chartered Accountant Attestations</h2>
              <p>
                As an accounting consultancy firm, Taxoras prepares, reconciles, and compiles financial statements. Where statutory certifications (such as Tax Audit Reports under Section 44AB or Company Statutory Audits under Companies Act 2013) are mandated by law, these attestations are coordinated through independent practicing Chartered Accountants holding valid Certificates of Practice issued by the ICAI.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">4. Government Portal Server Availability</h2>
              <p>
                While we monitor deadlines proactively, Taxoras is not liable for temporary technical downtimes, portal crashes, or network slowdowns of government servers (gst.gov.in, incometax.gov.in) occurring during peak deadline hours. We strongly urge clients to provide monthly records by the 5th of each month to avoid deadline rushes.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
