# OpenClaw Finder

OpenClaw Finder is a curated directory for discovering OpenClaw projects, variants, and ecosystem tools.

Live site: [openclawfinder.com](https://openclawfinder.com/)

## What this project is

OpenClaw Finder is built to make the ecosystem easier to scan.

Instead of forcing people to jump across scattered repos, launch pages, docs, and community posts, the site tries to answer a few practical questions quickly:

- What OpenClaw projects exist right now
- Which ones are official, experimental, lightweight, security-focused, or ecosystem tools
- Which project is the best starting point for a specific need
- Where the primary sources are

The site is intentionally opinionated. The goal is not to list every claw-shaped page on the internet. The goal is to keep a smaller, cleaner, more useful map of the ecosystem.

## Current structure

- `/`: homepage and main directory
- `/start`: comparison-style entry page for choosing where to begin
- `/projects/*`: project profile pages
- `/submit`: submission guide for new listings
- `/about`: editorial intent and listing policy
- `/contact`: corrections, updates, partnerships
- `/privacy`: privacy policy

## How it works

This is a static site deployed on Cloudflare Workers static assets.

At build time:

- `npm run build` runs `scripts/sync-stars.mjs`
- the script refreshes GitHub star counts for listed repositories
- homepage variant cards are re-sorted based on current star count

That means the site stays static at runtime, while directory metadata can still refresh on deploy.

## Local development

Install dependencies:

```bash
npm install
```

Run the build-time sync:

```bash
npm run build
```

If you use a simple static server locally, open the `.html` routes directly:

- `http://localhost:8000/index.html`
- `http://localhost:8000/start.html`
- `http://localhost:8000/submit.html`

Clean URLs like `/start` and `/submit` are handled in production by Cloudflare.

## Deploy

This project is configured for Cloudflare Workers static assets.

Recommended build settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

The repo includes:

- `wrangler.jsonc`
- `.assetsignore`
- `robots.txt`
- `sitemap.xml`
- `BingSiteAuth.xml`

## Contributing and submissions

If you maintain an OpenClaw-related project and want it listed, use the submission page:

- [openclawfinder.com/submit](https://openclawfinder.com/submit)

Good submissions include:

- project name
- primary URL
- GitHub or docs links
- one-line summary
- what makes it different
- why it belongs in the OpenClaw ecosystem

## Repository layout

- `index.html`: homepage directory
- `start.html`: comparison-style start page
- `projects/`: project profile pages
- `about.html`, `submit.html`, `contact.html`, `privacy.html`: supporting pages
- `styles.css`: shared styling
- `script.js`: i18n and client-side UI behavior
- `scripts/sync-stars.mjs`: build-time GitHub star sync

## Notes

- The site is bilingual and switches between English and Chinese in the client.
- Search and share metadata are added per page.
- Sitemap and robots are maintained for indexing.
