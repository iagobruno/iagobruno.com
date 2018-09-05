import React, { Component } from 'react'
import Promise from './promisePolyfill'

const slides = [
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
const duration = 10000 // Time que cada slide fica exposto antes de ser trocado (em ms)
const fadeDuration = 1000 // Duração da transição em CSS do efeito "fade" do slide

export default class About extends Component {
  state = {
    current_slide: 0
  }

  componentDidMount() {
    this.timer = setInterval(() => this.nextSlide(), duration)

	  // Carregar as próximas imagens do slide
    Promise.all(
      slides.slice(1).map(item => this.loadImg(item.src))
	  )
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  nextSlide() {
    // Ocultar o slide
    this.slideEl.className = 'code-sample hide'

    // Esperar a animação de fade-out do slide anterior
    setTimeout(() => {
      this.setState((prevState) => {
        // Mudar para o próximo slide
        return {
          current_slide: (prevState.current_slide >= (slides.length - 1)) ? 0 : ++prevState.current_slide
        }
      })

      // Mostrar o slide
      setTimeout(() => this.slideEl.className = 'code-sample show', 100)
    }, fadeDuration)
  }
  
  loadImg(url) {
    return new Promise((resolve, reject) => {
      let img = new Image()
	  
      img.addEventListener('load', e => resolve(img))
      img.addEventListener('error', () => reject(new Error(`Failed to load image's URL: ${url}`)))

      img.src = url
    })
  }

  render() {
    // Pegar os atributos do slide atual
    let attrs = slides[this.state.current_slide]

    return (
      <section id="about">
        <center>
          <div className="code-sample-container">
            <img className="code-sample" ref={(node) => this.slideEl = node} {...attrs} />
          </div>
          <div>
            <p><b>Hello, World!</b></p>
            <p>Me chamo Iago, moro no Ceará, tenho 22 anos de idade e sou programador desde os 15. Sou apaixonado por códigos e aprendi tudo sozinho, movido pela curiosidade de saber como a web funcionava, desde então, venho estudando novas linguagens programação, conceituando e desenvolvendo websites, como o design do <a href="#work-tecbolt">TecBolt</a>, que construí em parceria com o fundador do mesmo.</p>
            <p>Possuo experiência vasta em HTML, CSS, JavaScript, PHP e estando ainda a aprender a dominar o desenvolvimento de aplicativos para celulares utilizando o React Native. <br/> Você pode conferir <a href="#skills">minhas outras habilidades</a> abaixo.</p>
          </div>
        </center>
      </section>
    )
  }
}
