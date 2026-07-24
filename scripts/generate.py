#!/usr/bin/env python3
"""Regenerate derived markdown/CSV from data/problems.json."""

from __future__ import annotations

import csv
import json
from collections import defaultdict
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


def badge(ai: str) -> str:
    return {
        "high": "🟢 high",
        "medium": "🟡 medium",
        "low": "🟠 low",
        "none": "🔴 none",
    }[ai]


def main() -> None:
    cat = json.loads(DATA.read_text())
    problems = cat["problems"]
    meta = cat["meta"]
    solved = cat.get("recently_solved", [])

    # counts refresh
    meta["counts"] = {
        "open_problems": len(problems),
        "solved_contrast": len(solved),
        "by_field": dict(sorted(Counter := __import__("collections").Counter(p["field"] for p in problems).items())),
        "by_ai_tractability": dict(__import__("collections").Counter(p["ai_tractability"] for p in problems)),
        "by_kind": dict(__import__("collections").Counter(p["kind"] for p in problems)),
        "by_status": dict(__import__("collections").Counter(p["status"] for p in problems)),
    }
    cat["meta"] = meta
    DATA.write_text(json.dumps(cat, indent=2) + "\n")

    # CSV
    fields = [
        "id",
        "name",
        "field",
        "status",
        "kind",
        "ai_tractability",
        "difficulty",
        "impact",
        "summary",
        "why_hard",
        "tags",
        "sources",
    ]
    with (ROOT / "data" / "problems.csv").open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        for p in problems:
            row = {k: p.get(k, "") for k in fields}
            row["tags"] = "|".join(p.get("tags", []))
            row["sources"] = "|".join(p.get("sources", []))
            w.writerow(row)

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
            "| ID | Problem | Kind | AI tract. | Diff | Impact |",
            "|----|---------|------|-----------|------|--------|",
        ]
        for p in sorted(plist, key=lambda x: (-x["impact"], x["name"])):
            lines.append(
                f"| [`{p['id']}`](#{p['id']}) | {p['name']} | {p['kind']} | "
                f"{badge(p['ai_tractability'])} | {p['difficulty']}/5 | {p['impact']}/5 |"
            )
        lines.append("")
        for p in sorted(plist, key=lambda x: x["name"]):
            lines += [
                f"## {p['name']}",
                f'<a id="{p["id"]}"></a>',
                "",
                f"**ID:** `{p['id']}` · **Status:** {p['status']} · "
                f"**Kind:** {p['kind']} · **AI:** {badge(p['ai_tractability'])}",
                "",
                p["summary"],
                "",
            ]
            if p.get("why_hard"):
                lines += [f"**Why hard:** {p['why_hard']}", ""]
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
        "| ID | Name | Field | AI | Kind | Impact |",
        "|----|------|-------|----|------|--------|",
    ]
    for p in sorted(problems, key=lambda x: (x["field"], -x["impact"], x["name"])):
        idx.append(
            f"| `{p['id']}` | {p['name']} | {p['field']} | {p['ai_tractability']} | "
            f"{p['kind']} | {p['impact']} |"
        )
    (problems_dir / "INDEX.md").write_text("\n".join(idx) + "\n")

    # Lightweight map refresh for AI table is kept hand-authored for prose;
    # print summary for commit messages.
    print(f"Regenerated CSV + problems/*.md from {len(problems)} problems")
    print("AI counts:", meta["counts"]["by_ai_tractability"])


if __name__ == "__main__":
    main()
