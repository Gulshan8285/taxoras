import json

articles = [
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
      },
      {
        "id": "faqs",
        "title": "6. Frequently Asked Questions"
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
          "text": "If you supply goods across state borders (inter-state), GST registration is mandatory before the first consignment moves, regardless of whether your revenue is ₹1,000 or ₹10 Lakhs."
        }
      },
      {
        "id": "turnover-limits",
        "title": "2. Statutory Turnover Thresholds",
        "paragraphs": [
          "For intra-state suppliers (supplying within the same state), the law provides clear turnover exemptions to protect small enterprises from compliance burdens:",
          "Goods Suppliers: In general category states, businesses whose aggregate annual turnover is up to ₹40 Lakhs are exempt from mandatory GST registration.",
          "Service Providers: The threshold for service providers (consultants, IT agencies, designers) is ₹20 Lakhs per financial year.",
          "Special Category States: In states like Manipur, Mizoram, Nagaland, and Tripura, the threshold limit is ₹10 Lakhs for services and ₹20 Lakhs for goods."
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
    ],
    "faqs": [
      {
        "question": "How long does it take to obtain a GST registration certificate in India?",
        "answer": "With Aadhaar OTP biometric authentication, approval is typically granted by the GST portal within 3 to 7 working days. If the department raises a clarification query (Form GST REG-03), an additional 7 working days apply after submitting the response."
      },
      {
        "question": "Is an electricity bill mandatory for GST registration at a home or rented address?",
        "answer": "Yes, a recent electricity bill (less than 2 months old), water bill, or municipal property tax receipt is mandatory to verify the premises address. If rented, a notarized rent agreement and Landlord No Objection Certificate (NOC) are also required."
      },
      {
        "question": "Can I register for GST without having a commercial office?",
        "answer": "Yes. You can register your GST using your residential premises or a shared/virtual office, provided you submit a valid electricity bill, owner NOC, and identity KYC documents."
      },
      {
        "question": "How can I quickly reach out to Taxoras to file my GST registration today?",
        "answer": "You can reach Taxoras immediately via WhatsApp at +91 81038 19494 or submit an online enquiry. Our dedicated compliance team reviews your documents, validates constitution details, and submits your GST REG-01 application within 2 to 4 hours."
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
      },
      {
        "id": "faqs",
        "title": "6. Frequently Asked Questions"
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
          "- B2C Large Invoices: Inter-state sales to unregistered consumers exceeding ₹2.5 Lakhs (or revised limits).",
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
          "Delay in filing GSTR-3B attracts a daily statutory late fee (₹50/day for tax liability returns, ₹20/day for NIL returns, subject to statutory maximum caps). Additionally, any unpaid tax liability incurs interest at 18% per annum under Section 50 of the CGST Act."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What is the key difference between GSTR-1 and GSTR-3B?",
        "answer": "GSTR-1 is your monthly sales declaration where invoice-level outward supplies are reported (due by the 11th). GSTR-3B is your monthly summary tax payment return where output liability is settled against available GSTR-2B Input Tax Credit and cash ledger (due by the 20th)."
      },
      {
        "question": "What happens if sales in GSTR-1 do not match tax paid in GSTR-3B?",
        "answer": "Under Rule 88C of CGST Rules, if outward tax liability reported in GSTR-1 exceeds GSTR-3B by more than the tolerance threshold, the GST portal generates an automated DRC-01B notice. You must either pay the differential tax with interest or file an explanation within 7 days, failing which subsequent GSTR-1 filings are blocked."
      },
      {
        "question": "What is the late fee for missing the GSTR-3B filing due date?",
        "answer": "Late fee is ₹50 per day (₹25 CGST + ₹25 SGST) for regular returns with tax liability, capped based on annual turnover. For Nil returns, the late fee is ₹20 per day (₹10 CGST + ₹10 SGST). Interest at 18% per annum also applies on net cash liability under Section 50."
      },
      {
        "question": "How can I quickly reach out to Taxoras for monthly GST return filing and GSTR-2B reconciliation?",
        "answer": "Message Taxoras on WhatsApp at +91 81038 19494. Our compliance accountants perform complete invoice-level GSTR-2B purchase matching, compute net tax, and file both GSTR-1 and GSTR-3B well in advance of statutory deadlines."
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
      },
      {
        "id": "faqs",
        "title": "5. Frequently Asked Questions"
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
          "- Section 194C (Contractors & Sub-contractors): 1% deduction for payments to individual/HUF contractors, 2% for corporate contractors. Threshold: Single bill >₹30,000 or aggregate >₹1,00,000 annually.",
          "- Section 194J (Professional / Technical Fees): 10% for professional services (legal, medical, architectural, accounting); 2% for technical fees and call center operators. Threshold: >₹30,000 annually.",
          "- Section 194I (Rent): 10% on land, building, or furniture rent (>₹2,40,000 annually); 2% on plant and machinery hire.",
          "- Section 194H (Commission & Brokerage): 5% on commission payments exceeding ₹15,000 annually."
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
    ],
    "faqs": [
      {
        "question": "What are the most common TDS sections applicable to businesses and freelancers?",
        "answer": "The most common sections are Section 194C (contractor and advertising payments at 1% or 2%), Section 194J (professional and technical fees at 2% or 10%), Section 194I (rent on property at 10% or equipment at 2%), and Section 194H (commission or brokerage at 5%)."
      },
      {
        "question": "What is the monthly deadline for depositing TDS to the government?",
        "answer": "TDS deducted during any calendar month must be deposited to the government account via Challan ITNS 281 by the 7th of the subsequent month (except for March deductions, which are due by April 30th)."
      },
      {
        "question": "What is the penalty for delayed quarterly TDS return filing (Form 24Q / 26Q)?",
        "answer": "Late filing attracts a mandatory statutory fee of ₹200 per day under Section 234E until the return is submitted, up to the total TDS deducted. Additionally, assessing officers can levy a penalty of ₹10,000 to ₹1,00,000 under Section 271H."
      },
      {
        "question": "How can I reach out to Taxoras for TAN registration, TDS computation, and quarterly filing?",
        "answer": "Reach out directly via WhatsApp at +91 81038 19494 or call +91 81038 19494. Taxoras handles TAN setup, monthly TDS payment challans, quarterly 24Q/26Q return filing, and TRACES Form 16/16A generation seamlessly."
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
      },
      {
        "id": "faqs",
        "title": "5. Frequently Asked Questions"
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
          "If you have substantial eligible deductions exceeding ₹3.75 - ₹4 Lakhs, the Old Regime may still yield lower tax. A mathematical comparison should always be computed prior to filing."
        ]
      },
      {
        "id": "presumptive-tax",
        "title": "4. Section 44AD / 44ADA for Small Businesses",
        "paragraphs": [
          "For small proprietary traders and professionals, the presumptive taxation scheme provides major relief:",
          "- Section 44AD: Allows eligible businesses with turnover up to ₹2 Crores (₹3 Crores with >=95% digital receipts) to declare 6% (digital) or 8% (cash) of turnover as taxable profit without audit.",
          "- Section 44ADA: Allows professionals (IT, consultants, doctors, lawyers) with gross receipts up to ₹50 Lakhs (₹75 Lakhs with digital receipts) to declare 50% of receipts as profit."
        ]
      }
    ],
    "faqs": [
      {
        "question": "What is the Annual Information Statement (AIS) and why is it critical for ITR filing?",
        "answer": "AIS is an official record generated by the Income Tax Department showing interest earnings, dividends, stock and mutual fund transactions, and foreign remittances. Filing an ITR that doesn't match AIS data triggers automated defective return notices under Section 139(9)."
      },
      {
        "question": "Which ITR form is appropriate for small business owners and freelancers?",
        "answer": "Small businesses and professionals opting for presumptive taxation under Section 44AD (up to ₹3 Cr turnover) or Section 44ADA (up to ₹75 Lakhs receipts) can file simplified Form ITR-4. Those maintaining books or subject to tax audits must file Form ITR-3."
      },
      {
        "question": "What is the last date to file Income Tax Returns for non-audit entities?",
        "answer": "The statutory due date is July 31st following the end of the financial year. Belated or revised returns can be filed until December 31st with mandatory late filing fees under Section 234F."
      },
      {
        "question": "How quickly can Taxoras file my Income Tax Return?",
        "answer": "Contact Taxoras on WhatsApp at +91 81038 19494. Simply send your PAN and bank statements; our tax professionals reconcile AIS/26AS, maximize eligible deductions under the new vs old regime, and prepare your ITR within 24 to 48 hours."
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
      },
      {
        "id": "faqs",
        "title": "5. Frequently Asked Questions"
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
    ],
    "faqs": [
      {
        "question": "Why is monthly Bank Reconciliation (BRS) essential for small businesses?",
        "answer": "Monthly BRS detects bank charges, uncredited client cheques, unauthorized deductions, and duplicate payments. It ensures your accounting ledgers reflect true cash balances and prevents surprises during audit season."
      },
      {
        "question": "How does skipping bank reconciliation create tax compliance issues?",
        "answer": "Unreconciled bank lines cause discrepancies between sales recorded in books and revenue reported in GSTR-1, as well as unexplained deposits that tax authorities can tax as unexplained cash credits under Section 68."
      },
      {
        "question": "How can I reach out to Taxoras to reconcile my company's bank statements?",
        "answer": "Reach out via WhatsApp at +91 81038 19494. Share your bank statement PDFs or Excel exports; our team reconciles hundreds of transactions with automated ledger matching in 24 to 48 hours."
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
      },
      {
        "id": "faqs",
        "title": "5. Frequently Asked Questions"
      }
    ],
    "sections": [
      {
        "id": "importance",
        "title": "1. Why Party Ledger Reconciliations Matter",
        "paragraphs": [
          "For any trading or B2B enterprise, cash is locked in trade receivables (debtors) and owed to trade payables (creditors). If your books show customer 'A' owes ₹5,00,000, but customer 'A' believes they only owe ₹3,50,000, your working capital is in jeopardy."
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
    ],
    "faqs": [
      {
        "question": "What is Section 43B(h) and what is the strict 45-day payment rule?",
        "answer": "Section 43B(h) mandates that payments to registered Micro and Small enterprises must be settled within the time agreed in writing (maximum 45 days) or within 15 days if no agreement exists. Unpaid dues are disallowed as business expenses in that financial year and added back to taxable income."
      },
      {
        "question": "How often should Indian businesses send balance confirmation letters to parties?",
        "answer": "High-volume trading businesses should reconcile top debtor/creditor balances monthly, and dispatch formal quarterly balance confirmation letters at the end of June, September, December, and March."
      },
      {
        "question": "How does Taxoras help businesses manage debtors, creditors, and MSME 43B(h) compliance?",
        "answer": "Connect with Taxoras on WhatsApp at +91 81038 19494. We establish automated aging reports, vendor ledger reconciliations, and MSME payment tracking to protect your expense deductions."
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
      },
      {
        "id": "faqs",
        "title": "5. Frequently Asked Questions"
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
    ],
    "faqs": [
      {
        "question": "What is the basic equation behind every Balance Sheet?",
        "answer": "Assets = Liabilities + Owner's Equity. It shows the cumulative financial position of a business at a specific point in time, detailing what the business owns versus what it owes to lenders and owners."
      },
      {
        "question": "What Current Ratio do Indian banks look for when sanctioning OD/CC limits?",
        "answer": "Most commercial banks and NBFCs require a minimum Current Ratio of 1.33:1, showing that current assets exceed short-term obligations by at least 33%."
      },
      {
        "question": "How can I get Taxoras to prepare my Balance Sheet and P&L for bank financing or audits?",
        "answer": "Contact Taxoras on WhatsApp at +91 81038 19494. Our accounting desk compiles schedule-compliant Balance Sheets, Profit & Loss accounts, and CMA data for bank loan approvals, credit lines, and investor presentations."
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
      },
      {
        "id": "faqs",
        "title": "5. Frequently Asked Questions"
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
          "- Micro Enterprise: Investment in plant & machinery <= ₹1 Crore AND turnover <= ₹5 Crores.",
          "- Small Enterprise: Investment <= ₹10 Crores AND turnover <= ₹50 Crores.",
          "- Medium Enterprise: Investment <= ₹50 Crores AND turnover <= ₹250 Crores."
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
    ],
    "faqs": [
      {
        "question": "Does the government charge any fee for Udyam registration?",
        "answer": "No. Udyam registration on the official government portal (udyamregistration.gov.in) is completely free (₹0). Any advisory fee charged by Taxoras covers verification of NIC codes, Aadhaar-PAN linking, and application filing assistance."
      },
      {
        "question": "What are the key benefits of getting an Udyam certificate?",
        "answer": "Key benefits include lower interest rates on bank loans, collateral-free credit under CGTMSE, protection against delayed buyer payments under the MSMED Act, 50% subsidy on trademark and patent filings, and exemption from earnest money deposits (EMD) on government tenders."
      },
      {
        "question": "How can I reach out to Taxoras to get my Udyam MSME certificate issued?",
        "answer": "Message Taxoras on WhatsApp at +91 81038 19494 with your Aadhaar and business PAN. Our specialists verify your industry activity and issue your official Udyam Certificate within 24 hours."
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
      },
      {
        "id": "faqs",
        "title": "4. Frequently Asked Questions"
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
    ],
    "faqs": [
      {
        "question": "Why should a business maintain day-to-day bookkeeping instead of doing it yearly?",
        "answer": "Daily bookkeeping provides real-time cash flow visibility, avoids missing input tax credit on vendor purchases, ensures accurate advance tax payments, and eliminates March filing panic and late fees."
      },
      {
        "question": "Can I manage bookkeeping with Taxoras if I don't have an in-house accountant?",
        "answer": "Yes. Taxoras acts as your dedicated virtual accounting department. Simply send your sales bills, purchase invoices, and bank statements digitally via WhatsApp or cloud folders, and we keep your Tally or Zoho Books updated weekly."
      },
      {
        "question": "How can I quickly onboard my business for monthly accounting with Taxoras?",
        "answer": "Connect with our onboarding team on WhatsApp at +91 81038 19494. Monthly retainers start at ₹1,499/month, including complete ledger posting, GST reconciliation, and monthly profit summaries."
      }
    ]
  },
  {
    "id": "common-mistakes-guide",
    "slug": "common-accounting-record-keeping-mistakes",
    "title": "10 Common Accounting & Tax Record-Keeping Mistakes Small Businesses Make",
    "category": "Compliance Calendar",
    "summary": "A practical audit checklist highlighting the top 10 recording errors—from mixing personal expenses with business accounts to missing TDS cutoffs.",
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
      },
      {
        "id": "faqs",
        "title": "3. Frequently Asked Questions"
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
    ],
    "faqs": [
      {
        "question": "Can a proprietor claim GST input tax credit on personal car maintenance or groceries?",
        "answer": "No. Section 17(5) of the CGST Act explicitly prohibits claiming ITC on personal consumption, motor vehicles (with specific commercial exceptions), and food or catering. Claiming blocked credit results in recovery notices, 18% interest, and 100% penalty."
      },
      {
        "question": "For how many years must Indian businesses retain accounting records and bills?",
        "answer": "Under Section 36 of the CGST Act and Section 44AA of the Income Tax Act, all books of account, ledgers, and original tax invoices must be retained for at least 72 months (6 years) from the due date of the relevant annual return."
      },
      {
        "question": "How can I reach out to Taxoras for a quick compliance and book audit?",
        "answer": "Message Taxoras on WhatsApp at +91 81038 19494 or email contact@taxoras.online. We conduct a rapid 20-point diagnostic check of your GST filings, TDS deductions, and bank reconciliations to fix discrepancies before tax authorities take notice."
      }
    ]
  },
  {
    "id": "eway-bill-rules-guide",
    "slug": "eway-bill-rules-thresholds-vehicle-breakdown-guide",
    "title": "E-Way Bill Rules & Thresholds: Complete Multi-State Transport & Validity Guide (2026)",
    "category": "GST Guides",
    "summary": "Master electronic way bill statutory requirements under Rule 138 of CGST Rules. Understand ₹50,000 consignment thresholds, distance-based validity, Part-B vehicle updates, and penalty mitigation under Section 129.",
    "readTime": "8 min read",
    "lastReviewed": "October 2026",
    "author": "Logistics & Indirect Tax Desk",
    "officialSource": {
      "title": "National E-Way Bill Portal (NIC)",
      "url": "https://ewaybillgst.gov.in"
    },
    "tableOfContents": [
      {
        "id": "what-is-eway-bill",
        "title": "1. What is an E-Way Bill & When is it Mandatory?"
      },
      {
        "id": "statutory-thresholds",
        "title": "2. State-Wise & Consignment Threshold Limits"
      },
      {
        "id": "part-a-vs-part-b",
        "title": "3. Generating Part-A vs Part-B (Transporter Details)"
      },
      {
        "id": "validity-breakdown",
        "title": "4. Distance-Based Validity & Vehicle Breakdown Rules"
      },
      {
        "id": "penalties-section-129",
        "title": "5. Interception, Detentions & Penalties under Section 129"
      },
      {
        "id": "faqs",
        "title": "6. Frequently Asked Questions"
      }
    ],
    "sections": [
      {
        "id": "what-is-eway-bill",
        "title": "1. What is an E-Way Bill & When is it Mandatory?",
        "paragraphs": [
          "An Electronic Way Bill (E-Way Bill) is a mandatory digital document generated on ewaybillgst.gov.in for the movement of goods in a vehicle whose consignment value exceeds ₹50,000 (whether for supply, returns, or job-work).",
          "Under Rule 138 of the CGST Rules, every registered person who causes movement of taxable goods must generate the E-Way Bill before consignment dispatch. Movement without a valid E-Way Bill allows tax authorities to intercept, seize, and penalize both the vehicle and consignments."
        ],
        "callout": {
          "type": "important",
          "text": "For inter-state transport of handicraft goods or goods sent for job work, E-Way Bill generation is mandatory regardless of consignment value, even if the value is under ₹50,000."
        }
      },
      {
        "id": "statutory-thresholds",
        "title": "2. State-Wise & Consignment Threshold Limits",
        "paragraphs": [
          "While inter-state movement uniformly mandates an E-Way Bill for consignments exceeding ₹50,000, several state governments have raised intra-state (within state) thresholds to reduce compliance friction for local retail:",
          "Delhi: Intra-state threshold is ₹1,00,000 (all goods except tobacco and pan masala).",
          "Maharashtra: Intra-state threshold is ₹1,00,000 for standard commodities.",
          "West Bengal: Intra-state threshold is ₹1,00,000.",
          "Gujarat: Intra-state threshold is ₹50,000 across specified taxable commodities."
        ],
        "bulletPoints": [
          "Consignment Value calculation includes Central Tax, State Tax, Integrated Tax, and Cess, but excludes exempt supply value.",
          "Multiple small consignments in a single conveyance: Transporters must carry a Consolidated E-Way Bill (Form GST EWB-02) if total aggregated value exceeds ₹50,000."
        ]
      },
      {
        "id": "part-a-vs-part-b",
        "title": "3. Generating Part-A vs Part-B (Transporter Details)",
        "paragraphs": [
          "An E-Way Bill consists of two distinct components that must be fully reconciled:",
          "Part-A: Contains recipient GSTIN, dispatch address, delivery PIN code, invoice number, HSN code, and taxable value. Entering Part-A generates a 12-digit E-Way Bill Number (EBN).",
          "Part-B: Contains transporter ID, vehicle registration number (e.g. DL-01-AB-1234), or railway/airway receipt number. An E-Way Bill is NOT legally valid for transit until Part-B is filled."
        ],
        "callout": {
          "type": "warning",
          "text": "Moving goods with only Part-A filled is legally treated as transport without an E-Way Bill, attracting full detention under Section 129."
        }
      },
      {
        "id": "validity-breakdown",
        "title": "4. Distance-Based Validity & Vehicle Breakdown Rules",
        "paragraphs": [
          "E-Way Bill validity is strictly tied to transit distance computed by the portal based on postal PIN codes:",
          "Regular Cargo: 1 day validity for every 200 kilometers (or part thereof).",
          "Over Dimensional Cargo (ODC): 1 day validity for every 20 kilometers (or part thereof).",
          "Vehicle Breakdown Protocol: If a transport vehicle breaks down or suffers accident in transit, the transporter or supplier must update Part-B with the new vehicle registration number before resuming transit. The E-Way Bill validity can also be extended within 8 hours before or 8 hours after expiry on the portal."
        ]
      },
      {
        "id": "penalties-section-129",
        "title": "5. Interception, Detentions & Penalties under Section 129",
        "paragraphs": [
          "Under Section 129 of the CGST Act (amended), transporting goods without a valid E-Way Bill or with expired validity attracts severe statutory penalties:",
          "Where owner comes forward: Penalty is equal to 200% of the applicable tax payable on the intercepted goods.",
          "For exempt goods: Penalty is equal to 2% of the value of goods or ₹25,000, whichever is lower.",
          "Where owner does not come forward: Penalty equals 50% of the value of goods or 200% of tax payable, whichever is higher."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can an expired E-Way Bill be extended while the truck is in transit?",
        "answer": "Yes. The law allows validity extension within 8 hours before or up to 8 hours after the exact expiry timestamp. The transporter must log into ewaybillgst.gov.in, select 'Extend Validity', input current location, reason for delay (e.g., breakdown, traffic blockage), and remaining distance."
      },
      {
        "question": "What happens if there is a minor spelling mistake in the vehicle number on the E-Way Bill?",
        "answer": "As per CBIC Circular No. 64/38/2018-GST, minor errors like a 1 or 2 digit clerical mistake in the vehicle number attract a nominal token penalty of ₹500 CGST + ₹500 SGST under Section 125, rather than full detention and 200% penalty under Section 129."
      },
      {
        "question": "Is an E-Way Bill mandatory if goods are transported by rail, air, or sea?",
        "answer": "Yes. While Part-B allows entry of railway receipt (RR) number, airway bill (AWB), or bill of lading instead of vehicle number, the E-Way Bill must be generated prior to goods handover or before delivery release."
      },
      {
        "question": "How can I quickly reach out to Taxoras for urgent E-Way Bill setup, bulk API integration, or detention notice release?",
        "answer": "You can connect immediately with the Taxoras emergency compliance desk via WhatsApp at +91 81038 19494 or call +91 81038 19494. Our specialists assist with instant portal generation, Part-B updating, drafting Section 129 objection representations (Form GST MOV-07), and securing expedited vehicle release."
      }
    ]
  },
  {
    "id": "gstr-9-annual-return-guide",
    "slug": "gstr-9-annual-return-filing-rules-reconciliation-guide",
    "title": "GSTR-9 & GSTR-9C Annual Return Filing: Rules, Turnover Limits & Reconciliation (2026)",
    "category": "GST Guides",
    "summary": "Step-by-step master guide to filing Form GSTR-9 annual return and GSTR-9C reconciliation statement. Master turnover exemption limits, Table 8A vs GSTR-2A variances, DRC-03 tax payments, and late fee caps.",
    "readTime": "10 min read",
    "lastReviewed": "October 2026",
    "author": "Direct & Indirect Tax Audit Desk",
    "officialSource": {
      "title": "GSTN Annual Return Portal",
      "url": "https://www.gst.gov.in"
    },
    "tableOfContents": [
      {
        "id": "who-must-file-gstr9",
        "title": "1. Who is Mandated to File GSTR-9 & GSTR-9C?"
      },
      {
        "id": "table8a-reconciliation",
        "title": "2. Table 8A vs GSTR-2B ITC Reconciliation"
      },
      {
        "id": "drc03-differential-tax",
        "title": "3. Voluntary Tax Payment via Form DRC-03"
      },
      {
        "id": "statutory-deadlines-late-fees",
        "title": "4. Statutory Deadlines & Reduced Late Fee Caps"
      },
      {
        "id": "faqs",
        "title": "5. Frequently Asked Questions"
      }
    ],
    "sections": [
      {
        "id": "who-must-file-gstr9",
        "title": "1. Who is Mandated to File GSTR-9 & GSTR-9C?",
        "paragraphs": [
          "Form GSTR-9 is an annual return filed once for each financial year by all registered regular taxpayers. It consolidates monthly declarations made in GSTR-1 and GSTR-3B.",
          "Exemptions by Turnover: Taxpayers whose aggregate annual turnover is up to ₹2 Crore are exempt from mandatory filing of GSTR-9. Taxpayers with aggregate turnover above ₹5 Crore must file both GSTR-9 and a self-certified reconciliation statement in Form GSTR-9C."
        ]
      },
      {
        "id": "table8a-reconciliation",
        "title": "2. Table 8A vs GSTR-2B ITC Reconciliation",
        "paragraphs": [
          "Table 8 of GSTR-9 compares total Input Tax Credit availed in GSTR-3B with figures auto-populated from vendor GSTR-1 filings in Table 8A. Any unexplained negative variance indicates excess ITC claimed, which must either be reversed or paid with Section 50 interest."
        ]
      },
      {
        "id": "drc03-differential-tax",
        "title": "3. Voluntary Tax Payment via Form DRC-03",
        "paragraphs": [
          "If annual reconciliation uncovers unpaid outward tax or ineligible ITC claimed, taxpayers can voluntarily pay the shortfall with interest through Form DRC-03 under the 'Annual Return' cause of payment before submitting GSTR-9, avoiding penal proceedings under Section 73 or 74."
        ]
      },
      {
        "id": "statutory-deadlines-late-fees",
        "title": "4. Statutory Deadlines & Reduced Late Fee Caps",
        "paragraphs": [
          "The statutory deadline for filing Form GSTR-9 and GSTR-9C is 31st December following the close of the financial year.",
          "Under rationalized rules, for taxpayers with turnover up to ₹5 Crore, late fee is capped at ₹50 per day (₹25 CGST + ₹25 SGST) subject to a maximum of 0.04% of turnover (0.02% CGST + 0.02% SGST)."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can I claim new Input Tax Credit in Form GSTR-9 that was missed in monthly GSTR-3B?",
        "answer": "No. Form GSTR-9 is strictly a consolidation return. No new Input Tax Credit can be claimed directly in GSTR-9. Unclaimed ITC could only be availed up to 30th November following the end of the financial year in monthly GSTR-3B returns."
      },
      {
        "question": "Can Form GSTR-9 be revised once submitted on the GST portal?",
        "answer": "No. There is no provision under the CGST Act to file a revised Form GSTR-9 once filed. All tables, sales figures, and ITC reconciliations must be thoroughly verified before final digital signature or EVC verification."
      },
      {
        "question": "How can I quickly consult Taxoras to audit and file my GSTR-9 & GSTR-9C before 31st December?",
        "answer": "Connect with Taxoras on WhatsApp at +91 81038 19494 or submit an enquiry online. Our audit team reconciles your complete 12 months of GSTR-1, GSTR-3B, GSTR-2B, and audited books of accounts, identifying variances and preparing schedule-compliant filings in 48 hours."
      }
    ]
  }
]

res_ts = f"""import {{ ResourceArticle }} from "@/types";

export const allResources: ResourceArticle[] = {json.dumps(articles, indent=2, ensure_ascii=False)};

export function getResourceBySlug(slug: string): ResourceArticle | undefined {{ 
  return allResources.find((r) => r.slug === slug);
}}

export function getResourcesByCategory(category: string): ResourceArticle[] {{ 
  return allResources.filter((r) => r.category === category);
}}
"""

with open("src/data/resourcesData.ts", "w", encoding="utf-8") as f:
    f.write(res_ts)

print("Successfully regenerated resourcesData.ts!")
