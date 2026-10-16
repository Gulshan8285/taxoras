export interface IndustryItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
}

export const allIndustries: IndustryItem[] = [
  {
    "id": "ecommerce",
    "title": "E-Commerce & D2C Brands",
    "badge": "Amazon, Flipkart, Shopify & Quick Commerce",
    "description": "Specialized accounting for multi-channel digital commerce. We reconcile complex marketplace settlement reports, reverse shipping adjustments, credit notes, and GST TCS under Section 52.",
    "icon": "ShoppingBag",
    "challenges": [
      "Reconciling gross customer sales against net bank remittances after commission deductions",
      "Claiming monthly TCS (Tax Collected at Source) credit deposited by e-commerce operators",
      "Tracking inventory returns and managing interstate e-way bills"
    ],
    "solutions": [
      "Marketplace payment gateway settlement reconciliation",
      "Automated summary posting in sales ledgers",
      "Monthly GSTR-1 B2C/B2B return compilation and TCS credit claiming in GSTR-3B"
    ]
  },
  {
    "id": "retail-traders",
    "title": "Retail Shops & Supermarkets",
    "badge": "High-Volume Counter Sales",
    "description": "Organized bookkeeping and GST filing for neighborhood supermarkets, electronics stores, clothing boutiques, and wholesale traders.",
    "icon": "Store",
    "challenges": [
      "Managing high daily cash receipts alongside multiple UPI and POS card terminal settlements",
      "Matching vendor purchase bills against GSTR-2B to avoid blocked tax credits",
      "Handling seasonal stock purchases and supplier credit notes"
    ],
    "solutions": [
      "Daily or weekly cash book and bank ledger balancing",
      "Line-by-line vendor purchase reconciliation",
      "Timely monthly GSTR-1 and GSTR-3B return submission before the 20th"
    ]
  },
  {
    "id": "it-software",
    "title": "IT Services & Software Exporters",
    "badge": "SaaS, Tech Agencies & Digital Exports",
    "description": "Tax-efficient compliance for software development companies, digital marketing agencies, and remote tech consultants serving global clients.",
    "icon": "Laptop",
    "challenges": [
      "Understanding zero-rated export procedures and annual Letter of Undertaking (LUT)",
      "Managing Foreign Inward Remittance Certificates (FIRC) and bank realization advices",
      "Withholding TDS on cloud servers (AWS, Google Cloud) and foreign contractors"
    ],
    "solutions": [
      "Annual Form GST RFD-11 (LUT) filing for zero-tax export billing",
      "Monthly bookkeeping and inward remittance reconciliation",
      "TDS 26Q and Form 15CA/CB coordination for overseas payouts"
    ]
  },
  {
    "id": "manufacturing",
    "title": "Manufacturing & Industrial Units",
    "badge": "Engineering, Textiles & Fabrication",
    "description": "Comprehensive ledger accounting and financial reporting for manufacturing plants, fabrication units, and packaging enterprises.",
    "icon": "Factory",
    "challenges": [
      "Managing large trade debtor ledgers and structured payment follow-ups",
      "Compliance with MSME Section 43B(h) 45-day payment statutory deadlines",
      "Preparing CMA data and audited financial schedules for bank working capital limits"
    ],
    "solutions": [
      "Debtors and Creditors Aging Analysis (0-30, 31-60, 61-90, >90 days)",
      "Registered MSME vendor due-date tracking",
      "Trial balance compilation, depreciation charts, and Balance Sheet schedules"
    ]
  },
  {
    "id": "healthcare",
    "title": "Healthcare & Medical Clinics",
    "badge": "Doctors, Diagnostics & Nursing Homes",
    "description": "Precise tax handling for medical practitioners, diagnostic labs, and clinic chains balancing exempt healthcare services with taxable commercial rentals.",
    "icon": "ShieldCheck",
    "challenges": [
      "Differentiating between exempt healthcare services and taxable pharmacy sales under GST",
      "Tracking TDS under Section 194J on visiting consultant doctor honorariums",
      "Opting between regular accounting and Section 44ADA presumptive taxation"
    ],
    "solutions": [
      "Exempt vs. taxable supply revenue segregation",
      "Quarterly Form 26Q TDS return filing for medical staff",
      "Personal and clinical ITR filing optimization"
    ]
  },
  {
    "id": "freelancers",
    "title": "Freelancers & Independent Professionals",
    "badge": "Consultants, Designers, Lawyers & Creators",
    "description": "Hassle-free tax filing and bookkeeping for solo professionals and independent consultants seeking maximum lawful tax savings.",
    "icon": "Sparkles",
    "challenges": [
      "Navigating the 50% presumptive profit rule under Section 44ADA",
      "Reconciling 10% TDS deductions in Form 26AS to claim refunds",
      "Determining when mandatory GST registration applies to freelance income"
    ],
    "solutions": [
      "Section 44ADA computation for eligible professionals with turnover up to \u20b975 Lakhs",
      "Annual ITR-4 filing with complete tax refund tracking",
      "Voluntary or mandatory GST registration guidance"
    ]
  }
];

export function getIndustryById(id: string): IndustryItem | undefined {
  return allIndustries.find((ind) => ind.id === id);
}
