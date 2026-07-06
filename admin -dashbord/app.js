// ===== DATA =====
const orders = [
  {
    id: "#۱۰۶۰",
    product: "مک‌بوک پرو",
    emoji: "💻",
    customer: "علی احمدی",
    status: "completed",
    amount: "۸۵,۰۰۰,۰۰۰",
    date: "۱۴۰۳/۰۴/۰۷",
  },
  {
    id: "#۱۰۵۹",
    product: "آیفون ۱۵ پرو",
    emoji: "📱",
    customer: "مریم موسوی",
    status: "pending",
    amount: "۶۲,۰۰۰,۰۰۰",
    date: "۱۴۰۳/۰۴/۰۶",
  },
  {
    id: "#۱۰۵۸",
    product: "ایرپادز پرو",
    emoji: "🎧",
    customer: "رضا کریمی",
    status: "processing",
    amount: "۱۲,۰۰۰,۰۰۰",
    date: "۱۴۰۳/۰۴/۰۶",
  },
  {
    id: "#۱۰۵۷",
    product: "اپل واچ S9",
    emoji: "⌚",
    customer: "سارا نوری",
    status: "cancelled",
    amount: "۱۸,۰۰۰,۰۰۰",
    date: "۱۴۰۳/۰۴/۰۵",
  },
  {
    id: "#۱۰۵۶",
    product: "آیپد پرو",
    emoji: "📟",
    customer: "کامران زند",
    status: "completed",
    amount: "۴۲,۰۰۰,۰۰۰",
    date: "۱۴۰۳/۰۴/۰۵",
  },
  {
    id: "#۱۰۵۵",
    product: "مک‌بوک ایر",
    emoji: "💻",
    customer: "نیلوفر صادقی",
    status: "completed",
    amount: "۵۸,۰۰۰,۰۰۰",
    date: "۱۴۰۳/۰۴/۰۴",
  },
  {
    id: "#۱۰۵۴",
    product: "آیفون ۱۵",
    emoji: "📱",
    customer: "محمد رحیمی",
    status: "pending",
    amount: "۴۸,۰۰۰,۰۰۰",
    date: "۱۴۰۳/۰۴/۰۴",
  },
  {
    id: "#۱۰۵۳",
    product: "مانیتور اپل",
    emoji: "🖥️",
    customer: "فاطمه ملکی",
    status: "processing",
    amount: "۳۵,۰۰۰,۰۰۰",
    date: "۱۴۰۳/۰۴/۰۳",
  },
];

const users = [
  {
    name: "علی احمدی",
    email: "ali@gmail.com",
    role: "مشتری",
    status: "فعال",
    date: "۱۴۰۳/۰۱/۱۵",
    orders: 8,
    color: "#3b82f6",
  },
  {
    name: "مریم موسوی",
    email: "maryam@yahoo.com",
    role: "مشتری",
    status: "فعال",
    date: "۱۴۰۳/۰۲/۱۰",
    orders: 3,
    color: "#a855f7",
  },
  {
    name: "رضا کریمی",
    email: "reza@outlook.com",
    role: "فروشنده",
    status: "فعال",
    date: "۱۴۰۲/۱۱/۲۰",
    orders: 15,
    color: "#22c55e",
  },
  {
    name: "سارا نوری",
    email: "sara@gmail.com",
    role: "مشتری",
    status: "غیرفعال",
    date: "۱۴۰۳/۰۳/۰۵",
    orders: 1,
    color: "#f59e0b",
  },
  {
    name: "کامران زند",
    email: "kamran@nova.ir",
    role: "ادمین",
    status: "فعال",
    date: "۱۴۰۲/۰۸/۱۲",
    orders: 0,
    color: "#ef4444",
  },
];

