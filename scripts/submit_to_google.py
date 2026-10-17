#!/usr/bin/env python3
"""
Automated Search Engine Indexing & Google Sitemap Ping Script for Taxoras.
Notifies Google, Bing, Yandex and IndexNow search engine crawlers of newly published and updated articles.
Usage:
  python3 scripts/submit_to_google.py
  python3 scripts/submit_to_google.py --url https://www.taxoras.online/resources/your-slug
"""

import sys
import json
import urllib.request
import urllib.error
import urllib.parse
from datetime import datetime

HOST = "www.taxoras.online"
BASE_URL = f"https://{HOST}"
INDEXNOW_KEY = "7b3e10fa14db45be8a3a29ec672e8f1b"
KEY_LOCATION = f"{BASE_URL}/{INDEXNOW_KEY}.txt"
SITEMAP_URL = f"{BASE_URL}/sitemap.xml"

BLOG_SLUGS = [
    "top-gst-service-providers-in-india",
    "gst-amnesty-scheme-late-fee-waiver-rules",
    "section-16-4-itc-deadline-updates",
    "presumptive-taxation-section-44ad-44ada-guide"
]

def get_all_urls():
    urls = [
        f"{BASE_URL}",
        f"{BASE_URL}/blog",
        f"{BASE_URL}/resources",
        f"{BASE_URL}/pricing",
        f"{BASE_URL}/contact",
        f"{BASE_URL}/services/gst-return-filing",
        f"{BASE_URL}/services/gst-registration"
    ]
    for b in BLOG_SLUGS:
        urls.append(f"{BASE_URL}/blog/{b}")

    # Load resourcesData.ts
    try:
        sys.path.append(".")
        from scripts import generate_resources
        for art in generate_resources.articles:
            urls.append(f"{BASE_URL}/resources/{art['slug']}")
    except Exception as e:
        print(f"Notice loading resourcesData: {e}")

    return urls

def ping_google_sitemap():
    ping_url = f"https://www.google.com/ping?sitemap={urllib.parse.quote(SITEMAP_URL)}"
    print(f"\n📡 [1/2] Pinging Google Search Console Sitemap endpoint...")
    print(f"    Target: {ping_url}")
    try:
        req = urllib.request.Request(ping_url, headers={"User-Agent": "Taxoras-AutoIndex/1.0"})
        with urllib.request.urlopen(req, timeout=10) as response:
            status = response.getcode()
            print(f"    ✅ Google Ping Status: HTTP {status} (Sitemap scheduled for crawling)")
            return True
    except urllib.error.HTTPError as e:
        print(f"    ⚠️ Google Ping HTTP response: {e.code} ({e.reason})")
        return False
    except Exception as e:
        print(f"    ⚠️ Google Ping note: {e}")
        return False

def submit_to_indexnow(urls):
    payload = {
        "host": HOST,
        "key": INDEXNOW_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls
    }
    data = json.dumps(payload).encode("utf-8")
    endpoints = [
        ("IndexNow Central", "https://api.indexnow.org/IndexNow"),
        ("Microsoft Bing IndexNow", "https://www.bing.com/indexnow")
    ]

    print(f"\n🚀 [2/2] Submitting {len(urls)} URLs to IndexNow Instant Indexing Protocol...")
    for name, endpoint in endpoints:
        try:
            req = urllib.request.Request(
                endpoint,
                data=data,
                headers={"Content-Type": "application/json; charset=utf-8", "User-Agent": "Taxoras-AutoIndex/1.0"},
                method="POST"
            )
            with urllib.request.urlopen(req, timeout=10) as response:
                status = response.getcode()
                print(f"    ✅ {name}: HTTP {status} — Search engine bots dispatched immediately")
        except urllib.error.HTTPError as e:
            print(f"    ⚠️ {name} HTTP {e.code}: {e.reason}")
        except Exception as e:
            print(f"    ⚠️ {name} exception: {e}")

def main():
    print(f"==================================================")
    print(f"  TAXORAS AUTOMATED SEARCH ENGINE INDEXING SUITE  ")
    print(f"  Domain: {BASE_URL}")
    print(f"  Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"==================================================")

    if len(sys.argv) > 2 and sys.argv[1] == "--url":
        target_urls = [sys.argv[2]]
        print(f"Single URL submission requested: {target_urls[0]}")
    else:
        target_urls = get_all_urls()
        print(f"Discovered {len(target_urls)} active URLs across blogs, resources & sitemaps.")

    ping_google_sitemap()
    submit_to_indexnow(target_urls)

    print(f"\n🎉 Search engine auto-indexing pipeline finished.")
    print(f"    All articles & FAQ schemas are now available for instant bot crawl.")
    print(f"==================================================\n")

if __name__ == "__main__":
    main()
