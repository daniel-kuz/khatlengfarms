import type { Metadata } from 'next';
import Image from 'next/image';
import NavBar from '@/components/layout/NavBar';
import HeroVideoLoop from '@/components/ui/HeroVideoLoop';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Gallery | Khatleng Farms',
  description: 'Photos from Khatleng Farms - grain fields, livestock, production tunnels and the Free State landscape.',
};

const categories = [
  {
    label: 'The Land',
    images: [
      { src: '/images/pexels-tomfisk-19165847.jpg', alt: 'Aerial view of Khatleng Farms, Free State', tall: true },
      { src: '/images/golden-hour.jpg',              alt: 'Farm landscape, Bethlehem Free State, golden hour', tall: false },
      { src: '/images/grain fields.jpg',             alt: 'Grain fields at Khatleng Farms', tall: false },
      { src: '/images/grain-wide.jpg',               alt: 'Wide angle view of maize fields, Free State', tall: false },
      { src: '/images/maize-harvest.jpg',            alt: 'Yellow maize fields at harvest', tall: true },
      { src: '/images/img · farm landscape · Free State highlands · morning light.jpg', alt: 'Farm landscape, Free State highlands, morning light', tall: false },
    ],
  },
  {
    label: 'Livestock',
    images: [
      { src: '/images/cattle in a veld.jpg', alt: 'Cattle grazing in the Free State veld', tall: true },
      { src: '/images/cattle-herd.jpg',      alt: 'Cattle herd, Free State veld, morning', tall: false },
      { src: '/images/cattle-morning.jpg',   alt: 'Cattle herd at Khatleng Farms, morning', tall: false },
      { src: '/images/free-range-hens.jpg',  alt: 'Free range hens on the farm', tall: false },
    ],
  },
  {
    label: 'Tunnel Farming',
    images: [
      { src: '/images/tunnel install.jpg',    alt: 'Tunnel installation at Khatleng Farms', tall: true },
      { src: '/images/tunnel-interior.jpg',   alt: 'Tunnel farming interior', tall: false },
      { src: '/images/tunnel-tomatoes.jpg',   alt: 'Tunnel interior with tomatoes growing', tall: false },
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
                {images.map(({ src, alt, tall }, i) => (
                  <div key={i} style={{ gridRow: tall ? 'span 2' : 'span 1', position: 'relative', overflow: 'hidden' }}>
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      sizes="(max-width:860px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
            <style>{`@media(max-width:860px){.gallery-grid{grid-template-columns:1fr 1fr!important;grid-auto-rows:200px!important}}`}</style>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <header style={{ position: 'relative', minHeight: '46vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(96px,10vw,160px) clamp(24px,5vw,96px) 72px', color: 'var(--color-bone)', overflow: 'hidden' }}>
      <HeroVideoLoop videos={['/videos/hero2.mp4','/videos/hero3.mp4','/videos/hero4.mp4','/videos/hero5.mp4','/videos/hero6.mp4','/videos/hero7.mp4']} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.65) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'rgba(244,235,221,0.6)', marginBottom: 16 }}><span></span>GALLERY</div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '14ch', fontWeight: 400 }}>The Farm in Pictures</h1>
      </div>
    </header>
  );
}
