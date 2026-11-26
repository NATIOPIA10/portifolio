import { useEffect, useState } from 'react';
import type { ViewId } from './data/portfolioData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { SkillsView } from './components/views/SkillsView';
import { ProjectsView } from './components/views/ProjectsView';
import { JourneyView } from './components/views/JourneyView';
import { ContactView } from './components/views/ContactView';

const VALID_VIEWS: ViewId[] = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];

function getInitialView(): ViewId {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace('#', '') as ViewId;
  return VALID_VIEWS.includes(hash) ? hash : 'home';
}

function getInitialTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = localStorage.getItem('nt_theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // ignore storage errors
  }
  return 'dark';
}

export default function App() {
  const [activeView, setActiveView] = useState<ViewId>(getInitialView);
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('nt_theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ViewId;
      if (VALID_VIEWS.includes(hash)) {
        setActiveView(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (view: ViewId) => {
    setActiveView(view);
    try {
      window.history.replaceState(null, '', `#${view}`);
    } catch {
      // ignore history errors
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <a
        href="#main"
        className="fixed -top-24 left-4 z-[200] px-[18px] py-2.5 rounded-full bg-[var(--accent)] text-[var(--accent-text)] font-bold text-sm transition-[top] duration-200 focus:top-4"
      >
        Skip to content
      </a>

      <Header
        activeView={activeView}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main id="main" className="w-full flex-1 flex flex-col relative">
        {activeView === 'home' && (
          <HomeView onNavigate={handleNavigate} onOpenCv={() => setCvOpen(true)} />
        )}
        {activeView === 'about' && <AboutView onNavigate={handleNavigate} />}
        {activeView === 'skills' && <SkillsView onNavigate={handleNavigate} />}
        {activeView === 'projects' && <ProjectsView />}
        {activeView === 'journey' && <JourneyView onNavigate={handleNavigate} />}
        {activeView === 'contact' && <ContactView />}
      </main>

      <Footer />
      <CvModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}
