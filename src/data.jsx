/* global window */

// ============================================================
// Nick & Sons Handyman Services — content
// Family handyman business serving Tampa Bay and surrounding areas.
// ============================================================

const BRAND = {
  name: "Nick & Sons",
  full: "Nick & Sons Handyman Services",
  tagline: "Family-run handyman services across Tampa Bay and beyond.",
  license: "Licensed & Insured",
  phoneTampa: "(727) 967-4912",
  phoneTampaTel: "+17279674912",
  phoneStPete: "(727) 810-7444",
  phoneStPeteTel: "+17278107444",
  email: "niknsonshandyman@yahoo.com",
  address: "Tampa Bay, FL",
  yearsBiz: "12+",
  projects: "400+",
  awards: "Family-owned",
  features: "Licensed",
  founder: "Nick & The Sons",
  founderNote: "~Nick, Founder",
};

const PROMISE = [
  "Free On-Site Estimates",
  "Father-and-Sons Crew",
  "No Job Too Small",
];

const DIFFS = [
  {
    kicker: "One call, one crew, one job done.",
    title: "The *whole* fix — not just half of it.",
    body: "Most homeowners we meet have a list of small things they've been putting off because no contractor wants to come out for a single door, a torn screen, or a wobbly ceiling fan. We do. Group your honey-do list, knock it out in one visit, and stop juggling four different specialists for jobs that should take an afternoon.",
    img: "assets/placeholders/diff-one-call.svg",
  },
  {
    kicker: "Tell us what you want, get it.",
    title: "Quotes that *actually* mean something.",
    body: "Stop chasing estimates that show up two weeks later with surprise fees. We walk your project the same day when we can, write up a clear flat price, and stick to it. No hourly meter, no \"while we're here\" upsells. What you sign for is what you pay.",
    img: "assets/placeholders/drywall-paint.svg",
  },
  {
    kicker: "Treated like family, because we are one.",
    title: "A father-and-sons crew that *shows up.*",
    body: "Nick trained the boys himself — every cut, every repair, every cleanup. You'll never wonder who's pulling into your driveway. The same faces show up, on time, with shoes off and drop cloths down. We've been doing this in Pinellas for over a decade, and we plan to keep doing it for the next one.",
    img: "assets/placeholders/diff-family.svg",
  },
];

const SERVICES = [
  {
    slug: "interior-exterior",
    name: "Interior & Exterior",
    short: "Inside or outside the house — patching, painting, trim, repairs, refresh work. Anything that keeps a home looking sharp, inside out.",
    image: "assets/placeholders/interior-exterior.svg",
    scope: ["Interior repairs & refresh", "Exterior patching & paint", "Pressure washing prep", "Caulking & weather sealing"],
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    short: "Holes, cracks, water damage, popped tape. Patched, skimmed, sanded, and textured to blend with the rest of the wall.",
    image: "assets/placeholders/drywall-repair.svg",
    scope: ["Hole patching", "Crack & seam repair", "Skim coat & texture match", "Ceiling repairs"],
  },
  {
    slug: "painting-staining",
    name: "Painting / Staining",
    short: "Interior, exterior, fences, decks, doors, cabinets. Proper prep, two coats, clean cut-lines. Stain work for any wood that needs it.",
    image: "assets/placeholders/painting-staining.svg",
    scope: ["Interior painting", "Exterior painting", "Cabinet & door refinishing", "Deck & fence staining"],
  },
  {
    slug: "kitchens-bathrooms-bedrooms",
    name: "Kitchens, Baths & Bedrooms",
    short: "Cabinet swaps, vanity installs, fixture changeouts, closet build-outs. Room refreshes that don't need a general contractor.",
    image: "assets/placeholders/kitchens-baths-bedrooms.svg",
    scope: ["Cabinet & vanity install", "Fixture replacement", "Closet build-outs", "Bedroom refreshes"],
  },
  {
    slug: "flooring",
    name: "Flooring",
    short: "LVP, laminate, vinyl, hardwood, tile — install, repair, or replace. Subfloor leveling included where it's needed.",
    image: "assets/placeholders/flooring.svg",
    scope: ["Luxury vinyl plank", "Laminate & hardwood", "Tile installation", "Subfloor prep & leveling"],
  },
  {
    slug: "doors",
    name: "Doors",
    short: "Interior and exterior doors hung straight. Replacement slabs, pre-hung units, sliding glass, screen doors, hardware swaps.",
    image: "assets/placeholders/doors.svg",
    scope: ["Interior door hang", "Exterior door install", "Sliding & screen doors", "Lock & hardware"],
  },
  {
    slug: "trim-work",
    name: "Trim Work",
    short: "Baseboard, crown, casing, chair rail, wainscoting. Mitered, caulked, and painted to match. The detail work that finishes a room.",
    image: "assets/placeholders/trim-work.svg",
    scope: ["Baseboard & crown", "Casing & chair rail", "Wainscoting", "Trim repair"],
  },
  {
    slug: "cleanup-hauling",
    name: "Cleanup / Hauling",
    short: "Junk removal, garage cleanouts, post-renovation hauling, storm debris. Flat-priced trailer load — we do the lifting.",
    image: "assets/placeholders/cleanup-hauling.svg",
    scope: ["Junk & debris removal", "Garage cleanouts", "Storm cleanup", "Post-reno haul-away"],
  },
  {
    slug: "furniture-assembly",
    name: "Furniture Assembly",
    short: "IKEA, Wayfair, Amazon, Costco — whatever shows up flat-packed. We bring the tools, you skip the four-hour Sunday afternoon.",
    image: "assets/placeholders/furniture-assembly.svg",
    scope: ["Flat-pack furniture", "Office desks & chairs", "Outdoor furniture", "Wall mounting"],
  },
];

