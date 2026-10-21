(() => {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const lerp = (a, b, t) => a + (b - a) * t;

  document.body.classList.add("is-loading");
  $("#year").textContent = new Date().getFullYear();

  /* ---------- split text into animatable characters ---------- */
  const splitEl = (el) => {
    let i = 0;
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = "";
    words.forEach((word, w) => {
      const mask = document.createElement("span");
      mask.className = "line-mask";
      for (const c of word) {
        const ch = document.createElement("span");
        ch.className = "ch";
        ch.style.setProperty("--i", i++);
        ch.textContent = c;
        mask.appendChild(ch);
      }
      el.appendChild(mask);
      if (w < words.length - 1) el.appendChild(document.createTextNode(" "));
    });
  };
  let heroIndex = 0;
  $$(".hero__title .split").forEach((el) => {
    splitEl(el);
    $$(".ch", el).forEach((ch) => ch.style.setProperty("--i", heroIndex++));
  });
  $$("[data-split]").forEach(splitEl);

  /* ---------- loader ---------- */
  const loaderNum = $("#loader-num");
  const loaderBar = $(".loader__bar i");
  const start = performance.now();
  const duration = reduced ? 1 : 1400;
  let pageLoaded = document.readyState === "complete";
  addEventListener("load", () => (pageLoaded = true));
  const tickLoader = (now) => {
    const t = Math.min((now - start) / duration, pageLoaded ? 1 : 0.92);
    const eased = 1 - Math.pow(1 - t, 3);
    const v = Math.round(eased * 100);
    loaderNum.textContent = v;
    loaderBar.style.width = v + "%";
    if (t < 1) return requestAnimationFrame(tickLoader);
    setTimeout(() => {
      $(".loader").classList.add("done");
      document.body.classList.remove("is-loading");
      document.body.classList.add("ready");
      $$(".hero .reveal").forEach((el, i) => {
        el.style.setProperty("--d", 500 + i * 120 + "ms");
        el.classList.add("in");
      });
      startScramble();
    }, reduced ? 0 : 200);
  };
  requestAnimationFrame(tickLoader);

  /* ---------- role text scramble ---------- */
  const roles = ["Software Engineer", "ML Engineer", "Full-Stack Developer", "LLM Tinkerer", "Working Student @ Fraunhofer SIT"];
  const glyphs = "!<>-_\\/[]{}—=+*^?#01";
  const scrambleEl = $("#scramble");
  function scrambleTo(text) {
    const from = scrambleEl.textContent;
    const len = Math.max(from.length, text.length);
    const queue = Array.from({ length: len }, (_, i) => {
      const s = Math.floor(Math.random() * 20);
      return { from: from[i] || "", to: text[i] || "", start: s, end: s + Math.floor(Math.random() * 20) + 6 };
    });
    let frame = 0;
    return new Promise((resolve) => {
      const step = () => {
        let out = "", done = 0;
        for (const q of queue) {
          if (frame >= q.end) { done++; out += q.to; }
          else if (frame >= q.start) out += `<span class="muted">${glyphs[(Math.random() * glyphs.length) | 0]}</span>`;
          else out += q.from;
        }
        scrambleEl.innerHTML = out;
        if (done === queue.length) return resolve();
        frame++;
        requestAnimationFrame(step);
      };
      step();
    });
  }
  function startScramble() {
    if (reduced) return;
    let i = 0;
    const loop = async () => {
      i = (i + 1) % roles.length;
      await scrambleTo(roles[i]);
      setTimeout(loop, 2400);
    };
    setTimeout(loop, 2400);
  }

  /* ---------- scroll reveals, staggered by sibling order ---------- */
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target;
      if (el.classList.contains("reveal") && !el.style.getPropertyValue("--d")) {
        const sibs = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
        el.style.setProperty("--d", sibs.indexOf(el) * 90 + "ms");
      }
      el.classList.add("in");
      el.querySelectorAll("[data-count]").forEach(countUp);
      if (el.matches("[data-count]")) countUp(el);
      io.unobserve(el);
    }
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  $$("main .reveal:not(.hero .reveal), [data-split]").forEach((el) => io.observe(el));

  function countUp(el) {
    const target = +el.dataset.count, suffix = el.dataset.suffix || "";
    const t0 = performance.now(), dur = reduced ? 1 : 1600;
    const step = (now) => {
      const t = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 4))) + (t === 1 ? suffix : "");
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- scroll-driven: progress bar, nav hide, timeline ---------- */
  const progress = $(".progress");
  const nav = $(".nav");
  const timeline = $(".timeline");
  const tLine = $(".timeline__line i");
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle("hide", y > lastY && y > 400);
    lastY = y;
    const r = timeline.getBoundingClientRect();
    const p = Math.min(Math.max((innerHeight * 0.7 - r.top) / r.height, 0), 1);
    tLine.style.setProperty("--p", p);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- nav active pill ---------- */
  const links = $$("[data-nav]");
  const pill = $(".nav__pill");
  const movePill = (a) => {
    links.forEach((l) => l.classList.toggle("active", l === a));
    if (!a) return (pill.style.opacity = 0);
    pill.style.opacity = 1;
    pill.style.width = a.offsetWidth + "px";
    pill.style.transform = `translateX(${a.offsetLeft}px)`;
  };
  const sectionIO = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) movePill(links.find((l) => l.hash === "#" + e.target.id));
    }
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => sectionIO.observe(s));
  sectionIO.observe($(".hero"));

  /* ---------- pointer-driven effects ---------- */
  const mouse = { x: innerWidth / 2, y: innerHeight / 2, active: false };
  addEventListener("pointermove", (e) => {
    mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true;
  }, { passive: true });
  document.addEventListener("pointerleave", () => (mouse.active = false));

  // spotlight position on glass cards
  $$(".spot").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", e.clientX - r.left + "px");
      el.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });

  if (finePointer && !reduced) {
    // custom cursor
    document.body.classList.add("has-cursor");
    const cursor = $(".cursor"), dot = $(".cursor__dot"), ring = $(".cursor__ring");
    const ringPos = { x: mouse.x, y: mouse.y };
    const renderCursor = () => {
      ringPos.x = lerp(ringPos.x, mouse.x, 0.18);
      ringPos.y = lerp(ringPos.y, mouse.y, 0.18);
      dot.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
      ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px)`;
      cursor.classList.toggle("on", mouse.active);
      requestAnimationFrame(renderCursor);
    };
    renderCursor();
    $$("a, button, .card").forEach((el) => {
      el.addEventListener("pointerenter", () => cursor.classList.add("hover"));
      el.addEventListener("pointerleave", () => cursor.classList.remove("hover"));
    });

    // magnetic buttons
    $$(".magnetic").forEach((el) => {
      el.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)";
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${dx * 0.3}px, ${dy * 0.4}px)`;
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });

    // 3D tilt
    $$(".tilt").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--ry", px * 10 + "deg");
        el.style.setProperty("--rx", -py * 10 + "deg");
      });
      el.addEventListener("pointerleave", () => {
        el.style.setProperty("--ry", "0deg");
        el.style.setProperty("--rx", "0deg");
      });
    });
  }

  /* ---------- particle flow field ---------- */
  const canvas = $("#field");
  const ctx = canvas.getContext("2d");
  let W, H, dpr, particles = [];
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = canvas.width = innerWidth * dpr;
    H = canvas.height = innerHeight * dpr;
    const n = Math.min(Math.round((innerWidth * innerHeight) / 11000), 150);
    particles = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: 0, vy: 0,
      hue: [168, 234, 330][(Math.random() * 3) | 0],
      r: (Math.random() * 1.4 + 0.6) * dpr,
    }));
  };
  resize();
  addEventListener("resize", resize);

  let time = 0;
  const LINK = 120;
  const drawField = () => {
    time += 0.0025;
    ctx.clearRect(0, 0, W, H);
    const mx = mouse.x * dpr, my = mouse.y * dpr, link = LINK * dpr;
    for (const p of particles) {
      // smooth pseudo-noise flow
      const a = Math.sin(p.x * 0.0016 / dpr + time * 3) + Math.cos(p.y * 0.0019 / dpr - time * 2);
      p.vx += Math.cos(a * Math.PI) * 0.03 * dpr;
      p.vy += Math.sin(a * Math.PI) * 0.03 * dpr;
      // pointer repulsion
      if (mouse.active) {
        const dx = p.x - mx, dy = p.y - my, d2 = dx * dx + dy * dy, R = 160 * dpr;
        if (d2 < R * R) {
          const f = (1 - Math.sqrt(d2) / R) * 0.6 * dpr;
          const d = Math.sqrt(d2) || 1;
          p.vx += (dx / d) * f; p.vy += (dy / d) * f;
        }
      }
      p.vx *= 0.94; p.vy *= 0.94;
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x += W; else if (p.x > W) p.x -= W;
      if (p.y < 0) p.y += H; else if (p.y > H) p.y -= H;
    }
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
        if (d2 < link * link) {
          ctx.strokeStyle = `hsla(${a.hue}, 90%, 70%, ${(1 - Math.sqrt(d2) / link) * 0.22})`;
          ctx.lineWidth = dpr * 0.8;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for (const p of particles) {
      ctx.fillStyle = `hsla(${p.hue}, 90%, 75%, 0.85)`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
    if (!reduced) requestAnimationFrame(drawField);
  };
  drawField();
})();
