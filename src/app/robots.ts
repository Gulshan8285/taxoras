import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://taxorasconsultants.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/portal/session"],
      },
      {
        // Explicitly permit OpenAI / ChatGPT Search crawler
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Permit Google AI & Search extended crawlers
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Permit PerplexityBot
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/"],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
