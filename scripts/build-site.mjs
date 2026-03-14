import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(new URL("..", import.meta.url).pathname);
const DATA_DIR = path.join(ROOT, "data");
const VARIANTS_DIR = path.join(DATA_DIR, "variants");
const TOOLS_DIR = path.join(DATA_DIR, "tools");
const INDEX_PATH = path.join(ROOT, "index.html");
const PROJECTS_DIR = path.join(ROOT, "projects");

const SITE_URL = "https://openclawfinder.com";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function jsonForScript(value) {
  return JSON.stringify(value).replaceAll("</script>", "<\\/script>");
}

function formatStars(count) {
  if (count >= 1_000_000) return `+${(count / 1_000_000).toFixed(1).replace(/\.0$/, "")}m 🌟`;
  if (count >= 1_000) return `+${(count / 1_000).toFixed(1).replace(/\.0$/, "")}k 🌟`;
  return `+${count} 🌟`;
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

  if (!repo) return null;

  try {
    const htmlResponse = await fetch(`https://github.com/${repo}`, {
      headers: { "User-Agent": "openclawfinder-build" },
    });
    if (!htmlResponse.ok) return null;
    const html = await htmlResponse.text();
    const metaMatch = html.match(/name="octolytics-dimension-repository_stars_current" content="(\d+)"/);
    if (metaMatch) return Number(metaMatch[1]);
    const ariaMatch = html.match(/([\d,]+)\s+users?\s+starred\s+this\s+repository/i);
    if (ariaMatch) return Number(ariaMatch[1].replaceAll(",", ""));
  } catch {}

  return null;
}

async function readEntries(dir) {
  const files = (await fs.readdir(dir)).filter((file) => file.endsWith(".json")).sort();
  const entries = [];

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const raw = await fs.readFile(fullPath, "utf8");
    const entry = JSON.parse(raw);
    entries.push(entry);
  }

  return entries.sort((left, right) => (left.order ?? 999) - (right.order ?? 999));
}

async function enrichEntries(entries) {
  const stars = await Promise.all(
    entries.map(async (entry) => {
      const repo = entry.links && entry.links.githubRepo;
      if (!repo) return null;
      return fetchRepoStars(repo);
    })
  );

  return entries.map((entry, index) => ({
    ...entry,
    stars: stars[index],
  }));
}

function renderIcon(entry) {
  if (!entry.icon) {
    return [
      '<div class="card-logo">',
      '  <span class="card-logo-fallback card-logo-fallback-dark">🦞</span>',
      "</div>",
    ].join("\n");
  }

  return [
    '<div class="card-logo">',
    '  <span class="card-logo-fallback card-logo-fallback-dark">🦞</span>',
    `  <img src="${escapeHtml(entry.icon)}" alt="${escapeHtml(entry.name.en)} logo" loading="lazy" onload="this.previousElementSibling.hidden=true;" onerror="this.hidden=true;" />`,
    "</div>",
  ].join("\n");
}

function renderCardLinks(entry) {
  const links = [];
  if (entry.links.site) {
    links.push(`<a href="${escapeHtml(entry.links.site)}" target="_blank" rel="noreferrer" data-i18n="common.linkSite">Site</a>`);
  }
  if (entry.links.docs) {
    links.push(`<a href="${escapeHtml(entry.links.docs)}" target="_blank" rel="noreferrer" data-i18n="common.linkDocs">Docs</a>`);
  }
  if (entry.links.github) {
    const starLabel = entry.stars == null ? "" : `<span class="repo-stars">${escapeHtml(formatStars(entry.stars))}</span>`;
    links.push(`<a class="repo-link" href="${escapeHtml(entry.links.github)}" target="_blank" rel="noreferrer"><span data-i18n="common.linkGitHub">GitHub</span>${starLabel}</a>`);
  }
  return links.join("\n");
}

