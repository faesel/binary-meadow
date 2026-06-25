import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/site';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${company.name} handles your data.`,
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.wrap}>
        <Link href="/" className={styles.back}>
          ← Home
        </Link>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: 25 June 2026</p>

        <div className={styles.content}>
          <p className={styles.notice}>
            This is a template privacy policy provided as a placeholder. Please
            review and adapt it with qualified legal advice before publishing.
          </p>

          <p>
            {company.name} (“we”, “us”, “our”) builds and distributes the
            applications listed on this website. We are committed to protecting
            your privacy and being transparent about the limited data our apps
            and website handle.
          </p>

          <h2>Data we collect</h2>
          <p>
            Our apps are designed to be local-first. Where possible, your data
            (such as prayer logs in Jannah Builder, library credentials in
            OPDSy, or session data viewed in GridWatch) stays on your own
            device and is not transmitted to us.
          </p>
          <ul>
            <li>
              <strong>App data</strong> is stored locally on your device.
              Sensitive credentials are kept in your operating system’s secure
              keychain.
            </li>
            <li>
              <strong>This website</strong> is a static site and does not set
              tracking cookies or collect personal information directly.
            </li>
          </ul>

          <h2>Third-party services</h2>
          <p>
            App downloads may be distributed via the Google Play Store or
            GitHub Releases, each governed by their own privacy policies.
            Optional features that connect to external services (for example
            AI Insights in GridWatch) only do so with your explicit
            configuration.
          </p>

          <h2>Your rights</h2>
          <p>
            Under UK GDPR you have rights regarding any personal data we may
            hold. To exercise these rights or ask any question, contact us at{' '}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>

          <h2>Contact</h2>
          <p>
            {company.name}, {company.registeredOffice}. {company.jurisdiction},
            Company No. {company.companyNumber}.
          </p>
        </div>
      </div>
    </div>
  );
}
