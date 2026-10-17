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
    "affordable compliance retainer"
  ],
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/pricing`,
  },
  openGraph: {
    title: "Accounting & GST Pricing Packages | Taxoras",
    description: "Clear, upfront pricing for GST return filing, bookkeeping, and TDS compliance across India.",
    url: `${siteConfig.canonicalUrl}/pricing`,
    type: "website",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
