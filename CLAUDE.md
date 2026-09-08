# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

`giuseppedesantis.net` — a personal one-page site (name, role, social links).
Astro + Tailwind CSS v4, static output. Ported from an old Next.js 11 setup.

## Commands

- `pnpm dev` — dev server at http://localhost:4321
- `pnpm build` — `astro check` then `astro build`; the `htmlMinifier` integration
  minifies emitted HTML on `astro:build:done`
- `pnpm check` — typecheck only
- `pnpm preview` — serve `dist/`
- `pnpm lint` / `pnpm format` — ESLint / Prettier
- `pnpm e2e` — Playwright smoke suite. With no `PLAYWRIGHT_BASE_URL` the config
  auto-builds + previews locally; set it to test a deployed URL.
- Single test: `pnpm exec playwright test -g "social profile links"`
- `pnpm lhci` — Lighthouse CI against a local production build

## Architecture

- `src/site.ts` is the single source of site metadata. `SITE` holds
  title/tagline/description/url; `SOCIAL_LINKS` is consumed both by
  `SocialLinks.astro` (icon row) and by the Person JSON-LD in `Meta.astro`.
- `src/layouts/BaseLayout.astro` is the only layout: `<head>` via
  `components/shell/Meta.astro` + `GoogleTag.astro`, then a `<slot />`.
- Styling: Tailwind v4 through `@tailwindcss/vite` (no `tailwind.config`).
  Theme tokens (`--color-background`, `--color-foreground`, `--font-body`) live
  in `src/styles/global.css`, imported once in `BaseLayout`. The default
  palette is reset with `--color-*: initial`.
- Fonts: `@fontsource/fira-sans` (400, 400-italic, 900), imported in
  `global.css`.
- `GoogleTag.astro` renders nothing unless `GTAG_ID` is set (see `.env.sample`).

## TS path aliases

`@/*` → `src/*`, `@components/*`, `@styles/*`. Prefer these over relative paths.

## CI

`.github/workflows/ci.yml`: a `verify` job (lint → check → build → Playwright)
on every push/PR, plus an advisory `lighthouse` job. No Netlify coupling.

## Conventions

- Astro components use Tailwind class soup; class order is enforced by
  `prettier-plugin-tailwindcss`.
- Node 22 (`.nvmrc`); pnpm only (`preinstall` enforces it).
- Do not start or stop dev servers unless asked.
