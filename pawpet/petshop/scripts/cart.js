// ============================================================
// cart.js — مدیریت سبد خرید
// ============================================================

function getCart() {
  try { return JSON.parse(localStorage.getItem("pawpet_cart") || "[]"); }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem("pawpet_cart", JSON.stringify(cart));
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart(cart);
  updateCartUI();
  showToast("✅ " + product.name + " به سبد اضافه شد");
}

function removeFromCart(productId) {
  let cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
  updateCartUI();
}

function changeQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
  updateCartUI();
  if (typeof renderCart === "function") renderCart();
}

function getCartTotal() {
  return getCart().reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function updateCartUI() {
  const el = document.getElementById("cart-count");
  if (el) {
    const count = getCartCount();
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  }
}

function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => t.classList.remove("show"), 3000);
}

// init on load
document.addEventListener("DOMContentLoaded", updateCartUI);
