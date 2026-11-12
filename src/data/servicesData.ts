import { ServiceItem } from "@/types";

export const allServices: ServiceItem[] = [
  {
    "id": "gst-registration",
    "slug": "gst-registration",
    "title": "GST Registration",
    "shortTitle": "GST Registration",
    "category": "gst",
    "categoryLabel": "GST Services",
    "heroBadge": "New Business & Turnover Thresholds",
    "shortDescription": "Get assistance with GST registration documentation, application preparation, submission and follow-up.",
    "ctaText": "Enquire About GST Registration",
    "icon": "FileCheck2",
    "benefits": [
      "Guidance on required documents based on your business constitution.",
      "Support with application preparation on the official GST portal.",
      "Help understanding GST registration requirements and composition eligibility.",
      "Assistance with application status tracking and clarification responses."
    ],
    "whoNeeds": [
      "Businesses crossing the mandatory turnover threshold (\u20b940 Lakhs for goods / \u20b920 Lakhs for services in general category states).",
      "Inter-state suppliers and e-commerce sellers requiring mandatory registration regardless of turnover.",
      "Startups and newly incorporated entities needing GSTIN for vendor onboarding or opening current accounts.",
      "Voluntary applicants looking to claim Input Tax Credit (ITC) on commercial purchases."
    ],
    "commonProblems": [
      "Document rejection due to unclear address proofs or invalid electricity bills.",
      "Confusion regarding primary vs additional place of business declarations.",
      "Delay in Aadhaar authentication or officer query (Form GST REG-03) notices.",
      "Selecting incorrect HSN/SAC codes or wrong business category during application."
    ],
    "whatIncluded": [
      "Review of applicant entity documents (PAN, identity, address, electricity bill, rent agreement).",
      "Preparation of GST REG-01 application on the GST Common Portal.",
      "Assistance with primary authorized signatory Aadhaar biometric verification coordination.",
      "Drafting replies to officer clarification queries (GST REG-04) if issued.",
      "Delivery of Form GST REG-06 Registration Certificate upon approval."
    ],
    "requiredDocuments": [
      {
        "category": "Proprietorship",
        "items": [
          "PAN Card of the Proprietor",
          "Aadhaar Card of the Proprietor",
          "Passport-sized photograph",
          "Electricity Bill / Property Tax receipt of business premises",
          "Rent Agreement & NOC from landlord (if premises rented)",
          "Cancelled Cheque or Bank Statement showing Name, Account No. & IFSC"
        ]
      },
      {
        "category": "Partnership / LLP / Private Limited",
        "items": [
          "PAN Card of the Entity / Firm",
          "Certificate of Incorporation / Partnership Deed",
          "PAN & Aadhaar of all Partners / Directors",
          "Board Resolution or Letter of Authorization for Signatory",
          "Address proof of registered office (Electricity bill + Rent Deed + NOC)",
          "Bank proof of company/firm"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Document Collection & Review",
        "description": "We share a clear document checklist and verify that names, addresses, and landlord details match official records."
      },
      {
        "step": 2,
        "title": "Drafting & Portal Submission",
        "description": "We prepare Form GST REG-01 with exact business activities, HSN codes, and premises proofs on gst.gov.in."
      },
      {
        "step": 3,
        "title": "Aadhaar Authentication",
        "description": "Facilitating OTP-based Aadhaar verification for the authorized signatory to avoid physical site inspection delays."
      },
      {
        "step": 4,
        "title": "Query Handling & Certificate Download",
        "description": "If the tax officer requests additional clarification, we help draft the response within the 7 working-day deadline, followed by GSTIN issuance."
      }
    ],
    "deadlinesNotice": "GST registration applications can be initiated at any time. Once turnover crosses statutory thresholds, registration must be applied for within 30 days.",
    "faqs": [
      {
        "question": "Is GST registration mandatory for every small business?",
        "answer": "No. For intra-state suppliers of goods, registration is generally mandatory only if annual turnover exceeds \u20b940 Lakhs (\u20b920 Lakhs for services, with lower limits in special category states). However, inter-state supply, e-commerce selling, and reverse charge liability require mandatory registration regardless of turnover."
      },
      {
        "question": "Can I apply for GST voluntarily if turnover is low?",
        "answer": "Yes, voluntary registration is permitted. It allows you to issue GST invoices and claim Input Tax Credit (ITC) on purchases, though you must then comply with regular periodic return filing."
      },
      {
        "question": "How long does it typically take to get a GST number?",
        "answer": "Once submitted with successful Aadhaar authentication, the GST department typically approves applications within 7 to 10 working days, provided no clarification notice (REG-03) is issued by the jurisdiction officer."
      }
    ],
    "pricingApproach": {
      "model": "One-Time Fixed Assistance Fee",
      "description": "Transparent pricing based on entity type (Proprietorship vs Partnership/LLP/Private Limited). Government does not levy a statutory fee for GST registration; consultancy fees cover documentation review, portal filing, and clarification handling.",
      "factors": [
        "Entity constitution",
        "Single vs multiple business verticals",
        "Clarification query resolution"
      ],
      "inclusions": [
        "Document verification checklist",
        "Filing of GST REG-01",
        "Assistance through REG-03 query responses",
        "GSTIN Certificate download"
      ],
      "exclusions": [
        "Subsequent monthly/quarterly GST return filings (billed separately)",
        "Physical verification coordination if officer mandates site visit"
      ]
    },
    "disclaimer": "GST Registration is processed through the official government portal (gst.gov.in). Approval is at the sole discretion of the jurisdictional GST officer. We assist with documentation and filing support.",
    "relatedSlugs": [
      "gst-return-filing",
      "msme-udyam-registration",
      "daily-accounting"
    ]
  },
  {
    "id": "gst-return-filing",
    "slug": "gst-return-filing",
    "title": "GST Return Filing",
    "shortTitle": "GST Return Filing",
    "category": "gst",
    "categoryLabel": "GST Services",
    "heroBadge": "GSTR-1, GSTR-3B & Reconciliations",
    "shortDescription": "Get support with applicable GST return preparation, reconciliation and filing based on your business requirements.",
    "ctaText": "Discuss GST Filing",
    "icon": "Receipt",
    "benefits": [
      "Assistance with applicable returns such as GSTR-1 (Outward Supplies) and GSTR-3B (Summary Return).",
      "Review of available sales and purchase records before submission.",
      "Support identifying data mismatches between purchase register and GSTR-2B.",
      "Filing deadline coordination and advance reminder tracking."
    ],
    "whoNeeds": [
      "Regular GST registered taxpayers who must file monthly or quarterly returns.",
      "Composition scheme dealers filing quarterly CMP-08 statements and annual GSTR-4.",
      "Traders and service providers struggling with GSTR-2B Input Tax Credit (ITC) mismatches.",
      "Businesses needing support clearing backlog return filings."
    ],
    "commonProblems": [
      "Suppliers failing to upload invoices, resulting in blocked ITC in GSTR-2B.",
      "Accumulation of late fees and interest under Section 50 due to missed deadlines.",
      "Discrepancies between e-Way Bills, e-Invoices, and monthly GSTR-1 figures.",
      "Errors in reporting reverse charge liability (RCM) or export zero-rated supplies."
    ],
    "whatIncluded": [
      "Collection and digital organization of monthly outward sales invoices.",
      "Categorization of B2B, B2C, credit notes, and zero-rated transactions.",
      "Download and monthly matching of GSTR-2B with your purchase records.",
      "Computation of tax liability, available ITC, and net cash payment needed.",
      "Preparation and verification of GSTR-1 and GSTR-3B draft returns for client approval.",
      "Filing via OTP / DSC on the official portal and sharing acknowledgement receipt."
    ],
    "requiredDocuments": [
      {
        "category": "Monthly Records Needed",
        "items": [
          "Sales Register / Invoices issued during the tax period",
          "Purchase Register / Invoices received from registered vendors",
          "Credit / Debit Notes issued or received",
          "Bank statement for verifying cash tax payments",
          "Summary of e-Way bills generated (if applicable)"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Data Intake & Invoice Review",
        "description": "You share your sales ledger and purchase invoices by the agreed monthly cutoff date (usually by the 5th of the month)."
      },
      {
        "step": 2,
        "title": "2B Purchase Reconciliation",
        "description": "We download your official GSTR-2B statement and identify matched, missing, or mismatched vendor credits."
      },
      {
        "step": 3,
        "title": "Tax Liability Computation",
        "description": "We calculate available ITC, output tax, and net payable cash in Electronic Cash Ledger, sharing draft figures for your sign-off."
      },
      {
        "step": 4,
        "title": "Filing & Acknowledgement",
        "description": "Returns are uploaded and submitted on gst.gov.in using authorized OTP, followed by filing proof archiving."
      }
    ],
    "deadlinesNotice": "Monthly GSTR-1 is generally due on the 11th; GSTR-3B is due between the 20th and 24th of the following month. QRMP filers have distinct quarterly deadlines.",
    "faqs": [
      {
        "question": "Can I claim ITC on invoices that do not appear in my GSTR-2B?",
        "answer": "Under current GST rules (Rule 36(4)), Input Tax Credit can only be availed if the corresponding supplier has filed their GSTR-1 and the invoice is reflected in your GSTR-2B statement."
      },
      {
        "question": "What happens if a NIL return is not filed on time?",
        "answer": "Even for NIL returns (no sales or purchases), filing is mandatory. Delayed filing attracts a daily statutory late fee under GST law until the return is submitted."
      },
      {
        "question": "Do you assist with Quarterly Return Monthly Payment (QRMP) scheme?",
        "answer": "Yes, we support QRMP eligible businesses with monthly PMT-06 challans and quarterly IFF / GSTR-1 and GSTR-3B filings."
      }
    ],
    "pricingApproach": {
      "model": "Monthly or Quarterly Subscription Package",
      "description": "Retainer-based pricing based on monthly invoice count, turnover, and filing frequency.",
      "factors": [
        "Monthly sales invoice volume",
        "Purchase ledger lines to reconcile against 2B",
        "Single vs multiple GST registrations"
      ],
      "inclusions": [
        "Monthly GSTR-1 preparation",
        "GSTR-3B preparation & filing",
        "2B Reconciliation report",
        "Challan preparation for cash tax"
      ],
      "exclusions": [
        "Annual Return (GSTR-9) and Reconciliation Statement (GSTR-9C) (quoted separately)",
        "Assessment hearing appearances before GST authorities"
      ]
    },
    "disclaimer": "Returns are filed based on records provided by the client. We do not alter underlying accounting records without client authorization.",
    "relatedSlugs": [
      "gst-registration",
      "bank-reconciliation",
      "daily-accounting"
    ]
  },
  {
    "id": "tds-return-filing",
    "slug": "tds-return-filing",
    "title": "TDS Return Filing",
    "shortTitle": "TDS Return Filing",
    "category": "tds",
    "categoryLabel": "TDS & Taxation",
    "heroBadge": "Quarterly 24Q, 26Q & Form 16/16A",
    "shortDescription": "Manage your applicable TDS reporting requirements with organized records and quarterly filing assistance.",
    "ctaText": "Get TDS Filing Support",
    "icon": "FileSpreadsheet",
    "benefits": [
      "Assistance identifying applicable TDS return forms (Form 24Q for salaries, Form 26Q for non-salary vendor payments).",
      "Review of deduction and challan payment records for accuracy.",
      "Support with quarterly return preparation using official e-TDS validation utilities.",
      "Assistance with TDS return-related corrections and PAN mismatch rectifications."
    ],
    "whoNeeds": [
      "Companies, LLPs, and partnership firms making payments subject to withholding tax (salaries, contractor fees, rent, professional charges).",
      "Sole proprietors and individuals subject to tax audit who deduct TDS under Sections 194C, 194J, 194I, etc.",
      "Businesses receiving notices for TDS defaults or late filing fees under Section 234E."
    ],
    "commonProblems": [
      "Late filing fees under Section 234E (\u20b9200 per day of delay).",
      "Incorrect PANs of deductees leading to 20% higher deduction requirements or short-deduction defaults.",
      "Unmatched BSR codes, challan serial numbers, or deposit dates in TRACES.",
      "Delay in issuing Form 16 and 16A certificates to employees and contractors."
    ],
    "whatIncluded": [
      "Compilation of quarterly deductee-wise payment records and applicable section codes.",
      "Verification of challan ITNS 281 details (BSR code, challan date, voucher numbers).",
      "Generation of .txt file and validation through the official File Validation Utility (FVU).",
      "Submission at TIN-FC / Protean portal or through Income Tax e-filing portal.",
      "Assistance downloading Form 16/16A from TRACES after processing."
    ],
    "requiredDocuments": [
      {
        "category": "Quarterly TDS Checklist",
        "items": [
          "TAN (Tax Deduction and Collection Account Number)",
          "Deductee PAN master with legal names",
          "Summary of payments made under sections (194C, 194J, 194I, 194A, 192, etc.)",
          "Paid Challan 281 receipts with BSR code, tender date, and challan sequence numbers",
          "Previous quarter provisional receipt numbers (PRN) for reference"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Deduction & Challan Reconciliation",
        "description": "We match the total tax deducted in your books against challans deposited in the bank to ensure 100% challan mapping."
      },
      {
        "step": 2,
        "title": "PAN Validation & FVU Check",
        "description": "We check all deductee PANs for active status and run the file through NSDL/Protean FVU to ensure zero format errors."
      },
      {
        "step": 3,
        "title": "Return Upload & Acknowledgement",
        "description": "The validated return file is uploaded to the e-filing portal, generating the official Form 27A provisional receipt."
      },
      {
        "step": 4,
        "title": "TRACES Processing & Certificate Issuance",
        "description": "Once the return is processed on TRACES, we assist in downloading Form 16 / 16A certificates for your payees."
      }
    ],
    "deadlinesNotice": "TDS quarterly returns are due on July 31st (Q1), October 31st (Q2), January 31st (Q3), and May 31st (Q4) of each financial year.",
    "faqs": [
      {
        "question": "What is the penalty for filing a TDS return late?",
        "answer": "Section 234E levies a mandatory late filing fee of \u20b9200 per day of default until the return is filed, capped at the total amount of TDS deductible."
      },
      {
        "question": "Can an incorrect PAN in a filed TDS return be corrected?",
        "answer": "Yes, we assist with filing TDS Correction Statements on TRACES to rectify deductee PANs, challan mismatch codes, and payment amounts."
      },
      {
        "question": "What is Form 26Q vs Form 24Q?",
        "answer": "Form 24Q is filed for tax deducted from salary payments to employees, while Form 26Q is filed for tax deducted on payments made to resident non-employees (like professional fees, contractors, rent, and commission)."
      }
    ],
    "pricingApproach": {
      "model": "Per Quarter / Per Challan-Deductee Band",
      "description": "Transparent pricing structured around the number of deductee records and challans per quarter.",
      "factors": [
        "Number of deductees per quarter",
        "Form 24Q vs 26Q vs 27Q",
        "Regular filing vs correction statement"
      ],
      "inclusions": [
        "Challan verification",
        "Deductee PAN checks",
        "FVU validation",
        "Filing acknowledgement",
        "Form 16/16A generation support"
      ],
      "exclusions": [
        "Payment of actual TDS tax liability to the government",
        "Representation before TDS assessing officers in scrutiny cases"
      ]
    },
    "disclaimer": "Clients are responsible for timely deduction and depositing of tax. Return preparation is based on challans and deductee statements provided.",
    "relatedSlugs": [
      "tds-payment",
      "income-tax-return",
      "daily-accounting"
    ]
  },
  {
    "id": "tds-payment",
    "slug": "tds-payment",
    "title": "TDS Payment Assistance",
    "shortTitle": "TDS Payment Assistance",
    "category": "tds",
    "categoryLabel": "TDS & Taxation",
    "heroBadge": "Challan 281 & Section Calculation",
    "shortDescription": "Get assistance calculating, reviewing and coordinating applicable TDS payments and challan records.",
    "ctaText": "Discuss TDS Payments",
    "icon": "CreditCard",
    "benefits": [
      "Review of monthly deduction records to determine applicable tax liability.",
      "Assistance preparing Challan ITNS 281 on the official e-filing tax portal.",
      "Advance payment deadline reminders before the 7th of every month.",
      "Record keeping, challan ledger maintenance, and payment reconciliation."
    ],
    "whoNeeds": [
      "Business owners needing help calculating accurate TDS amounts under correct sections (e.g. 194C @ 1% / 2%, 194J @ 2% / 10%).",
      "Accounts teams wanting to prevent 1.5% per month interest under Section 201(1A) for late payment.",
      "Startups unfamiliar with e-pay tax portal payment methods and BSR code tracking."
    ],
    "commonProblems": [
      "Deducting tax at incorrect rates (e.g., applying 10% instead of 2% for technical services).",
      "Missing the 7th of the month cutoff, triggering mandatory monthly interest.",
      "Selecting the wrong Assessment Year or Minor Head (200 vs 400) during challan creation.",
      "Misplacing challan counterfoils required for quarterly return filing."
    ],
    "whatIncluded": [
      "Monthly examination of vendor bills, contractor payments, and rent vouchers.",
      "Verification of lower deduction certificates (Section 197) if furnished by deductees.",
      "Calculation of exact TDS dues, interest (if any delay occurred), and correct minor head.",
      "Generation of Challan 281 reference for direct payment via client net banking / UPI.",
      "Verification and archiving of BSR code and Challan Identification Number (CIN)."
    ],
    "requiredDocuments": [
      {
        "category": "Monthly Payment Verification",
        "items": [
          "TAN of the deductor entity",
          "Summary of vendor bills booked or paid during the previous calendar month",
          "PAN details of the payees and nature of expense",
          "Bank proof or net-banking access for final client approval of payment"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Monthly Expense Review",
        "description": "By the 3rd of each month, we review your deduction ledger to identify all reportable payments."
      },
      {
        "step": 2,
        "title": "Rate Verification & Section Mapping",
        "description": "We map each payment to its correct section code (194C, 194J, 194I, 194H, etc.) and applicable tax rate."
      },
      {
        "step": 3,
        "title": "Challan Generation",
        "description": "We generate the draft Challan 281 on the e-filing portal with accurate Assessment Year and major/minor heads."
      },
      {
        "step": 4,
        "title": "Confirmation & CIN Archival",
        "description": "You authorize the debit through your official bank account; we record the CIN for quarterly return reconciliation."
      }
    ],
    "deadlinesNotice": "Monthly TDS must be deposited by the 7th of the following month (except for March deductions, which are due by April 30th).",
    "faqs": [
      {
        "question": "Do you make the tax payment on our behalf?",
        "answer": "No. In accordance with professional standards and client security, we never hold client funds. We prepare the verified challan and payment link, which your authorized signatory completes directly through your business bank account."
      },
      {
        "question": "What is the consequence of late TDS payment?",
        "answer": "Interest is charged at 1.5% per month (or part of a month) from the date of deduction to the date of actual payment under Section 201(1A). Also, the underlying expenditure may be disallowed for income tax purposes under Section 40(a)(ia)."
      },
      {
        "question": "Can TDS be paid after the 7th?",
        "answer": "Yes, but with applicable interest calculated from the date on which tax was deductible until the date of payment."
      }
    ],
    "pricingApproach": {
      "model": "Monthly Retainer or Bundled with TDS Returns",
      "description": "Low-friction monthly assistance, typically bundled with Day-to-Day Accounting or Quarterly TDS filing packages.",
      "factors": [
        "Frequency of vendor payouts",
        "Volume of deduction heads"
      ],
      "inclusions": [
        "Section mapping",
        "Challan drafting",
        "CIN verification"
      ],
      "exclusions": [
        "Actual tax payment amounts"
      ]
    },
    "disclaimer": "Tax liabilities are calculated based on records submitted. Final payment authorization rests solely with the business bank account holder.",
    "relatedSlugs": [
      "tds-return-filing",
      "daily-accounting",
      "income-tax-return"
    ]
  },
  {
    "id": "daily-accounting",
    "slug": "daily-accounting",
    "title": "Day-to-Day Accounting",
    "shortTitle": "Day-to-Day Accounting",
    "category": "accounting",
    "categoryLabel": "Accounting & Reconciliation",
    "heroBadge": "Bookkeeping, Ledgers & Summaries",
    "shortDescription": "Keep your financial transactions organized with regular bookkeeping, ledger maintenance and accounting support.",
    "ctaText": "Organize My Accounts",
    "icon": "BookOpenCheck",
    "benefits": [
      "Recording of daily sales invoices, purchase bills, and vendor vouchers.",
      "Accurate categorization of operating expenses, assets, and liabilities.",
      "Cash and bank transaction entries matched to bank statements.",
      "Up-to-date customer and vendor ledger maintenance.",
      "Monthly financial summaries (Trial Balance, P&L overview, cash flow indicators).",
      "Support organizing digital invoices and supporting documents."
    ],
    "whoNeeds": [
      "Small business owners who want to focus on operations without spending hours entering invoices.",
      "Growing startups needing organized books for investor due diligence or bank loan applications.",
      "Traders and service providers who need accurate ledgers for timely GST and tax compliance."
    ],
    "commonProblems": [
      "Piles of disorganized physical and digital bills leading to missed expense deductions.",
      "Unmatched customer receivables causing cash flow bottlenecks.",
      "Discrepancies discovered at the end of the financial year, causing rush and penalties.",
      "Lack of real-time visibility into whether the business is actually profitable month-to-month."
    ],
    "whatIncluded": [
      "Setup or maintenance of Chart of Accounts tailored to your industry.",
      "Systematic entry of sales, purchases, bank receipts, and payments in Tally / Zoho / Excel.",
      "Vendor and customer ledger reconciliation.",
      "Expense tracking and personal vs business expense segregation.",
      "Monthly trial balance extraction and financial health summary report.",
      "Digital document folder organization for compliance audits."
    ],
    "requiredDocuments": [
      {
        "category": "Bookkeeping Inputs",
        "items": [
          "Sales invoices issued to customers",
          "Vendor purchase bills and expense receipts",
          "Monthly bank account statements in PDF / Excel format",
          "Credit card statements used for business expenses",
          "Loan or EMI amortization statements (if applicable)"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Account Setup & Document Protocol",
        "description": "We establish a secure shared folder or portal protocol where your team drops invoices and bank statements."
      },
      {
        "step": 2,
        "title": "Transaction Entry & Classification",
        "description": "Our accounting team records transactions, mapping each to appropriate revenue, cost of goods, or expense heads."
      },
      {
        "step": 3,
        "title": "Monthly Balancing & Reconciliation",
        "description": "Bank balances, cash in hand, and key vendor/debtor ledgers are balanced against external records."
      },
      {
        "step": 4,
        "title": "Monthly Reporting & Review",
        "description": "You receive an executive summary showing sales, expenses, net margins, and pending compliance deadlines."
      }
    ],
    "deadlinesNotice": "Bookkeeping cycles are structured weekly or monthly based on agreed service tiers. Monthly records are finalized by the 10th of the subsequent month.",
    "faqs": [
      {
        "question": "Which accounting software do you support?",
        "answer": "We work with standard accounting platforms widely used in India, including Tally Prime, Zoho Books, QuickBooks, Busy, and structured cloud spreadsheets."
      },
      {
        "question": "Do we need to send physical paper bills to your office?",
        "answer": "No. We operate a streamlined digital workflow. You can scan or upload PDF/photo invoices via our secure portal or email."
      },
      {
        "question": "Can the bookkeeping frequency be adjusted as my business grows?",
        "answer": "Yes. We offer flexible packages ranging from monthly periodic bookkeeping for low-volume businesses to weekly or daily updates for active trading firms."
      }
    ],
    "pricingApproach": {
      "model": "Monthly Retainer Package",
      "description": "Based on monthly transaction count, number of bank accounts, and reporting complexity.",
      "factors": [
        "Monthly transaction volume (e.g. up to 100, 300, 1000+ vouchers)",
        "Number of bank/credit card accounts",
        "Inventory tracking requirement"
      ],
      "inclusions": [
        "Ledger maintenance",
        "Bank entry recording",
        "Monthly Trial Balance",
        "GST/TDS data coordination"
      ],
      "exclusions": [
        "Statutory audit signatures",
        "Physical stock audit verification"
      ]
    },
    "disclaimer": "Accounting entries are prepared based on invoices, statements, and explanations provided by the client. Client management retains responsibility for the authenticity of commercial transactions.",
    "relatedSlugs": [
      "bank-reconciliation",
      "debtors-creditors-reconciliation",
      "balance-sheet"
    ]
  },
  {
    "id": "msme-udyam-registration",
    "slug": "msme-udyam-registration",
    "title": "MSME / Udyam Registration",
    "shortTitle": "MSME / Udyam Registration",
    "category": "registrations",
    "categoryLabel": "Business Registrations",
    "heroBadge": "Official Udyam Certificate Support",
    "shortDescription": "Get assistance understanding eligibility, preparing information and completing the applicable Udyam registration process.",
    "ctaText": "Enquire About MSME Registration",
    "icon": "Building2",
    "benefits": [
      "Guidance on Micro, Small, and Medium enterprise eligibility criteria (investment and turnover thresholds).",
      "Business information checklist preparation to prevent errors in NIC codes.",
      "Assistance with application preparation and submission on the official portal.",
      "Guidance understanding enterprise registration benefits (collateral-free credit schemes, delayed payment protection)."
    ],
    "whoNeeds": [
      "Proprietors, partnerships, LLPs, and companies wanting formal recognition as an MSME in India.",
      "Businesses applying for bank finance, priority sector lending, or government subsidy schemes.",
      "Enterprises seeking statutory protection under the MSME Act against delayed customer payments (45-day rule)."
    ],
    "commonProblems": [
      "Mistakes in selecting National Industrial Classification (NIC) codes for core activities.",
      "Mismatched Aadhaar / PAN details causing verification failure on the portal.",
      "Confusion regarding calculation of plant & machinery investment vs depreciated cost.",
      "Falling prey to fraudulent private websites charging fake government fees for Udyam."
    ],
    "whatIncluded": [
      "Assessment of enterprise classification (Micro: <\u20b91 Cr Inv / <\u20b95 Cr T.O; Small: <\u20b910 Cr Inv / <\u20b950 Cr T.O; Medium: <\u20b950 Cr Inv / <\u20b9250 Cr T.O).",
      "Selection of accurate NIC codes corresponding to manufacturing or service operations.",
      "Preparation of registration details matching Aadhaar and PAN database records.",
      "Filing assistance on the official Ministry of MSME Udyam portal.",
      "Delivery and explanation of the generated Udyam Registration Certificate."
    ],
    "requiredDocuments": [
      {
        "category": "Udyam Requirements",
        "items": [
          "Aadhaar Number of the Proprietor / Managing Partner / Authorized Director",
          "PAN of the Enterprise (or Proprietor for proprietorship firms)",
          "Bank Account details (Account Number & IFSC Code)",
          "Business address & date of commencement of business",
          "Total number of employees (Male/Female/Others)"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Eligibility Check & Data Review",
        "description": "We review your business investment, turnover, and employee count to verify MSME bracket classification."
      },
      {
        "step": 2,
        "title": "NIC Code Identification",
        "description": "We map your specific commercial activities to the exact 5-digit NIC code used by the Ministry of MSME."
      },
      {
        "step": 3,
        "title": "Portal Submission & OTP Coordination",
        "description": "We prepare the application on udyamregistration.gov.in and coordinate the Aadhaar OTP validation with you."
      },
      {
        "step": 4,
        "title": "Certificate Issuance",
        "description": "We download the official Udyam Certificate featuring the unique permanent identification number and QR code."
      }
    ],
    "deadlinesNotice": "Udyam registration is a permanent registration. Existing businesses should register to avail priority lending and 45-day payment statutory safeguards.",
    "faqs": [
      {
        "question": "Does the government charge a fee for Udyam Registration?",
        "answer": "No. The Government of India provides Udyam registration free of cost on the official portal (udyamregistration.gov.in). Our modest fee covers professional assistance, documentation review, and accurate NIC classification."
      },
      {
        "question": "Is GST mandatory for Udyam Registration?",
        "answer": "As per Ministry guidelines, GSTIN is mandatory for entities eligible for GST registration under GST law. For entities exempted from GST, Udyam can be completed using PAN and Aadhaar."
      },
      {
        "question": "What is the 45-day MSME delayed payment rule?",
        "answer": "Under the MSMED Act and Section 43B(h) of the Income Tax Act, buyers must make payments to registered Micro and Small enterprises within the agreed period (up to 45 days), failing which the expense is disallowed in the buyer tax return until actually paid."
      }
    ],
    "pricingApproach": {
      "model": "One-Time Fixed Assistance Fee",
      "description": "Simple, transparent documentation and filing assistance fee. We never charge hidden government fees.",
      "factors": [
        "Single activity vs multi-location manufacturing enterprise",
        "Aadhaar OTP coordination"
      ],
      "inclusions": [
        "NIC mapping",
        "Portal filing",
        "Udyam Certificate PDF delivery"
      ],
      "exclusions": [
        "Subsequent annual Udyam profile updates"
      ]
    },
    "disclaimer": "Udyam registration is governed by the Ministry of MSME, Government of India. Taxoras is an independent consultancy providing professional preparation support and is not affiliated with the government.",
    "relatedSlugs": [
      "gst-registration",
      "daily-accounting",
      "balance-sheet"
    ]
  },
  {
    "id": "bank-reconciliation",
    "slug": "bank-reconciliation",
    "title": "Bank Reconciliation",
    "shortTitle": "Bank Reconciliation",
    "category": "accounting",
    "categoryLabel": "Accounting & Reconciliation",
    "heroBadge": "Statement vs Ledger Matching",
    "shortDescription": "Match your bank statement with accounting records to identify missing entries, duplicate transactions and unexplained differences.",
    "ctaText": "Reconcile My Bank Accounts",
    "icon": "Scale",
    "benefits": [
      "Systematic matching of bank statement lines against internal cash book and accounting ledgers.",
      "Identification of unmatched debit or credit entries, uncleared cheques, and bank charges.",
      "Detection of duplicate entries, unauthorized charges, or omitted vendor payments.",
      "Clear Bank Reconciliation Statements (BRS) with supporting audit schedules.",
      "Assistance maintaining clean, tamper-evident financial records."
    ],
    "whoNeeds": [
      "Businesses with high daily transaction volumes across multiple current accounts and payment gateways.",
      "Companies preparing for statutory audit, tax audit, or investor due diligence.",
      "Firms where the bank balance on the balance sheet does not match the bank statement closing balance."
    ],
    "commonProblems": [
      "Payment gateway settlements (Razorpay, Stripe, Paytm) not reconciled against net bank deposits.",
      "Unrecorded bank charges, interest debits, and ECS loan installments distorting profit figures.",
      "Cheques issued but not presented by suppliers remaining in books indefinitely.",
      "Discrepancies causing audit qualifications and income tax scrutiny notices."
    ],
    "whatIncluded": [
      "Extraction and line-by-line comparison of bank statements with ledger accounts.",
      "Reconciliation of merchant payment gateway batches and gross vs net MDR fees.",
      "Preparation of monthly or quarterly Bank Reconciliation Statement (BRS).",
      "Summary report of pending uncleared cheques and unexplained debit/credit items.",
      "Adjustment journal entries for verified bank charges, interest, and automated transfers."
    ],
    "requiredDocuments": [
      {
        "category": "Reconciliation Records",
        "items": [
          "Bank statements (PDF and Excel formats preferred) for all operative accounts",
          "General ledger export of Bank Accounts from your accounting software",
          "Merchant gateway settlement statements (for online businesses)",
          "Cheque counterfoils or payment advice notes for uncleared items"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Statement & Ledger Ingestion",
        "description": "We load your bank statement and internal bank ledger into our reconciliation verification framework."
      },
      {
        "step": 2,
        "title": "Automated & Manual Matching",
        "description": "Matches are established based on date, amount, reference number, and payee names."
      },
      {
        "step": 3,
        "title": "Discrepancy Identification",
        "description": "Unmatched items are isolated into timing differences (uncleared cheques) and errors/omissions (unrecorded fees)."
      },
      {
        "step": 4,
        "title": "BRS Report & Corrective Entries",
        "description": "We produce the official BRS and propose necessary adjusting entries to bring ledger balances into true harmony."
      }
    ],
    "deadlinesNotice": "Recommended monthly. Year-end reconciliation is critical before finalizing March 31st financial statements.",
    "faqs": [
      {
        "question": "Why does my book balance differ from my bank statement?",
        "answer": "Common reasons include cheques issued but not yet deposited by vendors, cheques deposited but still in clearing, bank charges debited directly by the bank, interest credits, and direct customer NEFT transfers not yet accounted for in books."
      },
      {
        "question": "Can you reconcile payment gateway transactions?",
        "answer": "Yes. We reconcile gross customer payments, gateway deduction fees (MDR), refund adjustments, and final net settlement deposits to your current account."
      },
      {
        "question": "How often should bank reconciliation be performed?",
        "answer": "For active businesses, monthly reconciliation is best practice. High-volume retail and e-commerce businesses often benefit from weekly reconciliation."
      }
    ],
    "pricingApproach": {
      "model": "Per Account / Volume-Based Fee",
      "description": "Structured based on monthly statement line items and number of bank/gateway accounts.",
      "factors": [
        "Total statement lines per month",
        "Number of bank accounts",
        "Presence of e-commerce payment aggregators"
      ],
      "inclusions": [
        "Line matching",
        "BRS preparation",
        "Adjusting journal recommendations"
      ],
      "exclusions": [
        "Investigating third-party banking fraud (requires legal/bank intervention)"
      ]
    },
    "disclaimer": "Reconciliations identify mathematical and recording differences. Verification of authenticity of bank statements remains the responsibility of the account holder.",
    "relatedSlugs": [
      "daily-accounting",
      "debtors-creditors-reconciliation",
      "balance-sheet"
    ]
  },
  {
    "id": "debtors-creditors-reconciliation",
    "slug": "debtors-creditors-reconciliation",
    "title": "Debtors & Creditors Reconciliation",
    "shortTitle": "Debtors & Creditors Reconciliation",
    "category": "accounting",
    "categoryLabel": "Accounting & Reconciliation",
    "heroBadge": "Vendor & Customer Balance Review",
    "shortDescription": "Understand outstanding customer payments and supplier balances with organized debtor and creditor reconciliation.",
    "ctaText": "Review Outstanding Balances",
    "icon": "UsersRound",
    "benefits": [
      "Customer ledger reconciliation to track unpaid invoices, disputed billings, and payment delays.",
      "Supplier ledger reconciliation to verify vendor claims, credit notes, and advance balances.",
      "Identification of ledger mismatches before year-end financial statement preparation.",
      "Aging analysis of receivables to support recovery of overdue funds.",
      "Support preparing payment follow-up schedules and vendor balance confirmation requests."
    ],
    "whoNeeds": [
      "Wholesalers, distributors, and traders dealing with hundreds of commercial accounts.",
      "Companies facing disputes with suppliers over bill payments, returns, or cash discounts.",
      "Businesses preparing for statutory audit balance confirmation procedures under Indian GAAP."
    ],
    "commonProblems": [
      "Customer withholding payments due to unrecorded debit notes or price variance claims.",
      "Suppliers claiming higher dues because TDS deductions or returns were not credited properly.",
      "Unadjusted advances lying in ledgers for months, distorting current asset/liability figures.",
      "Lack of aged debtors reports leading to bad debts and unrecoverable receivables."
    ],
    "whatIncluded": [
      "Comparative analysis of client debtor/creditor ledgers against external supplier/customer statements.",
      "Identification of missing invoices, unrecorded credit notes, and round-off variances.",
      "Preparation of Party Reconciliation Statements (PRS) detailing exact variances.",
      "Receivables Aging Analysis report (0-30 days, 31-60 days, 61-90 days, >90 days).",
      "Draft balance confirmation letters for circulating to major trade parties."
    ],
    "requiredDocuments": [
      {
        "category": "Party Ledger Inputs",
        "items": [
          "Debtors & Creditors trial ledger export from accounting software",
          "Customer / Supplier ledger statements received from counterparties",
          "Credit/Debit notes issued during the period",
          "Payment proof or bank transaction references for disputed transactions"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Ledger Compilation",
        "description": "We extract your trade receivables and payables ledgers and gather counterparty ledger statements."
      },
      {
        "step": 2,
        "title": "Voucher-by-Voucher Comparison",
        "description": "We match invoices, debit/credit notes, payments, and TDS deductions between both sets of books."
      },
      {
        "step": 3,
        "title": "Variance Summary",
        "description": "Discrepancies (unaccounted discounts, goods return claims, TDS differences) are categorized into clear variance tables."
      },
      {
        "step": 4,
        "title": "Settlement Schedules & Action Plan",
        "description": "You receive an actionable list of undisputed balances for immediate payment or recovery follow-up."
      }
    ],
    "deadlinesNotice": "Vital prior to quarterly and annual balance sheet finalization. Crucial before the March 31st financial year closure.",
    "faqs": [
      {
        "question": "Why is supplier ledger reconciliation important for MSMEs?",
        "answer": "Under Section 43B(h), dues to registered Micro and Small suppliers must be paid within 45 days. Supplier reconciliation ensures no eligible MSME bill is overlooked, protecting your income tax deductions."
      },
      {
        "question": "What is an Aging Analysis report?",
        "answer": "An aging analysis groups your pending customer receivables by the number of days elapsed since the invoice due date, allowing your sales team to prioritize overdue collections."
      },
      {
        "question": "How do you resolve differences in TDS deducted by customers?",
        "answer": "We reconcile customer TDS deductions against your Form 26AS / AIS on the income tax portal to ensure the client has deposited the tax and that you receive full credit."
      }
    ],
    "pricingApproach": {
      "model": "Project-Based or Periodic Audit Band",
      "description": "Based on the number of active customer and vendor accounts requiring statement verification.",
      "factors": [
        "Number of party ledgers to reconcile",
        "Transaction density per party",
        "Historical backlog scope"
      ],
      "inclusions": [
        "Ledger cross-matching",
        "Variance schedules",
        "Aging report"
      ],
      "exclusions": [
        "Direct collection litigation or legal recovery notice drafting"
      ]
    },
    "disclaimer": "Reconciliations provide mathematical analysis of records. Commercial settlement terms remain the prerogative of the contracting parties.",
    "relatedSlugs": [
      "daily-accounting",
      "bank-reconciliation",
      "balance-sheet"
    ]
  },
  {
    "id": "balance-sheet",
    "slug": "balance-sheet",
    "title": "Balance Sheet & Financial Statements",
    "shortTitle": "Balance Sheet & Financial Statements",
    "category": "financials",
    "categoryLabel": "Financial Statements",
    "heroBadge": "P&L, Trial Balance & Period-End Reporting",
    "shortDescription": "Get assistance preparing financial statements and understanding your business's financial position using available accounting records.",
    "ctaText": "Discuss Financial Reporting",
    "icon": "PieChart",
    "benefits": [
      "Preparation assistance for Balance Sheet (Statement of Financial Position).",
      "Preparation of Profit & Loss Statement (Income and Expenditure Statement).",
      "Trial balance review and ledger grouping into appropriate statutory heads.",
      "Fixed asset depreciation schedules and closing stock entries support.",
      "Financial data organization and period-end reporting support.",
      "Preparation of CMA data for bank working capital and term loan requests."
    ],
    "whoNeeds": [
      "Proprietorships and firms needing finalized balance sheets for Income Tax Return filing.",
      "Businesses applying for bank financing, CC/OD limits, or letter of credit facilities.",
      "Business owners wanting to evaluate gross profit margins, operating overheads, and net return on capital."
    ],
    "commonProblems": [
      "Unbalanced trial balances due to suspense entries or unadjusted opening balances.",
      "Incorrect classification of capital expenditure as revenue expense (or vice versa).",
      "Missing depreciation calculations under Income Tax Act vs Companies Act.",
      "Delays in finalizing annual numbers causing missed ITR filing deadlines."
    ],
    "whatIncluded": [
      "Comprehensive review and finalization of Trial Balance.",
      "Calculation of depreciation schedules as per applicable tax rules.",
      "Drafting of Balance Sheet (Assets, Liabilities, Capital / Equity accounts).",
      "Drafting of Profit & Loss Account (Revenue from operations, direct costs, overheads, net profit).",
      "Ratio analysis summary (Current ratio, Debt-equity, Gross profit margin, Net profit margin).",
      "Organization of supporting schedules for tax audit or statutory audit review."
    ],
    "requiredDocuments": [
      {
        "category": "Year-End Financial Inputs",
        "items": [
          "Complete general ledger and trial balance for the financial year",
          "Closing stock valuation summary as of March 31st",
          "Bank reconciliation statements and year-end bank balance confirmation certificates",
          "Depreciation charts from the previous financial year",
          "Loan outstanding statements and interest certificates",
          "Previous year filed ITR and audited financial statements (for opening balances)"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Trial Balance Review & Hygiene Check",
        "description": "We audit the initial trial balance to identify suspense accounts, negative cash/bank balances, and unposted adjustments."
      },
      {
        "step": 2,
        "title": "Closing & Provisions Entries",
        "description": "We calculate depreciation, closing stock adjustments, prepaid expenses, and accrued liabilities."
      },
      {
        "step": 3,
        "title": "Statement Compilation",
        "description": "Financial statements are compiled into standard schedule formats (Schedule III for companies or standard format for non-corporates)."
      },
      {
        "step": 4,
        "title": "Management Walkthrough & Delivery",
        "description": "We review the key numbers with you, explaining key ratios, taxable income impacts, and archive final schedules."
      }
    ],
    "deadlinesNotice": "For financial year ending March 31st, non-audit ITRs are due July 31st; tax audit financial statements are due September 30th / October 31st.",
    "faqs": [
      {
        "question": "Can Taxoras sign or audit my balance sheet as a Statutory Auditor?",
        "answer": "No. Statutory audits and tax audit reports under Section 44AB require certification by an independent practicing Chartered Accountant (CA) holding a valid Certificate of Practice. We prepare, organize, and compile the financial statements and supporting schedules to make the audit process smooth and hassle-free."
      },
      {
        "question": "What is CMA data for bank loans?",
        "answer": "CMA (Credit Monitoring Arrangement) data is a structured financial report showing historical performance (past 2-3 years) and projections (next 3-5 years) required by banks to evaluate loan and working capital limit eligibility."
      },
      {
        "question": "How is closing stock valued for the balance sheet?",
        "answer": "As per standard accounting principles (AS 2), inventories are generally valued at the lower of cost or net realizable value (NRV)."
      }
    ],
    "pricingApproach": {
      "model": "Annual Statement Preparation Fee",
      "description": "Based on business turnover, entity structure, and whether day-to-day books were maintained by us or supplied externally.",
      "factors": [
        "Turnover volume",
        "Proprietorship vs Partnership vs Corporate",
        "Quality and cleanliness of raw ledger records"
      ],
      "inclusions": [
        "Drafting Balance Sheet & P&L",
        "Depreciation schedule",
        "Ratio summary"
      ],
      "exclusions": [
        "Independent Statutory Auditor fees and physical stock count"
      ]
    },
    "disclaimer": "Financial statements are prepared based on records, valuations, and explanations furnished by the management. Compilation does not constitute a statutory audit opinion.",
    "relatedSlugs": [
      "daily-accounting",
      "bank-reconciliation",
      "income-tax-return"
    ]
  },
  {
    "id": "income-tax-return",
    "slug": "income-tax-return",
    "title": "Income Tax Return Filing",
    "shortTitle": "Income Tax Return Filing",
    "category": "financials",
    "categoryLabel": "Financial Statements",
    "heroBadge": "ITR-1 through ITR-7 Preparation",
    "shortDescription": "Get assistance understanding your applicable income tax return requirements, organizing documents and preparing your return for filing.",
    "ctaText": "Enquire About ITR Filing",
    "icon": "BadgePercent",
    "benefits": [
      "Comprehensive document checklist tailored to your sources of income.",
      "Review of salary, business turnover, capital gains, and other income sources.",
      "Reconciliation of tax credits with Form 26AS, AIS (Annual Information Statement), and TIS.",
      "Assistance identifying the applicable ITR form (ITR-1, ITR-2, ITR-3, ITR-4 Presumptive, etc.).",
      "Return preparation, portal upload assistance, and e-verification guidance."
    ],
    "whoNeeds": [
      "Salaried individuals with capital gains, house property, or foreign assets.",
      "Small business owners and professionals filing under Presumptive Taxation (Section 44AD / 44ADA).",
      "Proprietorships, LLPs, and companies requiring regular business return preparation.",
      "Individuals claiming tax refunds on excess TDS deductions."
    ],
    "commonProblems": [
      "Discrepancies between reported income and data in the Annual Information Statement (AIS) triggering defect notices (Section 139(9)).",
      "Selecting the incorrect ITR form, rendering the filed return invalid.",
      "Failure to e-verify the return within the mandatory 30-day window.",
      "Forgetting to disclose high-value transactions, bank accounts, or capital gain sales."
    ],
    "whatIncluded": [
      "Detailed review of Form 26AS, AIS, and TIS downloaded from the official portal.",
      "Computation of total income under applicable heads of income.",
      "Comparison and choice between Old Tax Regime and New Tax Regime (Section 115BAC).",
      "Calculation of tax liability, advance tax/self-assessment tax challans, and interest (234A/B/C).",
      "Preparation of JSON / utility return schema for portal upload.",
      "Support with Aadhaar OTP e-verification and archival of ITR-V acknowledgement."
    ],
    "requiredDocuments": [
      {
        "category": "Income Tax Checklist",
        "items": [
          "PAN and Aadhaar number (linked)",
          "Form 16 from employer (for salaried individuals)",
          "Form 26AS, AIS, and TIS from Income Tax portal",
          "Bank account statements for all operative accounts during the financial year",
          "Profit & Loss statement and Balance Sheet (for business returns)",
          "Capital gains statements from stockbrokers / mutual fund registrars",
          "Deduction proofs (Life insurance, Health insurance, PPF, Home loan interest) if opting for Old Regime"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Data Gathering & AIS Download",
        "description": "We review your income documents and cross-check them against the Income Tax Department AIS database."
      },
      {
        "step": 2,
        "title": "Regime Optimization & Computation",
        "description": "We compare your tax liability under the Old vs New Tax Regime to identify which regime is financially advantageous."
      },
      {
        "step": 3,
        "title": "Draft Verification",
        "description": "You review the computed income summary, tax credits, and refund/tax payable figures before filing."
      },
      {
        "step": 4,
        "title": "Filing & E-Verification",
        "description": "The return is submitted on incometax.gov.in, followed by OTP verification to initiate processing and refund."
      }
    ],
    "deadlinesNotice": "Non-audit individual/business ITR deadline is typically July 31st. Audit cases are due October 31st. Belated returns can be filed until December 31st with late fees.",
    "faqs": [
      {
        "question": "Can I choose between Old and New Tax Regimes?",
        "answer": "Yes. Individuals with salary or non-business income can choose between Old and New Regimes annually at the time of filing. Business taxpayers opting for the Old Regime must file Form 10-IEA before the due date."
      },
      {
        "question": "What is Section 44AD Presumptive Taxation for small businesses?",
        "answer": "Under Section 44AD, eligible resident small businesses with turnover up to \u20b92 Crores (\u20b93 Crores if digital receipts are >=95%) can declare profit at a presumptive rate of 6% (digital turnover) or 8% (cash turnover) without maintaining detailed books of accounts."
      },
      {
        "question": "How long does it take to receive an income tax refund?",
        "answer": "Once the return is e-verified and processed by the Centralized Processing Center (CPC), refunds are generally credited directly to the pre-validated bank account within 2 to 6 weeks, depending on CPC processing queues."
      }
    ],
    "pricingApproach": {
      "model": "Fixed Tiered Fee per Return",
      "description": "Based on return type (Salaried, Presumptive Business, Full Book Business, Capital Gains).",
      "factors": [
        "ITR Form (ITR-1 vs ITR-2 vs ITR-3/4 vs ITR-5/6)",
        "Number of capital gain transactions",
        "Foreign assets disclosure"
      ],
      "inclusions": [
        "AIS/26AS reconciliation",
        "Computation statement",
        "Return filing",
        "ITR-V delivery"
      ],
      "exclusions": [
        "Assessing officer scrutiny hearings or appeals before CIT(A)"
      ]
    },
    "disclaimer": "Returns are prepared using data, declarations, and documents supplied by the assessee. The taxpayer is legally responsible for the truthfulness and completeness of disclosed income.",
    "relatedSlugs": [
      "balance-sheet",
      "tds-return-filing",
      "daily-accounting"
    ]
  },
  {
    "id": "gstr-1-filing",
    "slug": "gstr-1-filing",
    "title": "GSTR-1 Filing Online",
    "shortTitle": "GSTR-1 Filing",
    "category": "gst",
    "categoryLabel": "GST Services",
    "heroBadge": "Monthly & Quarterly Outward Supply Reporting",
    "shortDescription": "Professional GSTR-1 return filing support for B2B invoices, B2C sales summaries, credit notes, export supplies, and HSN code reporting before statutory due dates.",
    "ctaText": "Enquire About GSTR-1 Filing",
    "icon": "Receipt",
    "benefits": [
      "Accurate B2B invoice upload ensuring your buyers receive Input Tax Credit (ITC) without delay.",
      "Comprehensive HSN/SAC summary compilation meeting mandatory 4/6-digit portal requirements.",
      "Credit note, debit note, and advance adjustment reporting in compliance with GST Rule 88C.",
      "Filing completed 2 to 3 days prior to the 11th/13th deadline to prevent late fees and portal freeze."
    ],
    "whoNeeds": [
      "Regular GST taxpayers filing monthly outward supply statements.",
      "Small taxpayers under the Quarterly Return Monthly Payment (QRMP) scheme filing quarterly GSTR-1 or utilizing the Invoice Furnishing Facility (IFF).",
      "Wholesale traders and service providers whose commercial clients demand verified B2B invoice reflection on GSTR-2B.",
      "E-commerce suppliers and interstate traders requiring precise place-of-supply (POS) reporting."
    ],
    "commonProblems": [
      "Buyer ITC denial and delayed client payments due to invoice upload errors or wrong GSTIN entries.",
      "Rule 88C discrepancy notices (Form DRC-01B) when GSTR-1 outward supply exceeds GSTR-3B figures.",
      "Mismatches in B2B taxable value and IGST/CGST/SGST tax distribution.",
      "Accumulation of statutory late fees under Section 47 for delayed submission after due date."
    ],
    "whatIncluded": [
      "Detailed verification of sales ledger, tax invoices, debit notes, and credit memos.",
      "HSN-wise summary preparation with correct unit quantity codes (UQC).",
      "Table-wise portal entry (Table 4 B2B, Table 5/7 B2C, Table 6 Exports, Table 9 Amendments, Table 12 HSN).",
      "Reconciliation check against GSTR-3B drafts to eliminate Rule 88C DRC-01B notice triggers.",
      "Filing with OTP (EVC) or Digital Signature Certificate (DSC) and sharing ARN acknowledgement."
    ],
    "requiredDocuments": [
      {
        "category": "Sales Invoices & Registers",
        "items": [
          "Detailed Sales Register (Excel / Tally / Accounting Software)",
          "B2B Invoices with buyer GSTIN, place of supply, and invoice numbers",
          "Export invoices / shipping bills (if applicable)",
          "Credit and debit notes issued during the tax period"
        ]
      },
      {
        "category": "Portal Credentials",
        "items": [
          "GST Common Portal Username & Password (or API E-way Bill credentials)",
          "Registered mobile number for OTP / authorized DSC for private limited companies"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Sales Register Ingestion",
        "description": "You share your monthly sales register or invoice spreadsheets via WhatsApp or secure cloud folder."
      },
      {
        "step": 2,
        "title": "Validation & HSN Check",
        "description": "We validate customer GSTINs, check place-of-supply rules, and confirm HSN codes and rate slabs."
      },
      {
        "step": 3,
        "title": "Portal Draft & Table Entry",
        "description": "We prepare and upload your outward supplies into the GST Common Portal across B2B, B2C, and credit note tables."
      },
      {
        "step": 4,
        "title": "Review & EVC Filing",
        "description": "You review the draft summary, authenticate via OTP/DSC, and receive the official ARN receipt immediately."
      }
    ],
    "deadlinesNotice": "Monthly GSTR-1 is due on the 11th of every subsequent month. Quarterly filers under QRMP must file by the 13th of the month following the quarter.",
    "faqs": [
      {
        "question": "What happens if I miss the GSTR-1 due date?",
        "answer": "Filing GSTR-1 after the 11th attracts statutory late fees under Section 47 (auto-populated in subsequent GSTR-3B). More critically, your buyers cannot view or claim ITC in their GSTR-2B for that month, which frequently causes client friction and withheld payments."
      },
      {
        "question": "Can I amend an invoice uploaded in an earlier GSTR-1?",
        "answer": "Yes. Table 9 of GSTR-1 allows amendments to previous taxable supplies, invoice values, tax amounts, and buyer GSTINs, subject to the statutory time limits prescribed under Section 39(9)."
      },
      {
        "question": "What is the minimum HSN code requirement in GSTR-1?",
        "answer": "Taxpayers with aggregate turnover up to \u20b95 Crores must report minimum 4-digit HSN codes for B2B supplies. Taxpayers with turnover exceeding \u20b95 Crores must mandatorily report 6-digit HSN codes across all supplies."
      },
      {
        "question": "How much does GSTR-1 filing assistance cost with Taxoras?",
        "answer": "GSTR-1 filing is included inside our all-inclusive monthly compliance retainers starting at \u20b9799/month for small businesses with up to 50 invoices, or available as dedicated individual filing support."
      }
    ],
    "pricingApproach": {
      "model": "Included in Retainer or Standalone per Return",
      "description": "Transparent pricing based on invoice volume with zero per-invoice hidden charges.",
      "factors": [
        "Number of monthly B2B invoices",
        "Complexity of interstate e-commerce sales",
        "Frequency (Monthly vs QRMP)"
      ],
      "inclusions": [
        "Sales ledger review",
        "HSN summary preparation",
        "Portal drafting",
        "Filing and ARN generation"
      ],
      "exclusions": [
        "Retrospective audit of multi-year unfiled returns"
      ]
    },
    "disclaimer": "Return data is compiled based on sales invoices and documentation furnished by the client. The taxpayer remains responsible for the accuracy of underlying sales figures.",
    "relatedSlugs": [
      "gstr-3b-filing",
      "gst-return-filing",
      "gst-registration"
    ]
  },
  {
    "id": "gstr-3b-filing",
    "slug": "gstr-3b-filing",
    "title": "GSTR-3B Filing Services",
    "shortTitle": "GSTR-3B Filing",
    "category": "gst",
    "categoryLabel": "GST Services",
    "heroBadge": "Monthly Summary Return & ITC Settlement",
    "shortDescription": "Accurate monthly GSTR-3B return filing with 100% GSTR-2B purchase matching, eligible ITC settlement, cash ledger challan generation, and Rule 88D notice prevention.",
    "ctaText": "Enquire About GSTR-3B Filing",
    "icon": "FileCheck2",
    "benefits": [
      "100% invoice-by-invoice GSTR-2B matching to maximize eligible Input Tax Credit and prevent loss.",
      "Strict adherence to Rule 88D to prevent automated DRC-01C notices for excess ITC claims.",
      "Optimal utilization of electronic credit ledger against IGST, CGST, and SGST liabilities.",
      "Challan generation (PMT-06) and settlement assistance to avoid 18% p.a. interest under Section 50(1)."
    ],
    "whoNeeds": [
      "Every taxpayer registered under the regular GST scheme (mandatory even for Nil periods).",
      "Traders, manufacturers, and service firms seeking verified ITC matching before claiming credit.",
      "Businesses wanting to avoid statutory late fees and blocking of outward E-way bill generation.",
      "Startups needing predictable monthly compliance retainers without hidden surprise fees."
    ],
    "commonProblems": [
      "Claiming ITC in excess of GSTR-2B, which automatically triggers Form DRC-01C demand notices.",
      "Accumulation of \u20b950/day late fees (\u20b920/day for nil returns) capped up to statutory thresholds.",
      "18% per annum mandatory interest charges on delayed net cash tax dues under Section 50(1).",
      "E-way bill generation portal blocking after defaulting on two consecutive return periods."
    ],
    "whatIncluded": [
      "Reconciliation of Table 3.1 outward tax liability against filed GSTR-1 figures.",
      "Download and line-item analysis of official auto-drafted GSTR-2B purchase statement.",
      "Segregation of eligible ITC, ineligible ITC under Section 17(5), and reversals under Rule 38/42/43.",
      "Net cash tax computation and electronic challan generation on gst.gov.in.",
      "Return verification, filing via EVC/DSC, and ARN receipt delivery."
    ],
    "requiredDocuments": [
      {
        "category": "Compliance Records",
        "items": [
          "Filed GSTR-1 summary for the tax period",
          "Purchase register and expense bills for the month",
          "Bank statement showing vendor payments and tax payments",
          "Details of any credit reversals or capital goods purchases"
        ]
      },
      {
        "category": "Portal Access",
        "items": [
          "GST Common Portal credentials",
          "Authorised signatory mobile number for OTP / valid DSC token"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "GSTR-2B Auto-Reconciliation",
        "description": "On the 14th of the month, we pull your auto-generated GSTR-2B statement and reconcile every supplier invoice against your purchase books."
      },
      {
        "step": 2,
        "title": "Tax Liability Matching",
        "description": "We cross-check Table 3.1 tax figures with your filed GSTR-1 to ensure exact alignment and zero Rule 88C variance."
      },
      {
        "step": 3,
        "title": "Credit Offset & Challan",
        "description": "We maximize legal credit offsets, compute the net cash balance payable (if any), and generate your PMT-06 challan."
      },
      {
        "step": 4,
        "title": "Final E-Filing & ARN",
        "description": "Upon tax payment, we file Form GSTR-3B with OTP verification and deliver your official GST filing receipt."
      }
    ],
    "deadlinesNotice": "Monthly GSTR-3B must be filed by the 20th of the following month. QRMP quarterly taxpayers must file by the 22nd or 24th depending on their state classification.",
    "faqs": [
      {
        "question": "Can I file GSTR-3B without filing GSTR-1 first?",
        "answer": "No. Following statutory amendments to Section 39(10) of the CGST Act, the GST portal strictly blocks taxpayers from filing GSTR-3B unless their corresponding GSTR-1 for that period is already submitted."
      },
      {
        "question": "Is GSTR-3B filing mandatory if there was zero revenue in a month?",
        "answer": "Yes. Registered taxpayers must submit a Nil GSTR-3B even if there were zero sales and zero purchases. Failing to file a Nil return incurs a daily statutory late fee of \u20b920/day."
      },
      {
        "question": "What is Rule 88D and Form DRC-01C in GSTR-3B?",
        "answer": "Rule 88D automatically generates an electronic notice (DRC-01C) whenever ITC claimed in GSTR-3B exceeds the eligible ITC reflected in auto-drafted GSTR-2B by a specified percentage. Taxpayers must either pay back the excess ITC or explain the variance within 7 days."
      },
      {
        "question": "How does Taxoras help protect businesses during GSTR-3B filing?",
        "answer": "Taxoras matches your purchase ledger line-by-line against GSTR-2B before filing, ensuring you claim every single rupee of valid credit without ever exceeding portal thresholds."
      }
    ],
    "pricingApproach": {
      "model": "Monthly Compliance Retainer",
      "description": "Full GSTR-1, GSTR-3B, and GSTR-2B purchase matching bundled into an affordable monthly retainer.",
      "factors": [
        "Monthly transaction and invoice volume",
        "Number of purchase vouchers needing GSTR-2B matching",
        "Reverse charge mechanism (RCM) applicability"
      ],
      "inclusions": [
        "GSTR-2B matching",
        "Tax offset computation",
        "Challan generation",
        "Filing and ARN confirmation"
      ],
      "exclusions": [
        "Appellate representation before GST Appellate Tribunal"
      ]
    },
    "disclaimer": "GSTR-3B figures are finalized based on client records and GSTR-2B portal data. The taxpayer must deposit requisite cash taxes to enable final return submission.",
    "relatedSlugs": [
      "gstr-1-filing",
      "gst-return-filing",
      "bank-reconciliation"
    ]
  },
  {
    "id": "form-24q-filing",
    "slug": "form-24q-filing",
    "title": "Form 24Q Filing: Salary TDS Return",
    "shortTitle": "Form 24Q Salary TDS",
    "category": "tds",
    "categoryLabel": "TDS Compliance",
    "heroBadge": "Quarterly Payroll TDS & Form 16 Preparation",
    "shortDescription": "Timely Form 24Q quarterly return preparation and filing for employee salary TDS deductions under Section 192, with challan matching, FVU validation, and Form 16 Part A & B generation.",
    "ctaText": "Enquire About Form 24Q Filing",
    "icon": "FileSpreadsheet",
    "benefits": [
      "Timely quarterly compliance eliminating statutory \u20b9200/day late fees under Section 234E.",
      "Accurate tax deduction under both Old and New Tax Regimes (Section 115BAC).",
      "CSI challan verification on TRACES to ensure zero uncredited payment notices.",
      "Quarter 4 Annexure II salary computation breakdown for seamless Form 16 issuance."
    ],
    "whoNeeds": [
      "Corporate employers, startups, and private limited companies paying monthly salaries.",
      "Partnership firms, LLPs, and trusts with salaried staff.",
      "Proprietors and individuals liable to tax audit under Section 44AB who employ salaried workforce.",
      "HR and payroll teams needing expert tax filing without hiring costly dedicated tax attorneys."
    ],
    "commonProblems": [
      "Section 234E late filing fees accumulating at \u20b9200 every single day until the return is submitted.",
      "TRACES short deduction defaults due to PAN errors or incorrect regime slab calculations.",
      "Challan mapping mismatch between bank BSR codes and return annexures.",
      "Delayed Form 16 generation leading to employee dissatisfaction during personal ITR filing."
    ],
    "whatIncluded": [
      "Monthly payroll TDS deduction schedule review and slab verification.",
      "Challan verification (ITNS 281) via TRACES portal and CSI file download.",
      "Quarterly Form 24Q preparation using latest e-TDS Return Preparation Utility (RPU).",
      "File Validation Utility (FVU) verification and error correction.",
      "Submission on Income Tax E-filing portal and delivery of provisional receipt.",
      "Form 16 Part A (TRACES) and Part B guidance for Q4."
    ],
    "requiredDocuments": [
      {
        "category": "Salary & Deductions",
        "items": [
          "Monthly salary sheet showing gross pay, deductions, and TDS deducted under Section 192",
          "Employee PAN numbers and tax regime choices (Old vs New Regime)",
          "Investment proof declarations (80C, 80D, HRA receipts) for Q4 Annexure II"
        ]
      },
      {
        "category": "Payment Challans & TAN",
        "items": [
          "Tax Deduction and Collection Account Number (TAN) of the employer",
          "Paid ITNS 281 challans with BSR code, tender date, and challan serial number",
          "TRACES portal login credentials"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Data Collection & Verification",
        "description": "We collect your quarterly payroll summary, employee PANs, and ITNS 281 tax deposit challans."
      },
      {
        "step": 2,
        "title": "CSI File Matching",
        "description": "We download the official Challan Status Inquiry (CSI) file from TIN-NSDL/e-filing portal to match amounts down to the rupee."
      },
      {
        "step": 3,
        "title": "RPU Preparation & FVU Pass",
        "description": "We populate Annexure I (and Annexure II for Q4), run the file through NSDL validation utility, and generate clean .fvu files."
      },
      {
        "step": 4,
        "title": "E-filing & Form 16 Support",
        "description": "We upload the validated return to the Income Tax portal and assist with downloading digitally signed Form 16 Part A from TRACES."
      }
    ],
    "deadlinesNotice": "Quarterly Form 24Q filing deadlines: Q1 (Apr-Jun) by 31st July; Q2 (Jul-Sep) by 31st October; Q3 (Oct-Dec) by 31st January; Q4 (Jan-Mar) by 31st May.",
    "faqs": [
      {
        "question": "What is the late fee for delayed Form 24Q filing?",
        "answer": "Under Section 234E of the Income Tax Act, a mandatory late fee of \u20b9200 per day is levied for every day the default continues, capped at the total TDS amount deducted during the quarter. In addition, Section 271H penalty ranging from \u20b910,000 to \u20b91,00,000 may be imposed for delays exceeding one year."
      },
      {
        "question": "What is the difference between Annexure I and Annexure II in Form 24Q?",
        "answer": "Annexure I details deductor, challan, and employee-wise monthly TDS deductions for the respective quarter (filed in all 4 quarters). Annexure II provides the comprehensive annual salary breakdown, exemptions, deductions, and total tax computation for each employee (filed exclusively in Quarter 4)."
      },
      {
        "question": "Can Form 24Q be corrected after submission?",
        "answer": "Yes. If employee PANs, challans, or deduction amounts require alteration, a Form 24Q Correction Return (C1, C2, C3, C5) can be submitted on the e-filing portal after TRACES processes the original return."
      },
      {
        "question": "How much does Taxoras charge for quarterly Form 24Q filing?",
        "answer": "Our Form 24Q filing assistance starts at \u20b9999/quarter for small employers with up to 10 employees, with transparent tiered packages for growing enterprises."
      }
    ],
    "pricingApproach": {
      "model": "Fixed Quarterly Fee per Return",
      "description": "Tiered pricing based on the total number of salaried employees on payroll.",
      "factors": [
        "Number of employee deduction records",
        "Quarter (Q1-Q3 standard vs Q4 Annexure II comprehensive)",
        "Number of tax deposit challans"
      ],
      "inclusions": [
        "CSI challan reconciliation",
        "RPU drafting",
        "FVU validation",
        "E-filing token generation"
      ],
      "exclusions": [
        "Appeals against CPC-TDS penalty orders before Commissioner Appeals"
      ]
    },
    "disclaimer": "TDS returns are prepared using salary statements and paid challans supplied by the employer. The deductor is responsible for ensuring timely monthly tax deposit by the 7th of each month.",
    "relatedSlugs": [
      "form-26q-filing",
      "tds-return-filing",
      "tds-payment"
    ]
  },
  {
    "id": "form-26q-filing",
    "slug": "form-26q-filing",
    "title": "Form 26Q Filing: Vendor & Professional TDS Return",
    "shortTitle": "Form 26Q Vendor TDS",
    "category": "tds",
    "categoryLabel": "TDS Compliance",
    "heroBadge": "Non-Salary TDS: Contractor, Rent, Professional Fees & Commission",
    "shortDescription": "Expert quarterly Form 26Q preparation and submission covering Section 194C (contractors), 194J (professional/technical fees), 194I (rent), and 194H (commission) with zero TRACES short-deduction defaults.",
    "ctaText": "Enquire About Form 26Q Filing",
    "icon": "CreditCard",
    "benefits": [
      "Comprehensive vendor payment coverage across Section 194C, 194J, 194I, 194H, 194Q, and 194A.",
      "Automated PAN verification to avoid 20% penalty deductions under Section 206AA.",
      "Section 206AB compliance check to verify non-filer higher deduction applicability.",
      "Zero TRACES short-deduction notices and prompt Form 16A TDS certificate issuance for your vendors."
    ],
    "whoNeeds": [
      "Businesses paying contractor fees, marketing agencies, software developers, or freelance consultants.",
      "Tenants paying commercial or high-value residential rent under Section 194I.",
      "Corporate entities and firms liable to deduct TDS on interest, commission, or professional fees.",
      "Startups needing clean quarterly vendor tax compliance to maintain good vendor relationships."
    ],
    "commonProblems": [
      "Section 234E late filing fees of \u20b9200 per day for delayed quarterly returns.",
      "TRACES short deduction notices caused by confusing Section 194J(a) (technical fees at 2%) with 194J(b) (professional fees at 10%).",
      "Deductions against invalid or inoperative PANs resulting in demand notices under Section 206AA.",
      "Vendor dissatisfaction and friction due to uncredited TDS not appearing in their Form 26AS/AIS."
    ],
    "whatIncluded": [
      "Vendor ledger review and section-wise deduction verification.",
      "Paid ITNS 281 challan matching with TRACES Challan Status Inquiry (CSI).",
      "Verification of lower deduction certificates under Section 197 (if applicable).",
      "Form 26Q preparation using latest NSDL return preparation utility.",
      "Validation using FVU utility and error correction.",
      "Submission on Income Tax e-filing portal and delivery of filing receipt.",
      "Download of quarterly Form 16A certificates from TRACES for distribution to vendors."
    ],
    "requiredDocuments": [
      {
        "category": "Vendor Ledgers & Deductions",
        "items": [
          "Vendor payment register showing bill amount, deduction date, and TDS amount",
          "Vendor PAN cards and business constitution details",
          "Applicable section mapping (194C, 194J, 194I, 194H, 194Q)"
        ]
      },
      {
        "category": "Challans & Credentials",
        "items": [
          "TAN number of the deductor",
          "Paid ITNS 281 challans with BSR codes and Challan Serial Numbers",
          "Income Tax E-filing portal and TRACES login access"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Vendor Payment Analysis",
        "description": "We audit your quarterly expense ledgers to confirm correct TDS rates (e.g. 1% / 2% for 194C, 2% / 10% for 194J, 10% for 194I)."
      },
      {
        "step": 2,
        "title": "CSI File Download & Match",
        "description": "We pull the official CSI challan file from TRACES and map every vendor payment to the deposited government challans."
      },
      {
        "step": 3,
        "title": "RPU Entry & FVU Validation",
        "description": "We generate the Form 26Q data file and run it through NSDL FVU software to verify checksums and eliminate validation errors."
      },
      {
        "step": 4,
        "title": "Filing & Form 16A Issuance",
        "description": "We upload the return to the income tax portal, provide you with the provisional receipt, and subsequently download Form 16A certificates."
      }
    ],
    "deadlinesNotice": "Quarterly Form 26Q filing deadlines: Q1 (Apr-Jun) by 31st July; Q2 (Jul-Sep) by 31st October; Q3 (Oct-Dec) by 31st January; Q4 (Jan-Mar) by 31st May.",
    "faqs": [
      {
        "question": "What is the rate of TDS under Section 194J for technical vs professional services?",
        "answer": "TDS on fees for technical services (FTS), royalty, or call center operations is deducted at 2%. TDS on professional services (such as legal, medical, engineering, accountancy, or consultancy) is deducted at 10% under Section 194J."
      },
      {
        "question": "What happens if a vendor does not provide their PAN?",
        "answer": "Under Section 206AA, if a payee fails to furnish a valid PAN, TDS must be deducted at higher of: the rate specified in the Act, the rates in force, or 20%. Form 26Q requires proper flagging to avoid short deduction demand notices."
      },
      {
        "question": "When can I download Form 16A for my vendors?",
        "answer": "Form 16A becomes available on the TRACES portal approximately 3 to 7 working days after your Form 26Q return is successfully processed by the Centralized Processing Cell (TDS)."
      },
      {
        "question": "How much does Taxoras charge for quarterly Form 26Q filing?",
        "answer": "Our Form 26Q filing retainers start from \u20b9999/quarter for small businesses with up to 15 vendor payment records, providing an affordable alternative to high-fee corporate consultancies."
      }
    ],
    "pricingApproach": {
      "model": "Fixed Quarterly Fee per Return",
      "description": "Tiered pricing determined by the number of vendor deduction lines and challans.",
      "factors": [
        "Total number of vendor deduction records",
        "Number of monthly deposit challans",
        "Section 197 lower deduction verification requirements"
      ],
      "inclusions": [
        "Vendor PAN check",
        "CSI challan reconciliation",
        "FVU file validation",
        "Portal submission",
        "Form 16A download support"
      ],
      "exclusions": [
        "High Court writ petitions or judicial appeals"
      ]
    },
    "disclaimer": "TDS returns are compiled based on vendor invoices and paid challans supplied by the client. Deductors are responsible for depositing monthly deducted taxes into government account by the 7th of each month.",
    "relatedSlugs": [
      "form-24q-filing",
      "tds-return-filing",
      "tds-payment"
    ]
  },
  {
    "id": "bookkeeping-services",
    "slug": "bookkeeping-services",
    "title": "Bookkeeping Services for Small Business",
    "shortTitle": "Bookkeeping Services",
    "category": "accounting",
    "categoryLabel": "Accounting & Bookkeeping",
    "heroBadge": "Monthly Ledger Maintenance, Bank Entry & Invoicing",
    "shortDescription": "Affordable, dedicated bookkeeping services for Indian small businesses, freelancers, startups, and traders in Tally Prime, Zoho Books, Busy, and QuickBooks with real-time financial tracking.",
    "ctaText": "Enquire About Bookkeeping Services",
    "icon": "BookOpenCheck",
    "benefits": [
      "Clean, organized books maintained in Tally Prime, Zoho Books, Busy, or QuickBooks.",
      "Up-to-date bank account entry and monthly reconciliation eliminating missing voucher headaches.",
      "Vendor and customer aging analysis to improve cash collections and monitor payables.",
      "Seamless year-end data handoff for ITR filing, tax audit (Section 44AB), and balance sheet finalization."
    ],
    "whoNeeds": [
      "Retail shopkeepers, traders, and distributors handling high daily cash and bank transactions.",
      "Startups, marketing agencies, and IT service providers needing monthly management reports.",
      "Freelancers, creators, and professionals needing structured expense ledgers for ITR-3/4 filing.",
      "Small business owners who want to eliminate the high overhead of a full-time in-house accountant."
    ],
    "commonProblems": [
      "Unreconciled bank balances with unexplained debits and missing invoice vouchers.",
      "Unorganized physical receipts resulting in disallowed business deductions during tax scrutiny.",
      "Overdue debtor receivables due to lack of customer ledger tracking and aging reports.",
      "Year-end compliance chaos and late penalties before tax audit deadlines."
    ],
    "whatIncluded": [
      "Sales and purchase invoice voucher entry.",
      "Bank statement debit and credit transaction posting.",
      "Expense voucher booking with correct GST input credit tagging.",
      "Monthly bank reconciliation statement (BRS) preparation.",
      "Debtors and creditors balance ledger reconciliation.",
      "Monthly Trial Balance and Profit & Loss statement reporting."
    ],
    "requiredDocuments": [
      {
        "category": "Bank & Financial Records",
        "items": [
          "Bank account statements (PDF or Excel format)",
          "Credit card or payment gateway settlement summaries",
          "Opening trial balance / previous year balance sheet (for existing businesses)"
        ]
      },
      {
        "category": "Transaction Invoices",
        "items": [
          "Sales invoices and POS daily summaries",
          "Purchase bills and vendor invoices",
          "Business expense receipts and rent payment slips"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Document Handover",
        "description": "Share monthly bank statements and invoices via WhatsApp or our secure shared cloud folder."
      },
      {
        "step": 2,
        "title": "Ledger Entry & Categorization",
        "description": "Our accounting team posts all sales, purchases, bank charges, and operating expenses into your designated accounting software."
      },
      {
        "step": 3,
        "title": "Bank & Ledger Reconciliation",
        "description": "We perform a line-by-line bank reconciliation (BRS) to ensure bank statement balances match your software books to the rupee."
      },
      {
        "step": 4,
        "title": "Monthly Financial Review",
        "description": "You receive a clean Profit & Loss summary, balance overview, and outstanding receivable list every month."
      }
    ],
    "deadlinesNotice": "Monthly bookkeeping is completed within the first 7 to 10 days of the subsequent calendar month, ensuring clean data is ready before GST return due dates.",
    "faqs": [
      {
        "question": "Which accounting software do you support for bookkeeping?",
        "answer": "We support all leading accounting platforms in India, including Tally Prime, Zoho Books, Busy Accounting, QuickBooks Online, and Marg ERP, as well as customized spreadsheet accounting."
      },
      {
        "question": "How is outsourced bookkeeping cheaper than hiring an in-house accountant?",
        "answer": "A full-time in-house accountant in Tier 1 or Tier 2 Indian cities costs \u20b918,000 to \u20b935,000 per month, plus employee overheads, software licenses, and training. Taxoras outsourced bookkeeping plans start from just \u20b9799 to \u20b91,999 per month, delivering higher accuracy with zero HR overhead."
      },
      {
        "question": "Do I need to send physical paper bills to your office?",
        "answer": "No. We operate a 100% digital, paperless workflow. You can easily photograph or scan your bills and upload them via WhatsApp or secure cloud folder."
      },
      {
        "question": "Does your bookkeeping service include GST and TDS filing?",
        "answer": "Yes. We offer bundled monthly retainers that combine daily bookkeeping with GSTR-1, GSTR-3B, and quarterly TDS compliance for complete hands-free convenience."
      }
    ],
    "pricingApproach": {
      "model": "Monthly Bookkeeping Retainer",
      "description": "Affordable monthly plans scaled by transaction volume with zero hidden setup fees.",
      "factors": [
        "Monthly transaction count (bank entries + sales/purchase vouchers)",
        "Number of bank accounts and credit cards",
        "Preferred software platform (Tally / Zoho / Busy)"
      ],
      "inclusions": [
        "Voucher entry",
        "Bank reconciliation",
        "Vendor ledger matching",
        "Monthly P&L summary"
      ],
      "exclusions": [
        "Physical on-site inventory stocktaking visits"
      ]
    },
    "disclaimer": "Bookkeeping entries are posted based on transaction documents, bank statements, and classifications supplied by the business owner.",
    "relatedSlugs": [
      "bank-reconciliation",
      "daily-accounting",
      "balance-sheet"
    ]
  },
  {
    "id": "gst-annual-return-gstr-9",
    "slug": "gst-annual-return-gstr-9",
    "title": "GST Annual Return Filing (GSTR-9 & 9C)",
    "shortTitle": "GSTR-9 & 9C Filing",
    "category": "gst",
    "categoryLabel": "GST Compliance",
    "heroBadge": "Annual Turnkey Reconciliation",
    "shortDescription": "Comprehensive year-end GSTR-9 preparation and GSTR-9C reconciliation statement support matching 12 months of GSTR-1, GSTR-3B, GSTR-2B, and audited financial books.",
    "ctaText": "Enquire About GSTR-9 Filing",
    "icon": "FileCheck2",
    "benefits": [
      "Complete 12-month reconciliation across GSTR-1, GSTR-3B, GSTR-2B, and books of accounts.",
      "Accurate classification of Table 6/7/8 Input Tax Credit, reversals under Rule 37/42/43, and HSN outward/inward summaries.",
      "Identification of excess ITC claimed or short-paid tax to resolve via Form DRC-03 before scrutiny.",
      "Seamless coordination with independent practicing Chartered Accountants where GSTR-9C certification/review is required.",
      "Transparent annual fixed fees starting below typical boutique audit overheads."
    ],
    "whoNeeds": [
      "Regular GST-registered businesses with aggregate annual turnover exceeding ₹2 Crore (mandatory GSTR-9 threshold).",
      "Enterprises with turnover above ₹5 Crore requiring Form GSTR-9C reconciliation statements.",
      "High-volume traders seeking clean Table 8A vs 8B reconciliation before December 31 statutory deadlines.",
      "Companies preparing year-end tax schedules free of future ASMT-10 or Section 73/74 demand notices."
    ],
    "commonProblems": [
      "Unreconciled differences between monthly GSTR-3B tax paid and auto-drafted GSTR-1 turnover leading to Table 4 mismatches.",
      "Failure to reflect unclaimed or reversed Input Tax Credit accurately in Table 6 and Table 8 of GSTR-9.",
      "Missing the mandatory December 31 due date, triggering daily Section 47(2) late fees (up to 0.04% of turnover for ≤₹5 Cr / 0.50% max).",
      "Omitting mandatory 6-digit or 4-digit HSN-wise summary for inward and outward supplies."
    ],
    "whatIncluded": [
      "Full annual download and consolidation of 12 months of GSTR-1, GSTR-3B, GSTR-2B, and Electronic Credit Ledger.",
      "Invoice-by-invoice matching against Tally Prime, Zoho Books, or Excel purchase & sales registers.",
      "Preparation of Table 4 through Table 18 schedules, including prior-year FY adjustment tracking (Table 10/11/12/13).",
      "Computation of any unpaid liability or excess ITC reversal and Form GST DRC-03 payment assistance.",
      "Online preparation on gst.gov.in, pre-filing JSON/PDF verification by client, and ARN submission."
    ],
    "requiredDocuments": [
      {
        "category": "Annual GST & Books Pack",
        "items": [
          "12 months filed GSTR-1 and GSTR-3B summaries (and portal credentials)",
          "Full-year GSTR-2B & GSTR-2A Excel/JSON extracts",
          "Audited / finalized Trial Balance, P&L, and Sales/Purchase Registers",
          "Summary of Credit/Debit notes and DRC-03 challans paid during the FY"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "12-Month Portal & Books Extract",
        "description": "We retrieve all filed monthly returns alongside your finalized Trial Balance and books of accounts."
      },
      {
        "step": 2,
        "title": "Annual 3-Way Reconciliation",
        "description": "Our specialists reconcile turnover, tax rate slabs, ITC availed vs GSTR-2B, and HSN totals."
      },
      {
        "step": 3,
        "title": "Draft GSTR-9 / 9C & DRC-03 Check",
        "description": "You receive a clear variance sheet showing whether any DRC-03 adjustment or client approval is required."
      },
      {
        "step": 4,
        "title": "Portal Filing & ARN Archival",
        "description": "Upon your sign-off, GSTR-9 (and GSTR-9C JSON where applicable) is submitted before the December 31 deadline."
      }
    ],
    "deadlinesNotice": "Form GSTR-9 and GSTR-9C for a Financial Year are due on or before December 31 of the subsequent financial year (e.g., Dec 31 for the preceding FY). Late fees under Section 47(2) apply on daily delays.",
    "faqs": [
      {
        "question": "Who is mandatorily required to file GSTR-9?",
        "answer": "As per CBIC notifications, filing Form GSTR-9 is optional for regular taxpayers with aggregate annual turnover up to ₹2 Crore, and mandatory for turnover exceeding ₹2 Crore. Taxpayers above ₹5 Crore must also submit self-certified Form GSTR-9C."
      },
      {
        "question": "Can GSTR-9 be revised after filing on the GST portal?",
        "answer": "No. Under GST law, once Form GSTR-9 is submitted with OTP/DSC on gst.gov.in, it cannot be revised. That is why Taxoras executes a complete 3-way reconciliation before final submission."
      },
      {
        "question": "What are the charges for GSTR-9 filing at Taxoras?",
        "answer": "GSTR-9 annual return assistance starts transparently based on annual turnover slab and whether your books are cleanly tallied, significantly lower than typical high-overhead retainers."
      }
    ],
    "pricingApproach": {
      "model": "Annual Fixed Filing Fee (Turnover-Based)",
      "description": "Clear one-time annual fee based on turnover tier (₹2 Cr–₹5 Cr or ₹5 Cr+) and reconciliation readiness.",
      "factors": [
        "Aggregate annual turnover & GSTR-9C applicability",
        "Volume of monthly discrepancies between books and portal",
        "Availability of structured Tally / Zoho / Excel registers"
      ],
      "inclusions": [
        "12-month GSTR-1 vs 3B vs 2B reconciliation",
        "Draft GSTR-9 preparation & HSN validation",
        "DRC-03 tax payment challan guidance"
      ],
      "exclusions": [
        "Independent practicing CA statutory audit certification (coordinated separately if required)"
      ]
    },
    "disclaimer": "Taxoras Advisory & Compliance prepares GSTR-9 and GSTR-9C reconciliation schedules based on client accounting records. Where independent Chartered Accountant audit attestation is required, it is coordinated separately.",
    "relatedSlugs": [
      "gst-return-filing",
      "gstr-3b-filing",
      "balance-sheet"
    ]
  },
  {
    "id": "gst-nil-return-filing",
    "slug": "gst-nil-return-filing",
    "title": "GST Nil Return Filing Services",
    "shortTitle": "GST Nil Return Filing",
    "category": "gst",
    "categoryLabel": "GST Compliance",
    "heroBadge": "Dormant & Zero-Sale GSTINs",
    "shortDescription": "On-time monthly or quarterly Nil GSTR-1 and Nil GSTR-3B filing for inactive or zero-turnover GST registrations to prevent ₹20/day late fees and GSTIN cancellation.",
    "ctaText": "Start Nil GST Filing",
    "icon": "Receipt",
    "benefits": [
      "Keeps inactive or newly registered GSTINs active and compliant without missed deadlines.",
      "Prevents daily ₹20 late fees (₹10 CGST + ₹10 SGST per return) under Section 47.",
      "Protects against suo-moto GST registration suspension or cancellation for 6 consecutive missed returns.",
      "Transparent budget pricing with reminder tracking on WhatsApp before the 11th and 20th.",
      "Seamless upgrade path whenever your business resumes taxable billing."
    ],
    "whoNeeds": [
      "Newly incorporated startups or freelancers holding a GSTIN prior to their first commercial invoice.",
      "Seasonal businesses experiencing months with zero outward sales and zero inward ITC claims.",
      "Consultants and agencies temporarily paused who want to retain their active GST registration.",
      "Businesses intending to surrender GST later (since all pending returns must be up to date first)."
    ],
    "commonProblems": [
      "Assuming zero turnover means no GST return is required, resulting in automatic ₹20/day late fees on both GSTR-1 and GSTR-3B.",
      "Receiving REG-17 show-cause notices for cancellation after 6 consecutive months of unfiled Nil returns.",
      "Blocking bank credit facilities or B2B vendor onboarding because the GSTIN status turned suspended."
    ],
    "whatIncluded": [
      "Verification of zero outward supply and zero inward reverse-charge / ITC eligibility for the period.",
      "Timely Nil GSTR-1 filing (due 11th monthly / 13th QRMP quarterly).",
      "Timely Nil GSTR-3B filing via portal OTP/EVC verification (due 20th monthly / 22nd or 24th QRMP).",
      "Immediate WhatsApp delivery of filed ARN receipts and next-month reminder scheduling."
    ],
    "requiredDocuments": [
      {
        "category": "Nil Return Verification",
        "items": [
          "GSTIN and gst.gov.in login credentials",
          "Confirmation of zero sales, zero purchases, and zero RCM liability for the tax period",
          "Authorized signatory mobile access for final OTP EVC submission"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Monthly Activity Confirmation",
        "description": "Before the 10th of the month, you confirm on WhatsApp that there were no sales or ITC purchases."
      },
      {
        "step": 2,
        "title": "Portal Check & Pre-Validation",
        "description": "We check gst.gov.in to confirm no supplier uploaded a B2B invoice or TDS/TCS credit on your GSTIN."
      },
      {
        "step": 3,
        "title": "Nil GSTR-1 & Nil GSTR-3B Filing",
        "description": "Both returns are prepared and filed using EVC/OTP within statutory dates."
      },
      {
        "step": 4,
        "title": "ARN Proof Delivery",
        "description": "Official government acknowledgement receipts are shared directly on your WhatsApp."
      }
    ],
    "deadlinesNotice": "Even with zero sales, Nil GSTR-1 is due by the 11th and Nil GSTR-3B by the 20th for monthly filers. Taxpayers can also file Nil returns free of cost directly via SMS or gst.gov.in, or opt for managed Taxoras tracking.",
    "faqs": [
      {
        "question": "Is GST return filing compulsory even if my turnover is zero?",
        "answer": "Yes. Under Section 39 of the CGST Act, filing Nil GSTR-1 and Nil GSTR-3B is mandatory for every active regular GST registration even when there are zero business transactions during the tax period."
      },
      {
        "question": "Can I file a Nil GST return for free on the government portal?",
        "answer": "Yes. Both gst.gov.in and the official GST SMS facility allow taxpayers to file Nil returns without any government fee. Businesses choose Taxoras managed Nil plans when they want proactive deadline alerts, portal monitoring, and zero missed dates."
      },
      {
        "question": "What happens if I stop filing Nil returns?",
        "answer": "Non-filing attracts ₹20 per day late fees per Nil return and can trigger GSTIN suspension or cancellation under Section 29(2) after consecutive defaults."
      }
    ],
    "pricingApproach": {
      "model": "Low-Cost Monthly / Quarterly Nil Plan",
      "description": "Economical tracking and filing for dormant or zero-transaction GSTINs with instant upgrade when billing starts.",
      "factors": [
        "Monthly vs QRMP quarterly filing frequency",
        "Number of historical pending periods to clear"
      ],
      "inclusions": [
        "GSTR-2B check to confirm no stray vendor bills",
        "Nil GSTR-1 & Nil GSTR-3B submission",
        "WhatsApp ARN receipt confirmation"
      ],
      "exclusions": [
        "Historical late fee challans (payable on portal per statutory norms)"
      ]
    },
    "disclaimer": "Official government fee for Nil return filing on gst.gov.in is ₹0. Managed service fees cover portal checks, deadline reminders, and filing assistance.",
    "relatedSlugs": [
      "gst-return-filing",
      "gstr-1-filing",
      "gstr-3b-filing"
    ]
  },
  {
    "id": "tds-correction-filing",
    "slug": "tds-correction-filing",
    "title": "TDS Return Correction & Default Resolution",
    "shortTitle": "TDS Correction Filing",
    "category": "tds",
    "categoryLabel": "TDS Compliance",
    "heroBadge": "TRACES Default & Conso File Fix",
    "shortDescription": "Expert assistance in downloading TRACES Conso files, preparing C1/C2/C3/C4/C5 TDS correction statements, resolving PAN/challan mismatches, and clearing Form 26AS defaults.",
    "ctaText": "Fix TDS Defaults Now",
    "icon": "AlertTriangle",
    "benefits": [
      "Resolves TRACES 'Short Deduction', 'Challan Mismatch', and 'Invalid PAN' demand notices accurately.",
      "Re-establishes proper Form 26AS and Form 16/16A tax credit for your employees and vendors.",
      "Handles full Conso file extraction from tdscpc.gov.in and NSDL/Protean RPU FVU generation.",
      "Identifies unjustified interest computations and maps unconsumed Challan 281 balances.",
      "Affordable per-quarter correction fees compared to steep compliance retainers."
    ],
    "whoNeeds": [
      "Employers who discovered an incorrect employee PAN or salary deduction error in a filed Form 24Q.",
      "Businesses facing TRACES default notices due to unmatched Challan 281 BSR code, serial number, or date.",
      "Deductors needing to add missed vendor invoices or revise section codes (e.g., 194C vs 194J) in Form 26Q.",
      "Companies unable to download Form 16 / Form 16A due to pending portal defaults."
    ],
    "commonProblems": [
      "Vendors withholding future business because TDS deducted from them does not reflect in their Form 26AS / AIS.",
      "Challan mismatch defaults triggered by minor errors in Assessment Year, Minor Head (200 vs 400), or BSR code.",
      "Incorrect deductee PAN entries causing automatic 20% higher TDS default demands under Section 206AA."
    ],
    "whatIncluded": [
      "Review of TRACES Justification Report to pinpoint exact short-deduction or challan errors.",
      "Request and download of the official Consolidated TDS/TCS File (.tds) from tdscpc.gov.in.",
      "Preparation of online/offline correction statements (C1 Personal/Deductor details, C2 Challan, C3 Deductee, C5 PAN update).",
      "CSI challan file matching, FVU validation generation, and portal submission.",
      "Re-verification on TRACES until default status reflects 'Nil Demand' and fresh Form 16/16A downloads are unlocked."
    ],
    "requiredDocuments": [
      {
        "category": "TRACES & Correction Data",
        "items": [
          "TAN and TRACES (tdscpc.gov.in) portal login details",
          "Copy of the TRACES Justification Report / Default Notice",
          "Original Provisional Receipt Number (PRN / Token Number)",
          "Corrected PAN details, deductee amount breakdown, or Challan 281 copies"
        ]
      }
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "TRACES Justification Audit",
        "description": "We log into tdscpc.gov.in and download the Justification Report and Consolidated File for the affected quarter."
      },
      {
        "step": 2,
        "title": "Correction Mapping (C1–C5 / C9)",
        "description": "Our TDS team aligns challans, PAN updates, or deductee entries using the latest Protean RPU utility."
      },
      {
        "step": 3,
        "title": "FVU Validation & Submission",
        "description": "After generating an error-free .fvu file with CSI verification, the revised statement is submitted."
      },
      {
        "step": 4,
        "title": "Default Closure & Form 16A",
        "description": "Once processed by CPC-TDS, we confirm zero outstanding defaults and help issue revised Form 16/16A certificates."
      }
    ],
    "deadlinesNotice": "Unlike original TDS returns, TDS correction statements have no fixed quarterly due date and should be filed promptly as soon as a TRACES demand notice or Form 26AS mismatch is identified to prevent accruing monthly interest.",
    "faqs": [
      {
        "question": "How long does it take for a TDS correction statement to process on TRACES?",
        "answer": "Once submitted, CPC-TDS typically processes online or RPU correction statements within 3 to 7 working days, after which Form 26AS and Form 16/16A reflect the updated credits."
      },
      {
        "question": "Can I fix an unmatched Challan 281 BSR code or Assessment Year mistake?",
        "answer": "Yes. Depending on the nature of the error, challan tagging can be corrected via TRACES online challan correction / C2 statement or via jurisdictional AO OLTAS rectification."
      },
      {
        "question": "What are the charges for TDS correction filing?",
        "answer": "TDS correction assistance is priced transparently per quarter and correction type depending on the number of challan or deductee rows involved."
      }
    ],
    "pricingApproach": {
      "model": "Per-Statement Fixed Fee",
      "description": "Transparent one-time fee per quarterly correction statement based on whether it is a PAN/challan fix or bulk deductee revision.",
      "factors": [
        "Correction type (Online PAN/Challan tagging vs full RPU C3/C9 return)",
        "Number of challans and deductee line items requiring revision"
      ],
      "inclusions": [
        "Justification Report & Conso file download",
        "Correction file preparation & FVU validation",
        "Default clearance verification"
      ],
      "exclusions": [
        "Actual statutory short-deduction tax, interest (201(1A)), or Section 234E late fees payable by the deductor"
      ]
    },
    "disclaimer": "TDS correction outcomes depend on CPC-TDS processing rules and validity of underlying Challan 281 deposits under the Income Tax Act, 1961.",
    "relatedSlugs": [
      "tds-return-filing",
      "form-24q-filing",
      "form-26q-filing",
      "tds-payment"
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: string): ServiceItem[] {
  return allServices.filter((s) => s.category === category);
}

export function getRelatedServices(relatedSlugs: string[]): ServiceItem[] {
  return allServices.filter((s) => relatedSlugs.includes(s.slug));
}
