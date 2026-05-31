import type { Metadata } from 'next';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import Btn from '@/components/ui/Btn';
import Divider from '@/components/ui/Divider';

export const metadata: Metadata = {
  title: 'Invest | The Nkoenyane Family Trust',
  description: 'A de-risked agricultural investment opportunity. 200ha freehold land, four income streams, R6.2M projected Year 5 revenue. BFS scorecard 46/50.',
};

export default function InvestPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero />
        <Divider from="#0e1208" to="#F8F5EE" />
        <InvestmentCase />
        <KeyAssets />
        <Divider from="#3D5220" to="#F8F5EE" />
        <RevenueProjections />
        <DSRSection />
        <Divider from="#EFE9DA" to="#F8F5EE" />
        <RoadmapSection />
        <Divider from="#F8F5EE" to="#EFE9DA" />
        <OfftakeSection />
        <Divider from="#EFE9DA" to="#F8F5EE" />
        <EmploymentSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

function PageHero() {
  return (
    <header style={{ position: 'relative', minHeight: '56vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(72px,9vw,144px) clamp(24px,5vw,96px) 64px', color: 'var(--color-bone)', overflow: 'hidden', background: 'linear-gradient(180deg,#0e1208 0%,#1d2614 100%)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.5) 60%,rgba(0,0,0,0.75) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1320, margin: '0 auto', width: '100%' }}>
        <div className="numlabel" style={{ color: 'var(--color-gold-soft)', marginBottom: 20 }}><span>—</span>INVEST</div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '20ch', marginBottom: 20 }}>A De-Risked, Governance-Led Investment in South African Agriculture.</h1>
        <p style={{ color: 'rgba(248,245,238,0.85)', fontSize: 'clamp(17px,1.4vw,21px)', maxWidth: '60ch' }}>
          200ha unencumbered freehold land. Four revenue streams. Institutional-grade management. Zero existing debt.
        </p>
      </div>
    </header>
  );
}

