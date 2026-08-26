# Reference Layer Policy — Palpating

**Version:** 0.1 · **Status:** Binding · Subordinate to `ASSET_THESIS.md`.
Implements Execution Order Step 6 and factory layer 7 (Reference Layer).

The reference layer is not a blog. It is a **governed reference graph** — a
maintained catalog with explicit admission criteria, where every engine output
resolves to a stable, citable page. An engine whose outputs point nowhere
produces opinions, not intelligence
(`docs/INTELLIGENCE_FACTORY_DOCTRINE.md`).

---

## 1. Structure (route namespace)

Reference pages live under a fixed namespace. Every public page has a
**registered route** (Non-Negotiable #6) recorded in the route registry; an
unregistered page does not exist.

    /physical-signs/            index of physical properties
    /physical-signs/<slug>/     one property (e.g. /physical-signs/stiffness/)
    /sensing/                   index of sensing modalities
    /sensing/<slug>/            one modality (e.g. /sensing/elastography/)
    /concepts/                  owned & framing terms
    /concepts/<slug>/           e.g. /concepts/digital-palpability/
    /evidence/                  source register, governed
    /evidence/<source-id>/      one source (S-001 …)
    /map/                       the Physical Sign Map surface
    /method/                    the Physical Sign Legibility Protocol
    /governance/                public governance summary + versioning

Slugs are lowercase, hyphenated, and stable. A published URL is a canonical URL;
it does not change without a logged redirect decision.

---

## 2. Admission criteria (a page may exist only if it has all of these)

A reference page is admitted only when it contains, in order:

1. **Definition** — what the entry is, matching `CATEGORY_LANGUAGE.md`.
2. **Scope** — what it does and does not cover.
3. **Evidence** — sourced claims tied to `SOURCE_REGISTER.md` entries, with the
   fact / interpretation / framework-language separation explicit.
4. **Limitations / representation gap** — what is not captured or not known.
5. **Relationships** — governed links to related properties, modalities, concepts.
6. **Source provenance** — which sources support which statements.
7. **Last review** — a date and version.

A page missing any element is **not published** — it is a phantom surface
(Non-Negotiable #1) and a claim-coverage failure (Non-Negotiable #3). We do not
publish a page because a slug is available.

---

## 3. Anti–SEO-factory rule

The reference layer grows from the **knowledge structure**, never from keyword
opportunity. A page earns its existence by being a node the ontology requires,
not by a search volume. Bulk thin pages, auto-generated variants, and fake
comparison surfaces are forbidden (Non-Negotiable #4; see
`SEO_AND_INTERNAL_LINK_GOVERNANCE.md`).

---

## 4. Internal linking = ontology edges

Internal links are **relationship edges** from the Physical Sign Map, not
"read also" decoration. Every link expresses a governed relationship (property ↔
modality, property ↔ concept, claim ↔ evidence). The graph must have **no
orphans and no dead ends** (Non-Negotiable #2, agent-legibility requirement).

---

## 5. Agent legibility

Each reference page carries:
- a stable canonical URL and a stable identifier (`T-nn`, `S-nnn`, class ID);
- structured metadata (JSON-LD) and a machine-readable summary;
- explicit typing of each statement as sourced fact, conceptual interpretation,
  or internal framework language.

This is distribution, not decoration: when agents answer physical-sign questions,
the governed, structured source wins.

---

## 6. Maintenance, not completion

The reference layer is **maintained, not finished**. It is seeded at Gate 4 to a
**minimum viable entry set** that demonstrates the classification is functional
(enough properties + modalities + their evidence to prove the Map works), then
grown with discipline. Review cadence and archival are governed by
`MEASUREMENT_AND_ARCHIVAL.md`.

> **Every page is a governed node with evidence, limits, and a date — or it is
> not a page.**
