﻿import type { Metadata } from 'next';
import NavBar from '@/components/layout/NavBar';
import HeroVideoLoop from '@/components/ui/HeroVideoLoop';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import Divider from '@/components/ui/Divider';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export const metadata: Metadata = {
  title: 'Governance | The NFT',
  description: 'Leadership, stewardship and governance at the NFT. A trust built for generational continuity, institutional accountability, and long-term impact.',
};

export default function GovernancePage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero />
        <Divider from="#1c2410" to="#F8F5EE" />
        <TeamProfiles />
        <Divider from="#F8F5EE" to="#EFE9DA" />
        <SuccessionPipeline />
        <Divider from="#EFE9DA" to="#F8F5EE" />
        <GovernanceFramework />
        <Divider from="#F8F5EE" to="#EFE9DA" />
        <BFSCompliance />
        <Divider from="#EFE9DA" to="#3D5220" />
        <SDGAlignment />
        <Divider from="#3D5220" to="#F8F5EE" />
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
        <div className="numlabel" style={{ color: 'var(--color-gold-soft)', marginBottom: 20 }}><span></span>GOVERNANCE</div>
        <h1 style={{ color: 'var(--color-bone)', maxWidth: '18ch', marginBottom: 20 }}>Leadership, Stewardship &amp; Governance</h1>
        <p style={{ color: 'rgba(248,245,238,0.85)', fontSize: 'clamp(17px,1.4vw,21px)', maxWidth: '56ch' }}>
          A Trust built for generational continuity, institutional accountability, and long-term impact.
        </p>
      </div>
    </header>
  );
}

