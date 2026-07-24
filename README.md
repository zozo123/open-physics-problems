# Open Physics Problems Map

**A multi-source, machine-readable map of open problems in physics** — with landscape taxonomies, historical source graphs, end-to-end research paths, AI tractability estimates, and a **10-day agentic sprint board** (what maximal multi-agent harnesses can *honestly* attempt before day 11).

> **112 open problems** curated from Wikipedia, John Baez’s FAQ, Strings 2000, Clay Millennium problems, Ginzburg themes, Snowmass-era frontiers, and mathematical-physics lists.

### Live site (GitHub Pages)

**https://zozo123.github.io/open-physics-problems/**

Sprint-first UI: formalization, virality ethics, filterable board with success criteria per card.

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

## Why this repo exists

Lists of “unsolved problems in physics” are scattered: Wikipedia’s dynamic inventory, prestige sets (Strings 2000, Clay), community roadmaps (Snowmass), and classic FAQs (Baez). They use **different taxonomies** and answer different questions:

| Question the list answers | Typical source |
|---------------------------|----------------|
| What would rewrite textbooks? | Strings 2000, Ginzburg “great problems” |
| What can we fund next decade? | Snowmass, facility white papers |
| What can we *prove*? | Clay, mathematical physics lists |
| What is still mysterious in everyday physics? | Baez FAQ, condensed-matter challenges |

This repository **unifies** those lists into one catalog, then **maps** them by domain, empirical gatekeeping, and AI tractability.

---

## Quick start

```bash
# Browse the catalog
open data/problems.json          # machine-readable
open problems/INDEX.md           # full index
open maps/landscape.md           # landscape map
open maps/ai-tractability.md     # AI / LLM split

# Validate + regenerate derived files
python3 scripts/validate.py
python3 scripts/generate.py
```

---

## Repository map

```
├── README.md
├── data/
│   ├── problems.json      # source of truth (112 problems)
│   └── problems.csv       # flat export
├── problems/              # one page per field
│   ├── INDEX.md
│   ├── cosmology.md
│   ├── particle-physics.md
│   └── ...
├── maps/
│   ├── landscape.md           # multi-axis landscape + mermaid
│   ├── ai-tractability.md     # LLM-plausible vs not
│   ├── sources-graph.md       # genealogy of lists
│   └── e2e-research-path.md   # how problems actually get closed
├── assets/
│   └── landscape.html         # interactive browser map
├── SOURCES.md                 # full source knowledge graph (historical → modern)
├── TAXONOMY.md                # how communities categorize problems
├── sources/
│   └── SOURCES.md             # compact source table
├── docs/
│   └── methodology.md
└── scripts/
    ├── validate.py
    └── generate.py
```

---

## Snapshot statistics

| Axis | Breakdown |
|------|-----------|
| **By field** | particle (19), astrophysics (17), cosmology (14), condensed matter (13), quantum gravity (10), nuclear (8), biophysics (8), quantum info (6), foundations (5), plasma (4), fluids (3), math phys (3), general (2) |
| **By AI tractability** | 🟢 high **47** · 🟡 medium **34** · 🟠 low **26** · 🔴 none **5** |
| **By kind** | theoretical 60 · experimental 33 · mathematical 9 · foundations 7 · engineering 3 |

---

## AI / LLM tractability (headline)

Not “can a chatbot talk about it” — **could AI systems with formal tools, simulation, and literature synthesis plausibly *close* the problem within ~2 model generations**, with human verification?

### 🟢 Best AI targets (high tractability × high impact)

| Problem | Why |
|---------|-----|
| **Yang–Mills existence & mass gap** | Pure formal math (Clay $1M) |
| **Navier–Stokes smoothness** | Pure analysis (Clay $1M) |
| **Color confinement (proof)** | Known physics; missing rigor |
| **Turbulence statistics** | Data-rich + theory |
| **High-Tc mechanism** | Huge corpus; model selection |
| **Glass transition** | Conceptual + computational stat-mech |
| **FQHE ν=5/2** | Focused condensed-matter theory |
| **BQP / quantum capacity / PQC proofs** | Math + complexity |
| **DIBs, anomaly reanalyses** | Pattern matching on spectra/data |

### 🔴 Unlikely even for strong future LLMs alone

| Problem | Why |
|---------|-----|
| **Dark matter identity** | Needs detection |
| **Dark energy nature** | Needs decisive cosmology |
| **Proton decay** | Megaton detectors, decades |
| **Full quantum gravity of *our* universe** | Planck-scale access |
| **Theory of everything** | Empirically + theoretically gated |
| **QM interpretation (unique)** | May not have a single scientific answer |

Full split → [`maps/ai-tractability.md`](maps/ai-tractability.md)

---

## Landmark source lists

