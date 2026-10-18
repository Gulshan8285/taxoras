import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Taxoras Advisory & Compliance - Affordable Accounting, GST & Tax Services",
    short_name: "Taxoras",
    description:
      "Affordable, professional accounting, GST registration, return filing, TDS compliance, and financial reporting support for Indian businesses, startups, and traders across Tier 1, Tier 2, and Tier 3 cities.",
    start_url: "/",
    display: "standalone",
    background_color: "#120D0A",
    theme_color: "#D97706",
    orientation: "portrait",
    scope: "/",
    lang: "en-IN",
    dir: "ltr",
    categories: ["finance", "business", "tax"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/icon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
