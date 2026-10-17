import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/terms`,
  },
  title: "Terms of Service | Engagement Scope & Terms",
  description: "Terms of Service governing accounting and compliance advisory engagements with Taxoras Advisory.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        <section className="bg-white border-b border-surface-border py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-extrabold text-navy tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs sm:text-sm text-text-muted mt-2">
              Last updated: October 2026 • Governing Business Engagements
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-base font-bold text-navy mb-2">1. Nature of Services</h2>
              <p>
                {siteConfig.businessName} provides commercial business accounting, bookkeeping, document compilation, and compliance filing assistance. Our engagements are defined by written scope estimates and mutual agreement prior to service delivery.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">2. Client Responsibilities</h2>
              <p>
                Accurate compliance filings depend entirely on the authenticity and timeliness of records supplied by the client:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Clients must furnish complete and authentic sales invoices, purchase records, and bank statements before agreed monthly cutoff dates.</li>
                <li>The client retains sole legal responsibility for the commercial genuineness of underlying business transactions.</li>
                <li>The client must verify draft computations and provide OTP / DSC authorization for final government portal submissions.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">3. Fee Terms & Direct Tax Payments</h2>
              <p>
                Consultancy fees are payable against verified tax invoices as per the agreed schedule. For regulatory clarity, Taxoras does not collect statutory tax payments (GST, TDS, Advance Tax) into its accounts; we generate official government challans for direct client payment from client bank accounts.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">4. Limitation of Liability</h2>
              <p>
                We are not liable for statutory penalties, interest, or late fees arising from delayed client document submission, incorrect underlying client data, or unscheduled downtime of government servers (gst.gov.in, incometax.gov.in).
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">5. Governing Law & Jurisdiction</h2>
              <p>
                These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts in {siteConfig.location.city}, India.
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
