# Asset Intelligence Factory Plan — palpating.com

> Copy of `templates/asset-intelligence-factory-plan.md`, completed for this asset.
> This document is subordinate to `ASSET_THESIS.md`.
> Governed by the methodology's `docs/INTELLIGENCE_FACTORY_DOCTRINE.md`.

---

**Asset:** `palpating.com`
**Portfolio tier:** Tier 1
**Plan version:** 0.1
**Status:** Draft (Gate 0)
**Governing document:** `ASSET_THESIS.md`

---

## 0. Orientation

Digital health is built almost entirely on one axis: **vital signs**. A small
set of scalar physiological values — heart rate, respiration, temperature,
blood pressure, oxygenation — that fit a dashboard. That axis is mature and,
increasingly, commodity: every wearable reports the same numbers.

The axis that is *not* commodity is the body's **physical state** — its
mechanical, structural and tactile properties: stiffness, elasticity,
deformation, pressure, mobility, texture, resistance. Clinical palpation has
read parts of that state by hand for centuries. Emerging sensing, haptics,
robotics and elastography are beginning to make selected physical properties
measurable, transmissible and computationally interpretable. But there is no
governed frame for *which* properties can be made digitally legible, by *which*
modality, within *what* limits, on *what* evidence.

`palpating.com` exists to own that frame. Its governing position:

> The physical state of the body is becoming computationally legible. Palpating
> governs how that legibility is classified, evidenced and bounded — the
> transition **from vital signs to physical signs**.

This plan develops the asset to **Category Intelligence Factory** grade: it does
not publish articles about palpation — it takes a physical property and a sensing
context as input and returns a governed map of what is representable, how, and
within what limits, resolving to citable reference pages.

The eleven factory layers below correspond to
`docs/INTELLIGENCE_FACTORY_DOCTRINE.md`. Layers whose *content* is scientific are
marked **CANDIDATE — UNAPPROVED**: their structure and criteria are fixed at
Gate 0; their members are admitted only after Gate 1 (literature) and Gate 2
(falsification).

---

## 1. Category Ownership

**Physical-Sign Intelligence** — the governed evaluation of which physical
properties of the body can be made *digitally palpable*: sensed, represented,
transmitted, compared or interpreted computationally — and by which modality,
within which limits, on what evidence.

The asset owns the question *"which physical states of the body can be made
computationally legible, and how well?"* and redefines digital health's answer
away from vital-sign scalars toward governed physical-sign representation.

---

## 2. Category Language

The vocabulary the asset originates and intends others to adopt. Terms marked
**(O)** are original to the asset; **(F)** are inherited from the field and
given a governed definition. Full register in `CATEGORY_LANGUAGE.md`.

- **Digital Palpability (O)** — the extent to which a physical property of the
  body can move from a sensed/physically-interacted state to a digital
  representation that can be measured, transmitted, compared or interpreted. The
  headline term. A conceptual framing, never a score.
- **Physical Sign (O, framing)** — a mechanical, structural or tactile property
  of the body that can carry information about bodily state, positioned as the
  counterpart to a vital sign.
- **Physical-Sign Intelligence (O)** — the category: governed knowledge of the
  physical-sign → representation transition.
- **Physical Sign Map (O)** — the asset's ontology: the governed mapping of
  physical property × sensing modality × representation × evidence × limits.
- **Computational Legibility (O, framing)** — the property of a bodily state
  being resolvable into structured, interpretable data.
- **Representation Gap (O)** — the part of a physical property that a given
  sensing/representation pipeline does *not* capture. A first-class output.
- **Physical-State Representation Integrity (O)** — what must be preserved for a
  claim "this system represents physical sign X" to be meaningful. The property
  the Standard governs.
- **Sensing Modality (F)** — a physical mechanism by which a property is
  transduced (robotic palpation, elastography, force/tactile sensing, strain
  sensing, wearable mechanical sensing, imaging); given governed entries here.
