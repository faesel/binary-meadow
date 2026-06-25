import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/site';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: `Terms governing the use of ${company.name} software and website.`,
  alternates: { canonical: '/terms/' },
};

export default function TermsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.wrap}>
        <Link href="/" className={styles.back}>
          ← Home
        </Link>
        <h1 className={styles.title}>Terms of Use</h1>
        <p className={styles.updated}>Last updated: 25 June 2026</p>

        <div className={styles.content}>
          <p className={styles.notice}>
            This is a template terms document provided as a placeholder. Please
            review and adapt it with qualified legal advice before publishing.
          </p>

          <p>
            These terms govern your use of the {company.name} website and the
            software applications we provide. By downloading or using our apps,
            you agree to these terms.
          </p>

          <h2>Licence</h2>
          <p>
            We grant you a personal, non-exclusive, non-transferable licence to
            use our applications for their intended purpose. The software,
            branding and content remain the intellectual property of{' '}
            {company.name} and its licensors.
          </p>

          <h2>Acceptable use</h2>
          <ul>
            <li>Do not reverse engineer, resell, or redistribute the apps except where permitted by their individual licences.</li>
            <li>Do not use the software for any unlawful purpose.</li>
            <li>Respect the terms of any third-party services you connect to our apps.</li>
          </ul>

          <h2>Warranties &amp; liability</h2>
          <p>
            Our software is provided “as is”, without warranties of any kind to
            the fullest extent permitted by law. {company.name} shall not be
            liable for any indirect or consequential loss arising from use of
            the software. Nothing in these terms limits liability that cannot be
            limited under English law.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales, and any
            disputes are subject to the exclusive jurisdiction of its courts.
          </p>

          <h2>Contact</h2>
          <p>
            {company.name}, {company.registeredOffice}. {company.jurisdiction},
            Company No. {company.companyNumber}. Questions? Email{' '}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
