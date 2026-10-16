hero_code = """\"use client\";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  AlertTriangle,
  Receipt,
  Scale,
  MapPin,
  Lock
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<\"gst\" | \"accounting\" | \"tds\">(\"gst\");

  return (
    <section className=\"relative overflow-hidden bg-gradient-to-b from-white via-surface-bg to-surface-bg pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-surface-border\">
      {/* Background Subtle Geometric Pattern */}
      <div className=\"absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#10243A_1px,transparent_1px)] [background-size:24px_24px]\"></div>

      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative\">
        <div className=\"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center\">
          
          {/* Left Column: Headlines, Copy & CTAs */}
          <div className=\"lg:col-span-7 space-y-6 text-center lg:text-left\">
            
            {/* Positioning Trust Badge */}
            <div className=\"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-brand-blue text-xs font-semibold shadow-xs\">
              <ShieldCheck className=\"w-3.5 h-3.5 text-teal\" />
              <span>{siteConfig.positioning}</span>
            </div>

            {/* Main Master Headline */}
            <h1 className=\"text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-[1.15]\">
              India&apos;s Affordable Partner for Accounting, GST & Tax Compliance.
            </h1>

            {/* Supporting Copy */}
            <p className=\"text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0\">
              From GST registration and return filing to daily bookkeeping, TDS compliance, reconciliations, financial statements and income tax returns, get the support your business needs through a clear, convenient online process.
            </p>

            {/* CTAs */}
            <div className=\"flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2\">
              <a
                href=\"#enquire\"
                className=\"w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-navy hover:bg-navy-light text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg shadow-navy/15\"
              >
                <span>Get My Service Quote</span>
                <ArrowRight className=\"w-4 h-4\" />
              </a>

              <a
                href=\"#services\"
                className=\"w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-navy font-semibold text-sm px-6 py-3.5 rounded-xl border border-surface-border transition-all shadow-xs\"
              >
                <span>Explore All Services</span>
              </a>
            </div>

            {/* 4 Supporting Value Points */}
            <div className=\"grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 border-t border-surface-border text-left\">
              <div className=\"bg-white/80 p-2.5 rounded-xl border border-surface-border/70 shadow-xs\">
                <CheckCircle2 className=\"w-4 h-4 text-brand-blue mb-1\" />
                <h4 className=\"text-[11px] font-bold text-navy leading-tight\">Clear Service Scope</h4>
                <p className=\"text-[10px] text-text-muted mt-0.5\">Defined limits & tasks</p>
              </div>

              <div className=\"bg-white/80 p-2.5 rounded-xl border border-surface-border/70 shadow-xs\">
                <Scale className=\"w-4 h-4 text-teal mb-1\" />
                <h4 className=\"text-[11px] font-bold text-navy leading-tight\">Transparent Pricing</h4>
                <p className=\"text-[10px] text-text-muted mt-0.5\">Zero surprise add-ons</p>
              </div>

              <div className=\"bg-white/80 p-2.5 rounded-xl border border-surface-border/70 shadow-xs\">
                <MapPin className=\"w-4 h-4 text-brand-blue mb-1\" />
                <h4 className=\"text-[11px] font-bold text-navy leading-tight\">Pan-India Online</h4>
                <p className=\"text-[10px] text-text-muted mt-0.5\">Serving all states</p>
              </div>

              <div className=\"bg-white/80 p-2.5 rounded-xl border border-surface-border/70 shadow-xs\">
                <Lock className=\"w-4 h-4 text-emerald-600 mb-1\" />
                <h4 className=\"text-[11px] font-bold text-navy leading-tight\">Secure Records</h4>
                <p className=\"text-[10px] text-text-muted mt-0.5\">Status & acknowledgements</p>
              </div>
            </div>

            {/* Honest Trust Statement */}
            <p className=\"text-xs text-text-muted/90 italic pt-1 text-center lg:text-left\">
              “{siteConfig.trustStatement}”
            </p>
          </div>

          {/* Right Column: Live Interactive Accounting Dashboard Preview Card */}
          <div className=\"lg:col-span-5\">
            <div className=\"relative mx-auto max-w-md lg:max-w-none\">
              
              <div className=\"absolute -inset-1 bg-gradient-to-r from-brand-blue/15 to-teal/15 rounded-3xl blur-xl opacity-70\"></div>

              <div className=\"relative bg-white rounded-2xl shadow-xl border border-surface-border p-5 sm:p-6 space-y-4\">
                
                <div className=\"flex items-center justify-between pb-3 border-b border-surface-border\">
                  <div className=\"flex items-center gap-2\">
                    <span className=\"w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse\"></span>
                    <span className=\"text-xs font-bold text-navy\">Compliance Workspace Monitor</span>
                  </div>
                  <span className=\"text-[11px] font-medium text-text-muted bg-slate-100 px-2 py-0.5 rounded\">
                    Pan-India Live
                  </span>
                </div>

                <div className=\"grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-medium\">
                  <button
                    type=\"button\"
                    onClick={() => setActiveTab(\"gst\")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === \"gst\"
                        ? \"bg-white text-navy font-bold shadow-xs\"
                        : \"text-text-muted hover:text-navy\"
                    }`}
                  >
                    GST Timeline
                  </button>
                  <button
                    type=\"button\"
                    onClick={() => setActiveTab(\"accounting\")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === \"accounting\"
                        ? \"bg-white text-navy font-bold shadow-xs\"
                        : \"text-text-muted hover:text-navy\"
                    }`}
                  >
                    Bookkeeping
                  </button>
                  <button
                    type=\"button\"
                    onClick={() => setActiveTab(\"tds\")}
                    className={`py-1.5 rounded-lg transition-all ${
                      activeTab === \"tds\"
                        ? \"bg-white text-navy font-bold shadow-xs\"
                        : \"text-text-muted hover:text-navy\"
                    }`}
                  >
                    TDS & Bank
                  </button>
                </div>

                {activeTab === \"gst\" && (
                  <div className=\"space-y-3 animate-in fade-in duration-200\">
                    <div className=\"p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2\">
                      <div className=\"flex items-center justify-between text-xs\">
                        <span className=\"font-semibold text-navy flex items-center gap-1.5\">
                          <Receipt className=\"w-3.5 h-3.5 text-brand-blue\" />
                          GSTR-1 (Outward Supplies)
                        </span>
                        <span className=\"text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200\">
                          Verified & Filed
                        </span>
                      </div>
                      <p className=\"text-[11px] text-text-muted\">
                        B2B invoices, credit notes & HSN summaries reconciled with sales ledger.
                      </p>
                    </div>

                    <div className=\"p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2\">
                      <div className=\"flex items-center justify-between text-xs\">
                        <span className=\"font-semibold text-navy flex items-center gap-1.5\">
                          <FileCheck2 className=\"w-3.5 h-3.5 text-teal\" />
                          GSTR-2B vs Purchase Book
                        </span>
                        <span className=\"text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200\">
                          98.6% Reconciled
                        </span>
                      </div>
                      <div className=\"w-full bg-slate-200 rounded-full h-1.5 overflow-hidden\">
                        <div className=\"bg-teal h-full rounded-full\" style={{ width: \"98.6%\" }}></div>
                      </div>
                      <p className=\"text-[10px] text-text-muted flex items-center justify-between\">
                        <span>ITC Eligible: ₹1,48,250</span>
                        <span className=\"text-amber-700 font-medium\">2 Vendor Follow-ups</span>
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === \"accounting\" && (
                  <div className=\"space-y-3 animate-in fade-in duration-200\">
                    <div className=\"p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2\">
                      <div className=\"flex items-center justify-between text-xs\">
                        <span className=\"font-semibold text-navy\">Monthly Ledger Maintenance</span>
                        <span className=\"text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full\">
                          Updated to Date
                        </span>
                      </div>
                      <div className=\"grid grid-cols-2 gap-2 pt-1 text-[11px]\">
                        <div className=\"bg-white p-2 rounded-lg border border-slate-100\">
                          <span className=\"text-text-muted block text-[10px]\">Sales Vouchers</span>
                          <span className=\"font-bold text-navy\">248 Entries</span>
                        </div>
                        <div className=\"bg-white p-2 rounded-lg border border-slate-100\">
                          <span className=\"text-text-muted block text-[10px]\">Purchase Bills</span>
                          <span className=\"font-bold text-navy\">132 Entries</span>
                        </div>
                      </div>
                    </div>

                    <div className=\"p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs\">
                      <div className=\"flex items-center justify-between mb-1\">
                        <span className=\"font-semibold text-navy\">Trial Balance Status</span>
                        <span className=\"text-emerald-700 text-[11px] font-bold\">Balanced</span>
                      </div>
                      <p className=\"text-[11px] text-text-muted\">
                        Debits and credits match with zero unmapped suspense balances.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === \"tds\" && (
                  <div className=\"space-y-3 animate-in fade-in duration-200\">
                    <div className=\"p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-2\">
                      <div className=\"flex items-center justify-between text-xs\">
                        <span className=\"font-semibold text-navy\">Challan 281 (Monthly TDS)</span>
                        <span className=\"text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full\">
                          Paid by 7th
                        </span>
                      </div>
                      <p className=\"text-[11px] text-text-muted\">
                        Mapped to Sections 194C, 194J & 194I. BSR counterfoils archived.
                      </p>
                    </div>

                    <div className=\"p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs\">
                      <div className=\"flex items-center justify-between\">
                        <span className=\"font-semibold text-navy\">Bank Statement (BRS)</span>
                        <span className=\"text-[11px] font-bold text-navy\">Current A/C Matched</span>
                      </div>
                      <p className=\"text-[11px] text-text-muted\">
                        Unpresented cheques and payment gateway settlement fees segregated.
                      </p>
                    </div>
                  </div>
                )}

                <div className=\"pt-2 border-t border-surface-border flex items-center justify-between text-[11px] text-text-muted\">
                  <span className=\"flex items-center gap-1 text-navy font-medium\">
                    <Scale className=\"w-3.5 h-3.5 text-teal\" />
                    Indian Tax Law Adherent
                  </span>
                  <span>Zero Data Sharing</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
"""

