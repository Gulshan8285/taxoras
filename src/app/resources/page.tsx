"use client";

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