function InvestmentCase() {
  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="01" label="The Opportunity" />
          <h2>Two paths in. One exceptional enterprise.</h2>
        </div>
        <div className="invest-case-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* For Investors */}
          <div style={{ padding: '40px 36px', border: '1px solid rgba(26,26,26,0.15)', background: 'var(--color-bone-deep)' }}>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ink-mute)', marginBottom: 20 }}>For Investors</div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px,1.6vw,22px)', lineHeight: 1.4, color: 'var(--color-ink)', marginBottom: 24 }}>
              &ldquo;A strategically de-risked, long-horizon opportunity in modern South African agriculture.&rdquo;
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid rgba(26,26,26,0.1)' }}>
              {[
                '200ha freehold land — unencumbered, valued ~R12,000,000',
                'Four diversified revenue streams',
                'Zero existing debt — clean balance sheet',
                'Management combining financial governance, legal compliance, and 4IR expertise',
                'BFS scorecard est. 46/50 — full transformation alignment',
              ].map(item => (
                <li key={item} style={{ padding: '12px 0', borderBottom: '1px solid rgba(26,26,26,0.08)', fontSize: 14, display: 'flex', gap: 12 }}>
                  <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>—</span>{item}
                </li>
              ))}
            </ul>
          </div>
          {/* For B2B */}
          <div style={{ padding: '40px 36px', background: 'var(--color-green)', color: 'var(--color-bone)' }}>
            <div style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 20 }}>For B2B Clients</div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px,1.6vw,22px)', lineHeight: 1.4, color: 'var(--color-bone)', marginBottom: 24 }}>
              &ldquo;A reliable supply of premium, fully traceable agricultural goods.&rdquo;
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid rgba(248,245,238,0.15)' }}>
              {[
                'Yellow maize, sunflower, red meat, and fresh vegetables',
                'Institutional-grade compliance standards',
                'Verified provenance — chain from soil to shelf',
                'Operational consistency through data-driven production',
                'Direct supply arrangements for local retailers and restaurants',
              ].map(item => (
                <li key={item} style={{ padding: '12px 0', borderBottom: '1px solid rgba(248,245,238,0.12)', fontSize: 14, color: 'rgba(248,245,238,0.85)', display: 'flex', gap: 12 }}>
                  <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>—</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.invest-case-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function KeyAssets() {
  const assets = [
    { value: 'R12,000,000', label: '200ha Freehold Land', sub: 'Unencumbered. Owned since 2000.' },
    { value: 'Zero', label: 'Existing Debt', sub: 'Clean balance sheet at application.' },
    { value: '100%', label: 'Black-Owned, Female-Led', sub: 'Fully BFS and transformation aligned.' },
    { value: '46/50', label: 'BFS Scorecard (Est.)', sub: 'Minimum required: 20 points.' },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-green)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="02" label="What We Bring" gold />
          <h2 style={{ color: 'var(--color-bone)' }}>The asset base that underpins everything.</h2>
        </div>
        <div className="assets-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
          {assets.map(({ value, label, sub }, i) => (
            <div key={label} style={{ padding: '40px 32px', borderRight: i < assets.length - 1 ? '1px solid rgba(248,245,238,0.15)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px,3.5vw,52px)', color: 'var(--color-gold)', lineHeight: 1, marginBottom: 10 }}>{value}</div>
              <div style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-bone)', marginBottom: 6 }}>{label}</div>
              <div style={{ fontSize: 13, color: 'rgba(248,245,238,0.65)' }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1100px){.assets-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:860px){.assets-grid{grid-template-columns:1fr!important}}
        .assets-grid>div{border-bottom:1px solid rgba(248,245,238,0.1)}
      `}</style>
    </section>
  );
}

function RevenueProjections() {
  const streams = [
    { name: 'Maize (80ha)', y1: 'R1,540,000', y2: 'R1,612,800', y3: 'R1,687,200', y4: 'R1,763,200', y5: 'R1,840,800' },
    { name: 'Sunflower (20ha)', y1: 'R306,000', y2: 'R323,750', y3: 'R342,000', y4: 'R349,600', y5: 'R370,500' },
    { name: 'Cattle (commercial)', y1: 'R120,000', y2: 'R300,000', y3: 'R400,000', y4: 'R500,000', y5: 'R600,000' },
    { name: 'Beef Stud', y1: 'R0', y2: 'R400,000', y3: 'R600,000', y4: 'R850,000', y5: 'R1,100,000' },
    { name: 'Sheep', y1: 'R60,000', y2: 'R200,000', y3: 'R250,000', y4: 'R300,000', y5: 'R400,000' },
    { name: 'Tunnel Vegetables', y1: 'R330,000', y2: 'R1,130,000', y3: 'R1,295,000', y4: 'R1,535,000', y5: 'R1,930,000' },
    { name: 'TOTAL INCOME', y1: 'R2,356,000', y2: 'R3,966,550', y3: 'R4,574,200', y4: 'R5,297,800', y5: 'R6,241,300', total: true },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="03" label="Financial Projections" />
          <h2>Five-year revenue projections.</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(26,26,26,0.15)' }}>
                {['Revenue Stream', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'].map(h => (
                  <th key={h} style={{ padding: '14px 20px', textAlign: h === 'Revenue Stream' ? 'left' : 'right', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-mute)', fontFamily: 'var(--font-sans)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {streams.map(({ name, y1, y2, y3, y4, y5, total }) => (
                <tr key={name} style={{ borderBottom: '1px solid rgba(26,26,26,0.1)', background: total ? 'rgba(61,82,32,0.06)' : 'transparent' }}>
                  <td style={{ padding: '18px 20px', fontFamily: 'var(--font-serif)', fontSize: total ? 20 : 18, fontWeight: total ? 600 : 400 }}>{name}</td>
                  {[y1, y2, y3, y4, y5].map((v, i) => (
                    <td key={i} style={{ padding: '18px 20px', fontFamily: 'var(--font-mono)', fontSize: total ? 16 : 15, color: 'var(--color-green)', textAlign: 'right', fontWeight: total ? 600 : 400 }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 16, fontSize: 12, color: 'var(--color-ink-mute)', letterSpacing: '0.06em' }}>
          Figures indicative · All crop prices based on confirmed 2025 actual season prices · Full model on memorandum request
        </p>
      </div>
    </section>
  );
}

function DSRSection() {
  const rows = [
    { year: 'Year 1 (2026/27)', income: 'R2,356,000', repay: 'R147,774', dsr: '6.3%', status: 'Comfortable' },
    { year: 'Year 2 (2027/28)', income: 'R3,966,550', repay: 'R591,098', dsr: '14.9%', status: 'Serviceable' },
    { year: 'Year 3 (2028/29)', income: 'R4,574,200', repay: 'R591,098', dsr: '12.9%', status: 'Comfortable' },
    { year: 'Year 4 (2029/30)', income: 'R5,297,800', repay: 'R591,098', dsr: '11.2%', status: 'Strong' },
    { year: 'Year 5 (2030/31)', income: 'R6,241,300', repay: 'R591,098', dsr: '9.5%', status: 'Excellent' },
  ];

  const statusColor = (s: string) =>
    s === 'Excellent' ? '#3D5220' : s === 'Strong' ? '#4F6B2A' : s === 'Comfortable' ? '#6E8146' : '#555048';

  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="04" label="Repayment Capacity" />
          <h2>Comfortable from Year 1. Excellent by Year 5.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Loan terms: R2,000,000 at Prime − 2% (9.25% p.a.) · Quarterly instalments · 17 quarters · Fully repaid: April 2031</p>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(26,26,26,0.15)' }}>
                {['Year', 'Total Income', 'Annual Repayment', 'DSR', 'Status'].map(h => (
                  <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-mute)', fontFamily: 'var(--font-sans)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ year, income, repay, dsr, status }) => (
                <tr key={year} style={{ borderBottom: '1px solid rgba(26,26,26,0.1)' }}>
                  <td style={{ padding: '18px 20px', fontFamily: 'var(--font-serif)', fontSize: 18 }}>{year}</td>
                  <td style={{ padding: '18px 20px', fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--color-green)' }}>{income}</td>
                  <td style={{ padding: '18px 20px', fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--color-ink-mute)' }}>{repay}</td>
                  <td style={{ padding: '18px 20px', fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--color-green)', fontWeight: 600 }}>{dsr}</td>
                  <td style={{ padding: '18px 20px', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: statusColor(status), fontWeight: 500 }}>{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const phases = [
    { num: 'Phase I', title: 'Foundation & Systems Integration', range: 'Months 00 — 08', items: ['Asset deployment: core production machinery and logistics', '4IR technology integration: IoT monitoring, automation, data analytics', 'Pilot production and validation: quality assurance protocols', 'Workforce upskilling: data-driven workflows, compliance standards'] },
    { num: 'Phase II', title: 'Expansion & Market Penetration', range: 'Months 09 — 18', items: ['Production scale-up: ~150% output increase', 'Value-added processing facility commissioned', 'B2B commercialisation: medium- to long-term supply contracts', 'Lean manufacturing and continuous improvement deployed'] },
    { num: 'Phase III', title: 'Profitability & Export Readiness', range: 'Months 19 — 24', items: ['Consistent positive operating margins achieved', 'Regulated-market certifications attained', 'Export contracts initiated with international buyers', 'Strategic brand positioning: data-backed quality claims'] },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="05" label="Growth Roadmap" />
          <h2>24 months to profitability and export readiness.</h2>
        </div>
        <div style={{ position: 'relative', marginTop: 32 }}>
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: 28, left: '4%', right: '4%', height: 1, background: 'var(--color-gold)', opacity: 0.35 }} />
          <div className="roadmap-phases" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
            {phases.map(({ num, title, range, items }) => (
              <div key={num} style={{ padding: '0 24px', position: 'relative', textAlign: 'center' }}>
                {/* Dot */}
                <div style={{ width: 16, height: 16, background: 'var(--color-gold)', margin: '20px auto 28px', position: 'relative', zIndex: 2, border: '4px solid var(--color-bone)' }} />
                <div style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-gold)', fontSize: 20, marginBottom: 8 }}>{num}</div>
                <h3 style={{ fontSize: 'clamp(20px,1.8vw,26px)', marginBottom: 10 }}>{title}</h3>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-mute)', marginBottom: 20 }}>{range}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                  {items.map(item => (
                    <li key={item} style={{ padding: '8px 0', borderBottom: '1px solid rgba(26,26,26,0.08)', fontSize: 14, color: 'var(--color-ink-mute)', display: 'flex', gap: 8 }}>
                      <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.roadmap-phases{grid-template-columns:1fr!important;text-align:left!important}}`}</style>
    </section>
  );
}

function OfftakeSection() {
  const buyers = [
    { commodity: 'Maize + Sunflower', buyer: 'established grain market channels', arrangement: 'SAFEX spot price at delivery', status: 'Letter of intent' },
    { commodity: 'Cattle', buyer: 'regional livestock auctions', arrangement: 'Monthly auction', status: 'Seller registration confirmed' },
    { commodity: 'Sheep', buyer: 'regional livestock auctions', arrangement: 'Quarterly auction', status: 'Seller registration confirmed' },
    { commodity: 'Vegetables', buyer: 'local fresh produce markets', arrangement: 'Weekly fresh delivery', status: 'Letter of intent' },
    { commodity: 'Vegetables', buyer: 'Local retailers / restaurants', arrangement: 'Direct weekly supply, fixed pricing', status: 'Negotiation active' },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="06" label="Confirmed Buyers" />
          <h2>Off-take confirmed before first harvest.</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(26,26,26,0.15)' }}>
                {['Commodity', 'Buyer', 'Arrangement', 'Status'].map(h => (
                  <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-mute)', fontFamily: 'var(--font-sans)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {buyers.map(({ commodity, buyer, arrangement, status }) => (
                <tr key={`${commodity}-${buyer}`} style={{ borderBottom: '1px solid rgba(26,26,26,0.1)' }}>
                  <td style={{ padding: '18px 20px', fontFamily: 'var(--font-serif)', fontSize: 18 }}>{commodity}</td>
                  <td style={{ padding: '18px 20px', fontSize: 14, fontWeight: 500 }}>{buyer}</td>
                  <td style={{ padding: '18px 20px', fontSize: 14, color: 'var(--color-ink-mute)' }}>{arrangement}</td>
                  <td style={{ padding: '18px 20px', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-green)', fontWeight: 500 }}>{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function EmploymentSection() {
  const rows = [
    { cat: 'Permanent farm workers', y1: '6–8', y2: '10–12', y3plus: '12–15' },
    { cat: 'Tunnel / horticulture workers', y1: '1–2', y2: '2–3', y3plus: '3–4' },
    { cat: 'Seasonal — planting', y1: '4–6', y2: '6–8', y3plus: '8–10' },
    { cat: 'Seasonal — harvest', y1: '6–8', y2: '8–10', y3plus: '10–12' },
    { cat: 'Management / admin', y1: '1', y2: '2', y3plus: '2–3' },
    { cat: 'TOTAL (peak season)', y1: '18–25', y2: '26–35', y3plus: '33–44', total: true },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="07" label="Job Creation" />
          <h2>18–25 jobs in Year 1. Growing to 44 by Year 3.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Priority hiring: women (50% target), youth under 35, local community.</p>
        </div>
        <div style={{ overflowX: 'auto', maxWidth: 720 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(26,26,26,0.15)' }}>
                {['Category', 'Year 1', 'Year 2', 'Year 3+'].map(h => (
                  <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-mute)', fontFamily: 'var(--font-sans)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ cat, y1, y2, y3plus, total }) => (
                <tr key={cat} style={{ borderBottom: '1px solid rgba(26,26,26,0.1)', background: total ? 'rgba(61,82,32,0.06)' : 'transparent' }}>
                  <td style={{ padding: '16px 20px', fontFamily: total ? 'var(--font-sans)' : 'var(--font-serif)', fontSize: total ? 14 : 18, fontWeight: total ? 600 : 400 }}>{cat}</td>
                  {[y1, y2, y3plus].map((v, i) => (
                    <td key={i} style={{ padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--color-green)', fontWeight: total ? 600 : 400 }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      style={{
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,96px)',
        background: 'var(--color-green)',
        color: 'var(--color-bone)',
        textAlign: 'center',
      }}
    >
      <div className="container-sm">
        <h2 style={{ color: 'var(--color-bone)', marginBottom: 16 }}>Begin a Strategic Conversation.</h2>
        <p style={{ color: 'rgba(248,245,238,0.8)', fontSize: 'clamp(17px,1.4vw,20px)', maxWidth: '50ch', margin: '0 auto 40px' }}>
          For investment inquiries, partnership proposals, or B2B supply arrangements.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Btn href="/contact?type=investment" variant="gold" arrow>Request the Investment Memorandum</Btn>
          <Btn href="/contact" variant="ghost" arrow>Contact the Trust</Btn>
        </div>
      </div>
    </section>
  );
}
