"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { Phone } from "lucide-react";
import { trackWhatsAppClick, trackCallClick } from "@/lib/analytics";

interface FloatingWhatsAppProps {
  currentService?: string;
  location?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentService, location }) => {
  const whatsappHref = siteConfig.links.whatsappUrl(currentService, location);

  // Dynamic tailored CTA text per service category
  let ctaLabel = "Chat on WhatsApp";
  if (currentService?.toLowerCase().includes("gst")) {
    ctaLabel = "Get GST Filing Quote";
  } else if (currentService?.toLowerCase().includes("tds")) {
    ctaLabel = "Need TDS Filing Quote?";
  } else if (currentService?.toLowerCase().includes("accounting") || currentService?.toLowerCase().includes("bookkeeping")) {
    ctaLabel = "Stop High Fees — Talk to Taxoras";
  }

  return (
    <>
      {/* Mobile Persistent Sticky Bottom CTA Bar (< sm) */}
      <div
        role="region"
        aria-label="Mobile Contact Bar"
        className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#160E0A]/95 backdrop-blur-md border-t border-amber-900/40 px-3 py-2.5 flex items-center gap-2 shadow-[0_-8px_20px_rgba(0,0,0,0.6)] print:hidden"
      >
        <a
          href={siteConfig.links.phoneUrl}
          onClick={() => trackCallClick(location)}
          aria-label="Call Direct Tax Helpline"
          className="flex-1 flex items-center justify-center gap-2 bg-[#1F1712] hover:bg-[#2A1E18] text-[#FAF4EF] border border-amber-900/50 py-2.5 px-3 rounded-lg text-xs font-bold active:scale-98 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Call Helpline</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick(currentService, location, "Mobile Sticky Bar")}
          aria-label="Chat on WhatsApp"
          className="flex-[1.5] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-2.5 px-3 rounded-lg text-xs font-bold shadow-lg shadow-[#25D366]/20 active:scale-98 transition-all"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0" />
          <span className="truncate">{ctaLabel}</span>
        </a>
      </div>

      {/* Desktop Floating Actions (>= sm) */}
      <aside
        aria-label="Quick Contact Options"
        className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 print:hidden select-none pointer-events-auto"
      >
        {/* Persistent Call Now Button */}
        <a
          href={siteConfig.links.phoneUrl}
          onClick={() => trackCallClick(location)}
          aria-label="Call Direct Helpline"
          title={`Call Now: ${siteConfig.contact.phoneFormatted} (${siteConfig.contact.workingDays} ${siteConfig.contact.workingHours})`}
          className="group flex items-center gap-2 bg-[#1C1511] hover:bg-[#251C16] text-[#FAF4EF] hover:text-amber-400 border border-surface-border shadow-2xl hover:shadow-amber-950/20 px-3.5 py-2.5 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
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
          onClick={() => trackWhatsAppClick(currentService, location, "Desktop Floating WhatsApp")}
          aria-label="Chat with us on WhatsApp"
          title="Chat with us on WhatsApp for instant tax & accounting consultation: +91 88103 81949"
          className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-[#25D366]/40 px-4 py-2.5 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-bold tracking-tight">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </>
  );
};
