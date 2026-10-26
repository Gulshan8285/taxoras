"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { BrandLogo } from "@/components/common/BrandLogo";
import { regionalDirectories } from "@/data/locationsData";
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
  ArrowRight,
  Globe2,
  ChevronDown,
  Building,
} from "lucide-react";

export const Footer: React.FC = () => {
  const [activeRegionTab, setActiveRegionTab] = useState<string>("North");

  return (
    <footer className="bg-[#0C0806] text-slate-300 pt-16 pb-12 border-t border-[#261C16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
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
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{siteConfig.location.address}, {siteConfig.location.city} {siteConfig.location.pincode}, {siteConfig.location.country}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={siteConfig.links.phoneUrl} className="hover:text-white transition-colors font-medium">
                  {siteConfig.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={siteConfig.links.emailUrl} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{siteConfig.contact.workingDays}: {siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: GST & TDS Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-amber-500 pl-2.5">
              GST & TDS Compliance
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/services/gst-registration" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  GST Registration Assistance
                </Link>
              </li>
              <li>
                <Link href="/services/gst-return-filing" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  GST Return Filing (GSTR-1 & 3B)
                </Link>
              </li>
              <li>
                <Link href="/services/tds-return-filing" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  TDS Return Filing (24Q & 26Q)
                </Link>
              </li>
              <li>
                <Link href="/services/tds-payment" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  TDS Payment & Challan 281
                </Link>
              </li>
              <li>
                <Link href="/services/daily-accounting" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Day-to-Day Accounting & Ledgers
                </Link>
              </li>
              <li>
                <Link href="/services/bank-reconciliation" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Bank Statement Reconciliation (BRS)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Financials & Locations */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-brand-blue pl-2.5">
              Financials & Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/services/msme-udyam-registration" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  MSME / Udyam Registration
                </Link>
              </li>
              <li>
                <Link href="/services/debtors-creditors-reconciliation" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Debtors & Creditors Reconciliation
                </Link>
              </li>
              <li>
                <Link href="/services/balance-sheet" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Balance Sheet & Financial Statements
                </Link>
              </li>
              <li>
                <Link href="/services/income-tax-return" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Income Tax Return (ITR) Filing
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-amber-400 transition-colors flex items-center gap-2 font-semibold text-slate-200">
                  <span className="w-1 h-1 rounded-full bg-amber-500"></span>
                  Pan-India Locations Directory
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Industry Compliance Solutions
                </Link>
              </li>
              <li>
                <Link href="/who-we-help" className="hover:text-amber-400 transition-colors flex items-center gap-2">
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
                <Link href="/blog" className="text-amber-400 hover:underline flex items-center gap-1.5 font-bold">
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
                <Link href="/blog/top-gst-service-providers-in-mumbai" className="hover:text-white transition-colors">
                  Top 10 GST Providers Mumbai
                </Link>
              </li>
              <li>
                <Link href="/blog/top-gst-service-providers-in-delhi-ncr" className="hover:text-white transition-colors">
                  Top 10 GST Providers Delhi NCR
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

        {/* Pan-India GST & Tax Compliance Network Section */}
        <div className="bg-[#120D0A]/90 p-6 sm:p-8 rounded-2xl border border-[#2E221B] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#261C16]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Globe2 className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                  Pan-India GST & Tax Compliance Coverage
                </span>
              </div>
              <h3 className="text-base font-bold text-white">
                Serving Businesses Across All 28 Indian States & 8 Union Territories
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Dedicated regional compliance desks with official state commercial tax portal alignment and digital onboarding.
              </p>
            </div>

            {/* Region Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#1A120D] rounded-xl border border-[#33251D]">
              {regionalDirectories.map((rd) => (
                <button
                  key={rd.region}
                  type="button"
                  onClick={() => setActiveRegionTab(rd.region)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeRegionTab === rd.region
                      ? "bg-amber-500 text-black shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-[#261C16]"
                  }`}
                >
                  {rd.region}
                </button>
              ))}
            </div>
          </div>

          {/* Active Region Cities & Direct Service Links */}
          {regionalDirectories
            .filter((rd) => rd.region === activeRegionTab)
            .map((rd) => (
              <div key={rd.region} className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Coverage: <strong className="text-slate-200">{rd.description}</strong></span>
                  <Link href="/locations" className="text-amber-400 hover:underline flex items-center gap-1 font-medium">
                    <span>View All {rd.locations.length} Hubs</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-2">
                  {rd.locations.map((loc) => (
                    <div
                      key={loc.id}
                      className="p-3 rounded-xl bg-[#17100B] border border-[#2B1F17] hover:border-amber-500/50 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-amber-500/90 uppercase tracking-wider">
                            {loc.state}
                          </span>
                          <span className="text-[10px] text-slate-500">{loc.tier}</span>
                        </div>
                        <Link
                          href={`/locations/${loc.id}`}
                          className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors block"
                        >
                          {loc.city}
                        </Link>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-[#261C16] flex flex-wrap gap-1 text-[10px]">
                        <Link
                          href={`/locations/${loc.id}/gst-return-filing`}
                          className="text-slate-400 hover:text-amber-300 transition-colors underline-offset-2 hover:underline"
                          title={`GST Return Filing in ${loc.city}`}
                        >
                          GST Filing
                        </Link>
                        <span className="text-slate-600">•</span>
                        <Link
                          href={`/locations/${loc.id}/gst-registration`}
                          className="text-slate-400 hover:text-amber-300 transition-colors underline-offset-2 hover:underline"
                          title={`GST Registration in ${loc.city}`}
                        >
                          GST Reg
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          {/* Quick Cross-State GST Keywords Row */}
          <div className="pt-4 border-t border-[#261C16] flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-slate-400">
            <span className="font-bold text-white text-xs">Top State GST Desks:</span>
            <Link href="/locations/mumbai/gst-return-filing" className="hover:text-amber-400 transition-colors">Maharashtra GST Filing</Link>
            <span className="text-slate-600">|</span>
            <Link href="/locations/delhi/gst-return-filing" className="hover:text-amber-400 transition-colors">Delhi NCR GST Filing</Link>
            <span className="text-slate-600">|</span>
            <Link href="/locations/bengaluru/gst-return-filing" className="hover:text-amber-400 transition-colors">Karnataka GST Filing</Link>
            <span className="text-slate-600">|</span>
            <Link href="/locations/ahmedabad/gst-return-filing" className="hover:text-amber-400 transition-colors">Gujarat GST Filing</Link>
            <span className="text-slate-600">|</span>
            <Link href="/locations/chennai/gst-return-filing" className="hover:text-amber-400 transition-colors">Tamil Nadu GST Filing</Link>
            <span className="text-slate-600">|</span>
            <Link href="/locations/hyderabad/gst-return-filing" className="hover:text-amber-400 transition-colors">Telangana GST Filing</Link>
            <span className="text-slate-600">|</span>
            <Link href="/locations/lucknow/gst-return-filing" className="hover:text-amber-400 transition-colors">Uttar Pradesh GST Filing</Link>
            <span className="text-slate-600">|</span>
            <Link href="/locations/kolkata/gst-return-filing" className="hover:text-amber-400 transition-colors">West Bengal GST Filing</Link>
            <span className="text-slate-600">|</span>
            <Link href="/locations/jaipur/gst-return-filing" className="hover:text-amber-400 transition-colors">Rajasthan GST Filing</Link>
            <span className="text-slate-600">|</span>
            <Link href="/locations/indore/gst-return-filing" className="hover:text-amber-400 transition-colors">Madhya Pradesh GST Filing</Link>
            <span className="text-slate-600">|</span>
            <Link href="/locations/chandigarh/gst-return-filing" className="hover:text-amber-400 transition-colors">Punjab & Haryana GST Filing</Link>
            <span className="text-slate-600">|</span>
            <Link href="/locations/patna/gst-return-filing" className="hover:text-amber-400 transition-colors">Bihar GST Filing</Link>
            <span className="text-slate-600">|</span>
            <Link href="/locations/kochi/gst-return-filing" className="hover:text-amber-400 transition-colors">Kerala GST Filing</Link>
          </div>
        </div>

        {/* Regulatory Disclaimer Notice */}
        <div className="pt-4 pb-2 text-xs text-[#BCAE9F] leading-relaxed space-y-2 bg-[#120D0A]/40 p-5 rounded-2xl border border-[#2E221B]">
          <p>
            <strong className="text-[#FAF4EF] font-bold">Legal & Regulatory Notice:</strong> {siteConfig.disclaimer}
          </p>
          <p className="text-[#A89A8F] text-[11px]">
            We do not promise zero penalties, guaranteed tax reductions, or unauthorized document certifications. All government portals (gst.gov.in, incometax.gov.in, udyamregistration.gov.in) are official Government of India properties.
          </p>
        </div>

        {/* Bottom Bar with Codeorbit.cloud Credit */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 border-t border-[#261C16]">
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
