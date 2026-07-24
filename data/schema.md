# Schema (`data/problems.json`)

## Top level

```json
{
  "meta": { ... },
  "problems": [ Problem, ... ],
  "recently_solved": [ SolvedContrast, ... ]
}
```

## Problem

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | string | yes | kebab-case unique |
| `name` | string | yes | |
| `field` | enum | yes | see fields below |
| `summary` | string | yes | 1–3 sentences |
| `status` | enum | yes | `open` · `partially solved` · `controversially open` · `closed` |
| `kind` | enum | yes | `theoretical` · `experimental` · `mathematical` · `engineering` · `foundations` |
| `ai_tractability` | enum | yes | `high` · `medium` · `low` · `none` |
| `difficulty` | 1–5 | yes | human research hardness |
| `impact` | 1–5 | yes | if solved |
| `tags` | string[] | no | |
| `sources` | string[] | no | source list ids |
| `related` | string[] | no | other problem ids |
| `why_hard` | string | no | |
| `ai_notes` | string | no | |
| `notes` | string | no | |
| `agentic_10day` | object | yes | see below |
| `epistemology` | object | yes | see below |

### `field` enum

`general` · `quantum-gravity` · `mathematical-physics` · `cosmology` · `particle-physics` · `astrophysics` · `nuclear-physics` · `fluid-dynamics` · `condensed-matter` · `quantum-information` · `plasma-physics` · `biophysics` · `foundations`

### `agentic_10day`

| Field | Type | Notes |
|-------|------|-------|
| `score` | `sprint` · `stretch` · `multi-sprint` · `not-agentic` | |
| `scope` | string | full-or-verdict / partial / verdict / none |
| `success` | string | pre-registered 10-day criterion |
| `harness` | string[] | tools needed |
| `why` | string | why this score |
| `viral_hook` | string | shareable challenge line |

### `epistemology`

| Field | Type | Notes |
|-------|------|-------|
| `culture` | `open-math-like` · `polymath-data` · `program` · `discovery` · `foundations` | |
| `refutability` | `formal` · `hard` · `soft` · `gated` · `underdetermined` | |
| `closure_rung` | 0–5 | target rung for strong win |
| `possibility` | string | possibility class |
| `nature_vote` | string | how experiment decides |
| `publish_shape` | string | paper type that moves status |
| `math_analogue` | string | |
| `acceptance_path` | string | |
| `agent_publishable` | bool | |
| `weak_win` | string | publication-grade partial |
| `strong_win` | string | true closure |
| `open_math_parallel` | string | |
| `publish_now` | `yes-scoped` · `partial` · `program-papers` · `theory-only` · `clarify-only` | |
| `citation_ready` | bool | optional |
| `publication_feasibility` | string | optional |

## Closure rungs

| Rung | Meaning |
|-----:|---------|
| 0 | Option-space map |
| 1 | Model ranking / kill-list |
| 2 | Mechanism consensus |
| 3 | Anomaly closure |
| 4 | Empirical identification |
| 5 | Theorem / formal proof |

## Solved contrast entry

```json
{ "id": "...", "name": "...", "year_solved": 2015, "notes": "..." }
```
