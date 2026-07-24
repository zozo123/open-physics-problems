# Contributing

Thanks for helping map open physics problems.

## Add or update a problem

1. Edit **`data/problems.json`** (source of truth).
2. Run:

```bash
python3 scripts/validate.py
python3 scripts/generate.py
```

3. Open a PR describing:
   - which source list documents the problem
   - why the AI tractability score fits the [rubric](docs/methodology.md)

## Schema checklist

- Unique `id` (kebab-case)
- `field`, `kind`, `status`, `ai_tractability` from allowed enums
- `difficulty` and `impact` in 1–5
- `related` only references existing ids
- Prefer short, neutral summaries (no hype)

## What makes a good addition

- Named problem with citable source (Wikipedia section, Baez FAQ, Snowmass, review article)
- Clear open status (not already solved)
- Distinct from existing ids (extend `related` instead of duplicating)

## What to avoid

- Inventing problems without sources
- Personal research programs without community recognition
- Pure engineering tickets with no physics content
