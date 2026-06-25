import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        padding: '6rem 0',
        textAlign: 'center',
        maxWidth: 560,
      }}
    >
      <p className="eyebrow">404</p>
      <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>
        This patch of meadow is empty.
      </h1>
      <p style={{ marginTop: '1rem', color: 'var(--muted)' }}>
        The page you’re looking for can’t be found.
      </p>
      <p style={{ marginTop: '2rem' }}>
        <Link href="/" className="btn btn-primary">
          Back home
        </Link>
      </p>
    </div>
  );
}
