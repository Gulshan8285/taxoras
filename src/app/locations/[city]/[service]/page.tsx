import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { allServiceLocations, getServiceLocation, getLocationById, allLocations } from "@/data/locationsData";
import { getServiceBySlug } from "@/data/servicesData";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { EnquiryForm } from "@/components/common/EnquiryForm";
import {
  ChevronRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  ArrowRight,
  HelpCircle,
  Phone,
  Star,
  Award,
  Zap,
  FileCheck2,
  ExternalLink,
  Sparkles,
  MapPin,
  TrendingUp,
} from "lucide-react";

interface ServiceCityProps {
  params: Promise<{
    city: string;
    service: string;
  }>;
}

export async function generateStaticParams() {
  return allServiceLocations.map((sl) => ({
    city: sl.citySlug,
    service: sl.serviceSlug,
  }));
}

export async function generateMetadata({ params }: ServiceCityProps): Promise<Metadata> {
  const { city, service } = await params;
  const item = getServiceLocation(city, service);
  const loc = getLocationById(city);

  if (!item || !loc) {
    return { title: "Page Not Found" };
  }

  const pageUrl = `${siteConfig.canonicalUrl}/locations/${item.citySlug}/${item.serviceSlug}`;
  return {
    title: `${item.title} | Rated 4.9/5 by 500+ Indian MSMEs`,
    description: `${item.description} Rated 4.9/5 with 500+ businesses served across ${loc.state}. Transparent monthly retainers from ₹799/mo, 100% GSTR-2B ITC matching, and ₹0 penalty guarantee.`,
    keywords: [
      item.title,
      `best ${item.serviceSlug} in ${loc.city}`,
      `${item.serviceSlug} ${loc.city} charges`,
      `gst return filing ${loc.city}`,
      `gst consultant ${loc.city}`,
      `gst registration ${loc.city}`,
      `${loc.state} gst compliance`,
      "Taxoras",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${item.title} | Taxoras`,
      description: item.description,
      url: pageUrl,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.businessName,
      images: [{ url: `${siteConfig.canonicalUrl}/opengraph-image`, width: 1200, height: 630, alt: item.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      images: [`${siteConfig.canonicalUrl}/opengraph-image`],
    },
  };
}

export default function ServiceLocationDetailPage(props: ServiceCityProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface-bg flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-brand-blue border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ServiceLocationDetailContent {...props} />
    </Suspense>
  );
}

async function ServiceLocationDetailContent({ params }: ServiceCityProps) {
  const { city, service } = await params;
  const item = getServiceLocation(city, service);
  const loc = getLocationById(city);
  const svc = getServiceBySlug(service);

  if (!item || !loc) {
    notFound();
  }

  const pageUrl = `${siteConfig.canonicalUrl}/locations/${item.citySlug}/${item.serviceSlug}`;

  // Find regional / sibling cities in the same region or state
  const siblingCities = allLocations
    .filter((l) => l.region === loc.region && l.id !== loc.id)
    .slice(0, 6);

  const localFaqs = [
    {
      question: `Why is Taxoras ranked #1 for ${svc ? svc.title : "GST compliance"} in ${loc.city}?`,
      answer: `Taxoras provides 100% human Chartered Accountant review on every single invoice, mandatory monthly GSTR-2B purchase reconciliation to safeguard input tax credit, and direct dedicated WhatsApp coordination at transparent retainers starting at ₹799/month with zero hidden charges. Over 500+ Indian businesses trust our ₹0 penalty track record.`,
    },
    {
      question: `How much does ${svc ? svc.title : "GST filing"} cost for ${loc.city} businesses?`,
      answer: `Our transparent retainers for ${loc.city} businesses start at ₹799/month for micro businesses (up to 50 invoices/month) including GSTR-1, GSTR-3B, and full purchase matching. Growth plans are ₹1,499/month (up to 200 invoices) and ₹2,499/month (up to 500 invoices).`,
    },
    {
      question: `What documents are required to start ${svc ? svc.title : "compliance"} in ${loc.city}?`,
      answer: `All we need are your sales invoices, purchase bills, bank statements, and GST portal credentials shared securely via our encrypted cloud folder or dedicated WhatsApp desk. Onboarding is completed within 24 to 48 hours.`,
    },
    {
      question: `How do you handle ${loc.state} tax department queries and notices?`,
      answer: `We align filings strictly with ${loc.statePortalReference.name} regulations. In case of auto-generated scrutiny notices (DRC-01B for GSTR-1 vs 3B or DRC-01C for ITC mismatches), our compliance team prepares itemized reconciliation replies to protect your registration and working capital.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: item.title,
        url: pageUrl,
        description: item.description,
        provider: {
          "@type": "AccountingService",
          "@id": `${siteConfig.canonicalUrl}/#organization`,
          name: siteConfig.businessName,
          telephone: siteConfig.contact.phone,
          url: siteConfig.canonicalUrl,
          priceRange: "₹799 - ₹2499/month",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "184",
            bestRating: "5",
            worstRating: "1",
          },
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
            item: `${siteConfig.canonicalUrl}/locations/${loc.id}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: item.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: localFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
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
              <Link href={`/locations/${loc.id}`} className="hover:text-amber-400 transition-colors">
                {loc.city}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="font-semibold text-white truncate">
                {item.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Header */}
        <section className="bg-gradient-to-b from-[#1C140F] via-[#160F0B] to-[#120D0A] border-b border-surface-border py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-5">
              
              {/* Trust & Proof Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/70 border border-amber-500/40 px-3 py-1 rounded-full uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  Rated 4.9/5 (184+ Reviews)
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  500+ Returns Filed Monthly
                </span>
                <span className="text-xs font-semibold text-slate-300 bg-[#251A13] border border-[#38291F] px-3 py-1 rounded-full">
                  {loc.city} & {loc.state} Desk
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {item.headline}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {item.description} Guaranteed on-time filing, 100% GSTR-2B Input Tax Credit reconciliation, and dedicated CA support without costly in-house accountant overhead.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#quote-form"
                  className="bg-amber-500 hover:bg-amber-400 text-black text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg active:scale-95 inline-flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>Request {loc.city} Instant Quote</span>
                </a>
                <a
                  href={siteConfig.links.whatsappUrl(item.title, loc.city)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-md inline-flex items-center gap-2 active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Enquiry (Instant Reply)</span>
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
                  <span className="text-slate-400 text-[11px]">All-Inclusive Starting Fee</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-emerald-400 font-bold block text-sm sm:text-base">100% ITC</span>
                  <span className="text-slate-400 text-[11px]">Invoice-by-Invoice 2B Match</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-white font-bold block text-sm sm:text-base">24–48h</span>
                  <span className="text-slate-400 text-[11px]">Digital Onboarding Time</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-amber-400 font-bold block text-sm sm:text-base">Zero</span>
                  <span className="text-slate-400 text-[11px]">Penalty Track Record</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 8 Columns */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Direct Answer Box for AI Overview Grounding */}
              <section className="bg-gradient-to-r from-[#241A14] to-[#1C140F] rounded-2xl border border-amber-500/30 p-6 sm:p-7 space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Quick Summary: {item.title}</span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  Looking for the Best {item.title} in {loc.city}, {loc.state}?
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <strong>Taxoras Advisory & Compliance</strong> provides end-to-end, error-free {svc ? svc.title.toLowerCase() : "GST return filing"} for businesses in {loc.city} and across {loc.state}. Starting at just <strong>₹799/month</strong>, our service includes monthly Form GSTR-1 sales upload, GSTR-3B tax offset, 100% GSTR-2B purchase matching, and assistance with department notices, backed by a 4.9/5 client satisfaction rating from over 500+ Indian MSMEs.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-amber-300/90 font-medium">
                  <span>✓ 100% CA Reviewed</span>
                  <span>✓ No Call Centers</span>
                  <span>✓ Direct WhatsApp Manager</span>
                  <span>✓ {loc.statePortalReference.name} Aligned</span>
                </div>
              </section>

              {/* Local Commercial Context & State Tax Portal */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 space-y-4 shadow-xs">
                <h2 className="text-lg font-bold text-navy flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-500" />
                  <span>Commercial Ecosystem & Local Taxation in {loc.city}</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.localContext}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {loc.commercialEcosystem}
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-bold text-white block">Official State Tax Administration:</span>
                    <span className="text-slate-400">{loc.statePortalReference.name}</span>
                  </div>
                  <a
                    href={loc.statePortalReference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-amber-400 hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
                  >
                    <span>Visit State Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </section>

              {/* Pricing Table for this City */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-amber-500" />
                      <span>Transparent Pricing Plans for {loc.city} Businesses</span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">Fixed retainers with zero hidden charges and complete purchase reconciliation</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full self-start sm:self-auto">
                    All-Inclusive Retainers
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {/* Basic */}
                  <div className="p-5 rounded-xl bg-slate-50 border border-surface-border space-y-3 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-amber-500 uppercase tracking-wider block mb-1">Basic Retainer</span>
                      <div className="text-2xl font-black text-white">₹799<span className="text-xs font-normal text-slate-400">/mo</span></div>
                      <span className="text-[11px] text-slate-400 block mt-1">Up to 50 invoices / month</span>
                      <ul className="space-y-2 pt-3 text-xs text-slate-300">
                        <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /><span>Monthly GSTR-1 & 3B Filing</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /><span>100% GSTR-2B ITC Matching</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /><span>Tax Challan Preparation</span></li>
                      </ul>
                    </div>
                    <a href="#quote-form" className="w-full text-center py-2 px-3 bg-[#2E2017] hover:bg-[#3D2B1F] text-amber-300 text-xs font-semibold rounded-lg transition-colors block">
                      Choose Basic
                    </a>
                  </div>

                  {/* Standard */}
                  <div className="p-5 rounded-xl bg-gradient-to-b from-[#2B1D15] to-[#1F150F] border border-amber-500/50 space-y-3 flex flex-col justify-between shadow-md relative">
                    <span className="absolute -top-2.5 right-4 text-[10px] font-bold text-black bg-amber-400 px-2 py-0.5 rounded-full uppercase tracking-wider">Most Popular</span>
                    <div>
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">Standard Retainer</span>
                      <div className="text-2xl font-black text-white">₹1,499<span className="text-xs font-normal text-slate-400">/mo</span></div>
                      <span className="text-[11px] text-slate-300 block mt-1">Up to 200 invoices / month</span>
                      <ul className="space-y-2 pt-3 text-xs text-slate-200">
                        <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /><span>All Basic inclusions</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /><span>Priority filing 3 days prior</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" /><span>ASMT-10 scrutiny notice reply</span></li>
                      </ul>
                    </div>
                    <a href="#quote-form" className="w-full text-center py-2 px-3 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold rounded-lg transition-colors block">
                      Choose Standard
                    </a>
                  </div>

                  {/* Growth */}
                  <div className="p-5 rounded-xl bg-slate-50 border border-surface-border space-y-3 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-amber-500 uppercase tracking-wider block mb-1">Growth Retainer</span>
                      <div className="text-2xl font-black text-white">₹2,499<span className="text-xs font-normal text-slate-400">/mo</span></div>
                      <span className="text-[11px] text-slate-400 block mt-1">Up to 500 invoices / month</span>
                      <ul className="space-y-2 pt-3 text-xs text-slate-300">
                        <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /><span>All Standard inclusions</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /><span>Dedicated Senior CA Manager</span></li>
                        <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /><span>Bank Statement Reconciliation</span></li>
                      </ul>
                    </div>
                    <a href="#quote-form" className="w-full text-center py-2 px-3 bg-[#2E2017] hover:bg-[#3D2B1F] text-amber-300 text-xs font-semibold rounded-lg transition-colors block">
                      Choose Growth
                    </a>
                  </div>
                </div>
              </section>

              {/* 4-Step Filing Process Workflow */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 space-y-5 shadow-xs">
                <h2 className="text-lg font-bold text-navy flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-amber-500" />
                  <span>How Our Digital Compliance Process Works in {loc.city}</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-50 border border-surface-border space-y-1.5">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black font-black text-xs flex items-center justify-center">1</span>
                    <h4 className="font-bold text-white text-sm">Monthly Document Upload</h4>
                    <p className="text-slate-300 leading-relaxed">Share your sales invoices and purchase bills via WhatsApp or our secure Google Drive folder by the 5th of each month.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-surface-border space-y-1.5">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black font-black text-xs flex items-center justify-center">2</span>
                    <h4 className="font-bold text-white text-sm">GSTR-2B & ITC Verification</h4>
                    <p className="text-slate-300 leading-relaxed">We match all supplier invoices against auto-populated GSTR-2B data on the GST portal to prevent loss of eligible tax credits.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-surface-border space-y-1.5">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black font-black text-xs flex items-center justify-center">3</span>
                    <h4 className="font-bold text-white text-sm">Computation & Client Approval</h4>
                    <p className="text-slate-300 leading-relaxed">We compute output tax liability, set off available ITC, and share tax payment challans with you well ahead of due dates.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-surface-border space-y-1.5">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-black font-black text-xs flex items-center justify-center">4</span>
                    <h4 className="font-bold text-white text-sm">Filing & ARN Confirmation</h4>
                    <p className="text-slate-300 leading-relaxed">Following your confirmation, returns are submitted on the portal and official ARN acknowledgement receipts are delivered to your WhatsApp.</p>
                  </div>
                </div>
              </section>

              {/* Core Deliverables */}
              {svc && (
                <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-4">
                  <h2 className="text-lg font-bold text-navy flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span>Included Deliverables for {svc.title} in {loc.city}</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {svc.whatIncluded.map((inc, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-surface-border text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* High-Intent Local FAQs */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 space-y-4 shadow-xs">
                <h2 className="text-lg font-bold text-navy flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-500" />
                  <span>Frequently Asked Questions for {loc.city} & {loc.state} Businesses</span>
                </h2>
                <div className="space-y-3">
                  {localFaqs.map((faq, fIdx) => (
                    <div key={fIdx} className="p-4 rounded-xl bg-slate-50 border border-surface-border space-y-1.5 text-xs">
                      <h4 className="font-bold text-white text-sm">{faq.question}</h4>
                      <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Enquiry Form */}
              <div id="quote-form">
                <EnquiryForm
                  initialService={svc ? svc.title : "GST Return Filing"}
                  title={`Request a Quote for ${item.title}`}
                  subtitle={`Share your business details in ${loc.city}. A designated senior compliance coordinator will contact you with transparent pricing within 2 hours.`}
                />
              </div>

            </div>

            {/* Right 4 Columns Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Regional Support Card */}
              <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-xs sticky top-24 space-y-5">
                <div className="pb-3 border-b border-surface-border">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block">Local Commercial Desk</span>
                  <h3 className="text-base font-bold text-white mt-0.5">{loc.city} Support Desk</h3>
                  <span className="text-xs text-slate-400">{loc.state} • {loc.region} Region</span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <p>
                    Dedicated compliance support for startups, shopkeepers, wholesale distributors, and manufacturers in <strong>{loc.city}</strong>.
                  </p>
                  
                  <div className="p-3 rounded-xl bg-slate-50 border border-surface-border space-y-1.5">
                    <span className="text-[11px] font-bold text-amber-400 block">Need Immediate Advice?</span>
                    <a
                      href={siteConfig.links.whatsappUrl(item.title, loc.city)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  <div className="pt-2 border-t border-surface-border space-y-1.5">
                    <span className="font-semibold text-slate-400 block text-[11px]">Direct Helpline:</span>
                    <a href={siteConfig.links.phoneUrl} className="text-white hover:text-amber-400 font-bold flex items-center gap-1.5 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-amber-500" />
                      <span>{siteConfig.contact.phoneFormatted}</span>
                    </a>
                  </div>
                </div>

                {/* Sibling Cities in the Region */}
                {siblingCities.length > 0 && (
                  <div className="pt-4 border-t border-surface-border space-y-2">
                    <span className="text-xs font-bold text-white block">Other {loc.region} Hubs:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {siblingCities.map((sc) => (
                        <Link
                          key={sc.id}
                          href={`/locations/${sc.id}/${item.serviceSlug}`}
                          className="text-[11px] bg-slate-50 hover:bg-[#2E2017] hover:text-amber-300 text-slate-300 px-2.5 py-1 rounded-lg border border-surface-border transition-colors"
                        >
                          {sc.city}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-surface-border space-y-2 text-xs">
                  <Link
                    href={`/locations/${loc.id}`}
                    className="block font-semibold text-amber-400 hover:underline"
                  >
                    ← All Services in {loc.city}
                  </Link>
                  <Link
                    href="/locations"
                    className="block text-slate-400 hover:text-white"
                  >
                    View All 36 India Commercial Hubs
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp location={loc.city} currentService={item.title} />
    </div>
  );
}
