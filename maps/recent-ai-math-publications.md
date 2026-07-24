# The motivation: recent publications that *closed* open math

This project exists because of a concrete wave of work (2024–2026): AI systems that don’t just *talk* about math, but produce **machine-checkable proofs** and **research-level solves** of open problems. Physics needs the analogous board.

---

## 1. AlphaProof + AlphaGeometry — IMO silver (2024 → Nature 2025)

| | |
|--|--|
| **What** | Formal math reasoning in Lean (AlphaProof) + geometry (AlphaGeometry 2) |
| **Result** | 4/6 problems on IMO 2024; silver-medal level (28/42) |
| **Why it matters** | Fixed problems → formal statements → verified proofs (not chat vibes) |
| **Blog** | [DeepMind: AI achieves silver-medal standard…](https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/) (25 Jul 2024) |
| **Paper** | Hubert et al., *Olympiad-level formal mathematical reasoning with reinforcement learning*, **Nature** (12 Nov 2025) — [nature.com/articles/s41586-025-09833-y](https://www.nature.com/articles/s41586-025-09833-y) |

**Recipe that transfers:**

1. Translate problem into a formal claim  
2. Search for a proof that a **kernel** accepts  
3. Score by official rules / peer validation  
4. Publish artifact (proofs, not screenshots)

---

## 2. AlphaProof Nexus — open **research** math (May 2026)

| | |
|--|--|
| **What** | LLM + Lean agentic loops (+ optional AlphaProof tool, evolutionary search) |
| **Result** | **9/353** open Erdős problems (incl. ones open **~56 years**); **44/492** OEIS conjectures; Hilbert-function open case; optimization bound; Green’s list #57 (with humans); quantum-optics constructions |
| **Cost** | ~few hundred USD inference per Erdős solve (order-of-magnitude) |
| **Paper** | Tsoukalas, Kovsharov, Shirobokov, … Kohli, Chaudhuri et al., *Advancing Mathematics Research with AI-Driven Formal Proof Search*, arXiv:**2605.22763** (21 May 2026) — [arxiv.org/abs/2605.22763](https://arxiv.org/abs/2605.22763) |
| **Artifacts** | [github.com/google-deepmind/alphaproof-nexus-results](https://github.com/google-deepmind/alphaproof-nexus-results) |
| **Catalog** | Problems drawn from [erdosproblems.com](https://www.erdosproblems.com/) via [Formal Conjectures](https://github.com/google-deepmind/formal-conjectures) |

**This is the direct template for “now physics!!!”**

- There was a **public list** of open problems (Erdős / OEIS / Formal Conjectures)  
- Statements were **formalized**  
- An **agent** searched until Lean accepted a proof  
- Humans **validated** that the formal statement matched the real conjecture  
- Results were **logged publicly** (incl. Tao’s wiki tracking AI contributions)

---

## 3. Supporting pieces of the same wave

| Work | Role |
|------|------|
| **Formal Conjectures** (DeepMind, 2025+) | Open repo of Lean *statements* of open problems — the math analogue of our `problems.json` |
| **FunSearch / AlphaEvolve** | Construction search with checkable fitness (bounds, objects) |
| **Aristotle / Gauss / LEAP** (related formalization systems) | Formalize natural-language proofs; reconstruct known results |
| **Tao / Bloom infrastructure** | Linking erdosproblems ↔ OEIS; tracking AI contributions |

---

## 4. What these papers prove about *process*

| Lesson from the papers | Physics translation in this repo |
|------------------------|----------------------------------|
| Need a **list of open claims** | `data/problems.json` (112 physics problems) |
| Need a **checkable success criterion** | `agentic_10day.success`, `epistemology.strong_win` |
| Prefer **kernel/data verification** over prose | Cultures: `open-math-like`, `polymath-data` |
| **Partial / related** results still count | Weak wins, rungs 0–4 |
| Humans still **validate statement fidelity** | Sprint PROTOCOL + claim issues |
| Not every open problem falls | `not-agentic` / discovery / foundations |
| Cost can be **finite and logged** | Sprint registration + ledger |

---

## 5. Critical difference: physics is not only Lean

AlphaProof Nexus works because many Erdős/OEIS claims are **formal theorems**.

Physics open problems split:

| Like Erdős formal claims | Not like Erdős |
|--------------------------|----------------|
| Yang–Mills mass gap, Navier–Stokes, confinement *proofs* | Dark matter *identity* (nature must detect) |
| Channel capacities, PQC reductions | Proton decay lifetime (megaton detector) |
| Anomaly reanalyses with public data (checkable pipelines) | Unique QM interpretation (underdetermined) |
| Mechanism ranking on fixed public benchmarks | Full TOE as a single formal ticket |

So: **same publication machine**, **different Verify(A)**.

---

## 6. The ask implied by those papers

> Math just showed: given a catalog of open problems + formal/checkable claims + agentic proof search, you can close research items and publish.

**Physics ask:** build the catalog + checkable claims + agentic loop board so the *next* papers can be physics closes — anomaly audits, math-phys theorems, classification shortlists — not chat cosplay of quantum gravity.

That is what Open Physics Problems Map is for.
