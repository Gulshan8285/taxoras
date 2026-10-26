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
  Building,
  PhoneCall,
  Award,
  Zap,
  MapPin,
  Sparkles,
  AlertTriangle,
  Scale
} from "lucide-react";

export const metadata: Metadata = {
  title: "Top 10 Best GST Service Providers in Mumbai: 2026 Review & Pricing",
  description:
    "Authoritative 2026 ranking of the top 10 GST service providers and consultants in Mumbai for traders, media agencies, startups & MSMEs. Compare verified pricing, Maharashtra PT coordination, GSTR-2B matching, and why Taxoras ranks #1.",
  keywords: [
    "top 10 gst service providers in mumbai",
    "best gst consultant in mumbai",
    "gst return filing mumbai",
    "gst registration mumbai andheri bkc",
    "affordable gst services mumbai",
    "chartered accountant for gst in mumbai",
    "gst consultant thane navi mumbai",
    "maharashtra gst filing service"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/top-gst-service-providers-in-mumbai",
  },
  openGraph: {
    title: "Top 10 Best GST Service Providers in Mumbai (2026 Review & Pricing)",
    description:
      "A complete guide comparing the top 10 GST consultants, CA firms, and filing platforms in Mumbai. Compare prices, Maharashtra PT support, and assisted filing.",
    url: "https://www.taxoras.online/blog/top-gst-service-providers-in-mumbai",
    type: "article",
    publishedTime: "2026-10-27T09:00:00+05:30",
    modifiedTime: "2026-10-27T09:30:00+05:30",
    authors: ["Taxoras Mumbai Research Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 10 Best GST Service Providers in Mumbai (2026)",
    description: "Compare verified pricing, Maharashtra PT support, and filing services for Mumbai businesses.",
    images: ["https://www.taxoras.online/opengraph-image"],
  },
};

interface MumbaiProviderItem {
  rank: number;
  name: string;
  badge?: string;
  type: string;
  location: string;
  website: string;
  isInternal?: boolean;
  publishedPrice: string;
  turnaroundTime: string;
  inclusions: string[];
  limitations: string[];
  bestFit: string;
}

const MUMBAI_PROVIDERS: MumbaiProviderItem[] = [
  {
    rank: 1,
    name: "Taxoras Advisory & Compliance",
    badge: "⭐ #1 Editor's Choice — Best for Mumbai MSMEs, Traders & Media Freelancers",
    type: "Dedicated Managed Accounting & GST Compliance Consultancy",
    location: "Pan-Mumbai (BKC, Andheri, Lower Parel, Thane, Navi Mumbai)",
    website: "https://www.taxoras.online",
    isInternal: true,
    publishedPrice: "Proprietor Reg: ₹999 | Monthly Retainers from ₹799/mo (<50 bills) to ₹1,499/mo (<200 bills)",
    turnaroundTime: "24–48 hours onboarding; monthly filings completed 3–5 days before statutory deadlines",
    inclusions: [
      "100% human Chartered Accountant review on all inward and outward invoices",
      "Mandatory monthly GSTR-2B purchase & Input Tax Credit (ITC) reconciliation",
      "Maharashtra Professional Tax (PTRC / PTEC) registration & monthly challan coordination",
      "Direct WhatsApp and phone access to a designated senior compliance manager",
      "Media agency, e-commerce, and B2B wholesale invoice matching",
      "Assistance with department clarification notices (REG-03/04 & ASMT-10 scrutiny)"
    ],
    limitations: [
      "Filings undergo rigorous human verification rather than instant automated 1-click dump",
      "Requires sales invoices and purchase bills shared digitally by the 5th of each month"
    ],
    bestFit: "Mumbai wholesale traders, media production houses, creative freelancers in Andheri/Bandra, and corporate agencies in BKC seeking dedicated, responsive compliance without call center queues."
  },
  {
    rank: 2,
    name: "Clear (formerly ClearTax)",
    type: "Enterprise SaaS & Self-Service Filing Software",
    location: "National Cloud Platform (Offices in Mumbai & Bengaluru)",
    website: "https://cleartax.in",
    publishedPrice: "DIY Software from ₹4,999/yr; Assisted CA Filing from ₹1,200 to ₹3,500/month",
    turnaroundTime: "Instant software computation; 2 to 4 working days for CA assisted review",
    inclusions: [
      "Automated Tally, Busy, and ERP Excel integrations",
      "GSTR-1, GSTR-3B auto-population engine",
      "E-invoicing and E-way bill generation APIs",
      "Basic AI matching for vendor discrepancies"
    ],
    limitations: [
      "Assisted CA plan requires higher subscription tiers",
      "Communication routed via central helpdesk ticketing rather than direct WhatsApp accountant",
      "Add-on charges apply for notice replies and past return rectifications"
    ],
    bestFit: "Mid-sized to large enterprises with in-house accountants needing high-speed bulk ingestion software."
  },
  {
    rank: 3,
    name: "IndiaFilings (Mumbai Desk)",
    type: "Online Legal & Financial Services Aggregator",
    location: "Bandra Kurla Complex (BKC) & Andheri East, Mumbai",
    website: "https://www.indiafilings.com",
    publishedPrice: "Registration from ₹1,499; Basic Monthly Retainers from ₹1,000 to ₹2,500/month",
    turnaroundTime: "3 to 7 working days depending on state officer processing",
    inclusions: [
      "GST registration application on gst.gov.in",
      "LEDGERS cloud accounting software access",
      "Monthly return preparation and submission",
      "Standard document checklist review"
    ],
    limitations: [
      "GSTR-2B reconciliation capped at low transaction thresholds in base plans",
      "Frequent relationship manager turnover on entry-level plans",
      "Government query responses often incur additional legal draft fees"
    ],
    bestFit: "Startups seeking unified company incorporation and initial statutory registration."
  },
  {
    rank: 4,
    name: "Vakilsearch (Zolvit)",
    type: "Legaltech & Compliance Aggregator",
    location: "Remote Digital Desk (Mumbai Operations)",
    website: "https://vakilsearch.com",
    publishedPrice: "GST Registration from ₹999 + Govt Fees; Retainers from ₹1,199/month",
    turnaroundTime: "4 to 8 working days",
    inclusions: [
      "TRN generation and REG-01 preparation",
      "Monthly return filing assistance",
      "Basic ledger dashboard"
    ],
    limitations: [
      "Heavy sales cross-selling for trademark and secretarial retainers",
      "Limited customized support for Maharashtra-specific PT coordination",
      "Delayed resolution during peak tax deadline weeks"
    ],
    bestFit: "Early-stage single-founder businesses needing basic legal filing packages."
  },
  {
    rank: 5,
    name: "TaxBuddy",
    type: "Fintech Tax Filing Platform",
    location: "Mumbai (Andheri West)",
    website: "https://www.taxbuddy.com",
    publishedPrice: "Individual ITR from ₹799; GST Filing from ₹1,299/month",
    turnaroundTime: "48 to 72 hours",
    inclusions: [
      "Assisted return filing by tax experts",
      "Chatbot and mobile app document intake",
      "Income tax and GST notice assistance"
    ],
    limitations: [
      "Primary expertise centered on personal income tax rather than complex B2B GST reconciliations",
      "Limited inventory and supply chain e-invoicing support"
    ],
    bestFit: "Salaried individuals with freelance income and micro service providers."
  },
  {
    rank: 6,
    name: "Traditional Fort & Nariman Point CA Firms",
    type: "Boutique Chartered Accountancy Practices",
    location: "South Mumbai (Fort, Nariman Point, Marine Lines)",
    website: "Offline / Private Practices",
    publishedPrice: "Retainers typically range from ₹5,000 to ₹15,000/month",
    turnaroundTime: "Varies by practice capacity",
    inclusions: [
      "Comprehensive statutory audit and tax audit",
      "Direct partner-level strategic consultation",
      "Representation before Mumbai GST Commissionerate"
    ],
    limitations: [
      "Prohibitively expensive for small retail shops, freelancers, and early-stage startups",
      "Relies on physical paper vouchers and visits rather than seamless cloud WhatsApp intake"
    ],
    bestFit: "Established corporations and manufacturing firms with turnover exceeding ₹10 Crores."
  },
  {
    rank: 7,
    name: "MyOnlineCA",
    type: "Online Business Registration Portal",
    location: "Pan-India Digital Desk",
    website: "https://myonlineca.in",
    publishedPrice: "GST Registration from ₹1,499; Quarterly packages from ₹3,000",
    turnaroundTime: "5 to 7 working days",
    inclusions: [
      "Online document submission",
      "GST certificate delivery",
      "Email support"
    ],
    limitations: [
      "No dedicated monthly bookkeeping or bank reconciliation in base packages",
      "Limited support for GSTR-2B discrepancy follow-ups with suppliers"
    ],
    bestFit: "Businesses requiring a one-time GST number application."
  },
  {
    rank: 8,
    name: "Kanakkupillai",
    type: "Legal & Secretarial Services Provider",
    location: "Digital Delivery across Mumbai",
    website: "https://www.kanakkupillai.com",
    publishedPrice: "Filing packages from ₹1,200/month",
    turnaroundTime: "3 to 6 working days",
    inclusions: [
      "GSTR-1 & 3B return preparation",
      "Challan generation",
      "Basic compliance calendar"
    ],
    limitations: [
      "Headquartered in South India with fewer local Mumbai on-ground commercial connections",
      "Slow response times around the 20th of the month"
    ],
    bestFit: "Micro businesses seeking standard compliance checklists."
  },
  {
    rank: 9,
    name: "Wazzeer",
    type: "Smart Legal & Accounting Platform for Startups",
    location: "Online / Mumbai Hub",
    website: "https://wazzeer.com",
    publishedPrice: "Custom quotes from ₹2,500/month",
    turnaroundTime: "2 to 4 working days",
    inclusions: [
      "Startup corporate governance",
      "GST and ROC filing coordination",
      "Dedicated legal counsel"
    ],
    limitations: [
      "Higher minimum pricing threshold compared to dedicated accounting boutiques",
      "Not suited for simple retail shopkeepers or small distributors"
    ],
    bestFit: "Venture-funded tech startups and cross-border businesses."
  },
  {
    rank: 10,
    name: "FinTax Corporate Advisory",
    type: "Regional Mumbai Tax Practice",
    location: "Dadar & Thane West",
    website: "Private Portal",
    publishedPrice: "From ₹2,000/month",
    turnaroundTime: "3 to 5 working days",
    inclusions: [
      "Monthly GSTR-3B filing",
      "Tally data entry assistance",
      "Local Maharashtra tax consultation"
    ],
    limitations: [
      "Limited tech automation; relies heavily on manual email Excel sheets",
      "Support hours strictly limited to standard offline business timings"
    ],
    bestFit: "Traditional family-owned businesses in central Mumbai."
  }
];

export default function TopGstServiceProvidersInMumbaiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.taxoras.online/blog/top-gst-service-providers-in-mumbai#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.taxoras.online/blog/top-gst-service-providers-in-mumbai"
        },
        "headline": "Top 10 Best GST Service Providers in Mumbai: 2026 Review & Pricing",
        "description": "Comprehensive comparative evaluation of Mumbai's leading GST consultants, CA practices, and tech aggregators for small businesses, traders, and media agencies.",
        "author": {
          "@type": "Organization",
          "name": "Taxoras Mumbai Research Desk",
          "url": "https://www.taxoras.online"
        },
        "publisher": {
          "@type": "Organization",
          "name": siteConfig.businessName,
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.taxoras.online/icon.svg"
          }
        },
        "datePublished": "2026-10-27T09:00:00+05:30",
        "dateModified": "2026-10-27T09:30:00+05:30",
        "mainEntityOfPage": "https://www.taxoras.online/blog/top-gst-service-providers-in-mumbai"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.taxoras.online/blog/top-gst-service-providers-in-mumbai#breadcrumb",
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
            "name": "Blog",
            "item": "https://www.taxoras.online/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Top GST Service Providers Mumbai",
            "item": "https://www.taxoras.online/blog/top-gst-service-providers-in-mumbai"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.taxoras.online/blog/top-gst-service-providers-in-mumbai#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does GST return filing cost in Mumbai per month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Mumbai, monthly GST return filing retainers typically range from ₹799/month (Taxoras all-inclusive with 100% GSTR-2B purchase matching) up to ₹5,000–₹15,000/month for traditional South Mumbai CA firms. Aggregator platforms charge ₹1,200–₹2,500/month but often exclude purchase reconciliations."
            }
          },
          {
            "@type": "Question",
            "name": "Do Mumbai businesses need Professional Tax (PT) registration alongside GST?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Maharashtra mandates Professional Tax registration under two forms: PTEC (for the business entity/proprietor) and PTRC (for deducting tax from salaried staff). Taxoras coordinates PTRC and PTEC filings alongside monthly GST retainers."
            }
          },
          {
            "@type": "Question",
            "name": "Can freelance media professionals in Andheri register for GST easily?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Freelancers earning over ₹20 Lakhs annually (or doing inter-state client contracts) require GST registration. Taxoras completes the process digitally with Aadhaar authentication in 3 to 7 working days."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Article Breadcrumb */}
        <div className="bg-white border-b border-surface-border py-3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-text-muted">
              <Link href="/" className="hover:text-navy transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-navy transition-colors">Blog</Link>
              <span>/</span>
              <span className="font-semibold text-navy">Top GST Service Providers Mumbai</span>
            </nav>
          </div>
        </div>

        {/* Hero Header */}
        <header className="bg-white border-b border-surface-border py-10 sm:py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                2026 Mumbai Commercial Market Review
              </span>
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> October 2026
              </span>
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 12 min read
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Top 10 Best GST Service Providers in Mumbai: 2026 Review & Pricing Comparison
            </h1>

            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-4xl">
              Mumbai is India’s indirect taxation powerhouse, contributing over 24% of the nation’s total GST collections. Whether you are a wholesale distributor in Crawford Market, an ad agency in Bandra, or an e-commerce brand in Andheri, finding an affordable, error-free GST partner is vital. Here is the verified ranking of Mumbai’s top 10 compliance providers.
            </p>
          </div>
        </header>

        {/* Article Body */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
          
          {/* Quick Summary Callout */}
          <section className="bg-blue-50/70 rounded-2xl border border-blue-200 p-6 sm:p-8 space-y-3">
            <h2 className="text-base font-bold text-navy flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-blue" />
              <span>Key Takeaway: The Mumbai GST Landscape in 2026</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              While traditional South Mumbai CA firms charge ₹5,000 to ₹15,000/month, and faceless legaltech platforms charge hidden fees for basic purchase reconciliations, <strong>Taxoras Advisory & Compliance</strong> ranks #1 by delivering 100% Chartered Accountant review, GSTR-2B purchase matching, and Maharashtra Professional Tax coordination at a transparent fixed fee of <strong>₹799 to ₹1,499/month</strong>.
            </p>
          </section>

          {/* Detailed Provider List */}
          <div className="space-y-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy pb-3 border-b border-surface-border">
              Detailed Review of Mumbai’s Top 10 GST Providers
            </h2>

            {MUMBAI_PROVIDERS.map((prov) => (
              <article
                key={prov.rank}
                className={`rounded-2xl border p-6 sm:p-8 space-y-4 transition-all ${
                  prov.isInternal
                    ? "bg-white border-amber-400 shadow-md ring-1 ring-amber-400/30"
                    : "bg-white border-surface-border shadow-xs"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center shrink-0">
                      #{prov.rank}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-navy flex items-center gap-2">
                        <span>{prov.name}</span>
                      </h3>
                      <span className="text-xs text-text-muted">{prov.type} • {prov.location}</span>
                    </div>
                  </div>

                  {prov.badge && (
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full self-start sm:self-auto">
                      {prov.badge}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-navy block mb-1">Pricing Structure:</span>
                    <span className="text-text-muted">{prov.publishedPrice}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-navy block mb-1">Turnaround Time:</span>
                    <span className="text-text-muted">{prov.turnaroundTime}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <strong className="text-navy block">Key Advantages & Inclusions:</strong>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-text-muted">
                    {prov.inclusions.map((inc, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-100 text-xs text-amber-900">
                  <strong>Best Suited For: </strong>{prov.bestFit}
                </div>

                {prov.isInternal && (
                  <div className="pt-3 border-t border-surface-border flex flex-wrap items-center gap-3">
                    <Link
                      href="/locations/mumbai/gst-return-filing"
                      className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all inline-flex items-center gap-1.5"
                    >
                      <span>Explore Mumbai GST Filing Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={siteConfig.links.whatsappUrl("GST Return Filing", "Mumbai")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>WhatsApp Mumbai Desk</span>
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Maharashtra Specific Compliance Section */}
          <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-navy flex items-center gap-2">
              <Building className="w-5 h-5 text-brand-blue" />
              <span>Maharashtra GST & Professional Tax (PT) Specifics</span>
            </h2>
            <div className="text-xs sm:text-sm text-text-muted space-y-3 leading-relaxed">
              <p>
                Operating in Mumbai involves dual compliance: Central & Maharashtra State GST via the common portal (<a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-brand-blue underline">gst.gov.in</a>), and the Maharashtra State Tax on Professions, Trades, Callings and Employments Act administered via Mahagst (<a href="https://mahagst.gov.in" target="_blank" rel="noopener noreferrer" className="text-brand-blue underline">mahagst.gov.in</a>).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <h4 className="font-bold text-navy">PTEC (Professional Tax Enrollment)</h4>
                  <p className="text-xs text-text-muted">Mandatory for the company/firm itself and directors/proprietor, with an annual payment of ₹2,500.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <h4 className="font-bold text-navy">PTRC (Professional Tax Registration)</h4>
                  <p className="text-xs text-text-muted">Mandatory if you employ staff earning over ₹10,000/month, requiring monthly withholding challan returns.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-navy flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-brand-blue" />
              <span>Frequently Asked Questions for Mumbai Businesses</span>
            </h2>
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <h4 className="font-bold text-navy">What is the monthly GST late fee in Maharashtra?</h4>
                <p className="text-text-muted">Late fee under Section 47 is ₹50 per day (₹25 CGST + ₹25 SGST) for taxable returns and ₹20 per day for Nil returns, capped at ₹5,000 per return.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <h4 className="font-bold text-navy">How does Taxoras help avoid GST DRC-01B and DRC-01C notices?</h4>
                <p className="text-text-muted">We reconcile your outward sales vs GSTR-1, and 100% of your supplier invoices in GSTR-2B before filing Form GSTR-3B, ensuring zero departmental auto-notices.</p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <section className="bg-[#120D0A] text-white rounded-2xl p-8 sm:p-10 border border-[#2E221B] text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Get Reliable, CA-Reviewed GST Compliance for Your Mumbai Business
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
              Join hundreds of Mumbai MSMEs, e-commerce sellers, and consultants who save time and avoid penalties with Taxoras. Fixed retainers starting from ₹799/month.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                href="/locations/mumbai/gst-return-filing"
                className="bg-amber-500 hover:bg-amber-400 text-black text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md"
              >
                Get Started with Mumbai Desk
              </Link>
              <a
                href={siteConfig.links.whatsappUrl("Mumbai GST Services")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors border border-white/20"
              >
                Chat on WhatsApp (+91 88103 81949)
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp location="Mumbai" />
    </div>
  );
}
