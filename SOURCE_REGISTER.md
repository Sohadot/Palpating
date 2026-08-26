# Source Register — v0.2 (Governed Asset Layer)

**Status:** Rewritten as the governed source layer at **Gate 2A close**
(`research/gate-2/source-admission.md`, `DECISION_LOG.md` DEC-017/DEC-018).
**Governed by:** `SOURCE_GOVERNANCE.md`, `CLAIMS_GOVERNANCE.md`.

Rules enforced here:
- **One bibliographic work = one source record.** Composite research evidence
  objects were split before admission.
- Only **canonical** or **supporting** records may bear public reference claims;
  **canonical** is the *governing* source for a claim, **supporting** is not.
- Research evidence objects live in `research/gate-1/evidence-objects.md`; each
  admitted record keeps an `origin_evidence_object` field for provenance. Research
  IDs (`E-nn`) are **not** public-authority IDs.
- Every **canonical claim** (`CL-nn`) resolves to exactly one governing record
  (see the Claim Index).

**Record fields:** title · year · source type · authority class · status · claim
directness · admitted claim IDs · governing use · prohibited extrapolations ·
durable locator · verification date · origin · supersession.

Verification date for this pass: **2026-08-26**.

---

## 1. Canonical sources (governing claim-bearers)

### S-003 — Soft sensing and haptics for medical procedures
- **Year:** 2024 · **Type:** review (Nature Reviews Materials) · **Authority:** review · **Status:** canonical
- **Claim directness:** direct · **Admitted claims:** CL-12
- **Governing use:** tactile information and haptic feedback are active engineering concerns in medical procedures.
- **Prohibited extrapolations:** does not establish "Digital Palpability"; not a diagnostic claim.
- **Locator:** https://www.nature.com/articles/s41578-024-00653-6 · **Origin:** register v0.1 · **Supersession:** —

### S-006 — Reproducibility of shear-wave elastography in muscle
- **Year:** 2022 · **Type:** primary (methodological) · **Authority:** primary · **Status:** canonical
- **Claim directness:** direct · **Admitted claims:** CL-01
- **Governing use:** SWE stiffness is operator/probe-force dependent (~1.5 N shifts repeatability); only moderately reproducible in clinical-like settings.
- **Prohibited extrapolations:** no device/force-independent stiffness values.
- **Locator:** https://pmc.ncbi.nlm.nih.gov/articles/PMC9512333/ · **Origin:** E-02 · **Supersession:** —

### S-007 — MR elastography: soft-tissue mechanics to diagnostic imaging
- **Year:** 2022 · **Type:** review (Nature Reviews Physics) · **Authority:** review (authoritative) · **Status:** canonical
- **Claim directness:** direct · **Admitted claims:** CL-02
- **Governing use:** MRE reconstructs quantitative viscoelasticity maps of whole organs; clinically used for liver fibrosis.
- **Prohibited extrapolations:** maps carry loading/motion bias; not scanner/frequency-interchangeable; not a diagnosis of a person.
- **Locator:** https://www.nature.com/articles/s42254-022-00543-2 · **Origin:** E-03 · **Supersession:** governs over S-005 for MRE.

