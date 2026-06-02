import type { Metadata } from 'next';
import Image from 'next/image';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import Divider from '@/components/ui/Divider';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import HeroVideoLoop from '@/components/ui/HeroVideoLoop';

export const metadata: Metadata = {
  title: 'About Us | Khatleng Farms',
  description: 'Khatleng Farms — a commercial agricultural enterprise in Bethlehem, Free State, established in 2000 on 200 hectares of freehold land.',
};

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero />
        <Divider from="#1e1a0c" to="#F4EBDD" />
        <OpeningSection />
        <Divider from="#F4EBDD" to="#3D4F1F" />
        <FullStory />
        <Divider from="#3D4F1F" to="#F4EBDD" />
        <PhilosophyPillars />
        <Divider from="#F4EBDD" to="#E8D5C0" />
        <JourneyTimeline />
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <header style={{ position: 'relative', minHeight: '56vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(96px,10vw,160px) clamp(24px,5vw,96px) 72px', color: 'var(--color-bone)', overflow: 'hidden' }}>
      <HeroVideoLoop videos={['/videos/hero4.mp4','/videos/hero5.mp4','/videos/hero6.mp4','/videos/hero7.mp4']} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.55) 60%,rgba(0,0,0,0.78) 100%)', zIndex: 1 }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'rgba(244,235,221,0.6)', marginBottom: 20 }}><span>—</span>ABOUT US</div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '18ch', marginBottom: 20, fontWeight: 400 }}>About Khatleng Farms</h1>
        <p style={{ color: 'rgba(244,235,221,0.82)', fontSize: 'clamp(16px,1.4vw,20px)', maxWidth: '52ch' }}>
          A commercial agricultural enterprise based in Bethlehem, Free State.
        </p>
      </div>
    </header>
  );
}

function OpeningSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="opening-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(56px,8vw,112px)', alignItems: 'center' }}>
          <div>
            <SectionLabel number="" label="Who We Are" />
            <h2 style={{ fontWeight: 400, marginBottom: 28 }}>200 hectares. One purpose. Built to last.</h2>
            <p style={{ color: 'var(--color-ink-mute)', lineHeight: 1.75, marginBottom: 16 }}>
              Khatleng Farms is focused on sustainable grain production, livestock development and long-term agricultural growth.
            </p>
            <p style={{ color: 'var(--color-ink-mute)', lineHeight: 1.75 }}>
              We operate 200 hectares of freehold farmland in Bethlehem, Free State — land established in 2000 and now entering its most productive chapter.
            </p>
          </div>
          <div style={{ position: 'relative', height: 'clamp(380px,42vw,520px)', width: '100%', overflow: 'hidden' }}>
            <Image
              src="/images/img · farm landscape · Free State highlands · morning light.jpg"
              alt="Farm landscape, Free State highlands, morning light"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.opening-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function FullStory() {
  return (
    <section className="section-pad" style={{ background: 'var(--color-green-deep)', color: 'var(--color-bone)' }}>
      <div className="container">
        <div className="story-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(56px,8vw,112px)', alignItems: 'start' }}>
          <div>
            <SectionLabel number="" label="Our Story" light />
            <h2 style={{ color: 'var(--color-bone)', fontWeight: 400 }}>From landholding to commercial enterprise.</h2>
          </div>
          <div style={{ color: 'rgba(244,235,221,0.82)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 20 }}>
              Khatleng Farms was established in 2000 on 200 hectares of freehold land in Bethlehem, Free State. The land has been held continuously and unencumbered for over two decades.
            </p>
            <p style={{ marginBottom: 20 }}>
              
            </p>
            <p style={{ marginBottom: 20 }}>
              In May 2026, the Trust transitioned from landholding to direct, owner-operated commercial farming — building an enterprise grounded in stewardship, sustainability and long-term growth.
            </p>
            <p style={{ marginBottom: 20 }}>
              Khatleng Farms represents the transition from inherited land to active development — from possibility to production. Our goal is to transform the farm into a modern agricultural operation focused on grain production, livestock and tunnel farming while creating employment opportunities and contributing to local food security in the Free State.
            </p>
            <p style={{ marginBottom: 20 }}>
              
            </p>
            <p style={{ color: 'var(--color-bone)', fontFamily: 'var(--font-serif)', fontSize: 'clamp(16px,1.3vw,18px)', lineHeight: 1.8 }}>
              Agriculture that creates opportunity, dignity and lasting impact.
            </p>
            <p style={{ marginTop: 20, marginBottom: 0 }}>
              Every field planted, every fence built and every tunnel raised is part of a larger vision: to leave the land better than we found it and to build a foundation that future generations can continue to grow from.
            </p>
            <p style={{ marginTop: 24, color: 'var(--color-bone)', fontFamily: 'var(--font-serif)', fontSize: 'clamp(17px,1.4vw,20px)', fontStyle: 'italic' }}>
              At Khatleng Farms, we are not simply farming land. We are continuing a legacy.
            </p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.story-layout{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function PhilosophyPillars() {
  const pillars = [
    { title: 'Generational Stewardship', body: 'We farm as if the next generation is watching. Because they are.' },
    { title: 'Sustainable Land Use', body: 'Every decision protects the soil, the water and the ecosystem.' },
    { title: 'Community First', body: 'Our farm creates employment, local procurement and food security in the Free State.' },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(56px,7vw,88px)' }}>
          <SectionLabel number="" label="Our Philosophy" />
          <h2 style={{ fontWeight: 400 }}>How we farm. Why it matters.</h2>
        </div>
        <div className="phil-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {pillars.map(({ title, body }) => (
            <div key={title} style={{ padding: '36px 32px', borderTop: '3px solid var(--color-brown)' }}>
              <h3 style={{ marginBottom: 16, fontWeight: 600 }}>{title}</h3>
              <p style={{ color: 'var(--color-ink-mute)', margin: 0, lineHeight: 1.75 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){.phil-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function JourneyTimeline() {
  const milestones = [
    { year: '2000', event: 'Farm established. 200ha freehold land, continuously held and in agricultural use.' },
    { year: '2020', event: 'Transition planning begins. Long-term development plan takes shape.' },
    { year: '2026', event: 'Commercial farm development launched. Next generation takes the land into direct operation.' },
    { year: '2027', event: 'Tunnel expansion and livestock growth phase initiated.' },
    { year: 'Future', event: 'Integrated commercial agriculture — irrigation, agro-processing, feedlot, packhouse.' },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(56px,7vw,88px)' }}>
          <SectionLabel number="" label="Our Journey" />
          <h2 style={{ fontWeight: 400 }}>Two decades of patience. Now in full production.</h2>
        </div>
        <div style={{ position: 'relative', maxWidth: 860 }}>
          <div style={{ position: 'absolute', left: 'clamp(48px,6vw,72px)', top: 0, bottom: 0, width: 1, background: 'rgba(122,92,62,0.25)' }} />
          {milestones.map(({ year, event }, i) => (
            <div key={year} style={{ display: 'grid', gridTemplateColumns: 'clamp(96px,12vw,144px) 1fr', gap: 32, padding: 'clamp(20px,2.5vw,32px) 0', borderBottom: i < milestones.length - 1 ? '1px solid rgba(47,47,47,0.08)' : 'none', alignItems: 'start' }}>
              <div style={{ textAlign: 'right', paddingRight: 'clamp(20px,3vw,36px)', position: 'relative' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px,1.8vw,24px)', color: year === 'Future' ? 'var(--color-brown)' : 'var(--color-green)', fontWeight: 600 }}>{year}</div>
                <div style={{ position: 'absolute', right: -6, top: '50%', transform: 'translateY(-50%)', width: 12, height: 12, background: year === 'Future' ? 'var(--color-brown)' : 'var(--color-green)', border: '3px solid var(--color-bone-deep)', zIndex: 2 }} />
              </div>
              <p style={{ color: 'var(--color-ink-mute)', lineHeight: 1.7, margin: 0, paddingTop: 2 }}>{event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

