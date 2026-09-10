/* Progressive enhancement only: all portfolio content and links are in HTML. */
(() => {
  'use strict';
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Theme is a preference, never a gate to professional or personal content.
  const themeButton = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');
  function applyTheme(theme) {
    root.dataset.theme = theme;
    const night = theme === 'night';
    themeButton?.setAttribute('aria-pressed', String(night));
    themeButton?.setAttribute('aria-label', night ? 'Switch to day theme' : 'Switch to night theme');
    if (themeLabel) themeLabel.textContent = night ? 'Day' : 'Night';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', night ? '#11191c' : '#f5f6f8');
  }
  if (themeButton) {
    applyTheme(root.dataset.theme === 'night' ? 'night' : 'day');
    themeButton.hidden = false;
    themeButton.addEventListener('click', () => {
      const theme = root.dataset.theme === 'night' ? 'day' : 'night';
      applyTheme(theme);
      try { localStorage.setItem('portfolio-theme', theme); } catch { /* Storage may be blocked. */ }
    });
  }

  // Navigation remains visible when JavaScript is disabled.
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('navigation');
  const mobile = window.matchMedia('(max-width: 820px)');
  const closeMenu = (restoreFocus = false) => {
    if (!nav || !menu) return;
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.innerHTML = 'Menu <span aria-hidden="true">+</span>';
    if (restoreFocus) menu.focus();
  };
  if (menu && nav) {
    root.classList.add('nav-ready');
    menu.hidden = false;
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('is-open', open);
      menu.setAttribute('aria-expanded', String(open));
      menu.innerHTML = open ? 'Close <span aria-hidden="true">−</span>' : 'Menu <span aria-hidden="true">+</span>';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') closeMenu(true);
    });
    document.addEventListener('click', event => {
      if (mobile.matches && !event.target.closest('.header')) closeMenu();
    });
    mobile.addEventListener('change', () => closeMenu());
  }

  // Project filters never fetch content or remove the underlying links.
  const toolbar = document.getElementById('project-toolbar');
  const cards = Array.from(document.querySelectorAll('.project[data-category]'));
  const count = document.getElementById('project-count');
  if (toolbar && cards.length) {
    toolbar.hidden = false;
    const filters = toolbar.querySelectorAll('[data-filter]');
    filters.forEach(button => button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      let visible = 0;
      cards.forEach(card => {
        const matches = filter === 'all' || card.dataset.category.split(' ').includes(filter);
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      filters.forEach(filterButton => filterButton.setAttribute('aria-pressed', String(filterButton === button)));
      if (count) count.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
    }));
  }

  // Third-party image failures show the product name, never a broken icon.
  document.querySelectorAll('.project-visual img').forEach(image => {
    const panel = image.closest('.project-visual');
    const loaded = () => { if (image.naturalWidth > 0) panel?.classList.add('is-loaded'); };
    image.addEventListener('load', loaded);
    image.addEventListener('error', () => {
      panel?.classList.remove('is-loaded');
      image.hidden = true;
    });
    if (image.complete) loaded();
  });

  // Real lifting footage, with explicit playback control and no surprise audio.
  const video = document.getElementById('lift-video');
  const motionButton = document.getElementById('motion-toggle');
  const motionStatus = document.getElementById('motion-status');
  if (video && motionButton) {
    let userPaused = reducedMotion.matches || Boolean(navigator.connection?.saveData);
    let visible = false;
    let failed = false;
    video.muted = true;
    video.controls = false;
    motionButton.hidden = false;
    const syncPlayback = () => {
      const playing = !video.paused && !video.ended;
      motionButton.innerHTML = playing ? '<span aria-hidden="true">Ⅱ</span><span>Pause</span>' : '<span aria-hidden="true">▶</span><span>Play</span>';
      motionButton.setAttribute('aria-label', playing ? 'Pause deadlift video' : 'Play deadlift video');
    };
    const play = async () => {
      if (failed || userPaused || !visible || document.hidden) return;
      try { await video.play(); } catch { /* Browser autoplay restrictions: keep Play available. */ }
      syncPlayback();
    };
    motionButton.addEventListener('click', async () => {
      userPaused = !video.paused;
      if (userPaused) video.pause();
      else {
        visible = true;
        await play();
      }
      syncPlayback();
    });
    video.addEventListener('play', syncPlayback);
    video.addEventListener('pause', syncPlayback);
    video.addEventListener('error', () => {
      failed = true;
      motionButton.hidden = true;
      if (motionStatus) motionStatus.textContent = 'Video unavailable · view source →';
    });
    video.querySelector('source')?.addEventListener('error', () => {
      failed = true;
      motionButton.hidden = true;
      if (motionStatus) motionStatus.textContent = 'Video unavailable · view source →';
    });
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        if (visible) play(); else video.pause();
      }, { threshold: 0.25 });
      observer.observe(video);
    } else { visible = true; play(); }
    document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); else play(); });
    reducedMotion.addEventListener('change', event => { if (event.matches) { userPaused = true; video.pause(); } });
    if (reducedMotion.matches && motionStatus) motionStatus.textContent = 'Motion paused by preference';
    syncPlayback();
  }

  // Booking still works as a normal external link without dialog support / JS.
  const dialog = document.getElementById('booking-dialog');
  const frame = document.getElementById('booking-frame');
  const close = document.getElementById('booking-close');
  let bookingOpener = null;
  if (dialog && typeof dialog.showModal === 'function') {
    document.querySelectorAll('[data-booking]').forEach(link => {
      link.setAttribute('aria-haspopup', 'dialog');
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        bookingOpener = link;
        if (frame && !frame.getAttribute('src')) frame.src = frame.dataset.src;
        dialog.showModal();
        document.body.classList.add('dialog-open');
        close?.focus();
      });
    });
    close?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => {
      document.body.classList.remove('dialog-open');
      bookingOpener?.focus();
    });
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
  }

  const copyButton = document.getElementById('copy-email');
  const copyStatus = document.getElementById('copy-status');
  if (copyButton && navigator.clipboard?.writeText) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('mohsen.abedelaal@gmail.com');
        if (copyStatus) copyStatus.textContent = 'Email address copied.';
      } catch {
        if (copyStatus) copyStatus.textContent = 'Copy unavailable. Use the email link above.';
      }
    });
  }
})();
