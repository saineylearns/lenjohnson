'use client';

import { useMemo, useState } from 'react';
import { ALL_CATEGORIES, CHAMPIONS, type ChampionCategory } from '@/lib/champions';
import ChampionCard from './ChampionCard';

const FILTERS: Array<ChampionCategory | 'All'> = ['All', ...ALL_CATEGORIES];

export default function ChampionGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const visible = useMemo(() => {
    if (filter === 'All') return CHAMPIONS;
    return CHAMPIONS.filter((champion) => champion.categories.includes(filter));
  }, [filter]);

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
        <div className="champ-wall">
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
