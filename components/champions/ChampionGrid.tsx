'use client';

import { useMemo, useState } from 'react';
import {
  ALL_CATEGORIES,
  CHAMPIONS,
  type ChampionCategory,
} from '@/lib/champions';
import ChampionCard from './ChampionCard';

const FILTERS: Array<ChampionCategory | 'All'> = ['All', ...ALL_CATEGORIES];

export default function ChampionGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const visible = useMemo(() => {
    if (filter === 'All') return CHAMPIONS;
    return CHAMPIONS.filter((champion) => champion.categories.includes(filter));
  }, [filter]);

  // Nothing announced yet: render nothing at all.
  //
  // This used to hold the column open with six identical vacant cards, each
  // repeating the same four prompts with COMING SOON where every answer
  // should be. The intent was to show the shape of what's coming; the effect
  // was a page in the primary navigation whose only headings all read COMING
  // SOON. The sentence above the grid — "Our first Champions are signing on
  // now" — already says the same thing once, honestly, and one line of type
  // beats six empty cards. The grid comes back on its own the moment there is
  // a real Champion in lib/champions.ts.
  if (CHAMPIONS.length === 0) return null;

  return (
    <div>
      <div className="champ-filters" role="group" aria-label="Filter Champions by category">
        {FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            className={`champ-filter label ${filter === option ? 'is-active' : ''}`}
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {visible.length ? (
        <div className="champ-classifieds">
          {visible.map((champion, i) => (
            <ChampionCard key={champion.id} champion={champion} index={i} />
          ))}
        </div>
      ) : (
        <p className="body-md champ-empty">No Champions in this category yet.</p>
      )}
    </div>
  );
}
