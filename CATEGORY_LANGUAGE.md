# Category Language — Palpating

**Version:** 0.1 · **Status:** Binding · **Governs:** the asset's owned vocabulary.
Subordinate to `ASSET_THESIS.md`; implements factory layer 2
(`docs/INTELLIGENCE_FACTORY_DOCTRINE.md`).

Category language is a moat. The vocabulary the asset originates — precise enough
to resist casual substitution, natural enough to be adopted without crediting the
source — is one of the parts a competitor cannot rebuild quickly. This document is
the single source of truth for every term. A term used on any surface must match
its definition here, or the surface is wrong.

---

## Term status legend

- **(O)** original to Palpating — the asset coined or defined it.
- **(F)** inherited from the field — Palpating gives it a governed definition and
  a bounded scope, without claiming to own it.
- **CANDIDATE** — proposed, not yet admitted; may change or be dropped at Gate 1/2.

Every term carries a stable identifier `T-nn` for agent legibility
(`SEO_AND_INTERNAL_LINK_GOVERNANCE.md`).

---

## Core terms

### T-01 · Digital Palpability (O) — headline term
The extent to which a physical property of the body can move from a sensed or
physically-interacted-with state into a digital representation that can be
measured, transmitted, compared or interpreted.
- It is a **conceptual framing**, never a score, band, ladder, diagnostic
  standard, or validated medical metric (`DECISION_LOG.md` DEC-002).
- Correct: "elastography increases the digital palpability of tissue stiffness."
- Incorrect: "this device has a Digital Palpability score of 4."

### T-02 · Physical Sign (O, framing)
A mechanical, structural or tactile property of the body that can carry
information about bodily state — positioned as the counterpart to a *vital sign*.
Examples: stiffness, elasticity, deformation, pressure, mobility, texture,
resistance. A physical sign is **not** a diagnosis and **not** a disease.

### T-03 · Vital Sign (F)
An established scalar physiological measurement (heart rate, respiration,
temperature, blood pressure, oxygenation). Used only as the contrast anchor for
the category framing "from vital signs to physical signs."

### T-04 · Physical-Sign Intelligence (O)
The category the asset owns: governed knowledge of which physical signs can be
made computationally legible, by which modality, within which limits, on what
evidence.

### T-05 · Computational Legibility (O, framing)
The property of a bodily state being resolvable into structured, interpretable
data. The interpretive sentence — *"making the physical state of the body
computationally legible"* — names the asset's work.

### T-06 · Physical Sign Map (O)
The asset's ontology (`CLASSIFICATION_ARCHITECTURE.md`): the governed mapping of
physical property × sensing modality × representation × evidence × limits.

### T-07 · Sensing Modality (F)
A physical mechanism by which a property is transduced into signal — e.g. robotic
palpation, elastography, force/tactile sensing, strain sensing, wearable
mechanical sensing, imaging. Each admitted modality gets a governed reference
page.

### T-08 · Digital Representation (F)
The structured form a sensed property takes — a value, a map, a curve, a field.
The asset distinguishes the *property* from its *representation* everywhere.

### T-09 · Representation Gap (O)
The part of a physical property that a given sensing/representation pipeline does
**not** capture. A first-class, always-reported output of the protocol — the
asset's honesty mechanism.

### T-10 · Physical-State Representation Integrity (O)
What must be preserved for a claim "this system represents physical sign X" to be
meaningful. The property governed by the Standard (`ASSET_INTELLIGENCE_FACTORY_PLAN.md` §4).

### T-11 · Palpation (F, bounded)
Clinical manual examination using touch to interpret bodily properties. The
historical anchor of the name — **bounded** so the asset never collapses into a
generic guide to manual palpation (`DECISION_LOG.md` DEC-001). Palpating is about
computational legibility of physical state, not palpation technique instruction.

---

## Candidate terms (UNAPPROVED — Gate 1/2)

These are proposed and may change or be dropped. They must **not** appear on a
public surface until admitted with a `DECISION_LOG.md` entry.

- **CANDIDATE · Legibility Boundary** — the evidence-bounded edge beyond which a
  property is not currently representable by any modality.
- **CANDIDATE · Modality Coverage** — the set of physical signs a given system or
  vendor can actually represent (basis of the Coverage Audit).
- **CANDIDATE · Signal Provenance** — the traceable chain from physical
  interaction to represented value.

---

## Naming discipline

1. **One canonical name per concept.** No synonyms drift in. If a better name is
   found, it is a rename with a `DECISION_LOG.md` entry, not an alias.
2. **No manufactured acronyms.** No PPSO-style ontology label or acronym adopted
   for the appearance of a framework (`DECISION_LOG.md` DEC-003).
3. **No false authority.** No term implies a clinical standard, certification, or
   score that does not exist.
4. **Original vs. inherited is always marked.** The asset never implies it coined
   a field term, and never lets an owned term be read as established science.
5. **Sourced fact ≠ conceptual interpretation ≠ framework language.** Every
   surface separates the three (Non-Negotiable #3; `CLAIMS_GOVERNANCE.md`).

> **The vocabulary is the moat. Define it once, govern it forever, and let others
> adopt it.**
