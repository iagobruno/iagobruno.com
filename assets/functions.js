

// Mudar a altura do cabeçalho ao carregar a página e quando a janela for redimensionada.
window.onresize = setHeaderHeight = function () {
  var headerPadding = ((50) * 2),
    minHeight = 360,
    maxHeight = 540,
    // Calcular a altura mínima e máxima do cabeçalho
    height = Math.min(Math.max(minHeight, (window.innerHeight - headerPadding)), maxHeight);

  var Hvalue = (window.innerWidth < 640) ? '' : height + 'px';

  document.getElementsByClassName('header-container')[0].style.height = Hvalue;
};


/* Slideshow */
var slides, current_slide, index = 0;
var fadeDuration = 1000;

function nextSlide() {
  slides[index].className = 'code-sample hide';
  setTimeout(function () { slides[index].style.display = 'none'; }, fadeDuration);

  // Esperar a animação de fade-out do slide anterior
  setTimeout(function () {
    index = (index === 0) ? 1 : 0;

    slides[index].style.display = 'block';
    setTimeout(function () {
      slides[index].className = 'code-sample show';
    }, 100);
  }, fadeDuration);
}

window.onload = function () {
  slides = document.getElementsByClassName('code-sample');
  current_slide = slides[0];

  // Iniciar o slideshow
  setInterval(nextSlide, 10000);

};
