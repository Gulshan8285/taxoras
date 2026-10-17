"use client";

import React, { useState, useEffect } from "react";
import { siteConfig, CustomerEnquiryPayload } from "@/config/siteConfig";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  PhoneCall,
  Phone,
  Mail,
  Loader2,
  Building,
  User,
  MapPin,
  HelpCircle,
  ExternalLink
} from "lucide-react";

interface EnquiryFormProps {
  initialService?: string;
  sourceContext?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
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
  "Balance Sheet / Financial Statements",
  "Income Tax Return",
  "Multiple Services",
  "Other"
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

const INDIAN_STATES = [
  "Delhi NCR",
  "Maharashtra",
  "Karnataka",
  "Rajasthan",
  "Uttar Pradesh",
  "Gujarat",
  "Tamil Nadu",
  "Telangana",
  "West Bengal",
  "Haryana",
  "Punjab",
  "Madhya Pradesh",
  "Bihar",
  "Other State / UT"
];

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialService = "GST Return Filing",
  sourceContext,
  title = "Discuss Your Accounting & Compliance Needs",
  subtitle = "Fill in your details below. You can send your enquiry directly to our WhatsApp or request an online callback.",
  compact = false
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    mobile: "",
    email: "",
    city: "",
    state: "Delhi NCR",
    businessType: "Sole Proprietorship",
    serviceRequired: initialService,
    specificNeeds: "",
    additionalDetails: "",
    consent: true,
    website_trap: "" // honeypot anti-spam
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");
  const [apiError, setApiError] = useState("");

