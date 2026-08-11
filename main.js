/* =========================================================================
   main.js — i18n, tema, animasyonlar, canlı GitHub verisi, mini oyun
   ========================================================================= */
(() => {
  "use strict";

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const HAS_HOVER = window.matchMedia("(hover: hover)").matches;

  /* HTML kaçışı — GitHub'dan gelen metinler için */
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Dil ---------- */
  let lang = localStorage.getItem("lang") || "tr";
  const t = (o) => (o && typeof o === "object" && !Array.isArray(o) ? (o[lang] ?? o.en ?? "") : (o ?? ""));

  /* ---------- İkonlar ---------- */
  const ICON = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2 0 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6.5 9 6.2 9-6.2"/></svg>',
    location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 10.5c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10.2" r="2.8"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zM6 14.2v3.3c0 1.7 2.7 3 6 3s6-1.3 6-3v-3.3l-6 3.3-6-3.3z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9z"/></svg>',
    fork: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="6.5" cy="4.5" r="2.2"/><circle cx="17.5" cy="4.5" r="2.2"/><circle cx="12" cy="19.5" r="2.2"/><path d="M6.5 6.7v2.1c0 1.7 1.4 3.1 3.1 3.1h4.8c1.7 0 3.1-1.4 3.1-3.1V6.7M12 12v5.3"/></svg>'
  };

  /* GitHub dil renkleri */
  const LANG_COLOR = {
    JavaScript: "#e3b341", TypeScript: "#6f9ad3", Python: "#7aa6c2", "C++": "#d47a95",
    C: "#9a9a9a", "C#": "#7bb37b", HTML: "#d98862", CSS: "#9d8ac2", PHP: "#8d92b8",
    Java: "#c0916a", PowerShell: "#7f92c9", Vue: "#71b393", Shell: "#a8c48a", MATLAB: "#cf8a6d"
  };

  /* =======================================================================
     TEMA
     ======================================================================= */
  function applyTheme(next) {
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "light" ? "#f6f4ef" : "#0d0e11");
  }
  function initTheme() {
    $("#theme-toggle").addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      if (document.startViewTransition && !REDUCED) document.startViewTransition(() => applyTheme(next));
      else applyTheme(next);
    });
  }

  /* =======================================================================
     RENDER — dil değişiminde yeniden çalıştırılabilir
     ======================================================================= */
  function render() {
    const p = SITE.profile;
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;

    $$("[data-i18n]").forEach(el => {
      const v = el.dataset.i18n.split(".").reduce((o, k) => o?.[k], I18N);
      if (v) el.textContent = t(v);
    });
    $$("[data-nav]").forEach(el => el.textContent = t(I18N.nav[el.dataset.nav]));

    /* Hero */
    $("#hero-availability").textContent = t(p.availability);
    $("#hero-title").textContent = t(p.title);
    $("#hero-tagline").textContent = t(p.tagline);
    $("#photo-caption").textContent = t(p.photoCaption);

    /* Sosyal bağlantılar */
    $("#hero-socials").innerHTML = [
      [p.githubUrl, ICON.github, "GitHub"],
      [p.linkedin, ICON.linkedin, "LinkedIn"],
      ["mailto:" + p.email, ICON.mail, "E-posta"],
      [p.scholar, ICON.scholar, "Google Scholar"]
    ].filter(([href]) => href).map(([href, ic, title]) =>
      `<a href="${href}" target="_blank" rel="noopener" title="${title}" aria-label="${title}">${ic}</a>`
    ).join("");

    /* Hakkımda */
    $("#about-text").textContent = t(SITE.about);
    $("#now-wrap").innerHTML = SITE.now.map(n =>
      `<li><b>${t(n.label)}</b><span>${t(n.text)}</span></li>`
    ).join("");
    $("#about-stats").innerHTML = SITE.about.highlights.map(h =>
      `<div class="stat reveal"><div class="stat-value" data-count="${h.value}">${h.value}</div><div class="stat-label">${t(h.label)}</div></div>`
    ).join("");

    /* Yetenekler */
    $("#skills-wrap").innerHTML = SITE.skills.map(g =>
      `<div class="skill-group reveal"><h4>${t(g.group)}</h4><div class="skill-tags">${
        g.items.map(i => `<span class="skill-tag">${i}</span>`).join("")
      }</div></div>`
    ).join("");

    /* Deneyim */
    $("#timeline-exp").innerHTML = SITE.experience.map(e =>
      `<div class="tl-item reveal">
        <div class="tl-role">${t(e.role)}</div>
        <div class="tl-company">${t(e.company)}</div>
        <div class="tl-date">${t(e.date)}</div>
        <ul class="tl-points">${t(e.points).map(pt => `<li>${pt}</li>`).join("")}</ul>
        <div class="tl-stack">${e.stack.map(s => `<span>${s}</span>`).join("")}</div>
      </div>`
    ).join("");

    /* Eğitim */
    $("#timeline-edu").innerHTML = SITE.education.map(e =>
      `<div class="tl-item reveal">
        <div class="tl-role">${t(e.degree)}</div>
        <div class="tl-company">${t(e.school)}</div>
        <div class="tl-date">${t(e.date)}</div>
        <ul class="tl-points"><li>${t(e.detail)}</li></ul>
      </div>`
    ).join("");

    /* Diller */
    $("#languages-wrap").innerHTML = SITE.languages.map(l =>
      `<div class="lang-bar reveal">
        <div class="lang-head"><b>${t(l.name)}</b><span>${t(l.level)}</span></div>
        <div class="lang-track"><div class="lang-fill" data-pct="${l.pct}"></div></div>
      </div>`
    ).join("");

    /* Araştırma projeleri */
    $("#academic-grid").innerHTML = SITE.academicProjects.map(a =>
      `<article class="proj-card reveal">
        <div class="proj-top"><span class="proj-kind">${t(a.tag)}</span></div>
        <h4 class="proj-title">${t(a.title)}</h4>
        <p class="proj-desc">${t(a.desc)}</p>
        <div class="proj-stack">${a.stack.map(s => `<span>${s}</span>`).join("")}</div>
      </article>`
    ).join("");

    /* Yayınlar */
    $("#publications-wrap").innerHTML = SITE.publications.map((pub, i) =>
      `<div class="pub-card reveal">
        <span class="pub-num">${String(i + 1).padStart(2, "0")}</span>
        <div>
          <div class="pub-title">${t(pub.title)}</div>
          <div class="pub-authors">${pub.authors}</div>
          <div class="pub-venue">${t(pub.venue)}</div>
        </div>
      </div>`
    ).join("");

    /* Ödüller */
    $("#honors-wrap").innerHTML = SITE.honors.map(h => `<li class="reveal">${t(h)}</li>`).join("");

    /* Liderlik */
    $("#leadership-wrap").innerHTML = SITE.leadership.map(l =>
      `<div class="lead-card reveal">
        <div class="lead-role">${t(l.role)}</div>
        <div class="lead-org">${t(l.org)}</div>
        <div class="lead-date">${t(l.date)}</div>
        <p class="lead-desc">${t(l.desc)}</p>
      </div>`
    ).join("");

    /* CTA bandı */
    $("#cta-actions").innerHTML =
      `<a class="btn btn-primary magnetic" href="mailto:${p.email}">${ICON.mail}${t(I18N.labels.ctaMail)}</a>
       <a class="btn btn-ghost magnetic" href="#projects">${t(I18N.labels.ctaWork)}</a>`;

    /* İletişim satırları */
    const rows = [
      [lang === "tr" ? "E-posta" : "Email", p.email, "mailto:" + p.email],
      ["LinkedIn", "in/yunusberkayinci", p.linkedin],
      ["GitHub", "@" + p.github, p.githubUrl],
      [lang === "tr" ? "Konum" : "Location", t(p.location), ""]
    ];
    $("#contact-cards").innerHTML = rows.filter(r => r[1]).map(([label, val, href]) => {
      const inner = `<span class="cr-label">${label}</span><span class="cr-value">${val}</span>` +
                    (href ? `<span class="cr-arrow">${ICON.arrow}</span>` : `<span class="cr-arrow">${ICON.location}</span>`);
      return href
        ? `<a class="contact-row" href="${href}"${href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${inner}</a>`
        : `<div class="contact-row">${inner}</div>`;
    }).join("");

    /* Footer */
    $("#footer-left").innerHTML = `© ${new Date().getFullYear()} ${p.name} · ${t(I18N.footer.rights)}`;
    $("#footer-right").innerHTML = `${t(I18N.footer.built)} · <a href="${p.githubUrl}/personal-portfolio" target="_blank" rel="noopener">${t(I18N.footer.source)}</a>`;

    renderGhStats();
    renderFilters();
    renderFeatured();
    renderRepos();
    observeAll();
    initInteractive();
    animateLangBars();
  }

  /* =======================================================================
     YAZI ANİMASYONU
     ======================================================================= */
  let typeTimer;
  function startTyping() {
    clearTimeout(typeTimer);
    const el = $("#typed");
    const roles = SITE.profile.roles[lang] || SITE.profile.roles.en;
    if (REDUCED) { el.textContent = roles[0]; return; }
    let ri = 0, ci = 0, deleting = false;
    (function tick() {
      const word = roles[ri];
      el.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length)       { ci++; typeTimer = setTimeout(tick, 65); }
      else if (!deleting && ci === word.length){ deleting = true; typeTimer = setTimeout(tick, 1900); }
      else if (deleting && ci > 0)             { ci--; typeTimer = setTimeout(tick, 28); }
      else { deleting = false; ri = (ri + 1) % roles.length; typeTimer = setTimeout(tick, 320); }
    })();
  }

  /* =======================================================================
     GÖRÜNÜRLÜK GÖZLEMCİLERİ
     ======================================================================= */
  let io, ioAnim, ioCount;
  function observeAll() {
    io?.disconnect(); ioAnim?.disconnect(); ioCount?.disconnect();

    io = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (!e.isIntersecting) return;
        const sibs = [...(e.target.parentElement?.children || [])].filter(c => c.classList.contains("reveal"));
        const i = Math.min(sibs.indexOf(e.target), 8);
        e.target.style.transitionDelay = (i > 0 ? i * 70 : 0) + "ms";
        e.target.classList.add("in");
        io.unobserve(e.target);
      });
    }, { threshold: .08, rootMargin: "0px 0px -8% 0px" });
    $$(".reveal:not(.in)").forEach(el => io.observe(el));

    ioAnim = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (!e.isIntersecting) return;
        setTimeout(() => e.target.classList.add("in"), +(e.target.dataset.delay || 0));
        ioAnim.unobserve(e.target);
      });
    }, { threshold: .12 });
    $$("[data-anim]:not(.in)").forEach((el, i) => {
      // Hero öğeleri açılış perdesi kalktıktan sonra sırayla girsin
      if (!el.dataset.delay && el.closest(".hero")) el.dataset.delay = 620 + i * 110;
      ioAnim.observe(el);
    });

    ioCount = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (!e.isIntersecting) return;
        countUp(e.target);
        ioCount.unobserve(e.target);
      });
    }, { threshold: .5 });
    $$("[data-count]").forEach(el => ioCount.observe(el));
  }

  function countUp(el) {
    const m = String(el.dataset.count).match(/^([\d.]+)(.*)$/);
    if (!m || REDUCED) return;
    const target = parseFloat(m[1]), suffix = m[2] || "";
    const dec = (m[1].split(".")[1] || "").length;
    const dur = 1300, t0 = performance.now();
    (function step(now) {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = (target * (1 - Math.pow(1 - p, 3))).toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  function animateLangBars() {
    setTimeout(() => $$(".lang-fill").forEach(f => f.style.width = f.dataset.pct + "%"), 500);
  }

  /* =======================================================================
     GITHUB — canlı depo verisi (30 dk yerel önbellek + arka planda yenileme)
     ======================================================================= */
  const GH_KEY = "gh:repos:v2";
  const GH_TTL = 30 * 60 * 1000;
  let repos = null;          // fork olmayan depolar
  let activeFilter = "all";
  let expanded = false;
  const VISIBLE = 6;

  async function loadGitHub() {
    const cached = readCache();
    if (cached) { repos = cached.data; renderGithub(); }

    if (!cached || Date.now() - cached.time > GH_TTL) {
      try {
        const res = await fetch(`https://api.github.com/users/${SITE.profile.github}/repos?per_page=100&sort=updated`);
        if (!res.ok) throw new Error("GitHub API " + res.status);
        const raw = await res.json();
        repos = raw
          .filter(r => !r.fork && !r.archived && r.name.toLowerCase() !== SITE.profile.github.toLowerCase())
          .map(r => ({
            name: r.name, url: r.html_url, home: r.homepage, desc: r.description,
            lang: r.language, stars: r.stargazers_count, forks: r.forks_count,
            topics: r.topics || [], pushed: r.pushed_at, updated: r.updated_at
          }));
        writeCache(repos);
        renderGithub();
      } catch (err) {
        if (!repos) showRepoError();
      }
    }
  }
  function readCache() {
    try {
      const raw = JSON.parse(localStorage.getItem(GH_KEY));
      return raw && Array.isArray(raw.data) && raw.data.length ? raw : null;
    } catch { return null; }
  }
  function writeCache(data) {
    try { localStorage.setItem(GH_KEY, JSON.stringify({ time: Date.now(), data })); } catch {}
  }
  function renderGithub() {
    renderGhStats(); renderFilters(); renderFeatured(); renderRepos(); observeAll(); initInteractive();
  }
  function showRepoError() {
    $("#github-grid").innerHTML =
      `<p class="loading">GitHub API şu an yanıt vermedi — projelere doğrudan
        <a href="${SITE.profile.githubUrl}?tab=repositories" target="_blank" rel="noopener">github.com/${SITE.profile.github}</a> üzerinden bakabilirsin.</p>`;
    $("#featured-grid").innerHTML = "";
  }

  function renderGhStats() {
    const box = $("#gh-stats"); if (!box) return;
    if (!repos) { box.innerHTML = ""; return; }
    const stars = repos.reduce((a, r) => a + r.stars, 0);
    const langs = new Set(repos.map(r => r.lang).filter(Boolean)).size;
    const last = repos.reduce((a, r) => (!a || r.pushed > a ? r.pushed : a), null);
    box.innerHTML = [
      [repos.length, t(I18N.labels.repos)],
      [stars, t(I18N.labels.stars)],
      [langs, t(I18N.labels.langs)],
      [timeAgo(last), t(I18N.labels.lastPush)]
    ].map(([v, l]) => `<div class="gh-stat"><b>${v}</b><span>${l}</span></div>`).join("");
  }

  function renderFilters() {
    const box = $("#repo-filters"); if (!box || !repos) return;
    const counts = {};
    repos.forEach(r => { if (r.lang) counts[r.lang] = (counts[r.lang] || 0) + 1; });
    const langs = Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([l]) => l);
    box.innerHTML = [["all", t(I18N.labels.allFilter)], ...langs.map(l => [l, l])]
      .map(([v, label]) =>
        `<button class="filter-chip${activeFilter === v ? " active" : ""}" data-filter="${esc(v)}">${esc(label)}</button>`
      ).join("");
    $$(".filter-chip", box).forEach(b => b.addEventListener("click", () => {
      activeFilter = b.dataset.filter; expanded = false; renderFilters(); renderRepos(); observeAll(); initInteractive();
    }));
  }

  function renderFeatured() {
    const grid = $("#featured-grid"); if (!grid) return;
    if (!repos) { grid.innerHTML = `<p class="loading">${t(I18N.labels.loading)}</p>`; return; }
    const picks = (SITE.featuredRepos || []).map(n => repos.find(r => r.name === n)).filter(Boolean);
    const list = picks.length ? picks : [...repos].sort((a, b) => b.stars - a.stars).slice(0, 6);
    // map'in index argümanı repoCard'ın "hidden" parametresine geçmesin
    grid.innerHTML = list.map(r => repoCard(r)).join("");
  }

  function renderRepos() {
    const grid = $("#github-grid"), more = $("#repo-more");
    if (!grid) return;
    if (!repos) { grid.innerHTML = `<p class="loading">${t(I18N.labels.loading)}</p>`; return; }

    const list = repos
      .filter(r => activeFilter === "all" || r.lang === activeFilter)
      .sort((a, b) => b.stars - a.stars || new Date(b.pushed) - new Date(a.pushed));

    grid.innerHTML = list.length
      ? list.map((r, i) => repoCard(r, i >= VISIBLE && !expanded)).join("")
      : `<p class="loading">—</p>`;

    if (list.length > VISIBLE) {
      more.hidden = false;
      more.textContent = expanded ? t(I18N.labels.showLess) : `${t(I18N.labels.showMore)} (${list.length})`;
      more.onclick = () => { expanded = !expanded; renderRepos(); observeAll(); initInteractive(); };
    } else {
      more.hidden = true;
    }
  }

  function prettyName(n) {
    return n.replace(/[-_.]+/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  }
  function timeAgo(iso) {
    if (!iso) return "—";
    const d = Math.floor((Date.now() - new Date(iso)) / 86400000);
    const a = I18N.labels.ago;
    if (d <= 0) return t(a.today);
    if (d < 30) return `${d} ${t(a.day)}`;
    if (d < 365) return `${Math.floor(d / 30)} ${t(a.month)}`;
    return `${Math.floor(d / 365)} ${t(a.year)}`;
  }

  function repoCard(r, hidden = false) {
    const color = LANG_COLOR[r.lang] || "var(--accent)";
    const topics = r.topics.slice(0, 4);
    const meta = [
      r.stars ? `<i>${ICON.star}${r.stars}</i>` : "",
      r.forks ? `<i>${ICON.fork}${r.forks}</i>` : ""
    ].join("");
    return `<article class="proj-card reveal${hidden ? " hidden-repo" : ""}">
      <div class="proj-top">
        <span class="proj-kind">${esc(r.lang || "repo")}</span>
        <span class="proj-meta">${meta}</span>
      </div>
      <h4 class="proj-title">${esc(prettyName(r.name))}</h4>
      <p class="proj-desc">${esc(r.desc || "—")}</p>
      ${topics.length ? `<div class="proj-stack">${topics.map(x => `<span>${esc(x)}</span>`).join("")}</div>` : ""}
      <div class="proj-foot">
        <span class="proj-lang">${r.lang ? `<span class="lang-dot" style="background:${color}"></span>${esc(r.lang)}` : `${t(I18N.labels.updated)} ${timeAgo(r.pushed)}`}</span>
        <span class="proj-links">
          ${r.home ? `<a class="proj-link" href="${esc(r.home)}" target="_blank" rel="noopener">${t(I18N.labels.liveDemo)}</a>` : ""}
          <a class="proj-link" href="${esc(r.url)}" target="_blank" rel="noopener">${t(I18N.labels.viewGithub)} ${ICON.arrow}</a>
        </span>
      </div>
    </article>`;
  }

  /* =======================================================================
     ETKİLEŞİM — manyetik butonlar, kart ışığı, imleç halkası
     ======================================================================= */
  const bound = new WeakSet();
  function initInteractive() {
    if (!HAS_HOVER || REDUCED) return;

    $$(".magnetic").forEach(el => {
      if (bound.has(el)) return; bound.add(el);
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .14}px, ${(e.clientY - r.top - r.height / 2) * .22}px)`;
      });
      el.addEventListener("mouseleave", () => el.style.transform = "");
    });

    $$(".proj-card").forEach(el => {
      if (bound.has(el)) return; bound.add(el);
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    });

    const ring = $("#cursor-ring");
    $$("a, button, .proj-card, .stat, .skill-tag").forEach(el => {
      if (el.dataset.hoverBound) return; el.dataset.hoverBound = "1";
      el.addEventListener("mouseenter", () => ring.classList.add("hot"));
      el.addEventListener("mouseleave", () => ring.classList.remove("hot"));
    });
  }

  function initCursor() {
    if (!HAS_HOVER || REDUCED) return;
    const ring = $("#cursor-ring");
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
    window.addEventListener("mousemove", e => {
      x = e.clientX; y = e.clientY; ring.classList.add("visible");
    }, { passive: true });
    document.addEventListener("mouseleave", () => ring.classList.remove("visible"));
    (function loop() {
      rx += (x - rx) * .16; ry += (y - ry) * .16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    })();
  }

  /* =======================================================================
     ARAYÜZ — gezinme, ilerleme, menü, dil
     ======================================================================= */
  function initUI() {
    const nav = $("#navbar"), prog = $("#scroll-progress"), toTop = $("#to-top");
    const media = $(".hero-media"), text = $(".hero-text");
    const sections = $$("main section[id]");

    let ticking = false;
    const onScroll = () => {
      const sc = window.scrollY;
      nav.classList.toggle("scrolled", sc > 30);
      toTop.classList.toggle("show", sc > 700);

      const max = document.documentElement.scrollHeight - innerHeight;
      prog.style.width = (max > 0 ? (sc / max) * 100 : 0) + "%";

      if (!REDUCED && sc < innerHeight) {
        if (media) media.style.transform = `translateY(${sc * .10}px)`;
        if (text)  text.style.transform  = `translateY(${sc * .04}px)`;
      }

      let cur = "";
      sections.forEach(s => { if (sc >= s.offsetTop - 140) cur = s.id; });
      $$("#nav-links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();

    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" }));

    const menuBtn = $("#menu-toggle"), links = $("#nav-links");
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open"); links.classList.toggle("open");
    });
    $$("#nav-links a").forEach(a => a.addEventListener("click", () => {
      menuBtn.classList.remove("open"); links.classList.remove("open");
    }));

    $("#lang-toggle").addEventListener("click", () => {
      lang = lang === "tr" ? "en" : "tr";
      localStorage.setItem("lang", lang);
      render(); startTyping();
    });
  }

  function buildMarquee() {
    const track = $("#marquee-track"); if (!track) return;
    const html = SITE.marquee.map(i => `<span>${i}</span>`).join("");
    track.innerHTML = html + html;
  }

  function initPreloader() {
    const pre = $("#preloader"); if (!pre) return;
    if (REDUCED) { pre.remove(); return; }
    const finish = () => {
      pre.classList.add("done");
      setTimeout(() => pre.remove(), 900);
    };
    setTimeout(finish, 950);
  }

  /* =======================================================================
     MİNİ OYUN — "Veri Yakalayıcı"
     ======================================================================= */
  function initGame() {
    const canvas = $("#game-canvas"); if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    const overlay = $("#game-overlay"), msg = $("#game-msg"), btn = $("#game-btn");
    const scoreEl = $("#game-score"), bestEl = $("#game-best");
    const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

    let best = +(localStorage.getItem("gameBest") || 0); bestEl.textContent = best;
    let running = false, score = 0, items = [], player, raf, spawnT = 0, speed = 1;
    const keys = {};

    const reset = () => {
      score = 0; items = []; speed = 1; spawnT = 0;
      player = { x: W / 2, w: 76, h: 6, y: H - 34 };
      scoreEl.textContent = 0;
    };
    const end = () => {
      running = false; cancelAnimationFrame(raf);
      if (score > best) { best = score; localStorage.setItem("gameBest", best); bestEl.textContent = best; }
      msg.textContent = `${t(I18N.labels.gameOver)} · ${t(I18N.labels.gameScore)} ${score}`;
      btn.textContent = t(I18N.labels.gameRetry);
      overlay.classList.remove("hidden");
    };

    function frame() {
      const accent = css("--accent") || "#d7b273";
      const line = css("--line") || "rgba(255,255,255,.1)";
      const text = css("--text") || "#eee";
      ctx.clearRect(0, 0, W, H);

      ctx.strokeStyle = line; ctx.lineWidth = 1;
      for (let x = 40; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x + .5, 0); ctx.lineTo(x + .5, H); ctx.stroke(); }

      if (keys.left)  player.x -= 7.5;
      if (keys.right) player.x += 7.5;
      player.x = Math.max(player.w / 2, Math.min(W - player.w / 2, player.x));

      ctx.fillStyle = accent;
      ctx.fillRect(player.x - player.w / 2, player.y, player.w, player.h);

      if (++spawnT > Math.max(30 - speed * 2, 13)) { spawn(); spawnT = 0; }
      speed += .0016;

      for (let i = items.length - 1; i >= 0; i--) {
        const it = items[i];
        it.y += it.vy;
        ctx.beginPath();
        if (it.bug) {
          ctx.strokeStyle = "#c96a6a"; ctx.lineWidth = 1.8;
          ctx.moveTo(it.x - 7, it.y - 7); ctx.lineTo(it.x + 7, it.y + 7);
          ctx.moveTo(it.x + 7, it.y - 7); ctx.lineTo(it.x - 7, it.y + 7);
          ctx.stroke();
        } else {
          ctx.fillStyle = text; ctx.arc(it.x, it.y, 5, 0, Math.PI * 2); ctx.fill();
        }
        if (it.y + it.r >= player.y && it.y - it.r <= player.y + player.h && Math.abs(it.x - player.x) < player.w / 2 + it.r) {
          if (it.bug) { end(); return; }
          score += 10; scoreEl.textContent = score; items.splice(i, 1); continue;
        }
        if (it.y - it.r > H) items.splice(i, 1);
      }
      raf = requestAnimationFrame(frame);
    }
    function spawn() {
      items.push({ x: Math.random() * (W - 60) + 30, y: -18, r: 9, vy: 2 + Math.random() * 2 + speed, bug: Math.random() < .32 });
    }
    const start = () => { reset(); overlay.classList.add("hidden"); running = true; frame(); };

    btn.addEventListener("click", start);
    canvas.addEventListener("mousemove", e => {
      if (!running) return;
      const r = canvas.getBoundingClientRect();
      player.x = (e.clientX - r.left) * (W / r.width);
    });
    canvas.addEventListener("touchmove", e => {
      if (!running) return; e.preventDefault();
      const r = canvas.getBoundingClientRect();
      player.x = (e.touches[0].clientX - r.left) * (W / r.width);
    }, { passive: false });
    window.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft")  { keys.left = true;  if (running) e.preventDefault(); }
      if (e.key === "ArrowRight") { keys.right = true; if (running) e.preventDefault(); }
    });
    window.addEventListener("keyup", e => {
      if (e.key === "ArrowLeft")  keys.left = false;
      if (e.key === "ArrowRight") keys.right = false;
    });
  }

  /* =======================================================================
     BAŞLAT
     ======================================================================= */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initPreloader();
    buildMarquee();
    render();
    initUI();
    initCursor();
    startTyping();
    initGame();
    loadGitHub();
  });
})();