- **Palpation (F)** — clinical manual examination; the historical anchor, given
  a bounded definition so the asset does not collapse back into "palpation
  education" (`DECISION_LOG.md` DEC-001).

Discipline rule: every term must be precise enough to resist casual substitution
and natural enough that a wearable, robotics or health-AI company's own docs
could adopt it without crediting the source. When that adoption happens, the
asset has won (Buyer Logic, signal 2).

---

## 3. Ontology

**Name:** **Physical Sign Map** — the Physical Sign × Sensing Modality Map.

**What it classifies:** the *representability* of physical bodily properties —
which properties, by which modalities, produce which digital representations,
with which evidence and which limits. It does **not** classify diseases,
diagnoses, or clinical outcomes (out of scope, per the Claims Boundary).

**Structure (fixed at Gate 0):** for each physical property, the Map records:

    Physical property
      → observable interaction
      → sensing modalities
      → digital representation type(s)
      → evidence-supported capabilities
      → known limitations / representation gap
      → source provenance
      → related properties & modalities

**Candidate top-level classes — UNAPPROVED (admitted at Gate 2):**
Mechanical response · Structural state · Surface state · Spatial relation ·
Dynamic response. These are *candidate* organising axes drawn from the concept
list of v0.1; none is approved until literature review (Gate 1) and
falsification (Gate 2). See `CLASSIFICATION_ARCHITECTURE.md` for entry criteria
and the falsification process.

**Versioning rule:** append-aware and versioned. A class enters only via the
documented entry criteria, with a `DECISION_LOG.md` entry and a stable
identifier. Definitions may be refined but never silently repurposed.

---

## 4. Standard

**Name:** **Physical-State Representation Integrity Standard.**

**Property governed:** the **integrity of a physical-state representation** — not
the health of the person. The standard answers: when a system claims to
represent a physical sign, what must be preserved for that claim to be
meaningful? This deliberate scoping keeps the asset clear of diagnostic and
longevity claims (`CLAIMS_BOUNDARY.md`).

**Candidate integrity dimensions — UNAPPROVED (confirmed at Gate 2, after
literature):** observability · physical provenance · measurement traceability ·
spatial context · temporal context · uncertainty · representation fidelity ·
comparability.

**No score in v0.x.** The standard states what a *sound* representation is; it
does not emit a number, band, or grade for a person or a product. Any scoring is
a later-gate decision requiring its own governance review and would apply to
representation integrity, never to health status.

---

## 5. Protocol

**Name:** **Physical Sign Legibility Protocol.**

**Inputs (bounded, no free-text scoring):** a physical property; a sensing
modality (or use context); the representation produced; spatial/temporal context;
and the evidence level available.

**Steps:**
1. Capture the inputs through the bounded structure above.
2. Map the property × modality to the Physical Sign Map entry.
3. Determine, from evidence, what the pipeline **captures**.
4. Determine what remains **unrepresented** — the representation gap.
5. Identify which integrity dimensions are **satisfied / unverified / absent**.
6. Return: captured properties, representation gap, evidence-supported claims,
   and the references that support each.

**Reproducibility:** the mapping is a published rule set over the ontology and
standard, with no operator discretion. Two competent operators applying it to
the same input must produce the same captured/gap/evidence result. Any input
that does not resolve deterministically is a protocol defect, not a judgement
call. **The protocol never outputs a diagnosis or a health verdict** — it
produces intelligence about the *sensing/representation architecture*.

---

## 6. Engine

**Name:** **Digital Palpability Mapper.**

- **Phase 1 form:** a fully static, client-side, rules-based tool — no server, no
  model inference, no randomness. Outputs are deterministic consequences of the
  published protocol rule set. Complies with the asset's static-first / security
  doctrine (`PUBLICATION_STANDARD.md`).
- **Input:** *"What physical state are you trying to make legible?"* — the user
  (typically a MedTech / wearable / robotics / digital-health team) selects a
  property (stiffness, elasticity, deformation, pressure, mobility, …) and a
  modality or use context.