function renderCard(entry) {
  const pagePath = `/projects/${entry.slug}`;
  const textPrefix = `cards.${entry.slug}`;

  return [
    `<article class="project-card">`,
    `  <div class="project-card-main">`,
    `    <a class="card-logo-link" href="${pagePath}" aria-label="${escapeHtml(entry.name.en)} details">`,
    renderIcon(entry).split("\n").map((line) => `    ${line}`).join("\n"),
    `    </a>`,
    `    <div class="card-copy">`,
    `      <h3><a href="${pagePath}" data-page-text="${textPrefix}.name">${escapeHtml(entry.name.en)}</a></h3>`,
    `      <a class="card-description-link" href="${pagePath}"><p data-page-text="${textPrefix}.summary">${escapeHtml(entry.summary.en)}</p></a>`,
    `    </div>`,
    `  </div>`,
    `  <div class="card-footer">`,
    `    <span class="access-pill${entry.access.en === "Activation code" ? " conditional" : ""}" data-page-text="${textPrefix}.access">${escapeHtml(entry.access.en)}</span>`,
    `    <p class="project-links">`,
    renderCardLinks(entry).split("\n").map((line) => `      ${line}`).join("\n"),
    `    </p>`,
    `    <button class="like-button" type="button" data-like-button data-like-key="${entry.slug}" data-like-base="0" aria-pressed="false">`,
    `      <span class="like-icon" aria-hidden="true">👍</span><span class="like-count" data-like-count>0</span>`,
    `    </button>`,
    `  </div>`,
    `</article>`,
  ].join("\n");
}

