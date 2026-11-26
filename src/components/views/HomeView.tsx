import { useEffect, useState } from 'react';
import {
  HOME_CORE_TECH,
  HOME_STATS,
  IMAGES,
  SHOWCASE_PRODUCTS,
  type ViewId,
} from '../../data/portfolioData';
import { TechIconBadge } from '../TechIcons';
import { ResilientImage } from '../ResilientImage';

interface HomeViewProps {
  onNavigate: (view: ViewId) => void;
  onOpenCv: () => void;
}

export function HomeView({ onNavigate, onOpenCv }: HomeViewProps) {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveShowcase((prev) => (prev + 1) % SHOWCASE_PRODUCTS.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const currentProduct = SHOWCASE_PRODUCTS[activeShowcase];

  const goToShowcase = (index: number) => {
    setActiveShowcase((index + SHOWCASE_PRODUCTS.length) % SHOWCASE_PRODUCTS.length);
  };

  return (
    <section
      className="panel-enter w-full flex-1 min-h-[calc(100vh-var(--header-h)-66px)] flex flex-col justify-center py-6 lg:py-10"
      aria-label="Home"
    >
      <div className="nt-container relative">
        <div className="hero-glow" aria-hidden="true" />

        {/* Hero Split */}
        <div className="relative z-[1] grid gap-8 items-center min-[900px]:grid-cols-[1.25fr_0.75fr] min-[900px]:gap-14">
          <div>
            <div className="inline-flex items-center px-3.5 py-[5px] rounded-full bg-[var(--accent-dim)] border border-[var(--border-strong)] text-[var(--accent)] text-[0.85rem] font-semibold mb-3.5">
              Hello, I&apos;m Natnael
            </div>

            <h1 className="m-0 mb-3.5 text-[clamp(2.5rem,4.6vw,4.75rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-balance">
              Software that runs <span className="gradient-text">your business.</span>
            </h1>

            <p className="m-0 mb-2 text-[1.1rem] font-semibold">
              Full-stack developer · Dilla University, Ethiopia
            </p>

            <p className="m-0 mb-7 text-[1.06rem] text-[var(--text-muted)] max-w-[58ch]">
              Inventory, sales, bookings and campus systems. Built for Ethiopia.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-7">
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="nt-btn nt-btn-primary cursor-pointer"
              >
                View projects
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="nt-btn nt-btn-secondary cursor-pointer"
              >
                Let&apos;s talk
              </button>
              <button
                type="button"
                onClick={onOpenCv}
                className="nt-btn nt-btn-ghost cursor-pointer"
              >
                Download CV
              </button>
            </div>

            {/* Core Tech Icons */}
            <div className="flex flex-wrap gap-2.5 items-center" aria-label="Core technologies">
              {HOME_CORE_TECH.map((tech) => (
                <TechIconBadge key={tech} tech={tech} size="md" />
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="relative max-w-[360px] lg:max-w-[430px] 2xl:max-w-[480px] w-full mx-auto">
            <div
              className="absolute -inset-3.5 rounded-[30px] blur-[24px] opacity-70 z-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(61, 220, 151, 0.36), rgba(242, 184, 75, 0.25))',
              }}
              aria-hidden="true"
            />
            <div
              className="relative z-[1] p-2 rounded-[24px] shadow-[var(--shadow-card)]"
              style={{
                background:
                  'linear-gradient(145deg, rgba(61, 220, 151, 0.45), rgba(242, 184, 75, 0.28), var(--border))',
              }}
            >
              <ResilientImage
                src={IMAGES.portrait}
                alt="Portrait of Natnael Tsedeke, Full-Stack Developer"
                fallbackLabel="Natnael Tsedeke"
                className="w-full aspect-[3/4] object-cover rounded-[18px] bg-[#0d1612]"
              />
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="glass relative z-[1] mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-0 px-[22px] py-[18px]">
          {HOME_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-0.5 py-1.5 px-2.5 md:px-[18px] ${
                idx === 0 ? 'md:pl-1' : ''
              } ${idx < HOME_STATS.length - 1 ? 'md:border-r md:border-[var(--border)]' : ''}`}
            >
              <span className="text-[1.4rem] font-extrabold tabular-nums">{stat.value}</span>
              <span className="text-[0.84rem] text-[var(--text-muted)]">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Best Products Dual-Device Showcase Carousel */}
        <div className="relative z-[1] mt-8">
          <div className="flex items-center justify-between gap-3 mb-3.5">
            <h2 className="m-0 text-[1.15rem] font-bold tracking-[-0.02em]">
              Best <span className="gradient-text">products</span>
            </h2>
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="nt-btn nt-btn-ghost nt-btn-sm cursor-pointer"
            >
              See all 6 →
            </button>
          </div>

          <div
            className="glass relative overflow-hidden p-5"
            aria-roledescription="carousel"
            aria-label="Best products desktop and mobile previews"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden rounded-[14px]">
              <div
                className="flex transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${activeShowcase * 100}%)` }}
              >
                {SHOWCASE_PRODUCTS.map((product) => (
                  <div
                    key={product.name}
                    className="min-w-full grid gap-[18px] md:grid-cols-[1fr_210px] lg:grid-cols-[1fr_240px] xl:grid-cols-[1fr_270px] md:gap-7 items-end"
                  >
                    <div className="relative rounded-[14px] border border-[var(--border)] bg-[#0b120f] overflow-hidden shadow-[0_14px_32px_rgba(0,0,0,0.35)]">
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.04] border-b border-white/[0.07]">
                        <span className="w-[7px] h-[7px] rounded-full bg-white/[0.22]" />
                        <span className="w-[7px] h-[7px] rounded-full bg-white/[0.22]" />
                        <span className="w-[7px] h-[7px] rounded-full bg-white/[0.22]" />
                        <span className="ml-auto font-mono-code text-[0.68rem] text-[var(--text-muted)] truncate">
                          {product.desktopTag}
                        </span>
                      </div>
                      <ResilientImage
                        src={product.desktopImg}
                        alt={product.desktopAlt}
                        fallbackLabel={product.name}
                        className="w-full aspect-video max-h-[480px] object-cover object-top"
                      />
                    </div>

                    <div className="relative max-w-[210px] lg:max-w-[240px] xl:max-w-[270px] w-full mx-auto rounded-[22px] border-2 border-[var(--border-strong)] p-1.5 bg-[#0b120f] overflow-hidden shadow-[0_14px_32px_rgba(0,0,0,0.35)]">
                      <ResilientImage
                        src={product.mobileImg}
                        alt={product.mobileAlt}
                        fallbackLabel={`${product.name} Mobile`}
                        className="w-full aspect-[9/16] object-cover rounded-[15px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3.5 border-t border-[var(--border)]">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="featured-badge">{currentProduct.badge}</span>
                <h3 className="m-0 text-[1.05rem] font-extrabold">{currentProduct.name}</h3>
                <a
                  href={currentProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nt-btn nt-btn-secondary nt-btn-sm"
                >
                  Live →
                </a>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 mr-1" role="tablist" aria-label="Choose featured product">
                  {SHOWCASE_PRODUCTS.map((product, idx) => (
                    <button
                      key={product.name}
                      type="button"
                      role="tab"
                      aria-selected={idx === activeShowcase}
                      aria-label={product.name}
                      onClick={() => goToShowcase(idx)}
                      className={`w-2 h-2 p-0 border-0 rounded-full cursor-pointer transition-transform ${
                        idx === activeShowcase
                          ? 'bg-[var(--accent)] scale-120'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => goToShowcase(activeShowcase - 1)}
                  aria-label="Previous product"
                  className="w-[34px] h-[34px] rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text)] inline-flex items-center justify-center text-[1.1rem] cursor-pointer transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--accent-dim)]"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => goToShowcase(activeShowcase + 1)}
                  aria-label="Next product"
                  className="w-[34px] h-[34px] rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text)] inline-flex items-center justify-center text-[1.1rem] cursor-pointer transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--accent-dim)]"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
