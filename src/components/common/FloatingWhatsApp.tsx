"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { Phone } from "lucide-react";

interface FloatingWhatsAppProps {
  currentService?: string;
  location?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentService, location }) => {
  const whatsappHref = siteConfig.links.whatsappUrl(currentService, location);

  return (
    <aside
      aria-label="Quick Contact Options"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-2.5 print:hidden select-none pointer-events-auto"
    >
      {/* Persistent Call Now Button */}
      <a
        href={siteConfig.links.phoneUrl}
        aria-label="Call Direct Helpline"
        title={`Call Now: ${siteConfig.contact.phoneFormatted} (${siteConfig.contact.workingDays} ${siteConfig.contact.workingHours})`}
        className="group flex items-center gap-2 bg-[#1C1511] hover:bg-[#251C16] text-[#FAF4EF] hover:text-amber-400 border border-surface-border shadow-2xl hover:shadow-amber-950/20 px-3 sm:px-3.5 py-2.5 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
      >
        <span className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
          <Phone className="w-3 h-3 shrink-0" />
        </span>
        <span className="text-xs font-bold leading-tight tracking-tight">
          Call Now
        </span>
      </a>

      {/* Official WhatsApp Floating Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp for instant tax & accounting consultation: +91 81038 19494"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-[#25D366]/40 px-3.5 sm:px-4 py-2.5 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
      >
        <WhatsAppIcon className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold tracking-tight">
          <span className="hidden sm:inline">Chat on </span>WhatsApp
        </span>
      </a>
    </aside>
  );
};
