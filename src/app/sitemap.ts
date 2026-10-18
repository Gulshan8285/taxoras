import { MetadataRoute } from "next";
import { allServices } from "@/data/servicesData";
import { allResources } from "@/data/resourcesData";
import { allLocations, allServiceLocations } from "@/data/locationsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.taxoras.online";
  const now = new Date();

  const coreRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/who-we-help`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/blog/top-gst-service-providers-in-india`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/blog/gst-amnesty-scheme-late-fee-waiver-rules`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog/section-16-4-itc-deadline-updates`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog/presumptive-taxation-section-44ad-44ada-guide`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/portal`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/document-security`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/service-limitations`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/refund-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = allServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = allResources.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const cityRoutes: MetadataRoute.Sitemap = allLocations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const serviceCityRoutes: MetadataRoute.Sitemap = allServiceLocations.map((sl) => ({
    url: `${baseUrl}/locations/${sl.citySlug}/${sl.serviceSlug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...resourceRoutes,
    ...cityRoutes,
    ...serviceCityRoutes,
  ];
}
