import Link from "next/link";
import { Search, Home, ArrowRight, Phone, FileText } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/siteConfig";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 sm:py-24">
        <div className="max-w-2xl w-full text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Search className="w-3.5 h-3.5" />
            404 — Page Not Found
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            This page doesn&apos;t exist
          </h1>
          <p className="text-sm sm:text-base text-[#D1C3B7] leading-relaxed max-w-lg mx-auto">
            The URL you followed may be outdated or mistyped. Explore our core services or jump back to the
            homepage.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors shadow-md"
            >
              <Home className="w-4 h-4" />
              Back to Homepage
            </Link>
            <Link
              href="/services/gst-return-filing"
              className="inline-flex items-center gap-2 bg-[#1B1410] hover:bg-[#241C16] text-white border border-surface-border text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <FileText className="w-4 h-4" />
              Browse Services
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 text-left">
            {[
              { title: "GST Registration", href: "/services/gst-registration", desc: "New GSTIN assistance" },
              { title: "GST Return Filing", href: "/services/gst-return-filing", desc: "GSTR-1 & 3B + 2B matching" },
              { title: "TDS Return Filing", href: "/services/tds-return-filing", desc: "Quarterly 24Q & 26Q" },
              { title: "Daily Accounting", href: "/services/daily-accounting", desc: "Bookkeeping & ledgers" },
              { title: "Pricing Plans", href: "/pricing", desc: "Transparent fee matrix" },
              { title: "Contact Us", href: "/contact", desc: `Call ${siteConfig.contact.phoneFormatted}` },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-[#1B1410] border border-surface-border rounded-xl p-4 hover:border-amber-500/30 hover:bg-[#241C16] transition-all group"
              >
                <span className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  {link.title}
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="text-[11px] text-[#D1C3B7]">{link.desc}</span>
              </Link>
            ))}
          </div>

          <div className="pt-4">
            <a
              href={siteConfig.links.phoneUrl}
              className="inline-flex items-center gap-2 text-xs text-[#D1C3B7] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              Need help? Call {siteConfig.contact.phoneFormatted} — {siteConfig.contact.workingHours}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
