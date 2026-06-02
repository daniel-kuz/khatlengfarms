import type { Metadata } from 'next';
import Image from 'next/image';
import NavBar from '@/components/layout/NavBar';
import HeroVideoLoop from '@/components/ui/HeroVideoLoop';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import Btn from '@/components/ui/Btn';
import Divider from '@/components/ui/Divider';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Production | Khatleng Farms',
  description: 'Grain production, field crops, cattle, sheep, free range eggs and tunnel vegetables "” six production streams from Khatleng Farms in the Free State.',
};

export default function ProductionPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero />
        <Divider from="#1e1a0c" to="#F4EBDD" />
        <GrainProduction />
        <Divider from="#F4EBDD" to="#E8D5C0" />
        <TunnelVegetables />
        <Divider from="#E8D5C0" to="#F4EBDD" />
        <LivestockSection />
        <Divider from="#F4EBDD" to="#E8D5C0" />
        <FreeRangeEggs />
        <Divider from="#E8D5C0" to="#3D4F1F" />
        <FreshFromFarm />
        <Divider from="#F4EBDD" to="#3D4F1F" />
        <FutureOutlook />
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <header style={{ position: 'relative', minHeight: '56vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(96px,10vw,160px) clamp(24px,5vw,96px) 72px', color: 'var(--color-bone)', overflow: 'hidden' }}>
      <HeroVideoLoop />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.6) 60%,rgba(0,0,0,0.78) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'rgba(244,235,221,0.6)', marginBottom: 20 }}><span>"”</span>PRODUCTION</div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '18ch', marginBottom: 20, fontWeight: 400 }}>Four Production Zones. One Resilient Operation.</h1>
        <p style={{ color: 'rgba(244,235,221,0.82)', fontSize: 'clamp(16px,1.4vw,20px)', maxWidth: '52ch' }}>
          Diversified by design "” grain, livestock, tunnel vegetables and free range eggs from 200 hectares of Free State farmland.
        </p>
      </div>
    </header>
  );
}

