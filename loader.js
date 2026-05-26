/* ===== loader.js — Dismiss loader after 1.2s ===== */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('page-loader');
    if (loader) loader.classList.add('hidden');
  }, 1200);
});
