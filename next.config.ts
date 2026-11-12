import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ],
    },
    {
      source: "/sitemap.xml",
      headers: [
        {
          key: "Content-Type",
          value: "application/xml",
        },
        {
          key: "Cache-Control",
          value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
        },
      ],
    },
    {
      source: "/robots.txt",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=3600, s-maxage=86400",
        },
      ],
    },
  ],
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/gst-registration",
        destination: "/services/gst-registration",
        permanent: true,
      },
      {
        source: "/gst-return-filing",
        destination: "/services/gst-return-filing",
        permanent: true,
      },
      {
        source: "/tds-return-filing",
        destination: "/services/tds-return-filing",
        permanent: true,
      },
      {
        source: "/gstr-1-filing",
        destination: "/services/gstr-1-filing",
        permanent: true,
      },
      {
        source: "/gstr-3b-filing",
        destination: "/services/gstr-3b-filing",
        permanent: true,
      },
      {
        source: "/form-24q-filing",
        destination: "/services/form-24q-filing",
        permanent: true,
      },
      {
        source: "/form-26q-filing",
        destination: "/services/form-26q-filing",
        permanent: true,
      },
      {
        source: "/services/tds-payment-assistance",
        destination: "/services/tds-payment",
        permanent: true,
      },
      {
        source: "/bookkeeping-services",
        destination: "/services/bookkeeping-services",
        permanent: true,
      },
      {
        source: "/services/itr-filing",
        destination: "/services/income-tax-return",
        permanent: true,
      },
      {
        source: "/services/accounting-services",
        destination: "/services/daily-accounting",
        permanent: true,
      },
      {
        source: "/services/msme-registration",
        destination: "/services/msme-udyam-registration",
        permanent: true,
      },
      {
        source: "/services/balance-sheet-preparation",
        destination: "/services/balance-sheet",
        permanent: true,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
