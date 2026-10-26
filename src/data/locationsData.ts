import { getServiceBySlug } from "./servicesData";

export interface LocationItem {
  id: string;
  city: string;
  state: string;
  region: "North" | "West" | "South" | "East & Central";
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
  // --- NORTH REGION ---
  {
    id: "delhi",
    city: "Delhi NCR",
    state: "Delhi",
    region: "North",
    tier: "Tier 1",
    badge: "National Capital Region Hub",
    description: "Comprehensive accounting and GST compliance for traders in Chandni Chowk, corporate agencies in Connaught Place, South Delhi startups, and Okhla manufacturers.",
    serviceDelivery: "Remote Digital Intake & Local Consultation by Appointment",
    popularServices: [
      "GST Return Filing",
      "Day-to-Day Accounting",
      "TDS Return Filing",
      "Balance Sheet & Financial Statements",
    ],
    commercialEcosystem: "High concentration of inter-state wholesale distributors, e-commerce brands, and corporate professional services requiring stringent monthly GSTR-2B reconciliations.",
    statePortalReference: {
      name: "Delhi Department of Trade and Taxes",
      url: "https://dvat.gov.in",
    },
    localFaqs: [
      {
        question: "Can I obtain a Delhi GST registration for a co-working space address?",
        answer: "Yes. Delhi GST authorities permit registration on shared co-working spaces provided an official Rent Agreement, NOC from the co-working operator, and electricity bill are submitted with proper desk allocation.",
      },
      {
        question: "How quickly can my Delhi business start monthly accounting?",
        answer: "We onboard Delhi NCR businesses within 24 to 48 hours following document checklist receipt and secure drive folder setup.",
      },
    ],
  },
  {
    id: "noida",
    city: "Noida & Greater Noida",
    state: "Uttar Pradesh",
    region: "North",
    tier: "Tier 1 Hub",
    badge: "IT & Manufacturing Corridor",
    description: "Dedicated GST filing, TDS deductions, and enterprise bookkeeping for IT firms in Sector 62, manufacturing units in Phase 2, and startups in Greater Noida.",
    serviceDelivery: "100% Digital Remote Delivery with Fast SLA",
    popularServices: ["GST Return Filing", "TDS Return Filing", "MSME / Udyam Registration", "Daily Accounting"],
    commercialEcosystem: "Thriving ecosystem of software developers, electronics manufacturing units, and logistics operators with heavy cross-border Delhi-UP movement.",
    statePortalReference: {
      name: "Commercial Tax Department, Uttar Pradesh",
      url: "https://comtax.up.nic.in",
    },
    localFaqs: [
      {
        question: "Does an e-commerce seller operating from Noida need a UP GSTIN?",
        answer: "Yes, any physical fulfillment center or registered place of supply located in Noida requires a UP state GSTIN starting with state code 09.",
      },
      {
        question: "What is the turnaround time for GSTR-1 and GSTR-3B for Noida startups?",
        answer: "We reconcile all purchase vouchers by the 8th of each month and prepare GSTR-1 and GSTR-3B well ahead of statutory deadlines.",
      },
    ],
  },
  {
    id: "gurugram",
    city: "Gurugram (Gurgaon)",
    state: "Haryana",
    region: "North",
    tier: "Tier 1 Hub",
    badge: "Corporate & Tech Headquarters",
    description: "Modern bookkeeping, corporate tax compliance, TDS advisory, and GST reconciliations for startups in Cyber City, Udyog Vihar, and Golf Course Road.",
    serviceDelivery: "Digital Cloud Onboarding & Dedicated Relationship Manager",
    popularServices: ["GST Return Filing", "TDS Return Filing", "Balance Sheet", "Income Tax Return"],
    commercialEcosystem: "Hub for multinational subsidiaries, venture-funded startups, fintech apps, and B2B consultancies with high volume inter-state IGST invoices.",
    statePortalReference: {
      name: "Excise & Taxation Department, Haryana",
      url: "https://haryanatax.gov.in",
    },
    localFaqs: [
      {
        question: "How do Gurugram tech exporters file without GST?",
        answer: "We prepare and submit Letter of Undertaking (LUT / RFD-11) allowing Gurugram SaaS and IT exporters to bill foreign clients without charging IGST.",
      },
      {
        question: "Do you handle vendor TDS deductions under Section 194J & 194C?",
        answer: "Yes, we reconcile quarterly vendor TDS challans and file Form 26Q with zero FVU errors.",
      },
    ],
  },
  {
    id: "jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    region: "North",
    tier: "Tier 2",
    badge: "Handicrafts, Gems & Trading Hub",
    description: "Affordable accounting, GST return filing, and debtor-creditor reconciliations for Jaipur exporters, jewelry makers, textile traders in Johari Bazar, and Sitapura manufacturers.",
    serviceDelivery: "Digital Intake with Dedicated Regional Support",
    popularServices: [
      "Day-to-Day Accounting",
      "GST Return Filing",
      "Debtors & Creditors Reconciliation",
      "Bank Reconciliation",
    ],
    commercialEcosystem: "Extensive artisanal export networks, gem polishing units, and retail shops requiring disciplined cash/bank reconciliations and vendor credit matching.",
    statePortalReference: {
      name: "Commercial Taxes Department, Rajasthan",
      url: "https://rajtax.gov.in",
    },
    localFaqs: [
      {
        question: "Can Jaipur textile and handicraft traders get monthly bookkeeping on a budget?",
        answer: "Yes. Our Tier 2 small business retainer packages start at affordable fixed fees covering monthly sales/purchase entries, GSTR-1, and GSTR-3B.",
      },
      {
        question: "How are duty drawback and GST refund claims managed for Jaipur exporters?",
        answer: "We ensure accurate invoice tagging in GSTR-1 and assist in matching shipping bills with ICEGATE for seamless IGST refunds.",
      },
    ],
  },
  {
    id: "lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    region: "North",
    tier: "Tier 2",
    badge: "Commerce & Distribution Center",
    description: "Professional GST registration, ITR filing, and MSME support for retailers in Hazratganj, wholesale distributors in Transport Nagar, and expanding UP enterprises.",
    serviceDelivery: "Remote Digital Intake & Phone Consultation",
    popularServices: [
      "Income Tax Return",
      "GST Registration",
      "MSME / Udyam Registration",
      "Daily Accounting",
    ],
    commercialEcosystem: "High density of retail enterprises, educational institutions, construction vendors, and government contractors requiring quarterly TDS compliance.",
    statePortalReference: {
      name: "Commercial Tax Department, Uttar Pradesh",
      url: "https://comtax.up.nic.in",
    },
    localFaqs: [
      {
        question: "Do you assist Lucknow contractors with government tender MSME certificates?",
        answer: "Yes, we help register under Udyam to avail EMD exemptions and preferential tender quotas for UP government contracts.",
      },
      {
        question: "What documents are needed for Lucknow proprietorship GST registration?",
        answer: "Proprietor PAN, Aadhaar, electricity bill of premises, rent agreement (or ownership proof), and a cancelled cheque.",
      },
    ],
  },
  {
    id: "kanpur",
    city: "Kanpur",
    state: "Uttar Pradesh",
    region: "North",
    tier: "Tier 2",
    badge: "Industrial & Leather Hub",
    description: "Industrial bookkeeping, GSTR-2B purchase reconciliation, and TDS return filing for leather tanneries, chemical units, and wholesale merchants in Kanpur.",
    serviceDelivery: "Digital Accounting Desk with Dedicated Compliance Executive",
    popularServices: ["GST Return Filing", "Daily Accounting", "TDS Return Filing", "Balance Sheet"],
    commercialEcosystem: "Heavy B2B manufacturing and raw material trade clusters requiring strict input tax credit tracking under Section 16(4) and e-invoicing compliance.",
    statePortalReference: {
      name: "Commercial Tax Department, Uttar Pradesh",
      url: "https://comtax.up.nic.in",
    },
    localFaqs: [
      {
        question: "How does Taxoras help Kanpur manufacturers avoid GST notice DRC-01B?",
        answer: "By performing monthly 100% GSTR-1 vs GSTR-3B and GSTR-2B reconciliations before tax liability discharge.",
      },
    ],
  },
  {
    id: "chandigarh",
    city: "Chandigarh",
    state: "Chandigarh UT",
    region: "North",
    tier: "Regional Hub",
    badge: "Tricity Business Center",
    description: "Accounting, GST filing, and tax advisory for traders, healthcare providers, and startups across Chandigarh, Mohali, and Panchkula.",
    serviceDelivery: "Digital Intake & Online Portal",
    popularServices: ["GST Return Filing", "Income Tax Return", "MSME / Udyam Registration", "Daily Accounting"],
    commercialEcosystem: "Tri-state administrative and retail capital with strong consumer trade, IT park companies, and educational ventures.",
    statePortalReference: {
      name: "Excise & Taxation Department, Chandigarh UT",
      url: "https://etdut.gov.in",
    },
    localFaqs: [
      {
        question: "Does Chandigarh have separate GST rules from Punjab and Haryana?",
        answer: "Chandigarh is a Union Territory with state code 04 (UTGST applies), whereas Punjab has code 03 and Haryana has code 06.",
      },
    ],
  },
  {
    id: "ludhiana",
    city: "Ludhiana",
    state: "Punjab",
    region: "North",
    tier: "Tier 2",
    badge: "Textile & Manufacturing Capital of North",
    description: "Specialized bookkeeping, MSME 45-day payment tracking, and GST e-invoicing for bicycle parts manufacturers, hosiery exporters, and steel traders in Ludhiana.",
    serviceDelivery: "Digital Desk & Cloud Ledgers",
    popularServices: ["GST Return Filing", "Debtors & Creditors Reconciliation", "Daily Accounting", "Balance Sheet"],
    commercialEcosystem: "Massive export and domestic manufacturing clusters with high volume sales vouchers and supply chain credit cycles.",
    statePortalReference: {
      name: "Excise and Taxation Department, Punjab",
      url: "https://taxation.punjab.gov.in",
    },
    localFaqs: [
      {
        question: "How does Ludhiana's manufacturing sector benefit from Taxoras MSME tracking?",
        answer: "We track supplier payment aging to ensure compliance with Section 43B(h) and avoid disallowance of raw material deductions.",
      },
    ],
  },
  {
    id: "dehradun",
    city: "Dehradun",
    state: "Uttarakhand",
    region: "North",
    tier: "Tier 2",
    badge: "Education & Tourism Hub",
    description: "GST registration, hospitality bookkeeping, and annual ITR compliance for businesses in Dehradun, Haridwar, and Rishikesh.",
    serviceDelivery: "Remote Digital Compliance",
    popularServices: ["GST Registration", "GST Return Filing", "Income Tax Return", "Daily Accounting"],
    commercialEcosystem: "Hospitality, retail chains, pharmaceutical units in SIDCUL, and higher educational institutions requiring organized tax registers.",
    statePortalReference: {
      name: "State Tax Department, Uttarakhand",
      url: "https://state.tax.uk.gov.in",
    },
    localFaqs: [
      {
        question: "What is the turnover threshold for GST registration in Uttarakhand?",
        answer: "Uttarakhand is a hill state; however, for general supply of goods the threshold is ₹40 Lakhs (subject to specific category conditions) and ₹20 Lakhs for services.",
      },
    ],
  },
  {
    id: "jammu-kashmir",
    city: "Jammu & Srinagar",
    state: "Jammu & Kashmir",
    region: "North",
    tier: "Regional Hub",
    badge: "Trade, Horticulture & Handicrafts",
    description: "End-to-end GST return filing, MSME Udyam registration, and tax filings for apple growers, carpet artisans, hotel operators, and traders across J&K.",
    serviceDelivery: "100% Online Digital Documentation",
    popularServices: ["GST Registration", "GST Return Filing", "MSME / Udyam Registration", "Income Tax Return"],
    commercialEcosystem: "Agro-processing, dry fruits, saffron, tourism, and wooden handicrafts trade requiring seamless interstate IGST documentation.",
    statePortalReference: {
      name: "State Taxes Department, Jammu & Kashmir",
      url: "https://jkcomtax.gov.in",
    },
    localFaqs: [
      {
        question: "Can J&K traders sell on Amazon and Flipkart with our GST assistance?",
        answer: "Yes, we prepare full GST documentation and help configure e-commerce marketplace accounts for J&K sellers.",
      },
    ],
  },

