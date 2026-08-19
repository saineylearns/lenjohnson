'use client';

import { useState } from 'react';

type TimelineEvent = {
  year: string;
  title: string;
  body: string;
};

const EVENTS: TimelineEvent[] = [
  {
    year: '1945',
    title: 'Fifth Pan-African Congress, Manchester',
    body: "Len attended the Congress, held in Manchester in October 1945 — a choice shaped by the city's history of cotton, slavery and radicalism. Some historians see it as a major step toward African independence; future African presidents were among those who attended.",
  },
  {
    year: '1946',
    title: 'New International Society founded',
    body: "Len helped start a new anti-racist space in Moss Side with two working-class radicals, Wilf Charles and Syd Booth. Its aim, in Len's words: “true internationalism, colonial liberation, peace and the ending of race discrimination.”",
  },
  {
    year: '1950',
    title: 'The Society closes',
    body: 'Without adequate financial support, the New International Society and its club closed at the end of 1950 — after campaigning against racism in America and South Africa, supporting Black children in Manchester, and fighting discrimination at the Labour Exchange and on Manchester’s liners.',
  },
  {
    year: '1953',
    title: 'Refused a drink at the Old Abbey',
    body: 'The licensee of the Old Abbey pub on the Greenheys Estate refused Len a drink, saying he did not serve ‘coloured’ people. Police were called and, on their advice, Len left.',
  },
  {
    year: '1953',
    title: '200 protestors return',
    body: 'Len and his friends returned to the Old Abbey with around 200 protestors, Black and white. Four nights later the ‘colour bar’ was officially revoked, and Len was invited back for a drink.',
  },
  {
    year: '1957',
    title: "'Fight the Landlords' Rent Increase'",
    body: 'Still politically active, Len stood at local elections for the Communist Party and wrote this pamphlet — with, he might have noted, much relevance to Manchester rents today.',
  },
  {
    year: '1965',
    title: 'Race Relations Act',
    body: "Twelve years after Len's protest, the Race Relations Act finally made the Old Abbey licensee's actions illegal.",
  },
  {
    year: '1974',
    title: 'Len dies',
    body: 'Len Johnson died on 28 September 1974 at Oldham General Hospital, after final years spent in poverty and ill health.',
  },
  {
    year: '2020',
    title: 'A petition for a statue',
    body: "A petition calling for a new statue to celebrate Len's life in Manchester — the earliest beginnings of this campaign.",
  },
  {
    year: '2021',
    title: 'The Len Johnson Community Cup & Breaking Barz',
    body: "Moss Side Fire Station Boxing Club awarded their first Len Johnson Community Cup, and 'Breaking Barz' — a regular music night celebrating Len's resistance and local artists — was launched.",
  },
];

export default function StoryTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="story-timeline">
      {EVENTS.map((event, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={`${event.year}-${event.title}`}
            className={`timeline-node ${isOpen ? 'is-open' : ''}`}
          >
            <span className="timeline-node-dot" aria-hidden="true" />
            <button
              type="button"
              className="timeline-node-trigger"
              aria-expanded={isOpen}
              aria-controls={`timeline-body-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="display-font h-tiny timeline-node-year">
                {event.year}
              </span>
              <span className="display-font h-tiny timeline-node-title">
                {event.title}
              </span>
              <span className="timeline-node-plus" aria-hidden="true">
                +
              </span>
            </button>
            <div className="timeline-node-body" id={`timeline-body-${i}`}>
              <div className="timeline-node-body-inner">
                <p className="body-md">{event.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
