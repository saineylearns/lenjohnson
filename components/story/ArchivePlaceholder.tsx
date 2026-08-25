type ArchivePlaceholderProps = {
  label: string;
  dark?: boolean;
};

/** Plain styled stand-in for chapters whose archival photo hasn't arrived
 *  yet. Deliberately reads as "no photo yet", never as a broken image —
 *  an empty sleeve in the file, catalogued but not held. The ruled cross
 *  that marks it is drawn in CSS rather than set as a glyph. */
export default function ArchivePlaceholder({
  label,
  dark = false,
}: ArchivePlaceholderProps) {
  return (
    <div className={`archive-placeholder ${dark ? 'on-dark' : ''}`}>
      <p className="label">{label}</p>
      <p className="body-sm">Photo coming soon</p>
    </div>
  );
}
