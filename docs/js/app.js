/* Open Physics Problems — GitHub Pages app */

const SCORE_ORDER = { sprint: 0, stretch: 1, "multi-sprint": 2, "not-agentic": 3 };
const CULTURE_ORDER = {
  "open-math-like": 0,
  "polymath-data": 1,
  program: 2,
  discovery: 3,
  foundations: 4,
};

let ALL = [];
let activeFilter = "sprint";

const $ = (sel) => document.querySelector(sel);

function pill(score) {
  const cls = score === "open-math-like" ? "sprint"
    : score === "polymath-data" ? "stretch"
    : score === "discovery" ? "not-agentic"
    : score === "program" ? "multi-sprint"
    : score === "foundations" ? "multi-sprint"
    : String(score).replaceAll(" ", "-");
  const label = String(score).replaceAll("-", " ");
  const known = ["sprint", "stretch", "multi-sprint", "not-agentic"].includes(score);
  return `<span class="pill ${known ? score : cls}">${label}</span>`;
}

function esc(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function ep(p) {
  return p.epistemology || {};
}

function filtered() {
  const q = ($("#q")?.value || "").trim().toLowerCase();
  const field = $("#field")?.value || "";
  const score = $("#score")?.value || activeFilter || "";
  const culture = $("#culture")?.value || "";
  const refut = $("#refut")?.value || "";

  return ALL.filter((p) => {
    const a = p.agentic_10day || {};
    const e = ep(p);
    if (score && score !== "all" && a.score !== score) return false;
    if (field && p.field !== field) return false;
    if (culture && e.culture !== culture) return false;
    if (refut && e.refutability !== refut) return false;
    if (!q) return true;
    const blob = [
      p.name,
      p.summary,
      p.field,
      p.kind,
      a.viral_hook,
      a.success,
      a.why,
      e.culture,
      e.refutability,
      e.weak_win,
      e.strong_win,
      e.publish_shape,
      e.open_math_parallel,
      e.publish_now,
      ...(p.tags || []),
    ]
      .join(" ")
      .toLowerCase();
    return blob.includes(q);
  }).sort((a, b) => {
    const sa = SCORE_ORDER[a.agentic_10day?.score] ?? 9;
    const sb = SCORE_ORDER[b.agentic_10day?.score] ?? 9;
    if (sa !== sb) return sa - sb;
    const ca = CULTURE_ORDER[ep(a).culture] ?? 9;
    const cb = CULTURE_ORDER[ep(b).culture] ?? 9;
    if (ca !== cb) return ca - cb;
    return (b.impact || 0) - (a.impact || 0) || a.name.localeCompare(b.name);
  });
}

function renderStats() {
  const c = { sprint: 0, stretch: 0, "multi-sprint": 0, "not-agentic": 0 };
  const cult = {
    "open-math-like": 0,
    "polymath-data": 0,
    program: 0,
    discovery: 0,
    foundations: 0,
  };
  ALL.forEach((p) => {
    const s = p.agentic_10day?.score;
    if (s in c) c[s]++;
    const k = ep(p).culture;
    if (k in cult) cult[k]++;
  });
  $("#stat-sprint").textContent = c.sprint;
  $("#stat-stretch").textContent = c.stretch;
  $("#stat-multi").textContent = c["multi-sprint"];
  $("#stat-na").textContent = c["not-agentic"];
  $("#stat-total").textContent = ALL.length;
  const set = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.textContent = v;
  };
  set("n-oml", cult["open-math-like"]);
  set("n-pmd", cult["polymath-data"]);
  set("n-prog", cult.program);
  set("n-disc", cult.discovery);
  set("n-found", cult.foundations);
}

function renderCards() {
  const list = filtered();
  const root = $("#cards");
  $("#count-label").textContent = `${list.length} problem${list.length === 1 ? "" : "s"}`;

  if (!list.length) {
    root.innerHTML = `<div class="empty">No problems match. Loosen filters or search.</div>`;
    return;
  }

  root.innerHTML = list
    .map((p) => {
      const a = p.agentic_10day || {};
      const e = ep(p);
      const hook = a.viral_hook || p.name;
      return `
      <article class="card" data-id="${esc(p.id)}" tabindex="0" role="button" aria-label="${esc(p.name)}">
        <div class="top">
          ${pill(a.score || "multi-sprint")}
          <span style="color:var(--faint);font-size:0.72rem">${esc(e.culture || "")}</span>
        </div>
        <h3>${esc(p.name)}</h3>
        <p class="hook">${esc(hook)}</p>
        <p class="summary">${esc((p.summary || "").slice(0, 140))}${(p.summary || "").length > 140 ? "…" : ""}</p>
        <div class="meta">
          <span>${esc(e.refutability || "")}</span>
          <span>rung ${esc(e.closure_rung)}</span>
          <span>${esc(e.publish_now || "")}</span>
          <span>${esc(p.field)}</span>
        </div>
      </article>`;
    })
    .join("");

  root.querySelectorAll(".card").forEach((el) => {
    const open = () => showModal(el.dataset.id);
    el.addEventListener("click", open);
    el.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        open();
      }
    });
  });
}

