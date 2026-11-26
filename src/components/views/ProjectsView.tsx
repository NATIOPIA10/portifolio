import { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../../data/portfolioData';
import { TechIconBadge } from '../TechIcons';
import { TiltCard } from '../TiltCard';
import { ResilientImage } from '../ResilientImage';

export function ProjectsView() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!selectedProject || selectedProject.slides.length < 2 || isPaused) return;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % selectedProject.slides.length);
    }, 3800);
    return () => window.clearInterval(timer);
  }, [selectedProject, isPaused]);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedProject]);

  const openProject = (project: ProjectItem) => {
    setActiveSlide(0);
    setIsPaused(false);
    setSelectedProject(project);
  };

  const renderSlide = (idx: number) => {
    if (!selectedProject) return;
    const len = selectedProject.slides.length;
    setActiveSlide((idx + len) % len);
  };

  return (
    <section
      className="panel-enter relative w-full flex-1 min-h-[calc(100vh-var(--header-h)-66px)] flex flex-col justify-center py-8 lg:py-12"
      aria-labelledby="projects-title"
    >
      <div className="ambient-glow" aria-hidden="true" />
      <div className="nt-container relative z-[1]">
        <div className="mb-11">
          <div className="inline-flex items-center gap-2.5 text-[0.875rem] font-semibold text-[var(--text-muted)] mb-2">
            <span className="num-pill">03</span>
            <span>Projects</span>
          </div>
          <h1
            id="projects-title"
            className="m-0 mb-1.5 text-[clamp(1.75rem,3.4vw,2.4rem)] font-extrabold tracking-[-0.03em] leading-[1.15] text-balance"
          >
            Real products. Real <span className="gradient-text">businesses.</span>
          </h1>
          <p className="m-0 text-[var(--text-muted)] text-[0.96rem]">
            Click any project card to open its animated screenshot gallery.
          </p>
        </div>

        {/* 6 Project Cards Grid */}
        <div
          className="grid gap-12 min-[680px]:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: '1200px' }}
        >
          {PROJECTS.map((project, idx) => (
            <TiltCard
              key={project.id}
              isGoldAccent={project.isFeatured}
              spinOnClick
              animationDelay={`${idx * -1.2}s`}
              onCardClick={() => openProject(project)}
              className="p-[22px] flex flex-col justify-between gap-[18px] group"
            >
              <div style={{ transform: 'translateZ(22px)', transformStyle: 'preserve-3d' }}>
                <div
                  className="flex items-center justify-between gap-2 mb-2.5"
                  style={{ transform: 'translateZ(8px)' }}
                >
                  <span
                    className={`font-mono-code text-[0.7rem] font-bold px-[9px] py-[3px] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)] ${
                      project.isFeatured
                        ? 'bg-[var(--gold-dim)] text-[var(--gold)]'
                        : 'bg-[var(--accent-dim)] text-[var(--accent)]'
                    }`}
                  >
                    {project.tag}
                  </span>
                  <span className="text-[0.78rem] font-semibold text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-1">
                    Preview →
                  </span>
                </div>

                <h2
                  className="m-0 mb-2 text-[1.18rem] font-extrabold tracking-[-0.02em]"
                  style={{ transform: 'translateZ(14px)' }}
                >
                  {project.title}
                </h2>

                <p
                  className="m-0 text-[0.9rem] text-[var(--text-muted)] leading-[1.5]"
                  style={{ transform: 'translateZ(6px)' }}
                >
                  {project.shortDesc}
                </p>
              </div>

              <div
                className="flex flex-wrap gap-2 items-center"
                style={{ transform: 'translateZ(28px)', transformStyle: 'preserve-3d' }}
              >
                {project.stack.map((tech) => (
                  <TechIconBadge key={`${project.id}-${tech}`} tech={tech} size="sm" />
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Popup Gallery Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[160] bg-[rgba(4,9,7,0.78)] backdrop-blur-md flex items-center justify-center p-5 modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-popup-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="glass modal-spring w-full max-w-[880px] max-h-[92vh] overflow-y-auto p-6 border-[var(--border-strong)]">
            <div className="flex items-start justify-between gap-3.5 mb-3">
              <div>
                <span
                  className={`inline-block font-mono-code text-[0.7rem] font-bold px-[9px] py-[3px] rounded-full ${
                    selectedProject.isFeatured
                      ? 'bg-[var(--gold-dim)] text-[var(--gold)]'
                      : 'bg-[var(--accent-dim)] text-[var(--accent)]'
                  }`}
                >
                  {selectedProject.tag}
                </span>
                <h2
                  id="project-popup-title"
                  className="m-0 mt-1.5 text-[1.35rem] font-extrabold tracking-[-0.02em]"
                >
                  {selectedProject.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="icon-btn cursor-pointer"
                aria-label="Close preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="m-0 mb-4 text-[var(--text-muted)] text-[0.92rem]">
              {selectedProject.fullDesc}
            </p>

            {selectedProject.highlights && (
              <ul className="grid sm:grid-cols-2 gap-2 m-0 mb-4 p-0 list-none">
                {selectedProject.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[0.88rem]">
                    <span className="w-5 h-5 rounded-full bg-[var(--accent-dim)] text-[var(--accent)] inline-flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

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
                {selectedProject.slides.map((slide) => (
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
                      className="max-h-[390px] w-auto max-w-full rounded-xl shadow-[0_16px_36px_rgba(0,0,0,0.45)] object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-[rgba(8,13,11,0.9)] border-t border-white/[0.08] text-[#eef5f1]">
                <span className="text-[0.84rem] font-semibold text-[#c7d8cf]">
                  {selectedProject.slides[activeSlide]?.label}
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 mr-1" role="tablist">
                    {selectedProject.slides.map((slide, idx) => (
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
                    aria-label="Previous image"
                    className="w-8 h-8 rounded-full border border-white/[0.18] bg-white/[0.07] text-[#eef5f1] inline-flex items-center justify-center text-[1.05rem] cursor-pointer hover:bg-[rgba(61,220,151,0.22)] hover:border-[var(--accent)]"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => renderSlide(activeSlide + 1)}
                    aria-label="Next image"
                    className="w-8 h-8 rounded-full border border-white/[0.18] bg-white/[0.07] text-[#eef5f1] inline-flex items-center justify-center text-[1.05rem] cursor-pointer hover:bg-[rgba(61,220,151,0.22)] hover:border-[var(--accent)]"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
              <div className="flex flex-wrap gap-2.5">
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nt-btn nt-btn-primary nt-btn-sm"
                  >
                    Live product →
                  </a>
                )}
                {selectedProject.source && (
                  <a
                    href={selectedProject.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nt-btn nt-btn-secondary nt-btn-sm"
                  >
                    GitHub source →
                  </a>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
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
