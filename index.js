   const slides = document.getElementById('slides');
  const slideCount = slides.children.length;
  let currentIndex = 0;
  const slideWidth = 300;

  function showSlide(index) {
    slides.style.left = -index * slideWidth + 'px';
    currentIndex = index;
  }

  document.getElementById('prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  document.getElementById('next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  showSlide(0);
