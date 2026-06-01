import Image from 'next/image';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Btn from '@/components/ui/Btn';
import Divider from '@/components/ui/Divider';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import SectionLabel from '@/components/ui/SectionLabel';
import NewsletterSignup from '@/components/ui/NewsletterSignup';
import HeroVideoLoop from '@/components/ui/HeroVideoLoop';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <TheStory />
        <Divider from="#F4EBDD" to="#E8D5C0" />
        <StatsStrip />
        <Divider from="#E8D5C0" to="#F4EBDD" />
        <ProductionZones />
        <Divider from="#F4EBDD" to="#3D4F1F" />
        <WhyBethlehem />
        <Divider from="#3D4F1F" to="#F4EBDD" />
        <FarmMap />
        <Divider from="#F4EBDD" to="#E8D5C0" />
        <OurJourney />
        <Divider from="#E8D5C0" to="#F4EBDD" />
        <FarmPhilosophy />
        <Divider from="#F4EBDD" to="#E8D5C0" />
        <ImpactSection />
        <Divider from="#E8D5C0" to="#3D4F1F" />
        <QuoteCloser />
        <Divider from="#3D4F1F" to="#F4EBDD" />
        <NewsSection />
        <Divider from="#F4EBDD" to="#3D4F1F" />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}

/* ─────────────────── HERO ─────────────────── */
function Hero() {
  return (
    <header style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(96px,10vw,160px) clamp(24px,5vw,96px) 96px', color: 'var(--color-bone)', overflow: 'hidden' }}>

      {/* ── Video background loop ── */}
      <HeroVideoLoop />

      {/* ── Dark gradient overlay so text stays readable ── */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,0.25) 0%,rgba(0,0,0,0.50) 55%,rgba(0,0,0,0.80) 100%)', zIndex: 1 }} />

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'rgba(244,235,221,0.6)', marginBottom: 28 }}>
          <span>—</span>KHATLENG FARMS · BETHLEHEM, FREE STATE
        </div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '15ch', marginBottom: 28, fontWeight: 400 }}>
          Rooted in Legacy.<br />Growing the Future.
        </h1>
        <p style={{ color: 'rgba(244,235,221,0.82)', fontSize: 'clamp(16px,1.4vw,20px)', maxWidth: '58ch', marginBottom: 44, lineHeight: 1.65 }}>
          Khatleng Farms is a modern agricultural enterprise based in Bethlehem, Free State — focused on sustainable grain production, livestock development and protected tunnel farming.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Btn href="/our-farm" variant="gold" arrow>Explore Our Farm</Btn>
          <Btn href="/production" variant="ghost" arrow>View Our Operations</Btn>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────── THE STORY ─────────────────── */
function TheStory() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(56px,8vw,120px)', alignItems: 'center' }}>
          <div style={{ position: 'relative', height: 'clamp(440px,48vw,580px)', width: '100%', overflow: 'hidden' }}>
            <Image
              src="/images/aerial-farm.jpg"
              alt="Aerial view of Khatleng Farms, Bethlehem, Free State"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 860px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <SectionLabel number="" label="Our Story" />
            <h2 style={{ marginBottom: 28, fontWeight: 400 }}>
              What began as a father's vision in 2000 is now becoming reality.
            </h2>
            <p style={{ color: 'var(--color-ink-mute)', lineHeight: 1.75, marginBottom: 16 }}>
              Khatleng Farms was born from a vision planted more than two decades ago.
            </p>
            <p style={{ color: 'var(--color-ink-mute)', lineHeight: 1.75, marginBottom: 16 }}>
              In 2000, the farm was acquired by our family with the hope that one day the land would become more than property — that it would become a legacy. Like many dreams rooted in agriculture, it was built on sacrifice, patience, resilience and an unwavering belief in the future.
            </p>
            <p style={{ color: 'var(--color-ink-mute)', lineHeight: 1.75, marginBottom: 32 }}>
              Today, that vision is being carried forward by the next generation. We are returning to the land with a renewed sense of purpose: to build something meaningful not only for our family, but for our community and future generations.
            </p>
            <Btn href="/about" variant="outline-green" arrow>Read Our Full Story</Btn>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.story-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ─────────────────── STATS STRIP ─────────────────── */
