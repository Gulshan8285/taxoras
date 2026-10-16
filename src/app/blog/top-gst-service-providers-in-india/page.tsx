import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { siteConfig } from "@/config/siteConfig";
import {
  CheckCircle2,
  XCircle,
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
  Sparkles,
  PhoneCall,
  MessageCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Top 10 GST Service Providers in India: Services, Pricing & How to Choose (2026)",
  description:
    "An objective, evidence-based review of the top 10 GST service providers in India. Compare verified pricing, invoice limits, GSTR-2B reconciliation, assisted models, and how to select the right compliance partner.",
  alternates: {
    canonical: "https://taxvedaconsultants.in/blog/top-gst-service-providers-in-india",
  },
  openGraph: {
    title: "Top 10 GST Service Providers in India: Services, Pricing & How to Choose",
    description:
      "Comprehensive 2026 market review comparing leading Indian GST filing platforms, aggregators, and boutique accounting consultancies.",
    url: "https://taxvedaconsultants.in/blog/top-gst-service-providers-in-india",
    type: "article",
    publishedTime: "2026-10-15T09:00:00+05:30",
    modifiedTime: "2026-10-17T09:00:00+05:30",
    authors: ["TaxVeda Research Desk"],
  },
};

const PROVIDERS = [
  {
    name: "Clear (formerly ClearTax)",
    type: "Enterprise Software & Cloud Platform",
    website: "https://cleartax.in",
    publishedPrice: "Starting ~₹6,000 – ₹12,000/year (DIY software) or ₹1,200+/month (Assisted)",
    invoiceLimits: "Tiered by annual invoice count (e.g., up to 100/500/unlimited)",
    inclusions: ["Direct GSP cloud connector", "GSTR-1, 3B, 9 preparation", "Automated 2B reconciliation", "Multi-GSTIN dashboard"],
    limitations: ["Self-filing plans require in-house accounting knowledge", "Assisted support often mediated via ticket queue"],
    bestFit: "Tech-savvy businesses, startups, and enterprises with internal accounts staff."
  },
  {
    name: "IndiaFilings",
    type: "Tech-Enabled Corporate & Tax Aggregator",
    website: "https://indiafilings.com",
    publishedPrice: "Registration from ~₹999 + GST; Return packages from ~₹5,899/year via LEDGERS",
    invoiceLimits: "Standard packages capped at 50–100 monthly vouchers",
    inclusions: ["LEDGERS accounting software access", "Dedicated compliance manager assignment", "GSTR-1 and GSTR-3B filings"],
    limitations: ["Add-on fees for high invoice volumes, BRS, or notice replies", "Standardized phone queue support"],
    bestFit: "Startups and small traders wanting corporate registrations and basic compliance in one place."
  },
  {
    name: "TaxBuddy",
    type: "Assisted E-Filing Platform",
    website: "https://taxbuddy.com",
    publishedPrice: "GST Registration from ~₹1,199; Return filing from ~₹699/month",
    invoiceLimits: "Low-to-medium transaction volume brackets",
    inclusions: ["App-based document upload", "Tax expert review before submission", "GSTR-1 and 3B compliance"],
    limitations: ["Primarily focused on micro businesses; complex manufacturing/multi-branch setups incur custom quotes"],
    bestFit: "Freelancers, consultants, and individual service providers."
  },
  {
    name: "Zolvit (formerly Vakilsearch)",
    type: "Legal & Compliance Aggregator",
    website: "https://zolvit.com",
    publishedPrice: "Registration ~₹999 – ₹1,499 + GST; Monthly filing from ~₹899 – ₹1,499/month",
    invoiceLimits: "Varies by selected monthly subscription plan",
    inclusions: ["Full GST registration filing", "Monthly GSTR-1 and 3B", "Annual return preparation add-on"],
    limitations: ["High cross-selling of other legal services; automated CRM follow-ups"],
    bestFit: "Early-stage founders seeking bundled trademark, company incorporation, and GST setup."
  },
  {
    name: "Corpbiz",
    type: "B2B Corporate & Industrial Legal Platform",
    website: "https://corpbiz.io",
    publishedPrice: "Quote-based / Starting ~₹1,499 for basic registrations",
    invoiceLimits: "Custom scope based on business size and entity structure",
    inclusions: ["Multi-state GST coordination", "Complex corporate compliance", "Legal advisory integration"],
    limitations: ["Higher price point than self-service portals; requires inquiry call to obtain exact pricing"],
    bestFit: "Mid-sized enterprises, manufacturing units, and multi-state distributors."
  },
  {
    name: "TaxFetch India",
    type: "Online Tax & GST Filing Portal",
    website: "https://taxfetchindia.com",
    publishedPrice: "GST Registration ~₹999; Filing starting ~₹499 – ₹999/month (low-volume)",
    invoiceLimits: "Low invoice counts (typically up to 25–50 bills/month on base tier)",
    inclusions: ["Basic GSTR-1 and GSTR-3B upload", "Challan calculation assistance"],
    limitations: ["Higher transaction volumes and complex reconciliations require quote upgrades"],
    bestFit: "Small retail shopkeepers and local single-state traders."
  },
  {
    name: "TaxVeda Advisory (Our Service)",
    type: "Dedicated Boutique Accounting & Compliance Advisory",
    website: "https://taxvedaconsultants.in",
    publishedPrice: "Proprietor Reg: ₹999; Monthly Filings: ₹799 (up to 50 bills) / ₹1,499 (up to 200 bills)",
    invoiceLimits: "Explicitly defined (Basic <50, Standard <200, Premium <500 invoices/month)",
    inclusions: ["Human accountant review", "Monthly GSTR-2B purchase reconciliation", "Direct WhatsApp & Phone desk", "Statutory late-fee risk checks"],
    limitations: ["Not a DIY instant automated software; every filing undergoes deliberate human verification"],
    bestFit: "Small & medium enterprises, growing shopkeepers, and startups wanting responsive human support without corporate call center friction."
  },
  {
    name: "MyOnlineCA",
    type: "Online Legal & Tax Services Platform",
    website: "https://myonlineca.in",
    publishedPrice: "Registration starting ~₹999; Monthly return filing packages ~₹699 – ₹1,299/month",
    invoiceLimits: "Standard voucher bands",
    inclusions: ["Online document intake", "ARN tracking", "Basic return filing support"],
    limitations: ["Notice resolution and books reconciliation charged as separate professional assignments"],
    bestFit: "Proprietorships and first-time entrepreneurs seeking straightforward compliance."
  },
  {
    name: "HostBooks",
    type: "Automated Cloud Accounting & GSP Software",
    website: "https://hostbooks.com",
    publishedPrice: "Software subscriptions from ~₹4,999/year; Assisted packages quoted separately",
    invoiceLimits: "Tiered by cloud voucher quota",
    inclusions: ["Cloud billing and e-invoicing", "Direct GSP GST returns", "Bank statement imports"],
    limitations: ["Requires basic understanding of accounting software navigation for full utilization"],
    bestFit: "Growing distributors and trading firms looking for combined billing and GST software."
  },
  {
    name: "Quicko / Masters India",
    type: "Fintech & API-Driven GST Tech Provider",
    website: "https://mastersindia.net",
    publishedPrice: "Enterprise API and e-invoice plans customized; Small business tools from ~₹5,000/year",
    invoiceLimits: "High throughput API batches",
    inclusions: ["E-way bill automation", "E-invoicing integration (IRN generation)", "Bulk ITC reconciliation"],
    limitations: ["Aimed primarily at tech-driven operations and high-volume billing companies"],
    bestFit: "E-commerce merchants, high-volume logistics firms, and tech startups."
  }
];

