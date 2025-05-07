document.addEventListener('DOMContentLoaded', function() {
  // Slider functionality
  const slider = document.querySelector('.hero-slider');
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.slider-dots');
  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');
  
  let currentSlide = 0;
  let slideInterval;
  const intervalTime = 5000; // 5 seconds
  
  // Create dots
  slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.dot');
  
  // Next Slide function
  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }
  
  // Previous Slide function
  function prevSlide() {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }
  
  // Go to specific slide
  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    // Reset the auto-rotation timer
    resetInterval();
  }
  
  // Auto-rotation function
  function startInterval() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  
  // Reset interval timer
  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }
  
  // Event listeners for arrows
  nextArrow.addEventListener('click', nextSlide);
  prevArrow.addEventListener('click', prevSlide);
  
  // Pause on hover
  slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  slider.addEventListener('mouseleave', startInterval);
  
  // Start the slider
  startInterval();
  
  // Touch events for mobile swipe
  let touchStartX = 0;
  let touchEndX = 0;
  
  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(slideInterval);
  }, { passive: true });
  
  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startInterval();
  }, { passive: true });
  
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      nextSlide(); // Swipe left
    }
    if (touchEndX > touchStartX + 50) {
      prevSlide(); // Swipe right
    }
  }
});