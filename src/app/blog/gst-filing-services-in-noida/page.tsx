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
  Building,
  MapPin,
  FileText,
  AlertCircle,
  Check,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "GST Filing Services in Noida — Registration & Return Support",
  description:
    "Looking for GST filing services in Noida? Understand GST returns, registration, compliance, documentation, Sector 62/63 IT support, and professional CA assistance with Taxoras.",
  keywords: [
    "gst filing services in noida",
    "gst registration consultant in noida",
    "gst return filing noida sector 62 63",
    "gst consultant greater noida",
    "up gst registration online",
    "gautam buddh nagar gst compliance",
    "affordable gst consultant noida"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/gst-filing-services-in-noida",
  },
  openGraph: {
    title: "Looking for GST Filing Services in Noida? Here's What You Should Know",
    description:
      "A complete guide to professional GST filing and registration services in Noida, UP. Understand documentation, local Gautam Buddh Nagar procedures, and monthly retainers.",
    url: "https://www.taxoras.online/blog/gst-filing-services-in-noida",
    type: "article",
    publishedTime: "2026-11-04T09:00:00+05:30",
    modifiedTime: "2026-11-04T10:00:00+05:30",
    authors: ["Taxoras Noida Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Filing Services in Noida (2026 Guide)",
    description: "Compare professional GST registration, return filing, and local compliance services in Noida & Greater Noida.",
    images: ["https://www.taxoras.online/opengraph-image"],
  },
};

