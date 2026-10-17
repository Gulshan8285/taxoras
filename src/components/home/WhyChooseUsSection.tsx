"use client";

import React from "react";
import {
  FileCheck2,
  Workflow,
  Receipt,
  Clock,
  Layers,
  Lock,
  Compass
} from "lucide-react";

export const WhyChooseUsSection: React.FC = () => {
  const points = [
    {
      icon: <Layers className="w-5 h-5 text-brand-blue" />,
      title: "One Centralized Compliance Partner",
      description: "No need to juggle separate bookkeepers, GST filers, and tax return agents. Manage your entire compliance lifecycle in one place."
    },
    {
      icon: <Workflow className="w-5 h-5 text-teal" />,
      title: "Organized Documentation & Workflows",
      description: "Structured digital intake checklists ensure no invoices, credit notes, or bank charges are misplaced throughout the financial year."
    },
    {
      icon: <Receipt className="w-5 h-5 text-brand-blue" />,
      title: "Clear Scope & Pricing Before Work",
      description: "Every engagement comes with a transparent written scope document detailing turnaround timelines, inclusions, and exclusions upfront."
    },
    {
      icon: <Clock className="w-5 h-5 text-teal" />,
      title: "Dedicated Communication & Cutoff Reminders",
      description: "Proactive reminders well before the 7th, 11th, and 20th of the month so you never incur compounding daily late fees or interest."
    },
    {
      icon: <Compass className="w-5 h-5 text-brand-blue" />,
      title: "Tailored to Your Business Volume",
      description: "From micro proprietorships to high-volume multi-branch distributors, service scope scales flexibly with your transaction density."
    },
    {
      icon: <Lock className="w-5 h-5 text-teal" />,
      title: "Strict Confidentiality & Secure Data Handling",
      description: "Your financial data, bank statements, and customer ledgers are stored securely under strict non-disclosure practices."
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-brand-blue" />,
      title: "Practical Guidance on Applicable Laws",
      description: "Honest explanations of current GST, TDS, and Income Tax provisions without false promises or misleading claims."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface-bg border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Our Service Principles
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mt-3 mb-4">
            Why Businesses Choose Taxoras
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            We focus on organized financial workflows, timely statutory coordination, and transparent communication.
          </p>
        </div>

        {/* 7 Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border border-surface-border p-6 card-hover shadow-xs ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                {pt.icon}
              </div>
              <h3 className="text-base font-bold text-navy mb-2">
                {pt.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {pt.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
