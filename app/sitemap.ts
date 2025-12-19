/**
 * SITEMAP
 *
 * Next.js generates sitemap.xml from this file.
 * Access at: /sitemap.xml
 */

import { MetadataRoute } from "next";

const BASE_URL = "https://echocyber.io";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // TODO: Add blog posts dynamically when blog is implemented
  // const posts = await getAllPosts();
  // const blogPages = posts.map((post) => ({
  //   url: `${BASE_URL}/blog/${post.slug}`,
  //   lastModified: new Date(post.date),
  //   changeFrequency: "monthly" as const,
  //   priority: 0.6,
  // }));

  return [...staticPages];
}
