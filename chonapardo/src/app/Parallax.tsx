'use client';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

/**
 * Subtle scroll parallax for stripes whose content is a canvas/SVG (so the
 * site's background-attachment:fixed trick doesn't apply). The inner layer is
 * slightly oversized (see .parallax-layer) and nudged as the stripe crosses the
 * viewport. Honors prefers-reduced-motion.
 */
export const Parallax = ({ children, strength = 26, className = '' }: { children: ReactNode; strength?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Off on touch devices, like the CSS background parallax (see globals.css):
    // a scroll-driven transform on an oversized will-change layer is pure cost on iOS.
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const center = rect.top + rect.height / 2;
      const prog = (center - vh / 2) / (vh / 2 + rect.height / 2); // -1..1
      el.style.transform = `translate3d(0, ${(-prog * strength).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`parallax-layer ${className}`}>
      {children}
    </div>
  );
};