const products = [
  {
    name: "مک‌بوک پرو M3",
    emoji: "💻",
    category: "لپ‌تاپ",
    price: "۸۵,۰۰۰,۰۰۰",
    stock: 12,
    status: "موجود",
  },
  {
    name: "آیفون ۱۵ پرو",
    emoji: "📱",
    category: "موبایل",
    price: "۶۲,۰۰۰,۰۰۰",
    stock: 28,
    status: "موجود",
  },
  {
    name: "ایرپادز پرو ۲",
    emoji: "🎧",
    category: "لوازم جانبی",
    price: "۱۲,۰۰۰,۰۰۰",
    stock: 3,
    status: "رو به اتمام",
  },
  {
    name: "اپل واچ سری ۹",
    emoji: "⌚",
    category: "پوشیدنی",
    price: "۱۸,۰۰۰,۰۰۰",
    stock: 0,
    status: "ناموجود",
  },
  {
    name: "آیپد پرو ۱۲.۹",
    emoji: "📟",
    category: "تبلت",
    price: "۴۲,۰۰۰,۰۰۰",
    stock: 7,
    status: "موجود",
  },
];

const messages = [
  {
    from: "علی احمدی",
    email: "ali@gmail.com",
    subject: "سوال درباره گارانتی",
    time: "۱۰:۳۲",
    read: false,
  },
  {
    from: "مریم موسوی",
    email: "maryam@yahoo.com",
    subject: "درخواست مرجوعی محصول",
    time: "۰۹:۱۵",
    read: false,
  },
  {
    from: "رضا کریمی",
    email: "reza@outlook.com",
    subject: "تشکر از خدمات عالی",
    time: "دیروز",
    read: true,
  },
  {
    from: "سارا نوری",
    email: "sara@gmail.com",
    subject: "مشکل در فرآیند پرداخت",
    time: "دیروز",
    read: false,
  },
  {
    from: "کامران زند",
    email: "kamran@nova.ir",
    subject: "پیشنهاد همکاری",
    time: "۲ روز پیش",
    read: true,
  },
];

const statusMap = {
  completed: "completed",
  pending: "pending",
  processing: "processing",
  cancelled: "cancelled",
};
const statusLabel = {
  completed: "تکمیل شده",
  pending: "در انتظار",
  processing: "در حال پردازش",
  cancelled: "لغو شده",
};

// ===== RENDER TABLES =====
let currentPage = 1;
const pageSize = 5;
let filteredOrders = [...orders];

function renderOrders() {
  const tbody = document.getElementById("orders-tbody");
  const start = (currentPage - 1) * pageSize,
    end = start + pageSize;
  const slice = filteredOrders.slice(start, end);
  tbody.innerHTML = slice
    .map(
      (o) => `
    <tr>
      <td><div class="product-cell"><div class="product-img">${o.emoji}</div><div><div class="product-name">${o.product}</div><div class="product-id">${o.id}</div></div></div></td>
      <td>${o.customer}</td>
      <td><span class="status-badge ${o.status}">${statusLabel[o.status]}</span></td>
      <td style="font-weight:600">${o.amount}</td>
      <td style="color:var(--muted);font-size:13px">${o.date}</td>
      <td><div class="action-btns">
        <button class="act-btn" onclick="showToast('info','مشاهده سفارش ${o.id}')" title="مشاهده"><i class="fa-solid fa-eye"></i></button>
        <button class="act-btn" onclick="showToast('info','ویرایش سفارش')" title="ویرایش"><i class="fa-solid fa-pen"></i></button>
        <button class="act-btn del" onclick="deleteOrderRow(this)" title="حذف"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>`,
    )
    .join("");
  document.getElementById("pagination-info").textContent =
    `نمایش ${start + 1}–${Math.min(end, filteredOrders.length)} از ${filteredOrders.length} سفارش`;
  document.getElementById("page-num").textContent = toFarsiNum(currentPage);
}

