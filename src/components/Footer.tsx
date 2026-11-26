import { Send } from 'lucide-react';

export function Footer() {
  return (
    <>
      <footer className="w-full border-t border-[var(--border)] py-[22px]">
        <div className="nt-container flex flex-wrap items-center justify-between gap-3 text-[0.85rem] text-[var(--text-muted)]">
          <span>© 2026 Natnael Tsedeke · Dilla University, Ethiopia</span>
          <span>Built for Ethiopia</span>
        </div>
      </footer>

      <div className="fixed right-[18px] bottom-[18px] z-[90]" aria-label="Quick actions">
        <a
          href="https://t.me/NATIOPIA_10"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message on Telegram"
          title="Message on Telegram"
          className="w-11 h-11 rounded-full bg-[var(--accent)] text-[var(--accent-text)] inline-flex items-center justify-center shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          <Send className="w-[18px] h-[18px]" aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
