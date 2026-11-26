import type { TechKey } from '../data/portfolioData';

export const TECH_LABELS: Record<TechKey, string> = {
  react: 'React',
  nextjs: 'Next.js',
  supabase: 'Supabase',
  postgres: 'PostgreSQL',
  kotlin: 'Kotlin',
  python: 'Python',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  php: 'PHP',
  java: 'Java',
  c: 'C',
  tailwind: 'Tailwind CSS',
  vite: 'Vite',
  html5: 'HTML5',
  css3: 'CSS3',
  nodejs: 'Node.js',
  mysql: 'MySQL',
  sqlserver: 'SQL Server',
  github: 'Git & GitHub',
  vercel: 'Vercel',
  telegram: 'Telegram Bot API',
  electron: 'Electron',
  vscode: 'VS Code',
  intellij: 'IntelliJ IDEA',
  android: 'Android Studio',
};

export function TechGlyph({ tech, className = 'w-5 h-5' }: { tech: TechKey; className?: string }) {
  switch (tech) {
    case 'react':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.6" className={className}>
          <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M9 16V8l7.5 9.5M15 8v5.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'supabase':
      return (
        <svg viewBox="0 0 24 24" fill="#3ECF8E" className={className}>
          <path d="M13.5 3 5.5 13.5h6.2L10.5 21l8-10.5h-6.2L13.5 3Z" />
        </svg>
      );
    case 'postgres':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4D9DE0"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <ellipse cx="12" cy="6.5" rx="7" ry="3" />
          <path d="M5 6.5v11c0 1.66 3.13 3 7 3s7-1.34 7-3v-11" />
          <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
        </svg>
      );
    case 'kotlin':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <defs>
            <linearGradient id="kt-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#7F52FF" />
              <stop offset="1" stopColor="#C711E1" />
            </linearGradient>
          </defs>
          <path fill="url(#kt-grad)" d="M4 4h16l-8 8 8 8H4V4Z" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path
            fill="#3776AB"
            d="M12 3c-3 0-2.8 1.3-2.8 1.3v1.4h2.9v.5H8c-1.5 0-2.8.9-2.8 3.2 0 2.3 1.1 3.1 2.4 3.1h1.2v-1.6c0-1.4 1.2-2.6 2.7-2.6h3.4c1.2 0 2.1-.9 2.1-2.1V5.2C17 3.9 15.8 3 12 3Zm-1.5 1.2a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Z"
          />
          <path
            fill="#FFD43B"
            d="M12 21c3 0 2.8-1.3 2.8-1.3v-1.4h-2.9v-.5H16c1.5 0 2.8-.9 2.8-3.2 0-2.3-1.1-3.1-2.4-3.1h-1.2v1.6c0 1.4-1.2 2.6-2.7 2.6H9.1c-1.2 0-2.1.9-2.1 2.1v1c0 1.3 1.2 2.2 5 2.2Zm1.5-1.2a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2Z"
          />
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#F7DF1E" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fontSize="9"
            fontWeight="800"
            fill="#111"
            fontFamily="sans-serif"
          >
            JS
          </text>
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#3178C6" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fontSize="9"
            fontWeight="800"
            fill="#fff"
            fontFamily="sans-serif"
          >
            TS
          </text>
        </svg>
      );
    case 'php':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <ellipse cx="12" cy="12" rx="10" ry="6.5" fill="#777BB4" />
          <text
            x="12"
            y="14.5"
            textAnchor="middle"
            fontSize="7.5"
            fontWeight="800"
            fill="#fff"
            fontFamily="sans-serif"
          >
            php
          </text>
        </svg>
      );
    case 'java':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F89820"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M6 12h9v4a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-4Z" />
          <path d="M15 13h2a2 2 0 0 1 0 4h-2" />
          <path d="M9 8c0-1.2 1.5-1.5 1.5-3M12.5 8c0-1.2 1.5-1.5 1.5-3" />
        </svg>
      );
    case 'c':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <polygon points="12,2.5 20.5,7.2 20.5,16.8 12,21.5 3.5,16.8 3.5,7.2" fill="#283593" />
          <path
            d="M15 9.5a3.8 3.8 0 1 0 0 5"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" fill="#38BDF8" className={className}>
          <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3 1 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C15.6 7.2 14.5 6 12 6Zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3 1 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C10.6 13.2 9.5 12 7 12Z" />
        </svg>
      );
    case 'vite':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#646CFF" d="M20.5 5 12 20 3.5 5 12 7.2 20.5 5Z" />
          <path fill="#FFD62E" d="M14.5 3.5 9.8 11.2l2.6-.5-.9 4.8 4.8-6.8-2.6.5.8-5.7Z" />
        </svg>
      );
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#E34F26" d="M4 3h16l-1.5 16.2L12 21l-6.5-1.8L4 3Z" />
          <path
            fill="#fff"
            d="M7.5 7.5h9l-.3 2.2H9.8l.2 2.1h6l-.5 5.2-3.5 1-3.5-1-.2-2.6h2.2l.1 1.1 1.4.4 1.4-.4.2-1.8H8l-.5-6.2Z"
          />
        </svg>
      );
    case 'css3':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#1572B6" d="M4 3h16l-1.5 16.2L12 21l-6.5-1.8L4 3Z" />
          <path
            fill="#fff"
            d="M7.5 7.5h9l-.4 2.2h-4l3.8 1.5-.4 5.8-3.5 1-3.5-1-.2-2.6h2.2l.1 1.1 1.4.4 1.4-.4.2-1.9H8.3l-.2-2.1h4.1l-4.5-1.8-.2-2.2Z"
          />
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <polygon
            points="12,2.5 20.5,7.2 20.5,16.8 12,21.5 3.5,16.8 3.5,7.2"
            fill="none"
            stroke="#539E43"
            strokeWidth="1.8"
          />
          <text
            x="12"
            y="14.5"
            textAnchor="middle"
            fontSize="7"
            fontWeight="800"
            fill="#539E43"
            fontFamily="sans-serif"
          >
            JS
          </text>
        </svg>
      );
    case 'mysql':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00758F"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M4 16c2-5 5-8 9-8 3 0 5 1.8 7 4.5-1.5 0-2.8.5-3.5 1.5.5 1.2.2 2.5-.8 3.5-2.5-1-5-1.5-8-1.5H4Z" />
          <circle cx="15" cy="11" r=".8" fill="#F29111" stroke="none" />
        </svg>
      );
    case 'sqlserver':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#CC2927"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect x="4" y="4" width="16" height="5" rx="1.5" />
          <rect x="4" y="10.5" width="16" height="5" rx="1.5" />
          <path d="M4 17h16v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Z" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.2 9.2 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
        </svg>
      );
    case 'vercel':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <polygon points="12,4 21,19.5 3,19.5" />
        </svg>
      );
    case 'telegram':
      return (
        <svg viewBox="0 0 24 24" fill="#26A5E4" className={className}>
          <path d="M21 4.5 3.6 11.2c-1.2.5-1.2 1.2-.2 1.5l4.4 1.4 10.3-6.5c.5-.3.9-.1.6.2l-8.4 7.6-.3 4.6c.4 0 .6-.2.9-.4l2.2-2.1 4.5 3.3c.8.5 1.4.2 1.6-.8L22.2 5.7c.3-1.2-.5-1.7-1.2-1.2Z" />
        </svg>
      );
    case 'electron':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#9FEAF9" strokeWidth="1.6" className={className}>
          <circle cx="12" cy="12" r="2" fill="#9FEAF9" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(35 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-35 12 12)" />
        </svg>
      );
    case 'vscode':
      return (
        <svg viewBox="0 0 24 24" fill="#007ACC" className={className}>
          <path d="m17.5 3 3.5 1.7v14.6L17.5 21 8.5 13.7 4.7 16.6 3 15.7V8.3l1.7-.9 3.8 2.9L17.5 3Zm-.5 4.2-5.4 4.8 5.4 4.8V7.2Z" />
        </svg>
      );
    case 'intellij':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="3.5" fill="#1E1F22" stroke="#FE315D" strokeWidth="1.4" />
          <text
            x="12"
            y="14"
            textAnchor="middle"
            fontSize="8"
            fontWeight="800"
            fill="#fff"
            fontFamily="sans-serif"
          >
            IJ
          </text>
          <line x1="7" y1="17.5" x2="13" y2="17.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'android':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3DDC84"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M5 13a7 7 0 0 1 14 0v5H5v-5Z" />
          <path d="M8 7.5 6.5 5M16 7.5 17.5 5" />
          <circle cx="9.5" cy="11.5" r=".8" fill="#3DDC84" />
          <circle cx="14.5" cy="11.5" r=".8" fill="#3DDC84" />
        </svg>
      );
  }
}

interface TechIconBadgeProps {
  tech: TechKey;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function TechIconBadge({ tech, label, size = 'md', onClick }: TechIconBadgeProps) {
  const name = label ?? TECH_LABELS[tech];
  const boxSize =
    size === 'sm'
      ? 'w-[34px] h-[34px] rounded-[10px]'
      : size === 'lg'
        ? 'w-[42px] h-[42px] rounded-[12px]'
        : 'w-[40px] h-[40px] rounded-[12px]';
  const iconSize = size === 'sm' ? 'w-[18px] h-[18px]' : 'w-[21px] h-[21px]';

  if (onClick) {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className={`tech-icon ${boxSize} p-0 cursor-pointer shadow-[0_6px_14px_rgba(0,0,0,0.24)]`}
        data-name={name}
        title={name}
        aria-label={name}
      >
        <TechGlyph tech={tech} className={iconSize} />
      </button>
    );
  }

  return (
    <span
      className={`tech-icon ${boxSize}`}
      data-name={name}
      title={name}
      aria-label={name}
      tabIndex={0}
    >
      <TechGlyph tech={tech} className={iconSize} />
    </span>
  );
}