- **Output:** property → observable interaction → sensing modalities → digital
  representations → evidence-supported capabilities → known limitations →
  reference pages.
- **Output links:** every output resolves into the reference layer — each
  property, modality, capability and limitation links to its governed page. An
  output that points nowhere is forbidden (it would be opinion, not
  intelligence).
- **Deferred to later phases:** structured data / API access (property ↔ modality
  ↔ representation ↔ evidence as JSON), the governed Physical-Sign Technology
  Landscape, and coverage-audit intake. None ships before structural integrity is
  validated (Gate 5).

The engine sells **depth**, never **conclusions**: the free Mapper returns a
real, complete map. Paid layers extend analysis; they do not unlock a withheld
verdict (`MONETIZATION_DOCTRINE.md`).

---

## 7. Respectable Income

Revenue is a consequence of authority, never a substitute for it. No income layer
activates before structural integrity is validated (Gate 5 / monetization gate).
Full doctrine in `MONETIZATION_DOCTRINE.md`. In phase order:

| Phase | Output | Sold to | Why it raises trust |
|-------|--------|---------|---------------------|
| Free | **Digital Palpability Mapper (basic)** | Anyone | Builds authority, adoption of the language, and backlinks; the map is complete and honest. |
| Paid depth | **Digital Palpability Brief** | MedTech / wearable / robotics teams | Extends a real free map with a deeper property × modality × evidence landscape — a reference artifact a buyer keeps. |
| B2B | **Physical-Sign Coverage Audit** | A specific wearable/robotics/MedTech company | "Which physical states can your system actually represent, and what stays outside digital legibility?" Reference-grade, not a sales funnel. |
| Intelligence | **Physical-Sign Technology Landscape** | Investors, strategy teams | Governed vendor/research intelligence over the ontology. |
| Later | **Structured data / API access** | Platforms, agents | Property ↔ modality ↔ representation ↔ evidence, machine-readable. |
| Later still | **Taxonomy / standard / reference-data licensing** | Platforms, standards bodies | Licensing the frame — the purest expression of category ownership; only with real adoption. |

Forbidden (Interface Governance + monetization gates): sidebar/affiliate banners,
urgency widgets, pop-up capture interrupting doctrine, "book a consultation" on
every page, any monetization that converts the Mapper into a lead-capture trap.
**The factory may sell depth. It may never sell conclusions.**

---

## 8. Strategic Buyer

Full analysis in `BUYER_LOGIC.md`. Top three:

| Rank | Buyer category | Existing problem this asset answers |
|------|----------------|-------------------------------------|
| 1 | Wearable / digital-health platforms moving beyond vital-sign dashboards | Their vital-sign axis is commodity; they need an owned, credible frame for the *next* axis (physical signs) and would rather own the one being adopted than cite a competitor's. |
| 2 | Medical robotics / tactile & haptic sensing companies | They build physical-property sensing but have no governed language, standard, or map that positions their capability within "physical-sign intelligence." |
| 3 | Medical imaging / elastography & digital-examination platforms | They quantify mechanical tissue properties but lack a published frame connecting those to a broader physical-sign category and its evidence map. |

Secondary: health-AI platforms, sensor manufacturers, longevity companies
seeking to move past vital-sign dashboards, and institutional entrants.

Per `BUYER_LOGIC.md`: this is an **acquisition** target, not a sale. The
construction goal is an asset a strategic buyer recognises as something they
would *need to build* if they did not acquire it — priced from replacement cost,
not a revenue multiple.

---

## 9. The Loss Question

**Why is not acquiring this asset a structural loss?** Because the parts that
create the position cannot be rebuilt quickly:

- **The name.** `palpating.com` — one word, one `.com` — states the category's
  axis. A later entrant cannot acquire it and must argue *around* it.
- **The language.** Once *Digital Palpability*, *Physical Sign*, and *Physical
  Sign Map* are adopted, the buyer who does not own the source must speak
  someone else's vocabulary about their own product.
