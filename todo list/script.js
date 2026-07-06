// ── STATE ──
let tasks = JSON.parse(localStorage.getItem("ft_tasks") || "[]");
let filter = "all";
let catFilter = "all";
let sort = "created";
let newPriority = "";
let newCat = "";
let newDue = "";

const priorities = ["", "low", "medium", "high"];
const priorityLabels = {
  "": "اولویت",
  low: "کم",
  medium: "متوسط",
  high: "بالا",
};
const priorityColors = {
  "": "#555E73",
  low: "#34D399",
  medium: "#FBBF24",
  high: "#F87171",
};
let priorityIdx = 0;

const cats = ["", "کاری", "شخصی", "ایده", "یادگیری"];
const catColors = {
  کاری: "#F87171",
  شخصی: "#34D399",
  ایده: "#FBBF24",
  یادگیری: "#A78BFA",
};
let catIdx = 0;

// ── INIT ──
function init() {
  setGreeting();
  setDate();
  render();
}

function setGreeting() {
  const h = new Date().getHours();
  const el = document.getElementById("greetText");
  if (h < 12) el.textContent = "صبح بخیر! ☀️";
  else if (h < 17) el.textContent = "بعدازظهر خوب! 🌤";
  else el.textContent = "عصر بخیر! 🌙";
}

function setDate() {
  const d = new Date();
  const days = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه",
  ];
  const months = [
    "ژانویه",
    "فوریه",
    "مارس",
    "آوریل",
    "مه",
    "ژوئن",
    "ژوئیه",
    "اوت",
    "سپتامبر",
    "اکتبر",
    "نوامبر",
    "دسامبر",
  ];
  document.getElementById("dateChip").textContent =
    `${days[d.getDay()]}، ${d.getDate()} ${months[d.getMonth()]}`;
}

// ── ADD TASK ──
function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return shake(input);
  tasks.unshift({
    id: Date.now(),
    text,
    done: false,
    priority: priorities[priorityIdx] || "low",
    cat: cats[catIdx] || "",
    due: newDue,
    created: Date.now(),
  });
  input.value = "";
  priorityIdx = 0;
  catIdx = 0;
  newDue = "";
  updateMetaBtns();
  save();
  render();
  showToast("وظیفه اضافه شد");
}

function shake(el) {
  el.style.animation = "none";
  el.style.borderColor = "var(--red)";
  setTimeout(() => (el.style.borderColor = ""), 600);
}

// ── PRIORITY / CAT / DUE CYCLING ──
function cyclePriority() {
  priorityIdx = (priorityIdx + 1) % priorities.length;
  updateMetaBtns();
}
function cycleCat() {
  catIdx = (catIdx + 1) % cats.length;
  updateMetaBtns();
}
function openDue() {
  document.getElementById("dueModal").classList.add("active");
}
function closeDue() {
  document.getElementById("dueModal").classList.remove("active");
}
function saveDue() {
  newDue = document.getElementById("dueInput").value;
  updateMetaBtns();
  closeDue();
}
function updateMetaBtns() {
  const p = priorities[priorityIdx];
  document.getElementById("pDot").style.background = priorityColors[p];
  document.getElementById("pLabel").textContent = priorityLabels[p];
  document.getElementById("priorityBtn").classList.toggle("sel", !!p);

  const c = cats[catIdx];
  document.getElementById("catLabel").textContent = c || "دسته‌بندی";
  document.getElementById("catBtn").classList.toggle("sel", !!c);

  document.getElementById("dueLabel").textContent = newDue
    ? formatDate(newDue)
    : "موعد";
  document.getElementById("dueBtn").classList.toggle("sel", !!newDue);
}

function formatDate(d) {
  if (!d) return "";
  const dt = new Date(d);
  return `${dt.getDate()}/${dt.getMonth() + 1}`;
}

function isOverdue(d) {
  if (!d) return false;
  return new Date(d) < new Date(new Date().toDateString());
}

