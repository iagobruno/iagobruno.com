import React, { Component } from 'react'
import Reveal from '../components/ScrollRevealHOC'

const workList = [
  {
    title: 'TecBolt',
    subTitle: '2017',
    url: 'https://tecbolt.appolo.com.br/',
    image: 'static/images/tecbolt-mini.jpg'
  },
  {
    title: 'Lembretes',
    subTitle: '2014',
    url: 'https://chrome.google.com/webstore/detail/lembretes/gklelabcnmojaikonejpecffihnpcpoc',
    image: 'static/images/lembretes-mini.jpg'
  },
  {
    title: 'Rede Social Beta',
    subTitle: '2012 - 2015',
    url: 'http://www.redesocialbeta.com.br/',
    image: 'static/images/rede_social_beta-mini.jpg'
  }
]

class Works extends Component {
  static defaultProps = {
    revealViewFactor: 0.4
  }

  // Ocultar os itens em #works quando a páina carregar
  componentDidMount() {
    let works = [].slice.call(document.querySelectorAll('#works .list > li'))

    // Ocultar cada item da sessão
    works.map((item) => {
      item.style.transform = 'scale(0)'
    })
  }

  // Mostrar os trabalhos quando o componente aparecer na tela
  componentDidAppear() {
    let works = document.querySelectorAll('#works .list > li')
    let i = 0

    // Fazer um loop nos elementos com um delay de diferença entre cada um
    let timer = setInterval(() => {

      // Mostrar o elemento
      works[i].style.transform = 'scale(1)'

      // Parar o timer quando chegar no último elemento
      if (i >= works.length - 1) clearInterval(timer)
      i++

    }, 100)
  }

  render() {
    return (
      <section id="works">
        <center>
          <h2 className="section-title">Trabalhos</h2>
          <ul className="list cols-3">
            {workList.map((work, index) => {
              let id = 'work-' + work.title.toLowerCase().replace(/(\s)/g, '')
              let alt = (work.title === 'Lembretes')
                ? 'Captura de tela da página do Lembretes na Chrome Web Store'
                : 'Captura de tela do site ' + work.title
  
              return (
                <li key={index}>
                  <a href={work.url} target="_blank" rel="noopener" id={id}>
                    <img className="list-thumb" src={work.image} alt={alt} />
                    <div className="list-title">{work.title} <span>({work.subTitle})</span></div>
                  </a>
                </li>
              )  
            })}
          </ul>
        </center>
      </section>
    )
  }
}

export default Reveal(Works)