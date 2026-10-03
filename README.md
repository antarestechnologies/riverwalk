# Riverwalk Marina website

Rebuilt site for Riverwalk Marina, Decatur, Alabama (Wheeler Lake / Tennessee River).

Built with [Astro](https://astro.build): a static site with no runtime framework. The build output in `dist/` is plain
HTML, CSS and a tiny bit of JavaScript for the mobile menu and contact form.

## Pages

| Path          | Purpose                                                      |
| ------------- | ------------------------------------------------------------ |
| `/`           | Home: hero, quick facts, services grid, slips, rentals, directions |
| `/slips/`     | Covered, open and sailboat slips, transient dockage, storage, slip inquiry form |
| `/services/`  | Fuel dock, boat ramp, ship store, service & repair           |
| `/rentals/`   | Pontoons, kayaks, canoes, paddleboards, rental request form  |
| `/visit/`     | Address, hours, phone, map, directions by car and water, contact form |
| `/404`        | Not-found page                                               |

## Editing content

Almost every fact on the site lives in **`src/data/marina.ts`**: address, phones, hours, slip counts, depths,
services, rental descriptions, drive times and social links. Change it there and every page updates.

Items marked `VERIFY` in that file came from public directory listings rather than the marina itself and should be
confirmed before launch:

- Street address suffix (N vs S) and ZIP (35601 vs 35603)
- Second phone number
- Map coordinates
- Facebook URL and a public email address (currently empty)
- Rental age/licence requirements and the "what's included" lists are reasonable defaults, not confirmed policy

Page copy lives in `src/pages/*.astro`. Shared pieces are in `src/components/` and the global styles and design tokens
in `src/styles/global.css`.

The Hard Dock restaurant has closed, so there is no restaurant page. `/hard-dock/` redirects to the home page in
case old links are still out there.

## Fuel prices

Pump prices live in `src/data/marina.ts` under `fuel`, with the date they were last changed. Update both together;
the home page and the fuel section read from there, and the date is shown so boaters know how fresh the number is.

## Logo

`public/images/logo.png` is the full logo (white on transparent) used in the footer and social image, and
`public/images/logo-anchor.png` is the anchor alone, used in the header and the favicons. Regenerate the favicons and
`og.png` if the logo changes.

## Hero video

The home page hero plays a muted, looping background video when `public/videos/hero.mp4` exists (and `hero.webm` if
present), with `public/images/hero-poster.jpg` shown while it loads. Without those files the illustrated scene is
used. The current clip is the marina drone montage encoded at 720p (about 4 MB each for MP4 and WebM), which is plenty for a background behind the dark overlay. To replace it, encode the new clip the same way and keep it under about 5 MB so the page stays fast on phones. Visitors who
have "reduce motion" turned on see the poster or illustration instead.

## Photos

The site currently uses an illustrated hero (`src/components/HeroScene.astro`) because no photography was available.
To use a real photo, drop it in `public/images/` and replace `<HeroScene />` in `src/pages/index.astro` with an
`<img>` (keep the dark overlay in `.hero::before` so the headline stays readable). `public/images/og.png` is the
social-share preview image; replace it with a 1200x630 photo when one is available.

## Contact forms

Forms are static and need an endpoint to deliver messages. In `src/data/marina.ts` set one of:

- `form.endpoint` to a form service URL (for example Formspree), or
- `form.netlify: true` when hosting on Netlify (Netlify Forms picks the form up automatically).

With neither set, the form opens the visitor's email client addressed to `marina.email`, or shows a message asking
them to call if that is empty too.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built site
npm run check     # type-check the Astro files
```

## Deploying

The repo includes a `vercel.json` that tells Vercel to use the Astro preset, so the project's Framework Preset setting
in the Vercel dashboard can stay on whatever it defaults to.

`npm run build` produces a static `dist/` folder. It deploys unchanged to Netlify, Vercel, Cloudflare Pages,
GitHub Pages or any web host. Set `site` in `astro.config.mjs` to the final domain so the sitemap, canonical URLs and
social previews point at the right place.
