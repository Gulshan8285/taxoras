import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { siteConfig } from "@/config/siteConfig";
import {
  CheckCircle2,
  HelpCircle,
  Clock,
  Calendar,
  UserCheck,
  ShieldCheck,
  ArrowRight,
  Info,
  Scale,
  FileCheck2,
  AlertTriangle,
  Building,
  PhoneCall,
  Coins,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GST Amnesty Scheme & Late Fee Waiver Rules: Complete Eligibility & Relief Guide (2026)",
  description:
    "Complete breakdown of the GST Amnesty Scheme and late fee waiver rules in India. Learn maximum capped late fees for GSTR-3B, GSTR-4, GSTR-9, revocation of cancelled GSTINs, and how to file pending back-returns.",
  keywords: [
    "gst amnesty scheme 2026",
    "gst late fee waiver rules",
    "gstr 3b late fee cap",
    "revocation of cancelled gstin",
    "how to file pending gst returns without penalty",
    "gst return filing consultant"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/gst-amnesty-scheme-late-fee-waiver-rules",
  },
  openGraph: {
    title: "GST Amnesty Scheme & Late Fee Waiver Rules: Eligibility & Relief Guide",
    description:
      "Statutory guide on GST late fee caps, amnesty notifications, and procedures to revive cancelled GST registrations.",
    url: "https://www.taxoras.online/blog/gst-amnesty-scheme-late-fee-waiver-rules",
    type: "article",
    publishedTime: "2026-10-17T09:00:00+05:30",
    modifiedTime: "2026-10-17T12:00:00+05:30",
    authors: ["Taxoras Compliance Desk"],
  },
};

