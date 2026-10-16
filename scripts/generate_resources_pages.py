import os

resources_index_ts = """\"use client\";

import React, { useState } from "react";
import Link from "next/link";
import { allResources } from "@/data/resourcesData";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import {
  Search,
  BookOpen,
  Clock,
  ArrowRight,
  Filter,
  ExternalLink,
  ShieldCheck
} from "lucide-react";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "GST Guides",
    "TDS and Taxation",
    "Income Tax",
    "Bookkeeping and Accounting",
    "MSME and Udyam",
    "Small Business Finance",
    "Compliance Calendar"
  ];

  const filtered = allResources.filter((art) => {
    const matchesCat =
      selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Header */}
        <section className="bg-white border-b border-surface-border py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
              Educational Hub
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">
              Accounting, GST & Taxation Knowledge Base
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
              Practical guides written in clear language for Indian founders, traders, and accountants. Learn regulatory deadlines, documentation processes, and compliance best practices.
            </p>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="bg-white rounded-2xl border border-surface-border p-4 sm:p-6 mb-8 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics (e.g., GSTR-3B, TDS sections, 44AD)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs text-text-main pl-10 pr-4 py-2.5 bg-slate-50 border border-surface-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                    selectedCategory === cat
                      ? "bg-navy text-white shadow-xs"
                      : "bg-slate-50 text-text-muted hover:text-navy hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-surface-border p-8">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-navy">No articles found</h3>
              <p className="text-xs text-text-muted mt-1">
                Try searching with different keywords or switch the category filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <div
                  key={article.slug}
                  className="bg-white rounded-2xl border border-surface-border p-6 flex flex-col justify-between card-hover shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-3">
                      <span className="font-semibold text-teal bg-teal-light px-2.5 py-0.5 rounded">
                        {article.category}
                      </span>
                      <span className="text-text-muted flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-navy hover:text-brand-blue transition-colors mb-2.5 leading-snug">
                      <Link href={`/resources/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-text-muted leading-relaxed line-clamp-3 mb-6">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-text-muted">
                      {article.lastReviewed}
                    </span>
                    <Link
                      href={`/resources/${article.slug}`}
                      className="font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Compliance Advisory Note */}
          <div className="mt-12 bg-white rounded-2xl border border-surface-border p-6 flex items-start gap-3.5 text-xs text-text-muted leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-teal shrink-0 mt-0.5" />
            <div>
              <strong className="text-navy block mb-0.5">Tax Laws Change Frequently:</strong>
              Articles are based on Indian tax laws and notifications available as of the reviewed date. Always verify your specific facts with a qualified advisor or official government portals before taking commercial tax actions.
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
"""

with open("src/app/resources/page.tsx", "w") as f:
    f.write(resources_index_ts)

resource_detail_ts = """import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { allResources, getResourceBySlug } from "@/data/resourcesData";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import {
  ChevronRight,
  Clock,
  Calendar,
  User,
  ExternalLink,
  BookOpen,
  ArrowRight,
  ShieldAlert,
  Share2,
  CheckCircle2,
  MessageCircle
} from "lucide-react";

interface ResourcePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allResources.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | TaxVeda Compliance Guide`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
    }
  };
}

export default async function ResourceDetailPage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const article = getResourceBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = allResources.filter((a) => a.slug !== article.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.summary,
    "author": {
      "@type": "Organization",
      "name": siteConfig.businessName
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.businessName
    },
    "dateModified": "2026-10-15"
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-1 pb-16">
        {/* Breadcrumb Header */}
        <div className="bg-white border-b border-surface-border py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-xs text-text-muted">
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/resources" className="hover:text-navy transition-colors">
                Resources
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="font-semibold text-navy truncate max-w-xs sm:max-w-sm">
                {article.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Article Hero */}
        <section className="bg-white border-b border-surface-border py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-xs text-text-muted flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
              <span className="text-xs text-text-muted">
                • Last Reviewed: {article.lastReviewed}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              {article.summary}
            </p>
          </div>
        </section>

        {/* Article Layout */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="space-y-8">
            
            {/* Table of Contents */}
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-blue" />
                  <span>Table of Contents</span>
                </h3>
                <div className="space-y-1.5 text-xs">
                  {article.tableOfContents.map((toc) => (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      className="block text-brand-blue hover:underline py-0.5"
                    >
                      {toc.title}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Article Content Sections */}
            <article className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-8">
              {article.sections.map((sec) => (
                <div key={sec.id} id={sec.id} className="scroll-mt-24 space-y-3.5">
                  <h2 className="text-lg sm:text-xl font-bold text-navy pb-1.5 border-b border-slate-100">
                    {sec.title}
                  </h2>

                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {sec.bulletPoints && (
                    <ul className="space-y-2 pt-1">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.callout && (
                    <div
                      className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed border ${
                        sec.callout.type === "important" || sec.callout.type === "warning"
                          ? "bg-amber-50 border-amber-200 text-amber-900"
                          : "bg-blue-50 border-blue-200 text-blue-900"
                      }`}
                    >
                      <strong>
                        {sec.callout.type === "warning" ? "Caution: " : "Important Note: "}
                      </strong>
                      {sec.callout.text}
                    </div>
                  )}
                </div>
              ))}

              {/* Official Source Reference */}
              {article.officialSource && (
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-text-muted">
                  <span>Official Government Portal Reference:</span>
                  <a
                    href={article.officialSource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>{article.officialSource.title}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </article>

            {/* Quick Contextual Consultation Callout */}
            <div className="bg-navy text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-bold">
                  Need Help Implementing This in Your Business?
                </h3>
                <p className="text-xs text-slate-300">
                  Our compliance team assists with documentation, reconciliation, and portal filings.
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href={siteConfig.links.whatsappUrl(article.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>
                <Link
                  href="/#enquire"
                  className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <span>Enquire</span>
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-navy">Related Compliance Guides</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/resources/${rel.slug}`}
                    className="bg-white p-4 rounded-xl border border-surface-border hover:border-brand-blue transition-all shadow-xs block group"
                  >
                    <span className="text-[10px] font-semibold text-teal block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-xs font-bold text-navy group-hover:text-brand-blue transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
"""

with open("src/app/resources/[slug]/page.tsx", "w") as f:
    f.write(resource_detail_ts)

print("Created resources/page.tsx and resources/[slug]/page.tsx successfully!")
