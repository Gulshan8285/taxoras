import { AudienceSegment } from "@/types";

export const allAudiences: AudienceSegment[] = [
  {
    "id": "startups",
    "title": "Startups & New Ventures",
    "badge": "Early Stage & Funded",
    "description": "Set up your compliance foundation correctly from day one. Get registered for GST, obtain Udyam recognition, and establish clean digital bookkeeping.",
    "icon": "Rocket",
    "relevantServices": [
      "GST Registration",
      "MSME / Udyam Registration",
      "Day-to-Day Accounting",
      "TDS Payment Assistance"
    ],
    "commonChallenges": [
      "Navigating GST registration for shared co-working spaces",
      "Establishing proper chart of accounts for SaaS or investor metrics",
      "Managing TDS on contractor payouts and cloud software subscriptions"
    ],
    "suggestedPackage": "Startup Launch Compliance Bundle"
  },
  {
    "id": "smes",
    "title": "Small & Medium Enterprises",
    "badge": "Established Businesses",
    "description": "Streamline monthly return filings, reconcile vendor input tax credits against GSTR-2B, and receive accurate monthly balance sheet summaries.",
    "icon": "Briefcase",
    "relevantServices": [
      "GST Return Filing",
      "TDS Return Filing",
      "Bank Reconciliation",
      "Balance Sheet & Financial Statements"
    ],
    "commonChallenges": [
      "Vendor ITC mismatches in GSTR-2B hurting working capital",
      "Managing compliance with MSME 45-day payment rules under Section 43B(h)",
      "Coordinating quarterly TDS returns and Form 16A generation"
    ],
    "suggestedPackage": "Complete Monthly Business Retainer"
  },
  {
    "id": "retail-traders",
    "title": "Retail Shops & Traders",
    "badge": "Wholesale & Counter Sales",
    "description": "Keep daily sales entries, cash books, inventory purchase bills, and monthly GST return filings completely organized.",
    "icon": "Store",
    "relevantServices": [
      "GST Return Filing",
      "Day-to-Day Accounting",
      "Debtors & Creditors Reconciliation",
      "Bank Reconciliation"
    ],
    "commonChallenges": [
      "Balancing high cash vs UPI / POS card transactions",
      "Matching wholesale supplier statements and debit/credit notes",
      "Timely filing to avoid compounding daily late fees"
    ],
    "suggestedPackage": "Trader Bookkeeping & GST Support"
  },
  {
    "id": "ecommerce",
    "title": "E-Commerce Sellers",
    "badge": "Amazon, Flipkart & Shopify",
    "description": "Reconcile marketplace settlements, commission invoices, TCS credits under Section 52, and inter-state GST sales reports.",
    "icon": "ShoppingBag",
    "relevantServices": [
      "GST Return Filing",
      "Bank Reconciliation",
      "Day-to-Day Accounting",
      "Income Tax Return Filing"
    ],
    "commonChallenges": [
      "Reconciling Amazon/Flipkart remittance reports against bank credits",
      "Claiming GST TCS credits deposited by marketplace operators",
      "Handling return logistics and credit note reporting in GSTR-1"
    ],
    "suggestedPackage": "E-Commerce Multi-Channel Accounting"
  },
  {
    "id": "freelancers",
    "title": "Freelancers & Independent Professionals",
    "badge": "Individual Experts",
    "description": "Simple, tax-efficient compliance. Leverage Section 44ADA presumptive taxation, track TDS credits in 26AS, and claim eligible tax refunds.",
    "icon": "Laptop",
    "relevantServices": [
      "Income Tax Return Filing",
      "GST Registration",
      "GST Return Filing",
      "TDS Payment Assistance"
    ],
    "commonChallenges": [
      "Understanding whether GST applies to foreign freelance export revenue (LUT)",
      "Maximizing tax savings legally using Section 44ADA (50% presumptive profit)",
      "Reconciling foreign remittance FIRC and domestic client TDS"
    ],
    "suggestedPackage": "Professional Tax & Return Package"
  },
  {
    "id": "consultants",
    "title": "Consultants & Agency Owners",
    "badge": "Service Providers",
    "description": "Structured invoicing, GST output tax management, monthly payroll TDS coordination, and quarterly financial position review.",
    "icon": "Sparkles",
    "relevantServices": [
      "Day-to-Day Accounting",
      "GST Return Filing",
      "TDS Return Filing",
      "Balance Sheet & Financial Statements"
    ],
    "commonChallenges": [
      "Managing 18% GST invoices and milestone-based project billings",
      "Quarterly TDS on subcontractor payments (Section 194J/194C)",
      "Keeping client ledger aging updated to speed up receivables"
    ],
    "suggestedPackage": "Agency Compliance & Bookkeeping"
  },
  {
    "id": "manufacturers",
    "title": "Manufacturers & Distributors",
    "badge": "Industrial & Supply Chain",
    "description": "Track raw material purchases, e-Way bills, multi-tier vendor credits, debtor aging analysis, and year-end inventory valuation.",
    "icon": "Factory",
    "relevantServices": [
      "Debtors & Creditors Reconciliation",
      "Bank Reconciliation",
      "Balance Sheet & Financial Statements",
      "GST Return Filing"
    ],
    "commonChallenges": [
      "Large debtor ledgers requiring structured aging and payment follow-ups",
      "Tracking supplier advance payments vs delivery receipts",
      "Preparing CMA data and audited financial schedules for bank limits"
    ],
    "suggestedPackage": "Industrial Ledger & Compliance Retainer"
  },
  {
    "id": "growing-companies",
    "title": "Growing Companies",
    "badge": "Scaling Teams",
    "description": "Transition smoothly from makeshift spreadsheets to systematic accounting ledgers, timely tax payments, and audit-ready records.",
    "icon": "TrendingUp",
    "relevantServices": [
      "Day-to-Day Accounting",
      "Balance Sheet & Financial Statements",
      "TDS Return Filing",
      "GST Return Filing"
    ],
    "commonChallenges": [
      "Overwhelmed in-house teams missing compliance cutoffs",
      "Preparing for formal statutory audit or private equity due diligence",
      "Implementing consistent financial checks and balances"
    ],
    "suggestedPackage": "Full-Service Outsourced Finance Dept"
  }
];

export function getAudienceById(id: string): AudienceSegment | undefined {
  return allAudiences.find((a) => a.id === id);
}
