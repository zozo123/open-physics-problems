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
ALLOWED_CULTURE = {"open-math-like", "polymath-data", "program", "discovery", "foundations"}
ALLOWED_REFUT = {"formal", "hard", "soft", "gated", "underdetermined"}
ALLOWED_PUBNOW = {"yes-scoped", "partial", "program-papers", "theory-only", "clarify-only"}
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
        if "epistemology" in p:
            e = p["epistemology"] or {}
            if e.get("culture") not in ALLOWED_CULTURE:
                errors.append(f"{pid}: bad epistemology.culture {e.get('culture')}")
            if e.get("refutability") not in ALLOWED_REFUT:
                errors.append(f"{pid}: bad epistemology.refutability {e.get('refutability')}")
            if e.get("publish_now") not in ALLOWED_PUBNOW:
                errors.append(f"{pid}: bad epistemology.publish_now {e.get('publish_now')}")
            rung = e.get("closure_rung")
            if rung is not None and not (0 <= int(rung) <= 5):
                errors.append(f"{pid}: bad closure_rung {rung}")
            for req in ("weak_win", "strong_win", "publish_shape"):
                if not e.get(req):
                    errors.append(f"{pid}: missing epistemology.{req}")
        else:
            errors.append(f"{pid}: missing epistemology")
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