function renderAllOrders() {
  const tbody = document.getElementById("all-orders-tbody");
  tbody.innerHTML = orders
    .map(
      (o) => `
    <tr>
      <td style="font-size:13px;color:var(--muted)">${o.id}</td>
      <td><div class="product-cell"><div class="product-img">${o.emoji}</div><span>${o.product}</span></div></td>
      <td>${o.customer}</td>
      <td><span class="status-badge ${o.status}">${statusLabel[o.status]}</span></td>
      <td style="font-weight:600">${o.amount}</td>
      <td style="color:var(--muted);font-size:13px">${o.date}</td>
      <td><div class="action-btns">
        <button class="act-btn" onclick="showToast('info','مشاهده')" title="مشاهده"><i class="fa-solid fa-eye"></i></button>
        <button class="act-btn del" onclick="deleteOrderRow(this)" title="حذف"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>`,
    )
    .join("");
}

function renderUsers() {
  const tbody = document.getElementById("users-tbody");
  tbody.innerHTML = users
    .map(
      (u) => `
    <tr>
      <td><div class="user-cell"><div class="u-avatar" style="background:${u.color}22;color:${u.color}">${u.name[0]}</div><div><div class="u-name">${u.name}</div><div class="u-email">${u.email}</div></div></div></td>
      <td><span style="font-size:13px;color:var(--muted)">${u.role}</span></td>
      <td><span class="status-badge ${u.status === "فعال" ? "completed" : "cancelled"}">${u.status}</span></td>
      <td style="font-size:13px;color:var(--muted)">${u.date}</td>
      <td style="font-weight:600">${toFarsiNum(u.orders)}</td>
      <td><div class="action-btns">
        <button class="act-btn" onclick="showToast('info','مشاهده پروفایل')" title="مشاهده"><i class="fa-solid fa-eye"></i></button>
        <button class="act-btn" onclick="showToast('info','ویرایش کاربر')" title="ویرایش"><i class="fa-solid fa-pen"></i></button>
        <button class="act-btn del" onclick="deleteOrderRow(this)" title="حذف"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>`,
    )
    .join("");
}

function renderProducts() {
  const tbody = document.getElementById("products-tbody");
  tbody.innerHTML = products
    .map((p) => {
      const sc =
        p.status === "موجود"
          ? "completed"
          : p.status === "رو به اتمام"
            ? "pending"
            : "cancelled";
      return `<tr>
      <td><div class="product-cell"><div class="product-img">${p.emoji}</div><span style="font-weight:500">${p.name}</span></div></td>
      <td style="color:var(--muted);font-size:13px">${p.category}</td>
      <td style="font-weight:600">${p.price}</td>
      <td style="font-weight:600">${toFarsiNum(p.stock)}</td>
      <td><span class="status-badge ${sc}">${p.status}</span></td>
      <td><div class="action-btns">
        <button class="act-btn" onclick="showToast('info','مشاهده محصول')"><i class="fa-solid fa-eye"></i></button>
        <button class="act-btn" onclick="showToast('info','ویرایش محصول')"><i class="fa-solid fa-pen"></i></button>
        <button class="act-btn del" onclick="deleteOrderRow(this)"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>`;
    })
    .join("");
}

function renderMessages() {
  const list = document.getElementById("messages-list");
  list.innerHTML = messages
    .map(
      (m, i) => `
    <div class="activity-item" style="cursor:pointer;border-radius:10px;padding:12px;transition:.2s;${m.read ? "" : "border-right:3px solid var(--blue)"}" onclick="readMessage(${i})" id="msg-${i}">
      <div class="u-avatar" style="background:${m.read ? "var(--border)" : "rgba(59,130,246,0.15)"};color:${m.read ? "var(--muted)" : "var(--blue)"};width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">${m.from[0]}</div>
      <div style="flex:1">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-weight:${m.read ? 400 : 600};font-size:14px">${m.from}</span>
          <span style="font-size:11px;color:var(--muted)">${m.time}</span>
        </div>
        <div style="font-size:13px;color:${m.read ? "var(--muted)" : "var(--text)"};margin-top:2px">${m.subject}</div>
        <div style="font-size:11px;color:var(--muted)">${m.email}</div>
      </div>
    </div>`,
    )
    .join("");
}

