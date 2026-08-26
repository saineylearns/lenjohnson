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
 * `voice` picks "I" for an individual or "we" for an organisation,
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

export type ChampionType = 'Individual' | 'Organisation';

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

/**
 * No Champions announced yet. While this array is empty the page holds open
 * CHAMPION_SLOTS vacant entries instead — the prompts every Champion will
 * answer, each one reading "Coming soon" — so the section shows the shape of
 * what's coming rather than a placeholder name pretending to be real.
 *
 * Adding the first real Champion is one object in this array; the vacant
 * slots disappear on their own the moment there is anything to show. Shape:
 *
 *   {
 *     id: 'jane-doe',
 *     name: 'Jane Doe',
 *     type: 'Individual',
 *     categories: ['Fundraising', 'Anti-racism'],
 *     voice: 'I',
 *     statement: { whoAndWhat: '…', whyLen: '…', whySupport: '…', whatWeWillDo: '…' },
 *     social: { label: '@janedoe', href: 'https://…' },
 *   }
 */
export const CHAMPIONS: Champion[] = [];

/** How many vacant entries to hold open until real Champions land. */
export const CHAMPION_SLOTS = 6;

export const ALL_CATEGORIES: ChampionCategory[] = [
  'Anti-racism',
  'Community education',
  'Sport',
  'Culture & arts',
  'Fundraising',
  'Mental health',
];

/**
 * Everyone else who's chipped in — the ledger. Lighter-weight than a full
 * Champion entry: a name and a line about what they did, nothing more, so
 * adding a supporter here is one object, not a whole statement. Two
 * prototype rows, same as the single Jane Doe Champion above — replace with
 * real names as they come in.
 */
export type Supporter = {
  name: string;
  contribution: string;
};

export const OTHERS: Supporter[] = [
  { name: 'John Smith', contribution: 'Donated the printing for our first flyers' },
  { name: 'Ardwick Amateur Boxing Club', contribution: 'Hosted our launch night' },
];
