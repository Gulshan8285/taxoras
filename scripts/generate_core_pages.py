import os

about_page_ts = """import React from "react";
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
  description: "Learn about TaxVeda Advisory. Our mission, service philosophy, document security standards, and honest approach to business accounting and tax compliance.",
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
              About TaxVeda
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
              At TaxVeda, our philosophy is simple: <strong>Organized financial data throughout the year prevents compliance emergencies at the end of the year.</strong> We establish straightforward digital workflows that turn stressful filing deadlines into routine 15-minute approvals.
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
              TaxVeda Advisory & Compliance is a professional business accounting, documentation, and compliance consultancy firm. We do not represent ourselves as an authorized Chartered Accountancy (CA) partnership firm, nor do we claim government affiliation.
            </p>
            <p>
              Where client assignments involve statutory certifications, tax audit reports under Section 44AB of the Income Tax Act, or company audits under the Companies Act 2013, such statutory assignments are coordinated through independent qualified practicing Chartered Accountants in strict accordance with ICAI regulations.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-navy text-white rounded-2xl p-8 text-center space-y-4">
            <h3 className="text-xl font-bold">Ready to Simplify Your Business Compliance?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
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
"""

with open("src/app/about/page.tsx", "w") as f:
    f.write(about_page_ts)

who_we_help_page_ts = """import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { allAudiences } from "@/data/audienceData";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { ServiceIcon } from "@/components/common/ServiceIcon";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Layers,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Who We Help | Compliance Guidance for Indian Businesses & Startups",
  description: "Explore tailored accounting, GST, and tax compliance solutions for startups, SMEs, retailers, freelancers, e-commerce sellers, and manufacturers.",
};

export default function WhoWeHelpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Header */}
        <section className="bg-white border-b border-surface-border py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Audience Guides
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">
              Accounting & Compliance Solutions Mapped to Your Business Model
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
              Different industries face distinct compliance challenges—from e-commerce TCS credits to MSME 45-day payment rules. Discover how we tailor our services to your needs.
            </p>
          </div>
        </section>

        {/* Detailed Audience Guides */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allAudiences.map((audience) => (
              <div
                key={audience.id}
                className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 card-hover shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      <ServiceIcon name={audience.icon} className="w-6 h-6 text-brand-blue" />
                    </div>
                    <span className="text-xs font-semibold text-teal bg-teal-light px-3 py-1 rounded-full">
                      {audience.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-2">
                    {audience.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                    {audience.description}
                  </p>

                  {/* Common Challenges */}
                  <div className="mb-6 space-y-2">
                    <span className="text-xs font-bold text-navy block">
                      Common Pain Points We Resolve:
                    </span>
                    {audience.commonChallenges.map((ch, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-text-muted bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>

                  {/* Relevant Services */}
                  <div className="mb-6 space-y-2">
                    <span className="text-xs font-bold text-navy block">
                      Recommended Services:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {audience.relevantServices.map((svc, sIdx) => (
                        <span key={sIdx} className="text-xs font-medium text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md">
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between">
                  <span className="text-xs font-bold text-navy">
                    {audience.suggestedPackage}
                  </span>
                  <Link
                    href="/#enquire"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-blue-hover"
                  >
                    <span>Discuss Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Clarification */}
          <div className="bg-slate-50 rounded-2xl border border-surface-border p-6 text-xs text-text-muted leading-relaxed text-center max-w-2xl mx-auto">
            <HelpCircle className="w-5 h-5 text-brand-blue mx-auto mb-2" />
            <p>
              Not every business requires all compliance services. During our initial discussion, we evaluate your actual turnover and legal structure so you only pay for what your business legally requires.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
"""

with open("src/app/who-we-help/page.tsx", "w") as f:
    f.write(who_we_help_page_ts)