// ── FILTER / SORT ──
function setFilter(btn, val) {
  filter = val;
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  render();
}
function filterCat(el, val) {
  catFilter = val;
  document
    .querySelectorAll(".cat-item")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
  render();
}
function setSort(val) {
  sort = val;
  render();
}

function getFiltered() {
  let t = [...tasks];
  if (catFilter !== "all") t = t.filter((x) => x.cat === catFilter);
  if (filter === "active") t = t.filter((x) => !x.done);
  else if (filter === "done") t = t.filter((x) => x.done);
  else if (filter === "high") t = t.filter((x) => x.priority === "high");
  if (sort === "priority") {
    const ord = { high: 0, medium: 1, low: 2, "": 3 };
    t.sort((a, b) => ord[a.priority] - ord[b.priority]);
  } else if (sort === "due") {
    t.sort((a, b) => ((a.due || "9") < (b.due || "9") ? -1 : 1));
  } else if (sort === "alpha") {
    t.sort((a, b) => a.text.localeCompare(b.text));
  }
  return t;
}

// ── RENDER ──
function render() {
  const list = document.getElementById("taskList");
  const filtered = getFiltered();
  const active = filtered.filter((x) => !x.done);
  const done = filtered.filter((x) => x.done);

  let html = "";
  if (!filtered.length) {
    html = `<div class="empty"><div class="empty-icon">🌿</div><p>هیچ وظیفه‌ای اینجا نیست!</p></div>`;
  } else {
    if (active.length) {
      html += `<div class="section-header">فعال · ${active.length}</div>`;
      active.forEach((t) => {
        html += taskCard(t);
      });
    }
    if (done.length) {
      html += `<div class="section-header">انجام‌شده · ${done.length}</div>`;
      done.forEach((t) => {
        html += taskCard(t);
      });
    }
  }
  list.innerHTML = html;
  updateStats();
  updateCatCounts();
  initDrag();
}

function taskCard(t) {
  const tags = [];
  if (t.cat) tags.push(`<span class="tag tag-cat">🏷 ${t.cat}</span>`);
  if (t.due) {
    const ov = isOverdue(t.due) && !t.done;
    tags.push(
      `<span class="tag tag-due${ov ? " overdue" : ""}">📅 ${formatDate(t.due)}${ov ? " ⚠" : ""}</span>`,
    );
  }
  return `
  <div class="task-card${t.done ? " done-card" : ""}" data-id="${t.id}" data-priority="${t.priority}" draggable="true">
    <button class="check-btn${t.done ? " checked" : ""}" onclick="toggleDone(${t.id})"></button>
    <div class="task-body">
      <div class="task-text">${escHtml(t.text)}</div>
      ${tags.length ? `<div class="task-tags">${tags.join("")}</div>` : ""}
    </div>
    <div class="task-actions">
      <button class="action-btn" title="فوکوس" onclick="focusOn(${t.id})">🎯</button>
      <button class="action-btn" title="حذف" onclick="deleteTask(${t.id})">✕</button>
    </div>
  </div>`;
}

function escHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ── STATS ──
function updateStats() {
  const total = tasks.length;
  const done = tasks.filter((x) => x.done).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const circumference = 283;
  const offset = circumference - (pct / 100) * circumference;
  document.getElementById("ring").style.strokeDashoffset = offset;
  document.getElementById("ringPct").textContent = pct + "%";
  document.getElementById("doneCount").textContent = done;
  document.getElementById("leftCount").textContent = total - done;
}

function updateCatCounts() {
  document.getElementById("catAll").textContent = tasks.length;
  ["کاری", "شخصی", "ایده", "یادگیری"].forEach((c, i) => {
    const ids = ["catWork", "catPersonal", "catIdea", "catLearn"];
    document.getElementById(ids[i]).textContent = tasks.filter(
      (t) => t.cat === c,
    ).length;
  });
}

// ── ACTIONS ──
function toggleDone(id) {
  const t = tasks.find((x) => x.id === id);
  if (t) {
    t.done = !t.done;
    save();
    render();
  }
}
function deleteTask(id) {
  tasks = tasks.filter((x) => x.id !== id);
  save();
  render();
  showToast("وظیفه حذف شد");
}

