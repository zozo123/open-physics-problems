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
let META = {};
let activeFilter = "sprint";

const FILTER_KEYS = ["q", "score", "culture", "refut", "cluster", "field", "subfield"];

function readURLState() {
  const sp = new URLSearchParams(location.search);
  const out = {};
  FILTER_KEYS.forEach((k) => {
    if (sp.has(k)) out[k] = sp.get(k);
  });
  return out;
}

function writeURLState() {
  const sp = new URLSearchParams();
  FILTER_KEYS.forEach((k) => {
    const el = document.getElementById(k);
    if (!el) return;
    const v = (el.value || "").trim();
    const def = k === "score" ? "sprint" : "";
    if (v && v !== def) sp.set(k, v);
  });
  const qs = sp.toString();
  const hash = location.hash || "";
  const next = qs ? `?${qs}${hash}` : `${location.pathname}${hash}`;
  history.replaceState(null, "", next);
}

function applyURLState() {
  const st = readURLState();
  FILTER_KEYS.forEach((k) => {
    const el = document.getElementById(k);
    if (!el || st[k] == null) return;
    el.value = st[k];
    if (k === "score") activeFilter = st[k];
  });
}

function clearFilters() {
  $("#q").value = "";
  $("#score").value = "sprint";
  activeFilter = "sprint";
  ["culture", "refut", "cluster", "field", "subfield"].forEach((k) => {
    const el = document.getElementById(k);
    if (el) el.value = "";
  });
  document.querySelectorAll(".field-chip").forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".stat").forEach((b) => b.setAttribute("aria-pressed", "false"));
  const sprintBtn = document.querySelector('.stat[data-jump-score="sprint"]');
  if (sprintBtn) sprintBtn.setAttribute("aria-pressed", "true");
  refreshSubfieldOptions();
  writeURLState();
  renderCards();
}

function syncStatPressed() {
  const score = $("#score")?.value || "sprint";
  document.querySelectorAll(".stat").forEach((b) => {
    b.setAttribute("aria-pressed", b.dataset.jumpScore === score ? "true" : "false");
  });
}



const $ = (sel) => document.querySelector(sel);

