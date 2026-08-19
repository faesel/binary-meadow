import type {
  ServerStructures as ServerStructuresData,
  ServerTileShape,
} from '@/data/apps';
import styles from './ServerStructures.module.css';

const SHAPES: Record<
  ServerTileShape,
  { label: string; hint: string; className: string }
> = {
  menu: {
    label: 'Menu',
    hint: 'Opens into more folders',
    className: 'shapeMenu',
  },
  list: {
    label: 'List',
    hint: 'A straight run of items',
    className: 'shapeList',
  },
  activity: {
    label: 'As you read',
    hint: 'Empty until you start reading',
    className: 'shapeActivity',
  },
  user: {
    label: 'You create it',
    hint: 'Empty until you make one on the server',
    className: 'shapeUser',
  },
  metadata: {
    label: 'From metadata',
    hint: 'Built from your books’ own details',
    className: 'shapeMetadata',
  },
};

const SHAPE_ORDER: ServerTileShape[] = [
  'menu',
  'list',
  'activity',
  'user',
  'metadata',
];

export default function ServerStructures({
  data,
  caption,
}: {
  data: ServerStructuresData;
  caption: string;
}) {
  return (
    <>
      <p className={styles.lead}>{data.lead}</p>

      <ul className={styles.legend}>
        {SHAPE_ORDER.map((shape) => (
          <li key={shape}>
            <span className={`${styles.tag} ${styles[SHAPES[shape].className]}`}>
              {SHAPES[shape].label}
            </span>
            <span className={styles.legendHint}>{SHAPES[shape].hint}</span>
          </li>
        ))}
      </ul>

      <div className={styles.list} role="group" aria-label={caption}>
        {data.servers.map((server, i) => (
          <details key={server.name} className={styles.item} open={i === 0}>
            <summary className={styles.head}>
              <span className={styles.headText}>
                <span className={styles.name}>{server.name}</span>
                <span className={styles.summary}>{server.summary}</span>
              </span>
              <span className={styles.chevron} aria-hidden="true" />
            </summary>

            <div className={styles.body}>
              <ul className={styles.tiles}>
                {server.tiles.map((tile) => (
                  <li key={tile.name} className={styles.tile}>
                    <span className={styles.tileHead}>
                      <span className={styles.tileName}>{tile.name}</span>
                      <span
                        className={`${styles.tag} ${styles[SHAPES[tile.shape].className]}`}
                      >
                        {SHAPES[tile.shape].label}
                      </span>
                      {tile.note && (
                        <span className={styles.tileNote}>{tile.note}</span>
                      )}
                      {tile.wayIn && (
                        <span className={styles.wayIn}>The way in</span>
                      )}
                    </span>

                    {tile.path && (
                      <ol className={styles.path}>
                        {tile.path.map((step, stepIndex) => (
                          <li key={`${stepIndex}-${step}`} className={styles.step}>
                            {step}
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ul>

              {server.caveat && (
                <p className={styles.caveat}>{server.caveat}</p>
              )}

              {server.href && (
                <p className={styles.source}>
                  <a
                    className={styles.sourceLink}
                    href={server.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {server.name} official site
                  </a>
                </p>
              )}
            </div>
          </details>
        ))}
      </div>

      <p className={styles.footnote}>{data.note}</p>
    </>
  );
}
