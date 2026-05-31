'use client';

export default function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="social-link"
      style={{
        width: 36,
        height: 36,
        border: '1px solid rgba(248,245,238,0.25)',
        display: 'grid',
        placeItems: 'center',
        color: 'rgba(248,245,238,0.85)',
        transition: 'border-color .2s, color .2s',
      }}
    >
      {children}
      <style>{`.social-link:hover{border-color:var(--color-gold)!important;color:var(--color-gold)!important}`}</style>
    </a>
  );
}
