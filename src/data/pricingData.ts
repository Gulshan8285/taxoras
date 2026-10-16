export interface PricingPackage {
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
}

export interface ServicePricingConfig {
  serviceId: string;
  serviceName: string;
  packages: PricingPackage[];
}

export const servicePricingDatabase: ServicePricingConfig[] = [
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
        "governmentCharges": "\u20b90 (Government levies zero registration fee)",
        "transactionLimits": "Single Trade Vertical / Single State",
        "turnaroundEstimate": "3 \u2013 5 working days (subject to officer processing)",
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
        "governmentCharges": "\u20b90",
        "transactionLimits": "Partnership / LLP / Private Limited Entity",
        "turnaroundEstimate": "4 \u2013 7 working days",
        "inclusions": [
          "Entity documentation & Board resolution review",
          "Partner / Director KYC verification",
          "Full portal submission with authorized signatory mapping",
          "Drafting reply to Form GST REG-03 clarification query if issued",
          "Certificate download & login credential handover"
        ],
        "exclusions": [
          "Monthly GSTR-1/3B filing"
        ],
        "bestFitCustomer": "Newly registered companies, LLPs, and partnership firms."
      },
      {
        "tier": "Premium",
        "name": "Multi-Branch / Special Category",
        "billingType": "One-Time Fixed Fee",
        "basePrice": 3499,
        "applicableTaxes": "18% GST extra",
        "governmentCharges": "\u20b90",
        "transactionLimits": "Multiple business verticals or branch offices",
        "turnaroundEstimate": "5 \u2013 8 working days",
        "inclusions": [
          "All Standard features",
          "Additional place of business (APOB) mapping",
          "Composition scheme vs Regular advisory",
          "First month compliance advisory call"
        ],
        "exclusions": [
          "Subsequent monthly filings"
        ],
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
        "exclusions": [
          "Annual GSTR-9 filing",
          "Prior backlog filings"
        ],
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
        "exclusions": [
          "GSTR-9 annual return"
        ],
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
        "exclusions": [
          "Department scrutiny representation"
        ],
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
        "exclusions": [
          "Inventory tracking",
          "Debtor follow-up calls"
        ],
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
        "exclusions": [
          "Physical stock audit"
        ],
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
        "exclusions": [
          "Statutory audit sign-off"
        ],
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
        "turnaroundEstimate": "24 \u2013 48 hours",
        "inclusions": [
          "Form 16 and 26AS verification",
          "Old vs New Tax Regime tax comparison",
          "Return preparation & portal upload",
          "Aadhaar OTP e-verification guidance",
          "ITR-V acknowledgement delivery"
        ],
        "exclusions": [
          "Capital gains transactions",
          "Business income"
        ],
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
        "turnaroundEstimate": "2 \u2013 3 working days",
        "inclusions": [
          "All Basic features",
          "Section 44AD (6%/8%) or 44ADA (50%) profit computation",
          "AIS and TIS reconciliation to avoid scrutiny",
          "Advance tax & self-assessment tax challan calculation",
          "ITR-4 submission and acknowledgement archive"
        ],
        "exclusions": [
          "Audit report under Section 44AB"
        ],
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
        "turnaroundEstimate": "3 \u2013 5 working days",
        "inclusions": [
          "Balance Sheet and P&L data mapping into ITR-3",
          "Stock trading capital gains calculation (LTCG / STCG)",
          "Depreciation schedule alignment",
          "Foreign asset or high-value transaction disclosures",
          "Filing & post-filing refund status check"
        ],
        "exclusions": [
          "Tax audit representation before assessing officer"
        ],
        "bestFitCustomer": "Proprietors maintaining regular books, active stock traders, and partners."
      }
    ]
  }
];

export function getPricingForService(serviceId: string): ServicePricingConfig | undefined {
  return servicePricingDatabase.find((sp) => sp.serviceId === serviceId);
}
