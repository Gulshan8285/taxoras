import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/siteConfig";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#120D0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} | Accounting, GST & Tax Consultancy`,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.description,
  metadataBase: new URL("https://taxoras.in"),
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
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