function showModal(id) {
  const p = ALL.find((x) => x.id === id);
  if (!p) return;
  const a = p.agentic_10day || {};
  const e = ep(p);
  const backdrop = $("#modal");
  const body = $("#modal-body");
  $("#modal-title").textContent = p.name;
  body.innerHTML = `
    <div class="row">
      ${pill(a.score || "multi-sprint")}
      ${pill(e.culture || "program")}
      <span class="pill multi-sprint">${esc(e.refutability)}</span>
      <span class="pill multi-sprint">rung ${esc(e.closure_rung)}</span>
      <span class="pill multi-sprint">${esc(e.publish_now)}</span>
    </div>
    <p><b>Viral hook.</b> ${esc(a.viral_hook || p.name)}</p>
    <p><b>Problem.</b> ${esc(p.summary)}</p>
    <p><b>Open-math parallel.</b> ${esc(e.open_math_parallel || "—")}</p>
    <p><b>Publish shape.</b> ${esc(e.publish_shape || "—")}</p>
    <p><b>Weak win (publication-grade partial).</b> ${esc(e.weak_win || "—")}</p>
    <p><b>Strong win (true closure).</b> ${esc(e.strong_win || "—")}</p>
    ${a.success ? `<p><b>10-day success criterion.</b> ${esc(a.success)}</p>` : ""}
    ${a.why ? `<p><b>Why this 10-day score.</b> ${esc(a.why)}</p>` : ""}
    ${p.why_hard ? `<p><b>Why the physics is hard.</b> ${esc(p.why_hard)}</p>` : ""}
    <p><b>Acceptance path.</b> ${esc(e.acceptance_path || "—")}</p>
    <p><b>Nature votes?</b> ${esc(e.nature_vote || "—")} · <b>Possibility class:</b> ${esc(e.possibility || "—")}</p>
    <p><b>Math analogue.</b> ${esc(e.math_analogue || "—")}</p>
    <p><b>Agent can publish now?</b> ${e.agent_publishable ? "yes (scoped)" : "no / theory-only"} · <b>Impact</b> ${esc(p.impact)}/5 · <b>Difficulty</b> ${esc(p.difficulty)}/5</p>
    ${(a.harness || []).length ? `<p><b>Harness needs</b></p><div class="harness">${a.harness.map((h) => `<code>${esc(h)}</code>`).join("")}</div>` : ""}
    ${(p.tags || []).length ? `<p style="margin-top:0.8rem">${p.tags.map((t) => `<span class="pill multi-sprint">#${esc(t)}</span>`).join(" ")}</p>` : ""}
    <p style="margin-top:1rem;font-size:0.85rem">ID <code style="color:var(--accent)">${esc(p.id)}</code>
      · <a href="https://github.com/zozo123/open-physics-problems/blob/main/maps/open-math-to-physics.md" target="_blank" rel="noopener">open math → physics</a>
      · <a href="https://github.com/zozo123/open-physics-problems/blob/main/data/problems.json" target="_blank" rel="noopener">source data</a>
    </p>
  `;
  backdrop.classList.add("open");
  history.replaceState(null, "", `#${id}`);
}

function hideModal() {
  $("#modal").classList.remove("open");
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
}

function setupFilters() {
  const fields = [...new Set(ALL.map((p) => p.field))].sort();
  const sel = $("#field");
  fields.forEach((f) => {
    const o = document.createElement("option");
    o.value = f;
    o.textContent = f;
    sel.appendChild(o);
  });

  const rerender = () => {
    activeFilter = $("#score").value;
    renderCards();
  };
  ["q", "field", "score", "culture", "refut"].forEach((id) => {
    const el = $(`#${id}`);
    if (!el) return;
    el.addEventListener("input", rerender);
    el.addEventListener("change", rerender);
  });

  document.querySelectorAll("[data-jump-score]").forEach((btn) => {
    const go = () => {
      $("#score").value = btn.dataset.jumpScore;
      activeFilter = btn.dataset.jumpScore;
      document.getElementById("board").scrollIntoView({ behavior: "smooth" });
      renderCards();
    };
    btn.addEventListener("click", go);
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go();
      }
    });
  });
}

async function boot() {
  try {
    const res = await fetch("data/problems.json");
    if (!res.ok) throw new Error("fetch failed");
    const data = await res.json();
    ALL = data.problems || [];
  } catch (e) {
    $("#cards").innerHTML = `<div class="empty">Could not load data/problems.json. Serve via GitHub Pages or <code>python3 -m http.server</code> from <code>docs/</code>.</div>`;
    console.error(e);
    return;
  }

  renderStats();
  setupFilters();
  $("#score").value = "all";
  activeFilter = "all";
  // default: show publishable polymath + sprints energy — all, user filters
  renderCards();

  if (location.hash) {
    const id = location.hash.slice(1);
    if (ALL.some((p) => p.id === id)) showModal(id);
  }

  $("#modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") hideModal();
  });
  $("#modal-close").addEventListener("click", hideModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideModal();
  });
}

boot();
