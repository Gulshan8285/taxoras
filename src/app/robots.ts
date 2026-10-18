import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.taxoras.online";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/portal/session", "/admin"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "OAI-SearchBot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended",
          "Bytespider",
          "CCBot",
          "Diffbot",
          "FacebookBot",
          "SemrushBot",
          "AhrefsBot",
        ],
        allow: "/",
        disallow: ["/api/", "/admin", "/portal/session"],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/llms.txt`],
    host: baseUrl,
  };
}
