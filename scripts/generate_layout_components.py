import os

service_icon_ts = """import React from "react";
import {
  FileCheck2,
  Receipt,
  FileSpreadsheet,
  CreditCard,
  BookOpenCheck,
  Building2,
  Scale,
  UsersRound,
  PieChart,
  BadgePercent,
  Rocket,
  Briefcase,
  Store,
  ShoppingBag,
  Laptop,
  Sparkles,
  Factory,
  TrendingUp,
  ShieldCheck,
  Clock,
  HelpCircle,
  CheckCircle2,
  LucideProps
} from "lucide-react";

interface ServiceIconProps extends LucideProps {
  name: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, ...props }) => {
  switch (name) {
    case "FileCheck2":
      return <FileCheck2 {...props} />;
    case "Receipt":
      return <Receipt {...props} />;
    case "FileSpreadsheet":
      return <FileSpreadsheet {...props} />;
    case "CreditCard":
      return <CreditCard {...props} />;
    case "BookOpenCheck":
      return <BookOpenCheck {...props} />;
    case "Building2":
      return <Building2 {...props} />;
    case "Scale":
      return <Scale {...props} />;
    case "UsersRound":
      return <UsersRound {...props} />;
    case "PieChart":
      return <PieChart {...props} />;
    case "BadgePercent":
      return <BadgePercent {...props} />;
    case "Rocket":
      return <Rocket {...props} />;
    case "Briefcase":
      return <Briefcase {...props} />;
    case "Store":
      return <Store {...props} />;
    case "ShoppingBag":
      return <ShoppingBag {...props} />;
    case "Laptop":
      return <Laptop {...props} />;
    case "Sparkles":
      return <Sparkles {...props} />;
    case "Factory":
      return <Factory {...props} />;
    case "TrendingUp":
      return <TrendingUp {...props} />;
    case "ShieldCheck":
      return <ShieldCheck {...props} />;
    case "Clock":
      return <Clock {...props} />;
    case "CheckCircle2":
      return <CheckCircle2 {...props} />;
    default:
      return <HelpCircle {...props} />;
  }
};
"""

with open("src/components/common/ServiceIcon.tsx", "w") as f:
    f.write(service_icon_ts)

navbar_ts = """\"use client\";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { allServices } from "@/data/servicesData";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  MessageCircle,
  FileCheck2,
  FileSpreadsheet,
  BookOpenCheck,
  Building2,
  PieChart,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on page route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const serviceCategories = [
    {
      title: "1. GST Services",
      icon: <FileCheck2 className="w-4 h-4 text-brand-blue" />,
      items: allServices.filter((s) => s.category === "gst"),
    },
    {
      title: "2. TDS & Taxation",
      icon: <FileSpreadsheet className="w-4 h-4 text-brand-blue" />,
      items: allServices.filter((s) => s.category === "tds"),
    },
    {
      title: "3. Accounting & Reconciliation",
      icon: <BookOpenCheck className="w-4 h-4 text-brand-blue" />,
      items: allServices.filter((s) => s.category === "accounting"),
    },
    {
      title: "4. Business Registrations",
      icon: <Building2 className="w-4 h-4 text-brand-blue" />,
      items: allServices.filter((s) => s.category === "registrations"),
    },
    {
      title: "5. Financial Statements & ITR",
      icon: <PieChart className="w-4 h-4 text-brand-blue" />,
      items: allServices.filter((s) => s.category === "financials"),
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-surface-border py-2.5"
          : "bg-white border-b border-surface-border py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white font-bold shadow-md shadow-navy/15 group-hover:bg-brand-blue transition-colors">
              <span className="text-xl tracking-tight text-white">TV</span>
            </div>
            <div>
              <div className="text-lg font-bold text-navy tracking-tight group-hover:text-brand-blue transition-colors leading-none">
                {siteConfig.shortName} <span className="font-semibold text-text-muted text-sm hidden sm:inline">Advisory</span>
              </div>
              <p className="text-[11px] font-medium text-text-muted mt-1 tracking-wide">
                {siteConfig.tagline}
              </p>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-brand-blue bg-blue-50/70"
                  : "text-text-main hover:text-brand-blue hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith("/services") || servicesDropdownOpen
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mega-menu / Dropdown Container */}
              {servicesDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[760px] bg-white rounded-2xl shadow-xl border border-surface-border p-5 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="col-span-2 pb-2 mb-1 border-b border-surface-border flex items-center justify-between">
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Core Compliance & Accounting Services
                    </span>
                    <Link
                      href="/#services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-medium text-brand-blue hover:underline flex items-center gap-1"
                    >
                      View All 10 Services <ArrowRight className="w-3 h-3" />
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
              href="/who-we-help"
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/who-we-help"
                  ? "text-brand-blue bg-blue-50/70"
                  : "text-text-main hover:text-brand-blue hover:bg-slate-50"
              }`}
            >
              Who We Help
            </Link>

            <Link
              href="/pricing"
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/pricing"
                  ? "text-brand-blue bg-blue-50/70"
                  : "text-text-main hover:text-brand-blue hover:bg-slate-50"
              }`}
            >
              Pricing & Scope
            </Link>

            <Link
              href="/about"
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/about"
                  ? "text-brand-blue bg-blue-50/70"
                  : "text-text-main hover:text-brand-blue hover:bg-slate-50"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/resources"
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith("/resources")
                  ? "text-brand-blue bg-blue-50/70"
                  : "text-text-main hover:text-brand-blue hover:bg-slate-50"
              }`}
            >
              Resources
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/contact"
                  ? "text-brand-blue bg-blue-50/70"
                  : "text-text-main hover:text-brand-blue hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.links.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-teal hover:bg-teal-light transition-colors border border-teal/20"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-teal/10" />
            </a>

            <a
              href={siteConfig.links.phoneUrl}
              className="p-2 rounded-xl text-text-muted hover:text-navy hover:bg-slate-100 transition-colors border border-surface-border"
              title="Call Helpline"
            >
              <Phone className="w-4 h-4" />
            </a>

            <Link
              href="/#enquire"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              <span>Get Expert Assistance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.links.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-teal bg-teal-light/70"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
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

      {/* Accessible Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-surface-border bg-white px-4 pt-4 pb-6 space-y-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-navy hover:bg-slate-50"
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div className="py-2 border-y border-slate-100 my-1">
              <span className="block px-3 text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                All 10 Core Services
              </span>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {allServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-text-main hover:bg-slate-50"
                  >
                    <span>{s.title}</span>
                    <span className="text-[10px] text-text-muted bg-slate-100 px-1.5 py-0.5 rounded">
                      {s.categoryLabel}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/who-we-help"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-navy hover:bg-slate-50"
            >
              Who We Help
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-navy hover:bg-slate-50"
            >
              Pricing & Scope
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-navy hover:bg-slate-50"
            >
              About Us
            </Link>
            <Link
              href="/resources"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-navy hover:bg-slate-50"
            >
              Resources & Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-navy hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <Link
              href="/#enquire"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-navy text-white text-sm font-semibold py-3 rounded-xl shadow-sm"
            >
              <span>Get Expert Assistance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.links.phoneUrl}
              className="w-full flex items-center justify-center gap-2 border border-surface-border text-navy text-sm font-semibold py-2.5 rounded-xl hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-brand-blue" />
              <span>Call: {siteConfig.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
"""

