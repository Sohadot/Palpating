# Gate 2A — Source Admission

**Status:** Adjudication complete; **register promotion executes these verdicts**
(a separate, reviewable step). Governed by `SOURCE_GOVERNANCE.md`, `CLAIMS_GOVERNANCE.md`,
`DECISION_LOG.md` DEC-017.

Rejecting bulk promotion. Every source earns a place by verdict. A source may bear a
**public reference claim only if ADMIT**; RETAIN stays research-only; REJECT names its
replacement. This turns `SOURCE_REGISTER.md` into a governed asset layer.

---

## Verdict classes
- **ADMIT — canonical** — strong enough to carry a claim *as the governing source*.
- **ADMIT — supporting** — valid support, not the governing source for its claim.
- **RETAIN — research only** — useful in research; **not** for public reference authority.
- **REJECT / SUPERSEDE** — a better source exists or a quality/authority problem stands;
  names the replacement.

## Authority classes
primary · standard · systematic-review · review · secondary.

## Fields recorded per admitted source (schema for the register rewrite)
source id · title · source type · authority class · **claim directness** (does it state
the claim directly, or is it inferred?) · admitted claim id(s) · **prohibited
extrapolations** (from each object's *does-not-support*) · durable locator · verification
date · supersession relation.

---

## Adjudication

Verification date for all rows: **2026-08-26** (Gate 1–2A research window).

| ID | Short title | Type / Authority | Verdict | Governing claim it may carry | Key prohibited extrapolation |
|----|-------------|------------------|---------|------------------------------|------------------------------|
| S-001 | Robotic tissue palpation device | primary | **ADMIT–supporting** | robotic palpation can quantify soft-tissue stiffness | not diagnosis/longevity; single device |
| S-002 | Wearable mechanical & electrochemical sensors | review | **ADMIT–supporting** | mechanical signals can be transduced to electrical | no unified "physical signs" standard |
| S-003 | Soft sensing & haptics for medical procedures | review (authoritative) | **ADMIT–canonical** | tactile info & haptics are active engineering concerns | does not establish "Digital Palpability" |
| S-004 | Hybrid multimodal wearable sensors | review | **ADMIT–supporting** | trajectory toward multimodal sensing | more modalities ≠ better outcomes |
| S-005 | MRE "in a nutshell" | review | **ADMIT–supporting** *(superseded as governing by E-03)* | MRE maps tissue mechanical properties | elastography ≠ palpation/Digital Palpability |
| E-01 | SWE in MSK (narrative review) | review (narrative) | **ADMIT–supporting** | SWE gives quantitative stiffness | not reproducible without controlled conditions |
| E-02 | SWE reproducibility | primary (methodological) | **ADMIT–canonical** | SWE stiffness is force/operator-dependent (~1.5 N) | no device/force-independent values |
| E-03 | MRE — Nature Reviews Physics | review (authoritative) | **ADMIT–canonical** | MRE reconstructs viscoelasticity maps; clinical (liver) | maps carry loading/motion bias; not interchangeable |
| E-04 | Tactile sensing for tumors (review) | review | **ADMIT–supporting** | tactile systems quantify mechanical properties | phantom→in-vivo not automatic; not diagnostic |
| E-05 | Tactile-sensation imaging (breast) | primary (phantom) | **ADMIT–supporting** | tactile images estimate size/depth/modulus | in-vivo unvalidated; not full "texture" |
| E-06 | Haptics/palpation in robotic surgery | review | **ADMIT–supporting** | force feedback aids inclusion detection | translation (miniaturisation/sterilisation) unsolved |
| E-07 | Force-sensorless tissue params | primary | **ADMIT–supporting** | indentation identifies elasticity | model-dependent; not diagnostic |
| E-08 | Wearable strain sensor (Nat Commun) | primary (device) | **ADMIT–supporting** | strain sensors transduce deformation in real time | limited range/sensitivity; motion-specific |
| E-09 | Skin-like pressure/strain (review) | review | **ADMIT–supporting** | skin-like sensors capture pressure/deformation | contact-pressure signal ≠ intrinsic "pressure state" |
| E-10 | In-vivo skin biomechanics comparison | primary (methodological) | **ADMIT–canonical** | in-vivo skin methods disagree; skin is anisotropic; subcutaneous confound | no device-agnostic skin moduli |
| E-11 | Myotonometry validity (meta-analysis) | systematic-review | **ADMIT–canonical** | myotonometry quantifies superficial viscoelastic tone reliably | not field-standardised; not an outcome |
| E-12 | MyotonPRO wrist validity | primary | **ADMIT–supporting** | MyotonPRO valid for wrist stiffness (healthy young) | no generalisation across joints/populations |
| E-13 | IMU joint-angle validity (syst. review) | systematic-review | **ADMIT–canonical** | IMUs estimate joint angles (good–excellent) | drops with task complexity; *kinematics*, not tissue property |
| E-14 | IMU upper-extremity ROM (meta) | systematic-review | **ADMIT–canonical** | IMUs viable for UE ROM; intra-rater excellent | rotations unreliable; inter-rater moderate–poor |
| E-15 | Stiffness vs modulus (Cambridge) | reference (definitional) | **ADMIT–canonical** | modulus is material (intensive); stiffness is structural (extensive) | do not conflate the two quantities |
| E-16 | Elastography inverse problem (survey) | review (theoretical) | **ADMIT–canonical** | modulus recovery is ill-posed; non-unique; needs priors | reconstructed modulus is not assumption-free truth |
| E-17 | Muscle tone physiology | review | **ADMIT–canonical** | tone = passive viscoelastic + active tonic; ≠ tension | not one mechanical scalar; ≠ "tension" |
| E-18 | Myotonometer vs spasticity | primary | **ADMIT–supporting** | myotonometry reflects superficial muscle mechanical state | not active tension; not deep muscle |
| E-19 | Cellular mechanotransduction | review (authoritative) | **ADMIT–canonical** | mechanobiology = cellular mechano→biochemical (biology level) | ≠ tissue-level representation governance |
| E-20 | Digital-biomarker definitions (mapping) | systematic-mapping (**preprint**) | **ADMIT–supporting** | digital biomarkers = validated, outcome-tied measures | preprint; raw sensing ≠ biomarker |
| E-21 | Surface roughness (Tribonet) | secondary | **REJECT / SUPERSEDE** → **ISO 4287** (locate in 2B/2C) | secondary explainer; do not cite for a public standard |
| E-22 | Textures modulate tactile perception | primary | **ADMIT–supporting** | tactile perception tracks surface micro-geometry | no clinical "texture" sign beyond micro-geometry |
| E-23 | Biomechanical time-series wearables (syst. review) | systematic-review | **ADMIT–supporting** | wearables estimate kinematics/kinetics (movement science) | ROM is not a tissue mechanical/tactile property |
| E-24 | Radiomics texture analysis | review | **ADMIT–canonical** | image texture features quantify tissue heterogeneity | indirect; reproducibility-sensitive; not a diagnosis |
| E-25 | Intraocular pressure / tonometry | review | **ADMIT–canonical** | IOP is an intrinsic physiological pressure (state), model-reconstructed | contact/interface pressure ≠ intrinsic; assumes corneal props |

---

## Outcome

- **Canonical claim-bearers (13):** S-003, E-02, E-03, E-10, E-11, E-13, E-14, E-15,
  E-16, E-17, E-19, E-24, E-25 — the sources allowed to *govern* a public claim.
- **Supporting (majority):** valid, non-governing.
- **Superseded queue:** **E-21 → ISO 4287** (a real standard must replace the secondary
  explainer before any public "roughness/texture" claim). This is the admission gate
  doing its job — a weak source caught before it could carry authority.
- **Preprint watch:** E-20 (digital-biomarker definitions) — supporting only until a
  peer-reviewed equivalent is admitted.

## Execution (next, reviewable step)
Rewrite `SOURCE_REGISTER.md` to the schema above, promoting only ADMIT verdicts, moving
RETAIN/REJECT to a research/superseded appendix, and adding the ISO 4287 acquisition as
an open task. **No public reference page may cite a source until this register rewrite
lands.** No ontology/standard/protocol/engine/SEO approved by this step.
