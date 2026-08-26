# Interface Thesis — Palpating

**Version:** 0.1 · **Status:** Binding *thesis*; visual tokens governed by
`DESIGN_SYSTEM_GOVERNANCE.md`. Subordinate to `ASSET_THESIS.md`; implements
factory layer 9 and the methodology's `INTERFACE_GOVERNANCE.md`.

The interface is the **first argument**. Before a word is read, it must
communicate that the physical state of the body is becoming a signal and a
representation. We do not choose "a beautiful palette." We build a **sensitive
surface**.

---

## 1. The governing sequence

The entire interface is organised around one sequence — the same one the thesis
names:

> **Contact → Deformation → Signal → Representation**

    a surface rests
      → contact occurs
      → the field deforms
      → a physical response appears
      → the response becomes a signal
      → the signal resolves into structured information

The interface *behaves like the thing it describes*. This is the interaction that
makes the thesis felt (factory plan §10; the mandatory interface test in
`INTERFACE_GOVERNANCE.md`).

## 2. Colour is a state machine, not a palette

Colour appears **because something happened**, never because a designer wanted an
accent. Each interface state has a declared colour role (final values set in
`DESIGN_SYSTEM_GOVERNANCE.md`):

| State | Meaning | Colour role (semantic, not final hex) |
|-------|---------|----------------------------------------|
| **Rest** | the surface at rest, nothing sensed | deep, composite, bodily neutral |
| **Contact** | an interaction begins | a live, warmer tissue tone |
| **Deformation** | the field responds to interaction | a tone that shifts/displaces with the interaction |
| **Signal capture** | measurement occurs | a distinct signal tone that appears *only* at measurement |
| **Representation** | the signal becomes structured data | a cooler, more geometric, computational tone |

The rule: *a colour that appears without a state change is decoration, and is
rejected.* Every colour must map to one row above.

## 3. Motion is evidence, not decoration

> **Motion is the visual evidence of physical response.**

Motion is permitted only where it shows a state transition in the sequence
(contact registering, a field deforming, a signal resolving). Decorative
animation is prohibited (`INTERFACE_GOVERNANCE.md`). All motion is
`prefers-reduced-motion` safe.

## 4. The governing order (Concept → Performance → Beauty)

Every interface decision is evaluated in this order:
1. **Concept** — does it reinforce "physical state → signal → representation"?
2. **Performance** — does it serve movement through the asset without friction?
3. **Beauty** — does it cohere within the design system?

A visually striking element that contradicts the concept is worse than a plain
one and is rejected unconditionally.

## 5. Prohibited patterns (unconditional)

Hero-over-stock-photo · hamburger nav on desktop · testimonial carousels ·
countdown/urgency widgets · floating chat widgets · pop-up email capture
interrupting doctrine · sidebar/affiliate banners · progress bars on reference
pages · **acquisition-urgency / marketplace framing** (Non-Negotiable #10). Any
one signals the asset was not built to sovereign standard.

## 6. Standing correction to v0.1

The v0.1 demonstrator's **Acquisition** section (full-section "Acquire the
identity…", "Acquisition inquiry" button, nav item) is marketplace framing on an
asset surface and violates §5 / Non-Negotiable #10. **Required action:** remove
it from the public interface; retain only a discreet Owner / Contact reference.
Tracked in `ACQUISITION_READINESS.md`; to be executed as the one live change Gate
0 authorises. The colour work already shipped in v0.1 (mineral/editorial,
`DECISION_LOG.md` DEC-006) is a partial move toward the Rest/Representation end of
the state machine, but the full Contact→Deformation→Signal→Representation system
is a **Gate 3** rebuild, not a patch.

> **The surface is the argument. Colour appears because something happened. Motion
> is the evidence.**
