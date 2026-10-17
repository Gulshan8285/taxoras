"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  TrendingDown,
  Zap,
  PhoneCall,
  Scale
} from "lucide-react";

export const PricingEstimator: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-surface-bg border-b border-surface-border" id="rates-assurance">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="bg-gradient-to-br from-[#261A13] via-[#1E1510] to-[#150E0A] text-[#FAF4EF] rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#422D1F] relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-amber-600/15 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
            
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 tracking-wide uppercase shadow-xs">
              <TrendingDown className="w-4 h-4 text-amber-400" />
              <span>India-Wide Lowest Rate Assurance</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FAF4EF] tracking-tight leading-tight">
              Why Pay Inflated Corporate Fees? <br />
              <span className="text-amber-400">Guaranteed ₹5 Cheaper</span> Than Any Market Quote
            </h2>

            <p className="text-sm sm:text-base text-[#DDD0C5] leading-relaxed max-w-2xl mx-auto">
              Big portals charge expensive subscriptions and trap you in automated bot queues. At Taxoras, we keep overheads minimal and pass 100% of the savings to Indian business owners.
            </p>

            {/* 3 Pillar Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
              <div className="bg-[#1C1510] border border-[#3E2C20] rounded-2xl p-5 shadow-lg backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm mb-3">
                  ₹5↓
                </div>
                <h3 className="text-sm font-bold text-[#FAF4EF] mb-1">Market Price-Beat Promise</h3>
                <p className="text-xs text-[#BCAE9F] leading-relaxed">
                  Show us any comparable assisted filing quote from any verified provider in India — we guarantee our fee is at least ₹5 to ₹500 lower.
                </p>
              </div>

              <div className="bg-[#1C1510] border border-[#3E2C20] rounded-2xl p-5 shadow-lg backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-400 flex items-center justify-center font-bold text-sm mb-3">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="text-sm font-bold text-[#FAF4EF] mb-1">No Opaque Subscriptions</h3>
                <p className="text-xs text-[#BCAE9F] leading-relaxed">
                  Pay only for your exact business transaction volume. Zero hidden portal surcharges, zero lock-in contracts.
                </p>
              </div>

              <div className="bg-[#1C1510] border border-[#3E2C20] rounded-2xl p-5 shadow-lg backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm mb-3">
                  <Zap className="w-4 h-4 text-[#25D366]" />
                </div>
                <h3 className="text-sm font-bold text-[#FAF4EF] mb-1">Direct WhatsApp Human Support</h3>
                <p className="text-xs text-[#BCAE9F] leading-relaxed">
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
                <WhatsAppIcon className="w-4 h-4 shrink-0 text-white" />
                <span>Get Instant Quote on WhatsApp</span>
              </a>

              <a
                href="#enquire"
                className="inline-flex items-center gap-2 bg-[#2C1F17] hover:bg-[#38281E] text-[#FAF4EF] text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl border border-amber-900/50 transition-all shadow-xs"
              >
                <span>Request Custom Scope</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] text-[#A89A8F] pt-2">
              All filings backed by formal government portal acknowledgements (ARN / ITR-V).
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