export default function GstAmnestySchemePage() {
  const articleUrl = "https://www.taxoras.online/blog/gst-amnesty-scheme-late-fee-waiver-rules";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}/#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": articleUrl
        },
        "headline": "GST Amnesty Scheme & Late Fee Waiver Rules: Complete Eligibility & Relief Guide (2026)",
        "description":
          "Complete breakdown of the GST Amnesty Scheme and late fee waiver rules in India. Learn maximum capped late fees for GSTR-3B, GSTR-4, GSTR-9, revocation of cancelled GSTINs, and how to file pending back-returns.",
        "image": "https://www.taxoras.online/icon.svg",
        "datePublished": "2026-10-17T09:00:00+05:30",
        "dateModified": "2026-10-17T12:00:00+05:30",
        "mainEntityOfPage": articleUrl,
        "author": {
          "@type": "Organization",
          "name": "Taxoras Advisory & Compliance",
          "url": "https://www.taxoras.online"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Taxoras Advisory & Compliance",
          "url": "https://www.taxoras.online",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.taxoras.online/icon.svg"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.taxoras.online"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog & Insights",
            "item": "https://www.taxoras.online/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "GST Amnesty Scheme & Late Fee Waiver",
            "item": articleUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${articleUrl}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does the GST Amnesty Scheme waive the tax liability and interest?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The GST Amnesty Scheme only grants relief on the statutory late fee (Section 47). Tax liability and mandatory interest under Section 50 (at 18% per annum) must be fully paid via cash ledger or available electronic credit ledger."
            }
          },
          {
            "@type": "Question",
            "name": "What is the maximum late fee under the GST Amnesty Scheme for GSTR-3B?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For Nil returns, the late fee is typically capped at ₹500 (₹250 CGST + ₹250 SGST). For returns with tax liability, the late fee is usually capped at ₹1,000 to ₹2,000 per return instead of the standard accumulated penalty of ₹10,000 per return."
            }
          },
          {
            "@type": "Question",
            "name": "Can I revive my cancelled GST registration under the Amnesty Scheme?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If your GSTIN was cancelled due to continuous non-filing of returns under Section 29, the special amnesty procedure allows you to apply for revocation of cancellation under Section 30, subject to filing all overdue returns up to the cancellation date."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Header */}
        <header className="bg-white border-b border-surface-border py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-text-muted mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog & Insights</Link>
              <span>/</span>
              <span className="text-white font-semibold">GST Amnesty Scheme</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <Coins className="w-3.5 h-3.5 text-amber-400" />
              Statutory Relief & Tax Notice Defense
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              GST Amnesty Scheme & Late Fee Waiver Rules: Complete Eligibility, Timelines & Relief Guide (2026)
            </h1>

            <p className="text-base sm:text-lg text-[#D8CCC0] leading-relaxed mb-6">
              Thousands of small businesses, retail traders, and startups accumulate crippling GST late fees when returns are skipped. Discover how the government amnesty notifications cap penalties, enable revocation of cancelled GSTINs, and how to clear back-returns legally.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#BCAE9F] pt-4 border-t border-surface-border">
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-amber-400" />
                <span>Author: <strong className="text-white">Taxoras Compliance Team</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Published: <strong className="text-white">October 2026</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>9 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

          {/* Quick Notice Alert */}
          <div className="bg-[#241A14] border-l-4 border-amber-500 p-5 rounded-r-2xl mb-10 text-xs sm:text-sm text-[#FAF4EF] leading-relaxed shadow-sm">
            <p className="font-bold text-amber-300 mb-1 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              Critical Compliance Alert for Pending Return Filers:
            </p>
            <p className="text-[#DDD0C5]">
              If you have unfiled GST returns (Form GSTR-3B, GSTR-4, or GSTR-9) from prior tax periods, standard statutory late fees accumulate at ₹50/day (₹20/day for Nil) up to a maximum cap of ₹10,000 per return. Amnesty notifications provide a limited-time window to settle past obligations at heavily slashed caps.
            </p>
          </div>

          {/* Section 1: Overview */}
          <section className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-surface-border pb-3">
              1. What is the GST Amnesty Scheme and Who Benefits?
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              The GST Amnesty Scheme is a statutory relief mechanism notified by the Central Board of Indirect Taxes and Customs (CBIC) under recommendations of the GST Council. Its primary goal is to encourage non-filers and non-compliant registered taxpayers to clear their pending returns and regularize their tax profile without facing punitive late fee burdens.
            </p>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              Under standard Section 47 provisions of the CGST Act, late fees compound daily. A business that failed to file GSTR-3B for 12 months could easily rack up over ₹1,20,000 in accumulated late fees alone. The Amnesty Scheme caps these fees substantially, providing immediate financial lifelines to micro, small, and medium enterprises.
            </p>
          </section>

          {/* Section 2: Late Fee Caps Table */}
          <section className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-surface-border pb-3">
              2. Slashed Late Fee Caps Under Amnesty Notifications
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              The table below highlights the comparative difference between standard late fee charges and the concessions granted under amnesty provisions:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-surface-border bg-[#1B1410] shadow-md">
              <table className="w-full text-left text-xs border-collapse min-w-[600px]">
                <thead className="bg-[#241A14] text-white font-bold uppercase tracking-wider border-b border-surface-border">
                  <tr>
                    <th className="p-3.5">Return Type</th>
                    <th className="p-3.5">Standard Statutory Late Fee</th>
                    <th className="p-3.5">Amnesty Slashed Cap (Nil Return)</th>
                    <th className="p-3.5">Amnesty Slashed Cap (With Tax)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border text-[#DDD0C5]">
                  <tr>
                    <td className="p-3.5 font-bold text-white">Form GSTR-3B (Monthly/Quarterly)</td>
                    <td className="p-3.5">₹50/day up to ₹10,000 per return</td>
                    <td className="p-3.5 text-emerald-400 font-bold">₹500 max per return</td>
                    <td className="p-3.5 text-amber-300 font-bold">₹1,000 – ₹2,000 max per return</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Form GSTR-4 (Composition Dealers)</td>
                    <td className="p-3.5">₹200/day up to ₹10,000 per return</td>
                    <td className="p-3.5 text-emerald-400 font-bold">₹0 – ₹500 max</td>
                    <td className="p-3.5 text-amber-300 font-bold">₹1,000 max per return</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Form GSTR-9 (Annual Return)</td>
                    <td className="p-3.5">₹200/day up to 0.50% of turnover</td>
                    <td className="p-3.5 text-emerald-400 font-bold">Subject to turnover slabs</td>
                    <td className="p-3.5 text-amber-300 font-bold">Capped at ₹20,000 max</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white">Form GSTR-10 (Final Return)</td>
                    <td className="p-3.5">₹200/day up to ₹10,000</td>
                    <td className="p-3.5 text-emerald-400 font-bold">₹1,000 max</td>
                    <td className="p-3.5 text-amber-300 font-bold">₹1,000 max</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Revocation of Cancelled GSTIN */}
          <section className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-surface-border pb-3">
              3. Revocation of Cancelled GST Registration (Section 30 Relief)
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              If your GSTIN was suo-motu cancelled by the jurisdictional tax officer due to failure to furnish returns for continuous tax periods (e.g. 6 consecutive months for regular dealers or 3 consecutive quarters for composition taxpayers), normal law imposes strict time limits to apply for revocation.
            </p>
            <div className="bg-[#1B1410] p-6 rounded-2xl border border-surface-border space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                Mandatory Steps to Revive Your Cancelled GSTIN:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-[#DDD0C5] pl-2">
                <li><strong className="text-white">File All Overdue Returns:</strong> Every single pending GSTR-3B and GSTR-1 from the initial date of default up to the effective cancellation date must be prepared and filed.</li>
                <li><strong className="text-white">Pay Pending Tax with Interest:</strong> Tax liability must be discharged along with 18% per annum statutory interest under Section 50(1).</li>
                <li><strong className="text-white">Submit Form GST REG-21:</strong> File the electronic application for revocation of cancellation on gst.gov.in.</li>
                <li><strong className="text-white">Officer Approval (Form GST REG-22):</strong> Upon validating that all returns and taxes are settled, the proper officer issues an order revoking the cancellation and reactivating your active status.</li>
              </ol>
            </div>
          </section>

          {/* Section 4: What Amnesty Does NOT Cover */}
          <section className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-surface-border pb-3">
              4. Common Misconception: What Amnesty Does NOT Waive
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#241A14] border border-[#3A291E] space-y-2">
                <strong className="text-rose-400 font-bold block text-sm">❌ No Waiver on Tax Liability</strong>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  The Amnesty Scheme provides zero discount on underlying tax payable. If your invoices show ₹50,000 CGST and SGST collected from customers, you must remit every single rupee.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#241A14] border border-[#3A291E] space-y-2">
                <strong className="text-rose-400 font-bold block text-sm">❌ No Waiver on Section 50 Interest</strong>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Interest on delayed tax payment compounds at 18% per annum calculated on net cash liability. Amnesty orders cannot waive statutory interest mandated by Parliament.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: How Taxoras Helps */}
          <section className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-surface-border pb-3">
              5. How Taxoras Advisory Helps You Regularize Back-Returns Safely
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              Filing 10 or 20 backlogged returns without professional reconciliation frequently triggers automated scrutiny notices under Rule 88C or ASMT-10 because purchase registers and GSTR-2B reports must be verified sequentially to avoid forfeited Input Tax Credit.
            </p>
            <div className="p-6 rounded-2xl bg-[#1B1410] border border-amber-500/40 shadow-sm space-y-3">
              <p className="text-xs sm:text-sm text-[#FAF4EF] font-semibold">
                Our Dedicated Backlog Filing & Amnesty Assistance Covers:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#DDD0C5]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Sequential period-by-period GSTR-1 and GSTR-3B tax computation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Exact Net Cash Liability and Section 50 interest calculations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Drafting Form GST REG-21 revocation petitions and responding to officer queries.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/services/gst-return-filing"
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  Explore Taxoras GST Return Filing Scope & Itemized Pricing →
                </Link>
              </div>
            </div>
          </section>

          {/* Section 6: FAQs */}
          <section className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-surface-border pb-3">
              6. Frequently Asked Questions
            </h2>
            <div className="space-y-3.5">
              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  Does the GST Amnesty Scheme waive the tax liability and interest?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  No. The GST Amnesty Scheme only grants relief on the statutory late fee (Section 47). Tax liability and mandatory interest under Section 50 (at 18% per annum) must be fully paid via cash ledger or available electronic credit ledger.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  What is the maximum late fee under the GST Amnesty Scheme for GSTR-3B?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  For Nil returns, the late fee is typically capped at ₹500 (₹250 CGST + ₹250 SGST). For returns with tax liability, the late fee is usually capped at ₹1,000 to ₹2,000 per return instead of the standard accumulated penalty of ₹10,000 per return.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  Can I revive my cancelled GST registration under the Amnesty Scheme?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Yes. If your GSTIN was cancelled due to continuous non-filing of returns under Section 29, the special amnesty procedure allows you to apply for revocation of cancellation under Section 30, subject to filing all overdue returns up to the cancellation date.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA Banner */}
          <section className="bg-gradient-to-br from-[#251A13] to-[#16100C] border border-amber-600/40 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6 text-center sm:text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                Have Pending Returns or a Cancelled GSTIN?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                Get Your Backlog Cleared with Minimum Statutory Late Fees
              </h2>
              <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
                Connect with our senior GST compliance coordinator. We will review your portal ARN history, calculate your exact net cash tax and capped late fee, and file your returns seamlessly.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <a
                href={siteConfig.links.whatsappUrl("Pending GST Returns & Amnesty Waiver Filing")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 shadow-md"
              >
                <span>Consult on WhatsApp</span>
              </a>
              <Link
                href="/services/gst-return-filing"
                className="bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 shadow-md"
              >
                <span>View GST Return Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
