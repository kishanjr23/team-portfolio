/**
 * KISHAN J R — PORTFOLIO JAVASCRIPT
 * ====================================
 * Sections:
 *  1. Utility helpers
 *  2. Page Loader
 *  3. Custom Cursor
 *  4. Particle Canvas (Hero background)
 *  5. Navigation (scroll-state, hamburger, active link)
 *  6. GSAP + ScrollTrigger Animations
 *  7. Typewriter Effect
 *  8. Magnetic Buttons
 *  9. 3D Card Tilt
 * 10. Project Modals
 * 11. Animated Counters
 * 12. Contact Form Validation
 * 13. Footer year + back-to-top
 * 14. Init
 */

'use strict';

/* ─────────────────────────────────────────
   1. UTILITY HELPERS
───────────────────────────────────────── */

/** Safely query a single element; returns null if not found */
const qs  = (sel, ctx = document) => ctx.querySelector(sel);
/** Safely query all elements; returns empty array if none */
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/** Throttle a function to fire at most once per `limit` ms */
function throttle(fn, limit) {
  let lastRan = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastRan >= limit) {
      lastRan = now;
      fn.apply(this, args);
    }
  };
}

/** Detect touch / mobile */
const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

/** Detect prefers-reduced-motion */
const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────────────────────────────────
   2. PAGE LOADER
───────────────────────────────────────── */
function initPageLoader() {
  const loader = qs('#page-loader');
  if (!loader) return;

  // Hide loader after CSS animation completes (~1.4 s)
  const hideLoader = () => {
    loader.classList.add('hidden');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
  };

  // If GSAP is available, coordinate with hero entrance
  if (window.gsap) {
    setTimeout(hideLoader, 1400);
  } else {
    setTimeout(hideLoader, 800);
  }
}

/* ─────────────────────────────────────────
   3. CUSTOM CURSOR
   Only active on non-touch, pointer devices.
───────────────────────────────────────── */
function initCustomCursor() {
  if (isTouchDevice()) return;

  const cursor   = qs('#cursor');
  const follower = qs('#cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = window.innerWidth  / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  // Update cursor position immediately on mousemove
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top  = `${mouseY}px`;
  });

  // Smooth follower with requestAnimationFrame
  (function animateFollower() {
    // Lerp for smooth trailing effect
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = `${followerX}px`;
    follower.style.top  = `${followerY}px`;
    requestAnimationFrame(animateFollower);
  })();

  // Grow cursor on interactive elements
  const interactives = 'a, button, .project-card, .skill-tag, .social-icon, input, textarea, .timeline-card';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactives)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactives)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* ─────────────────────────────────────────
   4. PARTICLE CANVAS (Hero background)
   Lightweight canvas — no Three.js needed.
