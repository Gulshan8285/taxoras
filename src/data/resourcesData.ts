import { ResourceArticle } from "@/types";

export const allResources: ResourceArticle[] = [
  {
    "id": "gst-reg-guide",
    "slug": "gst-registration-india-documents-process",
    "title": "GST Registration in India: Documents, Eligibility & Process Guide",
    "category": "GST Guides",
    "summary": "A detailed roadmap to GST registration for Indian businesses. Learn statutory turnover thresholds, entity-wise document checklists, and common application pitfalls.",
    "readTime": "6 min read",
    "lastReviewed": "October 2026",
    "author": "Compliance Research Desk",
    "officialSource": {
      "title": "Goods and Services Tax Portal",
      "url": "https://www.gst.gov.in"
    },
    "tableOfContents": [
      {
        "id": "who-needs-gst",
        "title": "1. Who Needs Mandatory GST Registration?"
      },
      {
        "id": "turnover-limits",
        "title": "2. Statutory Turnover Thresholds"
      },
      {
        "id": "documents-checklist",
        "title": "3. Required Documents by Entity Type"
      },
      {
        "id": "step-by-step",
        "title": "4. Step-by-Step Portal Filing Process"
      },
      {
        "id": "common-rejections",
        "title": "5. Why Applications Get Rejected"
      }
    ],
    "sections": [
      {
        "id": "who-needs-gst",
        "title": "1. Who Needs Mandatory GST Registration?",
        "paragraphs": [
          "The Goods and Services Tax (GST) is India's comprehensive indirect tax levied on the supply of goods and services. While many businesses register upon crossing revenue thresholds, certain commercial activities mandate registration irrespective of annual turnover.",
          "Mandatory registration applies to businesses making inter-state taxable supplies, casual taxable persons, non-resident taxable persons, businesses liable under Reverse Charge Mechanism (RCM), and individuals selling goods through e-commerce operator platforms like Amazon or Flipkart."
        ],
        "callout": {
          "type": "important",
          "text": "If you supply goods across state borders (inter-state), GST registration is mandatory before the first consignment moves, regardless of whether your revenue is \u20b91,000 or \u20b910 Lakhs."
        }
      },
      {
        "id": "turnover-limits",
        "title": "2. Statutory Turnover Thresholds",
        "paragraphs": [
          "For intra-state suppliers (supplying within the same state), the law provides clear turnover exemptions to protect small enterprises from compliance burdens:",
          "Goods Suppliers: In general category states, businesses whose aggregate annual turnover is up to \u20b940 Lakhs are exempt from mandatory GST registration.",
          "Service Providers: The threshold for service providers (consultants, IT agencies, designers) is \u20b920 Lakhs per financial year.",
          "Special Category States: In states like Manipur, Mizoram, Nagaland, and Tripura, the threshold limit is \u20b910 Lakhs for services and \u20b920 Lakhs for goods."
        ]
      },
      {
        "id": "documents-checklist",
        "title": "3. Required Documents by Entity Type",
        "paragraphs": [
          "Preparing clean, readable documentation in prescribed PDF and JPEG sizes is the key to prompt approval without officer queries (Form GST REG-03):"
        ],
        "bulletPoints": [
          "Sole Proprietorship: PAN card and Aadhaar of the owner, passport photo, electricity bill or property tax receipt for business address, NOC / rent agreement if rented, and cancelled cheque.",
          "Partnership Firm / LLP: Firm PAN, partnership deed / LLP agreement, certificate of registration, partner KYC (PAN & Aadhaar), authorized signatory authorization letter, and premise ownership proofs.",
          "Private Limited Company: Company PAN, Certificate of Incorporation, Memorandum & Articles of Association (MOA/AOA), Board Resolution appointing authorized signatory, and Director KYC documents."
        ]
      },
      {
        "id": "step-by-step",
        "title": "4. Step-by-Step Portal Filing Process",
        "paragraphs": [
          "1. Generate Temporary Reference Number (TRN): Visit gst.gov.in, enter basic entity PAN, mobile, and email to receive OTPs and generate your 15-digit TRN.",
          "2. Complete Part-B of Form GST REG-01: Log in with TRN to input trade name, constitution, business activities, top 5 HSN/SAC codes, and upload address proofs.",
          "3. Aadhaar Authentication: Choose OTP-based Aadhaar authentication for the primary authorized signatory. This significantly speeds up approval and avoids site inspection in standard cases.",
          "4. Application Reference Number (ARN): Upon submission, an ARN is issued to track approval status."
        ]
      },
      {
        "id": "common-rejections",
        "title": "5. Why Applications Get Rejected",
        "paragraphs": [
          "The most common cause of rejection is illegible electricity bills where the consumer number, address, or landlord name is unreadable. Another common issue is mismatch between trade name on rent agreement and PAN card. Ensuring these match before submission saves weeks of delay."
        ]
      }
    ]
  },
  {
    "id": "gstr-1-vs-3b-guide",
    "slug": "understanding-gstr-1-and-gstr-3b",
    "title": "Understanding GSTR-1 and GSTR-3B: Differences, Deadlines & Reconciliations",
    "category": "GST Guides",
    "summary": "Demystifying monthly GST return compliance. Understand why GSTR-1 is your sales declaration, GSTR-3B is your summary tax payment return, and how GSTR-2B ties them together.",
    "readTime": "5 min read",
    "lastReviewed": "October 2026",
    "author": "Indirect Tax Team",
    "officialSource": {
      "title": "GST Return Filing Modules",
      "url": "https://www.gst.gov.in"
    },
    "tableOfContents": [
      {
        "id": "the-two-pillars",
        "title": "1. The Two Pillars of GST Compliance"
      },
      {
        "id": "gstr1-breakdown",
        "title": "2. What is GSTR-1?"
      },
      {
        "id": "gstr3b-breakdown",
        "title": "3. What is GSTR-3B?"
      },
      {
        "id": "gstr2b-link",
        "title": "4. The Crucial Role of GSTR-2B"
      },
      {
        "id": "penalties-late-fees",
        "title": "5. Late Fees & Interest Calculation"
      }
    ],
    "sections": [
      {
        "id": "the-two-pillars",
        "title": "1. The Two Pillars of GST Compliance",
        "paragraphs": [
          "Every regular GST-registered taxpayer in India is required to interact with two primary returns each month: GSTR-1 and GSTR-3B. Conflating these two returns is one of the most common mistakes made by new entrepreneurs.",
          "In simple terms: GSTR-1 tells the government what you sold, while GSTR-3B calculates your net tax payable and facilitates the actual tax payment."
        ]
      },
      {
        "id": "gstr1-breakdown",
        "title": "2. What is GSTR-1?",
        "paragraphs": [
          "GSTR-1 is a detailed statement of all outward supplies (sales) made during the tax period. It includes:",
          "- B2B Invoices: Invoices issued to registered businesses with their GSTIN, HSN codes, and itemized tax rates.",
          "- B2C Large Invoices: Inter-state sales to unregistered consumers exceeding \u20b92.5 Lakhs (or revised limits).",
          "- B2C Small Invoices: Consolidated intra-state and inter-state sales to consumers.",
          "- Credit and Debit Notes issued during the month.",
          "Due Date: Monthly filers must submit GSTR-1 by the 11th of the following month. QRMP filers submit quarterly by the 13th."
        ]
      },
      {
        "id": "gstr3b-breakdown",
        "title": "3. What is GSTR-3B?",
        "paragraphs": [
          "GSTR-3B is a monthly self-declaration summary return. Unlike GSTR-1, you do not upload invoice-level details here. Instead, you declare total taxable sales, eligible Input Tax Credit (ITC), reverse charge liability, and pay net tax dues.",
          "Due Date: Typically the 20th of the following month for monthly filers (or 22nd/24th depending on state for QRMP taxpayers)."
        ]
      },
      {
        "id": "gstr2b-link",
        "title": "4. The Crucial Role of GSTR-2B",
        "paragraphs": [
          "GSTR-2B is an auto-generated, static Input Tax Credit (ITC) statement generated on the 14th of every month. It reflects all purchase invoices uploaded by your suppliers in their respective GSTR-1 returns.",
          "Under Rule 36(4), you cannot claim ITC in your GSTR-3B unless that invoice appears in your official GSTR-2B. Reconciling your purchase book against GSTR-2B before filing GSTR-3B is therefore non-negotiable."
        ],
        "callout": {
          "type": "warning",
          "text": "Claiming ITC not reflected in GSTR-2B results in automated GST DRC-01B notices requiring immediate payment of tax plus 18% interest."
        }
      },
      {
        "id": "penalties-late-fees",
        "title": "5. Late Fees & Interest Calculation",
        "paragraphs": [
          "Delay in filing GSTR-3B attracts a daily statutory late fee (\u20b950/day for tax liability returns, \u20b920/day for NIL returns, subject to statutory maximum caps). Additionally, any unpaid tax liability incurs interest at 18% per annum under Section 50 of the CGST Act."
        ]
      }
    ]
  },
  {
    "id": "what-is-tds-guide",
    "slug": "what-is-tds-and-when-does-it-apply",
    "title": "What is TDS and When Does It Apply? A Practical Guide for Indian Businesses",
    "category": "TDS and Taxation",
    "summary": "A comprehensive primer on Tax Deducted at Source (TDS). Learn key sections (194C, 194J, 194I), deposit cutoffs, challan ITNS 281, and TRACES compliance.",
    "readTime": "5 min read",
    "lastReviewed": "October 2026",
    "author": "Direct Tax Advisory",
    "officialSource": {
      "title": "TRACES - TDS CPC Portal",
      "url": "https://www.tdscpc.gov.in"
    },
    "tableOfContents": [
      {
        "id": "concept",
        "title": "1. What is Tax Deducted at Source?"
      },
      {
        "id": "key-sections",
        "title": "2. Key Business TDS Sections"
      },
      {
        "id": "deposit-schedule",
        "title": "3. Payment Deadlines & Challan 281"
      },
      {
        "id": "penalties",
        "title": "4. Consequences of Non-Deduction or Non-Payment"
      }
    ],
    "sections": [
      {
        "id": "concept",
        "title": "1. What is Tax Deducted at Source?",
        "paragraphs": [
          "Tax Deducted at Source (TDS) is a mechanism introduced by the Income Tax Department to collect tax directly at the origin of income. When a payer makes certain payments (like professional fees, rent, or contractor payments) exceeding statutory thresholds, they must deduct a prescribed percentage and deposit it with the Central Government on behalf of the recipient.",
          "The recipient can claim this credit against their annual income tax liability through Form 26AS."
        ]
      },
      {
        "id": "key-sections",
        "title": "2. Key Business TDS Sections",
        "paragraphs": [
          "Businesses operating in India routinely encounter these four critical sections:",
          "- Section 194C (Contractors & Sub-contractors): 1% deduction for payments to individual/HUF contractors, 2% for corporate contractors. Threshold: Single bill >\u20b930,000 or aggregate >\u20b91,00,000 annually.",
          "- Section 194J (Professional / Technical Fees): 10% for professional services (legal, medical, architectural, accounting); 2% for technical fees and call center operators. Threshold: >\u20b930,000 annually.",
          "- Section 194I (Rent): 10% on land, building, or furniture rent (>\u20b92,40,000 annually); 2% on plant and machinery hire.",
          "- Section 194H (Commission & Brokerage): 5% on commission payments exceeding \u20b915,000 annually."
        ]
      },
      {
        "id": "deposit-schedule",
        "title": "3. Payment Deadlines & Challan 281",
        "paragraphs": [
          "All TDS deducted in a calendar month must be deposited by the 7th of the following month (e.g., tax deducted on July 20th must be deposited by August 7th). An exception is made for March deductions, which can be deposited up to April 30th.",
          "Deposits are made using Challan ITNS 281 on the official Income Tax e-filing portal (e-Pay Tax)."
        ]
      },
      {
        "id": "penalties",
        "title": "4. Consequences of Non-Deduction or Non-Payment",
        "paragraphs": [
          "1. Interest Liability: Failure to deduct attracts 1% interest per month from the date deductible. Failure to deposit after deduction attracts 1.5% interest per month under Section 201(1A).",
          "2. Expense Disallowance: Under Section 40(a)(ia), 30% of the expenditure paid to a resident is disallowed as a business deduction in your income tax calculation if TDS was not deducted or paid, directly increasing your taxable business profit."
        ]
      }
    ]
  },
  {
    "id": "itr-preparation-guide",
    "slug": "how-to-prepare-for-income-tax-return-filing",
    "title": "How to Prepare for Income Tax Return (ITR) Filing: Step-by-Step Checklist",
    "category": "Income Tax",
    "summary": "Get your finances in order before the July 31st and October 31st tax deadlines. How to read Form 26AS and AIS, choose between Old and New regimes, and avoid scrutiny notices.",
    "readTime": "6 min read",
    "lastReviewed": "October 2026",
    "author": "Tax Advisory Group",
    "officialSource": {
      "title": "Income Tax Department e-Filing",
      "url": "https://www.incometax.gov.in"
    },
    "tableOfContents": [
      {
        "id": "key-documents",
        "title": "1. Essential Documents Checklist"
      },
      {
        "id": "ais-importance",
        "title": "2. Why the Annual Information Statement (AIS) Matters"
      },
      {
        "id": "old-vs-new",
        "title": "3. Old vs New Tax Regime Decision"
      },
      {
        "id": "presumptive-tax",
        "title": "4. Section 44AD / 44ADA for Small Businesses"
      }
    ],
    "sections": [
      {
        "id": "key-documents",
        "title": "1. Essential Documents Checklist",
        "paragraphs": [
          "Preparing for your annual return filing begins with gathering core financial trails:",
          "- Form 16 / 16A certificates issued by employers and deductors.",
          "- Complete bank statements for all savings, current, and overdraft accounts held during the financial year.",
          "- Capital gains statements from your stockbroker (Zerodha, Groww, etc.) and mutual fund RTAs.",
          "- Interest certificates from banks for Fixed Deposits and savings accounts."
        ]
      },
      {
        "id": "ais-importance",
        "title": "2. Why the Annual Information Statement (AIS) Matters",
        "paragraphs": [
          "Today, the Income Tax Department tracks virtually every financial transaction through the AIS and Taxpayer Information Summary (TIS). Stock purchases, high-value credit card payments, dividend credits, mutual fund sales, and property purchases are automatically logged.",
          "Before submitting any return, your draft income figures must be reconciled against the AIS to ensure zero omissions."
        ]
      },
      {
        "id": "old-vs-new",
        "title": "3. Old vs New Tax Regime Decision",
        "paragraphs": [
          "Under Section 115BAC, the New Tax Regime is the default regime in India, offering lower progressive tax slab rates but removing most deductions (80C, 80D, HRA, home loan interest on self-occupied property).",
          "If you have substantial eligible deductions exceeding \u20b93.75 - \u20b94 Lakhs, the Old Regime may still yield lower tax. A mathematical comparison should always be computed prior to filing."
        ]
      },
      {
        "id": "presumptive-tax",
        "title": "4. Section 44AD / 44ADA for Small Businesses",
        "paragraphs": [
          "For small proprietary traders and professionals, the presumptive taxation scheme provides major relief:",
          "- Section 44AD: Allows eligible businesses with turnover up to \u20b92 Crores (\u20b93 Crores with >=95% digital receipts) to declare 6% (digital) or 8% (cash) of turnover as taxable profit without audit.",
          "- Section 44ADA: Allows professionals (IT, consultants, doctors, lawyers) with gross receipts up to \u20b950 Lakhs (\u20b975 Lakhs with digital receipts) to declare 50% of receipts as profit."
        ]
      }
    ]
  },
  {
    "id": "bank-rec-guide",
    "slug": "bank-reconciliation-explained-small-businesses",
    "title": "Bank Reconciliation Explained: Why Small Businesses Need Monthly BRS",
    "category": "Bookkeeping and Accounting",
    "summary": "Why the balance in your accounting books rarely equals your actual bank statement balance, and how a monthly Bank Reconciliation Statement protects your cash flow.",
    "readTime": "4 min read",
    "lastReviewed": "October 2026",
    "author": "Audit & Bookkeeping Practice",
    "tableOfContents": [
      {
        "id": "what-is-brs",
        "title": "1. What is a Bank Reconciliation Statement?"
      },
      {
        "id": "common-causes",
        "title": "2. Common Causes of Discrepancies"
      },
      {
        "id": "risks-neglect",
        "title": "3. The Hidden Dangers of Skipping Reconciliation"
      },
      {
        "id": "best-practices",
        "title": "4. Recommended Monthly Routine"
      }
    ],
    "sections": [
      {
        "id": "what-is-brs",
        "title": "1. What is a Bank Reconciliation Statement?",
        "paragraphs": [
          "A Bank Reconciliation Statement (BRS) is a schedule that compares the bank balance shown in a company's ledger (cash book) with the balance reported on the official bank statement on a specific date, explaining every rupee of variance."
        ]
      },
      {
        "id": "common-causes",
        "title": "2. Common Causes of Discrepancies",
        "paragraphs": [
          "Variances usually stem from two sources: Timing differences and Unrecorded items:",
          "- Timing differences: Cheques issued to suppliers that have not yet been presented for clearing at the bank.",
          "- Unrecorded bank items: Automated ECS debit payments, loan EMIs, bank service charges, merchant gateway discount fees (MDR), and direct NEFT/RTGS customer receipts."
        ]
      },
      {
        "id": "risks-neglect",
        "title": "3. The Hidden Dangers of Skipping Reconciliation",
        "paragraphs": [
          "Failing to reconcile monthly often leads to bounced cheques due to false assumptions about available funds, undetected fraudulent bank charges, distorted profit figures on the balance sheet, and severe audit delays during tax finalization."
        ]
      },
      {
        "id": "best-practices",
        "title": "4. Recommended Monthly Routine",
        "paragraphs": [
          "Always perform BRS within the first 5 working days following the end of each month. Post adjusting journal entries for bank charges and interest before locking monthly financials."
        ]
      }
    ]
  },
  {
    "id": "debtors-creditors-guide",
    "slug": "debtors-and-creditors-practical-guide",
    "title": "Debtors and Creditors Reconciliation: A Practical Guide for Cash Flow",
    "category": "Small Business Finance",
    "summary": "Master trade receivables and payables. How periodic ledger statement matching prevents customer disputes, recovers trapped cash, and ensures MSME compliance.",
    "readTime": "5 min read",
    "lastReviewed": "October 2026",
    "author": "Commercial Accounting Team",
    "tableOfContents": [
      {
        "id": "importance",
        "title": "1. Why Party Ledger Reconciliations Matter"
      },
      {
        "id": "anatomy-dispute",
        "title": "2. Anatomy of a Vendor/Customer Variance"
      },
      {
        "id": "msme-rule",
        "title": "3. The Section 43B(h) MSME 45-Day Payment Mandate"
      },
      {
        "id": "action-steps",
        "title": "4. Implementing a Quarterly Confirmation Process"
      }
    ],
    "sections": [
      {
        "id": "importance",
        "title": "1. Why Party Ledger Reconciliations Matter",
        "paragraphs": [
          "For any trading or B2B enterprise, cash is locked in trade receivables (debtors) and owed to trade payables (creditors). If your books show customer 'A' owes \u20b95,00,000, but customer 'A' believes they only owe \u20b93,50,000, your working capital is in jeopardy."
        ]
      },
      {
        "id": "anatomy-dispute",
        "title": "2. Anatomy of a Vendor/Customer Variance",
        "paragraphs": [
          "Differences arise from unrecorded debit notes for damaged goods, uncommunicated cash discounts, TDS deducted by customers but not credited in books, or invoices lost in transit."
        ]
      },
      {
        "id": "msme-rule",
        "title": "3. The Section 43B(h) MSME 45-Day Payment Mandate",
        "paragraphs": [
          "Under Indian tax law, any payment due to a registered Micro or Small Enterprise must be settled within the agreed timeline (up to 45 days). If unpaid by March 31st, the entire deduction is disallowed in the buyer's tax calculation until actual payment is made."
        ],
        "callout": {
          "type": "important",
          "text": "Regular creditor reconciliation ensures no registered MSME invoice is accidentally delayed past 45 days, preventing severe income tax disallowances."
        }
      },
      {
        "id": "action-steps",
        "title": "4. Implementing a Quarterly Confirmation Process",
        "paragraphs": [
          "Send formal balance confirmation emails to your top 20 vendors and customers at least twice a year. Resolve variances immediately rather than waiting for year-end audit."
        ]
      }
    ]
  },
  {
    "id": "balance-sheet-guide",
    "slug": "what-is-a-balance-sheet-guide",
    "title": "What is a Balance Sheet? Reading Financial Statements for Indian MSMEs",
    "category": "Small Business Finance",
    "summary": "Learn how to read and interpret your company's balance sheet and profit & loss statement. Understand assets, liabilities, working capital, and key solvency ratios.",
    "readTime": "5 min read",
    "lastReviewed": "October 2026",
    "author": "Financial Advisory Desk",
    "tableOfContents": [
      {
        "id": "definition",
        "title": "1. The Anatomy of a Balance Sheet"
      },
      {
        "id": "pnl-vs-bs",
        "title": "2. Profit & Loss vs Balance Sheet"
      },
      {
        "id": "key-ratios",
        "title": "3. Three Ratios Every Business Owner Must Track"
      },
      {
        "id": "bank-lending",
        "title": "4. What Bankers Look For"
      }
    ],
    "sections": [
      {
        "id": "definition",
        "title": "1. The Anatomy of a Balance Sheet",
        "paragraphs": [
          "A Balance Sheet provides a financial snapshot of what a business owns (Assets) and what it owes (Liabilities) at a specific point in time (traditionally March 31st in India).",
          "The fundamental equation is: Assets = Liabilities + Owner's Capital (Equity)."
        ]
      },
      {
        "id": "pnl-vs-bs",
        "title": "2. Profit & Loss vs Balance Sheet",
        "paragraphs": [
          "The Profit & Loss account shows business performance over a period of time (sales minus expenses = net profit). The Balance Sheet accumulates historical results, showing the net wealth and financial health built over years."
        ]
      },
      {
        "id": "key-ratios",
        "title": "3. Three Ratios Every Business Owner Must Track",
        "paragraphs": [
          "- Current Ratio: Current Assets divided by Current Liabilities. A ratio above 1.33 is considered healthy by banks for working capital.",
          "- Debt-Equity Ratio: Total borrowed funds divided by net worth. Lower ratios indicate greater financial stability.",
          "- Net Profit Margin: Net profit divided by turnover, showing real bottom-line yield."
        ]
      },
      {
        "id": "bank-lending",
        "title": "4. What Bankers Look For",
        "paragraphs": [
          "When evaluating loan or CC/OD limit requests, lenders examine debt service coverage ratios (DSCR), inventory turnover cycles, and consistent net worth growth. Transparent, well-maintained books are the first prerequisite for approval."
        ]
      }
    ]
  },
  {
    "id": "udyam-guide",
    "slug": "udyam-registration-eligibility-checklist",
    "title": "Udyam Registration: Eligibility, Information Required & Benefits",
    "category": "MSME and Udyam",
    "summary": "Everything you need to know about getting your MSME Udyam certificate. Official eligibility rules, priority lending benefits, and government fee facts.",
    "readTime": "4 min read",
    "lastReviewed": "October 2026",
    "author": "Business Registration Desk",
    "officialSource": {
      "title": "Ministry of MSME Udyam Portal",
      "url": "https://udyamregistration.gov.in"
    },
    "tableOfContents": [
      {
        "id": "udyam-intro",
        "title": "1. What is Udyam Registration?"
      },
      {
        "id": "brackets",
        "title": "2. Micro, Small & Medium Classifications"
      },
      {
        "id": "key-benefits",
        "title": "3. Prime Benefits of Udyam Certification"
      },
      {
        "id": "free-gov-fee",
        "title": "4. Beware of Fake Government Fees"
      }
    ],
    "sections": [
      {
        "id": "udyam-intro",
        "title": "1. What is Udyam Registration?",
        "paragraphs": [
          "Udyam Registration is the official digital identity issued by the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India. It replaces the erstwhile Udyog Aadhaar and EM-II schemes."
        ]
      },
      {
        "id": "brackets",
        "title": "2. Micro, Small & Medium Classifications",
        "paragraphs": [
          "- Micro Enterprise: Investment in plant & machinery <= \u20b91 Crore AND turnover <= \u20b95 Crores.",
          "- Small Enterprise: Investment <= \u20b910 Crores AND turnover <= \u20b950 Crores.",
          "- Medium Enterprise: Investment <= \u20b950 Crores AND turnover <= \u20b9250 Crores."
        ]
      },
      {
        "id": "key-benefits",
        "title": "3. Prime Benefits of Udyam Certification",
        "paragraphs": [
          "- Priority Sector Lending: Concessional interest rates on business loans and overdraft limits.",
          "- Delayed Payment Protection: Statutory recourse through MSME Samadhaan for payments overdue past 45 days.",
          "- Government Tender Privileges: Exemption from Earnest Money Deposit (EMD) and purchase preferences in public procurement.",
          "- Subsidy Schemes: Concessions on patent and trademark registration fees."
        ]
      },
      {
        "id": "free-gov-fee",
        "title": "4. Beware of Fake Government Fees",
        "paragraphs": [
          "The official portal udyamregistration.gov.in does NOT charge any government registration fee. Beware of deceptive private websites masquerading as government portals demanding thousands of rupees as official fees."
        ],
        "callout": {
          "type": "tip",
          "text": "Professional firms like Taxoras charge a modest consultancy fee for data verification, NIC classification, and filing assistance, but never charge a fake government fee."
        }
      }
    ]
  },
  {
    "id": "daily-bookkeeping-guide",
    "slug": "why-daily-bookkeeping-matters",
    "title": "Why Daily Bookkeeping Matters: Avoiding End-of-Year Financial Chaos",
    "category": "Bookkeeping and Accounting",
    "summary": "Why scrambling for bills in March costs businesses thousands of rupees in lost deductions and penalty fees. How disciplined bookkeeping protects profitability.",
    "readTime": "4 min read",
    "lastReviewed": "October 2026",
    "author": "Accounting Operations Desk",
    "tableOfContents": [
      {
        "id": "the-march-panic",
        "title": "1. The March Panic Phenomenon"
      },
      {
        "id": "benefits-regularity",
        "title": "2. Five Advantages of Ongoing Accounting"
      },
      {
        "id": "digital-flow",
        "title": "3. Creating a Simple Digital Invoice Protocol"
      }
    ],
    "sections": [
      {
        "id": "the-march-panic",
        "title": "1. The March Panic Phenomenon",
        "paragraphs": [
          "Every year in March, thousands of business owners spend sleepless nights searching through WhatsApp chats, glove compartments, and cluttered desk drawers to locate lost vendor receipts. By then, valuable expense deductions are permanently lost."
        ]
      },
      {
        "id": "benefits-regularity",
        "title": "2. Five Advantages of Ongoing Accounting",
        "paragraphs": [
          "1. 100% Tax Deductions: Every legitimate business expense is recorded with supporting proof.",
          "2. Faster Receivables: Clear customer ledgers prevent payment disputes and aged bad debts.",
          "3. Stress-Free Return Filing: Monthly GST and quarterly TDS become routine 15-minute approvals rather than high-stress fire drills.",
          "4. Real Profit Visibility: You know your exact monthly profit and gross margins, enabling smart hiring and inventory decisions."
        ]
      },
      {
        "id": "digital-flow",
        "title": "3. Creating a Simple Digital Invoice Protocol",
        "paragraphs": [
          "Modern cloud accounting makes physical paper filing obsolete. Establishing a single shared email or mobile folder where bills are snapped and uploaded immediately ensures your accounts stay updated effortlessly."
        ]
      }
    ]
  },
  {
    "id": "common-mistakes-guide",
    "slug": "common-accounting-record-keeping-mistakes",
    "title": "10 Common Accounting & Tax Record-Keeping Mistakes Small Businesses Make",
    "category": "Compliance Calendar",
    "summary": "A practical audit checklist highlighting the top 10 recording errors\u2014from mixing personal expenses with business accounts to missing TDS cutoffs.",
    "readTime": "6 min read",
    "lastReviewed": "October 2026",
    "author": "Senior Tax Auditor",
    "tableOfContents": [
      {
        "id": "top-mistakes",
        "title": "1. The Top 10 Compliance Blunders"
      },
      {
        "id": "corrective-actions",
        "title": "2. Action Steps to Safeguard Your Entity"
      }
    ],
    "sections": [
      {
        "id": "top-mistakes",
        "title": "1. The Top 10 Compliance Blunders",
        "paragraphs": [
          "1. Mingling Personal and Business Funds: Paying personal grocery or vacation bills from the business current account.",
          "2. Claiming ITC without GSTR-2B Verification: Guessing input tax credits rather than verifying supplier filing.",
          "3. Missing the 7th of the Month TDS Cutoff: Incurring 1.5% monthly interest and risking 30% expense disallowance.",
          "4. Misclassifying Capital Assets as Expenses: Booking laptops or machinery as office stationery.",
          "5. Ignoring Negative Cash Balances: Indicating unrecorded cash receipts and drawing immediate audit scrutiny.",
          "6. Unreconciled Bank Balances: Letting mysterious gateway deductions accumulate unchecked.",
          "7. Overlooking the 45-Day MSME Payment Rule: Triggering tax disallowance under Section 43B(h).",
          "8. Late Filing of NIL Returns: Letting daily late fees accumulate on dormant GST registrations.",
          "9. Neglecting Annual Information Statement (AIS) Disclosures: Leading to automated Section 139(9) defective return notices.",
          "10. Disregarding Formal Invoicing Standards: Missing mandatory HSN codes or supplier GST numbers on bills."
        ]
      },
      {
        "id": "corrective-actions",
        "title": "2. Action Steps to Safeguard Your Entity",
        "paragraphs": [
          "Schedule a quarterly health check with your accounting consultant. Address discrepancies as they happen rather than waiting for tax authorities to issue audit notices."
        ]
      }
    ]
  }
];

export function getResourceBySlug(slug: string): ResourceArticle | undefined {
  return allResources.find((r) => r.slug === slug);
}

export function getResourcesByCategory(category: string): ResourceArticle[] {
  return allResources.filter((r) => r.category === category);
}
