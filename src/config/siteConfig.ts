export interface CustomerEnquiryPayload {
  fullName: string;
  mobile: string;
  serviceRequired: string;
  businessName?: string;
  email?: string;
  city?: string;
  state?: string;
  businessType?: string;
  additionalDetails?: string;
}

export interface SiteConfig {
  businessName: string;
  shortName: string;
  tagline: string;
  positioning: string;
  supportingPositioning: string;
  announcement: string;
  description: string;
  location: {
    city: string;
    state: string;
    country: string;
    address: string;
    pincode: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsappRaw: string;
    whatsappFormatted: string;
    email: string;
    workingHours: string;
    workingDays: string;
  };
  credit: {
    text: string;
    brand: string;
    url: string;
  };
  canonicalUrl: string;
  links: {
    whatsappUrl: (serviceName?: string, location?: string) => string;
    formatEnquiryWhatsAppUrl: (data: CustomerEnquiryPayload) => string;
    phoneUrl: string;
    emailUrl: string;
  };
  disclaimer: string;
  trustStatement: string;
}

const WHATSAPP_RAW = "918103819494";
const PHONE_DISPLAY = "+91 81038 19494";

export const siteConfig: SiteConfig = {
  businessName: "Taxoras Advisory & Compliance",
  shortName: "Taxoras",
  tagline: "Accounting | Taxation | Compliance",
  positioning: "Affordable Accounting, GST & Tax Compliance Services for Indian Businesses.",
  supportingPositioning: "Professional assistance, transparent pricing, organized documentation and responsive support — wherever your business operates in India.",
  announcement: "Affordable Accounting & Tax Compliance Services Across India.",
  description: "Affordable, professional accounting, GST registration, return filing, TDS compliance, and financial reporting support for Indian businesses, startups, and traders across Tier 1, Tier 2, and Tier 3 cities.",
  canonicalUrl: "https://www.taxoras.online",
  location: {
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    address: "Suite 402, Barakhamba Road, Connaught Place",
    pincode: "110001",
  },
  contact: {
    phone: "+918103819494",
    phoneFormatted: PHONE_DISPLAY,
    whatsappRaw: WHATSAPP_RAW,
    whatsappFormatted: PHONE_DISPLAY,
    email: "contact@taxoras.online",
    workingHours: "9:30 AM – 6:30 PM IST",
    workingDays: "Monday to Saturday",
  },
  credit: {
    text: "Created by",
    brand: "Codeorbi.cloud",
    url: "https://codeorbi.cloud/",
  },
  links: {
    whatsappUrl: (serviceName?: string, location?: string) => {
      const base = `https://wa.me/${WHATSAPP_RAW}`;
      let msg = "Hello, I would like to enquire about your affordable accounting and tax compliance services.";
      if (serviceName && location) {
        msg = `Hello, I would like to enquire about ${serviceName} in ${location}. Please share the requirements and pricing quote.`;
      } else if (serviceName) {
        msg = `Hello, I would like to enquire about ${serviceName} for my business. Please share the requirements and pricing quote.`;
      }
      return `${base}?text=${encodeURIComponent(msg)}`;
    },
    formatEnquiryWhatsAppUrl: (data: CustomerEnquiryPayload) => {
      const base = `https://wa.me/${WHATSAPP_RAW}`;
      
      const lines = [
        "Hello, I would like to enquire about your accounting and tax services.",
        `Name: ${data.fullName.trim()}`,
        `Mobile Number: ${data.mobile.trim()}`,
      ];

      if (data.businessName && data.businessName.trim()) {
        lines.push(`Business Name: ${data.businessName.trim()}`);
      }

      lines.push(`Service Required: ${data.serviceRequired}`);

      if (data.city && data.city.trim()) {
        lines.push(`City: ${data.city.trim()}`);
      }

      if (data.businessType && data.businessType.trim()) {
        lines.push(`Business Type: ${data.businessType.trim()}`);
      }

      if (data.additionalDetails && data.additionalDetails.trim()) {
        lines.push(`Additional Requirements: ${data.additionalDetails.trim()}`);
      }

      lines.push("Please share the service details, pricing, required documents and expected turnaround time.");
      lines.push("Thank you.");

      const fullMessage = lines.join("\n");
      return `${base}?text=${encodeURIComponent(fullMessage)}`;
    },
    phoneUrl: "tel:+918103819494",
    emailUrl: "mailto:contact@taxoras.online",
  },
  disclaimer: "Taxoras Advisory & Compliance is a professional business accounting and compliance consultancy firm. We provide bookkeeping, data reconciliation, documentation assistance, and statutory compliance coordination. We do not claim government affiliation, nor do we promise zero tax, guaranteed tax savings, or penalty-free filings. All services are rendered strictly based on records provided and applicable Indian laws.",
  trustStatement: "Practical accounting and compliance support for businesses at every stage.",
};
