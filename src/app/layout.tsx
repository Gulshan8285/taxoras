import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/siteConfig";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#10243A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} | Accounting, GST & Tax Consultancy`,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.description,
  metadataBase: new URL("https://taxvedaconsultants.in"),
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: siteConfig.businessName,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-surface-bg text-text-main antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
