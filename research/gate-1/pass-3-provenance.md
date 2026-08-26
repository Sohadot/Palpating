# Gate 1 — Pass 3: Physical Meaning Provenance & Boundary

**Status:** Pass 3 · **All structure UNAPPROVED** (input to Gate 2, not Gate 2).
Governed by `ASSET_THESIS.md`, `DECISION_LOG.md` DEC-014 (Pass 2.1 correction).

> **Governing question (replaces "what do we delete?"):** *Which forms of bodily
> physical meaning can legitimately be sensed, elicited, derived, compared,
> represented, and bounded — and what is the provenance of each?*

Gate 1 closes by **reclassification and boundary definition**, not by deleting
every concept that is not an intrinsic material property.

---

## Part 1 — Testing the provenance architecture

Pass 2.1 proposed seven candidate provenance modes. Pass 3's first duty is to ask
whether they are a defensible scientific partition or need reshaping.

**Finding: they conflate two independent axes.** Five of the modes describe *what
kind of physical meaning it is* (its **nature/origin**); two describe *how it is
reached* (its **access/reconstruction**). Mixing them produces overlaps — e.g.
"interaction-derived sign" (access) and "structural response" (nature) can both
apply to the same concept at once. A cleaner, defensible architecture separates the
two axes, and assigns every concept a **pair**:

### Axis A — Nature of the physical meaning (what it is)
| Nature | Meaning |
|--------|---------|
| **State** | an intrinsic condition/property that exists in the body (material property, internal pressure, surface geometry) |
| **Response** | what appears *under* force / loading / deformation (structural stiffness, elicited resistance) |
| **Dynamic** | meaning that exists only *through time* — rate/history-dependent behaviour (viscoelastic creep, damping, relaxation) |
| **Relational** | meaning that exists only *by comparison* across sites / times / states (asymmetry, change) |
| **Functional** | meaning expressed in *movement/function*, bound to a physical cause but not itself a tissue property (mobility limited by stiffness) |

### Axis B — Access / how it becomes legible (how we reach it)
| Access | Meaning |
|--------|---------|
| **Direct measurement** | transduced with minimal reconstruction (strain gauge → strain) |
| **Elicited / interaction** | requires a controlled action on the body to appear (indentation, applanation, passive stretch) |
| **Model-inferred** | reconstructed via a model / inverse problem (shear modulus from elastography; radiomic texture; IOP via Imbert-Fick) |
| **Comparative-derived** | produced by an operation over other measurements (bilateral difference) |

Every concept = **(Nature, Access)** + a **Representation Gap**. This 2-axis model
is the Pass 3 refinement of the seven modes; it is **UNAPPROVED**, offered to Gate 2.
It is stronger because it explains *why* the same word (e.g. "pressure," "texture")
can occupy different cells depending on context — provenance is assigned per
**concept × context**, not per word.

---

## Part 2 — Reclassification by provenance (UNAPPROVED)

No concept is "deleted." Each is placed by provenance, with its representation and —
mandatorily — its representation gap.

| Concept | Nature | Access | Representation | Representation gap | Evidence |
|---|---|---|---|---|---|
| **Elastic modulus** | State (material) | Model-inferred | shear/Young's modulus (kPa) | model-, frequency-, boundary-dependent; non-unique inverse solution | E-03, E-16, S-005 |
| **Structural stiffness** | Response | Elicited / model-inferred | force–displacement; k | geometry+boundary confound; ≠ material modulus | E-06, E-07, E-15 |
| **Tissue strain / deformation** | State→Response | Direct / elicited | strain field, waveform | must separate *tissue* strain from *motion-proxy* sensor deformation | E-08, S-002 |
| **Viscoelastic / dynamic behaviour** | **Dynamic** | Model-inferred | viscosity, damping, relaxation | time-scale dependent; loading/motion bias | E-03, E-11 |
| **Muscle (viscoelastic) tone** | Response (+Dynamic) | Elicited | superficial viscoelastic params | overloaded term; superficial only; ≠ active tension | E-11, E-17, E-18 |
| **Intrinsic pressure (IOP / compartmental)** | **State** | Elicited + model-inferred | pressure (mmHg) via Imbert-Fick | assumes corneal/wall properties; not contact pressure | E-25 |
| **Contact / interface pressure** | Interaction quantity | Direct | interface pressure (kPa) | intrinsic-property provenance only if it maps to a bodily state, else **device artifact** → excluded | E-09 |
| **Resistance** | Response (relation) | Elicited | force–response relation | not atomic — the relation underlying stiffness/tone | E-15, E-17 |
| **Asymmetry** | **Relational** | Comparative-derived | differential over a property | inherits the gap of the compared property; needs a valid baseline | (operation) |
| **Mobility / ROM** | **Functional** | Direct (kinematic) | joint angle / ROM | belongs to Palpating **only** where it binds to a physical cause (e.g. ROM limited by stiffness); pure motor performance → digital-biomarker territory (out) | E-13, E-14, E-23 |
| **Texture — surface** | State (surface geometry) | Direct / model-inferred | roughness Ra/Rq/Rz | Ra alone insufficient | E-21, E-22 |
| **Texture — tactile / inclusion** | Response | Elicited | tactile image; size/depth/modulus | phantom-dominant; in-vivo sparse | E-04, E-05 |
| **Texture — internal heterogeneity** | State (structure) | Model-inferred | radiomic texture features | reproducibility-sensitive; indirect | E-24 |

