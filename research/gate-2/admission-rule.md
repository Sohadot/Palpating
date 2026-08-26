# Gate 2B — The Admission Rule

**Status:** Candidate (for user ratification); **UNAPPROVED as governing doc**.
On ratification it is promoted into `CLASSIFICATION_ARCHITECTURE.md` as the binding
entry law. Governed by `ASSET_THESIS.md`, `DECISION_LOG.md` DEC-014/DEC-016/DEC-018.

> **Governing question:** *What must be true before Palpating is allowed to recognize
> something as a governed physical-sign concept?*

**Design constraint (mandate):** this rule sits **beneath the ontology.** It does
**not** assume that the Gate-1 `Nature × Access` model is the final ontology; it must
stay valid even if Gate 2C restructures the classes. It tests *admissibility*, not
*class membership*.

---

## The unit of admission

> **Admission is `concept × context`, never word-level.**

A word is not a concept. "Pressure," "texture," "tone," "resistance," "mobility"
each carry several distinct concepts; each concept is bound to a **context** (the
bodily situation + access under which the meaning is intended). Every verdict is
issued on a `(concept, context)` pair. A bare word is never admitted; it is
decomposed into `concept × context` pairs, each tested on its own.

This is one of Palpating's strongest rules and is binding.

---

## The seven gates (deterministic)

Each gate is a binary question. The order matters (it makes the verdict reproducible).

| # | Gate | Question | Fail meaning |
|---|------|----------|--------------|
| **G1** | Physical referent | Does the concept refer to an identifiable **property / state / response of the body's physical condition** — not a quantity that exists only inside the instrument, and not a pure movement/performance event? | no bodily physical referent |
| **G2** | Context specificity | Is the intended meaning pinned to **one** context, so the word is not ambiguous here? | word, not concept → **decompose** |
| **G3** | Defensible provenance | Can we state **how** the physical meaning arises, is elicited, or is derived (a provenance account — class-agnostic)? | no defensible provenance |
| **G4** | Admitted evidentiary support | Is there ≥1 **admitted** `SOURCE_REGISTER` record (canonical or supporting) for **this meaning/representation** — not a merely similar word? | evidence incomplete |
| **G5** | Representation path | Can we describe **physical meaning → sensing / elicitation / derivation → representation**? | path incomplete |
| **G6** | Named Representation Gap | Can we name what is **lost, assumed, or distorted** in that translation? | gap not yet nameable |
| **G7** | Boundary integrity | Does admitting it add **real physical meaning to Palpating's binding layer**, rather than making Palpating swallow biomechanics / wearables / imaging / digital biomarkers without bound? | unbound scope / pure adjacent performance |

---

## Deterministic verdict procedure

Apply in order; the first matching rule fixes the verdict.

1. **G1 fails** → **EXCLUDE** — *no physical referent / device artifact.*
2. **G2 fails** → **DECOMPOSE** (not a verdict on the word): split into `concept ×
   context` pairs and re-run each. The word alone gets no ADMIT/EXCLUDE.
3. **G3 fails** → **EXCLUDE** — *no defensible physical provenance.*
4. **G7 fails as pure unbound performance / kinematics** (the concept only replicates
   an adjacent field with no physical-meaning binding) → **EXCLUDE** — *boundary breach
   / unbound performance.*
5. **G1, G2, G3 pass and G4 ∧ G5 ∧ G6 ∧ G7 all pass** → **ADMIT.**
6. **Otherwise** (referent + provenance hold, no hard boundary breach, but one or more
   of G4/G5/G6 is incomplete, or G7 binding is unnamed) → **CONDITIONAL** — record
   exactly which gate is incomplete (candidate / unresolved).

**EXCLUDE is reachable only via G1, G3, or a G7 unbound-performance breach.** No other
gate can force EXCLUDE.

### EXCLUDE reasons (closed list)
- **No physical referent / device artifact** (G1).
- **No defensible physical provenance** (G3).
- **Unbound performance / kinematics** — pure adjacent-field output with no binding to a
  physical-sign meaning (G7).

