import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { Scale, ShieldAlert, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/disclaimer`,
  },
  title: "Professional & Regulatory Disclaimer | Taxoras",
  description: "Official regulatory disclaimer regarding accounting consultancy status, government portal independence, and statutory certification rules.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        <section className="bg-white border-b border-surface-border py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Legal Disclosures
            </span>
            <h1 className="text-3xl font-extrabold text-navy tracking-tight mt-3 mb-2">
              Professional & Regulatory Disclaimer
            </h1>
            <p className="text-xs sm:text-sm text-text-muted">
              Published in the interest of transparency and regulatory compliance
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 shrink-0 text-amber-700 mt-0.5" />
              <div>
                <strong className="block text-sm font-bold text-amber-950 mb-1">
                  Important Notice to Business Owners:
                </strong>
                {siteConfig.disclaimer}
              </div>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">1. Independence from Government Authorities</h2>
              <p>
                {siteConfig.businessName} is an independent private consultancy firm. We are NOT a department, affiliate, or representative of the Government of India, the Ministry of Finance, the Goods and Services Tax Network (GSTN), the Central Board of Direct Taxes (CBDT), or the Ministry of MSME.
              </p>
              <p className="mt-2">
                All official portals referenced on this site (including gst.gov.in, incometax.gov.in, udyamregistration.gov.in, and tdscpc.gov.in) are official properties of the Government of India.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">2. Non-CA Firm Designation & Statutory Audits</h2>
              <p>
                {siteConfig.businessName} is an accounting and compliance consultancy firm and does not hold itself out to be a Chartered Accountancy firm registered under the Chartered Accountants Act, 1949.
              </p>
              <p className="mt-2">
                Where any business assignment legally requires statutory audit reports, tax audit certificates under Section 44AB, or net worth certificates signed by a practicing Chartered Accountant, such assignments are coordinated through independent qualified practicing Chartered Accountants holding valid Certificates of Practice issued by the Institute of Chartered Accountants of India (ICAI).
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">3. No Guaranteed Outcomes or Zero-Tax Claims</h2>
              <p>
                We do not promise zero penalties, guaranteed tax savings, or predetermined approval outcomes. Government approvals (such as GST registrations or Udyam certifications) remain at the statutory discretion of the respective jurisdictional officers and portals.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-navy mb-2">4. Informational Purpose of Website Articles</h2>
              <p>
                All articles, guides, and compliance timelines published on this website are provided solely for general educational purposes. They do not constitute formal tax advice or legal opinions. Taxpayers should consult with our advisory desk or their designated professional regarding their specific circumstances.
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
