export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ paddingTop: '72px', background: 'var(--cream)' }}
    >
      {/* Ghost BG text */}
      <span
        className="absolute pointer-events-none select-none leading-none"
        style={{
          right: '-2%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(80px,13vw,210px)',
          fontWeight: 700,
          color: 'transparent',
          WebkitTextStroke: '1px var(--border)',
          whiteSpace: 'nowrap',
        }}
        aria-hidden
      >
        Estako
      </span>

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="animate-fade-up">
            <div
              className="inline-block text-[11px] tracking-[.2em] uppercase font-medium px-4 py-1.5 rounded-sm mb-7"
              style={{ color: 'var(--gold)', border: '1px solid var(--gold)' }}
            >
              CAC Incorporated · Akwa Ibom State
            </div>

            <h1
              className="font-bold leading-[1.1] mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(40px,5vw,72px)',
                color: 'var(--ink)',
              }}
            >
              Building Nigeria's{' '}
              <em style={{ color: 'var(--gold)' }}>Future</em>,<br />
              One Contract at a Time
            </h1>

            <p className="text-[16px] leading-[1.85] mb-10 max-w-lg" style={{ color: 'var(--ink2)' }}>
              Estako Services (Nig) Co. is a multi-service provider, marketer and general contractor
              delivering equipment, technology, manpower resources and mentorship across Nigeria's most
              critical sectors.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-block text-white text-[13px] font-medium tracking-widest uppercase px-7 py-3.5 rounded transition-colors duration-200"
                style={{ background: 'var(--gold)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="inline-block text-[13px] font-medium tracking-widest uppercase px-7 py-3.5 rounded transition-all duration-200"
                style={{ border: '1.5px solid var(--ink)', color: 'var(--ink)', textDecoration: 'none' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--gold)';
                  e.currentTarget.style.color = 'var(--gold)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--ink)';
                  e.currentTarget.style.color = 'var(--ink)';
                }}
              >
                Contact Us
              </a>
            </div>

            <div
              className="flex gap-12 mt-12 pt-10 flex-wrap"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              {[
                { num: '6+', label: 'Sectors Served' },
                { num: '3+', label: 'Decades Experience' },
                { num: '100%', label: 'CAC Registered' },
              ].map(s => (
                <div key={s.label}>
                  <strong
                    className="block text-4xl font-bold"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--gold)' }}
                  >
                    {s.num}
                  </strong>
                  <span className="text-[11px] tracking-[.12em] uppercase" style={{ color: 'var(--muted)' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center relative">
            <span
              className="absolute rounded-full"
              style={{ width: 340, height: 340, border: '1px solid var(--border)' }}
            />
            <span
              className="absolute rounded-full"
              style={{ width: 280, height: 280, background: 'var(--gold-pale)', opacity: 0.4 }}
            />
            <img
              src="/logo.jpg"
              alt="Estako Services Logo"
              className="relative object-contain"
              style={{ width: 220, height: 220, zIndex: 2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
