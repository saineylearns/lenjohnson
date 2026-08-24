'use client';

import { useState } from 'react';
import { EXTERNAL_LINK_PROPS } from '@/lib/links';
import type { Champion } from '@/lib/champions';

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

/** The pronouns each prompt needs, keyed by whether the Champion speaks as
 * an individual ("I") or a business/organisation ("we"). */
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
  const num = String(index + 1).padStart(2, '0');
  const p = pronouns(champion.voice);

  return (
    <article className="champ-profile">
      <div className="champ-profile-media">
        {champion.photo ? (
          <img src={champion.photo} alt={champion.name} />
        ) : (
          <div className="champ-profile-plate" aria-hidden="true">
            <span>{initials(champion.name)}</span>
          </div>
        )}
        <span className="champ-profile-tape" aria-hidden="true" />
      </div>

      <div className={`champ-profile-body ${open ? 'is-open' : ''}`}>
        <span className="champ-profile-num">{num}</span>
        <p className="champ-profile-type label">
          {champion.type} &middot; {champion.categories[0]}
        </p>
        <h3 className="champ-profile-name display-font">{champion.name}</h3>
        <span className="champ-statement-q champ-statement-q-lede">{p.whoPrompt}</span>
        <p className="champ-profile-lede">{champion.statement.whoAndWhat}</p>

        <button
          type="button"
          className="champ-profile-toggle label"
          aria-expanded={open}
          aria-controls={`champ-body-${champion.id}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Read their statement'}
          <span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>

        <div className="champ-profile-more" id={`champ-body-${champion.id}`}>
          <div className="champ-profile-more-inner">
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
                className="champ-profile-social label"
              >
                {champion.social.label} &rarr;
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