### Explicitly NOT reasons for EXCLUDE (DEC-014)
Being **derived, comparative, interaction-dependent, dynamic, or non-atomic** is *never*
sufficient for exclusion. Such concepts route to **ADMIT** or **CONDITIONAL**, per the
gates — never to EXCLUDE on those grounds alone.

---

## Edge-case validation

Each `concept × context` records: context · physical referent · provenance ·
evidence IDs (`SOURCE_REGISTER`) · representation path · Representation Gap · verdict ·
reason. Notice that **contact pressure** and **ROM** each yield *two* verdicts by
context — the rule working as intended.

### ADMIT

**1. Elastic modulus** — *context:* tissue material property via elastography/indentation.
Referent: intrinsic material resistance to deformation. Provenance: State/material,
model-inferred. Evidence: S-007, S-011, S-006/S-017. Path: tissue → shear-wave/indentation
→ modulus (kPa). Gap: reconstruction/model gap, non-unique (CL-06). **ADMIT.**

**2. Structural stiffness** — *context:* whole-structure force–displacement (organ/joint).
Referent: structural response. Provenance: Response; elicited/model-inferred. Evidence:
S-021, S-026 (supporting). Path: applied force → displacement → k. Gap: geometry/boundary
confound (cannot separate material from geometry). **ADMIT.** *(Note: the modulus≠stiffness
distinction claim CL-13 stays non-public until a governing source is admitted; the concept
still admits on S-021/S-026.)*

**3. Tissue strain** — *context:* intrinsic tissue deformation under load. Referent:
tissue deformation state/response. Provenance: State→Response; direct/elicited. Evidence:
S-022, S-002. Path: load → tissue deformation → strain field. Gap: separating tissue
strain from bulk motion; placement. **ADMIT.**

**5. Intraocular pressure (tonometric)** — Referent: intrinsic physiological pressure
(internal-compartment state). Provenance: State; elicited + model-inferred (Imbert-Fick).
Evidence: S-015 (CL-10). Path: applanation/indentation → F/A → P. Gap: corneal-property
assumptions (model gap). **ADMIT.**

**10. Superficial muscle mechanical state** — *context:* myotonometry. Referent:
superficial muscle viscoelastic parameters. Provenance: Response(+Dynamic); elicited.
Evidence: S-009 (CL-04), S-027. Path: compression/oscillation → viscoelastic params. Gap:
superficial only; site/device dependence. **ADMIT.**

**12. Surface roughness** — *context:* skin/tissue surface micro-geometry. Referent:
surface geometric property. Provenance: State (surface geometry); direct/model-inferred.
Evidence: S-016 (ISO 21920-2, CL-11), S-029. Path: surface → profilometry/optical →
Ra/Rq/Rz. Gap: single parameter insufficient; scale-dependence. **ADMIT.**

**13. Radiomic texture** — *context:* internal tissue heterogeneity from imaging. Referent:
internal structural heterogeneity. Provenance: State (structure); model-inferred. Evidence:
S-014 (IBSI, CL-09), S-031/S-032. Path: tissue structure → image → standardized texture
features. Gap: reproducibility-sensitive; indirect; not a diagnosis. **ADMIT.**

### CONDITIONAL

**6a. Contact pressure — tissue-loading context** (e.g. interface loading indexing a
bodily loading state). Referent: bodily loading state (plausible). Provenance:
interaction-derived (candidate). Evidence: S-023 (sensing) — but "bodily loading state" as
a governed sign not established. Path: contact → interface pressure → (inferred loading).
Gap: interface ≠ internal loading. **CONDITIONAL** — G4/G5 incomplete for the *bodily*
meaning.

**7. Resistance** — *context:* response relation (to deformation / to stretch). Referent:
real physical opposition, but **not independent** of stiffness/tone. Provenance: Response
(relation). Evidence: via S-021/S-012. Path: force → opposed response. Gap: inherits the
operand's gap. **CONDITIONAL** — admit only as a **response-relation descriptor**, not a
standalone concept (not excluded — derivedness is not an EXCLUDE reason).

