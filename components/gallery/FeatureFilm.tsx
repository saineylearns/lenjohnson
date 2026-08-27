import { FEATURE_FILM } from '@/lib/gallery';
import Reveal from '@/components/story/Reveal';

/**
 * The genuine tonal shift the spec asks for: black background, the one
 * video that matters most, native controls. No autoplay, no invented
 * title — just the trailer, given room.
 */
export default function FeatureFilm() {
  return (
    <section className="gal-trailer">
      <Reveal className="gal-trailer-inner">
        <p className="label gal-trailer-kicker">The film</p>
        <video
          src={FEATURE_FILM.src}
          poster={FEATURE_FILM.poster}
          controls
          playsInline
          preload="metadata"
          className="gal-trailer-video"
        />
      </Reveal>
    </section>
  );
}
