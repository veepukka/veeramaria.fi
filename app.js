const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- sparkles (both pages) ---------- */
const sparkles = document.getElementById("sparkles");
if (sparkles && !reducedMotion) {
  const count = document.body.classList.contains("about") ? 8 : 16;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.animationDelay = Math.random() * 8 + "s";
    s.style.animationDuration = 4 + Math.random() * 6 + "s";
    sparkles.append(s);
  }
}

/* ---------- poem carousel (home page only) ---------- */
const card = document.getElementById("poem-card");
if (card) {
  const ICON_SPEAKER =
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">' +
    '<path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/>' +
    '<path d="M16 9c1.2 1.6 1.2 4.4 0 6M18.5 7c2 2.7 2 7.3 0 10" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>';
  const ICON_PAUSE =
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">' +
    '<path d="M8 6h3v12H8zM13 6h3v12h-3z" fill="currentColor"/></svg>';

  let index = Math.floor(Math.random() * POEMS.length); // random start, fixed cyclic order

  const dots = document.getElementById("poem-dots");
  POEMS.forEach((poem, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", poem.title);
    b.addEventListener("click", () => show(i, i > index ? 1 : -1));
    dots.append(b);
  });
  const audio = new Audio();
  let audioPoem = null; // poem whose file is loaded in `audio`
  let animating = false;

  function syncAudioButton() {
    const btn = card.querySelector(".audio-bubble");
    if (!btn) return;
    const poem = POEMS[index];
    const playing = audioPoem === poem && !audio.paused;
    btn.innerHTML = playing ? ICON_PAUSE : ICON_SPEAKER;
    btn.classList.toggle("is-playing", playing);
    btn.setAttribute("aria-label", (playing ? "Pause" : "Play") + " audio for " + poem.title);
  }
  audio.addEventListener("play", syncAudioButton);
  audio.addEventListener("pause", syncAudioButton);
  audio.addEventListener("ended", syncAudioButton);

  function render() {
    const poem = POEMS[index];
    [...dots.children].forEach((d, i) => {
      d.classList.toggle("active", i === index);
      if (i === index) d.setAttribute("aria-current", "true");
      else d.removeAttribute("aria-current");
    });
    card.innerHTML = "";

    const row = document.createElement("div");
    row.className = "poem-title-row";
    const title = document.createElement("h2");
    title.className = "poem-title";
    title.textContent = poem.title;
    row.append(title);

    if (poem.audio) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "audio-bubble";
      btn.addEventListener("click", (e) => {
        e.stopPropagation(); // must not advance the carousel
        if (audioPoem !== poem) {
          audio.src = poem.audio;
          audioPoem = poem;
        }
        if (audio.paused) audio.play();
        else audio.pause();
      });
      row.append(btn);
    }
    card.append(row);

    const text = document.createElement("div");
    text.className = "poem-text";
    text.textContent = poem.text;
    card.append(text);

    if (poem.audio && poem.reader) {
      const credit = document.createElement("p");
      credit.className = "poem-reader";
      credit.textContent = "Read by " + poem.reader;
      card.append(credit);
    }
    syncAudioButton();
  }

  function go(dir) {
    show((index + dir + POEMS.length) % POEMS.length, dir);
  }

  // dir only picks the slide animation's direction
  function show(next, dir) {
    if (animating || next === index) return;
    area.classList.remove("hover-prev", "hover-next");
    audio.pause();
    index = next;
    if (reducedMotion) {
      render();
      return;
    }
    animating = true;
    card.classList.add(dir > 0 ? "leave-left" : "leave-right");
    setTimeout(() => {
      render();
      card.classList.remove("leave-left", "leave-right");
      card.classList.add(dir > 0 ? "enter-right" : "enter-left");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          card.classList.remove("enter-right", "enter-left");
          setTimeout(() => (animating = false), 300);
        })
      );
    }, 280);
  }

  // tap/click → next; suppress the click that follows a swipe.
  // Direction lock: the gesture's first ~8px decide whether it is a
  // horizontal swipe (ours, page held still) or a vertical scroll (browser's).
  let touchX = null, touchY = null;
  let swipeAxis = null;
  let swiped = false;
  let lastTouch = 0; // browsers fire emulated mouse events after touch
  card.addEventListener("touchstart", (e) => {
    lastTouch = Date.now();
    touchX = e.touches[0].clientX;
    touchY = e.touches[0].clientY;
    swipeAxis = null;
    swiped = false;
  }, { passive: true });
  card.addEventListener("touchmove", (e) => {
    if (touchX === null) return;
    const dx = e.touches[0].clientX - touchX;
    const dy = e.touches[0].clientY - touchY;
    if (!swipeAxis && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
      swipeAxis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
    }
    if (swipeAxis === "x") e.preventDefault(); // keep the page from jumping
  }, { passive: false });
  card.addEventListener("touchend", (e) => {
    lastTouch = Date.now();
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (swipeAxis === "x" && Math.abs(dx) > 40) {
      swiped = true;
      go(dx < 0 ? 1 : -1);
    }
  });
  // left 30% of the card goes back, the rest goes forward
  function zoneDir(e) {
    const rect = card.getBoundingClientRect();
    return (e.clientX - rect.left) / rect.width < 0.3 ? -1 : 1;
  }

  card.addEventListener("click", (e) => {
    if (swiped) {
      swiped = false;
      return;
    }
    go(zoneDir(e));
  });

  // reveal the matching arrow hint while hovering a zone
  const area = card.parentElement;
  card.addEventListener("mousemove", (e) => {
    if (animating) return; // keep the hint hidden while the poem is changing
    if (Date.now() - lastTouch < 1000) return; // ignore touch-emulated mouse events
    const prev = zoneDir(e) < 0;
    area.classList.toggle("hover-prev", prev);
    area.classList.toggle("hover-next", !prev);
  });
  card.addEventListener("mouseleave", () => {
    area.classList.remove("hover-prev", "hover-next");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  });

  render();
}
