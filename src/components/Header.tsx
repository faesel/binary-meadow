'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { company, nav } from '@/lib/site';
import styles from './Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Image
            src="/apps/binary-meadow-mark.png"
            alt=""
            width={40}
            height={40}
            className={styles.mark}
          />
          <span className={styles.brandName}>
            Binary<span className={styles.brandAccent}>Meadow</span>
          </span>
        </Link>

        <nav className={styles.navDesktop} aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
          <a
            href={company.founderUrl}
            className={styles.faeselLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit faesel.com"
          >
            <Image
              src="/faesel-logo.png"
              alt="faesel.com"
              width={306}
              height={348}
              className={styles.faeselLogo}
            />
          </a>
        </nav>

        <button
          className={styles.toggle}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className={styles.navMobile} aria-label="Primary mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLinkMobile}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={company.founderUrl}
            className={styles.navLinkMobile}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit faesel.com"
          >
            <Image
              src="/faesel-logo.png"
              alt="faesel.com"
              width={306}
              height={348}
              className={styles.faeselLogoMobile}
            />
          </a>
        </nav>
      )}
    </header>
  );
}
