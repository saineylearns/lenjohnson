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

// The three "vintage layouts" a small ad can be pasted up in. Assigned by
// index rather than at random — Math.random() at render time would give the
// server and the client different answers and break hydration.
const VARIANTS = ['boxer', 'notice', 'stamp'] as const;
type Variant = (typeof VARIANTS)[number];

function variantFor(index: number): Variant {
  return VARIANTS[index % VARIANTS.length];
}

// A faux serial number for the ticket stub — deterministic from the index
// (not random) so server and client always agree, and reads like a
// counterfoil number rather than anything meaningful.
function serialFor(index: number): string {
  return String(4028 + index * 173).padStart(6, '0');
}

export default function ChampionCard({
  champion,
  index,
}: {
  champion: Champion;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const variant = variantFor(index);
  const num = String(index + 1).padStart(2, '0');
  const serial = serialFor(index);
  const p = pronouns(champion.voice);

  return (
    <article className={`champ-ad champ-ad--${variant}`}>
      {champion.photo ? (
        <div className="champ-ad-media">
          <img src={champion.photo} alt={champion.name} />
        </div>
      ) : variant === 'boxer' ? (
        <div className="champ-ad-media" aria-hidden="true">
          <div className="champ-ad-plate">
            <span>{initials(champion.name)}</span>
          </div>
        </div>
      ) : null}

      <div className="champ-ad-ticket">
        <div className={`champ-ad-body ${open ? 'is-open' : ''}`}>
          <span className="champ-ad-num">No. {num}</span>
          <p className="champ-ad-type label">
            {champion.type} &middot; {champion.categories[0]}
          </p>
          <h3 className="champ-ad-name display-font">{champion.name}</h3>
          <span className="champ-statement-q champ-statement-q-lede">{p.whoPrompt}</span>
          <p className="champ-ad-lede">{champion.statement.whoAndWhat}</p>

          <button
            type="button"
            className="champ-ad-toggle label"
            aria-expanded={open}
            aria-controls={`champ-body-${champion.id}`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Read their statement'}
            <span aria-hidden="true">{open ? '−' : '+'}</span>
          </button>

          <div className="champ-ad-more" id={`champ-body-${champion.id}`}>
            <div className="champ-ad-more-inner">
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
                  className="champ-ad-social label"
                >
                  {champion.social.label} &rarr;
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* The ticket's counterfoil — decorative, so it's hidden from the
            accessible tree rather than read out as if it meant something. */}
        <div className="champ-ad-stub" aria-hidden="true">
          <span className="champ-ad-serial">NO. {serial}</span>
        </div>
      </div>
    </article>
  );
}