function renderProjectPage(entry) {
  const pageData = {
    meta: {
      title: {
        en: `${entry.name.en} | OpenClaw Finder`,
        zh: `${entry.name.zh} | OpenClaw Finder`,
      },
      description: {
        en: entry.summary.en,
        zh: entry.summary.zh,
      },
    },
    texts: {
      kicker: entry.kicker,
      name: entry.name,
      summary: entry.summary,
      description: {
        paragraphs: entry.description.en.map((paragraph, index) => ({
          en: paragraph,
          zh: entry.description.zh[index],
        })),
        highlights: entry.highlights.en.map((highlight, index) => ({
          en: highlight,
          zh: entry.highlights.zh[index],
        })),
      },
      sources: entry.sources.map((source) => ({ label: source.label })),
    },
  };

  const sourcesMarkup = entry.sources
    .map(
      (source, index) =>
        `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer" data-page-text="sources.${index}.label">${escapeHtml(source.label.en)}</a>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(pageData.meta.title.en)}</title>
    <meta id="meta-description" name="description" content="${escapeHtml(pageData.meta.description.en)}" />
    <link rel="canonical" href="${SITE_URL}/projects/${entry.slug}" />
    <meta name="robots" content="index,follow" />
    <meta property="og:title" id="meta-og-title" content="${escapeHtml(pageData.meta.title.en)}" />
    <meta property="og:description" id="meta-og-description" content="${escapeHtml(pageData.meta.description.en)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" id="meta-og-url" content="${SITE_URL}/projects/${entry.slug}" />
    <meta property="og:image" content="${SITE_URL}/hero-art.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" id="meta-twitter-title" content="${escapeHtml(pageData.meta.title.en)}" />
    <meta name="twitter:description" id="meta-twitter-description" content="${escapeHtml(pageData.meta.description.en)}" />
    <meta name="twitter:image" content="${SITE_URL}/hero-art.png" />
    <script id="page-data" type="application/json">${jsonForScript(pageData)}</script>
    <link rel="stylesheet" href="/styles.css" />
    <script defer src="/script.js"></script>
  </head>
  <body data-page="project-${entry.slug}">
    <header class="site-header"><div class="wrap nav-shell"><div class="nav"><a class="brand" href="/" data-i18n="common.brand">OpenClaw Finder</a><nav class="main-nav"><a href="/about" data-i18n="common.navAbout">About</a><a href="/submit" data-i18n="common.navSubmit">Submit</a><a href="/contact" data-i18n="common.navContact">Contact</a><a href="/privacy" data-i18n="common.navPrivacy">Privacy</a></nav><div class="lang-switch" aria-label="Language switcher"><button class="lang-button" type="button" data-lang-button="en">EN</button><button class="lang-button" type="button" data-lang-button="zh">中文</button></div></div></div></header>
    <main class="project-main wrap">
      <section class="project-hero project-hero-simple">
        <div class="project-header project-header-wide">
          <p class="project-kicker" data-page-text="kicker">${escapeHtml(entry.kicker.en)}</p>
          <h1 class="project-title" data-page-text="name">${escapeHtml(entry.name.en)}</h1>
          <p class="project-summary" data-page-text="summary">${escapeHtml(entry.summary.en)}</p>
        </div>
      </section>
      <section class="project-content project-content-simple">
        <article class="project-panel project-description-panel">
          <h2 data-i18n="project.common.description">Description</h2>
          <div class="project-description-body">
            <p data-page-text="description.paragraphs.0">${escapeHtml(entry.description.en[0])}</p>
            <p data-page-text="description.paragraphs.1">${escapeHtml(entry.description.en[1])}</p>
            <ul class="project-list compact-project-list">
              <li data-page-text="description.highlights.0">${escapeHtml(entry.highlights.en[0])}</li>
              <li data-page-text="description.highlights.1">${escapeHtml(entry.highlights.en[1])}</li>
              <li data-page-text="description.highlights.2">${escapeHtml(entry.highlights.en[2])}</li>
            </ul>
          </div>
        </article>
        <aside class="project-panel project-sources-panel">
          <h2 data-i18n="project.common.sources">Sources</h2>
          <div class="source-list">${sourcesMarkup}</div>
        </aside>
      </section>
    </main>
    <footer class="site-footer"><div class="wrap footer-grid"><div><a class="brand footer-brand" href="/" data-i18n="common.brand">OpenClaw Finder</a></div><div class="footer-links"><a href="/about" data-i18n="common.navAbout">About</a><a href="/submit" data-i18n="common.navSubmit">Submit</a><a href="/contact" data-i18n="common.navContact">Contact</a><a href="/privacy" data-i18n="common.navPrivacy">Privacy</a></div></div></footer>
  </body>
</html>`;
}

function renderIndex(variants, tools) {
  const pageData = {
    texts: {
      cards: Object.fromEntries(
        [...variants, ...tools].map((entry) => [
          entry.slug,
          {
            name: entry.name,
            summary: entry.summary,
            access: entry.access,
          },
        ])
      ),
    },
  };

  const itemList = [...variants, ...tools]
    .map((entry, index) => `              { "@type": "ListItem", "position": ${index + 1}, "url": "${SITE_URL}/projects/${entry.slug}" }`)
    .join(",\n");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OpenClaw Finder | Discover OpenClaw Projects</title>
    <meta id="meta-description" name="description" content="OpenClaw Finder is a curated directory for discovering OpenClaw projects, tools, and experiments such as qclaw and picoclaw." />
    <link rel="canonical" href="${SITE_URL}/" />
    <meta name="robots" content="index,follow" />
    <meta property="og:title" id="meta-og-title" content="OpenClaw Finder | Discover OpenClaw Projects" />
    <meta property="og:description" id="meta-og-description" content="OpenClaw Finder is a curated directory for discovering OpenClaw projects, tools, and experiments such as qclaw and picoclaw." />
    <meta property="og:type" content="website" />
    <meta property="og:url" id="meta-og-url" content="${SITE_URL}/" />
    <meta property="og:image" content="${SITE_URL}/hero-art.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" id="meta-twitter-title" content="OpenClaw Finder | Discover OpenClaw Projects" />
    <meta name="twitter:description" id="meta-twitter-description" content="OpenClaw Finder is a curated directory for discovering OpenClaw projects, tools, and experiments such as qclaw and picoclaw." />
    <meta name="twitter:image" content="${SITE_URL}/hero-art.png" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "name": "OpenClaw Finder",
            "url": "${SITE_URL}/",
            "description": "A curated directory for discovering OpenClaw projects, tools, and experiments.",
            "inLanguage": ["en", "zh-CN"]
          },
          {
            "@type": "ItemList",
            "name": "Featured OpenClaw projects",
            "itemListElement": [
${itemList}
            ]
          }
        ]
      }
    </script>
    <script id="page-data" type="application/json">${jsonForScript(pageData)}</script>
    <link rel="stylesheet" href="/styles.css" />
    <script defer src="/script.js"></script>
  </head>
  <body data-page="home">
    <header class="site-header">
      <div class="wrap nav-shell">
        <div class="nav">
          <a class="brand" href="/" data-i18n="common.brand">OpenClaw Finder</a>
          <nav class="main-nav">
            <a href="/start" data-i18n="common.navStart">Start here</a>
            <a href="/about" data-i18n="common.navAbout">About</a>
            <a href="/submit" data-i18n="common.navSubmit">Submit</a>
            <a href="/contact" data-i18n="common.navContact">Contact</a>
            <a href="/privacy" data-i18n="common.navPrivacy">Privacy</a>
          </nav>
          <div class="lang-switch" aria-label="Language switcher">
            <button class="lang-button" type="button" data-lang-button="en">EN</button>
            <button class="lang-button" type="button" data-lang-button="zh">中文</button>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="hero">
        <div class="wrap hero-center">
          <div class="hero-copy">
            <img class="hero-art" src="/hero-art.png" alt="OpenClaw Finder hero art" />
            <h1 class="hero-title" data-i18n-html="home.heroTitle"><span class="hero-title-accent">OpenClaw</span><span class="hero-title-emoji">🦞</span><span class="hero-title-accent">Finder</span></h1>
            <p class="lead" data-i18n="home.heroLead">A curated directory of OpenClaw variants, tools, and ecosystem projects, so you can quickly see what exists and where each one fits.</p>
            <div class="hero-actions">
              <a class="button primary" href="#directory" data-i18n="home.browse">Browse directory</a>
              <a class="button secondary" href="/submit" data-i18n="home.submit">Submit a project</a>
            </div>
          </div>
        </div>
      </section>
      <section class="section" id="directory">
        <div class="wrap">
          <div class="section-heading">
            <p class="eyebrow" data-i18n="home.directoryEyebrow">Featured projects</p>
            <h2 data-i18n="home.directoryTitle">Start here</h2>
            <p data-i18n="home.directoryLead">Start with the main projects and tools people most often compare first, with links pointing to official sites, docs, or repositories whenever possible.</p>
            <div class="directory-jumps">
              <a class="button secondary" href="/start" data-i18n="home.startGuideButton">Start guide</a>
              <a class="button secondary" href="#variants" data-i18n="home.category1Button">Jump to variants</a>
              <a class="button secondary" href="#tools" data-i18n="home.category2Button">Jump to tools</a>
            </div>
          </div>
          <div class="directory-group" id="variants">
            <div class="directory-group-heading">
              <h3><span class="group-icon" aria-hidden="true">🦞</span><span data-i18n="home.category1Title">OpenClaw and variants</span></h3>
              <p data-i18n="home.category1Lead">The main OpenClaw project, notable variants, and different takes on the same idea.</p>
            </div>
            <div class="card-grid">