function TeamProfiles() {
  const team = [
    {
      name: 'Mmatebogo Elizabeth Nkoenyane',
      role: 'Trustee & Main Applicant',
      creds: 'Law firm director · Private equity & venture capital investment and audit committees · Full-time farming from May 2026',
      bio: 'Distinguished career in South Africa\'s financial sector. Provides strategic mentorship, governance guidance, and investment oversight. The founding anchor of the Trust\'s institutional framework.',
    },
    {
      name: 'Tshimoloho Hlapane',
      role: 'Co-Beneficiary · Managing Person',
      creds: 'BBA (European University of Lefke) · Certificate in Data Analytics (UCT) · Certificate in Software Development (Power Learn Project Kenya)',
      bio: 'Operational Architect and 4IR Technology Strategist. Active on farm since 2024. Oversees commercial livestock division, procurement, feedlot operations, and auction sales. Core competencies in financial accounting, data analysis, and systems automation.',
    },
    {
      name: 'Tshenolo Hlapane',
      role: 'Co-Beneficiary · Financial Governance',
      creds: 'BBA (European University of Lefke) · Currently completing CTA · Serving SAICA articles at an accredited audit firm',
      bio: 'Custodian of financial governance, internal control frameworks, statutory reporting, and investor-grade financial modelling. Core competencies in financial reporting, auditing, regulatory compliance, and strategic financial analysis.',
    },
    {
      name: 'Tshebeletso Hlapane',
      role: 'Co-Beneficiary · Legal & Compliance',
      creds: 'LLB · Diploma in Sports Management · 10 years Governance, Risk & Compliance at the FSCA · Currently at a corporate law firm',
      bio: 'Oversees all legal, governance, and regulatory matters. Deep financial-sector compliance expertise accumulated over a decade at the Financial Sector Conduct Authority  -  a direct competitive advantage for the Trust.',
    },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="01" label="The People" />
          <h2>The team behind the enterprise.</h2>
        </div>
        <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px) clamp(40px,5vw,64px)' }}>
          {team.map(({ name, role, creds, bio }) => (
            <div key={name} className="profile-card" style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 28, alignItems: 'start' }}>
              <ImagePlaceholder caption={`portrait · ${name.split(' ')[0].toLowerCase()} · b&w`} style={{ width: 180, height: 230, filter: 'grayscale(100%)' }} />
              <div>
                <h3 style={{ fontSize: 'clamp(22px,1.8vw,28px)', lineHeight: 1.15, marginBottom: 6 }}>{name}</h3>
                <div style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 14 }}>{role}</div>
                <p style={{ fontSize: 13, color: 'var(--color-ink-mute)', marginBottom: 12, paddingBottom: 14, borderBottom: '1px solid rgba(26,26,26,0.1)', fontStyle: 'italic' }}>{creds}</p>
                <p style={{ fontSize: 14, color: 'var(--color-ink)', margin: 0 }}>{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:860px){.team-grid{grid-template-columns:1fr!important}.profile-card{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

function SuccessionPipeline() {
  const pipeline = [
    { name: 'Mmatebogo Nkoenyane', current: 'Full-time farming from May 2026', future: 'Primary operator and decision-maker' },
    { name: 'Tshimoloho Hlapane', current: 'Full-time farm involvement', future: 'Full-time farming role' },
    { name: 'Tshenolo Hlapane', current: 'Part-time  -  active vacations + farm involvement', future: 'Full-time farming role' },
    { name: 'Tshebeletso Hlapane', current: 'Part-time  -  active vacations + farm involvement', future: 'Full-time farming role' },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="02" label="Generational Continuity" />
          <h2>Succession is the plan, not the contingency.</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-gold)' }}>
                {['Person', 'Current (2026)', 'Year 3 - 5 Path'].map(h => (
                  <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-mute)', fontFamily: 'var(--font-sans)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pipeline.map(({ name, current, future }) => (
                <tr key={name} style={{ borderBottom: '1px solid rgba(26,26,26,0.1)' }}>
                  <td style={{ padding: '20px', fontFamily: 'var(--font-serif)', fontSize: 20 }}>{name}</td>
                  <td style={{ padding: '20px', fontSize: 14, color: 'var(--color-ink-mute)' }}>{current}</td>
                  <td style={{ padding: '20px', fontSize: 14, color: 'var(--color-green)', fontWeight: 500 }}>{future}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function GovernanceFramework() {
  const pillars = [
    { num: 'i.', title: 'Legal Structure', body: 'Operated under South African trust law. Fiduciary oversight, institutional controls, and clear beneficiary rights defined in the trust deed.' },
    { num: 'ii.', title: 'Compliance by Design', body: 'Full BFS compliance (est. 46/50 scorecard). 10% net profit sharing for all permanent staff. Statutory reporting, audited annuals, and quarterly investor updates from Year 1.' },
    { num: 'iii.', title: 'Institutional Controls', body: 'SAICA-compliant internal control framework. Independent compliance reviews. Investor-grade financial modelling maintained by a chartered accountant (CTA in progress).' },
  ];

  return (
    <section className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="03" label="How We Govern" />
          <h2>Governance is not a formality. It is the product.</h2>
        </div>
        <div className="gov-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {pillars.map(({ num, title, body }) => (
            <div key={title} style={{ padding: '32px 28px', border: '1px solid rgba(26,26,26,0.12)', background: 'var(--color-bone)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-gold)', fontSize: 22, marginBottom: 16 }}>{num}</div>
              <h3 style={{ marginBottom: 14 }}>{title}</h3>
              <p style={{ color: 'var(--color-ink-mute)', margin: 0, fontSize: 15 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:860px){.gov-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function BFSCompliance() {
  const criteria = [
    { criterion: 'South African citizen / registered entity', status: 'âœ" Compliant' },
    { criterion: '100% Black-owned and managed', status: 'âœ" Compliant' },
    { criterion: 'Priority BFS agricultural sector', status: 'âœ" Compliant' },
    { criterion: '10% farm worker profit sharing', status: 'âœ" Compliant' },
    { criterion: 'No prior government funding mismanagement', status: 'âœ" Compliant' },
    { criterion: 'Full-time producer', status: 'âœ" Compliant' },
    { criterion: 'No distressed debt at application', status: 'âœ" Compliant' },
    { criterion: 'Scorecard minimum 20/50', status: 'âœ" Est. 46/50' },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-bone-deep)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(40px,5vw,64px)' }}>
          <SectionLabel number="04" label="Full BFS Compliance" />
          <h2>Eight criteria. Eight ticks.</h2>
        </div>
        <div style={{ maxWidth: 840 }}>
          {criteria.map(({ criterion, status }) => (
            <div key={criterion} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', borderBottom: '1px solid rgba(26,26,26,0.1)', gap: 24 }}>
              <span style={{ fontSize: 15, color: 'var(--color-ink)' }}>{criterion}</span>
              <span style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-green)', fontWeight: 500, whiteSpace: 'nowrap' }}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SDGAlignment() {
  const sdgs = [
    { num: '01', name: 'No Poverty', desc: 'Asset ownership, dignified employment, structured income pathways for farm workers and families.', bg: '#3D5220' },
    { num: '02', name: 'Zero Hunger', desc: 'Maize, sunflower, vegetables, red meat  -  all DALRRD priority staple foods for South Africa.', bg: '#6E8146' },
    { num: '08', name: 'Decent Work', desc: '18 - 25 jobs Year 1, growing to 33 - 44 peak by Year 3. Women and youth priority.', bg: '#C9A84C', textColor: '#1A1A1A' },
    { num: '09', name: 'Industry & Innovation', desc: '4IR infrastructure, IoT monitoring, automated workflows  -  institutional-grade agri-tech.', bg: '#1A1A1A' },
    { num: '15', name: 'Life on Land', desc: 'Regenerative land use, precision agriculture, rotational grazing, biodiversity preservation.', bg: '#5C6F2B' },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--color-green)', color: 'var(--color-bone)' }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <SectionLabel number="05" label="Global Alignment" gold />
          <h2 style={{ color: 'var(--color-bone)' }}>Five UN Sustainable Development Goals. One enterprise.</h2>
        </div>
        <div className="sdg-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16 }}>
          {sdgs.map(({ num, name, desc, bg, textColor }) => (
            <div key={num} style={{ aspectRatio: '1/1', background: bg, color: textColor ?? 'var(--color-bone)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 48, lineHeight: 1 }}>{num}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.2, marginBottom: 8 }}>{name}</div>
                <div style={{ fontSize: 12, lineHeight: 1.4, opacity: 0.75 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1100px){.sdg-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:860px){.sdg-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
    </section>
  );
}

