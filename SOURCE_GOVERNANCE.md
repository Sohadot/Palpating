# Source Governance — Palpating

**Version:** 0.1 · **Status:** Binding · Subordinate to `ASSET_THESIS.md`.
Governs the source corpus recorded in `SOURCE_REGISTER.md`. Works with
`CLAIMS_GOVERNANCE.md`: sources are what convert claims from opinion into
governed reference.

The reference layer's authority rests on its sources. In an era when anyone can
generate plausible text, provenance is the differentiator. This document defines
what may enter the source corpus and how each source may be used.

---

## 1. Admission criteria for a source

A source is admitted to `SOURCE_REGISTER.md` only when it has:

1. A stable identifier `S-nnn`.
2. Full citation: title, year, venue/publisher, and a durable URL.
3. A **Use** statement — the specific premise it supports, within its actual
   scope.
4. A **Does not support** statement — the boundary of what it must not be
   stretched to cover. This field is mandatory; it is the anti-overreach control.
5. Relevance to the physical-property → representation transition (not generic
   digital-health material).

Preference order: peer-reviewed literature and reputable primary research over
secondary summaries; primary over press. Marketing material is not a source.

---

## 2. Use discipline

- A source supports **only** the premise recorded in its **Use** field. It may
  never be cited for a claim its authors did not make.
- The **Does not support** field is binding. Common overreaches to prevent:
  equating elastography with palpation or with Digital Palpability; treating any
  single device as generalisable; converting "can be measured" into "improves
  health outcomes."
- **No implied endorsement.** A source's presence never implies its authors
  endorse Palpating's framing or the term Digital Palpability
  (`SOURCE_REGISTER.md` header discipline).
- Every reference-page factual statement (claim type 1) links to the `S-nnn`
  that supports it.

---

## 3. Corpus growth (Gate 1)

The scientific landscape research at Gate 1 expands the corpus. Growth is
governed, not bulk:

- Each candidate source is admitted individually against §1.
- Sources are what let candidate ontology classes meet
  `CLASSIFICATION_ARCHITECTURE.md` entry criterion #3 (cited evidence a property
  can be sensed/represented).
- A candidate ontology class with no admissible supporting source **cannot be
  admitted** at Gate 2.

## 4. Versioning and review

- `SOURCE_REGISTER.md` is versioned; additions and scope corrections are logged
  (Non-Negotiable #7).
- Each source carries a last-review date; dead links are repaired or the source
  is retired with a logged reason.
- Retiring a source triggers a claim-coverage recheck of every page that cited it.

> **Every fact resolves to a source. Every source states what it does — and does
> not — support.**
