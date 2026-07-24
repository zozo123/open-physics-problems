# Open Physics Problems Map

**v1.0** — A publication-grade, machine-readable map of **112 open problems in physics**, built the way open **math** actually gets solved: fixed claims, public artifacts, kill-checks, partial credit — adapted for the fact that **nature often votes**.

### Live board

**https://zozo123.github.io/open-physics-problems/**

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](CHANGELOG.md)

---

## Why this exists

| Open math culture | This project for physics |
|-------------------|---------------------------|
| Fixed conjecture statement | Pre-registered success criterion + weak/strong wins |
| Proof / formalization | Proof **or** reanalysis **or** mechanism discrimination **or** discovery |
| Polymath / Lean / arXiv | Sprint protocol + ledger + public artifacts |
| Partial credit (lemmas) | Rungs 0–5; kill-lists count |
| Status boards | Filterable board + `problems.json` |

Physics lists are usually **prestige museums**. This is a **race track + courthouse**: what can be published, checked, and closed — including by multi-agent harnesses — without fake trophies.

---

## Snapshot (v1.0)

| Axis | Breakdown |
|------|-----------|
| **Problems** | 112 open + 11 recently-solved contrast |
| **Cultures** | open-math-like 10 · polymath-data 21 · program 52 · discovery 18 · foundations 11 |
| **10-day agentic** | sprint 13 · stretch 15 · multi-sprint 48 · not-agentic 36 |
| **Refutability** | formal 10 · hard 21 · soft 52 · gated 18 · underdetermined 11 |

```
                    needs new experiment / facility
                              ▲
     dark matter · proton decay · SUSY · fusion
                              │
  formal ◄────────────────────┼────────────────────► foundations
  math                        │
   Yang–Mills · Navier–Stokes │  QM interpretation · arrow of time
   confinement · high-Tc      │
                              ▼
                    closable from theory / existing data
```

---

## Quick start

```bash
git clone https://github.com/zozo123/open-physics-problems.git
cd open-physics-problems
make build          # validate + regenerate all derived files
make serve          # site at http://localhost:8000
```

| Path | What |
|------|------|
| [`data/problems.json`](data/problems.json) | **Source of truth** |
| [`data/schema.md`](data/schema.md) | Field reference |
| [`sprints/PROTOCOL.md`](sprints/PROTOCOL.md) | How to run/close a sprint |
| [`sprints/BOARD.md`](sprints/BOARD.md) | Sprint + stretch cards |
| [`sprints/LEDGER.md`](sprints/LEDGER.md) | Closed / notable runs |
| [`maps/open-math-to-physics.md`](maps/open-math-to-physics.md) | Culture manifesto |
| [`maps/epistemology-full.md`](maps/epistemology-full.md) | All 112 × epistemology |
| [`problems/INDEX.md`](problems/INDEX.md) | Markdown index by field |

---

## How a “solve” works here

```text
pre-register issue → run harness → public artifact → kill-check
       → PR updates status + LEDGER → board moves
```

1. Pick a card (prefer `sprint` / `polymath-data` / `open-math-like`)
2. Open **Sprint registration** issue (template)
3. Ship code/proof/notebook that meets the criterion
4. Open **Claim closure** + PR

See [sprints/PROTOCOL.md](sprints/PROTOCOL.md).

### What never counts

- Chat confidence without artifact  
- Fabricated experiments  
- TOE / full QG / Clay prizes claimed without community-grade proof  
- Unique QM interpretation by rhetoric  

---

## Repository layout

```
data/problems.json     # source of truth
data/problems.csv      # flat export
data/stats.json        # counts
data/schema.md
docs/                  # GitHub Pages site
problems/              # per-field markdown
maps/                  # landscape, AI, epistemology, sources
sprints/               # protocol, board, ledger
scripts/validate.py
scripts/generate.py
Makefile
```

---

## Sources

Wikipedia unsolved physics · [Baez FAQ](https://math.ucr.edu/home/baez/physics/General/open_questions.html) · [Strings 2000](https://www.preskill.caltech.edu/millennium.html) · [Clay Millennium](https://www.claymath.org/millennium-problems/) · Ginzburg themes · Snowmass-era frontiers  

Full graph: [`SOURCES.md`](SOURCES.md) · [`TAXONOMY.md`](TAXONOMY.md)

---

## Citation

```bibtex
@misc{openphysicsproblemsmap2026,
  title  = {Open Physics Problems Map},
  year   = {2026},
  version = {1.0.0},
  url    = {https://github.com/zozo123/open-physics-problems},
  note   = {Publication-grade catalog of open problems in physics with agentic sprint protocol}
}
```

## License

Catalog text and structure: [CC BY 4.0](LICENSE).  
Problem statements are paraphrases of public scientific lists; quote primary literature for authoritative wording.
