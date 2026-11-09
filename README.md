# Tiger Homepage

Bilingual academic site: English at `/`, Chinese at `/zh/`, notes at `/blog/`.

## Setup

Node 20+. Use the committed lockfile.

```bash
npm ci
npm run dev
```

```bash
npm run check    # type check
npm run build    # check + static build → dist/
npm run preview  # serve the build
```

## Content

| What | Where |
| --- | --- |
| Profile, emails | `src/components/sections/Hero.astro` |
| Overview cards | `src/components/sections/AboutCards.astro` |
| Education / work | `src/components/sections/Timeline.astro` |
| Merits / service | `src/components/sections/Recognition.astro` |
| Supervisors | `src/components/ui/Supervisors.astro` |
| Papers | `src/content/publications/` (`order`, `equalContribution`, `links.pdf`) |
| Conference logos | `src/data/conferences.ts` |
| Shared copy | `src/i18n/ui.ts` |
| Photos | `src/components/sections/HeroGallery.astro` + `public/images/gallery/` |

Both homepages share the same components. After copy or layout changes, check `/` and `/zh/`.

## Deploy

Pushes to `main` (or a manual workflow run) build and publish `dist/` to GitHub Pages. Site URL is in `astro.config.mjs`.
