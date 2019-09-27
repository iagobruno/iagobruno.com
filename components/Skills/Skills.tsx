import React, { FunctionComponent, useEffect, useRef } from 'react'
import useReveal from '../ScrollRevealHook'
import { sendLinkClickToGA, forEachWithInterval } from '../../common/functions'
import { SkillItem, OthersSkillsItem } from '../../common/types'
import './Skills.less'

const skills: Array<SkillItem> = [
  {
    title: "JavaScript/Node",
    percentage: 82,
    color: "#4caf50"
  },
  {
    title: "React",
    percentage: 80,
    color: "#2dd2ff",
    description: "Framework para criação de interfaces de usuário.",
    studying: true
  },
  {
    title: "TypeScript",
    percentage: 65,
    color: '#007ACC',
    description: "Linguagem que adiciona tipagem em códigos JavaScript.",
    studying: true
  },
  {
    title: "CSS",
    percentage: 90,
    color: "#7e57c2"
  },
  {
    title: "Photoshop",
    percentage: 36,
    color: "#2196f3"
  },
  {
    title: "Adobe XD",
    percentage: 50,
    color: "#FF26BE",
    description: "Ferramenta para criação de protótipos de experiência do usuário para aplicativos da Web e móveis."
  },
  {
    title: "Inglês",
    percentage: 32,
    color: "#607d8b",
    studying: true
  },
  {
    title: "SQL",
    percentage: 50,
    color: "#fdd835"
  }
]

const others: Array<OthersSkillsItem> = [
  { title: 'Jest / Mocha', description: 'Ferramentas de testes automatizados.' },
  { title: 'Gulp', description: 'Automatização de tarefas.' },
  { title: 'Git', description: 'Versionamento de código.' },
  { title: 'Bootstrap' },
  { title: 'Layout responsivo', description: 'Construção de interfaces que se adaptam a tela do usuário.' },
  { title: 'Mobile first', description: 'Desenvolvimento com dispositivos móveis em mente.' },
  { title: "PWA's", description: 'Progressive Web Apps.' },
  { title: "BEM", description: 'Conceito de organização para CSS.' },
]

const Skills: FunctionComponent = () => {
  const levelBarsRef = useRef<NodeListOf<HTMLElement>>()
  const levelsCache = useRef<string[]>()

  // Ocultar as porcentagens assim que o documento for carregado completamente
  useEffect(() => {
    levelBarsRef.current = document.querySelectorAll<HTMLSpanElement>('.skills__level-bar span')

    // Salvar a porcentagem dos níveis em um array e zerar a largura da barra
    levelsCache.current = Array.from(levelBarsRef.current).map(element => {
      const initialWidth = element.style.width!
      element.style.width = '0%'
      return initialWidth
    })
  }, [])

  const revealConfigs = {
    element: '#skills',
    viewFactor: 0.6
  }

  // Animar as barras de porcentagens em #skills quando o componente aparecer na tela
  useReveal(revealConfigs, () => {
    forEachWithInterval(levelBarsRef.current!, 40, (element, index) => {
      // Voltar a mostrar a porcentagem da barra salva anteriormente
      element.style.width = levelsCache.current![index]
    })
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

        <div className="skills__footer">
          Ver <a href="https://github.com/iagobruno?tab=stars" onClick={sendLinkClickToGA()}>meus favoritos no Github</a> é uma outra ótima forma de descobrir minhas habilidades.
        </div>
      </center>
    </section>
  )
}

export default Skills
