import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import type { ViewId } from '../data/portfolioData';

interface HeaderProps {
  activeView: ViewId;
  onNavigate: (view: ViewId) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const NAV_ITEMS: { id: ViewId; label: string; mobileLabel: string }[] = [
  { id: 'home', label: 'Home', mobileLabel: 'Home' },
  { id: 'about', label: 'About', mobileLabel: '01 · About' },
  { id: 'skills', label: 'Skills', mobileLabel: '02 · Skills' },
  { id: 'projects', label: 'Projects', mobileLabel: '03 · Projects' },
  { id: 'journey', label: 'Journey', mobileLabel: '04 · Journey' },
  { id: 'contact', label: 'Contact', mobileLabel: '05 · Contact' },
];

export function Header({ activeView, onNavigate, theme, onToggleTheme }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (view: ViewId) => {
    onNavigate(view);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="nt-container h-full flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => handleSelect('home')}
            className="inline-flex items-center gap-2.5 font-bold text-[1.02rem] tracking-[-0.02em] whitespace-nowrap shrink-0 bg-transparent border-0 p-0 cursor-pointer"
          >
            <span className="logo-dot" aria-hidden="true" />
            <span>Natnael Tsedeke</span>
          </button>

          <nav
            className="hidden min-[920px]:flex items-center gap-1.5"
            role="tablist"
            aria-label="Portfolio sections"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeView === item.id}
                onClick={() => handleSelect(item.id)}
                className="nav-tab cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onToggleTheme}
              className="icon-btn cursor-pointer"
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              aria-pressed={theme === 'light'}
            >
              {theme === 'light' ? (
                <Moon className="w-[18px] h-[18px]" aria-hidden="true" />
              ) : (
                <Sun className="w-[18px] h-[18px]" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={() => handleSelect('contact')}
              className="hidden min-[920px]:inline-flex nt-btn nt-btn-primary nt-btn-sm cursor-pointer"
            >
              Let&apos;s talk →
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="icon-btn min-[920px]:hidden cursor-pointer"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? (
                <X className="w-[18px] h-[18px]" aria-hidden="true" />
              ) : (
                <Menu className="w-[18px] h-[18px]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-[70px] z-[95] bg-[var(--bg-header)] border-b border-[var(--border)] backdrop-blur-lg p-4 min-[920px]:hidden"
        >
          <div className="grid gap-1.5 nt-container px-0">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-selected={activeView === item.id}
                onClick={() => handleSelect(item.id)}
                className="nav-tab text-left py-3 px-3.5 rounded-xl cursor-pointer"
              >
                {item.mobileLabel}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleSelect('contact')}
              className="nt-btn nt-btn-primary nt-btn-sm mt-2 justify-center cursor-pointer"
            >
              Let&apos;s talk →
            </button>
          </div>
        </nav>
      )}
    </>
  );
}
