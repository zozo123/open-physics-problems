# From open math publications → open physics publications

## Motivation (the *last few* papers — not abstract culture)

This is not a vague nod to “math is rigorous.” It is a direct response to **recent publications** where AI systems closed real open math:

1. **AlphaProof / AlphaGeometry** — IMO 2024 silver; formal Lean proofs  
   - Blog: [deepmind.google/…/ai-solves-imo-problems…](https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/)  
   - Nature (2025): [Olympiad-level formal mathematical reasoning…](https://www.nature.com/articles/s41586-025-09833-y)

2. **AlphaProof Nexus** (arXiv:2605.22763, May 2026) — research-level opens  
   - **9/353** open Erdős problems (some open ~56 years)  
   - **44/492** OEIS conjectures  
   - Hilbert functions, optimization, Green’s list, quantum optics  
   - Paper: [arxiv.org/abs/2605.22763](https://arxiv.org/abs/2605.22763)  
   - Proofs: [alphaproof-nexus-results](https://github.com/google-deepmind/alphaproof-nexus-results)

Full writeup: [`recent-ai-math-publications.md`](recent-ai-math-publications.md).

Those papers show a working machine:

> **public open-problem catalog → formal/checkable claim → agentic search → verified artifact → public log**

People solving open math that way do not “vibe a proof in chat.” They:

1. **Fix a statement** (Erdős formalization, IMO formal claim, OEIS conjecture)
2. **Produce an artifact** (Lean proof that compiles)
3. **Expose a kill condition** (sorry / type error / wrong formalization)
4. **Publish** (arXiv, GitHub, erdosproblems threads, Tao wiki)
5. Accept **partial credit** (variants, misformalization fixes, bounds)

**Physics deserves the same machine** — but physics is not only Lean. Nature often votes. Many “problems” are programs, not tickets. Foundations can be underdetermined.

This repository encodes that honesty for **all 112 problems**.

---

## What transfers from open math

| Math culture | Physics analogue |
|--------------|------------------|
| Fixed conjecture statement | Pre-registered success criterion |
| Proof / formalization | Proof **or** reanalysis **or** mechanism discrimination **or** discovery paper |
| Gap-finding | Anomaly systematics audits, claim audits |
| Polymath | Multi-agent + human sprints on public data |
| OEIS / classification | Spectral IDs, hadron taxonomy, FRB engine ranking |
| Clay prize rules | Scoped claims with acceptance path |
| “Not a proof” social norms | “Not a solve” if no Verify(A) |

**Core transfer:** a solve is a **publication-grade artifact** with a pre-registered claim and a kill condition — not confidence.

---

## What does *not* transfer

| Math assumption | Physics reality |
|-----------------|-----------------|
| Statement is purely formal | Often needs detectors / telescopes |
| One paper can finish it | Many items are multi-decade programs |
| Unique true answer | Some foundations are CH-like |
| Existence = proof | Existence of a particle = measurement |

---

## Five publication cultures (every problem tagged)

| Culture | Count | Product that “counts” | Math parallel |
|---------|------:|------------------------|---------------|
| **open-math-like** | 10 | Theorem on fixed math-phys claim | Clay / formal conjecture |
| **polymath-data** | 21 | Reproducible reanalysis / shortlist / audit | Polymath + OEIS |
| **program** | 52 | Mechanism convergence over papers | Research programs |
| **discovery** | 18 | Experimental/observational witness | Existence via construction by nature |
| **foundations** | 11 | Constraint maps; no fake unique trophies | Axiom / interpretation debates |

---

## Closure rungs (what “solved” means)

| Rung | Name | Typical culture |
|-----:|------|-----------------|
| 5 | Theorem / existence proof | open-math-like |
| 4 | Empirical identification | discovery / polymath-data |
| 3 | Anomaly closure | polymath-data |
| 2 | Mechanism consensus | program |
| 1 | Model ranking / kill-list | program / polymath-data |
| 0 | Option-space map | foundations |

Agents should **pre-register the rung** they aim for. Claiming rung 5 while delivering rung 0 is how trust dies.

---

## Refutability

| Class | Meaning | Agent loops? |
|-------|---------|--------------|
| **formal** | Logic/math kills the claim | Yes — proof culture |
| **hard** | Single decisive check (data/spectrum/stats) | Yes — best agent flagship |
| **soft** | Multi-probe pressure, slow death of models | Ranking works |
| **gated** | Needs new apparatus for strong close | Theory-only publish now |
| **underdetermined** | Multiple complete stories fit data | Maps only |

---

## `publish_now` (what you can ship this month)

| Value | Meaning |
|-------|---------|
| `yes-scoped` | 10-day sprint: scoped publication realistic |
| `partial` | Stretch: partial paper realistic |
| `program-papers` | Useful papers; not single closure |
| `theory-only` | Agents publish theory; discovery needs facilities |
| `clarify-only` | Taxonomies and constraints only |

---

## The open-physics publication loop (design goal)

```text
pick problem → declare culture + rung + success criterion
     → run harness (agents + tools + humans)
     → artifact (proof | code | notebook | paper draft)
     → public kill-check
     → PR updates problems.json status
     → board moves
```

This is **math’s loop**, ported carefully.

---

## Flagship classes for agentic physics (like “hot open math”)

1. **Polymath-data anomalies** — flyby, reactor/gallium, neutron lifetime audits, H0 pipelines  
2. **Open-math-like math-phys** — lemmas toward YM/NS/confinement; QI capacities; PQC audits  
3. **Classification** — DIBs, exotic hadrons, FRB ranking  
4. **Claim audits** — quantum biology, Wikipedia lag meta-closures  

Not flagship for fake trophies: TOE, unique QM interpretation, dark matter chat claims.

---

## See also

- [`agentic-10day.md`](agentic-10day.md) — timeboxed feasibility  
- [`ai-tractability.md`](ai-tractability.md) — longer-horizon AI shape  
- [`../docs/methodology.md`](../docs/methodology.md) — schema  
- Site: epistemology filters on the sprint board  
