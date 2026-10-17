"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  FileText,
  Building,
  Coins,
  Receipt,
  Scale,
  Phone,
  Sparkles
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceCategories = [
    {
      title: "GST Compliance",
      icon: <Receipt className="w-4 h-4 text-brand-blue" />,
      items: [
        { title: "GST Registration", slug: "gst-registration", shortDescription: "New GSTIN & Composition schemes" },
        { title: "GST Return Filing", slug: "gst-return-filing", shortDescription: "GSTR-1, GSTR-3B & 2B Matching" }
      ]
    },
    {
      title: "TDS Compliance",
      icon: <FileText className="w-4 h-4 text-teal" />,
      items: [
        { title: "TDS Return Filing", slug: "tds-return-filing", shortDescription: "Quarterly 24Q (Salary) & 26Q (Vendor)" },
        { title: "TDS Payment Assistance", slug: "tds-payment", shortDescription: "Challan 281 verification & timing" }
      ]
    },
    {
      title: "Accounting & Reconciliations",
      icon: <Coins className="w-4 h-4 text-indigo-600" />,
      items: [
        { title: "Day-to-Day Accounting", slug: "daily-accounting", shortDescription: "Sales, purchase & ledger bookkeeping" },
        { title: "Bank Reconciliation (BRS)", slug: "bank-reconciliation", shortDescription: "Matching statements with ledgers" },
        { title: "Debtors & Creditors Reconcile", slug: "debtors-creditors-reconciliation", shortDescription: "Vendor aging & outstanding balances" }
      ]
    },
    {
      title: "Financials & Tax Returns",
      icon: <Scale className="w-4 h-4 text-amber-600" />,
      items: [
        { title: "Balance Sheet & P&L", slug: "balance-sheet", shortDescription: "Year-end trial balance & statements" },
        { title: "Income Tax Return (ITR)", slug: "income-tax-return", shortDescription: "ITR-3, 4, 5 & 6 business returns" }
      ]
    },
    {
      title: "Registrations",
      icon: <Building className="w-4 h-4 text-emerald-600" />,
      items: [
        { title: "MSME / Udyam Registration", slug: "msme-udyam-registration", shortDescription: "Zero-fee government certificate setup" }
      ]
    }
  ];

  return (
    <>
      {/* Top Floating Mini Announcement Capsule */}
      <div className="bg-navy text-white text-[11px] py-1.5 px-4 text-center border-b border-navy-light/60 relative z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline font-medium text-slate-300">
            {siteConfig.announcement}
          </span>
          <span className="sm:hidden font-medium text-slate-300 mx-auto">
            India-Wide Accounting & GST Advisory
          </span>
          <div className="hidden sm:flex items-center gap-3 text-slate-300 text-[11px]">
            <a
              href={siteConfig.links.phoneUrl}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-teal" />
              <span>Helpline: {siteConfig.contact.phoneFormatted}</span>
            </a>
            <span className="text-slate-600">•</span>
            <span className="text-teal font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Guaranteed ₹5 Cheaper Fee Assurance
            </span>
          </div>
        </div>
      </div>

      {/* Floating Glassmorphic Capsule Header */}
      <header className="sticky top-2 sm:top-4 z-40 px-3 sm:px-6 pointer-events-none transition-all duration-300">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <div
            className={`rounded-full transition-all duration-300 flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 ${
              scrolled
                ? "bg-white/90 backdrop-blur-2xl border border-white/70 shadow-[0_12px_40px_rgb(0,0,0,0.12)]"
                : "bg-white/85 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.1)]"
            }`}
          >
            {/* Logo: Clicking automatically takes user to Home */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0 group select-none pl-1"
              title="TaxVeda Advisory - Home"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-blue flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-sm group-hover:scale-105 group-hover:bg-brand-blue-hover transition-transform">
                TV
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-tight text-navy leading-none group-hover:text-brand-blue transition-colors">
                  {siteConfig.shortName}
                </span>
                <span className="text-[9px] text-text-muted font-semibold tracking-tight leading-none mt-0.5 hidden xs:inline">
                  Compliance
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links: Pill Capsule Theme with Active Dark Capsule */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-100/60 p-1 rounded-full border border-slate-200/50">
              
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 ${
                    pathname.startsWith("/services") || servicesDropdownOpen
                      ? "bg-navy text-white shadow-sm"
                      : "text-text-main hover:text-navy hover:bg-white/80"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute left-0 top-full mt-3 w-[720px] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-surface-border p-5 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="col-span-2 pb-2 mb-1 border-b border-surface-border flex items-center justify-between">
                      <span className="text-xs font-bold text-navy uppercase tracking-wider flex items-center gap-1.5">
                        <Receipt className="w-3.5 h-3.5 text-teal" />
                        Core Compliance & Accounting Services
                      </span>
                      <Link
                        href="/#services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-xs font-semibold text-brand-blue hover:underline flex items-center gap-1"
                      >
                        View All 10 Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {serviceCategories.map((group, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-2xl bg-slate-50/80 border border-slate-100 ${
                          idx === 4 ? "col-span-2" : ""
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-navy mb-2">
                          {group.icon}
                          <span>{group.title}</span>
                        </div>
                        <div className="space-y-1">
                          {group.items.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/services/${svc.slug}`}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="block p-1.5 rounded-xl text-xs font-medium text-text-main hover:text-brand-blue hover:bg-white transition-colors"
                            >
                              <span className="font-semibold text-navy">{svc.title}</span>
                              <span className="block text-[11px] text-text-muted line-clamp-1">
                                {svc.shortDescription}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries Link */}
              <Link
                href="/industries"
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  pathname === "/industries"
                    ? "bg-navy text-white shadow-sm"
                    : "text-text-main hover:text-navy hover:bg-white/80"
                }`}
              >
                Industries
              </Link>

              {/* Locations Link */}
              <Link
                href="/locations"
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  pathname.startsWith("/locations")
                    ? "bg-navy text-white shadow-sm"
                    : "text-text-main hover:text-navy hover:bg-white/80"
                }`}
              >
                Locations
              </Link>

              {/* Blog & Guides Link */}
              <Link
                href="/blog"
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  pathname.startsWith("/blog") || pathname.startsWith("/resources")
                    ? "bg-navy text-white shadow-sm"
                    : "text-text-main hover:text-navy hover:bg-white/80"
                }`}
              >
                Blog & Guides
              </Link>

              {/* About Link */}
              <Link
                href="/about"
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  pathname === "/about"
                    ? "bg-navy text-white shadow-sm"
                    : "text-text-main hover:text-navy hover:bg-white/80"
                }`}
              >
                About
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  pathname === "/contact"
                    ? "bg-navy text-white shadow-sm"
                    : "text-text-main hover:text-navy hover:bg-white/80"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Capsule Buttons: Official WhatsApp + Get a Quote */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              
              {/* WhatsApp Capsule Button */}
              <a
                href={siteConfig.links.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold px-3.5 py-2 rounded-full transition-all shadow-sm hover:shadow-md active:scale-95"
                title="Chat with us on WhatsApp: +91 81038 19494"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* Get a Quote Capsule Button */}
              <Link
                href="/#enquire"
                className="inline-flex items-center gap-1.5 bg-navy hover:bg-navy-light text-white text-xs font-bold px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions: WhatsApp Icon + Hamburger Pill */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={siteConfig.links.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#25D366] text-white shadow-sm"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-navy hover:bg-slate-100 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* Mobile Slide-out Menu: Rounded Glass Card */}
          {mobileMenuOpen && (
            <div className="mt-2 bg-white/95 backdrop-blur-2xl rounded-3xl border border-surface-border shadow-2xl p-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-1.5 text-xs font-bold text-navy">
                <Link
                  href="/#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-2xl hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>Services (10 Categories)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                </Link>
                <Link
                  href="/industries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-2xl hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>Industries</span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                </Link>
                <Link
                  href="/locations"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-2xl hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>Locations (India Hubs)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-2xl hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>Blog & Compliance Guides</span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-2xl hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-2xl hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>Contact Office</span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                </Link>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href={siteConfig.links.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-bold py-3 rounded-full shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <Link
                  href="/#enquire"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-navy text-white text-xs font-bold py-3 rounded-full shadow-sm"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
