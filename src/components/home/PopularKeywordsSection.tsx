import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Sparkles, ArrowRight, MessageSquare, ShieldCheck, Tag } from "lucide-react";

interface KeywordGroup {
  category: string;
  tagline: string;
  targetUrl: string;
  queries: { text: string; link?: string }[];
}

const POPULAR_KEYWORD_GROUPS: KeywordGroup[] = [
  {
    category: "GST Compliance & Retainers",
    tagline: "Monthly Retainers from ₹799/month (All-Inclusive)",
    targetUrl: "/services/gst-return-filing",
    queries: [
      { text: "GST Return Filing Services", link: "/services/gst-return-filing" },
      { text: "GST Return Filing Online India", link: "/services/gst-return-filing" },
      { text: "Cheapest GST Filing Services", link: "/blog/cheap-gst-services-india-affordable-filing-comparison" },
      { text: "GST Return Filing Charges Per Month", link: "/blog/gst-return-filing-charges-per-month-india" },
      { text: "GSTR-1 Filing Online", link: "/services/gstr-1-filing" },
      { text: "GSTR-3B Return Filing", link: "/services/gstr-3b-filing" },
      { text: "Monthly GST Filing Retainers", link: "/pricing" },
      { text: "GST Filing for Small Business", link: "/services/gst-return-filing" },
      { text: "GST Registration Online ₹999", link: "/services/gst-registration" },
      { text: "GSTR-2B Purchase Matching", link: "/services/gst-return-filing" },
      { text: "GST Nil Return Filing Charges", link: "/blog/gst-return-filing-charges-per-month-india" },
      { text: "GST Notice Reply DRC-01B/C", link: "/services/gst-return-filing" }
    ]
  },
  {
    category: "TDS Returns & Direct Tax",
    tagline: "Quarterly TDS Retainers from ₹999/quarter",
    targetUrl: "/services/tds-return-filing",
    queries: [
      { text: "TDS Return Filing Services", link: "/services/tds-return-filing" },
      { text: "TDS Return Filing Online", link: "/services/tds-return-filing" },
      { text: "Form 24Q Salary TDS Return", link: "/services/form-24q-filing" },
      { text: "Form 26Q Vendor & Professional TDS", link: "/services/form-26q-filing" },
      { text: "TDS Payment Assistance Challan 281", link: "/services/tds-payment-assistance" },
      { text: "Form 16 Generation TRACES", link: "/services/form-24q-filing" },
      { text: "Section 194C Contractor TDS", link: "/services/form-26q-filing" },
      { text: "Section 194J Professional TDS", link: "/services/form-26q-filing" },
      { text: "TDS Correction Filing Services", link: "/services/tds-return-filing" },
      { text: "Section 234E Late Fee Solutions", link: "/blog/tds-return-filing-24q-26q-online" }
    ]
  },
  {
    category: "Bookkeeping & Accounting",
    tagline: "Ledger Maintenance from ₹1,499/month",
    targetUrl: "/services/daily-accounting",
    queries: [
      { text: "Affordable Accounting Services", link: "/services/daily-accounting" },
      { text: "Bookkeeping Services for Small Business", link: "/services/bookkeeping-services" },
      { text: "Tally Prime Accounting Services", link: "/services/bookkeeping-services" },
      { text: "Zoho Books Cloud Accounting", link: "/services/bookkeeping-services" },
      { text: "Bank Reconciliation Service BRS", link: "/services/bank-reconciliation" },
      { text: "Balance Sheet Preparation for Bank Loan", link: "/services/balance-sheet" },
      { text: "Debtors & Creditors Reconciliation", link: "/services/debtors-creditors-reconciliation" },
      { text: "Small Business Accountant India", link: "/services/daily-accounting" },
      { text: "CMA Report for Business Loan", link: "/services/balance-sheet" },
      { text: "Day to Day Ledger Maintenance", link: "/services/daily-accounting" }
    ]
  },
  {
    category: "Income Tax & MSME Compliance",
    tagline: "Presumptive Tax & Government Schemes",
    targetUrl: "/services/income-tax-return",
    queries: [
      { text: "Online Income Tax Return Filing", link: "/services/income-tax-return" },
      { text: "ITR Filing for Freelancers Section 44ADA", link: "/blog/presumptive-taxation-section-44ad-44ada-guide" },
      { text: "Presumptive Taxation Section 44AD", link: "/blog/presumptive-taxation-section-44ad-44ada-guide" },
      { text: "ITR-3 Business Tax Return Filing", link: "/services/income-tax-return" },
      { text: "MSME Udyam Registration Online Charges", link: "/blog/udyam-registration-online-charges-india" },
      { text: "Section 43B(h) 45 Days MSME Rule", link: "/blog/udyam-registration-online-charges-india" },
      { text: "AIS & TIS Tax Matching Services", link: "/services/income-tax-return" },
      { text: "Affordable ITR Filing Consultant", link: "/services/income-tax-return" }
    ]
  },
  {
    category: "Regional Commercial Hubs",
    tagline: "Pan-India Digital Compliance Desks",
    targetUrl: "/locations",
    queries: [
      { text: "GST Filing Services in Delhi", link: "/locations/delhi" },
      { text: "GST Filing Services in Noida", link: "/blog/gst-filing-services-in-noida" },
      { text: "GST Consultant in Gurugram", link: "/locations/gurugram" },
      { text: "GST Return Filing in Mumbai", link: "/locations/mumbai" },
      { text: "GST Filing Services in Bangalore", link: "/locations/bengaluru" },
      { text: "GST Return Consultant in Hyderabad", link: "/locations/hyderabad" },
      { text: "Accounting Services in Pune", link: "/locations/pune" },
      { text: "TDS Return Filing in Chennai", link: "/locations/chennai" },
      { text: "GST Registration in Kolkata", link: "/locations/kolkata" },
      { text: "GST Filing Services in Ahmedabad", link: "/locations/ahmedabad" },
      { text: "GST Consultant in Jaipur", link: "/locations/jaipur" },
      { text: "GST Return Services in Surat", link: "/locations/surat" }
    ]
  }
];

