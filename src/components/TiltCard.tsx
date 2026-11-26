import { useRef, useState, type ReactNode, type PointerEvent, type KeyboardEvent } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  animationDelay?: string;
  isGoldAccent?: boolean;
  onCardClick?: () => void;
  spinOnClick?: boolean;
  asButton?: boolean;
  id?: string;
  tabIndex?: number;
}

export function TiltCard({
  children,
  className = '',
  animationDelay,
  isGoldAccent = false,
  onCardClick,
  spinOnClick = false,
  asButton = false,
  id,
  tabIndex,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [spinning, setSpinning] = useState(false);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty('--rx', `${((0.5 - py) * 16).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${((px - 0.5) * 18).toFixed(2)}deg`);
    el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
    el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
  };

  const handlePointerLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--mx', '50%');
    el.style.setProperty('--my', '50%');
  };

  const triggerClick = () => {
    if (!onCardClick) return;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (spinOnClick && !reduced) {
      setSpinning(true);
      window.setTimeout(() => {
        setSpinning(false);
        onCardClick();
      }, 170);
    } else {
      onCardClick();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!onCardClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerClick();
    }
  };

  return (
    <div
      ref={cardRef}
      id={id}
      role={asButton || onCardClick ? 'button' : undefined}
      tabIndex={onCardClick ? (tabIndex ?? 0) : tabIndex}
      onClick={onCardClick ? triggerClick : undefined}
      onKeyDown={onCardClick ? handleKeyDown : undefined}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={animationDelay ? { animationDelay } : undefined}
      className={`glass tilt-3d-card ${isGoldAccent ? 'is-gold-accent' : ''} ${spinning ? 'is-spinning' : ''} ${onCardClick ? 'cursor-pointer text-left' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
