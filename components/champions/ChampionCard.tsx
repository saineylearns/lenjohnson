'use client';

import { useState } from 'react';
import { EXTERNAL_LINK_PROPS } from '@/lib/links';
import type { Champion } from '@/lib/champions';

/** The pronouns each prompt needs, keyed by whether the Champion speaks as
 * an individual ("I") or an organisation ("we"). */
function pronouns(voice: Champion['voice']) {
  return voice === 'I'
    ? {
        whoPrompt: 'Who am I, and what do I do?',
        imWere: 'I’m',
        doingPrompt: 'Here’s what I’m going to do',
      }
    : {
        whoPrompt: 'Who are we, and what do we do?',
        imWere: 'We’re',
        doingPrompt: 'Here’s what we’re going to do',
      };
}

export default function ChampionCard({
  champion,
  index,
}: {
  champion: Champion;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  // A box number, the way a classified ad carries one instead of a photo.
  const num = String(index + 1).padStart(2, '0');
  const p = pronouns(champion.voice);

  return (
    <article className={`champ-cl ${open ? 'is-open' : ''}`}>
      <p className="champ-cl-meta label">
        <span className="champ-cl-num">No. {num}</span>
        {champion.type} &middot; {champion.categories[0]}
      </p>
      <h3 className="champ-cl-name display-font">{champion.name}</h3>
      <span className="champ-statement-q champ-statement-q-lede">{p.whoPrompt}</span>
      <p className="champ-cl-lede">{champion.statement.whoAndWhat}</p>

      <button
        type="button"
        className="champ-cl-toggle label"
        aria-expanded={open}
        aria-controls={`champ-body-${champion.id}`}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Close' : 'Read their statement'}
        <span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>

      <div className="champ-cl-more" id={`champ-body-${champion.id}`}>
        <div className="champ-cl-more-inner">
          <ul className="champ-statement">
            <li>
              <span className="champ-statement-q">
                Honouring Len Johnson is not just about the past because
              </span>{' '}
              {champion.statement.whyLen}
            </li>
            <li>
              <span className="champ-statement-q">
                {p.imWere} proud to support the Len Johnson Campaign because
              </span>{' '}
              {champion.statement.whySupport}
            </li>
            <li>
              <span className="champ-statement-q">{p.doingPrompt}:</span>{' '}
              {champion.statement.whatWeWillDo}
            </li>
          </ul>
          {champion.social ? (
            <a
              href={champion.social.href}
              {...EXTERNAL_LINK_PROPS}
              className="champ-cl-social label"
            >
              {champion.social.label} &rarr;
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
