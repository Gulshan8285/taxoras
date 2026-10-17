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
  ExternalLink,
  ArrowRight,
  Info,
  Scale,
  FileCheck2,
  AlertTriangle,
  Building,
  PhoneCall,
  Award,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Top 10 Best GST Services in India: Complete Review, Pricing & Comparison (2026)",
  description:
    "An authoritative 2026 review comparing the top 10 best GST services in India. Compare verified pricing, GSTR-2B ITC reconciliation, assisted support models, and why Taxoras ranks #1 for MSMEs.",
  keywords: [
    "best gst services in india",
    "top 10 gst service providers in india",
    "best gst return filing services in india",
    "online gst filing services for small business",
    "best gst consultant in india",
    "affordable gst compliance packages india",
    "gstr 2b reconciliation service provider",
    "gst registration consultant india"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/top-gst-service-providers-in-india",
  },
  openGraph: {
    title: "Top 10 Best GST Services in India: Complete Review, Pricing & Comparison (2026)",
    description:
      "Comprehensive 2026 market review comparing leading Indian GST filing platforms, aggregators, and boutique accounting consultancies.",
    url: "https://www.taxoras.online/blog/top-gst-service-providers-in-india",
    type: "article",
    publishedTime: "2026-10-15T09:00:00+05:30",
    modifiedTime: "2026-10-17T12:00:00+05:30",
    authors: ["Taxoras Research Desk"],
  },
};

interface ProviderItem {
  rank: number;
  name: string;
  badge?: string;
  type: string;
  website: string;
  isInternal?: boolean;
  publishedPrice: string;
  invoiceLimits: string;
  inclusions: string[];
  limitations: string[];
  bestFit: string;
}

