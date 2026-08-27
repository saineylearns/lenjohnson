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
  /** A strip of further photographs from the same event, run below the
   *  main entry — extra evidence rather than the entry's carrying image. */
  gallery?: {
    src: string;
    alt: string;
    caption: string;
  }[];
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
    gallery: [
      {
        src: '/images/events/football-event-2.webp',
        alt: 'Two players celebrate a goal together on the pitch, one lifted off the ground',
        caption: 'A goal celebration, Broadhurst Park',
      },
      {
        src: '/images/events/football-event-9.webp',
        alt: 'The Len Johnson All Stars lift the trophy in front of a board reading Len Johnson Charity Match Winners, 4 May 2024',
        caption: 'Len Johnson Charity Match winners, 4 May 2024',
      },
      {
        src: '/images/events/football-event-5.webp',
        alt: 'Players from both teams sit and stand together holding a Show Racism the Red Card banner after the match',
        caption: 'Players from both sides with the Show Racism the Red Card banner',
      },
      {
        src: '/images/events/football-event-12.webp',
        alt: 'Two players embrace after the match, one wearing a Len Johnson FC All Stars shirt printed with Uncrowned Champion',
        caption: 'Len Johnson FC All Stars, ‘Uncrowned Champion’ shirt',
      },
      {
        src: '/images/events/angry-ginge-football.webp',
        alt: 'YouTuber Angry Ginge holds up a signed matchday shirt printed GINGE 13',
        caption: 'Angry Ginge with his signed matchday shirt',
      },
      {
        src: '/images/events/luke-littler-football.webp',
        alt: 'Darts player Luke Littler holds a Len Johnson FC All Stars shirt',
        caption: 'Luke Littler with a Len Johnson FC All Stars shirt',
      },
      {
        src: '/images/events/football-event-1.webp',
        alt: 'A young fan poses for a selfie wearing a Show Racism the Red Card shirt, surrounded by other spectators in the stand',
        caption: 'A fan in the stand, Show Racism the Red Card',
      },
      {
        src: '/images/events/football-event-3.webp',
        alt: 'Two players hold up a matchday shirt printed Thomas 8, in front of the Football Club United of Manchester banner',
        caption: "A matchday shirt, printed 'Thomas 8'",
      },
      {
        src: '/images/events/football-event-4.webp',
        alt: 'A group of supporters lean over the stand barrier, branded Dragonfly Crowd, during the match',
        caption: 'Supporters in the stand',
      },
      {
        src: '/images/events/football-event-6.webp',
        alt: 'A player in Len Johnson FC All Stars kit walks pitchside, smiling',
        caption: 'Pitchside at Broadhurst Park',
      },
      {
        src: '/images/events/football-event-7.webp',
        alt: "Players celebrate, one holding aloft a trophy engraved 'The Len Johnson Cup — Manchester's Uncrowned Boxing Champion'",
        caption: 'Celebrating with the Len Johnson Cup',
      },
      {
        src: '/images/events/football-event-8.webp',
        alt: 'A player holds a small bronze boxer statuette aloft against the sky, pitchside at Broadhurst Park',
        caption: 'A boxer statuette, held up pitchside',
      },
      {
        src: '/images/events/football-event-10.webp',
        alt: 'Players celebrate together, arms raised, running across the pitch',
        caption: 'A celebration on the pitch',
      },
      {
        src: '/images/events/football-event-11.webp',
        alt: 'Two players pose by the goalpost, one holding the match ball',
        caption: 'By the goalpost, Broadhurst Park',
      },
    ],
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
    gallery: [
      {
        src: '/images/events/ko-blow.webp',
        alt: 'A large group of young people and youth workers pose together in a community hall after a performance, beneath banners reading Love and Peace',
        caption: 'After a performance, in a Manchester community hall',
      },
      {
        src: '/images/events/len-play.webp',
        alt: 'The cast and campaign visit a museum display on the Manchester Fifth Pan-African Congress of 1945, alongside a boxer statuette',
        caption: 'Cast and campaign at an exhibition on the 1945 Manchester Pan-African Congress',
      },
      {
        src: '/images/events/ko-blow-2.webp',
        alt: 'A school group poses together holding printed Len Johnson name cards from the workshop',
        caption: 'A school workshop, with Len Johnson name cards',
      },
    ],
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
      src: '/images/events/breaking-barz-1.webp',
      alt: 'A group of friends pose together outside the Old Abbey Taphouse, under its Free House sign, at a Breaking Barz night',
      caption: 'Breaking Barz, outside the Old Abbey Taphouse',
    },
    document: {
      src: '/images/breaking-barz.webp',
      alt: "Breaking Barz — the music night celebrating Len Johnson's resistance",
      caption: 'Breaking Barz poster',
    },
    gallery: [
      {
        src: '/images/events/breaking-barz-promo.webp',
        alt: 'Factory International presents Breaking Barz, Black History Month, at Aviva Studios — poster with an archival photograph of Len Johnson in a boxing stance',
        caption: 'Breaking Barz, Black History Month — Aviva Studios',
      },
      {
        src: '/images/events/breaking-barz-promo-2.webp',
        alt: 'Factory International presents Breaking Barz: Misha B, Black History Month, at Aviva Studios, 30 October',
        caption: 'Breaking Barz: Misha B — Aviva Studios',
      },
    ],
    variant: 'photo',
  },
  {
    id: 'len-johnson-cup',
    archiveNo: '004',
    year: 'n.d.',
    title: 'The Len Johnson Community Cup',
    location: 'Moss Side Fire Station Boxing Club, Manchester',
    category: 'Community & boxing',
    // Description limited to what the photographs themselves show, plus the
    // venue as confirmed directly by the campaign — no date is recorded, so
    // none is claimed.
    body: [
      "A trophy engraved ‘The Len Johnson Cup — Manchester's Uncrowned Boxing Champion — The People's Champion — 135 fights, 95 wins’, presented to Moss Side Fire Station Boxing Club.",
      "Campaign volunteers take Len's story out to park stalls, boxing gyms and community groups, sharing his history with a new generation.",
    ],
    image: {
      src: '/images/events/community-cup.webp',
      alt: 'The Moss Side Fire Station Boxing Club team pose together holding the Len Johnson Cup trophy',
      caption: 'The Len Johnson Cup, presented to Moss Side Fire Station Boxing Club',
    },
    document: {
      src: '/images/events/community-day-2.webp',
      alt: 'Two children with face paint hold Len Johnson Campaign leaflets beside the Len Johnson Cup trophy in a park',
      caption: 'Len Johnson Campaign stall, with the Cup and campaign literature',
    },
    gallery: [
      {
        src: '/images/events/community-day.webp',
        alt: 'Campaign supporters at a park stall hold Len Johnson Campaign leaflets and boxing gloves beside the Cup',
        caption: 'The Campaign stall, in the park',
      },
      {
        src: '/images/events/community-work.webp',
        alt: 'Campaign members in conversation with community elders in a Manchester boxing gym',
        caption: 'In conversation with community elders at a boxing gym',
      },
      {
        src: '/images/events/community-work-1.webp',
        alt: 'Campaign supporters at a boxing gym hold a canvas portrait of Len Johnson in his boxing stance',
        caption: 'Campaign supporters with a portrait of Len Johnson, at a boxing gym',
      },
      {
        src: '/images/events/community-work-2.webp',
        alt: 'Campaign supporters at an exhibition on Manchester history, beside a display case with a boxer statuette',
        caption: 'Visiting an exhibition on Len Johnson’s Manchester',
      },
    ],
    variant: 'photo',
  },
];
