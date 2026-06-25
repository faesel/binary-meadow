import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { apps, getApp } from '@/data/apps';
import { company } from '@/lib/site';
import {
  JsonLd,
  softwareApplicationSchema,
  breadcrumbSchema,
} from '@/lib/jsonld';
import PlatformBadge, { platformGroup } from '@/components/PlatformBadge';
import DownloadButtons from '@/components/DownloadButtons';
import styles from './app.module.css';

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const app = getApp(params.slug);
  if (!app) return {};
  const url = `/apps/${app.slug}/`;
  const ogImage = `/og/${app.slug}.png`;
  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.summary,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: `${app.name} — ${app.tagline}`,
      description: app.summary,
      siteName: company.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: app.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${app.name} — ${app.tagline}`,
      description: app.summary,
      images: [ogImage],
    },
  };
}

export default function AppPage({ params }: { params: { slug: string } }) {
  const app = getApp(params.slug);
  if (!app) notFound();

  const group = platformGroup(app.platforms);

  return (
    <article>
      <JsonLd data={softwareApplicationSchema(app)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `${company.url}/` },
          { name: 'Apps', url: `${company.url}/#apps` },
          { name: app.name, url: `${company.url}/apps/${app.slug}/` },
        ])}
      />
      {/* Hero */}
      <section
        className={styles.hero}
        style={{ ['--app-accent' as string]: app.accent }}
      >
        <div className="container">
          <Link href="/#apps" className={styles.back}>
            ← All apps
          </Link>
          <div className={styles.heroGrid}>
            <Image
              src={app.icon}
              alt={`${app.name} icon`}
              width={120}
              height={120}
              className={styles.icon}
              priority
            />
            <div className={styles.heroBody}>
              <div className={styles.heroMeta}>
                <span className={styles.group}>
                  {group} · {app.category}
                </span>
                <div className={styles.platforms}>
                  {app.platforms.map((p) => (
                    <PlatformBadge key={p} platform={p} />
                  ))}
                </div>
              </div>
              <h1 className={styles.title}>{app.name}</h1>
              <p className={styles.tagline}>{app.tagline}</p>
              <p className={styles.summary}>{app.description}</p>
              <DownloadButtons downloads={app.downloads} />
              <a
                href={app.repository}
                className={styles.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                View source on GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.highlights}>
        <div className="container">
          <span className="eyebrow">What it does</span>
          <h2 className="section-title">Highlights</h2>
          <div className={styles.features}>
            {app.features.map((f) => (
              <div key={f.title} className={styles.feature}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureText}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">A closer look</span>
          <h2 className="section-title">Screenshots</h2>
          {app.screenshots.length > 0 ? (
            <div className={styles.shotGrid}>
              {app.screenshots.map((s) => (
                <figure key={s.src} className={styles.shot}>
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={1280}
                    height={800}
                    className={styles.shotImg}
                  />
                </figure>
              ))}
            </div>
          ) : (
            <div className={styles.shotGrid}>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={styles.shotPlaceholder}>
                  <span>Screenshot coming soon</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Download CTA */}
      <section className="section">
        <div className="container">
          <div
            className={styles.downloadCta}
            style={{ ['--app-accent' as string]: app.accent }}
          >
            <div>
              <h2 className={styles.ctaTitle}>Get {app.name}</h2>
              <p className={styles.ctaText}>
                {group === 'Mobile'
                  ? 'Available for Android. Store listings are on the way — grab the latest build below.'
                  : 'Available for macOS and Windows. Download the latest release below.'}
              </p>
            </div>
            <DownloadButtons downloads={app.downloads} />
          </div>
        </div>
      </section>
    </article>
  );
}
