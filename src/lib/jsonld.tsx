import { company } from './site';
import type { App } from '@/data/apps';

/**
 * Renders a JSON-LD <script> tag. Safe for static export — the data is
 * serialised at build time.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    legalName: company.name,
    url: company.url,
    logo: `${company.url}/apps/binary-meadow-mark.png`,
    email: company.email,
    description: company.description,
    foundingLocation: company.registeredOffice,
    founder: {
      '@type': 'Person',
      name: company.founderName,
      url: company.founderUrl,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: company.name,
    url: company.url,
    publisher: {
      '@type': 'Organization',
      name: company.name,
    },
  };
}

const OS_MAP: Record<string, string> = {
  android: 'Android',
  ios: 'iOS',
  macos: 'macOS',
  windows: 'Windows',
};

export function softwareApplicationSchema(app: App) {
  const isMobile = app.platforms.some((p) => p === 'android' || p === 'ios');
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.summary,
    url: `${company.url}/apps/${app.slug}/`,
    image: `${company.url}${app.icon}`,
    applicationCategory: isMobile ? 'MobileApplication' : 'DesktopApplication',
    operatingSystem: app.platforms.map((p) => OS_MAP[p]).join(', '),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
    },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      url: company.url,
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
