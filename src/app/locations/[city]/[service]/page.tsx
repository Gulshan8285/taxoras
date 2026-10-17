import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { allServiceLocations, getServiceLocation, getLocationById } from "@/data/locationsData";
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

  if (!item) {
    return { title: "Page Not Found" };
  }

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
    }
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

  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Breadcrumb Header */}
        <div className="bg-white border-b border-surface-border py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-xs text-text-muted">
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/locations" className="hover:text-navy transition-colors">
                Locations
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href={`/locations/${loc.id}`} className="hover:text-navy transition-colors">
                {loc.city}
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="font-semibold text-navy truncate">
                {item.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Header */}
        <section className="bg-white border-b border-surface-border py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {loc.city} Hub
                </span>
                <span className="text-xs font-semibold text-teal bg-teal-light px-3 py-1 rounded-full">
                  Verified Local Compliance
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
                {item.headline}
              </h1>

              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#quote-form"
                  className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-md active:scale-95"
                >
                  <span>Request {loc.city} Service Quote</span>
                </a>
                <a
                  href={siteConfig.links.whatsappUrl(item.title, loc.city)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-colors shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 inline mr-1.5" />
                  <span>WhatsApp Contextual Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-8 space-y-8">
              
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-4">
                <h2 className="text-lg font-bold text-navy">
                  Local Context & Regulatory Focus in {loc.city}
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item.localContext}
                </p>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-text-muted">
                  <strong>Online Delivery Standard: </strong>
                  Files and ledgers are processed via encrypted cloud drives with regular cutoff alerts for {loc.state} tax jurisdiction deadlines.
                </div>
              </section>

              {svc && (
                <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-4">
                  <h2 className="text-lg font-bold text-navy">
                    Core Deliverables for {svc.title}
                  </h2>
                  <div className="space-y-2 text-xs">
                    {svc.whatIncluded.map((inc, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <div id="quote-form">
                <EnquiryForm
                  initialService={svc ? svc.title : "GST Return Filing"}
                  title={`Request a Quote for ${item.title}`}
                  subtitle={`Share your business details in ${loc.city}. A dedicated compliance coordinator will reach out with itemized pricing.`}
                />
              </div>

            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-xs sticky top-24 space-y-4">
                <h3 className="text-base font-bold text-navy pb-3 border-b border-surface-border">
                  Quick Links
                </h3>
                <div className="space-y-2 text-xs">
                  <Link
                    href={`/locations/${loc.id}`}
                    className="block p-2 rounded-lg hover:bg-slate-50 text-text-main font-medium"
                  >
                    View All {loc.city} Hub Services
                  </Link>
                  {svc && (
                    <Link
                      href={`/services/${svc.slug}`}
                      className="block p-2 rounded-lg hover:bg-slate-50 text-brand-blue font-semibold"
                    >
                      Read Full {svc.title} Methodology
                    </Link>
                  )}
                  <Link
                    href="/pricing"
                    className="block p-2 rounded-lg hover:bg-slate-50 text-text-muted"
                  >
                    View Transparent Pricing Table
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
