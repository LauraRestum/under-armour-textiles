(function() {
  var slides = document.querySelectorAll('.slide');
  var total = slides.length;
  var currentIdx = 0;

  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');
  var currentLabel = document.getElementById('current');
  var totalLabel = document.getElementById('total');

  totalLabel.textContent = String(total).padStart(2, '0');

  function showSlide(idx) {
    if (idx < 0) idx = 0;
    if (idx >= total) idx = total - 1;
    slides[currentIdx].classList.remove('active');
    slides[idx].classList.add('active');
    currentIdx = idx;
    currentLabel.textContent = String(idx + 1).padStart(2, '0');
  }

  function next() { showSlide(currentIdx + 1); }
  function prev() { showSlide(currentIdx - 1); }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prev();
    } else if (e.key === 'Home') {
      showSlide(0);
    } else if (e.key === 'End') {
      showSlide(total - 1);
    }
  });

  // Click anywhere on slide to advance (except on links/buttons)
  document.querySelector('.deck').addEventListener('click', function(e) {
    if (e.target.closest('a') || e.target.closest('button')) return;
    next();
  });
})();
