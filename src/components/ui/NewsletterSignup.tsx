'use client';

import { useState } from 'react';
import SectionLabel from './SectionLabel';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'done'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch {}
    setStatus('done');
  };

  return (
    <section
      style={{
        background: 'var(--color-green-deep)',
        color: 'var(--color-bone)',
        padding: 'clamp(64px,8vw,96px) clamp(24px,5vw,96px)',
      }}
    >
      <div
        className="container newsletter-inner"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}
      >
        <div>
          <SectionLabel number="" label="Follow the Farm" light />
          <h2 style={{ color: 'var(--color-bone)', fontWeight: 400, marginBottom: 16 }}>Follow the Farm</h2>
          <p style={{ color: 'rgba(244,235,221,0.75)', lineHeight: 1.7, margin: 0 }}>
            Season updates, harvest news and fresh produce availability — straight to your inbox.
          </p>
        </div>
        {status === 'done' ? (
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--color-bone)' }}>
            You&rsquo;re subscribed. We&rsquo;ll be in touch from the farm.
          </p>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', gap: 0 }}>
            <input
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: '16px 20px',
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                background: 'rgba(244,235,221,0.1)',
                border: '1px solid rgba(244,235,221,0.25)',
                borderRight: 'none',
                color: 'var(--color-bone)',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '16px 28px',
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                background: 'var(--color-brown)',
                color: 'var(--color-bone)',
                border: '1px solid var(--color-brown)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background .2s',
              }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
      <style>{`@media(max-width:860px){.newsletter-inner{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
