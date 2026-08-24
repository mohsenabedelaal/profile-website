const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const reveals = document.querySelectorAll('.reveal');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

const cedarLogo = document.querySelector('img[alt="Cedar Oxygen logo"]');
if (cedarLogo) {
  const cedarMedia = cedarLogo.closest('.product-media');
  if (cedarMedia) {
    cedarMedia.style.background = '#ffffff';
    cedarMedia.style.padding = '24px';
    cedarMedia.style.display = 'grid';
    cedarMedia.style.placeItems = 'center';
  }

  cedarLogo.style.width = 'min(92%, 360px)';
  cedarLogo.style.height = 'auto';
  cedarLogo.style.maxHeight = '138px';
  cedarLogo.style.objectFit = 'contain';
  cedarLogo.style.filter = 'none';
}

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 20);
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
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  reveals.forEach((node) => observer.observe(node));
} else {
  reveals.forEach((node) => node.classList.add('visible'));
}
