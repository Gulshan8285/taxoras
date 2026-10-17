import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Taxoras",
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
                Statutory payments made directly by the client to government portals (such as GST challans, advance tax, or MCA filing fees) are non-refundable by Taxoras as these are paid directly to the Central or State Governments.
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
