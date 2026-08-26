# Classification Architecture — Palpating

**Version:** 0.1 · **Status:** Binding *policy*; taxonomy content **UNAPPROVED**.
Subordinate to `ASSET_THESIS.md`; implements Execution Order Step 2 and factory
layer 3 (Ontology).

This document defines **how** the Physical Sign Map is built and governed. It
deliberately does **not** finalise the taxonomy. Per `ASSET_THESIS.md` §5, the
sequence is **literature → candidate classes → falsification → governed
taxonomy**, and the taxonomy is approved only at Gate 2.

> A classification architecture is not a list of topics. It is a system of named
> types, each with a precise definition, entry criteria, and relationships.
> (`SOVEREIGN_ASSET_EXECUTION_ORDER.md`, Step 2.)

---

## 1. What the ontology classifies

The **Physical Sign Map** classifies the **representability of physical bodily
properties** — not diseases, not diagnoses, not clinical outcomes. For each
physical property it records the path:

    Physical property
      → observable interaction
      → sensing modalities
      → digital representation type(s)
      → evidence-supported capabilities
      → known limitations / representation gap
      → source provenance
      → related properties & modalities

This structure is fixed at Gate 0. The **members** are admitted later.

Out of scope (rejected unconditionally): disease taxonomies, diagnostic
categories, treatment pathways, longevity/healthspan constructs, and any class
that would require a clinical claim to define (`CLAIMS_BOUNDARY.md`).

---

## 2. The build method (why we do not invent first)

Inventing a taxonomy and then finding evidence to fit it produces a pseudo-standard.
Palpating does the reverse:

1. **Gather literature** (Gate 1) on physical-property sensing — robotic
   palpation, elastography, tactile/force sensing, strain sensing, wearable
   mechanical sensing, imaging — under `SOURCE_GOVERNANCE.md`.
2. **Derive candidate classes** from what the literature actually distinguishes.
3. **Falsify** each candidate against the entry criteria below. A candidate that
   fails is dropped or merged — recorded, not hidden.
4. **Admit** surviving classes into the governed taxonomy at **Gate 2**, each
   with a definition, entry criteria, ID, and `DECISION_LOG.md` entry.

No class is public before it survives step 3 and is admitted in step 4.

---

## 3. Entry criteria for a class (binding at Gate 2)

A candidate class is admitted to the Physical Sign Map only when it:

1. Names a **distinct** physical property or organising axis that is **not a
   subset** of an already-admitted class.
2. Corresponds to at least one **observable interaction** by which the property
   is engaged or transduced.
3. Maps to at least one **sensing modality** with **cited evidence**
   (`SOURCE_REGISTER.md` / `SOURCE_GOVERNANCE.md`) that the property can be
   sensed or represented.
4. Has a stated **representation type** and at least one documented
   **limitation / representation gap**.
5. Can be positioned by **relationships** (parent/adjacent/related) without
   contradiction.
6. Requires **no clinical claim** to define.

A class missing any criterion stays a candidate. Anything qualifying would make
the catalog a list, not a governed system — forbidden by the Category Artifact
Standard.

---

## 4. Candidate content — UNAPPROVED

Recorded for continuity from v0.1. **None of this is approved.** It must not
appear on a public surface as a taxonomy until Gate 2.

**Candidate organising axes:** Mechanical response · Structural state · Surface
state · Spatial relation · Dynamic response.

**Candidate physical properties (from the v0.1 concept list):** stiffness ·
elasticity · pressure · tension · texture · mobility · resistance · deformation ·
asymmetry.

**Candidate sensing modalities:** robotic palpation · elastography · force /
tactile sensing · strain sensing · wearable mechanical sensing · imaging.

At Gate 2, each candidate property will be tested: does it meet all six entry
criteria on current evidence? Those that do are admitted; those that do not are
merged, deferred, or dropped, with the reason logged.

---

## 5. Naming and versioning

- Class names follow `CATEGORY_LANGUAGE.md` discipline: one canonical name, no
  manufactured acronyms, no false authority.
- Each admitted class carries a stable identifier and a canonical URL under
  `/physical-signs/` or `/sensing/` (`REFERENCE_LAYER_POLICY.md`).
- The ontology is **append-aware and versioned**: additions bump a minor version;
  refinements never silently repurpose an existing class; every change is logged
  (Non-Negotiable #7).

## 6. Relationship to other layers

- The **Standard** governs representation integrity across these classes.
- The **Protocol** consumes the Map to produce captured/gap/evidence outputs.
- The **Reference Layer** is the Map made navigable; each class is a governed page.
- The **Mapper** engine's outputs resolve to these class pages.

Structural-integrity validation (Gate 5) checks that all four use the *same*
classes — an inconsistency here is a blocking defect.

> **The taxonomy is discovered, defended, and dated — never asserted.**
