import { NextResponse } from "next/server";
import { allResources } from "@/data/resourcesData";
import { allServices } from "@/data/servicesData";
import { allLocations, allServiceLocations } from "@/data/locationsData";

const HOST = "www.taxoras.online";
const BASE_URL = `https://${HOST}`;
const INDEXNOW_KEY = "7b3e10fa14db45be8a3a29ec672e8f1b";
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

// List of blog articles
const BLOG_SLUGS = [
  "top-gst-service-providers-in-india",
  "top-gst-service-providers-in-bangalore",
  "top-gst-service-providers-in-mumbai",
  "top-gst-service-providers-in-delhi-ncr",
  "cheap-gst-services-india-affordable-filing-comparison",
  "best-msme-udyam-registration-service-online-guide",
  "gst-amnesty-scheme-late-fee-waiver-rules",
  "section-16-4-itc-deadline-updates",
  "presumptive-taxation-section-44ad-44ada-guide",
];

function getAllSiteUrls(): string[] {
  const urls: string[] = [
    `${BASE_URL}`,
    `${BASE_URL}/pricing`,
    `${BASE_URL}/locations`,
    `${BASE_URL}/industries`,
    `${BASE_URL}/who-we-help`,
    `${BASE_URL}/about`,
    `${BASE_URL}/contact`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/resources`,
  ];

  // Services
  for (const svc of allServices) {
    urls.push(`${BASE_URL}/services/${svc.slug}`);
  }

  // Blog articles
  for (const slug of BLOG_SLUGS) {
    urls.push(`${BASE_URL}/blog/${slug}`);
  }

  // Educational resources
  for (const art of allResources) {
    urls.push(`${BASE_URL}/resources/${art.slug}`);
  }

  // Location hubs
  for (const loc of allLocations) {
    urls.push(`${BASE_URL}/locations/${loc.id}`);
  }

  // Top Service-Locations
  for (const sl of allServiceLocations.slice(0, 100)) {
    urls.push(`${BASE_URL}/locations/${sl.citySlug}/${sl.serviceSlug}`);
  }

  return urls;
}

async function pingGoogleSitemap(): Promise<{ status: number; text: string; success: boolean; note?: string }> {
  try {
    const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(`${BASE_URL}/sitemap.xml`)}`;
    const res = await fetch(pingUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Taxoras-AutoIndex-Bot/1.0",
      },
    });
    return {
      status: res.status,
      text: res.statusText || (res.ok ? "Ping received by Google" : `HTTP ${res.status}`),
      success: res.ok,
      note: "Note: Google retired public sitemap ping in late 2023. Submit directly in Google Search Console for best indexing speed.",
    };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return { status: 500, text: msg, success: false };
  }
}

async function submitToIndexNow(urls: string[], endpoint: string): Promise<{ endpoint: string; status: number; success: boolean; detail?: string }> {
  try {
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return {
      endpoint,
      status: res.status,
      success: res.status === 200 || res.status === 202,
      detail: res.status === 200 || res.status === 202 ? "URLs successfully submitted to search engines via IndexNow" : `Search engine returned HTTP ${res.status}`,
    };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return { endpoint, status: 500, success: false, detail: msg };
  }
}

export async function POST(req: Request) {
  try {
    let urlsToSubmit: string[] = [];
    try {
      const body = await req.json();
      if (body.urls && Array.isArray(body.urls) && body.urls.length > 0) {
        urlsToSubmit = body.urls;
      }
    } catch {
      // Body not provided or invalid JSON, fall back to all site URLs
    }

    if (urlsToSubmit.length === 0) {
      urlsToSubmit = getAllSiteUrls();
    }

    // Submit in parallel to IndexNow and Bing, and ping Google
    const [indexNowRes, bingRes, googlePingRes] = await Promise.all([
      submitToIndexNow(urlsToSubmit, "https://api.indexnow.org/IndexNow"),
      submitToIndexNow(urlsToSubmit, "https://www.bing.com/indexnow"),
      pingGoogleSitemap(),
    ]);

    return NextResponse.json({
      success: true,
      message: "Automated Search Engine Indexing Submission dispatched successfully.",
      timestamp: new Date().toISOString(),
      submittedCount: urlsToSubmit.length,
      urlsSample: urlsToSubmit.slice(0, 20),
      results: {
        indexNowApi: indexNowRes,
        bingIndexNow: bingRes,
        googleSitemapPing: googlePingRes,
      },
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { success: false, error: msg },
      { status: 500 }
    );
  }
}

export async function GET() {
  const allUrls = getAllSiteUrls();
  const [indexNowRes, bingRes, googlePingRes] = await Promise.all([
    submitToIndexNow(allUrls, "https://api.indexnow.org/IndexNow"),
    submitToIndexNow(allUrls, "https://www.bing.com/indexnow"),
    pingGoogleSitemap(),
  ]);

  return NextResponse.json({
    success: true,
    message: "Automated indexing triggered for entire site (all services, locations, blog, resources).",
    timestamp: new Date().toISOString(),
    totalDispatchedUrls: allUrls.length,
    urlsSample: allUrls.slice(0, 25),
    results: {
      indexNowApi: indexNowRes,
      bingIndexNow: bingRes,
      googleSitemapPing: googlePingRes,
    },
  });
}
