# Gate 1 — Pass 2: Adversarial Falsification

**Status:** Pass 2 · **All conclusions UNAPPROVED** (input to a future Gate 2, not
Gate 2 itself). This pass attacks Pass 1's promising result rather than extending
it. The rule from `README.md`: **Gate 1 may close only when the category survives
both positive evidence *and* adjacent-category falsification.**

Methodological correction applied repository-wide in this pass: the internal
"DP strength" column is renamed **Evidence status** with three labels —
**established representation**, **bounded/emerging representation**, **insufficient
evidence** — so Digital Palpability is never turned into a back-door score
(reaffirms `DECISION_LOG.md` DEC-002).

---

## Interpretive Correction — Pass 2.1

> **This section supersedes the interpretation (not the evidence) of Part A and
> Part B below.** Pass 2's evidence stands; its *conclusion language* was too
> strong. Binding for the remainder of Gate 1 (`DECISION_LOG.md` DEC-014).

**The error being corrected.** Pass 2 slid from a correct finding — *"X is not an
atomic property"* — to an unwarranted one — *"therefore X is outside Palpating."*
That conflation quietly shrank the whole category to *intrinsic tissue mechanics*.
It is wrong on the asset's own terms.

**Two governing principles (binding for the rest of Gate 1):**

1. **Atomic exclusion ≠ category exclusion.** *Pass 2 narrowed the atomic-property
   layer; it did not establish that the Palpating category must be limited to
   intrinsic tissue properties.* A concept rejected as an atomic property may still
   belong to Palpating in another governed role — a response, an interaction-derived
   sign, a dynamic expression, a comparative sign, a functional expression, or a
   model-inferred representation — **if defensible physical provenance exists.**
2. **Exclusion requires absence of provenance, not mere derivedness.** *A concept is
   excluded from Palpating only when no defensible physical provenance can be
   established — not merely because it is derived, interaction-dependent,
   comparative, or dynamic.*

**Why.** Palpating is not the dictionary act "examine by touch." It is the deeper
logic inside the verb: **the conceptual act of making physical meaning legible
through interaction.** Touch is the *model*, not the object. The asset therefore
governs the different *ways* physical meaning arises, is elicited, sensed, derived,
represented, and bounded — a chain no adjacent field owns:

> **Physical meaning → Provenance → Elicitation / Sensing → Representation →
> Interpretation → Representation Gap.**

This is stronger than "property → sensor," and it belongs to the word *palpating*
itself — it was not bolted onto the domain.

### Physical Meaning Provenance — candidate modes (UNAPPROVED, for Pass 3)

Every concept in Palpating must answer *"where does this physical meaning come
from?"* These candidate provenance modes are the Pass-3 test object — **not an
approved ontology:**

| Mode | Meaning |
|------|---------|
| **State / material property** | what exists or is characterisable in the body |
| **Structural or elicited response** | what appears under force / loading / deformation |
| **Interaction-derived sign** | what arises from controlled contact or action with the body |
| **Dynamic expression** | what becomes meaningful only over time / through changing response |
| **Relational / comparative sign** | what is extracted by comparing sites, times, or states |
| **Functional / kinematic expression** | what shows in movement/function but is *not* a tissue property |
| **Model-inferred representation** | what is not measured directly but reconstructed from a model / inverse problem |

### Reinterpretation of the Part A adjudications

The words "drop" / "excluded" in Part A mean **out of the atomic-property layer**,
unless a concept has *no* defensible provenance at all:

