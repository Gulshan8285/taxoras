import { NextResponse } from "next/server";
import { allResources } from "@/data/resourcesData";

const HOST = "www.taxoras.online";
const BASE_URL = `https://${HOST}`;
const INDEXNOW_KEY = "7b3e10fa14db45be8a3a29ec672e8f1b";
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

// List of blog articles
const BLOG_SLUGS = [
  "top-gst-service-providers-in-india",
  "top-gst-service-providers-in-bangalore",
  "cheap-gst-services-india-affordable-filing-comparison",
  "best-msme-udyam-registration-service-online-guide",
  "gst-amnesty-scheme-late-fee-waiver-rules",
  "section-16-4-itc-deadline-updates",
  "presumptive-taxation-section-44ad-44ada-guide"
];

function getAllArticleUrls(): string[] {
  const urls: string[] = [
    `${BASE_URL}`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/resources`,
    `${BASE_URL}/pricing`,
    `${BASE_URL}/contact`,
  ];

  // Add all blog articles
  for (const slug of BLOG_SLUGS) {
    urls.push(`${BASE_URL}/blog/${slug}`);
  }

  // Add all resource articles
  for (const art of allResources) {
    urls.push(`${BASE_URL}/resources/${art.slug}`);
  }

  return urls;
}

async function pingGoogleSitemap(): Promise<{ status: number; text: string; success: boolean }> {
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
      text: res.statusText || (res.ok ? "Ping received by Google" : "Ping error"),
      success: res.ok,
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
      detail: res.status === 200 || res.status === 202 ? "URLs successfully submitted to search engines" : `Search engine returned HTTP ${res.status}`,
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
      // Body not provided or invalid JSON, fall back to all articles
    }

    if (urlsToSubmit.length === 0) {
      urlsToSubmit = getAllArticleUrls();
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
      urls: urlsToSubmit,
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
  const allUrls = getAllArticleUrls();
  const [indexNowRes, bingRes, googlePingRes] = await Promise.all([
    submitToIndexNow(allUrls, "https://api.indexnow.org/IndexNow"),
    submitToIndexNow(allUrls, "https://www.bing.com/indexnow"),
    pingGoogleSitemap(),
  ]);

  return NextResponse.json({
    success: true,
    message: "Automated indexing triggered for all published articles & sitemap.",
    timestamp: new Date().toISOString(),
    totalArticles: allResources.length + BLOG_SLUGS.length,
    submittedCount: allUrls.length,
    urls: allUrls,
    results: {
      indexNowApi: indexNowRes,
      bingIndexNow: bingRes,
      googleSitemapPing: googlePingRes,
    },
  });
}
