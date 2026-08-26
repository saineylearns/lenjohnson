/**
 * A vacant Champion entry — the classified is set and the box number is
 * assigned, but the copy hasn't come in yet. It carries the same four prompts
 * every real statement answers, each one standing at "Coming soon", so the
 * section reads as space held open rather than as a page with nothing on it.
 */
export default function ChampionSlot({ index }: { index: number }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className="champ-cl champ-cl--vacant">
      <p className="champ-cl-meta label">
        <span className="champ-cl-num">No. {num}</span>
        Champion
      </p>
      <h3 className="champ-cl-name display-font">Coming soon</h3>

      <ul className="champ-statement">
        <li>
          <span className="champ-statement-q">Who am I, and what do I do?</span>{' '}
          <span className="champ-cl-pending">Coming soon</span>
        </li>
        <li>
          <span className="champ-statement-q">
            Honouring Len Johnson is not just about the past because
          </span>{' '}
          <span className="champ-cl-pending">Coming soon</span>
        </li>
        <li>
          <span className="champ-statement-q">
            I’m proud to support the Len Johnson Campaign because
          </span>{' '}
          <span className="champ-cl-pending">Coming soon</span>
        </li>
        <li>
          <span className="champ-statement-q">Here’s what I’m going to do:</span>{' '}
          <span className="champ-cl-pending">Coming soon</span>
        </li>
      </ul>
    </article>
  );
}
