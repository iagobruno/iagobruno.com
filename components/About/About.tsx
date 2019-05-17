import React, { FunctionComponent } from 'react'
import SlideShow from './SlideShow'
import './About.less'

const slides: Array<SlideItemType> = [
  {
    src: '/static/images/code_react.jpg',
    alt: 'Exemplo de um componente do React'
  },
  {
    src: '/static/images/code_html.jpg',
    alt: 'Exemplo de um código HTML'
  },
  {
    src: '/static/images/code_nodejs.jpg',
    alt: 'Exemplo de um código JavaScript'
  }
]

const About: FunctionComponent = () => {
  function workTecboltClick(event: React.MouseEvent) {
    event.preventDefault()

    // Mover o scroll até a sessão #works
    window.location.hash = '#works'
  
    // Dar foco ao link do tecbolt
    document.getElementById('work-tecbolt')!.focus()
  }

  return (
    <section className="about" id="about">
      <center>
        <SlideShow
          slides={slides}
          duration={10000}
        />
        <div className="about__me">
          <p><b>Hello, World!</b></p>
          <p>Me chamo Iago, moro no Ceará, tenho 22 anos de idade e sou programador desde os 15. Sou apaixonado por códigos e aprendi tudo sozinho, movido pela curiosidade de saber como a web funcionava, desde então, venho estudando novas linguagens programação, conceituando e desenvolvendo websites, como o design do <a href="#work-tecbolt" onClick={workTecboltClick}>TecBolt</a>, que construí em parceria com o fundador do mesmo.</p>
          <p>Possuo experiência vasta em JavaScript, Node, HTML, CSS, PHP e estando ainda a aprender a dominar o desenvolvimento de aplicativos para celulares utilizando o React Native. <br/> Você pode conferir <a href="#skills">minhas outras habilidades</a> abaixo.</p>
        </div>
      </center>
    </section>
  );
}

export default About