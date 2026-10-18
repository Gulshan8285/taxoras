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
  RefreshCw,
  FileSpreadsheet,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Section 16(4) ITC Deadline Updates & Retrospective Relief: Law & Reconciliation Guide (2026)",
  description:
    "Complete legal guide to Section 16(4) Input Tax Credit (ITC) deadlines in India. Understand 30th November statutory cutoffs, retrospective relief under Section 16(5) & 16(6), GSTR-2B matching, and Rule 37A reversal procedures.",
  keywords: [
    "section 16 4 itc deadline",
    "section 16 5 retrospective relief",
    "gst itc cutoff 30th november",
    "rule 37a itc reversal",
    "gstr 2b reconciliation",
    "input tax credit timeline cgst act",
    "taxoras gst compliance"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/section-16-4-itc-deadline-updates",
  },
  openGraph: {
    title: "Section 16(4) ITC Deadline Updates & Retrospective Relief Guide",
    description:
      "Statutory analysis of Section 16(4) ITC cutoffs, retrospective relief for FY 2017-18 to 2020-21, and automated reconciliation methods to avoid tax demand notices.",
    url: "https://www.taxoras.online/blog/section-16-4-itc-deadline-updates",
    type: "article",
    publishedTime: "2026-10-17T10:00:00+05:30",
    modifiedTime: "2026-10-17T12:30:00+05:30",
    authors: ["Taxoras Compliance Desk"],
  },
};

