import Image from 'next/image';
import { apps } from '@/data/apps';
import { company } from '@/lib/site';
import AppCard from '@/components/AppCard';
import { JsonLd, organizationSchema, webSiteSchema } from '@/lib/jsonld';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={webSiteSchema()} />
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Image
            src="/logo/binary-meadow-hero.png"
            alt="Binary Meadow"
            width={463}
            height={512}
            className={styles.heroLogo}
            priority
          />
          <h1 className={styles.heroTitle}>
            Thoughtful software,
            <br />
            <span className={styles.heroAccent}>grown with care.</span>
          </h1>
          <p className={styles.heroLead}>
            Binary Meadow is an independent UK software studio crafting calm,
            well-made apps — for everyday life and for the people who build
            software.
          </p>
          <div className={styles.heroActions}>
            <a href="#apps" className="btn btn-primary">
              Explore the apps
            </a>
            <a
              href={company.founderUrl}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meet the maker ↗
            </a>
          </div>
        </div>
      </section>

      {/* Apps */}
      <section className="section" id="apps">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Our apps</span>
            <h2 className="section-title">A small garden of apps.</h2>
            <p className="section-lead">
              Each one solves a real problem and is built to last. Available on
              mobile and desktop — pick the platform that suits you.
            </p>
          </div>
          <div className={styles.grid}>
            {apps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.about} id="about">
        <div className={`container ${styles.aboutInner}`}>
          <div>
            <span className="eyebrow">About the studio</span>
            <h2 className="section-title">Small studio. Careful craft.</h2>
            <p className={styles.aboutText}>
              {company.name} is an independent software company registered in
              the United Kingdom. We design and build a focused collection of
              apps — from spiritually-mindful tools to developer dashboards —
              with an emphasis on quality, privacy and longevity over hype.
            </p>
            <p className={styles.aboutText}>
              Every app is shipped, maintained and supported directly by the
              studio. No dark patterns, no selling your data — just software we
              are proud to put our name to.
            </p>
          </div>
          <ul className={styles.values}>
            <li>
              <strong>Privacy first</strong>
              Local-first data and secure storage by default.
            </li>
            <li>
              <strong>Built to last</strong>
              Maintained, documented and supported for the long term.
            </li>
            <li>
              <strong>Calm by design</strong>
              Considered, minimal interfaces that respect your attention.
            </li>
            <li>
              <strong>UK registered</strong>
              {company.jurisdiction}, Company No. {company.companyNumber}.
            </li>
          </ul>
        </div>
      </section>

      {/* Contact band */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className={styles.ctaTitle}>Get in touch</h2>
            <p className={styles.ctaText}>
              Questions, support or partnership ideas — we’d love to hear from
              you.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href={`mailto:${company.email}`} className="btn btn-primary">
              {company.email}
            </a>
            <a
              href={company.founderUrl}
              className={`btn ${styles.ctaGhost}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              www.faesel.com ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
