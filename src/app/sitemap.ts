import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { legalDocuments, legalUpdatedAt } from "@/lib/legal";

const siteUrl = "https://www.zytonai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/precios`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...legalDocuments.map((doc) => ({
      url: `${siteUrl}${doc.href}`,
      lastModified: new Date(legalUpdatedAt),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    ...getAllPosts().map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
