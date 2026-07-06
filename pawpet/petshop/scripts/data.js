// ============================================================
// data.js — اطلاعات محصولات پاو پت
// ============================================================

const PRODUCTS = [
  // ---- سگ ----
  {
    id: 1, category: "dog",
    name: "غذای خشک رویال کنین سگ بالغ",
    price: 450000,
    oldPrice: 520000,
    emoji: "🐕",
    badge: "پرفروش",
    rating: 4.8, reviews: 124,
    description: "غذای خشک با کیفیت بالا مناسب سگ‌های بالغ تمام نژادها، حاوی پروتئین بالا و ویتامین‌های ضروری"
  },
  {
    id: 2, category: "dog",
    name: "لیش و قلاده چرمی لوکس",
    price: 280000,
    oldPrice: null,
    emoji: "🦮",
    badge: "جدید",
    rating: 4.6, reviews: 58,
    description: "لیش و قلاده چرم طبیعی دست‌دوز با بند قابل تنظیم برای تمام نژادها"
  },
  {
    id: 3, category: "dog",
    name: "بستر ارتوپدیک مموری فوم",
    price: 620000,
    oldPrice: 750000,
    emoji: "🛏️",
    badge: "تخفیف",
    rating: 4.9, reviews: 87,
    description: "بستر ارتوپدیک با فوم حافظه‌دار مناسب سگ‌های مسن‌تر و نژادهای بزرگ"
  },
  {
    id: 4, category: "dog",
    name: "اسباب‌بازی طناب پنبه‌ای",
    price: 95000,
    oldPrice: null,
    emoji: "🧶",
    badge: null,
    rating: 4.4, reviews: 211,
    description: "اسباب‌بازی طنابی ۱۰۰٪ پنبه برای بازی و تمیز کردن دندان‌های سگ"
  },
  {
    id: 5, category: "dog",
    name: "شامپو آرایشی بلابری داگ",
    price: 185000,
    oldPrice: null,
    emoji: "🛁",
    badge: null,
    rating: 4.7, reviews: 93,
    description: "شامپو حرفه‌ای با فرمول ملایم مناسب پوست حساس، بوی خوش ماندگار"
  },
  // ---- گربه ----
  {
    id: 6, category: "cat",
    name: "غذای مرطوب وابان گربه",
    price: 38000,
    oldPrice: null,
    emoji: "🐈",
    badge: "پرفروش",
    rating: 4.7, reviews: 302,
    description: "غذای مرطوب مناسب گربه‌های بالغ با طعم ماهی و مرغ، بسته‌بندی ۸۵ گرم"
  },
  {
    id: 7, category: "cat",
    name: "خانه گربه چوب بامبو",
    price: 890000,
    oldPrice: 1050000,
    emoji: "🏠",
    badge: "لوکس",
    rating: 4.9, reviews: 44,
    description: "خانه گربه از چوب بامبوی طبیعی با سطح خش طبیعی و بالشت راحت داخلی"
  },
  {
    id: 8, category: "cat",
    name: "ظرف آب هوشمند ۲ لیتری",
    price: 340000,
    oldPrice: null,
    emoji: "💧",
    badge: "جدید",
    rating: 4.8, reviews: 77,
    description: "فواره هوشمند با فیلتر کربن فعال برای تشویق گربه به نوشیدن بیشتر آب"
  },
  {
    id: 9, category: "cat",
    name: "ماسه گربه بنتونیت کلومپینگ",
    price: 145000,
    oldPrice: 165000,
    emoji: "🪨",
    badge: "تخفیف",
    rating: 4.5, reviews: 189,
    description: "ماسه بنتونیتی با قدرت کلومپینگ بالا، بدون گرد و غبار، کنترل بوی عالی"
  },
  {
    id: 10, category: "cat",
    name: "اسباب‌بازی چوب دار موشی",
    price: 65000,
    oldPrice: null,
    emoji: "🪄",
    badge: null,
    rating: 4.6, reviews: 156,
    description: "اسباب‌بازی چوبی با پر طبیعی مناسب شکار بازی و تحریک غریزه گربه"
  },
  // ---- پرنده ----
  {
    id: 11, category: "bird",
    name: "قفس آهنی رنگ‌آمیزی ۶۰ سانت",
    price: 520000,
    oldPrice: 600000,
    emoji: "🦜",
    badge: "تخفیف",
    rating: 4.6, reviews: 38,
    description: "قفس با روکش ضد زنگ، درهای قفل‌دار، آبخوری و دانه‌خوری استیل"
  },
  {
    id: 12, category: "bird",
    name: "دانه مخلوط طوطی",
    price: 78000,
    oldPrice: null,
    emoji: "🌾",
    badge: null,
    rating: 4.5, reviews: 92,
    description: "مخلوط ۱۵ نوع دانه طبیعی بدون افزودنی برای طوطی‌های کوچک و متوسط"
  },
  {
    id: 13, category: "bird",
    name: "ویتامین D3 مایع پرنده",
    price: 125000,
    oldPrice: null,
    emoji: "💊",
    badge: "جدید",
    rating: 4.8, reviews: 24,
    description: "محلول ویتامین D3 مخصوص پرندگان خانگی برای تقویت استخوان و سیستم ایمنی"
  },
  // ---- ماهی ----
  {
    id: 14, category: "fish",
    name: "آکواریوم شیشه ۵۴ لیتری",
    price: 1250000,
    oldPrice: 1400000,
    emoji: "🐠",
    badge: "لوکس",
    rating: 4.9, reviews: 21,
    description: "آکواریوم شیشه ۱۰ میل با فریم آلومینیوم، شیر و درب، بدون LED"
  },
  {
    id: 15, category: "fish",
    name: "فیلتر داخلی ۶۰۰ لیتر در ساعت",
    price: 285000,
    oldPrice: null,
    emoji: "🔄",
    badge: null,
    rating: 4.6, reviews: 47,
    description: "فیلتر داخلی ۶۰۰ L/H با سه مرحله فیلتراسیون برای آکواریوم تا ۱۲۰ لیتر"
  },
  {
    id: 16, category: "fish",
    name: "غذای ماهی تتراپرو",
    price: 92000,
    oldPrice: null,
    emoji: "🦐",
    badge: "پرفروش",
    rating: 4.7, reviews: 83,
    description: "غذای پرک ماهی‌های زینتی با فرمول رنگ‌بخشی طبیعی، بسته ۱۰۰ گرم"
  }
];

// helper: تبدیل عدد به فارسی با جداکننده
function formatPrice(n) {
  return n.toLocaleString("fa-IR") + " تومان";
}

// helper: render stars
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  let s = "";
  for (let i = 0; i < full; i++) s += "★";
  if (half) s += "½";
  return s;
}
