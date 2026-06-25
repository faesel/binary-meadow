import Link from 'next/link';
import Image from 'next/image';
import type { App } from '@/data/apps';
import PlatformBadge, { platformGroup } from './PlatformBadge';
import DownloadButtons from './DownloadButtons';
import styles from './AppCard.module.css';

export default function AppCard({ app }: { app: App }) {
  const group = platformGroup(app.platforms);

  return (
    <article
      className={styles.card}
      style={{ ['--app-accent' as string]: app.accent }}
    >
      <div className={styles.header}>
        <Image
          src={app.icon}
          alt={`${app.name} icon`}
          width={72}
          height={72}
          className={styles.icon}
        />
        <div className={styles.meta}>
          <span className={styles.group}>{group}</span>
          <div className={styles.platforms}>
            {app.platforms.map((p) => (
              <PlatformBadge key={p} platform={p} />
            ))}
          </div>
        </div>
      </div>

      <h3 className={styles.name}>
        <Link href={`/apps/${app.slug}/`}>{app.name}</Link>
      </h3>
      <p className={styles.tagline}>{app.tagline}</p>
      <p className={styles.summary}>{app.summary}</p>

      <div className={styles.footer}>
        <DownloadButtons downloads={app.downloads} size="sm" />
        <Link href={`/apps/${app.slug}/`} className={styles.learn}>
          Learn more →
        </Link>
      </div>
    </article>
  );
}
