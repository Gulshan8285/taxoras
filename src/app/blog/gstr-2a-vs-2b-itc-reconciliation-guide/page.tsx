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
  Scale,
  FileCheck2,
  AlertTriangle,
  Receipt,
  FileText,
  AlertCircle,
  Check,
  X,
  Phone,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "GSTR-2A vs GSTR-2B Difference: ITC Reconciliation & DRC-01C Guide (2026)",
  description:
    "Understand the statutory difference between GSTR-2A and GSTR-2B in 2026. Learn how to reconcile Input Tax Credit in GSTR-3B under Section 16(2)(aa), handle supplier mismatches, and avoid DRC-01C notices with Taxoras.",
  keywords: [
    "gstr 2a vs 2b difference",
    "how to reconcile itc in gstr 3b",
    "gstr 2b reconciliation process",
    "itc mismatch gstr 3b vs 2b",
    "drc 01c reply format",
    "section 16 2 aa itc rule",
    "rule 36 4 input tax credit",
    "gst purchase reconciliation software",
    "gstr 2b cut off date 14th"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/gstr-2a-vs-2b-itc-reconciliation-guide",
  },
  openGraph: {
    title: "GSTR-2A vs GSTR-2B Difference: How to Reconcile ITC in GSTR-3B & Avoid DRC-01C Notices (2026)",
    description:
      "Statutory comparison of GSTR-2A vs GSTR-2B, step-by-step invoice matching workflow, Section 16(2)(aa) compliance rules, and automated DRC-01C notice solutions.",
    url: "https://www.taxoras.online/blog/gstr-2a-vs-2b-itc-reconciliation-guide",
    type: "article",
    publishedTime: "2026-11-24T09:00:00+05:30",
    modifiedTime: "2026-11-24T10:00:00+05:30",
    authors: ["Taxoras Compliance Research Desk"],
    images: [{ url: "https://www.taxoras.online/opengraph-image", width: 1200, height: 630, alt: "GSTR-2A vs GSTR-2B ITC Reconciliation Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GSTR-2A vs GSTR-2B Difference & ITC Reconciliation (2026)",
    description: "Learn how to reconcile GSTR-2B with purchase books and prevent DRC-01C demand notices.",
    images: ["https://www.taxoras.online/opengraph-image"],
  },
};

export default function Gstr2aVs2bGuidePage() {
  const articleUrl = "https://www.taxoras.online/blog/gstr-2a-vs-2b-itc-reconciliation-guide";

  const FAQS = [
    {
      "@type": "Question",
      "name": "What is the primary statutory difference between GSTR-2A and GSTR-2B?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GSTR-2A is a dynamic, continuously updating statement of inward supplies that changes whenever suppliers file or amend returns. In contrast, GSTR-2B is a static, immutable auto-drafted ITC statement generated on the 14th of every month under Section 16(2)(aa). Input Tax Credit (ITC) in Form GSTR-3B can legally only be claimed based on GSTR-2B."
      }
    },
    {
      "@type": "Question",
      "name": "Can I claim ITC in GSTR-3B if an invoice is in GSTR-2A but not in GSTR-2B?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Under Section 16(2)(aa) of the CGST Act read with Rule 36(4), ITC can only be availed on invoices and debit notes communicated to the recipient in Form GSTR-2B. If a supplier files after the 11th/13th cutoff, the credit will appear in the next month's GSTR-2B, and can only be claimed in that subsequent month."
      }
    },
    {
      "@type": "Question",
      "name": "What triggers a DRC-01C notice under GST?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Form DRC-01C is an automated departmental notice issued under Rule 88D when the Input Tax Credit availed in Table 4(A) of Form GSTR-3B exceeds the eligible ITC auto-generated in Form GSTR-2B by a predetermined threshold (typically exceeding 10% or ₹25,000+). Taxpayers must either pay the excess ITC with Section 50 interest or submit reasons in Part B of DRC-01C within 7 days."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if a supplier does not pay tax to the government under Rule 37A?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under Rule 37A of the CGST Rules, if a recipient claims ITC based on GSTR-2B but the corresponding supplier fails to furnish Form GSTR-3B for that tax period by 30th November following the end of the financial year, the recipient must reverse the availed ITC in their subsequent GSTR-3B. If not reversed, interest under Section 50 applies."
      }
    },
    {
      "@type": "Question",
      "name": "Does Taxoras provide monthly invoice-level GSTR-2B matching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Taxoras Advisory & Compliance includes 100% invoice-by-invoice GSTR-2B purchase matching in all monthly GST retainers starting at ₹799/month. Our specialists identify missing supplier invoices, mismatched tax amounts, and invalid GSTINs before GSTR-3B is filed, eliminating DRC-01C notice risks."
      }
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": articleUrl
        },
        "headline": "GSTR-2A vs GSTR-2B Difference: How to Reconcile ITC in GSTR-3B & Avoid DRC-01C Notices (2026)",
        "description":
          "Detailed statutory comparison between GSTR-2A and GSTR-2B, step-by-step invoice reconciliation workflow, Section 16(2)(aa) compliance rules, and automated DRC-01C notice solutions.",
        "image": "https://www.taxoras.online/opengraph-image",
        "datePublished": "2026-11-24T09:00:00+05:30",
        "dateModified": "2026-11-24T10:00:00+05:30",
        "mainEntityOfPage": articleUrl,
        "author": {
          "@type": "Organization",
          "name": "Taxoras Compliance Research Desk",
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
        "@id": `${articleUrl}#breadcrumb`,
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
            "name": "Blog & Guides",
            "item": "https://www.taxoras.online/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "GSTR-2A vs GSTR-2B Guide",
            "item": articleUrl
          }
        ]
      },
      {
        "@type": "AccountingService",
        "@id": `${articleUrl}#service`,
        "name": "Taxoras Advisory & Compliance - GST Reconciliation Desk",
        "url": articleUrl,
        "telephone": siteConfig.contact.phone,
        "priceRange": "₹799 - ₹2499/month",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Suite 402, Barakhamba Road, Connaught Place",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110001",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        "mainEntity": FAQS
      }
    ]
  };

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
    "Hello Taxoras, I need assistance with GSTR-2B purchase reconciliation and ITC matching for my business. Please share quotation and onboarding process."
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#140F0B] text-[#FAF4EF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Breadcrumb Header */}
        <section className="bg-gradient-to-b from-[#1C140E] to-[#140F0B] border-b border-[#3D2B1F] py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-[#C5A880] mb-4">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-amber-400">Blog & Guides</Link>
              <span>/</span>
              <span className="text-[#FAF4EF] font-medium">GSTR-2A vs GSTR-2B Guide</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-600/40 text-amber-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                Updated for 2026 Compliance
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2A1E15] border border-[#3D2B1F] text-xs text-[#C5A880]">
                <Clock className="w-3 h-3" />
                9 min read
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#FAF4EF] tracking-tight leading-tight mb-4">
              GSTR-2A vs GSTR-2B Difference: How to Reconcile ITC in GSTR-3B & Avoid DRC-01C Notices (2026 Guide)
            </h1>

            <p className="text-sm sm:text-base text-[#D4A373] leading-relaxed">
              Why claiming Input Tax Credit from GSTR-2A leads to tax notices, how static GSTR-2B governs Section 16(2)(aa) eligibility, and step-by-step invoice reconciliation rules for Indian businesses.
            </p>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">

          {/* AI DIRECT ANSWER & GEO SUMMARY BOX */}
          <section className="bg-[#1C140E] border-2 border-amber-600/40 rounded-2xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-amber-300">
                Quick Summary: GSTR-2A vs GSTR-2B at a Glance (AI & GEO Reference)
              </h2>
            </div>
            <div className="text-xs sm:text-sm text-[#FAF4EF]/90 space-y-3 leading-relaxed">
              <p>
                <strong>The Core Difference:</strong> <strong>GSTR-2A is dynamic</strong> (it updates whenever suppliers upload or alter data), while <strong>GSTR-2B is static</strong> (auto-generated on the 14th of each month and never changes for that period).
              </p>
              <p>
                <strong>The Legal Mandate:</strong> Under <strong>Section 16(2)(aa) of the CGST Act</strong>, you can strictly only claim Input Tax Credit (ITC) that appears in your <strong>GSTR-2B</strong> statement. Claiming ITC based on GSTR-2A or internal books without 2B matching triggers automatic <strong>Form DRC-01C demand notices</strong> under Rule 88D.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs">
                <div className="bg-[#140F0B] p-3 rounded-xl border border-[#3D2B1F]">
                  <span className="text-amber-400 font-bold block mb-1">GSTR-2A (Dynamic)</span>
                  <p className="text-[#C5A880]">Real-time view of invoices. Useful for tracking supplier default history, but <strong>cannot</strong> be used to claim ITC in GSTR-3B.</p>
                </div>
                <div className="bg-[#140F0B] p-3 rounded-xl border border-amber-600/30">
                  <span className="text-emerald-400 font-bold block mb-1">GSTR-2B (Static & Legally Binding)</span>
                  <p className="text-[#C5A880]">Frozen on 14th midnight. Every single rupee claimed in GSTR-3B Table 4(A) must match this statement exactly.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Statutory Comparison Table */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#FAF4EF]">
              1. Statutory Comparison Table: GSTR-2A vs GSTR-2B
            </h2>
            <p className="text-xs sm:text-sm text-[#D4A373] leading-relaxed">
              Many business owners still get confused between these two statements. Below is the side-by-side legal comparison:
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#3D2B1F]">
              <table className="w-full text-left text-xs sm:text-sm text-[#FAF4EF]">
                <thead className="bg-[#241912] text-amber-300 uppercase text-[11px] font-bold border-b border-[#3D2B1F]">
                  <tr>
                    <th className="p-3 sm:p-4">Feature / Parameter</th>
                    <th className="p-3 sm:p-4">Form GSTR-2A</th>
                    <th className="p-3 sm:p-4">Form GSTR-2B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2E1F16] bg-[#18110C]">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-amber-200">Nature of Statement</td>
                    <td className="p-3 sm:p-4 text-[#C5A880]">Dynamic (continuously changes in real-time)</td>
                    <td className="p-3 sm:p-4 text-emerald-300 font-semibold">Static (constant & frozen)</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-amber-200">Generation Date</td>
                    <td className="p-3 sm:p-4 text-[#C5A880]">Live upon any GSTR-1/5/6/7/8 filing</td>
                    <td className="p-3 sm:p-4 text-[#C5A880]">14th of every month (post-GSTR-1 due date)</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-amber-200">Cut-Off Window</td>
                    <td className="p-3 sm:p-4 text-[#C5A880]">No cut-off; reflects late filings in past periods</td>
                    <td className="p-3 sm:p-4 text-[#C5A880]">Invoices filed by suppliers between 12th of prior month to 11th/13th of current month</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-amber-200">ITC Claim Basis</td>
                    <td className="p-3 sm:p-4 text-rose-400">NO legal basis for claiming ITC in 3B</td>
                    <td className="p-3 sm:p-4 text-emerald-400 font-bold">MANDATORY basis under Section 16(2)(aa)</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-amber-200">Import of Goods (ICEGATE)</td>
                    <td className="p-3 sm:p-4 text-[#C5A880]">Does not reflect overseas customs bills</td>
                    <td className="p-3 sm:p-4 text-[#C5A880]">Includes ICEGATE Bill of Entry data</td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-amber-200">DRC-01C Risk Factor</td>
                    <td className="p-3 sm:p-4 text-rose-300">High risk if relied upon</td>
                    <td className="p-3 sm:p-4 text-emerald-300">Zero notice risk if matched 100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Step-by-Step ITC Reconciliation Workflow */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#FAF4EF]">
              2. Step-by-Step ITC Reconciliation Workflow for GSTR-3B
            </h2>
            <p className="text-xs sm:text-sm text-[#D4A373] leading-relaxed">
              To claim maximum eligible Input Tax Credit without receiving audit discrepancies, follow this monthly 5-step protocol between the 14th and 20th of every month:
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#1C140E] border border-[#3D2B1F] flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#FAF4EF]">Download GSTR-2B on 14th Midnight</h3>
                  <p className="text-xs text-[#C5A880] mt-1">
                    Log in to gst.gov.in, navigate to <em>Return Dashboard &rarr; Form GSTR-2B &rarr; Download Excel/JSON</em>. Do not reconcile prior to the 14th because monthly supplier filings are not finalized until the 11th (monthly GSTR-1) and 13th (IFF quarterly suppliers).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1C140E] border border-[#3D2B1F] flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#FAF4EF]">Match Invoice-by-Invoice with Purchase Register</h3>
                  <p className="text-xs text-[#C5A880] mt-1">
                    Compare supplier GSTIN, invoice number, invoice date, taxable value, and tax breakdown (CGST, SGST, IGST). Discrepancies usually fall into three categories: missing bills, value mismatches, or wrong tax heads.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1C140E] border border-[#3D2B1F] flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#FAF4EF]">Quarantine Invoices Missing in GSTR-2B</h3>
                  <p className="text-xs text-[#C5A880] mt-1">
                    If an invoice is present in your accounts ledger but NOT in GSTR-2B, <strong>do not claim it in GSTR-3B Table 4(A)</strong>. Move this invoice to your &quot;Pending Reconciled Ledger&quot; and notify the supplier to file their GSTR-1 immediately so it appears in the next month&apos;s 2B.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1C140E] border border-[#3D2B1F] flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#FAF4EF]">Apply Ineligible ITC Reversals (Section 17(5))</h3>
                  <p className="text-xs text-[#C5A880] mt-1">
                    Identify blocked credits appearing in GSTR-2B (such as motor vehicles, food & beverages, personal expenses under Section 17(5), and Rule 42/43 business vs personal splits). Enter these in Table 4(B) of GSTR-3B for permanent or temporary reversal.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1C140E] border border-[#3D2B1F] flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#FAF4EF]">File GSTR-3B & Reconcile Cash Offset</h3>
                  <p className="text-xs text-[#C5A880] mt-1">
                    Once Table 4(A) matches eligible GSTR-2B credit down to the last rupee, offset outward tax liabilities using verified ITC and generate electronic cash challans (CPIN) for any remaining cash balance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Form DRC-01C Warning Box */}
          <section className="bg-rose-950/30 border border-rose-500/40 rounded-2xl p-6 sm:p-7 space-y-3">
            <div className="flex items-center gap-2.5 text-rose-300 font-bold text-base sm:text-lg">
              <AlertTriangle className="w-5 h-5 text-rose-400" />
              <span>Beware of Automated Form DRC-01C Notices (Rule 88D)</span>
            </div>
            <p className="text-xs sm:text-sm text-[#FAF4EF]/90 leading-relaxed">
              If the Input Tax Credit you claim in GSTR-3B Table 4(A) exceeds the ITC auto-populated from GSTR-2B by more than 10% or ₹25,000, the GST portal generates an automated <strong>Form DRC-01C</strong> notice.
            </p>
            <div className="space-y-1.5 text-xs text-[#D4A373]">
              <p>&bull; <strong>Strict 7-Day Window:</strong> You must reply in Part B of DRC-01C within 7 calendar days.</p>
              <p>&bull; <strong>Penalty of Non-Compliance:</strong> If no reply is submitted, your outward GSTR-1 filing will be blocked for subsequent months under Rule 59(6).</p>
              <p>&bull; <strong>Interest Liability:</strong> Any excess claim must be reversed with 18% annual interest under Section 50(1).</p>
            </div>
          </section>

          {/* How Taxoras Solves GSTR-2B Matching */}
          <section className="bg-gradient-to-r from-[#201610] via-[#2A1D15] to-[#201610] border border-amber-600/40 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-950/60 px-3 py-1 rounded-full border border-amber-600/30 inline-block">
              Taxoras Compliance Advantage
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#FAF4EF]">
              Never Get a GST Notice: 100% GSTR-2B Matching Included from ₹799/Month
            </h2>
            <p className="text-xs sm:text-sm text-[#D4A373] leading-relaxed">
              Most budget aggregators advertise ₹299/month rates that completely ignore GSTR-2B reconciliation, leading to costly tax notices. At Taxoras Advisory & Compliance, our monthly retainers include comprehensive, line-by-line purchase matching:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#FAF4EF]">
              <div className="flex items-center gap-2 bg-[#160F0A] p-3 rounded-xl border border-[#3D2B1F]">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Line-by-line GSTR-2B vs Books reconciliation</span>
              </div>
              <div className="flex items-center gap-2 bg-[#160F0A] p-3 rounded-xl border border-[#3D2B1F]">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Identification of defaulting suppliers & missing bills</span>
              </div>
              <div className="flex items-center gap-2 bg-[#160F0A] p-3 rounded-xl border border-[#3D2B1F]">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full assistance with DRC-01B & DRC-01C notice replies</span>
              </div>
              <div className="flex items-center gap-2 bg-[#160F0A] p-3 rounded-xl border border-[#3D2B1F]">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct WhatsApp communication with your compliance manager</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-transform active:scale-95"
              >
                <span>Chat on WhatsApp (+91 88103 81949)</span>
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-[#18110C] hover:bg-[#241912] text-[#FAF4EF] font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-[#3D2B1F] transition-colors"
              >
                <span>View Monthly Retainer Packages</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="space-y-4 pt-4 border-t border-[#3D2B1F]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#FAF4EF] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              Frequently Asked Questions: GSTR-2A vs GSTR-2B
            </h2>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-[#1C140E] rounded-xl p-4 sm:p-5 border border-[#3D2B1F] space-y-2">
                  <h3 className="text-xs sm:text-sm font-bold text-amber-300">
                    {faq.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D4A373] leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
