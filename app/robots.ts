/**
 * ROBOTS.TXT
 *
 * Next.js generates robots.txt from this file.
 * Access at: /robots.txt
 */

import { MetadataRoute } from "next";

const BASE_URL = "https://echocyber.io";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
