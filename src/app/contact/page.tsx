import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { EnquiryForm } from "@/components/common/EnquiryForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ShieldCheck,
  Building2,
  Calendar
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Office Location, Phone & WhatsApp Support",
  description: "Get in touch with Taxoras Advisory. Office address in New Delhi, direct helpline number, WhatsApp enquiry desk, and operating hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Header */}
        <section className="bg-white border-b border-surface-border py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">
              Contact Our Compliance Desk
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-xl mx-auto">
              Have questions regarding GST registration, return deadlines, or daily accounting? We are here to assist your business.
            </p>
          </div>
        </section>

        {/* Contact Information & Form Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 5 Columns: Contact Details & Office Card */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-xs space-y-6">
                <h2 className="text-xl font-bold text-navy pb-3 border-b border-surface-border">
                  Direct Office Contacts
                </h2>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-navy block text-xs uppercase tracking-wider">
                        Office Location
                      </span>
                      <p className="text-text-muted mt-0.5 leading-relaxed">
                        {siteConfig.location.address}, {siteConfig.location.city} {siteConfig.location.pincode}, {siteConfig.location.country}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-light text-teal flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-navy block text-xs uppercase tracking-wider">
                        Telephone Helpline
                      </span>
                      <a href={siteConfig.links.phoneUrl} className="text-brand-blue font-semibold mt-0.5 block hover:underline">
                        {siteConfig.contact.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-navy block text-xs uppercase tracking-wider">
                        WhatsApp Business
                      </span>
                      <a
                        href={siteConfig.links.whatsappUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-semibold mt-0.5 block hover:underline"
                      >
                        {siteConfig.contact.whatsappFormatted} (Instant Chat)
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-navy flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-navy block text-xs uppercase tracking-wider">
                        Email Correspondence
                      </span>
                      <a href={siteConfig.links.emailUrl} className="text-brand-blue font-semibold mt-0.5 block hover:underline">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-navy block text-xs uppercase tracking-wider">
                        Business Hours
                      </span>
                      <p className="text-text-muted mt-0.5">
                        {siteConfig.contact.workingDays}: {siteConfig.contact.workingHours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Digital Support Note */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-text-muted leading-relaxed">
                  <strong className="text-navy block mb-1">Serving Businesses Across India</strong>
                  We operate a completely digital documentation and filing model, serving clients in Delhi NCR, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Ahmedabad, and Tier-2/3 business hubs.
                </div>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="bg-white rounded-2xl border border-surface-border p-5 text-center space-y-2">
                <div className="w-full h-40 bg-slate-100 rounded-xl flex flex-col items-center justify-center text-text-muted text-xs border border-dashed border-slate-300">
                  <Building2 className="w-8 h-8 text-slate-400 mb-1" />
                  <span className="font-semibold text-navy">Connaught Place Central Hub</span>
                  <span className="text-[11px]">New Delhi 110001, India</span>
                </div>
                <p className="text-[11px] text-text-muted">
                  Client consultations by prior appointment.
                </p>
              </div>

            </div>

            {/* Right 7 Columns: Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm
                title="Send an Enquiry Directly to Our Team"
                subtitle="Fill out the fields below. A compliance advisor will review your requirements and reach out on your preferred channel."
              />
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
