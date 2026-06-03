import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#sectors', label: 'Sectors' },
  { href: '#swad', label: 'SWAD Partner' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = links.map(l => l.href.slice(1));
      let current = '';
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: scrolled ? '58px' : '72px',
        background: 'rgba(255,255,255,0.97)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 no-underline" style={{ textDecoration: 'none' }}>
          <img
            src="/logo.jpg"
            alt="Estako Logo"
            className="rounded-full object-contain"
            style={{ width: 44, height: 44, border: '1.5px solid var(--border)' }}
          />
          <div className="leading-tight">
            <span className="block font-bold text-[17px]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--ink)' }}>
              Estako Services
            </span>
            <span className="block text-[10px] tracking-widest uppercase font-medium" style={{ color: 'var(--gold)' }}>
              Exploit By Grace
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13.5px] font-normal tracking-wide transition-colors duration-200"
                style={{
                  textDecoration: 'none',
                  color: active === l.href.slice(1) ? 'var(--gold)' : 'var(--ink2)',
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block text-white text-[13px] font-medium tracking-widest uppercase px-5 py-2.5 rounded transition-colors duration-200"
          style={{ background: 'var(--gold)', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
        >
          Get In Touch
        </a>

        <button
          className="md:hidden p-2 rounded border-0 bg-transparent cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-4 px-6 flex flex-col gap-4"
          style={{ background: 'rgba(255,255,255,0.98)', borderBottom: '1px solid var(--border)' }}
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] py-1"
              style={{ textDecoration: 'none', color: 'var(--ink2)' }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-white text-center text-[13px] font-medium tracking-widest uppercase px-5 py-3 rounded mt-2"
            style={{ background: 'var(--gold)', textDecoration: 'none' }}
            onClick={() => setMenuOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
}
