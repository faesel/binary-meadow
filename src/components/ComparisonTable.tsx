import type { Comparison, ComparisonValue } from '@/data/apps';
import styles from './ComparisonTable.module.css';

const MARKS: Record<ComparisonValue, { glyph: string; label: string }> = {
  yes: { glyph: '✓', label: 'Yes' },
  partial: { glyph: '~', label: 'Partly' },
  no: { glyph: '✕', label: 'No' },
  unknown: { glyph: '?', label: 'Unconfirmed' },
};

export default function ComparisonTable({
  comparison,
  caption,
}: {
  comparison: Comparison;
  caption: string;
}) {
  return (
    <>
      <p className={styles.lead}>{comparison.lead}</p>
      <p className={styles.swipeHint} aria-hidden="true">
        Swipe the table sideways to see every column.
      </p>
      <div className={styles.scroller} tabIndex={0} role="region" aria-label={caption}>
        <table className={styles.table}>
          <caption className={styles.caption}>{caption}</caption>
          <thead>
            <tr>
              <th scope="col" className={styles.rowHead}>
                Feature
              </th>
              {comparison.columns.map((col) => (
                <th
                  key={col.name}
                  scope="col"
                  className={`${styles.colHead} ${col.self ? styles.self : ''}`}
                >
                  {col.href ? (
                    <a
                      className={styles.colLink}
                      href={col.href}
                      target="_blank"
                      rel={
                        col.self
                          ? 'noopener noreferrer'
                          : 'noopener noreferrer nofollow'
                      }
                    >
                      {col.name}
                      <span className="visually-hidden">
                        {col.self ? ' on Google Play' : ' (official site)'}
                      </span>
                    </a>
                  ) : (
                    col.name
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.feature}>
                <th scope="row" className={styles.rowHead}>
                  {row.feature}
                </th>
                {row.cells.map((cell, i) => {
                  const mark = MARKS[cell.value];
                  const col = comparison.columns[i];
                  return (
                    <td
                      key={col?.name ?? i}
                      className={`${styles.cell} ${col?.self ? styles.self : ''}`}
                    >
                      <span className={`${styles.mark} ${styles[cell.value]}`}>
                        <span aria-hidden="true">{mark.glyph}</span>
                        <span className="visually-hidden">{mark.label}</span>
                      </span>
                      {cell.note && (
                        <span className={styles.note}>{cell.note}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className={styles.legend}>
        {(['yes', 'partial', 'no', 'unknown'] as ComparisonValue[]).map((v) => (
          <li key={v}>
            <span className={`${styles.mark} ${styles[v]}`} aria-hidden="true">
              {MARKS[v].glyph}
            </span>
            {MARKS[v].label}
          </li>
        ))}
      </ul>
      <p className={styles.footnote}>{comparison.note}</p>
    </>
  );
}
