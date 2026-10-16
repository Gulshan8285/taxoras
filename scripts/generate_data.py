import json
import os

services = [
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
      "Businesses crossing the mandatory turnover threshold (₹40 Lakhs for goods / ₹20 Lakhs for services in general category states).",
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
        "answer": "No. For intra-state suppliers of goods, registration is generally mandatory only if annual turnover exceeds ₹40 Lakhs (₹20 Lakhs for services, with lower limits in special category states). However, inter-state supply, e-commerce selling, and reverse charge liability require mandatory registration regardless of turnover."
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
      "factors": ["Entity constitution", "Single vs multiple business verticals", "Clarification query resolution"],
      "inclusions": ["Document verification checklist", "Filing of GST REG-01", "Assistance through REG-03 query responses", "GSTIN Certificate download"],
      "exclusions": ["Subsequent monthly/quarterly GST return filings (billed separately)", "Physical verification coordination if officer mandates site visit"]
    },
    "disclaimer": "GST Registration is processed through the official government portal (gst.gov.in). Approval is at the sole discretion of the jurisdictional GST officer. We assist with documentation and filing support.",
    "relatedSlugs": ["gst-return-filing", "msme-udyam-registration", "daily-accounting"]
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
      "factors": ["Monthly sales invoice volume", "Purchase ledger lines to reconcile against 2B", "Single vs multiple GST registrations"],
      "inclusions": ["Monthly GSTR-1 preparation", "GSTR-3B preparation & filing", "2B Reconciliation report", "Challan preparation for cash tax"],
      "exclusions": ["Annual Return (GSTR-9) and Reconciliation Statement (GSTR-9C) (quoted separately)", "Assessment hearing appearances before GST authorities"]
    },
    "disclaimer": "Returns are filed based on records provided by the client. We do not alter underlying accounting records without client authorization.",
    "relatedSlugs": ["gst-registration", "bank-reconciliation", "daily-accounting"]
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
      "Late filing fees under Section 234E (₹200 per day of delay).",
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
        "answer": "Section 234E levies a mandatory late filing fee of ₹200 per day of default until the return is filed, capped at the total amount of TDS deductible."
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
      "factors": ["Number of deductees per quarter", "Form 24Q vs 26Q vs 27Q", "Regular filing vs correction statement"],
      "inclusions": ["Challan verification", "Deductee PAN checks", "FVU validation", "Filing acknowledgement", "Form 16/16A generation support"],
      "exclusions": ["Payment of actual TDS tax liability to the government", "Representation before TDS assessing officers in scrutiny cases"]
    },
    "disclaimer": "Clients are responsible for timely deduction and depositing of tax. Return preparation is based on challans and deductee statements provided.",
    "relatedSlugs": ["tds-payment", "income-tax-return", "daily-accounting"]
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
      "factors": ["Frequency of vendor payouts", "Volume of deduction heads"],
      "inclusions": ["Section mapping", "Challan drafting", "CIN verification"],
      "exclusions": ["Actual tax payment amounts"]
    },
    "disclaimer": "Tax liabilities are calculated based on records submitted. Final payment authorization rests solely with the business bank account holder.",
    "relatedSlugs": ["tds-return-filing", "daily-accounting", "income-tax-return"]
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
      "factors": ["Monthly transaction volume (e.g. up to 100, 300, 1000+ vouchers)", "Number of bank/credit card accounts", "Inventory tracking requirement"],
      "inclusions": ["Ledger maintenance", "Bank entry recording", "Monthly Trial Balance", "GST/TDS data coordination"],
      "exclusions": ["Statutory audit signatures", "Physical stock audit verification"]
    },
    "disclaimer": "Accounting entries are prepared based on invoices, statements, and explanations provided by the client. Client management retains responsibility for the authenticity of commercial transactions.",
    "relatedSlugs": ["bank-reconciliation", "debtors-creditors-reconciliation", "balance-sheet"]
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
      "Assessment of enterprise classification (Micro: <₹1 Cr Inv / <₹5 Cr T.O; Small: <₹10 Cr Inv / <₹50 Cr T.O; Medium: <₹50 Cr Inv / <₹250 Cr T.O).",
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
      "factors": ["Single activity vs multi-location manufacturing enterprise", "Aadhaar OTP coordination"],
      "inclusions": ["NIC mapping", "Portal filing", "Udyam Certificate PDF delivery"],
      "exclusions": ["Subsequent annual Udyam profile updates"]
    },
    "disclaimer": "Udyam registration is governed by the Ministry of MSME, Government of India. TaxVeda is an independent consultancy providing professional preparation support and is not affiliated with the government.",
    "relatedSlugs": ["gst-registration", "daily-accounting", "balance-sheet"]
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
      "factors": ["Total statement lines per month", "Number of bank accounts", "Presence of e-commerce payment aggregators"],
      "inclusions": ["Line matching", "BRS preparation", "Adjusting journal recommendations"],
      "exclusions": ["Investigating third-party banking fraud (requires legal/bank intervention)"]
    },
    "disclaimer": "Reconciliations identify mathematical and recording differences. Verification of authenticity of bank statements remains the responsibility of the account holder.",
    "relatedSlugs": ["daily-accounting", "debtors-creditors-reconciliation", "balance-sheet"]
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
      "factors": ["Number of party ledgers to reconcile", "Transaction density per party", "Historical backlog scope"],
      "inclusions": ["Ledger cross-matching", "Variance schedules", "Aging report"],
      "exclusions": ["Direct collection litigation or legal recovery notice drafting"]
    },
    "disclaimer": "Reconciliations provide mathematical analysis of records. Commercial settlement terms remain the prerogative of the contracting parties.",
    "relatedSlugs": ["daily-accounting", "bank-reconciliation", "balance-sheet"]
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
        "question": "Can TaxVeda sign or audit my balance sheet as a Statutory Auditor?",
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
      "factors": ["Turnover volume", "Proprietorship vs Partnership vs Corporate", "Quality and cleanliness of raw ledger records"],
      "inclusions": ["Drafting Balance Sheet & P&L", "Depreciation schedule", "Ratio summary"],
      "exclusions": ["Independent Statutory Auditor fees and physical stock count"]
    },
    "disclaimer": "Financial statements are prepared based on records, valuations, and explanations furnished by the management. Compilation does not constitute a statutory audit opinion.",
    "relatedSlugs": ["daily-accounting", "bank-reconciliation", "income-tax-return"]
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
        "answer": "Under Section 44AD, eligible resident small businesses with turnover up to ₹2 Crores (₹3 Crores if digital receipts are >=95%) can declare profit at a presumptive rate of 6% (digital turnover) or 8% (cash turnover) without maintaining detailed books of accounts."
      },
      {
        "question": "How long does it take to receive an income tax refund?",
        "answer": "Once the return is e-verified and processed by the Centralized Processing Center (CPC), refunds are generally credited directly to the pre-validated bank account within 2 to 6 weeks, depending on CPC processing queues."
      }
    ],
    "pricingApproach": {
      "model": "Fixed Tiered Fee per Return",
      "description": "Based on return type (Salaried, Presumptive Business, Full Book Business, Capital Gains).",
      "factors": ["ITR Form (ITR-1 vs ITR-2 vs ITR-3/4 vs ITR-5/6)", "Number of capital gain transactions", "Foreign assets disclosure"],
      "inclusions": ["AIS/26AS reconciliation", "Computation statement", "Return filing", "ITR-V delivery"],
      "exclusions": ["Assessing officer scrutiny hearings or appeals before CIT(A)"]
    },
    "disclaimer": "Returns are prepared using data, declarations, and documents supplied by the assessee. The taxpayer is legally responsible for the truthfulness and completeness of disclosed income.",
    "relatedSlugs": ["balance-sheet", "tds-return-filing", "daily-accounting"]
  }
]

