import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import {
  JOURNEY_MILESTONES,
  type JourneyMilestone,
  type ViewId,
} from '../../data/portfolioData';
import { TechIconBadge } from '../TechIcons';
import { TiltCard } from '../TiltCard';
import { ResilientImage } from '../ResilientImage';

interface JourneyViewProps {
  onNavigate: (view: ViewId) => void;
}

export function JourneyView({ onNavigate }: JourneyViewProps) {
  const [selectedMilestone, setSelectedMilestone] = useState<JourneyMilestone | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!selectedMilestone || selectedMilestone.slides.length < 2 || isPaused) return;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % selectedMilestone.slides.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [selectedMilestone, isPaused]);

  useEffect(() => {
    if (!selectedMilestone) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedMilestone(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedMilestone]);

  const openMilestone = (milestone: JourneyMilestone) => {
    setActiveSlide(0);
    setIsPaused(false);
    setSelectedMilestone(milestone);
  };

  const renderSlide = (idx: number) => {
    if (!selectedMilestone) return;
    const len = selectedMilestone.slides.length;
    setActiveSlide((idx + len) % len);
  };

  return (
    <section
      className="panel-enter relative w-full flex-1 min-h-[calc(100vh-var(--header-h)-66px)] flex flex-col justify-center py-8 lg:py-12"
      aria-labelledby="journey-title"
    >
      <div className="ambient-glow" aria-hidden="true" />
      <div className="nt-container relative z-[1]">
        {/* Top Section + Animated Timeline Arc SVG */}
        <div className="grid gap-6 items-center mb-[42px] min-[900px]:grid-cols-[1.12fr_0.88fr] min-[900px]:gap-8">
          <div>
            <div className="inline-flex items-center gap-2.5 text-[0.875rem] font-semibold text-[var(--text-muted)] mb-2">
              <span className="num-pill">04</span>
              <span>Journey</span>
            </div>
            <h1
              id="journey-title"
              className="m-0 mb-1.5 text-[clamp(1.75rem,3.4vw,2.4rem)] font-extrabold tracking-[-0.03em] leading-[1.15] text-balance"
            >
              From first lines of code to <span className="gradient-text">live products.</span>
            </h1>
            <p className="m-0 text-[var(--text-muted)] text-[0.96rem]">
              Click any milestone card to inspect the story and screenshots from that stage.
            </p>
          </div>

          <div
            className="glass px-5 py-4 border-[var(--border-strong)] relative overflow-hidden"
            aria-label="Progression from fundamentals to live client systems"
          >
            <svg className="w-full h-auto block" viewBox="0 0 420 90" fill="none">
              <path
                d="M44 52 Q130 18 210 46 T376 42"
                stroke="rgba(61,220,151,0.35)"
                strokeWidth="2.4"
                strokeDasharray="6 6"
                className="flow-line"
              />
              <g className="arc-dot d1">
                <circle
                  cx="44"
                  cy="52"
                  r="13"
                  fill="rgba(61,220,151,0.16)"
                  stroke="#3ddc97"
                  strokeWidth="1.6"
                />
                <text
                  x="44"
                  y="56"
                  textAnchor="middle"
                  fill="currentColor"
                  className="text-[var(--text)]"
                  fontSize="10"
                  fontWeight="700"
                  fontFamily="JetBrains Mono, monospace"
                >
                  01
                </text>
                <text
                  x="44"
                  y="78"
                  textAnchor="middle"
                  fill="currentColor"
                  className="text-[var(--text-muted)]"
                  fontSize="9.5"
                  fontWeight="600"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                >
                  Foundations
                </text>
              </g>
              <g className="arc-dot d2">
                <circle
                  cx="210"
                  cy="46"
                  r="14"
                  fill="rgba(61,220,151,0.22)"
                  stroke="#3ddc97"
                  strokeWidth="1.8"
                />
                <text
                  x="210"
                  y="50"
                  textAnchor="middle"
                  fill="currentColor"
                  className="text-[var(--text)]"
                  fontSize="10"
                  fontWeight="700"
                  fontFamily="JetBrains Mono, monospace"
                >
                  03
                </text>
                <text
                  x="210"
                  y="78"
                  textAnchor="middle"
                  fill="currentColor"
                  className="text-[var(--text-muted)]"
                  fontSize="9.5"
                  fontWeight="600"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                >
                  Full-Stack Web
                </text>
              </g>
              <g className="arc-dot d3">
                <circle
                  cx="376"
                  cy="42"
                  r="15"
                  fill="rgba(242,184,75,0.2)"
                  stroke="#f2b84b"
                  strokeWidth="1.8"
                />
                <text
                  x="376"
                  y="46"
                  textAnchor="middle"
                  fill="#f2b84b"
                  fontSize="10"
                  fontWeight="800"
                  fontFamily="JetBrains Mono, monospace"
                >
                  05
                </text>
                <text
                  x="376"
                  y="78"
                  textAnchor="middle"
                  fill="#f2b84b"
                  fontSize="9.5"
                  fontWeight="700"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                >
                  Client Systems
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* 5 3D Animated Milestone Cards */}
        <div
          className="grid gap-12 min-[700px]:grid-cols-2 lg:grid-cols-6"
          style={{ perspective: '1200px' }}
        >
          {JOURNEY_MILESTONES.map((step, idx) => (
            <TiltCard
              key={step.id}
              isGoldAccent={step.isNow}
              spinOnClick
              animationDelay={`${idx * -1.4}s`}
              onCardClick={() => openMilestone(step)}
              className={`p-6 flex flex-col justify-between gap-[18px] group ${
                step.spanWide ? 'lg:col-span-3' : 'lg:col-span-2'
              }`}
            >
              <div style={{ transform: 'translateZ(22px)', transformStyle: 'preserve-3d' }}>
                <div
                  className="flex items-center justify-between gap-2.5 mb-3"
                  style={{ transform: 'translateZ(8px)' }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-[34px] h-[34px] rounded-full bg-[var(--accent-dim)] border-[1.5px] border-[var(--border-strong)] text-[var(--accent)] font-mono-code text-[0.8rem] font-bold inline-flex items-center justify-center shadow-[0_6px_14px_rgba(0,0,0,0.24)] tabular-nums">
                      {step.num}
                    </span>
                    {step.isNow && (
                      <span className="px-2.5 py-[3px] rounded-full font-mono-code text-[0.7rem] font-bold bg-[var(--gold-dim)] border border-[rgba(242,184,75,0.45)] text-[var(--gold)]">
                        Now
                      </span>
                    )}
                  </div>
                  <span className="text-[0.78rem] font-semibold text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-1">
                    Explore →
                  </span>
                </div>

                <h2
                  className="m-0 mb-1.5 text-[1.16rem] font-extrabold tracking-[-0.02em]"
                  style={{ transform: 'translateZ(14px)' }}
                >
                  {step.title}
                </h2>

                <p
                  className="m-0 text-[0.9rem] text-[var(--text-muted)] leading-[1.5]"
                  style={{ transform: 'translateZ(6px)' }}
                >
                  {step.shortDesc}
                </p>
              </div>

              <div
                className="flex flex-wrap gap-[9px] items-center"
                style={{ transform: 'translateZ(28px)', transformStyle: 'preserve-3d' }}
              >
                {step.stack.map((tech) => (
                  <TechIconBadge key={`${step.id}-${tech}`} tech={tech} size="sm" />
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Milestone Popup Modal */}
      {selectedMilestone && (
        <div
          className="fixed inset-0 z-[160] bg-[rgba(4,9,7,0.78)] backdrop-blur-md flex items-center justify-center p-5 modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="journey-popup-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedMilestone(null);
          }}
        >
          <div className="glass modal-spring w-full max-w-[780px] max-h-[92vh] overflow-y-auto p-6 border-[var(--border-strong)]">
            <div className="flex items-start justify-between gap-3.5 mb-3">
              <div>
                <span className="num-pill">{selectedMilestone.modalNum}</span>
                <h2
                  id="journey-popup-title"
                  className="m-0 mt-1.5 text-[1.32rem] font-extrabold tracking-[-0.02em]"
                >
                  {selectedMilestone.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMilestone(null)}
                className="icon-btn cursor-pointer"
                aria-label="Close milestone preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="m-0 mb-4 text-[var(--text-muted)] text-[0.92rem] leading-[1.55]">
              {selectedMilestone.modalDesc}
            </p>

            <div
              className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[#0b120f]"
              aria-roledescription="carousel"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="flex transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {selectedMilestone.slides.map((slide) => (
                  <div
                    key={slide.label}
                    className="min-w-full flex items-center justify-center p-3.5"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 40%, rgba(61, 220, 151, 0.08), #09100d 75%)',
                    }}
                  >
                    <ResilientImage
                      src={slide.src}
                      alt={slide.label}
                      fallbackLabel={slide.label}
                      className="max-h-[320px] w-auto max-w-full rounded-xl shadow-[0_16px_36px_rgba(0,0,0,0.45)] object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-[rgba(8,13,11,0.92)] border-t border-white/[0.08] text-[#eef5f1]">
                <span className="text-[0.84rem] font-semibold text-[#c7d8cf]">
                  {selectedMilestone.slides[activeSlide]?.label}
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 mr-1" role="tablist">
                    {selectedMilestone.slides.map((slide, idx) => (
                      <button
                        key={slide.label}
                        type="button"
                        role="tab"
                        aria-selected={idx === activeSlide}
                        aria-label={`Slide ${idx + 1}`}
                        onClick={() => renderSlide(idx)}
                        className={`w-2 h-2 p-0 border-0 rounded-full cursor-pointer transition-transform ${
                          idx === activeSlide
                            ? 'bg-[var(--accent)] scale-120'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => renderSlide(activeSlide - 1)}
                    aria-label="Previous slide"
                    className="w-8 h-8 rounded-full border border-white/[0.18] bg-white/[0.07] text-[#eef5f1] inline-flex items-center justify-center text-[1.05rem] cursor-pointer hover:bg-[rgba(61,220,151,0.22)] hover:border-[var(--accent)]"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => renderSlide(activeSlide + 1)}
                    aria-label="Next slide"
                    className="w-8 h-8 rounded-full border border-white/[0.18] bg-white/[0.07] text-[#eef5f1] inline-flex items-center justify-center text-[1.05rem] cursor-pointer hover:bg-[rgba(61,220,151,0.22)] hover:border-[var(--accent)]"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
              <button
                type="button"
                onClick={() => {
                  setSelectedMilestone(null);
                  onNavigate('projects');
                }}
                className="nt-btn nt-btn-primary nt-btn-sm cursor-pointer"
              >
                View all projects →
              </button>
              <button
                type="button"
                onClick={() => setSelectedMilestone(null)}
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
