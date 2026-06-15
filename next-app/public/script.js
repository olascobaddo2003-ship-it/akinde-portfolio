/* ============================================================
   AKÍNDÉ PRECIOUS — QA ENGINEER PORTFOLIO
   script.js (copied into Next.js public)
   ============================================================ */

/* ---- Footer year ---- */
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Navbar scroll effect ---- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar && navbar.classList.add('scrolled');
    } else {
      navbar && navbar.classList.remove('scrolled');
    }
  });

  /* ---- Mobile hamburger menu ---- */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ---- Typing animation ---- */
  const roles = ['QA Engineer', 'Test Automation Specialist', 'Quality Assurance Expert'];
  let roleIndex  = 0;
  let charIndex  = 0;
  let isDeleting = false;
  const typedEl  = document.getElementById('typedText');

  function type() {
    if (!typedEl) return;
    const current = roles[roleIndex];

    if (!isDeleting) {
      typedEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, 1800);
        return;
      }
      setTimeout(type, 70);
    } else {
      typedEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex  = (roleIndex + 1) % roles.length;
        setTimeout(type, 300);
        return;
      }
      setTimeout(type, 40);
    }
  }

  type();

  /* ---- Skill bar animation (IntersectionObserver) ---- */
  const bars = document.querySelectorAll('.bar-fill');

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width + '%';
        barObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => barObserver.observe(bar));

  /* ---- Contact form ---- */
  window.handleContactSubmit = function handleContactSubmit(e) {
    e.preventDefault();

    const submitBtn  = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const loader     = document.getElementById('submitLoader');

    if (!submitBtn || !submitText || !loader) return;

    // Show loading state
    submitText.classList.add('hidden');
    loader.classList.remove('hidden');
    submitBtn.disabled = true;

    // Simulate sending (replace with real fetch/EmailJS/Formspree logic)
    setTimeout(() => {
      const form = document.getElementById('contactForm');
      if (form) form.classList.add('hidden');
      const success = document.getElementById('formSuccess');
      if (success) success.classList.remove('hidden');
    }, 1200);
  };

  window.resetForm = function resetForm() {
    const form = document.getElementById('contactForm');
    if (form) form.reset();
    form && form.classList.remove('hidden');
    const success = document.getElementById('formSuccess');
    success && success.classList.add('hidden');

    // Reset button
    const submitText = document.getElementById('submitText');
    const submitLoader = document.getElementById('submitLoader');
    const submitBtn = document.getElementById('submitBtn');
    submitText && submitText.classList.remove('hidden');
    submitLoader && submitLoader.classList.add('hidden');
    submitBtn && (submitBtn.disabled = false);
  };

  /* ---- Smooth scroll for all anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---- Fade-in on scroll (optional reveal animation) ---- */
  const fadeEls = document.querySelectorAll(
    '.about-card, .skill-group, .timeline-card, .project-card, .service-card, .testimonial-card'
  );

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    fadeObserver.observe(el);
  });

});
