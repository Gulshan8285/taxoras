"use client";

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
  ShieldCheck,
  MapPin,
  Briefcase,
  UserCheck
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
    <>
      {/* 1. Top Announcement Bar */}
      <div className="bg-navy text-slate-200 text-[11px] py-1.5 px-4 text-center font-medium border-b border-navy-dark tracking-wide flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"></span>
        <span>{siteConfig.announcement}</span>
        <span className="hidden md:inline text-slate-400">• Remote Online Intake & Fast Turnaround</span>
      </div>

      {/* 2. Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-surface-border py-2.5"
            : "bg-white border-b border-surface-border py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Brand Logo & Tagline */}
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
            <nav className="hidden xl:flex items-center gap-1">
              <Link
                href="/"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
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
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                    pathname.startsWith("/services") || servicesDropdownOpen
                      ? "text-brand-blue bg-blue-50/70"
                      : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

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
                href="/pricing"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === "/pricing"
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Pricing
              </Link>

              <Link
                href="/industries"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === "/industries"
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Industries
              </Link>

              <Link
                href="/locations"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname.startsWith("/locations")
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Locations
              </Link>

              <Link
                href="/who-we-help"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === "/who-we-help"
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Who We Help
              </Link>

              <Link
                href="/blog"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname.startsWith("/blog")
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Blog
              </Link>

              <Link
                href="/resources"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname.startsWith("/resources")
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Guides
              </Link>

              <Link
                href="/about"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === "/about"
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === "/contact"
                    ? "text-brand-blue bg-blue-50/70"
                    : "text-text-main hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right: Portal Login, WhatsApp, Primary CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link
                href="/portal"
                className="text-xs font-semibold text-text-muted hover:text-navy px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5 border border-surface-border"
                title="Client Document & Status Portal"
              >
                <UserCheck className="w-3.5 h-3.5 text-brand-blue" />
                <span>Client Portal</span>
              </Link>

              <a
                href={siteConfig.links.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-teal hover:bg-teal-light transition-colors border border-teal/20"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-teal/10" />
              </a>

              <Link
                href="/#enquire"
                className="inline-flex items-center gap-1.5 bg-navy hover:bg-navy-light text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/portal"
                className="text-xs font-semibold text-brand-blue bg-blue-50 px-2.5 py-1.5 rounded-lg flex items-center gap-1"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Portal</span>
              </Link>

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

        {/* Mobile Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-surface-border bg-white px-4 pt-4 pb-6 space-y-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1 text-sm font-semibold text-navy">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Home
              </Link>
              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Pricing
              </Link>
              <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Industries
              </Link>
              <Link href="/locations" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Locations (India Hubs)
              </Link>
              <Link href="/who-we-help" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Who We Help
              </Link>
              <Link href="/portal" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-brand-blue bg-blue-50/50">
                Client Document Portal
              </Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Blog & Market Articles
              </Link>
              <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Compliance Guides & Library
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                About Us
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50">
                Contact
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
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
