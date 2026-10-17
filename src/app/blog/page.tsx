import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { BookOpen, ArrowRight, Calendar, Clock, ShieldCheck, Scale, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Compliance Guides | Taxoras Advisory & Compliance",
  description:
    "Expert articles and statutory compliance guides on GST amnesty schemes, Section 16(4) ITC deadlines, Section 44AD/44ADA presumptive taxation, and top GST service provider benchmarks.",
  alternates: {
    canonical: "https://www.taxoras.online/blog",
  },
};

interface ArticleItem {
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  badge?: string;
  featured?: boolean;
}

const BLOG_ARTICLES: ArticleItem[] = [
  {
    title: "Top 7 GST Return Filing Service Providers in India (2026 Tested Comparison)",
    slug: "/blog/top-gst-service-providers-in-india",
    category: "Market Comparison",
    date: "October 2026",
    readTime: "12 min read",
    summary:
      "An evidence-based evaluation of leading GST filing platforms, aggregators, and boutique firms in India. Compare verified pricing, invoice limits, GSTR-2B matching, and assisted support.",
    badge: "Editor'''s Choice Pillar",
    featured: true,
  },
  {
    title: "GST Amnesty Scheme & Late Fee Waiver Rules: Complete Eligibility & Relief Guide (2026)",
    slug: "/blog/gst-amnesty-scheme-late-fee-waiver-rules",
    category: "GST Amnesty",
    date: "October 2026",
    readTime: "9 min read",
    summary:
      "Statutory breakdown of GST late fee caps for GSTR-3B, GSTR-4, and GSTR-9. Step-by-step procedure to revive cancelled GSTINs and clear pending returns without penalty.",
    badge: "Trending Statutory Guide",
    featured: false,
  },
  {
    title: "Section 16(4) ITC Deadline Updates & Retrospective Relief: Law & Reconciliation Guide (2026)",
    slug: "/blog/section-16-4-itc-deadline-updates",
    category: "ITC & Audit",
    date: "October 2026",
    readTime: "11 min read",
    summary:
      "Master the 30th November statutory ITC cutoff date, landmark retrospective relief under Sections 16(5) & 16(6), Rule 37A reversal compliance, and automated 2B reconciliation.",
    badge: "High Impact Compliance",
    featured: false,
  },
  {
    title: "Section 44AD & 44ADA Presumptive Taxation Scheme: Limits, Rates & Savings Guide (2026)",
    slug: "/blog/presumptive-taxation-section-44ad-44ada-guide",
    category: "Direct Tax & Freelancers",
    date: "October 2026",
    readTime: "10 min read",
    summary:
      "Complete guide to presumptive taxation for businesses (up to ₹3 Cr at 6%/8%) and professionals (up to ₹75 L at 50%). Zero books of accounts, ITR-4 filing, and single advance tax rule.",
    badge: "MSME & Creator Tax",
    featured: false,
  },
];

const RESOURCE_GUIDES: ArticleItem[] = [
  {
    title: "GST Registration in India: Documents, Eligibility & Process Guide",
    slug: "/resources/gst-registration-india-documents-process",
    category: "GST Guides",
    date: "October 2026",
    readTime: "6 min read",
    summary:
      "A detailed roadmap to GST registration for Indian businesses. Learn statutory turnover thresholds, entity-wise document checklists, and common application pitfalls.",
  },
  {
    title: "Understanding GSTR-1 and GSTR-3B: Filing Differences & ITC Alignment",
    slug: "/resources/understanding-gstr-1-and-gstr-3b",
    category: "GST Compliance",
    date: "October 2026",
    readTime: "8 min read",
    summary:
      "Understand why outward supplies in GSTR-1 and tax settlement in GSTR-3B must align under Rule 88C to avoid scrutiny notices and blocked ITC.",
  },
  {
    title: "Udyam / MSME Registration: Eligibility Checklist & Portal Process",
    slug: "/resources/udyam-registration-eligibility-checklist",
    category: "Registrations",
    date: "October 2026",
    readTime: "5 min read",
    summary:
      "Complete guide to zero-fee Udyam registration on the official government portal. Avoid scam websites and unlock priority banking benefits.",
  },
  {
    title: "What is TDS and When Does it Apply? Sections 192, 194C & 194J Guide",
    slug: "/resources/what-is-tds-and-when-does-it-apply",
    category: "Taxation",
    date: "October 2026",
    readTime: "7 min read",
    summary:
      "Demystifying quarterly tax deducted at source rules for salaries and commercial vendor contracts under Sections 192, 194C, and 194J.",
  },
];

