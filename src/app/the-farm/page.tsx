﻿import type { Metadata } from 'next';
import NavBar from '@/components/layout/NavBar';
import HeroVideoLoop from '@/components/ui/HeroVideoLoop';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import Divider from '@/components/ui/Divider';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Khatleng Farms | The Nkoenyane Family Trust',
  description: '200 hectares of freehold agricultural land in Bethlehem, Free State. Dryland crops, tunnel vegetables, livestock, and beef stud operations.',
};

export default function TheFarmPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero />
        <FarmFactsBar />
        <Divider from="#2C3B17" to="#F8F5EE" />
        <MasterplanSection />
        <LandCompositionTable />
        <Divider from="#F8F5EE" to="#F8F5EE" />
        <OperationalZones />
        <Divider from="#F8F5EE" to="#1A1A1A" />
        <InfrastructureSection />
        <Divider from="#1A1A1A" to="#F8F5EE" />
        <ClimateSection />
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
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.6) 60%,rgba(0,0,0,0.78) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'var(--color-gold-soft)', marginBottom: 20 }}><span></span>BLK 25 FOURIE FARM · BETHLEHEM, FREE STATE</div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '16ch', marginBottom: 20 }}>Khatleng Farms</h1>
        <p style={{ color: 'rgba(248,245,238,0.85)', fontSize: 'clamp(17px,1.4vw,21px)', maxWidth: '52ch' }}>
          Bethlehem, Free State  -  200 hectares of freehold agricultural land.
        </p>
      </div>
    </header>
  );
}

function FarmFactsBar() {
  const facts = [
    { label: 'GPS Coordinates', value: 'Bethlehem, Free State' },
    { label: 'Altitude', value: '1,651m above sea level' },
    { label: 'Annual Rainfall', value: '772mm average' },
    { label: 'Water Supply', value: '3 Boreholes + Eskom + Solar' },
  ];

  return (
    <div style={{ background: 'var(--color-green-deep)', color: 'var(--color-bone)', padding: '0 clamp(24px,5vw,96px)' }}>
      <div className="container facts-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {facts.map(({ label, value }, i) => (
          <div key={label} style={{ padding: '36px 0', borderRight: i < facts.length - 1 ? '1px solid rgba(248,245,238,0.15)' : 'none', paddingRight: 32, paddingLeft: i > 0 ? 32 : 0 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 8 }}>{label}</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px,1.8vw,24px)', color: 'var(--color-bone)' }}>{value}</div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:860px){.facts-bar{grid-template-columns:1fr!important}.facts-bar>div{border-right:none!important;border-bottom:1px solid rgba(248,245,238,0.15);padding-left:0!important;padding-right:0!important}}`}</style>
    </div>
  );
}

