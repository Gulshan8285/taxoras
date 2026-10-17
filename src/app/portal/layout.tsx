import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Client Document Portal | Taxoras Advisory & Compliance",
  description: "Secure client portal to upload monthly bank statements, sales registers, vendor bills, and download compliance filing deliverables.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/portal`,
  },
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