───────────────────────────────────────── */
function initParticles() {
  const canvas = qs('#particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  const PARTICLE_COUNT = isTouchDevice() ? 40 : 80;
  const CONNECTION_DIST = 120;
  const ACCENT = '99, 102, 241'; // RGB of --accent-primary

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r  = Math.random() * 1.5 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      // Wrap around edges
      if (this.x < 0) this.x = W;
      if (this.x > W) this.x = 0;
      if (this.y < 0) this.y = H;
      if (this.y > H) this.y = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT}, ${this.alpha})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const opacity = (1 - dist / CONNECTION_DIST) * 0.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${ACCENT}, ${opacity})`;
          ctx.lineWidth   = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }

  init();
  animate();
  window.addEventListener('resize', throttle(init, 300));
}

/* ─────────────────────────────────────────
   5. NAVIGATION
───────────────────────────────────────── */
function initNavigation() {
  const navbar    = qs('#navbar');
  const hamburger = qs('#hamburger-btn');
  const mobileMenu= qs('#mobile-menu');
  const navLinks  = qsa('.nav-link');
  const mobileLinks = qsa('.mobile-nav-link');
  const sections  = qsa('section[id]');

  if (!navbar) return;

  /* --- Scroll state (transparent → solid) --- */
  const updateNavScroll = throttle(() => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, 50);
  window.addEventListener('scroll', updateNavScroll, { passive: true });
  updateNavScroll(); // run once on load

  /* --- Active section highlight --- */
  const highlightActiveSection = throttle(() => {
    let current = '';
    sections.forEach(sec => {
      const offset = sec.offsetTop - (navbar.offsetHeight + 80);
      if (window.scrollY >= offset) current = sec.id;
    });

    navLinks.forEach(link => {
      const isActive = link.dataset.section === current;
      link.classList.toggle('active', isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  }, 100);

  window.addEventListener('scroll', highlightActiveSection, { passive: true });
  highlightActiveSection();

  /* --- Hamburger toggle --- */
  function toggleMenu(open) {
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('open', open);
    // Prevent body scroll when menu is open
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('open');
    toggleMenu(!isOpen);
  });

  /* --- Close mobile menu on link click --- */
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  /* --- Close mobile menu on Escape --- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger.classList.contains('open')) {
      toggleMenu(false);
      hamburger.focus();
    }
  });

  /* --- Smooth scroll for anchor links --- */
  qsa('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = qs(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─────────────────────────────────────────
   6. GSAP + ScrollTrigger Animations
   All animation logic is gated by GSAP availability.
───────────────────────────────────────── */
function initGSAPAnimations() {
  if (!window.gsap) {
    // Fallback: just make everything visible
    qsa('.reveal-text, .fade-in-up').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const reduced = prefersReducedMotion();

  /* ── Hero entrance (fires after loader hides) ── */
  if (!reduced) {
    const heroTl = gsap.timeline({ delay: 1.5 });

    heroTl
      .to('.hero-badge', {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out'
      })
      .to('.hero-name .name-line', {
        opacity: 1, y: 0,
        duration: 0.9,
        ease: 'power4.out',
        stagger: 0.12
      }, '-=0.3')
      .to('.hero-heading.reveal-text', {
        opacity: 1, y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .to('.hero-subtitle.reveal-text', {
        opacity: 1, y: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.4')
      .to('.hero-desc.reveal-text', {
        opacity: 1, y: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.3')
      .to('.hero-cta.reveal-text', {
        opacity: 1, y: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.3')
      .to('.hero-socials.reveal-text', {
        opacity: 1, y: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.2')
      .to('.code-card', {
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      }, '-=0.4');

    // Initial states (supplement CSS)
    gsap.set('.hero-badge', { opacity: 0, y: 20 });
    gsap.set('.code-card',  { opacity: 0 });
  } else {
    // Reduced motion: instantly show everything
    qsa('.reveal-text, .hero-badge, .code-card').forEach(el => {
      el.style.opacity   = '1';
      el.style.transform = 'none';
    });
  }

  /* ── Reusable scroll-trigger factory ── */
  function scrollReveal(selector, vars = {}) {
    const defaults = {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
    };
    const config = { ...defaults, ...vars };

    ScrollTrigger.batch(selector, {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration:  config.duration,
          ease:      config.ease,
          stagger:   config.stagger,
          overwrite: 'auto',
        });
      },
      start: 'top 88%',
    });

    // Set initial hidden state (only if not reduced motion)
    if (!reduced) {
      gsap.set(selector, { opacity: 0, y: config.y });
    }
  }

  /* ── Section headings ── */
  scrollReveal('.section-tag',      { y: 20, duration: 0.5, stagger: 0 });
  scrollReveal('.section-title',    { y: 35, duration: 0.7, stagger: 0 });
  scrollReveal('.section-subtitle', { y: 25, duration: 0.6, stagger: 0 });

  /* ── About section ── */
  scrollReveal('.about-paragraph', { y: 30, stagger: 0.12 });
  scrollReveal('.interest-tag',    { y: 20, stagger: 0.06, duration: 0.5 });
  scrollReveal('.about-actions',   { y: 20, duration: 0.6, stagger: 0 });

  // Profile image
  if (!reduced) {
    gsap.set('.profile-frame', { opacity: 0, scale: 0.85, y: 40 });
    ScrollTrigger.create({
      trigger: '.profile-frame',
      start: 'top 85%',
      onEnter: () => gsap.to('.profile-frame', {
        opacity: 1, scale: 1, y: 0,
        duration: 0.9,
        ease: 'back.out(1.4)'
      }),
    });

    // Stat cards
    gsap.set('.stat-card', { opacity: 0, y: 30 });
    ScrollTrigger.create({
      trigger: '.about-stats',
      start: 'top 85%',
      onEnter: () => gsap.to('.stat-card', {
        opacity: 1, y: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power3.out',
        onComplete: initCounters,
      }),
    });
  } else {
    initCounters();
  }

  /* ── Skills section ── */
  if (!reduced) {
    gsap.set('.skill-category', { opacity: 0, y: 40 });
    ScrollTrigger.create({
      trigger: '.skills-grid',
      start: 'top 85%',
      onEnter: () => gsap.to('.skill-category', {
        opacity: 1, y: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
      }),
    });

    gsap.set('.skill-tag', { opacity: 0, scale: 0.8 });
    ScrollTrigger.create({
      trigger: '.skills-grid',
      start: 'top 80%',
      onEnter: () => gsap.to('.skill-tag', {
        opacity: 1, scale: 1,
        stagger: 0.04,
        duration: 0.4,
        ease: 'back.out(1.5)',
        delay: 0.3,
      }),
    });
  }

  /* ── Projects section ── */
  if (!reduced) {
    gsap.set('.project-card', { opacity: 0, y: 60 });
    ScrollTrigger.create({
      trigger: '.projects-grid',
      start: 'top 85%',
      onEnter: () => gsap.to('.project-card', {
        opacity: 1, y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      }),
    });
  }

  /* ── Timeline section ── */
  if (!reduced) {
    gsap.set('.timeline-item', { opacity: 0, x: -40 });
    ScrollTrigger.create({
      trigger: '.timeline',
      start: 'top 85%',
      onEnter: () => gsap.to('.timeline-item', {
        opacity: 1, x: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: 'power3.out',
      }),
    });
  }

  /* ── Contact section ── */
  scrollReveal('.contact-card',  { x: -30, y: 0, stagger: 0.12, duration: 0.6 });
  scrollReveal('.contact-form',  { x:  30, y: 0, stagger: 0,    duration: 0.7 });

  /* ── Parallax on orbs (only on desktop) ── */
  if (!isTouchDevice() && !reduced) {
    gsap.to('.orb-1', {
      y: -60,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    gsap.to('.orb-2', {
      y: -40,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
      },
    });
  }

  /* ── Refresh ScrollTrigger after fonts/images load ── */
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

/* ─────────────────────────────────────────
   7. TYPEWRITER EFFECT
   Cycles through roles with erase/retype.
───────────────────────────────────────── */
function initTypewriter() {
  const target = qs('#typewriter-target');
  if (!target) return;

  const roles = ['Developer', 'Problem Solver', 'CSE Student', 'Creator'];
  let roleIdx  = 0;
  let charIdx  = 0;
  let isErasing = false;
  const SPEED_TYPE  = 80;
  const SPEED_ERASE = 45;
  const PAUSE_AFTER  = 2000;
  const PAUSE_BEFORE = 400;

  function type() {
    const current = roles[roleIdx];

    if (!isErasing) {
      // Typing forward
      target.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        // Reached end — pause then erase
        isErasing = true;
        setTimeout(type, PAUSE_AFTER);
        return;
      }
    } else {
      // Erasing
      target.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isErasing = false;
        roleIdx   = (roleIdx + 1) % roles.length;
        setTimeout(type, PAUSE_BEFORE);
        return;
      }
    }

    setTimeout(type, isErasing ? SPEED_ERASE : SPEED_TYPE);
  }

  // Delay first type until after hero entrance animation
  setTimeout(type, 2200);
}

/* ─────────────────────────────────────────
   8. MAGNETIC BUTTONS
   Subtle magnet pull effect on CTA buttons.
   Disabled on touch / reduced-motion.
───────────────────────────────────────── */
function initMagneticButtons() {
  if (isTouchDevice() || prefersReducedMotion()) return;

  const buttons = qsa('.magnetic-btn');

  buttons.forEach(btn => {
    const STRENGTH = 0.3; // 0 = no pull, 1 = full snap

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) * STRENGTH;
      const dy   = (e.clientY - cy) * STRENGTH;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ─────────────────────────────────────────
   9. 3D CARD TILT
   Subtle perspective tilt on project cards.
   Disabled on touch / reduced-motion.
───────────────────────────────────────── */
function initCardTilt() {
  if (isTouchDevice() || prefersReducedMotion()) return;

  const cards = qsa('.project-card');

  cards.forEach(card => {
    const MAX_TILT = 6; // degrees

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x    = (e.clientX - rect.left) / rect.width  - 0.5; // -0.5 to 0.5
      const y    = (e.clientY - rect.top)  / rect.height - 0.5;
      const rotateX = y * -MAX_TILT;
      const rotateY = x *  MAX_TILT;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ─────────────────────────────────────────
   10. PROJECT MODALS
───────────────────────────────────────── */
function initModals() {
  const overlays = qsa('.modal-overlay');

  // Open modal on "expand" button click
  qsa('.project-detail-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id      = btn.dataset.modal;
      const overlay = qs(`#modal-${id}`);
      if (!overlay) return;
      openModal(overlay);
    });
  });

  // Also allow opening by pressing Enter/Space on project card
  qsa('.project-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id      = card.dataset.project;
        const overlay = qs(`#modal-${id}`);
        if (overlay) openModal(overlay);
      }
    });
  });

  // Close buttons
  qsa('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const overlay = btn.closest('.modal-overlay');
      if (overlay) closeModal(overlay);
    });
  });

  // Close on backdrop click
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const open = qs('.modal-overlay.active');
      if (open) closeModal(open);
    }
  });

  function openModal(overlay) {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus first focusable element inside modal
    const focusable = overlay.querySelector('button, a, input, textarea');
    if (focusable) setTimeout(() => focusable.focus(), 50);
  }

  function closeModal(overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/* ─────────────────────────────────────────
   11. ANIMATED COUNTERS
   Triggered by GSAP ScrollTrigger above;
   exported as a standalone fn for fallback.
───────────────────────────────────────── */
function initCounters() {
  const counters = qsa('.stat-number.counter');

  counters.forEach(counter => {
    const target   = parseInt(counter.dataset.target, 10);
    if (isNaN(target)) return;

    const duration = 1800; // ms
    const start    = performance.now();

    function update(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });
}

/* ─────────────────────────────────────────
   12. CONTACT FORM VALIDATION
───────────────────────────────────────── */
function initContactForm() {
  const form      = qs('#contact-form');
  if (!form) return;

  const nameInput = qs('#contact-name');
  const emailInput= qs('#contact-email');
  const msgInput  = qs('#contact-message');
  const submitBtn = qs('#submit-btn');
  const successEl = qs('#form-success');
  const errorEl   = qs('#form-error-msg');

  /* --- Validate single field --- */
  function validateField(input, errorId, validatorFn) {
    const group = input.closest('.form-group');
    const errEl = qs(`#${errorId}`);
    const { valid, message } = validatorFn(input.value.trim());

    group.classList.toggle('has-error', !valid);
    if (errEl) {
      errEl.textContent = valid ? '' : message;
    }
    return valid;
  }

  /* --- Validators --- */
  const validators = {
    name:    (v) => v.length >= 2
      ? { valid: true }
      : { valid: false, message: 'Please enter your full name (min 2 characters).' },
    email:   (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      ? { valid: true }
      : { valid: false, message: 'Please enter a valid email address.' },
    message: (v) => v.length >= 10
      ? { valid: true }
      : { valid: false, message: 'Message must be at least 10 characters.' },
  };

  /* --- Real-time validation (on blur) --- */
  nameInput.addEventListener('blur',  () => validateField(nameInput,  'name-error',    validators.name));
  emailInput.addEventListener('blur', () => validateField(emailInput, 'email-error',   validators.email));
  msgInput.addEventListener('blur',   () => validateField(msgInput,   'message-error', validators.message));

  /* --- Form submission --- */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all fields
    const nameOk  = validateField(nameInput,  'name-error',    validators.name);
    const emailOk = validateField(emailInput, 'email-error',   validators.email);
    const msgOk   = validateField(msgInput,   'message-error', validators.message);

    if (!nameOk || !emailOk || !msgOk) return;

    // Show loading state
    submitBtn.disabled = true;
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending…</span><i class="fa-solid fa-spinner fa-spin btn-icon" aria-hidden="true"></i>';

    // Simulate submission (replace with actual fetch to your form service, e.g. Formspree)
    // ─────────────────────────────────────────────────────────────────────────────────
    // To connect Formspree:
    //   1. Sign up at https://formspree.io
    //   2. Create a form and copy the endpoint URL
    //   3. Replace the simulated fetch below with:
    //      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //        method: 'POST',
    //        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    //        body: JSON.stringify({
    //          name:    nameInput.value,
    //          email:   emailInput.value,
    //          message: msgInput.value
    //        })
    //      });
    //      const ok = res.ok;
    // ─────────────────────────────────────────────────────────────────────────────────

    await new Promise(r => setTimeout(r, 1200)); // Simulated delay
    const simulatedSuccess = true; // Change to actual res.ok

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalHTML;

    if (simulatedSuccess) {
      showFeedback(successEl, errorEl);
      form.reset();
      qsa('.form-group').forEach(g => g.classList.remove('has-error'));
    } else {
      showFeedback(errorEl, successEl);
    }
  });

  function showFeedback(show, hide) {
    hide.setAttribute('aria-hidden', 'true');
    hide.style.display = 'none';
    show.setAttribute('aria-hidden', 'false');
    show.style.display = 'flex';
    setTimeout(() => {
      show.setAttribute('aria-hidden', 'true');
      show.style.display = 'none';
    }, 6000);
  }
}

/* ─────────────────────────────────────────
   13. FOOTER YEAR + BACK TO TOP
───────────────────────────────────────── */
function initFooter() {
  // Current year
  const yearEl = qs('#footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ─────────────────────────────────────────
   14. PROFILE IMAGE FALLBACK SVG generator
   Creates an SVG placeholder if no photo.
───────────────────────────────────────── */
function ensureProfilePlaceholder() {
  // The HTML already handles onerror, but we also make the SVG programmatically
  // in case the file doesn't exist yet. This writes a data-URI src.
  const img = qs('#profile-img');
  if (!img) return;

  img.addEventListener('error', () => {
    // Generate a simple SVG avatar placeholder
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 280 280">
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#6366f1"/>
            <stop offset="100%" style="stop-color:#8b5cf6"/>
          </linearGradient>
        </defs>
        <rect width="280" height="280" fill="url(#g)" rx="20"/>
        <circle cx="140" cy="108" r="48" fill="rgba(255,255,255,0.25)"/>
        <ellipse cx="140" cy="230" rx="72" ry="50" fill="rgba(255,255,255,0.18)"/>
        <text x="140" y="260" text-anchor="middle" font-family="Space Grotesk, sans-serif"
              font-size="18" font-weight="700" fill="rgba(255,255,255,0.5)">KJR</text>
      </svg>`;
    img.src = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  }, { once: true });
}

/* ─────────────────────────────────────────
   INIT — runs after DOM is ready
───────────────────────────────────────── */
function init() {
  initPageLoader();
  initCustomCursor();
  initParticles();
  initNavigation();
  initTypewriter();
  initMagneticButtons();
  initCardTilt();
  initModals();
  initContactForm();
  initFooter();
  ensureProfilePlaceholder();

  // GSAP animations: wait for GSAP scripts to load
  if (window.gsap && window.ScrollTrigger) {
    initGSAPAnimations();
  } else {
    // Poll briefly for GSAP CDN to load (handles async defer)
    let attempts = 0;
    const poll = setInterval(() => {
      attempts++;
      if (window.gsap && window.ScrollTrigger) {
        clearInterval(poll);
        initGSAPAnimations();
      } else if (attempts > 40) {
        // Timeout: show all elements without animation
        clearInterval(poll);
        qsa('.reveal-text, .fade-in-up').forEach(el => {
          el.style.opacity   = '1';
          el.style.transform = 'none';
        });
        initCounters();
      }
    }, 150);
  }
}

// Kick off when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
