

// Mudar a altura do cabeçalho ao carregar a página e quando a janela for redimensionada.
window.onresize = setHeaderHeight = function () {
  var headerPadding = (32 * 2) + 1,
    minHeight = 360,
    height = Math.max(minHeight, (window.innerHeight - headerPadding));

  document.getElementsByClassName('header-container')[0].style.height = height + 'px';
};