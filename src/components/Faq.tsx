import type { FaqItem } from '@/data/apps';
import styles from './Faq.module.css';

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className={styles.list}>
      {items.map((item, i) => (
        <details key={item.question} className={styles.item} open={i === 0}>
          <summary className={styles.question}>
            <span>{item.question}</span>
            <span className={styles.chevron} aria-hidden="true" />
          </summary>
          <p className={styles.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