function StatsStrip() {
  const stats = [
    { number: '200', unit: 'ha', label: 'Freehold Land' },
    { number: '26', unit: 'yrs', label: 'In the Family' },
    { number: 'Free State', label: 'Bethlehem Highlands' },
    { number: '1,651', unit: 'm', label: 'Above Sea Level' },
  ];
  return (
    <>
      <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', background: 'var(--color-bone-deep)', borderTop: '1px solid rgba(47,47,47,0.1)', borderBottom: '1px solid rgba(47,47,47,0.1)' }}>
        {stats.map(({ number, unit, label }, i) => (
          <div key={i} style={{ padding: 'clamp(32px,4vw,52px) clamp(16px,2.5vw,32px)', borderRight: i < stats.length - 1 ? '1px solid rgba(47,47,47,0.1)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px,3vw,44px)', color: 'var(--color-green)', lineHeight: 1, marginBottom: 10 }}>
              {number}
              {unit && <small style={{ color: 'var(--color-brown)', fontSize: '0.5em', verticalAlign: 'super', marginLeft: 3, fontFamily: 'var(--font-sans)' }}>{unit}</small>}
            </div>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-ink-mute)', lineHeight: 1.4 }}>{label}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:1100px){.stats-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:860px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}
        .stats-grid>div{border-bottom:1px solid rgba(47,47,47,0.1)}
      `}</style>
    </>
  );
}

/* ─────────────────── PRODUCTION ZONES ─────────────────── */
function ProductionZones() {
  const zones = [
    { icon: '🌽', name: 'Grain Production', desc: 'Yellow Maize, 80ha dryland production', status: 'Live', statusColor: 'var(--color-green)' },
    { icon: '🌻', name: 'Field Crops', desc: 'Sunflower rotation, oilseed production', status: 'Live', statusColor: 'var(--color-green)' },
    { icon: '🐄', name: 'Cattle', desc: 'Commercial herd + Bonsmara/Simmental stud programme', status: 'Live', statusColor: 'var(--color-green)' },
    { icon: '🐑', name: 'Sheep', desc: 'Commercial flock, rotational grazing', status: 'Live', statusColor: 'var(--color-green)' },
    { icon: '🥚', name: 'Free Range Eggs', desc: 'Small-scale, premium local supply', status: 'Coming Soon', statusColor: 'var(--color-brown)' },
    { icon: '🌱', name: 'Tunnel Farming', desc: 'Protected tunnel farming — tomatoes, peppers, spinach, lettuce. Phase 1 operational.', status: 'Live', statusColor: 'var(--color-green)' },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 760, marginBottom: 'clamp(56px,7vw,88px)' }}>
          <SectionLabel number="" label="What We Produce" />
          <h2 style={{ fontWeight: 400 }}>From grain fields to livestock camps — four production zones, one integrated farm.</h2>
        </div>
        <div className="zones-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {zones.map(({ icon, name, desc, status, statusColor }) => (
            <div key={name} style={{ padding: '32px 28px', background: 'var(--color-bone-deep)', border: '1px solid rgba(47,47,47,0.1)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontSize: 32 }}>{icon}</div>
              <h3 style={{ fontSize: 'clamp(18px,1.6vw,22px)', marginBottom: 4 }}>{name}</h3>
              <p style={{ fontSize: 14, color: 'var(--color-ink-mute)', margin: 0, lineHeight: 1.6, flexGrow: 1 }}>{desc}</p>
              <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: statusColor, fontWeight: 500, marginTop: 4 }}>{status}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <Btn href="/production" variant="outline-green" arrow>View All Production</Btn>
        </div>
      </div>
      <style>{`
        @media(max-width:860px){.zones-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:560px){.zones-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

/* ─────────────────── WHY BETHLEHEM ─────────────────── */
function WhyBethlehem() {
  const facts = [
    { number: '772mm', label: 'Average Annual Rainfall' },
    { number: '4,047hrs', label: 'Sunshine Per Year' },
    { number: '1,651m', label: 'Above Sea Level' },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-green-deep)', color: 'var(--color-bone)' }}>
      <div className="container">
        <div className="bethlehem-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(56px,8vw,112px)', alignItems: 'center' }}>
          <div>
            <SectionLabel number="" label="Grown Here for a Reason" light />
            <h2 style={{ color: 'var(--color-bone)', fontWeight: 400, marginBottom: 28 }}>Located in the fertile highlands of the Free State.</h2>
            <p style={{ color: 'rgba(244,235,221,0.8)', lineHeight: 1.75, marginBottom: 16 }}>
              Bethlehem sits at 1,651 metres above sea level in the heart of South Africa's grain belt. With an average annual rainfall of 772mm, open grazing land, fertile soils and over 4,000 sunshine hours a year, it is one of the country's most productive agricultural regions.
            </p>
            <p style={{ color: 'rgba(244,235,221,0.8)', lineHeight: 1.75 }}>
              This is not coincidence. This is where our farm was always meant to grow.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {facts.map(({ number, label }, i) => (
              <div key={label} style={{ padding: '32px 0', borderBottom: i < facts.length - 1 ? '1px solid rgba(244,235,221,0.15)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px,4vw,56px)', color: 'var(--color-brown-light)', lineHeight: 1, marginBottom: 8 }}>{number}</div>
                <div style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,235,221,0.6)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.bethlehem-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ─────────────────── FARM MAP ─────────────────── */
function FarmMap() {
  const zones = [
    { color: '#4A7FCB', label: 'Grain Fields', meta: '100ha' },
    { color: '#556B2F', label: 'Tunnel Farming', meta: 'Phase 1 operational' },
    { color: '#C0392B', label: 'Livestock Handling', meta: '' },
    { color: '#E67E22', label: 'Grazing Camps', meta: '106ha' },
    { color: '#2F2F2F', label: 'Operational Hub', meta: '' },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,72px)' }}>
          <SectionLabel number="" label="The Farm" />
          <h2 style={{ fontWeight: 400 }}>200 hectares. Five operational zones.</h2>
        </div>
        <div style={{ position: 'relative', height: 'clamp(380px,46vw,620px)', background: 'repeating-linear-gradient(135deg,rgba(85,107,47,0.06) 0 18px,rgba(85,107,47,0.12) 18px 36px),linear-gradient(180deg,#d4c4ae,#b9a98c)', border: '1px solid rgba(47,47,47,0.12)', marginBottom: 24 }}>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
            <polygon points="80,80 420,80 420,300 80,300" fill="rgba(74,127,203,0.5)" stroke="#4A7FCB" strokeWidth={2}/>
            <text x="250" y="198" textAnchor="middle" fontSize={13} fill="#fff" fontFamily="monospace">Grain Fields</text>
            <polygon points="430,80 580,80 580,200 430,200" fill="rgba(85,107,47,0.6)" stroke="#556B2F" strokeWidth={2}/>
            <text x="505" y="148" textAnchor="middle" fontSize={11} fill="#fff" fontFamily="monospace">Tunnels</text>
            <polygon points="430,210 580,210 580,310 430,310" fill="rgba(192,57,43,0.5)" stroke="#C0392B" strokeWidth={2}/>
            <text x="505" y="268" textAnchor="middle" fontSize={10} fill="#fff" fontFamily="monospace">Livestock</text>
            <polygon points="80,310 420,310 420,450 80,450" fill="rgba(230,126,34,0.4)" stroke="#E67E22" strokeWidth={2}/>
            <text x="250" y="387" textAnchor="middle" fontSize={13} fill="#fff" fontFamily="monospace">Grazing Camps</text>
            <polygon points="590,80 720,80 720,310 590,310" fill="rgba(47,47,47,0.6)" stroke="#2F2F2F" strokeWidth={2}/>
            <text x="655" y="200" textAnchor="middle" fontSize={10} fill="#fff" fontFamily="monospace">Op. Hub</text>
            <text x="700" y="440" fontSize={11} fill="rgba(47,47,47,0.5)" fontFamily="monospace">N ↑</text>
          </svg>
          <div style={{ position: 'absolute', top: 12, left: 14, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 10px', background: 'rgba(244,235,221,0.92)', border: '1px solid rgba(47,47,47,0.18)' }}>
            Khatleng Farms · Bethlehem, Free State
          </div>
        </div>
        {/* Legend */}
        <div className="legend-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12 }}>
          {zones.map(({ color, label, meta }) => (
            <div key={label} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '14px 16px', border: '1px solid rgba(47,47,47,0.1)', background: 'var(--color-bone-deep)' }}>
              <div style={{ width: 16, height: 16, background: color, flexShrink: 0, marginTop: 3 }} />
              <div>
                <div style={{ fontSize: 14, fontFamily: 'var(--font-serif)' }}>{label}</div>
                {meta && <div style={{ fontSize: 11, color: 'var(--color-ink-mute)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{meta}</div>}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36 }}>
          <Btn href="/our-farm" variant="outline-green" arrow>Explore The Farm</Btn>
        </div>
      </div>
      <style>{`
        @media(max-width:860px){.legend-strip{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
    </section>
  );
}

/* ─────────────────── OUR JOURNEY ─────────────────── */
function OurJourney() {
  const milestones = [
    { year: '2000', event: 'Farm acquired by family patriarch. Land in continuous agricultural use from day one.' },
    { year: '2020', event: 'Transition planning begins. Long-term development plan takes shape for next-generation operation.' },
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
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: 'clamp(48px,6vw,72px)', top: 0, bottom: 0, width: 1, background: 'rgba(122,92,62,0.3)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {milestones.map(({ year, event }, i) => (
              <div key={year} style={{ display: 'grid', gridTemplateColumns: 'clamp(96px,12vw,144px) 1fr', gap: 32, padding: 'clamp(24px,3vw,36px) 0', borderBottom: i < milestones.length - 1 ? '1px solid rgba(47,47,47,0.08)' : 'none', alignItems: 'start' }}>
                <div style={{ textAlign: 'right', paddingRight: 'clamp(24px,3vw,40px)', position: 'relative' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px,2vw,26px)', color: year === 'Future' ? 'var(--color-brown)' : 'var(--color-green)', fontWeight: 600 }}>{year}</div>
                  {/* Dot */}
                  <div style={{ position: 'absolute', right: -6, top: '50%', transform: 'translateY(-50%)', width: 12, height: 12, background: year === 'Future' ? 'var(--color-brown)' : 'var(--color-green)', border: '3px solid var(--color-bone-deep)', zIndex: 2 }} />
                </div>
                <p style={{ color: 'var(--color-ink-mute)', lineHeight: 1.7, margin: 0, paddingTop: 2 }}>{event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── FARM PHILOSOPHY ─────────────────── */
function FarmPhilosophy() {
  const pillars = [
    { title: 'Generational Stewardship', body: 'We farm as if the next generation is watching. Because they are.' },
    { title: 'Sustainable Land Use', body: 'Every decision protects the soil, the water and the ecosystem.' },
    { title: 'Community First', body: 'Our farm creates employment, local procurement and food security in the Free State.' },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(56px,7vw,88px)' }}>
          <SectionLabel number="" label="How We Farm" />
          <h2 style={{ fontWeight: 400 }}>Stewardship over profit. Legacy over short-term gain.</h2>
        </div>
        <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {pillars.map(({ title, body }) => (
            <div key={title} style={{ padding: '36px 32px', borderTop: '3px solid var(--color-brown)' }}>
              <h3 style={{ marginBottom: 16, fontSize: 'clamp(20px,1.8vw,24px)', fontWeight: 600 }}>{title}</h3>
              <p style={{ color: 'var(--color-ink-mute)', margin: 0, lineHeight: 1.75 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){.pillars-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ─────────────────── IMPACT ─────────────────── */
function ImpactSection() {
  const impacts = [
    { title: 'Youth Agriculture', body: 'Priority employment and skills development for youth under 35.' },
    { title: 'Women in Farming', body: '50% female employment target across all permanent roles.' },
    { title: 'Food Security', body: 'Producing staple crops and fresh vegetables for local and regional markets.' },
    { title: 'Local Employment', body: '18–25 jobs in Year 1, growing to 33–44 by Year 3.' },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(56px,7vw,88px)' }}>
          <SectionLabel number="" label="Our Impact" />
          <h2 style={{ fontWeight: 400 }}>Agriculture that gives back.</h2>
        </div>
        <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {impacts.map(({ title, body }) => (
            <div key={title} style={{ padding: '32px 24px', background: 'var(--color-bone)', border: '1px solid rgba(47,47,47,0.1)' }}>
              <div style={{ width: 32, height: 3, background: 'var(--color-brown)', marginBottom: 20 }} />
              <h3 style={{ fontSize: 'clamp(18px,1.6vw,22px)', marginBottom: 12 }}>{title}</h3>
              <p style={{ color: 'var(--color-ink-mute)', margin: 0, fontSize: 15, lineHeight: 1.7 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1100px){.impact-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:560px){.impact-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

/* ─────────────────── QUOTE CLOSER ─────────────────── */
function QuoteCloser() {
  return (
    <section style={{ position: 'relative', padding: 'clamp(96px,11vw,160px) clamp(24px,5vw,96px)', background: 'var(--color-green-deep)', color: 'var(--color-bone)', overflow: 'hidden', textAlign: 'center' }}>
      <span aria-hidden="true" style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-serif)', fontSize: 'clamp(160px,20vw,280px)', lineHeight: 1, color: 'var(--color-brown)', opacity: 0.18, pointerEvents: 'none', userSelect: 'none' }}>
        &ldquo;
      </span>
      <div className="container-sm" style={{ position: 'relative' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px,2.8vw,42px)', lineHeight: 1.3, color: 'var(--color-bone)', maxWidth: '28ch', margin: '0 auto 32px', fontWeight: 400, fontStyle: 'italic' }}>
          We are not simply farming land. We are continuing a legacy.
        </p>
        <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brown-light)' }}>
          — Khatleng Farms
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── NEWS ─────────────────── */
function NewsSection() {
  const articles = [
    { img: 'img · tunnel install', category: 'Operations', date: '15 · 04 · 2026', title: 'First tunnel commissioned ahead of Q2 planting cycle.', body: 'Tunnel 01 is online — drip irrigation, climate sensors and substrate beds calibrated for the first crop.' },
    { img: 'img · cattle in veld', category: 'Livestock', date: '02 · 04 · 2026', title: 'Rotational grazing programme expanded to the eastern camp.', body: 'A measured rotation across natural Free State grass veld — better soil, better animals, better meat.' },
    { img: 'img · grain fields', category: 'Grain', date: '22 · 03 · 2026', title: 'Maize planting season preparations underway.', body: 'Soil preparation completed across 80ha. Seed and input procurement finalised ahead of planting window.' },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,72px)' }}>
          <SectionLabel number="" label="From The Farm" />
          <h2 style={{ fontWeight: 400, marginTop: 20 }}>News &amp; updates.</h2>
        </div>
        <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {articles.map(({ img, category, date, title, body }) => (
            <article key={title} style={{ display: 'flex', flexDirection: 'column' }}>
              <ImagePlaceholder caption={img} height={220} style={{ marginBottom: 20 }} />
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 12, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-ink-mute)' }}>
                <span style={{ color: 'var(--color-green)', border: '1px solid var(--color-green)', padding: '2px 8px' }}>{category}</span>
                {date}
              </div>
              <h3 style={{ fontSize: 'clamp(18px,1.7vw,23px)', lineHeight: 1.25, marginBottom: 8 }}>{title}</h3>
              <p style={{ color: 'var(--color-ink-mute)', fontSize: 14, marginBottom: 0, lineHeight: 1.65 }}>{body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(47,47,47,0.1)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-green)' }}>
                Read article →
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){.news-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

