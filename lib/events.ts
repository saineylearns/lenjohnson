/**
 * The Events archive — a repo-local data file, same pattern as
 * lib/champions.ts. Every entry here has to trace back to something already
 * written elsewhere in the codebase (mostly components/story/StoryTimeline.tsx),
 * to a caption already attached to an existing image, to text printed on a
 * poster asset itself, or to copy supplied directly by the campaign. Nothing
 * is invented: where a date, a location or a description isn't confirmed,
 * the field is left out rather than guessed, and the page renders that gap
 * honestly instead of papering over it.
 *
 * `variant` picks which register layout an entry renders in:
 *   'photo' — a large photograph (or a printed poster kept in colour via
 *             `image.keepColor`) carries the entry, with metadata and body
 *             copy running beside it. An optional `document` inset shows a
 *             second piece of supporting print material (a flyer, a ticket)
 *             pinned alongside the main image.
 *   'text'  — no image; the entry is carried by a stat and prose.
 */

export type EventVariant = 'photo' | 'text';

export type CampaignEvent = {
  /** Stable id — used as the React key. */
  id: string;
  /** Archive catalogue number, e.g. "001". Assigned by position below. */
  archiveNo: string;
  /** The year (or span) as it should print. "n.d." where no date is recorded. */
  year: string;
  title: string;
  location?: string;
  category?: string;
  status?: string;
  /** Paragraphs of body copy, verbatim from source — never paraphrased. */
  body?: string[];
  /** A single standout figure to run large next to the body (text variant). */
  statNumber?: string;
  statLabel?: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
    /** Poster/graphic material kept in colour rather than archive-graded. */
    keepColor?: boolean;
  };
  /** A second, smaller piece of print pinned beside the main image. */
  document?: {
    src: string;
    alt: string;
    caption: string;
  };
  variant: EventVariant;
};

/**
 * In archive-number order, which is also the order they render in: the
 * campaign's contemporary, ongoing work — the trilogy of matches, Knockout
 * Blow, Breaking Barz. Add new entries here as real material comes in.
 */
export const EVENTS: CampaignEvent[] = [
  {
    id: 'fc-united-legends',
    archiveNo: '001',
    year: '2021–2026',
    title: 'FC United Legends v Len Johnson All Stars',
    location: 'Broadhurst Park, Manchester',
    category: 'Fundraising & sport',
    status: 'Three matches played',
    // Adapted from copy supplied directly by the campaign.
    body: [
      "Three fundraising matches at FC United of Manchester's Broadhurst Park ground. A team of celebrities — including actors from Coronation Street, Gogglebox and Hollyoaks, YouTubers such as Angry Ginge and Tays, former professional footballers, the Mayor of Greater Manchester and now Prime Minister Andy Burnham, musicians and many more — played a team of FC United legends.",
    ],
    image: {
      src: '/images/media/charity-match/06-team.webp',
      alt: 'Players, staff and guests together on the pitch at Broadhurst Park after an FC United Legends v Len Johnson All Stars fundraising match',
      caption: 'FC United Legends v Len Johnson All Stars, Broadhurst Park',
    },
    document: {
      src: '/images/lenmatchevents.jpeg',
      alt: '‘The Trilogy’ matchday poster for Len Johnson All Stars v FC United Legends, 12 July 2026, Broadhurst Park',
      caption: '‘The Trilogy’ — 12 Jul 2026, Broadhurst Park',
    },
    variant: 'photo',
  },
  {
    id: 'knockout-blow',
    archiveNo: '002',
    year: 'n.d.',
    title: 'Knockout Blow!',
    location: 'Greater Manchester',
    category: 'Theatre & education',
    status: 'Ongoing — shown to over 5,000 people',
    // Verbatim from copy supplied directly by the campaign.
    body: [
      'Len Johnson Campaign Director, actor and activist, Lamin Touray, approached the charity Odd Arts to support the campaign. This led to the development of the play Knockout Blow! written by Curtis Cole — a community-led play and workshop exploring the life of Len Johnson.',
      "Len’s life story is something to be celebrated. He responded as a fighter inside and outside of the ring to the struggles and barriers he, and others, faced because of their skin colour.",
      "The workshop that follows the play is suitable for Year 6 upwards. Debriefs, and bespoke workshops for community groups or university students, are available. The aim is to raise awareness and critical thinking around issues relating to race discrimination; inspire young people to be socially active in challenging discrimination and inequalities; reflect on the 'cycle of oppression' that Len faced and explore how this exists in society today; support young people to create their manifestos of action; and to celebrate Black History all year round, not just in October.",
      'The play has been shown to over 5,000 people in Greater Manchester, primary and secondary schools, colleges, boxing clubs and youth and community projects. It was even shown to city councillors in the Town Hall chamber. The workshops have been incredibly well-received and provoked some great conversations.',
    ],
    image: {
      src: '/images/knockout.webp',
      alt: 'Knockout Blow! — promotional collage for the community play and workshop exploring the life of Len Johnson',
      caption: 'Knockout Blow!, in schools and community venues across Manchester',
      keepColor: true,
    },
    variant: 'photo',
  },
  {
    id: 'breaking-barz',
    archiveNo: '003',
    year: '2021',
    title: 'Breaking Barz',
    location: 'Old Abbey Taphouse, Hulme',
    category: 'Community & music',
    status: 'Recurring — 14 held so far',
    // Verbatim from copy supplied directly by the campaign.
    body: [
      "In the tradition of Len’s legacy, we bring diverse communities together through a regular music night at the Old Abbey Taphouse, the very pub where Len Johnson was denied service. The Old Abbey won the Community Hero award in the Great British Pub Awards 2023.",
      'The night honours and gives up-and-coming artists a platform to perform, grow in confidence and make connections with other creatives. Breaking Barz is for musicians, Spoken Word artists, DJs and Presenters.',
      'There have been 14 Breaking Barz so far, including one at the legendary Manchester venue, The Band on the Wall. Our artists have gone on to gain work elsewhere at festivals and larger venues and we are very proud that this has happened in Len’s name.',
    ],
    image: {
      src: '/images/breaking-barz.webp',
      alt: "Breaking Barz — the music night celebrating Len Johnson's resistance",
      caption: 'Breaking Barz, Old Abbey Taphouse, Manchester',
    },
    variant: 'photo',
  },
];
