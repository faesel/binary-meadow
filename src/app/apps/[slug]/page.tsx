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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
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

export default async function AppPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
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
          {app.featureGraphic && (
            <Image
              src={app.featureGraphic}
              alt={`${app.name} feature graphic`}
              width={1024}
              height={500}
              className={styles.featureGraphic}
              priority
            />
          )}
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
              <div className={styles.summary}>
                {app.description.split('\n\n').map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <DownloadButtons downloads={app.downloads} />
              {app.repository && (
                <a
                  href={app.repository}
                  className={styles.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source on GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className={`${styles.highlights} ${styles.anchorSection}`}>
        <div className="container">
          <span className="eyebrow">Why {app.name}</span>
          <h2 className="section-title">
            <a href="#highlights" className={styles.anchorLink}>
              Highlights
            </a>
          </h2>
          <div className={styles.features}>
            {(app.highlights ?? app.features).map((f) => (
              <div key={f.title} className={styles.feature}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureText}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      {app.highlights && (
        <section
          id="features"
          className={`section ${styles.anchorSection}`}
          style={{ ['--app-accent' as string]: app.accent }}
        >
          <div className="container">
            <span className="eyebrow">What it does</span>
            <h2 className="section-title">
              <a href="#features" className={styles.anchorLink}>
                Features
              </a>
            </h2>
            <div className={styles.capabilities}>
              {app.features.map((f) => (
                <div key={f.title} className={styles.capability}>
                  <h3 className={styles.capabilityTitle}>{f.title}</h3>
                  <p className={styles.capabilityText}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Screenshots */}
      <section id="screenshots" className={`section ${styles.anchorSection}`}>
        <div className="container">
          <span className="eyebrow">A closer look</span>
          <h2 className="section-title">
            <a href="#screenshots" className={styles.anchorLink}>
              Screenshots
            </a>
          </h2>
          {app.screenshots.length > 0 ? (
            <div
              className={`${styles.shotGrid} ${
                group === 'Mobile' ? styles.shotGridMobile : ''
              }`}
            >
              {app.screenshots.map((s) => (
                <figure
                  key={s.src}
                  className={`${styles.shot} ${
                    group === 'Mobile' ? styles.shotMobile : ''
                  }`}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={group === 'Mobile' ? 400 : 1280}
                    height={group === 'Mobile' ? 866 : 800}
                    className={styles.shotImg}
                  />
                </figure>
              ))}
            </div>
          ) : (
            <div
              className={`${styles.shotGrid} ${
                group === 'Mobile' ? styles.shotGridMobile : ''
              }`}
            >
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`${styles.shotPlaceholder} ${
                    group === 'Mobile' ? styles.shotPlaceholderMobile : ''
                  }`}
                >
                  <span>Screenshot coming soon</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className={`section ${styles.anchorSection}`}>
        <div className="container">
          <div
            className={styles.downloadCta}
            style={{ ['--app-accent' as string]: app.accent }}
          >
            <div>
              <h2 className={styles.ctaTitle}>
                <a href="#download" className={styles.anchorLink}>
                  Get {app.name}
                </a>
              </h2>
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

      {/* Privacy */}
      <section id="privacy" className={`${styles.privacy} ${styles.anchorSection}`}>
        <div className="container">
          <span className="eyebrow">Your data</span>
          <h2 className="section-title">
            <a href="#privacy" className={styles.anchorLink}>
              Privacy
            </a>
          </h2>
          <p className={styles.privacyText}>{app.privacy.summary}</p>
          <Link href={`/apps/${app.slug}/privacy/`} className={styles.privacyLink}>
            Read the {app.name} privacy policy →
          </Link>
        </div>
      </section>
    </article>
  );
}
