import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { allServices } from "@/data/servicesData";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { ServiceIcon } from "@/components/common/ServiceIcon";
import { PopularKeywordsSection } from "@/components/home/PopularKeywordsSection";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  FileText,
  BadgePercent,
  Clock,
  Sparkles,
  Zap,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Affordable Accounting, GST & Tax Compliance Services in India | Taxoras",
  description:
    "Explore Taxoras complete suite of affordable tax compliance services for Indian MSMEs, startups, and traders. GST registration, GSTR-1, GSTR-3B, TDS return filing 24Q/26Q, bookkeeping, and ITR from ₹499/mo.",
  keywords: [
    "affordable tax compliance services India",
    "cheapest GST filing services",
    "GST return filing charges per month",
    "low cost TDS return filing",
    "small business bookkeeping India",
    "affordable accounting services",
    "GSTR-1 filing online",
    "GSTR-3B filing assistance",
    "Form 24Q salary TDS return",
    "Form 26Q vendor TDS return",
    "MSME Udyam registration",
    "Bank reconciliation service BRS",
    "Balance sheet preparation for bank loan",
    "ITR filing consultant India",
    "monthly GST retainers from ₹799",
    "GST registration online ₹999",
    "small business accountant India"
  ],
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/services`,
  },
  openGraph: {
    title: "Affordable Tax, GST & Accounting Services | Taxoras",
    description:
      "India's most affordable compliance platform. 100% human-assisted GST, TDS, and accounting retainers with zero hidden charges and direct WhatsApp support.",
    url: `${siteConfig.canonicalUrl}/services`,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.businessName,
    images: [
      {
        url: `${siteConfig.canonicalUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Taxoras Services Directory",
      },
    ],
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": `${siteConfig.canonicalUrl}/services/#itemlist`,
        "name": "Taxoras Compliance & Accounting Services Directory",
        "description": "Comprehensive catalog of assisted GST, TDS, bookkeeping, and income tax compliance services in India.",
        "numberOfItems": allServices.length,
        "itemListElement": allServices.map((svc, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": svc.title,
          "url": `${siteConfig.canonicalUrl}/services/${svc.slug}`,
          "description": svc.shortDescription,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.canonicalUrl}/services/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteConfig.canonicalUrl,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `${siteConfig.canonicalUrl}/services`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.canonicalUrl}/services/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where can I get affordable GST return filing services in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Taxoras Advisory & Compliance provides verified affordable GST return filing retainers starting at ₹799/month for small businesses with up to 50 invoices. Plans include both GSTR-1 and GSTR-3B with 100% GSTR-2B purchase reconciliation."
            }
          },
          {
            "@type": "Question",
            "name": "Who provides low-cost TDS return filing in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Taxoras offers quarterly TDS return filing support for Form 24Q (salaries) and Form 26Q (vendor payments under 194C, 194J, 194I) starting at ₹799/quarter, including CSI challan matching and Form 16/16A generation."
            }
          },
          {
            "@type": "Question",
            "name": "What is the cheapest way to file GST returns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Taxpayers can file directly for free on gst.gov.in. If you need dedicated human support to prevent ITC loss and DRC-01B/DRC-01C notices, Taxoras provides the lowest true all-inclusive monthly retainer starting from ₹799/month."
            }
          },
          {
            "@type": "Question",
            "name": "Which online accounting service is suitable for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Taxoras provides dedicated cloud bookkeeping and accounting support in Tally Prime, Zoho Books, and Busy starting from ₹799/month, saving small businesses up to 80% compared to hiring a full-time in-house accountant."
            }
          }
        ]
      }
    ],
  };

  const categories = [
    { key: "all", label: "All Services" },
    { key: "gst", label: "GST Compliance" },
    { key: "tds", label: "TDS Returns" },
    { key: "accounting", label: "Accounting & Bookkeeping" },
    { key: "registrations", label: "Registrations & ITR" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#120D0A] text-[#FAF4EF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-amber-900/20 bg-gradient-to-b from-[#1B1410] via-[#160E0A] to-[#120D0A] pt-12 sm:pt-16 pb-14 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-2 text-xs text-amber-300/70">
              <Link href="/" className="hover:text-amber-200 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-amber-400 font-medium">Services</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              100% Assisted Indian Compliance Portfolio
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-5">
              Affordable GST, TDS & Accounting Services for Indian Businesses
            </h1>

            <p className="text-sm sm:text-lg text-[#DDD0C5] max-w-3xl mx-auto leading-relaxed mb-8">
              Stop paying high monthly retainer fees to traditional consultancies. Get reliable, human-reviewed tax filing, 100% GSTR-2B credit reconciliation, and direct WhatsApp support across all 28 Indian States.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
              <div className="p-3.5 rounded-xl bg-[#1F1712] border border-amber-900/30">
                <div className="text-xs text-amber-400 font-semibold mb-1">Affordable Pricing</div>
                <div className="text-sm sm:text-base font-bold text-white">From ₹799/month</div>
                <div className="text-[11px] text-[#A8988B] mt-0.5">Zero hidden per-bill traps</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1F1712] border border-amber-900/30">
                <div className="text-xs text-amber-400 font-semibold mb-1">GSTR-2B Matching</div>
                <div className="text-sm sm:text-base font-bold text-white">100% Included</div>
                <div className="text-[11px] text-[#A8988B] mt-0.5">Never lose Input Tax Credit</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1F1712] border border-amber-900/30">
                <div className="text-xs text-amber-400 font-semibold mb-1">Support Channel</div>
                <div className="text-sm sm:text-base font-bold text-white">Direct WhatsApp</div>
                <div className="text-[11px] text-[#A8988B] mt-0.5">No bot ticket queues</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1F1712] border border-amber-900/30">
                <div className="text-xs text-amber-400 font-semibold mb-1">Pan-India Reach</div>
                <div className="text-sm sm:text-base font-bold text-white">All 28 States</div>
                <div className="text-[11px] text-[#A8988B] mt-0.5">Paperless digital cloud</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Overview / GEO Quick Answers Box */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="rounded-2xl bg-[#18110D] border border-amber-500/30 p-5 sm:p-7 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              <Zap className="w-4 h-4" />
              <span>Google AI Overview & Quick Answer Summary</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2">
              What Compliance Services Does Taxoras Provide & How Much Do They Cost?
            </h2>
            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed mb-4">
              Taxoras Advisory & Compliance is a digital tax and accounting consultancy operating out of New Delhi and serving businesses across India. Core offerings include monthly GST return filing (GSTR-1, GSTR-3B from ₹799/mo), GST registration assistance (₹999 flat), quarterly TDS returns (Form 24Q for salaries, Form 26Q for vendors from ₹799/qtr), monthly bookkeeping in Tally/Zoho (from ₹799/mo), and ITR filing assistance.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-amber-900/30 text-xs">
              <span className="text-[#A8988B]">Instant Verification:</span>
              <a
                href={siteConfig.links.whatsappUrl("Full Services Portfolio Quote")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
              >
                <span>WhatsApp: +91 88103 81949</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <span className="text-amber-900">|</span>
              <span className="text-[#DDD0C5]">Email: contact@taxoras.online</span>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b border-amber-900/30">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Comprehensive Compliance Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Explore All 15 Dedicated Tax & Accounting Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#DDD0C5] max-w-md">
              Select any service below to explore statutory requirements, documents needed, filing timelines, and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service) => {
              let categoryBadgeColor = "bg-amber-950/40 text-amber-400 border-amber-800/40";
              if (service.category === "gst") {
                categoryBadgeColor = "bg-amber-950/50 text-amber-300 border-amber-700/50";
              } else if (service.category === "tds") {
                categoryBadgeColor = "bg-sky-950/50 text-sky-300 border-sky-800/50";
              } else if (service.category === "accounting") {
                categoryBadgeColor = "bg-emerald-950/50 text-emerald-300 border-emerald-800/50";
              }

              return (
                <div
                  key={service.slug}
                  className="rounded-2xl bg-[#1A120E] border border-amber-900/30 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${categoryBadgeColor}`}>
                        {service.categoryLabel}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                        <ServiceIcon name={service.icon} className="w-4 h-4 shrink-0" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                      <Link href={`/services/${service.slug}`} className="focus:outline-none">
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed mb-5 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Deliverable Checkmarks */}
                    <div className="space-y-2 mb-6 border-t border-amber-900/20 pt-4">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#DDD0C5]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 border-t border-amber-900/30 flex items-center gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#251A14] hover:bg-[#32231B] text-white border border-amber-900/40 text-xs font-bold py-2.5 px-3 rounded-xl transition-colors"
                    >
                      <span>Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={siteConfig.links.whatsappUrl(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold py-2.5 px-3.5 rounded-xl transition-colors shadow-sm"
                      title={`WhatsApp Quote for ${service.title}`}
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Quote</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Pricing Comparison Matrix vs Industry */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="rounded-2xl bg-[#19110D] border border-amber-900/40 p-6 sm:p-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Transparent Pricing Benchmark
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-3">
                How Taxoras Truly Compares on Pricing & Deliverables
              </h2>
              <p className="text-xs sm:text-sm text-[#DDD0C5]">
                Many aggregators lure taxpayers with deceptive &quot;₹299/mo&quot; headline prices that exclude GSTR-2B purchase matching, charge extra per invoice, and offer zero phone/WhatsApp reachability. Here is our honest side-by-side comparison.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-[#DDD0C5] border-collapse">
                <thead>
                  <tr className="border-b border-amber-900/40 text-white text-xs uppercase tracking-wider">
                    <th className="py-3 px-4 font-bold">Feature / Deliverable</th>
                    <th className="py-3 px-4 font-bold text-amber-400 bg-amber-500/10 rounded-t-lg">Taxoras Retainer</th>
                    <th className="py-3 px-4 font-bold text-[#A8988B]">Software Aggregators</th>
                    <th className="py-3 px-4 font-bold text-[#A8988B]">Traditional Offline CAs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-900/20">
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Starting Monthly Retainer</td>
                    <td className="py-3 px-4 font-bold text-amber-400 bg-amber-500/5">₹799/month flat</td>
                    <td className="py-3 px-4">₹1,200 – ₹2,500/mo</td>
                    <td className="py-3 px-4">₹3,000 – ₹8,000/mo</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">100% GSTR-2B Purchase Matching</td>
                    <td className="py-3 px-4 font-bold text-emerald-400 bg-amber-500/5">Included in Base Fee</td>
                    <td className="py-3 px-4 text-rose-300">₹1,500+ Extra Add-On</td>
                    <td className="py-3 px-4">Manual Sampling Only</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Rule 88C / 88D Notice Prevention</td>
                    <td className="py-3 px-4 font-bold text-emerald-400 bg-amber-500/5">Pre-filing Crosscheck</td>
                    <td className="py-3 px-4 text-amber-200/70">Self-Service Alert</td>
                    <td className="py-3 px-4">Varies by firm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Direct WhatsApp Support</td>
                    <td className="py-3 px-4 font-bold text-emerald-400 bg-amber-500/5">Yes (+91 88103 81949)</td>
                    <td className="py-3 px-4 text-rose-300">No (Ticket queues only)</td>
                    <td className="py-3 px-4">Phone / Office visits</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-white">Pan-India Cloud Delivery</td>
                    <td className="py-3 px-4 font-bold text-emerald-400 bg-amber-500/5">100% Digital Across 28 States</td>
                    <td className="py-3 px-4">Digital</td>
                    <td className="py-3 px-4 text-rose-300">Physical paper dependency</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <a
                href={siteConfig.links.whatsappUrl("Affordable Retainer Discussion")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Stop Paying High Accounting Fees – Talk to Taxoras on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Commercial Searches & Queries Directory */}
        <PopularKeywordsSection />

        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Common Questions About Taxoras Compliance Services
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl bg-[#1A120E] border border-amber-900/30 p-5">
              <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                How do I get started with Taxoras?
              </h3>
              <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
                Getting started is simple. Connect directly via WhatsApp at +91 88103 81949 or fill out the enquiry form. Share your basic business details and past filing history. Our compliance team verifies your portal access, reviews pending returns, and sets up your monthly compliance schedule within 24 to 48 hours.
              </p>
            </div>

            <div className="rounded-xl bg-[#1A120E] border border-amber-900/30 p-5">
              <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                Are there any hidden costs or per-invoice charges?
              </h3>
              <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
                No. Taxoras operates on strict fee transparency. Our monthly retainers cover all standard inward and outward reconciliation within your agreed invoice volume tier, including both GSTR-1 and GSTR-3B filings, with zero surprise fees.
              </p>
            </div>

            <div className="rounded-xl bg-[#1A120E] border border-amber-900/30 p-5">
              <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                Can I switch from my existing local accountant to Taxoras?
              </h3>
              <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
                Yes. We handle smooth transition by collecting your portal credentials, previous returns, and opening ledger balances. We review the last 2 quarters to identify any unclaimed ITC or pending department queries.
              </p>
            </div>

            <div className="rounded-xl bg-[#1A120E] border border-amber-900/30 p-5">
              <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                Do you provide services in my city or state?
              </h3>
              <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
                Yes. Taxoras provides 100% digital cloud compliance across all 28 Indian States and 8 Union Territories, with specialized regional coverage for Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Kolkata, Jaipur, Ahmedabad, and Chennai.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
