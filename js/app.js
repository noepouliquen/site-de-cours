(() => {
  "use strict";

  const D = window.MATIERES && window.MATIERES.semiotique;
  const view = document.getElementById("view");
  if (!D) {
    view.innerHTML = "<p>Contenu introuvable : vérifie que le fichier data/semiotique.js est bien à côté de index.html.</p>";
    return;
  }
  document.documentElement.lang = "fr";

  /* ---------------- Stockage (progression propre à cet appareil) ---------------- */
  const PREFIX = "semio-s5.";
  const load = (k, d) => { try { const v = localStorage.getItem(PREFIX + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } };
  const save = (k, v) => { try { localStorage.setItem(PREFIX + k, JSON.stringify(v)); } catch (e) { /* stockage indisponible */ } };
  const S = {
    cards: load("cards", {}),       // id carte -> { b: boîte, due: timestamp, seen }
    sujets: load("sujets", {}),     // id sujet -> { text, checked: [], corrected }
    fiches: load("fiches", {}),     // "p1-0" -> true
    quiz: load("quiz", {}),         // filtre -> meilleur score (%)
    exo: load("exo", { checks: {}, notes: {} }),
    exam: load("exam", null),       // { ids: [], texts: {}, corrige: false }
    timers: load("timers", {})      // clé -> fin (timestamp)
  };
  const persist = (k) => save(k, S[k]);
  const pending = {};
  const persistSoon = (k) => { clearTimeout(pending[k]); pending[k] = setTimeout(() => persist(k), 350); };

  /* ---------------- Utilitaires ---------------- */
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
  const srcLabel = (s) => s.split(";").map((x) => {
    const [c, d] = x.split(":");
    return `Cours ${c} · diapo${d.includes("-") ? "s" : ""} ${d.replace("-", "–")}`;
  }).join(" + ");
  const src = (s) => `<span class="src">${esc(srcLabel(s))}</span>`;
  const hash = (s) => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const plural = (n, one, many) => `${n} ${n > 1 ? many : one}`;

  const P = {};
  D.parties.forEach((p) => { P[p.id] = p; });
  const partLabel = (pid) => (P[pid].num === "Intro" ? "Intro" : "Partie " + P[pid].num);
  const chip = (pid) => `<span class="chip pc-${P[pid].couleur}"><i></i>${partLabel(pid)}</span>`;
  const pc = (pid) => `pc-${P[pid].couleur}`;

  const CARDS = D.flashcards.map((c) => ({ id: "c" + hash(c[1]), partie: c[0], recto: c[1], verso: c[2], src: c[3] }));
  const SUJETS = D.sujets;
  const SUJ = {};
  SUJETS.forEach((s) => { SUJ[s.id] = s; });
  const OFFICIELS = SUJETS.filter((s) => s.officiel);
  const numSujet = (s) => (s.officiel ? String(SUJETS.filter((x) => x.partie === s.partie && x.officiel).indexOf(s) + 1) : "B" + (SUJETS.filter((x) => !x.officiel).indexOf(s) + 1));

  /* ---------------- Dates ---------------- */
  const EXAM = (() => { const [y, m, d] = D.examen.date.split("-").map(Number); return new Date(y, m - 1, d); })();
  const dayDiff = () => { const t = new Date(); const a = new Date(t.getFullYear(), t.getMonth(), t.getDate()); return Math.round((EXAM - a) / 86400000); };
  const countdown = () => { const d = dayDiff(); return d > 0 ? "J-" + d : d === 0 ? "Jour J" : "Exam passé"; };
  const renderCountdown = () => {
    document.querySelectorAll("[data-countdown]").forEach((el) => {
      el.innerHTML = el.classList.contains("side-count")
        ? `<strong>${countdown()}</strong> · exam le ${esc(D.examen.libelle.replace(/^\w+ /, ""))}`
        : countdown();
    });
  };

  /* ---------------- Chronos ---------------- */
  const fmtDur = (ms) => {
    const t = Math.round(ms / 1000), h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), s = t % 60;
    const p = (n) => String(n).padStart(2, "0");
    return h ? `${h}:${p(m)}:${p(s)}` : `${p(m)}:${p(s)}`;
  };
  const tick = () => {
    document.querySelectorAll("[data-timer]").forEach((el) => {
      const end = S.timers[el.dataset.timer];
      if (!end) { el.textContent = fmtDur(+el.dataset.dur * 60000); el.classList.remove("is-running", "is-over"); return; }
      const rem = end - Date.now();
      el.textContent = (rem < 0 ? "+" : "") + fmtDur(Math.abs(rem));
      el.classList.add("is-running");
      el.classList.toggle("is-over", rem < 0);
    });
  };
  setInterval(tick, 1000);
  const timerBlock = (key, minutes, label) => `
    <div class="timer">
      <div class="timer-read" data-timer="${key}" data-dur="${minutes}" aria-live="off">${fmtDur(minutes * 60000)}</div>
      <div class="timer-meta"><span>${label}</span>
        <button class="btn btn-small ${S.timers[key] ? "btn-quiet" : ""}" data-act="timer" data-key="${key}" data-min="${minutes}">${S.timers[key] ? "Arrêter" : "Lancer le chrono"}</button>
      </div>
    </div>`;

  /* ---------------- Progression ---------------- */
  const BOX_MIN = [0, 10, 60, 360, 1440, 2880]; // délai avant de revoir une carte, selon sa boîte
  const cardRec = (c) => S.cards[c.id];
  const isDue = (c) => { const r = cardRec(c); return !r || r.due <= Date.now(); };
  const isMastered = (c) => { const r = cardRec(c); return !!r && r.b >= 3; };
  const sj = (id) => S.sujets[id] || (S.sujets[id] = { text: "", checked: [], corrected: false });
  const sujetScore = (id) => { const r = S.sujets[id]; return r && r.corrected ? pct(r.checked.length, SUJ[id].points.length) : null; };
  const scoreClass = (v) => (v == null ? "score-none" : v < 50 ? "score-bad" : v < 80 ? "score-mid" : "score-ok");
  const scoreTag = (v) => `<span class="score ${scoreClass(v)}">${v == null ? "à faire" : v + " %"}</span>`;

  /* ---------------- Routeur ---------------- */
  let current = "";
  const routes = {
    accueil: viewHome, sujets: viewSujets, sujet: viewSujet, examen: viewExam, cartes: viewCards,
    fiches: viewFiches, quiz: viewQuiz, paires: viewPairs, reperes: viewReperes, "exo-ia": viewExo, plus: viewPlus
  };
  function route() {
    const h = (location.hash || "#accueil").slice(1);
    let name = h, arg = null;
    if (h.startsWith("sujet-")) { name = "sujet"; arg = h.slice(6); }
    else if (h.startsWith("fiches-")) { name = "fiches"; arg = h.slice(7); }
    if (!routes[name]) name = "accueil";
    current = name;
    const sideKey = name === "sujet" ? "sujets" : name;
    const tabKey = { sujet: "sujets", examen: "sujets", quiz: "plus", paires: "plus", reperes: "plus", "exo-ia": "plus" }[name] || name;
    document.querySelectorAll("[data-nav]").forEach((a) => {
      const on = a.dataset.nav === (a.closest(".tabbar") ? tabKey : sideKey);
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    routes[name](arg);
    tick();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  /* ================================================================ */
  /* ACCUEIL                                                           */
  /* ================================================================ */
  function viewHome() {
    const d = dayDiff();
    const due = CARDS.filter(isDue).length;
    const done = OFFICIELS.filter((s) => sujetScore(s.id) != null).length;
    const days = [
      { off: 2, label: "J-2", date: "mar. 29/09", items: [
        '<a href="#fiches">Lire les fiches</a> des 3 parties (et l\'intro)',
        '<a href="#cartes">Premier passage</a> sur toutes les flashcards',
        '<a href="#quiz">Un quiz</a> et <a href="#paires">les associations auteurs-notions</a>'] },
      { off: 1, label: "J-1", date: "mer. 30/09", items: [
        '<a href="#sujets">Rédiger au moins un sujet par partie</a>, chrono de 30 min',
        '<a href="#examen">Un examen blanc</a> de 1h30 dans les conditions réelles',
        '<a href="#cartes">Revoir les cartes ratées</a>',
        '<a href="#exo-ia">Boucler l\'exercice IA</a> (à rendre le 01/10)'] },
      { off: 0, label: "Jour J", date: "jeu. 01/10", items: [
        '<a href="#cartes">Flash-révision</a> des cartes à revoir',
        'Relire les checklists des <a href="#sujets">sujets les moins bien couverts</a>',
        'Un dernier coup d\'œil aux <a href="#reperes">repères auteurs-dates</a>'] }
    ];
    const rows = ["p1", "p2", "p3", "intro"].map((pid) => {
      const secs = D.fiches[pid] || [];
      const read = secs.filter((_, i) => S.fiches[`${pid}-${i}`]).length;
      const cards = CARDS.filter((c) => c.partie === pid);
      const mast = cards.filter(isMastered).length;
      const suj = SUJETS.filter((s) => s.partie === pid);
      const scored = suj.map((s) => sujetScore(s.id)).filter((v) => v != null);
      const avg = scored.length ? Math.round(scored.reduce((a, b) => a + b, 0) / scored.length) : 0;
      const cell = (label, v) => `<div class="pt-cell"><span>${label}</span><span class="meter"><span style="width:${v}%"></span></span></div>`;
      return `<div class="pt-row ${pc(pid)}">
        <div class="pt-name">${chip(pid)}<span>${esc(P[pid].titre)}</span></div>
        ${cell(`${read}/${secs.length} lues`, pct(read, secs.length))}
        ${cell(`${mast}/${cards.length} sues`, pct(mast, cards.length))}
        ${cell(`${scored.length}/${suj.length} · ${avg} %`, scored.length ? avg : 0)}
      </div>`;
    }).join("");

    view.innerHTML = `
      <section class="hero">
        <p class="eyebrow">SIC S5 · ${esc(D.titre)} · ${esc(D.enseignante)}</p>
        <div class="hero-count">
          <span class="big">${countdown()}</span>
          <span class="when">Examen écrit le ${esc(D.examen.libelle)}</span>
        </div>
        <div class="hero-format"><span>3 sujets</span><span>1h30</span><span>14/20</span><span>+ exercice IA 6/20</span></div>
        ${src(D.examen.source)}
      </section>

      <section class="quick" aria-label="Actions rapides">
        <a class="primary" href="#cartes"><strong>Réviser les cartes</strong><span>${plural(due, "carte à revoir", "cartes à revoir")} maintenant</span></a>
        <a href="#sujet-${esc(shuffle(OFFICIELS)[0].id)}"><strong>Sujet au hasard</strong><span>${done}/${OFFICIELS.length} sujets officiels déjà travaillés</span></a>
        <a href="#examen"><strong>Examen blanc</strong><span>3 sujets tirés au sort, 1h30</span></a>
      </section>

      <section class="stack">
        <h2>Plan de révision</h2>
        <div class="plan">
          ${days.map((x) => {
            const state = d === x.off ? "is-today" : d < x.off ? "is-past" : "";
            return `<div class="day ${state}">
              <div class="day-label"><b>${x.label}</b><small>${x.date}</small>${state === "is-today" ? '<span class="today-badge">Aujourd\'hui</span>' : ""}</div>
              <ul>${x.items.map((i) => `<li>${i}</li>`).join("")}</ul>
            </div>`;
          }).join("")}
        </div>
      </section>

      <section class="stack">
        <h2>Où tu en es</h2>
        <div class="progress-table">
          <div class="pt-row pt-head"><span class="pt-name">Partie</span><span>Fiches</span><span>Cartes</span><span>Sujets</span></div>
          ${rows}
        </div>
      </section>

      <p class="note"><strong>Exercice IA :</strong> il est à rendre à la dernière séance, le 01/10, et compte pour 6/20. <a href="#exo-ia">Voir la grille d'analyse</a>.${src("1:10;3:2")}</p>
    `;
  }

  /* ================================================================ */
  /* SUJETS                                                            */
  /* ================================================================ */
  function viewSujets() {
    const group = (pid, list, title) => `
      <section class="group ${pc(pid)}">
        <div class="group-head"><h2>${title}</h2>${list[0].officiel ? src(list[0].src) : '<span class="tag tag-bonus">hors liste officielle</span>'}</div>
        <div class="sujet-list">
          ${list.map((s) => `<a class="sujet-item ${pc(s.partie)}" href="#sujet-${s.id}">
            <span class="sujet-num">${numSujet(s)}</span>
            <span class="sujet-q">${fmt(s.q)}</span>
            ${scoreTag(sujetScore(s.id))}
          </a>`).join("")}
        </div>
      </section>`;
    view.innerHTML = `
      <header class="page-head">
        <p class="eyebrow">Le cœur de l'exam</p>
        <h1>Sujets d'exam</h1>
        <p class="lead">Les ${OFFICIELS.length} sujets de contrôle donnés à la fin de chaque partie du cours. Rédige, puis compare avec le corrigé et coche ce que tu as mis : le pourcentage indique ta couverture des points clés.</p>
      </header>
      <div class="row"><a class="btn" href="#examen">Examen blanc (3 sujets, 1h30)</a><a class="btn btn-quiet" href="#sujet-${shuffle(OFFICIELS)[0].id}">Sujet au hasard</a></div>
      ${["p1", "p2", "p3"].map((pid) => group(pid, SUJETS.filter((s) => s.partie === pid), `${partLabel(pid)} · ${esc(P[pid].titre)}`)).join("")}
      ${group("intro", SUJETS.filter((s) => !s.officiel), "Sujets transversaux (bonus)")}
    `;
  }

  function corrigeHTML(s, open) {
    const r = sj(s.id);
    const n = r.checked.length, tot = s.points.length;
    return `
      <section class="corrige" id="corrige-${s.id}" ${open ? "" : "hidden"}>
        <div class="stack">
          <h2>Plan type</h2>
          <ol class="plan-type">${s.plan.map((p) => `<li>${fmt(p)}</li>`).join("")}</ol>
        </div>
        <div class="stack">
          <h2>Points clés à placer</h2>
          <p class="lead">Coche ce que tu as vraiment écrit.</p>
          <ul class="checklist">
            ${s.points.map((p, i) => `<li><label><input type="checkbox" id="chk-${s.id}-${i}" data-act="check" data-id="${s.id}" data-i="${i}" ${r.checked.includes(i) ? "checked" : ""}><span><b>${fmt(p[0])}</b>${src(p[1])}</span></label></li>`).join("")}
          </ul>
          <div class="cov"><span class="meter"><span style="width:${pct(n, tot)}%" data-cov-bar="${s.id}"></span></span><span class="score ${scoreClass(pct(n, tot))}" data-cov="${s.id}">${n}/${tot} · ${pct(n, tot)} %</span></div>
        </div>
      </section>`;
  }

  function viewSujet(id) {
    const s = SUJ[id];
    if (!s) { location.hash = "#sujets"; return; }
    const r = sj(s.id);
    const list = SUJETS;
    const i = list.indexOf(s);
    const prev = list[i - 1], next = list[i + 1];
    const words = (t) => (t.trim() ? t.trim().split(/\s+/).length : 0);
    view.innerHTML = `
      <a class="back" href="#sujets">← Tous les sujets</a>
      <header class="page-head sujet-head">
        <div class="row">${chip(s.partie)} ${s.officiel ? '<span class="tag">Sujet de contrôle officiel</span>' : '<span class="tag tag-bonus">Bonus, hors liste officielle</span>'}</div>
        <h1>${fmt(s.q)}</h1>
        ${src(s.src)}
      </header>
      ${timerBlock("sujet-" + s.id, 30, "1h30 pour 3 sujets, soit 30 min chacun")}
      <div class="answer">
        <label for="txt-${s.id}">Ta réponse</label>
        <textarea id="txt-${s.id}" data-act="text" data-id="${s.id}" placeholder="Intro, parties, conclusion. Écris comme le jour J, ou rédige sur papier et utilise juste le corrigé.">${esc(r.text)}</textarea>
        <div class="answer-meta"><span data-words>${plural(words(r.text), "mot", "mots")}</span><span>Sauvegardé sur cet appareil</span></div>
      </div>
      <div class="row">
        <button class="btn" data-act="reveal" data-id="${s.id}">${r.corrected ? "Masquer le corrigé" : "Voir le corrigé"}</button>
        <button class="btn btn-quiet" data-act="clear" data-id="${s.id}">Effacer ma réponse</button>
      </div>
      ${corrigeHTML(s, r.corrected)}
      <nav class="pager" aria-label="Autres sujets">
        ${prev ? `<a class="btn btn-quiet btn-small" href="#sujet-${prev.id}">← Sujet précédent</a>` : "<span></span>"}
        ${next ? `<a class="btn btn-quiet btn-small" href="#sujet-${next.id}">Sujet suivant →</a>` : ""}
      </nav>
    `;
  }

  /* ================================================================ */
  /* EXAMEN BLANC                                                      */
  /* ================================================================ */
  function drawExam() {
    const ids = ["p1", "p2", "p3"].map((pid) => shuffle(OFFICIELS.filter((s) => s.partie === pid))[0].id);
    S.exam = { ids, texts: {}, corrige: false };
    delete S.timers.examen;
    persist("exam"); persist("timers");
  }
  function viewExam() {
    if (!S.exam) {
      view.innerHTML = `
        <header class="page-head">
          <p class="eyebrow">Conditions réelles</p>
          <h1>Examen blanc</h1>
          <p class="lead">3 sujets officiels tirés au sort, un par partie, et 1h30 pour les développer. Le cours ne dit pas comment les sujets seront répartis : le « un par partie » est un choix du site pour couvrir tout le programme.</p>
          ${src("3:2")}
        </header>
        <div class="row"><button class="btn" data-act="exam-draw">Tirer 3 sujets</button></div>`;
      return;
    }
    const E = S.exam;
    view.innerHTML = `
      <header class="page-head">
        <p class="eyebrow">Conditions réelles</p>
        <h1>Examen blanc</h1>
        <p class="lead">Lance le chrono, rédige les 3 sujets, puis corrige-toi avec les checklists. Tes coches comptent aussi dans la page Sujets.</p>
      </header>
      ${timerBlock("examen", 90, "Durée de l'épreuve : 1h30")}
      ${E.ids.map((id, k) => {
        const s = SUJ[id];
        return `<section class="stack ${pc(s.partie)}">
          <div class="row"><span class="eyebrow">Sujet ${k + 1}</span>${chip(s.partie)}</div>
          <h2>${fmt(s.q)}</h2>
          <div class="answer">
            <label for="exam-${id}" class="eyebrow">Ta réponse</label>
            <textarea id="exam-${id}" data-act="exam-text" data-id="${id}">${esc(E.texts[id] || "")}</textarea>
          </div>
          ${E.corrige ? corrigeHTML(s, true) : ""}
        </section>`;
      }).join("")}
      <div class="row">
        ${E.corrige ? "" : '<button class="btn" data-act="exam-end">Terminer et voir les corrigés</button>'}
        <button class="btn btn-quiet" data-act="exam-new">Nouveau tirage</button>
      </div>`;
  }

  /* ================================================================ */
  /* FLASHCARDS                                                        */
  /* ================================================================ */
  const CS = { filtre: "all", queue: [], total: 0, done: 0, flipped: false, built: false };
  function buildQueue(force) {
    let list = CARDS.filter((c) => CS.filtre === "all" || c.partie === CS.filtre);
    if (!force) list = list.filter(isDue);
    const weight = (c) => { const r = cardRec(c); return r ? r.b : 0.5; };
    CS.queue = shuffle(list).sort((a, b) => weight(a) - weight(b));
    CS.total = CS.queue.length; CS.done = 0; CS.flipped = false; CS.built = true;
  }
  function rateCard(v) {
    const c = CS.queue[0];
    if (!c) return;
    const r = cardRec(c) || { b: 0, seen: 0 };
    const now = Date.now();
    CS.queue.shift();
    if (v === 0) { r.b = 0; r.due = now; CS.queue.splice(Math.min(3, CS.queue.length), 0, c); }
    else if (v === 1) { r.b = Math.max(1, r.b); r.due = now + BOX_MIN[1] * 60000; CS.queue.push(c); }
    else { r.b = Math.min(5, r.b + 1); r.due = now + BOX_MIN[r.b] * 60000; CS.done++; }
    r.seen = (r.seen || 0) + 1;
    S.cards[c.id] = r;
    persist("cards");
    CS.flipped = false;
    renderDeck();
  }
  function viewCards() {
    if (!CS.built) buildQueue(false);
    const filters = [["all", "Toutes"], ["intro", "Intro"], ["p1", "Partie I"], ["p2", "Partie II"], ["p3", "Partie III"]];
    view.innerHTML = `
      <header class="page-head">
        <p class="eyebrow">Répétition espacée</p>
        <h1>Flashcards</h1>
        <p class="lead">Réponds dans ta tête, retourne, puis dis si tu savais. Les cartes ratées reviennent vite.</p>
      </header>
      <div class="chips" role="group" aria-label="Filtrer par partie">
        ${filters.map(([k, l]) => `<button data-act="card-filter" data-f="${k}" aria-pressed="${CS.filtre === k}">${l}</button>`).join("")}
      </div>
      <div class="deck" id="deck"></div>`;
    renderDeck();
  }
  function renderDeck() {
    const deck = document.getElementById("deck");
    if (!deck) return;
    const pool = CARDS.filter((c) => CS.filtre === "all" || c.partie === CS.filtre);
    const mast = pool.filter(isMastered).length;
    const dueNow = pool.filter(isDue).length;
    const meta = `<div class="deck-meta"><span>${dueNow} à revoir · ${mast}/${pool.length} maîtrisées</span><span>${CS.total ? `${CS.done}/${CS.total} dans la séance` : ""}</span></div>`;
    const c = CS.queue[0];
    if (!c) {
      const next = pool.map((x) => (cardRec(x) || {}).due).filter(Boolean).sort((a, b) => a - b)[0];
      const when = next ? new Date(next).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }) : null;
      deck.innerHTML = `${meta}
        <div class="empty">
          <h2>Tout est à jour pour ce filtre</h2>
          <p class="lead">${when ? `Prochaine carte à revoir vers ${when}.` : "Aucune carte en attente."} Tu peux quand même repasser tout le paquet.</p>
          <button class="btn" data-act="card-all">Réviser toutes les cartes</button>
        </div>`;
      return;
    }
    const p = P[c.partie];
    deck.innerHTML = `${meta}
      <span class="meter"><span style="width:${pct(CS.done, CS.total)}%"></span></span>
      <div class="flash ${pc(c.partie)} ${CS.flipped ? "is-flipped" : ""}" role="button" tabindex="0" data-act="flip" aria-label="${CS.flipped ? "Réponse" : "Question, touche pour retourner"}">
        ${chip(p.id)}
        ${CS.flipped
          ? `<p class="q-small">${fmt(c.recto)}</p><p class="face-a">${fmt(c.verso)}</p>${src(c.src)}`
          : `<p class="face-q">${fmt(c.recto)}</p><p class="hint">Touche la carte ou appuie sur Espace pour voir la réponse</p>`}
      </div>
      ${CS.flipped ? `<div class="rate" role="group" aria-label="Est-ce que tu savais ?">
        <button class="r0" data-act="rate" data-v="0">Raté<small>1</small></button>
        <button class="r1" data-act="rate" data-v="1">Hésitant<small>2</small></button>
        <button class="r2" data-act="rate" data-v="2">Su<small>3</small></button>
      </div>` : `<button class="btn btn-quiet" data-act="flip">Retourner la carte</button>`}`;
  }

  /* ================================================================ */
  /* FICHES                                                            */
  /* ================================================================ */
  const FS = { partie: "p1", q: "" };
  function ficheSection(pid, sec, i, q) {
    const key = `${pid}-${i}`;
    const read = !!S.fiches[key];
    const hl = (html) => {
      if (!q) return html;
      const re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")(?![^<]*>)", "gi");
      return html.replace(re, "<mark>$1</mark>");
    };
    const pts = q ? sec.points.filter((p) => norm(p[0]).includes(norm(q)) || norm(sec.titre).includes(norm(q))) : sec.points;
    if (!pts.length) return "";
    return `<article class="fiche ${pc(pid)} ${read ? "is-read" : ""}">
      <div class="fiche-head">
        <div class="stack" style="gap:4px">${q ? chip(pid) : ""}<h2>${hl(fmt(sec.titre))}</h2></div>
        ${q ? "" : `<button class="btn btn-small ${read ? "" : "btn-quiet"}" data-act="read" data-k="${key}">${read ? "Lue ✓" : "Marquer comme lue"}</button>`}
      </div>
      <ul>${pts.map((p) => `<li>${hl(fmt(p[0]))}${src(p[1])}</li>`).join("")}</ul>
    </article>`;
  }
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\*/g, "");
  function renderFicheBody() {
    const box = document.getElementById("fiche-body");
    if (!box) return;
    const q = FS.q.trim();
    if (q.length >= 2) {
      const out = D.parties.map((p) => (D.fiches[p.id] || []).map((sec, i) => ficheSection(p.id, sec, i, q)).join("")).join("");
      box.innerHTML = out || `<div class="empty"><p>Rien trouvé pour « ${esc(q)} ». Essaie un nom d'auteur ou une notion.</p></div>`;
      return;
    }
    const secs = D.fiches[FS.partie] || [];
    const read = secs.filter((_, i) => S.fiches[`${FS.partie}-${i}`]).length;
    box.innerHTML = `
      <div class="row">${chip(FS.partie)}<span class="lead">${esc(P[FS.partie].cours)} · ${read}/${secs.length} sections lues</span></div>
      ${secs.map((sec, i) => ficheSection(FS.partie, sec, i, "")).join("")}`;
  }
  function viewFiches(arg) {
    if (arg && P[arg]) FS.partie = arg;
    view.innerHTML = `
      <header class="page-head">
        <p class="eyebrow">Petits cours</p>
        <h1>Fiches de cours</h1>
        <p class="lead">Tout le cours, résumé partie par partie. Sous chaque point, la diapo d'où il vient, pour pouvoir le justifier.</p>
      </header>
      <input class="search" id="fiche-search" type="search" placeholder="Chercher un auteur, une notion… (ex. Hall, double bind)" value="${esc(FS.q)}" data-act="search" aria-label="Chercher dans les fiches">
      <div class="chips" role="group" aria-label="Choisir une partie">
        ${D.parties.map((p) => `<button data-act="fiche-part" data-p="${p.id}" aria-pressed="${FS.partie === p.id && !FS.q.trim()}">${partLabel(p.id)}</button>`).join("")}
      </div>
      <div class="stack" id="fiche-body" style="gap:16px"></div>`;
    renderFicheBody();
  }

  /* ================================================================ */
  /* QUIZ                                                              */
  /* ================================================================ */
  const QS = { filtre: "all", phase: "setup", list: [], i: 0, answered: null, good: 0, missed: [] };
  function viewQuiz() {
    const filters = [["all", "Tout le cours"], ["intro", "Intro"], ["p1", "Partie I"], ["p2", "Partie II"], ["p3", "Partie III"]];
    if (QS.phase === "setup") {
      view.innerHTML = `
        <header class="page-head">
          <p class="eyebrow">QCM</p>
          <h1>Quiz</h1>
          <p class="lead">10 questions tirées au hasard. Chaque réponse est expliquée, avec sa diapo.</p>
        </header>
        <div class="chips" role="group" aria-label="Choisir le périmètre">
          ${filters.map(([k, l]) => `<button data-act="quiz-filter" data-f="${k}" aria-pressed="${QS.filtre === k}">${l}${S.quiz[k] != null ? ` · ${S.quiz[k]} %` : ""}</button>`).join("")}
        </div>
        <div class="row"><button class="btn" data-act="quiz-start">Commencer</button><a class="btn btn-quiet" href="#paires">Associer auteurs et notions</a></div>`;
      return;
    }
    if (QS.phase === "end") {
      const sc = pct(QS.good, QS.list.length);
      view.innerHTML = `
        <header class="page-head">
          <p class="eyebrow">Résultat</p>
          <h1>${QS.good}/${QS.list.length} bonnes réponses</h1>
          <p class="lead">Meilleur score sur ce périmètre : ${S.quiz[QS.filtre]} %.</p>
        </header>
        ${QS.missed.length ? `<section class="stack"><h2>À revoir</h2>${QS.missed.map((q) => `<div class="feedback"><p>${fmt(q[1])}</p><p><strong class="good">${fmt(q[2][q[3]])}</strong> · ${fmt(q[4])}</p>${src(q[5])}</div>`).join("")}</section>` : `<p class="note">Sans faute (${sc} %).</p>`}
        <div class="row"><button class="btn" data-act="quiz-start">Nouvelle série</button><button class="btn btn-quiet" data-act="quiz-setup">Changer de périmètre</button></div>`;
      return;
    }
    const q = QS.list[QS.i];
    const a = QS.answered;
    view.innerHTML = `
      <header class="page-head">
        <div class="deck-meta"><span>Question ${QS.i + 1}/${QS.list.length}</span><span>${QS.good} bonne${QS.good > 1 ? "s" : ""}</span></div>
        <span class="meter"><span style="width:${pct(QS.i, QS.list.length)}%"></span></span>
      </header>
      <section class="qcm ${pc(q[0])}">
        ${chip(q[0])}
        <h2>${fmt(q[1])}</h2>
        <div class="choices">
          ${q[2].map((c, k) => {
            let cls = "";
            if (a != null) { if (k === q[3]) cls = "is-good"; else if (k === a) cls = "is-wrong"; }
            return `<button class="${cls}" data-act="quiz-answer" data-k="${k}" ${a != null ? "disabled" : ""}><b>${"ABCD"[k]}</b><span>${fmt(c)}</span></button>`;
          }).join("")}
        </div>
        ${a != null ? `<div class="feedback" aria-live="polite"><p><strong class="${a === q[3] ? "good" : "bad"}">${a === q[3] ? "Bonne réponse." : "Pas tout à fait."}</strong> ${fmt(q[4])}</p>${src(q[5])}</div>
          <div class="row"><button class="btn" data-act="quiz-next">${QS.i + 1 < QS.list.length ? "Question suivante" : "Voir le résultat"}</button></div>` : ""}
      </section>`;
  }

  /* ================================================================ */
  /* PAIRES                                                            */
  /* ================================================================ */
  const PS = { round: null, left: [], right: [], sel: null, done: [], errors: 0 };
  function newRound() {
    PS.round = shuffle(D.paires).slice(0, 6);
    PS.left = shuffle(PS.round.map((_, i) => i));
    PS.right = shuffle(PS.round.map((_, i) => i));
    PS.sel = null; PS.done = []; PS.errors = 0;
  }
  function viewPairs() {
    if (!PS.round) newRound();
    const finished = PS.done.length === PS.round.length;
    view.innerHTML = `
      <header class="page-head">
        <p class="eyebrow">Qui a dit quoi</p>
        <h1>Auteurs et notions</h1>
        <p class="lead">Touche un auteur, puis la notion qui lui correspond. À l'écrit, citer le bon auteur avec la bonne date fait la différence.</p>
      </header>
      <div class="deck-meta"><span>${PS.done.length}/${PS.round.length} paires</span><span>${plural(PS.errors, "erreur", "erreurs")}</span></div>
      <div class="pairs">
        <div class="pairs-col col-a">${PS.left.map((i) => `<button data-act="pair-a" data-i="${i}" class="${PS.done.includes(i) ? "is-done" : PS.sel === i ? "is-sel" : ""}" ${PS.done.includes(i) ? "disabled" : ""}>${esc(PS.round[i][0])}</button>`).join("")}</div>
        <div class="pairs-col col-b">${PS.right.map((i) => `<button data-act="pair-b" data-i="${i}" class="${PS.done.includes(i) ? "is-done" : ""}" ${PS.done.includes(i) ? "disabled" : ""}>${esc(PS.round[i][1])}${PS.done.includes(i) ? src(PS.round[i][2]) : ""}</button>`).join("")}</div>
      </div>
      ${finished ? `<p class="note"><strong>Manche terminée</strong> avec ${plural(PS.errors, "erreur", "erreurs")}.</p>` : ""}
      <div class="row"><button class="btn ${finished ? "" : "btn-quiet"}" data-act="pair-new">Nouvelle manche</button></div>`;
  }

  /* ================================================================ */
  /* REPÈRES                                                           */
  /* ================================================================ */
  function viewReperes() {
    view.innerHTML = `
      <header class="page-head">
        <p class="eyebrow">Auteurs et dates</p>
        <h1>Repères chronologiques</h1>
        <p class="lead">Les dates que le cours donne, dans l'ordre. Placer une date juste derrière un nom d'auteur montre que tu maîtrises.</p>
      </header>
      <ol class="timeline">
        ${D.reperes.map((r) => `<li><span class="yr">${esc(r[0])}</span><div><span class="who">${esc(r[1])}</span><p>${fmt(r[2])}</p>${src(r[3])}</div></li>`).join("")}
      </ol>`;
  }

  /* ================================================================ */
  /* EXERCICE IA                                                       */
  /* ================================================================ */
  function viewExo() {
    const X = D.exoIA;
    view.innerHTML = `
      <header class="page-head">
        <p class="eyebrow">Exercice pratique · 6/20</p>
        <h1>Analyser une conversation avec l'IA</h1>
        <p class="note"><strong>À rendre à la dernière séance, le 01/10.</strong> Cette page te donne la méthode et les notions à mobiliser. L'analyse, c'est à toi de la faire.${src("1:10")}</p>
      </header>
      <section class="stack">
        <h2>La consigne</h2>
        <blockquote class="consigne">${fmt(X.consigne)}${src(X.consigneSrc)}</blockquote>
      </section>
      <section class="stack">
        <h2>Méthode</h2>
        <ol class="steps">${X.etapes.map((e) => `<li>${fmt(e)}</li>`).join("")}</ol>
      </section>
      <section class="stack">
        <h2>Grille de relevé</h2>
        ${X.grille.map((g, i) => `<article class="grid-item">
          <div class="fiche-head"><h3>${esc(g.titre)}</h3>
            <label class="check-inline"><input type="checkbox" id="exo-chk-${i}" data-act="exo-check" data-i="${i}" ${S.exo.checks[i] ? "checked" : ""}>Relevé fait</label></div>
          <dl>
            <div><dt>Ce que tu cherches</dt><dd>${fmt(g.quoi)}</dd></div>
            <div><dt>Notions du cours</dt><dd>${fmt(g.notions)}${src(g.src)}</dd></div>
          </dl>
          <label class="eyebrow" for="exo-note-${i}">Tes citations et remarques</label>
          <textarea id="exo-note-${i}" data-act="exo-note" data-i="${i}" placeholder="Colle ici les phrases de l'IA que tu relèves.">${esc(S.exo.notes[i] || "")}</textarea>
        </article>`).join("")}
      </section>
      <section class="stack">
        <h2>Pistes d'analyse</h2>
        <p class="lead">Ces rapprochements sont proposés par ton assistant à partir des notions du cours. Ils ne sont pas dans le cours tel quel : garde-les seulement si ta conversation les confirme.</p>
        ${X.pistes.map((p) => `<div class="piste">${fmt(p.texte)}${src(p.src)}</div>`).join("")}
      </section>`;
  }

  /* ================================================================ */
  /* PLUS                                                              */
  /* ================================================================ */
  let resetArmed = false;
  function viewPlus() {
    view.innerHTML = `
      <header class="page-head"><h1>Plus d'outils</h1></header>
      <div class="tiles">
        <a href="#examen"><strong>Examen blanc</strong><span>3 sujets, 1h30</span></a>
        <a href="#quiz"><strong>Quiz</strong><span>${D.quiz.length} QCM expliqués</span></a>
        <a href="#paires"><strong>Auteurs et notions</strong><span>Jeu d'association</span></a>
        <a href="#reperes"><strong>Repères chronologiques</strong><span>${D.reperes.length} dates clés</span></a>
        <a href="#exo-ia"><strong>Exercice IA</strong><span>Grille d'analyse, à rendre le 01/10</span></a>
      </div>
      <section class="stack">
        <h2>Ta progression</h2>
        <p class="lead">Elle est enregistrée dans ce navigateur, sur cet appareil uniquement.</p>
        <div class="row"><button class="btn ${resetArmed ? "btn-danger" : "btn-quiet"}" data-act="reset">${resetArmed ? "Confirmer : tout effacer" : "Réinitialiser ma progression"}</button>${resetArmed ? '<button class="btn btn-quiet" data-act="reset-cancel">Annuler</button>' : ""}</div>
      </section>`;
  }

  /* ================================================================ */
  /* ÉVÉNEMENTS                                                        */
  /* ================================================================ */
  const clearArmed = {};
  view.addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]");
    if (!b || b.tagName === "TEXTAREA" || (b.tagName === "INPUT" && b.type !== "checkbox")) return;
    const act = b.dataset.act;
    switch (act) {
      case "timer": {
        const k = b.dataset.key;
        if (S.timers[k]) delete S.timers[k]; else S.timers[k] = Date.now() + +b.dataset.min * 60000;
        persist("timers");
        b.textContent = S.timers[k] ? "Arrêter" : "Lancer le chrono";
        b.classList.toggle("btn-quiet", !!S.timers[k]);
        tick();
        break;
      }
      case "reveal": {
        const r = sj(b.dataset.id);
        r.corrected = !r.corrected;
        persist("sujets");
        const box = document.getElementById("corrige-" + b.dataset.id);
        box.hidden = !r.corrected;
        b.textContent = r.corrected ? "Masquer le corrigé" : "Voir le corrigé";
        if (r.corrected) box.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      }
      case "clear": {
        const id = b.dataset.id;
        if (!clearArmed[id]) { clearArmed[id] = true; b.textContent = "Confirmer l'effacement"; b.classList.add("btn-danger"); b.classList.remove("btn-quiet"); return; }
        delete clearArmed[id];
        S.sujets[id] = { text: "", checked: [], corrected: false };
        persist("sujets");
        viewSujet(id);
        break;
      }
      case "check": {
        const id = b.dataset.id, i = +b.dataset.i, r = sj(id);
        r.checked = b.checked ? Array.from(new Set(r.checked.concat(i))) : r.checked.filter((x) => x !== i);
        r.corrected = true;
        persist("sujets");
        const tot = SUJ[id].points.length, v = pct(r.checked.length, tot);
        document.querySelectorAll(`[data-cov="${id}"]`).forEach((el) => { el.textContent = `${r.checked.length}/${tot} · ${v} %`; el.className = "score " + scoreClass(v); });
        document.querySelectorAll(`[data-cov-bar="${id}"]`).forEach((el) => { el.style.width = v + "%"; });
        document.querySelectorAll(`[data-act="check"][data-id="${id}"][data-i="${i}"]`).forEach((el) => { el.checked = b.checked; });
        break;
      }
      case "exam-draw": case "exam-new": drawExam(); viewExam(); break;
      case "exam-end":
        S.exam.corrige = true;
        S.exam.ids.forEach((id) => { sj(id).corrected = true; });
        persist("exam"); persist("sujets");
        viewExam();
        break;
      case "card-filter": CS.filtre = b.dataset.f; buildQueue(false); viewCards(); break;
      case "card-all": buildQueue(true); renderDeck(); break;
      case "flip": CS.flipped = !CS.flipped; renderDeck(); break;
      case "rate": rateCard(+b.dataset.v); break;
      case "fiche-part": FS.partie = b.dataset.p; FS.q = ""; viewFiches(); break;
      case "read": S.fiches[b.dataset.k] = !S.fiches[b.dataset.k]; persist("fiches"); renderFicheBody(); break;
      case "quiz-filter": QS.filtre = b.dataset.f; viewQuiz(); break;
      case "quiz-setup": QS.phase = "setup"; viewQuiz(); break;
      case "quiz-start": {
        const pool = D.quiz.filter((q) => QS.filtre === "all" || q[0] === QS.filtre);
        Object.assign(QS, { phase: "q", list: shuffle(pool).slice(0, 10), i: 0, answered: null, good: 0, missed: [] });
        viewQuiz();
        break;
      }
      case "quiz-answer": {
        const q = QS.list[QS.i], k = +b.dataset.k;
        QS.answered = k;
        if (k === q[3]) QS.good++; else QS.missed.push(q);
        viewQuiz();
        break;
      }
      case "quiz-next":
        if (QS.i + 1 < QS.list.length) { QS.i++; QS.answered = null; }
        else { QS.phase = "end"; const sc = pct(QS.good, QS.list.length); S.quiz[QS.filtre] = Math.max(S.quiz[QS.filtre] || 0, sc); persist("quiz"); }
        viewQuiz();
        break;
      case "pair-a": PS.sel = +b.dataset.i; viewPairs(); break;
      case "pair-b": {
        if (PS.sel == null) return;
        const i = +b.dataset.i;
        if (i === PS.sel) { PS.done.push(i); PS.sel = null; viewPairs(); }
        else { PS.errors++; b.classList.add("is-err"); setTimeout(() => viewPairs(), 320); }
        break;
      }
      case "pair-new": newRound(); viewPairs(); break;
      case "exo-check": S.exo.checks[b.dataset.i] = b.checked; persist("exo"); break;
      case "reset":
        if (!resetArmed) { resetArmed = true; viewPlus(); return; }
        resetArmed = false;
        ["cards", "sujets", "fiches", "quiz", "exo", "exam", "timers"].forEach((k) => { try { localStorage.removeItem(PREFIX + k); } catch (err) { /* ignore */ } });
        Object.assign(S, { cards: {}, sujets: {}, fiches: {}, quiz: {}, exo: { checks: {}, notes: {} }, exam: null, timers: {} });
        CS.built = false;
        viewPlus();
        break;
      case "reset-cancel": resetArmed = false; viewPlus(); break;
    }
  });

  view.addEventListener("input", (e) => {
    const t = e.target;
    const act = t.dataset && t.dataset.act;
    if (act === "text") {
      sj(t.dataset.id).text = t.value;
      persistSoon("sujets");
      const w = t.value.trim() ? t.value.trim().split(/\s+/).length : 0;
      const el = view.querySelector("[data-words]");
      if (el) el.textContent = plural(w, "mot", "mots");
    } else if (act === "exam-text") {
      S.exam.texts[t.dataset.id] = t.value;
      persistSoon("exam");
    } else if (act === "exo-note") {
      S.exo.notes[t.dataset.i] = t.value;
      persistSoon("exo");
    } else if (act === "search") {
      FS.q = t.value;
      document.querySelectorAll('[data-act="fiche-part"]').forEach((btn) => btn.setAttribute("aria-pressed", String(!FS.q.trim() && btn.dataset.p === FS.partie)));
      renderFicheBody();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (current !== "cartes") return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "textarea" || tag === "input") return;
    if (e.key === " " || e.key === "Enter") {
      if (tag === "button" || tag === "a") return; // le clic natif s'en charge
      e.preventDefault(); CS.flipped = !CS.flipped; renderDeck();
    } else if (CS.flipped && ["1", "2", "3"].includes(e.key)) {
      rateCard(+e.key - 1);
    }
  });

  renderCountdown();
  route();
})();
