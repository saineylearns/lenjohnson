'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Puts every new page at the top.
 *
 * The App Router does this itself, but it does it by writing to
 * `document.documentElement.scrollTop`, which is only the page scroller on
 * some browsers and under some CSS. On iOS Safari that write was landing on
 * the wrong box and the story page was opening at whatever offset you had
 * reached on the home page. `window.scrollTo` always addresses the viewport,
 * whichever element happens to be scrolling it.
 *
 * Back and forward are left alone: the browser restoring you to where you
 * were is the whole point of a back button, so a pop is skipped and only a
 * fresh navigation resets.
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  const cameFromHistory = useRef(false);

  // The browser's own scroll-restoration is what was fighting us: on a fresh
  // navigation some browsers still restore the previous document's scroll
  // offset onto the new one before repainting, which is exactly the "new
  // page opens at the old page's scroll position" symptom. Turning this off
  // hands scroll position entirely to the logic below.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const onPopState = () => {
      cameFromHistory.current = true;
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (cameFromHistory.current) {
      cameFromHistory.current = false;
      return;
    }
    // 'instant' rather than the default, so a smooth-scrolling document can
    // never turn this into an animation that something else interrupts.
    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    toTop();
    // Belt and braces: a late-loading image or web font can still grow the
    // page after this runs and shift the viewport back down before the user
    // notices anything happened. One more pass after the next paint (and
    // again a beat later, once layout has actually settled) catches that
    // without visibly re-scrolling a page that was already fine.
    const raf = requestAnimationFrame(toTop);
    const timer = setTimeout(toTop, 150);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
