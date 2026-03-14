const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      ...JSON_HEADERS,
      ...(init.headers || {}),
    },
  });
}

function isValidSlug(slug) {
  return /^[a-z0-9-]+$/.test(slug);
}

async function handleGetLikes(env) {
  const result = await env.DB.prepare("SELECT slug, count FROM likes ORDER BY slug ASC").all();
  return json({
    ok: true,
    items: result.results || [],
  });
}

async function handlePostLike(request, env) {
  const url = new URL(request.url);
  const slug = decodeURIComponent(url.pathname.replace("/api/likes/", "")).trim();

  if (!slug || !isValidSlug(slug)) {
    return json({ ok: false, error: "Invalid slug" }, { status: 400 });
  }

  await env.DB.prepare(
    `INSERT INTO likes (slug, count)
     VALUES (?, 1)
     ON CONFLICT(slug)
     DO UPDATE SET count = count + 1, updated_at = CURRENT_TIMESTAMP`
  )
    .bind(slug)
    .run();

  const row = await env.DB.prepare("SELECT slug, count FROM likes WHERE slug = ?")
    .bind(slug)
    .first();

  return json({
    ok: true,
    item: row,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/likes" && request.method === "GET") {
      return handleGetLikes(env);
    }

    if (url.pathname.startsWith("/api/likes/") && request.method === "POST") {
      return handlePostLike(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
