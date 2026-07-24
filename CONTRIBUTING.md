# Contributing

Thanks for helping build a **publication-grade** map of open physics problems — in the spirit of how open math problems actually get solved.

## Quick path

```bash
make build          # validate + regenerate everything
make serve          # http://localhost:8000  (GitHub Pages tree)
```

## Edit data (source of truth)

1. Edit **`data/problems.json` only**
2. Run `make build`
3. Open a PR (template checklist applies)

Schema: [`data/schema.md`](data/schema.md)

## Add a problem

- Must appear in a citable source list (Wikipedia, Baez, Strings 2000, Clay, major roadmap, named puzzle with reviews)
- Unique kebab-case `id`
- Fill `agentic_10day` **and** `epistemology` (copy a similar problem as template)
- Prefer short neutral summaries

## Close or partially solve a problem

1. Pre-register via issue template **Sprint registration**
2. Produce a public artifact
3. Open **Claim closure** issue
4. PR: update `status`, `sprints/LEDGER.md`, regenerate

Protocol: [`sprints/PROTOCOL.md`](sprints/PROTOCOL.md)

## Site / docs

- Pages live in `docs/` (GitHub Pages `/docs` on `main`)
- After JSON changes, `scripts/generate.py` syncs `docs/data/problems.json`

## What we reject

- Invented problems without sources
- Closure claims without pre-registration + artifact
- Fabricated experimental results
- TOE / full QG “solved in chat” PRs