| Concept | Pass 2.1 reading |
|---------|------------------|
| Elastic modulus | **state / material property** candidate |
| Structural stiffness | **structural-response** candidate (distinct from, related to, modulus) |
| Deformation / strain | **response / state** candidate — Pass 3 must separate *tissue* strain from *motion-proxy* sensor deformation |
| Tone | clinically overloaded term under falsification; the **underlying mechanical response** may survive |
| Pressure | not an atomic intrinsic property; **interaction-derived sign** candidate (vs device artifact) |
| Resistance | not atomic; **response relation** |
| Asymmetry | not atomic; **comparative / derived sign** |
| Mobility / ROM | not an atomic tissue property; **functional / kinematic expression** candidate (kept only where it carries clear physical meaning) |
| Texture | umbrella term; **decompose** into surface / tactile / structural manifestations — not deleted |
| Dynamic response | candidate **mode** of physical meaning, not necessarily a separate property |

**Master framing preserved (not narrowed):**
> Physical-Sign Intelligence concerns **how bodily physical meaning can be sensed,
> elicited, derived, represented and bounded computationally** — not "intrinsic
> tissue mechanics."
> **Palpating is the conceptual act of making physical meaning legible through
> interaction.**
> **From vital signs to physical signs** remains the master framing.

Pass 2 and DEC-013 are **not** rewritten — they remain the record of what the
falsification discovered. DEC-014 corrects their *interpretation*. This is better
governance than deleting history.

---

## Part A — Property adjudications
*(Read the verdicts below through the Pass 2.1 lens above: "excluded/dropped" =
"out of the atomic-property layer," pending Pass 3 provenance reclassification.)*

