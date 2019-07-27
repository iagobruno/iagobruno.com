import React, { FunctionComponent, useEffect, useRef } from 'react'
import useReveal from '../ScrollRevealHook'
import { checkIsMobile, forEachWithInterval } from '../../common/functions'
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

    // Aplicar ou remover uma sombra em um elemento
    function changeShadow(element: HTMLElement, whatToDo: 'add' | 'remove') {
      element.style.boxShadow = (whatToDo === 'remove' ? 'none' : '0 12px 30px rgba(0,0,0,.3)')
    }

    (async () => {
      await forEachWithInterval(columnsRef.current!, 500, (column) => {
        // Aplicar sombra no elemento
        changeShadow(column, 'add')

        // Remover sombra do mesmo elemento após a transição terminar
        setTimeout(() => changeShadow(column, 'remove'), 500)
      })

      // Após todas as animação, aplicar uma sombra no elemento do meio
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
            <p className="list__description">Assim como em qualquer projeto, um bom planejamento evita uma grande quantidade de contratempos que venham ocorrer, então, nesse ponto é definido com a equipe quais são os objetivos do projeto, metodologias e ferramentas que serão usadas, entre outros.</p>
          </li>
          <li className="shadow">
            <div className="list__icon" style={{backgroundPosition: '1px 0'}}></div>
            <div className="list__title">Protótipo</div>
            <p className="list__description">Consiste em criar uma versão preliminar do site ou aplicativo com base na identidade visual da empresa. Nessa etapa não tem segredo, pego um lápis e papel para desenhar e posteriormente se necessário uso o <a href="https://www.adobe.com/br/products/xd.html" target="_blank">Adobe Experience Design</a> para criar uma versão testável.</p>
          </li>
          <li>
            <div className="list__icon" style={{backgroundPosition: '-50px 0'}}></div>
            <div className="list__title">Desenvolvimento</div>
            <p className="list__description">Após os passos anteriores vem a parte mais legal: CODAR! <br/>Minhas ferramentas favoritas para trabalhar são o <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>, o <a href="https://developers.google.com/web/tools/chrome-devtools/" target="_blank">Chrome DevTools</a>, o <a href="https://pt.wikipedia.org/wiki/Git" target="_blank">Git</a> para o controle de versão e uma <a href="https://pt.wikipedia.org/wiki/Interface_de_linha_de_comandos" target="_blank">interface de linha de comando</a>.</p>
          </li>
        </ul>
      </center>
    </section>
  )
}

export default CreativeProcess
