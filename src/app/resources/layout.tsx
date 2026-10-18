import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Compliance Guides, GST Checklists & Accounting Resources",
  description: "Free practical compliance guides, GST return procedures, TDS deduction rules, bank reconciliation tutorials, and accounting checklists for Indian businesses.",
  keywords: [
    "GST compliance guide",
    "accounting checklist India",
    "GSTR-1 vs GSTR-3B guide",
    "TDS rates 24Q 26Q",
    "Udyam registration guide",
    "GST filing checklist"
  ],
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/resources`,
  },
  openGraph: {
    title: "Compliance Resources & Guides | Taxoras",
    description: "Actionable compliance guides and tax checklists for Indian startups and SMEs.",
    url: `${siteConfig.canonicalUrl}/resources`,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.businessName,
    images: [{ url: `${siteConfig.canonicalUrl}/opengraph-image`, width: 1200, height: 630, alt: "Taxoras Compliance Resources" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxoras Compliance Resources & GST Guides",
    description: "Free GST, TDS and accounting guides for Indian businesses.",
    images: [`${siteConfig.canonicalUrl}/opengraph-image`],
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
