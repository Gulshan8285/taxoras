"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  MessageSquare,
  FileSpreadsheet,
  FileCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: <MessageSquare className="w-5 h-5 text-brand-blue" />,
      title: "Tell Us About Your Business",
      description: "Share your business type, location, monthly transaction volume, and the specific compliance or bookkeeping services required."
    },
    {
      step: "02",
      icon: <FileSpreadsheet className="w-5 h-5 text-teal" />,
      title: "Receive a Requirement Checklist",
      description: "We explain the exact documents, bank statements, and information scope needed for the selected service before anything is started."
    },
    {
      step: "03",
      icon: <FileCheck className="w-5 h-5 text-brand-blue" />,
      title: "Review Scope and Pricing",
      description: "We provide a transparent quote, timeline estimate, exclusions, and agreed deliverables before work begins. Zero hidden charges."
    },
    {
      step: "04",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      title: "Service Delivery & Updates",
      description: "We keep you informed about progress, verify draft filings with you, submit on official portals, and share acknowledgement receipts."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface-bg border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
            Clear & Predictable Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3 mb-4">
            How It Works
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Our organized four-step process guarantees transparency, clear document guidelines, and consistent communication throughout your engagement.
          </p>
        </div>

        {/* 4-Step Timeline (Horizontal on desktop, vertical on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl border border-surface-border p-6 relative card-hover shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-200">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Micro indicator */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-[11px] font-medium text-text-muted">
                <span>Phase {index + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
