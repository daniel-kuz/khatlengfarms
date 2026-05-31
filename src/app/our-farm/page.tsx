import type { Metadata } from 'next';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import Divider from '@/components/ui/Divider';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Our Farm | Khatleng Farms',
  description: '200 hectares of freehold farmland in Bethlehem, Free State. An integrated commercial agricultural operation — grain production, tunnel farming, livestock and beef stud development.',
};

export default function OurFarmPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero />
        <FarmFactsBar />
        <Divider from="#3D4F1F" to="#F4EBDD" />
        <IntegratedOperation />
        <Divider from="#F4EBDD" to="#E8D5C0" />
        <LandTable />
        <Divider from="#E8D5C0" to="#F4EBDD" />
        <FarmImagery />
        <Divider from="#F4EBDD" to="#2F2F2F" />
        <InfrastructureSection />
        <Divider from="#2F2F2F" to="#F4EBDD" />
        <ClimateSection />
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <header style={{ position: 'relative', minHeight: '56vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(96px,10vw,160px) clamp(24px,5vw,96px) 72px', color: 'var(--color-bone)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg,rgba(244,235,221,0.03) 0 20px,rgba(244,235,221,0.06) 20px 40px),linear-gradient(180deg,#3a3520 0%,#1e1a0c 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.6) 60%,rgba(0,0,0,0.78) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'rgba(244,235,221,0.6)', marginBottom: 20 }}><span>—</span>BETHLEHEM, FREE STATE</div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '16ch', marginBottom: 20, fontWeight: 400 }}>Our Farm</h1>
        <p style={{ color: 'rgba(244,235,221,0.82)', fontSize: 'clamp(16px,1.4vw,20px)', maxWidth: '52ch' }}>
          200 hectares of freehold agricultural land in Bethlehem, Free State — owned since 2000 and now in full commercial operation.
        </p>
      </div>
    </header>
  );
}

