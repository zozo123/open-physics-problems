# Quantum Computing & Information

**6 open problems** in this domain.

| ID | Problem | Culture | Refut. | 10d | Rung | Impact |
|----|---------|---------|--------|-----|-----:|--------|
| [`ftqc-threshold`](#ftqc-threshold) | Fault-tolerant quantum computing scalability | program | soft | multi-sprint | 3 | 5/5 |
| [`pqc-security`](#pqc-security) | Post-quantum cryptography proofs | open-math-like | formal | stretch | 5 | 5/5 |
| [`bqp-complexity`](#bqp-complexity) | BQP vs BPP / NP relations | open-math-like | formal | multi-sprint | 5 | 4/5 |
| [`room-temp-qc`](#room-temp-qc) | Non-cryogenic quantum computing | program | soft | not-agentic | 3 | 4/5 |
| [`topological-qubits`](#topological-qubits) | Topological qubits / Majorana modes | program | soft | multi-sprint | 3 | 4/5 |
| [`quantum-capacity`](#quantum-capacity) | Quantum channel capacity | open-math-like | formal | stretch | 5 | 3/5 |

## BQP vs BPP / NP relations
<a id="bqp-complexity"></a>

**ID:** `bqp-complexity` · **Status:** open · **Kind:** mathematical · **AI:** 🟢 high · **10d:** `multi-sprint`

**Culture:** `open-math-like` · **Refutability:** `formal` · **Rung:** 5 · **publish_now:** `program-papers`

What is the precise relation of BQP to classical complexity classes? Can physical computation exceed BQP?

**Hook:** What can quantum computers actually reach?

**Weak win:** conditional results, barriers, audit one scheme/channel

**Strong win:** named open result closed

**Publish shape:** proof / reduction / capacity formula / dictionary theorem

**Open-math parallel:** arXiv proof culture — the paper IS the solve

**10-day criterion:** Survey + one new conditional result or barrier formalization.

**Harness:** `complexity`, `formal`

**AI notes:** Complexity theory; formal methods friendly.

**Tags:** `complexity`, `bqp`, `quantum-info`

**Sources:** wikipedia

---

## Fault-tolerant quantum computing scalability
<a id="ftqc-threshold"></a>

**ID:** `ftqc-threshold` · **Status:** open · **Kind:** engineering · **AI:** 🟡 medium · **10d:** `multi-sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 3 · **publish_now:** `program-papers`

Can we go beyond NISQ to fault-tolerant scalable quantum computers with practical error correction?

**Hook:** Simulate your way past NISQ — on paper.

**Why hard:** Requires qubit quality, scale, and systems engineering.

**Weak win:** threshold sims / architecture search

**Strong win:** reproducible device beyond metric

**Publish shape:** demo with metrics

**Open-math parallel:** Constructive existence by exhibition

**10-day criterion:** Simulate threshold for one code family under a noise model.

**Harness:** `qec-sim`

**AI notes:** AI helps codes/control; hardware still rules.

**Tags:** `quantum-computing`, `error-correction`, `nisq`

**Sources:** wikipedia, baez

---

## Non-cryogenic quantum computing
<a id="room-temp-qc"></a>

**ID:** `room-temp-qc` · **Status:** open · **Kind:** engineering · **AI:** 🟠 low · **10d:** `not-agentic`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 3 · **publish_now:** `clarify-only`

Can useful quantum computing operate at non-cryogenic / room temperature?

**Hook:** Non-cryogenic quantum computing

**Weak win:** threshold sims / architecture search

**Strong win:** reproducible device beyond metric

**Publish shape:** demo with metrics

**Open-math parallel:** Constructive existence by exhibition

**Tags:** `quantum-computing`, `materials`

**Sources:** wikipedia

---

## Post-quantum cryptography proofs
<a id="pqc-security"></a>

**ID:** `pqc-security` · **Status:** open · **Kind:** mathematical · **AI:** 🟢 high · **10d:** `stretch`

**Culture:** `open-math-like` · **Refutability:** `formal` · **Rung:** 5 · **publish_now:** `partial`

Can we prove that specific cryptographic protocols remain secure against quantum adversaries?

**Hook:** Break or bless one post-quantum scheme.

**Weak win:** conditional results, barriers, audit one scheme/channel

**Strong win:** named open result closed

**Publish shape:** proof / reduction / capacity formula / dictionary theorem

**Open-math parallel:** arXiv proof culture — the paper IS the solve

**10-day criterion:** Full security-reduction audit of ONE named PQC scheme; find gap or certify proof sketch.

**Harness:** `crypto`, `formal`, `literature`

**AI notes:** Formal security reductions; high AI leverage.

**Tags:** `cryptography`, `pqc`, `security`

**Sources:** wikipedia

---

## Quantum channel capacity
<a id="quantum-capacity"></a>

**ID:** `quantum-capacity` · **Status:** open · **Kind:** mathematical · **AI:** 🟢 high · **10d:** `stretch`

**Culture:** `open-math-like` · **Refutability:** `formal` · **Rung:** 5 · **publish_now:** `partial`

What is the quantum capacity of general quantum channels (often unknown in closed form)?

**Hook:** Compute a quantum channel capacity nobody pinned down.

**Weak win:** conditional results, barriers, audit one scheme/channel

**Strong win:** named open result closed

**Publish shape:** proof / reduction / capacity formula / dictionary theorem

**Open-math parallel:** arXiv proof culture — the paper IS the solve

**10-day criterion:** Closed form or tight bounds for one concrete channel family left open in literature.

**Harness:** `quantum-info-math`, `symbolic`

**AI notes:** Quantum information theory math.

**Tags:** `quantum-info`, `capacity`

**Sources:** wikipedia

---

## Topological qubits / Majorana modes
<a id="topological-qubits"></a>

**ID:** `topological-qubits` · **Status:** open · **Kind:** experimental · **AI:** 🟡 medium · **10d:** `multi-sprint`

**Culture:** `program` · **Refutability:** `soft` · **Rung:** 3 · **publish_now:** `program-papers`

Can topological quantum computers be built? Can Majorana zero modes be demonstrated conclusively?

**Hook:** Topological qubits / Majorana modes

**Why hard:** Fabrication + unambiguous experimental signatures.

**Weak win:** threshold sims / architecture search

**Strong win:** reproducible device beyond metric

**Publish shape:** demo with metrics

**Open-math parallel:** Constructive existence by exhibition

**Tags:** `majorana`, `topological-qc`

**Sources:** wikipedia

---
