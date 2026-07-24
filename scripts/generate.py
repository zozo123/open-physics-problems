#!/usr/bin/env python3
"""Regenerate all derived artifacts from data/problems.json (source of truth)."""

from __future__ import annotations

import csv
import json
from collections import Counter, defaultdict
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "problems.json"

FIELDS_ORDER = [
    "general",
    "quantum-gravity",
    "mathematical-physics",
    "cosmology",
    "particle-physics",
    "astrophysics",
    "nuclear-physics",
    "fluid-dynamics",
    "condensed-matter",
    "quantum-information",
    "plasma-physics",
    "biophysics",
    "foundations",
]

FIELD_TITLES = {
    "general": "General / Fundamental",
    "quantum-gravity": "Quantum Gravity",
    "mathematical-physics": "Mathematical Physics",
    "cosmology": "Cosmology & Relativity",
    "particle-physics": "High-Energy / Particle Physics",
    "astrophysics": "Astronomy & Astrophysics",
    "nuclear-physics": "Nuclear Physics",
    "fluid-dynamics": "Fluid Dynamics",
    "condensed-matter": "Condensed Matter",
    "quantum-information": "Quantum Computing & Information",
    "plasma-physics": "Plasma Physics",
    "biophysics": "Biophysics",
    "foundations": "Foundations of Physics",
}

SCORE_ORDER = {"sprint": 0, "stretch": 1, "multi-sprint": 2, "not-agentic": 3}
CULTURE_ORDER = {
    "open-math-like": 0,
    "polymath-data": 1,
    "program": 2,
    "discovery": 3,
    "foundations": 4,
}


def badge(ai: str) -> str:
    return {
        "high": "🟢 high",
        "medium": "🟡 medium",
        "low": "🟠 low",
        "none": "🔴 none",
    }.get(ai, ai)


def refresh_counts(meta: dict, problems: list, solved: list) -> dict:
    meta["counts"] = {
        "open_problems": len(problems),
        "solved_contrast": len(solved),
        "by_field": dict(sorted(Counter(p["field"] for p in problems).items())),
        "by_ai_tractability": dict(Counter(p["ai_tractability"] for p in problems)),
        "by_kind": dict(Counter(p["kind"] for p in problems)),
        "by_status": dict(Counter(p["status"] for p in problems)),
    }
    if any("agentic_10day" in p for p in problems):
        meta["counts"]["by_agentic_10day"] = dict(
            Counter((p.get("agentic_10day") or {}).get("score", "unset") for p in problems)
        )
    if any("epistemology" in p for p in problems):
        meta["counts"]["by_culture"] = dict(
            Counter((p.get("epistemology") or {}).get("culture", "unset") for p in problems)
        )
        meta["counts"]["by_refutability"] = dict(
            Counter((p.get("epistemology") or {}).get("refutability", "unset") for p in problems)
        )
        meta["counts"]["by_publish_now"] = dict(
            Counter((p.get("epistemology") or {}).get("publish_now", "unset") for p in problems)
        )
        meta["counts"]["by_closure_rung"] = {
            str(k): v
            for k, v in sorted(
                Counter(
                    (p.get("epistemology") or {}).get("closure_rung", -1) for p in problems
                ).items()
            )
        }
    return meta


def write_csv(problems: list) -> None:
    fields = [
        "id",
        "name",
        "field",
        "status",
        "kind",
        "ai_tractability",
        "difficulty",
        "impact",
        "agentic_score",
        "culture",
        "refutability",
        "closure_rung",
        "publish_now",
        "summary",
        "why_hard",
        "weak_win",
        "strong_win",
        "publish_shape",
        "viral_hook",
        "tags",
        "sources",
    ]
    path = ROOT / "data" / "problems.csv"
    with path.open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        for p in problems:
            a = p.get("agentic_10day") or {}
            e = p.get("epistemology") or {}
            w.writerow(
                {
                    "id": p.get("id", ""),
                    "name": p.get("name", ""),
                    "field": p.get("field", ""),
                    "status": p.get("status", ""),
                    "kind": p.get("kind", ""),
                    "ai_tractability": p.get("ai_tractability", ""),
                    "difficulty": p.get("difficulty", ""),
                    "impact": p.get("impact", ""),
                    "agentic_score": a.get("score", ""),
                    "culture": e.get("culture", ""),
                    "refutability": e.get("refutability", ""),
                    "closure_rung": e.get("closure_rung", ""),
                    "publish_now": e.get("publish_now", ""),
                    "summary": p.get("summary", ""),
                    "why_hard": p.get("why_hard", ""),
                    "weak_win": e.get("weak_win", ""),
                    "strong_win": e.get("strong_win", ""),
                    "publish_shape": e.get("publish_shape", ""),
                    "viral_hook": a.get("viral_hook", ""),
                    "tags": "|".join(p.get("tags", [])),
                    "sources": "|".join(p.get("sources", [])),
                }
            )


