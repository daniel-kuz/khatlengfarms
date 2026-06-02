'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About Us' },
  { href: '/our-farm',   label: 'Our Farm' },
  { href: '/production', label: 'Production' },
  { href: '/projects',   label: 'Projects' },
  { href: '/gallery',    label: 'Gallery' },
  { href: '/contact',    label: 'Contact' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex items-center justify-between border-b"
        style={{
          padding: '20px clamp(24px,5vw,96px)',
          background: scrolled
            ? 'rgba(61,79,31,0.97)'
            : 'rgba(244,235,221,0.94)',
          backdropFilter: 'saturate(130%) blur(8px)',
          borderColor: scrolled
            ? 'rgba(244,235,221,0.15)'
            : 'rgba(47,47,47,0.1)',
          transition: 'background .3s ease, border-color .3s ease',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink-0"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 20,
            fontWeight: 600,
            color: scrolled ? 'var(--color-bone)' : 'var(--color-green)',
            letterSpacing: '0.02em',
          }}
        >
          <div style={{ position: 'relative', width: 88, height: 88, flexShrink: 0 }}>
            <Image
              src="/images/Logo.png"
              alt="Khatleng Farms logo"
              width={88}
              height={88}
              style={{ objectFit: 'contain', position: 'relative', zIndex: 1 }}
            />
            {/* Roots glow — pulses upward from the base of the logo */}
            <div className="roots-glow" />
          </div>
          <style>{`
            @keyframes roots-glow {
              0%,15%  { opacity:0; transform:scaleX(1) scaleY(0.2) translateY(8px); }
              25%     { opacity:0.55; transform:scaleX(1.1) scaleY(0.7) translateY(2px); }
              45%     { opacity:0.35; transform:scaleX(1.2) scaleY(1) translateY(-4px); }
              65%     { opacity:0.15; transform:scaleX(1.3) scaleY(1.2) translateY(-10px); }
              80%,100%{ opacity:0; transform:scaleX(1.4) scaleY(1.4) translateY(-18px); }
            }
            .roots-glow {
              position: absolute;
              bottom: 4px;
              left: 50%;
              translate: -50% 0;
              width: 72px;
              height: 44px;
              border-radius: 50%;
              background: radial-gradient(ellipse at center bottom,
                rgba(61,90,26,0.7) 0%,
                rgba(85,120,30,0.4) 40%,
                transparent 75%
              );
              transform-origin: center bottom;
              pointer-events: none;
              z-index: 0;
              animation: roots-glow 8s ease-in-out infinite;
            }
          `}</style>
          <span>Khatleng Farms</span>
        </Link>

        {/* Desktop links */}
        <div id="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: 12,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                color: scrolled ? 'rgba(244,235,221,0.85)' : 'var(--color-ink)',
                padding: '6px 0',
                borderBottom: isActive(href)
                  ? `1px solid ${scrolled ? 'var(--color-bone)' : 'var(--color-green)'}`
                  : '1px solid transparent',
                transition: 'border-color .2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => ((e.target as HTMLElement).style.borderBottomColor = 'var(--color-brown)')}
              onMouseLeave={e => {
                if (!isActive(href))
                  (e.target as HTMLElement).style.borderBottomColor = 'transparent';
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/our-farm"
            style={{
              marginLeft: 8,
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 20px',
              fontFamily: 'var(--font-sans)',
              fontSize: 11, fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              background: 'var(--color-brown)',
              color: 'var(--color-bone)',
              border: '1px solid var(--color-brown)',
              transition: 'background .2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Explore Our Farm
          </Link>
        </div>

        {/* Hamburger */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(v => !v)}
          className="hamburger-btn"
          style={{
            display: 'none',
            background: 'transparent',
            border: `1px solid ${scrolled ? 'rgba(244,235,221,0.35)' : 'rgba(47,47,47,0.2)'}`,
            color: scrolled ? 'var(--color-bone)' : 'var(--color-green)',
            fontSize: 20, padding: '4px 10px',
            cursor: 'pointer', lineHeight: 1,
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          style={{
            position: 'fixed', inset: 0, zIndex: 49,
            background: 'var(--color-green)',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px clamp(24px,5vw,60px)',
            gap: 8,
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(30px,5.5vw,48px)',
                color: isActive(href) ? 'var(--color-brown-light)' : 'var(--color-bone)',
                letterSpacing: '-0.01em',
                lineHeight: 1.35,
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/our-farm"
            style={{
              marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', fontFamily: 'var(--font-sans)',
              fontSize: 12, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
              background: 'var(--color-brown)', color: 'var(--color-bone)',
              alignSelf: 'flex-start',
            }}
          >
            Explore Our Farm →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1180px) {
          #desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
