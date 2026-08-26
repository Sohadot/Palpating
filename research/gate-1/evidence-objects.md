# Gate 1 — Evidence Objects

**Status:** Pass 1 · Candidate sources, not yet admitted to `SOURCE_REGISTER.md`.
Each object follows `SOURCE_GOVERNANCE.md` §1: it records what it **supports**
(Use) and, mandatorily, what it **does not** support (anti-overreach). Existing
register sources `S-001…S-005` remain valid and are cited by S-ID in the matrix.

**Evidence-strength scale (for the matrix):** ⬤⬤⬤ strong (multiple independent /
clinical / systematic-review evidence) · ⬤⬤ moderate (device- or study-level, some
reproducibility) · ⬤ emerging (phantom / small-scale / single-study).

---

### E-01 · Shear-wave elastography in musculoskeletal imaging (narrative review, 2025)
- **Axis:** stiffness/elasticity · modality SWE · representation scalar velocity/kPa.
- **URL:** https://doi.org/10.3390/jcm15124843
- **Use:** SWE gives quantitative tissue stiffness; less operator-dependent than
  strain elastography; applicable across tendon, muscle, nerve, fascia.
- **Does not support:** that SWE stiffness equals a diagnosis, or that it is
  reproducible enough for clinical trials without controlled conditions.

### E-02 · Inter-operator / inter-device reproducibility of SWE in muscle (PMC)
- **Axis:** limitations/uncertainty for SWE.
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC9512333/
- **Use:** SWE is reliable under stringent conditions but only moderately
  reproducible in clinical-like settings; probe force changes of ~1.5 N
  significantly lower repeatability.
- **Does not support:** device-independent, force-independent stiffness values.

### E-03 · MR elastography: from soft-tissue mechanics to diagnostic imaging (Nature Reviews Physics, 2022)
- **Axis:** stiffness/viscoelasticity · modality MRE · representation parametric
  maps (elastograms), whole-organ; spatial-context: field, in-vivo.
- **URL:** https://www.nature.com/articles/s42254-022-00543-2
- **Use:** MRE converts encoded shear waves into quantitative viscoelasticity maps
  (kPa) of whole organs; clinically used for liver fibrosis; investigational in
  brain, breast, heart, kidney, muscle.
- **Does not support:** that MRE maps are free of loading/motion bias, or that
  stiffness maps are interchangeable across scanners/frequencies without care.

### E-04 · Tactile Sensing Systems for Tumor Characterization: A Review (IEEE)
- **Axis:** stiffness/elasticity/surface · modality tactile (capacitive,
  piezoresistive, piezoelectric, magnetic, optical) · representation value/map.
- **URL:** https://ieeexplore.ieee.org/document/9425565/
- **Use:** tactile systems quantify mechanical properties (size, elasticity,
  stiffness) to characterize tumors; digital sensing makes subjective touch
  objective.
- **Does not support:** that tactile characterization is a validated diagnostic
  standard, or that phantom results transfer directly to in-vivo clinical use.

### E-05 · Tactile-Sensation Imaging System for breast tumor inclusions (Biosensors, 2026)
- **Axis:** surface/inclusion, elasticity · modality tactile imaging ·
  representation tactile image → size/depth/Young's modulus; spatial-context:
  localized inclusion, largely phantom.
- **URL:** https://doi.org/10.3390/bios16020102
- **Use:** analysis of tactile images can estimate inclusion size, depth, and
  Young's modulus.
- **Does not support:** in-vivo clinical validation, or texture as a fully
  represented property beyond inclusion detection.

### E-06 · Haptic and palpation sensing for robotic surgery (Sensors, 2026)
- **Axis:** stiffness/force · modality robotic palpation / force sensing ·
  representation force/stiffness feedback; limitations prominent.
- **URL:** https://doi.org/10.3390/s26041126
- **Use:** force feedback shortens operating time, reduces errors, and helps
  detect hard inclusions; multimodal + AI improves tissue discrimination.
- **Does not support:** solved clinical translation — sensor miniaturisation,
  sterilisation, robustness, and integration remain open.

### E-07 · Force-sensorless identification of tissue biomechanical parameters for robot palpation (PMC)
- **Axis:** stiffness/elasticity · modality robotic indentation · representation
  elasticity coefficient.