audience = [
  {
    "id": "startups",
    "title": "Startups & New Ventures",
    "badge": "Early Stage & Funded",
    "description": "Set up your compliance foundation correctly from day one. Get registered for GST, obtain Udyam recognition, and establish clean digital bookkeeping.",
    "icon": "Rocket",
    "relevantServices": ["GST Registration", "MSME / Udyam Registration", "Day-to-Day Accounting", "TDS Payment Assistance"],
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
    "relevantServices": ["GST Return Filing", "TDS Return Filing", "Bank Reconciliation", "Balance Sheet & Financial Statements"],
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
    "relevantServices": ["GST Return Filing", "Day-to-Day Accounting", "Debtors & Creditors Reconciliation", "Bank Reconciliation"],
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
    "relevantServices": ["GST Return Filing", "Bank Reconciliation", "Day-to-Day Accounting", "Income Tax Return Filing"],
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
    "relevantServices": ["Income Tax Return Filing", "GST Registration", "GST Return Filing", "TDS Payment Assistance"],
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
    "relevantServices": ["Day-to-Day Accounting", "GST Return Filing", "TDS Return Filing", "Balance Sheet & Financial Statements"],
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
    "relevantServices": ["Debtors & Creditors Reconciliation", "Bank Reconciliation", "Balance Sheet & Financial Statements", "GST Return Filing"],
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
    "relevantServices": ["Day-to-Day Accounting", "Balance Sheet & Financial Statements", "TDS Return Filing", "GST Return Filing"],
    "commonChallenges": [
      "Overwhelmed in-house teams missing compliance cutoffs",
      "Preparing for formal statutory audit or private equity due diligence",
      "Implementing consistent financial checks and balances"
    ],
    "suggestedPackage": "Full-Service Outsourced Finance Dept"
  }
]

