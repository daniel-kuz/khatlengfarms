import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import HeroVideoLoop from '@/components/ui/HeroVideoLoop';
import SectionLabel from '@/components/ui/SectionLabel';
import { articles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'News & Updates | Khatleng Farms',
  description: 'Latest news and updates from Khatleng Farms — grain farming, livestock, tunnel vegetables and life on the Free State highveld.',
};

export default function NewsPage() {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <header style={{ position: 'relative', minHeight: '46vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(96px,10vw,160px) clamp(24px,5vw,96px) 72px', color: 'var(--color-bone)', overflow: 'hidden' }}>
          <HeroVideoLoop />
          <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.65) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
            <div className="numlabel" style={{ color: 'rgba(244,235,221,0.6)', marginBottom: 16 }}><span>—</span>NEWS</div>
            <h1 style={{ color: 'var(--color-bone)', maxWidth: '18ch', fontWeight: 400 }}>News & Updates</h1>
          </div>
        </header>

        {/* Articles grid */}
        <section className="section-pad">
          <div className="container">
            <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,72px)' }}>
              <SectionLabel number="" label="From The Farm" />
              <h2 style={{ fontWeight: 400 }}>Stories from the land.</h2>
            </div>
            <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 32 }}>
              {articles.map((article) => (
                <Link key={article.slug} href={`/news/${article.slug}`} style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                  <div style={{ position: 'relative', height: 260, overflow: 'hidden', marginBottom: 20 }}>
                    <Image src={article.image} alt={article.imageAlt} fill style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} sizes="(max-width:860px) 100vw, 50vw" className="news-img" />
                  </div>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 12, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-ink-mute)' }}>
                    <span style={{ color: 'var(--color-green)', border: '1px solid var(--color-green)', padding: '2px 8px' }}>{article.category}</span>
                    {article.date}
                  </div>
                  <h3 style={{ fontSize: 'clamp(18px,1.7vw,24px)', lineHeight: 1.25, marginBottom: 10, color: 'var(--color-ink)' }}>{article.title}</h3>
                  <p style={{ color: 'var(--color-ink-mute)', fontSize: 15, lineHeight: 1.7, marginBottom: 0 }}>{article.excerpt}</p>
                  <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(47,47,47,0.1)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-green)' }}>
                    Read article →
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:860px){.news-grid{grid-template-columns:1fr!important}}
            .news-grid a:hover .news-img{transform:scale(1.04)}
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