export default function TopGstServiceProvidersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Top 10 GST Service Providers in India: Services, Pricing and How to Choose",
        "description": "An objective, evidence-based review of the top 10 GST service providers in India for 2026.",
        "datePublished": "2026-10-15T09:00:00+05:30",
        "dateModified": "2026-10-17T09:00:00+05:30",
        "author": {
          "@type": "Organization",
          "name": "TaxVeda Research Desk",
          "url": "https://taxvedaconsultants.in"
        },
        "publisher": {
          "@type": "Organization",
          "name": "TaxVeda Advisory & Compliance",
          "logo": {
            "@type": "ImageObject",
            "url": "https://taxvedaconsultants.in/favicon.ico"
          }
        },
        "mainEntityOfPage": "https://taxvedaconsultants.in/blog/top-gst-service-providers-in-india"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the average cost of GST return filing in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For small businesses with up to 50 monthly transactions, professional GST filing generally ranges between ₹500 and ₹1,500 per month. DIY software subscriptions start around ₹4,000 to ₹8,000 per year, whereas businesses with higher invoice volumes or multi-state branches pay ₹2,500 to ₹6,000+ per month."
            }
          },
          {
            "@type": "Question",
            "name": "Is GST registration free in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the Government of India charges zero statutory fee for GST registration on the official portal (gst.gov.in). Any fees charged by service providers are solely for professional consultancy, document review, and filing assistance."
            }
          },
          {
            "@type": "Question",
            "name": "Why is GSTR-2B reconciliation critical when choosing a provider?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under Section 16(2)(aa) of the CGST Act and Rule 36(4), businesses cannot claim Input Tax Credit (ITC) unless the invoice appears in their auto-generated GSTR-2B. A service provider that does not reconcile your purchase register with GSTR-2B risks exposing your business to scrutiny notices (DRC-01B) and mandatory 18% interest penalties."
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
        {/* Article Breadcrumbs & Header */}
        <header className="bg-white border-b border-surface-border py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-text-muted mb-4">
              <Link href="/" className="hover:text-navy transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-navy transition-colors">Blog & Guides</Link>
              <span>/</span>
              <span className="text-navy font-semibold">Top GST Service Providers</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <Scale className="w-3.5 h-3.5" />
              Independent Market Research & Comparison
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight mb-4">
              Top 10 GST Service Providers in India: Services, Pricing and How to Choose
            </h1>

            <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-6">
              An evidence-based, transparent evaluation of leading Indian GST compliance platforms, corporate aggregators, and boutique accounting firms for 2026.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted pt-4 border-t border-surface-border">
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-teal" />
                <span>Researched by: <strong className="text-navy">TaxVeda Research Desk</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-teal" />
                <span>Last Updated: <strong className="text-navy">October 2026</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal" />
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          
          {/* Transparency & Commercial Disclosure Alert */}
          <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-xl mb-10 text-xs sm:text-sm text-amber-950 leading-relaxed">
            <p className="font-bold flex items-center gap-1.5 text-amber-900 mb-1">
              <Info className="w-4 h-4 text-amber-600 shrink-0" />
              Research Transparency & Commercial Disclosure
            </p>
            <p>
              This guide was produced through qualitative review of publicly available pricing, service features, and user terms published by each provider as of October 2026. <strong>TaxVeda Advisory</strong> is included as provider #7 in this list as a boutique consultancy option. We do not accept sponsorship payments from competitors, nor do we fabricate artificial market leadership or review scores. All comparative details are presented factually to help Indian business owners make an informed decision.
            </p>
          </div>

          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="bg-white rounded-2xl border border-surface-border p-6 mb-12 shadow-xs">
            <h2 className="text-sm font-bold text-navy uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-teal" />
              Table of Contents
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-text-main">
              <li>
                <a href="#why-seek-support" className="text-brand-blue hover:underline">1. Why Indian Businesses Seek GST Support</a>
              </li>
              <li>
                <a href="#evaluation-criteria" className="text-brand-blue hover:underline">2. How to Evaluate a GST Service Provider</a>
              </li>
              <li>
                <a href="#provider-comparison" className="text-brand-blue hover:underline">3. Comparison of 10 Verified Providers</a>
              </li>
              <li>
                <a href="#pricing-matrix" className="text-brand-blue hover:underline">4. Public Pricing & Invoice Limits Matrix</a>
              </li>
              <li>
                <a href="#service-models" className="text-brand-blue hover:underline">5. Pros & Cons of the 4 Service Models</a>
              </li>
              <li>
                <a href="#selection-checklist" className="text-brand-blue hover:underline">6. Small Business Selection Checklist</a>
              </li>
              <li>
                <a href="#frequently-asked-questions" className="text-brand-blue hover:underline">7. Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#conclusion-cta" className="text-brand-blue hover:underline">8. Conclusion & Getting Started</a>
              </li>
            </ul>
          </nav>

          {/* Section 1: Why Businesses Seek GST Support */}
          <section id="why-seek-support" className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-navy tracking-tight border-b border-surface-border pb-3">
              1. Why Indian Businesses Seek GST Support
            </h2>
            <p className="text-sm sm:text-base text-text-main leading-relaxed">
              Since the introduction of the Goods and Services Tax in July 2017, the Indian indirect tax architecture has transformed from fragmented state-level taxes into a unified digital compliance regime. However, operating within this system presents significant operational challenges for micro, small, and medium enterprises (MSMEs).
            </p>
            <p className="text-sm sm:text-base text-text-main leading-relaxed">
              Between monthly outward return filings (<strong>GSTR-1</strong>), summary tax payments (<strong>GSTR-3B</strong>), Input Tax Credit matching under <strong>Rule 36(4)</strong>, and automated scrutiny notices (<strong>DRC-01B</strong> for sales discrepancies and <strong>DRC-01C</strong> for ITC mismatches), falling behind on GST deadlines creates compounding consequences:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs">
                <span className="text-xs font-bold text-rose-600 block mb-1">Statutory Penalties</span>
                <p className="text-xs text-text-muted">Late fees of up to ₹50/day (₹20/day for nil returns) plus 18% mandatory annual interest on delayed cash tax liability.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs">
                <span className="text-xs font-bold text-rose-600 block mb-1">Blocked E-Way Bills</span>
                <p className="text-xs text-text-muted">Failing to file GSTR-3B for two consecutive periods automatically blocks e-way bill generation, halting goods transport.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs">
                <span className="text-xs font-bold text-rose-600 block mb-1">Customer ITC Disputes</span>
                <p className="text-xs text-text-muted">If your GSTR-1 is delayed, B2B buyers cannot claim ITC in GSTR-2B, leading to withheld vendor payments.</p>
              </div>
            </div>
            <p className="text-sm text-text-main leading-relaxed pt-2">
              As a result, most businesses outsource their compliance rather than struggling with government portal glitches or hiring a dedicated in-house accountant at ₹25,000+ per month.
            </p>
          </section>

          {/* Section 2: Evaluation Criteria */}
          <section id="evaluation-criteria" className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-navy tracking-tight border-b border-surface-border pb-3">
              2. How to Evaluate a GST Service Provider
            </h2>
            <p className="text-sm sm:text-base text-text-main leading-relaxed">
              When evaluating a GST service provider, advertised headline prices can be misleading. A quote of "₹499/month" frequently excludes purchase reconciliation or limits filings to 10 invoices. We recommend evaluating providers using these six foundational criteria:
            </p>
            <div className="space-y-3 pt-2">
              <div className="bg-white p-4 rounded-xl border border-surface-border flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-teal-light text-teal flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                <div>
                  <h3 className="text-sm font-bold text-navy">Service Scope & Completeness</h3>
                  <p className="text-xs text-text-muted mt-0.5">Does the provider file both GSTR-1 and GSTR-3B? Do they reconcile GSTR-2B with your actual purchase bills to maximize legitimate ITC claims?</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-surface-border flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-teal-light text-teal flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                <div>
                  <h3 className="text-sm font-bold text-navy">Transparent Invoice Limits</h3>
                  <p className="text-xs text-text-muted mt-0.5">Does the plan support your monthly transaction volume (e.g., 50, 200, or 500 sales and purchase vouchers) without surprise extra billing per line item?</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-surface-border flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-teal-light text-teal flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                <div>
                  <h3 className="text-sm font-bold text-navy">Support Accessibility & Channel</h3>
                  <p className="text-xs text-text-muted mt-0.5">Can you speak with a real human via phone or WhatsApp when due dates approach, or are you forced to wait through automated bot tickets?</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-surface-border flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-teal-light text-teal flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</div>
                <div>
                  <h3 className="text-sm font-bold text-navy">Document Security & Confidentiality</h3>
                  <p className="text-xs text-text-muted mt-0.5">How are your bank statements, sales registers, and Aadhaar/PAN documents stored? Ensure adherence to the Digital Personal Data Protection (DPDP) standards.</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-surface-border flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-teal-light text-teal flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">5</div>
                <div>
                  <h3 className="text-sm font-bold text-navy">Notice & Scrutiny Support</h3>
                  <p className="text-xs text-text-muted mt-0.5">What happens if the GST officer issues a discrepancy notice (ASMT-10 or DRC-01B)? Does the firm assist in drafting explanations, or do they abandon you?</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-surface-border flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-lg bg-teal-light text-teal flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">6</div>
                <div>
                  <h3 className="text-sm font-bold text-navy">Business Scale Alignment</h3>
                  <p className="text-xs text-text-muted mt-0.5">A solo proprietor doesn't need enterprise ERP connectors, while a 10-branch distributor cannot rely on a freelance part-time accountant.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Comparison of 10 Verified Providers */}
          <section id="provider-comparison" className="mb-12 space-y-6">
            <h2 className="text-2xl font-bold text-navy tracking-tight border-b border-surface-border pb-3">
              3. Detailed Analysis of 10 Verified Providers
            </h2>
            <p className="text-sm text-text-main leading-relaxed">
              Below is an objective examination of ten verified GST compliance providers active in India.
            </p>

            <div className="space-y-6">
              {PROVIDERS.map((p, idx) => (
                <article
                  key={p.name}
                  className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-xs ${
                    p.name.includes("TaxVeda")
                      ? "border-teal/60 ring-2 ring-teal/20"
                      : "border-surface-border"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-surface-border">
                    <div>
                      <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Provider #{idx + 1}</span>
                      <h3 className="text-lg sm:text-xl font-bold text-navy">{p.name}</h3>
                      <span className="text-xs text-teal font-medium">{p.type}</span>
                    </div>
                    <a
                      href={p.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-brand-blue hover:underline self-start sm:self-center font-medium"
                    >
                      Visit Public Website
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 text-xs">
                    <div>
                      <strong className="text-navy block mb-0.5">Published Fee Range:</strong>
                      <span className="text-text-muted">{p.publishedPrice}</span>
                    </div>
                    <div>
                      <strong className="text-navy block mb-0.5">Transaction / Invoice Limits:</strong>
                      <span className="text-text-muted">{p.invoiceLimits}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 text-xs border-t border-surface-border">
                    <div>
                      <strong className="text-emerald-700 block mb-1">Key Inclusions & Strengths:</strong>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-text-main">
                        {p.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <strong className="text-amber-800 block mb-1">Considerations & Limitations:</strong>
                      <ul className="text-text-muted space-y-1">
                        {p.limitations.map((lim, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span>{lim}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <strong className="text-navy font-semibold">Best Fit For: </strong>
                      <span className="text-text-muted">{p.bestFit}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 4: Public Pricing & Comparison Matrix */}
          <section id="pricing-matrix" className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-navy tracking-tight border-b border-surface-border pb-3">
              4. Pricing Comparison & Service Models Matrix
            </h2>
            <p className="text-sm text-text-main leading-relaxed">
              The table below summarizes typical entry pricing across these providers for small enterprises (subject to individual business volume and active promotional terms):
            </p>

            <div className="overflow-x-auto rounded-2xl border border-surface-border bg-white shadow-xs">
              <table className="w-full text-left text-xs border-collapse min-w-[600px]">
                <thead className="bg-slate-50 text-navy font-bold uppercase tracking-wider border-b border-surface-border">
                  <tr>
                    <th className="p-3">Provider</th>
                    <th className="p-3">GST Registration</th>
                    <th className="p-3">Monthly Returns</th>
                    <th className="p-3">GSTR-2B Matching</th>
                    <th className="p-3">Support Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border text-text-muted">
                  <tr>
                    <td className="p-3 font-semibold text-navy">Clear (ClearTax)</td>
                    <td className="p-3">₹1,499+</td>
                    <td className="p-3">₹6,000–₹12,000/yr (DIY)</td>
                    <td className="p-3 text-emerald-600 font-semibold">Automated Software</td>
                    <td className="p-3">Helpdesk / Email</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-navy">IndiaFilings</td>
                    <td className="p-3">₹999+</td>
                    <td className="p-3">From ~₹5,899/yr</td>
                    <td className="p-3 text-amber-600 font-medium">Via LEDGERS add-on</td>
                    <td className="p-3">Account Manager / Phone</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-navy">TaxBuddy</td>
                    <td className="p-3">₹1,199</td>
                    <td className="p-3">From ~₹699/mo</td>
                    <td className="p-3 text-emerald-600 font-medium">Expert Review</td>
                    <td className="p-3">Mobile App / Chat</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-navy">Zolvit (Vakilsearch)</td>
                    <td className="p-3">₹999+</td>
                    <td className="p-3">From ~₹899/mo</td>
                    <td className="p-3 text-text-muted">Basic Plan Dependent</td>
                    <td className="p-3">Portal / Phone</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-navy">TaxFetch India</td>
                    <td className="p-3">₹999</td>
                    <td className="p-3">From ~₹499/mo</td>
                    <td className="p-3 text-amber-600 font-medium">Low Voucher Limit</td>
                    <td className="p-3">WhatsApp / Call</td>
                  </tr>
                  <tr className="bg-teal-light/40">
                    <td className="p-3 font-bold text-navy">TaxVeda Advisory</td>
                    <td className="p-3 font-semibold text-navy">₹999 (Proprietor)</td>
                    <td className="p-3 font-semibold text-navy">₹799/mo (&lt;50 bills)</td>
                    <td className="p-3 text-teal font-bold">Included in all tiers</td>
                    <td className="p-3 font-semibold text-navy">Direct WhatsApp & Phone</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-text-muted italic pt-1">
              *Note: Applicable taxes (18% GST) and official government challans are separate across all providers. Check individual terms on provider websites before purchasing.
            </p>
          </section>

          {/* Section 5: Pros & Cons of 4 Service Models */}
          <section id="service-models" className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-navy tracking-tight border-b border-surface-border pb-3">
              5. The 4 Service Delivery Models: Pros & Cons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs space-y-2">
                <h3 className="text-base font-bold text-navy">Model A: DIY Cloud Software</h3>
                <p className="text-xs text-text-muted">Examples: Clear, HostBooks, Masters India.</p>
                <div className="text-xs space-y-1.5 pt-2">
                  <p><strong className="text-emerald-700">Pros:</strong> Complete control, instantaneous data sync, lower cost at scale.</p>
                  <p><strong className="text-rose-700">Cons:</strong> Requires accounting proficiency; errors in HSN codes or reverse charge are entirely your legal responsibility.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs space-y-2">
                <h3 className="text-base font-bold text-navy">Model B: Tech-Aggregator Platforms</h3>
                <p className="text-xs text-text-muted">Examples: IndiaFilings, Zolvit, Corpbiz.</p>
                <div className="text-xs space-y-1.5 pt-2">
                  <p><strong className="text-emerald-700">Pros:</strong> One-stop shop for trademarks, company incorporation, and taxation.</p>
                  <p><strong className="text-rose-700">Cons:</strong> Call-center support tiers, automated ticketing, high turnover of junior relationship managers.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs space-y-2">
                <h3 className="text-base font-bold text-navy">Model C: Boutique Compliance Firms</h3>
                <p className="text-xs text-text-muted">Examples: TaxVeda Advisory.</p>
                <div className="text-xs space-y-1.5 pt-2">
                  <p><strong className="text-emerald-700">Pros:</strong> Dedicated human review, direct WhatsApp/phone communication, transparent invoice counts, tailored advice.</p>
                  <p><strong className="text-rose-700">Cons:</strong> Not suited for multi-national conglomerates with thousands of daily automated API transactions.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs space-y-2">
                <h3 className="text-base font-bold text-navy">Model D: Traditional Local Practitioner</h3>
                <p className="text-xs text-text-muted">Examples: Local Chartered Accountants or tax advocates.</p>
                <div className="text-xs space-y-1.5 pt-2">
                  <p><strong className="text-emerald-700">Pros:</strong> In-person meeting capability, physical document collection in your local market.</p>
                  <p><strong className="text-rose-700">Cons:</strong> Higher fees (₹2,500–₹5,000/mo), slower digital turnaround, lack of automated software dashboards.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Selection Checklist */}
          <section id="selection-checklist" className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-navy tracking-tight border-b border-surface-border pb-3">
              6. Checklist for Selecting a GST Service Provider
            </h2>
            <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-xs space-y-3">
              <p className="text-xs sm:text-sm text-text-main font-semibold">
                Before paying an annual subscription or retainer, ask any provider these five essential questions:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-text-muted">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span><strong>Do you reconcile GSTR-2B before every GSTR-3B filing?</strong> Without this, you will either forfeit valid ITC or claim ineligible credit and attract notices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span><strong>What is my monthly invoice limit?</strong> Get exact written clarity on sales invoices and purchase vouchers included in the quote.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span><strong>Who handles notices from the GST department?</strong> Clarify whether clarification replies (ASMT-10, DRC-01) are included or billed separately.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span><strong>What is your direct escalation channel?</strong> Ensure you have a WhatsApp or direct phone number rather than just a web ticket queue.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span><strong>How do I receive proof of filing?</strong> Will you receive the official Government ARN acknowledgement receipt within 24 hours of filing?</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7: FAQs */}
          <section id="frequently-asked-questions" className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold text-navy tracking-tight border-b border-surface-border pb-3">
              7. Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-navy mb-1.5">What is the average cost of GST return filing in India?</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  For small businesses with up to 50 transactions a month, professional assisted GST return filing typically ranges between ₹500 and ₹1,500 per month. Software tools start at around ₹5,000/year for self-filing, whereas high-volume distributors and companies pay ₹2,500 to ₹6,000+ monthly.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-navy mb-1.5">Is GST registration completely free in India?</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Yes, the Government of India levies ₹0 statutory fee for obtaining a GSTIN on the official GST Portal (<a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-brand-blue underline">gst.gov.in</a>). Any fees charged by consultancies or online platforms are purely for professional documentation, application drafting, and clarification management.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-navy mb-1.5">What happens if my GST returns are filed with errors?</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Under the GST law, returns once filed cannot be deleted or re-submitted; corrections must be made through amendments in subsequent returns (e.g. Table 9 or 10 of GSTR-1). Unreconciled differences between GSTR-1 and GSTR-3B trigger automated notices under Rule 88C (Form DRC-01B), requiring tax payment or written explanation within 7 days.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Conclusion & CTA */}
          <section id="conclusion-cta" className="bg-gradient-to-br from-navy to-navy-dark text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6 text-center sm:text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-teal bg-teal/20 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                Need Honest, Affordable GST Assistance?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Take the Stress Out of Monthly GST Compliance
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you need a new GST registration or worry-free monthly GSTR-1 and 3B filings with complete GSTR-2B purchase matching, TaxVeda Advisory provides dedicated human support starting at ₹799/month.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <Link
                href="/services/gst-return-filing"
                className="bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>View GST Return Filing Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/gst-registration"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all inline-flex items-center gap-2"
              >
                <span>GST Registration Guide</span>
              </Link>
              <Link
                href="/pricing"
                className="text-teal hover:text-white text-xs sm:text-sm font-semibold underline underline-offset-4 py-2"
              >
                Compare Transparent Pricing Tiers →
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
