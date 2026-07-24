#!/usr/bin/env python3
"""Validate data/problems.json schema and internal consistency."""

from __future__ import annotations

import json
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "data" / "problems.json"

ALLOWED_FIELDS = {
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
}
ALLOWED_KIND = {"theoretical", "experimental", "mathematical", "engineering", "foundations"}
ALLOWED_AI = {"high", "medium", "low", "none"}
ALLOWED_STATUS = {"open", "partially solved", "controversially open"}
ALLOWED_AGENTIC = {"sprint", "stretch", "multi-sprint", "not-agentic"}
REQUIRED = {"id", "name", "field", "summary", "status", "kind", "ai_tractability"}


def main() -> int:
    data = json.loads(PATH.read_text())
    problems = data["problems"]
    errors: list[str] = []
    ids: set[str] = set()

    for i, p in enumerate(problems):
        missing = REQUIRED - set(p)
        if missing:
            errors.append(f"[{i}] missing keys: {sorted(missing)}")
            continue
        pid = p["id"]
        if pid in ids:
            errors.append(f"duplicate id: {pid}")
        ids.add(pid)
        if p["field"] not in ALLOWED_FIELDS:
            errors.append(f"{pid}: bad field {p['field']}")
        if p["kind"] not in ALLOWED_KIND:
            errors.append(f"{pid}: bad kind {p['kind']}")
        if p["ai_tractability"] not in ALLOWED_AI:
            errors.append(f"{pid}: bad ai_tractability {p['ai_tractability']}")
        if p["status"] not in ALLOWED_STATUS:
            errors.append(f"{pid}: bad status {p['status']}")
        for key in ("difficulty", "impact"):
            if key in p and not (1 <= int(p[key]) <= 5):
                errors.append(f"{pid}: {key} out of range")
        if "agentic_10day" in p:
            a = p["agentic_10day"] or {}
            sc = a.get("score")
            if sc not in ALLOWED_AGENTIC:
                errors.append(f"{pid}: bad agentic_10day.score {sc}")
        for rel in p.get("related", []):
            # related may point ahead; check after full load
            pass

    id_set = {p["id"] for p in problems}
    for p in problems:
        for rel in p.get("related", []):
            if rel not in id_set:
                errors.append(f"{p['id']}: related unknown id '{rel}'")

    if errors:
        print("VALIDATION FAILED")
        for e in errors:
            print(" -", e)
        return 1

    print(f"OK: {len(problems)} problems")
    print(" fields:", dict(Counter(p["field"] for p in problems)))
    print(" ai:    ", dict(Counter(p["ai_tractability"] for p in problems)))
    print(" kinds: ", dict(Counter(p["kind"] for p in problems)))
    print(" status:", dict(Counter(p["status"] for p in problems)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
