// ============================================================
// main.js — اسکریپت صفحه اصلی
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Hamburger
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
  mobileMenu?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });

  // Render featured products (first 6)
  const container = document.getElementById("featured-products");
  if (container) {
    const featured = PRODUCTS.slice(0, 6);
    container.innerHTML = featured.map(renderProductCard).join("");
  }

  // Intersection observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".category-card, .why-card, .testimonial-card, .product-card").forEach(el => {
    observer.observe(el);
  });
});

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
        <button class="btn-add-cart" onclick="addToCart(${p.id})" aria-label="افزودن به سبد">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          افزودن به سبد
        </button>
      </div>
    </div>
  </div>`;
}

function getCatLabel(cat) {
  const map = { dog: "🐕 سگ", cat: "🐈 گربه", bird: "🦜 پرنده", fish: "🐟 ماهی" };
  return map[cat] || cat;
}
