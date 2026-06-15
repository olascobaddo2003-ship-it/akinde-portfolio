/* ============================================================
   AKÍNDÉ PRECIOUS — QA ENGINEER PORTFOLIO
   script.js
   ============================================================ */

/* ---- Footer year ---- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---- Navbar scroll effect ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ---- Mobile hamburger menu ---- */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

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

/* ---- Typing animation ---- */
const roles = ['QA Engineer', 'Test Automation Specialist', 'Quality Assurance Expert'];
let roleIndex  = 0;
let charIndex  = 0;
let isDeleting = false;
const typedEl  = document.getElementById('typedText');

function type() {
  const current = roles[roleIndex];

  if (!isDeleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, 1800);   // pause before deleting
      return;
    }
    setTimeout(type, 70);
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex  = (roleIndex + 1) % roles.length;
      setTimeout(type, 300);    // pause before typing next
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
function handleContactSubmit(e) {
  e.preventDefault();

  const submitBtn  = document.getElementById('submitBtn');
  const submitText = document.getElementById('submitText');
  const loader     = document.getElementById('submitLoader');

  // Show loading state
  submitText.classList.add('hidden');
  loader.classList.remove('hidden');
  submitBtn.disabled = true;

  // Send form data to Formspree
  const form = document.getElementById('contactForm');
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
    .then(response => response.json())
    .then(data => {
      if (data.ok === false) {
        throw new Error('Form submission failed.');
      }
      document.getElementById('contactForm').classList.add('hidden');
      document.getElementById('formSuccess').classList.remove('hidden');
    })
    .catch(() => {
      alert('Sorry, there was a problem sending your message. Please try again later.');
      submitText.classList.remove('hidden');
      loader.classList.add('hidden');
      submitBtn.disabled = false;
    });
}

function resetForm() {
  document.getElementById('contactForm').reset();
  document.getElementById('contactForm').classList.remove('hidden');
  document.getElementById('formSuccess').classList.add('hidden');

  // Reset button
  document.getElementById('submitText').classList.remove('hidden');
  document.getElementById('submitLoader').classList.add('hidden');
  document.getElementById('submitBtn').disabled = false;
}

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