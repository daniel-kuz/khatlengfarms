import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.khatlengfarms.co.za';
  const routes = [
    { url: base,                        priority: 1.0 },
    { url: `${base}/about`,             priority: 0.85 },
    { url: `${base}/our-farm`,          priority: 0.9 },
    { url: `${base}/production`,        priority: 0.9 },
    { url: `${base}/projects`,          priority: 0.8 },
    { url: `${base}/gallery`,           priority: 0.7 },
    { url: `${base}/contact`,           priority: 0.75 },
  ];

  return routes.map(({ url, priority }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