  // Sync if initialService changes
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (minimum 2 characters).";
    }

    const cleanMobile = formData.mobile.replace(/[^0-9]/g, "");
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!cleanMobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!mobileRegex.test(cleanMobile)) {
      newErrors.mobile = "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.";
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = "Please select a required service.";
    }

    if (
      (formData.serviceRequired === "Multiple Services" || formData.serviceRequired === "Other") &&
      !formData.specificNeeds.trim()
    ) {
      newErrors.specificNeeds = "Please specify which services or requirements you need assistance with.";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

  // Helper to compile payload for WhatsApp & Backend
  const getCompiledDetails = (): CustomerEnquiryPayload => {
    let combinedDetails = formData.additionalDetails.trim();
    if (formData.specificNeeds.trim()) {
      combinedDetails = combinedDetails
        ? `Specified Needs: ${formData.specificNeeds.trim()} | ${combinedDetails}`
        : `Specified Needs: ${formData.specificNeeds.trim()}`;
    }

    return {
      fullName: formData.fullName,
      mobile: formData.mobile,
      serviceRequired: formData.serviceRequired,
      businessName: formData.businessName,
      email: formData.email,
      city: formData.city,
      state: formData.state,
      businessType: formData.businessType,
      additionalDetails: combinedDetails
    };
  };

  // WhatsApp Enquiry Action
  const handleWhatsAppEnquiry = async (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    setApiError("");

    if (!validate()) return;

    const payload = getCompiledDetails();

    // Generate formatted WhatsApp link
    const waUrl = siteConfig.links.formatEnquiryWhatsAppUrl(payload);

    // Also persist lead to backend asynchronously so business never loses enquiry
    try {
      fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          additionalDetails: payload.additionalDetails,
          preferredContact: "WhatsApp",
          sourceContext: sourceContext || "whatsapp_form_click"
        })
      }).catch(() => {});
    } catch (_) {}

    // Open WhatsApp in new window
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  // Request a Callback Action (Submits to Backend)
  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");

    if (!validate()) return;

    setSubmitting(true);
    const payload = getCompiledDetails();

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          additionalDetails: payload.additionalDetails,
          preferredContact: "Phone Call",
          sourceContext: sourceContext || "callback_form_submit"
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setSubmissionId(data.enquiryId || "LEAD-ACK");
      } else {
        setApiError(data.error || "Failed to submit enquiry. Please try again or use WhatsApp.");
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
      state: "Delhi NCR",
      businessType: "Sole Proprietorship",
      serviceRequired: initialService,
      specificNeeds: "",
      additionalDetails: "",
      consent: true,
      website_trap: ""
    });
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-sm text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <span className="inline-block text-xs font-bold text-teal bg-teal-light px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Enquiry Received
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">
          Thank You, {formData.fullName}!
        </h3>
        <p className="text-xs sm:text-sm text-text-muted max-w-md mx-auto mb-6 leading-relaxed">
          Your request for <strong className="text-navy">{formData.serviceRequired}</strong> has been logged with Reference ID:{" "}
          <span className="font-mono font-semibold text-brand-blue bg-[#2A1E15] text-amber-400 px-2 py-0.5 rounded">
            {submissionId}
          </span>
        </p>

        <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-surface-border max-w-lg mx-auto text-left space-y-2.5 mb-6 text-xs text-text-main">
          <div className="font-semibold text-navy text-sm flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-blue" />
            Next Steps in Our Process
          </div>
          <p className="text-text-muted">
            1. Our senior compliance analyst will review your business type and requirements.
          </p>
          <p className="text-text-muted">
            2. We will contact you at <strong>+91 {formData.mobile}</strong> with an itemized document checklist and transparent scope quotation.
          </p>
          <p className="text-text-muted">
            3. Zero advance payment or obligation required to discuss preliminary scope.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={siteConfig.links.formatEnquiryWhatsAppUrl(getCompiledDetails())}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium text-xs px-5 py-3 rounded-xl transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Open in WhatsApp Now</span>
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
    <div className="bg-white rounded-2xl border border-surface-border p-5 sm:p-8 shadow-sm" id="enquiry-form">
      <div className="mb-6">
        <h3 className="text-lg sm:text-2xl font-bold text-navy tracking-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {apiError && (
        <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{apiError}</span>
        </div>
      )}

      <form onSubmit={(e) => { e.preventDefault(); handleWhatsAppEnquiry(e); }} className="space-y-4">
        {/* Anti-spam honeypot */}
        <input
          type="text"
          name="website_trap"
          value={formData.website_trap}
          onChange={(e) => setFormData({ ...formData, website_trap: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Row 1: Full Name & Mobile Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Ramesh Kumar"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full text-xs text-text-main bg-[#150F0B] text-[#FAF4EF] border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all ${
                errors.fullName ? "border-red-400 bg-red-50/20" : "border-surface-border focus:border-brand-blue"
              }`}
            />
            {errors.fullName && (
              <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
            )}
          </div>

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
                className={`w-full text-xs text-text-main pl-12 pr-3.5 py-2.5 bg-[#150F0B] text-[#FAF4EF] border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all ${
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
        </div>

        {/* Row 2: Service Required & Dynamic Specific Needs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Service Required <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.serviceRequired}
              onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
              className="w-full text-xs text-text-main bg-[#150F0B] text-[#FAF4EF] border border-surface-border rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            >
              {SERVICE_OPTIONS.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Business / Trade Name <span className="text-text-muted font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Kumar Traders"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full text-xs text-text-main bg-[#150F0B] text-[#FAF4EF] border border-surface-border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            />
          </div>
        </div>

        {/* Dynamic field when Multiple Services or Other is chosen */}
        {(formData.serviceRequired === "Multiple Services" || formData.serviceRequired === "Other") && (
          <div className="p-3.5 rounded-xl bg-[#2A1E15] text-amber-400/60 border border-blue-100">
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Specify Services or Requirements <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Need GST registration + monthly accounting + annual ITR"
              value={formData.specificNeeds}
              onChange={(e) => setFormData({ ...formData, specificNeeds: e.target.value })}
              className={`w-full text-xs text-text-main bg-white border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
                errors.specificNeeds ? "border-red-400" : "border-surface-border focus:border-brand-blue"
              }`}
            />
            {errors.specificNeeds && (
              <p className="text-[11px] text-red-600 mt-1">{errors.specificNeeds}</p>
            )}
          </div>
        )}

        {/* Row 3: City, State & Business Type */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-navy">
                City <span className="text-text-muted font-normal">(Optional)</span>
              </label>
              <div className="flex items-center gap-1 text-[10px]">
                {["Noida", "Delhi", "Gurugram"].map((quickCity) => (
                  <button
                    key={quickCity}
                    type="button"
                    onClick={() => setFormData({ ...formData, city: quickCity })}
                    className="text-brand-blue hover:underline bg-[#2A1E15] text-amber-400 px-1.5 py-0.5 rounded text-[10px]"
                  >
                    +{quickCity}
                  </button>
                ))}
              </div>
            </div>
            <input
              type="text"
              placeholder="e.g. Noida, Delhi, Mumbai"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full text-xs text-text-main bg-[#150F0B] text-[#FAF4EF] border border-surface-border rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              State / Region
            </label>
            <select
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="w-full text-xs text-text-main bg-[#150F0B] text-[#FAF4EF] border border-surface-border rounded-xl px-2.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            >
              {INDIAN_STATES.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Constitution
            </label>
            <select
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full text-xs text-text-main bg-[#150F0B] text-[#FAF4EF] border border-surface-border rounded-xl px-2.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            >
              {BUSINESS_TYPES.map((bt) => (
                <option key={bt} value={bt}>
                  {bt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4: Email Address & Additional Requirements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Email Address <span className="text-text-muted font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              placeholder="ramesh@company.in"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full text-xs text-text-main bg-[#150F0B] text-[#FAF4EF] border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 ${
                errors.email ? "border-red-400" : "border-surface-border focus:border-brand-blue"
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5">
              Additional Details / Timeline <span className="text-text-muted font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Urgent filing, pending past returns, etc."
              value={formData.additionalDetails}
              onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
              className="w-full text-xs text-text-main bg-[#150F0B] text-[#FAF4EF] border border-surface-border rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>
        </div>

        {/* Privacy Consent */}
        <div>
          <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-text-muted">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-0.5 rounded text-brand-blue focus:ring-brand-blue border-surface-border"
            />
            <span>
              I consent to receiving communication regarding this enquiry. We strictly respect privacy and never share your data.
            </span>
          </label>
          {errors.consent && (
            <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>
          )}
        </div>

        {/* Security Notice */}
        <div className="bg-[#150F0B] rounded-xl p-2.5 border border-surface-border flex items-center gap-2 text-[11px] text-text-muted">
          <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
          <span>
            We never collect bank passwords, PINs, or Aadhaar OTPs through public forms.
          </span>
        </div>

        {/* Direct WhatsApp & Helpline Action Buttons */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* WhatsApp Primary Action */}
          <button
            type="button"
            onClick={handleWhatsAppEnquiry}
            className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Send Enquiry on WhatsApp</span>
          </button>

          {/* Direct Call Helpline */}
          <a
            href={siteConfig.links.phoneUrl}
            className="w-full bg-[#16110D] hover:bg-[#201812] text-[#FAF4EF] font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl border border-surface-border transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-brand-blue" />
            <span>Direct Call: {siteConfig.contact.phoneFormatted}</span>
          </a>
        </div>

        <p className="text-[10px] text-center text-text-muted pt-1">
          WhatsApp enquiry generates a prefilled message for your review. No automated transmission without your confirmation.
        </p>
      </form>
    </div>
  );
};
