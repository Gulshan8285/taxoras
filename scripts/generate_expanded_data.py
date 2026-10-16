import json

# Locations Data
locations = [
  {
    "id": "delhi",
    "city": "Delhi NCR",
    "state": "Delhi",
    "tier": "Tier 1",
    "badge": "National Capital Region Hub",
    "description": "Comprehensive accounting and GST compliance for traders in Chandni Chowk, corporate agencies in Connaught Place, South Delhi startups, and Okhla manufacturers.",
    "serviceDelivery": "Remote Digital Intake & Local Consultation by Appointment",
    "popularServices": ["GST Return Filing", "Day-to-Day Accounting", "TDS Return Filing", "Balance Sheet & Financial Statements"],
    "commercialEcosystem": "High concentration of inter-state wholesale distributors, e-commerce brands, and corporate professional services requiring stringent monthly GSTR-2B reconciliations.",
    "statePortalReference": {
      "name": "Delhi Department of Trade and Taxes",
      "url": "https://dvat.gov.in"
    },
    "localFaqs": [
      {
        "question": "Can I obtain a Delhi GST registration for a co-working space address?",
        "answer": "Yes. Delhi GST authorities permit registration on shared co-working spaces provided an official Rent Agreement, NOC from the co-working operator, and electricity bill are submitted with proper desk allocation."
      },
      {
        "question": "How quickly can my Delhi business start monthly accounting?",
        "answer": "We onboard Delhi NCR businesses within 24 to 48 hours following document checklist receipt and secure drive folder setup."
      }
    ]
  },
  {
    "id": "mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "tier": "Tier 1",
    "badge": "Financial Capital of India",
    "description": "End-to-end bookkeeping, GST filing, and financial statement compilation for Mumbai businesses in BKC, Lower Parel, Andheri, and Thane industrial belts.",
    "serviceDelivery": "100% Digital Remote Onboarding & Pan-India Desk",
    "popularServices": ["GST Registration", "TDS Payment Assistance", "Bank Reconciliation", "Income Tax Return Filing"],
    "commercialEcosystem": "Dynamic trading, financial advisory, media production houses, and export firms requiring precise TDS deductions (194J/194C) and multi-bank BRS.",
    "statePortalReference": {
      "name": "Maharashtra Goods and Services Tax Department",
      "url": "https://mahagst.gov.in"
    },
    "localFaqs": [
      {
        "question": "Do you handle Maharashtra Professional Tax (PT) coordination alongside GST?",
        "answer": "Yes, for Mumbai clients enrolled in monthly accounting retainers, we assist with PTRC / PTEC registration coordination and monthly challan calculation."
      }
    ]
  },
  {
    "id": "bengaluru",
    "city": "Bengaluru",
    "state": "Karnataka",
    "tier": "Tier 1",
    "badge": "Startup & Tech Capital",
    "description": "Tailored compliance for SaaS startups, product tech firms, freelance developers, and agencies in Koramangala, Indiranagar, HSR Layout, and Whitefield.",
    "serviceDelivery": "100% Digital Cloud-First Accounting",
    "popularServices": ["TDS Return Filing", "GST Return Filing", "MSME / Udyam Registration", "Income Tax Return"],
    "commercialEcosystem": "SaaS exports with LUT (Letter of Undertaking), foreign inward remittance certificates (FIRC), and contractor withholding compliance.",
    "statePortalReference": {
      "name": "Karnataka Commercial Taxes Department",
      "url": "https://karnatakatax.gov.in"
    },
    "localFaqs": [
      {
        "question": "How do software startups in Bengaluru export services with zero GST?",
        "answer": "We assist in filing Form GST RFD-11 (Letter of Undertaking / LUT) annually, enabling tech companies to export software and services without upfront payment of IGST."
      }
    ]
  },
  {
    "id": "jaipur",
    "city": "Jaipur",
    "state": "Rajasthan",
    "tier": "Tier 2",
    "badge": "Handicrafts, Gems & Trading Hub",
    "description": "Affordable accounting, GST return filing, and debtor-creditor reconciliations for Jaipur exporters, jewelry makers, textile traders in Johari Bazar, and Sitapura manufacturers.",
    "serviceDelivery": "Digital Intake with Dedicated Regional Support",
    "popularServices": ["Day-to-Day Accounting", "GST Return Filing", "Debtors & Creditors Reconciliation", "Bank Reconciliation"],
    "commercialEcosystem": "Extensive artisanal export networks, gem polishing units, and retail shops requiring disciplined cash/bank reconciliations and vendor credit matching.",
    "statePortalReference": {
      "name": "Commercial Taxes Department, Rajasthan",
      "url": "https://rajtax.gov.in"
    },
    "localFaqs": [
      {
        "question": "Can Jaipur textile and handicraft traders get monthly bookkeeping on a budget?",
        "answer": "Yes. Our Tier 2 small business retainer packages start at affordable fixed fees covering monthly sales/purchase entries, GSTR-1, and GSTR-3B."
      }
    ]
  },
  {
    "id": "lucknow",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "tier": "Tier 2",
    "badge": "Commerce & Distribution Center",
    "description": "Professional GST registration, ITR filing, and MSME support for retailers in Hazratganj, wholesale distributors in Transport Nagar, and expanding UP enterprises.",
    "serviceDelivery": "Remote Digital Intake & Phone Consultation",
    "popularServices": ["Income Tax Return", "GST Registration", "MSME / Udyam Registration", "Daily Accounting"],
    "commercialEcosystem": "High density of retail enterprises, educational institutions, construction vendors, and government contractors requiring quarterly TDS compliance.",
    "statePortalReference": {
      "name": "Commercial Tax Department, Uttar Pradesh",
      "url": "https://comtax.up.nic.in"
    },
    "localFaqs": [
      {
        "question": "Do you assist Lucknow contractors with government tender MSME certificates?",
        "answer": "Yes, we help register under Udyam to avail EMD exemptions and preferential tender quotas for UP government contracts."
      }
    ]
  },
  {
    "id": "ahmedabad",
    "city": "Ahmedabad",
    "state": "Gujarat",
    "tier": "Tier 1",
    "badge": "Industrial & Textile Capital",
    "description": "Structured bookkeeping, debtor aging schedules, and GST e-invoicing compliance for chemical, textile, and wholesale traders across Ahmedabad and Surat.",
    "serviceDelivery": "100% Digital Accounting Support",
    "popularServices": ["Debtors & Creditors Reconciliation", "GST Return Filing", "Balance Sheet", "Bank Reconciliation"],
    "commercialEcosystem": "Manufacturing clusters with heavy B2B transaction volumes requiring high-efficiency invoice matching and MSME 45-day payment tracking.",
    "statePortalReference": {
      "name": "Gujarat Commercial Tax Department",
      "url": "https://commercialtax.gujarat.gov.in"
    },
    "localFaqs": [
      {
        "question": "Can you handle high invoice volumes for Gujarat manufacturing units?",
        "answer": "Yes. We support custom packages handling 500 to 2,000+ monthly vouchers with automated Tally/Excel ledger imports."
      }
    ]
  }
]

