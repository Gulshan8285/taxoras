"use client";

import React, { useState } from "react";
import { mainFaqs } from "@/data/faqsData";
import { ChevronDown, HelpCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { siteConfig } from "@/config/siteConfig";

export const HomeFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Honest answers to the most common questions regarding our accounting, GST, and tax compliance assistance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {mainFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-surface-border overflow-hidden transition-all bg-[#17110D] shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-navy hover:text-brand-blue transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-brand-blue" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs text-[#BCAE9F] leading-relaxed border-t border-surface-border bg-[#150F0B] animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions */}
        <div className="mt-10 text-center text-xs text-text-muted flex flex-col sm:flex-row items-center justify-center gap-3">
          <span>Have a specific question not listed here?</span>
          <a
            href={siteConfig.links.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold hover:underline"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
            <span>Ask us directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
