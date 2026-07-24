# 10-Day Agentic Sprint Formalization

## Motivation

Open-problem lists in physics are optimized for **prestige and completeness**, not for **closed-loop solving**.

Agentic AI needs the opposite:

| Prestige list optimizes | Sprint board optimizes |
|-------------------------|------------------------|
| Century-scale importance | ≤10-day closure path |
| Name recognition | Verifiable artifacts |
| “Would rewrite textbooks” | “Can be finished before the sprint ends” |
| Undecidable foundations | Scoped success criteria |

**Motivation in one line:** stop asking models to cosplay Einstein on TOE; give them problems where a skeptical human can grade the artifact on day 11.

## Virality (good kind)

Virality that helps science:

1. **Challenge cards** — shareable hooks (“Can agents kill the flyby anomaly?”)
2. **Anti-hype credibility** — Clay problems marked *not-agentic* for 10 days
3. **Agent Olympics** — same criteria, different harnesses
4. **Partial credit culture** — verdicts and kill-lists are first-class wins
5. **PR loop** — close a card → open PR → community stress-test

Virality that harms science:

- Chat screenshots as “proof”
- Moving goalposts after failure
- Claiming millennium prizes
- Hallucinated experimental results

## Predicate

Assume a maximal harness \(H^*\): multi-agent LLMs, tools, code, formal provers, simulators, literature access; human verification at the end.

\[
\mathrm{AgenticSprintable}(P, 10\mathrm{d})
\iff
\exists A.\;
\mathrm{Verify}(A, \mathrm{Success}(P))
\land \mathrm{Time}(H^*\to A)\le 10\mathrm{d}
\land \neg\mathrm{NewFacility}(P)
\land \neg\mathrm{InterpretationOnly}(P)
\]

## Scores

| Score | Count (v0.1) | Meaning |
|-------|-------------:|---------|
| `sprint` | 13 | Credible close/verdict/decisive partial in ≤10 days |
| `stretch` | 15 | Ambitious partial; full close optimistic |
| `multi-sprint` | 48 | Right AI *shape*, wrong 10-day honesty |
| `not-agentic` | 36 | Empirical gate, underdetermined, or century formal |

## What counts as solved

1. Peer-checkable proof of the stated claim  
2. Reproducible reanalysis that closes (or cleanly reopens) an anomaly  
3. Mechanism consensus already fixed by public evidence (incl. Wikipedia lag)  
4. Explicit **meta-closure**: literature already settled it  

## What does not count

1. Confident prose without artifact  
2. Another unconstrained high-Tc mechanism  
3. TOE / full QG / full Clay prize claims  
4. Fake experimental data  

## Sprint board (current)

See site default filter or query:

```bash
python3 -c "import json;d=json.load(open('data/problems.json'));
print('\n'.join(p['id'] for p in d['problems'] if p['agentic_10day']['score']=='sprint'))"
```

### Design rule of thumb

- **If success needs a new detector → not-agentic**  
- **If success is a theorem with Clay-scale depth → not-agentic for 10d** (still multi-year AI-relevant)  
- **If success is a public-data verdict → sprint/stretch**  
- **If success is ranking mechanisms → stretch** (unless data already decides)

## Relationship to other axes

| Axis | Question |
|------|----------|
| `ai_tractability` | Could AI help *eventually* (~2 gens)? |
| `agentic_10day` | Could a maximal harness *finish* in ≤10 days? |
| `impact` | Does the world care? |
| `difficulty` | Is it hard for humans? |

A problem can be `ai_tractability: high` and `agentic_10day: not-agentic` (e.g. Yang–Mills).
