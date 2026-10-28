(() => {
  "use strict";

  const app = document.getElementById("app");
  const LETTERS = ["A", "B", "C", "D"];
  const COUNT_CHOICES = [10, 20, 50];
  const TOPIC_BY_ID = Object.fromEntries(TOPICS.map((topic) => [topic.id, topic]));
  const QUESTION_BY_ID = new Map(QUESTIONS.map((q) => [q.id, q]));
  const SETTINGS_KEY = "linux-quiz-settings";
  const THEME_KEY = "linux-quiz-theme";
  const LANG_KEY = "linux-quiz-lang";

  const plural = (n) => (n === 1 ? "" : "s");

  const STRINGS = {
    vi: {
      brand: "Trắc nghiệm Linux",
      navPractice: "Luyện tập",
      navBank: "Danh sách câu hỏi",
      navBankShort: "Câu hỏi",
      footer: (q, n) => `${q} câu hỏi · ${n} chủ đề · có đáp án và giải thích`,
      langLabel: "Ngôn ngữ",
      themeToLight: "Chuyển sang giao diện sáng",
      themeToDark: "Chuyển sang giao diện tối",
      heroTitle: "Học Linux qua từng câu hỏi",
      heroLead: (q, n) => `${q} câu hỏi trắc nghiệm cơ bản thuộc ${n} chủ đề. Chọn chủ đề và số câu hỏi; sau mỗi câu trả lời, bạn sẽ biết ngay mình đúng hay sai kèm lời giải thích ngắn gọn.`,
      topic: "Chủ đề",
      allTopics: "Tất cả chủ đề",
      count: "Số câu hỏi",
      countAll: (n) => `Tất cả (${n})`,
      shuffle: "Xáo trộn thứ tự câu hỏi",
      start: "Bắt đầu →",
      browseAll: "Xem tất cả câu hỏi",
      inProgress: "Bài làm đang dở",
      answeredOf: (a, n) => `đã trả lời ${a}/${n} câu`,
      resume: "Làm tiếp",
      missedSuffix: "các câu làm sai",
      quit: "✕ Thoát",
      correctSoFar: (n) => `✓ ${n} câu đúng`,
      correctSoFarTitle: "Số câu trả lời đúng tính đến lúc này",
      progressLabel: "Số câu đã trả lời",
      questionOf: (i, n) => `Câu ${i}/${n}`,
      prev: "← Câu trước",
      next: "Câu tiếp →",
      skip: "Bỏ qua →",
      finish: "Nộp bài",
      correct: "Chính xác!",
      notQuite: "Chưa đúng.",
      correctAnswer: (letter) => `Đáp án đúng: ${letter}`,
      explanationLabel: "Giải thích:",
      srCorrect: "(đáp án đúng)",
      srYours: "(đáp án bạn chọn)",
      hint: "Phím tắt: nhấn <kbd>1</kbd>–<kbd>4</kbd> hoặc <kbd>A</kbd>–<kbd>D</kbd> để trả lời, <kbd>←</kbd> <kbd>→</kbd> để chuyển câu.",
      map: "Bản đồ câu hỏi",
      mapAnswered: (a, n) => `(đã trả lời ${a}/${n})`,
      mapItem: (i, status) => `Câu ${i}, ${status}`,
      statusNone: "chưa trả lời",
      statusCorrect: "đúng",
      statusWrong: "sai",
      confirmFinish: (n) => `Bạn còn ${n} câu chưa trả lời. Vẫn nộp bài?`,
      confirmQuit: "Thoát bài làm? Các câu trả lời của bạn sẽ bị mất.",
      resultHeading: (c, n) => `Đúng ${c}/${n} câu`,
      verdictPerfect: "Xuất sắc! Bạn nắm rất vững kiến thức Linux cơ bản.",
      verdictGreat: "Rất tốt! Bạn đã hiểu chắc các chủ đề này.",
      verdictGood: "Khá tốt! Hãy xem lại phần giải thích bên dưới để lấp những chỗ còn hổng.",
      verdictOk: "Tạm ổn. Luyện thêm một chút nữa là bạn sẽ làm tốt.",
      verdictLow: "Cố lên! Hãy đọc kỹ phần giải thích bên dưới rồi thử lại.",
      statCorrect: (n) => `✓ ${n} đúng`,
      statWrong: (n) => `✗ ${n} sai`,
      statSkipped: (n) => `${n} bỏ qua`,
      scoreAria: (p) => `Điểm: ${p}%`,
      retryMissed: (n) => `Làm lại ${n} câu sai`,
      retake: "Làm lại bài này",
      newQuiz: "Bài mới",
      byTopic: "Điểm theo chủ đề",
      review: "Xem lại bài làm",
      onlyMistakes: "Chỉ hiện câu sai",
      noMistakes: "Không có câu sai nào. Làm tốt lắm!",
      badgeCorrect: "Đúng",
      badgeWrong: "Sai",
      badgeSkipped: "Bỏ qua",
      yourAnswer: "Bạn chọn",
      listTitle: (n) => `${n} câu hỏi trắc nghiệm Linux`,
      listLead: "Mỗi câu hỏi có 4 phương án A–D và chỉ có một đáp án đúng. Đáp án được ẩn đi: hãy chọn một phương án để kiểm tra, hoặc nhấn “Xem đáp án”.",
      toc: "Mục lục",
      tocTopic: "Chủ đề",
      tocRange: "Câu",
      topicHeading: (n, name, a, b) => `${n}. ${name} (câu ${a}–${b})`,
      questionNo: (id) => `Câu ${id}.`,
      backToToc: "↑ Về mục lục",
      listProgress: (a, n, c) => `Đã trả lời ${a}/${n} câu · đúng ${c} câu`,
      resetAll: "Làm lại từ đầu",
      showAnswer: "Xem đáp án",
      hideAnswer: "Ẩn đáp án",
      titleResults: (c, n) => `Kết quả: ${c}/${n}`,
    },
    en: {
      brand: "Linux Quiz",
      navPractice: "Practice",
      navBank: "All Questions",
      navBankShort: "Questions",
      footer: (q, n) => `${q} questions · ${n} topics · answers and explanations included`,
      langLabel: "Language",
      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme",
      heroTitle: "Learn Linux one question at a time",
      heroLead: (q, n) => `${q} beginner-friendly multiple-choice questions across ${n} topics. Pick a topic, choose how many questions you want, and get instant feedback with a short explanation after every answer.`,
      topic: "Topic",
      allTopics: "All topics",
      count: "Number of questions",
      countAll: (n) => `All (${n})`,
      shuffle: "Shuffle question order",
      start: "Start quiz →",
      browseAll: "Browse all questions",
      inProgress: "Quiz in progress",
      answeredOf: (a, n) => `${a} of ${n} answered`,
      resume: "Resume",
      missedSuffix: "missed questions",
      quit: "✕ Quit",
      correctSoFar: (n) => `✓ ${n} correct`,
      correctSoFarTitle: "Correct answers so far",
      progressLabel: "Questions answered",
      questionOf: (i, n) => `Question ${i} of ${n}`,
      prev: "← Previous",
      next: "Next →",
      skip: "Skip →",
      finish: "Finish quiz",
      correct: "Correct!",
      notQuite: "Not quite.",
      correctAnswer: (letter) => `Correct answer: ${letter}`,
      explanationLabel: "Explanation:",
      srCorrect: "(correct answer)",
      srYours: "(your answer)",
      hint: "Keyboard: <kbd>1</kbd>–<kbd>4</kbd> or <kbd>A</kbd>–<kbd>D</kbd> to answer, <kbd>←</kbd> <kbd>→</kbd> to move between questions.",
      map: "Question map",
      mapAnswered: (a, n) => `(${a} of ${n} answered)`,
      mapItem: (i, status) => `Question ${i}, ${status}`,
      statusNone: "not answered",
      statusCorrect: "correct",
      statusWrong: "wrong",
      confirmFinish: (n) => `You have ${n} unanswered question${plural(n)}. Finish anyway?`,
      confirmQuit: "Quit this quiz? Your answers will be lost.",
      resultHeading: (c, n) => `${c} of ${n} correct`,
      verdictPerfect: "Perfect score! You really know your Linux basics.",
      verdictGreat: "Great job! You have a solid grasp of these topics.",
      verdictGood: "Good work! Review the explanations below to fill in the gaps.",
      verdictOk: "Not bad. A little more practice and you'll get there.",
      verdictLow: "Keep going! Read through the explanations below and try again.",
      statCorrect: (n) => `✓ ${n} correct`,
      statWrong: (n) => `✗ ${n} wrong`,
      statSkipped: (n) => `${n} skipped`,
      scoreAria: (p) => `Score: ${p} percent`,
      retryMissed: (n) => `Retry ${n} missed question${plural(n)}`,
      retake: "Retake this quiz",
      newQuiz: "New quiz",
      byTopic: "Score by topic",
      review: "Review answers",
      onlyMistakes: "Only show mistakes",
      noMistakes: "No mistakes to review. Well done!",
      badgeCorrect: "Correct",
      badgeWrong: "Wrong",
      badgeSkipped: "Skipped",
      yourAnswer: "Your answer",
      listTitle: (n) => `${n} Linux multiple-choice questions`,
      listLead: "Each question has four options (A–D) and exactly one correct answer. Answers are hidden: pick an option to check yourself, or press “Show answer”.",
      toc: "Contents",
      tocTopic: "Topic",
      tocRange: "Questions",
      topicHeading: (n, name, a, b) => `${n}. ${name} (questions ${a}–${b})`,
      questionNo: (id) => `Question ${id}.`,
      backToToc: "↑ Back to contents",
      listProgress: (a, n, c) => `Answered ${a} of ${n} · ${c} correct`,
      resetAll: "Start over",
      showAnswer: "Show answer",
      hideAnswer: "Hide answer",
      titleResults: (c, n) => `Results: ${c}/${n}`,
    },
  };

  let lang = loadLang();
  let settings = loadSettings();
  let quiz = null; // { items, answers, current, topic, missed, finished, mapOpen }
  const bankAnswers = new Map(); // question id -> chosen option index, or null when only revealed

  /* ---------- Storage ---------- */

  function readStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch { /* storage unavailable */ }
  }

  function loadLang() {
    const saved = readStorage(LANG_KEY);
    return saved in STRINGS ? saved : "vi";
  }

  function loadSettings() {
    let saved = {};
    try {
      saved = JSON.parse(readStorage(SETTINGS_KEY)) || {};
    } catch { /* ignore malformed data */ }
    return {
      topic: saved.topic in TOPIC_BY_ID ? saved.topic : "all",
      count: Number.isInteger(saved.count) ? saved.count : 20,
      shuffle: typeof saved.shuffle === "boolean" ? saved.shuffle : true,
    };
  }

  function saveSettings() {
    writeStorage(SETTINGS_KEY, JSON.stringify(settings));
  }

  /* ---------- Helpers ---------- */

  // Translate a UI string; function entries receive the extra arguments.
  function tr(key, ...args) {
    const value = STRINGS[lang][key];
    return typeof value === "function" ? value(...args) : value;
  }

  const textOf = (q) => q[lang];
  const topicName = (id) => (id === "all" ? tr("allTopics") : TOPIC_BY_ID[id].name[lang]);
  const quizLabel = (qz) => topicName(qz.topic) + (qz.missed ? ` · ${tr("missedSuffix")}` : "");

  function setTitle(prefix) {
    document.title = prefix ? `${prefix} · ${tr("brand")}` : tr("brand");
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, (c) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));
  }

  // Escape the text, then render `backtick` spans as inline code.
  function fmt(text) {
    return escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  function shuffled(list) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function questionsFor(topic) {
    return topic === "all" ? QUESTIONS : QUESTIONS.filter((q) => q.topic === topic);
  }

  const answeredCount = (qz) => qz.answers.filter((a) => a !== null).length;
  const correctCount = (qz) => qz.answers.filter((a, i) => a === qz.items[i].answer).length;
  const mistakeItems = (qz) => qz.items.filter((q, i) => qz.answers[i] !== q.answer);

  /* ---------- Routing ---------- */

  const views = { "": renderHome, quiz: renderQuiz, results: renderResults, bank: renderBank };

  function currentRoute() {
    return location.hash.replace(/^#\/?/, "");
  }

  function go(route) {
    if (currentRoute() === route) render();
    else location.hash = "#/" + route;
  }

  function render() {
    const route = currentRoute();
    const section = route === "bank" ? "bank" : "practice";
    document.querySelectorAll("[data-nav]").forEach((link) => {
      const active = link.dataset.nav === section;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    (views[route] || renderHome)();
  }

  window.addEventListener("hashchange", () => {
    render();
    window.scrollTo(0, 0);
  });

  /* ---------- Home ---------- */

  function chip(name, value, label, count, checked) {
    return `
      <label class="chip">
        <input type="radio" name="${name}" value="${value}" ${checked ? "checked" : ""}>
        <span>${escapeHtml(label)}${count != null ? ` <small>${count}</small>` : ""}</span>
      </label>`;
  }

  function renderHome() {
    setTitle();
    const resume = quiz && !quiz.finished
      ? `<div class="card banner">
           <div><strong>${tr("inProgress")}</strong>
             <span class="muted">· ${escapeHtml(quizLabel(quiz))} · ${tr("answeredOf", answeredCount(quiz), quiz.items.length)}</span></div>
           <a class="btn primary small" href="#/quiz">${tr("resume")}</a>
         </div>`
      : "";

    app.innerHTML = `
      ${resume}
      <section class="hero">
        <h1>${tr("heroTitle")}</h1>
        <p class="lead">${tr("heroLead", QUESTIONS.length, TOPICS.length)}</p>
      </section>
      <form class="card setup" id="setup">
        <fieldset>
          <legend>${tr("topic")}</legend>
          <div class="chips">
            ${chip("topic", "all", tr("allTopics"), QUESTIONS.length, settings.topic === "all")}
            ${TOPICS.map((topic) => chip("topic", topic.id, topic.name[lang], questionsFor(topic.id).length, settings.topic === topic.id)).join("")}
          </div>
        </fieldset>
        <fieldset>
          <legend>${tr("count")}</legend>
          <div class="chips" id="count-chips"></div>
        </fieldset>
        <label class="check">
          <input type="checkbox" name="shuffle" ${settings.shuffle ? "checked" : ""}>
          ${tr("shuffle")}
        </label>
        <div class="actions">
          <button type="submit" class="btn primary">${tr("start")}</button>
          <a class="btn" href="#/bank">${tr("browseAll")}</a>
        </div>
      </form>`;

    const form = document.getElementById("setup");

    const renderCountChips = () => {
      const total = questionsFor(settings.topic).length;
      const choices = COUNT_CHOICES.filter((n) => n < total);
      const selected = choices.includes(settings.count) ? settings.count : 0; // 0 = all
      document.getElementById("count-chips").innerHTML =
        choices.map((n) => chip("count", n, String(n), null, n === selected)).join("") +
        chip("count", 0, tr("countAll", total), null, selected === 0);
    };
    renderCountChips();

    // Choices are saved as soon as they change so they survive a language switch.
    form.addEventListener("change", (event) => {
      const { name, value, checked } = event.target;
      if (name === "topic") {
        settings.topic = value;
        renderCountChips();
      }
      if (name === "count") settings.count = Number(value);
      if (name === "shuffle") settings.shuffle = checked;
      saveSettings();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      startFromSettings();
    });
  }

  /* ---------- Quiz ---------- */

  function startFromSettings() {
    const pool = questionsFor(settings.topic);
    const count = settings.count > 0 && settings.count < pool.length ? settings.count : pool.length;
    const items = shuffled(pool).slice(0, count);
    if (!settings.shuffle) items.sort((a, b) => a.id - b.id);
    startQuiz(items, settings.topic, false);
  }

  function startQuiz(items, topic, missed) {
    quiz = { items, answers: items.map(() => null), current: 0, topic, missed, finished: false, mapOpen: false };
    go("quiz");
    window.scrollTo(0, 0);
  }

  // `attr` names the data attribute the click handler routes on ("option" in the quiz, "pick" in the list).
  function optionButton(q, i, { chosen = null, revealed = chosen !== null, attr = "option" } = {}) {
    let state = "";
    let mark = "";
    if (revealed) {
      if (i === q.answer) {
        state = "correct";
        mark = `<span class="mark" aria-hidden="true">✓</span><span class="sr-only">${tr("srCorrect")}</span>`;
      } else if (i === chosen) {
        state = "wrong";
        mark = `<span class="mark" aria-hidden="true">✗</span><span class="sr-only">${tr("srYours")}</span>`;
      } else {
        state = "dim";
      }
    }
    return `
      <button type="button" class="option ${state}" data-${attr}="${i}" ${revealed ? "disabled" : ""}>
        <span class="letter">${LETTERS[i]}</span>
        <span class="opt-text">${fmt(textOf(q).options[i])}</span>${mark}
      </button>`;
  }

  // "Correct answer: X – text" and "Explanation: …", as laid out in dap-an.md.
  function answerLines(q) {
    const content = textOf(q);
    return `
      <p><strong>${tr("correctAnswer", LETTERS[q.answer])}</strong> – ${fmt(content.options[q.answer])}</p>
      <p><strong>${tr("explanationLabel")}</strong> ${fmt(content.explanation)}</p>`;
  }

  function feedback(q, chosen) {
    const ok = chosen === q.answer;
    return `
      <div class="feedback ${ok ? "ok" : "bad"}" id="feedback" role="status">
        <p class="feedback-title">${tr(ok ? "correct" : "notQuite")}</p>
        ${answerLines(q)}
      </div>`;
  }

  function mapButton(i) {
    const chosen = quiz.answers[i];
    const state = chosen === null ? "" : chosen === quiz.items[i].answer ? "correct" : "wrong";
    const status = tr(state === "correct" ? "statusCorrect" : state === "wrong" ? "statusWrong" : "statusNone");
    const current = i === quiz.current;
    return `<button type="button" class="map-btn ${state} ${current ? "current" : ""}" data-goto="${i}"
      aria-label="${tr("mapItem", i + 1, status)}" ${current ? 'aria-current="step"' : ""}>${i + 1}</button>`;
  }

  function renderQuiz() {
    if (!quiz) return go("");
    if (quiz.finished) return go("results");

    const { items, current } = quiz;
    const q = items[current];
    const chosen = quiz.answers[current];
    const answered = chosen !== null;
    const total = items.length;
    const done = answeredCount(quiz);
    setTitle(tr("questionOf", current + 1, total));

    const forward = current === total - 1
      ? `<button type="button" class="btn primary" data-action="finish">${tr("finish")}</button>`
      : `<button type="button" class="btn ${answered ? "primary" : ""}" data-action="next">${tr(answered ? "next" : "skip")}</button>`;

    app.innerHTML = `
      <div class="quiz-top">
        <button type="button" class="link-btn" data-action="quit">${tr("quit")}</button>
        <span class="quiz-label">${escapeHtml(quizLabel(quiz))}</span>
        <span class="score-pill" title="${tr("correctSoFarTitle")}">${tr("correctSoFar", correctCount(quiz))}</span>
      </div>
      <div class="progress" role="progressbar" aria-label="${tr("progressLabel")}"
        aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}">
        <span style="width:${(done / total) * 100}%"></span>
      </div>
      <article class="card">
        <div class="q-meta">
          <span>${tr("questionOf", current + 1, total)}</span>
          <span class="tag">${escapeHtml(topicName(q.topic))}</span>
        </div>
        <h2 class="q-text" id="q-text" tabindex="-1">${fmt(textOf(q).question)}</h2>
        <div class="options" role="group" aria-labelledby="q-text">
          ${q.en.options.map((_, i) => optionButton(q, i, { chosen })).join("")}
        </div>
        ${answered ? feedback(q, chosen) : ""}
      </article>
      <div class="quiz-nav">
        <button type="button" class="btn" data-action="prev" ${current === 0 ? "disabled" : ""}>${tr("prev")}</button>
        ${forward}
      </div>
      <p class="hint">${tr("hint")}</p>
      <details class="qmap" ${quiz.mapOpen ? "open" : ""}>
        <summary>${tr("map")} <span class="muted">${tr("mapAnswered", done, total)}</span></summary>
        <div class="qmap-grid">${items.map((_, i) => mapButton(i)).join("")}</div>
      </details>`;
  }

  function answer(index) {
    if (!quiz || quiz.finished || quiz.answers[quiz.current] !== null) return;
    quiz.answers[quiz.current] = index;
    render();
    document.querySelector('[data-action="next"], [data-action="finish"]').focus({ preventScroll: true });
    document.querySelector(".quiz-nav").scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function showQuestion(index) {
    if (!quiz || index < 0 || index >= quiz.items.length) return;
    quiz.current = index;
    render();
    window.scrollTo(0, 0);
    document.getElementById("q-text").focus({ preventScroll: true });
  }

  function finishQuiz() {
    const skipped = quiz.items.length - answeredCount(quiz);
    if (skipped && !confirm(tr("confirmFinish", skipped))) return;
    quiz.finished = true;
    go("results");
  }

  function quitQuiz() {
    if (answeredCount(quiz) > 0 && !confirm(tr("confirmQuit"))) return;
    quiz = null;
    go("");
  }

  document.addEventListener("keydown", (event) => {
    if (currentRoute() !== "quiz" || !quiz || quiz.finished) return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.target instanceof Element && event.target.closest("input, select, textarea")) return;

    const key = event.key.toLowerCase();
    const index = "1234".includes(key) && key.length === 1 ? Number(key) - 1 : "abcd".indexOf(key);
    if (key.length === 1 && index >= 0) {
      event.preventDefault();
      answer(index);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showQuestion(quiz.current + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      showQuestion(quiz.current - 1);
    }
  });

  /* ---------- Results ---------- */

  function verdict(pct) {
    if (pct === 100) return tr("verdictPerfect");
    if (pct >= 80) return tr("verdictGreat");
    if (pct >= 60) return tr("verdictGood");
    if (pct >= 40) return tr("verdictOk");
    return tr("verdictLow");
  }

  function scoreRing(pct) {
    return `
      <div class="ring" role="img" aria-label="${tr("scoreAria", pct)}">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle class="ring-bg" cx="60" cy="60" r="52"></circle>
          ${pct > 0 ? `<circle class="ring-fg" cx="60" cy="60" r="52" pathLength="100" stroke-dasharray="${pct} 100"></circle>` : ""}
        </svg>
        <span class="ring-value" aria-hidden="true">${pct}%</span>
      </div>`;
  }

  function topicRow(row) {
    return `
      <div class="topic-row">
        <span>${escapeHtml(row.name)}</span>
        <div class="bar"><span style="width:${(row.correct / row.total) * 100}%"></span></div>
        <span class="topic-score">${row.correct}/${row.total}</span>
      </div>`;
  }

  function renderResults() {
    if (!quiz) return go("");
    if (!quiz.finished) return go("quiz");

    const total = quiz.items.length;
    const correct = correctCount(quiz);
    const skipped = total - answeredCount(quiz);
    const wrong = total - correct - skipped;
    const pct = Math.round((correct / total) * 100);
    const mistakes = mistakeItems(quiz);
    setTitle(tr("titleResults", correct, total));

    const byTopic = TOPICS.map((topic) => {
      const idx = quiz.items.map((q, i) => (q.topic === topic.id ? i : -1)).filter((i) => i >= 0);
      return {
        name: topic.name[lang],
        total: idx.length,
        correct: idx.filter((i) => quiz.answers[i] === quiz.items[i].answer).length,
      };
    }).filter((row) => row.total > 0);

    app.innerHTML = `
      <section class="card results-hero">
        ${scoreRing(pct)}
        <div>
          <p class="eyebrow">${escapeHtml(quizLabel(quiz))}</p>
          <h1>${tr("resultHeading", correct, total)}</h1>
          <p class="lead">${verdict(pct)}</p>
          <div class="stats">
            <span class="stat ok">${tr("statCorrect", correct)}</span>
            <span class="stat bad">${tr("statWrong", wrong)}</span>
            ${skipped ? `<span class="stat">${tr("statSkipped", skipped)}</span>` : ""}
          </div>
        </div>
      </section>
      <div class="actions">
        ${mistakes.length ? `<button type="button" class="btn primary" data-action="retry-mistakes">${tr("retryMissed", mistakes.length)}</button>` : ""}
        <button type="button" class="btn ${mistakes.length ? "" : "primary"}" data-action="retake">${tr("retake")}</button>
        <a class="btn" href="#/">${tr("newQuiz")}</a>
      </div>
      ${byTopic.length > 1 ? `
        <section class="card">
          <h2 class="section-title">${tr("byTopic")}</h2>
          ${byTopic.map(topicRow).join("")}
        </section>` : ""}
      <section>
        <div class="section-head">
          <h2 class="section-title">${tr("review")}</h2>
          <label class="check"><input type="checkbox" id="only-mistakes" ${mistakes.length ? "checked" : ""}> ${tr("onlyMistakes")}</label>
        </div>
        <ol class="qlist" id="review-list"></ol>
      </section>`;

    const onlyMistakes = document.getElementById("only-mistakes");
    const renderReview = () => {
      const rows = quiz.items
        .map((q, i) => ({ q, i, chosen: quiz.answers[i] }))
        .filter((r) => !onlyMistakes.checked || r.chosen !== r.q.answer);
      document.getElementById("review-list").innerHTML = rows.length
        ? rows.map((r) => qCard(r.q, { label: tr("questionOf", r.i + 1, total), chosen: r.chosen })).join("")
        : `<li class="card empty">${tr("noMistakes")}</li>`;
    };
    onlyMistakes.addEventListener("change", renderReview);
    renderReview();
  }

  /* ---------- Review card (results page) ---------- */

  function qCard(q, { label, chosen }) {
    const content = textOf(q);
    const options = content.options.map((opt, i) => {
      const cls = i === q.answer ? "correct" : i === chosen ? "chosen-wrong" : "";
      const correctNote = i === q.answer
        ? `<span class="mark" aria-hidden="true">✓</span><span class="sr-only">${tr("srCorrect")}</span>`
        : "";
      return `
        <li class="${cls}">
          <span class="letter">${LETTERS[i]}</span>
          <span class="opt-text">${fmt(opt)}</span>
          ${i === chosen ? `<span class="your">${tr("yourAnswer")}</span>` : ""}${correctNote}
        </li>`;
    }).join("");

    const badge = chosen === null ? `<span class="badge skip">${tr("badgeSkipped")}</span>`
      : chosen === q.answer ? `<span class="badge ok">${tr("badgeCorrect")}</span>`
      : `<span class="badge bad">${tr("badgeWrong")}</span>`;

    return `
      <li class="qcard">
        <div class="q-meta">
          <span>${escapeHtml(label)}</span>
          <span><span class="tag">${escapeHtml(topicName(q.topic))}</span> ${badge}</span>
        </div>
        <p class="q-text-sm">${fmt(content.question)}</p>
        <ol class="opt-list">${options}</ol>
        <div class="answer-block">${answerLines(q)}</div>
      </li>`;
  }

  /* ---------- Question list (same layout as dap-an.md, answers hidden until chosen) ---------- */

  function bankCard(q) {
    const revealed = bankAnswers.has(q.id);
    const chosen = revealed ? bankAnswers.get(q.id) : null;
    return `
      <li class="qcard" id="q-${q.id}" data-id="${q.id}">
        <h3 class="q-text-sm">${tr("questionNo", q.id)} ${fmt(textOf(q).question)}</h3>
        <div class="options">
          ${q.en.options.map((_, i) => optionButton(q, i, { chosen, revealed, attr: "pick" })).join("")}
        </div>
        ${revealed ? `<div class="answer-block">${answerLines(q)}</div>` : ""}
        <button type="button" class="link-btn reveal-btn" data-action="reveal" aria-expanded="${revealed}">${tr(revealed ? "hideAnswer" : "showAnswer")}</button>
      </li>`;
  }

  function renderBank() {
    setTitle(tr("navBank"));
    const groups = TOPICS.map((topic) => {
      const items = questionsFor(topic.id);
      return { topic, items, first: items[0].id, last: items[items.length - 1].id };
    });

    app.innerHTML = `
      <section class="hero">
        <h1>${tr("listTitle", QUESTIONS.length)}</h1>
        <p class="lead">${tr("listLead")}</p>
      </section>
      <section class="card toc" id="toc">
        <h2 class="section-title">${tr("toc")}</h2>
        <table class="toc-table">
          <thead><tr><th>#</th><th>${tr("tocTopic")}</th><th>${tr("tocRange")}</th></tr></thead>
          <tbody>
            ${groups.map((g, n) => `
              <tr>
                <td>${n + 1}</td>
                <td><a href="#/bank" data-jump="topic-${g.topic.id}">${escapeHtml(g.topic.name[lang])}</a></td>
                <td>${g.first}–${g.last}</td>
              </tr>`).join("")}
          </tbody>
        </table>
        <p class="bank-progress" id="bank-progress" aria-live="polite"></p>
      </section>
      ${groups.map((g, n) => `
        <section class="topic-group" id="topic-${g.topic.id}">
          <h2 class="section-title">${escapeHtml(tr("topicHeading", n + 1, g.topic.name[lang], g.first, g.last))}</h2>
          <ol class="qlist">${g.items.map(bankCard).join("")}</ol>
          <a class="back-top" href="#/bank" data-jump="toc">${tr("backToToc")}</a>
        </section>`).join("")}`;
    updateBankProgress();
  }

  function updateBankProgress() {
    const picked = [...bankAnswers].filter(([, chosen]) => chosen !== null);
    const correct = picked.filter(([id, chosen]) => QUESTION_BY_ID.get(id).answer === chosen).length;
    document.getElementById("bank-progress").innerHTML =
      tr("listProgress", picked.length, QUESTIONS.length, correct) +
      (bankAnswers.size ? ` · <button type="button" class="link-btn" data-action="reset-bank">${tr("resetAll")}</button>` : "");
  }

  // Re-render a single card so the page keeps its scroll position.
  function updateBankCard(id) {
    document.getElementById(`q-${id}`).outerHTML = bankCard(QUESTION_BY_ID.get(id));
    document.querySelector(`#q-${id} .reveal-btn`).focus({ preventScroll: true });
    updateBankProgress();
  }

  /* ---------- Shared click handling ---------- */

  app.addEventListener("click", (event) => {
    // Contents links scroll within the page instead of changing the #/route hash.
    const jump = event.target.closest("a[data-jump]");
    if (jump) {
      event.preventDefault();
      document.getElementById(jump.dataset.jump).scrollIntoView({ behavior: "smooth" });
      return;
    }

    const el = event.target.closest("button");
    if (!el) return;
    if (el.dataset.option !== undefined) return answer(Number(el.dataset.option));
    if (el.dataset.goto !== undefined) return showQuestion(Number(el.dataset.goto));
    if (el.dataset.pick !== undefined) {
      const id = Number(el.closest(".qcard").dataset.id);
      bankAnswers.set(id, Number(el.dataset.pick));
      return updateBankCard(id);
    }

    switch (el.dataset.action) {
      case "quit": return quitQuiz();
      case "prev": return showQuestion(quiz.current - 1);
      case "next": return showQuestion(quiz.current + 1);
      case "finish": return finishQuiz();
      case "retry-mistakes": return startQuiz(mistakeItems(quiz), quiz.topic, true);
      case "retake": return startQuiz(settings.shuffle ? shuffled(quiz.items) : quiz.items.slice(), quiz.topic, quiz.missed);
      case "reveal": {
        // Hiding also clears the chosen option, so the question can be tried again.
        const id = Number(el.closest(".qcard").dataset.id);
        if (bankAnswers.has(id)) bankAnswers.delete(id);
        else bankAnswers.set(id, null);
        return updateBankCard(id);
      }
      case "reset-bank":
        bankAnswers.clear();
        return render();
    }
  });

  // <details> "toggle" does not bubble, so listen in the capture phase.
  app.addEventListener("toggle", (event) => {
    if (quiz && event.target.matches(".qmap")) quiz.mapOpen = event.target.open;
  }, true);

  /* ---------- Theme ---------- */

  const themeButton = document.getElementById("theme-toggle");
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const ICONS = {
    moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`,
    sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
  };

  function effectiveTheme() {
    return document.documentElement.dataset.theme || (darkQuery.matches ? "dark" : "light");
  }

  function syncThemeButton() {
    const dark = effectiveTheme() === "dark";
    themeButton.innerHTML = dark ? ICONS.sun : ICONS.moon;
    themeButton.setAttribute("aria-label", tr(dark ? "themeToLight" : "themeToDark"));
  }

  themeButton.addEventListener("click", () => {
    const next = effectiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    writeStorage(THEME_KEY, next);
    syncThemeButton();
  });
  darkQuery.addEventListener("change", syncThemeButton);

  /* ---------- Language ---------- */

  const langSwitch = document.getElementById("lang-switch");

  function applyStaticText() {
    document.documentElement.lang = lang;
    document.getElementById("brand-name").textContent = tr("brand");
    document.getElementById("nav-practice").textContent = tr("navPractice");
    document.querySelector("#nav-bank .nav-long").textContent = tr("navBank");
    document.querySelector("#nav-bank .nav-short").textContent = tr("navBankShort");
    document.getElementById("footer").textContent = tr("footer", QUESTIONS.length, TOPICS.length);
    langSwitch.setAttribute("aria-label", tr("langLabel"));
    langSwitch.querySelectorAll("[data-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    syncThemeButton();
  }

  langSwitch.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang]");
    if (!button || button.dataset.lang === lang) return;
    lang = button.dataset.lang;
    writeStorage(LANG_KEY, lang);
    applyStaticText();
    render();
  });

  applyStaticText();
  render();
})();
