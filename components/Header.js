import React from 'react'

export default (props) => {
  return (
    <header id="header">
      <center>
        <div className="header-container">
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