  // --- WEST REGION ---
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    region: "West",
    tier: "Tier 1",
    badge: "Financial Capital of India",
    description: "End-to-end bookkeeping, GST filing, and financial statement compilation for Mumbai businesses in BKC, Lower Parel, Andheri, and Thane industrial belts.",
    serviceDelivery: "100% Digital Remote Onboarding & Pan-India Desk",
    popularServices: [
      "GST Registration",
      "TDS Payment Assistance",
      "Bank Reconciliation",
      "Income Tax Return Filing",
    ],
    commercialEcosystem: "Dynamic trading, financial advisory, media production houses, and export firms requiring precise TDS deductions (194J/194C) and multi-bank BRS.",
    statePortalReference: {
      name: "Maharashtra Goods and Services Tax Department",
      url: "https://mahagst.gov.in",
    },
    localFaqs: [
      {
        question: "Do you handle Maharashtra Professional Tax (PT) coordination alongside GST?",
        answer: "Yes, for Mumbai clients enrolled in monthly accounting retainers, we assist with PTRC / PTEC registration coordination and monthly challan calculation.",
      },
      {
        question: "Can freelance media professionals in Andheri use Taxoras for GST filing?",
        answer: "Yes, we provide affordable monthly/quarterly packages for creative directors, actors, cinematographers, and consultants.",
      },
    ],
  },
  {
    id: "pune",
    city: "Pune",
    state: "Maharashtra",
    region: "West",
    tier: "Tier 1 Hub",
    badge: "Automobile & Tech Innovation Hub",
    description: "Digital GST return filing, vendor TDS compliance, and automated accounting for software startups in Hinjawadi, auto-ancillaries in Bhosari/Chakan, and retail outlets.",
    serviceDelivery: "Cloud-First Remote Compliance Desk",
    popularServices: ["GST Return Filing", "TDS Return Filing", "Daily Accounting", "Balance Sheet"],
    commercialEcosystem: "India's premier engineering and automotive manufacturing corridor coupled with deep tech software parks requiring export LUT filings and sub-contractor TDS tracking.",
    statePortalReference: {
      name: "Maharashtra Goods and Services Tax Department",
      url: "https://mahagst.gov.in",
    },
    localFaqs: [
      {
        question: "How do Pune engineering contractors manage sub-contractor TDS?",
        answer: "We prepare Form 26Q with Section 194C rates (1% for individuals/HUF, 2% for companies) and reconcile quarterly challans.",
      },
      {
        question: "Can Hinjawadi IT companies file export LUT through Taxoras?",
        answer: "Yes, we file annual RFD-11 LUTs to enable 0% tax export billing for Pune IT services.",
      },
    ],
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    region: "West",
    tier: "Tier 1",
    badge: "Industrial & Textile Capital",
    description: "Structured bookkeeping, debtor aging schedules, and GST e-invoicing compliance for chemical, textile, and wholesale traders across Ahmedabad and Sanand.",
    serviceDelivery: "100% Digital Accounting Support",
    popularServices: [
      "Debtors & Creditors Reconciliation",
      "GST Return Filing",
      "Balance Sheet",
      "Bank Reconciliation",
    ],
    commercialEcosystem: "Manufacturing clusters with heavy B2B transaction volumes requiring high-efficiency invoice matching and MSME 45-day payment tracking.",
    statePortalReference: {
      name: "Gujarat Commercial Tax Department",
      url: "https://commercialtax.gujarat.gov.in",
    },
    localFaqs: [
      {
        question: "Can you handle high invoice volumes for Gujarat manufacturing units?",
        answer: "Yes. We support custom packages handling 500 to 2,000+ monthly vouchers with automated Tally/Excel ledger imports.",
      },
      {
        question: "Does Taxoras help with Gujarat GST E-way bills?",
        answer: "We assist clients with generating and validating Part-A and Part-B E-way bills for consignment values exceeding ₹50,000.",
      },
    ],
  },
  {
    id: "surat",
    city: "Surat",
    state: "Gujarat",
    region: "West",
    tier: "Tier 2",
    badge: "Diamond & Synthetic Textile Capital",
    description: "Specialized bookkeeping, yarn/fabric GST matching, and diamond merchant ledger maintenance across Surat textile markets and Katargam.",
    serviceDelivery: "Fast Online Onboarding & Regional Support",
    popularServices: ["GST Return Filing", "Daily Accounting", "Bank Reconciliation", "MSME / Udyam Registration"],
    commercialEcosystem: "World-renowned diamond cutting, polishing, and synthetic textile weaving markets with complex inverted tax structure refund requirements.",
    statePortalReference: {
      name: "Gujarat Commercial Tax Department",
      url: "https://commercialtax.gujarat.gov.in",
    },
    localFaqs: [
      {
        question: "How do Surat textile manufacturers handle inverted duty refund under GST?",
        answer: "We verify input tax credit on inputs vs output rates to calculate and file refund claims under Rule 89(5).",
      },
    ],
  },
  {
    id: "vadodara",
    city: "Vadodara",
    state: "Gujarat",
    region: "West",
    tier: "Tier 2",
    badge: "Chemical & Engineering Belt",
    description: "Cost-effective GST compliance, TDS management, and ledger reconciliation for chemical plants, engineering consultants, and traders in Vadodara.",
    serviceDelivery: "Digital Desk & Cloud Folders",
    popularServices: ["GST Return Filing", "TDS Return Filing", "Daily Accounting", "Balance Sheet"],
    commercialEcosystem: "Petrochemical, fertilizer, and heavy industrial machinery corridor with strict B2B vendor invoice verification.",
    statePortalReference: {
      name: "Gujarat Commercial Tax Department",
      url: "https://commercialtax.gujarat.gov.in",
    },
    localFaqs: [
      {
        question: "Can Vadodara MSMEs get audited financial statements prepared?",
        answer: "We compile year-end balance sheets and profit & loss statements ready for statutory audit by your external CA.",
      },
    ],
  },
  {
    id: "nagpur",
    city: "Nagpur",
    state: "Maharashtra",
    region: "West",
    tier: "Tier 2",
    badge: "Logistics & Central Commerce Hub",
    description: "Tax filing, warehouse ledger accounting, and GST compliance for multi-modal logistics operators, citrus agro-industries, and retailers in Nagpur.",
    serviceDelivery: "Remote Digital Desk",
    popularServices: ["GST Return Filing", "Daily Accounting", "Income Tax Return", "MSME / Udyam Registration"],
    commercialEcosystem: "Strategic central geographic node of India (MIHAN SEZ) driving multi-state transport, storage, and cross-docking distribution businesses.",
    statePortalReference: {
      name: "Maharashtra Goods and Services Tax Department",
      url: "https://mahagst.gov.in",
    },
    localFaqs: [
      {
        question: "How does GST apply to Nagpur transport and warehouse agencies?",
        answer: "We advise on GTA consignment note rules, 5% without ITC vs 12% with ITC options, and reverse charge liability (RCM).",
      },
    ],
  },
  {
    id: "goa",
    city: "Panaji & Margao",
    state: "Goa",
    region: "West",
    tier: "State Hub",
    badge: "Tourism, Hospitality & Maritime",
    description: "Hotel and resort GST returns, restaurant daily accounting, and export compliance for hospitality and pharmaceutical ventures across North & South Goa.",
    serviceDelivery: "100% Online Digital Intake",
    popularServices: ["GST Return Filing", "Daily Accounting", "TDS Return Filing", "Income Tax Return"],
    commercialEcosystem: "Thriving hospitality sector, coastal logistics, IT remote workers, and pharmaceutical industrial estates in Verna.",
    statePortalReference: {
      name: "Department of Commercial Taxes, Government of Goa",
      url: "https://goagst.gov.in",
    },
    localFaqs: [
      {
        question: "What is the GST rate for Goa restaurants and beach resorts?",
        answer: "Standalone restaurants charge 5% GST (without ITC), whereas hotel room tariffs above ₹7,500/night charge 18% with ITC.",
      },
    ],
  },

  // --- SOUTH REGION ---
  {
    id: "bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South",
    tier: "Tier 1",
    badge: "Startup & Tech Capital",
    description: "Tailored compliance for SaaS startups, product tech firms, freelance developers, and agencies in Koramangala, Indiranagar, HSR Layout, and Whitefield.",
    serviceDelivery: "100% Digital Cloud-First Accounting",
    popularServices: [
      "TDS Return Filing",
      "GST Return Filing",
      "MSME / Udyam Registration",
      "Income Tax Return",
    ],
    commercialEcosystem: "SaaS exports with LUT (Letter of Undertaking), foreign inward remittance certificates (FIRC), and contractor withholding compliance.",
    statePortalReference: {
      name: "Karnataka Commercial Taxes Department",
      url: "https://karnatakatax.gov.in",
    },
    localFaqs: [
      {
        question: "How do software startups in Bengaluru export services with zero GST?",
        answer: "We assist in filing Form GST RFD-11 (Letter of Undertaking / LUT) annually, enabling tech companies to export software and services without upfront payment of IGST.",
      },
      {
        question: "Can Bengaluru freelancers file ITR under presumptive taxation?",
        answer: "Yes, software freelancers earning under ₹50 Lakhs (or ₹75 Lakhs with 95% digital receipts) can declare 50% profit under Section 44ADA.",
      },
    ],
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    region: "South",
    tier: "Tier 1",
    badge: "Pharma, Biotech & IT Hub",
    description: "Managed GST return filing, vendor reconciliations, and bookkeeping for HITEC City software companies, Genome Valley pharma labs, and Secunderabad traders.",
    serviceDelivery: "Digital Cloud Accounting with Dedicated Lead",
    popularServices: ["GST Return Filing", "TDS Return Filing", "Daily Accounting", "Balance Sheet"],
    commercialEcosystem: "High-growth tech corridor, bulk drug manufacturing, and real estate developers requiring strict GSTR-2B ITC matching and RCM accounting.",
    statePortalReference: {
      name: "Commercial Taxes Department, Telangana",
      url: "https://tgct.gov.in",
    },
    localFaqs: [
      {
        question: "Do Hyderabad IT firms need Telangana state GST registration for remote staff?",
        answer: "A single GSTIN in Telangana is sufficient if your principal office is in Hyderabad, even if employees work remotely across the state.",
      },
      {
        question: "How does Taxoras help Hyderabad pharma suppliers with B2B e-invoicing?",
        answer: "We assist businesses crossing turnover thresholds in generating IRN (Invoice Reference Number) and QR codes seamlessly.",
      },
    ],
  },
  {
    id: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "South",
    tier: "Tier 1",
    badge: "Automotive, Hardware & Port Gateway",
    description: "Manufacturing bookkeeping, export documentation, and GST compliance for auto suppliers in Sriperumbudur, SaaS firms in OMR, and hardware traders in George Town.",
    serviceDelivery: "Digital Intake & Comprehensive Accounting Retainer",
    popularServices: ["GST Return Filing", "Debtors & Creditors Reconciliation", "Daily Accounting", "TDS Return Filing"],
    commercialEcosystem: "India's Detroit coupled with a top SaaS exporting cluster and international shipping ports, necessitating flawless cross-border documentation.",
    statePortalReference: {
      name: "Commercial Taxes Department, Tamil Nadu",
      url: "https://ctax.tn.gov.in",
    },
    localFaqs: [
      {
        question: "What are the rules for Tamil Nadu e-way bill generation for intra-state goods?",
        answer: "Intra-state e-way bills are mandatory for consignments of taxable goods exceeding ₹1,00,000 in Tamil Nadu (₹50,000 for inter-state).",
      },
    ],
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    state: "Tamil Nadu",
    region: "South",
    tier: "Tier 2",
    badge: "Textile & Pump Manufacturing Hub",
    description: "Industrial bookkeeping, MSME Udyam registration, and GST filing for pump manufacturers, textile spinning mills, and auto casting foundries in Coimbatore.",
    serviceDelivery: "Remote Digital Accounting Desk",
    popularServices: ["Daily Accounting", "GST Return Filing", "MSME / Udyam Registration", "Balance Sheet"],
    commercialEcosystem: "Heavy precision engineering, textile machinery, and motor manufacturing clusters with high local vendor transaction counts.",
    statePortalReference: {
      name: "Commercial Taxes Department, Tamil Nadu",
      url: "https://ctax.tn.gov.in",
    },
    localFaqs: [
      {
        question: "Can Coimbatore MSME manufacturers get bank-ready balance sheets?",
        answer: "Yes, our team compiles monthly trial balances and depreciation registers tailored for SME bank credit limit renewals.",
      },
    ],
  },
  {
    id: "kochi",
    city: "Kochi (Cochin)",
    state: "Kerala",
    region: "South",
    tier: "Tier 2",
    badge: "Maritime, Spices & IT Hub",
    description: "Export GST filing, spice trade bookkeeping, and tourism taxation for enterprises across Infopark Kakkanad, Willingdon Island, and Fort Kochi.",
    serviceDelivery: "Digital Cloud Accounting",
    popularServices: ["GST Return Filing", "Income Tax Return", "Bank Reconciliation", "MSME / Udyam Registration"],
    commercialEcosystem: "Major international container transshipment terminal, spice auctions, seafood exporters, and burgeoning IT startup parks.",
    statePortalReference: {
      name: "State Goods and Services Tax Department, Kerala",
      url: "https://keralataxes.gov.in",
    },
    localFaqs: [
      {
        question: "What is the procedure for zero-rated spice and seafood exports from Kochi?",
        answer: "We verify export invoices against shipping bills and handle monthly GST refund applications on zero-rated supplies.",
      },
    ],
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam (Vizag)",
    state: "Andhra Pradesh",
    region: "South",
    tier: "Tier 2",
    badge: "Steel, Port & Petroleum Center",
    description: "Heavy engineering bookkeeping, shipping agency compliance, and GST filing for businesses across Vizag Steel plant belt and port terminals.",
    serviceDelivery: "Remote Digital Support Desk",
    popularServices: ["GST Return Filing", "Daily Accounting", "TDS Return Filing", "Balance Sheet"],
    commercialEcosystem: "Eastern naval command, deep-water port, heavy industry, and pharma city at Parawada with large B2B commercial contracting.",
    statePortalReference: {
      name: "Commercial Taxes Department, Andhra Pradesh",
      url: "https://apct.gov.in",
    },
    localFaqs: [
      {
        question: "How do Vizag shipping agents reconcile port TDS deductions?",
        answer: "We verify Form 26AS / AIS against port billings to ensure all Section 194C and 194J credits are accurately credited.",
      },
    ],
  },

  // --- EAST & CENTRAL REGION ---
  {
    id: "kolkata",
    city: "Kolkata",
    state: "West Bengal",
    region: "East & Central",
    tier: "Tier 1",
    badge: "Eastern Commercial & Port Gateway",
    description: "Accounting, GST filing, and regulatory reconciliations for traders in Burrabazar, tea exporters in Dalhousie, and tech firms in Salt Lake Sector V.",
    serviceDelivery: "100% Online Digital Intake & CA Desk",
    popularServices: [
      "GST Return Filing",
      "Daily Accounting",
      "Debtors & Creditors Reconciliation",
      "Income Tax Return",
    ],
    commercialEcosystem: "Commercial gateway to Northeast India and neighbouring countries with sprawling wholesale markets and thriving IT/BPO service clusters.",
    statePortalReference: {
      name: "Directorate of Commercial Taxes, West Bengal",
      url: "https://wbcomtax.gov.in",
    },
    localFaqs: [
      {
        question: "Can Burrabazar wholesale traders manage high daily billing on Taxoras?",
        answer: "Yes, we handle daily and monthly sales/purchase imports from Tally, Busy, or Excel, keeping your GSTR-1 reconciled.",
      },
      {
        question: "Does West Bengal require separate professional tax filing?",
        answer: "Yes, employers must deduct and pay WB Profession Tax monthly/annually, which we coordinate for enrolled accounting clients.",
      },
    ],
  },
  {
    id: "indore",
    city: "Indore",
    state: "Madhya Pradesh",
    region: "East & Central",
    tier: "Tier 2",
    badge: "Commercial & Food Processing Capital of MP",
    description: "Bookkeeping, GST filing, and inventory ledger reconciliation for soya oil plants, FMCG wholesalers, and confectionery units in Indore and Pithampur.",
    serviceDelivery: "Cloud Intake & Fast Regional Response",
    popularServices: ["GST Return Filing", "Daily Accounting", "MSME / Udyam Registration", "Balance Sheet"],
    commercialEcosystem: "Premier trading hub of central India connecting Maharashtra, Gujarat, and Rajasthan, with heavy mandi and industrial park commerce.",
    statePortalReference: {
      name: "Commercial Tax Department, Madhya Pradesh",
      url: "https://mptax.mp.gov.in",
    },
    localFaqs: [
      {
        question: "Are agro-commodities in Indore exempt from GST?",
        answer: "Unbranded fresh agricultural products are exempt, but branded, pre-packaged agro items attract 5% GST. We ensure correct HSN classification.",
      },
    ],
  },
  {
    id: "bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    region: "East & Central",
    tier: "Tier 2",
    badge: "Administrative & Engineering Hub",
    description: "Civil contractor TDS filing, MSME registration, and GST compliance for engineering fabricators in Mandideep and traders across Bhopal.",
    serviceDelivery: "Remote Digital Desk",
    popularServices: ["GST Return Filing", "Income Tax Return", "TDS Return Filing", "Daily Accounting"],
    commercialEcosystem: "Heavy electrical manufacturing (BHEL corridor), government contractors, and retail distribution networks.",
    statePortalReference: {
      name: "Commercial Tax Department, Madhya Pradesh",
      url: "https://mptax.mp.gov.in",
    },
    localFaqs: [
      {
        question: "Do Bhopal government contractors need quarterly TDS compliance assistance?",
        answer: "Yes, we reconcile government TDS deductions (Form 16A) and match them with client revenue ledgers.",
      },
    ],
  },
  {
    id: "patna",
    city: "Patna",
    state: "Bihar",
    region: "East & Central",
    tier: "Tier 2",
    badge: "Consumer Market & Distribution Center",
    description: "GST registration, retail accounting, and annual income tax filing for pharmaceutical stockists, construction material suppliers, and retailers in Patna.",
    serviceDelivery: "100% Online Digital Delivery",
    popularServices: ["GST Registration", "GST Return Filing", "Income Tax Return", "MSME / Udyam Registration"],
    commercialEcosystem: "One of eastern India's fastest expanding FMCG, healthcare, and retail distribution centers with substantial inter-state inward goods trade.",
    statePortalReference: {
      name: "Commercial Taxes Department, Bihar",
      url: "https://commercialtax.bihar.gov.in",
    },
    localFaqs: [
      {
        question: "How can Patna retail shopkeepers obtain a GST number quickly?",
        answer: "Submit PAN, Aadhaar, electricity bill, and rent agreement. We prepare and submit Form GST REG-01 within 24 hours.",
      },
    ],
  },
  {
    id: "bhubaneswar",
    city: "Bhubaneswar & Cuttack",
    state: "Odisha",
    region: "East & Central",
    tier: "Tier 2",
    badge: "Mining Ancillary & IT Hub",
    description: "Mining equipment ledger accounting, GST return filing, and ITR compliance for logistics operators, IT parks, and manufacturers in Bhubaneswar.",
    serviceDelivery: "Digital Accounting Desk",
    popularServices: ["GST Return Filing", "Daily Accounting", "TDS Return Filing", "Balance Sheet"],
    commercialEcosystem: "Mineral processing, steel fabrication ancillaries, port transport, and modern software technology parks (Infocity).",
    statePortalReference: {
      name: "Commercial Tax Department, Odisha",
      url: "https://odishatax.gov.in",
    },
    localFaqs: [
      {
        question: "How are e-way bills monitored for mineral and metal movement in Odisha?",
        answer: "Odisha tax authorities maintain rigorous checkpoints; we ensure all outward supplies have valid e-way bills with updated vehicle details.",
      },
    ],
  },
  {
    id: "raipur",
    city: "Raipur",
    state: "Chhattisgarh",
    region: "East & Central",
    tier: "Tier 2",
    badge: "Steel, Sponge Iron & Power Capital",
    description: "Heavy manufacturing bookkeeping, GST purchase matching, and corporate compliance for rolling mills, power plants, and traders in Raipur.",
    serviceDelivery: "Remote Digital Accounting Desk",
    popularServices: ["GST Return Filing", "Debtors & Creditors Reconciliation", "Daily Accounting", "Balance Sheet"],
    commercialEcosystem: "Major steel rolling, cement, and power industrial clusters generating multi-crore B2B invoice matching requirements.",
    statePortalReference: {
      name: "Commercial Tax Department, Chhattisgarh",
      url: "https://comtax.cg.nic.in",
    },
    localFaqs: [
      {
        question: "Can Raipur industrial units reconcile huge monthly purchase bills?",
        answer: "Yes, our team reconciles hundreds of supplier invoices against GSTR-2B to prevent loss of eligible input tax credit.",
      },
    ],
  },
  {
    id: "ranchi",
    city: "Ranchi & Jamshedpur",
    state: "Jharkhand",
    region: "East & Central",
    tier: "Tier 2",
    badge: "Industrial & Mining Heartland",
    description: "Heavy industrial accounting, vendor TDS filing, and GST return management for auto-ancillaries, coal transporters, and suppliers across Ranchi and Jamshedpur.",
    serviceDelivery: "Digital Desk & Cloud Ledgers",
    popularServices: ["GST Return Filing", "Daily Accounting", "TDS Return Filing", "Balance Sheet"],
    commercialEcosystem: "Epicenter of India's steel, automotive (Tata Motors ecosystem), and mineral logistics industries.",
    statePortalReference: {
      name: "Commercial Taxes Department, Jharkhand",
      url: "https://jharkhandcomtax.gov.in",
    },
    localFaqs: [
      {
        question: "How does Taxoras help Jharkhand transport and mining contractors?",
        answer: "We structure daily vehicle expense vouchers, driver salary TDS, and GST reverse charge mechanism (RCM) documentation.",
      },
    ],
  },
  {
    id: "guwahati",
    city: "Guwahati",
    state: "Assam",
    region: "East & Central",
    tier: "Regional Hub",
    badge: "Gateway to the Northeast",
    description: "GST registration, tea broking ledgers, and trade compliance for distributors, hospitality units, and retail chains across Assam and the Northeast.",
    serviceDelivery: "100% Online Digital Intake",
    popularServices: ["GST Registration", "GST Return Filing", "Income Tax Return", "MSME / Udyam Registration"],
    commercialEcosystem: "Northeast India's financial, educational, and logistics powerhouse connecting all 7 sister states with the national mainland.",
    statePortalReference: {
      name: "Commissioner of Taxes, Assam",
      url: "https://tax.assam.gov.in",
    },
    localFaqs: [
      {
        question: "What are the turnover limits for GST registration in Assam and Northeast states?",
        answer: "Assam follows the general limit of ₹40 Lakhs for goods and ₹20 Lakhs for services; special category NE states (like Manipur, Mizoram, Nagaland, Tripura) have a ₹10 Lakh / ₹20 Lakh threshold.",
      },
    ],
  },
];

