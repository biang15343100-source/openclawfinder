# OpenClaw Finder

Minimal static site for `openclawfinder.com`.

## Files

- `index.html`: landing page
- `about.html`: about page
- `submit.html`: submission page
- `contact.html`: contact page
- `privacy.html`: privacy page
- `styles.css`: shared styling
- `robots.txt`: crawler instructions
- `sitemap.xml`: sitemap for search engines

## Deploy to Cloudflare Pages

1. Push this directory to a GitHub repository.
2. In Cloudflare, go to Workers & Pages.
3. Create a new Pages project and connect the GitHub repository.
4. Build settings:
   - Framework preset: `None`
   - Build command: `npm run build`
   - Build output directory: `/`
   - Environment variable (optional): `GITHUB_TOKEN` for higher GitHub API limits
5. After the first deploy, add the custom domain `openclawfinder.com`.

## Build-time star sync

- `npm run build` runs `scripts/sync-stars.mjs`
- The script fetches GitHub star counts for cards in `index.html` that declare a GitHub repo
- Variant cards are then re-sorted by current star count, with entries that have no public GitHub repo left at the end
- This means star counts refresh on each deploy, not on each page view

## Next content updates

- Replace placeholder project cards with verified OpenClaw entries.
- Set up an inbox or forwarding for `hello@openclawfinder.com`.
- Add analytics before applying for ads.
