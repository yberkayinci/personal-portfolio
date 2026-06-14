/* =========================================================================
   main.js — interactions, i18n, animations, GitHub fetch, mini-game
   ========================================================================= */
(() => {
  "use strict";
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- Language ---------- */
  let lang = localStorage.getItem("lang") || "tr";
  const t = (obj) => (obj && typeof obj === "object" ? (obj[lang] ?? obj.en ?? "") : obj || "");

  /* SVG icons */
  const ICON = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2 0 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zM6 14.2v3.3c0 1.7 2.7 3 6 3s6-1.3 6-3v-3.3l-6 3.3-6-3.3z"/></svg>',
    location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    cv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/></svg>'
  };

  /* Language icon by repo language */
  const LANG_COLOR = { JavaScript:"#f1e05a", TypeScript:"#3178c6", Python:"#3572A5", "C++":"#f34b7d", C:"#555", "C#":"#178600", HTML:"#e34c26", CSS:"#563d7c", PHP:"#4F5D95", Java:"#b07219", PowerShell:"#012456", Vue:"#41b883", Shell:"#89e051" };
  const PROJ_EMOJI = { JavaScript:"🟨", Python:"🐍", "C++":"⚙️", C:"🔧", "C#":"🟪", HTML:"🌐", CSS:"🎨", PHP:"🐘", Java:"☕", PowerShell:"💻", default:"📦" };

  /* =======================================================================
     RENDER (re-runnable for language switch)
     ======================================================================= */
  function render() {
    const p = SITE.profile;
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;

    // data-i18n text nodes
    $$("[data-i18n]").forEach(el => {
      const path = el.dataset.i18n.split(".");
      let v = I18N; path.forEach(k => v = v?.[k]);
      if (v) el.textContent = t(v);
    });
    // nav labels
    $$("[data-nav]").forEach(el => el.textContent = t(I18N.nav[el.dataset.nav]));

    // hero
    $("#hero-name").textContent = p.name;
    $("#hero-tagline").textContent = t(p.tagline);

    // socials
    const soc = $("#hero-socials");
    soc.innerHTML = "";
    const links = [
      [p.githubUrl, ICON.github, "GitHub"],
      [p.linkedin, ICON.linkedin, "LinkedIn"],
      ["mailto:" + p.email, ICON.mail, "Email"],
      [p.scholar, ICON.scholar, "Scholar"]
    ];
    links.forEach(([href, ic, title]) => {
      if (!href) return;
      const a = document.createElement("a");
      a.href = href; a.target = "_blank"; a.rel = "noopener"; a.title = title; a.innerHTML = ic;
      soc.appendChild(a);
    });

    // about
    $("#about-text").textContent = t(SITE.about);
    $("#about-stats").innerHTML = SITE.about.highlights.map(h =>
      `<div class="stat-card"><div class="stat-value" data-count="${h.value}">${h.value}</div><div class="stat-label">${t(h.label)}</div></div>`
    ).join("");

    // skills
    $("#skills-wrap").innerHTML = SITE.skills.map(g =>
      `<div class="skill-group reveal"><h4>${t(g.group)}</h4><div class="skill-tags">${
        g.items.map(i => `<span class="skill-tag">${i}</span>`).join("")
      }</div></div>`
    ).join("");

    // experience timeline
    $("#timeline-exp").innerHTML = SITE.experience.map(e =>
      `<div class="tl-item reveal">
        <div class="tl-role">${t(e.role)}</div>
        <div class="tl-company">${t(e.company)}</div>
        <div class="tl-date">${t(e.date)}</div>
        <ul class="tl-points">${t(e.points).map(pt => `<li>${pt}</li>`).join("")}</ul>
        <div class="tl-stack">${e.stack.map(s => `<span>${s}</span>`).join("")}</div>
      </div>`
    ).join("");

    // education
    $("#timeline-edu").innerHTML = SITE.education.map(e =>
      `<div class="tl-item reveal">
        <div class="tl-role">${t(e.degree)}</div>
        <div class="tl-company">${t(e.school)}</div>
        <div class="tl-date">${t(e.place)}</div>
        <ul class="tl-points"><li>${t(e.detail)}</li></ul>
      </div>`
    ).join("");

    // languages
    $("#languages-wrap").innerHTML = SITE.languages.map(l =>
      `<div class="lang-bar reveal">
        <div class="lang-head"><b>${t(l.name)}</b><span>${t(l.level)}</span></div>
        <div class="lang-track"><div class="lang-fill" data-pct="${l.pct}"></div></div>
      </div>`
    ).join("");

    // featured academic projects
    $("#academic-grid").innerHTML = SITE.academicProjects.map(a =>
      `<div class="proj-card reveal">
        <div class="proj-top"><span class="proj-icon">🔬</span><span class="proj-tag">${t(a.tag)}</span></div>
        <div class="proj-title">${t(a.title)}</div>
        <div class="proj-desc">${t(a.desc)}</div>
        <div class="proj-stack">${a.stack.map(s => `<span>${s}</span>`).join("")}</div>
      </div>`
    ).join("");

    // publications
    $("#publications-wrap").innerHTML = SITE.publications.map(pub =>
      `<div class="pub-card reveal">
        <div class="pub-authors">${pub.authors}</div>
        <div class="pub-title">${t(pub.title)}</div>
        <div class="pub-venue">${t(pub.venue)}</div>
      </div>`
    ).join("");

    // leadership
    $("#leadership-wrap").innerHTML = SITE.leadership.map(l =>
      `<div class="lead-card reveal">
        <div class="lead-role">${t(l.role)}</div>
        <div class="lead-org">${t(l.org)}</div>
        <div class="lead-date">${t(l.date)}</div>
        <div class="lead-desc">${t(l.desc)}</div>
      </div>`
    ).join("");

    // contact cards
    const cc = [
      [ICON.mail, "Email", p.email, "mailto:" + p.email],
      [ICON.linkedin, "LinkedIn", "in/yunusberkayinci", p.linkedin],
      [ICON.github, "GitHub", "@" + p.github, p.githubUrl],
      [ICON.location, "Location", t(p.location), ""],
      [ICON.cv, t(I18N.labels.downloadCv), p.cv ? p.cv.split("/").pop() : "", p.cv || ""]
    ];
    $("#contact-cards").innerHTML = cc.filter(c => c[2]).map(([ic, label, val, href]) =>
      `<a class="contact-card" ${href ? `href="${href}" target="_blank" rel="noopener"` : ""}>
        <span class="cc-icon">${ic}</span>
        <span><span class="cc-label">${label}</span><br><span class="cc-val">${val}</span></span>
      </a>`
    ).join("");

    // footer
    $("#footer-text").innerHTML = `© ${new Date().getFullYear()} ${p.name} · ${t(I18N.footer.built)} <b>♥</b> · ${t(I18N.footer.rights)}`;

    rebindHoverTargets();
    observeReveals();
    observeAnim();
    initCounters();
    initInteractive();
    animateLangBars();
    renderFeatured();
  }

  /* =======================================================================
     TYPING EFFECT
     ======================================================================= */
  let typeTimer;
  function startTyping() {
    clearTimeout(typeTimer);
    const el = $("#typed");
    const roles = SITE.profile.roles[lang] || SITE.profile.roles.en;
    let ri = 0, ci = 0, deleting = false;
    (function tick() {
      const word = roles[ri];
      el.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) { ci++; typeTimer = setTimeout(tick, 70); }
      else if (!deleting && ci === word.length) { deleting = true; typeTimer = setTimeout(tick, 1500); }
      else if (deleting && ci > 0) { ci--; typeTimer = setTimeout(tick, 35); }
      else { deleting = false; ri = (ri + 1) % roles.length; typeTimer = setTimeout(tick, 350); }
    })();
  }

  /* =======================================================================
     SCROLL REVEAL
     ======================================================================= */
  let revObserver, animObserver, countObserver;
  function observeReveals() {
    revObserver?.disconnect();
    revObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revObserver.unobserve(e.target); } });
    }, { threshold: 0.12 });
    $$(".reveal").forEach(el => revObserver.observe(el));
  }

  // Entrance animations for [data-anim] with stagger by source order
  function observeAnim() {
    animObserver?.disconnect();
    animObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target, delay = +(el.dataset.delay || 0);
        setTimeout(() => el.classList.add("in"), delay);
        animObserver.unobserve(el);
      });
    }, { threshold: 0.15 });
    $$("[data-anim]").forEach((el, i) => {
      if (!el.dataset.delay && el.closest(".hero")) el.dataset.delay = i * 110;
      animObserver.observe(el);
    });
    $$(".stagger").forEach(el => animObserver.observe(el));
  }

  // Count-up numbers for stat cards
  function initCounters() {
    countObserver?.disconnect();
    countObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target, raw = el.dataset.count;
        const m = raw.match(/^([\d.]+)(.*)$/);
        if (!m) { countObserver.unobserve(el); return; }
        const target = parseFloat(m[1]); const suffix = m[2] || "";
        const dec = (m[1].split(".")[1] || "").length;
        const dur = 1400, t0 = performance.now();
        (function step(now) {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(dec) + suffix;
          if (p < 1) requestAnimationFrame(step);
        })(t0);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.4 });
    $$("[data-count]").forEach(el => countObserver.observe(el));
  }
  function animateLangBars() {
    setTimeout(() => $$(".lang-fill").forEach(f => f.style.width = f.dataset.pct + "%"), 400);
  }

  /* =======================================================================
     GITHUB PROJECTS
     ======================================================================= */
  let repoCache = null;
  async function loadGitHub() {
    const grid = $("#github-grid");
    try {
      if (!repoCache) {
        const res = await fetch(`https://api.github.com/users/${SITE.profile.github}/repos?per_page=100&sort=updated`);
        if (!res.ok) throw new Error("GitHub API");
        repoCache = (await res.json()).filter(r => !r.fork && r.name.toLowerCase() !== SITE.profile.github.toLowerCase());
      }
      const featured = SITE.featuredRepos || [];
      const rest = repoCache
        .filter(r => !featured.includes(r.name))
        .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));
      grid.innerHTML = rest.map(repoCard).join("");
      renderFeatured();
      observeReveals();
      rebindHoverTargets();
      initInteractive();
    } catch (e) {
      grid.innerHTML = `<p class="loading">⚠️ ${SITE.profile.github} — <a href="${SITE.profile.githubUrl}" target="_blank" rel="noopener" style="color:var(--neon)">GitHub →</a></p>`;
    }
  }
  function renderFeatured() {
    const grid = $("#featured-grid");
    if (!repoCache) { grid.innerHTML = `<p class="loading">${t(I18N.labels.loading)}</p>`; return; }
    const featured = (SITE.featuredRepos || []).map(n => repoCache.find(r => r.name === n)).filter(Boolean);
    grid.innerHTML = featured.length ? featured.map(repoCard).join("") : "";
    observeReveals();
  }
  function repoCard(r) {
    const emoji = PROJ_EMOJI[r.language] || PROJ_EMOJI.default;
    const color = LANG_COLOR[r.language] || "var(--neon)";
    const name = r.name.replace(/[-_.]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    const topics = (r.topics || []).slice(0, 4);
    return `<div class="proj-card reveal">
      <div class="proj-top"><span class="proj-icon">${emoji}</span>${
        r.stargazers_count ? `<span class="proj-stars">⭐ ${r.stargazers_count}</span>` : `<span class="proj-tag">repo</span>`
      }</div>
      <div class="proj-title">${name}</div>
      <div class="proj-desc">${r.description || "—"}</div>
      ${topics.length ? `<div class="proj-stack">${topics.map(tp => `<span>${tp}</span>`).join("")}</div>` : ""}
      <div class="proj-foot">
        ${r.language ? `<span class="proj-lang"><span class="lang-dot" style="background:${color}"></span>${r.language}</span>` : "<span></span>"}
        <a class="proj-link" href="${r.html_url}" target="_blank" rel="noopener">${t(I18N.labels.viewGithub)} →</a>
      </div>
    </div>`;
  }

  /* =======================================================================
     PARTICLE / NEURAL BACKGROUND
     ======================================================================= */
  function initBackground() {
    const canvas = $("#bg-canvas"), ctx = canvas.getContext("2d");
    let w, h, pts = [], mouse = { x: -999, y: -999 };
    const COUNT = () => Math.min(90, Math.floor(window.innerWidth / 16));
    function resize() {
      w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight;
      pts = Array.from({ length: COUNT() }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4
      }));
    }
    function loop() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        // mouse attraction
        const dxm = mouse.x - a.x, dym = mouse.y - a.y, dm = Math.hypot(dxm, dym);
        if (dm < 160) { a.x += dxm / dm * .6; a.y += dym / dm * .6; }
        // node
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.6, 0, 7); ctx.fillStyle = "rgba(120,180,255,.7)"; ctx.fill();
        // links
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
          if (d < 130) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            const near = (dm < 160 || Math.hypot(mouse.x - b.x, mouse.y - b.y) < 160);
            ctx.strokeStyle = near ? `rgba(56,225,255,${.5 - d/260})` : `rgba(120,140,220,${.25 - d/520})`;
            ctx.lineWidth = near ? 1 : .6; ctx.stroke();
          }
        }
      }
      requestAnimationFrame(loop);
    }
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener("mouseout", () => { mouse.x = mouse.y = -999; });
    resize(); loop();
  }

  /* =======================================================================
     CUSTOM CURSOR + NAV + UI WIRING
     ======================================================================= */
  function rebindHoverTargets() {
    const glow = $("#cursor-glow");
    $$("a, button, .proj-card, .stat-card, .skill-tag, .contact-card").forEach(el => {
      el.addEventListener("mouseenter", () => glow.classList.add("hot"));
      el.addEventListener("mouseleave", () => glow.classList.remove("hot"));
    });
  }
  // Magnetic buttons + 3D tilt on cards & photo (re-bindable for dynamic content)
  const boundTilt = new WeakSet();
  function initInteractive() {
    if (window.matchMedia("(hover: none)").matches) return;
    // magnetic
    $$(".magnetic").forEach(el => {
      if (boundTilt.has(el)) return; boundTilt.add(el);
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - r.left - r.width / 2, my = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${mx * 0.25}px, ${my * 0.35}px)`;
      });
      el.addEventListener("mouseleave", () => el.style.transform = "");
    });
    // tilt
    $$(".proj-card, .stat-card, #photo-tilt").forEach(el => {
      if (boundTilt.has(el)) return; boundTilt.add(el);
      const strength = el.id === "photo-tilt" ? 12 : 7;
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${px * strength}deg) rotateX(${-py * strength}deg)` + (el.classList.contains("proj-card") || el.classList.contains("stat-card") ? " translateY(-6px)" : "");
      });
      el.addEventListener("mouseleave", () => el.style.transform = "");
    });
  }

  function buildMarquee() {
    const track = $("#marquee-track"); if (!track) return;
    const items = ["Python","PyTorch","TensorFlow","LLM / RAG","LangChain","Computer Vision","OpenCV","GANs","Laravel","Vue.js",".NET Core","Angular","Docker","AWS","ESP32 · IoT","Data Science","C++","Edge AI"];
    const html = items.map(i => `<span>${i}</span>`).join("");
    track.innerHTML = html + html; // duplicate for seamless loop
  }

  function initPreloader() {
    const pre = $("#preloader"); if (!pre) return;
    const bar = pre.querySelector(".pre-bar span"), cnt = pre.querySelector(".pre-count");
    let p = 0;
    const tick = setInterval(() => {
      p = Math.min(p + Math.random() * 18, 100);
      bar.style.width = p + "%"; cnt.textContent = Math.floor(p) + "%";
      if (p >= 100) {
        clearInterval(tick);
        setTimeout(() => { pre.classList.add("done"); document.body.classList.add("loaded"); }, 350);
      }
    }, 120);
  }

  function initUI() {
    const glow = $("#cursor-glow"), dot = $("#cursor-dot");
    window.addEventListener("mousemove", e => {
      glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px";
      dot.style.left = e.clientX + "px"; dot.style.top = e.clientY + "px";
    });

    const nav = $("#navbar"), prog = $("#scroll-progress"), toTop = $("#to-top");
    const photo = $(".hero-photo-wrap"), heroText = $(".hero-text");
    const onScroll = () => {
      const sc = window.scrollY;
      nav.classList.toggle("scrolled", sc > 40);
      toTop.classList.toggle("show", sc > 600);
      // hero parallax (only while hero in view)
      if (sc < window.innerHeight) {
        if (photo) photo.style.transform = `translateY(${sc * 0.18}px)`;
        if (heroText) heroText.style.transform = `translateY(${sc * 0.08}px)`;
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (sc / max * 100) + "%";
      // active nav
      let cur = "";
      $$("section[id]").forEach(s => { if (sc >= s.offsetTop - 120) cur = s.id; });
      $$("#nav-links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
    };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // mobile menu
    const menuBtn = $("#menu-toggle"), links = $("#nav-links");
    menuBtn.addEventListener("click", () => { menuBtn.classList.toggle("open"); links.classList.toggle("open"); });
    $$("#nav-links a").forEach(a => a.addEventListener("click", () => { menuBtn.classList.remove("open"); links.classList.remove("open"); }));

    // language toggle
    $("#lang-toggle").addEventListener("click", () => {
      lang = lang === "tr" ? "en" : "tr";
      localStorage.setItem("lang", lang);
      render(); startTyping();
    });
  }

  /* =======================================================================
     MINI GAME — "Data Catcher"
     ======================================================================= */
  function initGame() {
    const canvas = $("#game-canvas"), ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const overlay = $("#game-overlay"), msg = $("#game-msg"), btn = $("#game-btn");
    const scoreEl = $("#game-score"), bestEl = $("#game-best");
    let best = +(localStorage.getItem("gameBest") || 0); bestEl.textContent = best;

    let running = false, score = 0, items = [], player, raf, spawnT = 0, speed = 1, keys = {};

    function reset() {
      score = 0; items = []; speed = 1; spawnT = 0;
      player = { x: W / 2, w: 70, h: 14, y: H - 30 };
      scoreEl.textContent = 0;
    }
    function spawn() {
      const bug = Math.random() < 0.32;
      items.push({ x: Math.random() * (W - 40) + 20, y: -20, r: 12, vy: 2 + Math.random() * 2 + speed, bug });
    }
    function end() {
      running = false; cancelAnimationFrame(raf);
      if (score > best) { best = score; localStorage.setItem("gameBest", best); bestEl.textContent = best; }
      msg.textContent = `${t(I18N.labels.gameOver)}  ${t(I18N.labels.gameScore)}: ${score}`;
      btn.textContent = t(I18N.labels.gameRetry);
      overlay.classList.remove("hidden");
    }
    function frame() {
      ctx.clearRect(0, 0, W, H);
      // grid backdrop
      ctx.strokeStyle = "rgba(56,225,255,0.05)"; ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }

      // keyboard move
      if (keys.left) player.x -= 7;
      if (keys.right) player.x += 7;
      player.x = Math.max(player.w / 2, Math.min(W - player.w / 2, player.x));

      // paddle
      const grad = ctx.createLinearGradient(player.x - player.w/2, 0, player.x + player.w/2, 0);
      grad.addColorStop(0, "#38e1ff"); grad.addColorStop(1, "#b14dff");
      ctx.fillStyle = grad; ctx.shadowColor = "#38e1ff"; ctx.shadowBlur = 18;
      ctx.fillRect(player.x - player.w / 2, player.y, player.w, player.h);
      ctx.shadowBlur = 0;

      // spawn
      if (++spawnT > Math.max(28 - speed * 2, 12)) { spawn(); spawnT = 0; }
      speed += 0.0016;

      for (let i = items.length - 1; i >= 0; i--) {
        const it = items[i]; it.y += it.vy;
        ctx.beginPath(); ctx.arc(it.x, it.y, it.r, 0, 7);
        if (it.bug) { ctx.fillStyle = "#ff4d8d"; ctx.fill(); ctx.fillStyle="#fff"; ctx.font="14px monospace"; ctx.textAlign="center"; ctx.fillText("✖", it.x, it.y+5); }
        else { ctx.fillStyle = "#2bffb0"; ctx.shadowColor="#2bffb0"; ctx.shadowBlur=12; ctx.fill(); ctx.shadowBlur=0; }
        // catch
        if (it.y + it.r >= player.y && it.y - it.r <= player.y + player.h && Math.abs(it.x - player.x) < player.w / 2 + it.r) {
          if (it.bug) { end(); return; }
          score += 10; scoreEl.textContent = score; items.splice(i, 1); continue;
        }
        if (it.y - it.r > H) { items.splice(i, 1); }
      }
      raf = requestAnimationFrame(frame);
    }
    function start() { reset(); overlay.classList.add("hidden"); running = true; frame(); }

    btn.addEventListener("click", start);
    canvas.addEventListener("mousemove", e => {
      if (!running) return;
      const rect = canvas.getBoundingClientRect();
      player.x = (e.clientX - rect.left) * (W / rect.width);
    });
    canvas.addEventListener("touchmove", e => {
      if (!running) return; e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      player.x = (e.touches[0].clientX - rect.left) * (W / rect.width);
    }, { passive: false });
    window.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft") keys.left = true;
      if (e.key === "ArrowRight") keys.right = true;
    });
    window.addEventListener("keyup", e => {
      if (e.key === "ArrowLeft") keys.left = false;
      if (e.key === "ArrowRight") keys.right = false;
    });
  }

  /* =======================================================================
     BOOT
     ======================================================================= */
  document.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    buildMarquee();
    render();
    initUI();
    initBackground();
    startTyping();
    initGame();
    loadGitHub();
  });
  window.addEventListener("load", () => { /* ensure preloader finishes even if assets slow */ });
})();
