const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#nav-menu');

toggleButton.addEventListener('click', () => {
  const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
  toggleButton.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', () => {
  // Funcionalidad del menú hamburguesa
  const toggleButton = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('#nav-menu');

  if (toggleButton && navMenu) {
    toggleButton.addEventListener('click', () => {
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('active');
    });
  }

  // Funcionalidad del banner de cookies
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesBtn = document.getElementById('accept-cookies');

  if (cookieBanner && acceptCookiesBtn) {
    if (!localStorage.getItem('cookiesAccepted')) {
      cookieBanner.style.display = 'flex';
    }

    acceptCookiesBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.style.display = 'none';
    });
  }
});
// script.js
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('nav-menu');

  toggle.addEventListener('click', function () {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('active');
  });
});
