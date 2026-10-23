# Open Physics Problems Map

**v1.0** (July 2026) — a catalog of **112 open problems in physics**, each tagged with a publication culture, a refutability class and a 10-day agentic-tractability score, for researchers and agent teams looking for checkable targets. Compiled by [Yossi Eliaz](https://zozo123.github.io/).

### Live board

**https://zozo123.github.io/open-physics-problems/**

UI system: [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) design tokens in [`design-system/open-physics-problems/MASTER.md`](design-system/open-physics-problems/MASTER.md) (Modern Dark cinema + data-dense dashboard).

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](CHANGELOG.md)

---

## Why this exists (the last few publications)

Recent work didn’t “discuss” open math — it **closed** items on public lists with **verified proofs**:

| Publication | What closed |
|-------------|-------------|
| **AlphaProof + AlphaGeometry** (IMO 2024; [Nature 2025](https://www.nature.com/articles/s41586-025-09833-y)) | 4/6 IMO problems at silver-medal level — formal Lean proofs |
| **AlphaProof Nexus** ([arXiv:2605.22763](https://arxiv.org/abs/2605.22763), May 2026) | **9/353** open **Erdős** problems (incl. ~56-year opens); **44/492** OEIS conjectures; plus research deploys (Hilbert functions, optimization, Green’s list, quantum optics) |

Recipe those papers share:

```text
open-problem catalog → formal/checkable claim → agentic search → verified artifact → public log
```

**This repo is that recipe for physics:** Wikipedia/Baez/Strings/Clay-class opens → success criteria + cultures → sprint protocol → ledger.

Deep dive: [`maps/recent-ai-math-publications.md`](maps/recent-ai-math-publications.md)

| Math (those papers) | Physics (this project) |
|---------------------|-------------------------|
| Erdős / OEIS / Formal Conjectures lists | `data/problems.json` (112 problems) |
| Lean statement + `sorry` | Pre-registered criterion + weak/strong win |
| Agent + Lean kernel | Agent + proof **or** public data pipeline **or** experiment |
| erdosproblems / Tao wiki log | Sprint issues + `sprints/LEDGER.md` |
| Not every problem falls | `not-agentic` / discovery / foundations tags |

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
| [`maps/recent-ai-math-publications.md`](maps/recent-ai-math-publications.md) | AlphaProof / Nexus / Erdős motivation |
| [`maps/by-field.md`](maps/by-field.md) | **Field / cluster split** (13 fields × subfields) |
| [`maps/fields/`](maps/fields/) | One page per field |
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
  author = {Eliaz, Yossi},
  title  = {Open Physics Problems Map},
  year   = {2026},
  version = {1.0.0},
  url    = {https://github.com/zozo123/open-physics-problems},
  note   = {Catalog of open problems in physics with an agentic sprint protocol}
}
```

## License

Catalog text and structure: [CC BY 4.0](LICENSE).  
Problem statements are paraphrases of public scientific lists; quote primary literature for authoritative wording.