function readMessage(i) {
  messages[i].read = true;
  renderMessages();
  showToast("info", `پیام از ${messages[i].from}`);
}

// ===== FILTER =====
function filterOrders() {
  const q = document.getElementById("order-search").value.toLowerCase();
  const s = document.getElementById("status-filter").value;
  filteredOrders = orders.filter((o) => {
    const matchQ =
      !q ||
      o.product.toLowerCase().includes(q) ||
      o.customer.includes(q) ||
      o.id.includes(q);
    const matchS = !s || o.status === s;
    return matchQ && matchS;
  });
  currentPage = 1;
  renderOrders();
}

function changePage(dir) {
  const maxPage = Math.ceil(filteredOrders.length / pageSize);
  currentPage = Math.max(1, Math.min(maxPage, currentPage + dir));
  renderOrders();
}

function deleteOrderRow(btn) {
  const row = btn.closest("tr");
  row.style.transition = ".3s";
  row.style.opacity = "0";
  setTimeout(() => {
    row.remove();
    showToast("success", "ردیف حذف شد");
  }, 300);
}

// ===== NAVIGATION =====
document.querySelectorAll(".menu li[data-page]").forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    const page = li.dataset.page;
    document
      .querySelectorAll(".menu li")
      .forEach((l) => l.classList.remove("active"));
    li.classList.add("active");
    document
      .querySelectorAll(".page")
      .forEach((p) => p.classList.remove("active"));
    document.getElementById("page-" + page).classList.add("active");
    if (page === "orders") renderAllOrders();
    if (page === "users") renderUsers();
    if (page === "products") renderProducts();
    if (page === "messages") renderMessages();
    if (page === "analytics") setTimeout(initAnalyticsChart, 100);
  });
});

// ===== SIDEBAR TOGGLE =====
document.getElementById("toggle-sidebar").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("collapsed");
  document.getElementById("main-content").classList.toggle("expanded");
});

// ===== THEME =====
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("light-mode");
  document.getElementById("theme-icon").className = isDark
    ? "fa-solid fa-sun"
    : "fa-solid fa-moon";
  const dt = document.getElementById("dark-toggle");
  if (dt) dt.classList.toggle("on", !isDark);
  localStorage.setItem("theme", isDark ? "light" : "dark");
}
document.getElementById("theme-btn").addEventListener("click", toggleDarkMode);

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    document.getElementById("theme-icon").className = "fa-solid fa-sun";
  }
});

// ===== NOTIFICATIONS =====
document.getElementById("notif-btn").addEventListener("click", (e) => {
  e.stopPropagation();
  document.getElementById("notif-panel").classList.toggle("open");
});
document.addEventListener("click", (e) => {
  if (!e.target.closest("#notif-btn") && !e.target.closest("#notif-panel")) {
    document.getElementById("notif-panel").classList.remove("open");
  }
});
function markRead(el) {
  el.classList.remove("unread");
  el.querySelector(".notif-dot-indicator")?.remove();
}
function markAllRead() {
  document.querySelectorAll(".notif-item.unread").forEach((el) => markRead(el));
  document.querySelector(".notif-dot").style.display = "none";
  showToast("success", "همه اعلان‌ها خوانده شد");
}

