import React, { Component } from 'react'
import './Header.less'

export default class Header extends Component {
  state = {
    height: ''
  }
  
  componentDidMount() {
    (window.onresize = this.changeHeaderHeight.bind(this))()
  }

  changeHeaderHeight() {
    let isMobile = window.innerWidth < 859
    let headerPadding = ((50) * 2),
      minHeight = 360,
      maxHeight = 540,
      // Calcular a altura mínima e máxima do cabeçalho
      height = (isMobile)
        ? ''
        : Math.min(Math.max(minHeight, (window.innerHeight - headerPadding)), maxHeight) + 'px'

    this.setState({ height })
  }

  render() {
    return (
      <header className="header" id="header" role="banner">
        <center>
          <div className="header__container" style={{ height: this.state.height }}>
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
    )
  }
}