interface Props {
  number: string;
  label: string;
  light?: boolean;
  gold?: boolean;
}

export default function SectionLabel({ number, label, light, gold }: Props) {
  return (
    <span
      className="numlabel"
      style={{
        color: light
          ? 'rgba(248,245,238,0.7)'
          : gold
          ? 'var(--color-gold)'
          : 'var(--color-ink-mute)',
      }}
    >
      <span>{number} /</span>
      {label}
    </span>
  );
}
