# TaxVeda Advisory & Compliance — Pan-India Accounting, GST & Tax Platform

A complete, production-grade, customer-focused web platform for an Indian Accounting, Taxation, and Business Compliance Consultancy Firm built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

Inspired by modern fintech platforms and strategic analysis of Indian competitors (TaxFetch India & Corpbiz), TaxVeda delivers a more transparent, approachable, and affordable compliance experience.

---

## 🚀 Key Modules & Architecture

### 1. Ten Core Service Landing Pages
Every service page includes tailored who-needs-it guides, common challenges, deliverables checklist, required documents, execution timeline, statutory deadlines, FAQs, 3-tier pricing approach, and contextual WhatsApp CTAs:
- **GST Registration** (`/services/gst-registration`)
- **GST Return Filing** (`/services/gst-return-filing`)
- **TDS Return Filing** (`/services/tds-return-filing`)
- **TDS Payment Assistance** (`/services/tds-payment`)
- **Day-to-Day Accounting** (`/services/daily-accounting`)
- **MSME / Udyam Registration** (`/services/msme-udyam-registration`)
- **Bank Reconciliation** (`/services/bank-reconciliation`)
- **Debtors & Creditors Reconciliation** (`/services/debtors-creditors-reconciliation`)
- **Balance Sheet & Financial Statements** (`/services/balance-sheet`)
- **Income Tax Return Filing** (`/services/income-tax-return`)

### 2. Interactive Quick Service & Scope Finder
- An interactive 4-question intake tool on the homepage matching client needs, business constitution, location, and frequency to recommended service packages with indicative transparent pricing.

### 3. Pan-India Location Architecture (`/locations`)
- **Main Hub:** `/locations`
- **City Hubs:** Delhi NCR, Mumbai, Bengaluru, Jaipur, Lucknow, Ahmedabad
- **Curated Service-City Landing Pages:**
  - `/locations/delhi/gst-return-filing`
  - `/locations/jaipur/daily-accounting`
  - `/locations/lucknow/income-tax-return`
  - `/locations/mumbai/gst-registration`
  - `/locations/bengaluru/tds-return-filing`
- Includes state commercial tax portal citations (`dvat.gov.in`, `mahagst.gov.in`, `karnatakatax.gov.in`, etc.) and remote delivery model clarity.

### 4. Industry Compliance Blueprints (`/industries`)
- E-Commerce & D2C Brands (Marketplace settlements & Section 52 TCS)
- Retail Shops & Supermarkets (Daily POS cash/UPI matching & GSTR-2B matching)
- IT Services & Software Exporters (LUT zero-rated export & foreign remittance)
- Manufacturing & Industrial Units (e-Way bills & Section 43B(h) MSME tracking)
- Healthcare & Medical Clinics (Exempt vs. taxable supply segregation & 194J TDS)
- Freelancers & Independent Professionals (Section 44ADA 50% presumptive profit)

### 5. Transparent 3-Tier Pricing Matrix (`/pricing`)
- Side-by-side comparison of **Basic**, **Standard**, and **Premium** tiers for all 10 services.
- Detailed voucher limits, turnaround estimates, included deliverables, exclusions, and best-fit customer classifications.

### 6. Customer Document & Filing Portal (`/portal`)
- Client workspace preview with document checklist tracker.
- Drag-and-drop secure statement upload dropzone with client-side validation.
- Live status tracker for active GST/TDS filings.
- Permanent archive of official government acknowledgements and certificates (Form 27A, GST REG-06, ITR-V).

### 7. Staff Operations Admin Dashboard (`/admin`)
- Metric counters (Total, New, In Progress, Completed/Closed).
- Live search & filter across client name, mobile, city, and status.
- Lead Details Modal with status updater, staff assignment, and internal case notes timeline.
- One-click RFC 4180 **CSV Export**.

### 8. Transparency & Compliance Documentation
- `/document-security` (AES-256 cloud encryption & zero credentials collection)
- `/service-limitations` (Operational boundaries & independent CA attestations)
- `/refund-policy` (Fair prorated refund & cancellation terms)
- `/privacy-policy` (DPDP Act-ready data confidentiality policy)
- `/terms` & `/disclaimer` (Regulatory non-CA / non-Govt disclosures)

### 9. Generative Engine Optimization (GEO) & Search
- Full Schema.org markup (`AccountingService`, `Service`, `Article`, `BreadcrumbList`).
- Configured for Google Search, Bing Webmaster, and AI crawlers (`OAI-SearchBot`, `Google-Extended`, `PerplexityBot`).
- Internal implementation strategy: `docs/seo_geo_strategy.md`.
- Competitor analysis report: `docs/competitor_analysis_report.md`.
- QA interaction audit: `docs/test_report.md`.

---

## 💻 Local Development & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Compile Production Build**:
   ```bash
   npm run build
   ```
   *(All 63 static routes, dynamic service pages, and API handlers compile with zero errors).*

---

## ⚙️ Configuration

Update firm name, phone, WhatsApp number, office address, and email in:  
👉 `src/config/siteConfig.ts`