const STATS = [
  { num: "12+", label: "Years in business" },
  { num: "400+", label: "Tampa Bay jobs" },
  { num: "2nd", label: "Generation crew" },
  { num: "L&I", label: "Licensed & Insured" },
];

const TESTIMONIALS = [
  {
    quote: "Nick fixed in one morning what three other guys wouldn't even quote.",
    body: "I had a list of seven small things — drywall hole, sticky bedroom door, a torn screen, two ceiling fans, baseboard separating from the wall, plus a busted closet shelf. Nick and one of his sons came out, gave me a flat price on the spot, and knocked it all out in about four hours. Cleaned up like they were never here. We'll be calling them every time something pops up.",
    author: "Karen S.",
    location: "Seminole, FL",
    service: "General Handyman",
  },
  {
    quote: "Quoted exactly what they charged. Refreshing.",
    body: "Asked for a quote on painting the whole interior of our condo plus replacing two interior doors. Nick came out the next morning, measured everything, emailed me a flat price that afternoon, and started Monday. Final invoice matched the quote to the dollar. The boys are polite, on time, and clearly know what they're doing.",
    author: "Ralph &amp; Marie D.",
    location: "St. Petersburg, FL",
    service: "Painting + Doors",
  },
  {
    quote: "Treats every house like it's his own.",
    body: "We've had Nick out three times now — once for flooring in the guest bedroom, once for trim work after a remodel, and once just to assemble a stack of Wayfair furniture. Every visit he wears shoe covers without being asked, lays down drop cloths, and leaves the place cleaner than he found it. That's rare.",
    author: "Joanne M.",
    location: "Largo, FL",
    service: "Multi-visit Client",
  },
  {
    quote: "Hauled a garage worth of junk in a single afternoon.",
    body: "After my dad passed, my brothers and I had to clear out his garage in Pinellas Park. Forty years of accumulation. Nick and his crew showed up with a trailer, gave us a flat price for the whole load, and were done in one day. They were respectful, careful with anything we flagged to keep, and the price was fair. Saved us a week.",
    author: "Mike R.",
    location: "Pinellas Park, FL",
    service: "Cleanup & Hauling",
  },
];

const PROCESS = [
  {
    n: "1",
    word: "Call",
    d: "Call, text, or email with your list — even if it's just one small thing. We'll set a time, often same-week.",
  },
  {
    n: "2",
    word: "Walk",
    d: "We come out and walk your project with you in person. Free, no obligation. You get a flat price in writing before we start.",
  },
  {
    n: "3",
    word: "Done",
    d: "We work clean, finish what we start, and leave your home better than we found it. Final payment only when you're satisfied.",
  },
];

const PORTFOLIO = [
  { slug: "kitchen-paint", title: "Kitchen Repaint", area: "Seminole", tag: "Painting",
    img: "assets/placeholders/kitchen-paint.svg" },
  { slug: "drywall-fix", title: "Drywall Patch & Skim", area: "St. Petersburg", tag: "Drywall",
    img: "assets/placeholders/drywall-fix.svg" },
  { slug: "lvp-floor", title: "Whole-House LVP", area: "Largo", tag: "Flooring",
    img: "assets/placeholders/lvp-floor.svg" },
  { slug: "front-door", title: "Front Door Replace", area: "Pinellas Park", tag: "Doors",
    img: "assets/placeholders/front-door.svg" },
  { slug: "exterior-paint", title: "Exterior Repaint", area: "Clearwater", tag: "Painting",
    img: "assets/placeholders/exterior-paint.svg" },
  { slug: "vanity-swap", title: "Master Vanity Swap", area: "Seminole", tag: "Bath",
    img: "assets/placeholders/vanity-swap.svg" },
  { slug: "crown-trim", title: "Crown & Casing", area: "St. Petersburg", tag: "Trim",
    img: "assets/placeholders/crown-trim.svg" },
  { slug: "garage-cleanout", title: "Garage Cleanout", area: "Pinellas Park", tag: "Hauling",
    img: "assets/placeholders/garage-cleanout.svg" },
  { slug: "closet-buildout", title: "Walk-In Build-Out", area: "Largo", tag: "Bedrooms",
    img: "assets/placeholders/closet-buildout.svg" },
  { slug: "deck-stain", title: "Deck Stain & Seal", area: "Clearwater", tag: "Painting",
    img: "assets/placeholders/deck-stain.svg" },
  { slug: "fan-install", title: "Ceiling Fan Install", area: "Seminole", tag: "Repairs",
    img: "assets/placeholders/fan-install.svg" },
  { slug: "ikea-assembly", title: "Office Furniture Build", area: "St. Petersburg", tag: "Assembly",
    img: "assets/placeholders/ikea-assembly.svg" },
];

