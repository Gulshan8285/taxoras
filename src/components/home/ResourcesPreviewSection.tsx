"use client";

import React from "react";
import Link from "next/link";
import { allResources } from "@/data/resourcesData";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export const ResourcesPreviewSection: React.FC = () => {
  const featured = allResources.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-surface-bg border-b border-surface-border" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Educational Guides
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3">
              Knowledge & Compliance Guides
            </h2>
            <p className="text-sm text-text-muted mt-2 max-w-xl leading-relaxed">
              Verified, educational articles explaining Indian tax regulations, GST procedures, TDS rules, and small business accounting practices.
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-blue hover:text-brand-blue-hover self-start sm:self-auto"
          >
            <span>View All 10 Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((article) => (
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

                <h3 className="text-base font-bold text-navy hover:text-brand-blue transition-colors mb-2 leading-snug">
                  <Link href={`/resources/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-xs text-text-muted leading-relaxed line-clamp-3 mb-4">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-text-muted">
                  Reviewed: {article.lastReviewed}
                </span>
                <Link
                  href={`/resources/${article.slug}`}
                  className="text-xs font-semibold text-brand-blue hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
