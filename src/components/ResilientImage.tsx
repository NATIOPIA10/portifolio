import { useState } from 'react';
import { Monitor } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ResilientImage({ src, alt, className = '', fallbackLabel }: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,rgba(61,220,151,0.12),rgba(242,184,75,0.08))] text-[var(--text-muted)] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Monitor className="w-7 h-7 text-[var(--accent)] opacity-80" />
        <span className="text-xs font-semibold">{fallbackLabel ?? alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
