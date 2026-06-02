﻿import type { Metadata } from 'next';
import NavBar from '@/components/layout/NavBar';
import HeroVideoLoop from '@/components/ui/HeroVideoLoop';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import Btn from '@/components/ui/Btn';
import Divider from '@/components/ui/Divider';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Our Products | The Nkoenyane Family Trust',
  description: 'Four income streams from Khatleng Farms  -  dryland crops, tunnel vegetables, commercial livestock, and beef stud programme.',
};

export default function OurProductsPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero />
        <Divider from="#1c2410" to="#F8F5EE" />
        <DrylandCrops />
        <Divider from="#F8F5EE" to="#EFE9DA" />
        <TunnelVegetables />
        <Divider from="#EFE9DA" to="#F8F5EE" />
        <CommercialLivestock />
        <Divider from="#F8F5EE" to="#EFE9DA" />
        <BeefStudProgramme />
        <Divider from="#EFE9DA" to="#3D5220" />
        <FutureRoadmap />
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <header style={{ position: 'relative', minHeight: '56vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(72px,9vw,144px) clamp(24px,5vw,96px) 64px', color: 'var(--color-bone)', overflow: 'hidden' }}>
      <HeroVideoLoop />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.6) 60%,rgba(0,0,0,0.78) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'var(--color-gold-soft)', marginBottom: 20 }}><span></span>OUR PRODUCTS</div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '18ch', marginBottom: 20 }}>Four Income Streams. One Resilient Operation.</h1>
        <p style={{ color: 'rgba(248,245,238,0.85)', fontSize: 'clamp(17px,1.4vw,21px)', maxWidth: '52ch' }}>Diversified by design  -  no single buyer exceeds 50% of revenue.</p>
      </div>
    </header>
  );
}