// ===== TOAST =====
function showToast(type, msg) {
  const icons = {
    success: "fa-circle-check",
    error: "fa-circle-xmark",
    info: "fa-circle-info",
  };
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fa-solid ${icons[type]} toast-icon"></i><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ===== MODAL =====
const modalTemplates = {
  "add-order": {
    title: "ثبت سفارش جدید",
    body: `<div class="form-row"><div class="form-group"><label>نام محصول</label><input type="text" placeholder="مثلاً: مک‌بوک پرو" /></div><div class="form-group"><label>نام مشتری</label><input type="text" placeholder="نام و نام خانوادگی" /></div></div>
    <div class="form-row"><div class="form-group"><label>مبلغ (تومان)</label><input type="text" placeholder="۰" /></div><div class="form-group"><label>وضعیت</label><select><option>در انتظار</option><option>در حال پردازش</option><option>تکمیل شده</option><option>لغو شده</option></select></div></div>
    <div class="form-group"><label>توضیحات</label><textarea placeholder="جزئیات سفارش..."></textarea></div>
    <div class="modal-actions"><button class="btn-ghost" onclick="closeModal()">انصراف</button><button class="btn-primary" onclick="closeModal();showToast('success','سفارش با موفقیت ثبت شد')">ثبت سفارش</button></div>`,
  },
  "add-user": {
    title: "افزودن کاربر جدید",
    body: `<div class="form-row"><div class="form-group"><label>نام</label><input type="text" /></div><div class="form-group"><label>نام خانوادگی</label><input type="text" /></div></div>
    <div class="form-group"><label>ایمیل</label><input type="email" /></div>
    <div class="form-row"><div class="form-group"><label>شماره تماس</label><input type="text" /></div><div class="form-group"><label>نقش</label><select><option>مشتری</option><option>فروشنده</option><option>ادمین</option></select></div></div>
    <div class="modal-actions"><button class="btn-ghost" onclick="closeModal()">انصراف</button><button class="btn-primary" onclick="closeModal();showToast('success','کاربر با موفقیت افزوده شد')">ذخیره</button></div>`,
  },
  "add-product": {
    title: "افزودن محصول جدید",
    body: `<div class="form-group"><label>نام محصول</label><input type="text" /></div>
    <div class="form-row"><div class="form-group"><label>دسته‌بندی</label><select><option>لپ‌تاپ</option><option>موبایل</option><option>لوازم جانبی</option><option>تبلت</option><option>پوشیدنی</option></select></div><div class="form-group"><label>قیمت (تومان)</label><input type="text" /></div></div>
    <div class="form-row"><div class="form-group"><label>موجودی</label><input type="number" min="0" /></div><div class="form-group"><label>وضعیت</label><select><option>موجود</option><option>رو به اتمام</option><option>ناموجود</option></select></div></div>
    <div class="form-group"><label>توضیحات</label><textarea></textarea></div>
    <div class="modal-actions"><button class="btn-ghost" onclick="closeModal()">انصراف</button><button class="btn-primary" onclick="closeModal();showToast('success','محصول افزوده شد')">ذخیره</button></div>`,
  },
};
function openModal(key) {
  const t = modalTemplates[key];
  if (!t) return;
  document.getElementById("modal-title").textContent = t.title;
  document.getElementById("modal-body").innerHTML = t.body;
  document.getElementById("modal-overlay").classList.add("open");
}
function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
}
function closeModalOverlay(e) {
  if (e.target === document.getElementById("modal-overlay")) closeModal();
}

// ===== TASKS =====
function toggleTask(el) {
  const textEl = el.nextElementSibling;
  el.classList.toggle("done");
  if (el.classList.contains("done")) {
    el.innerHTML = '<i class="fa-solid fa-check" style="font-size:10px"></i>';
    textEl.classList.add("done");
  } else {
    el.innerHTML = "";
    textEl.classList.remove("done");
  }
}
function addTask() {
  const text = prompt("وظیفه جدید:");
  if (!text) return;
  const list = document.getElementById("task-list");
  const div = document.createElement("div");
  div.className = "task-item";
  div.innerHTML = `<div class="task-check" onclick="toggleTask(this)"></div><span class="task-text">${text}</span><span class="task-priority low">عادی</span>`;
  list.appendChild(div);
  showToast("success", "وظیفه افزوده شد");
}

// ===== GLOBAL SEARCH =====
document.getElementById("global-search").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const q = e.target.value.trim();
    if (q) showToast("info", `جستجو برای: ${q}`);
  }
});

// ===== CHARTS =====
function toFarsiNum(n) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

