import React, { FunctionComponent, useEffect, useRef } from 'react'
import useReveal from '../ScrollRevealHook'
import { checkIsMobile, forEachWithInterval } from '../../Utils'
import './CreativeProcess.less'

const CreativeProcess: FunctionComponent = () => {
  const columnsRef = useRef<NodeListOf<HTMLElement>>()

  useEffect(() => {
    if (checkIsMobile() === true) return;

    columnsRef.current = document.querySelectorAll<HTMLLIElement>('#creative-process .list > li')
    columnsRef.current[1].style.boxShadow = 'none'
  }, [])

  const revealConfigs = {
    element: '#creative-process',
    viewFactor: 0.6
  }

  // Criar uma animação com as sombras dos elementos quando o componente aparecer na tela
  useReveal(revealConfigs, () => {
    if (checkIsMobile() === true) return;

    // Aplicar ou remover uma sombra no elemento
    function changeShadow(element: HTMLElement, whatToDo: 'add' | 'remove') {
      element.style.boxShadow = (whatToDo === 'remove' ? 'none' : '0 12px 30px rgba(0,0,0,.3)')
    }

    (async () => {
      await forEachWithInterval(columnsRef.current!, 500, (column) => {
        // Aplicar simmbra no elemento
        changeShadow(column, 'add')

        // Remover sombra do mesmo elemento após a transição terminar
        setTimeout(() => changeShadow(column, 'remove'), 500)
      })

      // Após a animação, aplicar uma sombra no elemento do meio
      columnsRef.current![1].style.transitionDuration = '1200ms'
      changeShadow(columnsRef.current![1], 'add')
    })()
  })

  return (
    <section className="creative-process" id="creative-process">
      <center>
        <h2 className="section__title">Processo criativo</h2>

        <ul className="list list--3-cols" aria-label="Meu processo criativo">
          <li>
            <div className="list__icon" style={{backgroundPosition: '-100px 0'}}></div>
            <div className="list__title">Planejamento</div>
            <p className="list__description">Assim como em qualquer projeto um bom planejamento evita uma grande quantidade de contratempos que venham ocorrer, então nesse ponto é definido com a equipe qual os objetivos do projeto, quais ferramentas serão usadas, em qual serviço será hospedado, entre outros.</p>
          </li>
          <li className="shadow">
            <div className="list__icon" style={{backgroundPosition: '1px 0'}}></div>
            <div className="list__title">Protótipo</div>
            <p className="list__description">Consiste em criar uma versão preliminar do site ou aplicativo com base na identidade visual da empresa. Nessa etapa não tem segredo, pego um lápis e papel para desenhar e posteriormente se necessário uso o Adobe Experience Design para criar uma versão testável.</p>
          </li>
          <li>
            <div className="list__icon" style={{backgroundPosition: '-50px 0'}}></div>
            <div className="list__title">Desenvolvimento</div>
            <p className="list__description">Após esses passos anteriores vem a parte mais legal, CODAR! <br/>Minhas ferramentas favoritas para trabalhar são o Visual Studio Code, o Chrome Dev Tools, o Git para o controle de versão e o bom e velho amigo do programador: a linha de comando.</p>
          </li>  
        </ul>
      </center>
    </section>
  )
}

export default CreativeProcess