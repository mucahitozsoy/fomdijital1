// mobile nav
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileNav = document.getElementById('mobile-nav');
if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener('click', () => {
    const opened = mobileNav.classList.toggle('active');
    mobileToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// hero slider
const slider = document.querySelector('.hero-slider');
if (slider) {
  const slides = Array.from(slider.querySelectorAll('.slide'));
  const prevBtn = slider.querySelector('.nav.prev');
  const nextBtn = slider.querySelector('.nav.next');
  const dotsContainer = slider.querySelector('.dots');
  let current = 0;

  // dots create
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    if (i === 0) btn.classList.add('is-active');
    btn.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(btn);
  });
  const dots = Array.from(dotsContainer.querySelectorAll('button'));

  function goTo(index) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  if (nextBtn) nextBtn.addEventListener('click', next);
  if (prevBtn) prevBtn.addEventListener('click', prev);

  // auto slide (istersen kapat)
  let auto = setInterval(next, 7000);
  slider.addEventListener('mouseenter', () => clearInterval(auto));
  slider.addEventListener('mouseleave', () => { auto = setInterval(next, 7000); });
}

// FAQ
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  btn.addEventListener('click', () => {
    const isActive = item.classList.toggle('active');
    btn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    if (isActive) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = null;
    }
  });
});