const chartData = {
  week: {
    labels: [
      "شنبه",
      "یکشنبه",
      "دوشنبه",
      "سه‌شنبه",
      "چهارشنبه",
      "پنج‌شنبه",
      "جمعه",
    ],
    values: [3200, 4800, 3900, 5600, 4200, 6800, 5100],
  },
  month: {
    labels: ["هفته ۱", "هفته ۲", "هفته ۳", "هفته ۴"],
    values: [12000, 18500, 14200, 22000],
  },
  year: {
    labels: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
    values: [
      8000, 9500, 7200, 11000, 13400, 10800, 12600, 9800, 14200, 11600, 16000,
      18500,
    ],
  },
};
let currentPeriod = "week";

function setChartPeriod(period, btn) {
  currentPeriod = period;
  document
    .querySelectorAll(".btn-sm")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  drawRevenueChart();
}

function drawRevenueChart() {
  const canvas = document.getElementById("revenueChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const d = chartData[currentPeriod];
  const W = canvas.parentElement.offsetWidth,
    H = 220;
  canvas.width = W;
  canvas.height = H;
  ctx.clearRect(0, 0, W, H);
  const isDark = !document.body.classList.contains("light-mode");
  const gridColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const textColor = isDark ? "#94a3b8" : "#64748b";
  const pad = { top: 20, right: 20, bottom: 48, left: 20 };
  const cW = W - pad.left - pad.right,
    cH = H - pad.top - pad.bottom;
  const max = Math.max(...d.values) * 1.15;
  const step = cW / (d.values.length - 1);

  // Grid
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + cH * (1 - i / 4);
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(W - pad.right, y);
    ctx.stroke();
    ctx.fillStyle = textColor;
    ctx.font = "11px Vazirmatn,sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(toFarsiNum(Math.round((max * i) / 4 / 1000)) + "K", 2, y + 4);
  }
  ctx.setLineDash([]);

  // Gradient fill
  const pts = d.values.map((v, i) => ({
    x: pad.left + i * step,
    y: pad.top + cH * (1 - v / max),
  }));
  const grad = ctx.createLinearGradient(0, pad.top, 0, H - pad.bottom);
  grad.addColorStop(0, "rgba(59,130,246,0.35)");
  grad.addColorStop(1, "rgba(59,130,246,0)");
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  pts.forEach((p, i) => {
    if (i > 0) {
      const cp = pts[i - 1];
      ctx.bezierCurveTo(
        (cp.x + p.x) / 2,
        cp.y,
        (cp.x + p.x) / 2,
        p.y,
        p.x,
        p.y,
      );
    }
  });
  ctx.lineTo(pts[pts.length - 1].x, H - pad.bottom);
  ctx.lineTo(pts[0].x, H - pad.bottom);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  pts.forEach((p, i) => {
    if (i > 0) {
      const cp = pts[i - 1];
      ctx.bezierCurveTo(
        (cp.x + p.x) / 2,
        cp.y,
        (cp.x + p.x) / 2,
        p.y,
        p.x,
        p.y,
      );
    }
  });
  ctx.strokeStyle = "#3b82f6";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Dots + labels
  pts.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#3b82f6";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = isDark ? "#1e293b" : "white";
    ctx.fill();
    ctx.fillStyle = textColor;
    ctx.font = "11px Vazirmatn,sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(d.labels[i], p.x, H - 10);
  });
}

