"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  TrendingDown,
  Sparkles,
  Zap,
  MessageCircle,
  PhoneCall,
  Scale
} from "lucide-react";

export const PricingEstimator: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-surface-border" id="rates-assurance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-navy-light relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-teal/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
            
            <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal tracking-wide uppercase">
              <TrendingDown className="w-4 h-4" />
              <span>India-Wide Lowest Rate Assurance</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Why Pay Inflated Corporate Fees? <br />
              <span className="text-teal">Guaranteed ₹5 Cheaper</span> Than Any Market Quote
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Big portals charge expensive subscriptions and trap you in automated bot queues. At TaxVeda, we keep overheads minimal and pass 100% of the savings to Indian business owners.
            </p>

            {/* 3 Pillar Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-teal/20 text-teal flex items-center justify-center font-bold text-sm mb-3">
                  ₹5↓
                </div>
                <h3 className="text-sm font-bold text-white mb-1">Market Price-Beat Promise</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Show us any comparable assisted filing quote from any verified provider in India — we guarantee our fee is at least ₹5 to ₹500 lower.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/30 text-white flex items-center justify-center font-bold text-sm mb-3">
                  <ShieldCheck className="w-4 h-4 text-teal" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">No Opaque Subscriptions</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pay only for your exact business transaction volume. Zero hidden portal surcharges, zero lock-in contracts.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm mb-3">
                  <Zap className="w-4 h-4 text-[#25D366]" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">Direct WhatsApp Human Support</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  No frustrating support tickets. Directly connect with your dedicated tax assistant on WhatsApp for instant filings and proofs.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteConfig.links.whatsappUrl("Instant Quote")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-[#25D366]/30 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Get Instant Quote on WhatsApp</span>
              </a>

              <a
                href="#enquire"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                <span>Request Custom Quote & Callback</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] text-slate-400 pt-2">
              *Professional consultancy charges. Government portal fees (e.g. ₹0 for Udyam & GST) and statutory taxes are always distinct.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
