# giuseppedesantis.net

Personal site of Giuseppe de Santis — a single static page built with
[Astro](https://astro.build) and Tailwind CSS v4.

## Requirements

- Node 22 (see `.nvmrc`)
- pnpm 11 (`corepack enable`)

## Commands

| Command        | Action                                            |
| -------------- | ------------------------------------------------- |
| `pnpm dev`     | Dev server at http://localhost:4321               |
| `pnpm build`   | `astro check` (typecheck) then a production build |
| `pnpm preview` | Serve the built `dist/`                           |
| `pnpm lint`    | ESLint                                            |
| `pnpm format`  | Prettier (Astro + Tailwind class-sort plugins)    |
| `pnpm e2e`     | Playwright smoke tests (auto-builds + previews)   |
| `pnpm lhci`    | Lighthouse CI against a local production build    |

## Configuration

Copy `.env.sample` to `.env` and set `GTAG_ID` to enable Google Analytics
(the tag renders only when the variable is present).

## Structure

- `src/pages/` — routes (`index.astro`, `robots.txt.ts`)
- `src/layouts/BaseLayout.astro` — the HTML shell
- `src/components/shell/` — `Meta.astro` (SEO/OG/JSON-LD), `GoogleTag.astro`
- `src/components/` — `SocialLinks.astro` and `icons/`
- `src/styles/global.css` — Tailwind v4 entry + theme tokens
- `src/site.ts` — site metadata and the social-profile list
- `src/scripts/htmlMinifier.mjs` — post-build HTML minification integration
