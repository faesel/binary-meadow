import type { DownloadLink } from '@/data/apps';
import styles from './DownloadButtons.module.css';

export default function DownloadButtons({
  downloads,
  size = 'md',
}: {
  downloads: DownloadLink[];
  size?: 'sm' | 'md';
}) {
  return (
    <div className={`${styles.group} ${size === 'sm' ? styles.sm : ''}`}>
      {downloads.map((dl) => {
        const isPlaceholder = dl.comingSoon || dl.href === '#';
        return isPlaceholder ? (
          <span
            key={dl.label}
            className={`btn btn-ghost btn-disabled ${styles.btn}`}
            aria-disabled="true"
            title="Store listing coming soon"
          >
            {dl.label}
            <span className={styles.soon}>Soon</span>
          </span>
        ) : (
          <a
            key={dl.label}
            href={dl.href}
            className={`btn btn-primary ${styles.btn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dl.label}
          </a>
        );
      })}
    </div>
  );
}
