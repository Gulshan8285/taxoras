import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/siteConfig";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#D97706",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} | Accounting, GST & Tax Consultancy`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.canonicalUrl),
  alternates: {
    canonical: siteConfig.canonicalUrl,
  },
  authors: [{ name: siteConfig.businessName, url: siteConfig.canonicalUrl }],
  creator: siteConfig.businessName,
  publisher: siteConfig.businessName,
  category: "Finance",
  classification: "Business Accounting & Tax Compliance",
  keywords: [
    "GST Return Filing Services India",
    "Cheapest GST Filing Services",
    "Affordable GST Return Filing Online",
    "GST Return Filing Charges Per Month",
    "GSTR-1 Outward Return Filing",
    "GSTR-3B Filing Services",
    "TDS Return Filing Services",
    "Form 24Q Salary TDS Return",
    "Form 26Q Vendor TDS Return",
    "TDS Payment Assistance Challan 281",
    "Bookkeeping Services for Small Business",
    "Affordable Accounting Services India",
    "Bank Reconciliation Service BRS",
    "Income Tax Return ITR Filing Online",
    "Presumptive Taxation Section 44AD 44ADA",
    "MSME Udyam Registration Online Charges",
    "Balance Sheet Preparation for Bank Loan",
    "GST Registration Online ₹999",
    "Small Business Accountant India",
    "GST Filing Services in Delhi Noida Gurgaon Mumbai Bangalore"
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.businessName,
    type: "website",
    locale: "en_IN",
    url: siteConfig.canonicalUrl,
    images: [
      {
        url: `${siteConfig.canonicalUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.businessName} - ${siteConfig.positioning}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.businessName,
    description: siteConfig.description,
    creator: "@taxoras",
    images: [`${siteConfig.canonicalUrl}/opengraph-image`],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    shortcut: "/icon.svg",
    apple: [{ url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION as string }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          other: {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION as string,
          },
        }
      : {}),
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "New Delhi",
    "geo.position": "28.6315;77.2167",
    ICBM: "28.6315, 77.2167",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": `${siteConfig.canonicalUrl}/#organization`,
        name: siteConfig.businessName,
        alternateName: siteConfig.shortName,
        url: siteConfig.canonicalUrl,
        logo: `${siteConfig.canonicalUrl}/icon.svg`,
        image: `${siteConfig.canonicalUrl}/opengraph-image`,
        description: siteConfig.description,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.location.address,
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.state,
          postalCode: siteConfig.location.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "28.6315",
          longitude: "77.2167",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:30",
          closes: "18:30",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        priceRange: "₹799 - ₹2499/month",
        knowsAbout: [
          "GST Registration India",
          "GST Return Filing GSTR-1 & GSTR-3B",
          "GSTR-2B Input Tax Credit Reconciliation",
          "GSTR-1 Outward Return Filing",
          "GSTR-3B Monthly Return Filing",
          "TDS Return Filing 24Q and 26Q",
          "Form 24Q Salary TDS Return Filing",
          "Form 26Q Vendor TDS Return Filing",
          "TDS Payment Assistance Challan 281",
          "MSME Udyam Registration",
          "Section 43B(h) 45-Day Payment Recovery",
          "Day to Day Bookkeeping and Accounting",
          "Bank Reconciliation Statement BRS",
          "Debtors & Creditors Ledger Reconciliation",
          "Balance Sheet Preparation for Bank Loan",
          "Income Tax Return ITR Filing for MSMEs and Freelancers",
          "Section 44AD and 44ADA Presumptive Taxation",
          "Accounting Services Delhi NCR",
        ],
        slogan: "India's Most Affordable & Reliable Accounting, GST & Tax Compliance Platform",
        sameAs: [
          `https://wa.me/${siteConfig.contact.whatsappRaw}`,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.contact.phone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.canonicalUrl}/#website`,
        url: siteConfig.canonicalUrl,
        name: siteConfig.businessName,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.canonicalUrl}/#organization` },
        inLanguage: "en-IN",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.canonicalUrl}/services/{search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en-IN" className="h-full scroll-smooth">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-full flex flex-col bg-surface-bg text-text-main antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

