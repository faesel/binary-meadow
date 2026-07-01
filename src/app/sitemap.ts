import type { MetadataRoute } from 'next';
import { apps } from '@/data/apps';
import { company } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/privacy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const appRoutes: MetadataRoute.Sitemap = apps.flatMap((app) => [
    {
      url: `${base}/apps/${app.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${base}/apps/${app.slug}/privacy/`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]);

  return [...staticRoutes, ...appRoutes];
}
