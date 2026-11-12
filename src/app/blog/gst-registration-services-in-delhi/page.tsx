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
  title: "GST Registration Services in Delhi — Easy Online GST Help",
  description:
    "Looking for GST registration services in Delhi? Get expert help with GST registration, documentation, Connaught Place/Nehru Place co-working verification, and ongoing GST filing.",
  keywords: [
    "gst registration services in delhi",
    "gst filing services near me",
    "gst registration consultant delhi cp",
    "apply gst online delhi",
    "gst return filing delhi ncr",
    "delhi trade and taxes gst registration",
    "affordable gst consultant delhi"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/gst-registration-services-in-delhi",
  },
  openGraph: {
    title: "Looking for GST Registration Services in Delhi? Here's What You Need to Know",
    description:
      "A complete guide to GST registration in Delhi for traders, startups, and service providers. Learn documents, turnover thresholds, and CA assisted filing.",
    url: "https://www.taxoras.online/blog/gst-registration-services-in-delhi",
    type: "article",
    publishedTime: "2026-11-04T09:00:00+05:30",
    modifiedTime: "2026-11-04T10:00:00+05:30",
    authors: ["Taxoras Delhi Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Registration Services in Delhi (2026 Guide)",
    description: "Compare online GST registration, documentation rules, and filing support in Delhi NCR.",
    images: ["https://www.taxoras.online/opengraph-image"],
  },
};