Two structural results:
1. **"Texture" and "pressure" are not vague — they are multi-provenance.** Each
   decomposes into distinct, individually-defensible concepts across different
   (Nature, Access) cells. The umbrella word is what was undefined; the decomposed
   concepts are governable.
2. **The same access can serve different natures.** Elicitation and model-inference
   recur across State, Response and Dynamic — which is exactly why Palpating's value
   is governing the *provenance + representation + gap*, not owning any one modality.

---

## Part 3 — Boundary definition (what Palpating owns)

**Palpating owns the binding layer, not the adjacent fields.** The chain

> physical meaning → provenance → elicitation/sensing → representation →
> interpretation → representation gap

is owned by no neighbour:

| Field | Owns | Does *not* own |
|-------|------|----------------|
| Biomechanics | movement, forces, kinematics | the provenance/representation-integrity binding of a physical *sign* |
| Mechanobiology | cellular response to mechanics | tissue-level legibility governance |
| Quantitative imaging / elastography | modulus/texture reconstruction methods | the cross-modal governed map + gap |
| Tactile / haptic sensing | transduction/feedback hardware | which meanings are faithfully representable |
| Wearable mechanical sensing | body-worn measurement tools | the governed provenance of what is measured |
| Digital biomarkers | outcome-validated measures | the pre-outcome physical-meaning provenance layer |

**Inclusion rule (Palpating):** a concept is *in* if a **defensible physical
provenance** can be stated — a (Nature, Access) pair with evidence and a named
representation gap.
**Exclusion rule:** a concept is *out* only when **no** defensible physical
provenance exists — i.e. it is a **device artifact** (a quantity created by the
instrument that maps to nothing in the body) or **pure performance/kinematics with
no binding** to a physical cause. Derivedness, interaction-dependence, comparison,
or time-dependence are **not** grounds for exclusion (DEC-014).

Under this rule, the earlier "exclusions" resolve as: contact pressure — *in* as an
interaction quantity **iff** it maps to a bodily state, else out as artifact;
mobility — *in* as a functional expression **iff** bound to a physical cause, else
out to digital biomarkers; resistance/asymmetry — *in* as relation/relational sign;
texture — *in*, decomposed.

---

## Part 4 — The Observed Cross-Modal Constraint, restated

The 2-axis model sharpens Pass 1's finding. Every **Model-inferred** and most
**Elicited** accesses carry reconstruction assumptions (inverse-problem
ill-posedness, E-16; Imbert-Fick corneal assumptions, E-25; radiomic
reproducibility, E-24). Restated:

> **A physical-meaning representation is bounded by the assumptions of its access
> mode; the weaker-constrained the access (model-inferred > elicited > direct), the
> larger the mandatory Representation Gap.**

Still an **Observed Cross-Modal Constraint**, now with a *mechanism* (it scales with
access mode), not a universal law. Candidate governing principle for Gate 2.

---

## Part 5 — Gate 1 closure assessment (recommendation)

Against the closure test (survive positive evidence **and** adjacent-category
falsification), under the corrected non-narrow interpretation:

- **Positive evidence:** the core natures (State, Response, Dynamic, Relational,
  Functional) each have at least one evidenced, representable concept. **Pass.**
- **Adjacent-category falsification:** the boundary (Part 3) is crisp — Palpating
  owns the provenance/representation-integrity binding layer, which no neighbour
  owns; breadth is bounded by the provenance requirement, not by intrinsic-tissue
  restriction. **Pass.**
- **Category is broad-but-bounded, and defensible.** It is neither a loose umbrella
  (the provenance rule bounds it) nor a narrow tissue-mechanics branch (Pass 2.1).

**Recommendation: Gate 1 is ready to close** — the research question is answered and
the category survives. **Closure is a gate transition and is left for user
ratification** (gate transitions are not made unilaterally).

**Carried into Gate 2 (as UNAPPROVED input, to be formally admitted there):** the
2-axis provenance architecture; the Part 2 reclassification; the Part 3 boundary and
inclusion/exclusion rules; the restated cross-modal constraint. **Nothing is approved
here** — no ontology class, standard dimension, protocol rule, engine logic, or SEO
page.

**Housekeeping recommended as the first Gate 2 action:** promote admitted evidence
objects `E-01…E-25` into `SOURCE_REGISTER.md` under `SOURCE_GOVERNANCE.md`.

---

## Open genuinely-unresolved items (honest)

- The **Functional** nature is the weakest boundary: "bound to a physical cause"
  needs an operational test in Gate 2, or mobility leaks the category back toward
  biomechanics.
- **Dynamic** as a distinct nature (vs a property of Response) is supported by
  viscoelasticity but should be stress-tested with primary rheology sources in Gate 2.
- Whether **Access** belongs in the ontology proper or in the Protocol layer is a
  Gate 2 design question (it may be protocol metadata, not an ontology axis).
