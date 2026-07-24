# Sprint protocol (open math culture for physics)

This is how a problem **moves** on the board — the same social machine as open math solves, adapted for physics.

## 1. Pre-register (before any run)

Open a GitHub issue with template **Sprint registration**:

1. Problem `id` from `data/problems.json`
2. Target **rung** (0–5) and **weak vs strong** win text (copy from catalog or narrow it)
3. Success criterion (must be falsifiable)
4. Harness description (models, tools, data sources)
5. Start date; planned end ≤ start + 10 days for `sprint` score cards
6. Link to public repo/branch for artifacts

**No pre-registration → not a board close.** (Same spirit as “no claim without a stated conjecture.”)

## 2. Run

Allowed:

- Multi-agent LLM harnesses, code, formal provers, simulators
- Public data only (or synthetic data declared as such)
- Human collaborators (Polymath-style)

Forbidden as “evidence”:

- Private lab claims without public data
- Hallucinated measurements
- Screenshots of chat without artifacts

## 3. Artifact requirements

At least one of:

| Culture | Minimum artifact |
|---------|------------------|
| open-math-like | Proof sketch + formalizable claim; ideally Lean/Isabelle or careful PDF |
| polymath-data | Open code + notebook + reproduced figures/tables |
| program | Ranking table + fixed benchmarks + kill conditions |
| discovery | Theory/design paper only unless real measurement |
| foundations | Constraint map with explicit non-uniqueness |

## 4. Kill-check

Others must be able to:

1. Re-run or re-check the artifact
2. State what would falsify the claim
3. File a counter-issue if the claim fails

## 5. Close or update

- **Close:** PR that sets `status` to `closed` or `partially solved`, with link to artifact + issue, and a short note in `sprints/LEDGER.md`
- **Fail productively:** PR that improves `weak_win` / criterion / literature notes without false closure
- **Wikipedia lag:** if already solved in literature, meta-close with citations

## 6. Credit

Ledger entries credit harness authors, human reviewers, and prior literature. Partial credit is first-class.

## 7. What never closes a card

- “The model said so”
- TOE / full QG / Clay prize without community-grade proof
- Choosing one QM interpretation by rhetoric
- Fake experimental results