# Service-Location Specific Landing Pages
service_locations = [
  {
    "citySlug": "delhi",
    "serviceSlug": "gst-return-filing",
    "title": "GST Return Filing Services in Delhi NCR",
    "headline": "Accurate, Timely GSTR-1 & GSTR-3B Filing for Delhi Businesses",
    "description": "Avoid daily late fees and input tax credit mismatches. TaxVeda helps Delhi traders, consultants, and distributors file monthly GST returns on time.",
    "localContext": "Delhi has over 1 million registered GST taxpayers. With active departmental scrutiny on GSTR-2B mismatches and DRC-01B notices, our monthly 2B reconciliation protects your working capital."
  },
  {
    "citySlug": "jaipur",
    "serviceSlug": "daily-accounting",
    "title": "Day-to-Day Accounting & Bookkeeping Services in Jaipur",
    "headline": "Organized Bookkeeping & Ledgers for Jaipur Traders and Exporters",
    "description": "Keep your sales vouchers, expense bills, and bank accounts balanced without hiring an expensive in-house accountant in Jaipur.",
    "localContext": "From handicraft exporters in Sitapura to jewelers in MI Road, our digital bookkeeping system keeps ledgers audit-ready with monthly trial balance summaries."
  },
  {
    "citySlug": "lucknow",
    "serviceSlug": "income-tax-return",
    "title": "Income Tax Return (ITR) Filing Assistance in Lucknow",
    "headline": "Individual & Business Income Tax Return Filing in Lucknow, UP",
    "description": "Get your Annual Information Statement (AIS) verified, choose the right tax regime, and claim eligible tax refunds with zero hassle.",
    "localContext": "Serving professionals, small shop owners, and civil contractors in Lucknow with ITR-1 through ITR-4 presumptive business filings under Section 44AD."
  },
  {
    "citySlug": "mumbai",
    "serviceSlug": "gst-registration",
    "title": "GST Registration Assistance in Mumbai & Thane",
    "headline": "Fast, Compliant GST Registration for Mumbai Businesses & Startups",
    "description": "Get your GSTIN application prepared, premises documents verified, and Aadhaar authentication completed smoothly.",
    "localContext": "Whether you operate from a commercial office in Nariman Point or a registered home office in suburbs, we guide you on Mumbai jurisdiction ward selection."
  },
  {
    "citySlug": "bengaluru",
    "serviceSlug": "tds-return-filing",
    "title": "Quarterly TDS Return Filing Services in Bengaluru",
    "headline": "Quarterly Form 24Q & 26Q TDS Filing for Bengaluru Tech & Service Firms",
    "description": "Zero format errors with FVU file validation. Avoid ₹200/day Section 234E late fees and issue Form 16/16A smoothly to payees.",
    "localContext": "Designed for Bengaluru startups and IT agencies making regular contractor, professional, and salary payouts subject to withholding taxes."
  }
]

