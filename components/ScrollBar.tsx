'use client';

import { useEffect, useRef } from 'react';

export default function ScrollBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Read scroll position in the scroll listener, but write the resulting
    // style inside a rAF callback rather than synchronously. Writing style
    // straight from a scroll handler forces this fixed, top-of-viewport
    // layer to update on whatever cadence `scroll` events fire at — which on
    // iOS Safari can land mid-frame, during the same window it's already
    // animating the dynamic address bar. Deferring the write to the next
    // frame keeps this bar's updates on the browser's own paint schedule
    // instead of racing that animation.
    let rafId = 0;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
        bar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="scroll-bar" ref={barRef} aria-hidden="true" />;
}
