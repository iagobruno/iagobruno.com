import React, { FunctionComponent, useEffect } from 'react'
import useReveal from '../ScrollRevealHook'
import './Skills.less'

const skills: Array<SkillItemType> = [
  {
    title: "JavaScript/Node",
    percentage: 82,
    color: "#4caf50"
  },
  {
    title: "React",
    percentage: 76,
    color: "#2dd2ff",
    description: "Framework para criação de interfaces de usuário.",
    studying: true
  },
  {
    title: "Photoshop",
    percentage: 50,
    color: "#2196f3"
  },
  {
    title: "CSS",
    percentage: 92,
    color: "#7e57c2"
  },
  {
    title: "Adobe XD",
    percentage: 60,
    color: "#FF26BE",
    description: "Ferramenta para criação de protótipos de experiência do usuário para aplicativos da Web e móveis."
  },
  {
    title: "WordPress",
    percentage: 60,
    color: "#555555"
  },
  {
    title: "Inglês",
    percentage: 42,
    color: "#607d8b",
    studying: true
  },
  {
    title: "PHP",
    percentage: 40,
    color: "#9e9e9e"
  },
  {
    title: "SQL",
    percentage: 50,
    color: "#fdd835"
  },
  {
    title: "TypeScript",
    percentage: 60,
    color: '#007ACC',
    description: "Linguagem para fazer tipagem de código JavaScript.",
    studying: true
  }
]

const others: Array<OthersSkillsItemType> = [
  { title: 'Jest / Mocha', description: 'Ferramentas de testes automatizados.' },
  { title: 'Gulp', description: 'Automatização de tarefas.' },
  { title: 'Git', description: 'Versionamento de código.' },
  { title: 'Bootstrap' },
  { title: 'Layout responsivo' },
  { title: 'Mobile first', description: 'Desenvolvimento com dispositivos móveis em mente.' },
  { title: "PWA's", description: 'Progressive Web Apps.' },
  { title: "BEM", description: 'Conceito de organização para CSS.' },
]

var levelsCache: Array<string> = []

const Skills: FunctionComponent = () => {
  const revealConfigs = {
    element: '#skills',
    viewFactor: 0.6
  }

  // Ocultar as porcentagens assim que o documento for carregado completamente
  useEffect(() => {
    let itens: Array<HTMLElement> = [].slice.call(document.querySelectorAll('.skills__level-bar span'))

    // Salvar a porcentagem dos níveis em um Array
    // E remover o valor no elemento
    itens.map(item => {
      levelsCache.push(item.style.width!)

      item.style.width = '0%'
    })
  }, [])

  // Animar as barras de porcentagens em #skills quando o componente aparecer na tela
  useReveal(revealConfigs, () => {
    let levels: NodeListOf<HTMLElement> = document.querySelectorAll('.skills__level-bar span')
    let i = 0

    // Fazer um loop nos elementos com um delay de diferença entre cada um
    let timer = setInterval(() => {

      // Mostrar a porcentagem salva no Array anteriormente na função "hideSkillsLevels"
      levels[i].style.width = levelsCache[i]

      // Parar o timer quando chegar no último elemento
      if (i >= levels.length - 1) clearInterval(timer)
      i++

    }, 40)
  })
  
  return (
    <section className="skills" id="skills">
      <center>
        <h2 className="section__title">Habilidades</h2>

        <div className="skills__table" role="list" aria-label="Lista de habilidades">
          {skills.map(({ title, description, percentage, color, studying }) => (
            <div
              className={`skills__item ${studying ? 'skills__item--studying' : ''}`}
              title={(description ? description : '') + (description && studying ? ' — '  : '') + (studying ? 'Estudando no momento...' : '')}
              key={title}
              role="listitem"
              aria-label={`${percentage}% de conhecimento em ${title}${studying ? ' e estudando no momento.' : ''}`}
              tabIndex={0}
            >
              <div className="skills__label" style={{ background: color }}>{title}</div>
              <div className="skills__level-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
                <span style={{
                  backgroundColor: color,
                  width: `${percentage}%`
                }} />
              </div>
            </div>
          ))}

          <div className="skills__other-skills" role="list" aria-label="Lista de outras habilidades">
            {others.map(({ title, description }) => (
              <div className="skills__label" title={description} role="listitem" key={title}>
                {title}
              </div>
            ))}
          </div>
        </div>
      </center>
    </section>
  )
}

export default Skills