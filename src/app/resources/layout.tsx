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
    "Udyam registration guide"
  ],
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/resources`,
  },
  openGraph: {
    title: "Compliance Resources & Guides | Taxoras",
    description: "Actionable compliance guides and tax checklists for Indian startups and SMEs.",
    url: `${siteConfig.canonicalUrl}/resources`,
    type: "website",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