export default function BlogIndexPage() {
  const featuredArticle = BLOG_ARTICLES.find((a) => a.featured) || BLOG_ARTICLES[0];
  const otherBlogArticles = BLOG_ARTICLES.filter((a) => !a.featured);

  return (
    <div className="min-h-screen flex flex-col bg-[#120D0A] text-[#FAF4EF] font-sans selection:bg-amber-500/20 selection:text-amber-300">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Header */}
        <header className="border-b border-surface-border bg-gradient-to-b from-[#1B1410] to-[#120D0A] py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              Taxoras Compliance Intelligence &amp; Regulatory Guides
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Knowledge Hub for Indian Businesses
            </h1>
            <p className="text-sm sm:text-base text-[#DDD0C5] leading-relaxed max-w-2xl mx-auto">
              Statutory analysis, competitive benchmarks, and practical tax guides to help MSMEs, startups, and professionals navigate Indian taxation without penalties.
            </p>
          </div>
        </header>

        {/* Articles List Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
          
          {/* Featured Article Card */}
          <section>
            <div className="bg-gradient-to-br from-[#251A13] via-[#1B1410] to-[#16100C] border border-amber-600/30 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group">
              <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
                <span className="bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded-full uppercase tracking-wider text-[11px]">
                  {featuredArticle.badge}
                </span>
                <span className="text-[#DDD0C5] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" /> {featuredArticle.date}
                </span>
                <span>•</span>
                <span className="text-[#DDD0C5] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 group-hover:text-amber-400 transition-colors">
                <Link href={featuredArticle.slug}>{featuredArticle.title}</Link>
              </h2>

              <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed max-w-3xl mb-6">
                {featuredArticle.summary}
              </p>

              <Link
                href={featuredArticle.slug}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-md"
              >
                <span>Read Full Research &amp; Comparison</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Core Blog Guides Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-surface-border pb-3">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Scale className="w-5 h-5 text-amber-400" />
                Latest Regulatory Guides &amp; Tax Updates
              </h2>
              <span className="text-xs text-[#DDD0C5]">3 In-Depth Guides</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherBlogArticles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-[#1B1410] rounded-2xl border border-surface-border p-5 shadow-xs hover:border-amber-500/50 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-300 bg-amber-950/60 border border-amber-600/30 px-2 py-0.5 rounded-md text-[10px]">
                        {article.category}
                      </span>
                      <span className="text-[#DDD0C5] text-[11px]">{article.readTime}</span>
                    </div>

                    <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors leading-snug">
                      <Link href={article.slug}>{article.title}</Link>
                    </h3>

                    <p className="text-xs text-[#DDD0C5] leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-surface-border flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#DDD0C5]">{article.date}</span>
                    <Link
                      href={article.slug}
                      className="font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Educational Resources & Checklists */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-surface-border pb-3">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                Foundational Compliance Walkthroughs
              </h2>
              <Link href="/resources" className="text-xs font-semibold text-amber-400 hover:text-amber-300">
                View All Resources →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RESOURCE_GUIDES.map((resource) => (
                <article
                  key={resource.slug}
                  className="bg-[#1B1410] rounded-2xl border border-surface-border p-5 shadow-xs hover:border-amber-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#DDD0C5]">
                      <span className="font-semibold text-[#DDD0C5] bg-[#120D0A] px-2 py-0.5 rounded border border-surface-border text-[11px]">
                        {resource.category}
                      </span>
                      <span>{resource.readTime}</span>
                    </div>

                    <h3 className="text-sm font-bold text-white tracking-tight hover:text-amber-400 transition-colors leading-snug">
                      <Link href={resource.slug}>{resource.title}</Link>
                    </h3>

                    <p className="text-xs text-[#DDD0C5] leading-relaxed line-clamp-2">
                      {resource.summary}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-surface-border flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#DDD0C5]">{resource.date}</span>
                    <Link
                      href={resource.slug}
                      className="font-semibold text-amber-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Open Checklist</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Explore More Card */}
          <div className="bg-gradient-to-br from-[#1B1410] to-[#120D0A] rounded-2xl border border-surface-border p-8 text-center shadow-xs space-y-3">
            <h3 className="text-lg font-bold text-white">
              Need Personalized Guidance for Your Business?
            </h3>
            <p className="text-xs sm:text-sm text-[#DDD0C5] max-w-lg mx-auto leading-relaxed">
              Our tax consultants audit your GST returns, TDS deductions, and advance tax schedules with zero outsourced delays.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-md"
              >
                <span>Compare Pricing Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 bg-[#251A13] hover:bg-[#302219] text-white border border-surface-border text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                <span>Educational Resource Library</span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
