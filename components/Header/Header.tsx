import * as React from 'react'
const { useState, useEffect } = React
import './Header.less'

export default function Header() {
  const [height, setHeight] = useState('');

  useEffect(() => {
    window.addEventListener('resize', changeHeaderHeight)
    changeHeaderHeight()
    
    return () => window.removeEventListener('resize', changeHeaderHeight)
  }, []);

  function changeHeaderHeight() {
    let isMobile = window.innerWidth < 859
    let headerPadding = ((50) * 2),
      minHeight = 360,
      maxHeight = 540,
      // Calcular a altura mínima e máxima do cabeçalho
      newHeight = (isMobile)
        ? ''
        : Math.min(Math.max(minHeight, (window.innerHeight - headerPadding)), maxHeight) + 'px'

    setHeight(newHeight)
  }

  return (
    <header className="header" id="header" role="banner">
      <center>
        <div className="header__container" style={{ height }}>
          <nav className="header__align--top">
            <img className="signature" src="static/images/IagoBruno.png" role="logo" alt="Iago Bruno"/>
            <ul className="links header__links">
              <li><a href="#contact">Contato</a></li>
              <li><a href="#works">Trabalhos</a></li>
              <li><a href="https://github.com/httpiago/">GitHub</a></li>
            </ul>
          </nav>

          <div className="header__align--middle">
            <h1 className="header__title" aria-label="Designer & Developer">Designer <span className="and"></span> Developer</h1>
            <p className="header__description">Prototipagem de interfaces e desenvolvimento de websites.</p>
          </div>
          
          <div className="header__align--bottom">
            <a href="#about" className="header__call-to-action" role="button">Sobre mim</a>
            <div className="header__photo">
              <img className="header__photo__img" src="static/images/me.png" alt="Minha foto do cabeçalho" />
            </div>
          </div>
        </div>
      </center>
    </header>
  );
}
