"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackWhatsAppClick(serviceName?: string, location?: string, ctaText?: string) {
  if (typeof window === "undefined") return;

  const eventData = {
    event: "whatsapp_enquiry_click",
    service_name: serviceName || "General Consultation",
    location: location || "India",
    cta_text: ctaText || "Chat on WhatsApp",
    timestamp: new Date().toISOString(),
  };

  if (window.gtag) {
    window.gtag("event", "whatsapp_click", eventData);
    window.gtag("event", "generate_lead", {
      event_category: "Engagement",
      event_label: serviceName || "General",
      value: 1,
      currency: "INR",
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push(eventData);
  }
}

export function trackCallClick(location?: string) {
  if (typeof window === "undefined") return;

  const eventData = {
    event: "phone_call_click",
    phone_number: "+918810381949",
    location: location || "India",
    timestamp: new Date().toISOString(),
  };

  if (window.gtag) {
    window.gtag("event", "phone_call_click", eventData);
  }

  if (window.dataLayer) {
    window.dataLayer.push(eventData);
  }
}

export function trackFormSubmission(serviceName: string) {
  if (typeof window === "undefined") return;

  const eventData = {
    event: "enquiry_form_submitted",
    service_name: serviceName,
    timestamp: new Date().toISOString(),
  };

  if (window.gtag) {
    window.gtag("event", "generate_lead", {
      event_category: "Form Submission",
      event_label: serviceName,
      value: 1,
      currency: "INR",
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push(eventData);
  }
}
