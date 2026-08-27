/**
 * Minimal, typographic, asymmetric — no dimmed photo behind a centred
 * headline. The word itself carries the section; everything else is
 * interface metadata set small around it.
 */
export default function GalleryHero() {
  return (
    <header className="gal-hero">
      <div className="gal-hero-rail">
        <span>Len Johnson Campaign</span>
      </div>
      <h1 className="display-font gal-hero-h">GALLERY.</h1>
    </header>
  );
}
