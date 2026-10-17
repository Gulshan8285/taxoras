"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Briefcase,
  UserCheck
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-slate-300 pt-16 pb-10 border-t border-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white font-bold">
                TV
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  {siteConfig.businessName}
                </span>
                <p className="text-xs text-teal font-medium">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {siteConfig.supportingPositioning}
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <span>{siteConfig.location.address}, {siteConfig.location.city} {siteConfig.location.pincode}, {siteConfig.location.country}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal shrink-0" />
                <a href={siteConfig.links.phoneUrl} className="hover:text-white transition-colors">
                  {siteConfig.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal shrink-0" />
                <a href={siteConfig.links.emailUrl} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal shrink-0" />
                <span>{siteConfig.contact.workingDays}: {siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: GST & TDS Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-teal pl-2.5">
              GST & TDS Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/gst-registration" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  GST Registration Assistance
                </Link>
              </li>
              <li>
                <Link href="/services/gst-return-filing" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  GST Return Filing (GSTR-1 & 3B)
                </Link>
              </li>
              <li>
                <Link href="/services/tds-return-filing" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  TDS Return Filing (24Q & 26Q)
                </Link>
              </li>
              <li>
                <Link href="/services/tds-payment" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  TDS Payment & Challan 281
                </Link>
              </li>
              <li>
                <Link href="/services/daily-accounting" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Day-to-Day Accounting & Ledgers
                </Link>
              </li>
              <li>
                <Link href="/services/bank-reconciliation" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Bank Statement Reconciliation (BRS)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Registrations, Statements & Hubs */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-teal pl-2.5">
              Financials & Locations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/msme-udyam-registration" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  MSME / Udyam Registration
                </Link>
              </li>
              <li>
                <Link href="/services/debtors-creditors-reconciliation" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Debtors & Creditors Reconciliation
                </Link>
              </li>
              <li>
                <Link href="/services/balance-sheet" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Balance Sheet & Financial Statements
                </Link>
              </li>
              <li>
                <Link href="/services/income-tax-return" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Income Tax Return (ITR) Filing
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  India Commercial Locations Hub
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Industry Compliance Solutions
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Transparent Pricing & Package Matrix
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Portal, Resources & Transparency */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-teal pl-2.5">
              Transparency & Portal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/portal" className="text-teal hover:underline flex items-center gap-1.5 font-semibold">
                  <UserCheck className="w-3.5 h-3.5" />
                  Client Document & Filing Portal
                </Link>
              </li>
              <li>
                <Link href="/who-we-help" className="hover:text-white transition-colors">
                  Who We Help (Entities We Support)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About TaxVeda Advisory
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Educational Guides & Articles
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
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy (DPDP Ready)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Regulatory & Professional Disclaimer
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimer Notice */}
        <div className="pt-8 pb-6 text-[11px] text-slate-400 leading-relaxed border-b border-slate-800 space-y-2">
          <p>
            <strong className="text-slate-200">Legal & Regulatory Notice:</strong> {siteConfig.disclaimer}
          </p>
          <p>
            We do not promise zero penalties, guaranteed tax reductions, or unauthorized document certifications. All government portals (gst.gov.in, incometax.gov.in, udyamregistration.gov.in) are official Government of India properties.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© 2026 {siteConfig.businessName}. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-600">|</span>
            <p className="text-slate-400">
              Created by{" "}
              <a
                href="https://codeorbi.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-white transition-colors font-medium underline underline-offset-2"
                title="Website design and development by Codeorbi.cloud"
              >
                Codeorbi.cloud
              </a>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
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
    </footer>
  );
};
