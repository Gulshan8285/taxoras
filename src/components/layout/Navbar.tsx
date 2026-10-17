"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
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
  Phone
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
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
      {/* Top Announcement Bar */}
      <div className="bg-navy text-white text-xs py-2 px-4 border-b border-navy-light text-center relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <span className="hidden sm:inline font-medium text-slate-300">
            {siteConfig.announcement}
          </span>
          <span className="sm:hidden font-medium text-slate-300 mx-auto">
            India-Wide Accounting & GST Advisory
          </span>
          <div className="hidden sm:flex items-center gap-4 text-slate-300">
            <a
              href={siteConfig.links.phoneUrl}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-teal" />
              <span>Direct Support: {siteConfig.contact.phoneFormatted}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-teal font-semibold">Affordable & ₹5 Cheaper Rate Assurance</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-200 border-b border-surface-border ${
          scrolled ? "shadow-md py-2.5" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo: Clicking automatically takes user to Home */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group"
              title="TaxVeda Advisory - Home"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white font-extrabold text-base sm:text-lg shadow-sm group-hover:bg-brand-blue-hover transition-colors">
                TV
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-navy leading-none group-hover:text-brand-blue transition-colors">
                  {siteConfig.shortName}
                </span>
                <span className="text-[10px] text-text-muted font-medium tracking-tight leading-tight mt-0.5 hidden xs:inline">
                  Accounting & Compliance
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Menu (Streamlined in ONE Single Line) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                    pathname.startsWith("/services") || servicesDropdownOpen
                      ? "text-brand-blue bg-blue-50/70"
                      : "text-text-main hover:text-brand-blue hover:bg-slate-50"
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
                  <div className="absolute left-0 top-full mt-2 w-[720px] bg-white rounded-2xl shadow-xl border border-surface-border p-5 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="col-span-2 pb-2 mb-1 border-b border-surface-border flex items-center justify-between">
                      <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Core Compliance & Accounting Services
                      </span>
                      <Link
                        href="/#services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-xs font-medium text-brand-blue hover:underline flex items-center gap-1"
                      >
                        View All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {serviceCategories.map((group, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl bg-slate-50/60 border border-slate-100 ${
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
                              className="block p-1.5 rounded-lg text-xs font-medium text-text-main hover:text-brand-blue hover:bg-white transition-colors"
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

              <Link
                href="/industries"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === "/industries"
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Industries
              </Link>

              <Link
                href="/locations"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname.startsWith("/locations")
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Locations
              </Link>

              {/* Blog covers both articles and compliance guides */}
              <Link
                href="/blog"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname.startsWith("/blog") || pathname.startsWith("/resources")
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Blog & Guides
              </Link>

              <Link
                href="/about"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === "/about"
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === "/contact"
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right: Authentic WhatsApp CTA + Primary "Get a Quote" CTA */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              
              {/* Recognizable WhatsApp Button with Official Brand Color & SVG Icon */}
              <a
                href={siteConfig.links.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold px-3.5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95"
                title="Chat with us on WhatsApp: +91 81038 19494"
                aria-label="Chat on WhatsApp"
              >
                <svg
                  className="w-4 h-4 fill-white shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Get a Quote Action Button */}
              <Link
                href="/#enquire"
                className="inline-flex items-center gap-1.5 bg-navy hover:bg-navy-light text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions: WhatsApp Icon + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={siteConfig.links.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#25D366] text-white shadow-sm"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-navy hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-surface-border bg-white px-4 pt-4 pb-6 space-y-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1 text-sm font-semibold text-navy">
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Services (All 10 Categories)
              </Link>
              <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Industries We Support
              </Link>
              <Link href="/locations" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Commercial Locations (India)
              </Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Blog & Compliance Guides
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                About Us
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Contact Office
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={siteConfig.links.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-bold py-3 rounded-xl shadow-sm"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Enquire on WhatsApp</span>
              </a>

              <Link
                href="/#enquire"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-navy text-white text-xs font-semibold py-3 rounded-xl shadow-sm"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
