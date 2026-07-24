# TAXONOMY — How Communities Categorize Open Problems in Physics

This document maps **classification schemes** used by different communities when they list open problems, and contrasts them with approaches used for **visualizing science landscapes**.

Companion file: [`SOURCES.md`](./SOURCES.md).

---

## 1. Axes of categorization (meta-taxonomy)

Almost every list implicitly answers:

| Axis | Typical values | Who emphasizes it |
|------|----------------|-------------------|
| **Epistemic type** | Theoretical gap · Experimental anomaly · Mathematical rigor gap · Interpretational · Technological | Math-phys vs experiment |
| **Scale / regime** | Planck · particle · nuclear · atomic · meso · continuum · cosmic | Condensed matter, cosmology |
| **Interaction sector** | Gravity · electroweak · strong · emergent / many-body | Particle theory |
| **Solvability style** | Theorem to prove · Measurement to make · Mechanism to identify · Facility to build | Clay vs Snowmass vs DOE |
| **Horizon** | Decade roadmap · Century prize · Eternal foundations | Funding agencies vs Hilbert-style |
| **Breadth** | Single subfield checklist · Cross-physics “minimum” · Theory of everything | Ginzburg vs Strings 2000 |
| **Audience** | Researchers · Students (“physical minimum”) · Funders · Public | Ginzburg educational vs P5 |

---

## 2. Community-specific taxonomies

### 2.1 Historical / foundational (Kelvin, Hilbert)

| Scheme | Structure | What counts as a “problem” |
|--------|-----------|----------------------------|
| **Kelvin clouds** | Tiny (2), crisis-of-foundations | Inconsistency between mature theory and key facts |
| **Hilbert 6th** | One program with expandable subgoals | *Axiomatize* ready branches of physics |

**Lesson:** Early lists treat problems as **clouds over an otherwise complete sky** or as **programs of rigor**, not as facility menus.

---

### 2.2 Mathematical general relativity (Penrose, Bartnik, Coley GR sections)

Common categories:

