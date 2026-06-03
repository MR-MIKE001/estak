import { useFadeIn } from '../hooks/useFadeIn';
import SectionHeader from './SectionHeader';

const reasons = [
  { num: '01', title: 'CAC Registered & Compliant', desc: 'Fully incorporated under the Corporate Affairs Commission of Nigeria. Engage us with full confidence in our legal standing, accountability, and regulatory compliance.' },
  { num: '02', title: 'Proven Sector Depth', desc: 'Active experience across agriculture, health, education, construction and logistics — we understand the unique demands of your sector without a steep learning curve.' },
  { num: '03', title: 'End-to-End Delivery', desc: 'From initial assessment and procurement through to deployment and after-service support, we manage every phase with a dedicated project team.' },
  { num: '04', title: 'Rooted in Nigeria', desc: 'As a proudly Nigerian company headquartered in Akwa Ibom, we bring authentic local knowledge, established networks, and a genuine commitment to Nigerian industry.' },
  { num: '05', title: 'Mentorship Philosophy', desc: 'Beyond transactions, we invest in the long-term capacity of our clients — offering guidance, training and mentorship to ensure lasting impact, not just immediate results.' },
  { num: '06', title: 'Driven by Grace', desc: 'Our motto — "Exploit By Grace" — is our operating philosophy. Every engagement is approached with humility, purpose, and the conviction that great work is a form of service.' },
];

export default function WhyUs() {
  const ref = useFadeIn(0.05);
  return (
    <section id="whyus" className="py-24 px-6" style={{ background: '#fff' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Why Choose Us"
          title={<>The Estako <em style={{ color: 'var(--gold)' }}>Advantage</em></>}
          lead="We combine decades of hands-on experience with a values-driven culture to consistently exceed client expectations across every engagement."
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ opacity: 0 }}>
          {reasons.map(r => (
            <div
              key={r.num}
              className="p-10 rounded transition-all duration-200 cursor-default"
              style={{ border: '1px solid var(--border)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
            >
              <div
                className="text-[52px] font-bold leading-none mb-4"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--gold-pale)' }}
              >
                {r.num}
              </div>
              <h3 className="text-[20px] font-bold mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--ink)' }}>
                {r.title}
              </h3>
              <p className="text-[14.5px] leading-[1.8]" style={{ color: 'var(--muted)' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
