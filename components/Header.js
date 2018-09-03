import React, { Component } from 'react'

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
        ? '' :
        Math.min(Math.max(minHeight, (window.innerHeight - headerPadding)), maxHeight) + 'px'

    this.setState({ height })
  }

  render() {
    return (
      <header id="header">
        <center>
          <div className="header-container" style={{ height: this.state.height }}>
            <nav className="header-top">
              <img className="signature" src="static/images/IagoBruno.png" alt="Iago Bruno"/>
              <ul className="links">
                <li><a href="#contact">Contato</a></li>
                <li><a href="#works">Trabalhos</a></li>
                <li><a href="https://github.com/httpiago/">GitHub</a></li>
              </ul>
            </nav>
            <div className="header-vertical-center">
              <h1 className="header-title">Designer <span className="and"></span> Developer</h1>
              <p className="header-description">Prototipagem de interfaces e desenvolvimento de websites.</p>
            </div>
            <div className="header-bottom">
              <a href="#about" className="header-call-to-action">Sobre mim</a>
              <div className="header-photo-container notebook">
                <img className="header-photo" src="static/images/notebook.png" alt="Notebook"/>
              </div>
            </div>
          </div>
        </center>
      </header>
    )
  }
}