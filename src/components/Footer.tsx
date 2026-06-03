export default function Footer() {
  return (
    <footer
      className="px-6 py-10 flex items-center justify-between flex-wrap gap-5"
      style={{ background: '#070d15', borderTop: '1px solid rgba(255,255,255,0.07)' }}
    >
      <a href="#home" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
        <img src="/logo.jpg" alt="Estako Logo" className="rounded-full object-contain" style={{ width: 36, height: 36, opacity: 0.8 }} />
        <span className="text-[15px] font-semibold" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'rgba(255,255,255,0.6)' }}>
          Estako Services (Nig) Co.
        </span>
      </a>
      <p className="italic text-[13px]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: 'var(--gold)' }}>
        Exploit By Grace
      </p>
      <p className="text-[12px] tracking-wide" style={{ color: 'rgba(255,255,255,0.35)' }}>
        © {new Date().getFullYear()} Estako Services (Nig) Co. All rights reserved. CAC Registered.
      </p>
    </footer>
  );
}
