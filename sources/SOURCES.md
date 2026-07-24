# Sources

Primary lists and roadmaps feeding this catalog. Prefer original URLs for authoritative wording.

## Core inventories

| ID | Source | URL | Role |
|----|--------|-----|------|
| `wikipedia` | List of unsolved problems in physics | https://en.wikipedia.org/wiki/List_of_unsolved_problems_in_physics | Broad dynamic inventory across all domains |
| `baez` | John Baez — Open Questions in Physics (Usenet Physics FAQ) | https://math.ucr.edu/home/baez/physics/General/open_questions.html | Classic curated FAQ with commentary (updated ~2020) |
| `strings2000` | Strings 2000 — Physics Problems for the Next Millennium | https://www.preskill.caltech.edu/millennium.html | Ten prestige fundamental-physics questions |
| `clay` | Clay Mathematics Institute Millennium Prize Problems | https://www.claymath.org/millennium-problems/ | Yang–Mills mass gap; Navier–Stokes |
| `ginzburg` | Vitaly Ginzburg open-problem lists (1971–2005) | Summarized on Wikipedia page above | ~30 problems; three “great problems” |
| `snowmass` | Snowmass 2021 (APS DPF community planning) | https://atlaswww.hep.anl.gov/snowmass21/ | Particle/cosmo experimental frontiers |
| `coley` | Coley, *Open problems in mathematical physics* | https://arxiv.org/abs/1710.02105 | Mathematical physics open questions |
| `darpa` | DARPA Mathematical Challenges (2008), physics-related | Referenced via Wikipedia historical section | Fluids, soft matter, QFT↔biology, Langlands |

## Secondary / supporting

| Topic | Resource | URL |
|-------|----------|-----|
| 25-year Strings 2000 status discussion | Big Think / Ethan Siegel | https://bigthink.com/starts-with-a-bang/update-millennium-problems-physics/ |
| Clay Yang–Mills official page | CMI | https://www.claymath.org/millennium-problems/yang-mills-and-mass-gap |
| Clay Navier–Stokes official page | CMI | https://www.claymath.org/millennium-problems/navier-stokes-equation |
| Aizenman mathematical physics open problems | Princeton | https://web.math.princeton.edu/~aizenman/OpenProblems_MathPhys/ |
| Particle Data Group reviews | PDG | https://pdg.lbl.gov/ |
| Open problems aggregator (historical links) | openproblems.net | https://www.openproblems.net/ |

## Historical anchors

| Year | Item | Notes |
|------|------|-------|
| 1704 | Newton, *Opticks* queries | Early open-question list on light |
| 1900 | Lord Kelvin “two clouds” | Aether; equipartition — both soon solved |
| 1900 | Hilbert’s 6th problem | Axiomatization of physics |
| 1982 | Penrose problems in GR | Several still open |
| 1984 / 2000 | Barry Simon Schrödinger-operator problems | Partial progress |
| 1988 | Bartnik problems in GR | Mathematical GR |
| 2000 | Strings 2000 + Clay | Twin millennium moments |

## Strings 2000 full list (for reference)

1. Calculability of dimensionless parameters (Gross)  
2. Quantum gravity and origin of the universe (Witten)  
3. Proton lifetime (Gubser)  
4. Supersymmetry and its breaking (Ferrara, Kane)  
5. Why 3+1 dimensions (Kachru, Mukhi, Ooguri)  
6. Cosmological constant value / constancy (Chamblin, Kallosh)  
7. M-theory degrees of freedom (Dolan, Sinkovics, Rose)  
8. Black hole information paradox (Ali, Mathur)  
9. Hierarchy / gravity–particle scale disparity (Strassler)  
10. QCD confinement and mass gap (Klebanov, Tafjord)  

Panel: Duff, Gross, Witten. Presented 15 July 2000.

## Ginzburg’s three “great problems”

As cited on Wikipedia’s unsolved-physics page:

1. Arrow of time  
2. Interpretations of quantum mechanics  
3. Life arising from physics alone (abiogenesis)

## How sources map into this repo

```
Wikipedia ──┐
Baez ───────┼──► data/problems.json ──► problems/*.md
Strings2000─┤              │
Clay ───────┤              ├──► maps/landscape.md
Ginzburg ───┤              ├──► maps/ai-tractability.md
Snowmass ───┘              └──► maps/sources-graph.md
```

## Citation ethics

Problem statements here are **paraphrases** for mapping and tooling. When writing papers or grant text, quote and cite the **original scientific literature** and official prize statements, not only this catalog.
