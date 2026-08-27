const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const reveals = document.querySelectorAll('.reveal');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

const konovoImage = document.querySelector('img[alt="Konovo healthcare research platform"]');
if (konovoImage) {
  konovoImage.src = 'https://konovo.com/wp-content/uploads/2025/04/Konovo_Platform-1024x632.png';
  konovoImage.alt = 'Konovo intelligent healthcare research platform mockup';
}

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 16);
};

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -24px' });

  reveals.forEach((node) => observer.observe(node));
} else {
  reveals.forEach((node) => node.classList.add('visible'));
}
