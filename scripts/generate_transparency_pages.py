import os

refund_ts = """import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | TaxVeda",
  description: "Transparent refund and cancellation terms for accounting and compliance consultancy services.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        <section className="bg-white border-b border-surface-border py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-extrabold text-navy tracking-tight">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xs sm:text-sm text-text-muted mt-2">
              Last updated: October 2026 • Fair & Transparent Service Terms
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-base font-bold text-navy mb-2">1. Scope of Refund Policy</h2>
              <p>
                At {siteConfig.businessName}, we pride ourselves on transparent communication and clear written deliverables. Because professional accounting and tax services involve personalized time, document drafting, and data verification by our analysts, refunds are processed based on the actual stage of service execution.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">2. Cancellation Prior to Drafting / Portal Work</h2>
              <p>
                If a client requests cancellation within 24 hours of payment and before our team has initiated document review, ledger entry, or government portal application drafting, a 100% refund of professional fees is issued (less nominal payment gateway transaction processing charges).
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">3. Work in Progress & Incomplete Client Documents</h2>
              <p>
                Once document review or portal drafting has commenced, refunds are evaluated on a prorated basis corresponding to the work completed. Where service delays result from the client failing to provide necessary invoices, bank statements, or OTP authentications despite multiple reminders, the service fee remains valid for 90 days during which the client may resume completion.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">4. Government Fees & Taxes Non-Refundable</h2>
              <p>
                Statutory payments made directly by the client to government portals (such as GST challans, advance tax, or MCA filing fees) are non-refundable by TaxVeda as these are paid directly to the Central or State Governments.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">5. How to Request a Refund</h2>
              <p>
                All refund requests should be submitted in writing with your Service Reference ID to{" "}
                <a href={siteConfig.links.emailUrl} className="text-brand-blue font-semibold hover:underline">
                  {siteConfig.contact.email}
                </a>. Approved refunds are credited to the original payment source within 5 to 7 banking days.
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
"""

with open("src/app/refund-policy/page.tsx", "w") as f:
    f.write(refund_ts)

limitations_ts = """import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { AlertCircle, Scale, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Scope & Limitations | TaxVeda",
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
                As an accounting consultancy firm, TaxVeda prepares, reconciles, and compiles financial statements. Where statutory certifications (such as Tax Audit Reports under Section 44AB or Company Statutory Audits under Companies Act 2013) are mandated by law, these attestations are coordinated through independent practicing Chartered Accountants holding valid Certificates of Practice issued by the ICAI.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">4. Government Portal Server Availability</h2>
              <p>
                While we monitor deadlines proactively, TaxVeda is not liable for temporary technical downtimes, portal crashes, or network slowdowns of government servers (gst.gov.in, incometax.gov.in) occurring during peak deadline hours. We strongly urge clients to provide monthly records by the 5th of each month to avoid deadline rushes.
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
"""

with open("src/app/service-limitations/page.tsx", "w") as f:
    f.write(limitations_ts)

security_ts = """import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { Lock, ShieldCheck, CheckCircle2, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Document Security & Confidentiality Protocol | TaxVeda",
  description: "Learn how TaxVeda protects client financial records, bank statements, and accounting databases.",
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
"""

with open("src/app/document-security/page.tsx", "w") as f:
    f.write(security_ts)

print("Created refund-policy, service-limitations, and document-security pages successfully!")
