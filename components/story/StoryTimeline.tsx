/**
 * The chronological index — the page's own contents page.
 *
 * This used to be an accordion sitting two-thirds of the way down chapter IX,
 * below the very prose it paraphrased: opening a node produced a shorter
 * retelling of a passage the reader had already scrolled past. As an index at
 * the top it does the one job the prose cannot — it gives the whole life at a
 * glance and a way into any part of it.
 *
 * Every row is drawn from the chapters below; nothing here is asserted that
 * the page does not go on to tell. `href` is omitted where no chapter covers
 * the entry — Len's death has no section of its own, and the row says so by
 * simply not being a link.
 */

type IndexEntry = {
  year: string;
  event: string;
  place: string;
  href?: string;
};

const ENTRIES: IndexEntry[] = [
  { year: '1902', event: 'Leonard Benker Johnson is born', place: 'Clayton, East Manchester', href: '#chapter-i' },
  { year: '1911', event: 'The colour bar is written into the British Boxing Board of Control’s constitution', place: 'The Home Office', href: '#chapter-iii' },
  { year: '1920', event: 'Fighting professionally as a middleweight', place: 'The booths and the halls', href: '#chapter-ii' },
  { year: '1926', event: 'Beats Harry Collins for the middleweight championship of the British Empire', place: 'Australia', href: '#chapter-ii' },
  { year: '1928', event: 'The national papers call him Britain’s ‘uncrowned champion’', place: 'Still no sanctioned title bout', href: '#chapter-ii' },
  { year: '1930', event: 'Announces his retirement from the ring', place: 'The Daily Dispatch', href: '#chapter-iv' },
  { year: '1945', event: 'Attends the Fifth Pan-African Congress', place: 'Manchester', href: '#chapter-v' },
  { year: '1946', event: 'Helps found the New International Society', place: 'Moss Side', href: '#chapter-vi' },
  { year: '1947', event: 'British boxing’s colour bar is repealed', place: 'Seventeen years after he quit', href: '#chapter-iii' },
  { year: '1950', event: 'The Society and its club close for want of funds', place: 'Moss Side', href: '#chapter-vi' },
  { year: '1953', event: 'Refused a drink under the pub’s colour bar', place: 'The Old Abbey Taphouse, Hulme', href: '#chapter-viii' },
  { year: '1953', event: 'Returns with 200 protestors; four nights later the bar is revoked', place: 'The Old Abbey Taphouse, Hulme', href: '#chapter-viii' },
  { year: '1957', event: 'Writes Fight the Landlords’ Rent Increase, and stands at local elections', place: 'Manchester', href: '#chapter-vii' },
  { year: '1965', event: 'The Race Relations Act makes the refusal illegal', place: 'Twelve years after the protest', href: '#chapter-viii' },
  { year: '1974', event: 'Len Johnson dies on 28 September', place: 'Oldham General Hospital' },
  { year: '2020', event: 'A petition is launched for a statue', place: 'Manchester', href: '#chapter-ix' },
  { year: '2021', event: 'First Len Johnson Community Cup; Breaking Barz begins', place: 'Moss Side', href: '#chapter-ix' },
];

export default function StoryTimeline() {
  return (
    <nav className="story-index" aria-labelledby="story-index-h">
      <h2 className="label story-index-h" id="story-index-h">
        <span>The life, in order</span>
        <span aria-hidden="true">1902&ndash;2021</span>
      </h2>
      <ol className="story-index-list">
        {ENTRIES.map((entry) => {
          const row = (
            <>
              <span className="label story-index-year">{entry.year}</span>
              <span className="story-index-event">{entry.event}</span>
              <span className="label story-index-place">{entry.place}</span>
            </>
          );
          return (
            <li className="story-index-row" key={`${entry.year}-${entry.event}`}>
              {entry.href ? (
                <a className="story-index-link" href={entry.href}>
                  {row}
                </a>
              ) : (
                <span className="story-index-link is-static">{row}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