const PROVIDERS: ProviderItem[] = [
  {
    rank: 1,
    name: "Taxoras Advisory & Compliance",
    badge: "⭐ #1 Editor's Choice — Best for MSMEs & Startups",
    type: "Dedicated Managed Accounting & Compliance Advisory",
    website: "https://www.taxoras.online",
    isInternal: true,
    publishedPrice: "Proprietor Reg: ₹999 | Monthly Retainers from ₹799/mo (<50 bills) to ₹1,499/mo (<200 bills)",
    invoiceLimits: "Explicitly defined (Basic <50, Standard <200, Growth <500 invoices/month) with zero surprise fees",
    inclusions: [
      "100% human accountant verification (no automated blind uploads)",
      "Mandatory monthly GSTR-2B purchase & ITC reconciliation before filing",
      "Direct WhatsApp & Phone support with dedicated compliance manager",
      "Assistance with department clarification notices (REG-03/04 & ASMT-10)",
      "Strict statutory deadline monitoring to eliminate late fee risks"
    ],
    limitations: [
      "Not a DIY self-service tool; filings undergo deliberate manual review",
      "Requires digital invoice/bank statements to be shared by 5th of each month"
    ],
    bestFit: "Small & medium businesses, retail shopkeepers, startups, and e-commerce sellers seeking personal, reliable compliance without corporate call center friction."
  },
  {
    rank: 2,
    name: "Clear (formerly ClearTax)",
    type: "Enterprise Cloud Software & GSP Platform",
    website: "https://cleartax.in",
    publishedPrice: "Starting ~₹6,000 – ₹12,000/year (DIY Software) or ₹1,200+/month (Assisted)",
    invoiceLimits: "Tiered by annual voucher count (e.g., up to 100 / 500 / unlimited)",
    inclusions: [
      "Direct GSP cloud connector to GSTN portal",
      "Automated high-speed GSTR-2B reconciliation engine",
      "Multi-GSTIN dashboard for corporate accounts teams",
      "E-invoicing and E-way bill generation APIs"
    ],
    limitations: [
      "Self-filing packages require in-house accounting expertise",
      "Assisted customer support is often routed via ticketing queues"
    ],
    bestFit: "Tech-savvy finance teams, mid-market enterprises, and CA practitioners with in-house staff."
  },
  {
    rank: 3,
    name: "IndiaFilings",
    type: "Tech-Enabled Corporate & Legal Aggregator",
    website: "https://indiafilings.com",
    publishedPrice: "Registration from ~₹999 + GST; Return packages from ~₹5,899/year via LEDGERS",
    invoiceLimits: "Standard packages typically capped at 50–100 monthly vouchers",
    inclusions: [
      "Proprietary LEDGERS cloud accounting software access",
      "Corporate registration and secretarial services in one place",
      "Monthly GSTR-1 and GSTR-3B filings"
    ],
    limitations: [
      "Extra fees for high invoice volumes, BRS, or notice responses",
      "Standardized call center support queue during peak deadline days"
    ],
    bestFit: "New founders who need private limited company incorporation combined with initial basic GST registration."
  },
  {
    rank: 4,
    name: "Zoho Books",
    type: "Empanelled GST Invoicing & Accounting Software",
    website: "https://www.zoho.com/in/books/",
    publishedPrice: "Free tier for <₹20L turnover; Standard tiers from ₹899/month (billed annually)",
    invoiceLimits: "Varies by plan (1,000 to unlimited invoices)",
    inclusions: [
      "Government-empanelled direct GST filing software",
      "Automated e-invoicing, e-way bills, and customer payment links",
      "Built-in banking integration with major Indian banks"
    ],
    limitations: [
      "Pure DIY software — you or your accountant must do the actual filing",
      "No human tax coordinator provided for notice resolution or departmental queries"
    ],
    bestFit: "SMEs, service freelancers, and small traders who prefer managing their own invoicing and bookkeeping."
  },
  {
    rank: 5,
    name: "TaxBuddy",
    type: "App-Driven Assisted Tax Filing Platform",
    website: "https://taxbuddy.com",
    publishedPrice: "GST Registration from ~₹1,199; Return filing from ~₹699/month",
    invoiceLimits: "Low-to-medium transaction volume brackets",
    inclusions: [
      "Mobile app-based document intake and tracking",
      "Tax expert review before submission on GST portal",
      "GSTR-1 and GSTR-3B preparation"
    ],
    limitations: [
      "Primarily built for individual tax filers and micro-traders",
      "Complex manufacturing or multi-state setups require custom quotes"
    ],
    bestFit: "Freelancers, solo consultants, and independent professional service providers."
  },
  {
    rank: 6,
    name: "Zolvit (formerly Vakilsearch)",
    type: "Legal, Trademark & Compliance Aggregator",
    website: "https://zolvit.com",
    publishedPrice: "Registration ~₹999 – ₹1,499 + GST; Monthly filing from ~₹899/month",
    invoiceLimits: "Varies by selected monthly subscription plan",
    inclusions: [
      "Online document upload and ARN generation",
      "Basic monthly GSTR-1 and GSTR-3B filing",
      "Bundled corporate legal contracts and trademark filings"
    ],
    limitations: [
      "Heavy automated cross-selling of other legal services",
      "Reconciliation and notice defense charged as separate assignments"
    ],
    bestFit: "Early-stage founders seeking bundled trademark, company incorporation, and GST setup under one roof."
  },
  {
    rank: 7,
    name: "GSTHero",
    type: "Enterprise ERP & Tally Connector GSP",
    website: "https://gsthero.com",
    publishedPrice: "Custom enterprise pricing / software subscription",
    invoiceLimits: "High throughput enterprise volume",
    inclusions: [
      "Plug-and-play connector for Tally, SAP, and Microsoft Dynamics",
      "Real-time validation of supplier GSTIN status and ITC eligibility",
      "Automated WhatsApp & email reminders to defaulting vendors"
    ],
    limitations: [
      "Software only; does not provide an external accountant to file returns for you",
      "Pricing geared towards established mid-market enterprises"
    ],
    bestFit: "Manufacturing companies and distributors with an existing in-house accountant using Tally or SAP."
  },
  {
    rank: 8,
    name: "MyOnlineCA",
    type: "Online Legal & Tax Services Platform",
    website: "https://myonlineca.in",
    publishedPrice: "Registration starting ~₹999; Monthly return filing packages ~₹699 – ₹1,299/month",
    invoiceLimits: "Standard voucher bands",
    inclusions: [
      "Simple online documentation submission",
      "ARN tracking and certificate delivery",
      "Basic monthly GSTR-1 and 3B filing"
    ],
    limitations: [
      "Books reconciliation and complex BRS charged as separate add-ons",
      "Support primarily mediated via web dashboard and email"
    ],
    bestFit: "Sole proprietors and first-time business owners needing basic compliance assistance."
  },
  {
    rank: 9,
    name: "HostBooks",
    type: "Automated Cloud Accounting & GST Suite",
    website: "https://hostbooks.com",
    publishedPrice: "Software subscriptions from ~₹4,999/year; Assisted packages quoted separately",
    invoiceLimits: "Tiered by cloud voucher quota",
    inclusions: [
      "Combined billing, inventory, and GST compliance software",
      "Direct GSP filing connector",
      "Automated bank statement reconciliation module"
    ],
    limitations: [
      "Requires learning curve to navigate full cloud accounting interface",
      "Assisted filing packages have strict invoice caps"
    ],
    bestFit: "Growing distributors, wholesalers, and trading firms looking for combined inventory billing and GST software."
  },
  {
    rank: 10,
    name: "Winman & Computax",
    type: "Traditional On-Premise Software for Tax Professionals",
    website: "https://computaxonline.com",
    publishedPrice: "Annual desktop software license (~₹10,000 – ₹25,000/year)",
    invoiceLimits: "Unlimited client files for professional practices",
    inclusions: [
      "Comprehensive unified suite for Income Tax, TDS, and GST",
      "Deeply entrenched in the Indian Chartered Accountant ecosystem",
      "Fast offline data processing for heavy annual return batches (GSTR-9/9C)"
    ],
    limitations: [
      "Not meant for business owners; requires professional tax qualification to operate",
      "Traditional desktop architecture rather than modern cloud/mobile interfaces"
    ],
    bestFit: "Practicing Chartered Accountants, tax advocates, and corporate audit firms managing hundreds of client files."
  }
];

