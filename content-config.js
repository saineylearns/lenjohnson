// content-config.js - All editable text for the Len Johnson Campaign website
// Edit text here, commit to git, and Netlify rebuilds automatically

export const content = {
  // Meta
  meta: {
    title: 'Len Johnson — Uncrowned Champion of Manchester',
    description: 'The story of a boxer denied the title he deserved. A campaign to build a statue of Manchester\'s boxing legend.',
    ogImage: '/images/hero.webp',
  },

  // Hero
  hero: {
    location: 'MANCHESTER · 1902 — 1974',
    descriptors: 'BOXER · ACTIVIST · MANCUNIAN',
    heading: 'A BOXER WHO FOUGHT RACISM IN THE RING AND ON THE STREETS.',
    quote: '"The prejudice against colour has prevented me from getting a championship bout — I know in my heart I shall never achieve those ambitions."',
    quoteAttribution: '— Len Johnson, 1930',
    stats: '95 WINS · 134 BOUTS · 0 TITLES · 36 YEARS THE COLOUR BAR STOOD',
    cta1: 'Donate now',
    cta2: 'Read Len\'s story',
  },

  // Marquee
  marquee: [
    '95 WINS',
    '0 TITLES',
    'UNCROWNED',
    'UNDEFEATED IN SPIRIT',
  ],

  // Chapter 1: Born Into Two Worlds
  chapter1: {
    label: 'CHAPTER ONE',
    heading: 'BORN INTO TWO WORLDS.',
    body1: 'Leonard Benker Johnson was born in Clayton, East Manchester, in 1902.',
    body2: 'His father, William Benker Johnson, had migrated from Sierra Leone as a merchant seaman. His mother, Margaret Maher, was a Mancunian — "Irish and proud of it."',
    body3: 'The interracial marriage meant the family experienced significant racism. Margaret was attacked in the street, suffering permanent disfigurement. Disowned by her own family, the couple found lodgings with the Connell family, who became Len\'s adopted grandparents.',
    imageCaption: 'CLAYTON · 1902',
  },

  // Chapter 2: Boxing
  chapter2: {
    label: 'CHAPTER TWO',
    heading: 'THE BOXING BOOTHS.',
    body1: 'By 1920, Len was fighting professionally as a middleweight boxer.',
    body2: 'Trained by his father in the boxing booths, travelling around fairgrounds, he won 95 of his 134 bouts. A record that rivals Muhammad Ali (56 of 61) and Manny Pacquiao (62 of 72).',
    body3: 'In 1928, national newspapers called him Britain\'s "uncrowned champion." Yet despite his dominance, Rule 24 of the British Boxing Board of Control — requiring title contestants to have "two white parents" — denied him a championship bout. For his entire career.',
    imageStat: '95 WINS · 134 BOUTS',
    beatChampions: 'BEAT THE CHAMPIONS. STILL NO BELT.',
    champions: [
      { name: 'TED "KID" LEWIS', year: '1925', description: '"The greatest fighter to ever come out of Britain" — Mike Tyson. Beaten by Len.' },
      { name: 'ROLAND TODD', year: '1926', description: 'European and British middleweight champion. Defeated by Len.' },
      { name: 'LEONE JACOVACCI', year: '1928', description: 'European middleweight champion. Thrashed by Len.' },
      { name: 'MICHELE BONAGLIA', year: '1929', description: 'European light-heavyweight champion. Beaten by Len.' },
    ],
  },

  // Rule 24
  rule24: {
    label: 'CHAPTER THREE · 1911 — 1947',
    heading: 'RULE 24.',
    subtitle: '"TWO WHITE PARENTS."',
    body1: 'Winston Churchill, as Home Secretary in 1911, declared a proposed bout between Black American Jack Johnson and British contender Bombardier Billy Wells illegal. This became the precedent banning all high-profile fights between white and Black boxers.',
    body2: 'The British Boxing Board wrote it directly into its constitution. The colour bar wasn\'t repealed until 1947. By then, Len\'s career was over.',
    yearStat: '36 YEARS',
    yearStatLabel: 'THE COLOUR BAR STOOD',
    quote: 'I am barred from the Albert Hall, from the National Sporting Club and from all fights where there is big money. The prejudice against colour has prevented me from getting a championship bout.',
    quoteAttribution: '— LEN JOHNSON, 1930',
  },

  // Why? Why? Why? Why?
  why: {
    questions: [
      { q: 'WHY NO TITLE?', a: 'Because the British Boxing Board of Control wrote racism into its constitution.' },
      { q: 'WHY NO STATUE?', a: 'Because Black British sporting heroes have been systematically erased from history.' },
      { q: 'WHY NOW?', a: 'Because Manchester deserves to honour the man who organised against racism on its streets.' },
      { q: 'WHY YOU?', a: 'Because every contribution — every voice — builds this monument. Join us.' },
    ],
  },

  // Chapter 4: Beyond Boxing
  chapter4: {
    label: 'CHAPTER FOUR',
    heading: 'BEYOND BOXING.',
    intro1: 'Boxing made him famous. Activism made him important.',
    intro2: 'Len\'s experiences politicised him. A meeting with American activist Paul Robeson at the 1945 Pan-African Congress in Manchester transformed him completely.',
    intro3: 'He wanted to bring Manchester\'s different communities together. He fought systemic injustice with the same energy he\'d brought to the ring — and won battles the boxing establishment never let him fight.',
    timeline: [
      { year: '1945', label: 'PAN-AFRICAN CONGRESS', description: 'Len attended the Fifth Pan-African Congress in Manchester. Meeting Paul Robeson transformed him from athlete into activist.' },
      { year: '1946', label: 'NEW INTERNATIONAL SOCIETY', description: 'Co-founded an anti-racist space in Moss Side — "true internationalism, colonial liberation, peace, the ending of race discrimination."' },
      { year: '1953', label: 'OLD ABBEY PROTEST', description: '200 protestors. Four nights. Colour bar officially revoked. Twelve years before the Race Relations Act made it illegal.' },
    ],
  },

  // Old Abbey
  oldAbbey: {
    label: '1953 · MOSS SIDE',
    heading: '200 PROTESTORS. ONE PUB.',
    body1: 'The Old Abbey pub refused Len a drink. They said they didn\'t serve "coloured" people.',
    body2: 'He didn\'t walk away. Four nights later, he returned with 200 protestors — Black and white together. The colour bar was officially revoked.',
    body3: 'It wasn\'t illegal under the Race Relations Act until 1965. Len\'s direct action forced change — twelve years ahead of the law.',
  },

  // Events
  events: {
    label: 'PRESENT DAY',
    heading: 'EVENTS AND CULTURE.',
    intro: 'The campaign keeps Len\'s legacy alive through community events — music, sport, theatre. From thrilling football matches to vibrant music performances, our events bring people together to celebrate Manchester\'s boxing legend.',
    items: [
      {
        image: 'breaking-barz',
        label: 'MUSIC NIGHT',
        title: 'BREAKING BARZ',
        description: 'A regular music night at the Old Abbey Taphouse — the very pub where Len was denied service. A platform for musicians, spoken word artists, DJs and presenters. 14 events so far including a sold-out night at Band on the Wall.',
        link: 'https://instagram.com/breakingbarzmcr/?hl=en',
        linkText: '@breakingbarzmcr →',
      },
      {
        image: 'charity-match',
        label: 'ANNUAL FIXTURE',
        title: 'CHARITY MATCH',
        description: 'The annual Len Johnson All-Stars vs. FC United Legends. Past players include Joleon Lescott, Ashley Williams, Andy Burnham, plus Angry Ginge, Owen Warner and many more. Over £20,000 raised in two years.',
        link: 'https://instagram.com/lenjohnsonmcr/',
        linkText: '@lenjohnsonmcr →',
      },
      {
        image: 'knockout',
        label: 'THEATRE & EDUCATION',
        title: 'KNOCKOUT BLOW',
        description: 'A community-led play exploring Len\'s life, developed with Odd Arts. Performed to over 5,000 people across Greater Manchester schools, colleges and youth groups. Even shown to councillors in the Town Hall chamber.',
        link: 'https://oddarts.co.uk/knock-out-blow/',
        linkText: 'Learn more →',
      },
    ],
    cta: 'Follow for upcoming events',
  },

  // Champions (In Len's Corner)
  champions: {
    label: 'BACKED BY',
    heading: 'IN LEN\'S CORNER.',
    intro: 'Backed by champions who recognise what Len meant — and still means — to Manchester and to boxing.',
    list: [
      { name: 'ANDY BURNHAM', role: 'MAYOR OF GREATER MANCHESTER' },
      { name: 'ANTHONY JOSHUA', role: 'TWO-TIME WORLD HEAVYWEIGHT CHAMPION' },
      { name: 'RICKY HATTON', role: 'FORMER TWO-WEIGHT WORLD CHAMPION' },
      { name: 'NATASHA JONAS', role: 'UNIFIED LIGHT-MIDDLEWEIGHT CHAMPION' },
      { name: 'TONY BELLEW', role: 'FORMER CRUISERWEIGHT WORLD CHAMPION' },
      { name: 'AMIR KHAN', role: 'FORMER UNIFIED LIGHT-WELTERWEIGHT CHAMPION' },
      { name: 'CARL FRAMPTON', role: 'FORMER TWO-WEIGHT WORLD CHAMPION' },
      { name: 'JOLEON LESCOTT', role: 'PREMIER LEAGUE WINNER' },
      { name: 'ANTHONY CROLLA', role: 'FORMER WORLD CHAMPION' },
    ],
    partnersLabel: 'PARTNERS',
    partners: [
      'ODD ARTS',
      'MAN UTD FOUNDATION',
      'SHOW RACISM THE RED CARD',
      'FC UNITED OF MANCHESTER',
    ],
  },

  // Campaign
  campaign: {
    label: '2020 — PRESENT',
    heading: 'THE CAMPAIGN.',
    intro: 'Following the murder of George Floyd in 2020, a campaign began to build a statue of Len Johnson in Manchester City Centre. Help us deliver justice 100 years late.',
    goals: [
      { number: '01', label: 'CONFIRM THE SITE', description: 'Working with senior council officers to secure a Manchester City Centre location.' },
      { number: '02', label: 'PLANNING PERMISSION', description: 'Applying with volunteer support from senior planners and heritage experts.' },
      { number: '03', label: 'RAISE THE FUNDS', description: 'Building the statue. Securing its maintenance for the next 100 years.' },
    ],
  },

  // The Statue
  statue: {
    label: 'THE MONUMENT',
    heading: 'BRING LEN HOME.',
    intro: 'Sculptor Taslim Martin (creator of the David Oluwale memorial) has been commissioned to create a life-size bronze of Len for Manchester city centre — a permanent meeting point and place of education for the city he served.',
    sculptor: {
      title: 'THE SCULPTOR',
      name: 'TASLIM MARTIN',
      bio: 'Taslim attended Art School in Cardiff and the Royal College of Art in London. He was awarded the Sir Eduardo Paolozzi Travel Scholarship to research West African sculpture. His works are in the permanent collections of the British Museum and the Horniman Gallery.',
      quote: '"This project feels very personal because I connect with Len\'s story."',
    },
    maquette: {
      title: 'THE MAQUETTE',
      label: 'YOUNG LEN · BOXING STANCE',
      description: 'Taslim captured Len as a young fighter — alert, ready, dignified. The final life-size bronze will stand in Manchester city centre. Not towering above passers-by. At eye level. A man of the people, as he lived his life.',
    },
    cta: {
      heading: 'A MEETING POINT. A PLACE OF EDUCATION. A MONUMENT TO RESISTANCE.',
      body: 'We hope Len\'s statue site will become a meeting point and a place of education for Mancunians and visitors for many years to come.',
      button1: 'Donate now',
      button2: 'Get involved',
    },
  },

  // Take Action
  takeAction: {
    label: 'JOIN THE MOVEMENT',
    heading: 'TAKE ACTION.',
    intro: 'Every contribution — every voice — builds this monument. Here\'s how to be part of it.',
    actions: [
      {
        label: 'DONATE',
        title: 'FUND THE STATUE',
        description: 'Direct contributions go towards the bronze, the planning, and the 100-year maintenance fund.',
        cta: 'Donate now',
        link: 'https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue',
        primary: true,
      },
      {
        label: 'GET INVOLVED',
        title: 'JOIN AN EVENT',
        description: 'Breaking Barz, the charity match, Knockout Blow performances — show up, bring people.',
        cta: 'Follow @lenjohnsonmcr',
        link: 'https://instagram.com/lenjohnsonmcr/',
        primary: false,
      },
      {
        label: 'SHARE',
        title: 'TELL LEN\'S STORY',
        description: 'Share with friends, family, your network. The more people know, the louder the call.',
        cta: 'Share on Facebook',
        link: 'https://www.facebook.com/sharer/sharer.php?u=https://lenjohnsoncampaign.co.uk',
        primary: false,
      },
    ],
  },

  // Newsletter
  newsletter: {
    label: 'STAY UPDATED',
    heading: 'GET MONTHLY UPDATES',
    body: 'Be the first to know about campaign milestones, events, and how to support Len\'s legacy.',
    placeholder: 'Enter your email',
    button: 'Subscribe',
  },

  // Press
  press: {
    label: 'IN THE PRESS',
    heading: 'THE WORLD IS TALKING ABOUT LEN.',
    pullQuote: 'He was one of the best boxers in the world — so why don\'t people know his name?',
    pullQuoteAttribution: '— MANCHESTER EVENING NEWS, 2024',
    items: [
      {
        outlet: 'BBC SPORT',
        date: '2020',
        title: 'The boxer with 93 wins who could never become British champion',
        url: 'https://www.bbc.co.uk/sport/boxing/54480882',
        image: '/images/press/bbc.webp',
      },
      {
        outlet: 'SKY SPORTS',
        date: '2020',
        title: 'The uncrowned British Empire champion',
        url: 'https://www.skysports.com/watch/video/sports/boxing/12116758/len-johnson-the-uncrowned-british-empire-champion',
        image: '/images/press/sky.webp',
      },
      {
        outlet: 'MANCHESTER EVENING NEWS',
        date: '2024',
        title: 'He was one of the best boxers in the world',
        url: 'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/one-best-boxers-world-dont-30226520',
        image: '/images/press/men.webp',
      },
      {
        outlet: 'ITV NEWS',
        date: '2024',
        title: 'Charity football match raises money for boxing legend statue',
        url: 'https://www.itv.com/news/granada/2024-05-21/charity-football-match-raises-money-for-boxing-legend-statue',
        image: '/images/charity-match.webp',
      },
      {
        outlet: 'ARCHIVES+',
        date: '2024',
        title: 'Honouring Manchester Boxing Legend Len Johnson',
        url: 'https://manchesterarchiveplus.wordpress.com/2024/10/15/honouring-manchester-boxing-legend-len-johnson/',
        image: '/images/press/archives.webp',
      },
    ],
  },

  // Media galleries
  media: {
    charityMatch: {
      label: 'CHARITY MATCH GALLERY',
      title: 'Len Johnson All-Stars vs FC United Legends',
    },
    breakingBarz: {
      label: 'BREAKING BARZ GALLERY',
      title: 'Music & Culture Nights',
    },
    videos: {
      charityMatch: [
        { title: 'FC United VS Celebrity Team', youtubeId: 'NaIR78fEG2g', channel: 'Skiddle' },
        { title: 'Angry Ginge: 2 Charity Matches In 1 Day', youtubeId: 'V1GRCML2eig', channel: 'angryginge13' },
      ],
      breakingBarz: [
        { title: 'Breaking Barz All-Star Grime Cypher', youtubeId: '5fx-FXHWGBE', channel: 'Pie Radio' },
      ],
      other: [
        { title: 'Len Johnson: British Boxing Champion | Drunk History', youtubeId: 'mubC_K5HCuQ', channel: 'Comedy Central UK' },
      ],
    },
  },

  // Closing
  closing: {
    line1: 'REMEMBER.',
    line2: 'HONOUR.',
    line3: 'BUILD.',
  },

  // Footer
  footer: {
    menu: 'MENU',
    closing: 'BREAK.THE.SILENCE.',
    copyright: 'Community Interest Company. All rights reserved.',
  },

  // Navigation
  nav: {
    brand: 'LEN.JOHNSON.',
    links: [
      { text: 'Story', href: '#story' },
      { text: 'Statue', href: '#statue' },
      { text: 'Len\'s Corner', href: '#champions' },
      { text: 'Take Action', href: '#take-action' },
    ],
  },
}
