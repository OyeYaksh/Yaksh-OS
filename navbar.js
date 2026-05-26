/* ===== navbar.js — Nav toggle, active state, theme, search ===== */

(function() {
  // Mobile hamburger toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.textContent = '☰';
      }
    });
  }

  // Highlight active page
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    if (href === filename || (filename === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Dark/Light mode toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;

  function applyTheme(mode) {
    if (mode === 'light') {
      body.classList.add('light-mode');
      if (themeToggle) themeToggle.textContent = '☀️';
    } else {
      body.classList.remove('light-mode');
      if (themeToggle) themeToggle.textContent = '🌙';
    }
  }

  const savedTheme = localStorage.getItem('yaksh-theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = body.classList.contains('light-mode') ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      localStorage.setItem('yaksh-theme', next);
      applyTheme(next);
    });
  }

  // Global Search (Ctrl+K / Cmd+K)
  const searchBtn = document.querySelector('.nav-search-btn');
  const searchOverlay = document.getElementById('global-search');

  function openSearch() {
    if (searchOverlay) {
      searchOverlay.classList.add('open');
      setTimeout(() => {
        const inp = searchOverlay.querySelector('#search-input');
        if (inp) inp.focus();
      }, 100);
    }
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && searchOverlay) {
      searchOverlay.classList.remove('open');
    }
  });

  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) searchOverlay.classList.remove('open');
    });
  }

  // Letter-by-letter heading animation via JS
  document.querySelectorAll('.letter-animate').forEach(el => {
    const text = el.textContent;
    el.innerHTML = '';
    let delay = 0;
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      if (text[i] === ' ') {
        span.innerHTML = '&nbsp;';
        span.style.marginRight = '0.15em';
      } else {
        span.textContent = text[i];
      }
      span.style.animationDelay = delay + 's';
      el.appendChild(span);
      if (text[i] !== ' ') delay += 0.04;
    }
  });
})();
