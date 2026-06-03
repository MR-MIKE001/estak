import { useFadeIn } from '../hooks/useFadeIn';
import SectionHeader from './SectionHeader';

const services = [
  { num: '01', icon: '⚙️', title: 'Equipment & Procurement', desc: 'Sourcing, supplying and managing specialised equipment for industrial, agricultural, construction, and commercial applications with guaranteed quality.' },
  { num: '02', icon: '💻', title: 'Technology Deployment', desc: 'Identifying, procuring, and implementing the right technology solutions — from ICT infrastructure and automation systems to sector-specific platforms.' },
  { num: '03', icon: '👷', title: 'Manpower Resources', desc: 'Deploying qualified professionals and project teams on contract or permanent basis across engineering, construction, logistics, agriculture, and health.' },
  { num: '04', icon: '📈', title: 'Marketing & Promotion', desc: 'Driving brand growth through strategic campaigns, B2B promotions, product launches and distribution channel development across regions.' },
  { num: '05', icon: '🏗️', title: 'General Contracting', desc: 'Full project lifecycles from inception to completion — civil construction, site management, material supply and coordination with strict adherence to timelines.' },
  { num: '06', icon: '🎓', title: 'Mentorship & Training', desc: 'Structured mentorship, vocational training, skills acquisition programmes, and business development coaching for sustained growth.' },
];

export default function Services() {
  const ref = useFadeIn(0.05);

  return (
    <section id="services" className="py-24 px-6" style={{ background: 'var(--ink)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="What We Do"
          title={<>Our Service <em style={{ color: 'var(--gold)' }}>Offerings</em></>}
          lead="A comprehensive portfolio of services designed to meet the diverse needs of government, industry, corporations and individuals across Nigeria."
          light
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]" style={{ opacity: 0 }}>
          {services.map(s => (
            <div
              key={s.num}
              className="service-card-bar relative p-10 transition-colors duration-200 overflow-hidden cursor-default"
              style={{ background: '#1a2535' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1e2d42')}
              onMouseLeave={e => (e.currentTarget.style.background = '#1a2535')}
            >
              <p className="text-[13px] tracking-[.15em] font-semibold mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--gold)' }}>{s.num}</p>
              <span className="block text-[30px] mb-5 opacity-70" style={{ filter: 'grayscale(1) brightness(2)' }}>{s.icon}</span>
              <h3 className="text-[21px] font-bold text-white mb-3 leading-snug" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{s.title}</h3>
              <p className="text-[14px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
