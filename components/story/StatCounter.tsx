'use client';

import { useEffect, useState } from 'react';
import { useReveal } from '@/lib/useReveal';

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

/** A single stat that counts up from 0 when it scrolls into view. Pass
 *  `staticValue` for non-numeric or already-a-range values (e.g. a year
 *  span) to skip the count animation and just reveal the text. */
export default function StatCounter({
  to,
  staticValue,
  prefix = '',
  suffix = '',
  label,
  duration = 1400,
}: StatCounterProps) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.4);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible || staticValue || to === undefined) return;
    const target = to;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, to, duration, staticValue]);

  return (
    <div ref={ref} className="stat-item">
      <p className="stat-number display-font">
        {prefix}
        {staticValue ?? value}
        {suffix}
      </p>
      <p className="label stat-label">{label}</p>
    </div>
  );
}
