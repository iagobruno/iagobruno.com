import React, { Component } from 'react'
import Reveal from '../ScrollRevealHOC'
import './Skills.less'

interface SkillItem {
  title: string;
  percentage: number;
  color: string;
}

const skills: Array<SkillItem> = [
  {
    title: "JavaScript",
    percentage: 94,
    color: "#f44336"
  },
  {
    title: "NodeJS",
    percentage: 82,
    color: "#4caf50"
  },
  {
    title: "Photoshop",
    percentage: 50,
    color: "#2196f3"
  },
  {
    title: "CSS",
    percentage: 96,
    color: "#7e57c2"
  },
  {
    title: "Adobe XD",
    percentage: 60,
    color: "#FF26BE"
  },
  {
    title: "WordPress",
    percentage: 60,
    color: "#555555"
  },
  {
    title: "React",
    percentage: 80,
    color: "#2dd2ff"
  },
  {
    title: "PHP",
    percentage: 40,
    color: "#9e9e9e"
  },
  {
    title: "Inglês",
    percentage: 41,
    color: "#607d8b"
  },
  {
    title: "SQL",
    percentage: 32,
    color: "#fdd835"
  },
]

const others: Array<string> = [
  'Bootstrap', 'Mocha / Jest', 'Gulp', 'Git', 'Layout responsivo', 'Mobile first', "PWA's", 'BEM'
]

var levelsCache: Array<string|any> = []

class Skills extends Component {
  static defaultProps = {
    revealViewFactor: 0.6
  }

  // Ocultar as porcentagens assim que o documento for carregado completamente
  componentDidMount() {
    let itens = [].slice.call(document.querySelectorAll('.skills__level-bar span'))

    // Salvar a porcentagem dos níveis em um Array
    // E remover o valor no elemento
    itens.map((item: HTMLElement) => {
      levelsCache.push(item.style.width)

      item.style.width = '0%'
    })
  }

  // Animar as barras de porcentagens em #skills quando o componente aparecer na tela
  componentDidAppear() {
    let levels: NodeListOf<HTMLDivElement> = document.querySelectorAll('.skills__level-bar span')
    let i = 0

    // Fazer um loop nos elementos com um delay de diferença entre cada um
    let timer = setInterval(() => {

      // Mostrar a porcentagem salva no Array anteriormente na função "hideSkillsLevels"
      levels[i].style.width = levelsCache[i]

      // Parar o timer quando chegar no último elemento
      if (i >= levels.length - 1) clearInterval(timer)
      i++

    }, 40)
  }

  render() {
    return (
      <section className="skills" id="skills">
        <center>
          <h2 className="section__title">Habilidades</h2>

          <div className="skills__table">
            {skills.map((item, index) => (
              <div className="skills__item" key={index}>
                <div className="skills__label" style={{background: item.color}}>{item.title}</div>
                <div className="skills__level-bar"><span style={{
                  background: item.color,
                  width: `${item.percentage}%`
                }}></span></div>
              </div>
            ))}
  
            <div className="skills__other-skills">
              {others.map((_, i) => (
                <div key={i} className="skills__label">{_}</div>
              ))}
            </div>
          </div>
        </center>
      </section>
    )
  }
}

export default Reveal(Skills)
