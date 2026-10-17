"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
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
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
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
