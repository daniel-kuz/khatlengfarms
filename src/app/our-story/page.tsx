﻿import type { Metadata } from 'next';
import Image from 'next/image';
import NavBar from '@/components/layout/NavBar';
import HeroVideoLoop from '@/components/ui/HeroVideoLoop';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import Divider from '@/components/ui/Divider';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Our Story | The Nkoenyane Family Trust',
  description: 'The story of the Nkoenyane Family Trust  -  200 hectares of freehold land, 26 years of stewardship, and a generational commitment to premium agriculture.',
};

export default function OurStoryPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero />
        <Divider from="#1c2410" to="#F8F5EE" />
        <OriginSection />
        <Divider from="#F8F5EE" to="#3D5220" />
        <EthosSection />
        <Divider from="#3D5220" to="#F8F5EE" />
        <StructureSection />
        <BrandIdentitySection />
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <header
      style={{
        position: 'relative',
        minHeight: '56vh',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 'clamp(72px,9vw,144px) clamp(24px,5vw,96px) 64px',
        color: 'var(--color-bone)',
        overflow: 'hidden',
      }}
    >
      <HeroVideoLoop />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.55) 60%,rgba(0,0,0,0.78) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'var(--color-gold-soft)', marginBottom: 20 }}><span></span>OUR STORY</div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '16ch', marginBottom: 20 }}>The Nkoenyane Story</h1>
        <p style={{ color: 'rgba(248,245,238,0.85)', fontSize: 'clamp(17px,1.4vw,21px)', maxWidth: '52ch' }}>
          A family. A farm. A generational commitment to the land.
        </p>
      </div>
    </header>
  );
}

function OriginSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px,7vw,112px)', alignItems: 'center' }}>
          <div>
            <SectionLabel number="01" label="The Beginning" />
            <h2 style={{ marginBottom: 24 }}>Planted in 2000. Growing ever since.</h2>
            <p className="lede" style={{ marginBottom: 20 }}>
              The Nkoenyane Family Trust acquired Khatleng Farms in Bethlehem, Free State in the year 2000  - 
              200 hectares of freehold agricultural land held continuously and unencumbered for 26 years.
            </p>
            <p style={{ color: 'var(--color-ink-mute)' }}>
              For more than two decades, the land was stewarded with intention. In May 2026, the Trust transitioned
              from passive landholding to direct, owner-operated commercial farming  -  a deliberate move from
              custodianship to active enterprise.
            </p>
            <p style={{ color: 'var(--color-ink-mute)' }}>
              The name <em>Nkoenyane</em> carries the weight of identity and purpose  -  a name that speaks to
              resilience, rootedness, and the generational responsibility to build something that endures.
            </p>
          </div>
          <div style={{ position: 'relative', height: 460, overflow: 'hidden' }}>
            <Image src="/images/golden-hour.jpg" alt="Free State farmland at golden hour" fill style={{ objectFit: 'cover' }} sizes="(max-width:860px) 100vw, 50vw" />
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.story-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function EthosSection() {
  const values = [
    { icon: 'â—†', title: 'Innovation', body: 'Embedding 4IR technology  -  IoT, automation, data analytics  -  into every operational zone.' },
    { icon: 'â—†', title: 'Integrity', body: 'Institutional governance, audited financials, and full transparency with every investor and partner.' },
    { icon: 'â—†', title: 'Sustainability', body: 'Regenerative land use, rotational grazing, and precision agriculture for long-term soil health.' },
    { icon: 'â—†', title: 'Empowerment', body: '10% profit sharing for all permanent staff. Priority hiring: women, youth, local community.' },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-green)', color: 'var(--color-bone)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="02" label="Our Ethos" gold />
          <h2 style={{ color: 'var(--color-bone)', marginBottom: 16 }}>Vision. Mission. Values.</h2>
          <p style={{ color: 'rgba(248,245,238,0.8)', fontSize: 'clamp(17px,1.4vw,21px)', maxWidth: '62ch' }}>
            To be a leading producer of premium, fully traceable, and sustainably cultivated agricultural
            products  -  recognised for exceptional operational standards, stewardship, and integrity.
          </p>
        </div>
        <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
          {values.map(({ icon, title, body }) => (
            <div key={title} style={{ borderTop: '1px solid rgba(201,168,76,0.4)', paddingTop: 24 }}>
              <div style={{ color: 'var(--color-gold)', fontSize: 10, marginBottom: 20, letterSpacing: '0.1em' }}>{icon}</div>
              <h3 style={{ color: 'var(--color-bone)', marginBottom: 12, fontSize: 'clamp(20px,1.8vw,26px)' }}>{title}</h3>
              <p style={{ color: 'rgba(248,245,238,0.75)', margin: 0, fontSize: 15 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){.values-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  );
}

function StructureSection() {
  const facts = [
    { label: 'Trust Registration', value: '' },
    { label: 'Governing Law', value: 'South African Trust Law' },
    { label: 'Land Title', value: '200ha Freehold, Unencumbered' },
    { label: 'Ownership', value: '100% Black-Owned, Female-Led' },
    { label: 'Operational From', value: 'May 2026' },
    { label: 'BFS Scorecard (Est.)', value: '46 / 50' },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div className="structure-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px,7vw,112px)', alignItems: 'start' }}>
          <div>
            <SectionLabel number="03" label="Our Structure" />
            <h2 style={{ marginBottom: 24 }}>Governed for the long term.</h2>
            <p className="lede" style={{ marginBottom: 20 }}>
              The Nkoenyane Family Trust () operates under South African trust law with fiduciary
              oversight, institutional controls, and a governance framework designed for generational continuity.
            </p>
            <p style={{ color: 'var(--color-ink-mute)' }}>
              This is a first-generation black female commercial farming enterprise  -  not a smallholder operation
              and not an emerging farmer. It is an institutional-grade agricultural business anchored by 200
              hectares of unencumbered freehold land.
            </p>
          </div>
          <div>
            <div style={{ border: '1px solid rgba(26,26,26,0.12)' }}>
              {facts.map(({ label, value }, i) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '18px 24px',
                    borderBottom: i < facts.length - 1 ? '1px solid rgba(26,26,26,0.1)' : 'none',
                    gap: 24,
                  }}
                >
                  <span style={{ fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-ink-mute)' }}>{label}</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 18, textAlign: 'right' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.structure-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function BrandIdentitySection() {
  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="04" label="The Symbol" />
          <h2>A logo that carries history.</h2>
        </div>
        <div className="brand-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {[
            { title: 'The Tree', body: 'Wind-bent but unbroken. Branches sweeping left, roots spreading wide. Resilience and adaptability  -  planted in place, shaped by circumstance, never uprooted.' },
            { title: 'The Birds', body: 'Three birds in flight (gold) to the upper left. Ambition, elevation, freedom. The next generation rising from the roots that hold them.' },
            { title: 'The Pattern', body: 'African geometric motif from the logo\'s border  -  a quiet signature of heritage, identity, and the continental context from which this enterprise grows.' },
          ].map(({ title, body }) => (
            <div key={title} style={{ padding: '32px 28px', background: 'var(--color-bone)', border: '1px solid rgba(26,26,26,0.1)' }}>
              <div style={{ width: 40, height: 2, background: 'var(--color-gold)', marginBottom: 24 }} />
              <h3 style={{ marginBottom: 14 }}>{title}</h3>
              <p style={{ color: 'var(--color-ink-mute)', margin: 0, fontSize: 15 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){.brand-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

