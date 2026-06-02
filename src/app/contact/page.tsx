﻿'use client';

import { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import HeroVideoLoop from '@/components/ui/HeroVideoLoop';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import Btn from '@/components/ui/Btn';

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero />
        <ContactSplit />
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <header style={{ position: 'relative', minHeight: '40vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(96px,10vw,140px) clamp(24px,5vw,96px) 64px', color: 'var(--color-bone)', overflow: 'hidden' }}>
      <HeroVideoLoop />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.7) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'rgba(244,235,221,0.6)', marginBottom: 16 }}><span></span>CONTACT</div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '14ch', marginBottom: 14, fontWeight: 400 }}>Get in Touch</h1>
        <p style={{ color: 'rgba(244,235,221,0.82)', fontSize: 'clamp(16px,1.4vw,20px)', maxWidth: '52ch' }}>
          We&rsquo;d love to hear from you  -  whether you&rsquo;re a supplier, retailer, partner or visitor.
        </p>
      </div>
    </header>
  );
}

function ContactSplit() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(56px,8vw,112px)', alignItems: 'start' }}>
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
      <style>{`@media(max-width:860px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', type: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div style={{ padding: '48px 40px', background: 'var(--color-green)', color: 'var(--color-bone)' }}>
        <h2 style={{ color: 'var(--color-bone)', marginBottom: 16, fontWeight: 400 }}>Message received.</h2>
        <p style={{ color: 'rgba(244,235,221,0.8)' }}>
          Thank you for reaching out. We will respond within 2 business days.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    background: 'var(--color-bone-deep)',
    border: '1px solid rgba(47,47,47,0.15)',
    color: 'var(--color-ink)',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--color-ink-mute)',
    marginBottom: 8,
    fontFamily: 'var(--font-sans)',
  };

  return (
    <div>
      <SectionLabel number="" label="Send a Message" />
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div>
            <label htmlFor="name" style={labelStyle}>Full Name *</label>
            <input id="name" name="name" required value={form.name} onChange={handle} style={inputStyle} placeholder="Your full name" />
          </div>
          <div>
            <label htmlFor="org" style={labelStyle}>Organisation</label>
            <input id="org" name="org" value={form.org} onChange={handle} style={inputStyle} placeholder="Company or farm name" />
          </div>
        </div>
        <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div>
            <label htmlFor="email" style={labelStyle}>Email *</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handle} style={inputStyle} placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="phone" style={labelStyle}>Phone</label>
            <input id="phone" name="phone" type="tel" value={form.phone} onChange={handle} style={inputStyle} placeholder="+27 xx xxx xxxx" />
          </div>
        </div>
        <div>
          <label htmlFor="type" style={labelStyle}>Enquiry Type *</label>
          <select id="type" name="type" required value={form.type} onChange={handle} style={{ ...inputStyle, appearance: 'none' }}>
            <option value="">Select enquiry type</option>
            <option value="Become a Supplier">Become a Supplier</option>
            <option value="Retail & Procurement">Retail &amp; Procurement</option>
            <option value="Partnership Enquiries">Partnership Enquiries</option>
            <option value="Agricultural Development">Agricultural Development</option>
            <option value="Farm Visits">Farm Visits</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" style={labelStyle}>Message *</label>
          <textarea id="message" name="message" required rows={6} value={form.message} onChange={handle} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Tell us about your enquiry..." />
        </div>
        <div>
          <Btn type="submit" variant="green" arrow disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending"¦' : 'Send Message'}
          </Btn>
          {status === 'error' && (
            <p style={{ color: '#C0392B', fontSize: 13, marginTop: 10 }}>
              Something went wrong. Please email info@khatleng.com directly.
            </p>
          )}
        </div>
      </form>
      <style>{`@media(max-width:640px){.form-row{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}

function ContactDetails() {
  return (
    <div style={{ paddingTop: 40 }}>
      <SectionLabel number="" label="Contact Details" />
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-brown)', marginBottom: 10 }}>Email</div>
        <a href="mailto:info@khatleng.com" style={{ fontFamily: 'var(--font-serif)', fontSize: 20, color: 'var(--color-green)' }}>info@khatleng.com</a>
      </div>
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-brown)', marginBottom: 10 }}>Phone</div>
        <a href="tel:+27691010076" style={{ fontFamily: 'var(--font-serif)', fontSize: 19, display: 'block' }}>069 101 0076</a>
      </div>
      <div>
        <div style={{ padding: '22px 20px', border: '1px solid rgba(47,47,47,0.12)', background: 'var(--color-bone-deep)' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-brown)', marginBottom: 10 }}>Farm Location</div>
          <address style={{ fontStyle: 'normal', fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.55 }}>
            Bethlehem, Free State<br />
            South Africa, 9701
          </address>
        </div>
      </div>
      <p style={{ marginTop: 24, fontSize: 12, color: 'var(--color-ink-mute)', lineHeight: 1.6 }}>
        Operated by NFT trading as Khatleng Farms.
      </p>
    </div>
  );
}

