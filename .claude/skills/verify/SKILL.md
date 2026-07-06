---
name: verify
description: How to run and verify the veeramaria.fi static poetry site
---

# Verify veeramaria.fi

Static site, no build step. Serve and drive in a browser:

```bash
python3 -m http.server 8462 &          # from repo root
web session ensure                      # web-go skill; browser runs in Docker
web go http://host.docker.internal:8462/   # NOT localhost — container can't see host
```

Run `web` commands from the repo root (the container mounts cwd;
scratchpad paths don't exist inside it). Screenshots land in cwd —
clean up `.web-*.png` afterwards.

Flows worth driving:
- Poem carousel: `web do click "#poem-card"` advances; ArrowLeft/Right
  navigate; title via `web exec "document.querySelector('.poem-title').textContent"`
- Audio poems ("Bubble", "God's Masks"): click `.audio-bubble` must NOT
  advance the poem; aria-label toggles Play/Pause; changing poem pauses audio
- Profile bubble `.profile-bubble` → about.html
- Rapid triple-click must advance only one poem (animation guard)

Gotcha: reload gives a random starting poem — never assert a specific
title after load, read it first.
