import type { MetadataRoute } from 'next';
import { company } from '@/lib/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.shortName,
    description: company.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1f5c46',
    icons: [
      {
        src: '/apps/binary-meadow-mark.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
