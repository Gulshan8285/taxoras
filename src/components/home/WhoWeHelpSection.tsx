"use client";

import React from "react";
import Link from "next/link";
import { allAudiences } from "@/data/audienceData";
import { ServiceIcon } from "@/components/common/ServiceIcon";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export const WhoWeHelpSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border" id="who-we-help">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Tailored Assistance
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3 mb-4">
            Who We Help
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Different business structures carry unique compliance obligations. We help Indian enterprises across sectors maintain organized books and timely statutory filings.
          </p>
        </div>

        {/* Audiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allAudiences.map((audience) => (
            <div
              key={audience.id}
              className="bg-surface-bg rounded-2xl border border-surface-border p-5 flex flex-col justify-between card-hover shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-surface-border text-navy flex items-center justify-center">
                    <ServiceIcon name={audience.icon} className="w-5 h-5 text-brand-blue" />
                  </div>
                  <span className="text-[10px] font-semibold text-teal bg-teal-light px-2 py-0.5 rounded">
                    {audience.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy mb-2">
                  {audience.title}
                </h3>

                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {audience.description}
                </p>

                {/* Relevant Services */}
                <div className="space-y-1.5 pt-3 border-t border-slate-200/80 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block">
                    Relevant Services:
                  </span>
                  {audience.relevantServices.map((svc, sIdx) => (
                    <div key={sIdx} className="text-xs text-navy font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-teal shrink-0" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <Link
                  href="/who-we-help"
                  className="text-xs font-semibold text-brand-blue hover:text-brand-blue-hover flex items-center justify-between group"
                >
                  <span>View Full Guidance</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer for audiences */}
        <div className="mt-8 text-center text-xs text-text-muted">
          Not every business requires every service. Scope depends on your turnover, entity constitution, and tax regime.
        </div>

      </div>
    </section>
  );
};
