import type { ReactNode } from 'react';

export type SectionBg =
  | 'cream'
  | 'gold'
  | 'green'
  | 'green-dark'
  | 'orange'
  | 'blue'
  | 'black'
  | 'white';

type SectionProps = {
  bg: SectionBg;
  id?: string;
  tight?: boolean;
  bleed?: boolean;
  className?: string;
  children: ReactNode;
};

export default function Section({
  bg,
  id,
  tight = false,
  bleed = false,
  className = '',
  children,
}: SectionProps) {
  const classes = [tight ? 'section-tight' : 'section', `bg-${bg}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes}>
      {bleed ? children : <div className="container">{children}</div>}
    </section>
  );
}