# Industries Data
industries = [
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
      "Section 44ADA computation for eligible professionals with turnover up to ₹75 Lakhs",
      "Annual ITR-4 filing with complete tax refund tracking",
      "Voluntary or mandatory GST registration guidance"
    ]
  }
]

# Configurable Pricing Database (All 10 services, 3 tiers)
pricing_db = [
  {
    "serviceId": "gst-registration",
    "serviceName": "GST Registration",
    "packages": [
      {
        "tier": "Basic",
        "name": "Proprietorship Registration",
        "billingType": "One-Time Fixed Fee",
        "basePrice": 999,
        "applicableTaxes": "18% GST extra",
        "governmentCharges": "₹0 (Government levies zero registration fee)",
        "transactionLimits": "Single Trade Vertical / Single State",
        "turnaroundEstimate": "3 – 5 working days (subject to officer processing)",
        "inclusions": [
          "Document verification checklist",
          "GST REG-01 preparation & portal submission",
          "Aadhaar OTP authentication coordination",
          "GSTIN Registration Certificate download"
        ],
        "exclusions": [
          "Subsequent monthly return filing",
          "Physical premise visit coordination"
        ],
        "bestFitCustomer": "New sole proprietors, retail shop owners, and individual service providers."
      },
      {
        "tier": "Standard",
        "name": "Firm / LLP / Company",
        "billingType": "One-Time Fixed Fee",
        "basePrice": 1999,
        "applicableTaxes": "18% GST extra",
        "governmentCharges": "₹0",
        "transactionLimits": "Partnership / LLP / Private Limited Entity",
        "turnaroundEstimate": "4 – 7 working days",
        "inclusions": [
          "Entity documentation & Board resolution review",
          "Partner / Director KYC verification",
          "Full portal submission with authorized signatory mapping",
          "Drafting reply to Form GST REG-03 clarification query if issued",
          "Certificate download & login credential handover"
        ],
        "exclusions": ["Monthly GSTR-1/3B filing"],
        "bestFitCustomer": "Newly registered companies, LLPs, and partnership firms."
      },
      {
        "tier": "Premium",
        "name": "Multi-Branch / Special Category",
        "billingType": "One-Time Fixed Fee",
        "basePrice": 3499,
        "applicableTaxes": "18% GST extra",
        "governmentCharges": "₹0",
        "transactionLimits": "Multiple business verticals or branch offices",
        "turnaroundEstimate": "5 – 8 working days",
        "inclusions": [
          "All Standard features",
          "Additional place of business (APOB) mapping",
          "Composition scheme vs Regular advisory",
          "First month compliance advisory call"
        ],
        "exclusions": ["Subsequent monthly filings"],
        "bestFitCustomer": "Growing businesses setting up state-wide warehouses or retail branches."
      }
    ]
  },
  {
    "serviceId": "gst-return-filing",
    "serviceName": "GST Return Filing",
    "packages": [
      {
        "tier": "Basic",
        "name": "Micro Turnover (Up to 50 Invoices)",
        "billingType": "Monthly Retainer",
        "basePrice": 799,
        "applicableTaxes": "18% GST extra",
        "governmentCharges": "Client pays actual net cash tax dues via official challan",
        "transactionLimits": "Up to 50 sales & purchase invoices per month",
        "turnaroundEstimate": "Monthly filing completed 3 days prior to official deadline",
        "inclusions": [
          "Monthly GSTR-1 outward sales return preparation",
          "GSTR-3B summary tax return preparation",
          "Download of monthly GSTR-2B statement",
          "Challan PMT-06 generation for cash tax liability",
          "Filing acknowledgement receipt"
        ],
        "exclusions": ["Annual GSTR-9 filing", "Prior backlog filings"],
        "bestFitCustomer": "Small retail shops, independent consultants, and low-volume traders."
      },
      {
        "tier": "Standard",
        "name": "Growing Business (Up to 200 Invoices)",
        "billingType": "Monthly Retainer",
        "basePrice": 1499,
        "applicableTaxes": "18% GST extra",
        "governmentCharges": "Client pays actual tax dues directly",
        "transactionLimits": "Up to 200 invoices & 2 bank accounts",
        "turnaroundEstimate": "Filing completed 4 days before deadline",
        "inclusions": [
          "All Basic features",
          "Detailed purchase register vs GSTR-2B ITC matching",
          "Identification of missing vendor credits for follow-up",
          "Reverse charge (RCM) applicability review",
          "Dedicated compliance advisor"
        ],
        "exclusions": ["GSTR-9 annual return"],
        "bestFitCustomer": "Active wholesale traders, manufacturing units, and service agencies."
      },
      {
        "tier": "Premium",
        "name": "High Volume (Up to 500 Invoices)",
        "billingType": "Monthly Retainer",
        "basePrice": 2799,
        "applicableTaxes": "18% GST extra",
        "governmentCharges": "Client pays actual tax dues directly",
        "transactionLimits": "Up to 500 invoices & multiple branches",
        "turnaroundEstimate": "Filing completed 5 days before deadline",
        "inclusions": [
          "All Standard features",
          "E-Way bill and e-Invoicing reconciliation",
          "DRC-01B automated notice prevention checks",
          "Monthly ITC health summary report",
          "Priority weekend filing support"
        ],
        "exclusions": ["Department scrutiny representation"],
        "bestFitCustomer": "Multi-channel e-commerce sellers and major distributors."
      }
    ]
  },
  {
    "serviceId": "daily-accounting",
    "serviceName": "Day-to-Day Accounting",
    "packages": [
      {
        "tier": "Basic",
        "name": "Essential Bookkeeping",
        "billingType": "Monthly Retainer",
        "basePrice": 1499,
        "applicableTaxes": "18% GST extra",
        "governmentCharges": "None",
        "transactionLimits": "Up to 100 transactions / month, 1 Bank Account",
        "turnaroundEstimate": "Books balanced by the 10th of following month",
        "inclusions": [
          "Sales and purchase voucher entry",
          "Bank statement transaction matching",
          "Expense categorization",
          "Monthly Trial Balance generation"
        ],
        "exclusions": ["Inventory tracking", "Debtor follow-up calls"],
        "bestFitCustomer": "Service providers, consultants, and small proprietary traders."
      },
      {
        "tier": "Standard",
        "name": "Commercial Accounting",
        "billingType": "Monthly Retainer",
        "basePrice": 2999,
        "applicableTaxes": "18% GST extra",
        "governmentCharges": "None",
        "transactionLimits": "Up to 300 transactions / month, 2 Bank Accounts",
        "turnaroundEstimate": "Weekly ledger updates & monthly reporting",
        "inclusions": [
          "All Basic features",
          "Customer & Supplier ledger maintenance",
          "Monthly Bank Reconciliation Statement (BRS)",
          "Monthly Profit & Loss summary overview",
          "Coordination with GST and TDS filing teams"
        ],
        "exclusions": ["Physical stock audit"],
        "bestFitCustomer": "Established retail stores, trading firms, and growing startups."
      },
      {
        "tier": "Premium",
        "name": "Full Outsourced Accounts Dept",
        "billingType": "Monthly Retainer",
        "basePrice": 5999,
        "applicableTaxes": "18% GST extra",
        "governmentCharges": "None",
        "transactionLimits": "Up to 800 transactions / month, Multiple Accounts",
        "turnaroundEstimate": "Daily or twice-weekly updates",
        "inclusions": [
          "All Standard features",
          "Receivables aging analysis (0-30, 31-60, 61-90 days)",
          "MSME Section 43B(h) payment schedule tracking",
          "Quarterly balance sheet review call",
          "Dedicated senior accountant assignment"
        ],
        "exclusions": ["Statutory audit sign-off"],
        "bestFitCustomer": "Mid-sized companies, manufacturers, and corporate businesses."
      }
    ]
  },
  {
    "serviceId": "income-tax-return",
    "serviceName": "Income Tax Return Filing",
    "packages": [
      {
        "tier": "Basic",
        "name": "Salaried / Pensioners (ITR-1)",
        "billingType": "Annual / Per Return",
        "basePrice": 699,
        "applicableTaxes": "18% GST extra",
        "governmentCharges": "Actual tax payable calculated on e-filing portal",
        "transactionLimits": "Single Form 16, Interest Income, 1 House Property",
        "turnaroundEstimate": "24 – 48 hours",
        "inclusions": [
          "Form 16 and 26AS verification",
          "Old vs New Tax Regime tax comparison",
          "Return preparation & portal upload",
          "Aadhaar OTP e-verification guidance",
          "ITR-V acknowledgement delivery"
        ],
        "exclusions": ["Capital gains transactions", "Business income"],
        "bestFitCustomer": "Salaried employees and individuals with simple income streams."
      },
      {
        "tier": "Standard",
        "name": "Presumptive Business / Freelance (ITR-4)",
        "billingType": "Annual / Per Return",
        "basePrice": 1799,
        "applicableTaxes": "18% GST extra",
        "governmentCharges": "Actual tax payable calculated on e-filing portal",
        "transactionLimits": "Section 44AD / 44ADA eligible business or profession",
        "turnaroundEstimate": "2 – 3 working days",
        "inclusions": [
          "All Basic features",
          "Section 44AD (6%/8%) or 44ADA (50%) profit computation",
          "AIS and TIS reconciliation to avoid scrutiny",
          "Advance tax & self-assessment tax challan calculation",
          "ITR-4 submission and acknowledgement archive"
        ],
        "exclusions": ["Audit report under Section 44AB"],
        "bestFitCustomer": "Small retail shopkeepers, freelancers, developers, and agency owners."
      },
      {
        "tier": "Premium",
        "name": "Business with Capital Gains / Full Books (ITR-3)",
        "billingType": "Annual / Per Return",
        "basePrice": 3499,
        "applicableTaxes": "18% GST extra",
        "governmentCharges": "Actual tax payable calculated on e-filing portal",
        "transactionLimits": "Multiple business income heads, equity/crypto capital gains",
        "turnaroundEstimate": "3 – 5 working days",
        "inclusions": [
          "Balance Sheet and P&L data mapping into ITR-3",
          "Stock trading capital gains calculation (LTCG / STCG)",
          "Depreciation schedule alignment",
          "Foreign asset or high-value transaction disclosures",
          "Filing & post-filing refund status check"
        ],
        "exclusions": ["Tax audit representation before assessing officer"],
        "bestFitCustomer": "Proprietors maintaining regular books, active stock traders, and partners."
      }
    ]
  }
]

