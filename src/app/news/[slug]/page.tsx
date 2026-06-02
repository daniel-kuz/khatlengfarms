import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import { articles, getArticle } from '@/lib/articles';

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Khatleng Farms`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: 'article',
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  // Convert markdown-style content to HTML paragraphs
  const renderContent = (content: string) => {
    return content
      .trim()
      .split('\n\n')
      .map((block, i) => {
        if (block.startsWith('## ')) {
          return <h2 key={i} style={{ fontWeight: 600, fontSize: 'clamp(20px,1.8vw,26px)', marginTop: 48, marginBottom: 16, color: 'var(--color-green)' }}>{block.replace('## ', '')}</h2>;
        }
        if (block.startsWith('**') && block.endsWith('**')) {
          return <p key={i} style={{ fontWeight: 600, color: 'var(--color-ink)', lineHeight: 1.75, marginBottom: 16 }}>{block.replace(/\*\*/g, '')}</p>;
        }
        return <p key={i} style={{ color: 'var(--color-ink-mute)', lineHeight: 1.85, marginBottom: 20, fontSize: 'clamp(16px,1.1vw,18px)' }}
          dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
        />;
      });
  };

  const otherArticles = articles.filter(a => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <NavBar />
      <main>
        {/* Article hero */}
        <div style={{ position: 'relative', height: 'clamp(320px,45vw,560px)', overflow: 'hidden' }}>
          <Image src={article.image} alt={article.imageAlt} fill style={{ objectFit: 'cover' }} priority sizes="100vw" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)' }} />
        </div>

        {/* Article body */}
        <section className="section-pad">
          <div className="container">
            <div style={{ maxWidth: 760, margin: '0 auto' }}>

              {/* Meta */}
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 24, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-ink-mute)' }}>
                <span style={{ color: 'var(--color-green)', border: '1px solid var(--color-green)', padding: '2px 8px' }}>{article.category}</span>
                {article.date}
              </div>

              <h1 style={{ fontWeight: 400, fontSize: 'clamp(28px,3.5vw,48px)', lineHeight: 1.15, marginBottom: 24, maxWidth: '22ch' }}>{article.title}</h1>

              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px,1.5vw,22px)', color: 'var(--color-ink-mute)', lineHeight: 1.65, marginBottom: 48, borderBottom: '1px solid rgba(47,47,47,0.1)', paddingBottom: 32 }}>
                {article.excerpt}
              </p>

              {/* Content */}
              <div>{renderContent(article.content)}</div>

              {/* Back link */}
              <div style={{ marginTop: 56, paddingTop: 28, borderTop: '1px solid rgba(47,47,47,0.1)' }}>
                <Link href="/news" style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-green)' }}>← Back to News</Link>
              </div>
            </div>
          </div>
        </section>

        {/* More articles */}
        {otherArticles.length > 0 && (
          <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
            <div className="container">
              <h3 style={{ fontWeight: 400, marginBottom: 32, fontSize: 'clamp(20px,2vw,28px)' }}>More from the farm</h3>
              <div className="more-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }}>
                {otherArticles.map(a => (
                  <Link key={a.slug} href={`/news/${a.slug}`} style={{ display: 'flex', gap: 20, alignItems: 'start' }}>
                    <div style={{ position: 'relative', width: 100, height: 80, flexShrink: 0, overflow: 'hidden' }}>
                      <Image src={a.image} alt={a.imageAlt} fill style={{ objectFit: 'cover' }} sizes="100px" />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-green)', marginBottom: 6 }}>{a.category}</div>
                      <p style={{ fontWeight: 500, fontSize: 15, lineHeight: 1.4, color: 'var(--color-ink)', margin: 0 }}>{a.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <style>{`@media(max-width:640px){.more-grid{grid-template-columns:1fr!important}}`}</style>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
