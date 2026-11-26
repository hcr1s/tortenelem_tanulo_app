// TöriMester – Játéklogika és Állapotkezelő
const STORAGE_KEY = "torimester_save_v1";

const RANKS = [
  { minXp: 0, title: "Kezdő Krónikás" },
  { minXp: 150, title: "Céhlegény" },
  { minXp: 350, title: "Királyi Írnok" },
  { minXp: 600, title: "Történelem Mester" },
  { minXp: 900, title: "Érettségi Bajnok" }
];

let state = loadState();
let currentTopic = null;
let currentMode = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return {
    xp: 0,
    bestStreak: 0,
    streak: 0,
    completed: {} // { topicId: { quiz: true, timeline: true, match: true, story: true } }
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function addXp(amount) {
  state.xp += amount;
  saveState();
  updateHud();
}

function getRank(xp) {
  let current = RANKS[0].title;
  for (const r of RANKS) {
    if (xp >= r.minXp) current = r.title;
  }
  return current;
}

function markCompleted(topicId, mode) {
  if (!state.completed[topicId]) state.completed[topicId] = {};
  state.completed[topicId][mode] = true;
  saveState();
  updateHud();
}

function updateHud() {
  document.getElementById("hud-xp").textContent = state.xp;
  document.getElementById("hud-rank").textContent = getRank(state.xp);
  document.getElementById("hud-streak").textContent = state.bestStreak;

  const totalTasks = TOPICS.length * 4;
  let doneTasks = 0;
  TOPICS.forEach((t) => {
    const c = state.completed[t.id] || {};
    ["quiz", "timeline", "match", "story"].forEach((m) => {
      if (c[m]) doneTasks++;
    });
  });
  const pct = Math.round((doneTasks / totalTasks) * 100);
  document.getElementById("overall-progress-bar").style.width = pct + "%";
  document.getElementById("overall-progress-text").textContent = `${pct}% teljesítve (${doneTasks}/${totalTasks} kihívás)`;
}

function showView(viewId) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTopics() {
  const grid = document.getElementById("topics-grid");
  grid.innerHTML = "";
  TOPICS.forEach((topic) => {
    const c = state.completed[topic.id] || {};
    const doneCount = ["quiz", "timeline", "match", "story"].filter((m) => c[m]).length;
    const card = document.createElement("div");
    card.className = "topic-card";
    card.innerHTML = `
      <div>
        <div class="topic-card-top">
          <div class="topic-emoji">${topic.emoji}</div>
          <div>
            <span class="topic-era">${topic.era}</span>
            <h4>${topic.title}</h4>
          </div>
        </div>
        <p class="topic-desc">${topic.summary}</p>
      </div>
      <div class="topic-footer">
        <span>4 játékmód + jegyzet</span>
        <span class="topic-status">${doneCount}/4 teljesítve</span>
      </div>
    `;
    card.addEventListener("click", () => openTopic(topic.id));
    grid.appendChild(card);
  });
}

function openTopic(topicId) {
  currentTopic = TOPICS.find((t) => t.id === topicId);
  if (!currentTopic) return;

  const banner = document.getElementById("topic-banner");
  banner.innerHTML = `
    <div class="topic-emoji">${currentTopic.emoji}</div>
    <div>
      <span class="topic-era">${currentTopic.era}</span>
      <h2>${currentTopic.title}</h2>
      <p>${currentTopic.subtitle}</p>
    </div>
  `;

  const c = state.completed[currentTopic.id] || {};
  document.getElementById("tag-quiz").textContent = c.quiz ? "✓ Teljesítve" : "5 kérdés";
  document.getElementById("tag-timeline").textContent = c.timeline ? "✓ Teljesítve" : "Sorrendezés";
  document.getElementById("tag-match").textContent = c.match ? "✓ Teljesítve" : "5 pár";
  document.getElementById("tag-story").textContent = c.story ? "✓ Teljesítve" : "Szerepjáték";

  showView("view-topic");
}

function startMode(mode) {
  currentMode = mode;
  showView("view-game");
  const badge = document.getElementById("game-mode-badge");
  const prog = document.getElementById("game-progress-text");

  if (mode === "study") {
    badge.textContent = "📜 Villámjegyzet";
    prog.textContent = currentTopic.title;
    renderStudyMode();
  } else if (mode === "quiz") {
    badge.textContent = "⚡ Villámkvíz";
    renderQuizMode(currentTopic.quiz, currentTopic.id);
  } else if (mode === "timeline") {
    badge.textContent = "⏳ Idővonal-építő";
    prog.textContent = "Állítsd sorrendbe!";
    renderTimelineMode();
  } else if (mode === "match") {
    badge.textContent = "🔗 Fogalom-párosító";
    prog.textContent = "Találd meg a párokat!";
    renderMatchMode();
  } else if (mode === "story") {
    badge.textContent = "🎭 Történelmi Döntéshozó";
    renderStoryMode();
  }
}

// 1. Villámjegyzet
function renderStudyMode() {
  const s = currentTopic.study;
  const stage = document.getElementById("game-stage");
  stage.innerHTML = `
    <h3>${currentTopic.emoji} ${currentTopic.title} – Érettségi Lényeg</h3>
    <p style="color:var(--text-muted); margin-top:0.3rem;">${currentTopic.subtitle}</p>
    <div class="study-grid">
      <div class="study-box">
        <h4>📅 Kulcsdátumok</h4>
        <ul>${s.dates.map((d) => `<li>${d}</li>`).join("")}</ul>
      </div>
      <div class="study-box">
        <h4>📖 Fontos fogalmak</h4>
        <ul>${s.concepts.map((c) => `<li>${c}</li>`).join("")}</ul>
      </div>
      <div class="study-box">
        <h4>🔗 Összefüggések</h4>
        <ul>${s.connections.map((x) => `<li>${x}</li>`).join("")}</ul>
      </div>
    </div>
    <div style="margin-top:1.5rem; display:flex; gap:0.75rem;">
      <button class="btn-primary" id="btn-go-quiz">⚡ Irány a Villámkvíz!</button>
    </div>
  `;
  document.getElementById("btn-go-quiz").addEventListener("click", () => startMode("quiz"));
}

// 2. Villámkvíz (témakör vagy vegyes érettségi vizsga)
function renderQuizMode(questions, topicIdOrExam) {
  let idx = 0;
  let score = 0;
  const stage = document.getElementById("game-stage");

  function renderQ() {
    const q = questions[idx];
    document.getElementById("game-progress-text").textContent = `${idx + 1} / ${questions.length}`;
    stage.innerHTML = `
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<button class="quiz-opt" data-i="${i}">${opt}</button>`).join("")}
      </div>
      <div id="quiz-feedback"></div>
    `;

    const opts = stage.querySelectorAll(".quiz-opt");
    opts.forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = Number(btn.dataset.i);
        opts.forEach((b) => (b.disabled = true));
        const isCorrect = chosen === q.answer;
        if (isCorrect) {
          btn.classList.add("correct");
          score++;
          state.streak++;
          if (state.streak > state.bestStreak) state.bestStreak = state.streak;
          addXp(25);
        } else {
          btn.classList.add("wrong");
          opts[q.answer].classList.add("correct");
          state.streak = 0;
          saveState();
          updateHud();
        }

        const fb = document.getElementById("quiz-feedback");
        fb.innerHTML = `
          <div class="feedback-box">
            <strong>${isCorrect ? "✅ Helyes válasz! (+25 XP)" : "❌ Nem egészen!"}</strong>
            <p style="margin-top:0.35rem; color:var(--text-muted);">${q.exp}</p>
            <button class="btn-primary" style="margin-top:0.9rem;" id="btn-next-q">
              ${idx + 1 < questions.length ? "Következő kérdés →" : "Eredmény megtekintése"}
            </button>
          </div>
        `;
        document.getElementById("btn-next-q").addEventListener("click", () => {
          idx++;
          if (idx < questions.length) renderQ();
          else finishQuiz();
        });
      });
    });
  }

  function finishQuiz() {
    if (topicIdOrExam !== "exam" && score >= Math.ceil(questions.length * 0.6)) {
      markCompleted(topicIdOrExam, "quiz");
    }
    const bonus = score === questions.length ? 40 : 0;
    if (bonus) addXp(bonus);

    stage.innerHTML = `
      <div style="text-align:center; padding:1rem 0;">
        <div style="font-size:3rem;">${score === questions.length ? "🏆" : "👏"}</div>
        <h3 style="font-family:'Cinzel',serif; font-size:1.6rem; margin:0.5rem 0;">
          Eredmény: ${score} / ${questions.length}
        </h3>
        <p style="color:var(--text-muted); margin-bottom:1.25rem;">
          ${bonus ? "Hibátlan teljesítmény! +40 bónusz XP jár érte." : "Szép munka! Gyakorolj tovább a többi játékmódban is."}
        </p>
        <button class="btn-primary" id="btn-quiz-done">Vissza</button>
      </div>
    `;
    document.getElementById("btn-quiz-done").addEventListener("click", () => {
      if (topicIdOrExam === "exam") {
        renderTopics();
        showView("view-home");
      } else {
        openTopic(topicIdOrExam);
      }
    });
  }

  renderQ();
}

// 3. Idővonal-építő
function renderTimelineMode() {
  const stage = document.getElementById("game-stage");
  const correctOrder = [...currentTopic.timeline].sort((a, b) => a.year - b.year);
  let items = shuffle([...correctOrder]);
  // Ensure not already completely sorted
  if (items.every((it, i) => it.year === correctOrder[i].year)) {
    items.reverse();
  }

  function renderList(checked = false) {
    stage.innerHTML = `
      <h3>⏳ Állítsd időrendbe az eseményeket!</h3>
      <p style="color:var(--text-muted); font-size:0.9rem; margin-top:0.25rem;">
        A legkorábbi esemény legyen legfelül, a legkésőbbi legalul. Használd a nyilakat a mozgatáshoz!
      </p>
      <div class="timeline-list">
        ${items
          .map((it, i) => {
            let cls = "";
            if (checked) cls = it.year === correctOrder[i].year ? "correct" : "wrong";
            return `
              <div class="timeline-item ${cls}">
                <div>
                  ${checked ? `<strong style="color:var(--gold); margin-right:0.5rem;">[${it.year}]</strong>` : ""}
                  <span>${it.text}</span>
                </div>
                <div class="timeline-controls">
                  <button class="btn-mini" data-dir="-1" data-idx="${i}" ${i === 0 ? "disabled" : ""}>↑</button>
                  <button class="btn-mini" data-dir="1" data-idx="${i}" ${i === items.length - 1 ? "disabled" : ""}>↓</button>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
      <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
        <button class="btn-primary" id="btn-check-timeline">Ellenőrzés</button>
        ${checked ? `<button class="btn-secondary" id="btn-retry-timeline">Újrakeverés</button>` : ""}
      </div>
      <div id="timeline-fb"></div>
    `;

    stage.querySelectorAll(".btn-mini").forEach((b) => {
      b.addEventListener("click", () => {
        const i = Number(b.dataset.idx);
        const dir = Number(b.dataset.dir);
        const target = i + dir;
        if (target < 0 || target >= items.length) return;
        [items[i], items[target]] = [items[target], items[i]];
        renderList(false);
      });
    });

    document.getElementById("btn-check-timeline").addEventListener("click", () => {
      renderList(true);
      const allGood = items.every((it, i) => it.year === correctOrder[i].year);
      const fb = document.getElementById("timeline-fb");
      if (allGood) {
        addXp(60);
        markCompleted(currentTopic.id, "timeline");
        fb.innerHTML = `<div class="feedback-box"><strong>🎉 Tökéletes időrend! (+60 XP)</strong></div>`;
      } else {
        fb.innerHTML = `<div class="feedback-box"><strong>⚠️ Néhány esemény még nincs a helyén!</strong> Nézd meg a pirossal jelölt sorokat és próbáld újra.</div>`;
      }
    });

    const retry = document.getElementById("btn-retry-timeline");
    if (retry) {
      retry.addEventListener("click", () => {
        items = shuffle([...correctOrder]);
        renderList(false);
      });
    }
  }

  renderList(false);
}

// 4. Fogalom-párosító
function renderMatchMode() {
  const stage = document.getElementById("game-stage");
  const pairs = currentTopic.pairs;
  const leftItems = shuffle(pairs.map((p, i) => ({ id: i, text: p.term })));
  const rightItems = shuffle(pairs.map((p, i) => ({ id: i, text: p.def })));

  let selectedLeft = null;
  let matchedIds = new Set();

  function renderBoard() {
    document.getElementById("game-progress-text").textContent = `${matchedIds.size} / ${pairs.length} pár`;
    stage.innerHTML = `
      <h3>🔗 Fogalom-párosító</h3>
      <p style="color:var(--text-muted); font-size:0.9rem; margin-top:0.25rem;">
        Kattints előbb a bal oldali fogalomra, majd a hozzá tartozó jobb oldali magyarázatra!
      </p>
      <div class="match-board">
        <div class="match-col">
          ${leftItems
            .map(
              (it) => `
            <button class="match-btn ${matchedIds.has(it.id) ? "matched" : ""} ${selectedLeft === it.id ? "selected" : ""}"
              data-side="left" data-id="${it.id}" ${matchedIds.has(it.id) ? "disabled" : ""}>
              <strong>${it.text}</strong>
            </button>`
            )
            .join("")}
        </div>
        <div class="match-col">
          ${rightItems
            .map(
              (it) => `
            <button class="match-btn ${matchedIds.has(it.id) ? "matched" : ""}"
              data-side="right" data-id="${it.id}" ${matchedIds.has(it.id) ? "disabled" : ""}>
              ${it.text}
            </button>`
            )
            .join("")}
        </div>
      </div>
      <div id="match-fb"></div>
    `;

    stage.querySelectorAll('.match-btn[data-side="left"]').forEach((btn) => {
      btn.addEventListener("click", () => {
        selectedLeft = Number(btn.dataset.id);
        renderBoard();
      });
    });

    stage.querySelectorAll('.match-btn[data-side="right"]').forEach((btn) => {
      btn.addEventListener("click", () => {
        if (selectedLeft === null) return;
        const rightId = Number(btn.dataset.id);
        if (rightId === selectedLeft) {
          matchedIds.add(rightId);
          selectedLeft = null;
          addXp(15);
          if (matchedIds.size === pairs.length) {
            markCompleted(currentTopic.id, "match");
            renderBoard();
            document.getElementById("match-fb").innerHTML = `
              <div class="feedback-box">
                <strong>🎉 Minden fogalmat sikeresen párosítottál!</strong>
                <div style="margin-top:0.75rem;">
                  <button class="btn-primary" id="btn-match-back">Vissza a témakörhöz</button>
                </div>
              </div>`;
            document.getElementById("btn-match-back").addEventListener("click", () => openTopic(currentTopic.id));
          } else {
            renderBoard();
          }
        } else {
          btn.classList.add("error");
          setTimeout(() => btn.classList.remove("error"), 450);
        }
      });
    });
  }

  renderBoard();
}

// 5. Történelmi Döntéshozó (Szerepjáték)
function renderStoryMode() {
  const stage = document.getElementById("game-stage");
  const scenes = currentTopic.story;
  let idx = 0;

  function renderScene() {
    const sc = scenes[idx];
    document.getElementById("game-progress-text").textContent = `${idx + 1} / ${scenes.length}`;
    stage.innerHTML = `
      <div class="story-scene">
        <div class="story-role">Szereped: ${sc.role}</div>
        <p style="font-size:1.1rem; font-weight:500;">${sc.situation}</p>
      </div>
      <div class="quiz-options">
        ${sc.choices.map((c, i) => `<button class="quiz-opt" data-i="${i}">${c.text}</button>`).join("")}
      </div>
      <div id="story-fb"></div>
    `;

    const btns = stage.querySelectorAll(".quiz-opt");
    btns.forEach((b) => {
      b.addEventListener("click", () => {
        const ch = sc.choices[Number(b.dataset.i)];
        btns.forEach((x) => (x.disabled = true));
        b.classList.add(ch.correct ? "correct" : "wrong");
        if (ch.correct) addXp(40);

        document.getElementById("story-fb").innerHTML = `
          <div class="feedback-box">
            <strong>${ch.correct ? "✅ Bölcs döntés! (+40 XP)" : "⚠️ Történelmi zsákutca!"}</strong>
            <p style="margin-top:0.35rem; color:var(--text-muted);">${ch.feedback}</p>
            <button class="btn-primary" style="margin-top:0.9rem;" id="btn-story-next">
              ${idx + 1 < scenes.length ? "Következő helyzet →" : "Küldetés befejezése"}
            </button>
          </div>
        `;
        document.getElementById("btn-story-next").addEventListener("click", () => {
          idx++;
          if (idx < scenes.length) renderScene();
          else {
            markCompleted(currentTopic.id, "story");
            openTopic(currentTopic.id);
          }
        });
      });
    });
  }

  renderScene();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  updateHud();
  renderTopics();

  document.getElementById("btn-home").addEventListener("click", () => {
    renderTopics();
    showView("view-home");
  });
  document.getElementById("btn-back-home").addEventListener("click", () => {
    renderTopics();
    showView("view-home");
  });
  document.getElementById("btn-back-topic").addEventListener("click", () => {
    if (currentTopic) openTopic(currentTopic.id);
    else showView("view-home");
  });

  document.querySelectorAll(".mode-card").forEach((card) => {
    card.addEventListener("click", () => startMode(card.dataset.mode));
  });

  document.getElementById("btn-exam-mode").addEventListener("click", () => {
    currentTopic = null;
    const allQ = shuffle(TOPICS.flatMap((t) => t.quiz)).slice(0, 10);
    showView("view-game");
    document.getElementById("game-mode-badge").textContent = "🎓 Érettségi Próbavizsga";
    renderQuizMode(allQ, "exam");
  });

  document.getElementById("btn-reset").addEventListener("click", () => {
    if (confirm("Biztosan nullázod az összes XP-t és teljesített kihívást?")) {
      localStorage.removeItem(STORAGE_KEY);
      state = loadState();
      updateHud();
      renderTopics();
      showView("view-home");
    }
  });

  const modal = document.getElementById("team-modal");
  document.getElementById("btn-team-info").addEventListener("click", () => modal.classList.add("open"));
  document.getElementById("btn-close-modal").addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });
});
