'use client';

import type { ReactNode } from 'react';
import { useReveal } from '@/lib/useReveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  as?: 'div' | 'span';
};

/** Slides + fades content up once it scrolls into view. No-ops entirely
 *  under prefers-reduced-motion (content just appears, via useReveal). */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as;
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
