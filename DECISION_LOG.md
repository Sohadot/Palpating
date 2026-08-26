# Palpating.com — Decision Log

## DEC-001 — Fix the category thesis
**Status:** Binding  
**Version:** v0.1

Palpating.com is positioned around the transition:

> **From vital signs to physical signs.**

The interpretive sentence is:

> **Making the physical state of the body computationally legible.**

The site must not collapse back into a generic guide to manual clinical palpation.

## DEC-002 — Keep Digital Palpability; reject a maturity ladder
**Status:** Binding

“Digital Palpability” is retained as owned conceptual language.

No P0–P5 or equivalent maturity/score ladder will be attached to it in v0.1. The term should remain semantically useful without manufacturing false measurement authority.

## DEC-003 — No PPSO or acronym ontology
**Status:** Binding

The physical-sign landscape may organize examples, but it will not be branded as an acronym-based ontology or pseudo-standard.

## DEC-004 — Claims restraint
**Status:** Binding

Palpating.com will not claim diagnosis, treatment, validated scoring, healthspan extension, lifespan extension, or clinical authority.

## DEC-005 — Interface thesis
**Status:** Binding

The interface must visualize physical state becoming signal and representation. Decorative medical imagery, generic SaaS dashboards, stock doctors, and robot illustrations are out of scope unless they later become necessary evidence-bearing media.

## DEC-006 — Visual identity: mineral / editorial, light-first
**Status:** Binding
**Version:** v0.2

The interface moves off the black + neon-green ("signal-tech") palette, which read as
cyber / AI-lab / crypto-tech and undercut the research-grade positioning.

The visual system is now **light-first, mineral and editorial** — a tactile intelligence
atlas rather than a dark signal lab:

- **Base neutrals:** bone white `#f3f0ea`, stone paper `#e6e1d8`, deep mineral ink `#1a2026`.
- **Accents:** muted surgical blue `#8ea3b0` / deep surgical `#46606f` (links, signal),
  dust teal `#7e9995` (tactile touches), warm tissue beige `#cbbeae` (physical-body layer),
  mineral plum `#726a86` (reserved, rare).
- **Colour carries meaning:** vital signs read cool (deep mineral panel); physical signs
  read warm (tissue beige). Measured physiology vs. embodied properties.
- **Dark is the exception, not the ground:** only the Evidence panel stays dark, as a
  deliberate reference/analytical moment.
- **Acquisition is restrained:** bone background, dark typography, a thin rule and a quiet
  acquire button — acquisition prestige, not a CTA punch.

## DEC-007 — Social sharing (Open Graph) asset
**Status:** Binding
**Version:** v0.2

The link must carry the identity when shared. A purpose-built `og-image.png` (1200×630),
designed in the mineral/editorial system (not a page screenshot), ships with the site, and
`og:*` / `twitter:card` tags are present on the home page and both sub-pages.

---

# GATE 0 — Sovereign Foundation

## DEC-008 — Reclassify the current site; build the asset, not the page
**Status:** Binding
**Version:** v0.2 → v0.x (foundation)

The site live at `palpating.com` is reclassified as **Palpating v0.1 — Thesis
Demonstrator**. It succeeded at discovering and stating the thesis, but measured against
the Category Artifact Standard it lacks the real moat (no governed classification, no
standard, no protocol, no engine, no governed reference layer, no measured adoption).

Decision: stop treating colour / hero as the problem. Do not patch v0.1 cosmetically. Use
it as a discovery artifact and build the correct sovereign system *over* it, gated. See
`ASSET_THESIS.md` §3.

## DEC-009 — Bind to the Sovereign Asset System; Tier 1; adopt Gate 0 document set
**Status:** Binding

Palpating is declared a **Tier 1** asset under the Sovereign Asset System
(`Sohadot/sovereign-asset-system`) and binds to its `FOUNDATION_DOCTRINE.md`: it inherits
the ten Non-Negotiables (instantiated in `PUBLICATION_STANDARD.md`), may be stricter but
never looser, and resolves conflicts toward the stricter rule with a logged decision.

