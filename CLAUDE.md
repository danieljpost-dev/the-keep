# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

The Keep — a Docusaurus 3.7 site (React 19, TypeScript) deployed to GitHub Pages at `the-keep.danieljpost.dev`. Content lives in `docs/` (tutorial sidebar) and `blog/`; theming/overrides go under `src/`, and static assets under `static/`.

## Commands

Package manager is **yarn** (pinned to 1.22.22 in package.json). Node >= 18. GitHub Actions workflows currently use `npm ci` — this is a legacy artifact from the template and can be updated to `yarn` when feasible.

- `yarn start` — local dev server (listens on localhost:3000) with hot reload for all content and theme changes
- `yarn build` — production build into `build/`
- `yarn serve` — serve the built site locally for preview
- `yarn typecheck` — `tsc` (no emit, very fast). **This is the primary quality gate** since there is no test suite; always run before committing
- `yarn clear` — clear Docusaurus cache when the dev server behaves oddly
- `yarn deploy` — publish to the `gh-pages` branch (GitHub Pages); runs automatically on main branch via GitHub Actions
- `yarn swizzle` — eject/override a Docusaurus theme component into `src/theme/` (advanced)

## Architecture

**Content structure:**
- `docs/` — tutorial/documentation (sidebar auto-generated from directory structure via `sidebars.ts`)
- `blog/` — blog posts with metadata (authors.yml, tags.yml)
- `src/pages/` — custom pages (like the homepage)
- `static/` — static assets (images, etc.)

**Theme & styling:**
- `src/css/custom.css` — site-wide CSS overrides
- `src/components/` — custom React components (currently just HomepageFeatures)
- Theme components can be ejected via `yarn swizzle` into `src/theme/`

**React 19 & TypeScript:**
The site uses React 19 with TypeScript. `tsconfig.json` extends `@docusaurus/tsconfig`. No JSX transformations needed for `.tsx` files.

## Deployment

- Push to `main` automatically triggers `.github/workflows/deploy.yml`, which builds and deploys to the `gh-pages` branch. PRs run `.github/workflows/test-deploy.yml` to verify the build succeeds.
- `docusaurus.config.ts` configures the site for `https://the-keep.danieljpost.dev` (custom domain via `CNAME`). Settings: `organizationName: danieljpost-dev`, `projectName: the-keep`, `deploymentBranch: gh-pages`, `baseUrl: /`, `trailingSlash: false`.
- `onBrokenLinks: 'throw'` — broken internal links fail the build. This is intentional (strict mode).
- **⚠️ `editUrl` still points to the Docusaurus template repo** (facebook/docusaurus). Update both instances in `docusaurus.config.ts` (docs.editUrl and blog.editUrl) if you want "Edit this page" links to point to the real repo.