export default function TopGstServicesPage() {
  const articleUrl = "https://www.taxoras.online/blog/top-gst-service-providers-in-india";

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
        "headline": "Top 10 Best GST Services in India: Complete Review, Pricing & Comparison (2026)",
        "description":
          "An objective, evidence-based review of the top 10 GST service providers in India. Compare verified pricing, invoice limits, GSTR-2B reconciliation, assisted models, and how to select the right compliance partner.",
        "image": "https://www.taxoras.online/icon.svg",
        "datePublished": "2026-10-15T09:00:00+05:30",
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
            "name": "Top 10 Best GST Services in India",
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
            "name": "Who are the best GST service providers in India for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For small businesses, retail traders, and startups looking for end-to-end assisted filing with complete GSTR-2B ITC reconciliation and dedicated WhatsApp support, Taxoras Advisory & Compliance ranks as the #1 choice. For businesses wanting self-filing software, Clear (ClearTax) and Zoho Books are market leaders."
            }
          },
          {
            "@type": "Question",
            "name": "What is the average cost of GST return filing in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Professional assisted GST return filing typically starts from ₹799 to ₹1,499 per month for small businesses with up to 100 transactions, including both GSTR-1 and GSTR-3B with purchase matching. Self-service software tools range between ₹5,000 and ₹12,000 per year."
            }
          },
          {
            "@type": "Question",
            "name": "Is GSTR-2B purchase reconciliation included in standard GST filing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With Taxoras Advisory, monthly GSTR-2B purchase reconciliation is included in all retainer tiers to safeguard Input Tax Credit. However, many automated software aggregators either charge extra or leave the matching reconciliation as a manual task for the business owner."
            }
          },
          {
            "@type": "Question",
            "name": "Is GST registration free in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the Government of India levies ₹0 statutory fee for obtaining a GSTIN on gst.gov.in. Any fees charged by consultants (typically ₹999 to ₹1,999) cover document validation, constitution review, application drafting, Aadhaar biometric coordination, and clarification query management."
            }
          },
          {
            "@type": "Question",
            "name": "How can I quickly consult Taxoras for assisted GST return filing or notice resolution?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can connect directly with Taxoras via WhatsApp at +91 81038 19494 or call +91 81038 19494. A dedicated senior compliance accountant reviews your GST requirements, verifies previous return filings, and sets up your compliance calendar within 30 minutes."
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
        {/* Header Section */}
        <header className="bg-white border-b border-surface-border py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-text-muted mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog & Insights</Link>
              <span>/</span>
              <span className="text-white font-semibold">Top 10 Best GST Services</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Comprehensive 2026 Market Analysis & Rankings
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Top 10 Best GST Services in India: Complete Comparison, Pricing & Reviews (2026)
            </h1>

            <p className="text-base sm:text-lg text-[#D8CCC0] leading-relaxed mb-6">
              An evidence-based, transparent evaluation comparing India&apos;s leading GST return filing services, corporate aggregators, and boutique accounting firms. Compare verified pricing, invoice limits, GSTR-2B purchase matching, and how to choose the right partner.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#BCAE9F] pt-4 border-t border-surface-border">
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-amber-400" />
                <span>Researched by: <strong className="text-white">Taxoras Research Desk</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Last Updated: <strong className="text-white">October 2026</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          
          {/* Quick Table of Contents / Executive Summary */}
          <div className="bg-[#1C1510] border border-surface-border p-5 sm:p-6 rounded-2xl mb-10 shadow-md">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-400" />
              Executive Summary: The Best GST Service by Use Case
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
              <div className="p-3 rounded-xl bg-[#241A14] border border-[#3A291E]">
                <strong className="text-amber-300 block mb-1">⭐ Best Overall for MSMEs & Startups:</strong>
                <p className="text-[#DDD0C5]">
                  <strong className="text-white">Taxoras Advisory</strong> — Complete managed compliance, monthly GSTR-2B reconciliation, dedicated WhatsApp coordinator, and transparent retainers from ₹799/mo.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#241A14] border border-[#3A291E]">
                <strong className="text-amber-300 block mb-1">💻 Best for Automated Cloud Self-Filing:</strong>
                <p className="text-[#DDD0C5]">
                  <strong className="text-white">Clear (ClearTax)</strong> & <strong className="text-white">Zoho Books</strong> — Best for businesses with internal accounting staff managing e-invoicing and direct GSP bulk uploads.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Quick Comparison Table */}
          <section id="comparison-table" className="mb-14 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-surface-border pb-3">
              1. Quick Comparison: Top 10 GST Service Providers at a Glance
            </h2>
            <p className="text-sm text-[#D8CCC0] leading-relaxed">
              Before diving into individual reviews, here is how India&apos;s top GST service providers compare across service model, typical pricing, and support accessibility:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-surface-border bg-[#1B1410] shadow-md">
              <table className="w-full text-left text-xs border-collapse min-w-[640px]">
                <thead className="bg-[#241A14] text-white font-bold uppercase tracking-wider border-b border-surface-border">
                  <tr>
                    <th className="p-3.5">Rank & Provider</th>
                    <th className="p-3.5">Service Model</th>
                    <th className="p-3.5">Starting Fee</th>
                    <th className="p-3.5">GSTR-2B Matching</th>
                    <th className="p-3.5">Support Desk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border text-[#DDD0C5]">
                  {PROVIDERS.map((p) => (
                    <tr
                      key={p.name}
                      className={
                        p.rank === 1
                          ? "bg-amber-950/30 border-l-4 border-amber-500 font-medium"
                          : "hover:bg-[#201812] transition-colors"
                      }
                    >
                      <td className="p-3.5 font-bold text-white">
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-[10px] font-bold shrink-0">
                            #{p.rank}
                          </span>
                          <span>{p.name.split("(")[0]}</span>
                        </div>
                        {p.rank === 1 && (
                          <span className="text-[10px] text-amber-400 block pl-6.5 font-bold">Top Pick</span>
                        )}
                      </td>
                      <td className="p-3.5 text-[#BCAE9F]">{p.type.split("&")[0]}</td>
                      <td className="p-3.5 font-semibold text-white">
                        {p.rank === 1 ? "₹799/mo" : p.publishedPrice.split(";")[0].split("|")[0].replace("Starting ", "")}
                      </td>
                      <td className="p-3.5">
                        {p.rank === 1 ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Included
                          </span>
                        ) : p.inclusions.some((i) => i.toLowerCase().includes("reconciliation")) ? (
                          <span className="text-amber-300">Software Engine</span>
                        ) : (
                          <span className="text-[#8C7D72]">Extra Add-on</span>
                        )}
                      </td>
                      <td className="p-3.5">
                        {p.rank === 1 ? (
                          <span className="text-emerald-400 font-bold">Direct WhatsApp & Phone</span>
                        ) : (
                          <span className="text-[#BCAE9F]">Ticket / Call Center</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Detailed Reviews of Top 10 Providers */}
          <section id="detailed-reviews" className="mb-14 space-y-8">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-surface-border pb-3">
              2. In-Depth Reviews of the Top 10 Best GST Services in India
            </h2>

            <div className="space-y-8">
              {PROVIDERS.map((p) => (
                <article
                  key={p.name}
                  id={`provider-${p.rank}`}
                  className={`bg-white rounded-2xl border p-6 sm:p-7 shadow-sm transition-all ${
                    p.rank === 1
                      ? "border-amber-500/50 ring-2 ring-amber-500/20 bg-gradient-to-br from-[#1E1611] to-[#17100B]"
                      : "border-surface-border bg-[#1B1410]"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#2C211A]">
                    <div>
                      {p.badge && (
                        <span className="inline-block text-[11px] font-bold text-amber-300 bg-amber-950/60 border border-amber-600/40 px-2.5 py-0.5 rounded-full mb-2 tracking-wide">
                          {p.badge}
                        </span>
                      )}
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {p.rank}. {p.name}
                      </h3>
                      <span className="text-xs text-amber-400 font-medium">{p.type}</span>
                    </div>

                    {p.isInternal ? (
                      <Link
                        href="/services/gst-return-filing"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-hover px-4 py-2 rounded-xl transition-all shadow-md self-start sm:self-center shrink-0"
                      >
                        <span>View Service Scope</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 hover:underline self-start sm:self-center font-medium"
                      >
                        Visit Website
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  {/* Pricing & Limits Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 text-xs">
                    <div className="p-3 rounded-xl bg-[#241A14] border border-[#3A291E]">
                      <strong className="text-white block mb-1 font-semibold">Fee & Pricing Structure:</strong>
                      <span className="text-[#DDD0C5]">{p.publishedPrice}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#241A14] border border-[#3A291E]">
                      <strong className="text-white block mb-1 font-semibold">Invoice / Transaction Limits:</strong>
                      <span className="text-[#DDD0C5]">{p.invoiceLimits}</span>
                    </div>
                  </div>

                  {/* Inclusions & Considerations */}
                  <div className="space-y-3 pt-2 text-xs border-t border-[#2C211A]">
                    <div>
                      <strong className="text-emerald-400 block mb-1.5 font-bold uppercase tracking-wider text-[11px]">
                        Key Inclusions & Strengths:
                      </strong>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#FAF4EF]">
                        {p.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <strong className="text-amber-400 block mb-1.5 font-bold uppercase tracking-wider text-[11px]">
                        Considerations & Scope Boundaries:
                      </strong>
                      <ul className="space-y-1.5 text-[#D8CCC0]">
                        {p.limitations.map((lim, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span>{lim}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 text-xs bg-[#221A14] p-3 rounded-xl border border-[#3A291E]">
                      <strong className="text-white font-semibold">Best Suited For: </strong>
                      <span className="text-[#DDD0C5]">{p.bestFit}</span>
                    </div>

                    {p.isInternal && (
                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <Link
                          href="/services/gst-return-filing"
                          className="text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                        >
                          Explore Taxoras Monthly GST Return Filing Packages →
                        </Link>
                        <span className="text-surface-border">|</span>
                        <Link
                          href="/services/gst-registration"
                          className="text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                        >
                          GST Registration Documentation Checklist →
                        </Link>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 3: DIY Software vs Dedicated Managed Consultant */}
          <section id="software-vs-consultant" className="mb-14 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-surface-border pb-3">
              3. DIY Software vs Dedicated Managed GST Consultants: Which is Right for You?
            </h2>
            <p className="text-sm text-[#D8CCC0] leading-relaxed">
              Many business owners make the mistake of subscribing to expensive GST software assuming the software will automatically file their taxes. Understanding the difference between software tools and managed services is critical:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div className="bg-[#1B1410] p-6 rounded-2xl border border-surface-border shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-amber-400" />
                  <h3 className="text-base font-bold text-white">Option A: Self-Service Software (Clear, Zoho, Tally)</h3>
                </div>
                <p className="text-xs text-[#D8CCC0] leading-relaxed">
                  The software provides a platform to upload data, generate JSON payloads, and view GSTR-2B reports.
                </p>
                <div className="text-xs space-y-2 pt-2">
                  <p><strong className="text-emerald-400">Ideal When:</strong> You have an in-house full-time accountant who understands GST tax slabs, reverse charge mechanism (RCM), and debit note adjustments.</p>
                  <p><strong className="text-amber-400">The Risk:</strong> If your team inputs incorrect data or misses purchase reconciliations, the government holds you directly liable for penalties and interest.</p>
                </div>
              </div>

              <div className="bg-[#1B1410] p-6 rounded-2xl border border-amber-500/40 shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">Option B: Managed Compliance (Taxoras Advisory)</h3>
                </div>
                <p className="text-xs text-[#D8CCC0] leading-relaxed">
                  A dedicated compliance manager takes your raw digital invoices and bank statements, validates tax slabs, checks supplier filing status on GSTR-2B, and prepares and files returns for you.
                </p>
                <div className="text-xs space-y-2 pt-2">
                  <p><strong className="text-emerald-400">Ideal When:</strong> You want to focus on growing sales and business operations without spending hours every month wrestling with government portal glitches and invoice matching.</p>
                  <p><strong className="text-amber-400">The Advantage:</strong> Zero software maintenance, expert review on every invoice, and direct human phone/WhatsApp escalation.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: What to Verify Before Hiring a GST Service */}
          <section id="selection-checklist" className="mb-14 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-surface-border pb-3">
              4. 5 Critical Questions to Ask Before Hiring a GST Service in India
            </h2>
            <div className="bg-[#1B1410] rounded-2xl border border-surface-border p-6 sm:p-7 shadow-sm space-y-4">
              <ul className="space-y-3 text-xs sm:text-sm text-[#DDD0C5]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Do you perform monthly GSTR-2B purchase reconciliation?</strong> Claiming Input Tax Credit without matching supplier filings leads to automatic Section 16(4) reversal notices and 18% statutory interest.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">What is my monthly invoice voucher cap?</strong> Many portals advertise ₹499/month, but cap invoices at 25 bills, charging steep surcharges when your business volume grows.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Who handles officer clarification notices?</strong> Clarify whether drafting replies for Form GST REG-04 or ASMT-10 scrutiny notices is covered in the retainer or billed separately.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">What is the direct communication channel?</strong> Will you be talking to a dedicated accountant on WhatsApp and direct phone, or stuck in a slow support ticket queue during peak deadline days?</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Do I receive official Government ARN receipts?</strong> Always ensure you receive the official Government Acknowledgement Reference Number (ARN) within 24 hours of filing as proof of compliance.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Frequently Asked Questions */}
          <section id="frequently-asked-questions" className="mb-14 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight border-b border-surface-border pb-3">
              5. Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-3.5">
              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  Who are the best GST service providers in India for small businesses?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  For small businesses, retail traders, and startups looking for end-to-end assisted filing with complete GSTR-2B ITC reconciliation and dedicated WhatsApp support, Taxoras Advisory & Compliance ranks as the #1 choice. For businesses wanting self-filing software, Clear (ClearTax) and Zoho Books are market leaders.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  What is the average cost of GST return filing in India?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Professional assisted GST return filing typically starts from ₹799 to ₹1,499 per month for small businesses with up to 100 transactions, including both GSTR-1 and GSTR-3B with purchase matching. Self-service software tools range between ₹5,000 and ₹12,000 per year.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  Is GSTR-2B purchase reconciliation included in standard GST filing?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  With Taxoras Advisory, monthly GSTR-2B purchase reconciliation is included in all retainer tiers to safeguard Input Tax Credit. However, many automated software aggregators either charge extra or leave the matching reconciliation as a manual task for the business owner.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  Is GST registration free in India?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Yes, the Government of India levies ₹0 statutory fee for obtaining a GSTIN on gst.gov.in. Any fees charged by consultants (typically ₹999 to ₹1,999) cover document validation, constitution review, application drafting, Aadhaar biometric coordination, and clarification query management.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-amber-500/30 shadow-xs space-y-2.5">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  How can I quickly consult Taxoras for assisted GST return filing or notice resolution?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  You can connect directly with Taxoras via WhatsApp at +91 81038 19494 or call +91 81038 19494. A dedicated senior compliance accountant reviews your GST requirements, verifies previous return filings, and sets up your compliance calendar within 30 minutes.
                </p>
                <div className="pt-1">
                  <a
                    href={siteConfig.links.whatsappUrl("Top GST Providers Review & Advisory")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all"
                  >
                    <span>Instant WhatsApp Consultation (+91 81038 19494)</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: High Converting Bottom CTA Banner */}
          <section id="conclusion-cta" className="bg-gradient-to-br from-[#251A13] to-[#16100C] border border-amber-600/40 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6 text-center sm:text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                Need Stress-Free GST Compliance for Your Business?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                Partner with Taxoras Advisory — India&apos;s Dedicated Compliance Team
              </h2>
              <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
                Stop worrying about missed deadlines, portal crashes, or Input Tax Credit discrepancies. Get full GSTR-1, GSTR-3B, and 100% GSTR-2B purchase matching with dedicated WhatsApp support starting at just ₹799/month.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <Link
                href="/services/gst-return-filing"
                className="bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Explore GST Return Filing Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.links.whatsappUrl("GST Return Filing & Compliance Retainer")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 shadow-md"
              >
                <span>Instant Quote on WhatsApp</span>
              </a>
              <Link
                href="/pricing"
                className="text-amber-400 hover:text-white text-xs sm:text-sm font-semibold underline underline-offset-4 py-2"
              >
                Compare Transparent Retainers →
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