Gate 0 fixes the foundation. This decision adopts the following governing documents:
`ASSET_THESIS.md` (supreme), `ASSET_INTELLIGENCE_FACTORY_PLAN.md`, `CATEGORY_LANGUAGE.md`,
`CLASSIFICATION_ARCHITECTURE.md`, `REFERENCE_LAYER_POLICY.md`, `CLAIMS_GOVERNANCE.md`,
`SOURCE_GOVERNANCE.md`, `PUBLICATION_STANDARD.md`, `SEO_AND_INTERNAL_LINK_GOVERNANCE.md`,
`INTERFACE_THESIS.md`, `DESIGN_SYSTEM_GOVERNANCE.md`, `MONETIZATION_DOCTRINE.md`,
`BUYER_LOGIC.md`, `ACQUISITION_READINESS.md`, `MEASUREMENT_AND_ARCHIVAL.md`. The prior
`CLAIMS_BOUNDARY.md` and `SOURCE_REGISTER.md` are retained as the concrete instances the
governance documents sit over.

## DEC-010 — Category and factory layers named; taxonomy content UNAPPROVED
**Status:** Binding (names); taxonomy/standard/protocol **content unapproved**

- Category owned: **Physical-Sign Intelligence**.
- Ontology: **Physical Sign Map** (physical property × sensing modality × representation ×
  evidence × limits).
- Standard: **Physical-State Representation Integrity** — governs representation integrity,
  **not** human health (a deliberate claims firewall).
- Protocol: **Physical Sign Legibility Protocol** (deterministic; never emits a diagnosis).
- Engine: **Digital Palpability Mapper** (static, rules-based; outputs resolve to reference
  pages).

Binding discipline: all ontology classes, standard dimensions, and protocol mappings are
**candidate / unapproved** and are admitted only after Gate 1 (literature) and Gate 2
(falsification), via the entry criteria in `CLASSIFICATION_ARCHITECTURE.md`. Reaffirms and
extends DEC-002 (no ladder), DEC-003 (no acronym ontology), DEC-004 (claims restraint):
literature → candidate classes → falsification → governed taxonomy. No invented taxonomy
justified after the fact.

## DEC-011 — Remove acquisition-urgency framing from the live interface
**Status:** Binding — **executed** (forward commit; no history rewrite)

The v0.1 interface carries an `#acquisition` section, an "Acquisition inquiry" button, and
an "Acquisition" nav item. This is marketplace / acquisition-urgency framing on an asset
surface, violating Non-Negotiable #10 (No desperation) and Buyer Logic Rule 2 (Build before
revealing). Decision: remove it and replace with a discreet Owner / Contact reference only.
This is the single live interface change Gate 0 authorises; all other interface work is
deferred to the Gate 3 design-system rebuild. Tracked in `ACQUISITION_READINESS.md` §2 and
`ASSET_INTELLIGENCE_FACTORY_PLAN.md` §11.

---

# GATE 1 — Scientific Literature Research

## DEC-012 — Gate 1 commenced: research before classification (Pass 1)
**Status:** In progress — research only; **nothing approved**

Gate 1 begins as literature research to test category defensibility and the limits
of Digital Palpability, per the governing sequence **literature → evidence objects →
candidate classes → falsification → Gate 2**. Deliverable is a governed evidence
matrix across five axes (physical/mechanical property, sensing modality, digital
representation, spatial/temporal context, limitations/uncertainty), under
`research/gate-1/`.

No ontology class, standard dimension, protocol mapping, engine, SEO page, or
interface change is approved or made in this gate (interface is untouched beyond the
already-executed DEC-011). Binding boundary reaffirmed: no Gate 2 governance until
falsification completes against a deeper corpus.

**Pass 1 preliminary findings (UNAPPROVED, recorded for continuity):**
- Category "Physical-Sign Intelligence" is *provisionally defensible*: a real,
  converging technical substrate exists for a core of properties
  (stiffness/elasticity, deformation/strain, mobility, tone) — independent
  modalities, quantitative representations, some in clinical use. The *unifying
  claim* remains Palpating's conceptual interpretation, not established science.
- Universal limit of Digital Palpability: every representation is a **bounded proxy
  under stated assumptions**, never the property itself — validating the
  Representation Gap and a representation-integrity (not health) standard.
