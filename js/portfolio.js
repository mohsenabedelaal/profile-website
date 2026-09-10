const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

const konovoImage = document.querySelector('img[alt="Konovo healthcare research platform"]');
if (konovoImage) {
  konovoImage.src = 'https://konovo.com/wp-content/uploads/2025/04/Konovo_Platform-1024x632.png';
  konovoImage.alt = 'Konovo intelligent healthcare research platform mockup';
}

// Writing & Speaking
const writingSpeakingStyles = document.createElement('link');
writingSpeakingStyles.rel = 'stylesheet';
writingSpeakingStyles.href = 'css/writing-speaking.css';
document.head.appendChild(writingSpeakingStyles);

const experienceSection = document.getElementById('experience');
const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');

if (experienceSection && !document.getElementById('writing-speaking')) {
  const section = document.createElement('section');
  section.className = 'shell section';
  section.id = 'writing-speaking';
  section.innerHTML = `
    <header class="section-head compact reveal">
      <div>
        <p class="section-no">04 / Writing & Speaking</p>
        <h2>Sharing what I learn.</h2>
      </div>
      <p>Technical writing, talks and workshops around AI, serverless systems, cloud architecture and production engineering.</p>
    </header>

    <div class="thoughts-grid">
      <div class="thoughts-column reveal">
        <div class="thoughts-column-head">
          <h3>Writing</h3>
          <span>Medium</span>
        </div>
        <div class="thought-list">
          <a class="thought-item" href="https://medium.com/@mohsen.abedelaal/one-endpoint-zero-servers-giving-our-agents-a-governed-web-search-with-bedrock-agentcore-gateway-82d61b1fca27" target="_blank" rel="noreferrer">
            <div class="thought-meta"><strong>Latest</strong><span>AI · AWS</span></div>
            <div class="thought-copy">
              <h4>One Endpoint, Zero Servers: Giving Our Agents a Governed Web Search with Bedrock AgentCore Gateway</h4>
              <p>How to expose governed web search to AI agents through Amazon Bedrock AgentCore Gateway without running dedicated servers.</p>
              <span class="thought-link">Read article ↗</span>
            </div>
          </a>

          <a class="thought-item" href="https://medium.com/@mohsen.abedelaal/serverless-id-verification-using-aws-lambda-2e27fc8756f3" target="_blank" rel="noreferrer">
            <div class="thought-meta"><strong>Article</strong><span>Serverless · AWS</span></div>
            <div class="thought-copy">
              <h4>Serverless ID Verification Using AWS Lambda</h4>
              <p>A practical look at building an identity-verification workflow with AWS Lambda and serverless architecture.</p>
              <span class="thought-link">Read article ↗</span>
            </div>
          </a>
        </div>
      </div>

      <div class="thoughts-column reveal">
        <div class="thoughts-column-head">
          <h3>Speaking & Workshops</h3>
          <span>Community</span>
        </div>
        <div class="thought-list">
          <a class="thought-item" href="https://www.linkedin.com/posts/laura-jardine-paterson_this-saturday-join-us-in-the-beqaa-i-will-activity-7341019649200836609-sCXX" target="_blank" rel="noreferrer">
            <div class="thought-meta"><strong>2025</strong><span>Jun 18</span></div>
            <div class="thought-copy">
              <h4>Beqaa Tech Session</h4>
              <p>A community speaking and workshop session in the Beqaa, focused on sharing practical technology knowledge and hands-on learning.</p>
              <span class="thought-link">View event post ↗</span>
            </div>
          </a>

          <a class="thought-item" href="https://www.linkedin.com/posts/develeb_build-scalable-apps-no-servers-required-activity-7239611969819865088-nGhP" target="_blank" rel="noreferrer">
            <div class="thought-meta"><strong>2024</strong><span>Sep 11</span></div>
            <div class="thought-copy">
              <h4>Build Scalable Apps — No Servers Required</h4>
              <p>A serverless workshop on building scalable applications without managing traditional server infrastructure.</p>
              <span class="thought-link">View workshop post ↗</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  `;

  experienceSection.insertAdjacentElement('afterend', section);

  if (aboutSection) {
    const aboutLabel = aboutSection.querySelector('.section-no');
    if (aboutLabel) aboutLabel.textContent = '05 / About';
  }

  if (contactSection) {
    const contactLabel = contactSection.querySelector('.section-no');
    if (contactLabel) contactLabel.textContent = '06 / Contact';
  }

  if (nav) {
    const aboutLink = nav.querySelector('a[href="#about"]');
    const writingLink = document.createElement('a');
    writingLink.href = '#writing-speaking';
    writingLink.textContent = 'Writing & Speaking';
    if (aboutLink) nav.insertBefore(writingLink, aboutLink);
  }
}

// Get in touch / Calendly booking experience
if (contactSection && !document.getElementById('booking-dialog')) {
  const contactMain = contactSection.querySelector('.contact-main');
  if (contactMain) {
    contactMain.innerHTML = `
      <h2>Have an engineering problem or opportunity worth discussing?</h2>
      <div class="contact-options">
        <p>Book a focused 30-minute call to discuss the problem, scope, architecture, collaboration, or next steps. Prefer email? That works too.</p>
        <div class="contact-actions-row">
          <button class="booking-trigger" type="button" data-open-booking>
            Book a 30-min call <span>↗</span>
          </button>
          <a class="contact-email-button" href="mailto:mohsen.abedelaal@gmail.com">Email me ↗</a>
        </div>
        <p class="contact-expectation">30 minutes · Calendly scheduling · Google Meet invite</p>
      </div>
    `;
  }

  const dialog = document.createElement('dialog');
  dialog.className = 'booking-dialog';
  dialog.id = 'booking-dialog';
  dialog.setAttribute('aria-labelledby', 'booking-dialog-title');
  dialog.innerHTML = `
    <div class="booking-dialog-shell">
      <div class="booking-dialog-head">
        <div class="booking-dialog-title">
          <strong id="booking-dialog-title">Schedule a 30-minute conversation</strong>
          <span>Choose a time that works for you. The meeting invite will be sent automatically.</span>
        </div>
        <button class="booking-dialog-close" type="button" aria-label="Close scheduling window" data-close-booking>×</button>
      </div>
      <iframe
        class="booking-frame"
        title="Schedule a meeting with Mohsen Abedelaal"
        loading="lazy"
        data-src="https://calendly.com/mohsen-abedelaal/30min?hide_gdpr_banner=1"
        allow="camera; microphone; fullscreen; payment"
      ></iframe>
    </div>
  `;
  document.body.appendChild(dialog);

  const frame = dialog.querySelector('.booking-frame');
  const openBooking = () => {
    if (frame && !frame.getAttribute('src')) frame.setAttribute('src', frame.dataset.src || '');
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      document.body.classList.add('booking-open');
    } else {
      window.open('https://calendly.com/mohsen-abedelaal/30min', '_blank', 'noopener,noreferrer');
    }
  };

  const closeBooking = () => {
    if (dialog.open) dialog.close();
    document.body.classList.remove('booking-open');
  };

  document.querySelectorAll('[data-open-booking]').forEach((button) => button.addEventListener('click', openBooking));
  dialog.querySelector('[data-close-booking]')?.addEventListener('click', closeBooking);
  dialog.addEventListener('close', () => document.body.classList.remove('booking-open'));
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeBooking();
  });
}

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 16);
};

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

const navLinks = document.querySelectorAll('.site-nav a');
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

const reveals = document.querySelectorAll('.reveal');
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
