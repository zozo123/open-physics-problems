# Fluid Dynamics

**3 open problems** in this domain.

| ID | Problem | Culture | Refut. | 10d | Rung | Impact |
|----|---------|---------|--------|-----|-----:|--------|
| [`navier-stokes`](#navier-stokes) | Navier–Stokes existence and smoothness | open-math-like | formal | not-agentic | 5 | 5/5 |
| [`turbulence`](#turbulence) | Statistical theory of turbulence | program | soft | multi-sprint | 2 | 5/5 |
| [`granular-convection`](#granular-convection) | Granular convection / Brazil-nut effect | program | soft | stretch | 2 | 2/5 |

## Granular convection / Brazil-nut effect
<a id="granular-convection"></a>

**ID:** `granular-convection` · **Status:** open · **Kind:** theoretical · **AI:** 🟢 high · **10d:** `stretch`

**Cluster:** `matter` · **Subfield:** `granular`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 2 · **publish_now:** `partial`

Why do shaken granular materials convect and size-segregate?

**Hook:** Why do the big nuts rise? Physics of your snack mix.

**Weak win:** framework cage-match on fixed benchmarks

**Strong win:** textbook convergence on one mechanism

**Publish shape:** mechanism paper with decisive observable discrimination

**Open-math parallel:** Like settling a program over many papers (geometrization-era style)

**10-day criterion:** Minimal continuum/DEM model reproducing Brazil-nut + convection with open simulation code.

**Harness:** `DEM-sim`, `literature`

**AI notes:** Soft-matter simulation + theory; much progress already.

**Tags:** `granular`, `soft-matter`

**Sources:** wikipedia

---

## Navier–Stokes existence and smoothness
<a id="navier-stokes"></a>

**ID:** `navier-stokes` · **Status:** open · **Kind:** mathematical · **AI:** 🟢 high · **10d:** `not-agentic`

**Cluster:** `matter` · **Subfield:** `mathematical-fluids` · **Also:** `mathematical-physics`

**Culture:** `open-math-like` · **Refutability:** `formal` · **Rung:** 5 · **publish_now:** `clarify-only`

Do smooth solutions to 3D incompressible Navier–Stokes exist for all time for nice initial data, or do singularities form? (Clay Millennium)

**Hook:** Don't claim NS in 10 days. Formalize the battlefield.

**Why hard:** Nonlinear PDE blow-up control in 3D is a century-old challenge.

**Weak win:** Lean formalization; barrier survey; 2D/toy theorems

**Strong win:** Full proof accepted by mathematical physics community

**Publish shape:** Clay-style theorem

**Open-math parallel:** Fixed statement → proof → citation — pure math playbook

**10-day criterion:** N/A for full Clay problem in 10 days. Possible: formalize statement + survey barriers in Lean.

**Harness:** `formal-proof`, `literature`

**AI notes:** Pure analysis; among best LLM/AI math targets.

**Tags:** `millennium`, `fluids`, `pde`, `clay`

**Sources:** clay, wikipedia, baez

**Related:** `turbulence`

---

## Statistical theory of turbulence
<a id="turbulence"></a>

**ID:** `turbulence` · **Status:** open · **Kind:** theoretical · **AI:** 🟢 high · **10d:** `multi-sprint`

**Cluster:** `matter` · **Subfield:** `turbulence` · **Also:** `plasma-physics`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 2 · **publish_now:** `program-papers`

Is there a closed theoretical model for the statistics and internal structures of turbulent flow?

**Hook:** Don't solve turbulence — steal a benchmark.

**Why hard:** Strong nonlinearity, multiscale energy cascade, lack of closed equations for moments.

**Weak win:** framework cage-match on fixed benchmarks

**Strong win:** textbook convergence on one mechanism

**Publish shape:** mechanism paper with decisive observable discrimination

**Open-math parallel:** Like settling a program over many papers (geometrization-era style)

**10-day criterion:** Improved reduced-order / ML-physics hybrid for a benchmark flow with open metrics — not 'solved turbulence'.

**Harness:** `CFD`, `ML`, `theory`

**AI notes:** Data-rich; ML + theory of cascades/structure functions highly promising.

**Tags:** `turbulence`, `fluids`, `chaos`, `nonequilibrium`

**Sources:** wikipedia, baez

**Related:** `navier-stokes`

---
