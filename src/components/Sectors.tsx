import { useFadeIn } from '../hooks/useFadeIn';
import SectionHeader from './SectionHeader';

const sectors = [
  { icon: '🌾', label: 'Agriculture' },
  { icon: '🏥', label: 'Health' },
  { icon: '🏗️', label: 'Construction' },
  { icon: '📚', label: 'Education' },
  { icon: '🚛', label: 'Logistics' },
  { icon: '🏛️', label: 'Government' },
  { icon: '🏭', label: 'Industrial' },
  { icon: '💼', label: 'Corporate' },
  { icon: '⚡', label: 'Technical' },
  { icon: '👤', label: 'Individual' },
];

export default function Sectors() {
  const ref = useFadeIn();

  return (
    <section id="sectors" className="py-24 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Sectors We Serve"
          title={<>Across Every <em style={{ color: 'var(--gold)' }}>Industry</em></>}
          lead="Our impact extends across the full breadth of Nigeria's economy — from federal institutions to community-level enterprises — with equal dedication at every scale."
        />
        <div
          ref={ref}
          className="grid gap-4"
          style={{ opacity: 0, gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}
        >
          {sectors.map(s => (
            <div
              key={s.label}
              className="bg-white text-center p-5 rounded transition-all duration-200 cursor-default"
              style={{ border: '1px solid var(--border)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(184,146,42,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span className="block text-[28px] mb-3">{s.icon}</span>
              <span className="text-[13px] font-medium tracking-wide" style={{ color: 'var(--ink2)' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