# Write locationsData.ts
locations_ts = f"""export interface LocationItem {{
  id: string;
  city: string;
  state: string;
  tier: string;
  badge: string;
  description: string;
  serviceDelivery: string;
  popularServices: string[];
  commercialEcosystem: string;
  statePortalReference: {{
    name: string;
    url: string;
  }};
  localFaqs: {{
    question: string;
    answer: string;
  }}[];
}}

export interface ServiceLocationPage {{
  citySlug: string;
  serviceSlug: string;
  title: string;
  headline: string;
  description: string;
  localContext: string;
}}

export const allLocations: LocationItem[] = {json.dumps(locations, indent=2)};
export const allServiceLocations: ServiceLocationPage[] = {json.dumps(service_locations, indent=2)};

export function getLocationById(id: string): LocationItem | undefined {{
  return allLocations.find((loc) => loc.id === id);
}}

export function getServiceLocation(citySlug: string, serviceSlug: string): ServiceLocationPage | undefined {{
  return allServiceLocations.find((sl) => sl.citySlug === citySlug && sl.serviceSlug === serviceSlug);
}}
"""

with open("src/data/locationsData.ts", "w") as f:
    f.write(locations_ts)

# Write industriesData.ts
industries_ts = f"""export interface IndustryItem {{
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
}}

export const allIndustries: IndustryItem[] = {json.dumps(industries, indent=2)};

export function getIndustryById(id: string): IndustryItem | undefined {{
  return allIndustries.find((ind) => ind.id === id);
}}
"""

with open("src/data/industriesData.ts", "w") as f:
    f.write(industries_ts)

# Write pricingData.ts
pricing_ts = f"""export interface PricingPackage {{
  tier: "Basic" | "Standard" | "Premium";
  name: string;
  billingType: string;
  basePrice: number;
  applicableTaxes: string;
  governmentCharges: string;
  transactionLimits: string;
  turnaroundEstimate: string;
  inclusions: string[];
  exclusions: string[];
  bestFitCustomer: string;
}}

export interface ServicePricingConfig {{
  serviceId: string;
  serviceName: string;
  packages: PricingPackage[];
}}

export const servicePricingDatabase: ServicePricingConfig[] = {json.dumps(pricing_db, indent=2)};

export function getPricingForService(serviceId: string): ServicePricingConfig | undefined {{
  return servicePricingDatabase.find((sp) => sp.serviceId === serviceId);
}}
"""

with open("src/data/pricingData.ts", "w") as f:
    f.write(pricing_ts)

print("Generated locationsData.ts, industriesData.ts, and pricingData.ts successfully!")
