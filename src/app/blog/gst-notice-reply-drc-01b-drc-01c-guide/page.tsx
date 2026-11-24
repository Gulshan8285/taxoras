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
  Sparkles,
  Send
} from "lucide-react";

export const metadata: Metadata = {
  title: "GST Notice Reply for DRC-01B & DRC-01C: Reply Format & Process (2026 Guide)",
  description:
    "Complete statutory guide on how to reply to GST notices Form DRC-01B (GSTR-1 vs 3B) and Form DRC-01C (GSTR-3B vs 2B) online. Learn reason codes, 7-day deadlines, draft reply formats, and avoid GSTR-1 blocking with Taxoras.",
  keywords: [
    "gst notice reply format drc 01b",
    "drc 01c excess itc mismatch reply",
    "how to reply to gst notice within 7 days",
    "drc 01b reason codes gst portal",
    "rule 88c gstr 1 vs 3b notice",
    "rule 88d gstr 3b vs 2b notice",
    "gst notice consultant delhi india",
    "how to file part b of drc 01b online",
    "gstr 1 blocked rule 59 6"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/gst-notice-reply-drc-01b-drc-01c-guide",
  },
  openGraph: {
    title: "GST Notice Reply for DRC-01B & DRC-01C: Tax Mismatch Reply Format & Process (2026)",
    description:
      "Step-by-step instructions on drafting and submitting online replies to GST mismatch notices DRC-01B and DRC-01C within the 7-day statutory window.",
    url: "https://www.taxoras.online/blog/gst-notice-reply-drc-01b-drc-01c-guide",
    type: "article",
    publishedTime: "2026-11-24T09:00:00+05:30",
    modifiedTime: "2026-11-24T10:00:00+05:30",
    authors: ["Taxoras Compliance Research Desk"],
    images: [{ url: "https://www.taxoras.online/opengraph-image", width: 1200, height: 630, alt: "GST Notice Reply DRC-01B and DRC-01C Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Notice Reply for DRC-01B & DRC-01C (2026 Guide)",
    description: "Learn how to reply to automated GST liability and ITC mismatch notices within 7 days.",
    images: ["https://www.taxoras.online/opengraph-image"],
  },
};

export default function GstNoticeReplyGuidePage() {
  const articleUrl = "https://www.taxoras.online/blog/gst-notice-reply-drc-01b-drc-01c-guide";

  const FAQS = [
    {
      "@type": "Question",
      "name": "What is the deadline to reply to a Form DRC-01B or DRC-01C notice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Taxpayers have exactly 7 calendar days from the date of issuance to reply to Form DRC-01B or Form DRC-01C on the GST portal. You must either pay the differential tax along with applicable Section 50 interest via Form DRC-03 or submit acceptable justification in Part B of the form."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I fail to reply to DRC-01B or DRC-01C within 7 days?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If a taxpayer fails to reply or pay the demand within 7 days, the GST system automatically blocks the generation of Form GSTR-1 / IFF for subsequent tax periods under Rule 59(6) of the CGST Rules. Additionally, the jurisdictional tax officer can initiate direct recovery proceedings under Section 79 without issuing further show-cause notices."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Form DRC-01B and Form DRC-01C?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Form DRC-01B (issued under Rule 88C) deals with outward tax liability mismatches where tax declared in GSTR-1 exceeds the tax paid in GSTR-3B. Form DRC-01C (issued under Rule 88D) deals with inward Input Tax Credit mismatches where ITC availed in GSTR-3B exceeds the eligible credit auto-populated in GSTR-2B."
      }
    },
    {
      "@type": "Question",
      "name": "Can I reply to DRC-01B or DRC-01C offline by visiting the GST office?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Form DRC-01B and DRC-01C are 100% automated system-generated intimations. The reply must be filed electronically on the GST portal (Services > Returns > Return Compliance). Physical submissions or manual letters to the ward officer will not unblock your GSTR-1 filing status."
      }
    },
    {
      "@type": "Question",
      "name": "Can Taxoras assist my business with drafting and filing a DRC-01B or DRC-01C reply?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Taxoras Advisory & Compliance provides fast 24-hour turnaround on emergency GST notice replies. Our specialists analyze your GSTR-1, GSTR-3B, and GSTR-2B reconciliations, select the exact statutory reason codes, compile necessary evidence, and file Part B on the portal to prevent GSTR-1 blocking."
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
        "headline": "GST Notice Reply for DRC-01B & DRC-01C: Tax Mismatch Notice Reply Format & Process (2026 Guide)",
        "description":
          "Complete statutory guide on replying to automated GST notices Form DRC-01B and Form DRC-01C online, reason codes breakdown, 7-day deadlines, draft reply formats, and penalty avoidance.",
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
            "name": "GST Notice Reply DRC-01B & DRC-01C Guide",
            "item": articleUrl
          }
        ]
      },
      {
        "@type": "AccountingService",
        "@id": `${articleUrl}#service`,
        "name": "Taxoras Advisory & Compliance - Notice Assistance Desk",
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
    "Hello Taxoras, I received a GST notice (DRC-01B / DRC-01C / ASMT-10). Please assist me with drafting and filing an urgent reply before the 7-day deadline."
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
              <span className="text-[#FAF4EF] font-medium">GST Notice Reply Guide</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-600/40 text-rose-300 text-xs font-bold">
                <AlertTriangle className="w-3.5 h-3.5" />
                Urgent 7-Day Compliance Notice
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2A1E15] border border-[#3D2B1F] text-xs text-[#C5A880]">
                <Clock className="w-3 h-3" />
                10 min read
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#FAF4EF] tracking-tight leading-tight mb-4">
              GST Notice Reply for DRC-01B & DRC-01C: Tax Mismatch Reply Format & Process (2026 Guide)
            </h1>

            <p className="text-sm sm:text-base text-[#D4A373] leading-relaxed">
              Step-by-step protocol for answering automated GST mismatch notices, understanding portal reason codes, avoiding GSTR-1 blocking, and submitting Part B replies under Rules 88C and 88D.
            </p>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">

          {/* AI DIRECT ANSWER & GEO SUMMARY BOX */}
          <section className="bg-[#1C140E] border-2 border-rose-600/40 rounded-2xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-rose-600/20 flex items-center justify-center text-rose-400">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-rose-300">
                Quick Summary: Handling DRC-01B & DRC-01C (AI & GEO Reference)
              </h2>
            </div>
            <div className="text-xs sm:text-sm text-[#FAF4EF]/90 space-y-3 leading-relaxed">
              <p>
                <strong>What Are These Notices?</strong> <strong>DRC-01B (Rule 88C)</strong> triggers when tax declared in your sales return (GSTR-1) exceeds tax paid in your summary return (GSTR-3B). <strong>DRC-01C (Rule 88D)</strong> triggers when Input Tax Credit claimed in GSTR-3B exceeds the eligible credit generated in GSTR-2B.
              </p>
              <p>
                <strong>The Critical 7-Day Deadline:</strong> You have exactly <strong>7 calendar days</strong> from intimation to either pay the difference via Form DRC-03 or submit your justification in <strong>Part B</strong> on the GST portal.
              </p>
              <p>
                <strong>Consequence of Inaction:</strong> If not answered within 7 days, your next month&apos;s GSTR-1 is automatically locked under <strong>Rule 59(6)</strong>, preventing you from generating invoices for customers, and recovery proceedings can start under Section 79.
              </p>
            </div>
          </section>

          {/* Side-by-side comparison of 01B vs 01C */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#FAF4EF]">
              1. Understanding DRC-01B vs DRC-01C Notices
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#1C140E] border border-[#3D2B1F] space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Rule 88C Notice</span>
                <h3 className="text-base font-bold text-[#FAF4EF]">Form DRC-01B (Outward Liability)</h3>
                <p className="text-xs text-[#C5A880] leading-relaxed">
                  Triggered when: <strong>Tax in GSTR-1 &gt; Tax paid in GSTR-3B</strong> by a threshold (exceeding ₹25,000 and 10%+).
                </p>
                <div className="text-[11px] text-[#FAF4EF]/80 space-y-1 pt-1">
                  <p>&bull; Common cause: Typing extra zero in GSTR-1 sales.</p>
                  <p>&bull; Advance payment adjustment error.</p>
                  <p>&bull; Credit note reported in 3B but omitted in 1.</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#1C140E] border border-rose-600/30 space-y-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">Rule 88D Notice</span>
                <h3 className="text-base font-bold text-[#FAF4EF]">Form DRC-01C (Input Tax Credit)</h3>
                <p className="text-xs text-[#C5A880] leading-relaxed">
                  Triggered when: <strong>ITC in GSTR-3B &gt; ITC in GSTR-2B</strong> by a threshold (exceeding ₹25,000 and 10%+).
                </p>
                <div className="text-[11px] text-[#FAF4EF]/80 space-y-1 pt-1">
                  <p>&bull; Common cause: Supplier filed GSTR-1 late.</p>
                  <p>&bull; Invoices claiming credit without 2B matching.</p>
                  <p>&bull; Re-crediting reversed ITC from past quarters.</p>
                </div>
              </div>
            </div>
          </section>

          {/* DRC-01B Reason Codes */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#FAF4EF]">
              2. Form DRC-01B Part B Reason Codes (Select the Right Option)
            </h2>
            <p className="text-xs sm:text-sm text-[#D4A373] leading-relaxed">
              When filing Part B of DRC-01B on the portal, selecting the wrong reason code will result in departmental rejection and demand initiation. Choose the statutory code matching your scenario:
            </p>

            <div className="space-y-2.5 text-xs text-[#FAF4EF]">
              <div className="p-3.5 rounded-xl bg-[#18110C] border border-[#3D2B1F]">
                <strong className="text-amber-400 block mb-0.5">Code 1: Excess liability paid in earlier tax periods</strong>
                <p className="text-[#C5A880]">Use when you paid extra tax in previous GSTR-3B and adjusted it in the current GSTR-3B without amending GSTR-1.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#18110C] border border-[#3D2B1F]">
                <strong className="text-amber-400 block mb-0.5">Code 2: Typographical error in Form GSTR-1</strong>
                <p className="text-[#C5A880]">Use when an invoice value was entered incorrectly (e.g. ₹10,00,000 entered instead of ₹1,00,000) and correct tax was deposited in GSTR-3B.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#18110C] border border-[#3D2B1F]">
                <strong className="text-amber-400 block mb-0.5">Code 3: GSTR-1 amended in subsequent tax period</strong>
                <p className="text-[#C5A880]">Use when an amendment was filed in next month&apos;s GSTR-1 Table 9 to correct an outward liability mistake.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#18110C] border border-[#3D2B1F]">
                <strong className="text-amber-400 block mb-0.5">Code 4: Advance received and adjusted</strong>
                <p className="text-[#C5A880]">Use when tax was paid on advance receipts in previous periods and offset against invoices generated in the current month.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#18110C] border border-[#3D2B1F]">
                <strong className="text-amber-400 block mb-0.5">Code 5: Any other reason (Detailed Explanation Required)</strong>
                <p className="text-[#C5A880]">Use when circumstances involve complex multi-state reconciliations, cancellation reversals, or legal litigation with attached PDF evidence.</p>
              </div>
            </div>
          </section>

          {/* DRC-01C Reason Codes */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#FAF4EF]">
              3. Form DRC-01C Part B Reason Codes for ITC Mismatch
            </h2>
            <div className="space-y-2.5 text-xs text-[#FAF4EF]">
              <div className="p-3.5 rounded-xl bg-[#18110C] border border-[#3D2B1F]">
                <strong className="text-emerald-400 block mb-0.5">Code 1: ITC claimed in earlier periods but reversed subsequently</strong>
                <p className="text-[#C5A880]">Use when you reversed credit under Rule 37 (180-day vendor payment rule) and reclaimed it in the current GSTR-3B upon making payment.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#18110C] border border-[#3D2B1F]">
                <strong className="text-emerald-400 block mb-0.5">Code 2: GSTR-3B filed before GSTR-2B generated</strong>
                <p className="text-[#C5A880]">Use when returns were submitted early before the 14th cutoff and actual supplier filings updated subsequently in GSTR-2B.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#18110C] border border-[#3D2B1F]">
                <strong className="text-emerald-400 block mb-0.5">Code 3: Import of goods / ICEGATE credit</strong>
                <p className="text-[#C5A880]">Use when IGST paid at customs through ICEGATE Bill of Entry was delayed in reflecting in GSTR-2B Table 4(A)(1).</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#18110C] border border-[#3D2B1F]">
                <strong className="text-emerald-400 block mb-0.5">Code 4: Credit Notes adjustment mismatch</strong>
                <p className="text-[#C5A880]">Use when supplier issued credit notes in GSTR-1 that were already adjusted in earlier accounting periods.</p>
              </div>
            </div>
          </section>

          {/* Step-by-Step Portal Submission Guide */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#FAF4EF]">
              4. How to File Part B Reply on GST Portal (Step-by-Step)
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-[#D4A373]">
              <div className="p-4 rounded-xl bg-[#1C140E] border border-[#3D2B1F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">1</span>
                <div>
                  <strong className="text-[#FAF4EF] block">Log in to gst.gov.in</strong>
                  <p className="text-xs text-[#C5A880] mt-0.5">Go to <em>Services &rarr; Returns &rarr; Return Compliance</em>. You will see tabs for <em>Liability Mismatch (DRC-01B)</em> and <em>ITC Mismatch (DRC-01C)</em>.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1C140E] border border-[#3D2B1F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">2</span>
                <div>
                  <strong className="text-[#FAF4EF] block">Select Financial Year & Reference Number</strong>
                  <p className="text-xs text-[#C5A880] mt-0.5">Click on the active reference number to view the pre-filled Part A intimation detailing the exact rupee mismatch.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1C140E] border border-[#3D2B1F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">3</span>
                <div>
                  <strong className="text-[#FAF4EF] block">Choose Option 1 (Pay Tax) or Option 2 (Provide Reasons)</strong>
                  <p className="text-xs text-[#C5A880] mt-0.5">If the discrepancy is genuine, pay via Form DRC-03 and enter the ARN. If the difference is explainable, select Option 2 and check the applicable reason codes.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1C140E] border border-[#3D2B1F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">4</span>
                <div>
                  <strong className="text-[#FAF4EF] block">File with Authorized Signatory OTP / DSC</strong>
                  <p className="text-xs text-[#C5A880] mt-0.5">Review the verification declaration, select your authorized signatory, and sign with DSC or EVC. Note the generated ARN for your records.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Urgent Notice Assistance Callout */}
          <section className="bg-gradient-to-r from-[#2A160E] via-[#351C12] to-[#2A160E] border-2 border-amber-600/50 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider bg-rose-950/60 px-3 py-1 rounded-full border border-rose-600/30 inline-block">
              Emergency GST Notice Desk
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#FAF4EF]">
              Received a DRC-01B or DRC-01C Notice? Get It Answered Within 24 Hours
            </h2>
            <p className="text-xs sm:text-sm text-[#D4A373] leading-relaxed">
              Don&apos;t risk having your GSTIN or GSTR-1 blocked. Send your notice reference number to our compliance specialists. We verify your books, select the correct statutory reasons, and submit a compliant Part B response before the 7-day clock expires.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-transform active:scale-95"
              >
                <span>Send Notice on WhatsApp (+91 88103 81949)</span>
              </a>
              <a
                href={siteConfig.links.phoneUrl}
                className="inline-flex items-center justify-center gap-2 bg-[#18110C] hover:bg-[#241912] text-[#FAF4EF] font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-[#3D2B1F] transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Emergency Helpline</span>
              </a>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="space-y-4 pt-4 border-t border-[#3D2B1F]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#FAF4EF] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              Frequently Asked Questions: DRC-01B & DRC-01C Replies
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
