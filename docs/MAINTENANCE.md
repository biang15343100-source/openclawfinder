# Maintenance Guide

## Content flow

This site is content-driven.

- Add variants in `data/variants/*.json`
- Add tools in `data/tools/*.json`
- Use `_template.json` in each folder as the starting point
- Add a local logo in `logo/` whenever possible

After editing data, run:

```bash
npm run build
```

## Discovery refresh

To refresh the candidate monitor for new Claw/OpenClaw repositories:

```bash
npm run discover:projects
```

Config lives in `data/discovery/sources.json`.
Generated output lives in `data/discovery/generated/candidates.json`.
The page reads the public copy at `watch-data.json`.
Review the report in `/watch.html`.
Set `GITHUB_TOKEN` in your environment for more reliable scheduled refreshes.

## Local preview

Use the Worker-based local dev flow so likes and assets both work:

```bash
npm run cf:dev
```

## Deploy

Manual deploy:

```bash
npm run cf:deploy
```

If GitHub auto-deploy is connected in Cloudflare, `git push` can also publish the latest commit depending on your Cloudflare setup.

## Likes

Likes are stored in Cloudflare D1.

- Adding a new tool or variant does not require a schema change
- The first successful like for a new slug creates its row automatically
- Only change `migrations/` when the table structure itself needs to change

## Files to treat as generated

- `index.html`
- `projects/*.html`

Do not hand-edit these unless you are debugging generation output.
