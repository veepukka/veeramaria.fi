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
    if (animating) return;
    audio.pause();
    index = (index + dir + POEMS.length) % POEMS.length;
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

  // tap/click → next; suppress the click that follows a swipe
  let touchX = null;
  let swiped = false;
  card.addEventListener("touchstart", (e) => {
    touchX = e.touches[0].clientX;
    swiped = false;
  }, { passive: true });
  card.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 40) {
      swiped = true;
      go(dx < 0 ? 1 : -1);
    }
  });
  card.addEventListener("click", () => {
    if (swiped) {
      swiped = false;
      return;
    }
    go(1);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  });

  document.querySelector(".poem-arrow-prev").addEventListener("click", () => go(-1));
  document.querySelector(".poem-arrow-next").addEventListener("click", () => go(1));

  render();
}
