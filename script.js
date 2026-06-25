// Hero screenshot rotation
document.addEventListener('DOMContentLoaded', () => {
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
