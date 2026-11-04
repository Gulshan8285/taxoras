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
  Coins,
  Receipt,
  Sparkles,
  Check,
  TrendingDown
} from "lucide-react";

export const metadata: Metadata = {
  title: "GST Return Filing Cost Per Month in India: Complete Guide | Taxoras",
  description:
    "Discover GST return filing costs per month in India, pricing factors, filing requirements and how to choose a cheap GST return filing service with transparent retainers.",
  keywords: [
    "gst return filing cost per month in india",
    "gst return filing cost per month",
    "cheap gst return filing service",
    "cheapest gst filing service in india",
    "best gst services in india",
    "gst return filing charges",
    "monthly gst filing fees"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/gst-return-filing-cost-per-month-in-india",
  },
  openGraph: {
    title: "How Much Does GST Return Filing Cost Per Month in India? (2026 Guide)",
    description:
      "A complete guide to monthly GST return filing costs, comparing DIY software vs managed CA retainers, hidden fee risks, and cost-reduction methods.",
    url: "https://www.taxoras.online/blog/gst-return-filing-cost-per-month-in-india",
    type: "article",
    publishedTime: "2026-11-04T09:00:00+05:30",
    modifiedTime: "2026-11-04T10:00:00+05:30",
    authors: ["Taxoras Pricing Research Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Return Filing Cost Per Month in India (2026 Guide)",
    description: "Compare monthly GST return filing fees in India, pricing factors, and cheap GST service options.",
    images: ["https://www.taxoras.online/opengraph-image"],
  },
};

export default function GstReturnFilingCostIndiaPage() {
  const articleUrl = "https://www.taxoras.online/blog/gst-return-filing-cost-per-month-in-india";

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
        "headline": "How Much Does GST Return Filing Cost Per Month in India? Complete 2026 Guide",
        "description":
          "Discover GST return filing costs per month in India, pricing factors, filing requirements and how to choose a cheap GST return filing service.",
        "image": "https://www.taxoras.online/opengraph-image",
        "datePublished": "2026-11-04T09:00:00+05:30",
        "dateModified": "2026-11-04T10:00:00+05:30",
        "mainEntityOfPage": articleUrl,
        "author": {
          "@type": "Organization",
          "name": "Taxoras Pricing Research Desk",
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
            "name": "GST Return Filing Cost Per Month",
            "item": articleUrl
          }
        ]
      },
      {
        "@type": "AccountingService",
        "@id": `${articleUrl}#localbusiness`,
        "name": "Taxoras Advisory & Compliance - Indirect Tax Hub",
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
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "210",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does GST return filing cost per month in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Professional GST return filing charges in India typically range from ₹500 to ₹5,000 or more per month, depending on invoice volume, business complexity, and services included. Taxoras offers flat retainers starting from ₹799/month for small businesses with up to 50 invoices."
            }
          },
          {
            "@type": "Question",
            "name": "Is GST return filing free in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Filing GST returns directly through the official GST portal (gst.gov.in) does not attract any government filing fee. However, businesses pay professional fees to tax consultants or accountants to verify purchase records, match GSTR-2B, and submit returns accurately."
            }
          },
          {
            "@type": "Question",
            "name": "Which is the cheapest GST filing service in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While some budget portals advertise ₹299/month headline rates that charge extra for GSTR-2B matching and notice replies, Taxoras Advisory & Compliance provides India's most affordable all-inclusive retainers starting from ₹799/mo with zero hidden surcharges."
            }
          },
          {
            "@type": "Question",
            "name": "Can small businesses file GST returns monthly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Small businesses can follow the regular monthly filing schedule (GSTR-1 by the 11th, GSTR-3B by the 20th) or opt for the quarterly QRMP scheme if turnover is up to ₹5 crore."
            }
          },
          {
            "@type": "Question",
            "name": "What documents are required for GST return filing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Key documents include sales invoices, purchase bills, debit/credit notes, expense vouchers, bank statements, and GSTIN login credentials."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I miss the GST return filing deadline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Missing deadlines triggers statutory late fees under Section 47 (₹50/day for regular filers, ₹20/day for nil returns) and 18% annual interest under Section 50 on net cash tax dues until cleared."
            }
          },
          {
            "@type": "Question",
            "name": "Does GST return filing include Input Tax Credit reconciliation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In many budget software services, GSTR-2B matching is billed as an extra add-on. At Taxoras, 100% GSTR-2B purchase reconciliation is included in every monthly retainer tier to safeguard your tax credits."
            }
          },
          {
            "@type": "Question",
            "name": "How can I find the best GST services in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Look for transparent pricing, human CA verification, monthly GSTR-2B reconciliation, timely filing reminders, and direct WhatsApp support rather than faceless ticket queues."
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
              <span className="font-semibold text-amber-400">GST Return Filing Cost Per Month</span>
            </nav>
          </div>
        </div>

        {/* Hero Article Header */}
        <header className="bg-gradient-to-b from-[#1F1611] to-[#120D0A] border-b border-[#2C211A] py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Coins className="w-3.5 h-3.5 text-amber-400" />
                Comprehensive 2026 Pricing Guide
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" /> Updated November 2026
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> 9 min read
              </span>
              <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-600/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <UserCheck className="w-3 h-3 text-emerald-400" /> CA Verified
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              How Much Does GST Return Filing Cost Per Month in India?
            </h1>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-md shrink-0">
                TX
              </div>
              <div>
                <p className="text-xs font-bold text-white">By the Taxoras Pricing Research Desk</p>
                <p className="text-[11px] text-[#A6978A]">SME Indirect Tax Advisory • Pan-India Market Benchmarks</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#DDD0C5] leading-relaxed max-w-4xl pt-2">
              Managing Goods and Services Tax (GST) compliance is an essential responsibility for Indian businesses, startups, retailers, and freelancers. But how much should you really pay each month? Here is an objective analysis of monthly GST return filing costs, pricing factors, hidden aggregator surcharges, and how to select an affordable compliance partner.
            </p>
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">

          {/* AI Overview Callout */}
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
                  What Is the Monthly Cost of GST Return Filing in India?
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              In 2026, professional GST return filing in India costs between <strong className="text-white">₹500 to ₹1,500/month</strong> for small businesses with limited invoices, and <strong className="text-white">₹1,500 to ₹5,000/month</strong> for growing traders and multi-branch companies. While self-filing on the government portal is free (₹0), hiring an expert safeguards your Input Tax Credit (ITC). At <strong className="text-amber-300">Taxoras</strong>, monthly retainers are priced at <strong className="text-emerald-400 font-bold">₹799/month flat</strong> for up to 50 invoices, including both GSTR-1 and GSTR-3B filings with full GSTR-2B purchase matching.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="bg-[#2C1D14] text-amber-300 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Starting Retainer: ₹799/mo
              </span>
              <span className="bg-[#2C1D14] text-emerald-400 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Full GSTR-2B Reconciliation Included
              </span>
              <span className="bg-[#2C1D14] text-sky-400 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Dedicated CA Onboarding in 30 Mins
              </span>
            </div>
          </section>

          {/* Section: Indicative Monthly Fee Table */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2C211A] pb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Scale className="w-5 h-5 text-amber-400" />
                  <span>Indicative Monthly Filing Fee Ranges Across India</span>
                </h2>
                <p className="text-xs text-[#BCAE9F] mt-1">
                  Compare general market pricing benchmarks with Taxoras verified all-inclusive retainers.
                </p>
              </div>
              <span className="self-start sm:self-auto text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-600/40">
                Transparent Rates
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#2C211A] bg-[#17100B] shadow-md">
              <table className="w-full text-xs text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#241A14] border-b border-[#2C211A] text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4">Business Category</th>
                    <th className="py-3.5 px-4">Transaction / Invoice Density</th>
                    <th className="py-3.5 px-4">Market Indicative Fee</th>
                    <th className="py-3.5 px-4">Taxoras Verified Retainer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#241A14] text-[#DDD0C5]">
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3.5 px-4 font-bold text-white">Small business with limited invoices</td>
                    <td className="py-3.5 px-4">1 – 30 invoices</td>
                    <td className="py-3.5 px-4 text-[#BCAE9F]">₹500 – ₹1,000 / mo</td>
                    <td className="py-3.5 px-4 font-bold text-amber-300 text-sm">₹799 / mo</td>
                  </tr>
                  <tr className="bg-amber-950/30 hover:bg-amber-950/50 border-l-4 border-amber-500">
                    <td className="py-3.5 px-4 font-bold text-white">Small trader or retailer</td>
                    <td className="py-3.5 px-4 font-semibold text-white">Up to 50 invoices</td>
                    <td className="py-3.5 px-4 text-[#BCAE9F]">₹800 – ₹1,500 / mo</td>
                    <td className="py-3.5 px-4 font-extrabold text-amber-300 text-sm">₹799 / mo (Best Value)</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3.5 px-4 font-bold text-white">Growing business with regular transactions</td>
                    <td className="py-3.5 px-4 font-semibold text-white">51 – 200 invoices</td>
                    <td className="py-3.5 px-4 text-[#BCAE9F]">₹1,500 – ₹3,000 / mo</td>
                    <td className="py-3.5 px-4 font-bold text-white text-sm">₹1,499 / mo</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3.5 px-4 font-bold text-white">Business with high invoice volume</td>
                    <td className="py-3.5 px-4 font-semibold text-white">201 – 500 invoices</td>
                    <td className="py-3.5 px-4 text-[#BCAE9F]">₹3,000 – ₹5,000 / mo</td>
                    <td className="py-3.5 px-4 font-bold text-white text-sm">₹2,799 / mo</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3.5 px-4 font-bold text-white">Complex GST compliance (Multi-State / Exports)</td>
                    <td className="py-3.5 px-4">500+ invoices or multi-state</td>
                    <td className="py-3.5 px-4 text-[#BCAE9F]">₹5,000+ / mo</td>
                    <td className="py-3.5 px-4 font-bold text-white">Custom Retainer Quote</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Government Fees vs Professional Charges */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Receipt className="w-5 h-5 text-amber-400" />
              <span>Government GST Filing Fees vs Professional Service Charges</span>
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-[#2C211A] bg-[#17100B] shadow-md">
              <table className="w-full text-xs text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#241A14] border-b border-[#2C211A] text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">Cost Component</th>
                    <th className="py-3 px-4">What It Covers</th>
                    <th className="py-3 px-4">Applicable Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#241A14] text-[#DDD0C5]">
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Government GST Return Filing Fee</td>
                    <td className="py-3 px-4">Submitting returns directly on the GST portal</td>
                    <td className="py-3 px-4 text-emerald-400 font-bold">₹0 (Nil Fee)</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Professional Filing Fee</td>
                    <td className="py-3 px-4">Data preparation, verification, and submission assistance</td>
                    <td className="py-3 px-4 text-amber-300 font-semibold">From ₹799/mo (Taxoras)</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">ITC Reconciliation (GSTR-2B Matching)</td>
                    <td className="py-3 px-4">Matching purchase register against supplier portal filings</td>
                    <td className="py-3 px-4 text-emerald-400 font-semibold">Included in Taxoras Retainers</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Late Filing Fee (Section 47)</td>
                    <td className="py-3 px-4">Penalty for delay beyond statutory due dates</td>
                    <td className="py-3 px-4 text-rose-400 font-semibold">₹50/day (₹20/day for nil returns)</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Statutory Interest (Section 50)</td>
                    <td className="py-3 px-4">Delay in depositing net cash tax dues</td>
                    <td className="py-3 px-4 text-rose-400 font-semibold">18% per annum on unpaid tax</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Which GST Returns Businesses Need to File */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-amber-400" />
              <span>Which GST Returns Do Businesses Need to File?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-[#DDD0C5]">
              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/30">GSTR-1</span>
                <h4 className="font-bold text-white text-sm">Outward Supplies &amp; Sales</h4>
                <p className="text-[#A6978A] text-[11px]">Monthly (11th) or Quarterly (13th). Reports B2B invoices and B2C sales totals.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/30">GSTR-3B</span>
                <h4 className="font-bold text-white text-sm">Monthly Tax Summary &amp; Payment</h4>
                <p className="text-[#A6978A] text-[11px]">Monthly (20th) or Quarterly (22nd/24th). Offsets tax dues with available ITC.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/30">GSTR-2B</span>
                <h4 className="font-bold text-white text-sm">Auto-Drafted ITC Statement</h4>
                <p className="text-[#A6978A] text-[11px]">Generated on the 14th of every month. Forms the legal basis for claiming input credit.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/30">CMP-08</span>
                <h4 className="font-bold text-white text-sm">Composition Tax Statement</h4>
                <p className="text-[#A6978A] text-[11px]">Quarterly (18th). For retailers and restaurants opting for the composition scheme.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/30">GSTR-4</span>
                <h4 className="font-bold text-white text-sm">Annual Return (Composition)</h4>
                <p className="text-[#A6978A] text-[11px]">Annually (30th April following FY). Consolidated summary of annual composition supplies.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/30">GSTR-9 / 9C</span>
                <h4 className="font-bold text-white text-sm">Annual Return &amp; Audit</h4>
                <p className="text-[#A6978A] text-[11px]">Annually (31st December). Comprehensive FY reconciliation for regular taxpayers.</p>
              </div>
            </div>
          </section>

          {/* Section: Cost-Saving Practical Methods */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-amber-400" />
              <span>How to Reduce Your Monthly GST Return Filing Expenses</span>
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-[#2C211A] bg-[#17100B] shadow-md">
              <table className="w-full text-xs text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#241A14] border-b border-[#2C211A] text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">Cost-Saving Method</th>
                    <th className="py-3 px-4">How It Helps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#241A14] text-[#DDD0C5]">
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Maintain Digital Invoices</td>
                    <td className="py-3 px-4">Reduces manual voucher entry and eliminates paperwork reconciliation delays.</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Organise Purchase Records</td>
                    <td className="py-3 px-4">Simplifies GSTR-2B matching and ensures zero eligible ITC is missed before 30th Nov cutoff.</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">File Returns On Time</td>
                    <td className="py-3 px-4">Completely avoids ₹50/day late fees and 18% p.a. interest penalties.</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Choose the Correct Filing Scheme</td>
                    <td className="py-3 px-4">Evaluating QRMP or regular monthly filing avoids unnecessary administrative work.</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Select All-Inclusive Retainers</td>
                    <td className="py-3 px-4">Avoid budget aggregators that bill extra for purchase reconciliation, notice drafting, and calls.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-[#2C211A] pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <span>Frequently Asked Questions About GST Return Filing Costs in India</span>
              </h2>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">How much does GST return filing cost per month in India?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Professional GST return filing charges in India typically range from ₹500 to ₹5,000 or more per month, depending on transaction volume, business complexity, and services included. Taxoras offers flat retainers starting from ₹799/month for small businesses with up to 50 invoices.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Is GST return filing free in India?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Yes. Filing GST returns directly through the official GST portal (gst.gov.in) does not attract any government filing fee. However, businesses pay professional fees to tax consultants or accountants to verify purchase records, match GSTR-2B, and submit returns accurately.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Which is the cheapest GST filing service in India?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  While some budget portals advertise ₹299/month headline rates that charge extra for GSTR-2B matching and notice replies, Taxoras Advisory &amp; Compliance provides India&apos;s most affordable all-inclusive retainers starting from ₹799/mo with zero hidden surcharges.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Does GST return filing include Input Tax Credit reconciliation?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  In many budget software services, GSTR-2B matching is billed as an extra add-on. At Taxoras, 100% GSTR-2B purchase reconciliation is included in every monthly retainer tier to safeguard your tax credits.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <section className="bg-gradient-to-br from-[#251A13] via-[#1B1410] to-[#16100C] text-white rounded-3xl p-8 sm:p-10 border border-amber-600/30 shadow-xl space-y-6 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/70 border border-amber-600/40 px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Transparent Pricing • Zero Surprises
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
              Find an Affordable, Reliable GST Return Filing Solution Today
            </h2>

            <p className="text-xs sm:text-sm text-[#DDD0C5] max-w-2xl mx-auto leading-relaxed">
              Join thousands of Indian businesses that trust Taxoras for fixed monthly GST retainers, dedicated WhatsApp CA support, and 100% GSTR-2B reconciliation starting from ₹799/month.
            </p>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <a
                href={siteConfig.links.whatsappUrl("Monthly GST Filing Cost Enquiry", "India")}
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
                View Transparent Pricing
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
