type ArchivePlaceholderProps = {
  label: string;
  dark?: boolean;
};

/** Plain styled stand-in for chapters whose archival photo hasn't arrived
 *  yet. Deliberately reads as "no photo yet", never as a broken image. */
export default function ArchivePlaceholder({
  label,
  dark = false,
}: ArchivePlaceholderProps) {
  return (
    <div className={`archive-placeholder ${dark ? 'on-dark' : ''}`}>
      <span className="archive-placeholder-icon" aria-hidden="true">
        ◐
      </span>
      <p className="label">{label}</p>
      <p className="body-sm">Photo coming soon</p>
    </div>
  );
}
