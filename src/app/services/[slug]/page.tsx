import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { allServices, getServiceBySlug, getRelatedServices } from "@/data/servicesData";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { ServiceIcon } from "@/components/common/ServiceIcon";
import { EnquiryForm } from "@/components/common/EnquiryForm";
import {
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  ShieldCheck,
  Phone,
  ArrowRight,
  HelpCircle,
  Share2,
  ExternalLink
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Services in ${siteConfig.location.city}, India`,
    description: service.shortDescription,
    keywords: [
      service.title,
      `${service.title} in ${siteConfig.location.city}`,
      `${service.title} assistance`,
      "business compliance India",
      `${service.title} fees`,
      `${service.title} consultant India`
    ],
    alternates: {
      canonical: `${siteConfig.canonicalUrl}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} - ${siteConfig.businessName}`,
      description: service.shortDescription,
      url: `${siteConfig.canonicalUrl}/services/${service.slug}`,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.businessName,
      images: [{ url: `${siteConfig.canonicalUrl}/opengraph-image`, width: 1200, height: 630, alt: `${service.title} | ${siteConfig.businessName}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${siteConfig.businessName}`,
      description: service.shortDescription,
      images: [`${siteConfig.canonicalUrl}/opengraph-image`],
    },
  };
}

export default function ServiceDetailPage(props: ServicePageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface-bg flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-brand-blue border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ServiceDetailContent {...props} />
    </Suspense>
  );
}

async function ServiceDetailContent({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service.relatedSlugs);

  const serviceUrl = `${siteConfig.canonicalUrl}/services/${service.slug}`;
  const schemaGraph: Record<string, unknown>[] = [
    {
      "@type": "Service",
      "@id": `${serviceUrl}/#service`,
      "name": service.title,
      "url": serviceUrl,
      "description": service.shortDescription,
      "provider": {
        "@type": "AccountingService",
        "@id": `${siteConfig.canonicalUrl}/#organization`,
        "name": siteConfig.businessName,
        "telephone": siteConfig.contact.phone,
        "url": siteConfig.canonicalUrl,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.location.address,
          "addressLocality": siteConfig.location.city,
          "addressRegion": siteConfig.location.state,
          "postalCode": siteConfig.location.pincode,
          "addressCountry": "IN"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "termsOfService": `${siteConfig.businessName} Terms apply. Services rendered strictly based on client documentation and statutory timelines.`
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${serviceUrl}/#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteConfig.canonicalUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${siteConfig.canonicalUrl}/#services`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": serviceUrl
        }
      ]
    }
  ];

  if (service.faqs && service.faqs.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      "@id": `${serviceUrl}/#faq`,
      "mainEntity": service.faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": schemaGraph
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
        <div className="bg-white border-b border-surface-border py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-xs text-text-muted">
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/#services" className="hover:text-navy transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="font-semibold text-navy truncate">
                {service.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Service Hero Header */}
        <section className="bg-white border-b border-surface-border py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
                  {service.categoryLabel}
                </span>
                {service.heroBadge && (
                  <span className="text-xs font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                    {service.heroBadge}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
                {service.title}
              </h1>

              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
                {service.shortDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#service-enquiry"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-md active:scale-95"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.links.whatsappUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-colors shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Contextual Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout (2-Column Grid) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 8 Columns: Service In-Depth Details */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* 1. Who Needs This Service */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
                <h2 className="text-lg sm:text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal" />
                  <span>Who Needs {service.title}?</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.whoNeeds.map((item, idx) => (
                    <div key={idx} className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-100 flex items-start gap-2.5 text-xs text-text-main">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 2. Common Customer Problems & Pitfalls */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
                <h2 className="text-lg sm:text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <span>Common Challenges Businesses Face</span>
                </h2>
                <div className="space-y-3">
                  {service.commonProblems.map((prob, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100 text-xs text-slate-800">
                      <span className="font-bold text-amber-800 shrink-0">#{idx + 1}</span>
                      <span className="leading-relaxed">{prob}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. What Our Service Includes */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
                <h2 className="text-lg sm:text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand-blue" />
                  <span>What Our Service Includes</span>
                </h2>
                <div className="space-y-2.5">
                  {service.whatIncluded.map((inc, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-text-main p-2 rounded-lg hover:bg-slate-50 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{inc}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 4. Required Documents Checklist */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-bold text-navy flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-teal" />
                    <span>Required Documents Checklist</span>
                  </h2>
                  <span className="text-[11px] font-semibold text-text-muted bg-slate-100 px-2.5 py-1 rounded">
                    Digital Scans Required
                  </span>
                </div>

                <div className="space-y-5">
                  {service.requiredDocuments.map((docGroup, gIdx) => (
                    <div key={gIdx} className="bg-surface-bg p-4 rounded-xl border border-surface-border">
                      <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2.5">
                        {docGroup.category}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {docGroup.items.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-start gap-2 text-slate-700 bg-white p-2.5 rounded-lg border border-slate-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 shrink-0"></span>
                            <span className="leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. Step-by-Step Execution Process */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
                <h2 className="text-lg sm:text-xl font-bold text-navy mb-6">
                  Step-by-Step Execution Process
                </h2>
                <div className="space-y-4">
                  {service.processSteps.map((step) => (
                    <div key={step.step} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-8 h-8 rounded-lg bg-brand-blue text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-navy mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-text-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. Applicable Deadlines & Compliance Notes */}
              <div className="bg-blue-50/70 rounded-2xl border border-blue-100 p-5 flex items-start gap-3.5 text-xs text-brand-blue">
                <Clock className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-navy block text-sm">
                    Applicable Deadlines & Compliance Notice:
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {service.deadlinesNotice}
                  </p>
                </div>
              </div>

              {/* 7. Dedicated Service FAQs */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
                <h2 className="text-lg sm:text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-blue" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="space-y-3">
                  {service.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                      <h4 className="font-bold text-navy">
                        {faq.question}
                      </h4>
                      <p className="text-text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 8. Transparent Pricing & Scope */}
              <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs">
                <h2 className="text-lg sm:text-xl font-bold text-navy mb-2">
                  Transparent Pricing Approach
                </h2>
                <p className="text-xs font-semibold text-brand-blue mb-4">
                  Fee Structure: {service.pricingApproach.model}
                </p>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {service.pricingApproach.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100 text-xs">
                  <div className="space-y-1.5">
                    <span className="font-bold text-navy block">What We Include:</span>
                    {service.pricingApproach.inclusions.map((inc, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-1.5 text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-bold text-text-muted block">What is Excluded:</span>
                    {service.pricingApproach.exclusions.map((exc, eIdx) => (
                      <div key={eIdx} className="flex items-start gap-1.5 text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
                        <span>{exc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 9. Regulatory Disclaimer */}
              <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 text-[11px] text-text-muted leading-relaxed">
                <strong className="text-navy">Service Disclaimer: </strong>
                {service.disclaimer}
              </div>

              {/* 10. Embedded Service Enquiry Form */}
              <div id="service-enquiry">
                <EnquiryForm
                  initialService={service.title}
                  sourceContext={service.slug}
                  title={`Request a Quote for ${service.title}`}
                  subtitle="Submit your business details and requirements. Our desk will contact you with document guidelines and exact pricing."
                />
              </div>

            </div>

            {/* Right 4 Columns: Sticky Quick Contact, Related Services */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Contact Card */}
              <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-xs sticky top-24 space-y-5">
                <h3 className="text-base font-bold text-navy pb-3 border-b border-surface-border">
                  Quick Service Action
                </h3>

                <div className="space-y-3">
                  <a
                    href={siteConfig.links.whatsappUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>WhatsApp Contextual Enquiry</span>
                  </a>

                  <a
                    href={siteConfig.links.phoneUrl}
                    className="w-full flex items-center justify-center gap-2 border border-surface-border hover:bg-slate-50 text-navy text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-blue" />
                    <span>Call: {siteConfig.contact.phoneFormatted}</span>
                  </a>
                </div>

                <div className="text-[11px] text-text-muted space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span>Working Hours:</span>
                    <span className="font-semibold text-navy">{siteConfig.contact.workingHours}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Service Location:</span>
                    <span className="font-semibold text-navy">{siteConfig.location.city}, India</span>
                  </div>
                </div>

                {/* Related Services */}
                {related.length > 0 && (
                  <div className="pt-4 border-t border-surface-border space-y-2">
                    <span className="text-xs font-bold text-navy block">
                      Related Services
                    </span>
                    <div className="space-y-1.5">
                      {related.map((rel) => (
                        <Link
                          key={rel.slug}
                          href={`/services/${rel.slug}`}
                          className="flex items-center justify-between p-2 rounded-lg text-xs font-medium text-text-main hover:text-brand-blue hover:bg-slate-50 transition-colors"
                        >
                          <span className="truncate">{rel.title}</span>
                          <ArrowRight className="w-3 h-3 shrink-0 text-text-muted" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp currentService={service.title} />
    </div>
  );
}