- **URL:** https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9694668/
- **Use:** indentation (force → deformation) identifies/classifies tissue
  elasticity, including force-sensorless estimation.
- **Does not support:** that estimated parameters are model-independent or
  clinically diagnostic.

### E-08 · Wearable strain sensor with thermal management for motion monitoring (Nature Communications, 2020)
- **Axis:** deformation/strain · modality wearable strain sensing · representation
  resistance/capacitance change → strain; temporal-context: real-time, dynamic.
- **URL:** https://www.nature.com/articles/s41467-020-17301-6
- **Use:** strain sensors transduce mechanical deformation into electrical signal
  for real-time motion monitoring with durability.
- **Does not support:** that arbitrary bodily deformations are captured — many
  sensors are limited in strain range/sensitivity and are motion-specific.

### E-09 · Advanced flexible skin-like pressure and strain sensors for health monitoring (review, PMC)
- **Axis:** pressure/deformation · modality skin-like flexible sensing ·
  representation pressure/strain signal.
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC8232132/
- **Use:** skin-like sensors capture pressure and deformation for physiological
  monitoring (pulse, motion).
- **Does not support:** that a captured pressure signal represents a diagnostic
  "bodily pressure state."

### E-10 · Quantitative comparison of devices for in-vivo skin biomechanics (PMC)
- **Axis:** elasticity/texture · modality suction/indentation/shear ·
  limitations/uncertainty prominent; in-vivo.