### S-008 — Quantitative comparison of in-vivo skin biomechanics devices
- **Year:** 2023 · **Type:** primary (methodological) · **Authority:** primary · **Status:** canonical
- **Claim directness:** direct · **Admitted claims:** CL-03
- **Governing use:** in-vivo skin methods (suction/indentation/shear) disagree; skin is anisotropic (Langer's lines); subcutaneous layers confound indentation-derived modulus.
- **Prohibited extrapolations:** no device-agnostic skin moduli.
- **Locator:** https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10350442/ · **Origin:** E-10 · **Supersession:** —

### S-009 — Myotonometry validity/reliability (systematic review + meta-analysis)
- **Year:** 2021 · **Type:** systematic review · **Authority:** systematic-review · **Status:** canonical
- **Claim directness:** direct · **Admitted claims:** CL-04
- **Governing use (narrowed per DEC-018):** myotonometry supports quantitative assessment of **superficial muscle mechanical/viscoelastic parameters** with reported reliability.
- **Prohibited extrapolations:** does **not** canonize "tone" as a single mechanical quantity; not active tension; not field-standardized; not an outcome.
- **Locator:** https://www.nature.com/articles/s41598-021-84656-1 · **Origin:** E-11 · **Supersession:** —

### S-010 — Validity/reliability of wearable sensors for joint-angle estimation
- **Year:** 2019 · **Type:** systematic review · **Authority:** systematic-review · **Status:** canonical
- **Claim directness:** direct · **Admitted claims:** CL-05
- **Governing use:** IMUs estimate joint angles with good-to-excellent validity vs goniometer/inclinometer — a **kinematic** measurement claim only.
- **Prohibited extrapolations:** validity drops with task complexity / some rotations; this does **not** establish that mobility/ROM "belongs" to Palpating (an Architecture decision, not a source claim).
- **Locator:** https://doi.org/10.3390/s19071555 · **Origin:** E-13 · **Supersession:** —

### S-011 — Model-based elastography: the inverse elasticity problem (survey)
- **Year:** 2012 · **Type:** review (theoretical) · **Authority:** review (authoritative) · **Status:** canonical
- **Claim directness:** direct · **Admitted claims:** CL-06
- **Governing use:** modulus recovery from elastography is an ill-posed inverse problem, non-unique from a single observation, requiring priors/regularizers.
- **Prohibited extrapolations:** reconstructed modulus is not an assumption-free ground-truth property.
- **Locator:** https://iopscience.iop.org/article/10.1088/0031-9155/57/3/R35/meta · **Origin:** E-16 · **Supersession:** —

### S-012 — Muscle tone physiology and abnormalities
- **Year:** 2021 · **Type:** review · **Authority:** review · **Status:** canonical
- **Claim directness:** direct · **Admitted claims:** CL-07
- **Governing use:** muscle tone = passive viscoelasticity + active tonic contraction; "resistance to passive stretch" is a neural-mechanical network, not one scalar; tone ≠ tension.
- **Prohibited extrapolations:** do not treat "tone" as a single measurable mechanical quantity or merge it with "tension."
- **Locator:** https://pmc.ncbi.nlm.nih.gov/articles/PMC8071570/ · **Origin:** E-17 · **Supersession:** —

### S-013 — Cellular mechanotransduction in health and disease
- **Year:** 2023 · **Type:** review (Nature STTT) · **Authority:** review (authoritative) · **Status:** canonical
- **Claim directness:** direct · **Admitted claims:** CL-08
- **Governing use:** mechanobiology/mechanotransduction concerns how cells convert mechanical cues into biochemical signals (biology level) — an adjacent-boundary claim.
- **Prohibited extrapolations:** ≠ tissue-level representation governance (Palpating's layer).
- **Locator:** https://www.nature.com/articles/s41392-023-01501-9 · **Origin:** E-19 · **Supersession:** —

### S-014 — Image Biomarker Standardisation Initiative (IBSI)
- **Year:** 2020 · **Type:** consensus standard (Zwanenburg et al., *Radiology*) · **Authority:** standard · **Status:** canonical
- **Claim directness:** direct · **Admitted claims:** CL-09
- **Governing use:** radiomic **texture features** that quantify tissue heterogeneity have standardized definitions and reference values (internal-structure "texture" as a model-inferred representation).
- **Prohibited extrapolations:** a texture feature is not a diagnosis; radiomics is reproducibility-sensitive; ≠ tactile/surface texture.
- **Locator:** https://doi.org/10.1148/radiol.2020191145 (arXiv:1612.07003) · **Origin:** E-24 (split) · **Supersession:** governs the "texture-as-heterogeneity" claim; AJR/BJR reviews (S-031/S-032) are supporting.

### S-015 — Intraocular pressure measurement: a review
- **Year:** 2022 · **Type:** review (Survey of Ophthalmology) · **Authority:** review · **Status:** canonical
- **Claim directness:** direct · **Admitted claims:** CL-10
- **Governing use:** intraocular pressure is an **intrinsic physiological pressure** (a state of an internal compartment), reconstructed by tonometry via elicited deformation and a model (Imbert-Fick, P = F/A).
- **Prohibited extrapolations:** contact/interface pressure is not intrinsic; tonometric IOP is not assumption-free (depends on corneal properties).
- **Locator:** https://www.sciencedirect.com/science/article/abs/pii/S0039625722000388 · **Origin:** E-25 (split) · **Supersession:** governs over the clinical explainer S-033.

### S-016 — ISO 21920-2:2021 — Surface texture: profile — terms & parameters
- **Year:** 2021 · **Type:** international standard · **Authority:** standard · **Status:** canonical
- **Claim directness:** direct · **Admitted claims:** CL-11
- **Governing use:** surface **texture/roughness** is metrologically defined by standardized profile parameters (Ra/Rq/Rz and successors); the governing standard, replacing ISO 4287.
- **Prohibited extrapolations:** a single parameter (e.g. Ra) does not fully define texture; surface roughness ≠ clinical "tissue texture."
- **Locator:** https://www.iso.org/standard/72226.html · **Origin:** supersedes E-21 (secondary explainer) · **Supersession:** replaces ISO 4287; supersedes E-21.

---

## 2. Supporting sources (valid, non-governing)

- **S-001** — A Minimally Invasive Robotic Tissue Palpation Device · 2024 · primary · supporting · *use:* robotic palpation can quantify soft-tissue stiffness · *not:* diagnosis/longevity/category thesis · https://pmc.ncbi.nlm.nih.gov/articles/PMC11178256/ · origin: register v0.1
- **S-002** — Wearable mechanical & electrochemical sensors · 2024 · review · supporting · *use:* mechanical signals transduced to electrical · *not:* a unified "physical signs" standard · https://www.nature.com/articles/s43246-024-00658-2 · origin: register v0.1
- **S-004** — Hybrid multimodal wearable sensors · 2024 · review · supporting · *use:* trajectory toward multimodal sensing · *not:* more modalities ⇒ better outcomes · https://www.nature.com/articles/s41928-024-01247-4 · origin: register v0.1
- **S-005** — MRE "in a nutshell" · 2024 · review · supporting · *use:* tissue mechanical properties as quantitative parameter maps · *not:* elastography = palpation/Digital Palpability · https://pubmed.ncbi.nlm.nih.gov/39645347/ · origin: register v0.1 · superseded-as-governing-by: S-007
- **S-017** — SWE in musculoskeletal imaging (narrative review) · 2025 · review · supporting · *use:* SWE gives quantitative stiffness · *not:* reproducible without controlled conditions · https://doi.org/10.3390/jcm15124843 · origin: E-01
- **S-018** — Tactile sensing systems for tumor characterization (review) · review · supporting · *use:* tactile systems quantify mechanical properties · *not:* validated diagnosis; phantom→in-vivo automatic · https://ieeexplore.ieee.org/document/9425565/ · origin: E-04
- **S-019** — Tactile-sensation imaging system (breast inclusions) · 2026 · primary (phantom) · supporting · *use:* tactile images estimate size/depth/modulus · *not:* in-vivo validated; full "texture" · https://doi.org/10.3390/bios16020102 · origin: E-05
- **S-020** — Haptic/palpation sensing for robotic surgery (review) · 2026 · review · supporting · *use:* force feedback aids inclusion detection · *not:* solved clinical translation · https://doi.org/10.3390/s26041126 · origin: E-06
- **S-021** — Force-sensorless identification of tissue biomechanical parameters · primary · supporting · *use:* indentation identifies/classifies elasticity · *not:* model-independent or diagnostic · https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9694668/ · origin: E-07
- **S-022** — Wearable strain sensor with thermal management · 2020 · primary (device) · supporting · *use:* strain sensors transduce deformation in real time · *not:* arbitrary bodily deformation; range/sensitivity-limited · https://www.nature.com/articles/s41467-020-17301-6 · origin: E-08
- **S-023** — Skin-like pressure/strain sensors (review) · review · supporting · *use:* skin-like sensors capture pressure/deformation · *not:* contact-pressure signal = intrinsic "pressure state" · https://pmc.ncbi.nlm.nih.gov/articles/PMC8232132/ · origin: E-09
- **S-024** — MyotonPRO validity for wrist stiffness · primary · supporting · *use:* MyotonPRO valid for wrist stiffness (healthy young) · *not:* generalization across joints/populations · https://pubmed.ncbi.nlm.nih.gov/35265831/ · origin: E-12
- **S-025** — IMU upper-extremity ROM (systematic review + meta) · systematic-review · supporting *(downgraded per DEC-018; duplicative governing scope with S-010)* · *use:* IMUs viable for UE ROM; intra-rater excellent · *not:* rotations reliable; inter-rater poor · https://pmc.ncbi.nlm.nih.gov/articles/PMC11503723/ · origin: E-14
- **S-026** — Young's modulus & specific stiffness (Cambridge, reference) · reference/educational · supporting *(downgraded per DEC-018; canonical governing source pending — see Appendix B)* · *use:* modulus is intensive/material, stiffness is extensive/structural · *not:* a peer-reviewed/standard governing citation · https://www-materials.eng.cam.ac.uk/mpsite/properties/non-IE/stiffness.html · origin: E-15
- **S-027** — Validity of the Myotonometer vs passive-stretch/spasticity · primary · supporting · *use:* myotonometry reflects superficial muscle mechanical state · *not:* active tension; deep muscle · https://www.nature.com/articles/srep44022 · origin: E-18
- **S-028** — Definitions of digital biomarkers (systematic mapping, **preprint**) · systematic-mapping (preprint) · supporting *(preprint watch — hold to supporting until peer-reviewed equivalent)* · *use:* digital biomarkers = validated outcome-tied measures; wearables are tools · *not:* raw sensing = biomarker · https://www.medrxiv.org/content/10.1101/2023.09.01.23294897.full.pdf · origin: E-20
- **S-029** — Surface textures modulate tactile perception · primary · supporting · *use:* tactile perception tracks surface micro-geometry · *not:* clinical "texture" beyond micro-geometry · https://iopscience.iop.org/article/10.1088/2051-672X/ae2d7a · origin: E-22
- **S-030** — Estimating biomechanical time-series with wearable sensors (systematic review) · systematic-review · supporting · *use:* wearables estimate kinematics/kinetics (movement science) · *not:* ROM is a tissue mechanical/tactile property · https://pubmed.ncbi.nlm.nih.gov/31795151/ · origin: E-23
- **S-031** — Texture analysis of imaging: what radiologists need to know · review · supporting · *use:* image texture features describe tissue heterogeneity · *not:* governing standard (see S-014); not a diagnosis · https://ajronline.org/doi/10.2214/AJR.18.20624 · origin: E-24 (split)
- **S-032** — Quantitative radiomics studies for tissue characterization (review) · review · supporting · *use:* radiomics technology/methodology for tissue characterization · *not:* governing standard (see S-014) · https://academic.oup.com/bjr/article/90/1070/20160665/7446097 · origin: E-24 (split)
- **S-033** — Tonometry (Cleveland Clinic, clinical explainer) · secondary · supporting *(secondary authority — clinical explainer)* · *use:* IOP is measured non-invasively by tonometry · *not:* a governing scientific source (see S-015) · https://my.clevelandclinic.org/health/diagnostics/22859-tonometry · origin: E-25 (split)

---

## Appendix A — Rejected / superseded

- **E-21** — Surface roughness (Tribonet, secondary explainer) — **REJECTED / SUPERSEDED by S-016 (ISO 21920-2:2021).** Not cited for any public claim. Retained in `research/gate-1/evidence-objects.md` as a research pointer only.

## Appendix B — Open source-acquisition tasks

- **modulus vs structural stiffness** — a peer-reviewed or standard mechanics source
  is needed to *govern* CL-13 (currently unassigned). Until then the distinction is
  carried by supporting source **S-026** only; no canonical claim is issued for it.
  Candidate leads: a biomechanics/biomaterials textbook chapter or a tissue-mechanics
  review that states the intensive/extensive distinction explicitly.
- **IOP primary** — optional: a primary Goldmann/Imbert-Fick source could strengthen
  CL-10 beyond the review S-015 if the claim is ever load-bearing for a public tool.

## Appendix C — Research-only

- None at this pass. All Gate-1 evidence objects are either admitted (§1–2) or
  superseded (Appendix A).

---

## Claim Index (every canonical claim → exactly one governing record)

| Claim | Statement (public, narrow) | Governing source |
|-------|----------------------------|------------------|
| CL-01 | SWE tissue-stiffness values are operator/probe-force dependent | S-006 |
| CL-02 | MRE reconstructs quantitative viscoelasticity maps; clinical in liver | S-007 |
| CL-03 | In-vivo skin mechanical methods disagree; skin is anisotropic; subcutaneous confound | S-008 |
| CL-04 | Myotonometry quantifies superficial muscle mechanical/viscoelastic parameters (reported reliability) | S-009 |
| CL-05 | IMUs represent joint angle (kinematics) with good validity | S-010 |
| CL-06 | Elastography modulus recovery is an ill-posed, non-unique inverse problem | S-011 |
| CL-07 | Muscle tone = passive viscoelastic + active tonic; tone ≠ tension | S-012 |
| CL-08 | Mechanobiology = cellular conversion of mechanical cues to biochemical signals | S-013 |
| CL-09 | Radiomic texture features quantify tissue heterogeneity (standardized) | S-014 |
| CL-10 | Intraocular pressure is an intrinsic physiological pressure, model-reconstructed | S-015 |
| CL-11 | Surface texture/roughness is defined by standardized profile parameters | S-016 |
| CL-12 | Tactile info & haptics are active engineering concerns in medical procedures | S-003 |
| CL-13 | *(reserved)* material modulus (intensive) ≠ structural stiffness (extensive) | **unassigned — Appendix B** |

Every issued canonical claim resolves to exactly one governing record. CL-13 is
reserved and **not** public until a governing source is admitted.
