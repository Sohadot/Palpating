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
