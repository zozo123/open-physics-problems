# Astronomy & Astrophysics

**17 open problems** in this domain.

| ID | Problem | Culture | Refut. | 10d | Rung | Impact |
|----|---------|---------|--------|-----|-----:|--------|
| [`galaxy-rotation`](#galaxy-rotation) | Galaxy rotation problem | discovery | gated | not-agentic | 3 | 5/5 |
| [`supernova-mechanism`](#supernova-mechanism) | Core-collapse supernova mechanism | program | soft | multi-sprint | 2 | 4/5 |
| [`smbh-seeds`](#smbh-seeds) | Supermassive black hole origins | program | soft | multi-sprint | 3 | 4/5 |
| [`astrophysical-jets`](#astrophysical-jets) | Astrophysical jets and QPOs | program | soft | multi-sprint | 2 | 3/5 |
| [`frb`](#frb) | Fast radio bursts | polymath-data | hard | stretch | 4 | 3/5 |
| [`cosmic-b-fields`](#cosmic-b-fields) | Origin of cosmic magnetic fields | program | soft | multi-sprint | 2 | 3/5 |
| [`coronal-heating`](#coronal-heating) | Solar coronal heating problem | program | soft | multi-sprint | 2 | 3/5 |
| [`solar-cycle`](#solar-cycle) | Solar cycle and dynamos | program | soft | multi-sprint | 2 | 3/5 |
| [`uhecr`](#uhecr) | Ultra-high-energy cosmic rays | program | soft | multi-sprint | 3 | 3/5 |
| [`dibs`](#dibs) | Diffuse interstellar bands | polymath-data | hard | sprint | 4 | 2/5 |
| [`age-metallicity`](#age-metallicity) | Galactic age–metallicity relation | program | soft | sprint | 3 | 2/5 |
| [`kuiper-cliff`](#kuiper-cliff) | Kuiper cliff | program | soft | stretch | 3 | 2/5 |
| [`magnetar-fields`](#magnetar-fields) | Magnetar magnetic field origin | program | soft | multi-sprint | 2 | 2/5 |
| [`p-nuclei`](#p-nuclei) | Origin of p-nuclei | polymath-data | hard | stretch | 4 | 2/5 |
| [`ulx`](#ulx) | Ultraluminous X-ray sources | polymath-data | hard | multi-sprint | 4 | 2/5 |
| [`flyby-anomaly`](#flyby-anomaly) | Flyby anomaly | polymath-data | hard | sprint | 3 | 1/5 |
| [`saturn-rotation`](#saturn-rotation) | Saturn deep rotation rate | program | soft | multi-sprint | 3 | 1/5 |

## Astrophysical jets and QPOs
<a id="astrophysical-jets"></a>

**ID:** `astrophysical-jets` · **Status:** open · **Kind:** theoretical · **AI:** 🟢 high · **10d:** `multi-sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 2 · **publish_now:** `program-papers`

Why do some accretion disks launch relativistic jets? What sets QPO frequencies and overtones?

**Hook:** Astrophysical jets and QPOs

**Weak win:** framework cage-match on fixed benchmarks

**Strong win:** textbook convergence on one mechanism

**Publish shape:** mechanism paper with decisive observable discrimination

**Open-math parallel:** Like settling a program over many papers (geometrization-era style)

**AI notes:** GRMHD + ML pattern discovery in timing data.

**Tags:** `jets`, `accretion`, `black-holes`

**Sources:** wikipedia

---

## Core-collapse supernova mechanism
<a id="supernova-mechanism"></a>

**ID:** `supernova-mechanism` · **Status:** open · **Kind:** theoretical · **AI:** 🟢 high · **10d:** `multi-sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 2 · **publish_now:** `program-papers`

What exact mechanism turns stellar core collapse into a successful explosion?

**Hook:** Core-collapse supernova mechanism

**Weak win:** framework cage-match on fixed benchmarks

**Strong win:** textbook convergence on one mechanism

**Publish shape:** mechanism paper with decisive observable discrimination

**Open-math parallel:** Like settling a program over many papers (geometrization-era style)

**AI notes:** Multi-physics simulation + AI surrogates; converging but not closed.

**Tags:** `supernovae`, `neutrinos`, `simulation`

**Sources:** wikipedia

---

## Diffuse interstellar bands
<a id="dibs"></a>

**ID:** `dibs` · **Status:** open · **Kind:** experimental · **AI:** 🟢 high · **10d:** `sprint`

**Culture:** `polymath-data` · **Refutability:** `hard` · **Rung:** 4 · **publish_now:** `yes-scoped`

What molecules or materials cause the numerous unidentified interstellar absorption bands?

**Hook:** Space forensics: which molecule ate the starlight?

**Weak win:** ranked shortlist with reproducible scores

**Strong win:** unique ID confirmed by lab/observation

**Publish shape:** identification / classification with scores

**Open-math parallel:** OEIS / classification culture: name the object

**10-day criterion:** Ranked candidates for ≥5 strong DIB features against molecular DBs with reproducible spectra match scores; shortlist ready for lab test.

**Harness:** `spectral-match`, `cheminformatics`, `literature`, `code-exec`

**AI notes:** Classic spectral matching + molecular database search—excellent AI target.

**Tags:** `ism`, `spectroscopy`, `astrochemistry`

**Sources:** wikipedia

---

## Fast radio bursts
<a id="frb"></a>

**ID:** `frb` · **Status:** open · **Kind:** experimental · **AI:** 🟡 medium · **10d:** `stretch`

**Culture:** `polymath-data` · **Refutability:** `hard` · **Rung:** 4 · **publish_now:** `partial`

What causes millisecond radio bursts from distant galaxies? Why do some repeat?

**Hook:** Cosmic radio flashes — rank the engines.

**Weak win:** ranked shortlist with reproducible scores

**Strong win:** unique ID confirmed by lab/observation

**Publish shape:** identification / classification with scores

**Open-math parallel:** OEIS / classification culture: name the object

**10-day criterion:** Bayesian model ranking on public FRB catalogs; top 3 engines with exclusion of weak classes.

**Harness:** `astro-catalogs`, `bayes`, `literature`

**AI notes:** Model ranking against multiwavelength catalogs; confirmation observational.

**Tags:** `frb`, `transients`, `radio`

**Sources:** wikipedia

---

## Flyby anomaly
<a id="flyby-anomaly"></a>

**ID:** `flyby-anomaly` · **Status:** controversially open · **Kind:** experimental · **AI:** 🟢 high · **10d:** `sprint`

**Culture:** `polymath-data` · **Refutability:** `hard` · **Rung:** 3 · **publish_now:** `yes-scoped`

Why do some Earth flybys show tiny unexpected energy changes?

**Hook:** Can agents kill a spacecraft anomaly in a week?

**Weak win:** open pipeline reproducing residuals

**Strong win:** anomaly closed or forced new physics accepted

**Publish shape:** reanalysis / error budget paper

**Open-math parallel:** Polymath-style collaborative checking — applied to data artifacts

**10-day criterion:** Publish a decisive reanalysis of public tracking data concluding systematics vs residual anomaly, with reproducible code.

**Harness:** `trajectory-sim`, `literature`, `stats`, `code-exec`

**AI notes:** Likely systematics; trajectory reanalysis.

**Tags:** `anomaly`, `spacecraft`, `gravity`

**Sources:** wikipedia

---

## Galactic age–metallicity relation
<a id="age-metallicity"></a>

**ID:** `age-metallicity` · **Status:** open · **Kind:** experimental · **AI:** 🟢 high · **10d:** `sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 3 · **publish_now:** `yes-scoped`

Is there a universal age–metallicity relation in thin/thick Galactic disks?

**Hook:** Read the Milky Way's chemical diary in 10 days.

**Weak win:** open sims/reanalysis

**Strong win:** standard textbook scenario

**Publish shape:** observation + simulation

**Open-math parallel:** Multi-paper research program

**10-day criterion:** Reanalysis of public stellar survey catalogs with open code answering thin/thick disk AMR question under stated priors.

**Harness:** `astro-catalogs`, `stats`, `code-exec`

**AI notes:** Survey data + chemical evolution models.

**Tags:** `milky-way`, `chemical-evolution`

**Sources:** wikipedia

---

## Galaxy rotation problem
<a id="galaxy-rotation"></a>

**ID:** `galaxy-rotation` · **Status:** open · **Kind:** theoretical · **AI:** 🟠 low · **10d:** `not-agentic`

**Culture:** `discovery` · **Refutability:** `gated` · **Rung:** 3 · **publish_now:** `theory-only`

Are flat rotation curves due to dark matter, modified gravity, or both?

**Hook:** Galaxy rotation problem

**Why hard:** Entangled with DM identity; multi-probe tests needed.

**Weak win:** public rotation+lensing tests

**Strong win:** unique explanation

**Publish shape:** DM vs modified gravity discrimination

**Open-math parallel:** Experiment provides witness

**Tags:** `dark-matter`, `mond`, `galaxies`

**Sources:** wikipedia

**Related:** `dark-matter`

---

## Kuiper cliff
<a id="kuiper-cliff"></a>

**ID:** `kuiper-cliff` · **Status:** open · **Kind:** theoretical · **AI:** 🟢 high · **10d:** `stretch`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 3 · **publish_now:** `partial`

Why does Kuiper belt object density drop sharply beyond ~50 AU?

**Hook:** Why the Solar System falls off a cliff at 50 AU.

**Weak win:** open sims/reanalysis

**Strong win:** standard textbook scenario

**Publish shape:** observation + simulation

**Open-math parallel:** Multi-paper research program

**10-day criterion:** N-body formation scenario suite explaining cliff under stated assumptions; open code.

**Harness:** `N-body`, `literature`

**AI notes:** N-body Solar System formation simulations.

**Tags:** `solar-system`, `dynamics`

**Sources:** wikipedia

---

## Magnetar magnetic field origin
<a id="magnetar-fields"></a>

**ID:** `magnetar-fields` · **Status:** open · **Kind:** theoretical · **AI:** 🟡 medium · **10d:** `multi-sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 2 · **publish_now:** `program-papers`

What is the origin of magnetars' extreme magnetic fields?

**Hook:** Magnetar magnetic field origin

**Weak win:** framework cage-match on fixed benchmarks

**Strong win:** textbook convergence on one mechanism

**Publish shape:** mechanism paper with decisive observable discrimination

**Open-math parallel:** Like settling a program over many papers (geometrization-era style)

**Tags:** `neutron-stars`, `magnetism`

**Sources:** wikipedia

---

## Origin of cosmic magnetic fields
<a id="cosmic-b-fields"></a>

**ID:** `cosmic-b-fields` · **Status:** open · **Kind:** theoretical · **AI:** 🟡 medium · **10d:** `multi-sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 2 · **publish_now:** `program-papers`

How were large-scale magnetic fields generated from galaxies to clusters?

**Hook:** Origin of cosmic magnetic fields

**Why hard:** Primordial seed vs dynamo amplification hard to disentangle uniquely.

**Weak win:** framework cage-match on fixed benchmarks

**Strong win:** textbook convergence on one mechanism

**Publish shape:** mechanism paper with decisive observable discrimination

**Open-math parallel:** Like settling a program over many papers (geometrization-era style)

**Tags:** `magnetism`, `cosmology`, `dynamo`

**Sources:** wikipedia

---

## Origin of p-nuclei
<a id="p-nuclei"></a>

**ID:** `p-nuclei` · **Status:** open · **Kind:** theoretical · **AI:** 🟢 high · **10d:** `stretch`

**Culture:** `polymath-data` · **Refutability:** `hard` · **Rung:** 4 · **publish_now:** `partial`

What astrophysical process produces rare proton-rich isotopes (p-nuclei)?

**Hook:** Where do the rarest isotopes come from?

**Weak win:** ranked shortlist with reproducible scores

**Strong win:** unique ID confirmed by lab/observation

**Publish shape:** identification / classification with scores

**Open-math parallel:** OEIS / classification culture: name the object

**10-day criterion:** Reaction-network run identifying dominant production sites under current rates.

**Harness:** `nuclear-networks`, `literature`

**AI notes:** Reaction networks + stellar models.

**Tags:** `nucleosynthesis`, `nuclear-astrophysics`

**Sources:** wikipedia

---

## Saturn deep rotation rate
<a id="saturn-rotation"></a>

**ID:** `saturn-rotation` · **Status:** open · **Kind:** experimental · **AI:** 🟡 medium · **10d:** `multi-sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 3 · **publish_now:** `program-papers`

What is the true rotation rate of Saturn's deep interior given magnetospheric period puzzles?

**Hook:** Saturn deep rotation rate

**Weak win:** open sims/reanalysis

**Strong win:** standard textbook scenario

**Publish shape:** observation + simulation

**Open-math parallel:** Multi-paper research program

**Notes:** Some related spin discrepancies resolved via gravity field; residual questions remain.

**Tags:** `planets`, `saturn`

**Sources:** wikipedia

---

## Solar coronal heating problem
<a id="coronal-heating"></a>

**ID:** `coronal-heating` · **Status:** open · **Kind:** theoretical · **AI:** 🟢 high · **10d:** `multi-sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 2 · **publish_now:** `program-papers`

Why is the Sun's corona much hotter than its surface? Why is magnetic reconnection so fast?

**Hook:** Why is the solar corona so hot?

**Why hard:** Multi-scale plasma physics from photosphere to corona.

**Weak win:** framework cage-match on fixed benchmarks

**Strong win:** textbook convergence on one mechanism

**Publish shape:** mechanism paper with decisive observable discrimination

**Open-math parallel:** Like settling a program over many papers (geometrization-era style)

**10-day criterion:** Wave vs reconnection energy budget on public solar data for one active region class.

**Harness:** `solar-data`, `MHD-lite`

**AI notes:** Solar data + MHD/kinetic models; AI-assisted reconnection theory.

**Tags:** `sun`, `plasma`, `reconnection`

**Sources:** wikipedia

---

## Solar cycle and dynamos
<a id="solar-cycle"></a>

**ID:** `solar-cycle` · **Status:** open · **Kind:** theoretical · **AI:** 🟢 high · **10d:** `multi-sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 2 · **publish_now:** `program-papers`

How does the Sun generate its reversing large-scale magnetic field? What causes grand minima like Maunder?

**Hook:** Solar cycle and dynamos

**Weak win:** framework cage-match on fixed benchmarks

**Strong win:** textbook convergence on one mechanism

**Publish shape:** mechanism paper with decisive observable discrimination

**Open-math parallel:** Like settling a program over many papers (geometrization-era style)

**AI notes:** Nonlinear dynamo theory + long solar records.

**Tags:** `dynamo`, `sun`, `magnetism`

**Sources:** wikipedia

---

## Supermassive black hole origins
<a id="smbh-seeds"></a>

**ID:** `smbh-seeds` · **Status:** open · **Kind:** theoretical · **AI:** 🟡 medium · **10d:** `multi-sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 3 · **publish_now:** `program-papers`

How did early quasars grow SMBHs to ~10^10 M☉ so quickly? Origin of M–σ relation?

**Hook:** Supermassive black hole origins

**Why hard:** Needs early-universe growth channels constrained by deep surveys.

**Weak win:** open sims/reanalysis

**Strong win:** standard textbook scenario

**Publish shape:** observation + simulation

**Open-math parallel:** Multi-paper research program

**Tags:** `black-holes`, `galaxies`, `jwst`

**Sources:** wikipedia

---

## Ultra-high-energy cosmic rays
<a id="uhecr"></a>

**ID:** `uhecr` · **Status:** open · **Kind:** experimental · **AI:** 🟡 medium · **10d:** `multi-sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 3 · **publish_now:** `program-papers`

What sources accelerate particles above the GZK limit region, and how?

**Hook:** Ultra-high-energy cosmic rays

**Why hard:** Rare events; composition and source ID incomplete.

**Weak win:** open sims/reanalysis

**Strong win:** standard textbook scenario

**Publish shape:** observation + simulation

**Open-math parallel:** Multi-paper research program

**Tags:** `cosmic-rays`, `astroparticle`

**Sources:** wikipedia, baez

---

## Ultraluminous X-ray sources
<a id="ulx"></a>

**ID:** `ulx` · **Status:** open · **Kind:** experimental · **AI:** 🟡 medium · **10d:** `multi-sprint`

**Culture:** `polymath-data` · **Refutability:** `hard` · **Rung:** 4 · **publish_now:** `program-papers`

What powers ULXs exceeding Eddington limits—IMBHs, beamed neutron stars, or both?

**Hook:** Ultraluminous X-ray sources

**Weak win:** ranked shortlist with reproducible scores

**Strong win:** unique ID confirmed by lab/observation

**Publish shape:** identification / classification with scores

**Open-math parallel:** OEIS / classification culture: name the object

**Tags:** `x-ray`, `compact-objects`

**Sources:** wikipedia

---
