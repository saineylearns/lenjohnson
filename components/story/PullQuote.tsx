import type { ReactNode } from 'react';

type PullQuoteProps = {
  children: ReactNode;
  attribution?: string;
  dark?: boolean;
  className?: string;
};

export default function PullQuote({
  children,
  attribution,
  dark = false,
  className = '',
}: PullQuoteProps) {
  return (
    <blockquote
      className={`pull-quote ${dark ? 'pull-quote-dark' : ''} ${className}`}
    >
      <p className="body-lg">{children}</p>
      {attribution ? <cite className="label">{attribution}</cite> : null}
    </blockquote>
  );
}
