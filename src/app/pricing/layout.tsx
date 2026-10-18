import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Transparent Accounting & GST Compliance Pricing Packages",
  description: "Clear, upfront pricing for monthly GST return filing, day-to-day bookkeeping, TDS quarterly returns, and MSME registrations. No hidden fees or surprise billings.",
  keywords: [
    "GST filing charges",
    "accounting fees India",
    "bookkeeping packages",
    "TDS return cost",
    "affordable compliance retainer",
    "GST return filing pricing India",
    "monthly GST fees"
  ],
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/pricing`,
  },
  openGraph: {
    title: "Accounting & GST Pricing Packages | Taxoras",
    description: "Clear, upfront pricing for GST return filing, bookkeeping, and TDS compliance across India.",
    url: `${siteConfig.canonicalUrl}/pricing`,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.businessName,
    images: [{ url: `${siteConfig.canonicalUrl}/opengraph-image`, width: 1200, height: 630, alt: "Taxoras Pricing - Transparent GST & Accounting Fees" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Accounting & GST Pricing | Taxoras",
    description: "Compare GST, TDS and bookkeeping retainers with no hidden fees. From ₹799/mo.",
    images: [`${siteConfig.canonicalUrl}/opengraph-image`],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
