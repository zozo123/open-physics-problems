# Methodology

## Goal

Build an **end-to-end map** of notable open problems in physics that is:

1. **Multi-source** — not a single Wikipedia scrape  
2. **Machine-readable** — JSON/CSV for tooling and agents  
3. **Cross-linked** — related problems and source genealogy  
4. **Actionable** — research-path templates + AI tractability estimates  

## Inclusion criteria

A problem is included if **at least one** holds:

- Appears on Wikipedia’s list of unsolved problems in physics  
- Appears on Baez’s Open Questions in Physics FAQ  
- Is one of the Strings 2000 “Physics Problems for the Next Millennium”  
- Is a Clay Millennium problem with clear physics content (Yang–Mills, Navier–Stokes)  
- Is a Ginzburg “great problem” or widely cited community frontier (e.g. Snowmass themes)  
- Is a standard named puzzle (Hubble tension, neutron lifetime, strong CP, etc.)

We **do not invent** problems. Wording is paraphrased for consistency.

## Exclusion / de-emphasis

- Purely engineering product goals without open *physics*  
- Long-solved items (kept only in `recently_solved` for calibration)  
- Ultra-niche open calculations unless they appear on major lists  

## Field taxonomy

Problems are assigned one primary `field`:

`general | quantum-gravity | mathematical-physics | cosmology | particle-physics | astrophysics | nuclear-physics | fluid-dynamics | condensed-matter | quantum-information | plasma-physics | biophysics | foundations`

Secondary structure uses `tags` and `related` edges.

## Kind taxonomy

| Kind | Meaning |
|------|---------|
| `theoretical` | Missing explanatory framework or calculation within physics |
| `experimental` | Needs measurement, detection, or observational resolution |
| `mathematical` | Precise theorem/construction in mathematical physics |
| `engineering` | Physics + large-scale technology (fusion, FTQC) |
| `foundations` | Conceptual/interpretive; may lack unique empirical closure |

## AI tractability rubric

Judged for **AI systems ~current through two generations ahead**, including tool use, formal provers, and scientific simulators — **not** chat-only LLMs.

| Score | Meaning |
|-------|---------|
| `high` | Formal proof, mechanism-from-existing-data, or computational theory problem where AI could plausibly produce a community-checkable solution |
| `medium` | AI can accelerate theory/model selection a lot; decisive closure still needs new experiments or facilities |
| `low` | Empirically gated or highly underdetermined; AI explores theory space but cannot decide alone |
| `none` | Requires discovery-class experiments, inaccessible scales, or is not uniquely decidable as framed |

**Important:** `high` ≠ “easy.” Yang–Mills is `high` AI-tractability (right *shape* for formal AI) and still extremely hard.

### Signals used for scoring

- Is the statement a **theorem-shaped** claim?  
- Does decisive evidence already exist in public data?  
- Is the blocker **facility-scale** (collider, megaton detector, space mission)?  
- Are multiple interpretations **empirically equivalent**?  
- Has ML already shifted the frontier (e.g. protein structure)?  

## Difficulty & impact (1–5)

Subjective curator scores for prioritization — **not** objective metrics.

- **difficulty**: research hardness if well-resourced  
- **impact**: how much of physics/worldview changes if solved  

## Status labels

| Status | Meaning |
|--------|---------|
| `open` | Widely accepted as unsolved |
| `partially solved` | Major piece closed; core physics remains |
| `controversially open` | Disputed whether a real anomaly remains |

## Epistemology (open math → open physics)

Every problem has an `epistemology` object (see `maps/open-math-to-physics.md`).

| Field | Values / meaning |
|-------|------------------|
| `culture` | `open-math-like` · `polymath-data` · `program` · `discovery` · `foundations` |
| `refutability` | `formal` · `hard` · `soft` · `gated` · `underdetermined` |
| `closure_rung` | 0 map → 5 theorem (target rung for a “full” solve) |
| `possibility` | `mathematical` · `empirical-fact` · `theoretical` · `technological` · `maybe-unique` |
| `nature_vote` | whether experiment must decide |
| `weak_win` / `strong_win` | publication-grade partial vs true closure |
| `publish_shape` | what kind of paper moves status |
| `open_math_parallel` | closest math-culture analogue |
| `publish_now` | `yes-scoped` · `partial` · `program-papers` · `theory-only` · `clarify-only` |
| `agent_publishable` | can agents produce a citable scoped artifact now? |

**Inspiration:** Millennium statements, Polymath, Lean formalization, crypto proof culture — ported so physics “solves” are artifacts with kill conditions, not vibes.

## Generation pipeline

```
data/problems.json  ──validate.py──►  OK
        │
        └──generate.py──► problems/*.md, maps/*, data/problems.csv
```

Always edit JSON first; regenerate derived artifacts.

## Bias & limitations

1. **Anglophone / HEP-cosmo weighted** sources dominate prestige lists.  
2. **AI scores will age** as models and formal tools improve.  
3. **One primary field** flattens interdisciplinary problems (e.g. axions = particle + DM + cosmology).  
4. **No citation graph yet** of research activity (future work: INSPIRE/arXiv coupling).  
5. **Wikipedia lag**: some “open” items may be partially closed in specialist literature.

## Update policy

- Add problems with at least one citable source list  
- When a problem is solved, move to `recently_solved` with year + note  
- Revisit AI scores when major AI-for-science capabilities change  

## Source URLs

See [`sources/SOURCES.md`](../sources/SOURCES.md).
