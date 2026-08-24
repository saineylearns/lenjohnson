'use client';

import { useState } from 'react';

type Source = {
  title: string;
  detail: string;
  href?: string;
};

const SOURCES: Source[] = [
  {
    title: "Hirsch, S., & Brown, G. (2023). Breaking the 'colour bar': Len Johnson, Manchester and anti-racism.",
    detail: 'Race & Class, 64(3).',
    href: 'https://doi.org/10.1177/03063968221139993',
  },
  {
    title: 'Boxing record: BoxRec: Len Johnson',
    detail: 'BoxRec.',
    href: 'https://boxrec.com',
  },
  {
    title: 'The Rentier City, Isaac Rose, Repeater Books (London: 2024) pp. 85-87.',
    detail: 'Repeater Books.',
  },
];

export default function SourcesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {SOURCES.map((source, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={source.title}
            className={`sources-item ${isOpen ? 'is-open' : ''}`}
          >
            <button
              type="button"
              className="sources-trigger"
              aria-expanded={isOpen}
              aria-controls={`source-body-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="body-md">{source.title}</span>
              <span className="sources-trigger-plus" aria-hidden="true">
                +
              </span>
            </button>
            <div className="sources-body" id={`source-body-${i}`}>
              <div className="sources-body-inner">
                <p className="body-sm text-muted">
                  {source.href ? (
                    <a href={source.href} target="_blank" rel="noopener noreferrer">
                      {source.detail}
                    </a>
                  ) : (
                    source.detail
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
