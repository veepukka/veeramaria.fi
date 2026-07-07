# Plan: Make multiple poems discoverable on first visit

## Problem

First-time visitors do not realize the front page holds 10 poems, not one.

Root cause (styles.css:278–289): the arrow hints render **only on hover** on
pointer devices, and are `display: none` on touch devices. A first-time
visitor — especially on mobile — sees a single static poem card with zero
affordance that more content exists. The `visually-hidden` instruction only
helps screen-reader users.

Constraint: the always-visible arrow button is the **fallback**, not the plan.

## Options, ranked laziest-first

### 1. Position dots under the card — RECOMMENDED (primary fix)

The universal carousel signal. A row of 10 small dots (current one
highlighted) under the poem card says "there are more" at a glance, on every
device, permanently — no timing, no state, no localStorage.

- Purely visual (`pointer-events: none`, `aria-hidden="true"`); navigation
  stays exactly as it is (tap zones, swipe, arrow keys).
- Fits the visual language: tiny glowing bubbles, same radial-gradient style
  as `.audio-bubble`, just ~7px.
- ~15 lines total: one `<div>` in index.html, dot rendering + active-class
  update inside the existing `render()` in app.js, ~10 lines of CSS.

### 2. One-time entrance nudge — complementary, optional

On page load, after ~2s idle, the card does a single gentle horizontal nudge
(a few px left and back, CSS keyframe) suggesting sideways movement. Runs
once; skipped under `prefers-reduced-motion` (flag already exists in app.js).

- ~10 lines of CSS + one class toggle. No persistence needed — it is
  harmless on repeat visits precisely because it runs once and is subtle.
- Do this only if dots alone feel insufficient after trying them.

### 3. Brief arrow flash on load — alternative to #2

Show the existing `.poem-hint` arrows at load, fade them out after ~3s.
Reuses existing markup, but on touch devices the hints are currently
`display: none`, so this needs the media query reworked — more churn than #2
for the same message.

### 4. Fallback: always-visible arrows

Remove the hover gating so `.poem-hint` is always at low opacity (and shown
on touch). Only if the user rejects the above.

## Not doing

- **Next-card peek / partial slide-in of the neighboring poem** — real layout
  and animation work for the same message the dots deliver.
- **localStorage "seen" flags, first-visit detection** — state machinery for
  a hint that is cheap enough to be static (dots) or harmlessly repeatable
  (nudge).
- **Making dots clickable** — 10 tiny tap targets would be an accessibility
  problem; card tap zones already navigate.

## Implementation sketch (option 1)

1. `index.html`: add `<div class="poem-dots" id="poem-dots" aria-hidden="true"></div>`
   inside `.poem-area`, after the card.
2. `app.js`: in `render()`, build the dots once (10 spans) and toggle an
   `.active` class by `index`. ~6 lines.
3. `styles.css`: flex row, centered, `margin-top`; dots ~7px round,
   `rgba`-green matching the bubble palette; active dot brighter/slightly
   larger. Respect existing reduced-motion block (no transitions needed
   anyway).
4. Verify with the `verify` skill flow: desktop hover still shows arrows,
   touch shows dots, keyboard nav updates the active dot.

Estimated diff: ~25 lines across 3 files.
