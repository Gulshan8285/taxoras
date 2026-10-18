import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { allResources, getResourceBySlug } from "@/data/resourcesData";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import {
  ChevronRight,
  Clock,
  Calendar,
  User,
  ExternalLink,
  BookOpen,
  ArrowRight,
  ShieldAlert,
  Share2,
  CheckCircle2,
  HelpCircle,
  PhoneCall,
} from "lucide-react";

interface ResourcePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allResources.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | Taxoras Compliance Guide`,
    description: article.summary,
    keywords: [article.category, article.title, "GST guide India", "Taxoras compliance"],
    alternates: {
      canonical: `${siteConfig.canonicalUrl}/resources/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `${siteConfig.canonicalUrl}/resources/${article.slug}`,
      type: "article",
      locale: "en_IN",
      siteName: siteConfig.businessName,
      images: [{ url: `${siteConfig.canonicalUrl}/opengraph-image`, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [`${siteConfig.canonicalUrl}/opengraph-image`],
    },
  };
}

export default function ResourceDetailPage(props: ResourcePageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface-bg flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-brand-blue border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ResourceDetailContent {...props} />
    </Suspense>
  );
}

async function ResourceDetailContent({ params }: ResourcePageProps) {
  const { slug } = await params;
  const article = getResourceBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = allResources.filter((a) => a.slug !== article.slug).slice(0, 3);
  const articleUrl = `${siteConfig.canonicalUrl}/resources/${article.slug}`;

  const articleFaqs = article.faqs && article.faqs.length > 0 ? article.faqs : [
    {
      question: `How can I quickly consult a Taxoras specialist regarding ${article.title}?`,
      answer: `You can reach Taxoras immediately via WhatsApp at +91 88103 81949 or submit an enquiry on our portal. Our dedicated compliance managers review your documents and respond within 15–30 minutes during business hours.`
    },
    {
      question: "Does Taxoras provide end-to-end documentation and portal filing assistance?",
      answer: "Yes, Taxoras provides complete assisted filing, ledger reconciliation, documentation validation, and portal submission with transparent, upfront pricing."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}/#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": articleUrl
        },
        "headline": article.title,
        "description": article.summary,
        "image": `${siteConfig.canonicalUrl}/icon.svg`,
        "datePublished": "2026-10-15T00:00:00+05:30",
        "dateModified": "2026-10-17T00:00:00+05:30",
        "mainEntityOfPage": articleUrl,
        "author": {
          "@type": "Organization",
          "name": siteConfig.businessName,
          "url": siteConfig.canonicalUrl
        },
        "publisher": {
          "@type": "Organization",
          "name": siteConfig.businessName,
          "url": siteConfig.canonicalUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${siteConfig.canonicalUrl}/icon.svg`
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}/#breadcrumb`,
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
            "name": "Resources",
            "item": `${siteConfig.canonicalUrl}/resources`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": articleUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${articleUrl}/#faqs`,
        "mainEntity": articleFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
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
              <Link href="/resources" className="hover:text-navy transition-colors">
                Resources
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="font-semibold text-navy truncate max-w-xs sm:max-w-sm">
                {article.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Article Hero */}
        <section className="bg-white border-b border-surface-border py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-xs text-text-muted flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
              <span className="text-xs text-text-muted">
                • Last Reviewed: {article.lastReviewed}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              {article.summary}
            </p>
          </div>
        </section>

        {/* Article Layout */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="space-y-8">
            
            {/* Table of Contents */}
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <div className="bg-white rounded-2xl border border-surface-border p-6 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-blue" />
                  <span>Table of Contents</span>
                </h3>
                <div className="space-y-1.5 text-xs">
                  {article.tableOfContents.map((toc) => (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      className="block text-brand-blue hover:underline py-0.5"
                    >
                      {toc.title}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Article Content Sections */}
            <article className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-8">
              {article.sections.map((sec) => (
                <div key={sec.id} id={sec.id} className="scroll-mt-24 space-y-3.5">
                  <h2 className="text-lg sm:text-xl font-bold text-navy pb-1.5 border-b border-slate-100">
                    {sec.title}
                  </h2>

                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {sec.bulletPoints && (
                    <ul className="space-y-2 pt-1">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.callout && (
                    <div
                      className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed border ${
                        sec.callout.type === "important" || sec.callout.type === "warning"
                          ? "bg-amber-50 border-amber-200 text-amber-900"
                          : "bg-blue-50 border-blue-200 text-blue-900"
                      }`}
                    >
                      <strong>
                        {sec.callout.type === "warning" ? "Caution: " : "Important Note: "}
                      </strong>
                      {sec.callout.text}
                    </div>
                  )}
                </div>
              ))}

              {/* Official Source Reference */}
              {article.officialSource && (
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-text-muted">
                  <span>Official Government Portal Reference:</span>
                  <a
                    href={article.officialSource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>{article.officialSource.title}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </article>

            {/* Frequently Asked Questions */}
            <section id="faqs" className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-6 scroll-mt-24">
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200/70 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Instant Answers & Assistance
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-navy flex items-center gap-2.5">
                  <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <p className="text-xs text-text-muted mt-1">
                  Answers to statutory rules, common filing dilemmas, and how to get rapid expert help from Taxoras.
                </p>
              </div>

              <div className="space-y-4">
                {articleFaqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 sm:p-5 rounded-xl border border-surface-border bg-slate-50/70 hover:bg-slate-50 transition-colors space-y-2.5"
                  >
                    <h3 className="text-sm font-bold text-navy flex items-start gap-2.5">
                      <span className="text-amber-600 font-extrabold text-xs mt-0.5 shrink-0">Q{fIdx + 1}.</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5 sm:pl-6">
                      {faq.answer}
                    </p>
                    {faq.answer.includes("WhatsApp") && (
                      <div className="pl-5 sm:pl-6 pt-1">
                        <a
                          href={siteConfig.links.whatsappUrl(article.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 px-3 py-1.5 rounded-lg border border-emerald-200 transition-all"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5" />
                          <span>Chat with Compliance Desk on WhatsApp (+91 88103 81949)</span>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Contextual Consultation Callout */}
            <div className="bg-[#1C1510] border border-[#3E2C20] text-[#FAF4EF] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-bold">
                  Need Help Implementing This in Your Business?
                </h3>
                <p className="text-xs text-[#BCAE9F]">
                  Our compliance team assists with documentation, reconciliation, and portal filings.
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href={siteConfig.links.whatsappUrl(article.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Ask on WhatsApp</span>
                </a>
                <Link
                  href="/#enquire"
                  className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <span>Enquire</span>
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-navy">Related Compliance Guides</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/resources/${rel.slug}`}
                    className="bg-white p-4 rounded-xl border border-surface-border hover:border-brand-blue transition-all shadow-xs block group"
                  >
                    <span className="text-[10px] font-semibold text-teal block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-xs font-bold text-navy group-hover:text-brand-blue transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
