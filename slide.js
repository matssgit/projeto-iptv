let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide-box");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active"); // Remove a classe 'active'
  }

  slides[slideIndex - 1].classList.add("active"); // Adiciona a classe 'active' ao slide atual

  // Altera o slide a cada 10 segundos (10000 milissegundos)
  setTimeout(() => {
    plusSlides(1);
  }, 15000);
}

const manualButtons = document.getElementsByClassName("btn-manual");
for (let i = 0; i < manualButtons.length; i++) {
  manualButtons[i].onclick = () => currentSlide(i + 1);
}