// Pre-defined customized service location pages for highest-intent searches
const customServiceLocations: ServiceLocationPage[] = [
  {
    citySlug: "bengaluru",
    serviceSlug: "gst-return-filing",
    title: "GST Return Filing Services in Karnataka (Bengaluru & Tier 2 Hubs)",
    headline: "Best GST Return Filing in Karnataka: 100% GSTR-2B Matching, Export LUT & CA Review",
    description: "Rated 4.9/5 by 500+ businesses. Taxoras provides monthly GSTR-1, GSTR-3B filing, Karnataka Commercial Taxes compliance, and Export LUT (RFD-11) renewal for Bengaluru startups, SaaS exporters, and traders across Mysuru, Hubballi, and Mangaluru starting at ₹799/month.",
    localContext: "Serving Karnataka's dynamic commercial corridor across Bengaluru (Koramangala, Indiranagar, HSR Layout, Whitefield, Electronic City) and Tier 2 cities including Mysuru, Hubballi-Dharwad, Mangaluru, and Belagavi. We ensure complete alignment with the Karnataka Commercial Taxes Department (karnatakatax.gov.in), Form GST RFD-11 LUT filings for IT exporters, Karnataka Professional Tax (PT) coordination, and monthly GSTR-2B invoice-by-invoice reconciliation under Section 16(4) to eliminate tax notices.",
  },
  {
    citySlug: "delhi",
    serviceSlug: "gst-return-filing",
    title: "GST Return Filing Services in Delhi NCR (Delhi, Noida & Gurgaon)",
    headline: "Best GST Return Filing in Delhi NCR: On-Time GSTR-1 & 3B with ₹0 Penalty Guarantee",
    description: "Rated 4.9/5 by 500+ Indian MSMEs. Dedicated Chartered Accountant review for Delhi NCR traders, Connaught Place agencies, and Okhla manufacturers starting at ₹799/month. Includes 100% GSTR-2B purchase matching.",
    localContext: "Supporting over 1 million registered taxpayers across Delhi (Chandni Chowk, Sadar Bazar, Connaught Place, Nehru Place, Okhla) and satellite industrial hubs in Noida, Greater Noida, and Gurugram. We navigate multi-state interstate IGST movements, cross-border E-way bills, and strict reconciliation against Delhi Department of Trade and Taxes (dvat.gov.in) scrutiny.",
  },
  {
    citySlug: "delhi",
    serviceSlug: "gst-registration",
    title: "GST Registration Assistance in Delhi NCR",
    headline: "Fast, Reliable GST Registration for Delhi Businesses & Startups",
    description: "Complete document review, TRN generation, Aadhaar verification coordination, and REG-06 certificate delivery for Delhi proprietorships, LLPs, and companies.",
    localContext: "Whether your business is located in Connaught Place, Nehru Place, Chandni Chowk, or Okhla Industrial Area, we guide you through proper ward jurisdiction and documentation.",
  },
  {
    citySlug: "mumbai",
    serviceSlug: "gst-return-filing",
    title: "GST Return Filing Services in Maharashtra (Mumbai, Pune & Thane)",
    headline: "Best GST Return Filing in Maharashtra: GSTR-1, GSTR-3B & 100% 2B Reconciliation",
    description: "Rated 4.9/5 with 500+ businesses served. Monthly GST return filing, Maharashtra Professional Tax (PTEC/PTRC) coordination, and CA review for Mumbai, Pune, Thane, and Nashik businesses starting at ₹799/month.",
    localContext: "Operating across Mumbai (BKC, Lower Parel, Andheri, Fort, Navi Mumbai) and Maharashtra's industrial belt including Pune, Thane, Nagpur, and Nashik. We manage full compliance with the Maharashtra Goods and Services Tax Department (mahagst.gov.in), high-volume B2B wholesale invoice matching, media and creative agency billing, and DRC-01B/DRC-01C notice defense with zero statutory penalty record.",
  },
  {
    citySlug: "mumbai",
    serviceSlug: "gst-registration",
    title: "GST Registration Assistance in Mumbai & Thane",
    headline: "Fast, Compliant GST Registration for Mumbai Businesses & Startups",
    description: "Get your GSTIN application prepared, premises documents verified, and Aadhaar authentication completed smoothly.",
    localContext: "Whether you operate from a commercial office in Nariman Point or a registered home office in suburbs, we guide you on Mumbai jurisdiction ward selection.",
  },
  {
    citySlug: "ahmedabad",
    serviceSlug: "gst-return-filing",
    title: "GST Return Filing Services in Gujarat (Ahmedabad, Surat & Vadodara)",
    headline: "High-Volume B2B GST Return Filing in Gujarat: Textile, Chemical & Diamond Hubs",
    description: "Rated 4.9/5 by 500+ manufacturers and traders. Managed GSTR-1, GSTR-3B, e-invoicing, and inverted duty refund compliance across Ahmedabad, Surat, Vadodara, and Rajkot starting at ₹799/month.",
    localContext: "Designed for Gujarat's massive manufacturing and trade ecosystem across Ahmedabad, Surat textile/diamond markets, Vadodara chemical corridors, and Rajkot engineering clusters. We align filings with Gujarat Commercial Tax Department (commercialtax.gujarat.gov.in), manage multi-tier vendor invoice verification, and ensure Section 43B(h) MSME 45-day payment tracking.",
  },
  {
    citySlug: "chennai",
    serviceSlug: "gst-return-filing",
    title: "GST Return Filing Services in Tamil Nadu (Chennai & Coimbatore)",
    headline: "Best GST Return Filing in Tamil Nadu: Automotive, SaaS & Textile Manufacturing",
    description: "Rated 4.9/5 by 500+ businesses. Monthly GSTR-1 & GSTR-3B filing, e-way bills, and vendor ITC reconciliation across Chennai, Coimbatore, Madurai, and Tiruchirappalli starting at ₹799/month.",
    localContext: "Serving industrial clusters across Chennai (OMR, Guindy, Sriperumbudur), Coimbatore precision engineering foundries, and Tirupur garment exporters. Compliant with Commercial Taxes Department Tamil Nadu (ctax.tn.gov.in) rules, monthly GSTR-2B purchase matching, and export documentation.",
  },
  {
    citySlug: "hyderabad",
    serviceSlug: "gst-return-filing",
    title: "GST Return Filing Services in Telangana (Hyderabad & Secunderabad)",
    headline: "Best GST Return Filing in Telangana: Tech, Pharma & B2B Commercial Desks",
    description: "Rated 4.9/5 by 500+ companies. Prompt GSTR-1, GSTR-3B filing, export LUT renewals, and vendor reconciliations across Hyderabad, HITEC City, and Warangal starting at ₹799/month.",
    localContext: "Serving software startups in HITEC City/Gachibowli, pharmaceutical manufacturers in Genome Valley, and retail distributors in Secunderabad. We ensure 100% adherence to Commercial Taxes Department Telangana (tgct.gov.in) norms, RCM accounting, and foreign export LUT compliance.",
  },
  {
    citySlug: "lucknow",
    serviceSlug: "gst-return-filing",
    title: "GST Return Filing Services in Uttar Pradesh (Lucknow, Kanpur & Noida)",
    headline: "Best GST Return Filing in UP: Retailers, Wholesale Distributors & Civil Contractors",
    description: "Rated 4.9/5 by 500+ MSMEs. On-time monthly GSTR-1 and GSTR-3B filing, TDS compliance, and purchase ledger reconciliations across Lucknow, Kanpur, Noida, Agra, and Varanasi starting at ₹799/month.",
    localContext: "Supporting expanding commercial networks across Lucknow (Hazratganj, Transport Nagar), Kanpur leather and textile trade, Noida tech corridors, and Agra retail clusters. Fully aligned with Commercial Tax Department Uttar Pradesh (comtax.up.nic.in), e-way bills, and ASMT-10 notice protection.",
  },
  {
    citySlug: "kolkata",
    serviceSlug: "gst-return-filing",
    title: "GST Return Filing Services in West Bengal (Kolkata & Howrah)",
    headline: "Best GST Return Filing in West Bengal: Burrabazar Traders & Sector V Tech Hubs",
    description: "Rated 4.9/5 by 500+ businesses. Monthly GSTR-1 & 3B filing, West Bengal Professional Tax coordination, and vendor ITC reconciliation across Kolkata, Howrah, and Siliguri starting at ₹799/month.",
    localContext: "Serving wholesale distributors in Burrabazar, manufacturing foundries in Howrah, and IT enterprises in Salt Lake Sector V and New Town. Direct alignment with Directorate of Commercial Taxes West Bengal (wbcomtax.gov.in) and zero penalty filing record.",
  },
  {
    citySlug: "jaipur",
    serviceSlug: "daily-accounting",
    title: "Day-to-Day Accounting & Bookkeeping Services in Jaipur",
    headline: "Organized Bookkeeping & Ledgers for Jaipur Traders and Exporters",
    description: "Keep your sales vouchers, expense bills, and bank accounts balanced without hiring an expensive in-house accountant in Jaipur.",
    localContext: "From handicraft exporters in Sitapura to jewelers in Johari Bazar, our digital bookkeeping system keeps ledgers audit-ready with monthly trial balance summaries.",
  },
  {
    citySlug: "pune",
    serviceSlug: "gst-return-filing",
    title: "GST Return Filing Services in Pune, Maharashtra",
    headline: "Accurate GSTR-1, GSTR-3B & ITC Reconciliation for Pune Businesses",
    description: "Avoid DRC-01C mismatches and late fees. Taxoras manages monthly GST compliance for IT agencies, auto manufacturers, and traders in Pune.",
    localContext: "Serving enterprises across Hinjawadi, Bhosari, Kothrud, and Chakan with 100% digital onboarding and dedicated compliance support.",
  },
];

