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
  metadataBase: new URL("https://www.taxoras.online"),
  alternates: {
    canonical: "./",
  },
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: siteConfig.businessName,
    type: "website",
    locale: "en_IN",
    url: "https://www.taxoras.online",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.businessName,
    description: siteConfig.description,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
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
