type ArchivePlaceholderProps = {
  label: string;
  dark?: boolean;
};

/** Plain styled stand-in for chapters the campaign holds no photograph for.
 *  Deliberately reads as "nothing filed here", never as a broken image — an
 *  empty sleeve in the file, catalogued but not held. The ruled cross that
 *  marks it is drawn in CSS rather than set as a glyph.
 *
 *  It used to say "Photo coming soon", which is a promise the campaign has
 *  not made and cannot keep: no photograph of the New International Society
 *  or of the 1953 protest is known to be in hand. An absence stated is part
 *  of the record; an absence deferred is a bug that never closes. */
export default function ArchivePlaceholder({
  label,
  dark = false,
}: ArchivePlaceholderProps) {
  return (
    <div className={`archive-placeholder ${dark ? 'on-dark' : ''}`}>
      <p className="label">{label}</p>
      <p className="body-sm">No photograph in the archive</p>
    </div>
  );
}