faqs = [
  {
    "question": "Which businesses can use your accounting and compliance services?",
    "answer": "We assist sole proprietors, partnership firms, LLPs, private limited companies, retail traders, e-commerce sellers, consultants, freelancers, and small manufacturers across India. Whether you need one-time registration help or end-to-end monthly accounting, our services are structured to match your exact business volume."
  },
  {
    "question": "Can I outsource my complete monthly bookkeeping to TaxVeda?",
    "answer": "Yes. Many of our clients outsource their regular bookkeeping to us. You simply share your digital invoices, bank statements, and expense receipts via our secure folder or email, and our accounting team records transactions, balances ledgers, and generates monthly trial balances and management summaries."
  },
  {
    "question": "What documents are needed for GST registration in India?",
    "answer": "For a proprietorship, you need the proprietor PAN, Aadhaar, photograph, address proof of business premises (electricity bill or property tax receipt along with rent agreement and NOC if rented), and bank proof (cancelled cheque or statement). Partnerships and companies require entity PAN, incorporation deed/certificate, director/partner KYC, board resolution, and office ownership documents."
  },
  {
    "question": "Can you help resolve GSTR-2B Input Tax Credit (ITC) mismatches?",
    "answer": "Yes. GSTR-2B reconciliation is a core part of our GST service. We cross-reference your purchase bills against the government GSTR-2B portal report to identify suppliers who have not filed their GSTR-1, preventing you from missing legitimate tax credits or facing reversal notices."
  },
  {
    "question": "What information is required for filing quarterly TDS returns?",
    "answer": "You need your TAN number, the PAN of each deductee (vendor, contractor, landlord, or employee), payment dates, nature of payment (sections 194C, 194J, 194I, 192, etc.), tax deduction amounts, and the paid Challan 281 details (BSR code, date of deposit, and challan sequence numbers)."
  },
  {
    "question": "Can I choose only one specific service instead of a full package?",
    "answer": "Absolutely. You can engage us for a single requirement, such as obtaining an MSME Udyam registration, filing an annual Income Tax Return, or performing a one-time bank reconciliation. There is never an obligation to purchase an all-inclusive package."
  },
  {
    "question": "Do you offer monthly accounting packages for small businesses?",
    "answer": "Yes. We offer tiered monthly packages tailored to transaction volume and compliance scope. These typically bundle day-to-day bookkeeping, monthly GST return filing (GSTR-1 and 3B), TDS calculations, and bank reconciliation into a predictable monthly retainer."
  },
  {
    "question": "How do I share my confidential financial documents securely?",
    "answer": "You can share digital documents through encrypted cloud drives (Google Drive / OneDrive), password-protected folders, or direct secure email. We adhere to strict document handling protocols and non-disclosure practices to safeguard your business financial records."
  },
  {
    "question": "How are your service charges calculated?",
    "answer": "Our charges are transparent and communicated upfront before any work begins. One-time services (like GST or Udyam registration) are billed on a fixed assistance fee. Recurring services (like bookkeeping and return filing) are based on monthly transaction volume, number of bank accounts, and filing frequency. We provide written scope documents with zero hidden fees."
  },
  {
    "question": "How can I check the status of my work or application?",
    "answer": "You receive a designated point of contact and timely progress updates via WhatsApp and email at every stage—from document verification to drafting, portal submission, and government acknowledgement delivery."
  },
  {
    "question": "Do you make statutory tax payments directly on behalf of clients?",
    "answer": "No. For transparency and financial security, we do not handle or hold client tax funds. We prepare verified challans with accurate section codes and Assessment Years on official portals, generating a direct payment link that your authorized signatory authorizes through your bank account."
  },
  {
    "question": "Are you a Chartered Accountancy (CA) firm?",
    "answer": "TaxVeda Advisory & Compliance is an independent business accounting, documentation, and compliance consultancy. We provide bookkeeping, data reconciliation, preparation assistance, and filing support. For statutory audits, tax audit reports under Section 44AB, or court representations requiring a practicing Chartered Accountant, assignments are coordinated through independent qualified professionals as per governing regulations."
  }
]

# Write servicesData.ts
services_ts = f"""import {{ ServiceItem }} from "@/types";

export const allServices: ServiceItem[] = {json.dumps(services, indent=2)};

export function getServiceBySlug(slug: string): ServiceItem | undefined {{
  return allServices.find((s) => s.slug === slug);
}}

export function getServicesByCategory(category: string): ServiceItem[] {{
  return allServices.filter((s) => s.category === category);
}}

export function getRelatedServices(relatedSlugs: string[]): ServiceItem[] {{
  return allServices.filter((s) => relatedSlugs.includes(s.slug));
}}
"""

with open("src/data/servicesData.ts", "w") as f:
    f.write(services_ts)

# Write audienceData.ts
audience_ts = f"""import {{ AudienceSegment }} from "@/types";

export const allAudiences: AudienceSegment[] = {json.dumps(audience, indent=2)};

export function getAudienceById(id: string): AudienceSegment | undefined {{
  return allAudiences.find((a) => a.id === id);
}}
"""

with open("src/data/audienceData.ts", "w") as f:
    f.write(audience_ts)

# Write faqsData.ts
faqs_ts = f"""export interface FAQItem {{
  question: string;
  answer: string;
}}

export const mainFaqs: FAQItem[] = {json.dumps(faqs, indent=2)};
"""

with open("src/data/faqsData.ts", "w") as f:
    f.write(faqs_ts)

print("Successfully generated servicesData.ts, audienceData.ts, faqsData.ts!")
