'use client';

import { useReveal } from '@/lib/useReveal';

type CompareRow = {
  name: string;
  wins: number;
  bouts: number;
  note?: string;
};

const ROWS: CompareRow[] = [
  { name: 'Len Johnson', wins: 95, bouts: 134, note: 'Never got a title shot' },
  { name: 'Muhammad Ali', wins: 56, bouts: 61 },
  { name: 'Manny Pacquiao', wins: 62, bouts: 72 },
];

const MAX_BOUTS = Math.max(...ROWS.map((r) => r.bouts));

/** Horizontal bar comparison of career bout/win totals. Bars grow into
 *  place once scrolled into view; widths are set inline (data-driven),
 *  everything else is plain CSS. */
export default function StatCompare() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className="compare-bars">
      {ROWS.map((row) => {
        const boutsScale = row.bouts / MAX_BOUTS;
        const winsScale = row.wins / MAX_BOUTS;
        return (
          <div className="compare-row" key={row.name}>
            <div className="compare-row-head">
              <p className="display-font h-tiny compare-name">{row.name}</p>
              <p className="compare-figures label">
                {row.wins} wins · {row.bouts} bouts
              </p>
            </div>
            <div className="compare-track">
              <div
                className="compare-track-bouts"
                style={{ transform: `scaleX(${visible ? boutsScale : 0})` }}
              />
              <div
                className="compare-track-wins"
                style={{ transform: `scaleX(${visible ? winsScale : 0})` }}
              />
            </div>
            {row.note ? <p className="compare-note body-sm">{row.note}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
