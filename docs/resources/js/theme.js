// Theme toggle logic
(function () {
  const STORAGE_KEY = 'resume-theme';

  const themes = {
    dark: {
      '--bg-main': '#121212',
      '--bg-card': '#1e1e1e',
      '--text-primary': '#ffffff',
      '--text-secondary': '#a0a0a0',
      '--accent': '#5e5e5e',
      '--navbar-bg': '#12121255',
    },
    light: {
      '--bg-main': '#f0f0f0',
      '--bg-card': '#ffffff',
      '--text-primary': '#1a1a1a',
      '--text-secondary': '#555555',
      '--accent': '#cccccc',
      '--navbar-bg': '#e0e0e088',
    },
  };

  function applyTheme(name) {
    const vars = themes[name];
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem(STORAGE_KEY, name);

    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.innerHTML = name === 'dark'
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
      btn.title = name === 'dark' ? 'تم روشن' : 'تم تیره';
    }
  }

  function toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  window.__themeToggle = toggle;

  // Apply saved theme before paint
  const saved = localStorage.getItem(STORAGE_KEY) || 'dark';
  applyTheme(saved);
})();
