# Changelog

## 1.0.0 — 2026-07-24

First finished release of **Open Physics Problems Map**.

### Catalog
- **112** open problems unified from Wikipedia, Baez FAQ, Strings 2000, Clay, Ginzburg themes, Snowmass-era frontiers
- **11** recently-solved contrast entries
- Full **`agentic_10day`** scores (13 sprint / 15 stretch / 48 multi-sprint / 36 not-agentic)
- Full **`epistemology`** map for every problem:
  - culture · refutability · closure rung · weak/strong wins · publish shape · open-math parallel · publish_now

### Cultures (open math → physics)
- `open-math-like` (10) · `polymath-data` (21) · `program` (52) · `discovery` (18) · `foundations` (11)

### Product
- GitHub Pages board: https://zozo123.github.io/open-physics-problems/
- Sprint protocol + ledger + issue templates (register / claim)
- `make build` pipeline: validate + generate all derived artifacts
- Machine-readable `data/problems.json`, `data/problems.csv`, `data/stats.json`
- Maps: landscape, AI tractability, agentic-10day, open-math-to-physics, epistemology-full, sources, e2e paths

### Design principles
1. A solve is a citable artifact with a kill condition
2. Nature often votes — discovery ≠ pure text
3. Partial credit is first-class (math already knew this)
4. No fake trophies on TOE / Clay / unique interpretations in 10 days
