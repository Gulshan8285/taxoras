"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { MessageCircle, Phone } from "lucide-react";

interface FloatingWhatsAppProps {
  currentService?: string;
  location?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentService, location }) => {
  const whatsappHref = siteConfig.links.whatsappUrl(currentService, location);

  return (
    <aside
      aria-label="Quick Contact Options"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 sm:gap-3 print:hidden select-none pointer-events-auto"
    >
      {/* Persistent Call Now Button */}
      <a
        href={siteConfig.links.phoneUrl}
        aria-label="Call Now: +91 81038 19494"
        title={`Call Now: ${siteConfig.contact.phoneFormatted} (${siteConfig.contact.workingDays} ${siteConfig.contact.workingHours})`}
        className="group flex items-center gap-2 bg-white hover:bg-slate-50 text-navy hover:text-brand-blue border border-surface-border shadow-lg hover:shadow-xl px-3 sm:px-4 py-2.5 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
      >
        <span className="w-7 h-7 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
          <Phone className="w-3.5 h-3.5 shrink-0" />
        </span>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold leading-tight tracking-tight">
            Call Now
          </span>
          <span className="hidden md:inline text-[10px] text-text-muted leading-none font-medium">
            {siteConfig.contact.phoneFormatted}
          </span>
        </div>
      </a>

      {/* Persistent WhatsApp Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp for instant tax & accounting consultation"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-[#25D366]/30 px-3.5 sm:px-4 py-2.5 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold tracking-tight hidden xs:inline sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
