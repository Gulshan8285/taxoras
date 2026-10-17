import json
import re

faqs_by_slug = {
    "gst-registration-india-documents-process": [
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
    ],
    "understanding-gstr-1-and-gstr-3b": [
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
    ],
    "what-is-tds-and-when-does-it-apply": [
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
    ],
    "how-to-prepare-for-income-tax-return-filing": [
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
    ],
    "bank-reconciliation-explained-small-businesses": [
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
    ],
    "debtors-and-creditors-practical-guide": [
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
    ],
    "what-is-a-balance-sheet-guide": [
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
    ],
    "udyam-registration-eligibility-checklist": [
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
    ],
    "why-daily-bookkeeping-matters": [
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
    ],
    "common-accounting-record-keeping-mistakes": [
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
}

# Update generate_resources.py
with open("scripts/generate_resources.py", "r", encoding="utf-8") as f:
    gen_content = f.read()

# Replace any TaxVeda with Taxoras
gen_content = gen_content.replace("TaxVeda", "Taxoras")

# Load existing generate_resources articles
import ast

# Now let's run a script that executes generate_resources.py articles dict, attaches faqs, and saves
import sys
sys.path.append(".")
import scripts.generate_resources as gr

for art in gr.articles:
    slug = art.get("slug")
    if slug in faqs_by_slug:
        art["faqs"] = faqs_by_slug[slug]
        # ensure TOC has faqs
        toc = art.get("tableOfContents", [])
        if not any(item.get("id") == "faqs" for item in toc):
            toc.append({"id": "faqs", "title": f"{len(toc)+1}. Frequently Asked Questions"})
            art["tableOfContents"] = toc

# Generate the TypeScript file content
res_ts = f"""import {{ ResourceArticle }} from "@/types";

export const allResources: ResourceArticle[] = {json.dumps(gr.articles, indent=2, ensure_ascii=False)};

export function getResourceBySlug(slug: string): ResourceArticle | undefined {{
  return allResources.find((r) => r.slug === slug);
}}

export function getResourcesByCategory(category: string): ResourceArticle[] {{
  return allResources.filter((r) => r.category === category);
}}
"""

# Replace any TaxVeda in res_ts
res_ts = res_ts.replace("TaxVeda", "Taxoras")

with open("src/data/resourcesData.ts", "w", encoding="utf-8") as f:
    f.write(res_ts)

print("Successfully injected comprehensive FAQs with instant reach-out answers into all 10 resource articles in src/data/resourcesData.ts!")
