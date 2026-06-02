﻿import type { Metadata } from 'next';
import NavBar from '@/components/layout/NavBar';
import HeroVideoLoop from '@/components/ui/HeroVideoLoop';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import Btn from '@/components/ui/Btn';
import Divider from '@/components/ui/Divider';

export const metadata: Metadata = {
  title: 'Projects | Khatleng Farms',
  description: 'The growth roadmap for Khatleng Farms  -  from irrigation and tunnel expansion to agro-processing and feedlot development.',
};

export default function ProjectsPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero />
        <Divider from="#1e1a0c" to="#F4EBDD" />
        <ProjectsGrid />
        <Divider from="#F4EBDD" to="#3D4F1F" />
        <VisionStatement />
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <header style={{ position: 'relative', minHeight: '52vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(96px,10vw,160px) clamp(24px,5vw,96px) 72px', color: 'var(--color-bone)', overflow: 'hidden' }}>
      <HeroVideoLoop videos={['/videos/hero4.mp4','/videos/hero5.mp4','/videos/hero6.mp4','/videos/hero7.mp4']} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.6) 60%,rgba(0,0,0,0.78) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'rgba(244,235,221,0.6)', marginBottom: 20 }}><span></span>PROJECTS</div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '18ch', marginBottom: 20, fontWeight: 400 }}>What We&rsquo;re Building</h1>
        <p style={{ color: 'rgba(244,235,221,0.82)', fontSize: 'clamp(16px,1.4vw,20px)', maxWidth: '52ch' }}>
          Khatleng Farms is a farm in motion. Here is where we are headed.
        </p>
      </div>
    </header>
  );
}

function ProjectsGrid() {
  const projects = [
    {
      title: 'Tunnel Expansion',
      status: 'Year 2',
      statusType: 'planned' as const,
      body: 'Additional tunnel units to grow vegetable production capacity. Phase 2 tunnels funded from Year 1 operational surpluses.',
    },
    {
      title: 'Beef Stud Programme',
      status: 'In Development',
      statusType: 'active' as const,
      body: 'Bonsmara/Simmental genetics programme  -  5 stud bulls currently in maturation. Premium stud sales from Year 2 at R80,000 - R150,000 per animal.',
    },
    {
      title: 'Irrigation Infrastructure',
      status: 'Planned  -  Year 3',
      statusType: 'planned' as const,
      body: 'Developing irrigation from existing boreholes to reduce dryland risk, extend growing seasons and expand crop options.',
    },
    {
      title: 'Agro-Processing',
      status: 'Future Vision',
      statusType: 'future' as const,
      body: 'Maize meal, sunflower oil, dried vegetables  -  value chain integration for higher margins by capturing processing value on-farm.',
    },
    {
      title: 'Feedlot Development',
      status: 'Future Vision',
      statusType: 'future' as const,
      body: 'Controlled feeding programme to improve beef yield and consistency, enabling premium abattoir pricing and direct supply arrangements.',
    },
    {
      title: 'Packhouse Facility',
      status: 'Future Vision',
      statusType: 'future' as const,
      body: 'On-farm grading, packing and cold storage for vegetables and produce. Enables direct supply to retail and export-grade presentation.',
    },
  ];

  const statusStyle = (type: 'active' | 'planned' | 'future') => ({
    active:  { color: 'var(--color-green)',      border: '1px solid var(--color-green)' },
    planned: { color: 'var(--color-brown)',       border: '1px solid var(--color-brown)' },
    future:  { color: 'var(--color-ink-mute)',    border: '1px solid rgba(47,47,47,0.25)' },
  })[type];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(56px,7vw,88px)' }}>
          <SectionLabel number="" label="Our Projects" />
          <h2 style={{ fontWeight: 400 }}>Six projects. Three timelines. One direction.</h2>
        </div>
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {projects.map(({ title, status, statusType, body }) => (
            <div key={title} style={{ padding: '36px 32px', border: '1px solid rgba(47,47,47,0.12)', background: statusType === 'future' ? 'var(--color-bone-deep)' : 'var(--color-bone)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'inline-block', padding: '5px 12px', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500, ...statusStyle(statusType) }}>
                {status}
              </div>
              <h3 style={{ fontSize: 'clamp(18px,1.7vw,22px)', fontWeight: 600, lineHeight: 1.25 }}>{title}</h3>
              <p style={{ color: 'var(--color-ink-mute)', margin: 0, fontSize: 15, lineHeight: 1.7 }}>{body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, padding: '20px 0', borderTop: '1px solid rgba(47,47,47,0.1)', display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          {[
            { label: 'Active', color: 'var(--color-green)' },
            { label: 'Planned', color: 'var(--color-brown)' },
            { label: 'Future Vision', color: 'var(--color-ink-mute)' },
          ].map(({ label, color }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 12, height: 12, background: color }} />
              <span style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-mute)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1100px){.projects-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:560px){.projects-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

function VisionStatement() {
  return (
    <section className="section-pad" style={{ background: 'var(--color-green-deep)', color: 'var(--color-bone)', textAlign: 'center' }}>
      <div className="container-sm">
        <SectionLabel number="" label="Long-Term Vision" light />
        <h2 style={{ color: 'var(--color-bone)', fontWeight: 400, marginBottom: 24 }}>A fully integrated commercial farm  -  grain to table.</h2>
        <p style={{ color: 'rgba(244,235,221,0.75)', fontSize: 'clamp(16px,1.3vw,19px)', maxWidth: '56ch', margin: '0 auto 40px', lineHeight: 1.75 }}>
          Every project on this page is a step toward a single outcome: an agricultural operation that produces, processes and delivers premium food from the Free State to markets across South Africa and beyond.
        </p>
        <Btn href="/contact" variant="gold" arrow>Get in Touch</Btn>
      </div>
    </section>
  );
}

