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
  Coins,
  Receipt,
  Sparkles,
  MapPin,
  FileText,
  AlertCircle,
  Check,
  X
} from "lucide-react";

export const metadata: Metadata = {
  title: "GST Return Filing Charges Per Month in India (2026 Cost Guide)",
  description:
    "Discover GST return filing charges per month in India for 2026. Understand filing costs, GST compliance fees, return types, step-by-step online filing, and affordable filing services with Taxoras.",
  keywords: [
    "gst return filing charges per month",
    "cheap gst return filing service",
    "gst return kaise file kare",
    "gst filing charges per month india",
    "gst compliance fees small business",
    "gstr 1 gstr 3b monthly filing charges",
    "gst return filing cost 2026"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/gst-return-filing-charges-per-month-india",
  },
  openGraph: {
    title: "GST Return Filing Charges Per Month in India: Complete Cost Guide 2026",
    description:
      "Comprehensive breakdown of monthly GST return filing charges in India, market rates vs Taxoras flat retainers, return types, due dates, and step-by-step filing guide.",
    url: "https://www.taxoras.online/blog/gst-return-filing-charges-per-month-india",
    type: "article",
    publishedTime: "2026-11-04T09:00:00+05:30",
    modifiedTime: "2026-11-04T10:00:00+05:30",
    authors: ["Taxoras Research Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Return Filing Charges Per Month in India (2026 Guide)",
    description: "Compare monthly GST filing charges, cheap GST filing options, and step-by-step return filing instructions.",
    images: ["https://www.taxoras.online/opengraph-image"],
  },
};

export default function GstReturnFilingChargesIndiaPage() {
  const articleUrl = "https://www.taxoras.online/blog/gst-return-filing-charges-per-month-india";

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
        "headline": "GST Return Filing Charges Per Month in India: Complete Cost Guide 2026",
        "description":
          "Discover GST return filing charges per month in India for 2026. Understand filing costs, GST compliance fees, return types and affordable filing services with Taxoras.",
        "image": "https://www.taxoras.online/opengraph-image",
        "datePublished": "2026-11-04T09:00:00+05:30",
        "dateModified": "2026-11-04T10:00:00+05:30",
        "mainEntityOfPage": articleUrl,
        "author": {
          "@type": "Organization",
          "name": "Taxoras Research Desk",
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
            "name": "GST Return Filing Charges India",
            "item": articleUrl
          }
        ]
      },
      {
        "@type": "AccountingService",
        "@id": `${articleUrl}#localbusiness`,
        "name": "Taxoras Advisory & Compliance - All India Hub",
        "url": articleUrl,
        "telephone": siteConfig.contact.phone,
        "priceRange": "₹499 - ₹2799/month",
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
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are GST return filing charges per month in India in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Professional GST return filing charges in India typically range from ₹499/mo to ₹5,000/mo depending on invoice volume, business complexity, and services included. At Taxoras, nil filers pay ₹499/mo, micro businesses pay ₹799/mo (up to 50 invoices with full GSTR-2B matching included), and growing businesses pay ₹1,499/mo (up to 200 invoices)."
            }
          },
          {
            "@type": "Question",
            "name": "Is GST return filing free in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, taxpayers can submit applicable GST returns directly through the government GST portal (gst.gov.in) without paying a separate standard government filing fee. However, professional assistance, accounting software, and applicable late fees for delayed filings involve expenses."
            }
          },
          {
            "@type": "Question",
            "name": "What is the GST return filing charge for a small business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A small business with approximately 1–30 invoices per month generally pays between ₹500 and ₹1,000 per month for basic professional filing assistance. Taxoras provides complete GSTR-1, GSTR-3B, and GSTR-2B purchase reconciliation for ₹799/month flat."
            }
          },
          {
            "@type": "Question",
            "name": "Can I file GST returns without hiring a CA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You can file GST returns yourself through the official GST portal if you understand the applicable forms and compliance requirements. However, professional assistance helps prevent lost Input Tax Credit (ITC) and notice risks when dealing with supplier mismatches."
            }
          },
          {
            "@type": "Question",
            "name": "What is the cheapest GST return filing service in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While some aggregators advertise ₹299/mo headline rates that exclude GSTR-2B matching and notice support, Taxoras Advisory & Compliance offers the lowest true all-inclusive monthly retainer starting at ₹799/mo with zero hidden surcharges."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I do not file my GST return on time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Late filing triggers a statutory daily late fee under Section 47 (₹50/day for regular, ₹20/day for nil returns), mandatory 18% per annum interest on net cash tax dues under Section 50(1), and blocking of outbound E-way bill generation after 2 consecutive defaulted periods."
            }
          },
          {
            "@type": "Question",
            "name": "Is GST return filing mandatory if there are no sales?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Registered taxpayers must submit applicable returns even when there are no business transactions during a tax period. Skipping a nil return still accumulates statutory daily late fees."
            }
          },
          {
            "@type": "Question",
            "name": "What documents are required for monthly GST return filing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Commonly required documents include sales invoices, purchase bills, credit/debit notes, expense receipts, bank statements, GSTIN details, and login access to the GST portal."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between GSTR-1 and GSTR-3B?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GSTR-1 reports outward supply (sales) details, whereas GSTR-3B provides a summary of monthly tax liabilities, eligible Input Tax Credit (ITC), and net cash tax settlement. Both returns must be reconciled under Rule 88C to prevent scrutiny notices."
            }
          },
          {
            "@type": "Question",
            "name": "How can I get affordable GST return filing assistance from Taxoras?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can connect directly with Taxoras via WhatsApp at +91 88103 81949 or visit https://www.taxoras.online/pricing to select your plan and onboard within 30 minutes."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#120D0A] text-[#FAF4EF] font-sans selection:bg-amber-500/20 selection:text-amber-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#16100C] border-b border-[#2C211A] py-3.5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-[#BCAE9F]">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#5A4335]">/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog &amp; Guides</Link>
              <span className="text-[#5A4335]">/</span>
              <span className="font-semibold text-amber-400">GST Return Filing Charges India</span>
            </nav>
          </div>
        </div>

        {/* Hero Article Header */}
        <header className="bg-gradient-to-b from-[#1F1611] to-[#120D0A] border-b border-[#2C211A] py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                All India GST Cost Guide (2026)
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" /> Updated November 2026
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> 10 min read
              </span>
              <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-600/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <UserCheck className="w-3 h-3 text-emerald-400" /> CA Reviewed
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              GST Return Filing Charges Per Month in India: Complete Cost Guide 2026
            </h1>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-md shrink-0">
                TX
              </div>
              <div>
                <p className="text-xs font-bold text-white">By the Taxoras Senior Research Desk</p>
                <p className="text-[11px] text-[#A6978A]">National Indirect Tax &amp; GST Compliance Advisory • Serving Pan-India MSMEs</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#DDD0C5] leading-relaxed max-w-4xl pt-2">
              Wondering <em className="text-white font-medium">&quot;GST return filing charges per month kitna hota hai?&quot;</em> Here is your complete 2026 pricing benchmark covering indicative market fees, return types (GSTR-1, 3B, CMP-08), step-by-step online filing instructions, and how Taxoras delivers guaranteed affordable, error-free compliance from ₹799/month.
            </p>
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">

          {/* AI Overview Callout Box */}
          <section className="bg-gradient-to-br from-[#231811] via-[#1B1410] to-[#16100C] rounded-2xl border-2 border-amber-500/40 p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                  Google AI Overview &amp; Quick Answer Summary
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  How Much Are GST Return Filing Charges Per Month in India?
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              In India for 2026, <strong className="text-white font-semibold">GST return filing charges per month</strong> average between <strong className="text-white">₹500 to ₹3,000 per month</strong> for small businesses and traders, while nil filers pay around <strong className="text-white">₹200 to ₹500</strong>. At <strong className="text-amber-300">Taxoras Advisory &amp; Compliance</strong>, monthly retainers are transparently fixed at <strong className="text-emerald-400 font-bold">₹799/month</strong> for up to 50 invoices and <strong className="text-white font-bold">₹1,499/month</strong> for up to 200 invoices, with <strong className="text-white">100% GSTR-2B Input Tax Credit (ITC) reconciliation and WhatsApp CA support included</strong> at no extra cost.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="bg-[#2C1D14] text-amber-300 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Nil Filers: ₹499/mo
              </span>
              <span className="bg-[#2C1D14] text-emerald-400 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Small Business (&lt;50 bills): ₹799/mo flat
              </span>
              <span className="bg-[#2C1D14] text-sky-400 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ WhatsApp Support: +91 88103 81949
              </span>
            </div>
          </section>

          {/* Section: What Are GST Return Filing Charges Per Month */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-4 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-400" />
              <span>What Are GST Return Filing Charges Per Month?</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              GST return filing charges per month refer to the professional fees charged by a tax consultant, accountant, or specialized GST service provider for preparing, reviewing, reconciling, and submitting applicable GST returns on behalf of a registered taxpayer. These charges are completely separate from the actual GST tax liability payable to the government.
            </p>
            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              For example, a small retailer may have only 15 sales invoices and 10 purchase bills each month, which takes modest time. Conversely, a manufacturer or e-commerce distributor handling 500 invoices with reverse charge (RCM), interstate supplies, and multi-state GSTINs demands substantial technical hours and automated ledger matching. Consequently, market fees vary considerably.
            </p>
          </section>

          {/* Market Comparison Table vs Taxoras Table */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2C211A] pb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Scale className="w-5 h-5 text-amber-400" />
                  <span>Monthly GST Return Filing Charges in India (2026 Market Ranges)</span>
                </h2>
                <p className="text-xs text-[#BCAE9F] mt-1">
                  Indicative market benchmarks across business tiers vs Taxoras all-inclusive retainers.
                </p>
              </div>
              <span className="self-start sm:self-auto text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-600/40">
                2026 Price Index
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#2C211A] bg-[#17100B] shadow-md">
              <table className="w-full text-xs text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#241A14] border-b border-[#2C211A] text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4">Business Category</th>
                    <th className="py-3.5 px-4">Monthly Invoices</th>
                    <th className="py-3.5 px-4">Market Estimated Range</th>
                    <th className="py-3.5 px-4">Taxoras Guaranteed Retainer</th>
                    <th className="py-3.5 px-4">ITC (GSTR-2B) Reconciliation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#241A14] text-[#DDD0C5]">
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3.5 px-4 font-bold text-white">Nil Return Business</td>
                    <td className="py-3.5 px-4 text-[#A6978A]">Zero Transactions</td>
                    <td className="py-3.5 px-4 text-[#BCAE9F]">₹200 – ₹500</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-400 text-sm">₹499 / mo</td>
                    <td className="py-3.5 px-4 text-[#A6978A]">Verified Nil Activity</td>
                  </tr>
                  <tr className="bg-amber-950/30 hover:bg-amber-950/50 border-l-4 border-amber-500">
                    <td className="py-3.5 px-4 font-bold text-white">
                      Small Shop / Retailer
                      <span className="inline-block ml-2 text-[10px] bg-amber-500 text-slate-950 font-extrabold px-2 py-0.5 rounded-full uppercase">Most Popular</span>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-white">1 – 50 invoices</td>
                    <td className="py-3.5 px-4 text-[#BCAE9F]">₹500 – ₹1,500</td>
                    <td className="py-3.5 px-4 font-extrabold text-amber-300 text-sm">₹799 / mo flat</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> 100% Included
                    </td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3.5 px-4 font-bold text-white">Growing Business</td>
                    <td className="py-3.5 px-4 font-semibold text-white">51 – 200 invoices</td>
                    <td className="py-3.5 px-4 text-[#BCAE9F]">₹2,000 – ₹4,000</td>
                    <td className="py-3.5 px-4 font-bold text-white text-sm">₹1,499 / mo</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Automated 2B Audit
                    </td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3.5 px-4 font-bold text-white">Medium-Sized Entity</td>
                    <td className="py-3.5 px-4 font-semibold text-white">201 – 500 invoices</td>
                    <td className="py-3.5 px-4 text-[#BCAE9F]">₹4,000 – ₹6,000</td>
                    <td className="py-3.5 px-4 font-bold text-white text-sm">₹2,799 / mo</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Advanced Vendor Reconciliation
                    </td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3.5 px-4 font-bold text-white">High-Volume / E-Commerce</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">500+ invoices</td>
                    <td className="py-3.5 px-4 text-[#BCAE9F]">₹6,000 – ₹10,000+</td>
                    <td className="py-3.5 px-4 font-bold text-white">Custom / Volume Tier</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> E-Way Bill &amp; E-Invoicing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Different GST Returns & Filing Schedules */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              <span>Understanding Different GST Returns and Their Scope</span>
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-[#2C211A] bg-[#17100B] shadow-md">
              <table className="w-full text-xs text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#241A14] border-b border-[#2C211A] text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">GST Return Form</th>
                    <th className="py-3 px-4">Statutory Purpose</th>
                    <th className="py-3 px-4">Filing Frequency</th>
                    <th className="py-3 px-4">Key Inclusions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#241A14] text-[#DDD0C5]">
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">GSTR-1</td>
                    <td className="py-3 px-4">Outward supplies &amp; sales</td>
                    <td className="py-3 px-4 text-amber-300 font-semibold">Monthly (11th) / Quarterly QRMP (13th)</td>
                    <td className="py-3 px-4 text-[#A6978A]">B2B invoices, B2C sales, exports, HSN summary</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">GSTR-3B</td>
                    <td className="py-3 px-4">Summary tax liability &amp; ITC claim</td>
                    <td className="py-3 px-4 text-amber-300 font-semibold">Monthly (20th) / Quarterly (22nd/24th)</td>
                    <td className="py-3 px-4 text-[#A6978A]">Output tax payment, eligible ITC, challan PMT-06</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">GSTR-2B</td>
                    <td className="py-3 px-4">Auto-drafted static ITC statement</td>
                    <td className="py-3 px-4">Generated on 14th monthly</td>
                    <td className="py-3 px-4 text-[#A6978A]">Purchase invoices filed by registered suppliers</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">CMP-08</td>
                    <td className="py-3 px-4">Statement for composition dealers</td>
                    <td className="py-3 px-4 text-amber-300 font-semibold">Quarterly (18th of next month)</td>
                    <td className="py-3 px-4 text-[#A6978A]">Self-assessed turnover tax (1% / 5% / 6%)</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">GSTR-4</td>
                    <td className="py-3 px-4">Annual return for composition dealers</td>
                    <td className="py-3 px-4">Annually (30th April)</td>
                    <td className="py-3 px-4 text-[#A6978A]">Consolidated annual turnover and tax paid</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">GSTR-9 / 9C</td>
                    <td className="py-3 px-4">Annual return &amp; reconciliation</td>
                    <td className="py-3 px-4">Annually (31st December)</td>
                    <td className="py-3 px-4 text-[#A6978A]">Full FY audit reconciliation statement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Factors Affecting GST Return Filing Charges */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-amber-400" />
              <span>What Factors Affect Monthly GST Return Filing Charges?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold flex items-center justify-center text-xs">1</span>
                  Transaction &amp; Invoice Volume
                </span>
                <p className="text-[#DDD0C5] leading-relaxed">
                  More sales and purchase bills demand higher manual verification, HSN verification, and line-item tax rate auditing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold flex items-center justify-center text-xs">2</span>
                  Transaction Complexity &amp; Special Schemes
                </span>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Interstate transactions, exports under LUT (RFD-11), reverse charge (RCM), and e-commerce marketplace TCS reconciliation require extra compliance checks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold flex items-center justify-center text-xs">3</span>
                  Input Tax Credit (ITC) Matching Quality
                </span>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Reconciling purchases against GSTR-2B avoids lost tax credit and protects businesses from Section 16(4) cutoff reversals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold flex items-center justify-center text-xs">4</span>
                  Multiple State GSTINs
                </span>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Businesses with branches across multiple states (e.g., Delhi, UP, Karnataka) require separate return submissions per state code.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Step-by-Step "GST Return Kaise File Kare" */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400" />
              <span>GST Return Kaise File Kare? Complete Step-by-Step Process</span>
            </h2>

            <div className="space-y-4 text-xs text-[#DDD0C5]">
              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Step 1: Portal Login &amp; Period Selection</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">
                    Log in to the official GST Portal (<strong>gst.gov.in</strong>) using your 15-digit GSTIN username and password. Navigate to <em>Services → Returns → Returns Dashboard</em> and select the applicable Financial Year and Return Filing Period.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Step 2: Prepare &amp; Upload GSTR-1 (Outward Supplies)</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">
                    Enter B2B taxable sales with customer GSTIN, invoice date, value, and tax breakdown. Add B2C sales, credit/debit notes, and HSN summary. Generate summary, review data, and file using EVC (Aadhaar OTP) or DSC by the 11th of the month.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Step 3: Reconcile Purchase Register with GSTR-2B</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">
                    Download auto-drafted GSTR-2B generated on the 14th. Cross-verify every supplier invoice against your purchase register to claim exact eligible ITC and follow up on missing vendor filings.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">4</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Step 4: File GSTR-3B &amp; Settle Tax Dues</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">
                    Auto-populate outward tax from GSTR-1 and eligible ITC from GSTR-2B into Form GSTR-3B. If output tax exceeds available ITC, generate Challan PMT-06, pay via NetBanking/UPI/NEFT, offset liability, and submit with Aadhaar OTP by the 20th.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">5</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Step 5: Download &amp; Archive ARN Acknowledgement</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">
                    Save the system-generated Acknowledgement Reference Number (ARN) receipt and filed PDF copies for banking, audit, and input tax verification purposes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: How to Reduce Monthly GST Costs */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-4 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>How to Reduce Monthly GST Return Filing Costs</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#DDD0C5]">
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">1. Maintain Digital Invoices:</strong>
                Recording sales &amp; purchase bills in structured Excel or accounting software prevents manual data entry overhead.
              </div>
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">2. Bundle GSTR-1 + 3B + 2B:</strong>
                Never pay separate fees for GSTR-1 and GSTR-3B. Choose Taxoras all-inclusive retainers starting from ₹799/mo.
              </div>
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">3. File Ahead of Due Dates:</strong>
                Submitting invoices by the 5th of each month prevents emergency rush surcharges and daily late fees.
              </div>
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">4. Opt for QRMP Scheme If Eligible:</strong>
                Businesses with turnover up to ₹5 Cr can opt for quarterly returns with monthly tax payment, reducing filing frequency.
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-[#2C211A] pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <span>Frequently Asked Questions About GST Return Filing Charges</span>
              </h2>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">What are GST return filing charges per month in India in 2026?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Professional GST return filing charges in India typically range from ₹499/mo to ₹5,000/mo depending on invoice volume, business complexity, and services included. At Taxoras, nil filers pay ₹499/mo, micro businesses pay ₹799/mo (up to 50 invoices with full GSTR-2B matching included), and growing businesses pay ₹1,499/mo (up to 200 invoices).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Is GST return filing free in India?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Yes, taxpayers can submit applicable GST returns directly through the government GST portal (gst.gov.in) without paying a separate standard government filing fee. However, professional assistance, accounting software, and applicable late fees for delayed filings involve expenses.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">What is the GST return filing charge for a small business?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  A small business with approximately 1–30 invoices per month generally pays between ₹500 and ₹1,000 per month for basic professional filing assistance. Taxoras provides complete GSTR-1, GSTR-3B, and GSTR-2B purchase reconciliation for ₹799/month flat.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Can I file GST returns without hiring a CA?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Yes. You can file GST returns yourself through the official GST portal if you understand the applicable forms and compliance requirements. However, professional assistance helps prevent lost Input Tax Credit (ITC) and notice risks when dealing with supplier mismatches.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">What happens if I do not file my GST return on time?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Late filing triggers a statutory daily late fee under Section 47 (₹50/day for regular, ₹20/day for nil returns), mandatory 18% per annum interest on net cash tax dues under Section 50(1), and blocking of outbound E-way bill generation after 2 consecutive defaulted periods.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">How can I get affordable GST return filing assistance from Taxoras?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  You can connect directly with Taxoras via WhatsApp at +91 88103 81949 or visit our pricing page to select your plan and onboard within 30 minutes.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <section className="bg-gradient-to-br from-[#251A13] via-[#1B1410] to-[#16100C] text-white rounded-3xl p-8 sm:p-10 border border-amber-600/30 shadow-xl space-y-6 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/70 border border-amber-600/40 px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Start Smooth GST Compliance Today
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
              Ready for Transparent, On-Time GST Return Filing Across India?
            </h2>

            <p className="text-xs sm:text-sm text-[#DDD0C5] max-w-2xl mx-auto leading-relaxed">
              Never worry about missing 11th and 20th filing deadlines or losing input tax credit. Get your monthly GST returns prepared and filed by dedicated compliance specialists starting at ₹799/month.
            </p>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <a
                href={siteConfig.links.whatsappUrl("GST Return Filing Charges Enquiry", "All India")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Chat on WhatsApp (+91 88103 81949)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/pricing"
                className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors border border-white/20"
              >
                Explore Retainer Packages
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp location="India" />
    </div>
  );
}
