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
  Info,
  Scale,
  FileCheck2,
  AlertTriangle,
  Building,
  PhoneCall,
  Coins,
  Receipt,
  Sparkles,
  MapPin,
  FileText,
  AlertCircle,
  TrendingDown,
  Check,
  X
} from "lucide-react";

export const metadata: Metadata = {
  title: "GST Return Filing Charges Per Month | Cheap GST Filing Services in Noida | Taxoras",
  description:
    "Wondering about GST return filing charges per month? Compare cheap GST return filing service options in Noida, GST registration consultant fees and TDS return filing 24Q 26Q online with Taxoras.",
  keywords: [
    "gst return filing charges per month",
    "cheap gst return filing service",
    "gst filing services in noida",
    "gst registration consultant in noida",
    "tds return filing 24q 26q online",
    "gst filing charges noida sector 62 63",
    "gst return filing fees monthly",
    "affordable gst consultant greater noida",
    "tds return due dates 2026"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/gst-return-filing-charges-per-month-noida",
  },
  openGraph: {
    title: "GST Return Filing Charges Per Month in Noida (2026): Cheap GST Filing, Registration & TDS 24Q 26Q",
    description:
      "Statutory breakdown of GST return filing charges per month, cheap GST filing retainers in Noida, registration consultant guidance, and quarterly TDS return filing 24Q 26Q online.",
    url: "https://www.taxoras.online/blog/gst-return-filing-charges-per-month-noida",
    type: "article",
    publishedTime: "2026-10-28T09:00:00+05:30",
    modifiedTime: "2026-10-28T10:00:00+05:30",
    authors: ["Taxoras Noida & Delhi NCR Compliance Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Return Filing Charges Per Month in Noida (2026 Guide)",
    description: "Compare cheap GST filing options in Noida, GST registration consultant fees, and TDS return filing 24Q 26Q online.",
    images: ["https://www.taxoras.online/opengraph-image"],
  },
};

export default function GstReturnFilingChargesNoidaPage() {
  const articleUrl = "https://www.taxoras.online/blog/gst-return-filing-charges-per-month-noida";

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
        "headline": "GST Return Filing Charges Per Month in Noida (2026): Cheap GST Filing, Registration & TDS Return Filing 24Q 26Q Online",
        "description":
          "Complete 2026 analysis of GST return filing charges per month, cheap GST filing service evaluation in Noida, GST registration consultant steps, and TDS return filing 24Q 26Q online rules.",
        "image": "https://www.taxoras.online/opengraph-image",
        "datePublished": "2026-10-28T09:00:00+05:30",
        "dateModified": "2026-10-28T10:00:00+05:30",
        "mainEntityOfPage": articleUrl,
        "author": {
          "@type": "Organization",
          "name": "Taxoras Noida & Delhi NCR Compliance Desk",
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
            "name": "GST Return Filing Charges Per Month Noida",
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
          "streetAddress": "Suite 402, Barakhamba Road, Connaught Place (Serving Sector 62, 63, Greater Noida)",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201301",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "City", "name": "Noida" },
          { "@type": "City", "name": "Greater Noida" },
          { "@type": "AdministrativeArea", "name": "Gautam Buddh Nagar" },
          { "@type": "AdministrativeArea", "name": "Delhi NCR" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "194",
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
            "name": "What are the GST return filing charges per month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GST return filing charges per month depend on your return type, invoice volume, and transaction complexity. At Taxoras, monthly retainers start from ₹499/month for nil filers, ₹799/month for micro businesses (up to 50 invoices), and ₹1,499/month for growing businesses (up to 200 invoices) with full GSTR-2B Input Tax Credit reconciliation included."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a cheap GST return filing service in Noida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Look for transparent pricing, clear inclusions, and on-time filing rather than only the lowest advertised headline rate. Taxoras provides genuine, all-inclusive GST filing services for Noida and Greater Noida businesses starting at ₹799/month with zero hidden charges for GSTR-2B purchase matching."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to file a GST return if I had no sales?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Registered taxpayers must file a nil return if there was no business or transaction activity during the month or quarter. Skipping a nil return still attracts statutory daily late fees under Section 47 of the CGST Act."
            }
          },
          {
            "@type": "Question",
            "name": "How long does GST registration take in Noida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GST registration commonly takes 3 to 7 working days once submitted on the GST portal if Aadhaar biometric authentication is successful and documentation is complete. Queries (Form GST REG-03) from the jurisdictional officer in Gautam Buddh Nagar can extend this timeline by a few days."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a GST registration consultant in Noida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While not legally mandatory to hire an agent, an experienced GST registration consultant helps avoid application rejections, address proof rejections (rent agreements, owner NOCs), and wrong HSN or SAC mapping, ensuring quick ARN approval."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Form 24Q and Form 26Q?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Form 24Q is the quarterly TDS return for salary payments under Section 192. Form 26Q is the quarterly TDS return for non-salary payments made to resident individuals and entities, including professional fees (Section 194J), contractor payments (Section 194C), rent (Section 194I), and commission (Section 194H)."
            }
          },
          {
            "@type": "Question",
            "name": "Can TDS returns be filed online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. TDS returns (24Q & 26Q) are prepared digitally, validated through the official NSDL/TRACES FVU utility, and uploaded electronically using a valid TAN. Taxoras provides complete end-to-end online TDS return filing with error-free validation and Form 16/16A generation."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I miss a GST or TDS due date?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Missing a GST deadline triggers daily late fees (₹50/day for regular, ₹20/day for nil filers), 18% annual interest on unpaid tax dues, and potential e-way bill blocking. Missing a TDS deadline attracts a mandatory late fee of ₹200 per day under Section 234E until the return is filed, along with interest under Section 201(1A)."
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
              <span className="font-semibold text-amber-400">GST Return Filing Charges Noida</span>
            </nav>
          </div>
        </div>

        {/* Hero Article Header */}
        <header className="bg-gradient-to-b from-[#1F1611] to-[#120D0A] border-b border-[#2C211A] py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Noida &amp; Delhi NCR Compliance Guide (2026)
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" /> Updated October 2026
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> 9 min read
              </span>
              <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-600/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <UserCheck className="w-3 h-3 text-emerald-400" /> CA Reviewed
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              GST Return Filing Charges Per Month in Noida (2026): Cheap GST Filing, Registration &amp; TDS Return Filing 24Q 26Q Online
            </h1>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-md shrink-0">
                TX
              </div>
              <div>
                <p className="text-xs font-bold text-white">By the Taxoras Senior Compliance Team</p>
                <p className="text-[11px] text-[#A6978A]">Direct Tax &amp; GST Regulatory Research Desk • Gautam Buddh Nagar Jurisdiction</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#DDD0C5] leading-relaxed max-w-4xl pt-2">
              Everything you need to know about <strong className="text-white font-semibold">GST return filing charges per month</strong> in Noida, finding a genuine <strong className="text-white font-semibold">cheap GST return filing service</strong>, securing prompt approval with a <strong className="text-white font-semibold">GST registration consultant in Noida</strong>, and filing quarterly <strong className="text-white font-semibold">TDS return filing 24Q 26Q online</strong> without notices or penalties.
            </p>
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">

          {/* Quick Answer Callout Box */}
          <section className="bg-gradient-to-br from-[#231811] via-[#1B1410] to-[#16100C] rounded-2xl border-2 border-amber-500/40 p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Coins className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Quick answer: how much are GST return filing charges per month?
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              <strong className="text-white font-semibold">GST return filing charges per month</strong> depend on your return type, number of invoices, turnover, and whether you also need bookkeeping or Input Tax Credit (ITC) reconciliation. A basic, cheap GST return filing service for a small business with few invoices costs far less than a high-volume trader or manufacturer with hundreds of invoices and monthly GSTR-2B matching. Nil-return filers pay the least, while businesses with e-commerce, multiple state branches or reverse charge transactions pay more.
            </p>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              If you are searching for <strong className="text-amber-300 font-semibold">GST filing services in Noida</strong>, an experienced <strong className="text-amber-300 font-semibold">GST registration consultant in Noida</strong>, or <strong className="text-amber-300 font-semibold">TDS return filing 24Q 26Q online</strong>, Taxoras helps businesses, startups, freelancers and employers with all three in one place. For exact transparent pricing, check our table below or contact our desk for an instant quote based on your monthly invoice volume.
            </p>

            <div className="bg-[#18110C] rounded-xl p-5 border border-[#332217] space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Key Takeaways in Short:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#DDD0C5]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span><strong>GST return filing charges per month</strong> are driven by invoice volume, return type, and transaction complexity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>A genuine <strong>cheap GST return filing service</strong> must include GSTR-2B ITC reconciliation and due-date reminders, not just data entry.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>A reliable <strong>GST registration consultant in Noida</strong> handles Gautam Buddh Nagar documentation, address proof and ARN follow-up.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span><strong>TDS return filing 24Q 26Q online</strong> must be completed quarterly; late filing triggers Section 234E fees of ₹200/day.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Real Transparent Pricing Table */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2C211A] pb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Scale className="w-5 h-5 text-amber-400" />
                  <span>Taxoras Transparent Fee Schedule: Noida &amp; All-India (2026)</span>
                </h2>
                <p className="text-xs text-[#BCAE9F] mt-1">
                  Fixed, transparent retainers with zero surprise charges for GSTR-2B purchase matching or acknowledgements.
                </p>
              </div>
              <span className="self-start sm:self-auto text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-600/40">
                Guaranteed Lowest Price
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#2C211A] bg-[#17100B] shadow-md">
              <table className="w-full text-xs text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#241A14] border-b border-[#2C211A] text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4">Plan / Service</th>
                    <th className="py-3.5 px-4">Published Fee</th>
                    <th className="py-3.5 px-4">Invoice / Scope Limit</th>
                    <th className="py-3.5 px-4">GSTR-2B Matching</th>
                    <th className="py-3.5 px-4">Turnaround &amp; Support</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#241A14] text-[#DDD0C5]">
                  <tr className="hover:bg-[#1E150F] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">
                      GST Nil Return Filing
                      <span className="block text-[11px] font-normal text-[#A6978A]">Zero sales &amp; zero purchases</span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-emerald-400 text-sm">₹499 / month</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">Nil Invoices</td>
                    <td className="py-3.5 px-4 text-[#A6978A]">Verified Nil</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">Same-day filing + ARN receipt</td>
                  </tr>
                  <tr className="bg-amber-950/30 hover:bg-amber-950/50 transition-colors border-l-4 border-amber-500">
                    <td className="py-3.5 px-4 font-bold text-white">
                      Micro Turnover GST Retainer
                      <span className="inline-block ml-2 text-[10px] bg-amber-500 text-slate-950 font-extrabold px-2 py-0.5 rounded-full uppercase">Most Popular</span>
                      <span className="block text-[11px] font-normal text-amber-200/80">Small Noida shops, freelancers, traders</span>
                    </td>
                    <td className="py-3.5 px-4 font-extrabold text-amber-300 text-sm">₹799 / month</td>
                    <td className="py-3.5 px-4 font-semibold text-white">Up to 50 invoices/month</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> 100% Included
                    </td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">3 days prior to due date; WhatsApp desk</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">
                      Growing Business Retainer
                      <span className="block text-[11px] font-normal text-[#A6978A]">Active Sector 62/63 IT &amp; manufacturers</span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-white text-sm">₹1,499 / month</td>
                    <td className="py-3.5 px-4 font-semibold text-white">Up to 200 invoices/month</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Full Automated 2B Audit
                    </td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">4 days prior; Dedicated CA manager</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">
                      High Volume / E-Commerce
                      <span className="block text-[11px] font-normal text-[#A6978A]">Multi-channel sellers &amp; distributors</span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-white text-sm">₹2,799 / month</td>
                    <td className="py-3.5 px-4 font-semibold text-white">Up to 500 invoices/month</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Advanced 2B Reconciliation
                    </td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">E-way bill &amp; e-invoicing validation</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">
                      GST Registration (Noida / UP)
                      <span className="block text-[11px] font-normal text-[#A6978A]">Proprietorship or Partnership/Pvt Ltd</span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-white text-sm">₹999 / ₹1,999 one-time</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">Complete Registration</td>
                    <td className="py-3.5 px-4 text-emerald-400">Govt Fee: ₹0</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">3–5 working days; REG-03 query reply</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">
                      TDS Return Filing (24Q / 26Q)
                      <span className="block text-[11px] font-normal text-[#A6978A]">Quarterly salary or vendor TDS</span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-white text-sm">From ₹999 / quarter</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">Per form / per quarter</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">TRACES PAN match</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">FVU generation &amp; Form 16/16A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="text-xs text-[#BCAE9F]">
                Need a custom plan for multiple GSTINs or high transaction density?
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="/pricing"
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline inline-flex items-center gap-1"
                >
                  <span>View Full Pricing Engine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={siteConfig.links.whatsappUrl("GST Return Filing Charges Quote", "Noida")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors inline-flex items-center gap-1.5 shadow-md"
                >
                  <span>WhatsApp for Instant Quote</span>
                </a>
              </div>
            </div>
          </section>

          {/* Section: What Affects GST Charges */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-amber-400" />
              <span>What affects GST return filing charges per month?</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              When you compare quotes across Noida and Delhi NCR, the headline number on a website is often only half the story. The following 8 factors decide the actual monthly effort and fee:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold flex items-center justify-center text-xs">1</span>
                  Type of Return Filed
                </span>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Monthly GSTR-1 (sales) and GSTR-3B (tax settlement) require regular data entry. Composition scheme returns (CMP-08, GSTR-4) or the GSTR-9 annual return demand different technical hours and reconciliation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold flex items-center justify-center text-xs">2</span>
                  Number of Invoices
                </span>
                <p className="text-[#DDD0C5] leading-relaxed">
                  A business issuing 10 invoices a month involves minimal checking. A distributor or retail chain generating 400 sales and purchase vouchers requires systematic item-level validation and tax rate verification.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold flex items-center justify-center text-xs">3</span>
                  Input Tax Credit (ITC) Reconciliation
                </span>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Cross-matching your internal purchase register with auto-generated GSTR-2B statements is critical. Failure to reconcile properly causes you to lose legitimate tax credits or receive Rule 88C scrutiny notices.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold flex items-center justify-center text-xs">4</span>
                  Filing Frequency (Monthly vs QRMP)
                </span>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Taxpayers on the monthly schedule file returns every single month. Businesses under the Quarterly Return Monthly Payment (QRMP) scheme file quarterly returns but still require monthly challan PMT-06 calculation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold flex items-center justify-center text-xs">5</span>
                  Number of State GSTINs
                </span>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Many Noida companies maintain a head office in Sector 62 (UP state code 09) and a marketing or warehouse office in Delhi (state code 07) or Gurugram (code 06). Multi-state compliance scales the workload proportionally.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold flex items-center justify-center text-xs">6</span>
                  Special Transactions
                </span>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Software exports under Letter of Undertaking (LUT / RFD-11), mandatory e-invoicing for turnovers above ₹5 Cr, inter-state E-way bills, reverse charge (RCM), and Amazon/Flipkart TCS reports require expert handling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold flex items-center justify-center text-xs">7</span>
                  Bookkeeping &amp; Accounting Scope
                </span>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Some clients provide ready Excel sales and purchase summaries; others need end-to-end bookkeeping with bank statement matching, expense categorization, and ledger maintenance alongside GST return preparation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold flex items-center justify-center text-xs">8</span>
                  Pending Past Returns &amp; Backlog
                </span>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Catching up on 6 to 12 months of unfiled returns, computing accumulated late fees and interest under Section 50, and filing revocation applications costs more initially than maintaining uninterrupted regular filings.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/40 text-xs text-amber-200 leading-relaxed">
              <strong className="text-white font-semibold">Important Takeaway:</strong> A true cheap GST return filing service is not simply the lowest headline price. It is the service that delivers 100% accurate returns, on-time filing, and zero surprise add-on charges.
            </div>
          </section>

          {/* Section: Cheap GST Filing Service - What to Check */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-5 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>Cheap GST return filing service: what to check before you hire</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              Many budget platforms advertise ₹299 or ₹499 monthly fees, only to unbundle essential compliance tasks later. Before committing to any service in Noida or online, ask these 6 crucial questions:
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">1. What exactly is included in the base monthly price?</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Does the package cover both GSTR-1 and GSTR-3B? Is GSTR-2B purchase matching bundled, or is it an extra ₹500 fee? Are reminder alerts and cash tax challan generation covered?</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">2. Is there a strict invoice or transaction cap?</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Budget plans often cap monthly vouchers at 15 or 25 invoices. The moment your business grows and issues 40 invoices, you face exorbitant per-invoice overage penalties.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">3. Who handles clarification notices and ASMT-10 scrutiny?</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">A common industry trap starts with ultra-cheap monthly filing and ₹2,500+ bills for drafting a simple reply when an automated mismatch notice arrives from the department.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">4. Do you receive official acknowledgements and ARNs every month?</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">You should always receive government-issued Acknowledgement Reference Number (ARN) receipts and filed JSON/PDF copies within 24 hours of filing.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">5. Is there a dedicated human contact or only a ticket queue?</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Chasing an impersonal call center queue when a statutory portal deadline is just 4 hours away is stressful. Ensure you have direct phone and WhatsApp access to a named accountant.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">6. Is the pricing transparent and documented in writing?</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">A dependable firm provides written quotes outlining every inclusion, turnaround guarantee, and contingency procedure without vague verbal promises.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Statutory GST Due Dates Table */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2C211A] pb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-400" />
                  <span>GST return due dates you should never miss</span>
                </h2>
                <p className="text-xs text-[#BCAE9F] mt-1">
                  Missing a deadline is the single most expensive mistake under the GST regime.
                </p>
              </div>
              <span className="text-xs font-semibold text-rose-300 bg-rose-950/60 border border-rose-600/40 px-3 py-1 rounded-full flex items-center gap-1 self-start sm:self-auto">
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" /> Statutory Deadlines
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#2C211A] bg-[#17100B] shadow-md">
              <table className="w-full text-xs text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#241A14] border-b border-[#2C211A] text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4">Return Form</th>
                    <th className="py-3.5 px-4">Who Needs to File</th>
                    <th className="py-3.5 px-4">Statutory Due Date</th>
                    <th className="py-3.5 px-4">Taxoras Submission Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#241A14] text-[#DDD0C5]">
                  <tr className="hover:bg-[#1E150F] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">GSTR-1 (Outward Sales)</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">Regular taxpayers (Monthly filers)</td>
                    <td className="py-3.5 px-4 font-semibold text-rose-400">11th of the next month</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold">Completed by 8th</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">GSTR-1 / IFF (Invoice Furnishing)</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">QRMP scheme taxpayers</td>
                    <td className="py-3.5 px-4 font-semibold text-rose-400">13th of month after quarter (IFF optional M1/M2)</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold">Completed by 10th</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">GSTR-3B (Summary Tax Return)</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">Regular taxpayers (Monthly filers)</td>
                    <td className="py-3.5 px-4 font-semibold text-rose-400">20th of the next month</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold">Completed by 16th</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">GSTR-3B (QRMP Quarterly)</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">QRMP taxpayers (UP / Delhi: State Category 1)</td>
                    <td className="py-3.5 px-4 font-semibold text-rose-400">22nd or 24th of month after quarter</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold">Completed 4 days early</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">CMP-08 (Statement of Tax)</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">Composition scheme dealers</td>
                    <td className="py-3.5 px-4 font-semibold text-rose-400">18th of month after quarter</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold">Completed by 14th</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">GSTR-9 &amp; 9C (Annual Return)</td>
                    <td className="py-3.5 px-4 text-[#DDD0C5]">Regular taxpayers (&gt;₹2 Cr optional, &gt;₹5 Cr audit)</td>
                    <td className="py-3.5 px-4 font-semibold text-rose-400">31st December following financial year</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold">Filed in November</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-rose-950/30 p-5 rounded-xl border border-rose-800/40 text-xs text-[#FCA5A5] space-y-2">
              <h4 className="font-bold text-rose-300 text-sm">Penalties for Late GST Filing:</h4>
              <p className="leading-relaxed">
                Late filing costs you in three distinct ways under GST law:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#FCA5A5]/90">
                <li><strong className="text-white">Daily Late Fee:</strong> ₹50 per day (₹25 CGST + ₹25 SGST) for regular taxpayers with turnover, and ₹20 per day (₹10 + ₹10) for nil returns under Section 47.</li>
                <li><strong className="text-white">Interest on Tax Due:</strong> Mandatory 18% per annum calculated on net cash tax liability under Section 50(1) from the day after the due date until full payment.</li>
                <li><strong className="text-white">E-Way Bill Generation Blocking:</strong> If a GSTIN defaults on GSTR-3B or GSTR-1 for 2 consecutive tax periods, the NIC portal automatically blocks outbound E-Way Bill generation, halting physical shipments.</li>
              </ul>
            </div>
          </section>

          {/* Section: GST Filing in Noida - Local Support */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  GST filing services in Noida: why local support matters
                </h2>
                <p className="text-xs text-[#BCAE9F]">Gautam Buddh Nagar commercial tax jurisdiction and UP GST practices</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              Noida and Greater Noida represent one of India&apos;s fastest-growing commercial belts. Sector 62 and Sector 63 host hundreds of IT, SaaS, and software development exporters. Phase 2, Sector 80, and the Yamuna Expressway corridor house heavy manufacturing, auto components, electronics, and warehousing facilities. All of these entities fall under the <strong className="text-white font-semibold">Gautam Buddh Nagar jurisdiction</strong> of the Uttar Pradesh Commercial Tax Department.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  UP GST Procedural Familiarity
                </h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Local jurisdiction officers frequently request specific verification for leased co-working spaces and industrial sub-leases. Having an experienced Noida partner ensures your address proofs comply with UP Commercial Tax department standards.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Cross-Border Delhi-UP Transit
                </h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Goods moving across Kalindi Kunj, DND Flyway, or Chilla Border between Delhi (state code 07) and Noida (state code 09) are treated as inter-state supplies requiring Integrated GST (IGST) and active E-way bill validation.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Direct WhatsApp &amp; Local Escalation
                </h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Unlike faceless ticket portals, Taxoras maintains direct WhatsApp compliance desks and physical document assistance across Noida, Greater Noida, and Delhi NCR, ensuring rapid resolution during urgent audits.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Software Export LUT (RFD-11)
                </h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  For IT companies in Sector 62 billing US or European clients, we file the annual Letter of Undertaking (LUT) to enable 0% zero-rated exports without accumulating locked IGST refund balances.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="text-[#BCAE9F]">Explore dedicated local desks:</span>
              <Link href="/locations/noida/gst-return-filing" className="text-amber-400 font-bold hover:underline">
                Noida GST Return Filing Hub
              </Link>
              <span className="text-[#5A4335]">•</span>
              <Link href="/locations/noida/gst-registration" className="text-amber-400 font-bold hover:underline">
                Noida GST Registration
              </Link>
              <span className="text-[#5A4335]">•</span>
              <Link href="/locations/delhi/gst-return-filing" className="text-amber-400 font-bold hover:underline">
                Delhi NCR Tri-State Desk
              </Link>
            </div>
          </section>

          {/* Section: GST Registration Consultant Noida */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>GST registration consultant in Noida: what to expect</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              Obtaining a Goods and Services Tax Identification Number (GSTIN) is the foundation of business compliance in India. Registration is legally mandatory once aggregate annual turnover exceeds <strong className="text-white font-semibold">₹40 lakh for goods suppliers</strong> (₹20 lakh in special category states) and <strong className="text-white font-semibold">₹20 lakh for service providers</strong>. Registration is also compulsory regardless of turnover for inter-state sellers, e-commerce vendors, and entities liable under Reverse Charge Mechanism (RCM).
            </p>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white">What a dependable Noida GST registration consultant handles:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                  <span className="font-extrabold text-amber-400">Step 1</span>
                  <h4 className="font-bold text-white">Eligibility Check</h4>
                  <p className="text-[#BCAE9F] text-[11px] leading-relaxed">Determine whether Regular, Composition, or LUT scheme fits best.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                  <span className="font-extrabold text-amber-400">Step 2</span>
                  <h4 className="font-bold text-white">Document Vetting</h4>
                  <p className="text-[#BCAE9F] text-[11px] leading-relaxed">Audit rent deeds, owner NOCs, and electricity bills for text matches.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                  <span className="font-extrabold text-amber-400">Step 3</span>
                  <h4 className="font-bold text-white">Portal Application</h4>
                  <p className="text-[#BCAE9F] text-[11px] leading-relaxed">Draft Form GST REG-01 with accurate 5-digit HSN &amp; SAC codes.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                  <span className="font-extrabold text-amber-400">Step 4</span>
                  <h4 className="font-bold text-white">ARN &amp; Query Reply</h4>
                  <p className="text-[#BCAE9F] text-[11px] leading-relaxed">Draft Form GST REG-04 replies if the officer issues REG-03 clarification.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                  <span className="font-extrabold text-amber-400">Step 5</span>
                  <h4 className="font-bold text-white">Certificate Handover</h4>
                  <p className="text-[#BCAE9F] text-[11px] leading-relaxed">Hand over Form GST REG-06, portal logins, and filing schedule.</p>
                </div>
              </div>
            </div>

            {/* Documents Checklist Box */}
            <div className="bg-[#17100B] rounded-2xl p-6 border border-[#2C211A] space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-amber-400" />
                Required Documents Checklist for Noida GST Registration:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#DDD0C5]">
                <div className="space-y-2">
                  <p className="font-semibold text-white">Identity &amp; Constitution Proof:</p>
                  <ul className="list-disc pl-5 space-y-1 text-[#DDD0C5]">
                    <li>PAN card and Aadhaar card of Proprietor, Partners, or Directors.</li>
                    <li>Passport-size photographs of authorized signatory.</li>
                    <li>Certificate of Incorporation, LLP Agreement, or Partnership Deed.</li>
                    <li>Digital Signature Certificate (DSC Class 3) for Companies and LLPs.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-white">Place of Business &amp; Banking:</p>
                  <ul className="list-disc pl-5 space-y-1 text-[#DDD0C5]">
                    <li>Valid Rent Agreement with explicit owner consent for commercial GST use.</li>
                    <li>No Objection Certificate (NOC) signed by property owner.</li>
                    <li>Recent Electricity Bill or Municipal Property Tax receipt (&lt;60 days old).</li>
                    <li>Bank account proof (Cancelled cheque or latest bank statement).</li>
                  </ul>
                </div>
              </div>
              <p className="text-[11px] text-amber-200 bg-amber-950/40 p-3 rounded-xl border border-amber-600/40 leading-relaxed">
                <strong className="text-white">Pro-tip:</strong> Minor typographical mismatches between electricity bill owner names and rent agreement lessor names are the #1 reason for Gautam Buddh Nagar officer queries. We verify and align these before submitting.
              </p>
            </div>
          </section>

          {/* Section: TDS Return Filing 24Q 26Q Online Complete Guide */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2C211A] pb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-amber-400" />
                  <span>TDS return filing 24Q 26Q online: complete guide</span>
                </h2>
                <p className="text-xs text-[#BCAE9F] mt-1">
                  Quarterly Tax Deducted at Source compliance for salaries, rent, and vendor payments.
                </p>
              </div>
              <span className="text-xs font-semibold text-teal bg-teal-light px-3 py-1 rounded-full border border-teal/20 self-start sm:self-auto">
                Income Tax Compliance
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              If your Noida enterprise pays employee salaries, commercial office rent, legal or professional consultancy fees, or contractor charges, you are legally required to deduct tax at source (TDS) and file quarterly returns with the Income Tax Department. This is an area where many fast-growing Noida startups and businesses slip up.
            </p>

            {/* Form 24Q vs 26Q Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/30">Form 24Q</span>
                <h3 className="font-bold text-white text-sm">Quarterly TDS on Salary Payments</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Covering deductions under <strong className="text-white">Section 192</strong> for staff and management salaries. Annexure I is filed for all 4 quarters; Annexure II (detailed salary breakups, HRA, deductions, and tax regime election) is filed in the final Q4 return.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/30">Form 26Q</span>
                <h3 className="font-bold text-white text-sm">Quarterly TDS on Non-Salary Resident Payments</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Covering commercial transactions including <strong className="text-white">Section 194C</strong> (contractors/freelancers), <strong className="text-white">Section 194J</strong> (professional &amp; tech fees), <strong className="text-white">Section 194I</strong> (rent on land, building, furniture), and <strong className="text-white">Section 194H</strong> (commission).
                </p>
              </div>
            </div>

            {/* TDS Due Dates Table */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Quarterly Due Dates for TDS Returns (FY 2026-27):
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-[#2C211A] bg-[#17100B] shadow-md">
                <table className="w-full text-xs text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#241A14] border-b border-[#2C211A] text-white font-bold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4">Quarter</th>
                      <th className="py-3 px-4">Transaction Period</th>
                      <th className="py-3 px-4">Statutory Return Due Date</th>
                      <th className="py-3 px-4">Monthly Tax Deposit Deadline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#241A14] text-[#DDD0C5]">
                    <tr className="hover:bg-[#1E150F]">
                      <td className="py-3 px-4 font-bold text-white">Q1</td>
                      <td className="py-3 px-4 text-[#DDD0C5]">April 1 to June 30</td>
                      <td className="py-3 px-4 font-semibold text-white">31st July</td>
                      <td className="py-3 px-4 text-[#BCAE9F]">7th of following month</td>
                    </tr>
                    <tr className="bg-amber-950/40 hover:bg-amber-950/60 border-l-4 border-amber-500">
                      <td className="py-3 px-4 font-bold text-white">Q2</td>
                      <td className="py-3 px-4 text-[#DDD0C5]">July 1 to September 30</td>
                      <td className="py-3 px-4 font-bold text-amber-300">31st October (Imminent Deadline!)</td>
                      <td className="py-3 px-4 text-[#BCAE9F]">7th of following month</td>
                    </tr>
                    <tr className="hover:bg-[#1E150F]">
                      <td className="py-3 px-4 font-bold text-white">Q3</td>
                      <td className="py-3 px-4 text-[#DDD0C5]">October 1 to December 31</td>
                      <td className="py-3 px-4 font-semibold text-white">31st January</td>
                      <td className="py-3 px-4 text-[#BCAE9F]">7th of following month</td>
                    </tr>
                    <tr className="hover:bg-[#1E150F]">
                      <td className="py-3 px-4 font-bold text-white">Q4</td>
                      <td className="py-3 px-4 text-[#DDD0C5]">January 1 to March 31</td>
                      <td className="py-3 px-4 font-semibold text-white">31st May</td>
                      <td className="py-3 px-4 text-[#BCAE9F]">30th April for March deductions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Penalties & Tips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
              <div className="p-5 rounded-xl bg-rose-950/30 border border-rose-800/40 space-y-2 text-[#FCA5A5]">
                <h4 className="font-bold text-rose-300 text-sm flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  Penalties for Late or Faulty TDS Filing:
                </h4>
                <ul className="space-y-1.5 text-[#FCA5A5]/90">
                  <li><strong className="text-white">Section 234E Fee:</strong> Mandatory ₹200 per day until return submission, capped at total TDS amount.</li>
                  <li><strong className="text-white">Section 201(1A) Interest:</strong> 1% per month for late deduction; 1.5% per month for late deposit after deduction.</li>
                  <li><strong className="text-white">Section 271H Penalty:</strong> Assessing officer penalty of ₹10,000 to ₹1,00,000 for prolonged non-filing.</li>
                  <li><strong className="text-white">Vendor AIS/26AS Blocking:</strong> Deductees cannot claim tax credits, leading to friction and commercial disputes.</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 space-y-2 text-[#86EFAC]">
                <h4 className="font-bold text-emerald-300 text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Taxoras 5-Point Protocol for Error-Free TDS:
                </h4>
                <ol className="list-decimal pl-4 space-y-1.5 text-[#86EFAC]/90">
                  <li>Maintain active TAN credentials and verified TRACES admin portal access.</li>
                  <li>Validate 100% of vendor PAN numbers against TRACES database before voucher creation.</li>
                  <li>Reconcile government tax challans using precise BSR code, deposit date, and challan sequence.</li>
                  <li>Perform quarterly matching between ledger deduction entries and OLTAS challans.</li>
                  <li>Generate official signed Form 16 / 16A certificates directly for all deductees.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section: GST + TDS Unified Partner Benefits */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-5 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Building className="w-5 h-5 text-amber-400" />
              <span>GST + TDS together: why one compliance partner helps</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              Most businesses in Noida require multiple tax filings concurrently: monthly GST returns (GSTR-1 &amp; GSTR-3B), quarterly TDS returns (Form 24Q &amp; 26Q), annual reconciliations (GSTR-9), and annual income tax filing. Using separate local bookkeepers and online platforms causes fragmented documentation, mismatched turnover numbers, and missed deadlines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1.5">
                <span className="font-extrabold text-amber-400 text-sm">01</span>
                <h4 className="font-bold text-white">One Master Calendar</h4>
                <p className="text-[#DDD0C5] leading-relaxed">Track monthly GST and quarterly TDS due dates on a single synchronized dashboard.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1.5">
                <span className="font-extrabold text-amber-400 text-sm">02</span>
                <h4 className="font-bold text-white">Zero Data Duplication</h4>
                <p className="text-[#DDD0C5] leading-relaxed">Sales bills, payroll registers, and vendor payments are entered once and verified across both tax regimes.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1.5">
                <span className="font-extrabold text-amber-400 text-sm">03</span>
                <h4 className="font-bold text-white">Single Accountability</h4>
                <p className="text-[#DDD0C5] leading-relaxed">One senior compliance manager oversees your books, eliminating blame games between separate accountants.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1.5">
                <span className="font-extrabold text-amber-400 text-sm">04</span>
                <h4 className="font-bold text-white">Bundled Cost Savings</h4>
                <p className="text-[#DDD0C5] leading-relaxed">Consolidated retainers cost 30% to 50% less than paying separate boutique retainers to different firms.</p>
              </div>
            </div>
          </section>

          {/* Section: How to Choose Provider & Mistakes to Avoid */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>How to choose the right GST &amp; TDS service provider in Noida</span>
            </h2>

            <div className="space-y-3 text-xs text-[#DDD0C5]">
              <p>Evaluate any prospective firm using this practical 7-point decision matrix:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                  <strong className="text-white block text-sm">1. Transparent Pricing:</strong> Pre-agreed monthly retainers with explicit voucher limits and zero hidden fees for 2B matching.
                </div>
                <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                  <strong className="text-white block text-sm">2. Sector Experience:</strong> Verified client handling in your industry (IT exports, trading, manufacturing, or e-commerce).
                </div>
                <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                  <strong className="text-white block text-sm">3. Proactive Reminders:</strong> You should receive data collection reminders by the 3rd of each month, not after deadlines expire.
                </div>
                <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                  <strong className="text-white block text-sm">4. Rigorous 2B Audit:</strong> Software-backed matching of vendor bills against GSTR-2B to prevent missed tax credits.
                </div>
                <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                  <strong className="text-white block text-sm">5. Notice Drafting Support:</strong> Pre-agreed assistance for replying to clarification notices (REG-03, ASMT-10, DRC-01B).
                </div>
                <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1">
                  <strong className="text-white block text-sm">6. Document Security:</strong> Strict confidentiality protocols for PAN, Aadhaar, bank records, and sales data.
                </div>
                <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1 md:col-span-2">
                  <strong className="text-white block text-sm">7. Genuine Client Feedback:</strong> Verified Google reviews and testimonials from operational enterprises across Gautam Buddh Nagar and Delhi NCR.
                </div>
              </div>
            </div>

            <div className="bg-amber-950/30 p-6 rounded-2xl border border-amber-600/40 space-y-4 text-xs">
              <h3 className="font-bold text-amber-300 uppercase tracking-wider text-xs flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                9 Common GST and TDS Compliance Traps to Avoid:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-amber-200/90">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Filing GSTR-3B without reconciling purchase books against GSTR-2B.</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Claiming ineligible Input Tax Credit on personal vehicles or food items.</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Ignoring discrepancies between GSTR-1 and GSTR-3B (Rule 88C notices).</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Skipping nil returns, accumulating unexpected statutory late fees.</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Applying incorrect 4-digit or 6-digit HSN/SAC codes or wrong GST rates.</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Forgetting to deduct TDS on commercial rent or consultancy retainers.</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Depositing TDS after the 7th of the following calendar month.</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Filing TDS returns with mismatched or inactive deductee PAN numbers.</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Selecting the cheapest platform without checking whether GSTR-2B is excluded.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Frequently Asked Questions */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-[#2C211A] pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <span>Frequently Asked Questions</span>
              </h2>
              <p className="text-xs text-[#BCAE9F] mt-1">
                Authoritative answers regarding GST return filing charges, registration, and TDS compliance in Noida.
              </p>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">What are the GST return filing charges per month?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  GST return filing charges per month depend on your return type, invoice volume, and transaction complexity. At Taxoras, monthly retainers start from ₹499/month for nil filers, ₹799/month for micro businesses (up to 50 invoices), and ₹1,499/month for growing businesses (up to 200 invoices) with full GSTR-2B Input Tax Credit reconciliation included.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Is there a cheap GST return filing service in Noida?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Yes. Look for transparent pricing, clear inclusions, and on-time filing rather than only the lowest advertised headline rate. Taxoras provides genuine, all-inclusive GST filing services for Noida and Greater Noida businesses starting at ₹799/month with zero hidden charges for GSTR-2B purchase matching.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Do I need to file a GST return if I had no sales?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Yes. Registered taxpayers must file a nil return if there was no business or transaction activity during the month or quarter. Skipping a nil return still attracts statutory daily late fees under Section 47 of the CGST Act.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">How long does GST registration take in Noida?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  GST registration commonly takes 3 to 7 working days once submitted on the GST portal if Aadhaar biometric authentication is successful and documentation is complete. Queries (Form GST REG-03) from the jurisdictional officer in Gautam Buddh Nagar can extend this timeline by a few days.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Do I need a GST registration consultant in Noida?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  While not legally mandatory to hire an agent, an experienced GST registration consultant helps avoid application rejections, address proof rejections (rent agreements, owner NOCs), and wrong HSN or SAC mapping, ensuring quick ARN approval.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">What is the difference between Form 24Q and Form 26Q?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Form 24Q is the quarterly TDS return for salary payments under Section 192. Form 26Q is the quarterly TDS return for non-salary payments made to resident individuals and entities, including professional fees (Section 194J), contractor payments (Section 194C), rent (Section 194I), and commission (Section 194H).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Can TDS returns be filed online?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Yes. TDS returns (24Q &amp; 26Q) are prepared digitally, validated through the official NSDL/TRACES FVU utility, and uploaded electronically using a valid TAN. Taxoras provides complete end-to-end online TDS return filing with error-free validation and Form 16/16A generation.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">What happens if I miss a GST or TDS due date?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Missing a GST deadline triggers daily late fees (₹50/day for regular, ₹20/day for nil filers), 18% annual interest on unpaid tax dues, and potential e-way bill blocking. Missing a TDS deadline attracts a mandatory late fee of ₹200 per day under Section 234E until the return is filed, along with interest under Section 201(1A).
                </p>
              </div>
            </div>
          </section>

          {/* Section: Final Thoughts & CTA Box */}
          <section className="bg-gradient-to-br from-[#251A13] via-[#1B1410] to-[#16100C] text-white rounded-3xl p-8 sm:p-10 border border-amber-600/30 shadow-xl space-y-6 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/70 border border-amber-600/40 px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Start Smooth Compliance Today
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
              Ready for Transparent, On-Time GST &amp; TDS Compliance in Noida?
            </h2>

            <p className="text-xs sm:text-sm text-[#DDD0C5] max-w-2xl mx-auto leading-relaxed">
              Choosing the right compliance partner is about accuracy, timelines, and trust — not just the lowest advertised price. Talk to the Taxoras compliance team for your GST registration, monthly return filing, or quarterly TDS returns and receive a transparent, fixed-fee quote tailored to your business volume.
            </p>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <a
                href={siteConfig.links.whatsappUrl("Noida GST & TDS Services Enquiry", "Noida")}
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
                Explore All Retainer Plans
              </Link>
            </div>

            <p className="text-[11px] text-[#A6978A] pt-4 max-w-2xl mx-auto border-t border-[#332217]">
              <strong>Disclaimer:</strong> This statutory guide is for general informational purposes only and does not constitute formal legal or tax advisory. Tax rates, official due dates, and circulars are subject to notification amendments by the CBIC and Income Tax Department. Always verify your position with the official portal or a qualified professional.
            </p>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp location="Noida" />
    </div>
  );
}
