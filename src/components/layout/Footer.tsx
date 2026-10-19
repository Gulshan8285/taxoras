"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { BrandLogo } from "@/components/common/BrandLogo";
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
  ArrowRight
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C0806] text-slate-300 pt-16 pb-12 border-t border-[#261C16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#261C16]">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <BrandLogo variant="light" />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed pr-2">
              {siteConfig.supportingPositioning}
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <span>{siteConfig.location.address}, {siteConfig.location.city} {siteConfig.location.pincode}, {siteConfig.location.country}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-teal shrink-0" />
                <a href={siteConfig.links.phoneUrl} className="hover:text-white transition-colors font-medium">
                  {siteConfig.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-teal shrink-0" />
                <a href={siteConfig.links.emailUrl} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-teal shrink-0" />
                <span>{siteConfig.contact.workingDays}: {siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: GST & TDS Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-teal pl-2.5">
              GST & TDS Compliance
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/services/gst-registration" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  GST Registration Assistance
                </Link>
              </li>
              <li>
                <Link href="/services/gst-return-filing" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  GST Return Filing (GSTR-1 & 3B)
                </Link>
              </li>
              <li>
                <Link href="/services/tds-return-filing" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  TDS Return Filing (24Q & 26Q)
                </Link>
              </li>
              <li>
                <Link href="/services/tds-payment" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  TDS Payment & Challan 281
                </Link>
              </li>
              <li>
                <Link href="/services/daily-accounting" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Day-to-Day Accounting & Ledgers
                </Link>
              </li>
              <li>
                <Link href="/services/bank-reconciliation" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Bank Statement Reconciliation (BRS)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Registrations & Locations */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-brand-blue pl-2.5">
              Financials & Locations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/services/msme-udyam-registration" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  MSME / Udyam Registration
                </Link>
              </li>
              <li>
                <Link href="/services/debtors-creditors-reconciliation" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Debtors & Creditors Reconciliation
                </Link>
              </li>
              <li>
                <Link href="/services/balance-sheet" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Balance Sheet & Financial Statements
                </Link>
              </li>
              <li>
                <Link href="/services/income-tax-return" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Income Tax Return (ITR) Filing
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  India Commercial Locations Hub
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Industry Compliance Solutions
                </Link>
              </li>
              <li>
                <Link href="/who-we-help" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Who We Help (Client Profiles)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Knowledge Hub & Transparency */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-teal pl-2.5">
              Knowledge & Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/blog" className="text-teal hover:underline flex items-center gap-1.5 font-bold">
                  <span>Blog & Regulatory Research</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/blog/top-gst-service-providers-in-india" className="hover:text-white transition-colors">
                  Top 10 GST Services India
                </Link>
              </li>
              <li>
                <Link href="/blog/top-gst-service-providers-in-bangalore" className="hover:text-white transition-colors">
                  Top 10 GST Providers Bangalore
                </Link>
              </li>
              <li>
                <Link href="/blog/cheap-gst-services-india-affordable-filing-comparison" className="hover:text-white transition-colors">
                  Cheapest GST Filing Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/best-msme-udyam-registration-service-online-guide" className="hover:text-white transition-colors">
                  MSME Udyam Registration Guide
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Compliance Guides & Library
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Taxoras Advisory
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

        {/* Regulatory Disclaimer Notice */}
        <div className="pt-8 pb-6 text-xs text-[#BCAE9F] leading-relaxed border-b border-[#261C16] space-y-2 bg-[#120D0A]/40 p-4 rounded-2xl my-2 border border-[#2E221B]">
          <p>
            <strong className="text-[#FAF4EF] font-bold">Legal & Regulatory Notice:</strong> {siteConfig.disclaimer}
          </p>
          <p className="text-[#A89A8F] text-[11px]">
            We do not promise zero penalties, guaranteed tax reductions, or unauthorized document certifications. All government portals (gst.gov.in, incometax.gov.in, udyamregistration.gov.in) are official Government of India properties.
          </p>
        </div>

        {/* Bottom Bar with Codeorbit.cloud Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© 2026 {siteConfig.businessName}. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-600">|</span>
            <p className="text-slate-400">
              Created by{" "}
              <a
                href="https://www.codeorbit.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-white transition-colors font-bold underline underline-offset-2"
                title="Website design and development by Codeorbit.cloud"
              >
                Codeorbit.cloud
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
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