- Candidate property survival for Gate 2: likely-admit stiffness/elasticity,
  deformation/strain, mobility, tone; narrow-scope pressure and texture;
  merge/drop candidates resistance (→ stiffness) and asymmetry (→ derived
  comparison). All subject to Gate 2 falsification.

Evidence objects `E-01…E-14` gathered (with mandatory does-not-support boundaries);
promotion into `SOURCE_REGISTER.md` deferred to a governance pass. Existing
`S-001…S-005` remain valid.

## DEC-013 — Gate 1 Pass 2: adversarial falsification; category defensible only if narrowed
**Status:** In progress — research only; **nothing approved**. Gate 1 **not closed**.

Pass 2 attacked Pass 1 rather than extending it (`research/gate-1/pass-2-falsification.md`).
Adjudications (all UNAPPROVED, input to a future Gate 2):

- **Stiffness ≠ elasticity.** Elastic modulus is a *material* (intensive) property;
  stiffness is a *structural* (extensive) response; elastography reconstructs modulus
  via an *ill-posed inverse problem under assumptions* (E-15, E-16). Split into two
  entries joined by an edge; do not treat as synonyms.
- **Tone ≠ tension.** Myotonometry supports only *superficial passive viscoelastic
  tone* (E-17, E-18); "tension" (active force) is dropped as a candidate.
- **Mobility/ROM excluded** from the atomic layer — it is *kinematics*, already owned
  by biomechanics / digital biomarkers (E-20, E-23); admitting it would dissolve the
  category boundary.
- **Contact pressure excluded** — an *interaction-induced* quantity at the sensor
  interface, not an intrinsic property. Rule set: a modality-induced quantity does not
  become a physical sign because a device measures it.
- **Texture narrowed** to *surface micro-geometry/roughness* (ISO 4287; E-21, E-22);
  loose clinical "texture" dropped pending Pass 3.
- **Resistance dropped** as atomic (it is the response relation defining stiffness/tone).
- **Asymmetry** kept outside the atomic layer as a *comparison operator*.

