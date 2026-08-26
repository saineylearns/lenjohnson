import type { Metadata } from 'next';
import FlagStripe from '@/components/FlagStripe';
import { EVENTS } from '@/lib/events';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: "/events" },
  title: "Events",
};

export default function EventsPage() {
  return (
    <div className="ev">
      {/* THE MASTHEAD — an editorial front page, not a hero banner. No
          centred headline over a dimmed photo: the type sits asymmetrically
          on the paper, the photo is pasted below it as its own plate, and
          the whole thing is ruled off top and bottom the way a paper's
          masthead is, not faded into it. */}
      <header className="ev-masthead">
        <div className="ev-wide">
          <div className="ev-masthead-grid">
            <p className="label ev-masthead-mark">LJC / Events</p>
            <h1 className="display-font ev-masthead-h">EVENTS.</h1>
            <p className="display-font ev-masthead-sub">
              THE CAMPAIGN
              <br />
              IN THE WORLD.
            </p>
            <p className="label ev-masthead-meta">
              <span>Manchester</span>
              <span>2021&mdash;2026</span>
            </p>
          </div>
        </div>

        <figure className="ev-masthead-plate">
          <div className="archive-image-wrap">
            <img
              src="/images/breaking-barz.webp"
              alt="Breaking Barz — the music night celebrating Len Johnson's resistance"
              className="archive-image"
            />
          </div>
        </figure>
        <p className="archive-caption ev-masthead-cap ev-wide">
          Breaking Barz, Manchester &mdash; Photograph: Len Johnson Campaign
        </p>
      </header>

      <FlagStripe />

      {/* WHAT'S HAPPENING — kept honest: there's no confirmed date to show,
          so the section says that plainly instead of a card grid with
          nothing in it. */}
      <section className="ev-upcoming">
        <div className="ev-reading">
          <p className="label ev-section-kicker">What&rsquo;s happening</p>
          <p className="display-font ev-upcoming-h">No events confirmed yet.</p>
          <p className="body-md">
            Dates land here as they&rsquo;re confirmed. If you&rsquo;re
            planning something for Len &mdash; a match, a night, a walk, a
            talk &mdash; we&rsquo;d like to know about it.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="ev-textlink">
            Tell us about your event &rarr;
          </a>
        </div>
      </section>

      {/* FROM THE ARCHIVE — the register itself. Mixed builds — photograph,
          poster, photograph — rather than one repeated card. */}
      <section className="ev-archive">
        <div className="ev-archive-w">
          <div className="ev-archive-head">
            <p className="label ev-section-kicker">From the archive</p>
            <p className="label ev-archive-ref">LJC / EVENTS</p>
          </div>

          {EVENTS.map((event) => (
            <div key={event.id}>
              <article className={`ev-entry ev-entry--${event.variant}`}>
                <div className="ev-entry-head">
                  <span className="label ev-entry-no">
                    Archive no. {event.archiveNo}
                  </span>
                  <span className="condensed-font ev-entry-year">{event.year}</span>
                </div>
                <hr className="ev-entry-rule" />
                <h3 className="display-font ev-entry-title">{event.title}</h3>

                {event.variant === 'photo' && event.image && (
                  <div className="ev-entry-photo-body">
                    <figure className="ev-entry-figure">
                      <div className="archive-image-wrap">
                        <img
                          src={event.image.src}
                          alt={event.image.alt}
                          className={
                            event.image.keepColor
                              ? 'ev-entry-img-color'
                              : 'archive-image'
                          }
                        />
                      </div>
                      <figcaption className="archive-caption">
                        {event.image.caption}
                      </figcaption>
                    </figure>
                    <div className="ev-entry-meta-col">
                      {event.document && (
                        <figure className="ev-entry-doc">
                          <div className="archive-image-wrap">
                            <img
                              src={event.document.src}
                              alt={event.document.alt}
                              className="events-plate-img"
                            />
                          </div>
                          <figcaption className="archive-caption">
                            {event.document.caption}
                          </figcaption>
                        </figure>
                      )}
                      {(event.location || event.category || event.status) && (
                        <dl className="ev-metadata">
                          {event.location && (
                            <div>
                              <dt className="label">Location</dt>
                              <dd className="label">{event.location}</dd>
                            </div>
                          )}
                          {event.category && (
                            <div>
                              <dt className="label">Category</dt>
                              <dd className="label">{event.category}</dd>
                            </div>
                          )}
                          {event.status && (
                            <div>
                              <dt className="label">Status</dt>
                              <dd className="label">{event.status}</dd>
                            </div>
                          )}
                        </dl>
                      )}
                      {event.body?.map((para, j) => (
                        <p className="body-sm" key={j}>{para}</p>
                      ))}
                    </div>
                  </div>
                )}

                {event.variant === 'text' && (
                  <div className="ev-entry-text-body">
                    {event.statNumber && (
                      <p className="condensed-font ev-entry-stat">
                        {event.statNumber}
                        <span className="label"> {event.statLabel}</span>
                      </p>
                    )}
                    <div className="ev-entry-text-col">
                      {event.body?.map((para, j) => (
                        <p className="body-sm" key={j}>{para}</p>
                      ))}
                      {event.location && (
                        <p className="label ev-entry-cite">
                          {event.location} &middot; {event.category}
                        </p>
                      )}
                    </div>
                  </div>
                )}

              </article>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
