# Tiger Homepage

Bilingual academic homepage built with Astro, Tailwind CSS, and React icons.

- English homepage: `/`
- Simplified Chinese homepage: `/zh/`
- Existing English notes: `/blog/`

## Development

Use Node.js 20 or later and the committed lockfile:

```bash
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

`npm run build` checks Astro/TypeScript and generates the static site in `dist/`.

## Project structure

```text
.github/workflows/deploy.yml      GitHub Pages deployment
public/
  favicon.png                    Browser icon
  images/logos/
    organizations/               University and company logos
    conferences/                 Conference logos
src/
  components/
    sections/                    Homepage sections: Hero, AboutCards,
                                 PublicationList, Timeline, Recognition
    ui/                          Language/theme controls, icons,
                                 section headings, supervisor links
  content/
    config.ts                    Publication and blog schemas
    publications/                One Markdown record per paper
    blog/                        Existing technical notes
  data/conferences.ts            Conference logos, cities, source URLs
  i18n/ui.ts                     Shared Simplified Chinese translations
  layouts/BaseLayout.astro       Metadata, navigation, footer, analytics
  pages/                         English, Chinese, and blog routes
  styles/global.css              Shared styles and responsive layout
```

Keep route files in `src/pages/`; Astro derives their URLs from these paths.
Place directly served images in `public/` and reference them with root-relative URLs.
Dependencies (`node_modules/`), generated types/cache (`.astro/`), and build output
(`dist/`) are ignored and should not be committed.

## Editing content

- **Profile and inquiry emails:** `src/components/sections/Hero.astro`
- **Overview cards:** `src/components/sections/AboutCards.astro`
- **Education and work:** `src/components/sections/Timeline.astro`
- **Merits and service:** `src/components/sections/Recognition.astro`
- **Supervisor names and websites:** `src/components/ui/Supervisors.astro`
- **Publications:** `src/content/publications/`; `order` controls display order,
  `equalContribution` marks co-first authors, and `links.pdf` is the paper link.
- **Conference metadata:** `src/data/conferences.ts`
- **Translations:** shared strings in `src/i18n/ui.ts`; section-specific bilingual
  text lives beside its markup. Paper titles and author names remain in English.

Both homepages use the same components. Verify both languages after content or
layout changes. Company links use `paradoox.ai` in English and `paradoox.cn` in Chinese.

## Logo sources

Conference logos were retrieved from the organizers' official websites:

- [EMNLP 2026](https://2026.emnlp.org/): `assets/images/logos/emnlp_2026_logo_v1.png`
- [NeurIPS](https://neurips.cc/Conferences/2025): `static/core/img/NeurIPS-logo.svg`
- [IJCAI 2025](https://2025.ijcai.org/): `wp-content/themes/astra-child/img/IJCAI2025_Montreal_Logo.png`
- [VLDB 2025](https://vldb.org/2025/): `img/vldb2025_logo_simple.png`

The Paradoox AI logo and favicon were supplied by the site owner. University and
Measurable AI logos are retained from the existing site.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on pushes to
`main`, or through a manual workflow run. The published artifact is `dist/`.
The site URL is configured in `astro.config.mjs`. For a future custom domain,
add its hostname to `public/CNAME` so Astro includes it in the deployment.