export default function GstRegistrationDelhiPage() {
  const articleUrl = "https://www.taxoras.online/blog/gst-registration-services-in-delhi";

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
        "headline": "Looking for GST Registration Services in Delhi? Here's What You Need to Know",
        "description":
          "Looking for GST registration services in Delhi? Get help with GST registration, documentation, application filing and ongoing GST compliance.",
        "image": "https://www.taxoras.online/opengraph-image",
        "datePublished": "2026-11-04T09:00:00+05:30",
        "dateModified": "2026-11-04T10:00:00+05:30",
        "mainEntityOfPage": articleUrl,
        "author": {
          "@type": "Organization",
          "name": "Taxoras Delhi Desk",
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
            "name": "GST Registration Services Delhi",
            "item": articleUrl
          }
        ]
      },
      {
        "@type": "AccountingService",
        "@id": `${articleUrl}#localbusiness`,
        "name": "Taxoras Advisory & Compliance - Delhi Desk",
        "url": articleUrl,
        "telephone": siteConfig.contact.phone,
        "priceRange": "Proprietor: ₹999 | Pvt Ltd: ₹1999",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Suite 402, Barakhamba Road, Connaught Place",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110001",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "City", "name": "New Delhi" },
          { "@type": "AdministrativeArea", "name": "Delhi NCR" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${articleUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I apply for GST registration in Delhi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can apply online via the official GST portal (gst.gov.in) under Services → Registration → New Registration. Upload PAN, Aadhaar, electricity bill, rent agreement with owner NOC, and complete Aadhaar biometric authentication. Taxoras manages the full digital filing and query clearance."
            }
          },
          {
            "@type": "Question",
            "name": "Is GST registration mandatory for every business in Delhi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Registration is mandatory only when aggregate annual turnover exceeds ₹40 lakh for exclusive suppliers of goods (₹20 lakh for service providers), or if you engage in interstate supplies, e-commerce, or reverse charge transactions."
            }
          },
          {
            "@type": "Question",
            "name": "What is the GST registration threshold in Delhi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Delhi, the general turnover threshold is ₹20 lakh for service providers and ₹40 lakh for exclusive suppliers of goods, subject to statutory conditions."
            }
          },
          {
            "@type": "Question",
            "name": "How many days does GST registration take in Delhi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When Aadhaar authentication is successful and documents match land registry/electricity records, approval is commonly granted within 3 to 7 working days. If the officer raises a Form GST REG-03 clarification, responding within 7 working days keeps the application on track."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get GST registration without visiting a government office in Delhi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 100% of the standard registration workflow is digital. However, certain applicants flagged for biometric authentication may need a 10-minute visit to an authorized GST Suvidha Kendra (GSK)."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I do not file GST returns after registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non-filing triggers daily late fees (₹50/day), 18% annual interest on tax due, and potential suspension or cancellation of the GSTIN under Section 29, followed by recovery proceedings."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I find GST filing services near me in Delhi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Taxoras Advisory & Compliance provides direct remote and in-person assistance for Delhi businesses from Connaught Place to Okhla, Nehru Place, and Pitampura with fixed retainers from ₹799/month."
            }
          },
          {
            "@type": "Question",
            "name": "Can I register for GST if I operate an online business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Selling goods through Amazon, Flipkart, Meesho, or your own e-commerce website requires mandatory GST registration irrespective of your annual turnover."
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
              <span className="font-semibold text-amber-400">GST Registration Services Delhi</span>
            </nav>
          </div>
        </div>

        {/* Hero Article Header */}
        <header className="bg-gradient-to-b from-[#1F1611] to-[#120D0A] border-b border-[#2C211A] py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Delhi Commercial &amp; Trade Hub
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" /> Updated November 2026
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> 9 min read
              </span>
              <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-600/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <UserCheck className="w-3 h-3 text-emerald-400" /> Delhi Desk Verified
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Looking for GST Registration Services in Delhi? Here&apos;s What You Need to Know
            </h1>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-md shrink-0">
                TX
              </div>
              <div>
                <p className="text-xs font-bold text-white">By the Taxoras Delhi State Compliance Team</p>
                <p className="text-[11px] text-[#A6978A]">Department of Trade &amp; Taxes Delhi (DVAT) • Connaught Place Central Desk</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#DDD0C5] leading-relaxed max-w-4xl pt-2">
              Whether you are launching a startup in Connaught Place, opening a retail store in Chandni Chowk, operating an agency in South Extension, or running an e-commerce brand in Okhla, navigating <strong className="text-white font-semibold">GST registration services in Delhi</strong> requires understanding threshold limits, co-working address validation, and prompt ARN processing.
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
                  Quick Delhi Overview &amp; Pricing
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Fast, CA-Managed GST Registration in Delhi
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              In Delhi (State Code 07), the statutory government fee for GST registration is <strong className="text-emerald-400 font-bold">₹0 (free)</strong>. At <strong className="text-amber-300">Taxoras Advisory &amp; Compliance</strong>, professional consultation, documentation audit, co-working verification, and REG-03 query defense is provided at a transparent fixed fee of <strong className="text-white font-bold">₹999</strong> for sole proprietorships and <strong className="text-white font-bold">₹1,999</strong> for private limited companies and LLPs.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="bg-[#2C1D14] text-amber-300 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Proprietor: ₹999 Flat
              </span>
              <span className="bg-[#2C1D14] text-emerald-400 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Pvt Ltd / LLP: ₹1,999
              </span>
              <span className="bg-[#2C1D14] text-sky-400 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Turnaround: 3–5 Working Days
              </span>
            </div>
          </section>

          {/* Section: Who Needs GST Registration in Delhi */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-400" />
              <span>Who Needs GST Registration in Delhi?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#DDD0C5]">
              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1.5">
                <h4 className="font-bold text-white text-sm">Goods Suppliers (&gt;₹40 Lakh Turnover)</h4>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Wholesalers and retailers in Delhi trading exclusively within state borders qualify for the higher ₹40 Lakh aggregate annual turnover threshold.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1.5">
                <h4 className="font-bold text-white text-sm">Service Providers (&gt;₹20 Lakh Turnover)</h4>
                <p className="text-[#DDD0C5] leading-relaxed">
                  IT agencies, marketing consultants, architects, software exporters, and freelancers crossing ₹20 Lakh gross receipts in a financial year.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1.5">
                <h4 className="font-bold text-white text-sm">Mandatory E-Commerce Sellers</h4>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Any individual or company selling goods via Amazon, Flipkart, Meesho, or an independent web store must register irrespective of turnover.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1.5">
                <h4 className="font-bold text-white text-sm">Cross-Border NCR Transit (Delhi-Noida-Gurgaon)</h4>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Supplying goods into Noida (UP State Code 09) or Gurgaon (Haryana State Code 06) is an interstate supply requiring mandatory IGST registration.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Documents Required for Delhi GST Registration */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              <span>Documents Required for GST Registration in Delhi</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#DDD0C5]">
              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h4 className="font-bold text-white text-sm">1. Identity &amp; Constitution Proof:</h4>
                <ul className="list-disc pl-5 space-y-1 text-[#DDD0C5]">
                  <li>PAN card of Proprietor, Partners, or Company.</li>
                  <li>Aadhaar card of authorized signatory with active mobile link.</li>
                  <li>Passport size photograph of applicant.</li>
                  <li>Certificate of Incorporation, LLP Agreement, or Partnership Deed.</li>
                  <li>Digital Signature Certificate (Class 3) for Companies and LLPs.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h4 className="font-bold text-white text-sm">2. Delhi Place of Business Proof:</h4>
                <ul className="list-disc pl-5 space-y-1 text-[#DDD0C5]">
                  <li>Valid Rent Agreement registered on commercial stamp paper.</li>
                  <li>Owner No Objection Certificate (NOC) with signature verification.</li>
                  <li>Electricity Bill from BSES Rajdhani, BSES Yamuna, or TPDDL (&lt;60 days).</li>
                  <li>Cancelled bank cheque or latest bank statement showing business address.</li>
                </ul>
              </div>
            </div>

            <p className="text-[11px] text-amber-200 bg-amber-950/40 p-3 rounded-xl border border-amber-600/40 leading-relaxed">
              <strong className="text-white">Co-Working Spaces in Connaught Place &amp; South Delhi:</strong> Delhi GST wards strictly examine desk allotment letters and NOCs from primary co-working operators. Taxoras ensures all paperwork passes trade tax scrutiny seamlessly.
            </p>
          </section>

          {/* Section: 4 Common Mistakes to Avoid */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-4 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>4 Common Mistakes to Avoid During Delhi GST Registration</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#DDD0C5]">
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">1. Inconsistent Premises Address:</strong>
                Subtle text mismatches between the electricity bill consumer address and rent deed cause instant REG-03 rejection queries.
              </div>
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">2. PAN &amp; Trade Name Discrepancies:</strong>
                Failing to enter legal name exactly as per the Income Tax PAN database halts portal verification.
              </div>
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">3. Ignoring REG-03 Clarification Notices:</strong>
                If the jurisdictional ward officer issues a notice, failing to submit Form GST REG-04 within 7 working days causes application rejection.
              </div>
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">4. Choosing the Wrong Constitution:</strong>
                Selecting Proprietorship instead of Partnership or applying under the wrong composition category creates compliance locks.
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-[#2C211A] pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <span>Frequently Asked Questions About GST Registration Services in Delhi</span>
              </h2>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">How can I apply for GST registration in Delhi?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  You can apply online via the official GST portal (gst.gov.in) under Services → Registration → New Registration. Upload PAN, Aadhaar, electricity bill, rent agreement with owner NOC, and complete Aadhaar biometric authentication. Taxoras manages the full digital filing and query clearance.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">What is the GST registration threshold in Delhi?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  In Delhi, the general turnover threshold is ₹20 lakh for service providers and ₹40 lakh for exclusive suppliers of goods, subject to statutory conditions.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">How many days does GST registration take in Delhi?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  When Aadhaar authentication is successful and documents match land registry/electricity records, approval is commonly granted within 3 to 7 working days. If the officer raises a Form GST REG-03 clarification, responding within 7 working days keeps the application on track.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Can I register for GST if I operate an online business?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Yes. Selling goods through Amazon, Flipkart, Meesho, or your own e-commerce website requires mandatory GST registration irrespective of your annual turnover.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <section className="bg-gradient-to-br from-[#251A13] via-[#1B1410] to-[#16100C] text-white rounded-3xl p-8 sm:p-10 border border-amber-600/30 shadow-xl space-y-6 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/70 border border-amber-600/40 px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              Delhi NCR Central Desk
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
              Get Your Delhi GST Registration Approved Fast &amp; Hassle-Free
            </h2>

            <p className="text-xs sm:text-sm text-[#DDD0C5] max-w-2xl mx-auto leading-relaxed">
              Let Taxoras handle document vetting, portal submission, and officer clarification response. Fixed fee of ₹999 for proprietorships with zero hidden charges.
            </p>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <a
                href={siteConfig.links.whatsappUrl("Delhi GST Registration Assistance", "Delhi")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Chat on WhatsApp (+91 88103 81949)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/locations/delhi/gst-registration"
                className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors border border-white/20"
              >
                Explore Delhi Hub
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp location="Delhi" />
    </div>
  );
}
