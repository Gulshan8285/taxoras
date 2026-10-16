import os

privacy_ts = """import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Privacy Policy | Document Security & Data Handling",
  description: "Privacy Policy for TaxVeda Advisory. How we handle client financial records, invoices, bank statements, and personal data.",
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
                {siteConfig.businessName} (&quot;TaxVeda&quot;, &quot;we&quot;, &quot;our&quot;) is committed to protecting the confidentiality and integrity of financial documents, business records, and personal identifying data provided by our clients and website visitors.
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
"""

with open("src/app/privacy-policy/page.tsx", "w") as f:
    f.write(privacy_ts)

terms_ts = """import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Terms of Service | Engagement Scope & Terms",
  description: "Terms of Service governing accounting and compliance advisory engagements with TaxVeda Advisory.",
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
                Consultancy fees are payable against verified tax invoices as per the agreed schedule. For regulatory clarity, TaxVeda does not collect statutory tax payments (GST, TDS, Advance Tax) into its accounts; we generate official government challans for direct client payment from client bank accounts.
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
"""

with open("src/app/terms/page.tsx", "w") as f:
    f.write(terms_ts)

disclaimer_ts = """import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { Scale, ShieldAlert, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional & Regulatory Disclaimer | TaxVeda",
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
"""

with open("src/app/disclaimer/page.tsx", "w") as f:
    f.write(disclaimer_ts)

print("Created Privacy Policy, Terms, and Disclaimer pages successfully!")
