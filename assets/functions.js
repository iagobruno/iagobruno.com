var isMobile = window.innerWidth < 640;

// Mudar a altura do cabeçalho ao carregar a página e quando a janela for redimensionada.
window.onresize = setHeaderHeight = function() {
  var headerPadding = ((50) * 2),
    minHeight = 360,
    maxHeight = 540,
    // Calcular a altura mínima e máxima do cabeçalho
    height = Math.min(Math.max(minHeight, (window.innerHeight - headerPadding)), maxHeight);

  var Hvalue = isMobile ? '' : height + 'px';

  document.getElementsByClassName('header-container')[0].style.height = Hvalue;
};


/* Slideshow na sessão #about */
var slides, current_slide, index = 0;
var fadeDuration = 1000;

function nextSlide() {
  slides[index].className = 'code-sample hide';
  setTimeout(function() { slides[index].style.display = 'none'; }, fadeDuration);

  // Esperar a animação de fade-out do slide anterior
  setTimeout(function() {
    index = (index === 0) ? 1 : 0;

    slides[index].style.display = 'block';
    setTimeout(function() {
      slides[index].className = 'code-sample show';
    }, 100);
  }, fadeDuration);
}

function initSlides() {
  slides = document.getElementsByClassName('code-sample');
  current_slide = slides[0];

  // Iniciar o slideshow
  setInterval(nextSlide, 10000);

};


/* Animar as barras de porcentagens em #skills */
var levelsCache = [];

// Ocultar as porcentagens assim que o documento for carregado completamente
function hideSkillsLevels() {
  var itens = document.querySelectorAll('.skill-level-bar span');

  // Salvar a porcentagem dos níveis em um Array
  // E remover o valor no elemento
  for (var i = 0; i < itens.length; i++) {
    levelsCache.push(itens[i].style.width);

    itens[i].style.width = '0%';
  }
};


function showSkillsLevels() {
  var levels = document.querySelectorAll('.skill-level-bar span');
  var i = 0;

  // Fazer um loop nos elementos com um delay de diferença entre cada um
  var timer = setInterval(function() {

    // Mostrar a porcentagem salva no Array anteriormente na função "hideSkillsLevels"
    levels[i].style.width = levelsCache[i];

    // Parar o timer quando chegar no último elemento
    if (i >= levels.length - 1) clearInterval(timer);

    i++;

  }, 40);
}

window.addEventListener('scroll', function checkSkillsIsVisible() {

  var docViewTop = window.pageYOffset || document.documentElement.scrollTop;
  var docViewBottom = docViewTop + window.innerHeight;

  var skills = document.getElementById('skills');

  var elemTop = skills.offsetTop;
  var elemBottom = elemTop + skills.offsetHeight;

  // Checar se o elemento está parcialmente visível na tela
  if ((docViewBottom <= elemBottom + 300) && (docViewTop >= elemTop - 300)) {
    showSkillsLevels();
    window.removeEventListener('scroll', checkSkillsIsVisible);
  }
});


/* Animar os itens na sessão #work */
function hideWorks() {
  var works = document.querySelectorAll('#works .list > li');

  // Ocultar cada item da sessão
  for (var i = 0; i < works.length; i++) works[i].style.transform = 'scale(0)';
}

function showWorks() {
  var works = document.querySelectorAll('#works .list > li');
  var i = 0;

  // Fazer um loop nos elementos com um delay de diferença entre cada um
  var timer = setInterval(function() {

    // Mostrar o elemento
    works[i].style.transform = 'scale(1)';

    // Parar o timer quando chegar no último elemento
    if (i >= works.length - 1) clearInterval(timer);

    i++;

  }, 100);
}

// Checar se a sessão #works está visível
window.addEventListener('scroll', function checkWorksIsVisible() {

  var docViewTop = window.pageYOffset || document.documentElement.scrollTop;
  var docViewBottom = docViewTop + window.innerHeight;

  var workBlock = document.getElementById('works');

  var elemTop = workBlock.offsetTop;
  var elemBottom = elemTop + workBlock.offsetHeight;

  var check = (isMobile)
  // No celular, checar se o scroll está mostrando parcialmente ou todo o elemento
  ? (docViewTop >= elemTop - 360)
  // No pc, checar se o element está parcialmente visível
  : (elemBottom - 240 <= docViewBottom);

  if (check) {
    showWorks();
    
    window.removeEventListener('scroll', checkWorksIsVisible);
  };
});

function linkClick(event) {
  let link = this,
    url = link.getAttribute('href');
  
  // Checar se é um link específico da sessão "Sobre"
  if (url === '#work-tecbolt') {
    event.preventDefault();

    // Mover o scroll até a sessão #works
    location.hash = '#works';

    // Dar foco ao link do tecbolt
    document.getElementById('work-tecbolt').focus();
  }

  // Enviar evento para o Google Analytics
  gtag('event', 'click', {
    'event_category': 'links',
    'event_label': 'Cliques em "' + url + '"'
  });
}

document.addEventListener("DOMContentLoaded", function() {
  initSlides();
  hideSkillsLevels();
  hideWorks();

  // Delegar um evento global para todos os links da página
  Delegate(document).on('click', 'a', linkClick);
});