export function PopularKeywordsSection() {
  const whatsappNumber = siteConfig.contact.phone.replace(/[^0-9]/g, "");

  return (
    <section className="py-14 sm:py-20 bg-[#120D0A] border-t border-surface-border text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Intent Business Compliance Directory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Popular Searches &amp; Compliance Solutions in India
          </h2>
          <p className="text-xs sm:text-sm text-[#DDD0C5] leading-relaxed">
            Looking for affordable GST return filing, quarterly TDS compliance, or small business bookkeeping? 
            Select any high-demand search query below to view dedicated deliverables or start an instant WhatsApp consultation.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_KEYWORD_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="bg-[#1B1410] rounded-2xl border border-surface-border p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-md group"
            >
              <div className="space-y-4">
                <div className="border-b border-surface-border pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-base text-white group-hover:text-amber-400 transition-colors">
                      {group.category}
                    </h3>
                    <Tag className="w-4 h-4 text-amber-400 opacity-70" />
                  </div>
                  <span className="text-[11px] text-amber-300/90 font-medium block mt-1">
                    {group.tagline}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.queries.map((q, qIdx) => {
                    const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Taxoras, I am looking for assistance regarding: "${q.text}". Please share charges and filing procedure.`)}`;
                    return (
                      <div key={qIdx} className="inline-flex items-center">
                        {q.link ? (
                          <Link
                            href={q.link}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#120D0A] hover:bg-amber-500 hover:text-slate-950 text-[#DDD0C5] hover:border-amber-500 text-xs border border-surface-border transition-all"
                            title={`Explore ${q.text} with Taxoras`}
                          >
                            <span>{q.text}</span>
                          </Link>
                        ) : (
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#120D0A] hover:bg-emerald-600 text-emerald-400 hover:text-white text-xs border border-surface-border transition-all"
                          >
                            <span>{q.text}</span>
                            <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-surface-border flex items-center justify-between text-xs">
                <Link
                  href={group.targetUrl}
                  className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore All Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Taxoras, I need a consultation for ${group.category}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 text-[11px]"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="bg-gradient-to-r from-amber-950/40 via-[#1B1410] to-amber-950/40 rounded-2xl border border-amber-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-400 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>Transparent Pricing &amp; Zero Hidden Fees</span>
            </div>
            <p className="text-xs text-[#DDD0C5] max-w-2xl">
              Unlike aggregators with deceptive ₹299 traps that add ₹2,000 for purchase matching, Taxoras offers flat, verified retainers starting at ₹799/month with 100% GSTR-2B reconciliation included.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/pricing"
              className="px-5 py-2.5 rounded-xl bg-[#120D0A] hover:bg-[#251A14] text-white text-xs font-bold border border-surface-border text-center transition-all"
            >
              View Transparent Fee Matrix
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Taxoras, I want to discuss customized compliance retainers for my business.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold text-center transition-all shadow-md inline-flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct WhatsApp Discussion</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