def write_field_pages(problems: list) -> None:
    by_field: dict[str, list] = defaultdict(list)
    for p in problems:
        by_field[p["field"]].append(p)

    problems_dir = ROOT / "problems"
    problems_dir.mkdir(exist_ok=True)

    for field, plist in by_field.items():
        lines = [
            f"# {FIELD_TITLES.get(field, field)}",
            "",
            f"**{len(plist)} open problems** in this domain.",
            "",
            "| ID | Problem | Culture | Refut. | 10d | Rung | Impact |",
            "|----|---------|---------|--------|-----|-----:|--------|",
        ]
        for p in sorted(plist, key=lambda x: (-x.get("impact", 0), x["name"])):
            e = p.get("epistemology") or {}
            a = p.get("agentic_10day") or {}
            lines.append(
                f"| [`{p['id']}`](#{p['id']}) | {p['name']} | {e.get('culture','')} | "
                f"{e.get('refutability','')} | {a.get('score','')} | {e.get('closure_rung','')} | "
                f"{p.get('impact','')}/5 |"
            )
        lines.append("")
        for p in sorted(plist, key=lambda x: x["name"]):
            e = p.get("epistemology") or {}
            a = p.get("agentic_10day") or {}
            lines += [
                f"## {p['name']}",
                f'<a id="{p["id"]}"></a>',
                "",
                f"**ID:** `{p['id']}` · **Status:** {p.get('status')} · **Kind:** {p.get('kind')} · "
                f"**AI:** {badge(p.get('ai_tractability',''))} · **10d:** `{a.get('score','')}`",
                "",
                f"**Culture:** `{e.get('culture','')}` · **Refutability:** `{e.get('refutability','')}` · "
                f"**Rung:** {e.get('closure_rung','')} · **publish_now:** `{e.get('publish_now','')}`",
                "",
                p.get("summary", ""),
                "",
            ]
            if a.get("viral_hook"):
                lines += [f"**Hook:** {a['viral_hook']}", ""]
            if p.get("why_hard"):
                lines += [f"**Why hard:** {p['why_hard']}", ""]
            if e.get("weak_win"):
                lines += [f"**Weak win:** {e['weak_win']}", ""]
            if e.get("strong_win"):
                lines += [f"**Strong win:** {e['strong_win']}", ""]
            if e.get("publish_shape"):
                lines += [f"**Publish shape:** {e['publish_shape']}", ""]
            if e.get("open_math_parallel"):
                lines += [f"**Open-math parallel:** {e['open_math_parallel']}", ""]
            if a.get("success"):
                lines += [f"**10-day criterion:** {a['success']}", ""]
            if a.get("harness"):
                lines += ["**Harness:** " + ", ".join(f"`{h}`" for h in a["harness"]), ""]
            if p.get("ai_notes"):
                lines += [f"**AI notes:** {p['ai_notes']}", ""]
            if p.get("notes"):
                lines += [f"**Notes:** {p['notes']}", ""]
            if p.get("tags"):
                lines += ["**Tags:** " + ", ".join(f"`{t}`" for t in p["tags"]), ""]
            if p.get("sources"):
                lines += ["**Sources:** " + ", ".join(p["sources"]), ""]
            if p.get("related"):
                lines += ["**Related:** " + ", ".join(f"`{r}`" for r in p["related"]), ""]
            lines += ["---", ""]
        (problems_dir / f"{field}.md").write_text("\n".join(lines))

    # INDEX
    idx = [
        "# Problem Index",
        "",
        f"Total open problems: **{len(problems)}**",
        "",
        "Generated from `data/problems.json`. Prefer the [live board](https://zozo123.github.io/open-physics-problems/).",
        "",
        "## By field",
        "",
    ]
    for field in FIELDS_ORDER:
        if field not in by_field:
            continue
        idx.append(
            f"- [{FIELD_TITLES[field]}]({field}.md) — {len(by_field[field])} problems"
        )
    idx += [
        "",
        "## Full table",
        "",
        "| ID | Name | Field | Culture | 10d | Rung | Impact |",
        "|----|------|-------|---------|-----|-----:|--------|",
    ]
    for p in sorted(
        problems,
        key=lambda x: (
            SCORE_ORDER.get((x.get("agentic_10day") or {}).get("score", ""), 9),
            CULTURE_ORDER.get((x.get("epistemology") or {}).get("culture", ""), 9),
            -x.get("impact", 0),
            x["name"],
        ),
    ):
        e = p.get("epistemology") or {}
        a = p.get("agentic_10day") or {}
        idx.append(
            f"| `{p['id']}` | {p['name']} | {p['field']} | {e.get('culture','')} | "
            f"{a.get('score','')} | {e.get('closure_rung','')} | {p.get('impact','')} |"
        )
    (problems_dir / "INDEX.md").write_text("\n".join(idx) + "\n")


