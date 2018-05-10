

// Mudar a altura do cabeçalho ao carregar a página e quando a janela for redimensionada.
window.onresize = setHeaderHeight = function () {
  var headerPadding = ((50) * 2) + 1,
    minHeight = 360,
    maxHeight = 580,
    height = Math.min(Math.max(minHeight, (window.innerHeight - headerPadding)), maxHeight);

  document.getElementsByClassName('header-container')[0].style.height = height + 'px';
};