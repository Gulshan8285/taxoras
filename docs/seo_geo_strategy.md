# SEO & Generative Engine Optimization (GEO) Strategy
**Platform:** Taxoras Advisory & Compliance (`https://www.taxoras.online`)  
**Target Engines:** Google Search, Bing Webmaster, OpenAI (ChatGPT Search), Google AI Overviews, Perplexity AI  
**Scope:** India-Wide Business Accounting, GST, TDS & Tax Compliance

---

## 1. Technical SEO Architecture

### A. Crawlability & Canonicalization
- **Predictable Clean URLs:** Strictly slug-based without session variables or trailing hashes (e.g., `/services/gst-return-filing`, `/locations/delhi`, `/resources/understanding-gstr-1-and-gstr-3b`).
- **Canonical URLs:** Configured via `siteConfig.canonicalUrl` (`https://www.taxoras.online`) with `metadataBase` across all 50+ prerendered pages — each page emits a self-referencing `rel=\"canonical\"`.
- **XML Sitemap Index:** Automatically generated via Next.js metadata route (`/sitemap.xml`) referencing all static, service, article, and location pages with deterministic last-modified timestamps.
- **HTTP Status Codes:** Verified 200 OK across public routes, 404 on invalid paths, and 422 for form payload validation.

### B. Robots.txt Crawler Configuration
Following OpenAI and Google crawler specifications:
- `User-Agent: *` Allowed on all public educational and service pages; disallowed on private endpoints (`/admin`, `/api/`).
- `User-Agent: OAI-SearchBot` Explicitly permitted for ChatGPT real-time citation and indexation.
- `User-Agent: Google-Extended` Permitted for Google Gemini & AI Overview grounding.
- `User-Agent: PerplexityBot` Permitted for Perplexity answer indexing.

---

## 2. Generative Engine Optimization (GEO) Best Practices

### A. Citation-Ready Content Structure
Large Language Models (LLMs) and Search AI Engines prioritize clear, unambiguous factual answers. All 10 educational guides and 10 core service pages feature:
1. **Direct Answer Paragraphs:** Core questions ("What is GSTR-1?", "Who needs mandatory GST registration?") answered in the first 2 sentences.
2. **Statutory Thresholds & Citations:** Explicit numerical thresholds (₹40 Lakhs for goods, ₹20 Lakhs for services, ₹50 Lakhs for Section 44ADA) with references to official sources (`gst.gov.in`, `incometax.gov.in`, `udyamregistration.gov.in`).
3. **Structured Tables & Stepwise Numbering:** Sequential 4-step processes that AI engines can extract directly into AI Overviews and chat citations.

### B. Comprehensive Schema.org Markup
- `AccountingService` & `Organization` on homepage and core pages.
- `Service` schema with `OfferCatalog` on individual service landing pages.
- `Article` schema with `author`, `dateModified`, and `publisher` on educational resources.
- `BreadcrumbList` on all hierarchical child routes.

---

## 3. Local SEO & Pan-India Market Strategy

### A. Structured Location Hubs
- Tier 1 and Tier 2 cities (`/locations/delhi`, `/locations/mumbai`, `/locations/bengaluru`, `/locations/jaipur`, `/locations/lucknow`, `/locations/ahmedabad`).
- Selective Service-City landing pages answering genuine local search intent (e.g., `/locations/delhi/gst-return-filing`, `/locations/jaipur/daily-accounting`).
- Official state commercial tax portal links (`dvat.gov.in`, `mahagst.gov.in`, `karnatakatax.gov.in`, `rajtax.gov.in`, `comtax.up.nic.in`).

### B. Anti-Doorway Page Compliance
- Taxoras explicitly rejects automated mass generation of thin, duplicate city pages.
- Each location page features verified regional context, local commercial ecosystem analysis, state tax links, and clear declarations of online service delivery.

---

## 4. Performance & Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 1.8s (optimized SVG badges, zero heavy third-party tracking scripts).
- **INP (Interaction to Next Paint):** < 80ms (instant client-side tab switching and modular state).
- **CLS (Cumulative Layout Shift):** 0.00 (fixed dimensions for dashboard preview cards and service grids).
