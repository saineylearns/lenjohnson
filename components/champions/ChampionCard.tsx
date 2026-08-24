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

export default function ChampionCard({ champion }: { champion: Champion }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`champ-card ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="champ-card-trigger"
        aria-expanded={open}
        aria-controls={`champ-body-${champion.id}`}
        onClick={() => setOpen((v) => !v)}
      >
        <div className="champ-card-avatar" aria-hidden="true">
          {champion.photo ? (
            <img src={champion.photo} alt="" />
          ) : (
            <span>{initials(champion.name)}</span>
          )}
        </div>

        <div className="champ-card-head">
          <p className="champ-card-type label">{champion.type}</p>
          <h3 className="champ-card-name display-font h-small">{champion.name}</h3>
          <p className="champ-card-blurb body-sm">{champion.blurb}</p>
        </div>

        <span className="champ-card-plus" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>

      <div className="champ-card-body" id={`champ-body-${champion.id}`}>
        <div className="champ-card-body-inner">
          <p className="champ-card-contribution body-sm">
            <strong>What they’ve done: </strong>
            {champion.contribution}
          </p>
          <p className="body-sm">{champion.story}</p>
          {champion.social ? (
            <a
              href={champion.social.href}
              {...EXTERNAL_LINK_PROPS}
              className="champ-card-social label"
            >
              {champion.social.label} &rarr;
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
