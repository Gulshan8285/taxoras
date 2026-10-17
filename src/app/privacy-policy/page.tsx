import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Privacy Policy | Document Security & Data Handling",
  description: "Privacy Policy for Taxoras Advisory. How we handle client financial records, invoices, bank statements, and personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        <section className="bg-white border-b border-surface-border py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-extrabold text-navy tracking-tight">
              Privacy & Document Handling Policy
            </h1>
            <p className="text-xs sm:text-sm text-text-muted mt-2">
              Last updated: October 2026 • Compliant with Indian IT Act & DPDP Framework
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-base font-bold text-navy mb-2">1. Scope of This Policy</h2>
              <p>
                {siteConfig.businessName} (&quot;Taxoras&quot;, &quot;we&quot;, &quot;our&quot;) is committed to protecting the confidentiality and integrity of financial documents, business records, and personal identifying data provided by our clients and website visitors.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">2. Information We Collect</h2>
              <p>
                We collect only the minimum information necessary to evaluate service requirements and perform agreed compliance tasks:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Contact details: Full Name, mobile/WhatsApp number, email address, and city.</li>
                <li>Commercial details: Business name, legal constitution, turnover band, and service requirements.</li>
                <li>Compliance inputs: Sales invoices, purchase bills, bank statements, and previous return copies (shared solely for agreed engagements).</li>
              </ul>
              <p className="mt-2 font-semibold text-navy">
                We never request or store sensitive banking passwords, UPI PINs, or net banking credentials through our public website.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">3. Purpose of Processing</h2>
              <p>
                Data submitted via our website enquiry forms is used solely to contact you, understand your business compliance requirements, and provide scope estimates. We never sell, rent, or trade client information to telemarketers or third-party lead generation companies.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">4. Document Confidentiality & Security</h2>
              <p>
                Financial ledgers and tax records shared with our consultancy are accessible only to authorized analysts assigned to your engagement. We maintain encrypted digital folders and practice strict non-disclosure disciplines.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">5. Contact for Privacy Inquiries</h2>
              <p>
                For questions regarding this policy or to request deletion of your enquiry data, please write to us at{" "}
                <a href={siteConfig.links.emailUrl} className="text-brand-blue font-semibold hover:underline">
                  {siteConfig.contact.email}
                </a>.
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