- **URL:** https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10350442/
- **Use:** multiple in-vivo methods (suction, indentation, dynamic shear) measure
  skin elasticity; skin is anisotropic (Langer's lines).
- **Does not support:** device-agnostic skin moduli — methods disagree, and
  subcutaneous layers confound indentation-derived Young's modulus.

### E-11 · Validity/reliability of myotonometry in stroke (systematic review + meta-analysis, Scientific Reports, 2021)
- **Axis:** tone/tension/stiffness · modality myotonometry (MyotonPRO) ·
  representation oscillation → viscoelastic parameters.
- **URL:** https://www.nature.com/articles/s41598-021-84656-1
- **Use:** myotonometry quantifies muscle viscoelastic tone/stiffness with good
  reliability and discriminates pathological from healthy muscle.
- **Does not support:** field/standardized use beyond laboratory conditions, or
  that tone maps to a clinical outcome.

### E-12 · MyotonPRO validity for wrist biomechanical stiffness (PubMed)
- **Axis:** tone/stiffness · modality myotonometry.
- **URL:** https://pubmed.ncbi.nlm.nih.gov/35265831/
- **Use:** MyotonPRO is a valid device for assessing wrist biomechanical stiffness
  in healthy young adults.
- **Does not support:** generalization across all joints/populations without
  further validation.

### E-13 · Validity and reliability of wearable sensors for joint angle estimation (systematic review, Sensors, 2019)
- **Axis:** mobility/range-of-motion · modality IMU · representation joint angle;
  temporal-context: dynamic.
- **URL:** https://doi.org/10.3390/s19071555
- **Use:** IMUs estimate joint angles with good-to-excellent validity vs
  goniometer/inclinometer for many movements.
- **Does not support:** accuracy for all joints — validity drops with task
  complexity and for some rotations.

### E-14 · Concurrent validity of IMUs for upper-extremity ROM (systematic review + meta-analysis, PMC)
- **Axis:** mobility/ROM · limitations/uncertainty.
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC11503723/
- **Use:** IMUs are viable for upper-extremity ROM; intra-rater reliability
  excellent.
- **Does not support:** shoulder rotation and wrist ulnar-radial deviation without
  caution; inter-rater reliability is moderate-to-poor for rotations.

---

*Existing admitted register sources cited in the matrix:* **S-001** robotic
tissue palpation (stiffness quantification), **S-002** wearable mechanical &
electrochemical sensors, **S-003** soft sensing & haptics, **S-004** multimodal
wearable sensing, **S-005** MRE "in a nutshell" (see `SOURCE_REGISTER.md`).

---

## Pass 2 — primary & adjacent-category evidence objects

Added for the adversarial falsification pass: primary/theoretical sources for
structural claims (per the mandate to stop relying on narrative reviews for
structure) and the adjacent-category corpus for the uniqueness test.

### E-15 · Young's modulus and specific stiffness (Univ. of Cambridge, materials science)
- **Axis:** concept — stiffness vs elasticity (primary/definitional).
- **URL:** https://www-materials.eng.cam.ac.uk/mpsite/properties/non-IE/stiffness.html
- **Use:** elastic modulus is an **intensive material** property; **stiffness** is
  an **extensive structural** property (k = AE/L) depending on material *and*
  geometry/boundary conditions — they are distinct.
- **Does not support:** treating stiffness and elasticity/modulus as synonyms.

### E-16 · Model-based elastography: survey of the inverse elasticity problem (IOP, Phys. Med. Biol.)
- **Axis:** limitations — inverse problem / metrology (primary/theoretical).
- **URL:** https://iopscience.iop.org/article/10.1088/0031-9155/57/3/R35/meta (PubMed 22222839)
- **Use:** recovering shear/elastic modulus from elastography is an **ill-posed
  inverse problem** with **no unique solution** from a single observation; it
  requires priors/regularizers, and reconstruction quality depends on
  displacement precision and boundary-condition assumptions.
- **Does not support:** that a reconstructed modulus is an assumption-free
  ground-truth property of the tissue.

### E-17 · Muscle Tone Physiology and Abnormalities (PMC)
- **Axis:** concept — tone vs tension (primary).
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC8071570/
- **Use:** muscle tone = **passive viscoelasticity** + **active tonic
  contraction**; "resistance to passive stretch" is a complex neural-mechanical
  network, not a single mechanical scalar.
- **Does not support:** equating measured "tone" with one mechanical property, or
  merging it with "tension" (which includes active contractile force).

### E-18 · Validity of the Myotonometer against passive-stretch/spasticity (Scientific Reports)
- **Axis:** tone · modality myotonometry.
- **URL:** https://www.nature.com/articles/srep44022
- **Use:** myotonometric measures relate to the mechanical/viscoelastic state of
  **superficial** muscle.
- **Does not support:** capture of active tension or deep-muscle state.

### E-19 · Cellular mechanotransduction in health and disease (Nature, Signal Transduct. Target. Ther.)
- **Axis:** adjacent category — mechanobiology.
- **URL:** https://www.nature.com/articles/s41392-023-01501-9
- **Use:** mechanobiology/mechanotransduction concerns how **cells** convert
  mechanical cues into biochemical signals (the biological level).
- **Does not support:** that tissue-level mechanical *representation* (Palpating's
  scope) is the same thing as cellular mechanotransduction.

### E-20 · Definitions of digital biomarkers: systematic mapping (medRxiv)
- **Axis:** adjacent category — digital biomarkers.
- **URL:** https://www.medrxiv.org/content/10.1101/2023.09.01.23294897.full.pdf
- **Use:** digital biomarkers are **validated sensor-derived measures tied to
  clinical outcomes**; wearables are *tools*, and data become biomarkers only
  after analytic + clinical validation.
- **Does not support:** that raw physical-property sensing is a digital biomarker,
  or that Palpating's map is an outcome-validation layer.

### E-21 · Surface roughness for tribology — Ra/Rq/Rz, ISO 4287 (Tribonet)
- **Axis:** texture · surface metrology.
- **URL:** https://www.tribonet.org/news/surface-roughness-interpretation-tribology/
- **Use:** surface texture is **metrologically defined** by roughness parameters
  (ISO 4287); skin roughness reported Ra ≈ 0.03–0.45 μm.
- **Does not support:** that a single parameter (Ra) defines texture — two surfaces
  with equal Ra can behave differently.

### E-22 · Surface textures modulate tactile perception (IOP, Surf. Topogr.)
- **Axis:** texture · tactile.
- **URL:** https://iopscience.iop.org/article/10.1088/2051-672X/ae2d7a
- **Use:** tactile perception is a function of surface **micro-geometry** (feature
  height, width, spacing).
- **Does not support:** a clinical "tissue texture" sign beyond surface
  micro-geometry.

### E-23 · Estimating biomechanical time-series with wearable sensors (systematic review, PubMed)
- **Axis:** adjacent category — biomechanics / kinematics.
- **URL:** https://pubmed.ncbi.nlm.nih.gov/31795151/
- **Use:** wearables estimate **biomechanical kinematics and kinetics** (joint,
  segment, muscle) — i.e. movement science.
- **Does not support:** that kinematic range-of-motion is a tissue mechanical or
  tactile *property* (a physical sign in the palpation sense).
