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

## Project structure

The repo is organized around content data, generated pages, and deployment glue:

- `data/variants/*.json`: OpenClaw variants
- `data/tools/*.json`: ecosystem tools and plugins
- `scripts/build-site.mjs`: generates `index.html` and `projects/*.html` from the JSON data
- `projects/*.html`: generated detail pages
- `logo/`: local card logos
- `worker/index.js`: Cloudflare Worker API for likes
- `migrations/`: D1 schema migrations
- `styles.css` and `script.js`: shared frontend styling and client behavior
- `about.html`, `contact.html`, `privacy.html`, `start.html`, `submit.html`: hand-authored supporting pages

The homepage and project detail pages are generated output. If you want to add or edit a tool, start with the JSON files, then rebuild.

## Discovery monitor

The repo now includes a lightweight discovery pipeline for spotting new Claw/OpenClaw projects before they are added to the directory.

Run it with:

```bash
npm run discover:projects
```

This writes a reviewable report to `data/discovery/generated/candidates.json`.
It also writes a public copy to `watch-data.json` so the monitoring page can load it in local and deployed environments.
If you plan to run it on a schedule, set `GITHUB_TOKEN` to avoid GitHub's low anonymous rate limits.

Open `/watch.html` locally or in production to review:

- newly discovered repositories
- rule-based recommendation scores
- likely duplicates of entries already in the site

You can tune queries and freshness windows in `data/discovery/sources.json`.

## Build and local development

Install dependencies:

```bash
npm install
```

Generate the homepage and project pages:

```bash
npm run build
```

Run the site locally with the Cloudflare Worker and D1 bindings:

```bash
npm run cf:dev
```

This is the recommended local workflow now. A simple static server will not run the like API.

## Adding a new tool or variant

1. Create a JSON file in `data/tools/` or `data/variants/`
2. Add a local logo in `logo/` if available
3. Run `npm run build`
4. Preview with `npm run cf:dev`
5. Deploy with `npm run cf:deploy` or push to the GitHub-connected deploy flow

## Deploy

This project is deployed on Cloudflare Workers with static assets plus a D1-backed like API.

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

## Notes

- The site is bilingual and switches between English and Chinese in the client.
- Search and share metadata are added per page.
- Sitemap and robots are maintained for indexing.
- Likes are stored in Cloudflare D1 and do not reset on redeploy.
- `index.html` and `projects/*.html` should be treated as generated output.
