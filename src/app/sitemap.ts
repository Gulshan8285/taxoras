import { MetadataRoute } from "next";
import { allServices } from "@/data/servicesData";
import { allResources } from "@/data/resourcesData";
import { allLocations, allServiceLocations } from "@/data/locationsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://taxvedaconsultants.in";
  const staticDate = new Date("2026-10-15");

  const coreRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: staticDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/pricing`, lastModified: staticDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: staticDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/locations`, lastModified: staticDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/who-we-help`, lastModified: staticDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/portal`, lastModified: staticDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: staticDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: staticDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: staticDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified: staticDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/blog/top-gst-service-providers-in-india`, lastModified: staticDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/document-security`, lastModified: staticDate, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/service-limitations`, lastModified: staticDate, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/refund-policy`, lastModified: staticDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/privacy-policy`, lastModified: staticDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: staticDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: staticDate, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = allServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: staticDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = allResources.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: staticDate,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const cityRoutes: MetadataRoute.Sitemap = allLocations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.id}`,
    lastModified: staticDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const serviceCityRoutes: MetadataRoute.Sitemap = allServiceLocations.map((sl) => ({
    url: `${baseUrl}/locations/${sl.citySlug}/${sl.serviceSlug}`,
    lastModified: staticDate,
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
