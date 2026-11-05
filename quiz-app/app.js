// ===================== Quiz App Logic =====================

const LETTERS = ["A", "B", "C", "D", "E", "F"];

// All unique topics found in the data
const ALL_TOPICS = [...new Set(QUIZ_DATA.map(q => q.topic))];

// App state
let state = {
  pool: [],          // filtered question pool (full, before sampling)
  questions: [],      // the chosen subset for this run (shuffled choices included)
  current: 0,
  answers: [],         // answers[i] = selected choice index or null
  checked: [],         // checked[i] = true/false whether user already "checked" this one
  mode: "instant"      // "instant" or "end"
};

// ---------- DOM refs ----------
const setupScreen = document.getElementById("setup-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const topicListEl = document.getElementById("topic-list");
const numQuestionsEl = document.getElementById("num-questions");
const maxHintEl = document.getElementById("max-hint");
const startBtn = document.getElementById("start-btn");
const setupError = document.getElementById("setup-error");

const quizProgress = document.getElementById("quiz-progress");
const quizTopicBadge = document.getElementById("quiz-topic-badge");
const progressBarFill = document.getElementById("progress-bar-fill");
const questionText = document.getElementById("question-text");
const choicesList = document.getElementById("choices-list");
const feedbackBox = document.getElementById("feedback-box");
const feedbackResult = document.getElementById("feedback-result");
const feedbackCorrect = document.getElementById("feedback-correct");
const feedbackExplanation = document.getElementById("feedback-explanation");

const prevBtn = document.getElementById("prev-btn");
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const finishBtn = document.getElementById("finish-btn");
const quitBtn = document.getElementById("quit-btn");

const scoreSummary = document.getElementById("score-summary");
const topicBreakdown = document.getElementById("topic-breakdown");
const reviewList = document.getElementById("review-list");
const restartBtn = document.getElementById("restart-btn");

// ---------- Setup screen rendering ----------
function renderTopicCheckboxes() {
  topicListEl.innerHTML = "";
  ALL_TOPICS.forEach((topic, idx) => {
    const count = QUIZ_DATA.filter(q => q.topic === topic).length;
    const label = document.createElement("label");
    label.className = "topic-option";
    label.innerHTML = `
      <input type="checkbox" class="topic-checkbox" value="${escapeHtml(topic)}" checked>
      <span>${escapeHtml(topic)}</span>
      <span class="topic-count">${count} soal</span>
    `;
    topicListEl.appendChild(label);
  });

  topicListEl.querySelectorAll(".topic-checkbox").forEach(cb => {
    cb.addEventListener("change", updateMaxHint);
  });

  updateMaxHint();
}

function getSelectedTopics() {
  return [...topicListEl.querySelectorAll(".topic-checkbox:checked")].map(cb => cb.value);
}

function updateMaxHint() {
  const selected = getSelectedTopics();
  const available = QUIZ_DATA.filter(q => selected.includes(q.topic)).length;
  maxHintEl.textContent = `Maksimal tersedia: ${available} soal (dari topik terpilih)`;
  if (Number(numQuestionsEl.value) > available) {
    numQuestionsEl.value = available || 1;
  }
  numQuestionsEl.max = available || 1;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---------- Shuffle helper ----------
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------- Start quiz ----------
startBtn.addEventListener("click", () => {
  const selectedTopics = getSelectedTopics();
  const numRequested = parseInt(numQuestionsEl.value, 10);
  const mode = document.querySelector('input[name="mode"]:checked').value;

  if (selectedTopics.length === 0) {
    setupError.textContent = "Pilih minimal satu topik materi.";
    return;
  }
  if (!numRequested || numRequested < 1) {
    setupError.textContent = "Jumlah soal harus minimal 1.";
    return;
  }

  const pool = QUIZ_DATA.filter(q => selectedTopics.includes(q.topic));
  if (pool.length === 0) {
    setupError.textContent = "Tidak ada soal untuk topik yang dipilih.";
    return;
  }

  const numFinal = Math.min(numRequested, pool.length);
  const chosen = shuffle(pool).slice(0, numFinal);

  // Shuffle choices per question, remembering the correct answer's new index
  const questions = chosen.map(q => {
    const order = shuffle(q.choices.map((c, i) => i));
    const shuffledChoices = order.map(i => q.choices[i]);
    const newAnswerIndex = order.indexOf(q.answer);
    return {
      topic: q.topic,
      question: q.question,
      choices: shuffledChoices,
      answer: newAnswerIndex,
      explanation: q.explanation
    };
  });

  setupError.textContent = "";
  state = {
    pool,
    questions,
    current: 0,
    answers: new Array(questions.length).fill(null),
    checked: new Array(questions.length).fill(false),
    mode
  };

  showScreen(quizScreen);
  renderQuestion();
});

// ---------- Screen switching ----------
function showScreen(screen) {
  [setupScreen, quizScreen, resultScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

// ---------- Render current question ----------
function renderQuestion() {
  const idx = state.current;
  const q = state.questions[idx];
  const total = state.questions.length;

  quizProgress.textContent = `Soal ${idx + 1} dari ${total}`;
  quizTopicBadge.textContent = q.topic;
  progressBarFill.style.width = `${((idx + 1) / total) * 100}%`;
  questionText.textContent = q.question;

  choicesList.innerHTML = "";
  q.choices.forEach((choiceText, choiceIdx) => {
    const item = document.createElement("div");
    item.className = "choice-item";
    item.dataset.index = choiceIdx;

    const letterSpan = document.createElement("span");
    letterSpan.className = "choice-letter";
    letterSpan.textContent = LETTERS[choiceIdx] + ")";

    const textSpan = document.createElement("span");
    textSpan.textContent = choiceText;

    item.appendChild(letterSpan);
    item.appendChild(textSpan);

    item.addEventListener("click", () => selectChoice(choiceIdx));
    choicesList.appendChild(item);
  });

  // Restore previous selection if any
  if (state.answers[idx] !== null) {
    highlightSelected(state.answers[idx]);
  }

  // If instant mode and already checked, show feedback + lock
  if (state.mode === "instant" && state.checked[idx]) {
    showFeedback(idx);
    lockChoices();
    checkBtn.classList.add("hidden");
    nextBtn.classList.toggle("hidden", idx === total - 1);
    finishBtn.classList.toggle("hidden", idx !== total - 1);
  } else {
    feedbackBox.classList.add("hidden");
    checkBtn.classList.toggle("hidden", state.mode === "end");
    nextBtn.classList.toggle("hidden", state.mode === "instant" || idx === total - 1);
    finishBtn.classList.toggle("hidden", !(state.mode === "end" && idx === total - 1));
    if (state.mode === "end") {
      nextBtn.classList.toggle("hidden", idx === total - 1);
    }
    unlockChoices();
  }

  prevBtn.disabled = idx === 0;
}

function selectChoice(choiceIdx) {
  const idx = state.current;
  if (state.mode === "instant" && state.checked[idx]) return; // locked after checking
  state.answers[idx] = choiceIdx;
  highlightSelected(choiceIdx);
}

function highlightSelected(choiceIdx) {
  [...choicesList.children].forEach((el, i) => {
    el.classList.toggle("selected", i === choiceIdx);
  });
}

function lockChoices() {
  [...choicesList.children].forEach(el => el.classList.add("disabled"));
}

function unlockChoices() {
  [...choicesList.children].forEach(el => el.classList.remove("disabled"));
}

// ---------- Check answer (instant mode) ----------
checkBtn.addEventListener("click", () => {
  const idx = state.current;
  if (state.answers[idx] === null) {
    alert("Silakan pilih salah satu jawaban terlebih dahulu.");
    return;
  }
  state.checked[idx] = true;
  showFeedback(idx);
  lockChoices();
  checkBtn.classList.add("hidden");
  const isLast = idx === state.questions.length - 1;
  nextBtn.classList.toggle("hidden", isLast);
  finishBtn.classList.toggle("hidden", !isLast);
});

function showFeedback(idx) {
  const q = state.questions[idx];
  const selected = state.answers[idx];
  const isCorrect = selected === q.answer;

  // Mark choices visually
  [...choicesList.children].forEach((el, i) => {
    if (i === q.answer) el.classList.add("correct-answer");
    if (i === selected && i !== q.answer) el.classList.add("wrong-answer");
  });

  feedbackBox.classList.remove("hidden");
  feedbackResult.textContent = isCorrect ? "✅ Jawaban Anda Benar!" : "❌ Jawaban Anda Salah.";
  feedbackResult.className = "feedback-result " + (isCorrect ? "correct" : "incorrect");
  feedbackCorrect.textContent = `Jawaban yang benar: ${LETTERS[q.answer]}) ${q.choices[q.answer]}`;
  feedbackExplanation.textContent = `Alasan: ${q.explanation}`;
}

// ---------- Navigation ----------
prevBtn.addEventListener("click", () => {
  if (state.current > 0) {
    state.current--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.current < state.questions.length - 1) {
    state.current++;
    renderQuestion();
  }
});

finishBtn.addEventListener("click", () => {
  if (state.mode === "end" && state.answers.includes(null)) {
    const unanswered = state.answers.filter(a => a === null).length;
    const proceed = confirm(`Anda masih memiliki ${unanswered} soal yang belum dijawab. Tetap selesaikan quiz?`);
    if (!proceed) return;
  }
  showResults();
});

quitBtn.addEventListener("click", () => {
  if (confirm("Keluar dari quiz? Progress yang belum selesai akan hilang.")) {
    showScreen(setupScreen);
  }
});

// ---------- Results ----------
function showResults() {
  const total = state.questions.length;
  let correctCount = 0;
  const byTopic = {};

  state.questions.forEach((q, i) => {
    const isCorrect = state.answers[i] === q.answer;
    if (isCorrect) correctCount++;
    if (!byTopic[q.topic]) byTopic[q.topic] = { correct: 0, total: 0 };
    byTopic[q.topic].total++;
    if (isCorrect) byTopic[q.topic].correct++;
  });

  const percentage = Math.round((correctCount / total) * 100);

  scoreSummary.innerHTML = `
    <div class="score-big">${correctCount} / ${total}</div>
    <div class="score-sub">Skor: ${percentage}%</div>
  `;

  topicBreakdown.innerHTML = Object.entries(byTopic).map(([topic, stat]) => `
    <div class="topic-breakdown-item">
      <span>${escapeHtml(topic)}</span>
      <span>${stat.correct} / ${stat.total} benar</span>
    </div>
  `).join("");

  reviewList.innerHTML = state.questions.map((q, i) => {
    const selected = state.answers[i];
    const isCorrect = selected === q.answer;
    const statusClass = selected === null ? "unanswered" : (isCorrect ? "correct" : "incorrect");
    const statusLabel = selected === null ? "TIDAK DIJAWAB" : (isCorrect ? "BENAR" : "SALAH");

    const choicesHtml = q.choices.map((choiceText, ci) => {
      let cls = "review-choice";
      if (ci === q.answer) cls += " is-correct";
      if (ci === selected && ci !== q.answer) cls += " is-wrong-selected";
      return `<div class="${cls}">${LETTERS[ci]}) ${escapeHtml(choiceText)}</div>`;
    }).join("");

    return `
      <div class="review-item">
        <span class="review-status ${statusClass}">${statusLabel}</span>
        <p class="review-q">${i + 1}. ${escapeHtml(q.question)} <small style="color:#9ca3af;">(${escapeHtml(q.topic)})</small></p>
        ${choicesHtml}
        <div class="review-explanation"><strong>Alasan:</strong> ${escapeHtml(q.explanation)}</div>
      </div>
    `;
  }).join("");

  showScreen(resultScreen);
}

restartBtn.addEventListener("click", () => {
  showScreen(setupScreen);
  setupError.textContent = "";
});

// ---------- Init ----------
renderTopicCheckboxes();
numQuestionsEl.addEventListener("input", () => {
  // clamp handled on start, just basic sanity here
});
