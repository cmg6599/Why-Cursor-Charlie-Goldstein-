/**
 * Particle canvas + scroll reveals
 */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Hero entrance ---------- */
function initHeroEntrance() {
  const els = document.querySelectorAll(".hero-entrance");
  if (prefersReducedMotion) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  requestAnimationFrame(() => {
    els.forEach((el) => el.classList.add("is-visible"));
  });
}

/* ---------- Scroll reveals ---------- */
function initRevealObserver() {
  const nodes = document.querySelectorAll("[data-reveal]");
  if (!nodes.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-inview");
        io.unobserve(entry.target);
      });
    },
    { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
  );

  nodes.forEach((el) => {
    if (prefersReducedMotion) {
      el.classList.add("is-inview");
      return;
    }
    io.observe(el);
  });
}

/* ---------- Constellation / particles ---------- */
function initParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const state = { w: 0, h: 0, stars: [], raf: 0 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    state.w = window.innerWidth;
    state.h = window.innerHeight;
    canvas.width = Math.floor(state.w * dpr);
    canvas.height = Math.floor(state.h * dpr);
    canvas.style.width = `${state.w}px`;
    canvas.style.height = `${state.h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.floor((state.w * state.h) / 15000);
    state.stars = Array.from({ length: Math.max(36, Math.min(count, 100)) }, () => ({
      x: Math.random() * state.w,
      y: Math.random() * state.h,
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      tw: Math.random() * Math.PI * 2,
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, state.w, state.h);

    for (const s of state.stars) {
      s.x += s.vx;
      s.y += s.vy;
      s.tw += 0.015 + s.z * 0.02;

      if (s.x < -10) s.x = state.w + 10;
      if (s.x > state.w + 10) s.x = -10;
      if (s.y < -10) s.y = state.h + 10;
      if (s.y > state.h + 10) s.y = -10;

      const alpha = 0.15 + s.z * 0.55 + Math.sin(s.tw) * 0.12;
      const r = 0.6 + s.z * 1.4;
      ctx.beginPath();
      ctx.fillStyle = `rgba(200, 220, 255, ${Math.max(0.08, Math.min(0.95, alpha))})`;
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const linkDist = 80 + state.w * 0.035;
    const cap = Math.min(state.stars.length, 48);
    for (let i = 0; i < cap; i++) {
      for (let j = i + 1; j < cap; j++) {
        const a = state.stars[i];
        const b = state.stars[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d < linkDist) {
          const t = 1 - d / linkDist;
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.045 * t})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    state.raf = requestAnimationFrame(tick);
  }

  function startLoop() {
    cancelAnimationFrame(state.raf);
    state.raf = requestAnimationFrame(tick);
  }

  if (prefersReducedMotion) {
    resize();
    ctx.fillStyle = "rgba(59, 130, 246, 0.08)";
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * state.w, Math.random() * state.h, 1, 0, Math.PI * 2);
      ctx.fill();
    }
    return;
  }

  resize();
  startLoop();

  window.addEventListener(
    "resize",
    () => {
      cancelAnimationFrame(state.raf);
      resize();
      startLoop();
    },
    { passive: true }
  );
}

function initWinCards() {
  const wrap = document.getElementById("winCards");
  if (!wrap) return;
  const staggerCards = wrap.querySelectorAll(".deck-card--stagger");
  const spotlight = wrap.querySelector(".deck-card--spotlight");
  const legacyWin = wrap.querySelectorAll(".win-card");

  const run = () => {
    staggerCards.forEach((card, i) => {
      const delay = prefersReducedMotion ? 0 : 120 + i * 165;
      setTimeout(() => card.classList.add("is-inview"), delay);
    });
    legacyWin.forEach((card, i) => {
      const delay = prefersReducedMotion ? 0 : 120 + i * 165;
      setTimeout(() => card.classList.add("is-inview"), delay);
    });
    if (spotlight) {
      const afterStagger = prefersReducedMotion ? 0 : 120 + Math.max(0, staggerCards.length - 1) * 165 + 420;
      setTimeout(() => spotlight.classList.add("is-inview"), afterStagger);
    }
  };

  if (prefersReducedMotion) {
    run();
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        run();
        io.disconnect();
      });
    },
    { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.12 }
  );

  io.observe(wrap);
}

initHeroEntrance();
initRevealObserver();
initWinCards();
initParticles();
