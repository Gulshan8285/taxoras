"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-navy text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="text-xs font-bold text-teal bg-teal/20 px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 border border-teal/30">
          <ShieldCheck className="w-3.5 h-3.5" />
          Transparent & Responsive Support
        </span>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
          Tell Us What Your Business Needs.
        </h2>

        <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Share your requirements and receive the next steps, estimated scope, and applicable charges before any work begins.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <a
            href="#enquire"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <span>Get a Transparent Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={siteConfig.links.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp Directly</span>
          </a>
        </div>

        <p className="text-[11px] text-slate-400 pt-2">
          Zero advance obligation to discuss requirements • PAN-India digital compliance desk
        </p>
      </div>
    </section>
  );
};
