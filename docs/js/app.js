/* Open Physics Problems — GitHub Pages app */

const SCORE_ORDER = { sprint: 0, stretch: 1, "multi-sprint": 2, "not-agentic": 3 };

let ALL = [];
let activeFilter = "sprint"; // default: viral board

const $ = (sel) => document.querySelector(sel);

function pill(score) {
  const label = score.replace("-", " ");
  return `<span class="pill ${score}">${label}</span>`;
}

function esc(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function filtered() {
  const q = ($("#q")?.value || "").trim().toLowerCase();
  const field = $("#field")?.value || "";
  const score = $("#score")?.value || activeFilter || "";

  return ALL.filter((p) => {
    const a = p.agentic_10day || {};
    if (score && score !== "all" && a.score !== score) return false;
    if (field && p.field !== field) return false;
    if (!q) return true;
    const blob = [
      p.name,
      p.summary,
      p.field,
      p.kind,
      a.viral_hook,
      a.success,
      a.why,
      ...(p.tags || []),
    ]
      .join(" ")
      .toLowerCase();
    return blob.includes(q);
  }).sort((a, b) => {
    const sa = SCORE_ORDER[a.agentic_10day?.score] ?? 9;
    const sb = SCORE_ORDER[b.agentic_10day?.score] ?? 9;
    if (sa !== sb) return sa - sb;
    return (b.impact || 0) - (a.impact || 0) || a.name.localeCompare(b.name);
  });
}

function renderStats() {
  const c = { sprint: 0, stretch: 0, "multi-sprint": 0, "not-agentic": 0 };
  ALL.forEach((p) => {
    const s = p.agentic_10day?.score;
    if (s in c) c[s]++;
  });
  $("#stat-sprint").textContent = c.sprint;
  $("#stat-stretch").textContent = c.stretch;
  $("#stat-multi").textContent = c["multi-sprint"];
  $("#stat-na").textContent = c["not-agentic"];
  $("#stat-total").textContent = ALL.length;
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
      const hook = a.viral_hook || p.name;
      return `
      <article class="card" data-id="${esc(p.id)}" tabindex="0" role="button" aria-label="${esc(p.name)}">
        <div class="top">
          ${pill(a.score || "multi-sprint")}
          <span style="color:var(--faint);font-size:0.78rem">${esc(a.scope || "")}</span>
        </div>
        <h3>${esc(p.name)}</h3>
        <p class="hook">${esc(hook)}</p>
        <p class="summary">${esc((p.summary || "").slice(0, 160))}${(p.summary || "").length > 160 ? "…" : ""}</p>
        <div class="meta">
          <span>${esc(p.field)}</span>
          <span>${esc(p.kind)}</span>
          <span>impact ${esc(p.impact)}/5</span>
        </div>
      </article>`;
    })
    .join("");

  root.querySelectorAll(".card").forEach((el) => {
    const open = () => showModal(el.dataset.id);
    el.addEventListener("click", open);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });
}

function showModal(id) {
  const p = ALL.find((x) => x.id === id);
  if (!p) return;
  const a = p.agentic_10day || {};
  const backdrop = $("#modal");
  const body = $("#modal-body");
  $("#modal-title").textContent = p.name;
  body.innerHTML = `
    <div class="row">
      ${pill(a.score || "multi-sprint")}
      <span class="pill multi-sprint">${esc(p.field)}</span>
      <span class="pill multi-sprint">${esc(p.kind)}</span>
      <span class="pill multi-sprint">${esc(p.status)}</span>
    </div>
    <p><b>Viral hook.</b> ${esc(a.viral_hook || p.name)}</p>
    <p><b>Problem.</b> ${esc(p.summary)}</p>
    ${a.success ? `<p><b>10-day success criterion.</b> ${esc(a.success)}</p>` : ""}
    ${a.why ? `<p><b>Why this score.</b> ${esc(a.why)}</p>` : ""}
    ${p.why_hard ? `<p><b>Why the physics is hard.</b> ${esc(p.why_hard)}</p>` : ""}
    ${p.ai_notes ? `<p><b>AI notes.</b> ${esc(p.ai_notes)}</p>` : ""}
    <p><b>Scope.</b> ${esc(a.scope || "—")} · <b>Impact</b> ${esc(p.impact)}/5 · <b>Difficulty</b> ${esc(p.difficulty)}/5</p>
    ${(a.harness || []).length ? `<p><b>Harness needs</b></p><div class="harness">${a.harness.map((h) => `<code>${esc(h)}</code>`).join("")}</div>` : ""}
    ${(p.tags || []).length ? `<p style="margin-top:0.8rem">${p.tags.map((t) => `<span class="pill multi-sprint">#${esc(t)}</span>`).join(" ")}</p>` : ""}
    <p style="margin-top:1rem;font-size:0.85rem">ID <code style="color:var(--accent)">${esc(p.id)}</code>
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
  ["q", "field", "score"].forEach((id) => {
    $(`#${id}`).addEventListener("input", rerender);
    $(`#${id}`).addEventListener("change", rerender);
  });

  // quick chips
  document.querySelectorAll("[data-jump-score]").forEach((btn) => {
    btn.addEventListener("click", () => {
      $("#score").value = btn.dataset.jumpScore;
      activeFilter = btn.dataset.jumpScore;
      document.getElementById("board").scrollIntoView({ behavior: "smooth" });
      renderCards();
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
    $("#cards").innerHTML = `<div class="empty">Could not load data/problems.json. If viewing as a file, serve via GitHub Pages or <code>python3 -m http.server</code> from <code>docs/</code>.</div>`;
    console.error(e);
    return;
  }

  renderStats();
  setupFilters();
  // default board: sprints only
  $("#score").value = "sprint";
  activeFilter = "sprint";
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
