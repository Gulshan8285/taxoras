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
  Sparkles,
  FileText,
  AlertCircle,
  Check
} from "lucide-react";

export const metadata: Metadata = {
  title: "TDS Return Filing 24Q & 26Q Online: Step-by-Step Guide",
  description:
    "Learn how to complete TDS return filing 24Q 26Q online, understand filing steps, quarterly deadlines, Challan 281 payments, Form 138/140 updates, and get expert TDS assistance.",
  keywords: [
    "tds return filing 24q 26q online",
    "tds challan 281 payment assistance",
    "form 24q salary tds filing",
    "form 26q non salary tds online",
    "tds return due dates 2026",
    "form 138 form 140 income tax act 2025",
    "section 234e late fee penalty"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/tds-return-filing-24q-26q-online",
  },
  openGraph: {
    title: "How to File TDS Returns Online for 24Q and 26Q: Step-by-Step Guide (2026)",
    description:
      "A complete guide to filing Form 24Q (salaries) and Form 26Q (vendor payments) online, Challan 281 validation, quarterly due dates, and 2026 new form updates.",
    url: "https://www.taxoras.online/blog/tds-return-filing-24q-26q-online",
    type: "article",
    publishedTime: "2026-11-04T09:00:00+05:30",
    modifiedTime: "2026-11-04T10:00:00+05:30",
    authors: ["Taxoras Direct Tax Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "TDS Return Filing 24Q & 26Q Online (2026 Guide)",
    description: "Learn how to prepare, validate, and file Form 24Q and 26Q online with step-by-step instructions.",
    images: ["https://www.taxoras.online/opengraph-image"],
  },
};

export default function TdsReturnFilingGuidePage() {
  const articleUrl = "https://www.taxoras.online/blog/tds-return-filing-24q-26q-online";

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
        "headline": "How to File TDS Returns Online for 24Q and 26Q: Step-by-Step Guide",
        "description":
          "Learn how to complete TDS return filing 24Q 26Q online, understand filing steps, deadlines, challan payments and get expert TDS assistance.",
        "image": "https://www.taxoras.online/opengraph-image",
        "datePublished": "2026-11-04T09:00:00+05:30",
        "dateModified": "2026-11-04T10:00:00+05:30",
        "mainEntityOfPage": articleUrl,
        "author": {
          "@type": "Organization",
          "name": "Taxoras Direct Tax Desk",
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
            "name": "TDS Return Filing 24Q & 26Q Online",
            "item": articleUrl
          }
        ]
      },
      {
        "@type": "AccountingService",
        "@id": `${articleUrl}#localbusiness`,
        "name": "Taxoras Advisory & Compliance - TDS & Direct Tax Desk",
        "url": articleUrl,
        "telephone": siteConfig.contact.phone,
        "priceRange": "From ₹999/quarter",
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
            "name": "What is the difference between Form 24Q and Form 26Q?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Form 24Q is used to report TDS deducted from employee salary payments under Section 192, whereas Form 26Q is used for reporting TDS deducted from specified non-salary resident payments including contractor charges (194C), professional fees (194J), rent (194I), and commission (194H)."
            }
          },
          {
            "@type": "Question",
            "name": "Can I file TDS returns online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. TDS statements can be prepared digitally using RPU/FVU utilities and submitted electronically through the Income Tax e-Filing portal (eportal.incometax.gov.in) using your registered TAN."
            }
          },
          {
            "@type": "Question",
            "name": "What is the due date for filing Form 24Q and Form 26Q?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The standard quarterly due dates are: Q1 (April–June) due by 31st July; Q2 (July–September) due by 31st October; Q3 (October–December) due by 31st January; and Q4 (January–March) due by 31st May."
            }
          },
          {
            "@type": "Question",
            "name": "What is TDS Challan 281 used for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Challan ITNS 281 (or ITNS 281N under the new tax framework) is used for depositing deducted TDS and TCS dues with the Central Government via authorized banks or online portal."
            }
          },
          {
            "@type": "Question",
            "name": "Is TAN mandatory for TDS return filing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. A 10-digit Tax Deduction and Collection Account Number (TAN) is legally mandatory for any entity deducting tax at source and submitting regular TDS statements."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I enter an incorrect PAN in my TDS return?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Entering an invalid PAN causes TRACES PAN mismatch flags, leading to higher 20% deduction demand notices and preventing deductees from viewing credit in their Form 26AS/AIS."
            }
          },
          {
            "@type": "Question",
            "name": "Can I revise a TDS return after filing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Correction statements (C1, C2, C3, C5, C9) can be filed on the TRACES portal to rectify deductee PANs, add missing records, or update challan details."
            }
          },
          {
            "@type": "Question",
            "name": "Are Form 24Q and Form 26Q still applicable in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Forms 24Q and 26Q apply for quarters up to FY 2025-26. Under the new Income-tax Act, 2025 framework starting TY 2026-27, they correspond to Form 138 (Salary) and Form 140 (Non-Salary)."
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
              <span className="font-semibold text-amber-400">TDS Return Filing 24Q &amp; 26Q Online</span>
            </nav>
          </div>
        </div>

        {/* Hero Article Header */}
        <header className="bg-gradient-to-b from-[#1F1611] to-[#120D0A] border-b border-[#2C211A] py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Receipt className="w-3.5 h-3.5 text-amber-400" />
                Quarterly Direct Tax Compliance Guide
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" /> Updated November 2026
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> 11 min read
              </span>
              <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-600/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <UserCheck className="w-3 h-3 text-emerald-400" /> TRACES Verified
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              How to File TDS Returns Online for 24Q and 26Q: Step-by-Step Guide?
            </h1>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-md shrink-0">
                TX
              </div>
              <div>
                <p className="text-xs font-bold text-white">By the Taxoras Direct Tax Compliance Desk</p>
                <p className="text-[11px] text-[#A6978A]">Income Tax &amp; TDS Regulatory Advisory • Serving All Indian Employers &amp; Deductors</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#DDD0C5] leading-relaxed max-w-4xl pt-2">
              Everything you need to know about <strong className="text-white font-semibold">TDS return filing 24Q 26Q online</strong> in India: Form 24Q vs Form 26Q differences, Challan 281 payment verification, step-by-step FVU validation, quarterly due dates, and the upcoming transition to Forms 138/140 under the new Income-tax Act.
            </p>
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">

          {/* AI Overview Box */}
          <section className="bg-gradient-to-br from-[#231811] via-[#1B1410] to-[#16100C] rounded-2xl border-2 border-amber-500/40 p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                  Google AI Overview &amp; Quick Summary
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  How Does Online TDS Return Filing Work for 24Q &amp; 26Q?
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              TDS return filing is a mandatory quarterly compliance for any employer or business that deducts tax at source. <strong className="text-white font-semibold">Form 24Q</strong> reports salary deductions under Section 192, while <strong className="text-white font-semibold">Form 26Q</strong> covers non-salary payments such as contractor charges (194C), professional retainers (194J), and commercial rent (194I). Filing is completed electronically on the Income Tax e-Filing portal after preparing and validating files via the official NSDL/TRACES FVU utility. Missing the quarterly deadline triggers a mandatory <strong className="text-rose-400 font-bold">Section 234E late fee of ₹200 per day</strong>.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="bg-[#2C1D14] text-amber-300 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Form 24Q: Salary TDS
              </span>
              <span className="bg-[#2C1D14] text-emerald-400 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Form 26Q: Vendor / Professional TDS
              </span>
              <span className="bg-[#2C1D14] text-sky-400 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Taxoras Filing: From ₹999/quarter
              </span>
            </div>
          </section>

          {/* Form 24Q vs Form 26Q Comparison */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-400" />
              <span>Difference Between Form 24Q and Form 26Q</span>
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-[#2C211A] bg-[#17100B] shadow-md">
              <table className="w-full text-xs text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#241A14] border-b border-[#2C211A] text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">Parameter</th>
                    <th className="py-3 px-4">Form 24Q</th>
                    <th className="py-3 px-4">Form 26Q</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#241A14] text-[#DDD0C5]">
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Statutory Purpose</td>
                    <td className="py-3 px-4">Salary TDS reporting under Section 192</td>
                    <td className="py-3 px-4">Non-salary resident payments reporting</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Applicable Deductors</td>
                    <td className="py-3 px-4">Corporate &amp; non-corporate employers</td>
                    <td className="py-3 px-4">Businesses, professionals, firms paying vendors</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Covered Sections</td>
                    <td className="py-3 px-4">Section 192 (Salaries)</td>
                    <td className="py-3 px-4">194C (Contractors), 194J (Fees), 194I (Rent), 194H</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Annexure Breakdown</td>
                    <td className="py-3 px-4">Annexure I (Q1–Q4) + Annexure II (Q4 only)</td>
                    <td className="py-3 px-4">Single deductee schedule per quarter</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Certificates Issued</td>
                    <td className="py-3 px-4 text-emerald-400 font-semibold">Form 16 (Part A &amp; Part B)</td>
                    <td className="py-3 px-4 text-emerald-400 font-semibold">Form 16A (Quarterly)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Challan 281 & Documents Required */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Receipt className="w-5 h-5 text-amber-400" />
              <span>Documents Required &amp; TDS Challan 281 Payment Assistance</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#DDD0C5]">
              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h4 className="font-bold text-white text-sm">Essential Deductor Details:</h4>
                <ul className="list-disc pl-5 space-y-1 text-[#DDD0C5]">
                  <li>Valid 10-digit TAN (Tax Deduction Account Number).</li>
                  <li>Deductor PAN, official contact email, and mobile.</li>
                  <li>Income Tax e-Filing portal credentials.</li>
                  <li>TRACES admin portal login details.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h4 className="font-bold text-white text-sm">Challan &amp; Deductee Records:</h4>
                <ul className="list-disc pl-5 space-y-1 text-[#DDD0C5]">
                  <li>Challan ITNS 281 receipts with BSR code, date, and challan serial number.</li>
                  <li>Verified PAN of every employee and vendor.</li>
                  <li>Gross payment amounts, deduction dates, and applicable tax rates.</li>
                  <li>Previous quarter filing token numbers (for correction continuity).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Step-by-Step Filing Instructions */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-amber-400" />
              <span>Step-by-Step Online TDS Filing Procedure (7 Steps)</span>
            </h2>

            <div className="space-y-3.5 text-xs text-[#DDD0C5]">
              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Step 1: Reconcile Deductions with Bank Books</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Extract monthly payroll data (for 24Q) or vendor payment ledgers (for 26Q) and calculate exact TDS withheld.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Step 2: Deposit TDS via Challan 281 by 7th of Next Month</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Deposit deducted tax online through e-Pay Tax. Record the CIN (BSR code + Deposit Date + Challan Number).</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Step 3: Download Return Preparation Utility (RPU)</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Download the latest official e-TDS Return Preparation Utility (RPU) and File Validation Utility (FVU) from Protean/TIN-NSDL.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">4</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Step 4: Enter Challan and Deductee Details</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Input challan particulars in the Challan tab, then map deductee PAN, date of payment, amount, and TDS rate in the Deductee Details tab.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">5</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Step 5: Run FVU Validation</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Execute the File Validation Utility. The tool cross-checks PAN validity and challan mathematics, producing an error report or generating a valid <code>.fvu</code> file.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">6</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Step 6: Upload on Income Tax e-Filing Portal</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Log in to the Income Tax portal with your TAN, select e-File → Income Tax Forms → File Income Tax Forms → Upload TDS (Form 24Q/26Q), attach the zip file and verify via DSC or Aadhaar OTP.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">7</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Step 7: Download Token &amp; Generate Form 16/16A</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Save the provisional acknowledgement receipt. After processing on TRACES (usually 3–5 working days), download official Form 16 / 16A certificates for employees and vendors.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Quarterly Due Dates & 2026 New Forms Update */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>Quarterly Due Dates &amp; 2026 New Forms Evolution</span>
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-[#2C211A] bg-[#17100B] shadow-md">
              <table className="w-full text-xs text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#241A14] border-b border-[#2C211A] text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">Quarter</th>
                    <th className="py-3 px-4">Period Covered</th>
                    <th className="py-3 px-4">Statutory Return Due Date</th>
                    <th className="py-3 px-4">Tax Deposit Deadline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#241A14] text-[#DDD0C5]">
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Q1</td>
                    <td className="py-3 px-4">1st April – 30th June</td>
                    <td className="py-3 px-4 font-semibold text-white">31st July</td>
                    <td className="py-3 px-4 text-[#A6978A]">7th of May, June, July</td>
                  </tr>
                  <tr className="bg-amber-950/30 hover:bg-amber-950/50 border-l-4 border-amber-500">
                    <td className="py-3 px-4 font-bold text-white">Q2</td>
                    <td className="py-3 px-4">1st July – 30th September</td>
                    <td className="py-3 px-4 font-bold text-amber-300">31st October</td>
                    <td className="py-3 px-4 text-[#A6978A]">7th of August, Sept, Oct</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Q3</td>
                    <td className="py-3 px-4">1st October – 31st December</td>
                    <td className="py-3 px-4 font-semibold text-white">31st January</td>
                    <td className="py-3 px-4 text-[#A6978A]">7th of Nov, Dec, Jan</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Q4</td>
                    <td className="py-3 px-4">1st January – 31st March</td>
                    <td className="py-3 px-4 font-semibold text-white">31st May</td>
                    <td className="py-3 px-4 text-[#A6978A]">7th Feb, March &amp; 30th April</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 2026 Forms Update Box */}
            <div className="bg-[#18110C] rounded-2xl p-6 border border-[#2C211A] space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Important Update: New Income-tax Act, 2025 Form Transition (From 1 April 2026)
              </h3>
              <p className="text-xs text-[#DDD0C5] leading-relaxed">
                Forms 24Q and 26Q remain fully active for all historical and current quarters up to FY 2025-26. Beginning 1st April 2026, the corresponding simplified form mapping is:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
                <div className="p-3 rounded-lg bg-[#241A14] border border-[#38291F]">
                  <strong className="text-white block">Form 24Q</strong>
                  <span className="text-amber-400 font-semibold text-xs">→ Form 138 (Salary)</span>
                </div>
                <div className="p-3 rounded-lg bg-[#241A14] border border-[#38291F]">
                  <strong className="text-white block">Form 26Q</strong>
                  <span className="text-amber-400 font-semibold text-xs">→ Form 140 (Non-Salary)</span>
                </div>
                <div className="p-3 rounded-lg bg-[#241A14] border border-[#38291F]">
                  <strong className="text-white block">Form 27Q</strong>
                  <span className="text-amber-400 font-semibold text-xs">→ Form 144 (Foreign)</span>
                </div>
                <div className="p-3 rounded-lg bg-[#241A14] border border-[#38291F]">
                  <strong className="text-white block">Form 27EQ</strong>
                  <span className="text-amber-400 font-semibold text-xs">→ Form 143 (TCS)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Penalties & Common Mistakes */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-4 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>Penalties for Late or Incorrect TDS Return Filing</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#DDD0C5]">
              <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-800/40 space-y-1">
                <strong className="text-rose-300 block text-sm">Section 234E Late Fee:</strong>
                <p className="text-[#FCA5A5]/90 leading-relaxed">
                  Mandatory fee of ₹200 per day for every day of delay until the return is submitted, capped at the total TDS amount deductible.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-800/40 space-y-1">
                <strong className="text-rose-300 block text-sm">Section 201(1A) Interest:</strong>
                <p className="text-[#FCA5A5]/90 leading-relaxed">
                  1% per month for late deduction from payment date; 1.5% per month for late deposit from deduction date to actual deposit date.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-800/40 space-y-1">
                <strong className="text-rose-300 block text-sm">Section 271H Penalty:</strong>
                <p className="text-[#FCA5A5]/90 leading-relaxed">
                  Assessing Officer penalty ranging from ₹10,000 to ₹1,00,000 for failing to submit returns within one year of the due date.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-800/40 space-y-1">
                <strong className="text-rose-300 block text-sm">Deductee 26AS/AIS Disruption:</strong>
                <p className="text-[#FCA5A5]/90 leading-relaxed">
                  Late or mismatched filing blocks employees and vendors from claiming tax credit, triggering automated demand notices and business disputes.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-[#2C211A] pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <span>Frequently Asked Questions About TDS Return Filing 24Q &amp; 26Q</span>
              </h2>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">What is the difference between Form 24Q and Form 26Q?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Form 24Q is used to report TDS deducted from employee salary payments under Section 192, whereas Form 26Q is used for reporting TDS deducted from specified non-salary resident payments including contractor charges (194C), professional fees (194J), rent (194I), and commission (194H).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Can I file TDS returns online?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Yes. TDS statements can be prepared digitally using RPU/FVU utilities and submitted electronically through the Income Tax e-Filing portal (eportal.incometax.gov.in) using your registered TAN.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">What is the due date for filing Form 24Q and Form 26Q?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  The standard quarterly due dates are: Q1 (April–June) due by 31st July; Q2 (July–September) due by 31st October; Q3 (October–December) due by 31st January; and Q4 (January–March) due by 31st May.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Can I revise a TDS return after filing?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Yes. Correction statements can be submitted on the TRACES portal to rectify deductee PANs, add missing records, or update challan details without penalties.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <section className="bg-gradient-to-br from-[#251A13] via-[#1B1410] to-[#16100C] text-white rounded-3xl p-8 sm:p-10 border border-amber-600/30 shadow-xl space-y-6 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/70 border border-amber-600/40 px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Error-Free Quarterly Filing
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
              Need Expert Assistance with Your Form 24Q or 26Q TDS Return?
            </h2>

            <p className="text-xs sm:text-sm text-[#DDD0C5] max-w-2xl mx-auto leading-relaxed">
              Taxoras handles end-to-end deduction reconciliation, challan matching, FVU file validation, and Form 16/16A certificate generation starting at just ₹999/quarter.
            </p>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <a
                href={siteConfig.links.whatsappUrl("TDS Return Filing 24Q 26Q Online", "All India")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Chat on WhatsApp (+91 88103 81949)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/services/tds-return-filing"
                className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors border border-white/20"
              >
                View TDS Service Scope
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