1. **Global evolution / Cauchy problem** — existence, uniqueness, stability of solutions of Einstein equations  
2. **Singularities & censorship** — weak/strong cosmic censorship, chronology protection  
3. **Black holes** — uniqueness, stability of Kerr, final-state conjecture, no-hair  
4. **Mass & energy** — positive mass, Penrose inequality, **quasi-local mass** (Bartnik #1)  
5. **Initial data / constraints** — construction, gluing, horizons  
6. **Asymptotics** — null infinity, peeling, memory  
7. (Later) **Higher-D, AdS stability, cosmological singularities**

**Epistemic type:** overwhelmingly *prove a theorem about PDE/geometry*. Physics significance is argued, but success criterion is mathematical.

**Graph note:** Penrose (few deep conjectures) → Bartnik (many concrete technical problems) is a classic **refinement** edge.

---

### 2.3 Operator / spectral mathematical physics (Simon, Aizenman/IAMP)

Typical bins:

| Bin | Examples |
|-----|----------|
| **Spectral types** | Absolutely continuous vs pure point vs singular continuous |
| **Disordered systems** | Anderson localization / extended states, mobility edges |
| **Many-body Coulomb** | Atomic stability, ionization thresholds, binding |
| **Periodic / quasiperiodic** | Cantor spectrum (Ten Martini), Bloch waves |
| **Stat-mech / phase transitions** | Long-range order, soft phases, spin glasses |
| **Non-equilibrium** | Entropy production, approach to equilibrium |
| **Fluids** | Navier–Stokes regularity (shared with Clay/Smale) |

**Success criterion:** theorem (often with sharp constants or almost-sure statements).

IAMP site taxonomy (explicit): QFT · Stat phys · Quantum many-body · Geometry & physics · Schrödinger · Disordered · Non-eq · Relativity · Dynamics · Fluids.

---

### 2.4 Broad physicist “minimum” (Ginzburg)

Ginzburg’s list is **domain-ordered**, roughly:

```text
Applied / CMP / materials  (1–13)
   fusion, SC, exotic matter, 2DEG, mesoscopics, BEC, surfaces,
   liquid crystals, fullerenes, superstrong B, turbulence, lasers, superheavies
Particle / nuclear / QFT   (14–20)
   QCD/QGP, electroweak, SM/GUT/SUSY, fundamental length, CP, vacuum, strings
Gravity / cosmology / astro (21–30)
   GR tests, GW, Λ/inflation, compact objects, BHs, galaxies, DM, UHECR, GRB, neutrinos
+ 3 GREAT problems (foundations): arrow of time · QM interpretation · origin of life
```

**Distinctive move:** separates **working-physicist agenda items** from **three philosophical-great problems**. Educational intent (“physical minimum”) shapes inclusion of hot experimental topics (fullerenes, HTSC) alongside eternal ones.

---

### 2.5 High-energy theory top-ten (Strings 2000)

Not a field taxonomy — a **priority shortlist** selected for:

- importance  
- well-posedness / clarity of statement  

Implicit clusters inside the 10:

| Cluster | Items |
|---------|-------|
| **Naturalness / parameters** | #1 dimensionless params, #6 Λ, #9 hierarchy |
| **Unification / UV completion** | #2 QG origin, #4 SUSY, #7 M-theory, #5 dimensions |
| **IR / strong coupling** | #10 confinement/mass gap |
| **Stability of matter / cosmology interface** | #3 proton lifetime |
| **Information / QG** | #8 BH information |

**Contrast with Ginzburg:** almost no condensed matter, no fusion, no solar physics — pure “fundamental parameters of Nature” frame.

---

### 2.6 Particle data & HEP planning (PDG, Snowmass)

#### PDG style
- **By particle / process / conservation law** (listings + reviews)
- Open issues appear as: unexplained excesses, parameter unknowns (θ₁₃ historically, δ_CP, mass ordering), search limits (DM, monopoles, rare decays)

#### Snowmass 2021 Frontiers (functional + scientific)

```text
Science frontiers          Enabling frontiers
─────────────────          ──────────────────
Energy                     Accelerator
Neutrino                   Instrumentation
Rare processes & precision Computation
Cosmic                     Underground facilities
Theory                     Community engagement
```

**Key difference from prize lists:** taxonomy is designed to map onto **people, facilities, and budgets**. A “problem” is often a *science driver* for a machine (Higgs factory, DUNE, CMB-S4, …).

---

### 2.7 Condensed matter / energy science (DOE BES)

Five grand challenges are **capability-oriented**, not particle-species-oriented:

1. Control at **electron** level  
2. **Synthesis** of tailored matter  
3. **Emergence** from correlations  
4. **Nanoscale** energy & information  
5. **Far-from-equilibrium** matter  

This is close to a **materials-by-design** ontology: problems are phrased as *how do we control X* rather than *what is the value of Y*.

CMP folklore lists add classic named mysteries:

- High-Tc mechanism  
- Glass transition / amorphous solids  
- Fractional quantum Hall hierarchy (e.g. 5/2)  
- Quantum spin liquids / topological order at T>0  
- Turbulence (shared with fluids/math)  
- Room-temperature ambient SC  

---

### 2.8 Astronomy (Wikipedia astronomy list + community)

Typical hierarchy:

```text
Planetary astronomy
Stellar / solar physics
Galactic astrophysics
Compact objects & black holes
Cosmology
Extraterrestrial life / SETI
```

**Epistemic mix:** observational puzzles (FRBs, coronal heating), theoretical (inflation microphysics), and existence questions (Planet Nine, life). Overlaps physics lists on DM, DE, GW, UHECR, BH information.

---

### 2.9 Clay / Smale / DARPA (math prizes with physics content)

| List | Physics-facing problems | Category style |
|------|-------------------------|----------------|
| Clay | Yang–Mills mass gap; Navier–Stokes | Single sharp conjecture + $1M |
| Smale | #15 Navier–Stokes | Same NS question in math century list |
| DARPA 23 | Fluids/soft matter; quantum computing math; QFT↔biology; Langlands↔QFT | Strategic capability challenges |

**Style:** success = **proof** (or mathematical framework), not discovery of a particle.

---

## 3. Cross-cutting problem families (union taxonomy)

A practical **union ontology** for mapping any source into a shared graph:

### A. Foundations & interpretation
- Arrow of time / irreversibility  
- Quantum measurement / interpretations  
- Problem of time (QG)  
- Axiomatization of QFT / GR (Hilbert 6th lineage)

### B. Quantum gravity & spacetime
- UV completion / TOE  
- BH information, firewalls, islands  
- Cosmic censorship, singularities  
- Emergent spacetime / holography  
- Extra dimensions; why 3+1

### C. Cosmology
- Cosmological constant / dark energy  
- Inflation (mechanism, multiverse)  
- Dark matter identity  
- Baryon asymmetry  
- Hubble tension / cosmological principle tests  
- Topology / shape of universe

### D. Particle physics (beyond & within SM)
- Hierarchy / naturalness  
- Strong CP / axions  
- Neutrino masses & CP  
- Flavor / generations / Yukawas  
- Proton decay / GUT  
- Confinement & mass gap (QCD)  
- Magnetic monopoles  

### E. Nuclear & hadronic
- Nuclear force from QCD  
- Neutron stars / dense matter EOS  
- QGP phase structure  
- Superheavy elements  

### F. Condensed matter & emergence
- High-Tc / room-T SC  
- Topological phases & order  
- Glass transition  
- Fractional QHE states  
- Quantum many-body chaos / thermalization  

### G. Fluids, non-equilibrium, complexity
- Navier–Stokes regularity  
- Turbulence statistics  
- Far-from-equilibrium principles  

### H. Astrophysics phenomena
- Coronal heating / solar dynamo  
- FRBs, UHECRs, GRBs  
- SMBH formation & M–σ  
- Galaxy formation details  

### I. Life & mind (boundary)
- Abiogenesis from physics (Ginzburg great #3)  
- Consciousness (sometimes in “42 questions” lists)  

### J. Mathematical structure problems
- Clay YM, Clay NS, Simon spectral problems, Bartnik quasi-local mass, …

---

## 4. How different communities would place the *same* problem

Example: **QCD confinement / mass gap**

| Community | Label / home bin | Success looks like |
|-----------|------------------|--------------------|
| Strings 2000 | Problem #10 | Quantitative understanding |
| Clay Math | Millennium problem | Existence proof of QYM + gap |
| Ginzburg | Item 14 (mass spectrum / QCD / QGP) | Physical understanding + phenomenology |
| Lattice HEP | Computational milestone | Continuum-limit spectrum |
| Snowmass Theory | Theory Frontier white paper | Roadmap of methods |
| Wikipedia | Particle physics / Yang–Mills | Encyclopedia entry |

Example: **Dark matter**

| Community | Home bin |
|-----------|----------|
| Ginzburg | #27 |
| Strings 2000 | Implicit in #1, #4, #9 (not named “DM”) |
| Snowmass | Cosmic Frontier (+ Energy/Rare for production) |
| Astronomy wiki | Cosmology + galactic rotation |
| DOE | Often under HEP/cosmic, not BES five GCs |

---

## 5. Status vocabularies (normalize carefully)

Different lists mean different things by “solved”:

| Vocabulary | Typical community | Meaning |
|------------|-------------------|---------|
| **Theorem proved** | Math-phys, Clay, Simon | Peer-reviewed proof accepted |
| **Mechanism established** | CMP, HEP theory | Consensus dynamical explanation |
| **Discovered / measured** | Experiment, astronomy | Observation or parameter value |
| **Technologically achieved** | Fusion, RTSC applications | Working device / process |
| **Anomaly gone** | Precision HEP | Tension reduced below interest |
| **Program complete** | Hilbert 6th | Essentially never |

When building a graph DB, store **status_type** separately from **status_value**.

---

## 6. Visual & mapping approaches for science problem landscapes

### 6.1 Approaches people actually use

| Approach | What it maps | Tools / examples | Fit for open-problem graphs |
|----------|--------------|------------------|-----------------------------|
| **Citation / similarity graphs** | Papers, not problems | [Connected Papers](https://www.connectedpapers.com/), Litmaps, ResearchRabbit, Inciteful | Good for *literature around* a problem; indirect for problem ontology |
| **Co-citation / bibliographic coupling** | Intellectual neighborhoods | Same tools; Semantic Scholar / OpenAlex backends | Clusters “who works on X” |
| **Topic models / embeddings** | Soft clusters of abstracts | BERTopic, SPECTER embeddings, OpenAlex concepts | Auto-bin problems from text |
| **Hierarchical taxonomies** | Field → subfield → problem | arXiv categories, PACS (legacy), PhySH | Backbone for navigation |
| **Roadmap / frontier diagrams** | Facilities ↔ science drivers | Snowmass frontier charts, particle physics “living reviews” | Excellent for experimental agendas |
| **Prize / checklist boards** | Finite named problems + status | Clay problem pages; Millennium physics top-10 updates | High clarity, low coverage |
| **Knowledge graphs (entities & relations)** | Problems, people, methods, claims | Wikidata, custom Neo4j/RDF for labs | Best long-term for *this* project |
| **Timeline / alluvial of status** | Solved vs open over years | Custom viz (e.g. Ginzburg items colored by era) | Shows progress narrative |
| **Challenge trees / issue trackers** | Dependencies (“need A to attack B”) | GitHub issues, research wikis | Underexplored for physics |
| **Cartographic “maps of science”** | Global discipline layout | UCSD map of science, overlay journals | Too coarse for problem-level |
| **Educational “physical minimum” lists** | What a physicist should know is open | Ginzburg tradition | Human-scale, subjective |

### 6.2 Recommended visual patterns for an *open-problems* knowledge graph

1. **Bipartite graph:** `Problem` —appears_in→ `SourceList`  
2. **Ontology tree:** `Problem` —instance_of→ `Family` (A–J above)  
3. **Status layer:** color nodes by status_type × status_value  
4. **Community lens toggle:** filter edges by `used_by_community` (GR-math / HEP / CMP / Astro / Math-prize)  
5. **Overlap matrix heatmap:** sources × sources sharing ≥k problems  
6. **Sankey:** historical list → modern list (e.g. Kelvin clouds → SR/QM → today’s foundations)  
7. **Facility overlay:** Snowmass-style link `Problem` —motivates→ `Experiment/Facility`  

### 6.3 Anti-patterns

- Treating Wikipedia’s flat bullet lists as **authoritative priority rankings**  
- Collapsing “prove existence of mass gap” with “measure glueball spectrum” into one node without `epistemic_type`  
- Visualizing only citation networks and calling them “maps of open problems” (they map *activity*, not *questions*)

---

## 7. Suggested schema (for a graph DB or YAML corpus)

```yaml
Problem:
  id: string                 # e.g. "ym-mass-gap"
  name: string
  aliases: [string]
  families: [FamilyEnum]     # A–J
  epistemic_type: enum       # theorem | mechanism | measurement | interpretation | technology
  domains: [string]
  status:
    value: enum              # open | partial | solved | obsolete | disputed
    as_of: date
    notes: string
  appears_in:
    - source_id: string
      local_label: string    # "Strings #10", "Ginzburg #14"
      year: int

SourceList:
  id: string
  year: int
  authors_or_org: string
  n_problems: int | null
  domain_scope: string
  url: string
  list_style: enum           # prize | survey | roadmap | educational | encyclopedia
  community: enum            # math-gr | math-op | hep-th | hep-ex | cmp | astro | funding | ...

Relation:
  type: enum                 # OVERLAPS | REFINES | INFLUENCED | FEEDS | SUBSUMES | MOTIVATES
  from: id
  to: id
```

---

## 8. One-page comparison of major taxonomies

| Source | Primary cut | Unit of problem | Time horizon | Audience |
|--------|-------------|-----------------|--------------|----------|
| Kelvin | Crisis vs completeness | Foundational cloud | Immediate | Peers |
| Hilbert 6 | Axiomatization program | Research program | Century | Mathematicians |
| Penrose / Bartnik | GR mathematical themes | Conjecture / PDE problem | Decades | Math GR |
| Simon / IAMP | Operator & stat-mech structure | Precise conjecture | Years–decades | Math phys |
| Ginzburg | Domain blocks + 3 great | Topic every physicist should know | Generation | Students + peers |
| Strings 2000 | Priority fundamental Qs | One-sentence question | Millennium | HEP theory |
| Clay / Smale | Prize-grade math | Single formal statement | Open-ended | Mathematicians |
| Snowmass | Frontiers (science + enabling) | Science driver | 10 years | HEP community + agencies |
| DOE BES | Control / synthesis / emergence | Grand challenge | Multi-decade | Energy/materials science |
| Wikipedia | Topic sections | Bullet phenomenon | Living | Public + students |
| Allen–Lidström 42 | Life, universe, everything | Philosophical-physical Q | Ultimate | Broad science |

---

## 9. Working recommendation for this repo

1. Ingest **sources** from [`SOURCES.md`](./SOURCES.md) as first-class nodes.  
2. Normalize problems into the **union families A–J**.  
3. Keep **per-source local numbering** (Strings #8 ≠ a global rank).  
4. Tag **epistemic_type** so Clay YM and experimental confinement searches stay distinct but linked via `OVERLAPS`.  
5. Visualize first as:  
   - source ↔ problem bipartite graph  
   - family treemap with status colors  
   - community lens filters  

---

*Taxonomies are social objects: they encode what a community thinks is worth counting as a problem. Mapping them is part of mapping physics itself.*
