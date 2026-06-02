import type { Metadata } from 'next';
import NavBar from '@/components/layout/NavBar';
import HeroVideoLoop from '@/components/ui/HeroVideoLoop';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Gallery | Khatleng Farms',
  description: 'Photos from Khatleng Farms "” grain fields, livestock, production tunnels and the Free State landscape.',
};

const categories = [
  {
    label: 'The Land',
    images: [
      { caption: 'img · aerial farm · Free State · morning light · 1600×1200', tall: true },
      { caption: 'img · grain fields · maize · golden hour · 1600×1200', tall: false },
      { caption: 'img · farm road · eucalyptus · dust · 1600×1200', tall: false },
      { caption: 'img · farm landscape · Free State highlands · wide · 1600×1200', tall: true },
    ],
  },
  {
    label: 'Livestock',
    images: [
      { caption: 'img · cattle herd · veld · 1600×1200', tall: false },
      { caption: 'img · stud bull · portrait · 1600×1200', tall: true },
      { caption: 'img · sheep flock · grazing camp · 1600×1200', tall: false },
      { caption: 'img · cattle handling · pens · 1600×1200', tall: false },
    ],
  },
  {
    label: 'Tunnel Farming',
    images: [
      { caption: 'img · tunnel interior · tomatoes · light · 1600×1200', tall: true },
      { caption: 'img · tunnel exterior · morning mist · 1600×1200', tall: false },
      { caption: 'img · tunnel produce · peppers · 1600×1200', tall: false },
      { caption: 'img · drip irrigation · tunnel · close-up · 1600×1200', tall: false },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero />
        {categories.map(({ label, images }) => (
          <section key={label} className="section-pad">
            <div className="container">
              <SectionLabel number="" label={label} />
              <div
                className="gallery-grid"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridAutoRows: '280px', gap: 12, marginTop: 32 }}
              >
                {images.map(({ caption, tall }, i) => (
                  <div
                    key={i}
                    style={{ gridRow: tall ? 'span 2' : 'span 1' }}
                  >
                    <ImagePlaceholder caption={caption} height="100%" />
                  </div>
                ))}
              </div>
            </div>
            <style>{`@media(max-width:860px){.gallery-grid{grid-template-columns:1fr 1fr!important;grid-auto-rows:200px!important}}`}</style>
          </section>
        ))}
        <section className="section-pad" style={{ background: 'var(--color-bone-deep)', textAlign: 'center' }}>
          <div className="container-sm">
            <SectionLabel number="" label="Photography" />
            <h2 style={{ fontWeight: 400, marginBottom: 16 }}>Photography coming soon.</h2>
            <p className="lede" style={{ margin: '0 auto' }}>
              We are commissioning a professional photoshoot to capture the farm, the land and the people behind Khatleng Farms. Check back soon.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <header style={{ position: 'relative', minHeight: '46vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(96px,10vw,160px) clamp(24px,5vw,96px) 72px', color: 'var(--color-bone)', overflow: 'hidden' }}>
      <HeroVideoLoop />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.65) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'rgba(244,235,221,0.6)', marginBottom: 16 }}><span>"”</span>GALLERY</div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '14ch', fontWeight: 400 }}>The Farm in Pictures</h1>
      </div>
    </header>
  );
}

