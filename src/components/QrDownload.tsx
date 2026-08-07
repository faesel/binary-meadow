import Image from 'next/image';
import styles from './QrDownload.module.css';

/**
 * A small "scan to install" QR code for an app's Google Play listing.
 * Hidden on small screens, where a QR code pointing at the device you are
 * already holding is of no use.
 */
export default function QrDownload({
  slug,
  name,
  href,
  variant = 'default',
}: {
  slug: string;
  name: string;
  href: string;
  variant?: 'default' | 'cta';
}) {
  return (
    <a
      className={`${styles.qr} ${variant === 'cta' ? styles.cta : ''}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={`/qr/${slug}.svg`}
        alt={`QR code linking to the ${name} listing on Google Play`}
        width={132}
        height={132}
        className={styles.image}
        unoptimized
      />
      <span className={styles.caption}>Scan to install</span>
    </a>
  );
}
