interface Stat {
  number: string;
  unit?: string;
  label: string;
}

interface Props {
  stats: Stat[];
}

export default function StatStrip({ stats }: Props) {
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
          borderTop: '1px solid rgba(26,26,26,0.12)',
          borderBottom: '1px solid rgba(26,26,26,0.12)',
        }}
      >
        {stats.map(({ number, unit, label }, i) => (
          <div
            key={i}
            style={{
              padding: `48px clamp(24px,5vw,64px)`,
              borderRight: i < stats.length - 1 ? '1px solid rgba(26,26,26,0.12)' : 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(36px,4vw,56px)',
                color: 'var(--color-green)',
                lineHeight: 1,
                marginBottom: 10,
              }}
            >
              {number}
              {unit && (
                <small
                  style={{
                    color: 'var(--color-gold)',
                    fontSize: '0.55em',
                    verticalAlign: 'super',
                    marginLeft: 4,
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {unit}
                </small>
              )}
            </div>
            <div
              style={{
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-ink-mute)',
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .stat-strip-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 860px) {
          .stat-strip-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