let analyticsChartDrawn = false;
function initAnalyticsChart() {
  if (analyticsChartDrawn) return;
  analyticsChartDrawn = true;
  const canvas = document.getElementById("analyticsChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const data = {
    labels: [
      "شنبه",
      "یکشنبه",
      "دوشنبه",
      "سه‌شنبه",
      "چهارشنبه",
      "پنج‌شنبه",
      "جمعه",
    ],
    v1: [1200, 1800, 1400, 2100, 1600, 2500, 1900],
    v2: [800, 1200, 900, 1600, 1100, 1800, 1400],
  };
  const W = canvas.parentElement.offsetWidth,
    H = 220;
  canvas.width = W;
  canvas.height = H;
  const isDark = !document.body.classList.contains("light-mode");
  const textColor = isDark ? "#94a3b8" : "#64748b";
  const pad = { top: 20, right: 20, bottom: 40, left: 20 };
  const cW = W - pad.left - pad.right,
    cH = H - pad.top - pad.bottom;
  const max = 3000,
    step = cW / (data.labels.length - 1);
  const p1 = data.v1.map((v, i) => ({
    x: pad.left + i * step,
    y: pad.top + cH * (1 - v / max),
  }));
  const p2 = data.v2.map((v, i) => ({
    x: pad.left + i * step,
    y: pad.top + cH * (1 - v / max),
  }));
  function drawLine(pts, color) {
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    pts.forEach((p, i) => {
      if (i > 0) {
        const c = pts[i - 1];
        ctx.bezierCurveTo((c.x + p.x) / 2, c.y, (c.x + p.x) / 2, p.y, p.x, p.y);
      }
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.stroke();
    pts.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });
  }
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + cH * (1 - i / 4);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(W - pad.right, y);
    ctx.stroke();
  }
  ctx.setLineDash([]);
  drawLine(p1, "#3b82f6");
  drawLine(p2, "#a855f7");
  data.labels.forEach((l, i) => {
    ctx.fillStyle = textColor;
    ctx.font = "11px Vazirmatn,sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(l, pad.left + i * step, H - 8);
  });
}

// ===== DONUT =====
function drawDonut() {
  const svg = document.getElementById("donutSvg");
  if (!svg) return;
  const data = [
    { v: 42, c: "#3b82f6" },
    { v: 28, c: "#22c55e" },
    { v: 18, c: "#f59e0b" },
    { v: 12, c: "#a855f7" },
  ];
  const cx = 80,
    cy = 80,
    r = 60,
    thickness = 18;
  let angle = -Math.PI / 2;
  svg.innerHTML = "";
  data.forEach((d) => {
    const sweep = (d.v / 100) * 2 * Math.PI;
    const x1 = cx + r * Math.cos(angle),
      y1 = cy + r * Math.sin(angle);
    const x2 = cx + r * Math.cos(angle + sweep),
      y2 = cy + r * Math.sin(angle + sweep);
    const large = sweep > Math.PI ? 1 : 0;
    const ir = r - thickness;
    const xi1 = cx + ir * Math.cos(angle),
      yi1 = cy + ir * Math.sin(angle);
    const xi2 = cx + ir * Math.cos(angle + sweep),
      yi2 = cy + ir * Math.sin(angle + sweep);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `M${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} L${xi2},${yi2} A${ir},${ir} 0 ${large} 0 ${xi1},${yi1} Z`,
    );
    path.setAttribute("fill", d.c);
    svg.appendChild(path);
    angle += sweep;
  });
}

// ===== INIT =====
window.addEventListener("DOMContentLoaded", () => {
  renderOrders();
  setTimeout(drawRevenueChart, 100);
  setTimeout(drawDonut, 100);
});
window.addEventListener("resize", () => {
  drawRevenueChart();
  if (analyticsChartDrawn) {
    analyticsChartDrawn = false;
    initAnalyticsChart();
  }
});


// ===== MOBILE SIDEBAR =====
function handleMobileSidebar() {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    sidebar.classList.remove("collapsed");
    mainContent.classList.remove("expanded");
  } else {
    sidebar.classList.remove("mobile-open");
    document.body.classList.remove("sidebar-open");
  }
}

toggleBtn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("mobile-open");
    document.body.classList.toggle("sidebar-open");
  }
});

document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 768 &&
    sidebar.classList.contains("mobile-open") &&
    !sidebar.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ) {
    sidebar.classList.remove("mobile-open");
    document.body.classList.remove("sidebar-open");
  }
});

window.addEventListener("resize", handleMobileSidebar);
handleMobileSidebar();
