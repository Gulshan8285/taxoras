import os

api_route_ts = """import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { CustomerEnquiry } from "@/types";

const ENQUIRIES_FILE = path.join(process.cwd(), "data", "enquiries.json");

// Ensure enquiries.json exists with initial demo enquiries
function getInitialEnquiries(): CustomerEnquiry[] {
  return [
    {
      id: "LEAD-1001",
      fullName: "Vikram Malhotra",
      businessName: "Malhotra Electronics & Traders",
      mobile: "9811234567",
      email: "vikram@malhotratraders.in",
      city: "New Delhi",
      businessType: "Sole Proprietorship",
      serviceRequired: "GST Return Filing",
      transactionVolume: "200-500 invoices/month",
      preferredContact: "WhatsApp",
      additionalDetails: "Need monthly GSTR-1 and GSTR-3B filing and purchase 2B matching for 2 branches.",
      status: "In Progress",
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      updatedAt: new Date(Date.now() - 86400000).toISOString(),
      notes: [
        {
          id: "n-1",
          text: "Discussed requirements on WhatsApp. Client shared previous GSTR-3B filings. Quote sent.",
          author: "Senior Consultant",
          createdAt: new Date(Date.now() - 86400000).toISOString(),
        }
      ],
      assignedTo: "Rahul Sharma",
    },
    {
      id: "LEAD-1002",
      fullName: "Pooja Hegde",
      businessName: "NovaCraft Digital Solutions",
      mobile: "9876543210",
      email: "pooja@novacraft.io",
      city: "Bengaluru",
      businessType: "Private Limited",
      serviceRequired: "Day-to-Day Accounting",
      transactionVolume: "50-200 invoices/month",
      preferredContact: "Phone Call",
      additionalDetails: "Looking for complete monthly bookkeeping and quarterly TDS 26Q filing support.",
      status: "Requirements Received",
      createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
      updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      notes: [
        {
          id: "n-2",
          text: "Initial call completed. Requested FY 25-26 bank statements and Zoho books access.",
          author: "Accounts Lead",
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        }
      ],
      assignedTo: "Amit Verma",
    },
    {
      id: "LEAD-1003",
      fullName: "Sunil Agarwal",
      businessName: "Agarwal Handlooms",
      mobile: "9928012345",
      email: "",
      city: "Jaipur",
      businessType: "Partnership Firm",
      serviceRequired: "MSME / Udyam Registration",
      transactionVolume: "<50 invoices/month",
      preferredContact: "WhatsApp",
      additionalDetails: "Need Udyam registration to avail bank priority lending and delayed payment protection.",
      status: "New",
      createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
      updatedAt: new Date(Date.now() - 3600000 * 5).toISOString(),
      notes: [],
    }
  ];
}

function readEnquiries(): CustomerEnquiry[] {
  try {
    if (!fs.existsSync(ENQUIRIES_FILE)) {
      const initial = getInitialEnquiries();
      fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(initial, null, 2));
      return initial;
    }
    const data = fs.readFileSync(ENQUIRIES_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading enquiries file:", err);
    return getInitialEnquiries();
  }
}

function saveEnquiries(list: CustomerEnquiry[]): void {
  try {
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(list, null, 2));
  } catch (err) {
    console.error("Error writing enquiries file:", err);
  }
}

export async function GET(req: NextRequest) {
  const enquiries = readEnquiries();
  return NextResponse.json({ success: true, enquiries });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot spam check
    if (body.website_trap && body.website_trap.length > 0) {
      return NextResponse.json({ success: false, error: "Spam detected" }, { status: 400 });
    }

    const {
      fullName,
      businessName,
      mobile,
      email,
      city,
      businessType,
      serviceRequired,
      transactionVolume,
      preferredContact,
      additionalDetails,
    } = body;

    // Server-side validation
    if (!fullName || fullName.trim().length < 2) {
      return NextResponse.json({ success: false, error: "Full Name is required (minimum 2 characters)" }, { status: 422 });
    }

    // Indian mobile format: 10 digits starting with 6, 7, 8, or 9
    const cleanMobile = (mobile || "").replace(/[^0-9]/g, "");
    const mobileRegex = /^[6-9]\\d{9}$/;
    if (!mobileRegex.test(cleanMobile)) {
      return NextResponse.json({ success: false, error: "Please provide a valid 10-digit Indian mobile number (e.g., 9876543210)" }, { status: 422 });
    }

    if (!city || city.trim().length < 2) {
      return NextResponse.json({ success: false, error: "City is required" }, { status: 422 });
    }

    if (!serviceRequired) {
      return NextResponse.json({ success: false, error: "Please select a service required" }, { status: 422 });
    }

    if (email && email.trim().length > 0) {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json({ success: false, error: "Please provide a valid email address or leave blank" }, { status: 422 });
      }
    }

    const newEnquiry: CustomerEnquiry = {
      id: `LEAD-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName: fullName.trim(),
      businessName: businessName ? businessName.trim() : undefined,
      mobile: cleanMobile,
      email: email ? email.trim() : undefined,
      city: city.trim(),
      businessType: businessType || "Sole Proprietorship",
      serviceRequired: serviceRequired,
      transactionVolume: transactionVolume || "Not specified",
      preferredContact: preferredContact || "WhatsApp",
      additionalDetails: additionalDetails ? additionalDetails.trim() : undefined,
      status: "New",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      notes: [],
    };

    const existing = readEnquiries();
    existing.unshift(newEnquiry);
    saveEnquiries(existing);

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully! A compliance specialist will contact you.",
      enquiryId: newEnquiry.id,
      lead: newEnquiry
    });
  } catch (error: any) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process enquiry. Please try again." },
      { status: 500 }
    );
  }
}
"""

