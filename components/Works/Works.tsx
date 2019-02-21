import React, { Component } from 'react'
import Reveal from '../ScrollRevealHOC'
import './Works.less'

import WorksItem from './WorksItem'

const workList: Array<WorkItemType> = [
  {
    title: 'TecBolt',
    subTitle: '2017',
    url: 'https://tecbolt.appolo.com.br/',
    image: 'static/images/tecbolt-mini.jpg',
    description: `O TecBolt é um projeto de longa data, a ideia principal é que hoje em dia com um estilo de vida cada vez mais corrido, os usuários possam se informar rapidamente com notícias curtas (porém completas) em um formato já consolidado de histórias e facilmente encontrar formas de saber mais caso queiram. Atualmente o projeto está passando por uma reformulação com volta prevista para 2019.`
  },
  {
    title: 'Lembretes',
    subTitle: '2014',
    url: 'https://chrome.google.com/webstore/detail/lembretes/gklelabcnmojaikonejpecffihnpcpoc',
    image: 'static/images/lembretes-mini.jpg',
    description: `Ele era é um simples aplicativo de lista de tarefas com foco em lembretes e é meu xodó até hoje, pois foi desenvolvendo esse aplicativo que dei meus primeiros passos a fundo no universo JavaScript. Você ainda pode conferi-lo mas sua utilização não é recomendada por está desatualizado e com problemas de performance.`
  },
  {
    title: 'Rede Social Beta',
    subTitle: '2012 - 2015',
    url: 'http://www.redesocialbeta.com.br/',
    image: 'static/images/rede_social_beta-mini.jpg',
    description: `O Rede Social Beta foi meu primeiro grande trabalho, na época o blog recebia uma grande quantidade sólida de visitas e fui contratado para me encarregar de cuidar do site. Até pouco tempo era possível conferir um arquivo online com todas as postagens publicadas mas atualmente a única coisa que sobrou foi o print acima.`
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
    works.map((item: HTMLElement) => {
      item.style.transform = 'scale(0)'
    })
  }

  // Mostrar os trabalhos quando o componente aparecer na tela
  componentDidAppear() {
    let works: NodeListOf<HTMLDivElement> = document.querySelectorAll('#works .list > li')
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
      <section className="works" id="works">
        <center>
          <h2 className="section__title">Trabalhos</h2>

          <ul className="list list--3-cols">
            {workList.map((work, index) => (
              <li key={index}>
                <WorksItem {...work} />
              </li>
            ))}
          </ul>
        </center>
      </section>
    )
  }
}

export default Reveal(Works)
