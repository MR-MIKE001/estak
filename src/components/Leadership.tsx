import { useFadeIn } from '../hooks/useFadeIn';
import SectionHeader from './SectionHeader';

export default function Leadership() {
  const ref = useFadeIn();
  return (
    <section id="leadership" className="py-24 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <SectionHeader
            tag="Our Leadership"
            title={<>Guided by <em style={{ color: 'var(--gold)' }}>Vision</em></>}
            center
          />
        </div>
        <div ref={ref} className="max-w-lg mx-auto bg-white rounded p-12 text-center" style={{ opacity: 0, border: '1px solid var(--border)' }}>
          <img src="/logo.jpg" alt="Estako Logo" className="rounded-full object-contain mx-auto mb-6" style={{ width: 88, height: 88, border: '2px solid var(--border)' }} />
          <h3 className="text-[32px] font-bold mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--ink)' }}>Godson Inyang</h3>
          <p className="text-[12px] tracking-[.15em] uppercase font-medium mb-6" style={{ color: 'var(--gold)' }}>Chief Executive Officer</p>
          <p className="text-[15px] leading-[1.9]" style={{ color: 'var(--ink2)' }}>
            Mr Godson Inyang is the founding Chief Executive Officer of Estako Services (Nig) Co. With
            decades of experience spanning contracting, equipment supply, technology deployment and human
            capital development, he has built Estako into a trusted name across Nigeria's public and
            private sectors. His leadership philosophy — grounded in the conviction that excellence is a
            gift to be shared — shapes every aspect of the company's culture and operations.
          </p>
          <div className="mt-8 pt-7 flex flex-col gap-3 items-center" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="flex items-center gap-2 text-[14px]" style={{ color: 'var(--ink2)' }}>
              <span>📞</span>
              <a href="tel:08037513027" style={{ color: 'var(--gold)', textDecoration: 'none' }}>08037513027</a>
              <span style={{ color: 'var(--border)' }}>·</span>
              <a href="tel:08022502773" style={{ color: 'var(--gold)', textDecoration: 'none' }}>08022502773</a>
            </div>
            <div className="flex items-center gap-2 text-[14px]" style={{ color: 'var(--ink2)' }}>
              <span>✉️</span>
              <a href="mailto:godsoninyang63@gmail.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>godsoninyang63@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