// Hero + section imagery — verified handyman/home repair shots
const IMG = {
  hero: "assets/placeholders/hero.svg",
  team: "assets/placeholders/team.svg",
  founder: "assets/placeholders/founder.svg",
  cta: "assets/placeholders/cta.svg",
  newsletter: "assets/placeholders/newsletter.svg",
};

// ─────────────────────────────────────────────────────────────
// LOCATIONS — Tampa Bay & beyond (organized by zone)
// ─────────────────────────────────────────────────────────────
const LOCATIONS = [
  {
    zone: "Home Base",
    radius: "0–15 mi",
    cities: [
      { name: "St. Petersburg", county: "Pinellas" },
      { name: "Seminole",       county: "Pinellas" },
      { name: "Largo",          county: "Pinellas" },
      { name: "Pinellas Park",  county: "Pinellas" },
      { name: "Clearwater",     county: "Pinellas" },
      { name: "Gulfport",       county: "Pinellas" },
      { name: "Treasure Island",county: "Pinellas" },
      { name: "Madeira Beach",  county: "Pinellas" },
      { name: "Indian Rocks",   county: "Pinellas" },
      { name: "Belleair",       county: "Pinellas" },
    ],
  },
  {
    zone: "Tampa Bay Metro",
    radius: "15–35 mi",
    cities: [
      { name: "Tampa",          county: "Hillsborough" },
      { name: "Brandon",        county: "Hillsborough" },
      { name: "Riverview",      county: "Hillsborough" },
      { name: "Apollo Beach",   county: "Hillsborough" },
      { name: "Plant City",     county: "Hillsborough" },
      { name: "Carrollwood",    county: "Hillsborough" },
      { name: "Westchase",      county: "Hillsborough" },
      { name: "Lutz",           county: "Hillsborough" },
      { name: "Town 'n' Country", county: "Hillsborough" },
      { name: "Palm Harbor",    county: "Pinellas" },
      { name: "Tarpon Springs", county: "Pinellas" },
      { name: "Dunedin",        county: "Pinellas" },
      { name: "Safety Harbor",  county: "Pinellas" },
      { name: "Oldsmar",        county: "Pinellas" },
    ],
  },
  {
    zone: "Greater Region",
    radius: "35–60 mi",
    cities: [
      { name: "Wesley Chapel",  county: "Pasco" },
      { name: "Land O' Lakes",  county: "Pasco" },
      { name: "New Port Richey",county: "Pasco" },
      { name: "Zephyrhills",    county: "Pasco" },
      { name: "Dade City",      county: "Pasco" },
      { name: "Bradenton",      county: "Manatee" },
      { name: "Palmetto",       county: "Manatee" },
      { name: "Anna Maria",     county: "Manatee" },
      { name: "Lakewood Ranch", county: "Manatee" },
      { name: "Sarasota",       county: "Sarasota" },
      { name: "Lakeland",       county: "Polk" },
      { name: "Winter Haven",   county: "Polk" },
    ],
  },
  {
    zone: "Extended Service Area",
    radius: "60–100 mi",
    cities: [
      { name: "Spring Hill",    county: "Hernando" },
      { name: "Brooksville",    county: "Hernando" },
      { name: "Venice",         county: "Sarasota" },
      { name: "North Port",     county: "Sarasota" },
      { name: "Punta Gorda",    county: "Charlotte" },
      { name: "Port Charlotte", county: "Charlotte" },
      { name: "Lake Wales",     county: "Polk" },
      { name: "Clermont",       county: "Lake" },
      { name: "Crystal River",  county: "Citrus" },
      { name: "The Villages",   county: "Sumter" },
      { name: "Ocala",          county: "Marion" },
      { name: "Kissimmee",      county: "Osceola" },
      { name: "Orlando",        county: "Orange" },
    ],
  },
];

Object.assign(window, { BRAND, PROMISE, DIFFS, SERVICES, STATS, TESTIMONIALS, PROCESS, PORTFOLIO, IMG, LOCATIONS });
