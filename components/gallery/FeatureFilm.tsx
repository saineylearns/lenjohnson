import { FEATURE_FILM } from '@/lib/gallery';
import Reveal from '@/components/story/Reveal';

/**
 * The trailer, at the top of the page rather than at 75% scroll depth behind
 * the YouTube strip. It is the largest and most recent thing the campaign
 * has made, and on a page whose whole subject is images it now opens the
 * page instead of closing it.
 *
 * Still missing, and only the campaign can supply it: the film's title, a
 * one-sentence synopsis, runtime, director, year, and whether it is in
 * production, finished or seeking distribution. Those go here, above the
 * video. Nothing has been guessed in the meantime — the caption below
 * describes only what is visible in the poster frame.
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
        {/* The poster frame restages the photograph that opens the home page
            — five men, five flat caps, the dogs, a Manchester street — with
            the camera on the cobbles looking up. It is the best idea on the
            site after the flag stripe and it was going entirely unremarked,
            so it is said out loud here. */}
        <p className="gal-trailer-note">
          The opening frame restages the photograph that opens this site: five
          men walking a terraced Manchester street, flat caps, dogs on the
          lead. A hundred years between the two pictures.
        </p>
      </Reveal>
    </section>
  );
}