pricing_page_ts = """import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { PricingEstimator } from "@/components/home/PricingEstimator";
import { EnquiryForm } from "@/components/common/EnquiryForm";
import {
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Scope Approach | Transparent Accounting Services",
  description: "Understand our pricing philosophy. Transparent scope, zero hidden costs, and honest fee structures for Indian businesses.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Header */}
        <section className="bg-white border-b border-surface-border py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
              Fee Principles
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">
              Transparent, Value-Driven Pricing
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
              Every business is unique in volume and complexity. We provide written scopes of work with clear deliverables before billing.
            </p>
          </div>
        </section>

        {/* Pricing Estimator Section */}
        <PricingEstimator />

        {/* Detailed FAQ on Pricing & Billing */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-5">
            <h2 className="text-xl font-bold text-navy">
              Frequently Asked Questions About Our Charges
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-text-muted">
              <div>
                <h4 className="font-bold text-navy mb-1">
                  Are government registration fees included in your assistance quotes?
                </h4>
                <p className="leading-relaxed">
                  GST Registration and Udyam Registration do not carry official government fees; our charges cover professional documentation, portal filing, and clarification drafting. If any government fee or stamp duty applies (such as MCA name approval for companies), it is billed separately with official government challan receipts.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-navy mb-1">
                  How is monthly bookkeeping priced?
                </h4>
                <p className="leading-relaxed">
                  Monthly bookkeeping is determined primarily by your average monthly voucher count (sales, purchases, bank lines), the number of operative bank accounts, and whether you require inventory tracking.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-navy mb-1">
                  Do you charge extra for replying to department queries?
                </h4>
                <p className="leading-relaxed">
                  Routine clarification queries (such as GST REG-03) during the initial registration process are included in our fixed assistance fee. Substantive scrutiny notices or appeals require separate scoping based on complexity.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="enquire">
            <EnquiryForm
              title="Request a Detailed Service Estimate"
              subtitle="Tell us about your business type and average monthly transaction density. We will furnish an itemized scope quotation."
            />
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
"""

with open("src/app/pricing/page.tsx", "w") as f:
    f.write(pricing_page_ts)

contact_page_ts = """import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { EnquiryForm } from "@/components/common/EnquiryForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ShieldCheck,
  Building2,
  Calendar
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Office Location, Phone & WhatsApp Support",
  description: "Get in touch with TaxVeda Advisory. Office address in New Delhi, direct helpline number, WhatsApp enquiry desk, and operating hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Header */}
        <section className="bg-white border-b border-surface-border py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">
              Contact Our Compliance Desk
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-xl mx-auto">
              Have questions regarding GST registration, return deadlines, or daily accounting? We are here to assist your business.
            </p>
          </div>
        </section>

        {/* Contact Information & Form Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 5 Columns: Contact Details & Office Card */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-6">
                <h2 className="text-xl font-bold text-navy pb-3 border-b border-surface-border">
                  Direct Office Contacts
                </h2>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-navy block text-xs uppercase tracking-wider">
                        Office Location
                      </span>
                      <p className="text-text-muted mt-0.5 leading-relaxed">
                        {siteConfig.location.address}, {siteConfig.location.city} {siteConfig.location.pincode}, {siteConfig.location.country}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-light text-teal flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-navy block text-xs uppercase tracking-wider">
                        Telephone Helpline
                      </span>
                      <a href={siteConfig.links.phoneUrl} className="text-brand-blue font-semibold mt-0.5 block hover:underline">
                        {siteConfig.contact.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-navy block text-xs uppercase tracking-wider">
                        WhatsApp Business
                      </span>
                      <a
                        href={siteConfig.links.whatsappUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-semibold mt-0.5 block hover:underline"
                      >
                        {siteConfig.contact.whatsappFormatted} (Instant Chat)
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-navy flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-navy block text-xs uppercase tracking-wider">
                        Email Correspondence
                      </span>
                      <a href={siteConfig.links.emailUrl} className="text-brand-blue font-semibold mt-0.5 block hover:underline">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-navy block text-xs uppercase tracking-wider">
                        Business Hours
                      </span>
                      <p className="text-text-muted mt-0.5">
                        {siteConfig.contact.workingDays}: {siteConfig.contact.workingHours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Digital Support Note */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-text-muted leading-relaxed">
                  <strong className="text-navy block mb-1">Serving Businesses Across India</strong>
                  We operate a completely digital documentation and filing model, serving clients in Delhi NCR, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Ahmedabad, and Tier-2/3 business hubs.
                </div>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="bg-white rounded-2xl border border-surface-border p-5 text-center space-y-2">
                <div className="w-full h-40 bg-slate-100 rounded-xl flex flex-col items-center justify-center text-text-muted text-xs border border-dashed border-slate-300">
                  <Building2 className="w-8 h-8 text-slate-400 mb-1" />
                  <span className="font-semibold text-navy">Connaught Place Central Hub</span>
                  <span className="text-[11px]">New Delhi 110001, India</span>
                </div>
                <p className="text-[11px] text-text-muted">
                  Client consultations by prior appointment.
                </p>
              </div>

            </div>

            {/* Right 7 Columns: Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm
                title="Send an Enquiry Directly to Our Team"
                subtitle="Fill out the fields below. A compliance advisor will review your requirements and reach out on your preferred channel."
              />
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

with open("src/app/contact/page.tsx", "w") as f:
    f.write(contact_page_ts)

print("Created About, Who We Help, Pricing, and Contact pages successfully!")