with open("src/app/api/enquiry/route.ts", "w") as f:
    f.write(api_route_ts)

enquiry_form_ts = """\"use client\";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  MessageCircle,
  PhoneCall,
  Mail,
  Loader2,
  Building,
  User,
  MapPin
} from "lucide-react";

interface EnquiryFormProps {
  initialService?: string;
  sourceContext?: string;
  title?: string;
  subtitle?: string;
}

const SERVICE_OPTIONS = [
  "GST Registration",
  "GST Return Filing",
  "TDS Return Filing",
  "TDS Payment Assistance",
  "Day-to-Day Accounting",
  "MSME / Udyam Registration",
  "Bank Reconciliation",
  "Debtors & Creditors Reconciliation",
  "Balance Sheet & Financial Statements",
  "Income Tax Return",
  "Multiple Services",
  "Other Compliance Support"
];

const BUSINESS_TYPES = [
  "Sole Proprietorship",
  "Partnership Firm",
  "Limited Liability Partnership (LLP)",
  "Private Limited Company",
  "Freelancer / Individual Professional",
  "Retailer / Trader",
  "Other"
];

const VOLUME_OPTIONS = [
  "Less than 50 invoices / month",
  "50 – 200 invoices / month",
  "200 – 500 invoices / month",
  "500+ invoices / month",
  "Not Applicable / Just Starting"
];

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialService = "GST Return Filing",
  sourceContext,
  title = "Discuss Your Accounting & Compliance Needs",
  subtitle = "Share your business details below. A compliance consultant will review your requirements and reach out within 1 business day."
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    mobile: "",
    email: "",
    city: "",
    businessType: "Sole Proprietorship",
    serviceRequired: initialService,
    transactionVolume: "Less than 50 invoices / month",
    preferredContact: "WhatsApp" as "WhatsApp" | "Phone Call" | "Email",
    additionalDetails: "",
    consent: true,
    website_trap: "" // honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (at least 2 characters).";
    }

    const cleanMobile = formData.mobile.replace(/[^0-9]/g, "");
    const mobileRegex = /^[6-9]\\d{9}$/;
    if (!cleanMobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!mobileRegex.test(cleanMobile)) {
      newErrors.mobile = "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.";
    }

    if (!formData.city.trim() || formData.city.trim().length < 2) {
      newErrors.city = "Please enter your city/location.";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.consent) {
      newErrors.consent = "Please agree to be contacted for this enquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");

    if (!validate()) return;

    setSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setSubmissionId(data.enquiryId || "LEAD-ACK");
      } else {
        setApiError(data.error || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      setApiError("Network error. Please check your connection or contact us via WhatsApp directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmissionId("");
    setFormData({
      fullName: "",
      businessName: "",
      mobile: "",
      email: "",
      city: "",
      businessType: "Sole Proprietorship",
      serviceRequired: initialService,
      transactionVolume: "Less than 50 invoices / month",
      preferredContact: "WhatsApp",
      additionalDetails: "",
      consent: true,
      website_trap: ""
    });
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-sm text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <span className="inline-block text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Enquiry Received
        </span>
        <h3 className="text-2xl font-bold text-navy mb-2">
          Thank You, {formData.fullName}!
        </h3>
        <p className="text-sm text-text-muted max-w-md mx-auto mb-6">
          Your enquiry for <strong className="text-navy">{formData.serviceRequired}</strong> has been logged with Reference ID:{" "}
          <span className="font-mono font-semibold text-brand-blue bg-blue-50 px-2 py-0.5 rounded">
            {submissionId}
          </span>
        </p>

        <div className="bg-slate-50 rounded-xl p-5 border border-surface-border max-w-lg mx-auto text-left space-y-3 mb-6 text-xs text-text-main">
          <div className="font-semibold text-navy text-sm flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-blue" />
            What Happens Next?
          </div>
          <p className="text-text-muted">
            1. Our senior compliance analyst will review your business type and requirements.
          </p>
          <p className="text-text-muted">
            2. We will contact you via <strong>{formData.preferredContact}</strong> ({formData.mobile}) with a tailored document checklist and transparent scope estimate.
          </p>
          <p className="text-text-muted">
            3. No obligation or upfront payment required to discuss initial requirements.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={siteConfig.links.whatsappUrl(formData.serviceRequired)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs px-5 py-3 rounded-xl transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp Directly</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto text-xs font-semibold text-text-muted hover:text-navy px-4 py-3 rounded-xl border border-surface-border hover:bg-slate-50 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-9 shadow-sm" id="enquire">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-navy tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {apiError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{apiError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-spam honeypot (hidden) */}
        <input
          type="text"
          name="website_trap"
          value={formData.website_trap}
          onChange={(e) => setFormData({ ...formData, website_trap: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full text-xs text-text-main bg-slate-50/50 border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all ${
                  errors.fullName ? "border-red-400 bg-red-50/20" : "border-surface-border focus:border-brand-blue"
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Business / Trade Name <span className="text-text-muted font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Kumar Enterprises"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full text-xs text-text-main bg-slate-50/50 border border-surface-border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Mobile Number (WhatsApp) <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-xs font-semibold text-text-muted select-none">
                +91
              </span>
              <input
                type="tel"
                maxLength={10}
                placeholder="9876543210"
                value={formData.mobile}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, "");
                  setFormData({ ...formData, mobile: val });
                }}
                className={`w-full text-xs text-text-main pl-12 pr-3.5 py-2.5 bg-slate-50/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all ${
                  errors.mobile ? "border-red-400 bg-red-50/20" : "border-surface-border focus:border-brand-blue"
                }`}
              />
            </div>
            {errors.mobile ? (
              <p className="text-[11px] text-red-600 mt-1">{errors.mobile}</p>
            ) : (
              <p className="text-[10px] text-text-muted mt-1">10-digit Indian mobile number</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Email Address <span className="text-text-muted font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              placeholder="ramesh@company.in"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full text-xs text-text-main bg-slate-50/50 border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all ${
                errors.email ? "border-red-400 bg-red-50/20" : "border-surface-border focus:border-brand-blue"
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* City / Location */}
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              City / State in India <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. New Delhi, Mumbai, Jaipur"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={`w-full text-xs text-text-main bg-slate-50/50 border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all ${
                errors.city ? "border-red-400 bg-red-50/20" : "border-surface-border focus:border-brand-blue"
              }`}
            />
            {errors.city && (
              <p className="text-[11px] text-red-600 mt-1">{errors.city}</p>
            )}
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Business Constitution
            </label>
            <select
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full text-xs text-text-main bg-slate-50/50 border border-surface-border rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            >
              {BUSINESS_TYPES.map((bt) => (
                <option key={bt} value={bt}>
                  {bt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Service Required */}
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Primary Service Required <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.serviceRequired}
              onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
              className="w-full text-xs text-text-main bg-slate-50/50 border border-surface-border rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            >
              {SERVICE_OPTIONS.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
          </div>

          {/* Monthly Transaction Volume */}
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Approx. Monthly Volume <span className="text-text-muted font-normal">(Optional)</span>
            </label>
            <select
              value={formData.transactionVolume}
              onChange={(e) => setFormData({ ...formData, transactionVolume: e.target.value })}
              className="w-full text-xs text-text-main bg-slate-50/50 border border-surface-border rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            >
              {VOLUME_OPTIONS.map((vol) => (
                <option key={vol} value={vol}>
                  {vol}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-2">
            Preferred Method of Contact
          </label>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { id: "WhatsApp", icon: <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> },
              { id: "Phone Call", icon: <PhoneCall className="w-3.5 h-3.5 text-brand-blue" /> },
              { id: "Email", icon: <Mail className="w-3.5 h-3.5 text-navy" /> }
            ].map((method) => (
              <label
                key={method.id}
                className={`flex items-center justify-center gap-1.5 p-2 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                  formData.preferredContact === method.id
                    ? "border-brand-blue bg-blue-50/60 text-navy font-semibold"
                    : "border-surface-border text-text-muted hover:border-slate-300 bg-slate-50/30"
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value={method.id}
                  checked={formData.preferredContact === method.id}
                  onChange={() => setFormData({ ...formData, preferredContact: method.id as any })}
                  className="hidden"
                />
                {method.icon}
                <span>{method.id}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Additional Details */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5">
            Brief Notes or Specific Questions <span className="text-text-muted font-normal">(Optional)</span>
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about your timeline, whether you have pending returns, or specific questions about documents..."
            value={formData.additionalDetails}
            onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
            className="w-full text-xs text-text-main bg-slate-50/50 border border-surface-border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none"
          />
        </div>

        {/* Privacy Consent Checkbox */}
        <div>
          <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-text-muted">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-0.5 rounded text-brand-blue focus:ring-brand-blue border-surface-border"
            />
            <span>
              I consent to receiving follow-up communication regarding this enquiry. We strictly respect client confidentiality and never share your data.
            </span>
          </label>
          {errors.consent && (
            <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>
          )}
        </div>

        {/* Security Notice */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center gap-2 text-[11px] text-text-muted">
          <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
          <span>
            Never submit passwords, net banking credentials, or Aadhaar OTPs through public forms.
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-navy hover:bg-navy-light text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verifying & Submitting...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Request a Callback & Requirement Checklist</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
"""

with open("src/components/common/EnquiryForm.tsx", "w") as f:
    f.write(enquiry_form_ts)

print("Created api/enquiry/route.ts and EnquiryForm.tsx successfully!")
