// ============================================================
// products.js — صفحه محصولات
// ============================================================

let currentCat = "all";
let currentSort = "default";

document.addEventListener("DOMContentLoaded", () => {
  // Navbar
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 50));
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  // Check URL param
  const params = new URLSearchParams(location.search);
  if (params.get("cat")) {
    currentCat = params.get("cat");
  }

  // Category filter buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    if (btn.dataset.cat === currentCat) {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    }
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCat = btn.dataset.cat;
      renderProducts();
    });
  });

  // Sort
  const sortEl = document.getElementById("sort-select");
  sortEl?.addEventListener("change", () => {
    currentSort = sortEl.value;
    renderProducts();
  });

  renderProducts();

  // Intersection observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }});
  }, { threshold: 0.05 });
  const obs = () => document.querySelectorAll(".product-card:not(.visible)").forEach(el => observer.observe(el));
  setTimeout(obs, 100);
});

function renderProducts() {
  let list = currentCat === "all" ? [...PRODUCTS] : PRODUCTS.filter(p => p.category === currentCat);
  if (currentSort === "price-asc") list.sort((a, b) => a.price - b.price);
  else if (currentSort === "price-desc") list.sort((a, b) => b.price - a.price);
  else if (currentSort === "name") list.sort((a, b) => a.name.localeCompare(b.name, "fa"));

  const container = document.getElementById("all-products");
  const countEl = document.getElementById("products-count");
  container.innerHTML = list.map(renderProductCard).join("");
  if (countEl) countEl.textContent = list.length.toLocaleString("fa-IR") + " محصول";

  // re-observe
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }});
  }, { threshold: 0.05 });
  container.querySelectorAll(".product-card").forEach(el => observer.observe(el));
}

function renderProductCard(p) {
  return `
  <div class="product-card" data-id="${p.id}">
    ${p.badge ? `<div class="product-badge badge-${p.badge === "تخفیف" ? "sale" : p.badge === "جدید" ? "new" : p.badge === "لوکس" ? "luxury" : "hot"}">${p.badge}</div>` : ""}
    <div class="product-emoji">${p.emoji}</div>
    <div class="product-info">
      <div class="product-cat-label">${getCatLabel(p.category)}</div>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-desc">${p.description}</p>
      <div class="product-rating">
        <span class="stars-text">${renderStars(p.rating)}</span>
        <span class="rating-num">${p.rating} (${p.reviews.toLocaleString("fa-IR")})</span>
      </div>
      <div class="product-price-row">
        <div class="product-price">
          ${p.oldPrice ? `<span class="old-price">${formatPrice(p.oldPrice)}</span>` : ""}
          <span class="new-price">${formatPrice(p.price)}</span>
        </div>
        <button class="btn-add-cart" onclick="addToCart(${p.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          افزودن
        </button>
      </div>
    </div>
  </div>`;
}

function getCatLabel(cat) {
  const map = { dog: "🐕 سگ", cat: "🐈 گربه", bird: "🦜 پرنده", fish: "🐟 ماهی" };
  return map[cat] || cat;
}
