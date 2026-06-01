import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About Us' },
  { href: '/our-farm',   label: 'Our Farm' },
  { href: '/production', label: 'Production' },
  { href: '/projects',   label: 'Projects' },
  { href: '/gallery',    label: 'Gallery' },
  { href: '/contact',    label: 'Contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-ink)',
        color: 'var(--color-bone)',
        padding: 'clamp(64px,8vw,96px) clamp(24px,5vw,96px) 32px',
      }}
    >
      <div
        className="container footer-grid"
        style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 48 }}
      >
        {/* Brand */}
        <div>
          <Link
            href="/"
            style={{
              display: 'flex', alignItems: 'center', gap: 12,
              fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600,
              color: 'var(--color-bone)', letterSpacing: '0.02em', marginBottom: 24,
            }}
          >
            <Image
              src="/images/Logo.png"
              alt="Khatleng Farms logo"
              width={40}
              height={40}
              style={{ objectFit: 'contain', flexShrink: 0 }}
            />
            <span>Khatleng Farms</span>
          </Link>
          <p
            style={{
              fontFamily: 'var(--font-serif)', fontSize: 20,
              color: 'var(--color-brown-light)', maxWidth: '22ch',
              lineHeight: 1.3, margin: '0 0 16px',
            }}
          >
            Cultivating Futures. Grounded in Purpose.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 style={colHeadStyle}>Navigate</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navLinks.map(({ href, label }) => (
              <li key={href} style={{ padding: '5px 0' }}>
                <Link href={href} style={linkStyle}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={colHeadStyle}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'daniel@khatleng.com',
              '069 101 0076',
              'Bethlehem, Free State',
              'South Africa',
            ].map(item => (
              <li key={item} style={{ ...linkStyle, padding: '5px 0' }}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        className="container footer-bottom"
        style={{
          marginTop: 56, paddingTop: 20,
          borderTop: '1px solid rgba(244,235,221,0.15)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
          fontSize: 12, color: 'rgba(244,235,221,0.45)', letterSpacing: '0.07em',
        }}
      >
        <span>© 2026 Khatleng Farms | Operated by Nkoenyane Family Trust</span>
        <span>Bethlehem · Free State · ZA</span>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

const colHeadStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 11, letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--color-brown-light)',
  marginBottom: 18, fontWeight: 500,
};

const linkStyle: React.CSSProperties = {
  fontSize: 14, color: 'rgba(244,235,221,0.7)',
};