function FarmFactsBar() {
  const facts = [
    { label: 'Altitude', value: '1,651m above sea level' },
    { label: 'Annual Rainfall', value: '772mm average' },
    { label: 'Land Area', value: '200 hectares' },
    { label: 'Water Supply', value: 'Boreholes + Eskom + Solar' },
  ];
  return (
    <div style={{ background: 'var(--color-green-deep)', color: 'var(--color-bone)', padding: '0 clamp(24px,5vw,96px)' }}>
      <div className="container facts-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {facts.map(({ label, value }, i) => (
          <div key={label} style={{ padding: '36px 0', borderRight: i < facts.length - 1 ? '1px solid rgba(244,235,221,0.15)' : 'none', paddingRight: 28, paddingLeft: i > 0 ? 28 : 0 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-brown-light)', marginBottom: 8 }}>{label}</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(16px,1.6vw,22px)', color: 'var(--color-bone)' }}>{value}</div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:860px){.facts-bar{grid-template-columns:1fr 1fr!important}.facts-bar>div{border-right:none!important;border-bottom:1px solid rgba(244,235,221,0.15);padding-left:0!important;padding-right:0!important}}`}</style>
    </div>
  );
}

function IntegratedOperation() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="int-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(56px,8vw,112px)', alignItems: 'center' }}>
          <div>
            <SectionLabel number="" label="An Integrated Farm Operation" />
            <h2 style={{ fontWeight: 400, marginBottom: 28 }}>One farm. Every resource working together.</h2>
            <p style={{ color: 'var(--color-ink-mute)', lineHeight: 1.8, marginBottom: 0 }}>
              Khatleng Farms operates as a fully integrated agricultural enterprise across grain production, tunnel farming, commercial livestock and beef stud development. The farm is equipped with the infrastructure and water resources to support year-round operations across all production activities.
            </p>
          </div>
          <ImagePlaceholder caption="img · farm landscape · Bethlehem Free State · wide · golden hour" height="clamp(380px,42vw,520px)" />
        </div>
      </div>
      <style>{`@media(max-width:860px){.int-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function LandTable() {
  const rows = [
    { component: 'Dryland arable — maize', ha: '80ha', use: 'Yellow maize production' },
    { component: 'Dryland arable — sunflower', ha: '20ha', use: 'Sunflower rotation, oilseed' },
    { component: 'Natural grazing', ha: '80.7ha', use: 'Extensive livestock support' },
    { component: 'Improved pasture', ha: '25.2ha', use: 'Livestock grazing and fodder' },
    { component: 'Infrastructure & roads', ha: '~4ha', use: 'Farm operations and access' },
    { component: 'TOTAL', ha: '~210ha', use: '', total: true },
  ];
  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="" label="Land Composition" />
          <h2 style={{ fontWeight: 400 }}>How the land is composed.</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(47,47,47,0.15)' }}>
                {['Land Component', 'Hectares', 'Use'].map(h => (
                  <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-mute)', fontFamily: 'var(--font-sans)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ component, ha, use, total }) => (
                <tr key={component} style={{ borderBottom: '1px solid rgba(47,47,47,0.08)', background: total ? 'rgba(85,107,47,0.07)' : 'transparent' }}>
                  <td style={{ padding: '18px 20px', fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: total ? 600 : 400 }}>{component}</td>
                  <td style={{ padding: '18px 20px', fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--color-green)', fontWeight: total ? 600 : 400 }}>{ha}</td>
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

function FarmImagery() {
  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="" label="The Farm" />
          <h2 style={{ fontWeight: 400 }}>200 hectares of productive farmland.</h2>
        </div>
        <div className="farm-img-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <ImagePlaceholder caption="img · grain fields · Free State · maize · wide angle" height="clamp(280px,32vw,420px)" />
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 16 }}>
            <ImagePlaceholder caption="img · cattle herd · veld · morning · Free State" height="100%" />
            <ImagePlaceholder caption="img · tunnel farming · vegetables · interior" height="100%" />
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.farm-img-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function InfrastructureSection() {
  const items = [
    { title: 'Water Infrastructure', sub: 'Multiple boreholes providing year-round water security across all production areas' },
    { title: 'Energy Supply', sub: 'Grid electricity and solar energy system supporting farm-wide operations' },
    { title: 'Production-Ready Land', sub: 'Arable land cleared, prepared and ready for planting across all crop zones' },
    { title: 'Complete Fencing', sub: 'Full perimeter and internal camp fencing for livestock management' },
    { title: 'Farm Buildings', sub: 'Workshop, machinery shed, grain storage and operational facilities' },
    { title: 'Staff Accommodation', sub: 'On-farm accommodation to support permanent agricultural workforce' },
  ];
  return (
    <section className="section-pad" style={{ background: 'var(--color-ink)', color: 'var(--color-bone)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,72px)' }}>
          <SectionLabel number="" label="Infrastructure" light />
          <h2 style={{ color: 'var(--color-bone)', fontWeight: 400 }}>Fully equipped farm infrastructure to support year-round operations.</h2>
        </div>
        <div className="infra-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
          {items.map(({ title, sub }, i) => (
            <div key={title} style={{ padding: '32px 28px', borderBottom: '1px solid rgba(244,235,221,0.08)', borderRight: (i % 3) < 2 ? '1px solid rgba(244,235,221,0.08)' : 'none' }}>
              <div style={{ width: 28, height: 1, background: 'var(--color-brown-light)', marginBottom: 20 }} />
              <h3 style={{ color: 'var(--color-bone)', fontSize: 'clamp(16px,1.5vw,20px)', marginBottom: 8 }}>{title}</h3>
              <p style={{ color: 'rgba(244,235,221,0.55)', margin: 0, fontSize: 13, lineHeight: 1.6 }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){.infra-grid{grid-template-columns:1fr!important}.infra-grid>div{border-right:none!important}}`}</style>
    </section>
  );
}

function ClimateSection() {
  const data = [
    { metric: 'Average annual rainfall', value: '772mm (30.4 inches)' },
    { metric: 'Rainy days per year', value: '93' },
    { metric: 'Wettest months', value: 'October–March' },
    { metric: 'Driest months', value: 'June–August (ideal for harvest)' },
    { metric: 'Altitude', value: '1,651m above sea level' },
    { metric: 'Classification', value: 'Cwb Köppen-Geiger — Subtropical Highland' },
    { metric: 'Annual sunshine hours', value: '~4,047 hours/year' },
  ];
  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="" label="Climate" />
          <h2 style={{ fontWeight: 400 }}>A productive climate by any measure.</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Bethlehem is located in the heart of South Africa&rsquo;s commercial grain belt — consistent rainfall, fertile soils and over 4,000 sunshine hours a year. In 8 of the last 9 recorded seasons, rainfall exceeded 600mm, well above the threshold for reliable dryland maize production.
          </p>
        </div>
        <div style={{ maxWidth: 760 }}>
          {data.map(({ metric, value }, i) => (
            <div key={metric} style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 0', borderBottom: i < data.length - 1 ? '1px solid rgba(47,47,47,0.09)' : 'none', gap: 24, alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'var(--color-ink-mute)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{metric}</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, textAlign: 'right' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
