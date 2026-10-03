/**
 * Single source of truth for everything factual on the site.
 * Edit here and every page updates. Items marked VERIFY were gathered
 * from public directory listings and should be confirmed by the marina.
 */

export const marina = {
  name: 'Riverwalk Marina',
  legalName: 'Riverwalk Marina LLC',
  tagline: 'Your home port on the Tennessee River',
  description:
    'Full-service marina on Wheeler Lake in Decatur, Alabama. Covered and open wet slips, fuel dock, boat ramp, ship store, repair service and rentals minutes from downtown Decatur.',
  established: 1995,

  address: {
    street: '3755 Highway 31 N',
    city: 'Decatur',
    state: 'AL',
    zip: '35601',
    landmark: 'At the foot of the Hudson Memorial Bridge',
  },

  // Decimal coordinates for the map embed and schema.org markup.
  geo: { lat: 34.6213, lng: -86.9697 }, // VERIFY against the actual dock location

  phone: {
    main: '(256) 340-9170',
    mainHref: 'tel:+12563409170',
    alt: '(256) 990-1754', // VERIFY: second number appears in several listings
    altHref: 'tel:+12569901754',
  },
  email: '', // VERIFY: add the marina's public email when known

  /** Dockwa booking page for the marina. Shown as "Marina Portal" in the nav and footer, and as a booking button on the slips page. */
  portalUrl:
    'https://dockwa.com/explore/destination/55cpgrn-riverwalk-marina?utm_campaign=marina_site_referral&utm_medium=web_badge&utm_source=55cpgrn-riverwalk-marina&form=transient',
  portalLabel: 'Marina Portal',

  social: {
    facebook: 'https://www.facebook.com/riverwalksteve/', // VERIFY
  },

  hours: {
    marina: [
      { days: 'Monday – Sunday', open: '8:00 AM', close: '5:00 PM' },
    ],
    note: 'Fuel dock and ship store follow marina hours. After-hours fuel is not available.',
  },

  /**
   * Fuel prices shown on the home page and the fuel section. Update the
   * prices and the date together whenever the pump price changes.
   */
  fuel: {
    updated: '2026-07-21',
    items: [
      { label: 'Regular gas', price: 4.99 },
      { label: 'Diesel', price: 4.99 },
    ],
    note: 'Prices are per gallon and can change daily. Call to confirm before a long run.',
  },

  /** Dockwa reservation policy. */
  cancellationPolicy: '24-hour cancellation',

  water: {
    body: 'Wheeler Lake, Tennessee River',
    mileMarker: 'TRM 305.0, right descending bank',
    approachDepth: '10 ft',
    docksideDepth: '10 ft',
    dockType: 'Floating docks',
  },

  slips: {
    total: 135,
    minLength: 15,
    types: ['Covered wet slips', 'Open (uncovered) wet slips', 'Sailboat slips on C-Dock', 'Transient dockage'],
    sailboatSlips: 12,
    transientSlips: 2,
    included: ['Shore power (30A/50A)', 'Fresh water hookups', 'Restrooms', 'Secure lighted docks', 'Ample trailer and vehicle parking'],
  },

  services: [
    {
      slug: 'fuel',
      title: 'Fuel Dock',
      short: 'Regular gas and diesel, right at the water.',
      details:
        'Pull up to our floating fuel dock for regular gas and diesel. Staff are on hand during marina hours to help you tie up and top off.',
      icon: 'fuel',
    },
    {
      slug: 'ramp',
      title: 'Boat Ramp',
      short: 'Easy launch and retrieval with trailer parking.',
      details:
        'Our concrete ramp gives you quick access to Wheeler Lake with plenty of room to stage and park your trailer while you are out on the water.',
      icon: 'ramp',
    },
    {
      slug: 'store',
      title: 'Ship Store',
      short: 'Parts, accessories, ice, bait and boating supplies.',
      details:
        'Forgot something? The ship store stocks engine parts and accessories, safety gear, oil and fluids, cleaning supplies, ice, snacks and cold drinks.',
      icon: 'store',
    },
    {
      slug: 'repair',
      title: 'Service & Repair',
      short: 'Hull, engine and propeller work by people who know the river.',
      details:
        'From routine maintenance to engine diagnostics, hull repair and prop work, our service team keeps you on the water. Call ahead to schedule.',
      icon: 'wrench',
    },
    {
      slug: 'storage',
      title: 'Long-Term Storage',
      short: 'Keep your boat here year-round or for the season.',
      details:
        'Seasonal and annual slip leases let you leave the trailer at home. Ask about availability for covered slips, which fill quickly each spring.',
      icon: 'anchor',
    },
    {
      slug: 'rentals',
      title: 'Rentals',
      short: 'Pontoons, kayaks, canoes and paddleboards.',
      details:
        'No boat? No problem. Rent a pontoon for the day or grab a kayak, canoe or paddleboard and explore the quiet backwaters around the marina.',
      icon: 'paddle',
    },
  ],

  rentals: [
    {
      title: 'Pontoon Boats',
      blurb:
        'Comfortable, easy-to-drive pontoons for a day of cruising, swimming and sunbathing on Wheeler Lake. Life jackets included. Half-day and full-day rates.',
      requirements: 'Driver must be 21+ with a valid license. Alabama boater education requirements apply.',
    },
    {
      title: 'Kayaks & Canoes',
      blurb:
        'Single and tandem kayaks plus canoes for exploring the sloughs and shoreline near the marina. Paddles and life jackets included.',
      requirements: 'Hourly and half-day rates. Children must be accompanied by an adult.',
    },
    {
      title: 'Paddleboards',
      blurb:
        'Stand-up paddleboards for a calm-morning workout or an easy float with friends.',
      requirements: 'Hourly and half-day rates. Basic swimming ability required.',
    },
  ],

  driving: [
    { from: 'Downtown Decatur', time: 'Minutes away' },
    { from: 'I-65', time: 'Just minutes' },
    { from: 'Huntsville', time: 'About 25 minutes' },
    { from: 'Redstone Arsenal', time: '20–25 minutes' },
  ],

  /**
   * Home page hero media. Files live in /public. If the video is missing at
   * build time the illustrated scene is shown instead. Keep the video short
   * (10–20 s), muted, and under ~5 MB; the poster shows while it loads.
   */
  hero: {
    video: '/videos/hero.mp4',
    videoWebm: '/videos/hero.webm',
    poster: '/images/hero-poster.jpg',
  },

  /**
   * Contact form handling. Leave empty to fall back to an email link.
   * Examples: 'https://formspree.io/f/xxxxxxxx' or Netlify Forms (set netlify: true).
   */
  form: {
    endpoint: '',
    netlify: false,
  },
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/slips/', label: 'Slips & Storage' },
  { href: '/services/', label: 'Fuel & Services' },
  { href: '/rentals/', label: 'Rentals' },
  { href: '/visit/', label: 'Visit & Contact' },
] as const;

export const fullAddress = `${marina.address.street}, ${marina.address.city}, ${marina.address.state} ${marina.address.zip}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Riverwalk Marina ${fullAddress}`,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `Riverwalk Marina ${fullAddress}`,
)}&output=embed`;
