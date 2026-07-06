// ============================================================
// cart-page.js — صفحه سبد خرید
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 50));
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  renderCart();
});

function renderCart() {
  const cart = getCart();
  const layout = document.getElementById("cart-layout");

  if (cart.length === 0) {
    layout.innerHTML = `
    <div class="cart-empty">
      <div class="cart-empty-icon">🛒</div>
      <h2>سبد خرید شما خالی است</h2>
      <p>هنوز محصولی به سبد اضافه نکردید</p>
      <a href="products.html" class="btn btn-primary">برو خرید کن!</a>
    </div>`;
    return;
  }

  const items = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return "";
    return `
    <div class="cart-item" data-id="${p.id}">
      <div class="cart-item-emoji">${p.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-cat">${getCatLabel(p.category)}</div>
        <h3>${p.name}</h3>
        <p>${p.description.substring(0, 60)}...</p>
      </div>
      <div class="cart-item-controls">
        <div class="qty-control">
          <button onclick="changeQty(${p.id}, -1); renderCart()">−</button>
          <span>${item.qty.toLocaleString("fa-IR")}</span>
          <button onclick="changeQty(${p.id}, 1); renderCart()">+</button>
        </div>
        <div class="cart-item-price">${formatPrice(p.price * item.qty)}</div>
        <button class="cart-item-remove" onclick="removeFromCart(${p.id}); renderCart()" aria-label="حذف">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>
          </svg>
        </button>
      </div>
    </div>`;
  }).join("");

  const total = getCartTotal();
  const shipping = total >= 500000 ? 0 : 45000;
  const finalTotal = total + shipping;

  layout.innerHTML = `
  <div class="cart-items-wrap">
    <div class="cart-header-row">
      <h2>محصولات سبد خرید</h2>
      <span class="cart-items-count">${cart.length.toLocaleString("fa-IR")} آیتم</span>
    </div>
    ${items}
  </div>
  <div class="cart-summary">
    <h3>خلاصه سفارش</h3>
    <div class="summary-row">
      <span>مجموع کالاها</span>
      <span>${formatPrice(total)}</span>
    </div>
    <div class="summary-row">
      <span>هزینه ارسال</span>
      <span>${shipping === 0 ? '<span class="free-shipping">رایگان 🎉</span>' : formatPrice(shipping)}</span>
    </div>
    ${shipping > 0 ? `<div class="free-shipping-note">خرید بالای ۵۰۰ هزار تومان ارسال رایگان است</div>` : ""}
    <div class="summary-divider"></div>
    <div class="summary-row summary-total">
      <span>مبلغ قابل پرداخت</span>
      <strong>${formatPrice(finalTotal)}</strong>
    </div>
    <button class="btn btn-primary btn-full" onclick="alert('در یک سایت واقعی اینجا به درگاه پرداخت منتقل می‌شوید 🛍️')">
      ادامه و پرداخت
    </button>
    <a href="products.html" class="btn btn-outline btn-full" style="margin-top:0.75rem;display:block;text-align:center;">
      ادامه خرید
    </a>
  </div>`;
}

function getCatLabel(cat) {
  const map = { dog: "🐕 سگ", cat: "🐈 گربه", bird: "🦜 پرنده", fish: "🐟 ماهی" };
  return map[cat] || cat;
}
