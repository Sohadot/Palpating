# Gate 1 — Evidence Matrix (Pass 1)

**Status:** Pass 1 · **All candidate structure below is UNAPPROVED.** This matrix
is research output; it does not constitute a Gate 2 ontology. Evidence-strength:
⬤⬤⬤ strong · ⬤⬤ moderate · ⬤ emerging (see `evidence-objects.md`).

The matrix answers, per candidate property: by which **modality** it is sensed,
what **digital representation** results, in what **spatial/temporal context**, and
under what **limitations/uncertainty** — with sources. The rightmost column is the
**Digital-Palpability (DP) strength**: how well-evidenced its computational
legibility is *today*.

---

## The matrix

| Candidate property | Sensing modalities (evidence) | Digital representation | Spatial / temporal context | Key limitations / uncertainty | DP strength |
|---|---|---|---|---|---|
| **Stiffness / elasticity** | SWE (E-01, E-02); MRE (E-03, S-005); robotic palpation / indentation (E-06, E-07, S-001); tactile (E-04) | scalar velocity/kPa; whole-organ elastogram map; elasticity coefficient | point → whole-organ field; static; in-vivo (SWE/MRE) and phantom (tactile) | operator/probe-force dependence (~1.5 N shifts repeatability, E-02); loading/motion bias (E-03); model dependence (E-07); scanner/frequency variance | **⬤⬤⬤** |
| **Deformation / strain** | wearable strain sensing (E-08); skin-like sensors (E-09); wearable mechanical (S-002) | resistance/capacitance change → strain; waveform | surface, localized; dynamic, real-time | limited strain range/sensitivity; motion-specific; placement-dependent (E-08) | **⬤⬤⬤** |
| **Mobility / range of motion** | IMU (E-13, E-14) | joint angle (deg); kinematic time series | joint-level; dynamic | validity drops with task complexity; rotations (shoulder/wrist) unreliable; inter-rater moderate-poor (E-14) | **⬤⬤⬤** |
| **Tone / tension** | myotonometry (E-11, E-12) | oscillation waveform → viscoelastic params | localized muscle; quasi-static | lab-bound; not standardized for field; population/joint generalization unproven (E-11) | **⬤⬤** |
| **Pressure** | skin-like pressure sensing (E-09); wearable mechanical (S-002) | pressure signal (kPa/mbar) | contact surface; dynamic | a captured contact-pressure signal ≠ a diagnostic "bodily pressure state" (E-09) | **⬤⬤** |
| **Texture / surface state** | tactile imaging (E-05); tactile sensing (E-04) | tactile image → size/depth/modulus | localized inclusion; largely phantom | in-vivo validation sparse; "texture" only partially represented (inclusion, not full surface) (E-05) | **⬤** |
| **Resistance** | (indirect: indentation force–deformation, E-07) | force–displacement curve | localized; static | no evidence of "resistance" as a distinct represented sign; likely derived from stiffness/indentation | **⬤ (derived?)** |
| **Asymmetry** | (composite: bilateral IMU/imaging comparison) | derived differential | region/whole-body; static or dynamic | no direct evidence as an atomic physical sign; a comparison operation over other properties | **⬤ (composite?)** |

---

## Per-property Digital-Palpability reading (Q2)

- **Well-evidenced (representable today):** stiffness/elasticity, deformation/strain,
  mobility. Multiple **independent** modalities, quantitative representations, and —
  for stiffness — established clinical use (liver fibrosis via MRE/SWE). These are
  the defensible core of Digital Palpability.
- **Emerging / conditional:** tone/tension (reliable in lab, not standardized);
  pressure (sensing mature, but "bodily pressure state" as a *sign* is
  under-defined); texture (tactile imaging real but mostly phantom/inclusion-scale).
- **Weak / non-atomic:** resistance and asymmetry show no evidence as *distinct*
  represented physical signs. Resistance reads as a facet of stiffness/indentation;
  asymmetry reads as a *comparison operation* over other properties, not a property
  itself.

## Q4 — The universal limit of Digital Palpability

Every modality surveyed shares one structural bound:

> A digital representation of a physical sign is always a **bounded proxy under
> stated assumptions** — never the property itself.

Concretely and repeatedly across the literature: results depend on **applied force
/ loading** (E-02, E-03), on **subcutaneous / adjacent-tissue confounds** (E-10),
on **anisotropy** (E-10), on **motion/respiration** (E-03), on **device and
operator** (E-02, E-14), and on the **phantom-vs-in-vivo** and **lab-vs-field**
gaps (E-05, E-11). This is not a defect to hide — it is precisely why the asset's
instruments are the **Representation Gap** (always report what is *not* captured)
and a **representation-integrity** standard scoped to the *representation*, never
to the person's health (`ASSET_INTELLIGENCE_FACTORY_PLAN.md` §4;
`CLAIMS_GOVERNANCE.md`).

---

## Preliminary falsification verdicts (UNAPPROVED — for Gate 2)

- **Q1 — Category defensibility: PROVISIONALLY DEFENSIBLE.** For the core
  (stiffness/elasticity, deformation/strain, mobility, tone), a *real, converging
  technical substrate* exists: independent modalities producing quantitative
  representations, some in clinical use. This is not a loose grouping. It confirms
  the v0.1 thesis "the category thesis is forward-looking; the technical substrate
  already exists" (`index.html`, Evidence). **Caveat:** the *unifying claim* that
  these constitute one governed category, "Physical-Sign Intelligence," is
  **Palpating's conceptual interpretation, not established science**, and must stay
  marked as such (`CLAIMS_GOVERNANCE.md` type 2).
- **Q3 — Property survival (candidate, for Gate 2 falsification):**
  - *Likely admit:* stiffness/elasticity, deformation/strain, mobility, tone/tension.
  - *Admit with narrowed scope:* pressure (as contact-pressure sensing, not
    "bodily pressure state"); texture (as inclusion/surface detection, not full
    texture).
  - *Candidate to merge or drop:* resistance (into stiffness/indentation);
    asymmetry (reclassify as a derived comparison, not an atomic sign).
- **Candidate organising axes** (from `CLASSIFICATION_ARCHITECTURE.md`, still
  UNAPPROVED): "Mechanical response" is strongly supported; "Structural /
  Surface / Spatial / Dynamic" need Pass 2 evidence before Gate 2 can test them.

## What Pass 1 does **not** do

It does not admit any class, does not set standard dimensions, does not define the
protocol rule table, and does not touch the engine or the public reference layer.
Those are Gate 2+ and occur only after the falsification above is completed against
a deeper corpus.

## Open items for Pass 2

1. Primary sources for **texture** and **pressure-as-sign** to resolve their scope.
2. Evidence for a **dynamic-response** axis (time-varying mechanical behaviour) as
   distinct from static properties.
3. Stress-test the **category edges** (resistance, asymmetry) — confirm merge/drop.
4. Promote admitted evidence objects `E-nn` into `SOURCE_REGISTER.md` under
   `SOURCE_GOVERNANCE.md` before any Gate 2 governance is proposed.
