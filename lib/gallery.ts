/**
 * The Gallery's media inventory — colour photographs, the Breaking Barz
 * clip, YouTube films and the feature trailer. As with `events.ts`: nothing
 * is invented. Where a name, date or place isn't confirmed, the field is
 * left off rather than guessed — captions here stay minimal on purpose so
 * the campaign can fill in the real detail later rather than inherit ours.
 */

export type PhotoLayout =
  | 'feature'
  | 'portrait'
  | 'split'
  | 'offset'
  | 'pair'
  | 'wide';

export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  layout: PhotoLayout;
};

// The photographic archive — full colour, no filter. Charity-match plates
// carry a caption because the on-screen banner/engraving is legible in the
// photograph itself (not supplied separately, but not invented either);
// the Breaking Barz portraits stay uncaptioned, per instruction, until the
// campaign adds the real detail.
export const ARCHIVE_PHOTOS: GalleryPhoto[] = [
  {
    id: 'fc-team',
    src: '/images/media/charity-match/07-fc-team.webp',
    alt: 'Players from Len Johnson FC All Stars and FC United Legends walk out together at Broadhurst Park, children alongside them',
    layout: 'feature',
  },
  {
    id: 'theo',
    src: '/images/media/charity-match/02-theo.webp',
    alt: 'A player in red wins the ball off a player in green during the charity match',
    layout: 'split',
  },
  {
    id: 'throw',
    src: '/images/media/charity-match/04-throw.webp',
    alt: 'A player takes a throw-in during the charity match',
    layout: 'split',
  },
  {
    id: 'crolla',
    src: '/images/media/charity-match/05-crolla.webp',
    alt: 'Four men hold a trophy pitchside, one wearing a Show Racism the Red Card shirt',
    layout: 'offset',
  },
  {
    id: 'bb-portrait-1',
    src: '/images/media/breaking-barz/03-artist.webp',
    alt: 'A performer on stage at a Breaking Barz night, lit by red and blue stage light',
    layout: 'portrait',
  },
  {
    id: 'bb-portrait-2',
    src: '/images/media/breaking-barz/06-artist3.webp',
    alt: 'A performer connected to Breaking Barz, seated portrait',
    layout: 'pair',
  },
  {
    id: 'bb-portrait-3',
    src: '/images/media/breaking-barz/07-artist4.webp',
    alt: 'A performer connected to Breaking Barz, portrait under red light',
    layout: 'pair',
  },
  {
    id: 'burnham',
    src: '/images/media/charity-match/01-burnham.webp',
    alt: 'Three men pitchside with the charity match trophy',
    layout: 'wide',
  },
];

export const FEATURED_PHOTO: GalleryPhoto = {
  id: 'trophy',
  src: '/images/media/charity-match/03-trophy.webp',
  alt: 'The winning team celebrate with the Len Johnson Cup under a banner reading "Len Johnson Charity Match Winners, 4th May"',
  caption: 'Len Johnson Charity Match winners, 4 May',
  layout: 'feature',
};

export const ALL_PHOTOS: GalleryPhoto[] = [FEATURED_PHOTO, ...ARCHIVE_PHOTOS];

// Moving image — YouTube, plus the Breaking Barz clip hosted locally rather
// than uploaded to YouTube.
//
// These played as "FILM 01" through "FILM 04" because no titles had been
// supplied and none were going to be invented. They didn't need to be:
// every one of these films is public, and its title and publisher are
// published by YouTube itself. The four below are read straight from
// YouTube's oEmbed endpoint for each video id — not written here, and not
// paraphrased. `duration` is still open: oEmbed doesn't carry it, so it is
// optional and simply doesn't print until someone fills it in.
export type YouTubeFilm = {
  id: string;
  youtubeId: string;
  title: string;
  /** The channel that published it — a source line, not a credit. */
  source: string;
  /** e.g. "6 min". Omit rather than estimate. */
  duration?: string;
};

export const YOUTUBE_FILMS: YouTubeFilm[] = [
  {
    id: 'yt-1',
    youtubeId: 'mubC_K5HCuQ',
    title: 'Len Johnson: British Boxing Champion — Drunk History: Black Stories',
    source: 'Comedy Central UK',
  },
  {
    id: 'yt-2',
    youtubeId: 'myw_W83WD50',
    title: 'Breaking Barz: No Dogs, No Blacks, No Irish — Len Johnson',
    source: 'Baazir',
  },
  {
    id: 'yt-3',
    youtubeId: 'NaIR78fEG2g',
    title: 'FC United vs Celebrity Team — the Len Johnson Charity Football Match',
    source: 'Skiddle',
  },
  {
    id: 'yt-4',
    youtubeId: 'V1GRCML2eig',
    title: 'I Played 2 Charity Football Matches In 1 Day',
    source: 'angryginge13',
  },
];

export const BREAKING_BARZ_CLIP = {
  src: '/videos/breaking-barz.mp4',
  poster: '/images/breaking-barz-poster.jpg',
};

export const FEATURE_FILM = {
  src: '/videos/len-johnson-film.mp4',
  poster: '/images/film-poster.jpg',
};