with open("src/components/home/HeroSection.tsx", "w") as f:
    f.write(hero_code)

navbar_code = """\"use client\";

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
      icon: <FileCheck2 className=\"w-4 h-4 text-brand-blue\" />,
      items: allServices.filter((s) => s.category === \"gst\"),
    },
    {
      title: "2. TDS & Taxation",
      icon: <FileSpreadsheet className=\"w-4 h-4 text-brand-blue\" />,
      items: allServices.filter((s) => s.category === \"tds\"),
    },
    {
      title: "3. Accounting & Reconciliation",
      icon: <BookOpenCheck className=\"w-4 h-4 text-brand-blue\" />,
      items: allServices.filter((s) => s.category === \"accounting\"),
    },
    {
      title: "4. Business Registrations",
      icon: <Building2 className=\"w-4 h-4 text-brand-blue\" />,
      items: allServices.filter((s) => s.category === \"registrations\"),
    },
    {
      title: "5. Financial Statements & ITR",
      icon: <PieChart className=\"w-4 h-4 text-brand-blue\" />,
      items: allServices.filter((s) => s.category === \"financials\"),
    },
  ];

  return (
    <>
      {/* 1. Top Announcement Bar */}
      <div className=\"bg-navy text-slate-200 text-[11px] py-1.5 px-4 text-center font-medium border-b border-navy-dark tracking-wide flex items-center justify-center gap-2\">
        <span className=\"w-1.5 h-1.5 rounded-full bg-teal animate-pulse\"></span>
        <span>{siteConfig.announcement}</span>
        <span className=\"hidden md:inline text-slate-400\">• Remote Online Intake & Fast Turnaround</span>
      </div>

      {/* 2. Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? \"bg-white/95 backdrop-blur-md shadow-sm border-b border-surface-border py-2.5\"
            : \"bg-white border-b border-surface-border py-3.5\"
        }`}
      >
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"flex items-center justify-between\">
            
            {/* Left: Brand Logo & Tagline */}
            <Link href=\"/\" className=\"flex items-center gap-3 group\">
              <div className=\"w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white font-bold shadow-md shadow-navy/15 group-hover:bg-brand-blue transition-colors\">
                <span className=\"text-xl tracking-tight text-white\">TV</span>
              </div>
              <div>
                <div className=\"text-lg font-bold text-navy tracking-tight group-hover:text-brand-blue transition-colors leading-none\">
                  {siteConfig.shortName} <span className=\"font-semibold text-text-muted text-sm hidden sm:inline\">Advisory</span>
                </div>
                <p className=\"text-[11px] font-medium text-text-muted mt-1 tracking-wide\">
                  {siteConfig.tagline}
                </p>
              </div>
            </Link>

            {/* Center Navigation Links (Desktop) */}
            <nav className=\"hidden xl:flex items-center gap-1\">
              <Link
                href=\"/\"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === \"/\"
                    ? \"text-brand-blue bg-blue-50/70\"
                    : \"text-text-main hover:text-brand-blue hover:bg-slate-50\"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className=\"relative\" ref={dropdownRef}>
                <button
                  type=\"button\"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                    pathname.startsWith(\"/services\") || servicesDropdownOpen
                      ? \"text-brand-blue bg-blue-50/70\"
                      : \"text-text-main hover:text-brand-blue hover:bg-slate-50\"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? \"rotate-180\" : \"\"
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className=\"absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[760px] bg-white rounded-2xl shadow-xl border border-surface-border p-5 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50\">
                    <div className=\"col-span-2 pb-2 mb-1 border-b border-surface-border flex items-center justify-between\">
                      <span className=\"text-xs font-semibold text-text-muted uppercase tracking-wider\">
                        Core Compliance & Accounting Services
                      </span>
                      <Link
                        href=\"/#services\"
                        onClick={() => setServicesDropdownOpen(false)}
                        className=\"text-xs font-medium text-brand-blue hover:underline flex items-center gap-1\"
                      >
                        View All 10 Services <ArrowRight className=\"w-3 h-3\" />
                      </Link>
                    </div>

                    {serviceCategories.map((group, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl bg-slate-50/60 border border-slate-100 ${
                          idx === 4 ? \"col-span-2\" : \"\"
                        }`}
                      >
                        <div className=\"flex items-center gap-1.5 text-xs font-bold text-navy mb-2\">
                          {group.icon}
                          <span>{group.title}</span>
                        </div>
                        <div className=\"space-y-1\">
                          {group.items.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/services/${svc.slug}`}
                              onClick={() => setServicesDropdownOpen(false)}
                              className=\"block p-1.5 rounded-lg text-xs font-medium text-text-main hover:text-brand-blue hover:bg-white transition-colors\"
                            >
                              <span className=\"font-semibold text-navy\">{svc.title}</span>
                              <span className=\"block text-[11px] text-text-muted line-clamp-1\">
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
                href=\"/pricing\"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === \"/pricing\"
                    ? \"text-brand-blue bg-blue-50/70\"
                    : \"text-text-main hover:text-brand-blue hover:bg-slate-50\"
                }`}
              >
                Pricing
              </Link>

              <Link
                href=\"/industries\"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === \"/industries\"
                    ? \"text-brand-blue bg-blue-50/70\"
                    : \"text-text-main hover:text-brand-blue hover:bg-slate-50\"
                }`}
              >
                Industries
              </Link>

              <Link
                href=\"/locations\"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname.startsWith(\"/locations\")
                    ? \"text-brand-blue bg-blue-50/70\"
                    : \"text-text-main hover:text-brand-blue hover:bg-slate-50\"
                }`}
              >
                Locations
              </Link>

              <Link
                href=\"/who-we-help\"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === \"/who-we-help\"
                    ? \"text-brand-blue bg-blue-50/70\"
                    : \"text-text-main hover:text-brand-blue hover:bg-slate-50\"
                }`}
              >
                Who We Help
              </Link>

              <Link
                href=\"/resources\"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname.startsWith(\"/resources\")
                    ? \"text-brand-blue bg-blue-50/70\"
                    : \"text-text-main hover:text-brand-blue hover:bg-slate-50\"
                }`}
              >
                Resources
              </Link>

              <Link
                href=\"/about\"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === \"/about\"
                    ? \"text-brand-blue bg-blue-50/70\"
                    : \"text-text-main hover:text-brand-blue hover:bg-slate-50\"
                }`}
              >
                About
              </Link>

              <Link
                href=\"/contact\"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  pathname === \"/contact\"
                    ? \"text-brand-blue bg-blue-50/70\"
                    : \"text-text-main hover:text-brand-blue hover:bg-slate-50\"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right: Portal Login, WhatsApp, Primary CTA */}
            <div className=\"hidden lg:flex items-center gap-2.5\">
              <Link
                href=\"/portal\"
                className=\"text-xs font-semibold text-text-muted hover:text-navy px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5 border border-surface-border\"
                title=\"Client Document & Status Portal\"
              >
                <UserCheck className=\"w-3.5 h-3.5 text-brand-blue\" />
                <span>Client Portal</span>
              </Link>

              <a
                href={siteConfig.links.whatsappUrl()}
                target=\"_blank\"
                rel=\"noopener noreferrer\"
                className=\"p-2 rounded-xl text-teal hover:bg-teal-light transition-colors border border-teal/20\"
                title=\"Chat on WhatsApp\"
              >
                <MessageCircle className=\"w-4 h-4 fill-teal/10\" />
              </a>

              <Link
                href=\"/#enquire\"
                className=\"inline-flex items-center gap-1.5 bg-navy hover:bg-navy-light text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md\"
              >
                <span>Get a Quote</span>
                <ArrowRight className=\"w-3.5 h-3.5\" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className=\"flex items-center gap-2 lg:hidden\">
              <Link
                href=\"/portal\"
                className=\"text-xs font-semibold text-brand-blue bg-blue-50 px-2.5 py-1.5 rounded-lg flex items-center gap-1\"
              >
                <UserCheck className=\"w-3.5 h-3.5\" />
                <span className=\"hidden sm:inline\">Portal</span>
              </Link>

              <a
                href={siteConfig.links.whatsappUrl()}
                target=\"_blank\"
                rel=\"noopener noreferrer\"
                className=\"p-2 rounded-lg text-teal bg-teal-light/70\"
                aria-label=\"WhatsApp\"
              >
                <MessageCircle className=\"w-4 h-4\" />
              </a>

              <button
                type=\"button\"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className=\"p-2 rounded-lg text-navy hover:bg-slate-100 focus:outline-none\"
                aria-label=\"Toggle Navigation Menu\"
              >
                {mobileMenuOpen ? <X className=\"w-6 h-6\" /> : <Menu className=\"w-6 h-6\" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        {mobileMenuOpen && (
          <div className=\"lg:hidden border-t border-surface-border bg-white px-4 pt-4 pb-6 space-y-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200\">
            <div className=\"flex flex-col space-y-1 text-sm font-semibold text-navy\">
              <Link href=\"/\" onClick={() => setMobileMenuOpen(false)} className=\"px-3 py-2 rounded-lg hover:bg-slate-50\">
                Home
              </Link>
              <Link href=\"/pricing\" onClick={() => setMobileMenuOpen(false)} className=\"px-3 py-2 rounded-lg hover:bg-slate-50\">
                Pricing
              </Link>
              <Link href=\"/industries\" onClick={() => setMobileMenuOpen(false)} className=\"px-3 py-2 rounded-lg hover:bg-slate-50\">
                Industries
              </Link>
              <Link href=\"/locations\" onClick={() => setMobileMenuOpen(false)} className=\"px-3 py-2 rounded-lg hover:bg-slate-50\">
                Locations (India Hubs)
              </Link>
              <Link href=\"/who-we-help\" onClick={() => setMobileMenuOpen(false)} className=\"px-3 py-2 rounded-lg hover:bg-slate-50\">
                Who We Help
              </Link>
              <Link href=\"/portal\" onClick={() => setMobileMenuOpen(false)} className=\"px-3 py-2 rounded-lg text-brand-blue bg-blue-50/50\">
                Client Document Portal
              </Link>
              <Link href=\"/resources\" onClick={() => setMobileMenuOpen(false)} className=\"px-3 py-2 rounded-lg hover:bg-slate-50\">
                Resources & Blog
              </Link>
              <Link href=\"/about\" onClick={() => setMobileMenuOpen(false)} className=\"px-3 py-2 rounded-lg hover:bg-slate-50\">
                About Us
              </Link>
              <Link href=\"/contact\" onClick={() => setMobileMenuOpen(false)} className=\"px-3 py-2 rounded-lg hover:bg-slate-50\">
                Contact
              </Link>
            </div>

            <div className=\"pt-2 border-t border-slate-100 space-y-2\">
              <Link
                href=\"/#enquire\"
                onClick={() => setMobileMenuOpen(false)}
                className=\"w-full flex items-center justify-center gap-2 bg-navy text-white text-xs font-semibold py-3 rounded-xl shadow-sm\"
              >
                <span>Get a Quote</span>
                <ArrowRight className=\"w-4 h-4\" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
"""

with open("src/components/layout/Navbar.tsx", "w") as f:
    f.write(navbar_code)

print("Updated HeroSection.tsx and Navbar.tsx with Announcement Bar and new navigation!")
