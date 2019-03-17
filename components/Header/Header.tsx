import * as React from 'react'
import Link from 'next/link'
import './Header.less'

interface HeaderProps {
  mode: 'full' | 'compact'
}

export default function Header({ mode }: HeaderProps) {
  return (
    <header className={`header header--${mode}`} id="header" role="banner">
      <center>
        <div className="header__container">
          <nav className="header__align--top">
            <Link href="/">
              <a style={{ flex: 1 }}>
                <img className="signature" src="/static/images/IagoBruno.png" role="logo" alt="Iago Bruno" />
              </a>
            </Link>
            <ul className="links header__links">
              <li>
                <Link href="/#contact"><a aria-label="Contato">Contato</a></Link>
              </li>
              <li>
                <Link href="/#works"><a aria-label="Lista de Trabalhos">Trabalhos</a></Link>
              </li>
              <li>
                <Link href="/posts"><a aria-label="Lista de postagens">Blog</a></Link>
              </li>
              <li>
                <a href="https://github.com/httpiago/" aria-label="Perfil no Github">GitHub</a>
              </li>
            </ul>
          </nav>

          {mode === 'full' && (
            <React.Fragment>
              <div className="header__align--middle">
                <h1 className="header__title" aria-label="Designer & Developer">Designer <span className="and"></span> Developer</h1>
                <p className="header__description">Prototipagem de interfaces e desenvolvimento de websites.</p>
              </div>
              
              <div className="header__align--bottom">
                <a href="/#about" className="header__call-to-action" role="button">Sobre mim</a>
                <div className="header__photo">
                  <img className="header__photo__img" src="static/images/me.png" alt="Minha foto do cabeçalho" />
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </center>
    </header>
  );
}
