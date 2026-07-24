# End-to-End Research Paths

How one might actually attack classes of open problems — from literature to closure criteria.

## Path A — Formal mathematical physics (AI-favorable)

**Examples:** Yang–Mills mass gap, Navier–Stokes, confinement proof pieces, quantum capacity.

```mermaid
flowchart TD
  A[Survey precise statements & failed approaches] --> B[Formalize in Lean/Isabelle or careful PDF]
  B --> C[Attack intermediate lemmas]
  C --> D[Computer-assisted proof search]
  D --> E[Human specialist verification]
  E --> F{Accepted?}
  F -->|yes| G[Publish + prize claim if any]
  F -->|no| C
```

**Closure criterion:** Peer-reviewed proof (Clay rules if applicable).

## Path B — Mechanism from rich data (AI-favorable)

**Examples:** high-Tc mechanism, glass, turbulence stats, DIBs, FRB model ranking, neutron lifetime systematics.

```mermaid
flowchart TD
  A[Aggregate datasets + theories] --> B[Model zoo + Bayesian/ML selection]
  B --> C[Predict novel observables]
  C --> D[Targeted experiment or reanalysis]
  D --> E{Decisive discrimination?}
  E -->|yes| F[Community consensus mechanism]
  E -->|no| B
```

**Closure criterion:** One mechanism predicts out-of-sample data better than rivals; textbooks converge.

## Path C — Discovery / identity problems (AI-unfavorable alone)

**Examples:** dark matter identity, proton decay, SUSY, neutrino Majorana nature.

```mermaid
flowchart TD
  A[Theory space priors] --> B[Design experiment / observatory]
  B --> C[Build facility 5-30 years]
  C --> D[Signal or exclusion]
  D --> E{Positive detection?}
  E -->|yes| F[Characterize particle/field]
  E -->|no| G[Update theory priors] --> A
```

**Closure criterion:** Direct detection / decay observation / or exhaustive exclusion of natural windows.

## Path D — Quantum gravity / TOE (generational)

```mermaid
flowchart TD
  A[Candidate frameworks: strings LQG asymptotics causal sets ...] --> B[Internal consistency + holography tests]
  B --> C[Low-energy theorems / cosmology predictions]
  C --> D[Precision / multimessenger tests]
  D --> E{Contact with Nature?}
  E -->|weak| A
  E -->|strong| F[Effective quantum gravity of our universe]
```

**Closure criterion:** Not elegance alone — predictive contact with observation.

## Path E — Foundations (may never unique-close)

**Examples:** QM interpretation, arrow of time deep 'why', quantum mind.

Closure may mean **clarified option space + experimental constraints**, not a single orthodoxy.
