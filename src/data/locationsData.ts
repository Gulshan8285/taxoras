export interface LocationItem {
  id: string;
  city: string;
  state: string;
  tier: string;
  badge: string;
  description: string;
  serviceDelivery: string;
  popularServices: string[];
  commercialEcosystem: string;
  statePortalReference: {
    name: string;
    url: string;
  };
  localFaqs: {
    question: string;
    answer: string;
  }[];
}

export interface ServiceLocationPage {
  citySlug: string;
  serviceSlug: string;
  title: string;
  headline: string;
  description: string;
  localContext: string;
}

export const allLocations: LocationItem[] = [
  {
    "id": "delhi",
    "city": "Delhi NCR",
    "state": "Delhi",
    "tier": "Tier 1",
    "badge": "National Capital Region Hub",
    "description": "Comprehensive accounting and GST compliance for traders in Chandni Chowk, corporate agencies in Connaught Place, South Delhi startups, and Okhla manufacturers.",
    "serviceDelivery": "Remote Digital Intake & Local Consultation by Appointment",
    "popularServices": [
      "GST Return Filing",
      "Day-to-Day Accounting",
      "TDS Return Filing",
      "Balance Sheet & Financial Statements"
    ],
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
    "popularServices": [
      "GST Registration",
      "TDS Payment Assistance",
      "Bank Reconciliation",
      "Income Tax Return Filing"
    ],
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
    "popularServices": [
      "TDS Return Filing",
      "GST Return Filing",
      "MSME / Udyam Registration",
      "Income Tax Return"
    ],
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
    "popularServices": [
      "Day-to-Day Accounting",
      "GST Return Filing",
      "Debtors & Creditors Reconciliation",
      "Bank Reconciliation"
    ],
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
    "popularServices": [
      "Income Tax Return",
      "GST Registration",
      "MSME / Udyam Registration",
      "Daily Accounting"
    ],
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
    "popularServices": [
      "Debtors & Creditors Reconciliation",
      "GST Return Filing",
      "Balance Sheet",
      "Bank Reconciliation"
    ],
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
];
export const allServiceLocations: ServiceLocationPage[] = [
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
    "description": "Zero format errors with FVU file validation. Avoid \u20b9200/day Section 234E late fees and issue Form 16/16A smoothly to payees.",
    "localContext": "Designed for Bengaluru startups and IT agencies making regular contractor, professional, and salary payouts subject to withholding taxes."
  }
];

export function getLocationById(id: string): LocationItem | undefined {
  return allLocations.find((loc) => loc.id === id);
}

export function getServiceLocation(citySlug: string, serviceSlug: string): ServiceLocationPage | undefined {
  return allServiceLocations.find((sl) => sl.citySlug === citySlug && sl.serviceSlug === serviceSlug);
}
