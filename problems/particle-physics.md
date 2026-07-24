# High-Energy / Particle Physics

**19 open problems** in this domain.

| ID | Problem | Culture | Refut. | 10d | Rung | Impact |
|----|---------|---------|--------|-----|-----:|--------|
| [`color-confinement`](#color-confinement) | Color confinement (analytic proof) | open-math-like | formal | not-agentic | 5 | 5/5 |
| [`gut`](#gut) | Grand unification | discovery | gated | not-agentic | 4 | 5/5 |
| [`hierarchy`](#hierarchy) | Hierarchy problem | discovery | gated | not-agentic | 4 | 5/5 |
| [`neutrino-mass`](#neutrino-mass) | Neutrino masses and nature | discovery | gated | not-agentic | 4 | 5/5 |
| [`proton-decay`](#proton-decay) | Proton decay | discovery | gated | not-agentic | 4 | 5/5 |
| [`strong-cp`](#strong-cp) | Strong CP problem | program | soft | multi-sprint | 3 | 5/5 |
| [`susy`](#susy) | Supersymmetry realization | discovery | gated | not-agentic | 4 | 5/5 |
| [`extra-dimensions`](#extra-dimensions) | Extra dimensions | discovery | gated | not-agentic | 4 | 4/5 |
| [`muon-g2`](#muon-g2) | Muon anomalous magnetic moment | polymath-data | hard | multi-sprint | 3 | 4/5 |
| [`generations`](#generations) | Three generations of matter | discovery | gated | not-agentic | 4 | 4/5 |
| [`exotic-hadrons`](#exotic-hadrons) | Exotic hadrons structure | polymath-data | hard | multi-sprint | 4 | 3/5 |
| [`glueballs`](#glueballs) | Glueballs | polymath-data | hard | multi-sprint | 4 | 3/5 |
| [`monopoles`](#monopoles) | Magnetic monopoles | discovery | gated | not-agentic | 4 | 3/5 |
| [`neutron-lifetime`](#neutron-lifetime) | Neutron lifetime puzzle | polymath-data | hard | stretch | 3 | 3/5 |
| [`proton-spin`](#proton-spin) | Proton spin crisis | program | soft | multi-sprint | 3 | 3/5 |
| [`reactor-anomaly`](#reactor-anomaly) | Reactor antineutrino anomaly | polymath-data | hard | sprint | 3 | 3/5 |
| [`gallium-anomaly`](#gallium-anomaly) | Gallium anomaly | polymath-data | hard | sprint | 3 | 2/5 |
| [`koide`](#koide) | Koide formula | polymath-data | hard | sprint | 2 | 2/5 |
| [`mu-problem`](#mu-problem) | μ problem in SUSY | discovery | gated | multi-sprint | 4 | 2/5 |

## Color confinement (analytic proof)
<a id="color-confinement"></a>

**ID:** `color-confinement` · **Status:** open · **Kind:** mathematical · **AI:** 🟢 high · **10d:** `not-agentic`

**Culture:** `open-math-like` · **Refutability:** `formal` · **Rung:** 5 · **publish_now:** `clarify-only`

Provide an analytic proof that color-charged particles are confined in non-Abelian gauge theory / QCD.

**Hook:** Confinement is real — the proof is not a weekend.

**Why hard:** Nonperturbative strong-coupling dynamics without complete analytic tools.

**Weak win:** Lean formalization; barrier survey; 2D/toy theorems

**Strong win:** Full proof accepted by mathematical physics community

**Publish shape:** Clay-style theorem

**Open-math parallel:** Fixed statement → proof → citation — pure math playbook

**10-day criterion:** N/A full analytic proof. Partial lattice/EFT exposition only.

**Harness:** `formal-proof`, `lattice-lit`

**AI notes:** Closely related to mass gap; lattice evidence strong but proof missing.

**Tags:** `qcd`, `confinement`, `yang-mills`

**Sources:** wikipedia, strings2000, baez

**Related:** `yang-mills-mass-gap`, `qcd-vacuum`

---

## Exotic hadrons structure
<a id="exotic-hadrons"></a>

**ID:** `exotic-hadrons` · **Status:** open · **Kind:** theoretical · **AI:** 🟢 high · **10d:** `multi-sprint`

**Culture:** `polymath-data` · **Refutability:** `hard` · **Rung:** 4 · **publish_now:** `program-papers`

What combinations of quarks exist (pentaquarks, tetraquarks)? Tightly bound multiquarks or molecules?

**Hook:** Is that pentaquark a molecule?

**Why hard:** Many states; ambiguous binding mechanisms.

**Weak win:** ranked shortlist with reproducible scores

**Strong win:** unique ID confirmed by lab/observation

**Publish shape:** identification / classification with scores

**Open-math parallel:** OEIS / classification culture: name the object

**10-day criterion:** For one named state: molecule vs compact multi-quark likelihood table.

**Harness:** `amplitude`, `lattice-results`, `literature`

**AI notes:** Spectroscopy + lattice + amplitude analysis.

**Tags:** `qcd`, `hadrons`, `spectroscopy`

**Sources:** wikipedia

---

## Extra dimensions
<a id="extra-dimensions"></a>

**ID:** `extra-dimensions` · **Status:** open · **Kind:** experimental · **AI:** 🟠 low · **10d:** `not-agentic`

**Culture:** `discovery` · **Refutability:** `gated` · **Rung:** 4 · **publish_now:** `theory-only`

Does nature have more than 4 spacetime dimensions? What size? Fundamental or emergent?

**Hook:** Extra dimensions

**Why hard:** No experimental signal; vast model space.

**Weak win:** theory priors, public exclusions, design papers

**Strong win:** detection or PDG property

**Publish shape:** discovery / precision property / decisive null

**Open-math parallel:** Cannot Lean-prove a particle into existence

**Tags:** `extra-dimensions`, `string-theory`, `collider`

**Sources:** wikipedia, strings2000

---

## Gallium anomaly
<a id="gallium-anomaly"></a>

**ID:** `gallium-anomaly` · **Status:** controversially open · **Kind:** experimental · **AI:** 🟢 high · **10d:** `sprint`

**Culture:** `polymath-data` · **Refutability:** `hard` · **Rung:** 3 · **publish_now:** `yes-scoped`

Why do gallium solar-neutrino calibration source experiments see a deficit?

**Hook:** Gallium's missing neutrinos, agent-audited.

**Weak win:** open pipeline reproducing residuals

**Strong win:** anomaly closed or forced new physics accepted

**Publish shape:** reanalysis / error budget paper

**Open-math parallel:** Polymath-style collaborative checking — applied to data artifacts

**10-day criterion:** Same class as reactor: nuclear/systematics vs sterile with quantitative budget.

**Harness:** `nuclear-data`, `stats`, `literature`

**AI notes:** Analysis and nuclear physics heavy.

**Tags:** `neutrinos`, `anomaly`

**Sources:** wikipedia

---

## Glueballs
<a id="glueballs"></a>

**ID:** `glueballs` · **Status:** open · **Kind:** experimental · **AI:** 🟡 medium · **10d:** `multi-sprint`

**Culture:** `polymath-data` · **Refutability:** `hard` · **Rung:** 4 · **publish_now:** `program-papers`

Do pure-glue bound states (glueballs) exist in nature, and which observed mesons are they?

**Hook:** Glueballs

**Why hard:** Mix with ordinary mesons; hard experimental ID.

**Weak win:** ranked shortlist with reproducible scores

**Strong win:** unique ID confirmed by lab/observation

**Publish shape:** identification / classification with scores

**Open-math parallel:** OEIS / classification culture: name the object

**Tags:** `qcd`, `glueballs`

**Sources:** wikipedia

---

## Grand unification
<a id="gut"></a>

**ID:** `gut` · **Status:** open · **Kind:** theoretical · **AI:** 🟠 low · **10d:** `not-agentic`

**Culture:** `discovery` · **Refutability:** `gated` · **Rung:** 4 · **publish_now:** `theory-only`

Do EM, weak, and strong forces unify at high energy? Under what symmetry?

**Hook:** Grand unification

**Why hard:** Needs proton decay or other smoking-gun signals near GUT scale.

**Weak win:** theory priors, public exclusions, design papers

**Strong win:** detection or PDG property

**Publish shape:** discovery / precision property / decisive null

**Open-math parallel:** Cannot Lean-prove a particle into existence

**Tags:** `gut`, `unification`

**Sources:** wikipedia, baez

---

## Hierarchy problem
<a id="hierarchy"></a>

**ID:** `hierarchy` · **Status:** open · **Kind:** theoretical · **AI:** 🟠 low · **10d:** `not-agentic`

**Culture:** `discovery` · **Refutability:** `gated` · **Rung:** 4 · **publish_now:** `theory-only`

Why is gravity so weak compared to other forces / why is the electroweak scale far below the Planck scale?

**Hook:** Hierarchy problem

**Why hard:** Naturalness arguments failed at LHC so far; may need new philosophy of theory choice.

**Weak win:** theory priors, public exclusions, design papers

**Strong win:** detection or PDG property

**Publish shape:** discovery / precision property / decisive null

**Open-math parallel:** Cannot Lean-prove a particle into existence

**Tags:** `naturalness`, `hierarchy`, `bsm`

**Sources:** wikipedia, strings2000

**Related:** `susy`, `extra-dimensions`

---

## Koide formula
<a id="koide"></a>

**ID:** `koide` · **Status:** open · **Kind:** theoretical · **AI:** 🟡 medium · **10d:** `sprint`

**Culture:** `polymath-data` · **Refutability:** `hard` · **Rung:** 2 · **publish_now:** `yes-scoped`

Why does a simple relation among charged lepton masses hold to high precision (Q≈2/3)?

**Hook:** Is the Koide formula a cosmic coincidence?

**Why hard:** Could be accident; no accepted dynamical origin.

**Weak win:** coincidence bounds

**Strong win:** derived from flavor theory OR buried as accident

**Publish shape:** statistical accident analysis + model search

**Open-math parallel:** Numeric checks then prove/disprove structure

**10-day criterion:** Exhaustive model search + statistical accident analysis: coincidence vs dynamics, with falsifiable next checks.

**Harness:** `symbolic`, `stats`, `flavor-model-search`

**AI notes:** Pattern discovery + model search; may be coincidence.

**Tags:** `flavor`, `numerology`, `leptons`

**Sources:** wikipedia

---

## Magnetic monopoles
<a id="monopoles"></a>

**ID:** `monopoles` · **Status:** open · **Kind:** experimental · **AI:** 🔴 none · **10d:** `not-agentic`

**Culture:** `discovery` · **Refutability:** `gated` · **Rung:** 4 · **publish_now:** `theory-only`

Did magnetic monopoles exist in the early universe? Do any remain? Do they explain charge quantization?

**Hook:** Magnetic monopoles

**Why hard:** Extremely rare if any; searches null so far.

**Weak win:** theory priors, public exclusions, design papers

**Strong win:** detection or PDG property

**Publish shape:** discovery / precision property / decisive null

**Open-math parallel:** Cannot Lean-prove a particle into existence

**Tags:** `monopoles`, `topology`, `early-universe`

**Sources:** wikipedia

---

## Muon anomalous magnetic moment
<a id="muon-g2"></a>

**ID:** `muon-g2` · **Status:** controversially open · **Kind:** experimental · **AI:** 🟡 medium · **10d:** `multi-sprint`

**Culture:** `polymath-data` · **Refutability:** `hard` · **Rung:** 3 · **publish_now:** `program-papers`

Why does the experimental muon g−2 differ from some Standard Model predictions?

**Hook:** Muon g−2: agents recompute the tension.

**Why hard:** Tension may be theory systematics or new physics—needs both better SM theory and data.

**Weak win:** open pipeline reproducing residuals

**Strong win:** anomaly closed or forced new physics accepted

**Publish shape:** reanalysis / error budget paper

**Open-math parallel:** Polymath-style collaborative checking — applied to data artifacts

**10-day criterion:** Independent combination of lattice/dispersive HVP inputs with open pipeline (not final SM close).

**Harness:** `lattice-results-ingest`, `stats`

**AI notes:** Hadronic vacuum polarization theory (lattice/dispersive) is AI-accelerable; experiment continues.

**Tags:** `muon`, `precision`, `bsm`, `anomaly`

**Sources:** wikipedia

---

## Neutrino masses and nature
<a id="neutrino-mass"></a>

**ID:** `neutrino-mass` · **Status:** open · **Kind:** experimental · **AI:** 🟠 low · **10d:** `not-agentic`

**Culture:** `discovery` · **Refutability:** `gated` · **Rung:** 4 · **publish_now:** `theory-only`

Absolute neutrino mass scale? Dirac or Majorana? Normal or inverted hierarchy? CP phase? Sterile neutrinos?

**Hook:** Neutrino masses and nature

**Why hard:** Requires β-decay, 0νββ, oscillation, and cosmology experiments.

**Weak win:** theory priors, public exclusions, design papers

**Strong win:** detection or PDG property

**Publish shape:** discovery / precision property / decisive null

**Open-math parallel:** Cannot Lean-prove a particle into existence

**Tags:** `neutrinos`, `majorana`, `oscillations`

**Sources:** wikipedia, baez, snowmass

**Related:** `baryogenesis`, `reactor-anomaly`

---

## Neutron lifetime puzzle
<a id="neutron-lifetime"></a>

**ID:** `neutron-lifetime` · **Status:** open · **Kind:** experimental · **AI:** 🟢 high · **10d:** `stretch`

**Culture:** `polymath-data` · **Refutability:** `hard` · **Rung:** 3 · **publish_now:** `partial`

Why do bottle and beam measurements of the free neutron lifetime disagree?

**Hook:** How long does a neutron live? Agents referee the fight.

**Why hard:** Subtle experimental systematics vs possible new physics.

**Weak win:** open pipeline reproducing residuals

**Strong win:** anomaly closed or forced new physics accepted

**Publish shape:** reanalysis / error budget paper

**Open-math parallel:** Polymath-style collaborative checking — applied to data artifacts

**10-day criterion:** Unified error budget for bottle vs beam; identify single most likely systematics class OR new-physics window size.

**Harness:** `nuclear`, `stats`, `literature`, `sim`

**AI notes:** Classic systematics + nuclear theory reconciliation problem.

**Tags:** `neutron`, `anomaly`, `nuclear`

**Sources:** wikipedia

---

## Proton decay
<a id="proton-decay"></a>

**ID:** `proton-decay` · **Status:** open · **Kind:** experimental · **AI:** 🔴 none · **10d:** `not-agentic`

**Culture:** `discovery` · **Refutability:** `gated` · **Rung:** 4 · **publish_now:** `theory-only`

Is the proton stable? If not, what is its lifetime and decay modes (GUT predictions)?

**Hook:** Watch paint dry for 10^34 years.

**Why hard:** Lifetimes >10^34 yr; needs megaton-scale detectors over decades.

**Weak win:** theory priors, public exclusions, design papers

**Strong win:** detection or PDG property

**Publish shape:** discovery / precision property / decisive null

**Open-math parallel:** Cannot Lean-prove a particle into existence

**10-day criterion:** N/A

**Tags:** `gut`, `proton-decay`, `baryon-number`

**Sources:** wikipedia, strings2000, baez

---

## Proton spin crisis
<a id="proton-spin"></a>

**ID:** `proton-spin` · **Status:** open · **Kind:** theoretical · **AI:** 🟢 high · **10d:** `multi-sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 3 · **publish_now:** `program-papers`

How do quarks and gluons fully account for the proton's spin?

**Hook:** Where does the proton's spin live?

**Why hard:** Nonperturbative QCD structure of nucleons.

**Weak win:** open fits and comparisons

**Strong win:** predictive first-principles nuclear/QCD package

**Publish shape:** lattice/EFT/heavy-ion global analysis

**Open-math parallel:** Computational math + experiment

**10-day criterion:** Updated global spin decomposition from public SIDIS/RHIC summaries.

**Harness:** `QCD-fit`, `literature`

**AI notes:** Global QCD analyses + lattice; data-driven.

**Tags:** `qcd`, `spin`, `nucleon-structure`

**Sources:** wikipedia

---

## Reactor antineutrino anomaly
<a id="reactor-anomaly"></a>

**ID:** `reactor-anomaly` · **Status:** controversially open · **Kind:** experimental · **AI:** 🟢 high · **10d:** `sprint`

**Culture:** `polymath-data` · **Refutability:** `hard` · **Rung:** 3 · **publish_now:** `yes-scoped`

Why is measured reactor antineutrino flux ~6% below some predictions?

**Hook:** Missing antineutrinos — bug in nuclear data or new physics?

**Why hard:** Nuclear data uncertainties vs sterile neutrinos.

**Weak win:** open pipeline reproducing residuals

**Strong win:** anomaly closed or forced new physics accepted

**Publish shape:** reanalysis / error budget paper

**Open-math parallel:** Polymath-style collaborative checking — applied to data artifacts

**10-day criterion:** Updated flux model + nuclear data reconciliation: sterile ν still needed or not, with uncertainty budget.

**Harness:** `nuclear-data`, `stats`, `literature`

**AI notes:** Nuclear data + flux models; sterile neutrino hypothesis testable.

**Tags:** `neutrinos`, `reactor`, `sterile`

**Sources:** wikipedia

---

## Strong CP problem
<a id="strong-cp"></a>

**ID:** `strong-cp` · **Status:** open · **Kind:** theoretical · **AI:** 🟡 medium · **10d:** `multi-sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 3 · **publish_now:** `program-papers`

Why is the QCD θ angle so tiny? Is Peccei–Quinn / axion the solution?

**Hook:** Strong CP problem

**Why hard:** Fine-tuning without new symmetry; axion searches ongoing.

**Weak win:** map solutions; design

**Strong win:** axion or alternative confirmed

**Publish shape:** axion search theory + experiment

**Open-math parallel:** Conjecture (Peccei-Quinn) with experimental witness

**AI notes:** Theory space mappable by AI; existence of axions is experimental.

**Tags:** `qcd`, `cp`, `axion`, `dark-matter`

**Sources:** wikipedia, baez

**Related:** `dark-matter`

---

## Supersymmetry realization
<a id="susy"></a>

**ID:** `susy` · **Status:** open · **Kind:** experimental · **AI:** 🟠 low · **10d:** `not-agentic`

**Culture:** `discovery` · **Refutability:** `gated` · **Rung:** 4 · **publish_now:** `theory-only`

Is spacetime supersymmetry realized near the TeV scale? How is it broken? Is the LSP dark matter?

**Hook:** Supersymmetry realization

**Why hard:** No LHC discovery of superpartners so far; parameter space vast.

**Weak win:** theory priors, public exclusions, design papers

**Strong win:** detection or PDG property

**Publish shape:** discovery / precision property / decisive null

**Open-math parallel:** Cannot Lean-prove a particle into existence

**Tags:** `susy`, `bsm`, `dark-matter`

**Sources:** wikipedia, strings2000

---

## Three generations of matter
<a id="generations"></a>

**ID:** `generations` · **Status:** open · **Kind:** theoretical · **AI:** 🟠 low · **10d:** `not-agentic`

**Culture:** `discovery` · **Refutability:** `gated` · **Rung:** 4 · **publish_now:** `theory-only`

Why three generations of quarks and leptons? Can Yukawa couplings be derived from first principles?

**Hook:** Three generations of matter

**Why hard:** Flavor structure appears arbitrary; many models, few decisive tests.

**Weak win:** theory priors, public exclusions, design papers

**Strong win:** detection or PDG property

**Publish shape:** discovery / precision property / decisive null

**Open-math parallel:** Cannot Lean-prove a particle into existence

**Tags:** `flavor`, `yukawa`, `generations`

**Sources:** wikipedia, baez

---

## μ problem in SUSY
<a id="mu-problem"></a>

**ID:** `mu-problem` · **Status:** open · **Kind:** theoretical · **AI:** 🟡 medium · **10d:** `multi-sprint`

**Culture:** `discovery` · **Refutability:** `gated` · **Rung:** 4 · **publish_now:** `theory-only`

Why is the supersymmetric μ parameter of the electroweak scale rather than Planck scale?

**Hook:** μ problem in SUSY

**Why hard:** Model-building within SUSY frameworks; depends on SUSY existing.

**Weak win:** theory priors, public exclusions, design papers

**Strong win:** detection or PDG property

**Publish shape:** discovery / precision property / decisive null

**Open-math parallel:** Cannot Lean-prove a particle into existence

**Tags:** `susy`, `naturalness`

**Sources:** wikipedia

---