**8. Asymmetry** — *context:* bilateral/temporal comparison of an admitted property.
Referent: only through the compared property. Provenance: Relational. Evidence: inherits
operand's. Path: measure property at two sites/times → difference. Gap: comparator/baseline
gap; needs a valid baseline. **CONDITIONAL** — a **relational concept** that admits once
its operand property and baseline are specified.

**9a. ROM — functional expression bound to a physical cause** (e.g. ROM limited by passive
tissue stiffness). Referent: motion *bound to* a named physical property (stiffness).
Provenance: Functional, bound. Evidence: S-010 (kinematics) + the stiffness operand.
Path: passive motion → resistance/limit → (inferred stiffness). Gap: confounds
motivation/effort; binding must be named. **CONDITIONAL** — admits only if the physical
binding is explicitly named.

**14. Tactile inclusion response** — *context:* eliciting a hard inclusion via
tactile/robotic palpation. Referent: elicited mechanical response revealing an inclusion.
Provenance: Response; elicited. Evidence: S-018/S-019/S-020/S-001 (supporting, phantom-
dominant). Path: contact → tactile field → inclusion size/depth/modulus. Gap: in-vivo
validation sparse. **CONDITIONAL** — G5 representation path established largely in phantom;
in-vivo path incomplete.

### EXCLUDE

**4. Sensor deformation from gross motion (motion-proxy)** — *context:* wearable strain
signal driven by limb movement. Referent: **movement/kinematics**, not a tissue physical
property. **EXCLUDE** — *unbound performance/kinematics* (G7); belongs to
biomechanics/digital biomarkers (S-030). *(Contrast with case 3: same raw sensor, different
concept×context.)*

**6b. Contact pressure — raw interface reading, no bodily binding** — Referent: a quantity
generated at the sensor–skin interface that maps to nothing bodily. **EXCLUDE** — *device
artifact* (G1).

**9b. ROM — pure motor performance** — *context:* ROM as motor capacity/performance.
Referent: kinematic performance, unbound to a tissue property. **EXCLUDE** — *unbound
kinematics* (G7); digital-biomarker territory (S-010/S-030).

### DECOMPOSE (word, not concept)

**11. Clinical "tone"** — the word bundles distinct referents: (a) superficial muscle
mechanical state [→ case 10, ADMIT], (b) active tonic contractile force [EMG/force —
separate test, likely EXCLUDE/CONDITIONAL as adjacent], (c) neural resistance-to-stretch
[neurological — likely out]. **G2 fail → DECOMPOSE**; "tone" alone gets no verdict
(S-012: tone is not a single mechanical quantity).

---

## Determinism assessment (closure test)

Two competent operators applying the ordered procedure to the same `concept × context`
reach the same verdict, because: the gates are binary and ordered; EXCLUDE has a closed
3-reason list; and derivedness/comparison/dynamics are barred as EXCLUDE grounds.

**The one residual judgment point** is G7's *binding* test for Functional concepts
("is this motion bound to a named physical property?"). Tie-breaker to preserve
determinism: **if the binding to a specific physical property cannot be *named*, the
functional-context concept is CONDITIONAL and the pure-performance context is EXCLUDE.**
With this tie-breaker, the ROM cases resolve identically for any operator. (An operational
definition of "binding" is the Gate-2C open item; until then the tie-breaker governs.)

---

## Closure status

- The rule is stated **beneath** the ontology (survives Gate-2C restructuring). ✔
- Unit is `concept × context`. ✔
- Verdicts deterministic (ADMIT / CONDITIONAL / EXCLUDE), no scores. ✔
- EXCLUDE restricted to the closed reason list; DEC-014 non-reasons honoured. ✔
- Validated against all 14 edge cases with full records; two of them split by context. ✔
- Reproducibility secured via the ordered procedure + the G7 tie-breaker. ✔

**Recommended: Gate 2B ready to close**, pending user ratification (promotion into
`CLASSIFICATION_ARCHITECTURE.md`). **Not approved here:** final ontology classes, Standard
dimensions, Protocol, Engine, or any public/SEO page. **Next: Gate 2C — Provenance
Architecture**, which now begins as real architecture on top of a settled corpus (2A) and
a settled entry law (2B).
