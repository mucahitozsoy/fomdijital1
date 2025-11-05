// ========== Mobil Menü ==========
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileNav = document.getElementById('mobile-nav');

if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('active');
    mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ========== HERO SLIDER ==========
const slider = document.querySelector('.hero-slider');

if (slider) {
  const slides = Array.from(slider.querySelectorAll('.slide'));
  const prevBtn = slider.querySelector('.nav.prev');
  const nextBtn = slider.querySelector('.nav.next');
  const dotsContainer = slider.querySelector('.dots');

  let current = 0;

  // Noktaları oluştur
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    if (idx === 0) dot.classList.add('is-active');
    dot.addEventListener('click', () => goTo(idx));
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.querySelectorAll('button'));

  function goTo(index) {
    // önce hepsinden is-active'i kaldır
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');

    // yeni index'i hesapla
    current = (index + slides.length) % slides.length;

    // sonra yenisine ekle
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  if (nextBtn) nextBtn.addEventListener('click', next);
  if (prevBtn) prevBtn.addEventListener('click', prev);

  // otomatik geçiş (istersen kapat)
  let auto = setInterval(next, 7000);

  slider.addEventListener('mouseenter', () => clearInterval(auto));
  slider.addEventListener('mouseleave', () => {
    auto = setInterval(next, 7000);
  });
}

// ========== FAQ ==========
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  btn.addEventListener('click', () => {
    const active = item.classList.toggle('active');
    btn.setAttribute('aria-expanded', active ? 'true' : 'false');

    if (active) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = null;
    }
  });
});
