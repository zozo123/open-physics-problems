# Sources & Historical Lists Graph

Open physics problems are not one list — they are a **genealogy of lists** across communities.

## Timeline of major lists

```mermaid
timeline
    title Landmark lists of open problems
    section Classical
      1704 : Newton Opticks queries
      1900 : Kelvin two clouds
      1900 : Hilbert 6th problem axiomatize physics
    section Late 20th c.
      1971-2005 : Ginzburg lists ~30 problems
      1982 : Penrose GR problems
      1984/2000 : Barry Simon operator problems
      1988 : Bartnik GR problems
    section Millennium
      2000 : Clay Millennium Prize Problems
      2000 : Strings 2000 ten physics problems
      2000s : Baez Open Questions FAQ
    section Modern
      2008 : DARPA 23 mathematical challenges
      2017 : Coley mathematical physics open problems
      2021 : Snowmass particle physics frontiers
      ongoing : Wikipedia dynamic list
```

## Source coverage matrix

| Source | Domain | Approx. problems | Role in this repo |
|--------|--------|----------------:|-------------------|
| Wikipedia unsolved physics | All fields | 100+ | Primary inventory backbone |
| Baez FAQ | CM, QM, cosmo, particle, QG | ~40 | Classic narrative + status updates |
| Strings 2000 | Fundamental theory | 10 | Prestige 'millennium' physics set |
| Clay Math | Math physics | 2 physics-related of 7 | Prize-backed formal problems |
| Ginzburg | Broad + 3 great problems | ~30 | Historical Russian school framing |
| Snowmass 2021 | Particle/cosmo experimental | many | Community experimental roadmap |
| Coley arXiv:1710.02105 | Mathematical physics | list | Formal open questions |

## Strings 2000 ten (still essentially open as of mid-2020s)

| # | Problem in this catalog | Original question |
|--:|-------------------------|-------------------|
| 1 | `dimensionless-constants` | Are dimensionless parameters calculable or accidents? |
| 2 | `quantum-gravity` | How can QG explain origin of the universe? |
| 3 | `proton-decay` | Proton lifetime? |
| 4 | `susy` | Is Nature supersymmetric? How broken? |
| 5 | `why-3plus1` | Why 3+1 dimensions? |
| 6 | `cosmo-constant` | Why this cosmological constant? |
| 7 | `m-theory-dof` | M-theory degrees of freedom; does it describe Nature? |
| 8 | `bh-information` | Black hole information paradox resolution? |
| 9 | `hierarchy` | Gravity vs particle mass scale disparity? |
| 10 | `color-confinement` | QCD confinement and mass gap quantitatively? |

## Source → problem graph

```mermaid
flowchart LR
  WIKI[Wikipedia] --> CAT[This catalog]
  BAEZ[Baez FAQ] --> CAT
  S2K[Strings 2000] --> CAT
  CLAY[Clay Millennium] --> CAT
  GINZ[Ginzburg] --> CAT
  SNOW[Snowmass] --> CAT
  CAT --> MAPS[Landscape + AI maps]
  CAT --> JSON[problems.json]
```

## Community taxonomies compared

| Community | Typical axes | What they optimize for |
|-----------|--------------|------------------------|
| High-energy theory | BSM, naturalness, unification | Deeper laws |
| Experimental HEP | Discovery reach, precision | Detectors & facilities |
| Cosmology | Early universe, DE/DM, surveys | Observational programs |
| Condensed matter | Emergence, materials, topology | Mechanisms & applications |
| Math physics | Existence, rigor, PDEs | Theorems |
| Foundations | Measurement, time, locality | Conceptual clarity |
| AMO / QI | Control, error, capacity | Devices |

Different lists answer different questions: **'what would rewrite textbooks?'** vs **'what can we fund next decade?'** vs **'what can we prove?'**.