export default function Section164ITCGuidePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Section 16(4) ITC Deadline Updates & Retrospective Relief: Law & Reconciliation Guide",
    description:
      "Statutory breakdown of Section 16(4) Input Tax Credit cutoffs, Section 16(5) & 16(6) retrospective relief, and Rule 37A compliance.",
    image: "https://www.taxoras.online/opengraph-image",
    author: {
      "@type": "Organization",
      name: "Taxoras Compliance Desk",
      url: "https://www.taxoras.online",
    },
    publisher: {
      "@type": "Organization",
      name: "Taxoras Advisory & Compliance",
      logo: {
        "@type": "ImageObject",
        url: "https://www.taxoras.online/icon.svg",
      },
    },
    datePublished: "2026-10-17T10:00:00+05:30",
    dateModified: "2026-10-17T12:30:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.taxoras.online/blog/section-16-4-itc-deadline-updates",
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.taxoras.online",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.taxoras.online/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Section 16(4) ITC Deadline Updates",
        item: "https://www.taxoras.online/blog/section-16-4-itc-deadline-updates",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the final deadline to claim missed Input Tax Credit (ITC) for a financial year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 16(4) of the CGST Act (amended via Finance Act 2022), the deadline to claim missed ITC for an invoice or debit note pertaining to a financial year is 30th November following the end of that financial year, or the date of furnishing the annual return (GSTR-9), whichever is earlier.",
        },
      },
      {
        "@type": "Question",
        name: "What is the retrospective relief provided under Section 16(5) & 16(6)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Inserted via Finance (No. 2) Act 2024, Section 16(5) provides that for invoices or debit notes pertaining to FY 2017-18, 2018-19, 2019-20, and 2020-21, ITC filed in any GSTR-3B return up to 30th November 2021 is deemed to be validly claimed within time. Section 16(6) extends similar relief for taxpayers whose registrations were cancelled and later restored.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if a supplier fails to pay tax or file GSTR-3B under Rule 37A?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Rule 37A of the CGST Rules, if your supplier furnished an invoice in GSTR-1 / IFF but failed to file their GSTR-3B by the 30th of September following the financial year, the recipient must reverse the availed ITC on or before 30th November. If the supplier subsequently files GSTR-3B, the recipient can legally re-avail the reversed ITC.",
        },
      },
      {
        "@type": "Question",
        name: "Can ITC be claimed if an invoice appears in GSTR-2A but not in GSTR-2B?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Statutory ITC entitlement in GSTR-3B is strictly determined by GSTR-2B, which is a static monthly statement generated on the 14th of each month under Section 16(2)(aa). GSTR-2A is dynamic and cannot serve as legal basis for claiming credit in GSTR-3B.",
        },
      },
      {
        "@type": "Question",
        name: "How can I quickly get Taxoras to audit my GSTR-2B and claim missing Input Tax Credit before the deadline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Send an enquiry on WhatsApp at +91 88103 81949. Our reconciliation specialists run automated purchase-to-2B invoice matching across your entire financial year, identify uncredited vendor bills, and file your GSTR-3B before the statutory 30th November cutoff.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#120D0A] text-[#FAF4EF] flex flex-col selection:bg-amber-500/20 selection:text-amber-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#DDD0C5] flex items-center gap-2">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white font-medium">Section 16(4) ITC Deadline</span>
          </nav>

          {/* Article Header */}
          <header className="space-y-4 border-b border-surface-border pb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3 py-1 rounded-full uppercase tracking-wider">
                GST Statutory Audit & Compliance
              </span>
              <span className="text-xs text-[#DDD0C5] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" /> October 17, 2026
              </span>
              <span className="text-xs text-[#DDD0C5] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> 11 Min Read
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Section 16(4) Input Tax Credit (ITC) Deadline: Law, Retrospective Relief &amp; Reconciliation Protocol (2026)
            </h1>

            <p className="text-base sm:text-lg text-[#DDD0C5] leading-relaxed">
              Every rupee of Input Tax Credit (ITC) directly offsets cash GST liability. Yet, Section 16(4) remains the single largest trigger for departmental audit notices, disallowances, and Section 73/74 demands across Indian enterprises. Here is an authoritative guide on statutory cutoff dates, landmark retrospective amendments under Sections 16(5) &amp; 16(6), Rule 37A supplier default rules, and error-proof GSTR-2B reconciliation frameworks.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                TX
              </div>
              <div>
                <p className="text-xs font-bold text-white">Taxoras Regulatory &amp; Indirect Tax Research Group</p>
                <p className="text-[11px] text-[#DDD0C5]">Reviewed by Chartered Accountants &amp; GST Practitioners</p>
              </div>
            </div>
          </header>

          {/* Key Takeaways Callout Card */}
          <div className="bg-[#1B1410] border border-surface-border rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-400 shrink-0" />
              Executive Summary: Critical ITC Milestones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#DDD0C5]">
              <div className="bg-[#120D0A] p-4 rounded-xl border border-surface-border">
                <strong className="text-white block mb-1">Standard Cutoff Date: 30th November</strong>
                ITC for any financial year must be availed in GSTR-3B filed on or before 30th November of the subsequent fiscal year (or date of filing GSTR-9 annual return, whichever is earlier).
              </div>
              <div className="bg-[#120D0A] p-4 rounded-xl border border-surface-border">
                <strong className="text-white block mb-1">Retrospective Sections 16(5) &amp; 16(6) Relief</strong>
                For FY 2017-18 through 2020-21, ITC claimed in any GSTR-3B up to 30th November 2021 is deemed legally valid, quashing thousands of pending departmental demand orders.
              </div>
              <div className="bg-[#120D0A] p-4 rounded-xl border border-surface-border">
                <strong className="text-white block mb-1">Rule 37A Supplier Default Reversal</strong>
                If a supplier filed GSTR-1 but defaulted on GSTR-3B by 30th Sept, recipient must reverse the ITC by 30th Nov, with statutory re-claim rights upon later supplier filing.
              </div>
              <div className="bg-[#120D0A] p-4 rounded-xl border border-surface-border">
                <strong className="text-white block mb-1">Strict GSTR-2B Dependency</strong>
                Section 16(2)(aa) mandates that no ITC can be taken unless the invoice is furnished by supplier in GSTR-1 and communicated to recipient in auto-populated GSTR-2B.
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <nav aria-label="Table of Contents" className="bg-[#1B1410] p-6 rounded-2xl border border-surface-border">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Contents in this Guide</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#DDD0C5]">
              <li><a href="#understanding-16-4" className="hover:text-amber-400">1. Understanding Section 16(4) Legal Framework</a></li>
              <li><a href="#retrospective-amendments" className="hover:text-amber-400">2. Retrospective Relief: Sections 16(5) &amp; 16(6)</a></li>
              <li><a href="#four-pillars-itc" className="hover:text-amber-400">3. 4 Non-Negotiable Pillars to Claim ITC [Sec 16(2)]</a></li>
              <li><a href="#rule-37a-compliance" className="hover:text-amber-400">4. Rule 37A Reversal &amp; Reclaim Mechanisms</a></li>
              <li><a href="#reconciliation-framework" className="hover:text-amber-400">5. 2B vs Purchase Register Reconciliation Protocol</a></li>
              <li><a href="#faqs" className="hover:text-amber-400">6. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* Section 1 */}
          <section id="understanding-16-4" className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Scale className="w-6 h-6 text-amber-400 shrink-0" />
              1. Understanding Section 16(4) of the CGST Act
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              Section 16(4) places a statutory expiration date on your right to claim Input Tax Credit on tax invoices or debit notes. Prior to the Finance Act 2022 amendment, the cutoff date was the due date of furnishing the return for September following the end of the financial year.
            </p>
            <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-3">
              <p className="text-xs sm:text-sm text-white font-semibold">
                Statutory Text of Section 16(4) (As Amended):
              </p>
              <p className="text-xs text-[#DDD0C5] italic pl-4 border-l-2 border-amber-500 bg-[#120D0A] p-3 rounded-r-lg">
                &quot;A registered person shall not be entitled to take input tax credit in respect of any invoice or debit note for supply of goods or services or both after the thirtieth day of November following the end of the financial year to which such invoice or debit note pertains, or furnishing of the relevant annual return, whichever is earlier.&quot;
              </p>
              <p className="text-xs text-[#DDD0C5] leading-relaxed">
                This amendment gave taxpayers an extra 40 days compared to the old September return deadline (which fell on 20th October). The cutoff is now strictly pegged to a calendar date: <strong>30th November</strong>.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-surface-border rounded-xl overflow-hidden">
                <thead className="bg-[#251A13] text-white">
                  <tr>
                    <th className="p-3 border-b border-surface-border">Financial Year of Purchase Invoice</th>
                    <th className="p-3 border-b border-surface-border">Earlier Cutoff (Pre-2022)</th>
                    <th className="p-3 border-b border-surface-border">Current Statutory Cutoff</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border text-[#DDD0C5]">
                  <tr className="bg-[#1B1410]">
                    <td className="p-3 font-medium text-white">FY 2024-25</td>
                    <td className="p-3">20th October 2025</td>
                    <td className="p-3 text-amber-400 font-bold">30th November 2025 (in GSTR-3B)</td>
                  </tr>
                  <tr className="bg-[#16100C]">
                    <td className="p-3 font-medium text-white">FY 2025-26</td>
                    <td className="p-3">20th October 2026</td>
                    <td className="p-3 text-amber-400 font-bold">30th November 2026 (in GSTR-3B)</td>
                  </tr>
                  <tr className="bg-[#1B1410]">
                    <td className="p-3 font-medium text-white">FY 2026-27</td>
                    <td className="p-3">20th October 2027</td>
                    <td className="p-3 text-amber-400 font-bold">30th November 2027 (in GSTR-3B)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 */}
          <section id="retrospective-amendments" className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Coins className="w-6 h-6 text-amber-400 shrink-0" />
              2. Landmark Retrospective Relief: Sections 16(5) &amp; 16(6)
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              During the initial transition years of GST (FY 2017-18 to 2020-21), taxpayers faced rampant portal glitches, GSTR-2A vs 3B mismatches, and ambiguous circulars. Consequently, thousands of businesses filed returns after the original due dates but before 30th November 2021, only to receive devastating Section 73 recovery notices demanding tax + 18% interest + 10% penalty.
            </p>
            
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              To remedy this injustice, the 53rd GST Council recommended and the Parliament enacted <strong>Sections 16(5) and 16(6)</strong> via the Finance (No. 2) Act 2024 with retrospective effect from 1st July 2017.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Section 16(5) CGST Act</span>
                <h3 className="text-base font-bold text-white">Deemed Timely ITC Filing</h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  For invoices or debit notes pertaining to <strong>FY 2017-18, 2018-19, 2019-20, and 2020-21</strong>, if a registered person availed ITC in any GSTR-3B filed up to <strong>30th November 2021</strong>, such credit shall be deemed to have been availed within the time prescribed under Section 16(4).
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Section 16(6) CGST Act</span>
                <h3 className="text-base font-bold text-white">Revocation of Cancelled GSTINs</h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Where GST registration was cancelled and later revoked under Section 30, ITC can be claimed in returns filed within 30 days of the revocation order or up to 30th November 2021 (whichever is later), granting full parity to revived businesses.
                </p>
              </div>
            </div>

            <div className="bg-amber-950/20 border border-amber-600/30 p-4 rounded-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-[#DDD0C5] leading-relaxed space-y-1">
                <strong className="text-white block font-medium">What If You Already Paid Demand Taxes? (Section 148 Circular)</strong>
                <p>
                  If an adjudication order under Section 73 or 74 was already issued confirming Section 16(4) demand and no appeal was filed, the CBIC introduced a special rectification mechanism under Section 148 allowing proper officers to rectify the order and waive demands in light of Section 16(5). However, no cash refunds are issued for tax already paid into government accounts.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="four-pillars-itc" className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
              3. The 4 Non-Negotiable Pillars to Claim ITC [Section 16(2)]
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              Meeting the 30th November deadline under Section 16(4) is meaningless unless you simultaneously satisfy all four conditions precedent stipulated in Section 16(2):
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                  01
                </div>
                <h3 className="text-sm font-bold text-white">Possession of Tax Invoice [Sec 16(2)(a)]</h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Taxpayer must be in physical or authenticated electronic possession of a valid tax invoice or debit note containing GSTIN, description of goods/services, tax amount, and HSN/SAC code.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                  02
                </div>
                <h3 className="text-sm font-bold text-white">Furnished in GSTR-2B [Sec 16(2)(aa)]</h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Inserted via Finance Act 2021, this condition requires that supplier must upload the invoice in GSTR-1 or IFF and the details must be communicated to the buyer in static <strong>Form GSTR-2B</strong>.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                  03
                </div>
                <h3 className="text-sm font-bold text-white">Actual Receipt of Goods/Services [Sec 16(2)(b)]</h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Taxpayer must have actually received the goods or services. For goods delivered in installments or lots, credit can only be availed upon receipt of the final installment.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                  04
                </div>
                <h3 className="text-sm font-bold text-white">Tax Paid &amp; Return Furnished [Sec 16(2)(c)&amp;(d)]</h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Tax charged must actually be paid to the government by supplier via cash or eligible ITC, and buyer must furnish their own monthly GSTR-3B return under Section 39.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="rule-37a-compliance" className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-amber-400 shrink-0" />
              4. Rule 37A: Supplier Non-Filing &amp; Mandatory ITC Reversal
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              What happens if a supplier entered your invoice into their GSTR-1 (so it appeared in your GSTR-2B), you availed the credit, but the vendor subsequently absconded or failed to file their GSTR-3B?
            </p>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              Under <strong>Rule 37A of the CGST Rules</strong>, the tax burden falls squarely on the buyer:
            </p>

            <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 font-bold text-xs">Step 1</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">30th September Verification Trigger</h3>
                  <p className="text-xs text-[#DDD0C5] mt-1">
                    Check if your suppliers who uploaded invoices during the previous financial year have filed Form GSTR-3B for all relevant tax periods up to 30th September.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 font-bold text-xs">Step 2</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">30th November Mandatory Reversal</h3>
                  <p className="text-xs text-[#DDD0C5] mt-1">
                    If supplier has not filed GSTR-3B by 30th Sept, recipient must reverse the proportionate ITC in Form GSTR-3B on or before <strong>30th November</strong> following the end of financial year.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 font-bold text-xs">Step 3</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">Interest Exemption Window</h3>
                  <p className="text-xs text-[#DDD0C5] mt-1">
                    If reversed on or before 30th November, <strong>no interest under Section 50</strong> is payable. If delayed past 30th November, mandatory 18% annual interest is calculated from 1st December until the date of actual reversal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold text-xs">Step 4</div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">Statutory Right of Reclaim</h3>
                  <p className="text-xs text-[#DDD0C5] mt-1">
                    When the defaulting supplier eventually files their delinquent GSTR-3B return, the recipient is legally entitled to re-avail the reversed ITC in Table 4(A)(5) without any time limit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="reconciliation-framework" className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <FileSpreadsheet className="w-6 h-6 text-amber-400 shrink-0" />
              5. 2B vs Purchase Register: Error-Proof Reconciliation Protocol
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              To ensure 100% ITC capture without exceeding statutory limits, every business must implement a systematic monthly matching protocol before filing GSTR-3B:
            </p>

            <div className="space-y-3">
              <div className="bg-[#1B1410] p-4 rounded-xl border border-surface-border">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Match by Normalized Invoice Number &amp; Supplier GSTIN
                </div>
                <p className="text-xs text-[#DDD0C5] leading-relaxed pl-6">
                  Strip leading zeroes, slashes (&quot;/&quot;), and hyphens (&quot;-&quot;) during matching. Often an invoice entered in ERP as &quot;INV-0042&quot; is uploaded by vendor as &quot;42&quot;, leading to false missing alerts.
                </p>
              </div>

              <div className="bg-[#1B1410] p-4 rounded-xl border border-surface-border">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Tolerance Check for Rounding Off Differences
                </div>
                <p className="text-xs text-[#DDD0C5] leading-relaxed pl-6">
                  Allow up to ± ₹10 tolerance on tax values to account for line-item decimal rounding differences between your accounting software (Tally, Zoho, SAP) and the supplier&apos;s billing portal.
                </p>
              </div>

              <div className="bg-[#1B1410] p-4 rounded-xl border border-surface-border">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Flag Ineligible ITC under Section 17(5)
                </div>
                <p className="text-xs text-[#DDD0C5] leading-relaxed pl-6">
                  Ensure blocked credits (motor vehicles, food and beverages, club memberships, goods lost/stolen/written off) are properly isolated and disclosed in Table 4(B) instead of being inadvertently availed in Table 4(A).
                </p>
              </div>

              <div className="bg-[#1B1410] p-4 rounded-xl border border-surface-border">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Automate Pre-30th November Vendor Follow-up Letters
                </div>
                <p className="text-xs text-[#DDD0C5] leading-relaxed pl-6">
                  Generate formal discrepancy notices to missing suppliers by 15th October with invoice copies, stating that unpaid GST amounts will be debited from their pending vendor payables if not reflected in GSTR-2B before 30th November.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: FAQ */}
          <section id="faqs" className="space-y-6 pt-4 border-t border-surface-border">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-400 shrink-0" />
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-4">
              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  What is the final deadline to claim missed Input Tax Credit (ITC) for a financial year?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Under Section 16(4) of the CGST Act (amended via Finance Act 2022), the deadline to claim missed ITC for an invoice or debit note pertaining to a financial year is 30th November following the end of that financial year, or the date of furnishing the annual return (GSTR-9), whichever is earlier.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  What is the retrospective relief provided under Section 16(5) &amp; 16(6)?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Inserted via Finance (No. 2) Act 2024, Section 16(5) provides that for invoices or debit notes pertaining to FY 2017-18, 2018-19, 2019-20, and 2020-21, ITC filed in any GSTR-3B return up to 30th November 2021 is deemed to be validly claimed within time. Section 16(6) extends similar relief for taxpayers whose registrations were cancelled and later restored.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  What happens if a supplier fails to pay tax or file GSTR-3B under Rule 37A?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Under Rule 37A of the CGST Rules, if your supplier furnished an invoice in GSTR-1 / IFF but failed to file their GSTR-3B by the 30th of September following the financial year, the recipient must reverse the availed ITC on or before 30th November. If the supplier subsequently files GSTR-3B, the recipient can legally re-avail the reversed ITC.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  Can ITC be claimed if an invoice appears in GSTR-2A but not in GSTR-2B?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  No. Statutory ITC entitlement in GSTR-3B is strictly determined by GSTR-2B, which is a static monthly statement generated on the 14th of each month under Section 16(2)(aa). GSTR-2A is dynamic and cannot serve as legal basis for claiming credit in GSTR-3B.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-amber-500/30 shadow-xs space-y-2.5">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  How can I quickly get Taxoras to audit my GSTR-2B and claim missing Input Tax Credit before the deadline?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Send an enquiry on WhatsApp at +91 88103 81949. Our reconciliation specialists run automated purchase-to-2B invoice matching across your entire financial year, identify uncredited vendor bills, and file your GSTR-3B before the statutory 30th November cutoff.
                </p>
                <div className="pt-1">
                  <a
                    href={siteConfig.links.whatsappUrl("GSTR-2B Audit & Missing ITC Reconciliation")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all"
                  >
                    <span>Instant WhatsApp Consultation (+91 88103 81949)</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom CTA Banner */}
          <section className="bg-gradient-to-br from-[#251A13] to-[#16100C] border border-amber-600/40 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6 text-center sm:text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                Worried About Ineligible ITC or Section 73 Notices?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                Protect Your Cash Flow with Automated 2B vs Purchase Reconciliation
              </h2>
              <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
                Taxoras conducts 100% line-item audits across all your vendor purchase invoices, detects unmatched input credits before the 30th November cutoff, and prepares legally bulletproof reply drafts for Section 16(4) demand notices.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <a
                href={siteConfig.links.whatsappUrl("Section 16(4) ITC Reconciliation & Audit Support")}
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
                <span>Explore GST Filing Plans</span>
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
