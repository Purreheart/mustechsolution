/**
 * MUSTECH DYNAMIC SOLUTIONS
 * Main JavaScript — main.js
 * Version: 1.0.0
 */

'use strict';

/* ============================================================
   PRELOADER
   ============================================================ */

/* ============================================================
   NAVBAR
   ============================================================ */
(function initNavbar() {
  const navbar  = document.getElementById('navbar');
  const burger  = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!navbar) return;

  // Scroll class
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveLink();
    toggleBackTop();
    updateProgress();
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu toggle
  function openMenu() {
    burger?.classList.add('open');
    mobileNav?.classList.add('open');
    mobileOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    burger?.classList.remove('open');
    mobileNav?.classList.remove('open');
    mobileOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  burger?.addEventListener('click', () => {
    burger.classList.contains('open') ? closeMenu() : openMenu();
  });
  mobileOverlay?.addEventListener('click', closeMenu);
  mobileLinks.forEach(l => l.addEventListener('click', closeMenu));

  // Active link tracking
  const navLinks = document.querySelectorAll('.nav-link-item, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    let current = '';
    sections.forEach(s => {
      if (s.offsetTop - 150 <= window.scrollY) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === `#${current}` ||
          l.getAttribute('href') === `./${current}.html` ) {
        l.classList.add('active');
      }
    });
  }

  // Highlight active page on inner pages
  const currentPage = window.location.pathname.split('/').pop().replace('.html','') || 'index';
  document.querySelectorAll('.nav-link-item, .mobile-nav-link').forEach(l => {
    const href = l.getAttribute('href') || '';
    if (href.includes(currentPage) && currentPage !== 'index') {
      l.classList.add('active');
    }
  });
})();

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
})();

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));

  function animateCounter(el) {
    const target  = parseFloat(el.dataset.count);
    const suffix  = el.dataset.suffix || (target >= 100 ? '+' : '');
    const prefix  = el.dataset.prefix || '';
    const decimals = target % 1 !== 0 ? 1 : 0;
    const duration = 1800;
    const start    = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const value = eased * target;

      el.textContent = prefix + value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
})();

/* ============================================================
   CODE WINDOW TYPING ANIMATION
   ============================================================ */
(function initCodeTyper() {
  const lines = document.querySelectorAll('.cl');
  if (!lines.length) return;

  lines.forEach((line, i) => {
    setTimeout(() => line.classList.add('show'), 600 + i * 280);
  });
})();

/* ============================================================
   PORTFOLIO FILTER
   ============================================================ */
(function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-pill');
  const cards      = document.querySelectorAll('.portfolio-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.dataset.filter;

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        if (match) {
          card.style.display = 'block';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.93)';
          setTimeout(() => { card.style.display = 'none'; }, 320);
        }
      });
    });
  });
})();

/* ============================================================
   CONTACT FORM
   ============================================================ */
(function initContactForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const formWrap = document.getElementById('form-wrap');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;

    required.forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = '#ff6b6b';
        field.focus();
      }
    });

    if (!valid) {
      showToast('Please fill in all required fields.', 'warning');
      return;
    }

    // Simulate submit
    const btn = form.querySelector('.form-submit-btn');
    btn.innerHTML = '<i class="bi bi-hourglass-split"></i> Sending…';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    setTimeout(() => {
      if (formWrap) formWrap.style.display = 'none';
      if (success)  success.style.display  = 'block';
      showToast('Message sent! We\'ll be in touch within 24 hours.', 'success');
    }, 1800);
  });

  // Live field validation
  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('blur', function () {
      this.style.borderColor = this.value.trim() ? '' : '#ff6b6b';
    });
    field.addEventListener('input', function () {
      if (this.value.trim()) this.style.borderColor = '';
    });
  });
})();

/* ============================================================
   NEWSLETTER
   ============================================================ */
document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('input[type="email"]');
    if (!input?.value || !input.value.includes('@')) {
      input.style.borderColor = '#ff6b6b';
      return;
    }
    input.value = '';
    input.placeholder = 'Subscribed! ✓';
    input.disabled = true;
    input.style.borderColor = 'var(--electric)';
    showToast('You\'re subscribed to Mustech insights!', 'success');
  });
});

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
function showToast(message, type = 'info') {
  const icons = { success: 'bi-check-circle', warning: 'bi-exclamation-triangle', info: 'bi-info-circle' };
  const toast = document.createElement('div');
  toast.className = 'notification-toast';
  toast.innerHTML = `<i class="bi ${icons[type] || icons.info}"></i><span>${message}</span>`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function toggleBackTop() {
  const btn = document.getElementById('back-top');
  if (btn) btn.classList.toggle('show', window.scrollY > 400);
}
document.getElementById('back-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   READ PROGRESS BAR
   ============================================================ */
function updateProgress() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  bar.style.width = (scrollTop / docHeight * 100) + '%';
}

/* ============================================================
   COOKIE BAR
   ============================================================ */
(function initCookie() {
  const bar = document.getElementById('cookie-bar');
  if (!bar) return;
  if (localStorage.getItem('mustech_cookie_accepted')) return;

  setTimeout(() => bar.classList.add('show'), 2500);

  document.querySelectorAll('.cookie-accept, .cookie-decline').forEach(btn => {
    btn.addEventListener('click', () => {
      localStorage.setItem('mustech_cookie_accepted', '1');
      bar.style.transform = 'translateY(110%)';
    });
  });
})();

/* ============================================================
   PARTICLE BACKGROUND (Hero)
   ============================================================ */
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animFrame;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * canvas.width;
      this.y  = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r  = Math.random() * 2 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width ||
          this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,204,255,${this.alpha})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    const count = Math.min(Math.floor(canvas.width / 10), 80);
    particles = Array.from({ length: count }, () => new Particle());
  }

  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,204,255,${0.06 * (1 - dist/100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connect();
    animFrame = requestAnimationFrame(loop);
  }

  init();
  loop();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animFrame);
    init();
    loop();
  });
})();

/* ============================================================
   TRUST BAR DUPLICATE (infinite scroll)
   ============================================================ */
(function initTrustBar() {
  const track = document.querySelector('.trust-track');
  if (!track) return;
  // Clone to make infinite
  track.innerHTML += track.innerHTML;
})();

/* ============================================================
   ACTIVE PAGE HIGHLIGHT
   ============================================================ */
(function highlightActivePage() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link-item, .footer-links a').forEach(link => {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });
})();

/* ============================================================
   WHATSAPP FLOAT BUTTON (if present)
   ============================================================ */
(function initWhatsApp() {
  const btn = document.getElementById('wa-float');
  if (!btn) return;
  setTimeout(() => btn.classList.add('show'), 3000);
})();
