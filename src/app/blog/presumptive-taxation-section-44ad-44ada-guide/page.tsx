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
  Calculator,
  Laptop,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Section 44AD & 44ADA Presumptive Taxation Scheme: Eligibility, Limits & Tax Savings Guide (2026)",
  description:
    "Master guide to presumptive taxation under Section 44AD (businesses up to ₹3 Cr) and Section 44ADA (professionals & freelancers up to ₹75 L). Learn minimum profit rates, ITR-4 filing, advance tax rules, and audit exemptions in India.",
  keywords: [
    "section 44ad limits 3 crore",
    "section 44ada professionals freelancers 75 lakhs",
    "presumptive taxation scheme income tax",
    "itr 4 sugam filing online",
    "section 44ab tax audit exemption",
    "presumptive taxation advance tax 15 march",
    "taxoras income tax filing"
  ],
  alternates: {
    canonical: "https://www.taxoras.online/blog/presumptive-taxation-section-44ad-44ada-guide",
  },
  openGraph: {
    title: "Section 44AD & 44ADA Presumptive Taxation Scheme Guide (2026)",
    description:
      "Statutory breakdown of presumptive tax schemes for small businesses, freelancers, and professionals under the Indian Income Tax Act.",
    url: "https://www.taxoras.online/blog/presumptive-taxation-section-44ad-44ada-guide",
    type: "article",
    publishedTime: "2026-10-17T11:00:00+05:30",
    modifiedTime: "2026-10-17T12:45:00+05:30",
    authors: ["Taxoras Direct Tax Advisory"],
  },
};

export default function PresumptiveTaxationGuidePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Section 44AD & 44ADA Presumptive Taxation Scheme: Eligibility, Limits & Tax Savings Guide",
    description:
      "Complete statutory analysis of presumptive taxation under Section 44AD and 44ADA for Indian businesses, consultants, and professionals.",
    image: "https://www.taxoras.online/images/og-default.jpg",
    author: {
      "@type": "Organization",
      name: "Taxoras Direct Tax Advisory",
      url: "https://www.taxoras.online",
    },
    publisher: {
      "@type": "Organization",
      name: "Taxoras Advisory & Compliance",
      logo: {
        "@type": "ImageObject",
        url: "https://www.taxoras.online/logo.png",
      },
    },
    datePublished: "2026-10-17T11:00:00+05:30",
    dateModified: "2026-10-17T12:45:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.taxoras.online/blog/presumptive-taxation-section-44ad-44ada-guide",
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.taxoras.online",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.taxoras.online/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Section 44AD & 44ADA Presumptive Taxation",
        item: "https://www.taxoras.online/blog/presumptive-taxation-section-44ad-44ada-guide",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the enhanced turnover limits for Section 44AD and 44ADA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the Income Tax Act (amended via Finance Act 2023), Section 44AD threshold is ₹2 Crore, enhanced to ₹3 Crore if cash receipts do not exceed 5% of total turnover. Under Section 44ADA, the threshold is ₹50 Lakhs, enhanced to ₹75 Lakhs if cash receipts do not exceed 5% of gross receipts.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to maintain books of accounts or get a CA audit under presumptive taxation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Taxpayers declaring profit at or above the presumptive rates (6%/8% under Section 44AD or 50% under Section 44ADA) are completely exempt from maintaining books of accounts under Section 44AA and exempt from mandatory tax audit under Section 44AB.",
        },
      },
      {
        "@type": "Question",
        name: "Can freelancers and software developers opt for Section 44ADA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Technical consultancy and IT services fall under the notified professions under Section 44AA(1). Independent software engineers, UI/UX designers, copywriters, and tech consultants with gross receipts up to ₹75 Lakhs can declare 50% of receipts as taxable income via ITR-4.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 5-year lock-in rule under Section 44AD?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If an eligible taxpayer opts for Section 44AD and then declares profits lower than presumptive rates in any of the subsequent 5 assessment years, they cannot opt back into Section 44AD for the next 5 assessment years and must undergo compulsory tax audit under Section 44AB if income exceeds the basic exemption limit.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#120D0A] text-[#FAF4EF] flex flex-col selection:bg-amber-500/20 selection:text-amber-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#DDD0C5] flex items-center gap-2">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white font-medium">Section 44AD &amp; 44ADA Guide</span>
          </nav>

          {/* Article Header */}
          <header className="space-y-4 border-b border-surface-border pb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3 py-1 rounded-full uppercase tracking-wider">
                Direct Tax &amp; Freelancer Compliance
              </span>
              <span className="text-xs text-[#DDD0C5] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" /> October 17, 2026
              </span>
              <span className="text-xs text-[#DDD0C5] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> 10 Min Read
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Section 44AD &amp; 44ADA Presumptive Taxation Scheme: Limits, Eligibility &amp; Tax Savings Guide (2026)
            </h1>

            <p className="text-base sm:text-lg text-[#DDD0C5] leading-relaxed">
              Maintaining complicated accounting books, tracking individual chai and fuel receipts, and paying hefty CA audit fees is a nightmare for small business owners and freelancers. India&apos;s Presumptive Taxation Scheme (PTS) provides complete exemption from books of accounts under Section 44AA and tax audits under Section 44AB. Here is how Section 44AD (businesses up to ₹3 Cr) and Section 44ADA (professionals up to ₹75 Lakhs) work.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                TX
              </div>
              <div>
                <p className="text-xs font-bold text-white">Taxoras Direct Tax &amp; ITR Advisory Board</p>
                <p className="text-[11px] text-[#DDD0C5]">Curated for MSMEs, Startups, Digital Creators &amp; Professionals</p>
              </div>
            </div>
          </header>

          {/* Key Numbers Callout Card */}
          <div className="bg-[#1B1410] border border-surface-border rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-400 shrink-0" />
              Presumptive Taxation at a Glance (AY 2025-26 &amp; AY 2026-27)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#DDD0C5]">
              <div className="bg-[#120D0A] p-4 rounded-xl border border-surface-border space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-white">Section 44AD (Businesses)</strong>
                  <span className="text-xs text-amber-400 font-mono font-bold">Up to ₹3 Crore</span>
                </div>
                <p className="text-xs">
                  Deemed taxable profit is <strong>6%</strong> on digital / banking turnover and <strong>8%</strong> on cash receipts. Enhanced from ₹2 Cr to ₹3 Cr if cash is ≤ 5%.
                </p>
              </div>

              <div className="bg-[#120D0A] p-4 rounded-xl border border-surface-border space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-white">Section 44ADA (Professionals)</strong>
                  <span className="text-xs text-amber-400 font-mono font-bold">Up to ₹75 Lakhs</span>
                </div>
                <p className="text-xs">
                  Flat <strong>50%</strong> of gross receipts declared as taxable income. Remaining 50% deemed as operational expenses. Enhanced from ₹50 L to ₹75 L if cash is ≤ 5%.
                </p>
              </div>

              <div className="bg-[#120D0A] p-4 rounded-xl border border-surface-border space-y-1">
                <strong className="text-white block">Audit &amp; Bookkeeping Exemption</strong>
                <p className="text-xs">
                  Zero requirement to maintain ledger books under Section 44AA or undergo mandatory Tax Audit under Section 44AB. File easily using <strong>ITR-4 (Sugam)</strong>.
                </p>
              </div>

              <div className="bg-[#120D0A] p-4 rounded-xl border border-surface-border space-y-1">
                <strong className="text-white block">Single Advance Tax Installment</strong>
                <p className="text-xs">
                  No quarterly advance tax stress. Pay <strong>100% of advance tax</strong> in one single installment on or before <strong>15th March</strong> of the financial year.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <nav aria-label="Table of Contents" className="bg-[#1B1410] p-6 rounded-2xl border border-surface-border">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Contents in this Guide</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#DDD0C5]">
              <li><a href="#section-44ad-businesses" className="hover:text-amber-400">1. Section 44AD: Small Business Framework</a></li>
              <li><a href="#digital-incentive-rates" className="hover:text-amber-400">2. Digital 6% vs Cash 8% Profit Calculation</a></li>
              <li><a href="#section-44ada-freelancers" className="hover:text-amber-400">3. Section 44ADA: Consultants &amp; Freelancers</a></li>
              <li><a href="#advance-tax-itr4" className="hover:text-amber-400">4. Advance Tax &amp; ITR-4 Sugam Filing Rules</a></li>
              <li><a href="#five-year-lockin" className="hover:text-amber-400">5. The Dangerous 5-Year Lock-in Trap (44AD)</a></li>
              <li><a href="#faqs" className="hover:text-amber-400">6. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* Section 1 */}
          <section id="section-44ad-businesses" className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Building className="w-6 h-6 text-amber-400 shrink-0" />
              1. Section 44AD: Presumptive Taxation for Small Businesses
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              Section 44AD was introduced to relieve small traders, retailers, manufacturers, wholesalers, and service contractors from the crushing compliance weight of accounting maintenance and annual tax audits.
            </p>
            
            <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-3">
              <h3 className="text-sm font-bold text-white">Who Is Eligible for Section 44AD?</h3>
              <ul className="space-y-2 text-xs text-[#DDD0C5]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Resident Individuals, Hindu Undivided Families (HUFs), and Partnership Firms</strong> (excluding Limited Liability Partnerships / LLPs).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Total turnover or gross receipts must not exceed <strong>₹2 Crore</strong> (or <strong>₹3 Crore</strong> if aggregate cash receipts are 5% or less of turnover).</span>
                </li>
              </ul>

              <h3 className="text-sm font-bold text-white pt-2">Who is Specifically Disqualified from Section 44AD?</h3>
              <ul className="space-y-2 text-xs text-[#DDD0C5]">
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Limited Liability Partnerships (LLPs) and Private / Public Limited Companies.</span>
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Individuals earning commission, brokerage, or agency income (e.g., insurance agents, real estate brokers).</span>
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Taxpayers engaged in professions governed under Section 44AA(1) (they must use Section 44ADA instead).</span>
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Businesses plying, hiring, or leasing goods carriages (covered under Section 44AE).</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section id="digital-incentive-rates" className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Calculator className="w-6 h-6 text-amber-400 shrink-0" />
              2. Digital 6% vs Cash 8% Profit Calculation
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              To promote Digital India and cashless banking transactions, the government offers a direct 25% tax discount on deemed profit margins for payments received electronically:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Digital Receipts (UPI / NEFT / Cards)</span>
                <h3 className="text-xl font-extrabold text-white">6% Minimum Profit</h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Applies to all amounts received by an account payee cheque, bank draft, NEFT, RTGS, IMPS, UPI, or debit/credit card during the financial year or before the return filing due date under Section 139(1).
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Cash &amp; Other Non-Banking Receipts</span>
                <h3 className="text-xl font-extrabold text-white">8% Minimum Profit</h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Applies to all turnover received in physical cash or bearer instruments. If your total cash receipts exceed 5% of turnover, your upper threshold caps at ₹2 Crore instead of ₹3 Crore.
                </p>
              </div>
            </div>

            <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-3">
              <h3 className="text-sm font-bold text-white">Practical Example: ₹1.5 Crore Turnover Business</h3>
              <p className="text-xs text-[#DDD0C5] leading-relaxed">
                Suppose Sharma Electronics has ₹1.2 Crore receipts via UPI/QR and ₹30 Lakhs in cash.
              </p>
              <div className="bg-[#120D0A] p-4 rounded-xl border border-surface-border text-xs space-y-1 font-mono text-[#DDD0C5]">
                <p>Digital Turnover: ₹1,20,00,000 × 6% = <span className="text-white font-bold">₹7,20,000</span></p>
                <p>Cash Turnover:    ₹30,00,000 × 8% = <span className="text-white font-bold">₹2,40,000</span></p>
                <p className="text-amber-400 font-bold pt-1 border-t border-surface-border">Total Deemed Net Taxable Profit: ₹9,60,000</p>
              </div>
              <p className="text-xs text-[#DDD0C5]">
                No books of accounts, no expense vouchers, and no CA audit needed. Sharma files ITR-4 directly declaring ₹9.6 Lakhs net income!
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-44ada-freelancers" className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Laptop className="w-6 h-6 text-amber-400 shrink-0" />
              3. Section 44ADA: The Freelancer &amp; Professional Super-Weapon
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              If you are an independent consultant, freelance software developer, doctor, architect, or interior designer, Section 44ADA is arguably the most tax-friendly provision in Indian tax jurisprudence.
            </p>

            <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-4">
              <div>
                <h3 className="text-sm font-bold text-white">Eligible Specified Professions [Section 44AA(1)]:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 text-xs text-[#DDD0C5]">
                  <span className="bg-[#120D0A] p-2 rounded-lg border border-surface-border">Software &amp; IT Engineers</span>
                  <span className="bg-[#120D0A] p-2 rounded-lg border border-surface-border">Medical Practitioners</span>
                  <span className="bg-[#120D0A] p-2 rounded-lg border border-surface-border">Legal Professionals</span>
                  <span className="bg-[#120D0A] p-2 rounded-lg border border-surface-border">Accountants &amp; Auditors</span>
                  <span className="bg-[#120D0A] p-2 rounded-lg border border-surface-border">Architects &amp; Civil Engineers</span>
                  <span className="bg-[#120D0A] p-2 rounded-lg border border-surface-border">Interior Decorators</span>
                  <span className="bg-[#120D0A] p-2 rounded-lg border border-surface-border">Technical Consultants</span>
                  <span className="bg-[#120D0A] p-2 rounded-lg border border-surface-border">Company Secretaries</span>
                  <span className="bg-[#120D0A] p-2 rounded-lg border border-surface-border">Authorized Representatives</span>
                </div>
              </div>

              <div className="border-t border-surface-border pt-3">
                <h3 className="text-sm font-bold text-white mb-1">Turnover Threshold &amp; Presumptive Margin:</h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Gross receipts can be up to <strong>₹50 Lakhs</strong> (enhanced to <strong>₹75 Lakhs</strong> if cash receipts are 5% or less). The law presumes <strong>50%</strong> of gross receipts as your net taxable profit. The remaining 50% is deemed to have been spent on laptops, internet, home office rent, client travel, subscriptions, and depreciation.
                </p>
              </div>

              <div className="bg-amber-950/20 border border-amber-600/30 p-4 rounded-xl flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-[#DDD0C5] leading-relaxed space-y-1">
                  <strong className="text-white block font-medium">Remote US/European Tech Contractors:</strong>
                  <p>
                    If you earn $60,000 (approx. ₹50 Lakhs) working remotely for US clients, you declare ₹25 Lakhs as presumptive income under Section 44ADA. Under the New Tax Regime, your total income tax liability is drastically reduced while retaining zero bookkeeping liability!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="advance-tax-itr4" className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Calendar className="w-6 h-6 text-amber-400 shrink-0" />
              4. Advance Tax &amp; ITR-4 (Sugam) Filing Protocol
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              Standard businesses must calculate and deposit advance tax in 4 quarterly installments (15% in June, 45% in September, 75% in December, and 100% in March). Failure results in penal interest under Section 234B and 234C.
            </p>

            <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Single Installment by 15th March Exemption
              </div>
              <p className="text-xs text-[#DDD0C5] leading-relaxed">
                Taxpayers opting for Section 44AD or 44ADA are completely exempt from the 15th June, 15th Sept, and 15th Dec advance tax schedules. You only pay <strong>100% of advance tax in one shot on or before 15th March</strong>. Any tax paid up to 31st March is also treated as advance tax.
              </p>

              <div className="flex items-center gap-2 text-white font-bold text-sm pt-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Filing via Simplified ITR-4 (Sugam)
              </div>
              <p className="text-xs text-[#DDD0C5] leading-relaxed">
                Unlike complex ITR-3 returns that require Balance Sheet and Profit &amp; Loss reporting, ITR-4 only requires 4 financial indicators:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center">
                <div className="bg-[#120D0A] p-2 rounded-lg border border-surface-border">Total Sundry Debtors</div>
                <div className="bg-[#120D0A] p-2 rounded-lg border border-surface-border">Total Sundry Creditors</div>
                <div className="bg-[#120D0A] p-2 rounded-lg border border-surface-border">Total Closing Stock</div>
                <div className="bg-[#120D0A] p-2 rounded-lg border border-surface-border">Cash &amp; Bank Balance</div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="five-year-lockin" className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
              5. The Dangerous 5-Year Lock-in Trap (Section 44AD Only)
            </h2>
            <p className="text-sm text-[#DDD0C5] leading-relaxed">
              Many business owners switch into Section 44AD in profitable years and switch out to declare actual low profits or losses in bad years. Section 44AD(4) imposes a punitive 5-year lock-in penalty to prevent misuse:
            </p>

            <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border space-y-3">
              <p className="text-xs text-[#DDD0C5] leading-relaxed">
                If you opt into Section 44AD for FY 2024-25, but in FY 2025-26 you declare profit below 6%/8% (e.g. 3%), you lose the right to use Section 44AD for the next <strong>5 consecutive Assessment Years</strong> (AY 2026-27 to AY 2030-31).
              </p>
              <div className="bg-[#120D0A] p-3 rounded-lg border border-surface-border text-xs text-[#DDD0C5]">
                <strong className="text-white block mb-1">Audit Mandate:</strong>
                During these 5 years, if your total income exceeds the basic exemption limit, you are legally compelled to maintain audited books of accounts and undergo a mandatory Chartered Accountant Tax Audit under Section 44AB.
              </div>
              <p className="text-[11px] text-amber-400/90 italic">
                *Note: This 5-year lock-in rule applies exclusively to Section 44AD. It does <strong>not</strong> apply to Section 44ADA for professionals!
              </p>
            </div>
          </section>

          {/* Section 6: FAQ */}
          <section id="faqs" className="space-y-6 pt-4 border-t border-surface-border">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-400 shrink-0" />
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-4">
              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  What are the enhanced turnover limits for Section 44AD and 44ADA?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Under the Income Tax Act (amended via Finance Act 2023), Section 44AD threshold is ₹2 Crore, enhanced to ₹3 Crore if cash receipts do not exceed 5% of total turnover. Under Section 44ADA, the threshold is ₹50 Lakhs, enhanced to ₹75 Lakhs if cash receipts do not exceed 5% of gross receipts.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  Do I need to maintain books of accounts or get a CA audit under presumptive taxation?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  No. Taxpayers declaring profit at or above the presumptive rates (6%/8% under Section 44AD or 50% under Section 44ADA) are completely exempt from maintaining books of accounts under Section 44AA and exempt from mandatory tax audit under Section 44AB.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  Can freelancers and software developers opt for Section 44ADA?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  Yes. Technical consultancy and IT services fall under the notified professions under Section 44AA(1). Independent software engineers, UI/UX designers, copywriters, and tech consultants with gross receipts up to ₹75 Lakhs can declare 50% of receipts as taxable income via ITR-4.
                </p>
              </div>

              <div className="bg-[#1B1410] p-5 rounded-2xl border border-surface-border shadow-xs">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  What is the 5-year lock-in rule under Section 44AD?
                </h3>
                <p className="text-xs text-[#DDD0C5] leading-relaxed">
                  If an eligible taxpayer opts for Section 44AD and then declares profits lower than presumptive rates in any of the subsequent 5 assessment years, they cannot opt back into Section 44AD for the next 5 assessment years and must undergo compulsory tax audit under Section 44AB if income exceeds the basic exemption limit.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA Banner */}
          <section className="bg-gradient-to-br from-[#251A13] to-[#16100C] border border-amber-600/40 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6 text-center sm:text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                Need Help Deciding Between ITR-3 &amp; ITR-4?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                File Your Presumptive Return with Maximum Legal Deductions
              </h2>
              <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
                Connect with our senior direct tax accountants. We will review your banking receipts, evaluate the 5-year lock-in risk, optimize your Section 80C/80D deductions under both Old and New Tax regimes, and file your ITR-4 accurately.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <a
                href={siteConfig.links.whatsappUrl("Presumptive Taxation Section 44AD/44ADA Consultation")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 shadow-md"
              >
                <span>Consult on WhatsApp</span>
              </a>
              <Link
                href="/services/income-tax-return"
                className="bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 shadow-md"
              >
                <span>View Income Tax Services</span>
                <ArrowRight className="w-4 h-4" />
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
