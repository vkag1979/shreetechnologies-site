import type { MetadataRoute } from "next";
import { cities } from "./cities";
import { siteConfig } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...cities.map((city) => ({
      url: `${siteConfig.url}/${city.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