function pill(score) {
  const cls =
    score === "open-math-like"
      ? "sprint"
      : score === "polymath-data"
        ? "stretch"
        : score === "discovery"
          ? "not-agentic"
          : score === "program"
            ? "multi-sprint"
            : score === "foundations"
              ? "multi-sprint"
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
  const cluster = $("#cluster")?.value || "";
  const subfield = $("#subfield")?.value || "";

  return ALL.filter((p) => {
    const a = p.agentic_10day || {};
    const e = ep(p);
    if (score && score !== "all" && a.score !== score) return false;
    if (field && p.field !== field) return false;
    if (cluster && p.cluster !== cluster) return false;
    if (subfield && p.subfield !== subfield) return false;
    if (culture && e.culture !== culture) return false;
    if (refut && e.refutability !== refut) return false;
    if (!q) return true;
    const blob = [
      p.name,
      p.summary,
      p.field,
      p.subfield,
      p.cluster,
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
      ...(p.fields_secondary || []),
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

function renderFeatured() {
  const row = $("#featured-row");
  if (!row) return;
  const sprints = ALL.filter((p) => p.agentic_10day?.score === "sprint").sort(
    (a, b) => (b.impact || 0) - (a.impact || 0)
  );
  const pick = sprints.slice(0, 6);
  row.innerHTML = pick
    .map((p) => {
      const hook = (p.agentic_10day?.viral_hook || p.name).slice(0, 72);
      return `<button type="button" class="feat" data-id="${esc(p.id)}" role="listitem" aria-label="Open ${esc(p.name)}">
        <div class="fh">sprint · ${esc(p.field)}</div>
        <div class="ft">${esc(hook)}</div>
      </button>`;
    })
    .join("");
  row.querySelectorAll(".feat").forEach((el) => {
    el.addEventListener("click", () => {
      $("#score").value = "all";
      activeFilter = "all";
      renderCards();
      showModal(el.dataset.id);
      document.getElementById("board")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderClusters() {
  const root = $("#cluster-grid");
  if (!root) return;
  const tax = META.field_taxonomy || {};
  const clusters = tax.clusters || {};
  const fields = tax.fields || {};
  const counts = {};
  ALL.forEach((p) => {
    counts[p.field] = (counts[p.field] || 0) + 1;
  });
  const ordered = Object.entries(clusters).sort(
    (a, b) => (a[1].order || 99) - (b[1].order || 99)
  );
  root.innerHTML = ordered
    .map(([cid, c]) => {
      const n = ALL.filter((p) => p.cluster === cid).length;
      const chips = (c.fields || [])
        .map((f) => {
          const title = (fields[f] && fields[f].title) || f;
          const cn = counts[f] || 0;
          return `<button type="button" class="field-chip" data-field="${esc(f)}">${esc(title)} <b>${cn}</b></button>`;
        })
        .join("");
      return `<div class="cluster-card">
        <h3>${esc(c.title || cid)}</h3>
        <div class="cn">${n} problems · <code>${esc(cid)}</code></div>
        <p class="cblurb">${esc(c.blurb || "")}</p>
        <div class="field-chips">${chips}</div>
      </div>`;
    })
    .join("");

  root.querySelectorAll(".field-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const f = btn.dataset.field;
      $("#score").value = "all";
      activeFilter = "all";
      $("#cluster").value = "";
      $("#field").value = f;
      refreshSubfieldOptions();
      document.querySelectorAll(".field-chip").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards();
      document.getElementById("board")?.scrollIntoView({ behavior: "smooth" });
    });
  });
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
      const sec =
        (p.fields_secondary || []).length > 0
          ? `+${p.fields_secondary.length} cross`
          : "";
      return `
      <button type="button" class="card" data-id="${esc(p.id)}" role="listitem" aria-label="${esc(p.name)}. ${esc(a.score || "")}. Open details">
        <div class="top">
          ${pill(a.score || "multi-sprint")}
          <span style="color:var(--faint);font-size:0.72rem">${esc(p.field)}</span>
        </div>
        <span class="card-title">${esc(p.name)}</span>
        <span class="hook">${esc(hook)}</span>
        <span class="summary">${esc((p.summary || "").slice(0, 140))}${(p.summary || "").length > 140 ? "…" : ""}</span>
        <div class="meta">
          <span>${esc(p.subfield || "")}</span>
          <span>${esc(e.culture || "")}</span>
          <span>${esc(e.refutability || "")}</span>
          <span>rung ${esc(e.closure_rung)}</span>
          ${sec ? `<span>${esc(sec)}</span>` : ""}
        </div>
      </button>`;
    })
    .join("");

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.querySelectorAll(".card").forEach((el, i) => {
    el.addEventListener("click", () => showModal(el.dataset.id));
    if (!reduce) {
      el.style.animationDelay = `${Math.min(i, 24) * 0.04}s`;
      el.classList.add("is-enter");
    }
  });
  syncStatPressed();
  writeURLState();
}

let lastFocus = null;

function showModal(id) {
  const p = ALL.find((x) => x.id === id);
  if (!p) return;
  const a = p.agentic_10day || {};
  const e = ep(p);
  const backdrop = $("#modal");
  const body = $("#modal-body");
  lastFocus = document.activeElement;
  $("#modal-title").textContent = p.name;
  const sec = (p.fields_secondary || [])
    .map((s) => `<span class="pill multi-sprint">${esc(s)}</span>`)
    .join(" ");
  body.innerHTML = `
    <div class="row">
      ${pill(a.score || "multi-sprint")}
      ${pill(e.culture || "program")}
      <span class="pill multi-sprint">${esc(p.field)}</span>
      <span class="pill multi-sprint">${esc(p.cluster)}</span>
      <span class="pill multi-sprint">${esc(e.refutability)}</span>
      <span class="pill multi-sprint">rung ${esc(e.closure_rung)}</span>
    </div>
    <p><b>Subfield.</b> <code>${esc(p.subfield || "—")}</code>
      ${sec ? ` · <b>Also spans</b> ${sec}` : ""}</p>
    <p><b>Viral hook.</b> ${esc(a.viral_hook || p.name)}</p>
    <p><b>Problem.</b> ${esc(p.summary)}</p>
    <p><b>Open-math parallel.</b> ${esc(e.open_math_parallel || "—")}</p>
    <p><b>Publish shape.</b> ${esc(e.publish_shape || "—")}</p>
    <p><b>Weak win.</b> ${esc(e.weak_win || "—")}</p>
    <p><b>Strong win.</b> ${esc(e.strong_win || "—")}</p>
    ${a.success ? `<p><b>10-day success criterion.</b> ${esc(a.success)}</p>` : ""}
    ${a.why ? `<p><b>Why this 10-day score.</b> ${esc(a.why)}</p>` : ""}
    ${p.why_hard ? `<p><b>Why the physics is hard.</b> ${esc(p.why_hard)}</p>` : ""}
    <p><b>Acceptance path.</b> ${esc(e.acceptance_path || "—")}</p>
    <p><b>Nature votes?</b> ${esc(e.nature_vote || "—")} · <b>Possibility:</b> ${esc(e.possibility || "—")}</p>
    <p><b>Agent publishable?</b> ${e.agent_publishable ? "yes (scoped)" : "no / theory-only"} ·
      <b>Impact</b> ${esc(p.impact)}/5 · <b>Difficulty</b> ${esc(p.difficulty)}/5</p>
    ${(a.harness || []).length ? `<p><b>Harness needs</b></p><div class="harness">${a.harness.map((h) => `<code>${esc(h)}</code>`).join("")}</div>` : ""}
    ${(p.tags || []).length ? `<p style="margin-top:0.8rem">${p.tags.map((t) => `<span class="pill multi-sprint">#${esc(t)}</span>`).join(" ")}</p>` : ""}
    <p style="margin-top:1rem;font-size:0.85rem">ID <code style="color:var(--accent)">${esc(p.id)}</code>
      · <a href="https://github.com/zozo123/open-physics-problems/blob/main/maps/by-field.md" target="_blank" rel="noopener">fields map</a>
      · <a href="https://github.com/zozo123/open-physics-problems/blob/main/maps/fields/${esc(p.field)}.md" target="_blank" rel="noopener">${esc(p.field)} page</a>
    </p>
  `;
  backdrop.hidden = false;
  backdrop.classList.add("open");
  history.replaceState(null, "", `#${id}`);
  // focus close control for keyboard users
  requestAnimationFrame(() => $("#modal-close")?.focus());
}

function hideModal() {
  const backdrop = $("#modal");
  backdrop.classList.remove("open");
  backdrop.hidden = true;
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  if (lastFocus && typeof lastFocus.focus === "function") {
    lastFocus.focus();
  }
}

function refreshSubfieldOptions() {
  const field = $("#field")?.value || "";
  const cluster = $("#cluster")?.value || "";
  const sel = $("#subfield");
  if (!sel) return;
  const cur = sel.value;
  let pool = ALL;
  if (field) pool = pool.filter((p) => p.field === field);
  else if (cluster) pool = pool.filter((p) => p.cluster === cluster);
  const subs = [...new Set(pool.map((p) => p.subfield).filter(Boolean))].sort();
  sel.innerHTML = `<option value="">All subfields</option>` +
    subs.map((s) => `<option value="${esc(s)}">${esc(s)}</option>`).join("");
  if (subs.includes(cur)) sel.value = cur;
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
  refreshSubfieldOptions();

  const rerender = () => {
    activeFilter = $("#score").value;
    if ($("#cluster")?.value && !$("#field")?.value) {
      // keep
    }
    refreshSubfieldOptions();
    renderCards();
  };
  ["field", "score", "culture", "refut", "cluster", "subfield"].forEach((id) => {
    const el = $(`#${id}`);
    if (!el) return;
    el.addEventListener("change", () => {
      if (id === "cluster") {
        if ($("#field")) $("#field").value = "";
      }
      if (id === "field" && $("#field").value) {
        const p = ALL.find((x) => x.field === $("#field").value);
        if (p && $("#cluster")) $("#cluster").value = p.cluster || "";
      }
      if (id === "score") activeFilter = $("#score").value;
      syncStatPressed();
      rerender();
    });
  });

  let searchTimer = null;
  $("#q")?.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      activeFilter = $("#score").value;
      renderCards();
    }, 150);
  });

  document.querySelectorAll("[data-jump-score]").forEach((btn) => {
    const go = () => {
      $("#score").value = btn.dataset.jumpScore;
      activeFilter = btn.dataset.jumpScore;
      syncStatPressed();
      document.getElementById("board").scrollIntoView({ behavior: "smooth" });
      renderCards();
    };
    btn.addEventListener("click", go);
  });

  $("#clear-filters")?.addEventListener("click", clearFilters);
}

async function boot() {
  try {
    const res = await fetch("data/problems.json");
    if (!res.ok) throw new Error("fetch failed");
    const data = await res.json();
    ALL = data.problems || [];
    META = data.meta || {};
  } catch (e) {
    $("#cards").innerHTML = `<div class="empty">Could not load data/problems.json. Serve via GitHub Pages or <code>python3 -m http.server</code> from <code>docs/</code>.</div>`;
    console.error(e);
    return;
  }

  renderStats();
  renderFeatured();
  renderClusters();
  setupFilters();
  applyURLState();
  if (!$("#score").value) {
    $("#score").value = "sprint";
    activeFilter = "sprint";
  } else {
    activeFilter = $("#score").value;
  }
  refreshSubfieldOptions();
  renderCards();
  syncStatPressed();

  if (location.hash) {
    const id = location.hash.slice(1);
    if (ALL.some((p) => p.id === id)) showModal(id);
  }

  $("#modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") hideModal();
  });
  $("#modal-close").addEventListener("click", hideModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("#modal").hidden) hideModal();
  });
}

boot();