export default function GstFilingServicesNoidaPage() {
  const articleUrl = "https://www.taxoras.online/blog/gst-filing-services-in-noida";

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
        "headline": "Looking for GST Filing Services in Noida? Here's What You Should Know",
        "description":
          "Looking for GST filing services in Noida? Understand GST returns, registration, compliance, documentation and professional tax support for your business.",
        "image": "https://www.taxoras.online/opengraph-image",
        "datePublished": "2026-11-04T09:00:00+05:30",
        "dateModified": "2026-11-04T10:00:00+05:30",
        "mainEntityOfPage": articleUrl,
        "author": {
          "@type": "Organization",
          "name": "Taxoras Noida Desk",
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
            "name": "GST Filing Services in Noida",
            "item": articleUrl
          }
        ]
      },
      {
        "@type": "AccountingService",
        "@id": `${articleUrl}#localbusiness`,
        "name": "Taxoras Advisory & Compliance - Noida Hub",
        "url": articleUrl,
        "telephone": siteConfig.contact.phone,
        "priceRange": "₹499 - ₹2799/month",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sector 62 & 63 Commercial Corridor",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201301",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "City", "name": "Noida" },
          { "@type": "City", "name": "Greater Noida" },
          { "@type": "AdministrativeArea", "name": "Gautam Buddh Nagar" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are GST filing services in Noida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GST filing services in Noida include professional assistance with new GST registration, monthly GSTR-1 and GSTR-3B return preparation, GSTR-2B Input Tax Credit reconciliation, annual GSTR-9 filings, and responding to department clarification notices."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I hire a GST registration consultant in Noida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A local GST registration consultant ensures your commercial place of business documentation (rent agreement, owner NOC, electricity bills) matches Gautam Buddh Nagar jurisdiction standards, avoiding Form GST REG-03 clarification queries and delays."
            }
          },
          {
            "@type": "Question",
            "name": "What documents are required for GST registration in Noida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Key documents include PAN and Aadhaar of the applicant, business address proof (rent deed with owner NOC and recent electricity bill), bank account proof (cancelled cheque or statement), passport photograph, and business constitution deed."
            }
          },
          {
            "@type": "Question",
            "name": "Can small businesses in Noida file GST returns quarterly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Eligible businesses with turnover up to ₹5 crore can opt for the QRMP scheme, filing GSTR-1 and GSTR-3B quarterly while discharging monthly tax via Challan PMT-06."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I miss a GST return filing deadline in Noida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Missing a filing deadline attracts daily statutory late fees (₹50/day regular, ₹20/day nil), 18% annual interest on net tax payable, and risk of outbound E-way bill blocking after 2 consecutive defaulted periods."
            }
          },
          {
            "@type": "Question",
            "name": "Is GST registration mandatory for every business in Noida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Registration is mandatory once aggregate turnover crosses ₹40 lakh for goods suppliers (₹20 lakh for services), or regardless of turnover for inter-state sellers, e-commerce vendors, and reverse-charge transactions."
            }
          },
          {
            "@type": "Question",
            "name": "Can I change my business details after GST registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Non-core fields (mobile, email, authorized signatories) can be updated immediately via OTP, while core fields (business address, partners/directors) require submitting an amendment application with supporting proof on the GST portal."
            }
          },
          {
            "@type": "Question",
            "name": "How can I find suitable GST filing services in Noida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choose a compliance partner that provides transparent monthly retainers, human CA review on all invoices, direct WhatsApp access, and 100% GSTR-2B purchase matching like Taxoras Advisory & Compliance."
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
              <span className="font-semibold text-amber-400">GST Filing Services in Noida</span>
            </nav>
          </div>
        </div>

        {/* Hero Article Header */}
        <header className="bg-gradient-to-b from-[#1F1611] to-[#120D0A] border-b border-[#2C211A] py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Noida &amp; Greater Noida Commercial Hub
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" /> Updated November 2026
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> 9 min read
              </span>
              <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-600/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <UserCheck className="w-3 h-3 text-emerald-400" /> Verified Desk
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Looking for GST Filing Services in Noida? Here&apos;s What You Should Know
            </h1>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-md shrink-0">
                TX
              </div>
              <div>
                <p className="text-xs font-bold text-white">By the Taxoras Noida &amp; NCR Team</p>
                <p className="text-[11px] text-[#A6978A]">Gautam Buddh Nagar Tax Desk • Commercial Tax Department UP</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#DDD0C5] leading-relaxed max-w-4xl pt-2">
              Whether you operate a software startup in Sector 62, a manufacturing enterprise in Phase 2, a retail store in Sector 18, or an e-commerce brand in Greater Noida, having an experienced partner for <strong className="text-white font-semibold">GST filing services in Noida</strong> keeps your business compliant, penalty-free, and audit-ready.
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
                  Quick Summary &amp; Local Guidance
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Why Noida Businesses Need Dedicated GST Filing &amp; Registration Support
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              Noida falls under the <strong className="text-white">Gautam Buddh Nagar jurisdiction</strong> of the Uttar Pradesh Commercial Tax Department. IT firms exporting software need annual LUT (RFD-11) filings, manufacturers require cross-border Delhi-UP E-way bill compliance, and leased co-working spaces require strict address vetting. <strong className="text-amber-300">Taxoras Advisory &amp; Compliance</strong> provides complete local support with flat retainers starting from <strong className="text-emerald-400 font-bold">₹799/month</strong>.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="bg-[#2C1D14] text-amber-300 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Noida Retainers: From ₹799/mo
              </span>
              <span className="bg-[#2C1D14] text-emerald-400 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ GST Registration: ₹999 Flat
              </span>
              <span className="bg-[#2C1D14] text-sky-400 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Dedicated WhatsApp Desk: +91 88103 81949
              </span>
            </div>
          </section>

          {/* Section: Comprehensive Services Table */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-[#2C211A] pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-amber-400" />
                <span>What Services Are Included in GST Filing and Compliance in Noida?</span>
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#2C211A] bg-[#17100B] shadow-md">
              <table className="w-full text-xs text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#241A14] border-b border-[#2C211A] text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">GST Service</th>
                    <th className="py-3 px-4">What It Includes</th>
                    <th className="py-3 px-4">Who Needs It</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#241A14] text-[#DDD0C5]">
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">GST Registration</td>
                    <td className="py-3 px-4">Document vetting, portal submission, Aadhaar OTP authentication</td>
                    <td className="py-3 px-4 text-[#A6978A]">New startups &amp; eligible taxpayers</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">GSTR-1 Filing</td>
                    <td className="py-3 px-4">Reporting monthly sales, B2B invoices, HSN code summaries</td>
                    <td className="py-3 px-4 text-[#A6978A]">All regular registered entities</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">GSTR-3B Filing</td>
                    <td className="py-3 px-4">Tax summary, offset against ITC, challan PMT-06 generation</td>
                    <td className="py-3 px-4 text-[#A6978A]">Monthly / quarterly regular taxpayers</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">GSTR-2B ITC Matching</td>
                    <td className="py-3 px-4">Reconciling purchase register with supplier filings to prevent lost credit</td>
                    <td className="py-3 px-4 text-emerald-400 font-semibold">All businesses buying goods/services</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">GST Annual Return</td>
                    <td className="py-3 px-4">Form GSTR-9 annual compilation and GSTR-9C reconciliation</td>
                    <td className="py-3 px-4 text-[#A6978A]">Taxpayers crossing statutory thresholds</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3 px-4 font-bold text-white">Notice &amp; Query Assistance</td>
                    <td className="py-3 px-4">Drafting legal responses to REG-03, ASMT-10, and DRC-01B notices</td>
                    <td className="py-3 px-4 text-rose-300 font-semibold">Taxpayers with officer queries</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Documents Required for GST Registration */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              <span>Documents Required for GST Registration in Noida</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#DDD0C5]">
              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h4 className="font-bold text-white text-sm">Proprietor / Partner Identity Proof:</h4>
                <ul className="list-disc pl-5 space-y-1 text-[#DDD0C5]">
                  <li>PAN card of applicant or business entity.</li>
                  <li>Aadhaar card linked with active mobile number for OTP.</li>
                  <li>Passport size photograph of authorized signatory.</li>
                  <li>Partnership deed or Certificate of Incorporation (if applicable).</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h4 className="font-bold text-white text-sm">Place of Business &amp; Banking Proof:</h4>
                <ul className="list-disc pl-5 space-y-1 text-[#DDD0C5]">
                  <li>Valid Rent Agreement with explicit commercial consent clause.</li>
                  <li>No Objection Certificate (NOC) signed by the property owner.</li>
                  <li>Recent Electricity Bill (less than 60 days old).</li>
                  <li>Cancelled cheque or latest bank statement.</li>
                </ul>
              </div>
            </div>

            <p className="text-[11px] text-amber-200 bg-amber-950/40 p-3 rounded-xl border border-amber-600/40 leading-relaxed">
              <strong className="text-white">Pro-tip for Noida Startups:</strong> In Sector 62 and Sector 63 co-working spaces, make sure your sub-lease agreement clearly lists your specific desk/suite number and includes the primary lease NOC to avoid Gautam Buddh Nagar officer objections.
            </p>
          </section>

          {/* Section: Common GST Filing Mistakes to Avoid */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-4 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>Common GST Filing Mistakes Businesses in Noida Should Avoid</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#DDD0C5]">
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">1. Claiming ITC Without 2B Verification:</strong>
                Claiming tax credit on invoices not reflected in GSTR-2B triggers Rule 88D automatic demand notices.
              </div>
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">2. Overlooking Nil Returns:</strong>
                Failing to submit a return when there were no sales still accumulates daily late fees under Section 47.
              </div>
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">3. Delhi-UP Inter-State Mismatches:</strong>
                Supplying from Noida into Delhi without generating mandatory E-way bills causes vehicle interception.
              </div>
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">4. Missing LUT for Software Exports:</strong>
                Billing overseas clients without filing Form RFD-11 LUT leads to locked working capital in IGST.
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-[#2C211A] pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <span>Frequently Asked Questions About GST Filing Services in Noida</span>
              </h2>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">What are GST filing services in Noida?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  GST filing services in Noida include professional assistance with new GST registration, monthly GSTR-1 and GSTR-3B return preparation, GSTR-2B Input Tax Credit reconciliation, annual GSTR-9 filings, and responding to department clarification notices.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Why should I hire a GST registration consultant in Noida?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  A local GST registration consultant ensures your commercial place of business documentation (rent agreement, owner NOC, electricity bills) matches Gautam Buddh Nagar jurisdiction standards, avoiding Form GST REG-03 clarification queries and delays.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Can small businesses in Noida file GST returns quarterly?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Yes. Eligible businesses with turnover up to ₹5 crore can opt for the QRMP scheme, filing GSTR-1 and GSTR-3B quarterly while discharging monthly tax via Challan PMT-06.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">How can I find suitable GST filing services in Noida?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Choose a compliance partner that provides transparent monthly retainers, human CA review on all invoices, direct WhatsApp access, and 100% GSTR-2B purchase matching like Taxoras Advisory &amp; Compliance.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <section className="bg-gradient-to-br from-[#251A13] via-[#1B1410] to-[#16100C] text-white rounded-3xl p-8 sm:p-10 border border-amber-600/30 shadow-xl space-y-6 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/70 border border-amber-600/40 px-3.5 py-1 rounded-full uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              Noida &amp; Greater Noida Desk
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
              Get Started with Professional GST Filing in Noida Today
            </h2>

            <p className="text-xs sm:text-sm text-[#DDD0C5] max-w-2xl mx-auto leading-relaxed">
              Protect your business from late fees, supplier mismatches, and notice headaches. Talk to our Noida indirect tax team today for a transparent quote.
            </p>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <a
                href={siteConfig.links.whatsappUrl("Noida GST Filing Enquiry", "Noida")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Chat on WhatsApp (+91 88103 81949)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/locations/noida/gst-return-filing"
                className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors border border-white/20"
              >
                Explore Noida Hub
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp location="Noida" />
    </div>
  );
}
