import { useEffect, useState } from 'react';
import { Mail, MessageCircle, PenLine, Phone, X } from 'lucide-react';
import { QUICK_BRIEF_TEMPLATES } from '../../data/portfolioData';
import { TechGlyph } from '../TechIcons';
import { TiltCard } from '../TiltCard';

export function ContactView() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [briefOpen, setBriefOpen] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState(QUICK_BRIEF_TEMPLATES[0].id);
  const [briefText, setBriefText] = useState(QUICK_BRIEF_TEMPLATES[0].message);
  const [briefCopied, setBriefCopied] = useState(false);

  useEffect(() => {
    if (!briefOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setBriefOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [briefOpen]);

  const copyValue = (key: string, value: string) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(value).catch(() => {});
    }
    setCopiedKey(key);
    window.setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev));
    }, 1600);
  };

  const handleCopyBrief = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(briefText).catch(() => {});
    }
    setBriefCopied(true);
    window.setTimeout(() => setBriefCopied(false), 1600);
  };

  const telegramPrefillUrl = `https://t.me/NATIOPIA_10?text=${encodeURIComponent(briefText)}`;

  return (
    <section
      className="panel-enter relative w-full flex-1 min-h-[calc(100vh-var(--header-h)-66px)] flex flex-col justify-center py-8 lg:py-12"
      aria-labelledby="contact-title"
    >
      <div className="ambient-glow" aria-hidden="true" />
      <div className="nt-container relative z-[1]">
        {/* Top Row + Signal Card */}
        <div className="grid gap-6 items-center mb-11 min-[900px]:grid-cols-[1.12fr_0.88fr] min-[900px]:gap-8">
          <div>
            <div className="inline-flex items-center gap-2.5 text-[0.875rem] font-semibold text-[var(--text-muted)] mb-2">
              <span className="num-pill">05</span>
              <span>Contact</span>
            </div>
            <h1
              id="contact-title"
              className="m-0 mb-1.5 text-[clamp(1.75rem,3.4vw,2.4rem)] font-extrabold tracking-[-0.03em] leading-[1.15] text-balance"
            >
              Got a business problem? <span className="gradient-text">Tell me</span> about it.
            </h1>
            <p className="m-0 text-[var(--text-muted)] text-[0.96rem]">
              Telegram is the fastest way to reach me. Tap any card to connect or copy details.
            </p>
          </div>

          <div className="glass px-5 py-4 border-[var(--border-strong)] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="inline-flex items-center gap-2 font-mono-code text-[0.74rem] font-bold text-[var(--accent)]">
                <span className="pulse-ring" aria-hidden="true" />
                AVAILABLE FOR PROJECTS
              </span>
              <p className="m-0 text-base font-bold">Dilla University · Ethiopia</p>
              <p className="m-0 text-[0.84rem] text-[var(--text-muted)]">
                Web apps, Python bots, POS &amp; Android
              </p>
            </div>
            <a
              href="https://t.me/NATIOPIA_10"
              target="_blank"
              rel="noopener noreferrer"
              className="nt-btn nt-btn-primary nt-btn-sm"
            >
              Chat now →
            </a>
          </div>
        </div>

        {/* 6 3D Animated Contact Cards */}
        <div
          className="grid gap-12 min-[700px]:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: '1200px' }}
        >
          {/* 1. Telegram */}
          <TiltCard
            isGoldAccent
            animationDelay="0s"
            className="p-6 flex flex-col justify-between gap-4"
          >
            <div className="flex items-center justify-between gap-2.5" style={{ transform: 'translateZ(22px)' }}>
              <span
                className="w-10 h-10 rounded-xl bg-[var(--gold-dim)] border border-[rgba(242,184,75,0.45)] text-[var(--gold)] inline-flex items-center justify-center shadow-[0_8px_18px_rgba(0,0,0,0.24)]"
                aria-hidden="true"
              >
                <TechGlyph tech="telegram" className="w-5 h-5" />
              </span>
              <span className="font-mono-code text-[0.72rem] font-bold uppercase tracking-[0.06em] px-[9px] py-[3px] rounded-full bg-[var(--gold-dim)] text-[var(--gold)]">
                Telegram · Fastest
              </span>
            </div>
            <div className="grid gap-2" style={{ transform: 'translateZ(26px)' }}>
              <a
                href="https://t.me/NATIOPIA_10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.95rem] font-bold break-words inline-flex items-center gap-1.5 transition-colors hover:text-[var(--accent)]"
              >
                @NATIOPIA_10 →
              </a>
            </div>
            <p className="m-0 text-[0.85rem] text-[var(--text-muted)]" style={{ transform: 'translateZ(14px)' }}>
              Direct chat for project quotes and live demos.
            </p>
            <div className="flex items-center justify-between gap-2.5" style={{ transform: 'translateZ(28px)' }}>
              <button
                type="button"
                onClick={() => copyValue('telegram', '@NATIOPIA_10')}
                className={`px-3 py-[5px] rounded-full border text-[0.76rem] font-semibold cursor-pointer transition-all ${
                  copiedKey === 'telegram'
                    ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-dim)]'
                    : 'border-[var(--border)] bg-white/[0.05] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]'
                }`}
              >
                {copiedKey === 'telegram' ? 'Copied!' : 'Copy @handle'}
              </button>
            </div>
          </TiltCard>

          {/* 2. WhatsApp */}
          <TiltCard animationDelay="-1.15s" className="p-6 flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between gap-2.5" style={{ transform: 'translateZ(22px)' }}>
              <span
                className="w-10 h-10 rounded-xl bg-[var(--accent-dim)] border border-[var(--border-strong)] text-[var(--accent)] inline-flex items-center justify-center shadow-[0_8px_18px_rgba(0,0,0,0.24)]"
                aria-hidden="true"
              >
                <MessageCircle className="w-5 h-5" />
              </span>
              <span className="font-mono-code text-[0.72rem] font-bold uppercase tracking-[0.06em] px-[9px] py-[3px] rounded-full bg-[var(--accent-dim)] text-[var(--accent)]">
                WhatsApp
              </span>
            </div>
            <div className="grid gap-2" style={{ transform: 'translateZ(26px)' }}>
              <a
                href="https://wa.me/251984891542"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.95rem] font-bold break-words inline-flex items-center gap-1.5 transition-colors hover:text-[var(--accent)] tabular-nums"
              >
                0984 891 542 →
              </a>
            </div>
            <p className="m-0 text-[0.85rem] text-[var(--text-muted)]" style={{ transform: 'translateZ(14px)' }}>
              Available for voice notes and quick project calls.
            </p>
            <div className="flex items-center justify-between gap-2.5" style={{ transform: 'translateZ(28px)' }}>
              <button
                type="button"
                onClick={() => copyValue('whatsapp', '+251984891542')}
                className={`px-3 py-[5px] rounded-full border text-[0.76rem] font-semibold cursor-pointer transition-all ${
                  copiedKey === 'whatsapp'
                    ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-dim)]'
                    : 'border-[var(--border)] bg-white/[0.05] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]'
                }`}
              >
                {copiedKey === 'whatsapp' ? 'Copied!' : 'Copy number'}
              </button>
            </div>
          </TiltCard>

          {/* 3. Email */}
          <TiltCard animationDelay="-2.3s" className="p-6 flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between gap-2.5" style={{ transform: 'translateZ(22px)' }}>
              <span
                className="w-10 h-10 rounded-xl bg-[var(--accent-dim)] border border-[var(--border-strong)] text-[var(--accent)] inline-flex items-center justify-center shadow-[0_8px_18px_rgba(0,0,0,0.24)]"
                aria-hidden="true"
              >
                <Mail className="w-5 h-5" />
              </span>
              <span className="font-mono-code text-[0.72rem] font-bold uppercase tracking-[0.06em] px-[9px] py-[3px] rounded-full bg-[var(--accent-dim)] text-[var(--accent)]">
                Email
              </span>
            </div>
            <div className="grid gap-1.5" style={{ transform: 'translateZ(26px)' }}>
              <a
                href="mailto:natnaeltsedeke10@gmail.com"
                className="text-[0.95rem] font-bold break-words transition-colors hover:text-[var(--accent)]"
              >
                natnaeltsedeke10@gmail.com
              </a>
              <a
                href="mailto:natnael.tsedeke@du.edu.et"
                className="text-[0.95rem] font-bold break-words transition-colors hover:text-[var(--accent)]"
              >
                natnael.tsedeke@du.edu.et
              </a>
              <a
                href="mailto:contact@natnaeltsedeke.dev"
                className="text-[0.95rem] font-bold break-words transition-colors hover:text-[var(--accent)]"
              >
                contact@natnaeltsedeke.dev
              </a>
            </div>
            <div className="flex items-center justify-between gap-2.5" style={{ transform: 'translateZ(28px)' }}>
              <button
                type="button"
                onClick={() => copyValue('email', 'natnaeltsedeke10@gmail.com')}
                className={`px-3 py-[5px] rounded-full border text-[0.76rem] font-semibold cursor-pointer transition-all ${
                  copiedKey === 'email'
                    ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-dim)]'
                    : 'border-[var(--border)] bg-white/[0.05] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]'
                }`}
              >
                {copiedKey === 'email' ? 'Copied!' : 'Copy primary'}
              </button>
            </div>
          </TiltCard>

          {/* 4. Phone */}
          <TiltCard animationDelay="-3.45s" className="p-6 flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between gap-2.5" style={{ transform: 'translateZ(22px)' }}>
              <span
                className="w-10 h-10 rounded-xl bg-[var(--accent-dim)] border border-[var(--border-strong)] text-[var(--accent)] inline-flex items-center justify-center shadow-[0_8px_18px_rgba(0,0,0,0.24)]"
                aria-hidden="true"
              >
                <Phone className="w-5 h-5" />
              </span>
              <span className="font-mono-code text-[0.72rem] font-bold uppercase tracking-[0.06em] px-[9px] py-[3px] rounded-full bg-[var(--accent-dim)] text-[var(--accent)]">
                Phone
              </span>
            </div>
            <div className="grid gap-1.5" style={{ transform: 'translateZ(26px)' }}>
              <a
                href="tel:+251984891542"
                className="text-[0.95rem] font-bold break-words transition-colors hover:text-[var(--accent)] tabular-nums"
              >
                +251 984 891 542
              </a>
              <a
                href="tel:+251916891542"
                className="text-[0.95rem] font-bold break-words transition-colors hover:text-[var(--accent)] tabular-nums"
              >
                +251 916 891 542
              </a>
            </div>
            <p className="m-0 text-[0.85rem] text-[var(--text-muted)]" style={{ transform: 'translateZ(14px)' }}>
              Direct calls during business hours (EAT).
            </p>
            <div className="flex items-center justify-between gap-2.5" style={{ transform: 'translateZ(28px)' }}>
              <button
                type="button"
                onClick={() => copyValue('phone', '+251984891542')}
                className={`px-3 py-[5px] rounded-full border text-[0.76rem] font-semibold cursor-pointer transition-all ${
                  copiedKey === 'phone'
                    ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-dim)]'
                    : 'border-[var(--border)] bg-white/[0.05] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]'
                }`}
              >
                {copiedKey === 'phone' ? 'Copied!' : 'Copy phone'}
              </button>
            </div>
          </TiltCard>

          {/* 5. GitHub */}
          <TiltCard animationDelay="-4.6s" className="p-6 flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between gap-2.5" style={{ transform: 'translateZ(22px)' }}>
              <span
                className="w-10 h-10 rounded-xl bg-[var(--accent-dim)] border border-[var(--border-strong)] text-[var(--accent)] inline-flex items-center justify-center shadow-[0_8px_18px_rgba(0,0,0,0.24)]"
                aria-hidden="true"
              >
                <TechGlyph tech="github" className="w-5 h-5" />
              </span>
              <span className="font-mono-code text-[0.72rem] font-bold uppercase tracking-[0.06em] px-[9px] py-[3px] rounded-full bg-[var(--accent-dim)] text-[var(--accent)]">
                GitHub
              </span>
            </div>
            <div className="grid gap-1.5" style={{ transform: 'translateZ(26px)' }}>
              <a
                href="https://github.com/NATIOPIA10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.95rem] font-bold break-words transition-colors hover:text-[var(--accent)]"
              >
                github.com/NATIOPIA10 →
              </a>
              <a
                href="https://github.com/NATIOPIA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.95rem] font-bold break-words transition-colors hover:text-[var(--accent)]"
              >
                github.com/NATIOPIA →
              </a>
            </div>
            <p className="m-0 text-[0.85rem] text-[var(--text-muted)]" style={{ transform: 'translateZ(14px)' }}>
              Source code, releases, and live repositories.
            </p>
            <div className="flex items-center justify-between gap-2.5" style={{ transform: 'translateZ(28px)' }}>
              <button
                type="button"
                onClick={() => copyValue('github', 'https://github.com/NATIOPIA10')}
                className={`px-3 py-[5px] rounded-full border text-[0.76rem] font-semibold cursor-pointer transition-all ${
                  copiedKey === 'github'
                    ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-dim)]'
                    : 'border-[var(--border)] bg-white/[0.05] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]'
                }`}
              >
                {copiedKey === 'github' ? 'Copied!' : 'Copy profile'}
              </button>
            </div>
          </TiltCard>

          {/* 6. Quick Brief Trigger */}
          <TiltCard
            asButton
            animationDelay="-5.75s"
            onCardClick={() => setBriefOpen(true)}
            className="p-6 flex flex-col justify-between gap-4 group"
          >
            <div className="flex items-center justify-between gap-2.5" style={{ transform: 'translateZ(22px)' }}>
              <span
                className="w-10 h-10 rounded-xl bg-[var(--gold-dim)] border border-[rgba(242,184,75,0.45)] text-[var(--gold)] inline-flex items-center justify-center shadow-[0_8px_18px_rgba(0,0,0,0.24)]"
                aria-hidden="true"
              >
                <PenLine className="w-5 h-5" />
              </span>
              <span className="font-mono-code text-[0.72rem] font-bold uppercase tracking-[0.06em] px-[9px] py-[3px] rounded-full bg-[var(--gold-dim)] text-[var(--gold)]">
                Quick Brief
              </span>
            </div>
            <div className="grid gap-2" style={{ transform: 'translateZ(26px)' }}>
              <span className="text-[0.95rem] font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                Start a project brief →
              </span>
            </div>
            <p className="m-0 text-[0.85rem] text-[var(--text-muted)]" style={{ transform: 'translateZ(14px)' }}>
              Pick your system type and generate a ready-to-send message.
            </p>
            <div className="flex items-center justify-between gap-2.5" style={{ transform: 'translateZ(28px)' }}>
              <span className="px-3 py-[5px] rounded-full border border-[var(--border)] bg-white/[0.05] text-[0.76rem] font-semibold text-[var(--text-muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] group-hover:bg-[var(--accent-dim)] transition-all">
                Open builder
              </span>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Quick Brief Popup Modal */}
      {briefOpen && (
        <div
          className="fixed inset-0 z-[160] bg-[rgba(4,9,7,0.78)] backdrop-blur-md flex items-center justify-center p-5 modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="inquiry-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setBriefOpen(false);
          }}
        >
          <div className="glass modal-spring w-full max-w-[560px] p-6 border-[var(--border-strong)]">
            <div className="flex items-center justify-between gap-3 mb-3.5">
              <h2 id="inquiry-title" className="m-0 text-[1.25rem] font-extrabold">
                Quick Project Brief
              </h2>
              <button
                type="button"
                onClick={() => setBriefOpen(false)}
                className="icon-btn cursor-pointer"
                aria-label="Close brief builder"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-3.5" role="tablist" aria-label="Project type">
              {QUICK_BRIEF_TEMPLATES.map((tpl) => (
                <button
                  key={tpl.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedTemplateId === tpl.id}
                  onClick={() => {
                    setSelectedTemplateId(tpl.id);
                    setBriefText(tpl.message);
                  }}
                  className={`px-3 py-1.5 rounded-full border text-[0.8rem] font-semibold cursor-pointer transition-all ${
                    selectedTemplateId === tpl.id
                      ? 'bg-[var(--accent-dim)] border-[var(--border-strong)] text-[var(--accent)]'
                      : 'border-[var(--border)] bg-white/[0.04] text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                >
                  {tpl.label}
                </button>
              ))}
            </div>

            <textarea
              value={briefText}
              onChange={(e) => setBriefText(e.target.value)}
              aria-label="Project message"
              className="w-full min-h-[110px] p-3.5 rounded-[14px] border border-[var(--border)] bg-black/[0.04] dark:bg-black/25 text-[var(--text)] resize-y mb-3.5 leading-[1.5] focus:border-[var(--border-strong)] outline-none"
            />

            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={telegramPrefillUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nt-btn nt-btn-primary nt-btn-sm"
                >
                  Send on Telegram →
                </a>
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="nt-btn nt-btn-secondary nt-btn-sm cursor-pointer"
                >
                  {briefCopied ? 'Copied!' : 'Copy message'}
                </button>
              </div>
              <button
                type="button"
                onClick={() => setBriefOpen(false)}
                className="nt-btn nt-btn-ghost nt-btn-sm cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
