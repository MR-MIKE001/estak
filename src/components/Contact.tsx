import { useState, useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

const serviceOptions = [
  'Equipment & Procurement', 'Technology Deployment', 'Manpower Resources',
  'Marketing & Promotion', 'General Contracting', 'Mentorship & Training',
  'SWAD Digital Solutions', 'Other / General Enquiry',
];

type FormState = { name: string; email: string; phone: string; service: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const refL = useRef<HTMLDivElement>(null);
  const refR = useRef<HTMLDivElement>(null);
  useEffect(() => {
    [refL, refR].forEach(r => {
      const el = r.current; if (!el) return;
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('animate-fade-up'); obs.disconnect(); } }, { threshold: 0.1 });
      obs.observe(el);
    });
  }, []);

  const submit = () => {
    const errs: typeof errors = {};
    (Object.keys(form) as (keyof FormState)[]).forEach(k => { if (!form[k].trim()) errs[k] = true; });
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const base: React.CSSProperties = { width: '100%', background: '#0f1620', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '13px 16px', fontFamily: "'DM Sans', sans-serif", fontSize: 14, borderRadius: 4, outline: 'none' };
  const f = (k: keyof FormState): React.CSSProperties => ({ ...base, borderColor: errors[k] ? '#e05555' : 'rgba(255,255,255,0.1)' });

  return (
    <section id="contact" className="py-24 px-6" style={{ background: 'var(--ink)' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div ref={refL} style={{ opacity: 0 }}>
          <SectionHeader
            tag="Get In Touch"
            title={<>Let's Work <em style={{ color: 'var(--gold)' }}>Together</em></>}
            lead="Whether you have a specific project in mind or want to explore how Estako Services can support your goals, we'd love to hear from you."
            light
          />
          {[
            { icon: '📍', label: 'Headquarters', lines: ['246 Oron Road, Mbiabong, Etoi', 'Uyo, Akwa Ibom State, Nigeria'], links: [] },
            { icon: '📞', label: 'Phone', lines: ['08037513027', '08022502773'], links: ['tel:08037513027', 'tel:08022502773'] },
            { icon: '✉️', label: 'Email', lines: ['godsoninyang63@gmail.com'], links: ['mailto:godsoninyang63@gmail.com'] },
          ].map(item => (
            <div key={item.label} className="flex items-start gap-4 mb-7">
              <div className="flex items-center justify-center rounded-full text-[18px] flex-shrink-0" style={{ width: 44, height: 44, background: 'rgba(184,146,42,0.15)', border: '1px solid rgba(184,146,42,0.3)' }}>
                {item.icon}
              </div>
              <div>
                <p className="text-[11px] tracking-[.12em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.label}</p>
                {item.lines.map((line, i) =>
                  item.links[i]
                    ? <a key={i} href={item.links[i]} className="block text-[15px] leading-[1.7]" style={{ color: 'var(--gold-light)', textDecoration: 'none' }}>{line}</a>
                    : <p key={i} className="text-[15px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.85)' }}>{line}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div ref={refR} className="p-10 rounded" style={{ opacity: 0, background: '#1a2535' }}>
          {(['name', 'email', 'phone'] as const).map(k => (
            <div key={k} className="mb-5">
              <label className="block text-[11px] tracking-[.1em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {k === 'name' ? 'Full Name' : k === 'email' ? 'Email Address' : 'Phone Number'}
              </label>
              <input
                type={k === 'email' ? 'email' : k === 'phone' ? 'tel' : 'text'}
                placeholder={k === 'name' ? 'Your full name' : k === 'email' ? 'your@email.com' : '+234 ...'}
                style={f(k)} value={form[k]}
                onChange={e => setForm({ ...form, [k]: e.target.value })}
                onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                onBlur={e => (e.target.style.borderColor = errors[k] ? '#e05555' : 'rgba(255,255,255,0.1)')}
              />
            </div>
          ))}
          <div className="mb-5">
            <label className="block text-[11px] tracking-[.1em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>Service Interest</label>
            <select style={{ ...f('service'), cursor: 'pointer' }} value={form.service}
              onChange={e => setForm({ ...form, service: e.target.value })}
              onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
              onBlur={e => (e.target.style.borderColor = errors.service ? '#e05555' : 'rgba(255,255,255,0.1)')}
            >
              <option value="">Select a service...</option>
              {serviceOptions.map(s => <option key={s} value={s} style={{ background: '#0f1620' }}>{s}</option>)}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-[11px] tracking-[.1em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>Message</label>
            <textarea rows={4} placeholder="Tell us about your project or enquiry..." style={{ ...f('message'), resize: 'vertical', minHeight: 120 }}
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
              onBlur={e => (e.target.style.borderColor = errors.message ? '#e05555' : 'rgba(255,255,255,0.1)')}
            />
          </div>
          <button onClick={submit} className="w-full text-white font-medium tracking-widest uppercase py-4 rounded text-[13.5px] transition-colors duration-200 cursor-pointer"
            style={{ background: submitted ? '#2e7d32' : 'var(--gold)', border: 'none', fontFamily: "'DM Sans', sans-serif" }}
            onMouseEnter={e => { if (!submitted) e.currentTarget.style.background = 'var(--gold-light)'; }}
            onMouseLeave={e => { if (!submitted) e.currentTarget.style.background = submitted ? '#2e7d32' : 'var(--gold)'; }}
          >
            {submitted ? 'Message Sent ✓' : 'Send Message →'}
          </button>
        </div>
      </div>
    </section>
  );
}
