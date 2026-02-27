// Screenshot Carousel
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dotsContainer = document.querySelector('.carousel-dots');
  const images = document.querySelectorAll('.carousel-img');
  
  if (!track || !images.length) return;
  
  // Create dots
  images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => scrollToImage(i));
    dotsContainer.appendChild(dot);
  });
  
  const dots = dotsContainer.querySelectorAll('.dot');
  
  function scrollToImage(index) {
    const img = images[index];
    if (img) {
      img.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      updateDots(index);
    }
  }
  
  function updateDots(activeIndex) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeIndex);
    });
  }
  
  // Track scroll to update dots
  let scrollTimeout;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const scrollLeft = track.scrollLeft;
      const imgWidth = images[0].offsetWidth + 16; // width + gap
      const activeIndex = Math.round(scrollLeft / imgWidth);
      updateDots(Math.min(activeIndex, images.length - 1));
    }, 50);
  });
  
  // Button navigation
  prevBtn.addEventListener('click', () => {
    const currentDot = [...dots].findIndex(d => d.classList.contains('active'));
    scrollToImage(Math.max(0, currentDot - 1));
  });
  
  nextBtn.addEventListener('click', () => {
    const currentDot = [...dots].findIndex(d => d.classList.contains('active'));
    scrollToImage(Math.min(images.length - 1, currentDot + 1));
  });
  
  // Hero screenshot rotation
  const heroScreenshot = document.getElementById('hero-screenshot');
  if (heroScreenshot) {
    let heroIndex = 0;
    const heroImages = [
      'images/Sample_Image_1.png',
      'images/Sample_Image_2.png',
      'images/Sample_Image_3.png',
      'images/Sample_Image_4.png',
      'images/Sample_Image_5.png',
      'images/Sample_Image_6.png'
    ];
    
    setInterval(() => {
      heroIndex = (heroIndex + 1) % heroImages.length;
      heroScreenshot.style.opacity = 0;
      setTimeout(() => {
        heroScreenshot.src = heroImages[heroIndex];
        heroScreenshot.style.opacity = 1;
      }, 300);
    }, 4000);
  }
});
