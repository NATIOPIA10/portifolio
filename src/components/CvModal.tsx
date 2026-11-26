import { useEffect } from 'react';
import { X } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[150] bg-[rgba(4,8,6,0.72)] backdrop-blur-md flex items-center justify-center p-5 modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="glass modal-spring w-full max-w-[500px] p-[26px] grid gap-3.5 border-[var(--border-strong)]">
        <div className="flex items-center justify-between gap-3">
          <h3 id="cv-modal-title" className="m-0 text-[1.2rem] font-extrabold">
            Natnael Tsedeke — CV
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="icon-btn cursor-pointer"
            aria-label="Close CV dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="m-0 text-[var(--text-muted)] text-[0.96rem] leading-relaxed">
          Full-stack web and app developer finishing my BSc in Computer Science at Dilla University,
          building websites, Android apps, and Telegram bots for businesses in Ethiopia.
        </p>

        <p className="m-0 text-[var(--text-muted)] text-[0.96rem] leading-relaxed">
          Need the PDF copy for your team or HR? Message me on Telegram and I&apos;ll send the
          latest version right away.
        </p>

        <div className="flex flex-wrap gap-2.5 mt-2">
          <a
            href="https://t.me/NATIOPIA_10"
            target="_blank"
            rel="noopener noreferrer"
            className="nt-btn nt-btn-primary nt-btn-sm"
          >
            Request CV on Telegram →
          </a>
          <button
            type="button"
            onClick={onClose}
            className="nt-btn nt-btn-ghost nt-btn-sm cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
