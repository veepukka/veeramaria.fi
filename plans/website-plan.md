# Veera Palo Poetry Site — Implementation Plan

Based on `initial-plan.md`. Decisions confirmed with the user on 2026-07-06:

- Placeholder poems, audio and images until real content arrives
- Vanilla HTML/CSS/JS — no build step; the directory IS the deployable
  static site (host on S3+CDN, GitHub Pages, or any file host)
- Site only for now; hosting setup later

## Files

```
index.html          Home: headline, poem carousel, profile bubble, footer
about.html          About/Contact: portrait, name, contacts, footer
styles.css          All styling incl. forest background + animations
poems.js            Poem data (const POEMS = [...]) — the only file to
                    edit when real poems arrive
app.js              Carousel, swipe/tap/keyboard, audio bubble, sparkles
assets/portrait.svg Placeholder portrait (replace with real photo)
assets/*.m4a        Placeholder audio for the two audio poems
```

## Behavior

- Random starting poem, then fixed cyclic order (`(i + 1) % 8`)
- Tap/click card → next poem; swipe left/right → next/prev;
  Arrow keys → next/prev (keyboard access)
- Edge-click zones on the poem card: left 30% → previous poem,
  right 70% → next poem; an arrow bubble fades in only while the
  mouse hovers the matching zone (user request 2026-07-06)
- No dots or counters, no always-visible arrows
- Fade + slight slide transition; instant swap under
  `prefers-reduced-motion`
- Audio bubble on two poems: play/pause/resume toggle,
  `stopPropagation` so it never advances the carousel,
  audio pauses on poem change, aria-label updates Play/Pause
- Background: layered CSS gradients, 3 slow-drifting light blobs,
  leaf-shadow overlay, sapphire water band with shimmer, JS-generated
  sparkle dots — all disabled under reduced motion

## Content swap procedure (later)

1. Replace poem objects in `poems.js` (title, text, audio, reader)
2. Drop real audio files into `assets/`, update filenames in `poems.js`
3. Replace `assets/portrait.svg` with the real image (home bubble and
   about page both use it)