function MasterplanSection() {
  const zones = [
    { color: '#4A7FCB', name: 'Dryland Crops', meta: '100ha  -  Yellow Maize & Sunflower' },
    { color: '#3D5220', name: 'Production Tunnels', meta: 'Tunnel Farming - Year 2' },
    { color: '#C0392B', name: 'Livestock Handling', meta: 'Cattle & sheep pens, loading ramps' },
    { color: '#E67E22', name: 'Grazing Camps', meta: '80.7ha improved + 25.2ha natural' },
    { color: '#1A1A1A', name: 'Operational Hub', meta: 'Workshop, silos, boreholes, homestead' },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="01" label="Farm Masterplan" />
          <h2>Five operational zones. One integrated system.</h2>
        </div>

        {/* Masterplan render placeholder */}
        <div style={{ position: 'relative', height: 'clamp(400px,50vw,680px)', background: 'repeating-linear-gradient(135deg,rgba(61,82,32,0.06) 0 18px,rgba(61,82,32,0.12) 18px 36px),linear-gradient(180deg,#d9d3c2,#b9b39c)', border: '1px solid rgba(26,26,26,0.12)', marginBottom: 32 }}>
          {/* Schematic SVG zones */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
            <polygon points="80,80 420,80 420,300 80,300" fill="rgba(74,127,203,0.55)" stroke="#4A7FCB" strokeWidth={2}/>
            <text x="250" y="195" textAnchor="middle" fontSize={14} fill="#fff" fontFamily="monospace">Dryland Crops</text>
            <polygon points="430,80 580,80 580,200 430,200" fill="rgba(61,82,32,0.65)" stroke="#3D5220" strokeWidth={2}/>
            <text x="505" y="148" textAnchor="middle" fontSize={12} fill="#fff" fontFamily="monospace">Tunnels</text>
            <polygon points="430,210 580,210 580,310 430,310" fill="rgba(192,57,43,0.55)" stroke="#C0392B" strokeWidth={2}/>
            <text x="505" y="268" textAnchor="middle" fontSize={11} fill="#fff" fontFamily="monospace">Livestock</text>
            <polygon points="80,310 420,310 420,450 80,450" fill="rgba(230,126,34,0.45)" stroke="#E67E22" strokeWidth={2}/>
            <text x="250" y="387" textAnchor="middle" fontSize={14} fill="#fff" fontFamily="monospace">Grazing Camps</text>
            <polygon points="590,80 720,80 720,310 590,310" fill="rgba(26,26,26,0.65)" stroke="#1A1A1A" strokeWidth={2}/>
            <text x="655" y="200" textAnchor="middle" fontSize={11} fill="#fff" fontFamily="monospace">Op. Hub</text>
            {/* Compass */}
            <text x="700" y="430" fontSize={11} fill="rgba(26,26,26,0.6)" fontFamily="monospace">N â†‘</text>
          </svg>
          <div style={{ position: 'absolute', top: 12, left: 16, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 10px', background: 'rgba(248,245,238,0.9)', border: '1px solid rgba(26,26,26,0.18)' }}>
            Khatleng Farms · Schematic
          </div>
        </div>

        {/* Legend */}
        <div className="legend-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16 }}>
          {zones.map(({ color, name, meta }) => (
            <div key={name} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '16px', border: '1px solid rgba(26,26,26,0.12)', background: 'var(--color-bone)' }}>
              <div style={{ width: 20, height: 20, background: color, flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.2, marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-mute)' }}>{meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1100px){.legend-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:860px){.legend-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

function LandCompositionTable() {
  const rows = [
    { component: 'Dryland arable  -  maize', hectares: '80ha', use: 'Yellow maize production' },
    { component: 'Dryland arable  -  sunflower', hectares: '20ha', use: 'Sunflower rotation, oilseed' },
    { component: 'Improved pasture', hectares: '80.7ha', use: 'Livestock grazing and fodder' },
    { component: 'Natural grazing', hectares: '70.8ha', use: 'Extensive livestock support' },
    { component: 'Infrastructure & roads', hectares: '~4ha', use: 'Farm operations, access, homestead' },
    { component: 'TOTAL', hectares: '200ha', use: '' },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="01" label="The Land" />
          <h2>How the land is composed.</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(26,26,26,0.15)' }}>
                {['Land Component', 'Hectares', 'Use'].map(h => (
                  <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-mute)', fontFamily: 'var(--font-sans)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ component, hectares, use }, i) => (
                <tr key={component} style={{ borderBottom: '1px solid rgba(26,26,26,0.1)', background: i === rows.length - 1 ? 'rgba(61,82,32,0.06)' : 'transparent' }}>
                  <td style={{ padding: '18px 20px', fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: i === rows.length - 1 ? 600 : 400 }}>{component}</td>
                  <td style={{ padding: '18px 20px', fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--color-green)', fontWeight: i === rows.length - 1 ? 600 : 400 }}>{hectares}</td>
                  <td style={{ padding: '18px 20px', fontSize: 14, color: 'var(--color-ink-mute)' }}>{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function OperationalZones() {
  const zones = [
    {
      num: 'i.',
      title: 'Dryland Crops',
      body: 'The backbone of the farm\'s annual income. 80ha of yellow maize targeting 5.5 t/ha at R3,500/ton, rotated with 20ha of sunflower at 1.8 t/ha and R8,500/ton. SAFEX spot price at delivery through established grain market channels.',
      facts: [{ k: 'Area', v: '100ha total' }, { k: 'Crops', v: 'Yellow Maize + Sunflower' }, { k: 'Off-take', v: 'established grain market channels' }, { k: 'Year 1 Income', v: 'R1,846,000' }],
      imgCaption: 'img · dryland maize fields · golden hour',
    },
    {
      num: 'ii.',
      title: 'Production Tunnels',
      body: 'Tunnel farming with drip irrigation and raised beds. Multi-crop cycles of tomatoes, peppers, spinach, and lettuce. Launching Year 2.',
      facts: [{ k: 'Tunnels', v: 'Year 2' }, { k: 'Crops', v: 'Tomatoes, Peppers, Spinach, Lettuce' }, { k: 'Launch', v: 'Year 2' }, { k: 'Buyer', v: 'local fresh produce markets' }],
      imgCaption: 'img · tunnel interior · vegetables growing',
    },
    {
      num: 'iii.',
      title: 'Livestock Handling',
      body: 'Opening herd of 50 cattle (3 bulls, 39 cows, 8 calves) and 50 sheep (2 rams, 37 ewes, 11 young ewes). Full auction-ready infrastructure: holding pens, loading ramps, crush and working systems.',
      facts: [{ k: 'Cattle', v: '50 head (Bonsmara/Simmental)' }, { k: 'Sheep', v: '50 head' }, { k: 'Stud Bulls', v: '5' }, { k: 'Auction', v: 'regional livestock auctions' }],
      imgCaption: 'img · cattle in pens · livestock facility',
    },
    {
      num: 'iv.',
      title: 'Grazing Camps',
      body: 'Rotational grazing across 80.7ha of improved pasture and 25.2ha of natural grass veld. Water troughs, perimeter fencing, and paddock divisions support optimal condition scoring and sustainable stocking.',
      facts: [{ k: 'Improved Pasture', v: '80.7ha' }, { k: 'Natural Veld', v: '25.2ha' }, { k: 'System', v: 'Rotational grazing' }, { k: 'Capacity', v: '~100 livestock units' }],
      imgCaption: 'img · free state veld · rotational grazing',
    },
    {
      num: 'v.',
      title: 'Operational Hub',
      body: 'Workshop building, machinery shed, fuel tanks, grain storage silos, three operational boreholes (~100m depth), and a solar energy system (R150,000 own contribution). Main house, cottage, 3 staff quarters (200sqm), and storage sheds.',
      facts: [{ k: 'Water', v: '3 boreholes (~100m)' }, { k: 'Energy', v: 'Solar + Eskom grid' }, { k: 'Accommodation', v: 'Main house + cottage + 3 staff quarters' }, { k: 'Storage', v: 'Grain silos + machinery shed' }],
      imgCaption: 'img · farm hub · workshop and silos',
    },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="02" label="How We Operate" />
          <h2>Five zones. One coherent system.</h2>
        </div>
        {zones.map(({ num, title, body, facts, imgCaption }, i) => (
          <div
            key={title}
            className={i % 2 === 0 ? 'zone-row' : 'zone-row zone-row-reverse'}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,5vw,80px)', alignItems: 'center', padding: 'clamp(40px,5vw,80px) 0', borderTop: i > 0 ? '1px solid rgba(26,26,26,0.1)' : 'none' }}
          >
            <div className={i % 2 !== 0 ? 'zone-text-swap' : ''}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 14, color: 'var(--color-gold)', letterSpacing: '0.1em', marginBottom: 4 }}>{num}</div>
              <SectionLabel number={String(i + 1).padStart(2, '0')} label={title} />
              <p style={{ color: 'var(--color-ink-mute)', maxWidth: '52ch', marginBottom: 0 }}>{body}</p>
              <div style={{ margin: '24px 0 0', borderTop: '1px solid rgba(26,26,26,0.1)' }}>
                {facts.map(({ k, v }) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '13px 0', borderBottom: '1px solid rgba(26,26,26,0.1)', gap: 20 }}>
                    <span style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ink-mute)' }}>{k}</span>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: 18 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={i % 2 !== 0 ? 'zone-img-swap' : ''} style={{ height: 'clamp(320px,38vw,480px)' }}>
              <ImagePlaceholder caption={imgCaption} height="100%" />
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:860px){
          .zone-row,.zone-row-reverse{grid-template-columns:1fr!important}
          .zone-text-swap{order:1}
          .zone-img-swap{order:0}
        }
        @media(min-width:861px){
          .zone-row-reverse .zone-text-swap{order:2}
          .zone-row-reverse .zone-img-swap{order:1}
        }
      `}</style>
    </section>
  );
}

function InfrastructureSection() {
  const items = [
    { title: '3 Operational Boreholes', sub: 'Year-round water security, ~100m depth' },
    { title: 'Eskom Grid Connection', sub: 'Reliable grid electricity for all operations' },
    { title: 'Solar Energy System', sub: 'R150,000 own contribution  -  energy independence' },
    { title: 'Main House + Cottage + 3 Quarters', sub: '200sqm staff accommodation on farm' },
    { title: 'Production-Ready Arable Land', sub: '100ha cleared, prepared and ready for planting' },
    { title: 'Perimeter Fencing', sub: 'Complete perimeter and internal paddock fencing' },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-ink)', color: 'var(--color-bone)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="03" label="Infrastructure" light />
          <h2 style={{ color: 'var(--color-bone)' }}>Everything needed. Nothing borrowed.</h2>
        </div>
        <div className="infra-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
          {items.map(({ title, sub }, i) => (
            <div key={title} style={{ padding: '36px 32px', borderBottom: '1px solid rgba(248,245,238,0.1)', borderRight: (i % 3) < 2 ? '1px solid rgba(248,245,238,0.1)' : 'none' }}>
              <div style={{ width: 32, height: 1, background: 'var(--color-gold)', marginBottom: 20 }} />
              <h3 style={{ color: 'var(--color-bone)', marginBottom: 10, fontSize: 'clamp(18px,1.6vw,22px)' }}>{title}</h3>
              <p style={{ color: 'rgba(248,245,238,0.6)', margin: 0, fontSize: 14 }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:860px){.infra-grid{grid-template-columns:1fr!important}.infra-grid>div{border-right:none!important}}
      `}</style>
    </section>
  );
}

function ClimateSection() {
  const data = [
    { metric: 'Average annual rainfall', value: '772mm (30.4 inches)' },
    { metric: 'Rainy days per year', value: '93' },
    { metric: 'Wettest months', value: 'October - March' },
    { metric: 'Driest months', value: 'June - August (ideal for harvest)' },
    { metric: 'Altitude', value: '1,651m above sea level' },
    { metric: 'Classification', value: 'Cwb Köppen-Geiger  -  Subtropical Highland' },
    { metric: 'Annual sunshine hours', value: '~4,047 hours/year' },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="04" label="Climate" />
          <h2>A productive climate by any measure.</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            In 8 of the last 9 recorded seasons, rainfall exceeded 600mm  -  well above the 450mm minimum
            for dryland maize production.
          </p>
        </div>
        <div style={{ maxWidth: 760 }}>
          {data.map(({ metric, value }, i) => (
            <div key={metric} style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0', borderBottom: '1px solid rgba(26,26,26,0.1)', gap: 24, alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'var(--color-ink-mute)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{metric}</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 22, textAlign: 'right' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

