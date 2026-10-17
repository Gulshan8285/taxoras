"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Briefcase,
  UserCheck,
  Sparkles,
  ArrowRight
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 sm:py-14 bg-surface-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Luxury Glassmorphic Rounded Capsule Container */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#10243A] via-[#10243A] to-[#0A1827] text-slate-300 p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-teal/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-brand-blue/15 blur-3xl pointer-events-none"></div>

          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10 relative z-10">
            
            {/* Column 1: Brand & Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-black text-sm shadow-md">
                  TV
                </div>
                <div>
                  <span className="text-lg font-extrabold text-white tracking-tight">
                    {siteConfig.businessName}
                  </span>
                  <p className="text-xs text-teal font-semibold">
                    {siteConfig.tagline}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {siteConfig.supportingPositioning}
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-start gap-2.5 p-2 rounded-2xl bg-white/5 border border-white/5">
                  <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>{siteConfig.location.address}, {siteConfig.location.city} {siteConfig.location.pincode}, {siteConfig.location.country}</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-white/5 border border-white/5">
                  <Phone className="w-4 h-4 text-teal shrink-0" />
                  <a href={siteConfig.links.phoneUrl} className="hover:text-white transition-colors font-medium">
                    {siteConfig.contact.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-white/5 border border-white/5">
                  <Mail className="w-4 h-4 text-teal shrink-0" />
                  <a href={siteConfig.links.emailUrl} className="hover:text-white transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-white/5 border border-white/5">
                  <Clock className="w-4 h-4 text-teal shrink-0" />
                  <span>{siteConfig.contact.workingDays}: {siteConfig.contact.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Column 2: GST & TDS Services */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-teal uppercase tracking-wider mb-4">
                <Sparkles className="w-3 h-3" />
                <span>GST & TDS Compliance</span>
              </div>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/services/gst-registration" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                    GST Registration Assistance
                  </Link>
                </li>
                <li>
                  <Link href="/services/gst-return-filing" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                    GST Return Filing (GSTR-1 & 3B)
                  </Link>
                </li>
                <li>
                  <Link href="/services/tds-return-filing" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                    TDS Return Filing (24Q & 26Q)
                  </Link>
                </li>
                <li>
                  <Link href="/services/tds-payment" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                    TDS Payment & Challan 281
                  </Link>
                </li>
                <li>
                  <Link href="/services/daily-accounting" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                    Day-to-Day Accounting & Ledgers
                  </Link>
                </li>
                <li>
                  <Link href="/services/bank-reconciliation" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                    Bank Statement Reconciliation (BRS)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Registrations, Statements & Hubs */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-teal uppercase tracking-wider mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Financials & Locations</span>
              </div>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/services/msme-udyam-registration" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                    MSME / Udyam Registration
                  </Link>
                </li>
                <li>
                  <Link href="/services/debtors-creditors-reconciliation" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                    Debtors & Creditors Reconciliation
                  </Link>
                </li>
                <li>
                  <Link href="/services/balance-sheet" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                    Balance Sheet & Financial Statements
                  </Link>
                </li>
                <li>
                  <Link href="/services/income-tax-return" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                    Income Tax Return (ITR) Filing
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                    India Commercial Locations Hub
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                    Industry Compliance Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-help" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                    Who We Help (Client Profiles)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Knowledge Hub, Security & Transparency */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-teal uppercase tracking-wider mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Knowledge & Compliance</span>
              </div>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/blog" className="text-teal hover:underline flex items-center gap-1.5 font-bold">
                    <span>Blog & Regulatory Research</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Compliance Guides & Library
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About TaxVeda Advisory
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact & Office Hub
                  </Link>
                </li>
                <li>
                  <Link href="/document-security" className="hover:text-white transition-colors">
                    Document Security & Confidentiality
                  </Link>
                </li>
                <li>
                  <Link href="/service-limitations" className="hover:text-white transition-colors">
                    Service Scope & Limitations
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:text-white transition-colors">
                    Refund & Cancellation Policy
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Legal Notice Glass Card */}
          <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-slate-400 leading-relaxed space-y-1.5 relative z-10">
            <p>
              <strong className="text-slate-200">Legal & Regulatory Notice:</strong> {siteConfig.disclaimer}
            </p>
            <p>
              We do not promise zero penalties, guaranteed tax reductions, or unauthorized document certifications. All government portals (gst.gov.in, incometax.gov.in, udyamregistration.gov.in) are official Government of India properties.
            </p>
          </div>

          {/* Bottom Bar with Rounded Capsule Credit */}
          <div className="pt-8 mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <p>© 2026 {siteConfig.businessName}. All rights reserved.</p>
              <span className="hidden sm:inline text-slate-600">|</span>
              
              {/* Pill Badge for Codeorbi.cloud Credit */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px]">
                <span>Created by</span>
                <a
                  href="https://codeorbi.cloud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-white transition-colors font-bold underline underline-offset-2"
                  title="Website design and development by Codeorbi.cloud"
                >
                  Codeorbi.cloud
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="/refund-policy" className="hover:text-white transition-colors">
                Refunds
              </Link>
              <span>•</span>
              <Link href="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
              <span>•</span>
              <Link href="/blog" className="hover:text-white transition-colors">
                Articles
              </Link>
              <span>•</span>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
