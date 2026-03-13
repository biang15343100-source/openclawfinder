import fs from "node:fs/promises";

const INDEX_PATH = new URL("../index.html", import.meta.url);

const variantOrder = [
  "openclaw",
  "zeroclaw",
  "picoclaw",
  "nanoclaw",
  "nanobot",
  "copaw",
  "ironclaw",
  "qclaw",
];

function formatStars(count) {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1).replace(/\.0$/, "")}m stars`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(1).replace(/\.0$/, "")}k stars`;
  return `${count} stars`;
}

async function fetchRepoStars(repo) {
  const apiUrl = `https://api.github.com/repos/${repo}`;
  const headers = {
    "User-Agent": "openclawfinder-build",
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(apiUrl, { headers });
    if (response.ok) {
      const data = await response.json();
      if (typeof data.stargazers_count === "number") return data.stargazers_count;
    }
  } catch {}

  const htmlResponse = await fetch(`https://github.com/${repo}`, {
    headers: { "User-Agent": "openclawfinder-build" },
  });

  if (!htmlResponse.ok) {
    throw new Error(`Failed to fetch ${repo}: ${htmlResponse.status}`);
  }

  const html = await htmlResponse.text();
  const metaMatch = html.match(/name="octolytics-dimension-repository_stars_current" content="(\d+)"/);
  if (metaMatch) return Number(metaMatch[1]);

  const ariaMatch = html.match(/([\d,]+)\s+users?\s+starred\s+this\s+repository/i);
  if (ariaMatch) return Number(ariaMatch[1].replace(/,/g, ""));

  throw new Error(`Could not parse stars for ${repo}`);
}

function replaceStarLabels(html, starsByVariant) {
  return html.replace(
    /(<span class="repo-stars" data-stars-for="([^"]+)">)([^<]+)(<\/span>)/g,
    (full, start, variantId, _oldText, end) => {
      const count = starsByVariant.get(variantId);
      return count == null ? full : `${start}${formatStars(count)}${end}`;
    }
  );
}

function extractVariantCards(html) {
  const gridMatch = html.match(/(<div class="card-grid">)([\s\S]*?)(<\/div>\s*<\/div>\s*<div class="directory-group" id="tools">)/);
  if (!gridMatch) {
    throw new Error("Could not find variants card grid in index.html");
  }

  const [, gridStart, gridBody, gridEnd] = gridMatch;
  const cards = [];
  const cardRegex = /(\s*<article class="project-card"[\s\S]*?<\/article>)/g;

  for (const match of gridBody.matchAll(cardRegex)) {
    const cardHtml = match[1];
    const idMatch = cardHtml.match(/data-variant-id="([^"]+)"/);
    if (!idMatch) continue;
    cards.push({ id: idMatch[1], html: cardHtml });
  }

  return { gridStart, gridEnd, cards, original: gridMatch[0] };
}

function reorderVariantCards(html, starsByVariant) {
  const { gridStart, gridEnd, cards, original } = extractVariantCards(html);
  const cardMap = new Map(cards.map((card) => [card.id, card.html]));

  const sortedIds = [...variantOrder].sort((left, right) => {
    const leftStars = starsByVariant.get(left);
    const rightStars = starsByVariant.get(right);
    if (leftStars == null && rightStars == null) return variantOrder.indexOf(left) - variantOrder.indexOf(right);
    if (leftStars == null) return 1;
    if (rightStars == null) return -1;
    if (leftStars !== rightStars) return rightStars - leftStars;
    return variantOrder.indexOf(left) - variantOrder.indexOf(right);
  });

  const reorderedBody = sortedIds
    .map((id) => cardMap.get(id))
    .filter(Boolean)
    .join("\n");

  const nextBlock = `${gridStart}${reorderedBody}\n            ${gridEnd}`;
  return html.replace(original, nextBlock);
}

async function main() {
  const html = await fs.readFile(INDEX_PATH, "utf8");
  const repoMatches = [...html.matchAll(/data-variant-id="([^"]+)"(?:\s+data-repo="([^"]+)")?/g)];
  const starsByVariant = new Map();

  for (const [, variantId, repo] of repoMatches) {
    if (!repo) continue;
    const stars = await fetchRepoStars(repo);
    starsByVariant.set(variantId, stars);
    console.log(`${variantId}: ${stars}`);
  }

  let nextHtml = replaceStarLabels(html, starsByVariant);
  nextHtml = reorderVariantCards(nextHtml, starsByVariant);
  await fs.writeFile(INDEX_PATH, nextHtml);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