| Year | List | Notes |
|------|------|-------|
| 1900 | Kelvin’s “two clouds” | Both solved within a decade (relativity + QM) |
| 1900 | Hilbert’s 6th problem | Axiomatize physics |
| 1971–2005 | Ginzburg lists | ~30 problems + 3 “great” ones |
| 2000 | **Clay Millennium** | Yang–Mills, Navier–Stokes (physics-related) |
| 2000 | **Strings 2000 top 10** | Still essentially open |
| 2000s– | Baez Open Questions FAQ | Living narrative list |
| 2021 | Snowmass | US particle-physics roadmap |
| ongoing | Wikipedia unsolved physics | Broad dynamic inventory |

Strings 2000 (still open as of mid-2020s): dimensionless constants, QG & origin, proton lifetime, SUSY, 3+1 dimensions, cosmological constant, M-theory DOF, black-hole information, hierarchy, QCD confinement/mass gap.  
Source: [Preskill / Strings 2000](https://www.preskill.caltech.edu/millennium.html)

---

## End-to-end research paths

Different problem *classes* need different closure paths:

1. **Formal math** → lemmas → computer-assisted proof → peer review  
2. **Mechanism from data** → model zoo → novel predictions → decisive test  
3. **Discovery / identity** → facility → signal/exclusion (AI cannot skip the detector)  
4. **Quantum gravity / TOE** → consistency → low-energy theorems → observational contact  
5. **Foundations** → constrain option space (may never unique-close)

Details → [`maps/e2e-research-path.md`](maps/e2e-research-path.md)

---

## Data schema

Each problem in `data/problems.json`:

```json
{
  "id": "yang-mills-mass-gap",
  "name": "Yang–Mills existence and mass gap",
  "field": "mathematical-physics",
  "summary": "...",
  "status": "open",
  "kind": "mathematical",
  "ai_tractability": "high",
  "ai_notes": "...",
  "difficulty": 5,
  "impact": 5,
  "tags": ["millennium", "qft"],
  "sources": ["clay", "wikipedia"],
  "related": ["color-confinement"],
  "why_hard": "..."
}
```

`ai_tractability` ∈ `high | medium | low | none`  
`kind` ∈ `theoretical | experimental | mathematical | engineering | foundations`  
`status` ∈ `open | partially solved | controversially open`

---

## Methodology & caveats

- **Not exhaustive.** Physics has thousands of open questions; this is a **notable curated map**.
- **AI scores are judgments**, not forecasts. They encode *problem structure* (formal vs empirical), not vibes.
- **Status lags reality.** Example: protein structure *prediction* advanced dramatically via AlphaFold-class models while “folding physics” remains deep.
- **Citations** point to list sources, not the full research literature on each problem.

See [`docs/methodology.md`](docs/methodology.md).

---

## Contributing

1. Edit `data/problems.json` (source of truth).  
2. Run `python3 scripts/validate.py && python3 scripts/generate.py`.  
3. Open a PR with source links for new problems.

Suggested additions: arXiv ids, INSPIRE links, “active experiment” fields, citation graphs.

---

## License

Catalog text and structure: [CC BY 4.0](LICENSE).  
Problem statements are paraphrased from public scientific lists; consult original sources for authoritative wording.

---

## Citation

```bibtex
@misc{openphysicsproblemsmap2026,
  title  = {Open Physics Problems Map},
  year   = {2026},
  note   = {Multi-source catalog of open problems in physics with AI tractability maps},
  url    = {https://github.com/zozo123/open-physics-problems}
}
```

**Repo:** https://github.com/zozo123/open-physics-problems

---

## Explore

```bash
# Interactive map (from repo root)
python3 -m http.server 8000
# open http://localhost:8000/assets/landscape.html
```

| Doc | What it is |
|-----|------------|
| [`problems/INDEX.md`](problems/INDEX.md) | All 112 problems |
| [`maps/landscape.md`](maps/landscape.md) | Multi-axis landscape + mermaid graphs |
| [`maps/ai-tractability.md`](maps/ai-tractability.md) | Full AI/LLM split |
| [`maps/agentic-10day.md`](maps/agentic-10day.md) | ≤10-day agentic sprint formalization |
| [`maps/e2e-research-path.md`](maps/e2e-research-path.md) | How problem classes get closed |
| [`SOURCES.md`](SOURCES.md) | Deep source knowledge graph |
| [`TAXONOMY.md`](TAXONOMY.md) | Community classification schemes |

## External links

| Resource | URL |
|----------|-----|
| Wikipedia unsolved physics | https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_physics |
| Baez open questions | https://math.ucr.edu/home/baez/physics/General/open_questions.html |
| Strings 2000 problems | https://www.preskill.caltech.edu/millennium.html |
| Clay Millennium | https://www.claymath.org/millennium-problems/ |
| Snowmass 2021 | https://atlaswww.hep.anl.gov/snowmass21/ |