with open("src/components/layout/Navbar.tsx", "w") as f:
    f.write(navbar_ts)

footer_ts = """import React from "react";
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
  ExternalLink
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
              Practical accounting, GST registration, return filing, TDS compliance, and financial reporting support for Indian businesses, startups, and traders.
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
              GST & TDS Services
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

          {/* Column 3: Registrations, Statements & ITR */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-teal pl-2.5">
              Financials & Registrations
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
                <Link href="/who-we-help" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Who We Help (Audience Guides)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                  Transparent Pricing & Scope
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Compliance Integrity */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-teal pl-2.5">
              Knowledge & Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
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
                  Contact & Office Location
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy & Document Safety
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Professional & Regulatory Disclaimer
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700"
                >
                  <ShieldCheck className="w-3 h-3 text-teal" />
                  Staff Admin Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Scope Disclaimer Notice */}
        <div className="pt-8 pb-6 text-[11px] text-slate-400 leading-relaxed border-b border-slate-800 space-y-2">
          <p>
            <strong className="text-slate-200">Legal & Regulatory Disclaimer:</strong> {siteConfig.disclaimer}
          </p>
          <p>
            We do not promise zero penalties, guaranteed tax reductions, or unauthorized document certifications. All government portals (gst.gov.in, incometax.gov.in, udyamregistration.gov.in) are official Government of India properties.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
"""

with open("src/components/layout/Footer.tsx", "w") as f:
    f.write(footer_ts)

whatsapp_ts = """\"use client\";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { MessageCircle, Phone, X, ArrowUpRight } from "lucide-react";

interface FloatingWhatsAppProps {
  currentService?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentService }) => {
  const [showCallCard, setShowCallCard] = useState(false);

  const whatsappHref = siteConfig.links.whatsappUrl(currentService);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Quick Call Modal/Card */}
      {showCallCard && (
        <div className="bg-white rounded-2xl shadow-2xl border border-surface-border p-4 w-72 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-surface-border">
            <span className="text-xs font-bold text-navy">Direct Client Helpline</span>
            <button
              onClick={() => setShowCallCard(false)}
              className="text-text-muted hover:text-navy p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="py-3 text-xs text-text-main space-y-1">
            <p className="font-semibold text-navy">{siteConfig.contact.phoneFormatted}</p>
            <p className="text-[11px] text-text-muted">
              {siteConfig.contact.workingDays}: {siteConfig.contact.workingHours}
            </p>
          </div>
          <a
            href={siteConfig.links.phoneUrl}
            className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white text-xs font-semibold py-2 rounded-xl hover:bg-brand-blue-hover transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>
        </div>
      )}

      {/* Floating Buttons Group */}
      <div className="flex items-center gap-2">
        {/* Click to Call Button */}
        <button
          onClick={() => setShowCallCard(!showCallCard)}
          className="bg-white text-navy hover:text-brand-blue border border-surface-border shadow-lg hover:shadow-xl w-11 h-11 rounded-full flex items-center justify-center transition-all group"
          title="Call Helpline"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-4 h-4 text-brand-blue group-hover:scale-110 transition-transform" />
        </button>

        {/* WhatsApp CTA Button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-600/30 px-4 py-2.5 rounded-full flex items-center gap-2.5 transition-all group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold tracking-wide hidden sm:inline">
            WhatsApp Us
          </span>
        </a>
      </div>
    </div>
  );
};
"""

with open("src/components/common/FloatingWhatsApp.tsx", "w") as f:
    f.write(whatsapp_ts)

print("Created ServiceIcon, Navbar, Footer, and FloatingWhatsApp components!")
