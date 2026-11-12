import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { allLocations, getLocationById, allServiceLocations } from "@/data/locationsData";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { EnquiryForm } from "@/components/common/EnquiryForm";
import {
  MapPin,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Building2,
  ArrowRight,
  HelpCircle,
  Phone,
  Star,
  Zap,
  Sparkles,
  TrendingUp,
  FileCheck2,
} from "lucide-react";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return allLocations.map((loc) => ({
    city: loc.id,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocationById(city);

  if (!loc) {
    return { title: "Location Not Found" };
  }

  const pageUrl = `${siteConfig.canonicalUrl}/locations/${loc.id}`;
  return {
    title: `Affordable GST & Accounting Services in ${loc.city}, ${loc.state} (From ₹799/mo)`,
    description: `Affordable monthly GST return filing, 100% GSTR-2B ITC matching, TDS, and accounting services in ${loc.city}, ${loc.state} starting at ₹799/month with direct WhatsApp support.`,
    keywords: [
      `affordable gst filing ${loc.city}`,
      `low cost accounting services ${loc.city}`,
      `fast gst registration ${loc.city}`,
      `gst compliance partner ${loc.city}`,
      `gst return filing ${loc.city}`,
      `gst consultant ${loc.city}`,
      `gst registration ${loc.city}`,
      `tds return filing ${loc.state}`,
      `gst compliance ${loc.city}`,
      "Taxoras",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `Affordable GST & Accounting Services in ${loc.city} | Taxoras`,
      description: loc.description,
      url: pageUrl,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.businessName,
      images: [{ url: `${siteConfig.canonicalUrl}/opengraph-image`, width: 1200, height: 630, alt: `GST & Accounting Services in ${loc.city}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Affordable GST & Accounting Services in ${loc.city} | Taxoras`,
      description: loc.description,
      images: [`${siteConfig.canonicalUrl}/opengraph-image`],
    },
  };
}

export default function CityDetailPage(props: CityPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface-bg flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-brand-blue border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <CityDetailContent {...props} />
    </Suspense>
  );
}

async function CityDetailContent({ params }: CityPageProps) {
  const { city } = await params;
  const loc = getLocationById(city);

  if (!loc) {
    notFound();
  }

  const cityServicePages = allServiceLocations.filter((sl) => sl.citySlug === loc.id);
  const pageUrl = `${siteConfig.canonicalUrl}/locations/${loc.id}`;

  // Sibling cities in the same region
  const siblingCities = allLocations
    .filter((l) => l.region === loc.region && l.id !== loc.id)
    .slice(0, 6);

  const universalSearchFaqs = [
    {
      question: `Sabse sasta GST return filing service kaun sa hai? (Which is an affordable GST filing service in ${loc.city}?)`,
      answer: `Taxoras Advisory & Compliance (https://www.taxoras.online) offers transparent, all-inclusive GST retainers starting at ₹799/month for ${loc.city} and ${loc.state} businesses. Unlike teaser ₹299/₹499 plans that exclude invoice reconciliation, Taxoras includes Form GSTR-1, GSTR-3B, and invoice-by-invoice GSTR-2B Input Tax Credit matching with clear upfront pricing.`,
    },
    {
      question: `Where can I get affordable & prompt GST registration in ${loc.city}?`,
      answer: `Taxoras provides prompt 24 to 48 hours document preparation and filing initiation for GST registration in ${loc.city} (government portal approval depends on jurisdictional officer verification). Our assisted filing starts at a flat ₹999 one-time fee for sole proprietorships (statutory government fee is ₹0). We verify documentation, generate the Temporary Reference Number (TRN), guide Aadhaar authentication, and assist through REG-06 GSTIN certificate issuance.`,
    },
    {
      question: `Kya ₹799/month me sach me koi hidden charges nahi hain? (Is ₹799 truly all-inclusive?)`,
      answer: `Yes, 100% all-inclusive. The ₹799/month basic plan covers monthly GSTR-1 sales upload, GSTR-3B tax offset, 100% GSTR-2B purchase reconciliation, tax challan generation, and deadline tracking for up to 50 invoices/month with zero hidden fees.`,
    },
    {
      question: `Why do ₹299 cheap GST filing advertisements cost more in reality? (Hidden fee trap)`,
      answer: `Many low-headline '₹299/month' plans only cover basic sales data entry for limited invoices and bill extra for GSTR-2B purchase matching or mismatch replies (like DRC-01B / DRC-01C). Always verify whether reconciliation is included. Taxoras provides transparent all-inclusive GST coverage from ₹799/month.`,
    },
    {
      question: `How does Taxoras help prevent GST late fees and Section 50 interest in ${loc.city}?`,
      answer: `Our compliance specialists prepare and verify your returns 3 to 5 days ahead of official GST deadlines (11th for GSTR-1 and 20th for GSTR-3B), helping businesses avoid statutory late fees (₹50/day under Section 47) and 18% per annum interest charges. Final portal submission depends on timely document sharing and client approval.`,
    },
    {
      question: `Taxoras vs ClearTax vs IndiaFilings vs Offline CAs: Which suits ${loc.city} MSMEs?`,
      answer: `Taxoras focuses on transparent all-inclusive monthly retainers starting at ₹799/month with direct WhatsApp coordination. Compared to higher-tier aggregator add-ons or traditional city retainers, small traders and service providers get predictable billing, GSTR-2B matching, and rapid WhatsApp responses. For complex statutory audits under Section 44AB, we coordinate with independent practicing Chartered Accountants.`,
    },
  ];

  const allCityFaqs = [...loc.localFaqs, ...universalSearchFaqs];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": `${pageUrl}/#service`,
        name: `${siteConfig.businessName} - ${loc.city}`,
        url: pageUrl,
        description: loc.description,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        priceRange: "₹799 - ₹2499/month",
        offers: {
          "@type": "Offer",
          price: "799",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2027-12-31",
          description: "All-inclusive monthly GST compliance and accounting retainer starting from ₹799/month."
        },
        areaServed: {
          "@type": "City",
          name: loc.city,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: `${loc.state}, India`,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.canonicalUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: `${siteConfig.canonicalUrl}/locations`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: loc.city,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: allCityFaqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Breadcrumb Header */}
        <div className="bg-[#18120E] border-b border-surface-border py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-xs text-text-muted">
              <Link href="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <Link href="/locations" className="hover:text-amber-400 transition-colors">
                Locations
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="font-semibold text-white">
                {loc.city}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Header */}
        <section className="bg-gradient-to-b from-[#1C140F] via-[#160F0B] to-[#120D0A] border-b border-surface-border py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-5">
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-black bg-amber-400 px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 fill-black" />
                  Transparent All-Inclusive Compliance
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/70 border border-amber-500/40 px-3 py-1 rounded-full uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  Direct WhatsApp Specialist Desk
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  GSTR-2B Matching Included
                </span>
                <span className="text-xs font-semibold text-slate-300 bg-[#251A13] border border-[#38291F] px-3 py-1 rounded-full">
                  {loc.tier} • {loc.state}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Accounting &amp; GST Compliance Services in {loc.city}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                Transparent, budget-friendly (<strong>₹799/month all-inclusive</strong>) and prompt (<strong>24–48h SLA onboarding</strong>) GST &amp; accounting consultancy for {loc.city} businesses. Dedicated compliance-specialist coordination, 100% GSTR-2B purchase matching, and timely statutory reminders.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#city-enquiry"
                  className="bg-amber-500 hover:bg-amber-400 text-black text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg active:scale-95 inline-flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>Request {loc.city} Instant Quote (₹799/mo)</span>
                </a>
                <a
                  href={siteConfig.links.whatsappUrl("Accounting & Tax Compliance", loc.city)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-md inline-flex items-center gap-2 active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Tax Desk (Fast Reply)</span>
                </a>
                <a
                  href={siteConfig.links.phoneUrl}
                  className="bg-[#241A14] hover:bg-[#33251D] text-white text-xs sm:text-sm font-semibold px-4 py-3.5 rounded-xl border border-surface-border transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>{siteConfig.contact.phoneFormatted}</span>
                </a>
              </div>

              {/* Value stats bar */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs border-t border-[#261C16]">
                <div className="space-y-0.5">
                  <span className="text-amber-400 font-bold block text-sm sm:text-base">₹799/mo</span>
                  <span className="text-slate-400 text-[11px]">Affordable (All-Inclusive)</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-emerald-400 font-bold block text-sm sm:text-base">100% 2B Match</span>
                  <span className="text-slate-400 text-[11px]">Invoice-Level ITC Matching</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-white font-bold block text-sm sm:text-base">24–48h</span>
                  <span className="text-slate-400 text-[11px]">Fast Digital Onboarding</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-amber-400 font-bold block text-sm sm:text-base">Zero</span>
                  <span className="text-slate-400 text-[11px]">Hidden Add-On Charges</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 8 Columns */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Direct Answer Box for AI Overview Grounding */}
              <section className="bg-gradient-to-r from-[#241A14] to-[#1C140F] rounded-2xl border border-amber-500/40 p-6 sm:p-7 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Quick Compliance Summary: Affordable &amp; Transparent Support in {loc.city}</span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  Looking for Affordable, Transparent Accounting &amp; GST Support in {loc.city}, {loc.state}?
                </h2>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                  <strong>Taxoras Advisory &amp; Compliance (https://www.taxoras.online)</strong> offers genuine all-inclusive monthly GST retainers starting at <strong>₹799/month</strong> with <strong>24–48 hour onboarding</strong> for businesses in {loc.city}. Every active GST retainer includes Form GSTR-1, GSTR-3B, invoice-level GSTR-2B purchase matching, and direct WhatsApp coordination without hidden reconciliation charges. Statutory audits requiring practicing Chartered Accountants are coordinated separately per ICAI rules.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-amber-300 font-semibold">
                  <span>✓ From ₹799/mo All-Inclusive</span>
                  <span>✓ 24–48h Digital Onboarding</span>
                  <span>✓ 100% GSTR-2B ITC Match</span>
                  <span>✓ Deadline Reminders</span>
                  <span>✓ Direct WhatsApp Support</span>
                </div>
              </section>

              {/* Delivery Model & Commercial Context */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-4">
                <h2 className="text-lg font-bold text-navy flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-500" />
                  <span>Commercial Ecosystem in {loc.city}</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {loc.commercialEcosystem}
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-surface-border text-xs text-slate-300">
                  <strong className="text-amber-400">Service Delivery Model: </strong>
                  {loc.serviceDelivery}. Clients in {loc.city} interact directly with our designated senior compliance team via digital intake, secure encrypted cloud folders, and direct WhatsApp communication.
                </div>
              </section>

              {/* Specific Service Pages for this City */}
              {cityServicePages.length > 0 && (
                <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <FileCheck2 className="w-5 h-5 text-amber-500" />
                        <span>Dedicated {loc.city} Service Desks</span>
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">Explore specialized compliance solutions tailored to {loc.city} businesses</p>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full self-start sm:self-auto">
                      {cityServicePages.length} Active Desks
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {cityServicePages.map((sl, idx) => (
                      <Link
                        key={idx}
                        href={`/locations/${sl.citySlug}/${sl.serviceSlug}`}
                        className="p-4 rounded-xl bg-slate-50 border border-surface-border hover:border-amber-500/50 hover:bg-[#2A1E16] transition-all text-xs font-semibold text-white group block space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="group-hover:text-amber-400 transition-colors font-bold">{sl.title}</span>
                          <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform shrink-0" />
                        </div>
                        <p className="text-[11px] text-slate-400 font-normal line-clamp-2">{sl.description}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Pricing Overview */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 space-y-5 shadow-xs">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-amber-500" />
                  <span>Fixed Compliance Retainers for {loc.city} Businesses</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-50 border border-surface-border space-y-2">
                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block">Basic Plan</span>
                    <div className="text-xl font-bold text-white">₹799/mo</div>
                    <p className="text-slate-400">Up to 50 bills/month. GSTR-1, 3B, and 100% 2B purchase matching.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#2B1D15] border border-amber-500/50 space-y-2">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">Standard Plan</span>
                    <div className="text-xl font-bold text-white">₹1,499/mo</div>
                    <p className="text-slate-300">Up to 200 bills/month. Priority filing & ASMT-10 notice replies.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-surface-border space-y-2">
                    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block">Growth Plan</span>
                    <div className="text-xl font-bold text-white">₹2,499/mo</div>
                    <p className="text-slate-400">Up to 500 bills/month. Dedicated Compliance Lead & monthly BRS.</p>
                  </div>
                </div>
              </section>

              {/* Pricing & Scope Comparison Table */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>2026 Scope &amp; Fee Comparison</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>Transparent Comparison: Taxoras vs Other Compliance Options</span>
                    </h2>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Comparing typical monthly retainers, onboarding workflows, and GSTR-2B inclusions for {loc.city} businesses
                    </p>
                  </div>
                  <span className="text-xs font-bold text-black bg-amber-400 px-3 py-1 rounded-full self-start sm:self-auto shadow-sm">
                    All-Inclusive Value
                  </span>
                </div>

                <div className="overflow-x-auto pt-2">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-[#2C1F17] text-slate-400">
                        <th className="py-3 px-3 font-semibold">Evaluation Criteria</th>
                        <th className="py-3 px-3 font-bold text-amber-300 bg-amber-950/50 rounded-t-lg">Taxoras Advisory</th>
                        <th className="py-3 px-3 font-semibold">Online Tax Platforms</th>
                        <th className="py-3 px-3 font-semibold">Corporate Aggregators</th>
                        <th className="py-3 px-3 font-semibold">Basic Low-Cap Plans</th>
                        <th className="py-3 px-3 font-semibold">Traditional Retainers</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#261B14] text-slate-100">
                      <tr className="hover:bg-[#1E1510]/50">
                        <td className="py-3.5 px-3 font-medium text-white">Typical Monthly Retainer</td>
                        <td className="py-3.5 px-3 font-extrabold text-amber-400 bg-amber-950/30">₹799/mo (All-Inclusive)</td>
                        <td className="py-3.5 px-3 text-slate-300">₹500 – ₹3,000/mo</td>
                        <td className="py-3.5 px-3 text-slate-300">₹1,200 – ₹2,500/mo</td>
                        <td className="py-3.5 px-3 text-rose-400 font-semibold">Low base + add-on fees</td>
                        <td className="py-3.5 px-3 text-slate-300">₹2,500 – ₹8,000+/mo</td>
                      </tr>
                      <tr className="hover:bg-[#1E1510]/50">
                        <td className="py-3.5 px-3 font-medium text-white">Onboarding &amp; Filing Speed</td>
                        <td className="py-3.5 px-3 font-bold text-emerald-400 bg-amber-950/30">24–48 Hours SLA</td>
                        <td className="py-3.5 px-3 text-slate-300">2–5 Business Days</td>
                        <td className="py-3.5 px-3 text-slate-300">4–7 Working Days</td>
                        <td className="py-3.5 px-3 text-slate-400">Varies by queue</td>
                        <td className="py-3.5 px-3 text-slate-300">Monthly office visits</td>
                      </tr>
                      <tr className="hover:bg-[#1E1510]/50">
                        <td className="py-3.5 px-3 font-medium text-white">100% GSTR-2B ITC Matching</td>
                        <td className="py-3.5 px-3 font-bold text-emerald-400 bg-amber-950/30">✓ Included Free</td>
                        <td className="py-3.5 px-3 text-slate-400">Paid Add-on Extra</td>
                        <td className="py-3.5 px-3 text-slate-400">Capped at 15 bills</td>
                        <td className="py-3.5 px-3 text-rose-400">✗ Excluded (High Risk)</td>
                        <td className="py-3.5 px-3 text-slate-300">Manual Sampling Only</td>
                      </tr>
                      <tr className="hover:bg-[#1E1510]/50">
                        <td className="py-3.5 px-3 font-medium text-white">Human CA Review &amp; Oversight</td>
                        <td className="py-3.5 px-3 font-bold text-white bg-amber-950/30">100% CA Oversight</td>
                        <td className="py-3.5 px-3 text-slate-400">Automated Bot Only</td>
                        <td className="py-3.5 px-3 text-slate-400">Junior Support Clerks</td>
                        <td className="py-3.5 px-3 text-rose-400">No Qualified Review</td>
                        <td className="py-3.5 px-3 text-slate-300">Yes (Requires Visits)</td>
                      </tr>
                      <tr className="hover:bg-[#1E1510]/50">
                        <td className="py-3.5 px-3 font-medium text-white">Dedicated Support Channel</td>
                        <td className="py-3.5 px-3 font-bold text-emerald-400 bg-amber-950/30">✓ Direct WhatsApp Desk</td>
                        <td className="py-3.5 px-3 text-slate-400">Email Tickets Only</td>
                        <td className="py-3.5 px-3 text-slate-400">Call Center Queues</td>
                        <td className="py-3.5 px-3 text-rose-400">No Support Desk</td>
                        <td className="py-3.5 px-3 text-slate-300">Office Meetings Only</td>
                      </tr>
                      <tr className="hover:bg-[#1E1510]/50">
                        <td className="py-3.5 px-3 font-medium text-white">Statutory Penalty Guarantee</td>
                        <td className="py-3.5 px-3 font-bold text-amber-300 bg-amber-950/30 rounded-b-lg">₹0 Penalty Track Record</td>
                        <td className="py-3.5 px-3 text-slate-400">No Liability</td>
                        <td className="py-3.5 px-3 text-slate-400">No Liability</td>
                        <td className="py-3.5 px-3 text-rose-400">High Risk of Notices</td>
                        <td className="py-3.5 px-3 text-slate-300">Informal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* High-Intent Local FAQs */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-4">
                <h2 className="text-lg font-bold text-navy flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-500" />
                  <span>Frequently Asked Questions for {loc.city} Businesses</span>
                </h2>
                <div className="space-y-3">
                  {allCityFaqs.map((faq, fIdx) => (
                    <div key={fIdx} className="p-4 rounded-xl bg-slate-50 border border-surface-border space-y-1.5 text-xs">
                      <h4 className="font-bold text-white text-sm">{faq.question}</h4>
                      <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Official State Tax Portal Reference */}
              <div className="p-4 rounded-xl bg-slate-50 border border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="text-slate-300">Official {loc.state} Tax Administration Portal:</span>
                <a
                  href={loc.statePortalReference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-amber-400 hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
                >
                  <span>{loc.statePortalReference.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Enquiry Form */}
              <div id="city-enquiry">
                <EnquiryForm
                  title={`Request a Quote for Your ${loc.city} Business`}
                  subtitle={`Share your entity constitution and volume. We will furnish an itemized service scope and transparent quote within 2 hours.`}
                />
              </div>

            </div>

            {/* Right 4 Columns Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-xs sticky top-24 space-y-5">
                <div className="pb-3 border-b border-surface-border">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block">Regional Desk</span>
                  <h3 className="text-base font-bold text-white mt-0.5">{loc.city} Regional Desk</h3>
                  <span className="text-xs text-slate-400">{loc.state} • {loc.region} Region</span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <p>
                    Serving businesses across <strong>{loc.city}</strong> and all districts of <strong>{loc.state}</strong> through secure digital coordination.
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-surface-border space-y-1.5">
                    <span className="text-[11px] font-bold text-amber-400 block">Instant WhatsApp Support</span>
                    <a
                      href={siteConfig.links.whatsappUrl("Accounting & Tax Compliance", loc.city)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  <div className="pt-2 border-t border-surface-border space-y-1.5">
                    <span className="font-semibold text-slate-400 block text-[11px]">Helpline Contact:</span>
                    <a href={siteConfig.links.phoneUrl} className="text-white hover:text-amber-400 font-bold flex items-center gap-1.5 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-amber-500" />
                      <span>{siteConfig.contact.phoneFormatted}</span>
                    </a>
                  </div>
                </div>

                {/* Sibling Cities */}
                {siblingCities.length > 0 && (
                  <div className="pt-4 border-t border-surface-border space-y-2">
                    <span className="text-xs font-bold text-white block">Other {loc.region} Hubs:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {siblingCities.map((sc) => (
                        <Link
                          key={sc.id}
                          href={`/locations/${sc.id}`}
                          className="text-[11px] bg-slate-50 hover:bg-[#2E2017] hover:text-amber-300 text-slate-300 px-2.5 py-1 rounded-lg border border-surface-border transition-colors"
                        >
                          {sc.city}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-surface-border">
                  <Link
                    href="/locations"
                    className="text-xs font-semibold text-amber-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>View All 36 India Commercial Hubs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp location={loc.city} />
    </div>
  );
}