### 1. Stiffness ≠ elasticity (distinct; related, not synonymous)
**Finding.** Elasticity/elastic modulus is an **intensive material** property (the
material's intrinsic resistance to deformation, and its return to shape); stiffness
is an **extensive structural** property, `k = AE/L`, depending on the modulus **and**
geometry/boundary conditions (E-15). What SWE/MRE actually output is a **shear
modulus reconstructed via an ill-posed inverse problem under model assumptions**
(E-16), not a direct "stiffness" reading.
**Adjudication.** Do **not** merge. Candidate structure: **elasticity/modulus**
(material property) and **structural stiffness** (structural response) are two
distinct candidate entries joined by an explicit relationship edge
(*structural stiffness ← material modulus × geometry/boundary*). Splitting them is
required before any Gate 2 admission.
**Evidence status:** established representation for *modulus* (SWE/MRE/indentation),
with the standing caveat that the value is model- and assumption-dependent (E-16).

### 2. Tone ≠ tension (narrow the language hard)
**Finding.** Muscle **tone** = passive viscoelasticity + active tonic contraction;
"resistance to passive stretch" is a neural-mechanical network, not one scalar
(E-17). **Myotonometry** measures compression-deformation → **viscoelastic
properties of *superficial* muscle** (E-18, E-11). "Tension" additionally includes
active contractile force (EMG/force territory), which myotonometry does not capture.
**Adjudication.** The evidence supports at most a narrowly-named candidate:
**"muscle viscoelastic tone (superficial, passive)."** It does **not** license a
broad "tension" sign. Drop "tension" as a candidate atomic property; retain the
narrow tone entry only.
**Evidence status:** bounded/emerging representation (lab-validated, superficial,
not field-standardized).

### 3. Mobility / ROM — kinematic state, not a tissue physical sign (provisional EXCLUDE)
**Finding.** IMUs represent **kinematics** — joint angles, spatiotemporal variables
(E-13, E-23); ROM is a **kinematic capacity** of a joint, categorically different
from a mechanical/structural/tactile *property of tissue* that palpation reads.
Digital-biomarker and biomechanics literature already own this space (E-20, E-23).
**Adjudication.** This is the category's most dangerous edge. Admitting ROM as a
"physical sign" would let Physical-Sign Intelligence absorb all of biomechanics,
gait, and digital biomarkers — dissolving its boundary. **Provisional exclusion:**
mobility/ROM sits **outside** the physical-sign atomic layer. The *only* legible
crossover is the mechanical property revealed *through* passive motion (e.g. joint
**stiffness**/resistance to passive movement) — which is stiffness again, not ROM.
**Evidence status:** established representation *as kinematics* — but as a physical
sign in Palpating's sense, **insufficient evidence / out of scope**.

### 4. Pressure — interaction-induced quantity, not an intrinsic property (EXCLUDE generic)
**Finding.** A contact-pressure signal is generated **at the sensor–skin
interface** by the measurement interaction (E-09 already flagged this in Pass 1);
it is not an intrinsic bodily property that pre-exists the measurement.
**Adjudication.** Governance rule established here: **a modality-induced quantity
must not enter as a physical sign merely because a device measures it.** Generic
"contact pressure" is excluded as an atomic sign. (Genuine intrinsic pressures —
e.g. intracompartmental or intraocular pressure — are specific physiological
constructs with their own invasive/validated measurement; they are not "contact
pressure sensing" and would need separate evidence.)
**Evidence status:** insufficient evidence *as an intrinsic physical sign*.

### 5. Texture — defensible only as surface micro-geometry (NARROW or drop)
**Finding.** There is a rigorous metrological definition: surface **roughness**
(ISO 4287; Ra/Rq/Rz), with skin Ra ≈ 0.03–0.45 μm, and tactile perception is a
function of surface micro-geometry (E-21, E-22). But roughness ≠ the loose clinical
"tissue texture" (nodularity, granularity felt on palpation), and even Ra alone is
insufficient (E-21).
**Adjudication.** Retain **only** the narrowed, geometric candidate **"surface
micro-geometry / roughness"** (measurable, ISO-defined). Drop the loose,
undefined clinical "texture." If Pass 3 cannot evidence the clinical sense
rigorously, it stays dropped.
**Evidence status:** bounded/emerging representation (for surface roughness);
insufficient evidence (for clinical "texture").

### 6. Resistance — a response relation, not an atomic sign (DROP as atomic)
**Finding.** "Resistance to deformation" **is** the definition of stiffness (E-15);
"resistance to passive stretch" **is** the definition of tone (E-17). "Resistance"
names the response relation underlying other properties.
**Adjudication.** **Drop** as an atomic property. Retain "resistance" only as a
descriptive relation term, not a Map entry.

### 7. Asymmetry — a comparison operator, not an atomic property (KEEP OUT)
**Finding.** No evidence for asymmetry as an atomic physical sign; it is a
**differential over bilateral/temporal measurements** of other properties.
**Adjudication.** Keep **outside** the atomic-property layer; treat provisionally
as a **comparison operator** applied to admitted properties. Revisit only if
direct evidence appears.

---

## Part B — Adjacent-category falsification (the uniqueness test)

The decisive question (mandate #8): does **Physical-Sign Intelligence** name
something the neighbouring categories do **not** already name?

| Adjacent category | What it already names | Evidence |
|---|---|---|
| **Biomechanics** | movement, forces, kinematics/kinetics of the body | E-23 |
| **Mechanobiology / mechanotransduction** | how cells convert mechanical cues to biochemical signals (biology level) | E-19 |
| **Quantitative imaging / elastography** | imaging-derived mechanical-parameter maps (via inverse problems) | E-03, E-16 |
| **Tactile / haptic sensing** | the transduction/feedback *technology* of touch | E-04, S-003 |
| **Wearable mechanical sensing** | body-worn *tools* transducing deformation/motion | E-08, E-09, S-002 |
| **Digital biomarkers** | validated sensor measures tied to clinical *outcomes* | E-20 |

**What Physical-Sign Intelligence includes that none of these names:** a
**cross-modal, evidence-governed account of which *intrinsic* mechanical/structural/
surface properties of the body can be faithfully turned into a digital
representation — by which modality, within which bounded assumptions, and where the
representation breaks (the Representation Gap).** It is not a sensing technology, not
an imaging method, not a biology field, not a movement science, and not an
outcome-validation layer. It is a **representation-integrity / governance layer over
the property ↔ modality ↔ representation ↔ evidence relation** — a position none of
the adjacent fields occupies.

**What it must exclude to hold that position** (this is the price of uniqueness):
- kinematics / ROM → biomechanics & digital biomarkers (Part A#3);
- interaction-induced quantities like contact pressure (Part A#4);
- cellular mechanotransduction → mechanobiology (E-19);
- the sensing hardware itself → tactile/haptic & wearable engineering;
- outcome validation → digital biomarkers.

**Verdict.** The category is **defensible only in its narrow form.** Narrow, it
occupies real, unclaimed ground (representation-integrity governance over intrinsic
body-property legibility). Broad — "any measurable physical state" — it collapses
into *biomechanics + elastography + wearable sensing + digital biomarkers* with a
new label, and fails the uniqueness test. The narrowing forced by Part A (#3, #4,
#6, #7) is therefore not incidental cleanup: **it is what makes the category real.**

---

## Part C — The cross-modal constraint (reframed, mandate #10)

Pass 1's strongest result — *"a digital representation is a bounded proxy under
stated assumptions"* — is **not yet named a universal law.** Pass 2 tests it against
measurement science: the elastography **inverse problem is ill-posed**, with **no
unique solution** from a single observation, requiring priors/regularizers and
assumption-laden boundary conditions (E-16). This grounds the constraint in
inverse-problem theory, not only biomedical reviews — raising its confidence.

**Status:** retained as an **Observed Cross-Modal Constraint**, now supported by
inverse-problem/metrology theory across the examined corpus. It is a strong
candidate to be elevated to a governing principle at Gate 2, but it is **not**
declared a universal law: the corpus is biomedical + elastography inverse problems,
not every possible sensing modality. Pass 3 may test it against broader metrology /
uncertainty-quantification literature before any elevation.

---

## Part D — Revised candidate structure (UNAPPROVED — for Gate 2)

Atomic candidate properties that survive Pass 2 falsification:
- **Elasticity / elastic modulus** (material) — established (assumption-bounded).
- **Structural stiffness** (structural response; edge to modulus) — established
  (assumption-bounded).
- **Deformation / strain** (surface, dynamic) — established.
- **Muscle viscoelastic tone (superficial, passive)** — bounded/emerging.
- **Surface micro-geometry / roughness** — bounded/emerging.

Excluded / relegated (not atomic physical signs):
- **Mobility / ROM** → kinematics (adjacent); out of scope unless via passive-motion
  stiffness.
- **Contact pressure** → interaction-induced quantity; out unless an intrinsic
  physiological pressure is separately evidenced.
- **Resistance** → response relation (facet of stiffness/tone).
- **Asymmetry** → comparison operator over admitted properties.
- **Clinical "texture"** → dropped unless Pass 3 evidences it beyond roughness.

Candidate organising axis with support: **mechanical response** (modulus, stiffness,
strain, tone). "Structural / surface / spatial / dynamic" remain unproven and are
**not** carried into Gate 2 without Pass 3 evidence.

---

## Part E — Gate 1 closure status

- Positive evidence: **passed** for a narrow core (Part A, Part D).
- Adjacent-category falsification: **passed only under narrowing** (Part B).
- Methodological corrections: evidence-status relabel **done**; cross-modal
  constraint reframed **done**; primary sources added for structural claims
  (E-15…E-23) **done**.

**Gate 1 is NOT yet closed.** Remaining before closure (Pass 3):
1. Resolve clinical "texture" (evidence beyond roughness) or confirm drop.
2. Primary source on intrinsic vs interaction-induced pressure.
3. Test for a genuine **dynamic-response** property distinct from static ones.
4. Decide the modulus/stiffness relationship representation (two entries + edge).
5. Consider elevating the Observed Cross-Modal Constraint after broader metrology
   review.
6. Promote admitted evidence objects into `SOURCE_REGISTER.md`.

**No ontology class, standard dimension, protocol rule, engine logic, or public SEO
page is approved in this pass** (mandate #12). Gate 2 begins only after Pass 3
closes Gate 1.