function ProductRow({ label, title, body, imgSrc, imgAlt, details, reverse = false, bg = '#F4EBDD' }: {
  label: string; title: string; body: string; imgSrc: string; imgAlt: string;
  details: { k: string; v: string }[]; reverse?: boolean; bg?: string;
}) {
  return (
    <section className="section-pad" style={{ background: bg }}>
      <div className="container">
        <div className={reverse ? 'prod-row-rev prod-row' : 'prod-row'} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(56px,8vw,112px)', alignItems: 'center' }}>
          <div className={reverse ? 'pr-body' : ''}>
            <SectionLabel number="" label={label} />
            <h2 style={{ fontWeight: 400, marginBottom: 20 }}>{title}</h2>
            <p className="lede" style={{ marginBottom: 0 }}>{body}</p>
            <div style={{ margin: '24px 0 0', borderTop: '1px solid rgba(47,47,47,0.1)' }}>
              {details.map(({ k, v }) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '13px 0', borderBottom: '1px solid rgba(47,47,47,0.08)', gap: 20 }}>
                  <span style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ink-mute)' }}>{k}</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 17, textAlign: 'right' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={reverse ? 'pr-img' : ''} style={{ position: 'relative', height: 'clamp(320px,38vw,500px)', overflow: 'hidden' }}>
            <Image src={imgSrc} alt={imgAlt} fill style={{ objectFit: 'cover' }} sizes="(max-width:860px) 100vw, 50vw" />
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:860px){
          .prod-row,.prod-row-rev{grid-template-columns:1fr!important}
          .pr-body{order:1}.pr-img{order:0}
        }
        @media(min-width:861px){
          .prod-row-rev .pr-body{order:2}.prod-row-rev .pr-img{order:1}
        }
      `}</style>
    </section>
  );
}

function GrainProduction() {
  return (
    <>
      <ProductRow
        label="Grain Production"
        title={“Yellow Maize — the backbone of the farm.”}
        body=”60ha of yellow maize in dryland production. Rotated with 40ha of sunflower to improve soil health, manage input costs and break pest cycles.”
        imgSrc="/images/maize-harvest.jpg" imgAlt="Yellow maize fields at harvest, Free State"
        details={[
          { k: 'Maize area', v: '60ha' },
          { k: 'Sunflower area', v: '40ha' },
          { k: 'System', v: 'Dryland, rotational' },
        ]}
      />
    </>
  );
}

function TunnelVegetables() {
  return (
    <ProductRow
      label="Tunnel Farming"
      title="Protected tunnel farming. Fresh vegetables, year-round."
      body={“Tunnel farming infrastructure currently in development — Phase 1 operational. Protected growing environment with drip irrigation, producing tomatoes, peppers, spinach and lettuce. Supplied to local fresh produce markets and direct retail buyers.”}
      imgSrc="/images/tunnel-tomatoes.jpg" imgAlt="Tunnel interior with tomatoes growing"
      details={[
        { k: 'Status', v: 'Phase 1 operational' },
        { k: 'Irrigation', v: 'Drip system' },
        { k: 'Crops', v: 'Tomatoes, Peppers, Spinach, Lettuce' },
      ]}
      reverse
      bg="#E8D5C0"
    />
  );
}

function LivestockSection() {
  return (
    <>
      <ProductRow
        label="Livestock"
        title={“Commercial cattle and sheep — built to grow.”}
        body="Opening herd of 50 cattle and 50 sheep, with a Bonsmara/Simmental stud programme anchored by 5 stud bulls. Sold through regional livestock auctions with consistent, predictable income cycles."
        imgSrc="/images/cattle-morning.jpg" imgAlt="Cattle herd in the Free State veld, morning"
        details={[
          { k: 'Cattle', v: '50 head (Bonsmara/Simmental)' },
          { k: 'Sheep', v: '50 head' },
          { k: 'Stud bulls', v: '5' },
        ]}
      />
    </>
  );
}

function FreeRangeEggs() {
  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div className="eggs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(56px,8vw,112px)', alignItems: 'center' }}>
          <div style={{ position: 'relative', height: 'clamp(300px,36vw,460px)', overflow: 'hidden' }}>
            <Image src="/images/free-range-hens.jpg" alt="Free range hens on the farm, natural light" fill style={{ objectFit: 'cover' }} sizes="(max-width:860px) 100vw, 50vw" />
          </div>
          <div>
            <SectionLabel number="" label="Free Range Eggs" />
            <h2 style={{ fontWeight: 400, marginBottom: 20 }}>Small-scale. Premium quality. Coming soon.</h2>
            <p className="lede" style={{ marginBottom: 20 }}>
              A small-scale free range egg operation supplying premium quality eggs to local retailers and restaurants in the Bethlehem area.
            </p>
            <p style={{ color: 'var(--color-ink-mute)', lineHeight: 1.75 }}>
              Hens raised on natural pasture, supplemented with farm-grown grain. No cages, no shortcuts "” just clean, traceable eggs from the Free State.
            </p>
            <div style={{ display: 'inline-block', marginTop: 24, padding: '8px 16px', border: '1px solid var(--color-brown)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-brown)' }}>
              Coming Soon
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.eggs-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function FreshFromFarm() {
  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div
          className="fresh-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(56px,8vw,112px)', alignItems: 'center' }}
        >
          <div>
            <SectionLabel number="" label="Fresh From the Farm" />
            <h2 style={{ fontWeight: 400, marginBottom: 24 }}>Interested in Our Produce?</h2>
            <p style={{ color: 'var(--color-ink-mute)', lineHeight: 1.8, marginBottom: 28 }}>
              We supply fresh vegetables, eggs, grain and red meat to local retailers, restaurants and community buyers in and around Bethlehem. Get in touch to discuss availability and pricing.
            </p>
            <Btn href="/contact" variant="green" arrow>Contact Us</Btn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { label: 'Yellow Maize', desc: 'commercial grain farming Bethlehem' },
              { label: 'Tunnel Vegetables', desc: 'tunnel vegetables Free State' },
              { label: 'Red Meat', desc: 'livestock farming Bethlehem' },
              { label: 'Free Range Eggs', desc: 'free-range eggs Bethlehem' },
            ].map(({ label, desc }) => (
              <div key={label} style={{ padding: '20px 18px', background: 'var(--color-bone)', border: '1px solid rgba(47,47,47,0.1)' }}>
                <div style={{ fontSize: 12, color: 'var(--color-brown)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
                <div style={{ fontSize: 12, color: 'var(--color-ink-mute)', lineHeight: 1.4 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.fresh-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function FutureOutlook() {
  return (
    <section className="section-pad" style={{ background: 'var(--color-green-deep)', color: 'var(--color-bone)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,72px)' }}>
          <SectionLabel number="" label="What's Next" light />
          <h2 style={{ color: 'var(--color-bone)', fontWeight: 400 }}>Production grows as the farm grows.</h2>
          <p style={{ color: 'rgba(244,235,221,0.75)', fontSize: 'clamp(16px,1.3vw,19px)', maxWidth: '58ch', marginTop: 16, lineHeight: 1.7 }}>
            Year 1 establishes the foundation. From Year 2, each production stream scales "” more tunnels, larger herds, stud sales, and eventually value-added processing.
          </p>
        </div>
        <div style={{ textAlign: 'left' }}>
          <Btn href="/projects" variant="gold" arrow>See Our Projects &amp; Future Vision</Btn>
        </div>
      </div>
    </section>
  );
}

