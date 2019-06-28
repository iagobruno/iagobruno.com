import React, { FunctionComponent, Fragment } from 'react'
import Link from 'next/link'
import { sendLinkClickToGA } from '../../common/functions'
import './Header.less'

type HeaderProps = {
  mode: 'full' | 'compact'
}

const Header: FunctionComponent<HeaderProps> = ({ mode }) => {
  return (
    <header className={`header header--${mode}`} id="header" role="banner">
      <center>
        <div className="header__container">
          <nav className="header__align--top" role="navigation">
            <div style={{ flex: 1 }}>
              <Link href="/">
                <a className="signature__link" aria-label="Página inicial">
                  <img className="signature" src="/static/images/IagoBruno.png" role="logo" alt="Iago Bruno" />
                </a>
              </Link>
            </div>
            <ul className="links header__links">
              <li>
                <Link href="/#contact"><a aria-label="Contato">Contato</a></Link>
              </li>
              <li>
                <Link href="/#works"><a aria-label="Lista de Trabalhos">Trabalhos</a></Link>
              </li>
              {/*<li>
                <Link href="/posts"><a aria-label="Lista de postagens">Blog</a></Link>
              </li>*/}
              <li>
                <a href="https://github.com/httpiago/" onClick={sendLinkClickToGA('contact links')} aria-label="Perfil no Github">GitHub</a>
              </li>
            </ul>
          </nav>

          {mode === 'full' && (
            <Fragment>
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
            </Fragment>
          )}
        </div>
      </center>
    </header>
  );
}

export default Header
