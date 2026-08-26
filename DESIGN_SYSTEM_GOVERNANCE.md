# Design System Governance — Palpating

**Version:** 0.1 · **Status:** Binding · Subordinate to `ASSET_THESIS.md` and
`INTERFACE_THESIS.md`. Implements Execution Order Step 3 and the Design System
Requirement in `INTERFACE_GOVERNANCE.md`.

Sovereign assets do not use ad hoc styling; they have a design system derivable
from the thesis. This document governs the system. The **full token set is
finalised at Gate 3** (design-system rebuild); Gate 0 fixes the *rules* the tokens
must obey and records the interim v0.1 values.

---

## 1. What the system must define (minimum)

1. **Token set** — colour, spacing, type scale, radius, motion-duration values,
   each with a **declared role**. No colour or motion value exists without a role.
2. **Component grammar** — named, reusable components (signal field, readout,
   reference-entry, sign-rail, definition block, map node) with consistent usage
   rules.
3. **Page-structure rules** — how document hierarchy is expressed visually across
   every page, so a scanning reader can infer structure without reading labels.
4. **State model** — how rest, hover, focus, active, disabled, and the thesis
   states (contact, deformation, signal, representation) are communicated.

Anything not derivable from the tokens is interface drift and is rejected.

## 2. Colour roles bind to the state machine

Colour tokens map one-to-one to the interface state machine
(`INTERFACE_THESIS.md` §2): rest, contact, deformation, signal-capture,
representation, plus neutral surface/ink/line roles and text roles. A token with
no state or structural role may not be added. Accent colour is reserved for
meaningful state change, never general interest (`INTERFACE_GOVERNANCE.md`).

**Interim v0.1 palette (mineral / editorial; `DECISION_LOG.md` DEC-006)** — a
starting point, to be extended into the full state machine at Gate 3:

- Neutrals: bone white `#f3f0ea`, stone paper `#e6e1d8`, deep mineral ink
  `#1a2026`, graphite text `#41484f`, muted `#7b7f84`.
- Signal / representation: deep surgical blue `#46606f`, muted surgical blue
  `#8ea3b0`, dust teal `#7e9995`.
- Physical / tissue (contact/deformation direction): warm tissue beige `#cbbeae`;
  reserved mineral plum `#726a86`.
- Semantic split already applied: vital signs read cool, physical signs read warm.

Gate 3 assigns explicit **contact** and **deformation** tokens and makes colour
appear on state change rather than statically.

## 3. Typography, density, motion (institutional register)

- **Typography:** a deliberate serif for doctrine headings; monospace reserved for
  identifiers, status, metadata, and classification labels (it signals precision
  and machine governance). Body text readable without effort; contrast
  non-negotiable.
- **Density:** dense, parseable layouts signal precision. Excessive whitespace on
  a reference system signals casual effort.
- **Motion:** purposeful only — state transitions in the thesis sequence; no
  decorative animation; `prefers-reduced-motion` honoured.
- **Imagery:** system-generated / diagrammatic imagery that reinforces the
  classification is preferred. Generic stock photography is rejected. If no image
  improves on no image, use none.

## 4. Distribution assets are governed here

Social preview assets (Open Graph / Twitter, 1200×630) are **designed artifacts
in the design system**, never page screenshots. They carry the wordmark, the owned
sentence, and one signal motif from the state machine. The current
`og-image.png` (DEC-007) is compliant and is the interim reference; it is
re-derived when Gate 3 finalises tokens.

## 5. Governance

- The design system is versioned; token changes are logged (Non-Negotiable #7).
- One-off visual treatments that cannot be systematised are rejected.
- Every interface element passes the mandatory interface test
  (`INTERFACE_GOVERNANCE.md`) before acceptance.

> **Every token has a role. Every colour maps to a state. Drift is a governance
> failure, not a style choice.**