// Helper: Get location by ID (slug)
export function getLocationById(id: string): LocationItem | undefined {
  return allLocations.find((loc) => loc.id === id);
}

// Dynamic + Explicit Service Location resolver: ensures EVERY valid city + service works!
export function getServiceLocation(citySlug: string, serviceSlug: string): ServiceLocationPage | undefined {
  const explicit = customServiceLocations.find((sl) => sl.citySlug === citySlug && sl.serviceSlug === serviceSlug);
  if (explicit) {
    return explicit;
  }

  const loc = getLocationById(citySlug);
  const svc = getServiceBySlug(serviceSlug);
  if (!loc || !svc) {
    return undefined;
  }

  return {
    citySlug: loc.id,
    serviceSlug: svc.slug,
    title: `${svc.title} Services in ${loc.city}, ${loc.state}`,
    headline: `Professional ${svc.title} for ${loc.city} Businesses & Startups`,
    description: `Reliable, affordable ${(svc.shortTitle || svc.title).toLowerCase()} services for businesses in ${loc.city}. Timely compliance, document review, and dedicated CA desk at transparent pricing starting at ₹799/month.`,
    localContext: `Serving enterprises, startups, MSMEs, traders, and professionals across ${loc.city} and ${loc.state}. We ensure 100% adherence to ${loc.statePortalReference.name} regulations and Central GST guidelines with remote digital onboarding.`,
  };
}

