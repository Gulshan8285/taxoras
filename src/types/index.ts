export type ServiceCategory = 
  | "gst" 
  | "tds" 
  | "accounting" 
  | "registrations" 
  | "financials";

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  category: ServiceCategory;
  categoryLabel: string;
  shortDescription: string;
  ctaText: string;
  icon: string;
  benefits: string[];
  heroBadge?: string;
  whoNeeds: string[];
  commonProblems: string[];
  whatIncluded: string[];
  requiredDocuments: {
    category: string;
    items: string[];
  }[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  deadlinesNotice: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  pricingApproach: {
    model: string;
    description: string;
    factors: string[];
    inclusions: string[];
    exclusions: string[];
  };
  disclaimer: string;
  relatedSlugs: string[];
}

export type LeadStatus =
  | "New"
  | "Contacted"
  | "Requirements Received"
  | "Quote Sent"
  | "In Progress"
  | "Completed"
  | "Closed";

export interface LeadNote {
  id: string;
  text: string;
  author: string;
  createdAt: string;
}

export interface CustomerEnquiry {
  id: string;
  fullName: string;
  businessName?: string;
  mobile: string;
  email?: string;
  city: string;
  businessType: string;
  serviceRequired: string;
  transactionVolume?: string;
  preferredContact: "WhatsApp" | "Phone Call" | "Email";
  additionalDetails?: string;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
  notes: LeadNote[];
  assignedTo?: string;
}

export interface AudienceSegment {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: string;
  relevantServices: string[];
  commonChallenges: string[];
  suggestedPackage: string;
}

export type ResourceCategory =
  | "GST Guides"
  | "TDS and Taxation"
  | "Income Tax"
  | "Bookkeeping and Accounting"
  | "MSME and Udyam"
  | "Small Business Finance"
  | "Compliance Calendar";

export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  category: ResourceCategory;
  summary: string;
  readTime: string;
  lastReviewed: string;
  author: string;
  officialSource?: {
    title: string;
    url: string;
  };
  tableOfContents?: { id: string; title: string }[];
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    bulletPoints?: string[];
    callout?: {
      type: "note" | "tip" | "important" | "warning";
      text: string;
    };
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

