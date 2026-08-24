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
 * falls back to a monogram plate, so a Champion can go live before their
 * photo is in hand.
 *
 * The statement is deliberately in the Champion's own words, answering the
 * same three prompts every time:
 *   1. Who am/are I/we, and what do I/we do?
 *   2. Honouring Len Johnson is not just about the past because ....
 *   3. I'm / We're proud to support the Len Johnson Campaign because ....
 * ...and closing with what they're actually going to do:
 *   4. Here's what I'm / we're going to do.
 * `voice` picks "I" for an individual or "we" for a business/organisation,
 * so the page can render the right pronoun in every prompt without it
 * needing to be typed out (or gendered) by hand each time.
 */

export type ChampionCategory =
  | 'Anti-racism'
  | 'Community education'
  | 'Sport'
  | 'Culture & arts'
  | 'Fundraising'
  | 'Mental health';

export type ChampionType = 'Individual' | 'Business' | 'Organisation';

export type ChampionVoice = 'I' | 'we';

export type ChampionStatement = {
  /** "Who am I/we, and what do I/we do?" */
  whoAndWhat: string;
  /** "Honouring Len Johnson is not just about the past because ...." */
  whyLen: string;
  /** "I'm / We're proud to support the Len Johnson Campaign because ...." */
  whySupport: string;
  /** "Here's what I'm / we're going to do." */
  whatWeWillDo: string;
};

export type Champion = {
  /** URL-safe, stable id — used as the React key and for deep-linking later. */
  id: string;
  name: string;
  type: ChampionType;
  categories: ChampionCategory[];
  /** Picks "I"/"my" or "we"/"our" throughout the statement and closing line. */
  voice: ChampionVoice;
  statement: ChampionStatement;
  photo?: string;
  social?: {
    label: string;
    href: string;
  };
};

// A single prototype entry — Jane Doe — to show the shape and tone the real
// Champion statements will take. Replace with real submissions as they come
// in; each new Champion is just another object in this array.
export const CHAMPIONS: Champion[] = [
  {
    id: 'jane-doe',
    name: 'Jane Doe',
    type: 'Individual',
    categories: ['Fundraising', 'Anti-racism'],
    voice: 'I',
    statement: {
      whoAndWhat:
        'I’m a Manchester campaigner who first heard Len’s story through the statue appeal, and now spend my spare time fundraising and talking to schools about it.',
      whyLen:
        'young people in this city still don’t know his name, and the same arguments about who gets to belong here haven’t gone away.',
      whySupport:
        'it’s honest about Manchester’s history — the good and the shameful — and is led by people who actually knew Len’s story, not an institution telling it for them.',
      whatWeWillDo:
        'keep sharing the crowdfunder with my networks, and take the story into two more schools before the statue is unveiled.',
    },
    social: { label: '@janedoe', href: 'https://twitter.com' },
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
