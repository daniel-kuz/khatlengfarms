import Link from 'next/link';
import type { CSSProperties } from 'react';

type Variant = 'green' | 'gold' | 'ghost' | 'outline-green';

interface Props {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  arrow?: boolean;
  children: React.ReactNode;
  type?: 'button' | 'submit';
  disabled?: boolean;
  style?: CSSProperties;
}

const base: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  padding: '14px 24px',
  fontFamily: 'var(--font-sans)',
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  border: '1px solid transparent',
  cursor: 'pointer',
  transition: 'background .2s ease, color .2s ease, border-color .2s ease',
};

const variants: Record<Variant, CSSProperties> = {
  'green': {
    background: 'var(--color-green)',
    color: 'var(--color-bone)',
    borderColor: 'var(--color-green)',
  },
  'gold': {
    background: 'var(--color-gold)',
    color: 'var(--color-ink)',
    borderColor: 'var(--color-gold)',
  },
  'ghost': {
    background: 'transparent',
    color: 'var(--color-bone)',
    borderColor: 'var(--color-bone)',
  },
  'outline-green': {
    background: 'transparent',
    color: 'var(--color-green)',
    borderColor: 'var(--color-green)',
  },
};

export default function Btn({
  href,
  onClick,
  variant = 'green',
  arrow,
  children,
  type = 'button',
  disabled,
  style,
}: Props) {
  const merged: CSSProperties = { ...base, ...variants[variant], ...style };
  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} style={merged}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={merged}>
      {content}
    </button>
  );
}
