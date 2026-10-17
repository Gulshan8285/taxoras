import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Scale,
  FileCheck2,
  TrendingUp,
  ShieldCheck,
  Search
} from "lucide-react";

export const metadata: Metadata = {
  title: "Accounting & GST Compliance Blog | Taxoras Advisory",
  description:
    "Research-backed guides, market comparisons, and actionable tax compliance insights for Indian businesses, startups, and MSMEs.",
  alternates: {
    canonical: "https://taxorasconsultants.in/blog",
  },
};

const FEATURED_ARTICLES = [
  {
    title: "Top 10 GST Service Providers in India: Services, Pricing and How to Choose",
    slug: "/blog/top-gst-service-providers-in-india",
    category: "Market Comparison",
    date: "October 2026",
    readTime: "12 min read",
    summary:
      "An evidence-based evaluation of leading GST filing platforms, aggregators, and boutique firms in India. Compare verified pricing, invoice limits, GSTR-2B matching, and assisted support.",
    featured: true,
  },
  {
    title: "GST Registration in India: Documents, Eligibility & Process Guide",
    slug: "/resources/gst-registration-india-documents-process",
    category: "GST Guides",
    date: "October 2026",
    readTime: "6 min read",
    summary:
      "A detailed roadmap to GST registration for Indian businesses. Learn statutory turnover thresholds, entity-wise document checklists, and common application pitfalls.",
    featured: false,
  },
  {
    title: "GSTR-1 vs GSTR-3B: Key Differences, Timelines and ITC Reconciliation",
    slug: "/resources/gstr-1-vs-gstr-3b-key-differences",
    category: "GST Compliance",
    date: "October 2026",
    readTime: "8 min read",
    summary:
      "Understand why outward supplies in GSTR-1 and tax settlement in GSTR-3B must align under Rule 88C to avoid scrutiny notices and blocked ITC.",
    featured: false,
  },
  {
    title: "MSME / Udyam Registration: Process, Eligibility and Free Portal Guide",
    slug: "/resources/msme-udyam-registration-process-benefits",
    category: "Registrations",
    date: "October 2026",
    readTime: "5 min read",
    summary:
      "Complete guide to zero-fee Udyam registration on the official government portal. Avoid scam websites and unlock priority banking benefits.",
    featured: false,
  },
  {
    title: "Quarterly TDS Compliance: Form 24Q, 26Q & Challan 281 Requirements",
    slug: "/resources/quarterly-tds-compliance-24q-26q",
    category: "Taxation",
    date: "October 2026",
    readTime: "7 min read",
    summary:
      "Demystifying quarterly tax deducted at source rules for salaries and commercial vendor contracts under Sections 192, 194C, and 194J.",
    featured: false,
  }
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main font-sans">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Header */}
        <header className="bg-white border-b border-surface-border py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              Compliance Research & Regulatory Insights
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mt-1 mb-4">
              Knowledge Hub for Indian Businesses
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
              Objective guides, competitive benchmarks, and practical checklists to help MSMEs, startups, and traders master Indian accounting and compliance.
            </p>
          </div>
        </header>

        {/* Articles List Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
          
          {/* Featured Article Card */}
          {FEATURED_ARTICLES.filter((a) => a.featured).map((article) => (
            <div
              key={article.slug}
              className="bg-gradient-to-br from-navy to-navy-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
                <span className="bg-teal text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider text-[11px]">
                  Featured Pillar Guide
                </span>
                <span className="text-slate-300">{article.date}</span>
                <span>•</span>
                <span className="text-slate-300">{article.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 group-hover:text-teal transition-colors">
                <Link href={article.slug}>{article.title}</Link>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mb-6">
                {article.summary}
              </p>

              <Link
                href={article.slug}
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md"
              >
                <span>Read Complete Research & Comparison</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}

          {/* Grid of Other Articles */}
          <div className="pt-4">
            <h2 className="text-lg font-bold text-navy mb-4 border-l-2 border-teal pl-2.5">
              Compliance Articles & Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURED_ARTICLES.filter((a) => !a.featured).map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-2xl border border-surface-border p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-text-muted mb-2">
                      <span className="font-bold text-teal bg-teal-light px-2.5 py-0.5 rounded-full">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-navy tracking-tight mb-2 hover:text-brand-blue transition-colors">
                      <Link href={article.slug}>{article.title}</Link>
                    </h3>

                    <p className="text-xs text-text-muted leading-relaxed line-clamp-3 mb-4">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-surface-border flex items-center justify-between text-xs">
                    <span className="text-text-muted">{article.date}</span>
                    <Link
                      href={article.slug}
                      className="font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Explore More in Educational Library */}
          <div className="bg-white rounded-2xl border border-surface-border p-6 text-center shadow-xs">
            <h3 className="text-base font-bold text-navy mb-2">
              Looking for More Regulatory Guides & Checklists?
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mb-4 max-w-lg mx-auto">
              Browse our complete library of compliance resources, legal notices, and accounting walkthroughs.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-navy font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl transition-colors"
            >
              <span>Explore All Resources</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
