const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    let count = parseInt(cartCount.textContent, 10);
    cartCount.textContent = count + 1;

    toast.textContent = "محصول به سبد خرید اضافه شد";
    toast.classList.add("show");

    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
  });
});

// Slider
const slider = document.getElementById("productSlider");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

function scrollSlider(amount) {
  slider.scrollBy({
    left: amount,
    behavior: "smooth",
  });
}

prevBtn.addEventListener("click", () => scrollSlider(320));
nextBtn.addEventListener("click", () => scrollSlider(-320));

// Drag / touch support
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("dragging");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("dragging");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("dragging");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener(
  "touchstart",
  (e) => {
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  },
  { passive: true },
);

slider.addEventListener(
  "touchmove",
  (e) => {
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.4;
    slider.scrollLeft = scrollLeft - walk;
  },
  { passive: true },
);

// Countdown timer
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Set a target date 3 days ahead
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 3);
targetDate.setHours(targetDate.getHours() + 6);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(Math.max(days, 0)).padStart(2, "0");
  hoursEl.textContent = String(Math.max(hours, 0)).padStart(2, "0");
  minutesEl.textContent = String(Math.max(minutes, 0)).padStart(2, "0");
  secondsEl.textContent = String(Math.max(seconds, 0)).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Close nav on link click (mobile)
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => navMenu.classList.remove("active"));
});
