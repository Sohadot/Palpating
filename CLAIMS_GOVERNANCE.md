# Claims Governance — Palpating

**Version:** 0.1 · **Status:** Binding · Subordinate to `ASSET_THESIS.md`.
Instantiates Non-Negotiable #3 (No ungoverned claims). Governs the concrete
allow/deny list in `CLAIMS_BOUNDARY.md`.

The domain is medical-adjacent. A single ungoverned claim can convert a
conceptual reference into an implied medical service and destroy the asset's
credibility. This document defines how claims are made, marked, and reviewed.
`CLAIMS_BOUNDARY.md` is the concrete instance; this document is the rule over it.
Where they differ, the **stricter** wins.

---

## 1. The three claim types (every statement is exactly one)

Every statement on every surface must be legible as exactly one of:

1. **Sourced fact** — supported by a specific admitted source
   (`SOURCE_REGISTER.md`). Must be attributable to that source's actual scope.
2. **Conceptual interpretation** — Palpating's forward-looking analysis. Must be
   marked as such with hedged language ("can", "may", "emerging", "conceptual"),
   never converted into established fact.
3. **Internal framework language** — the asset's owned vocabulary
   (`CATEGORY_LANGUAGE.md`). Must be visibly the asset's framing, never presented
   as an accepted medical or scientific standard.

A statement that cannot be assigned to one of these three types is **excluded**.
Blurring the three is the primary failure mode and is a blocking gate defect.

---

## 2. Prohibited claims (no exception without new evidence + review)

Restating and binding `CLAIMS_BOUNDARY.md` and `DECISION_LOG.md` DEC-004:

- Diagnostic or treatment recommendations of any kind.
- Disease-detection claims not made verbatim by a directly cited source.
- Any claim that sensing physical signs improves **longevity, lifespan, or
  healthspan**.
- Numerical Digital Palpability **scores, bands, ladders, certifications, or
  rankings** (DEC-002).
- Presenting Palpating terminology (Digital Palpability, Physical Sign Map, etc.)
  as an **accepted medical standard**.
- Implying **endorsement** by cited authors or institutions.
- Any claim that "more modalities" or "more sensing" automatically yields better
  clinical outcomes.

## 3. Permitted, when correctly typed and sourced

- Describing established research on tactile sensing, tissue stiffness, mechanical
  sensing, haptics, wearables, robotics, and elastography **tied to sources**.
- Stating that selected physical properties **can** be measured or computationally
  represented **where evidence supports it**.
- Introducing owned terms **explicitly as Palpating's conceptual language**.
- Forward-looking strategic analysis, **marked as interpretation**.

---

## 4. The Standard scopes claims away from health

The Physical-State Representation Integrity Standard governs **representation
integrity, not human health**. This is a deliberate claims firewall: the asset's
outputs describe what a *sensing/representation architecture* captures, never
whether a *person* is healthy. The protocol therefore never emits a diagnosis
(`ASSET_INTELLIGENCE_FACTORY_PLAN.md` §4–5).

## 5. Review process

- Every new reference page passes a **claim-coverage check**: each statement is
  typed (1/2/3) and, if type 1, linked to a source. Automated where possible
  (Non-Negotiable enforcement is blocking).
- A new claim that would extend the boundary requires a `DECISION_LOG.md` entry
  citing the new evidence **before** publication.
- A prohibited claim discovered post-publication **freezes further publication**
  on the asset until removed and logged (Foundation Doctrine enforcement).

> **No claim is made without a type. No fact is stated without a source. No
> framing is disguised as a standard.**
