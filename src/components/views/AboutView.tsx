import { Code2, Cpu, GraduationCap, MapPin } from 'lucide-react';
import type { ViewId } from '../../data/portfolioData';

interface AboutViewProps {
  onNavigate: (view: ViewId) => void;
}

const FACT_TILES = [
  {
    label: 'Focus',
    value: 'Full-stack web development',
    icon: Code2,
  },
  {
    label: 'Education',
    value: 'BSc Computer Science, Dilla University',
    icon: GraduationCap,
  },
  {
    label: 'Location',
    value: 'Ethiopia',
    icon: MapPin,
  },
  {
    label: 'Interests',
    value: 'Architecture, databases, security, ML',
    icon: Cpu,
  },
];

export function AboutView({ onNavigate }: AboutViewProps) {
  return (
    <section
      className="panel-enter relative w-full flex-1 min-h-[calc(100vh-var(--header-h)-66px)] flex flex-col justify-center py-8 lg:py-12"
      aria-labelledby="about-title"
    >
      <div className="ambient-glow" aria-hidden="true" />
      <div className="nt-container relative z-[1]">
        <div className="flex flex-col gap-2.5 mb-7">
          <div className="inline-flex items-center gap-2.5 text-[0.875rem] font-semibold text-[var(--text-muted)]">
            <span className="num-pill">01</span>
            <span>About</span>
          </div>
          <h1
            id="about-title"
            className="m-0 text-[clamp(1.7rem,3.4vw,2.4rem)] font-extrabold tracking-[-0.03em] leading-[1.15] text-balance"
          >
            The short <span className="gradient-text">version.</span>
          </h1>
        </div>

        <div className="grid gap-6 min-[900px]:grid-cols-[1.08fr_1fr] items-stretch min-[900px]:gap-8">
          <div className="glass p-7 flex flex-col justify-between gap-5">
            <div>
              <p className="m-0 mb-2.5 text-[1.2rem] font-semibold leading-[1.5]">
                I&apos;m a Computer Science student at Dilla University and a full-stack developer.
              </p>
              <p className="m-0 text-[var(--text-muted)] text-[0.96rem] leading-[1.6]">
                I turn paper records and spreadsheets into simple systems that work: stock, sales,
                bookings, approvals. Fast to use, built around how your team actually works.
              </p>
            </div>

            {/* Animated Workflow Graphic: Records -> Build -> System */}
            <div
              className="px-4 py-3.5 rounded-[14px] bg-black/[0.03] dark:bg-white/[0.03] border border-[var(--border)]"
              aria-hidden="true"
            >
              <svg className="w-full h-auto block" viewBox="0 0 420 76" fill="none">
                <rect
                  x="6"
                  y="14"
                  width="96"
                  height="48"
                  rx="12"
                  fill="rgba(61,220,151,0.08)"
                  stroke="rgba(61,220,151,0.35)"
                />
                <path
                  d="M26 30h12v16H26zM30 35h5M30 39h5"
                  stroke="currentColor"
                  className="text-[var(--text-muted)]"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <text
                  x="45"
                  y="42"
                  fill="currentColor"
                  className="text-[var(--text)]"
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                >
                  Records
                </text>

                <line
                  x1="104"
                  y1="38"
                  x2="156"
                  y2="38"
                  stroke="#3ddc97"
                  strokeWidth="1.8"
                  className="flow-dash"
                />
                <polygon points="154,34 162,38 154,42" fill="#3ddc97" />

                <rect
                  x="162"
                  y="14"
                  width="96"
                  height="48"
                  rx="12"
                  fill="rgba(61,220,151,0.14)"
                  stroke="#3ddc97"
                />
                <path
                  d="M182 34l-4 4 4 4M192 34l4 4-4 4M188 32l-2 12"
                  stroke="#3ddc97"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text
                  x="204"
                  y="42"
                  fill="currentColor"
                  className="text-[var(--text)]"
                  fontSize="11"
                  fontWeight="700"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                >
                  Build
                </text>

                <line
                  x1="260"
                  y1="38"
                  x2="312"
                  y2="38"
                  stroke="#f2b84b"
                  strokeWidth="1.8"
                  className="flow-dash"
                />
                <polygon points="310,34 318,38 310,42" fill="#f2b84b" />

                <rect
                  x="318"
                  y="14"
                  width="96"
                  height="48"
                  rx="12"
                  fill="rgba(242,184,75,0.12)"
                  stroke="#f2b84b"
                  className="pulse-node"
                />
                <circle cx="337" cy="38" r="5" fill="#3ddc97" />
                <text
                  x="348"
                  y="42"
                  fill="currentColor"
                  className="text-[var(--text)]"
                  fontSize="11"
                  fontWeight="700"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                >
                  System
                </text>
              </svg>
            </div>
          </div>

          <div className="grid gap-3.5 min-[540px]:grid-cols-2">
            {FACT_TILES.map((tile) => {
              const Icon = tile.icon;
              return (
                <div
                  key={tile.label}
                  className="glass p-5 flex flex-col justify-between gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="w-[38px] h-[38px] rounded-[11px] bg-[var(--accent-dim)] border border-[var(--border-strong)] text-[var(--accent)] inline-flex items-center justify-center"
                      aria-label={tile.label}
                      title={tile.label}
                    >
                      <Icon className="w-[19px] h-[19px]" />
                    </span>
                    <span className="font-mono-code text-[0.7rem] uppercase tracking-[0.06em] text-[var(--accent)]">
                      {tile.label}
                    </span>
                  </div>
                  <span className="text-[0.95rem] font-semibold leading-[1.45]">{tile.value}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 glass px-6 py-4">
          <p className="m-0 text-sm text-[var(--text-muted)]">
            Curious how these fundamentals turned into live software across Ethiopia?
          </p>
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => onNavigate('journey')}
              className="nt-btn nt-btn-secondary nt-btn-sm cursor-pointer"
            >
              Explore my journey →
            </button>
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="nt-btn nt-btn-primary nt-btn-sm cursor-pointer"
            >
              View 6 projects →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
