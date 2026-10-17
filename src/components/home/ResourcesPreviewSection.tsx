"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { allResources } from "@/data/resourcesData";
import { ArrowRight, BookOpen, Clock, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export const ResourcesPreviewSection: React.FC = () => {
  const featured = allResources.slice(0, 6);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-surface-bg border-b border-surface-border scroll-mt-24" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-brand-blue" />
              <span>Educational Knowledge Base</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3">
              Knowledge & Compliance Guides
            </h2>
            <p className="text-xs sm:text-sm text-text-muted mt-2 max-w-xl leading-relaxed">
              Verified articles explaining Indian tax regulations, GST procedures, TDS rules, and small business accounting practices.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop Carousel Controls */}
            <div className="hidden md:flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous guides"
                className="w-8 h-8 rounded-full border border-surface-border bg-[#1E1712] hover:bg-[#281E18] text-[#FAF4EF] flex items-center justify-center transition-colors shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next guides"
                className="w-8 h-8 rounded-full border border-surface-border bg-[#1E1712] hover:bg-[#281E18] text-[#FAF4EF] flex items-center justify-center transition-colors shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-blue hover:text-brand-blue-hover self-start sm:self-auto bg-[#1E1712] sm:bg-transparent px-3 py-1.5 sm:px-0 sm:py-0 rounded-lg border sm:border-0 border-surface-border shadow-xs sm:shadow-none"
            >
              <span>View All 10 Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mobile Horizontal Swipe Indicator */}
        <div className="flex items-center justify-between md:hidden mb-3.5 px-0.5">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#E5A962] bg-[#241A13] border border-[#3E2C1F] px-3 py-1 rounded-full shadow-2xs">
            <span>← Swipe left / right to browse guides →</span>
          </div>
          <span className="text-[10px] text-text-muted font-medium">
            {featured.length} Featured
          </span>
        </div>

        {/* Horizontal Scroll on Mobile (< md) & Responsive Multi-card Carousel on Desktop */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {featured.map((article) => (
            <div
              key={article.slug}
              className="w-[84vw] max-w-[320px] sm:w-[340px] md:w-[360px] shrink-0 snap-center bg-white rounded-2xl border border-surface-border p-5 sm:p-6 flex flex-col justify-between card-hover shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] mb-3">
                  <span className="font-semibold text-[#E5A962] bg-[#251A13] border border-[#3E2C1F] px-2.5 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="text-text-muted flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-navy group-hover:text-brand-blue transition-colors mb-2 leading-snug line-clamp-2">
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
                  className="text-xs font-semibold text-brand-blue group-hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
