import { useEffect, useRef, useState } from 'react';
import { ExternalLink, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    name: 'HotelGo',
    tag: 'Hospitality',
    icon: '🏨',
    desc: 'Complete Hotel PMS solution for effective business management — reservations, front desk, housekeeping, billing, and reporting in one unified platform.',
  },
  {
    name: 'SWAD Cloud',
    tag: 'Cloud & Hosting',
    icon: '☁️',
    desc: 'Secure cloud hosting & digital tools marketplace. Reliable infrastructure for businesses looking to scale with confidence and enterprise-grade security.',
  },
  {
    name: 'Aria Messenger',
    tag: 'Marketing Automation',
    icon: '📣',
    desc: 'Automate and execute multi-channel marketing campaigns — SMS, email, WhatsApp, and push notifications — from a single intelligent dashboard.',
  },
  {
    name: 'NetCaller',
    tag: 'Cloud Communications',
    icon: '📞',
    desc: 'Advanced cloud communication system for modern teams. VoIP, call routing, IVR, and analytics built for high-performance business environments.',
  },
  {
    name: 'Custom Dev',
    tag: 'Bespoke Development',
    icon: '⚙️',
    desc: 'Bespoke digital solutions tailored to specific business needs — from custom web applications and ERP systems to mobile apps and API integrations.',
  },
];

function useAutoScroll(count: number, intervalMs = 3500) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive(a => (a + 1) % count), intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs, paused]);

  return { active, setActive, setPaused };
}

export default function SwadPartner() {
  const ref = useRef<HTMLDivElement>(null);
  const { active, setActive, setPaused } = useAutoScroll(products.length);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('animate-fade-up'); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const prev = () => setActive(a => (a - 1 + products.length) % products.length);
  const next = () => setActive(a => (a + 1) % products.length);

  return (
    <section id="swad" className="py-24 px-6 relative overflow-hidden" style={{ background: '#060e1c' }}>
      {/* Decorative gradient blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-80px', right: '-80px',
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,146,42,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-80px', left: '-80px',
          width: 320, height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,146,42,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative" ref={ref} style={{ opacity: 0 }}>
        {/* Header */}
        <div className="text-center mb-16">
          {/* Official badge */}
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8"
            style={{ background: 'rgba(184,146,42,0.12)', border: '1px solid rgba(184,146,42,0.35)' }}
          >
            <span className="text-[18px]">🤝</span>
            <span className="text-[11px] tracking-[.2em] uppercase font-medium" style={{ color: 'var(--gold)' }}>
              Trusted Partnerships
            </span>
          </div>

          <h2
            className="font-bold leading-[1.15] mb-6 text-white"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(30px,4vw,52px)' }}
          >
            Official Channel Partner for{' '}
            <em style={{ color: 'var(--gold)' }}>SWAD Digital Solutions</em>
          </h2>

          <p className="text-[16px] leading-[1.8] max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Official Regional Channel Partner of{' '}
            <a
              href="https://www.swaddigitalsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-opacity hover:opacity-80"
              style={{ color: 'var(--gold-light)', textDecoration: 'none' }}
            >
              SWAD Digital Solutions Ltd.
              <ExternalLink size={13} style={{ verticalAlign: 'middle' }} />
            </a>
            {' '}— authorised to represent and implement world-class software solutions tailored to
            modernise your business operations.
          </p>

          {/* Verified badge strip */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {['Authorised Reseller', 'Regional Coverage', 'Implementation Support', 'After-Sales Service'].map(b => (
              <div key={b} className="flex items-center gap-2">
                <span style={{ color: 'var(--gold)', fontSize: 14 }}>✓</span>
                <span className="text-[12px] tracking-wide" style={{ color: 'rgba(255,255,255,0.5)' }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Main active card */}
            <div
              className="md:col-span-2 rounded-lg p-8 transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, #1a2535 0%, #0f1a2a 100%)',
                border: '1px solid rgba(184,146,42,0.4)',
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="flex items-center justify-center rounded-lg text-[32px] flex-shrink-0"
                  style={{ width: 64, height: 64, background: 'rgba(184,146,42,0.15)', border: '1px solid rgba(184,146,42,0.25)' }}
                >
                  {products[active].icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-[26px] font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                      {products[active].name}
                    </h3>
                    <span
                      className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(184,146,42,0.2)', color: 'var(--gold)' }}
                    >
                      {products[active].tag}
                    </span>
                  </div>
                  <p className="text-[15px] leading-[1.85]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {products[active].desc}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-8 h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{ width: `${((active + 1) / products.length) * 100}%`, background: 'var(--gold)' }}
                />
              </div>
            </div>

            {/* Side mini-cards */}
            <div className="flex flex-col gap-4">
              {products.filter((_, i) => i !== active).slice(0, 2).map(p => (
                <div
                  key={p.name}
                  className="flex-1 rounded-lg p-5 cursor-pointer transition-all duration-200"
                  style={{ background: '#1a2535', border: '1px solid rgba(255,255,255,0.07)' }}
                  onClick={() => setActive(products.indexOf(p))}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(184,146,42,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[20px]">{p.icon}</span>
                    <span className="text-[15px] font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{p.name}</span>
                  </div>
                  <p className="text-[12.5px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {p.desc.substring(0, 80)}…
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dot nav + arrows */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer"
              style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(184,146,42,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300 cursor-pointer border-0"
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    background: i === active ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
                    padding: 0,
                  }}
                  aria-label={`Go to ${products[i].name}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer"
              style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(184,146,42,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* All products grid (always visible, below carousel) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-3">
          {products.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-200 cursor-pointer border-0"
              style={{
                background: i === active ? 'rgba(184,146,42,0.15)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${i === active ? 'rgba(184,146,42,0.4)' : 'rgba(255,255,255,0.07)'}`,
              }}
              onMouseEnter={e => { if (i !== active) e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              onMouseLeave={e => { if (i !== active) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
            >
              <span className="text-[22px]">{p.icon}</span>
              <span
                className="text-[12px] font-medium"
                style={{ color: i === active ? 'var(--gold)' : 'rgba(255,255,255,0.5)' }}
              >
                {p.name}
              </span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/2347011914628"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-medium tracking-wide uppercase text-[13px] px-8 py-4 rounded transition-all duration-200"
            style={{
              background: '#25D366',
              textDecoration: 'none',
              letterSpacing: '0.08em',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1ebe5d')}
            onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}
          >
            <MessageCircle size={18} />
            Talk to Us About SWAD Solutions
          </a>
          <p className="mt-4 text-[12px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Authorised Channel Partner · Nigeria Region
          </p>
        </div>
      </div>
    </section>
  );
}
