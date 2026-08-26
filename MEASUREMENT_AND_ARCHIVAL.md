# Measurement and Archival — Palpating

**Version:** 0.1 · **Status:** Binding · Subordinate to `ASSET_THESIS.md`.
Implements Execution Order Steps 10–12 (record position, maintenance cadence,
monitor category position) and factory layer 8 (Governance).

> Category position is confirmed by **adoption of the frame**, not by traffic
> alone. An asset without a maintenance cadence drifts from category artifact
> toward historical document.

---

## 1. Baseline (recorded position)

At each publish, the asset's state is recorded as the baseline against which drift
is measured: the governing thesis as stated, the ontology version, the standard
and protocol versions, and the reference-layer entry set. GitHub is the source of
truth; `DECISION_LOG.md` is the append-only spine
(`contexts/digital-sovereignty-doctrine.md`, GitHub-centered principle).

The **initial baseline is v0.1 — Thesis Demonstrator** plus this Gate 0 document
set. No engine, no governed taxonomy yet — that absence is itself part of the
recorded baseline.

## 2. What is measured

**Category-position signals (primary — the real metric):**
- Is the thesis "from vital signs to physical signs" used as a *frame* by others?
- Does *Digital Palpability* / *Physical Sign Map* appear where Palpating is not
  cited? (vocabulary escape — Buyer Logic signal 2)
- Is Palpating cited as a *definition source* in physical-sensing discussions?
- Inbound interest without outreach.

**Structural-integrity signals (continuous, blocking on failure):**
- Zero broken links / orphans / dead ends (Non-Negotiable #2).
- 100% claim coverage — every type-1 statement resolves to a source
  (`CLAIMS_GOVERNANCE.md`).
- Every public page has a registered route (Non-Negotiable #6).
- Reference-layer growth is admission-criteria-clean, not volume-driven.

**Reach (secondary, never the argument):** organic visibility is context, not the
value case. Traffic is never cited as the reason to acquire (`BUYER_LOGIC.md`).

## 3. Maintenance cadence

- **Reference layer:** reviewed on a defined schedule for new admissible entries;
  each entry carries a last-review date (`REFERENCE_LAYER_POLICY.md`).
- **Sources:** reviewed for dead links and scope drift (`SOURCE_GOVERNANCE.md`).
- **Ontology / standard / protocol:** revisited when the domain's evidence
  materially changes; changes are versioned and logged (Non-Negotiable #7).
- **Claims:** any post-publication prohibited-claim discovery freezes publication
  until remediated and logged.

## 4. Archival and versioning architecture

- Every governing artifact (thesis, ontology, standard, protocol, policies) is
  **versioned in-file**, never via filename suffixes like "final" / "v2"
  (methodology naming conventions).
- `DECISION_LOG.md` is **append-only** — history is never rewritten.
- Public `/governance/` surface summarises versions and change history for human
  and agent readers (agent legibility = distribution).
- Superseded states are retained in version control, not deleted — the governance
  record cannot be back-dated, and that permanence is part of the moat
  (`BUYER_LOGIC.md`).

## 5. Drift alarm

If any of these appear, development on new surfaces **stops** until resolved:
a phantom/thin page, a broken graph, an unsourced claim, an unversioned change to
a governing artifact, or interface drift outside the design system. Fixing drift
precedes all new work (`PUBLICATION_STANDARD.md`, blocking gate).

> **Record the position, measure adoption not applause, and never let the graph or
> the governance record drift.**
