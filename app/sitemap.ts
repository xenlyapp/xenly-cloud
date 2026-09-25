import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://xenly.cloud",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