- **The ontology and standard.** A versioned Physical Sign Map and a
  representation-integrity standard take domain understanding and time to build
  at equivalent precision — not a tutorial.
- **The property × modality × evidence dataset.** A governed, evidence-linked map
  is disciplined accumulation, not a sprint.
- **The mapper.** A deterministic engine whose every output resolves to
  reference pages is a different object from a chatbot.
- **Accumulated reference, link graph, and governance record.** Version history,
  decision logs, and claim discipline are what make the asset *trusted* when
  anyone can generate text. That record cannot be back-dated.
- **Agent-legibility footprint.** Stable URLs, consistent identifiers, and
  structured summaries mean that when AI agents answer "which physical
  properties can be sensed digitally, and how?", the governed source wins.

A competitor could build *a* physical-sensing site. They could not build *this*
name, this adopted language, this accumulated governed reference, this mapper,
and this agent-legible position — without years, and the risk that the category
is already claimed.

---

## 10. Interface Embodiment

**The thesis to embody:** the physical state of the body becoming a signal and a
representation — *touch made legible*.

**The one system that makes it felt:** the interface behaves like a **sensitive
surface**, driven by the sequence **Contact → Deformation → Signal →
Representation**. Colour is a *state machine*, not a palette: a value appears
because something happened (a contact, a deformation, a capture), not because a
designer wanted an accent. Motion is the visual *evidence of physical response*,
never decoration. Full specification in `INTERFACE_THESIS.md`, tokens and
components governed by `DESIGN_SYSTEM_GOVERNANCE.md`.

**Mandatory interface test (`INTERFACE_GOVERNANCE.md`):**
1. **Concept alignment** — the surface *is* the argument (physical state →
   signal → representation). Pass.
2. **Performance** — static, client-side, deterministic; state transitions only;
   `prefers-reduced-motion` respected. Pass.
3. **Coherence** — every colour and motion has a declared role, derivable from
   the design system. Pass.

Prohibited patterns (hero-over-stock-photo, chat widget, urgency timers,
testimonial carousels, interrupt pop-ups, acquisition-urgency framing) are
rejected unconditionally.

---

## 11. Execution Sequence

Dependency-ordered; no entry parallelised for speed
(`SOVEREIGN_ASSET_EXECUTION_ORDER.md`). Each entry is completable and verifiable;
none depends on an unapproved layer.

1. **Gate 0 — Sovereign Foundation** (this document set): thesis, language,
   classification criteria, standard scope, protocol shape, reference-layer
   policy, governance, interface thesis, monetization/buyer/acquisition doctrine.
   *In progress.*
2. **Remove acquisition-urgency framing** from the v0.1 interface
   (`ACQUISITION_READINESS.md`) — the one live correction Gate 0 authorises.
3. **Gate 1 — Scientific landscape research**: governed source corpus; candidate
   classes tied to evidence. No taxonomy is approved here.
4. **Gate 2 — Governed taxonomy**: falsify candidate classes; admit approved
   Physical Sign Map classes with entry criteria and IDs.
5. **Gate 3 — Design system rebuild**: token set + component grammar embodying
   Contact → Deformation → Signal → Representation, before any page is rebuilt.
6. **Gate 4 — Reference layer**: build the governed reference graph; seed to
   minimum viable entry set, each meeting admission criteria; no orphans.
7. **Gate 5 — Deterministic mapper + structural integrity validation**: build the
   Digital Palpability Mapper; validate ontology ↔ standard ↔ protocol ↔ engine ↔
   interface consistency before any public exposure.
8. **Gate 6 — Monetizable intelligence outputs**: activate free Mapper; then
   Brief, Coverage Audit, Landscape — depth only, after the monetization gate.
9. **Gate 7 — Category adoption / acquisition readiness**: track adoption signals;
   consider disposition only from a position of strength.

---

**Decision log reference:** an entry is required in `DECISION_LOG.md` when this
plan moves from Draft to Approved or is versioned beyond 0.1.

*Plan maintained under the Sovereign Asset System.*