function ProductSection({ num, label, title, body, imgCaption, facts, reverse = false, bgColor = '#F8F5EE' }: {
  num: string; label: string; title: string; body: string; imgCaption: string;
  facts: { k: string; v: string }[]; reverse?: boolean; bgColor?: string;
}) {
  return (
    <section className="section-pad" style={{ background: bgColor }}>
      <div className="container">
        <div
          className={reverse ? 'prod-row prod-row-rev' : 'prod-row'}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px,7vw,112px)', alignItems: 'center' }}
        >
          <div className={reverse ? 'prod-body-rev' : ''}>
            <SectionLabel number={num} label={label} />
            <h2 style={{ marginBottom: 20 }}>{title}</h2>
            <p className="lede" style={{ marginBottom: 0 }}>{body}</p>
            <div style={{ margin: '24px 0 0', borderTop: '1px solid rgba(26,26,26,0.1)' }}>
              {facts.map(({ k, v }) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid rgba(26,26,26,0.1)', gap: 20 }}>
                  <span style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ink-mute)' }}>{k}</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 18, textAlign: 'right' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={reverse ? 'prod-img-rev' : ''} style={{ height: 'clamp(340px,40vw,520px)' }}>
            <ImagePlaceholder caption={imgCaption} height="100%" />
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:860px){
          .prod-row,.prod-row-rev{grid-template-columns:1fr!important}
          .prod-body-rev{order:1}.prod-img-rev{order:0}
        }
        @media(min-width:861px){
          .prod-row-rev .prod-body-rev{order:2}
          .prod-row-rev .prod-img-rev{order:1}
        }
      `}</style>
    </section>
  );
}

function DrylandCrops() {
  return (
    <ProductSection
      num="01" label="Dryland Crops"
      title="Yellow Maize and Sunflower - the backbone."
      body="80ha of yellow maize targeting 5.5 t/ha at R3,500/ton. 20ha of sunflower at 1.8 t/ha and R8,500/ton. Crop rotation reduces input costs, improves soil health, and breaks pest cycles. Off-take via established grain market channels at SAFEX spot price."
      imgCaption="img · yellow maize fields · harvest · warm tones"
      facts={[
        { k: 'Maize yield target', v: '5.5 t/ha' },
        { k: 'Maize price', v: 'R3,500/ton' },
        { k: 'Sunflower yield', v: '1.8 t/ha' },
        { k: 'Sunflower price', v: 'R8,500/ton' },
        { k: 'Year 1 income', v: 'R1,846,000' },
        { k: 'Buyer', v: 'established grain market channels' },
      ]}
    />
  );
}

function TunnelVegetables() {
  return (
    <ProductSection
      num="02" label="Tunnel Vegetables"
      title="Eight tunnels. Year-round production."
      body="Tunnel farming with drip irrigation and raised beds. Multi-crop cycles of tomatoes, peppers, spinach, and lettuce. Launching Year 2."
      imgCaption="img · production tunnel interior · tomatoes · fresh produce"
      facts={[
        { k: 'Tunnels', v: 'Year 2' },
        { k: 'Launch', v: 'Year 2' },
        { k: 'Full production', v: 'R50,000-R55,000/month' },
        { k: 'Primary buyer', v: 'local fresh produce markets' },
        { k: 'Secondary buyers', v: 'Local retailers & restaurants' },
      ]}
      reverse
      bgColor="#EFE9DA"
    />
  );
}

function CommercialLivestock() {
  return (
    <ProductSection
      num="03" label="Livestock"
      title="Commercial cattle and sheep  -  auction-ready."
      body="Commercial cattle and sheep operation. Monthly cattle auctions and quarterly sheep auctions at regional livestock auctions. Full seller registration confirmed."
      imgCaption="img · cattle herd · Free State veld · golden light"
      facts={[
        
        
        { k: 'Year 1 cattle income', v: 'R120,000' },
        { k: 'Year 1 sheep income', v: 'R60,000' },
        { k: 'Auction frequency', v: 'Monthly (cattle) / Quarterly (sheep)' },
        { k: 'Venue', v: 'regional livestock auctions' },
      ]}
    />
  );
}

function BeefStudProgramme() {
  return (
    <ProductSection
      num="04" label="Beef Stud"
      title="Premium genetics. Premium returns."
      body="Bonsmara/Simmental stud programme currently in maturation. Premium stud sales to follow."
      imgCaption="img · stud bull · premium genetics · farm portrait"
      facts={[
        { k: 'Cattle', v: 'Commercial herd' },
        { k: 'Sheep', v: 'Commercial flock' },
        { k: 'Stud bulls', v: 'Bonsmara/Simmental' },
        { k: 'First sales', v: 'Year 2 (4 - 5 animals)' },
        { k: 'Year 2 income target', v: 'R400,000' },
        { k: 'Price range', v: 'R80,000 - R150,000/animal' },
        { k: 'Market', v: 'Stud Breeders Society SA' },
      ]}
      reverse
      bgColor="#EFE9DA"
    />
  );
}

function FutureRoadmap() {
  const phases = [
    { year: 'Next Phase', title: 'Infrastructure Expansion', body: 'Continued investment in water and production infrastructure to increase yields and reduce risk.' },
    { year: 'Year 3+', title: 'Agro-Processing', body: 'Maize meal, sunflower oil, dried vegetables  -  value chain vertical integration. Higher margins by capturing processing value previously passed upstream.' },
    { year: 'Long Term', title: 'Market Expansion', body: 'Broadening reach into new markets — anchored by quality, traceability and operational consistency.' },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-green)', color: 'var(--color-bone)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="05" label="What's Next" gold />
          <h2 style={{ color: 'var(--color-bone)' }}>The growth roadmap beyond Year 1.</h2>
        </div>
        <div className="roadmap-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {phases.map(({ year, title, body }) => (
            <div key={title} style={{ padding: '36px 32px', border: '1px solid rgba(248,245,238,0.2)' }}>
              <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 16 }}>{year}</div>
              <h3 style={{ color: 'var(--color-bone)', marginBottom: 14 }}>{title}</h3>
              <p style={{ color: 'rgba(248,245,238,0.75)', margin: 0, fontSize: 15 }}>{body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 56, textAlign: 'center' }}>
          <Btn href="/invest" variant="gold" arrow>See the Investment Case</Btn>
        </div>
      </div>
      <style>{`@media(max-width:860px){.roadmap-cards{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