// Generate the primary static service locations (all custom plus top services across all locations)
function generateTopServiceLocations(): ServiceLocationPage[] {
  const results: ServiceLocationPage[] = [...customServiceLocations];
  const seen = new Set(results.map((r) => `${r.citySlug}/${r.serviceSlug}`));

  // Top high-demand services to pair with every major city
  const topServices = [
    "gst-return-filing",
    "gst-registration",
    "daily-accounting",
    "tds-return-filing",
    "income-tax-return",
    "msme-udyam-registration",
  ];

  for (const loc of allLocations) {
    for (const svcSlug of topServices) {
      const key = `${loc.id}/${svcSlug}`;
      if (!seen.has(key)) {
        const item = getServiceLocation(loc.id, svcSlug);
        if (item) {
          results.push(item);
          seen.add(key);
        }
      }
    }
  }

  return results;
}

export const allServiceLocations: ServiceLocationPage[] = generateTopServiceLocations();

// Geographic Regional groupings for Footer & Navigation
export interface RegionDirectory {
  region: "North" | "West" | "South" | "East & Central";
  description: string;
  locations: LocationItem[];
}

export const regionalDirectories: RegionDirectory[] = [
  {
    region: "North",
    description: "Delhi NCR, Uttar Pradesh, Haryana, Punjab, Rajasthan, Chandigarh, Uttarakhand, J&K",
    locations: allLocations.filter((l) => l.region === "North"),
  },
  {
    region: "West",
    description: "Maharashtra, Gujarat, Goa & Western Industrial Belt",
    locations: allLocations.filter((l) => l.region === "West"),
  },
  {
    region: "South",
    description: "Karnataka, Telangana, Tamil Nadu, Kerala, Andhra Pradesh Tech & Coastal Corridors",
    locations: allLocations.filter((l) => l.region === "South"),
  },
  {
    region: "East & Central",
    description: "West Bengal, Madhya Pradesh, Bihar, Odisha, Chhattisgarh, Jharkhand, Assam & Northeast",
    locations: allLocations.filter((l) => l.region === "East & Central"),
  },
];