${variants.map((entry) => renderCard(entry)).join("\n")}
            </div>
          </div>
          <div class="directory-group" id="tools">
            <div class="directory-group-heading">
              <h3><span class="group-icon" aria-hidden="true">🧰</span><span data-i18n="home.category2Title">Tools and ecosystem utilities</span></h3>
              <p data-i18n="home.category2Lead">Skills, workflows, and practical tools that make the OpenClaw ecosystem more useful.</p>
            </div>
            <div class="card-grid">
${tools.map((entry) => renderCard(entry)).join("\n")}
            </div>
          </div>
        </div>
      </section>
      <section class="section section-accent">
        <div class="wrap cta">
          <div>
            <p class="eyebrow" data-i18n="home.ctaEyebrow">Grow the directory</p>
            <h2 data-i18n="home.ctaTitle">Want your OpenClaw project listed?</h2>
            <p data-i18n="home.ctaBody">Send your project name, link, and a short summary through the submission page, and we can review it for inclusion.</p>
          </div>
          <a class="button primary" href="/submit" data-i18n="home.ctaButton">Submit now</a>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div>
          <a class="brand footer-brand" href="/" data-i18n="common.brand">OpenClaw Finder</a>
          <p data-i18n="home.footerText">A directory for discovering OpenClaw projects and ecosystem tools.</p>
        </div>
        <div class="footer-links">
          <a href="/start" data-i18n="common.navStart">Start here</a>
          <a href="/about" data-i18n="common.navAbout">About</a>
          <a href="/submit" data-i18n="common.navSubmit">Submit</a>
          <a href="/contact" data-i18n="common.navContact">Contact</a>
          <a href="/privacy" data-i18n="common.navPrivacy">Privacy</a>
        </div>
      </div>
    </footer>
  </body>
</html>`;
}

async function main() {
  const variants = await enrichEntries(await readEntries(VARIANTS_DIR));
  const tools = await enrichEntries(await readEntries(TOOLS_DIR));

  await fs.writeFile(INDEX_PATH, renderIndex(variants, tools));
  await fs.mkdir(PROJECTS_DIR, { recursive: true });

  for (const entry of [...variants, ...tools]) {
    await fs.writeFile(path.join(PROJECTS_DIR, `${entry.slug}.html`), renderProjectPage(entry));
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
