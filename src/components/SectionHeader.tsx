interface SectionHeaderProps {
  tag: string;
  title: React.ReactNode;
  lead?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeader({ tag, title, lead, light, center }: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      <span
        className="block text-[11px] tracking-[.2em] uppercase font-medium mb-4"
        style={{ color: 'var(--gold)' }}
      >
        {tag}
      </span>
      <div
        className="h-[3px] mb-6 w-14"
        style={{ background: 'var(--gold)', margin: center ? '0 auto 24px' : undefined }}
      />
      <h2
        className="font-bold leading-[1.2] mb-5"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(30px,4vw,50px)',
          color: light ? '#fff' : 'var(--ink)',
        }}
      >
        {title}
      </h2>
      {lead && (
        <p
          className="text-[16px] leading-[1.8] max-w-xl"
          style={{ color: light ? 'rgba(255,255,255,0.6)' : 'var(--ink2)', margin: center ? '0 auto' : undefined }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