**Adjacent-category uniqueness test (mandate #8):** against biomechanics,
mechanobiology, quantitative imaging/elastography, tactile/haptic sensing, wearable
mechanical sensing, and digital biomarkers, Physical-Sign Intelligence is defensible
**only in its narrow form** — as a *representation-integrity governance layer* over
which *intrinsic* body properties can be faithfully represented and where the
representation breaks. Broad ("any measurable physical state") it collapses into a
renamed intersection of those fields. **The narrowing is what makes the category real.**

**Methodological corrections:** the "DP strength" column is replaced with **Evidence
status** (established / bounded-emerging / insufficient) so Digital Palpability is not
turned into a back-door score (reaffirms DEC-002). Pass 1's "bounded proxy under stated
assumptions" is reframed as an **Observed Cross-Modal Constraint**, now grounded in
inverse-problem/metrology theory (E-16) but **not** declared a universal law.

Primary/theoretical and adjacent-category evidence objects `E-15…E-23` added.
**Gate 1 remains open**; Pass 3 must resolve texture, intrinsic-vs-induced pressure,
a possible dynamic-response property, the modulus↔stiffness representation, and source
promotion before any Gate 2 governance. No ontology/standard/protocol/engine/SEO
approved in this pass.

## DEC-014 — Atomic exclusion does not equal category exclusion (Pass 2.1 interpretive correction)
**Status:** Binding for the remainder of Gate 1. Corrects the *interpretation* of
DEC-013; **DEC-013 is not rewritten** (it remains the record of what Pass 2 found).

Pass 2 correctly showed that several concepts are **not atomic properties**, then
over-reached by treating "not atomic" as "outside Palpating," implicitly shrinking the
category to intrinsic tissue mechanics. Pass 2.1
(`research/gate-1/pass-2-falsification.md`) corrects this. Binding principles:

1. **Atomic exclusion ≠ category exclusion.** Pass 2 narrowed the *atomic-property
   layer*; it did not establish that the Palpating category is limited to intrinsic
   tissue properties. A concept rejected as an atomic property may still belong to
   Palpating as a response, interaction-derived sign, dynamic expression, comparative
   sign, functional expression, or model-inferred representation — **if defensible
   physical provenance exists.**
2. **Exclusion requires absence of provenance.** A concept is excluded from Palpating
   only when *no defensible physical provenance* can be established — not merely
   because it is derived, interaction-dependent, comparative, or dynamic.

**Governing framing (preserved, not narrowed):** Palpating is *the conceptual act of
making physical meaning legible through interaction*; Physical-Sign Intelligence
concerns *how bodily physical meaning can be sensed, elicited, derived, represented and
bounded computationally* — not "intrinsic tissue mechanics." "From vital signs to
physical signs" remains the master framing. The governed chain is *physical meaning →
provenance → elicitation/sensing → representation → interpretation → representation gap*.

**Introduced as UNAPPROVED Pass-3 candidates — Physical Meaning Provenance modes:**
state/material property · structural or elicited response · interaction-derived sign ·
dynamic expression · relational/comparative sign · functional/kinematic expression ·
model-inferred representation.

**Reinterpretation of the Pass 2 adjudications:** pressure = candidate
interaction-derived sign (not atomic intrinsic property); resistance = response
relation; asymmetry = comparative/derived sign; mobility/ROM = functional/kinematic
expression (not atomic tissue property); texture = umbrella to decompose; tone =
overloaded term, underlying mechanical response still under falsification;
stiffness/modulus remain distinct-and-related; strain/deformation remain candidates but
Pass 3 must separate tissue strain from motion-proxy sensor deformation.

Gate 1 will close by **reclassification and boundary definition**, not by deleting every
non-intrinsic concept. No ontology/standard/protocol/engine/SEO approved.

## DEC-015 — Gate 1 Pass 3: provenance architecture, reclassification, boundary; closure recommended
**Status:** In progress — research only; **nothing approved**. **Gate 1 closure
RECOMMENDED, pending user ratification.**

Pass 3 (`research/gate-1/pass-3-provenance.md`) answered the governing question —
*which forms of bodily physical meaning belong to Palpating, and under what
provenance* — and reached these UNAPPROVED conclusions (input to Gate 2):

- **Provenance architecture reshaped.** The seven Pass-2.1 modes conflated two axes;
  Pass 3 replaces them with a **2-axis model: Nature** (State / Response / Dynamic /
  Relational / Functional) **× Access** (Direct / Elicited / Model-inferred /
  Comparative-derived), each concept carrying a mandatory Representation Gap.
- **Full reclassification, nothing deleted.** "Texture" and "pressure" are
  **multi-provenance** (texture → surface roughness / tactile-inclusion / internal
  heterogeneity, E-21/E-22/E-04/E-05/E-24; pressure → intrinsic IOP-type *state*, E-25,
  vs contact-interface, E-09). Modulus/stiffness distinct-and-related; strain must be
  split into tissue strain vs motion-proxy; viscoelasticity supports a Dynamic nature.
- **Boundary defined.** Palpating owns the *binding layer* (physical meaning →
  provenance → elicitation/sensing → representation → interpretation → representation
  gap); it does not own biomechanics, mechanobiology, imaging/elastography,
  tactile/haptic sensing, wearables, or digital biomarkers. **Inclusion rule:**
  defensible physical provenance (a Nature×Access pair with evidence + named gap).
  **Exclusion rule:** *no* provenance — a device artifact, or pure performance/
  kinematics with no physical binding. Derivedness/interaction/comparison/dynamics are
  not grounds for exclusion (DEC-014).
- **Cross-modal constraint sharpened:** a representation is bounded by its access
  mode's assumptions; the mandatory gap grows model-inferred > elicited > direct.
  Remains an Observed Cross-Modal Constraint (now with a mechanism), not a law.

Evidence objects `E-24…E-25` added (radiomics texture; intraocular-pressure/tonometry).
**Gate 1 is recommended for closure but not declared closed** — the Gate 1→Gate 2
transition is a user decision. No ontology class, standard dimension, protocol rule,
engine logic, or SEO page is approved. First recommended Gate 2 action: promote
`E-01…E-25` into `SOURCE_REGISTER.md`.

---

# GATE 2 — Category Architecture

## DEC-016 — Gate 1 closed; Gate 2 authorized (with three reservations)
**Status:** Binding. **Gate 1 is CLOSED. Gate 2 is authorized.**

Gate 1 is closed by user ratification. Its question was *"is there a defensible
category worth building?"* — answered **yes**:
1. a real evidenced substrate (not a linguistic story);
2. survival of adjacent-category falsification (biomechanics, mechanobiology,
   elastography, haptics, wearables, digital biomarkers) **without** killing category
   breadth;
3. a defensible boundary (defensible physical provenance required);
4. escape from the Pass-2 trap: **non-atomic ≠ non-Palpating** (DEC-014).

> **Gate 1 establishes category defensibility, not final ontology correctness.**

**Survived as UNAPPROVED input to Gate 2:** Physical Meaning Provenance; the
Nature × Access candidate architecture; concept × context classification; the
Representation Gap requirement; the broad-but-bounded category thesis; inclusion via
defensible physical provenance; the adjacent-field boundary; the multi-provenance
reading of terms such as pressure and texture.

**NOT approved (explicitly open for Gate 2):** final Nature classes; Access as ontology
axis vs protocol metadata; the Functional admission rule; Dynamic as an independent
class; **any ordinal gap hierarchy**; the final Standard; the final Protocol; the final
Engine mapping.

### Three binding reservations (correct Pass 3 wording; applied in `pass-3-provenance.md`)
- **R1 — Nature × Access is input, not sacred.** State/Response/Dynamic/Relational/
  Functional are candidates; Relational and Functional may not sit at the same
  ontological level as State/Response. Gate 2 decides.
- **R2 — No ordinal Representation-Gap hierarchy.** "model-inferred > elicited > direct"
  is **withdrawn**. Ratified instead: *access mode determines the kinds of assumptions
  and uncertainty that must be disclosed.* Gate 2 builds a **gap-type taxonomy**
  (transduction / interaction / reconstruction / model / spatial-sampling / temporal /
  calibration / comparator-baseline gap), not a magnitude ranking.
- **R3 — No universal ownership claim.** Replace "nobody owns this layer" with *"no
  equivalent governed binding layer was identified in the adjacent corpus tested during
  Gate 1"* (claims-governance discipline).

### Conceptual spine (now four layers)
1. **From vital signs to physical signs** — why the category exists.
2. **Digital Palpability** — what can become computationally legible.
3. **Physical Meaning Provenance** — where that meaning comes from.
4. **Representation Gap** — what did not survive the translation.

### Gate 2 sub-sequence (ontology does NOT start first)
- **2A — Source Admission** (a gate, not bulk promotion; see DEC-017).
- **2B — Admission Rule** (what makes a concept belong to Palpating).
- **2C — Physical Meaning Provenance Architecture** (are the Nature classes right;
  multi-provenance handling).
- **2D — Representation Gap Taxonomy** (a sovereign element).
- **2E — Formal Classification Table** (only after the rules are stable).
- **2F — Standard Candidate** · **2G — Protocol Candidate** · then Engine.

## DEC-017 — Gate 2A: Source Admission Gate (no bulk promotion)
**Status:** In progress. Adjudication recorded; register promotion executes verdicts.

Rejecting Pass 3's "promote `E-01…E-25` in bulk." Sources are not equal in authority.
The first Gate 2 operation is a **Source Admission Gate** (`research/gate-2/source-admission.md`)
that gives every source a verdict — **ADMIT–canonical / ADMIT–supporting / RETAIN–research-only
/ REJECT–supersede** — plus source type, authority class (primary / standard / systematic
review / review / secondary), claim directness, admitted claim IDs, prohibited
extrapolations, durable locator, verification date, and supersession relation. Only
ADMIT verdicts may bear public reference claims; RETAIN stays research-only; REJECT names
its replacement. `SOURCE_REGISTER.md` thereby becomes a governed **asset layer**, not a
list. No ontology/standard/protocol/engine/SEO approved.

## DEC-018 — Gate 2A closed: source register rewritten as a governed asset layer
**Status:** Binding. **Gate 2A is CLOSED.** No ontology/standard/protocol/engine/SEO approved.

User review of the 2A adjudication applied these changes (the "13 canonical" figure was
**not** a target — best-available governing source per claim was the test):

- **E-15 → supporting** (`S-026`): Cambridge page is reference/educational, not a
  peer-reviewed/standard mechanics source. Governing source for modulus-vs-structural-
  stiffness (**CL-13**) is an **open acquisition task**; no canonical claim issued.
- **E-14 → supporting** (`S-025`): duplicative governing scope with `S-010` (E-13),
  which governs the kinematic joint-angle claim (CL-05).
- **E-11 → canonical, narrowed** (`S-009`): claim reworded to "superficial muscle
  mechanical/viscoelastic parameters with reported reliability"; does **not** canonize
  "tone" as a single mechanical quantity.
- **E-24 split** (one work = one record): `S-014` = **IBSI (Zwanenburg et al.,
  *Radiology* 2020)**, a consensus **standard**, governs texture-as-heterogeneity
  (CL-09); AJR/BJR reviews `S-031`/`S-032` supporting.
- **E-25 split:** `S-015` = *Intraocular pressure measurement: a review* (Survey of
  Ophthalmology) governs CL-10; Cleveland explainer `S-033` supporting/secondary.
- **E-21 rejected; supersession resolved:** `S-016` = **ISO 21920-2:2021** (standard,
  replaces ISO 4287) governs CL-11.
- Confirmed canonical for narrow claims: `S-003`, `S-006`, `S-007`, `S-008`, `S-011`,
  `S-012`, `S-013`.

**ID discipline:** one bibliographic work = one record; fresh `S-nnn` per admitted work;
research `E-nn` IDs are not public-authority IDs; each record keeps `origin_evidence_object`;
each canonical claim `CL-nn` resolves to exactly one governing record (register Claim
Index). Two standards now govern (IBSI, ISO 21920-2), raising authority.

`SOURCE_REGISTER.md` is now **v0.2 (Governed Asset Layer)**. No public reference page may
cite a source outside it. **Next: Gate 2B — Admission Rule**, to be built on this settled
corpus.

## DEC-019 — Gate 2B: the Admission Rule (concept × context; 7 gates; deterministic)
**Status:** Candidate — recommended for closure, **pending user ratification**. On
ratification it promotes into `CLASSIFICATION_ARCHITECTURE.md` as binding.
`research/gate-2/admission-rule.md`.

The Admission Rule is built **beneath the ontology** so it survives any Gate-2C
restructuring of the `Nature × Access` classes; it tests *admissibility*, not class
membership.

- **Unit of admission = `concept × context`, never word-level** (binding rule). A word
  is decomposed into concept×context pairs, each tested alone.
- **Seven gates:** G1 physical referent · G2 context specificity · G3 defensible
  provenance · G4 admitted evidentiary support · G5 representation path · G6 named
  Representation Gap · G7 boundary integrity.
- **Deterministic verdicts (no scores): ADMIT / CONDITIONAL / EXCLUDE**, by an ordered
  procedure. **EXCLUDE is reachable only via** G1 (no referent / device artifact), G3
  (no defensible provenance), or a G7 unbound-performance/kinematics breach. G2 failure
  routes to **DECOMPOSE**. Per DEC-014, being derived/comparative/interaction-dependent/
  dynamic/non-atomic is **never** an EXCLUDE reason.
- **Validated against 14 edge cases** (modulus, structural stiffness, tissue strain,
  motion-proxy sensor deformation, intraocular vs contact pressure, resistance, asymmetry,
  ROM, superficial muscle mechanical state, clinical "tone", surface roughness, radiomic
  texture, tactile inclusion response), each with context/referent/provenance/evidence
  IDs/representation path/gap/verdict/reason. **Contact pressure** and **ROM** each yield
  two verdicts by context; **clinical "tone"** decomposes — the concept×context rule
  working. Result: 7 ADMIT, 5 CONDITIONAL, 3 EXCLUDE (by context), 1 DECOMPOSE.
- **Reproducibility** secured by the ordered gates + a closed EXCLUDE list + a G7
  tie-breaker ("if the physical binding cannot be *named*, functional-context =
  CONDITIONAL, pure-performance = EXCLUDE"). The one residual judgment point (operational
  definition of Functional "binding") is a Gate-2C item.

No ontology class, Standard dimension, Protocol rule, Engine logic, or SEO page approved.
**Next: Gate 2C — Provenance Architecture.**
