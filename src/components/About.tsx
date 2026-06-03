import { useFadeIn } from '../hooks/useFadeIn';
import SectionHeader from './SectionHeader';

const capabilities = [
  { title: 'Equipment Supply & Procurement', desc: 'Sourcing and delivering specialised equipment across industries with guaranteed quality standards and competitive pricing.' },
  { title: 'Technology Solutions', desc: 'Implementing fit-for-purpose technology to modernise operations, improve efficiency, and future-proof your business.' },
  { title: 'Manpower & Human Capital', desc: 'Providing vetted, skilled professionals on demand — from technical operatives to full project management teams.' },
  { title: 'Marketing & Business Development', desc: 'Strategic promotional support to expand your market presence and grow revenue across targeted channels.' },
  { title: 'Mentorship & Capacity Building', desc: 'Long-term coaching, training, and institutional development programmes for individuals and organisations.' },
  { title: 'General Contracting', desc: 'End-to-end project management for construction, logistics, and infrastructure engagements.' },
];

export default function About() {
  const left = useFadeIn();
  const right = useFadeIn();

  return (
    <section id="about" className="py-24 px-6" style={{ background: '#fff' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div ref={left} style={{ opacity: 0 }}>
          <SectionHeader
            tag="Who We Are"
            title={<>Trusted Partners in <em style={{ color: 'var(--gold)' }}>Progress</em></>}
          />
          <p className="text-[15.5px] leading-[1.9] mb-5" style={{ color: 'var(--ink2)' }}>
            Estako Services (Nig) Co. is a fully CAC-incorporated Nigerian enterprise with a long-standing
            track record of excellence in multi-service delivery, marketing, and general contracting. We
            operate across governmental, industrial, corporate, and individual demand chains with equal
            commitment to quality and integrity.
          </p>
          <blockquote
            className="text-[22px] font-semibold italic leading-[1.6] my-8 pl-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: 'var(--gold)',
              borderLeft: '3px solid var(--gold)',
              margin: '2rem 0',
            }}
          >
            "We don't just deliver services — we build relationships, create capacity, and leave a lasting legacy in every engagement."
          </blockquote>
          <p className="text-[15.5px] leading-[1.9] mb-5" style={{ color: 'var(--ink2)' }}>
            Headquartered in Uyo, Akwa Ibom State, we leverage deep local knowledge alongside national
            reach to serve clients at every level — from federal agencies to individual entrepreneurs —
            with the same dedication and professional rigour.
          </p>
        </div>

        <div ref={right} className="rounded p-10" style={{ opacity: 0, background: 'var(--cream)' }}>
          <h3
            className="text-[22px] font-bold mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--ink)' }}
          >
            Core Capabilities
          </h3>
          {capabilities.map((c, i) => (
            <div
              key={i}
              className="flex items-start gap-4 py-4"
              style={{ borderBottom: i < capabilities.length - 1 ? '1px solid var(--border)' : 'none' }}
            >
              <span
                className="mt-2 rounded-full flex-shrink-0"
                style={{ width: 8, height: 8, minWidth: 8, background: 'var(--gold)' }}
              />
              <p className="text-[14.5px] leading-[1.75]" style={{ color: 'var(--ink2)' }}>
                <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{c.title}</strong>
                {' — '}{c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