def write_sprint_board(problems: list) -> None:
    sprints = [p for p in problems if (p.get("agentic_10day") or {}).get("score") == "sprint"]
    stretch = [p for p in problems if (p.get("agentic_10day") or {}).get("score") == "stretch"]
    lines = [
        "# Sprint board (publication-grade)",
        "",
        "Pre-registered targets for agentic / human Polymath-style work.",
        "See [protocol](../sprints/PROTOCOL.md).",
        "",
        f"## Sprint ({len(sprints)})",
        "",
        "| ID | Hook | Culture | Criterion |",
        "|----|------|---------|-----------|",
    ]
    for p in sorted(sprints, key=lambda x: -x.get("impact", 0)):
        a = p["agentic_10day"]
        e = p.get("epistemology") or {}
        lines.append(
            f"| `{p['id']}` | {a.get('viral_hook', p['name'])} | {e.get('culture','')} | "
            f"{(a.get('success') or '')[:120]} |"
        )
    lines += ["", f"## Stretch ({len(stretch)})", ""]
    lines += ["| ID | Hook | Weak win |", "|----|------|----------|"]
    for p in sorted(stretch, key=lambda x: -x.get("impact", 0)):
        a = p["agentic_10day"]
        e = p.get("epistemology") or {}
        lines.append(
            f"| `{p['id']}` | {a.get('viral_hook', p['name'])} | {(e.get('weak_win') or '')[:120]} |"
        )
    lines.append("")
    (ROOT / "sprints" / "BOARD.md").write_text("\n".join(lines))


def write_epistemology_table(problems: list) -> None:
    lines = [
        "# Full epistemology map (all problems)",
        "",
        "Auto-generated by `scripts/generate.py`. Source: `data/problems.json`.",
        "",
        "| Culture | Refutability | publish_now | Rung | 10d | ID | Name |",
        "|---------|--------------|-------------|-----:|-----|----|------|",
    ]
    for p in sorted(
        problems,
        key=lambda x: (
            CULTURE_ORDER.get((x.get("epistemology") or {}).get("culture", ""), 9),
            -x.get("impact", 0),
            x["name"],
        ),
    ):
        e = p.get("epistemology") or {}
        a = p.get("agentic_10day") or {}
        lines.append(
            f"| {e.get('culture','')} | {e.get('refutability','')} | {e.get('publish_now','')} | "
            f"{e.get('closure_rung','')} | {a.get('score','')} | `{p['id']}` | {p['name']} |"
        )
    lines += ["", "## Weak vs strong wins (impact ≥ 4)", ""]
    for p in sorted(problems, key=lambda x: -x.get("impact", 0)):
        if p.get("impact", 0) < 4:
            continue
        e = p.get("epistemology") or {}
        lines += [
            f"### {p['name']} (`{p['id']}`)",
            f"- **Culture:** {e.get('culture')} · **Refutability:** {e.get('refutability')} · "
            f"**Rung:** {e.get('closure_rung')}",
            f"- **Weak win:** {e.get('weak_win','')}",
            f"- **Strong win:** {e.get('strong_win','')}",
            f"- **Publish shape:** {e.get('publish_shape','')}",
            f"- **Open-math parallel:** {e.get('open_math_parallel','')}",
            "",
        ]
    (ROOT / "maps" / "epistemology-full.md").write_text("\n".join(lines))


def main() -> None:
    cat = json.loads(DATA.read_text())
    problems = cat["problems"]
    meta = cat["meta"]
    solved = cat.get("recently_solved", [])

    meta["version"] = meta.get("version") or "1.0.0"
    meta["generated"] = date.today().isoformat()
    meta = refresh_counts(meta, problems, solved)
    cat["meta"] = meta
    DATA.write_text(json.dumps(cat, indent=2) + "\n")

    write_csv(problems)
    write_field_pages(problems)
    (ROOT / "sprints").mkdir(exist_ok=True)
    write_sprint_board(problems)
    write_epistemology_table(problems)

    # GitHub Pages data sync
    pages_data = ROOT / "docs" / "data" / "problems.json"
    pages_data.parent.mkdir(parents=True, exist_ok=True)
    pages_data.write_text(json.dumps(cat, indent=2) + "\n")

    # compact stats for site/README snippets
    stats_path = ROOT / "data" / "stats.json"
    stats_path.write_text(json.dumps(meta["counts"], indent=2) + "\n")
    (ROOT / "docs" / "data" / "stats.json").write_text(json.dumps(meta["counts"], indent=2) + "\n")

    print(f"v{meta['version']} · {len(problems)} problems · generated {meta['generated']}")
    print("AI:", meta["counts"].get("by_ai_tractability"))
    print("10d:", meta["counts"].get("by_agentic_10day"))
    print("culture:", meta["counts"].get("by_culture"))


if __name__ == "__main__":
    main()
