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
  Award,
  Sparkles,
  FileText,
  AlertCircle,
  Check
} from "lucide-react";

export const metadata: Metadata = {
  title: "Udyam Registration Online Charges in India – Complete Cost Guide | Taxoras",
  description:
    "Know the real Udyam registration online charges in India: official government fee is ₹0 (free). Learn eligibility, revised MSME limits, documents, and assisted registration support with Taxoras.",
  keywords: [
    "udyam registration online charges",
    "udyam registration fees in india",
    "is udyam registration free",
    "msme registration charges",
    "udyam registration process online",
    "revised msme classification limits",
    "taxoras udyam assistance"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/udyam-registration-online-charges-india",
  },
  openGraph: {
    title: "Udyam Registration Online Charges in India: What Does It Really Cost? (2026)",
    description:
      "Statutory breakdown of Udyam MSME registration charges in India. Official portal fee is ₹0. Learn revised classification limits, documents, and application steps.",
    url: "https://www.taxoras.online/blog/udyam-registration-online-charges-india",
    type: "article",
    publishedTime: "2026-11-04T09:00:00+05:30",
    modifiedTime: "2026-11-04T10:00:00+05:30",
    authors: ["Taxoras MSME Advisory Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Udyam Registration Online Charges in India (2026 Guide)",
    description: "Understand government fees, revised MSME limits, documents, and assisted Udyam registration.",
    images: ["https://www.taxoras.online/opengraph-image"],
  },
};

export default function UdyamRegistrationChargesPage() {
  const articleUrl = "https://www.taxoras.online/blog/udyam-registration-online-charges-india";

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
        "headline": "Udyam Registration Online Charges in India: What Does It Really Cost?",
        "description":
          "Know the Udyam registration online charges in India, government fees, documentation, eligibility and application process. Get expert registration assistance with Taxoras.",
        "image": "https://www.taxoras.online/opengraph-image",
        "datePublished": "2026-11-04T09:00:00+05:30",
        "dateModified": "2026-11-04T10:00:00+05:30",
        "mainEntityOfPage": articleUrl,
        "author": {
          "@type": "Organization",
          "name": "Taxoras MSME Advisory Desk",
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
            "name": "Udyam Registration Online Charges",
            "item": articleUrl
          }
        ]
      },
      {
        "@type": "AccountingService",
        "@id": `${articleUrl}#localbusiness`,
        "name": "Taxoras Advisory & Compliance - MSME Desk",
        "url": articleUrl,
        "telephone": siteConfig.contact.phone,
        "priceRange": "Govt Fee: ₹0 | Assisted: ₹499",
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
            "name": "What are the Udyam registration online charges in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The official Udyam registration process on the government portal (udyamregistration.gov.in) is 100% free of cost. The government charges ₹0 for issuing an Udyam Registration Certificate. If you choose professional assistance for document vetting, NIC code mapping, and filing support, nominal service charges apply."
            }
          },
          {
            "@type": "Question",
            "name": "Is Udyam registration free for new businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Eligible new and existing micro, small, and medium businesses can register directly on the official government website without paying any statutory fee."
            }
          },
          {
            "@type": "Question",
            "name": "Can I apply for Udyam registration without a consultant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, entrepreneurs can apply independently on udyamregistration.gov.in using Aadhaar OTP authentication. However, professional assistance helps prevent incorrect 5-digit NIC code selection, erroneous turnover figures, and application errors."
            }
          },
          {
            "@type": "Question",
            "name": "Is GST mandatory for Udyam registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GSTIN is mandatory only for businesses that legally require GST registration under GST law. For entities that are exempt from GST registration (e.g., turnover below threshold), Udyam registration can still be completed with PAN and Aadhaar."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to get an Udyam Registration Certificate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Once submitted and verified via PAN and Aadhaar databases, the electronic Udyam Certificate is generally generated within 2 to 5 working days and can be downloaded online."
            }
          },
          {
            "@type": "Question",
            "name": "Does Udyam registration require renewal every year?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The Udyam Registration Number is permanent and does not require annual renewal. However, enterprise turnover and investment details are auto-updated annually from Income Tax and GST returns."
            }
          },
          {
            "@type": "Question",
            "name": "Can a service-based business apply for Udyam registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Both manufacturing and service enterprises (including consultants, IT firms, freelancers, and healthcare providers) are fully eligible for Udyam registration."
            }
          },
          {
            "@type": "Question",
            "name": "Can one business have multiple Udyam registrations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. An enterprise can obtain only one Udyam Registration Number. Multiple manufacturing units or service activities must all be added under a single registration."
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
              <span className="font-semibold text-amber-400">Udyam Registration Online Charges</span>
            </nav>
          </div>
        </div>

        {/* Hero Article Header */}
        <header className="bg-gradient-to-b from-[#1F1611] to-[#120D0A] border-b border-[#2C211A] py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                MSME Statutory Cost Guide (2026)
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" /> Updated November 2026
              </span>
              <span className="text-xs font-semibold text-[#BCAE9F] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> 8 min read
              </span>
              <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-600/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <UserCheck className="w-3 h-3 text-emerald-400" /> Ministry Verified
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Udyam Registration Online Charges in India: What Does It Really Cost?
            </h1>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-md shrink-0">
                TX
              </div>
              <div>
                <p className="text-xs font-bold text-white">By the Taxoras MSME Advisory Desk</p>
                <p className="text-[11px] text-[#A6978A]">Government Recognition &amp; MSMED Act Compliance</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#DDD0C5] leading-relaxed max-w-4xl pt-2">
              Starting or formalising a business in India? One common question entrepreneurs ask is: <em className="text-white font-medium">&quot;What are the Udyam registration online charges in India?&quot;</em> Here is the absolute truth about government fees, fake portals, revised MSME limits, and how to get your certificate safely.
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
                  Crucial Fact &amp; Official Fee Check
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Government Fee for Udyam Registration Is 100% Free (₹0)
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
              The official Government of India portal (<strong className="text-amber-300">udyamregistration.gov.in</strong>) charges <strong className="text-emerald-400 font-bold">zero government fee (₹0)</strong> for MSME Udyam registration. Beware of fraudulent scam websites that mimic the government portal and charge ₹1,500 to ₹3,000 as mandatory registration charges. If you hire a professional consultancy like <strong className="text-white">Taxoras</strong>, nominal private service fees apply purely for NIC code selection, data verification, and assisted filing.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="bg-[#2C1D14] text-emerald-400 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Official Govt Fee: ₹0
              </span>
              <span className="bg-[#2C1D14] text-amber-300 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Validated Official Portal: udyamregistration.gov.in
              </span>
              <span className="bg-[#2C1D14] text-sky-400 px-3 py-1 rounded-md border border-[#3E291C] font-semibold">
                ✓ Priority Lending &amp; Subsidy Benefits
              </span>
            </div>
          </section>

          {/* Section: Revised MSME Classification Table */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-[#2C211A] pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-amber-400" />
                <span>Revised MSME Classification and Investment Limits (2025–2026)</span>
              </h2>
              <p className="text-xs text-[#BCAE9F] mt-1">
                Both investment in plant &amp; machinery/equipment AND annual turnover must be satisfied.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#2C211A] bg-[#17100B] shadow-md">
              <table className="w-full text-xs text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#241A14] border-b border-[#2C211A] text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4">Enterprise Category</th>
                    <th className="py-3.5 px-4">Maximum Investment Limit</th>
                    <th className="py-3.5 px-4">Maximum Annual Turnover Limit</th>
                    <th className="py-3.5 px-4">Key Eligibility Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#241A14] text-[#DDD0C5]">
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3.5 px-4 font-bold text-amber-300">Micro Enterprise</td>
                    <td className="py-3.5 px-4 font-semibold text-white">Up to ₹2.5 Crore</td>
                    <td className="py-3.5 px-4 font-semibold text-white">Up to ₹10 Crore</td>
                    <td className="py-3.5 px-4 text-[#A6978A]">Small retail shops, consultancies, workshops</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3.5 px-4 font-bold text-emerald-400">Small Enterprise</td>
                    <td className="py-3.5 px-4 font-semibold text-white">Up to ₹25 Crore</td>
                    <td className="py-3.5 px-4 font-semibold text-white">Up to ₹100 Crore</td>
                    <td className="py-3.5 px-4 text-[#A6978A]">Manufacturing units, distributors, IT agencies</td>
                  </tr>
                  <tr className="hover:bg-[#1E150F]">
                    <td className="py-3.5 px-4 font-bold text-sky-400">Medium Enterprise</td>
                    <td className="py-3.5 px-4 font-semibold text-white">Up to ₹125 Crore</td>
                    <td className="py-3.5 px-4 font-semibold text-white">Up to ₹500 Crore</td>
                    <td className="py-3.5 px-4 text-[#A6978A]">Large factories, heavy commercial entities</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Why Udyam Registration Matters */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-4 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>4 Critical Benefits of Holding an Udyam Certificate</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#DDD0C5]">
              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1.5">
                <h4 className="font-bold text-white text-sm">1. Section 43B(h) 45-Day Payment Protection</h4>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Buyers must clear dues of registered micro and small enterprises within 45 days (or 15 days if no written agreement). Defaulting buyers lose tax deduction on overdue expenses.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1.5">
                <h4 className="font-bold text-white text-sm">2. Collateral-Free Loans Under CGTMSE</h4>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Access priority sector commercial bank credit and collateral-free loan guarantees up to ₹5 Crore through SIDBI and government credit schemes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1.5">
                <h4 className="font-bold text-white text-sm">3. 50% Patent &amp; Trademark Fee Subsidy</h4>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Registered enterprises receive a 50% government fee reduction on intellectual property applications including trademarks, designs, and patents.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] space-y-1.5">
                <h4 className="font-bold text-white text-sm">4. Exemption from EMD in Government Tenders</h4>
                <p className="text-[#DDD0C5] leading-relaxed">
                  Earnest Money Deposit (EMD) waivers and exclusive reservation in public procurement portals (GeM - Government e-Marketplace).
                </p>
              </div>
            </div>
          </section>

          {/* Section: Documents & Registration Process */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-amber-400" />
              <span>Step-by-Step Online Registration &amp; Required Details</span>
            </h2>

            <div className="space-y-3.5 text-xs text-[#DDD0C5]">
              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Visit Official Portal</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Open <strong>https://udyamregistration.gov.in/</strong> and select &quot;For New Entrepreneurs who are not registered yet as MSME&quot;.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Aadhaar Authentication</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Enter the 12-digit Aadhaar number and applicant name. Authenticate with OTP sent to the registered mobile number.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-white text-sm">PAN Validation &amp; Entity Type</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Select business structure (Proprietorship, Partnership, LLP, Pvt Ltd). Enter PAN card details for real-time CBDT database validation.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">4</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Enter Enterprise Details &amp; NIC Code</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Enter plant/office address, bank details (IFSC + Account Number), employment headcount, and select accurate 5-digit National Industry Classification (NIC) codes.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#241A14] border border-[#38291F] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-extrabold flex items-center justify-center shrink-0">5</span>
                <div>
                  <h4 className="font-bold text-white text-sm">Submit with Final OTP &amp; Download URN</h4>
                  <p className="text-[#DDD0C5] mt-1 leading-relaxed">Submit the self-declaration. You receive a permanent Udyam Registration Number (URN). The certificate generates within 2–5 working days.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Common Registration Mistakes */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-4 shadow-xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>4 Costly Udyam Registration Mistakes to Avoid</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#DDD0C5]">
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">1. Paying on Fake Portals:</strong>
                Never pay private websites posing as government portals with fake .org or .com domains.
              </div>
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">2. Selecting Incorrect 5-Digit NIC Code:</strong>
                Choosing wrong activity codes creates banking rejection when applying for MSME loan subsidies.
              </div>
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">3. Inconsistent Investment/Turnover:</strong>
                Declared figures must match past ITR-3/ITR-4 filings since the portal syncs directly with CBDT.
              </div>
              <div className="p-3.5 rounded-xl bg-[#241A14] border border-[#38291F]">
                <strong className="text-white block mb-1">4. Attempting Duplicate Registrations:</strong>
                Only one Udyam number is permitted per PAN. Multiple business activities must be merged into one.
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-[#1B1410] rounded-2xl border border-[#2C211A] p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-[#2C211A] pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <span>Frequently Asked Questions About Udyam Registration Online Charges</span>
              </h2>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">What are the Udyam registration online charges in India?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  The official Udyam registration process on the government portal (udyamregistration.gov.in) is 100% free of cost. The government charges ₹0 for issuing an Udyam Registration Certificate. If you choose professional assistance for document vetting, NIC code mapping, and filing support, nominal service charges apply.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Is GST mandatory for Udyam registration?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  GSTIN is mandatory only for businesses that legally require GST registration under GST law. For entities that are exempt from GST registration (e.g., turnover below threshold), Udyam registration can still be completed with PAN and Aadhaar.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Can one business have multiple Udyam registrations?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  No. An enterprise can obtain only one Udyam Registration Number. Multiple manufacturing units or service activities must all be added under a single registration.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#241A14] border border-[#38291F] space-y-2">
                <h3 className="font-bold text-white text-sm">Does Udyam registration require renewal every year?</h3>
                <p className="text-[#DDD0C5] leading-relaxed">
                  No. The Udyam Registration Number is permanent and does not require annual renewal. However, enterprise turnover and investment details are auto-updated annually from Income Tax and GST returns.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <section className="bg-gradient-to-br from-[#251A13] via-[#1B1410] to-[#16100C] text-white rounded-3xl p-8 sm:p-10 border border-amber-600/30 shadow-xl space-y-6 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/70 border border-amber-600/40 px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Get Verified MSME Recognition
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
              Need Assisted Udyam Registration with Error-Free NIC Mapping?
            </h2>

            <p className="text-xs sm:text-sm text-[#DDD0C5] max-w-2xl mx-auto leading-relaxed">
              Ensure your enterprise is mapped to the exact 5-digit manufacturing/service activity code for maximum bank subsidy and Section 43B(h) protection.
            </p>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-3">
              <a
                href={siteConfig.links.whatsappUrl("Udyam MSME Registration Assistance", "All India")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Chat on WhatsApp (+91 88103 81949)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/services/msme-udyam-registration"
                className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors border border-white/20"
              >
                View MSME Service Page
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
