/**
 * Len Johnson Community Champions — Option A: a repo-local data file.
 *
 * This is the whole "CMS" for the Champions page. To add, edit or remove a
 * Champion, edit the CHAMPIONS array below and redeploy — no admin panel,
 * no spreadsheet sync. The shape is deliberately flat and JSON-friendly so
 * it could be swapped later for a spreadsheet- or headless-CMS-backed source
 * (fetched at build time) without changing the page or card components.
 *
 * Photos: drop a file in /public/images/champions/ and point `photo` at it
 * (e.g. "/images/champions/jane-doe.jpg"). Leave `photo` unset and the card
 * falls back to an initials badge, so a Champion can go live before their
 * photo is in hand.
 */

export type ChampionCategory =
  | 'Anti-racism'
  | 'Community education'
  | 'Sport'
  | 'Culture & arts'
  | 'Fundraising'
  | 'Mental health';

export type ChampionType = 'Individual' | 'Business' | 'Organisation';

export type Champion = {
  /** URL-safe, stable id — used as the React key and for deep-linking later. */
  id: string;
  name: string;
  type: ChampionType;
  categories: ChampionCategory[];
  /** One line, shown on the closed card. */
  blurb: string;
  /** Longer statement, shown when the card is expanded. */
  story: string;
  /** Short "what they've done" line, shown when expanded. */
  contribution: string;
  photo?: string;
  social?: {
    label: string;
    href: string;
  };
};

// Placeholder entries for the prototype — spanning all three Champion types
// and a mix of categories, so the layout can be reviewed before real
// Champions are confirmed. Replace freely.
export const CHAMPIONS: Champion[] = [
  {
    id: 'moss-side-fire-station-boxing-club',
    name: 'Moss Side Fire Station Boxing Club',
    type: 'Organisation',
    categories: ['Sport', 'Community education'],
    blurb: 'Awards the annual Len Johnson Community Cup and trains the next generation in Len’s home neighbourhood.',
    story:
      'Since 2021 the club has run the Len Johnson Community Cup, keeping Len’s name inside the sport he was never allowed to be crowned in. Coaches volunteer their time to bring boxing to young people across Moss Side, pairing training with mentoring.',
    contribution: 'Established and runs the Len Johnson Community Cup since 2021.',
    social: { label: '@mossfireabc', href: 'https://instagram.com' },
  },
  {
    id: 'old-abbey-taphouse',
    name: 'Old Abbey Taphouse',
    type: 'Business',
    categories: ['Anti-racism', 'Culture & arts'],
    blurb: 'Commissioned a mural marking the breaking of the colour bar, and hosts an annual ‘drink for Len’.',
    story:
      'The Old Abbey pub is where Len was refused a drink in 1953 because of the colour of his skin — and where, four nights later, two hundred protestors forced the ban to be lifted. Today’s Taphouse commissioned a mural to keep that story visible, and gathers people every October for a drink in Len’s memory.',
    contribution: 'Commissioned the Len Johnson mural; hosts the annual October ‘drink for Len’.',
    social: { label: 'oldabbeytaphouse.com', href: 'https://oldabbeytaphouse.com' },
  },
  {
    id: 'breaking-barz',
    name: 'Breaking Barz',
    type: 'Organisation',
    categories: ['Culture & arts', 'Community education'],
    blurb: 'A regular music night celebrating Len’s resistance and giving a stage to local artists.',
    story:
      'Launched in 2021, Breaking Barz turns Len’s story into a live, ongoing celebration — spoken word, music and performance from Manchester artists, staged in his name rather than just written about him.',
    contribution: 'Runs a recurring celebratory music night in Len Johnson’s name.',
    social: { label: '@breakingbarz', href: 'https://instagram.com' },
  },
  {
    id: 'working-class-movement-library',
    name: 'Working Class Movement Library',
    type: 'Organisation',
    categories: ['Community education'],
    blurb: 'Cares for the Len Johnson archive, including a scrapbook of newspaper cuttings from his boxing career.',
    story:
      'The Library in Salford holds the collection of archives from Len Johnson’s own papers, giving researchers, students and the campaign itself a primary source for his life — without which much of this story would have been lost.',
    contribution: 'Preserves and makes accessible the Len Johnson archive collection.',
    social: { label: 'wcml.org.uk', href: 'https://wcml.org.uk' },
  },
  {
    id: 'jane-doe',
    name: 'Jane Doe',
    type: 'Individual',
    categories: ['Fundraising', 'Anti-racism'],
    blurb: 'Manchester campaigner who has raised over £1,000 sharing Len’s story across her networks.',
    story:
      'Jane heard about Len’s story through the statue campaign and set herself a target to raise £1,000 for the crowdfunder. She smashed it within a fortnight, and now speaks at local schools about the history of the colour bar in British boxing.',
    contribution: 'Raised over £1,000 for the campaign and speaks in local schools.',
    social: { label: '@janedoe', href: 'https://twitter.com' },
  },
  {
    id: 'taslim-martin-studio',
    name: 'Taslim Martin Studio',
    type: 'Business',
    categories: ['Culture & arts'],
    blurb: 'The sculptor’s studio bringing Len’s statue from commission to unveiling.',
    story:
      'Taslim Martin’s studio is turning years of campaigning into a permanent public artwork — a statue that will stand in Manchester as a lasting, physical recognition of Len’s life and struggle.',
    contribution: 'Sculpting the Len Johnson statue for its planned unveiling.',
    social: { label: 'taslimmartin.com', href: 'https://taslimmartin.com' },
  },
];

export const ALL_CATEGORIES: ChampionCategory[] = [
  'Anti-racism',
  'Community education',
  'Sport',
  'Culture & arts',
  'Fundraising',
  'Mental health',
];