// ── DRAG & DROP ──
let dragging = null;
function initDrag() {
  document.querySelectorAll(".task-card[draggable]").forEach((card) => {
    card.addEventListener("dragstart", () => {
      dragging = card;
      card.classList.add("dragging");
    });
    card.addEventListener("dragend", () => {
      dragging = null;
      card.classList.remove("dragging");
    });
    card.addEventListener("dragover", (e) => {
      e.preventDefault();
      if (!dragging || dragging === card) return;
      const a = parseInt(dragging.dataset.id);
      const b = parseInt(card.dataset.id);
      const ai = tasks.findIndex((t) => t.id === a);
      const bi = tasks.findIndex((t) => t.id === b);
      if (ai !== -1 && bi !== -1) {
        const [item] = tasks.splice(ai, 1);
        tasks.splice(bi, 0, item);
        save();
        render();
      }
    });
  });
}

// ── FOCUS MODE ──
let timerInterval = null;
let timerSecs = 25 * 60;
let timerRunning = false;
let focusTaskId = null;

function openFocus() {
  const active = tasks.find((t) => !t.done);
  document.getElementById("focusTask").textContent = active
    ? active.text
    : "ابتدا یک وظیفه اضافه کن";
  focusTaskId = active ? active.id : null;
  timerSecs = 25 * 60;
  timerRunning = false;
  updateTimerDisplay();
  document.getElementById("timerBtn").textContent = "شروع";
  document.getElementById("focusOverlay").classList.add("active");
}
function closeFocus() {
  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById("focusOverlay").classList.remove("active");
}
function focusOn(id) {
  const t = tasks.find((x) => x.id === id);
  if (!t) return;
  document.getElementById("focusTask").textContent = t.text;
  focusTaskId = id;
  timerSecs = 25 * 60;
  timerRunning = false;
  updateTimerDisplay();
  document.getElementById("timerBtn").textContent = "شروع";
  document.getElementById("focusOverlay").classList.add("active");
}
function toggleTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById("timerBtn").textContent = "ادامه";
  } else {
    timerRunning = true;
    document.getElementById("timerBtn").textContent = "توقف";
    timerInterval = setInterval(() => {
      timerSecs--;
      if (timerSecs <= 0) {
        clearInterval(timerInterval);
        timerRunning = false;
        document.getElementById("timerBtn").textContent = "شروع";
        showToast("⏰ زمان پومودورو تموم شد!");
      }
      updateTimerDisplay();
    }, 1000);
  }
}
function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSecs = 25 * 60;
  updateTimerDisplay();
  document.getElementById("timerBtn").textContent = "شروع";
}
function updateTimerDisplay() {
  const m = String(Math.floor(timerSecs / 60)).padStart(2, "0");
  const s = String(timerSecs % 60).padStart(2, "0");
  document.getElementById("focusTimer").textContent = `${m}:${s}`;
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}

// ── SAVE ──
function save() {
  localStorage.setItem("ft_tasks", JSON.stringify(tasks));
}

// ── KEYBOARD ──
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeFocus();
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    document.getElementById("taskInput").focus();
    e.preventDefault();
  }
});

// ── SAMPLE DATA ──
if (!tasks.length) {
  tasks = [
    {
      id: 1,
      text: "طراحی رابط کاربری داشبورد",
      done: false,
      priority: "high",
      cat: "کاری",
      due: "",
      created: Date.now() - 3,
    },
    {
      id: 2,
      text: "مطالعه فصل سوم کتاب JavaScript",
      done: false,
      priority: "medium",
      cat: "یادگیری",
      due: "",
      created: Date.now() - 2,
    },
    {
      id: 3,
      text: "ایده اپلیکیشن مدیریت هزینه",
      done: true,
      priority: "low",
      cat: "ایده",
      due: "",
      created: Date.now() - 1,
    },
    {
      id: 4,
      text: "پیاده‌سازی API احراز هویت",
      done: false,
      priority: "high",
      cat: "کاری",
      due: "",
      created: Date.now(),
    },
  ];
  save();
}

init();
