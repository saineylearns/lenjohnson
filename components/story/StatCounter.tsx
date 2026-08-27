'use client';

import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion, useReveal } from '@/lib/useReveal';

type StatCounterProps = {
  /** Numeric end value to count up to. Ignored (and unnecessary) when
   *  `staticValue` is set. */
  to?: number;
  /** Non-numeric or already-formatted value, e.g. "1920". Skips the count
   *  animation and just reveals the text. */
  staticValue?: string;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
};

/**
 * A single stat that counts up when it scrolls into view.
 *
 * The finished figure is what's in the HTML. It used to initialise at 0, so
 * the served markup for the Old Abbey stats read "0 PROTESTORS RETURNED WITH
 * LEN", "0 NIGHTS UNTIL THE BAR WAS REVOKED" — which is what a crawler
 * indexed, what a reader with JavaScript off saw, and what a screen reader
 * announced if it reached the figure before the observer fired. The animation
 * is now a decoration applied on top of a correct document, not the only route
 * to the number.
 */
export default function StatCounter({
  to,
  staticValue,
  prefix = '',
  suffix = '',
  label,
  duration = 1400,
}: StatCounterProps) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.4);
  const reducedMotion = usePrefersReducedMotion();
  // `null` means "nothing has animated yet, show the real figure".
  const [animatedValue, setAnimatedValue] = useState<number | null>(null);
  const alreadyOnScreen = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const box = node.getBoundingClientRect();
    // If the stat is already in view on first paint, counting up would begin
    // by wiping a correct number back to zero. Leave it alone.
    alreadyOnScreen.current = box.top < window.innerHeight && box.bottom > 0;
  }, [ref]);

  useEffect(() => {
    if (!visible || staticValue || to === undefined) return;
    // `useReveal` reports visible immediately under reduced motion, so the
    // gate has to be explicit here — otherwise the one user who asked for no
    // motion is the one user who gets the count-up on page load.
    if (reducedMotion || alreadyOnScreen.current) return;

    const target = to;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, to, duration, staticValue, reducedMotion]);

  return (
    <div ref={ref} className="stat-item">
      <p className="stat-number display-font">
        {prefix}
        {staticValue ?? animatedValue ?? to ?? 0}
        {suffix}
      </p>
      <p className="label stat-label">{label}</p>
    </div>
  );
}
