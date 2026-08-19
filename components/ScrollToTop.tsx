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
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
