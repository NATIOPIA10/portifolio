import { useEffect, useState } from 'react';
import { Code2, Database, Monitor, Wrench, X } from 'lucide-react';
import {
  SKILL_GROUPS,
  SKILL_META,
  SKILL_PROJECTS_CATALOG,
  type SkillCategoryId,
  type SkillCatalogProjectKey,
  type TechKey,
  type ViewId,
} from '../../data/portfolioData';
import { TechGlyph, TechIconBadge } from '../TechIcons';
import { TiltCard } from '../TiltCard';
import { ResilientImage } from '../ResilientImage';

interface SkillsViewProps {
  onNavigate: (view: ViewId) => void;
}

const FILTER_OPTIONS: { id: SkillCategoryId; label: string }[] = [
  { id: 'all', label: 'All Stack' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & Data' },
  { id: 'tools', label: 'Tools & Platforms' },
];

function CategoryIcon({ category }: { category: Exclude<SkillCategoryId, 'all'> }) {
  switch (category) {
    case 'languages':
      return <Code2 className="w-5 h-5" />;
    case 'frontend':
      return <Monitor className="w-5 h-5" />;
    case 'backend':
      return <Database className="w-5 h-5" />;
    case 'tools':
      return <Wrench className="w-5 h-5" />;
  }
}

export function SkillsView({ onNavigate }: SkillsViewProps) {
  const [filter, setFilter] = useState<SkillCategoryId>('all');
  const [selectedSkillKey, setSelectedSkillKey] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const visibleGroups =
    filter === 'all' ? SKILL_GROUPS : SKILL_GROUPS.filter((g) => g.id === filter);

  const activeMeta = selectedSkillKey ? SKILL_META[selectedSkillKey] : null;
  const slides: { key: SkillCatalogProjectKey; tag: string; title: string; desc: string; img: string }[] =
    activeMeta
      ? activeMeta.keys.map((k) => ({ key: k, ...SKILL_PROJECTS_CATALOG[k] }))
      : [];

  useEffect(() => {
    if (!selectedSkillKey || slides.length < 2 || isPaused) return;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [selectedSkillKey, slides.length, isPaused]);

  useEffect(() => {
    if (!selectedSkillKey) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSkillKey(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedSkillKey]);

  const openSkillInspector = (key: string) => {
    if (!SKILL_META[key]) return;
    setActiveSlide(0);
    setIsPaused(false);
    setSelectedSkillKey(key);
  };

  const renderSlide = (idx: number) => {
    if (slides.length === 0) return;
    setActiveSlide((idx + slides.length) % slides.length);
  };

  return (
    <section
      className="panel-enter relative w-full flex-1 min-h-[calc(100vh-var(--header-h)-66px)] flex flex-col justify-center py-8 lg:py-12"
      aria-labelledby="skills-title"
    >
      <div className="ambient-glow" aria-hidden="true" />
      <div className="nt-container relative z-[1]">
        {/* Top Row: Title + Animated Stack Pipeline SVG */}
        <div className="grid gap-5 items-center mb-6 min-[900px]:grid-cols-[1.1fr_0.9fr] min-[900px]:gap-7">
          <div>
            <div className="inline-flex items-center gap-2.5 text-[0.875rem] font-semibold text-[var(--text-muted)] mb-2">
              <span className="num-pill">02</span>
              <span>Skills</span>
            </div>
            <h1
              id="skills-title"
              className="m-0 mb-1.5 text-[clamp(1.75rem,3.4vw,2.4rem)] font-extrabold tracking-[-0.03em] leading-[1.15] text-balance"
            >
              Tools I <span className="gradient-text">build</span> with.
            </h1>
            <p className="m-0 text-[var(--text-muted)] text-[0.96rem]">
              Click any icon or 3D card to see where each tool runs in production.
            </p>
          </div>

          {/* Animated Stack Architecture SVG Card */}
          <div
            className="glass px-5 py-4 border-[var(--border-strong)] relative overflow-hidden"
            aria-label="Full-stack architecture flow"
          >
            <svg className="w-full h-auto block" viewBox="0 0 420 96" fill="none">
              <line
                x1="88"
                y1="48"
                x2="170"
                y2="48"
                stroke="#3ddc97"
                strokeWidth="2.2"
                className="flow-line"
              />
              <line
                x1="250"
                y1="48"
                x2="332"
                y2="48"
                stroke="#f2b84b"
                strokeWidth="2.2"
                className="flow-line"
              />
              <g className="pipe-node n1">
                <rect
                  x="12"
                  y="16"
                  width="76"
                  height="64"
                  rx="14"
                  fill="rgba(61,220,151,0.12)"
                  stroke="#3ddc97"
                  strokeWidth="1.4"
                />
                <rect x="26" y="30" width="48" height="22" rx="4" stroke="#61DAFB" strokeWidth="1.6" />
                <text
                  x="50"
                  y="68"
                  textAnchor="middle"
                  fill="currentColor"
                  className="text-[var(--text)]"
                  fontSize="9.5"
                  fontWeight="700"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                >
                  UI &amp; Mobile
                </text>
              </g>
              <g className="pipe-node n2">
                <rect
                  x="172"
                  y="16"
                  width="76"
                  height="64"
                  rx="14"
                  fill="rgba(242,184,75,0.12)"
                  stroke="#f2b84b"
                  strokeWidth="1.4"
                />
                <path
                  d="M210 27c-5 0-4.7 2.2-4.7 2.2v2.3h4.8v.8h-6.8c-2.5 0-4.7 1.5-4.7 5.3 0 3.8 1.8 5.2 4 5.2h2v-2.7c0-2.3 2-4.3 4.5-4.3h5.7c2 0 3.5-1.5 3.5-3.5V30.6c0-2.1-2-3.6-8.3-3.6Z"
                  fill="#3776AB"
                />
                <text
                  x="210"
                  y="68"
                  textAnchor="middle"
                  fill="currentColor"
                  className="text-[var(--text)]"
                  fontSize="9.5"
                  fontWeight="700"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                >
                  Python &amp; API
                </text>
              </g>
              <g className="pipe-node n3">
                <rect
                  x="332"
                  y="16"
                  width="76"
                  height="64"
                  rx="14"
                  fill="rgba(61,220,151,0.12)"
                  stroke="#3ddc97"
                  strokeWidth="1.4"
                />
                <ellipse cx="370" cy="34" rx="12" ry="5" stroke="#3ECF8E" strokeWidth="1.6" />
                <path
                  d="M358 34v14c0 2.8 5.4 5 12 5s12-2.2 12-5V34"
                  stroke="#3ECF8E"
                  strokeWidth="1.6"
                />
                <text
                  x="370"
                  y="68"
                  textAnchor="middle"
                  fill="currentColor"
                  className="text-[var(--text)]"
                  fontSize="9.5"
                  fontWeight="700"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                >
                  Data &amp; Cloud
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 mb-9" role="tablist" aria-label="Filter skill categories">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              role="tab"
              aria-selected={filter === opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-4 py-[7px] rounded-full border text-[0.84rem] font-semibold whitespace-nowrap shrink-0 cursor-pointer transition-all duration-200 ${
                filter === opt.id
                  ? 'bg-[var(--accent-dim)] border-[var(--border-strong)] text-[var(--accent)]'
                  : 'bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* 3D Animated Skill Cards Grid */}
        <div
          className="grid gap-12 min-[720px]:grid-cols-2"
          style={{ perspective: '1200px' }}
        >
          {visibleGroups.map((group, idx) => (
            <TiltCard
              key={group.id}
              isGoldAccent={group.isCore}
              spinOnClick
              animationDelay={`${idx * -1.8}s`}
              onCardClick={() => openSkillInspector(`cat_${group.id}`)}
              className="p-6 flex flex-col justify-between gap-[18px] group"
            >
              <div
                className="flex items-center justify-between gap-3"
                style={{ transform: 'translateZ(22px)', transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-10 h-10 rounded-xl border inline-flex items-center justify-center shrink-0 shadow-[0_8px_18px_rgba(0,0,0,0.25)] ${
                      group.isCore
                        ? 'bg-[var(--gold-dim)] border-[rgba(242,184,75,0.45)] text-[var(--gold)]'
                        : 'bg-[var(--accent-dim)] border-[var(--border-strong)] text-[var(--accent)]'
                    }`}
                    aria-hidden="true"
                  >
                    <CategoryIcon category={group.id} />
                  </span>
                  <h2 className="m-0 text-[1.15rem] font-extrabold tracking-[-0.02em]">
                    {group.title}
                  </h2>
                </div>
                <span className="font-mono-code text-[0.72rem] font-bold text-[var(--accent)] px-2.5 py-1 rounded-full bg-[var(--accent-dim)] whitespace-nowrap tabular-nums">
                  {group.countLabel}
                </span>
              </div>

              <div
                className="flex flex-wrap gap-2.5 items-center"
                style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
              >
                {group.skills.map((skill) => (
                  <TechIconBadge
                    key={`${group.id}-${skill.key}`}
                    tech={skill.key as TechKey}
                    label={skill.name}
                    size="lg"
                    onClick={() => openSkillInspector(skill.key)}
                  />
                ))}
              </div>

              <div
                className="flex items-center justify-between text-[0.78rem] text-[var(--text-muted)]"
                style={{ transform: 'translateZ(14px)' }}
              >
                <span>{group.footerLabel}</span>
                <span className="text-[var(--accent)] font-semibold transition-transform duration-200 group-hover:translate-x-1">
                  Inspect →
                </span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Skill Inspector Popup Modal */}
      {activeMeta && (
        <div
          className="fixed inset-0 z-[160] bg-[rgba(4,9,7,0.78)] backdrop-blur-md flex items-center justify-center p-5 modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="skill-popup-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedSkillKey(null);
          }}
        >
          <div className="glass modal-spring w-full max-w-[720px] p-6 border-[var(--border-strong)]">
            <div className="flex items-center justify-between gap-3.5 mb-3.5">
              <div className="flex items-center gap-3">
                <span
                  className="w-[46px] h-[46px] rounded-[13px] border border-[var(--border-strong)] bg-[var(--accent-dim)] text-[var(--accent)] inline-flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  {activeMeta.iconKey ? (
                    <TechGlyph tech={activeMeta.iconKey} className="w-6 h-6" />
                  ) : activeMeta.categoryKey ? (
                    <CategoryIcon category={activeMeta.categoryKey} />
                  ) : null}
                </span>
                <div>
                  <h2
                    id="skill-popup-title"
                    className="m-0 text-[1.28rem] font-extrabold tracking-[-0.02em]"
                  >
                    {activeMeta.name}
                  </h2>
                  <p className="m-0 mt-0.5 text-[0.84rem] text-[var(--accent)] font-mono-code">
                    {activeMeta.role}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSkillKey(null)}
                className="icon-btn cursor-pointer"
                aria-label="Close skill preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

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
                {slides.map((slide) => (
                  <div
                    key={slide.key}
                    className="min-w-full p-[18px] grid gap-4 min-[600px]:grid-cols-[1.1fr_0.9fr] items-center"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 40%, rgba(61, 220, 151, 0.08), #09100d 75%)',
                    }}
                  >
                    <ResilientImage
                      src={slide.img}
                      alt={slide.title}
                      fallbackLabel={slide.title}
                      className="w-full max-h-[230px] object-cover rounded-xl shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
                    />
                    <div>
                      <span className="inline-block font-mono-code text-[0.7rem] font-bold px-2.5 py-[3px] rounded-full bg-[rgba(61,220,151,0.16)] text-[#3ddc97] mb-2">
                        {slide.tag}
                      </span>
                      <h3 className="m-0 mb-1.5 text-[1.05rem] font-extrabold text-[#eef5f1]">
                        {slide.title}
                      </h3>
                      <p className="m-0 text-[0.88rem] text-[#a7bcb1] leading-[1.5]">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-[rgba(8,13,11,0.92)] border-t border-white/[0.08] text-[#eef5f1]">
                <span className="text-[0.82rem] font-semibold text-[#c7d8cf] tabular-nums">
                  {slides[activeSlide]?.title} ({activeSlide + 1}/{slides.length})
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 mr-1" role="tablist">
                    {slides.map((s, idx) => (
                      <button
                        key={s.key}
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
                    aria-label="Previous project"
                    className="w-8 h-8 rounded-full border border-white/[0.18] bg-white/[0.07] text-[#eef5f1] inline-flex items-center justify-center text-[1.05rem] cursor-pointer hover:bg-[rgba(61,220,151,0.22)] hover:border-[var(--accent)]"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => renderSlide(activeSlide + 1)}
                    aria-label="Next project"
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
                  setSelectedSkillKey(null);
                  onNavigate('projects');
                }}
                className="nt-btn nt-btn-primary nt-btn-sm cursor-pointer"
              >
                Open all projects →
              </button>
              <button
                type="button"
                onClick={() => setSelectedSkillKey(null)}
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
